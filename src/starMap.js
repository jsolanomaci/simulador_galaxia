import * as THREE from 'three';

export const STAR_MAP_STATES = Object.freeze({
  CLOSED: 'CLOSED',
  SOLAR_SYSTEM: 'SOLAR_SYSTEM',
  PLANET_ZOOM: 'PLANET_ZOOM',
  JUMP_CONFIRMED: 'JUMP_CONFIRMED',
});

const WORLD_ORBIT_REF = 230 * 157.5;
const SUN_CHART_RADIUS = 12.5;
const DEFAULT_PLANET_CHART_RADIUS = 4.2;
const GAS_GIANT_CHART_RADIUS = 6.0;
const DRAG_THRESHOLD_PX = 5;

function easeInOutCubic(u) {
  const t = Math.max(0, Math.min(1, u));
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Convierte un vector de posición orbital del sistema solar real a coordenadas del holograma 3D
 * manteniendo intactos el ángulo azimutal y la inclinación orbital del plano kepleriano.
 */
function worldOrbitToChartPos(worldVec, out = new THREE.Vector3()) {
  if (!worldVec) return out.set(0, 0, 0);
  const r = Math.hypot(worldVec.x || 0, worldVec.y || 0, worldVec.z || 0);
  if (r < 1e-4) return out.set(0, 0, 0);
  const rNorm = r / WORLD_ORBIT_REF;
  const chartR = 24 + Math.pow(Math.min(1.4, rNorm), 0.72) * 168;
  const scale = chartR / r;
  return out.set(worldVec.x * scale, worldVec.y * scale, worldVec.z * scale);
}

/**
 * Crea una textura procedural suave para planetas sin mapa (ej. gigante gaseoso P5) en navegadores.
 */
function createGasGiantTexture() {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext?.('2d');
  if (!ctx) return null;

  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  grad.addColorStop(0.0, '#133056');
  grad.addColorStop(0.16, '#27598d');
  grad.addColorStop(0.28, '#4f9cd9');
  grad.addColorStop(0.38, '#9fd8ff');
  grad.addColorStop(0.49, '#316aa6');
  grad.addColorStop(0.62, '#64b8f2');
  grad.addColorStop(0.74, '#244d80');
  grad.addColorStop(0.86, '#488cc8');
  grad.addColorStop(1.0, '#122949');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Bandas finas turbulentas
  for (let i = 0; i < 28; i++) {
    const y = (i / 28) * canvas.height;
    ctx.fillStyle = i % 2 === 0 ? 'rgba(180, 232, 255, 0.14)' : 'rgba(10, 28, 56, 0.16)';
    ctx.fillRect(0, y, canvas.width, 3 + (i % 4));
  }

  // Tormenta ciclónica azul cobalto
  ctx.fillStyle = 'rgba(155, 228, 255, 0.38)';
  ctx.beginPath();
  ctx.ellipse(canvas.width * 0.62, canvas.height * 0.58, 34, 14, 0, 0, Math.PI * 2);
  ctx.fill();

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

/**
 * Material Fresnel aditivo ligero para dar silueta atmosférica y holográfica a cada planeta 3D.
 */
function createFresnelHaloMaterial(hexColor, intensity = 0.72) {
  const color = new THREE.Color(hexColor || '#5ed4ff');
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: color },
      uIntensity: { value: intensity },
    },
    vertexShader: `
      varying vec3 vNormalW;
      varying vec3 vViewDir;
      void main() {
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vNormalW = normalize(normalMatrix * normal);
        vViewDir = normalize(-mvPos.xyz);
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uIntensity;
      varying vec3 vNormalW;
      varying vec3 vViewDir;
      void main() {
        float ndv = clamp(dot(normalize(vNormalW), normalize(vViewDir)), 0.0, 1.0);
        float rim = pow(clamp(1.0 - ndv, 0.0, 1.0), 2.6);
        gl_FragColor = vec4(uColor * (rim * uIntensity), clamp(rim * uIntensity, 0.0, 0.95));
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.FrontSide,
  });
}

function createHitProxyMaterial() {
  return new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: 0,
    depthWrite: false,
    colorWrite: false,
  });
}

/**
 * Mapa Estelar Holográfico 3D Interactivo en 2 Niveles (tecla M) usando Three.js dedicado:
 * - Nivel 1 (`SOLAR_SYSTEM`): escena 3D orbital en tiempo real con Sol luminoso, órbitas keplerianas inclinadas,
 *   planetas texturizados con giro e inclinación axial reales y marcador `[ TÚ ]`.
 * - Nivel 2 (`PLANET_ZOOM`): cámara orbital suave (~0.75 s) sobre el planeta seleccionado, globo 3D navegable
 *   con rotación por arrastre, pines esféricos de biomas/superficie, lunas y estación Crystal Palace.
 */
export class StarMapController {
  constructor({
    overlayEl,
    canvasEl,
    labelsEl,
    backBtnEl,
    closeBtnEl,
    levelTagEl,
    titleEl,
    dossierEl,
    dossierBadgeEl,
    dossierTitleEl,
    dossierDescEl,
    dossierTypeEl,
    dossierAltEl,
    dossierAtmoEl,
    dossierDistEl,
    jumpBtnEl,
    footerEl,
    sceneManager,
    controls,
    onConfirmJump,
    onStateChange,
    createRenderer,
  } = {}) {
    this.overlayEl = overlayEl || null;
    this.canvas = canvasEl || null;
    this.labelsEl =
      labelsEl || (typeof document !== 'undefined' ? document.getElementById('star-map-labels') : null);
    this.backBtnEl = backBtnEl || null;
    this.closeBtnEl = closeBtnEl || null;
    this.levelTagEl = levelTagEl || null;
    this.titleEl = titleEl || null;
    this.dossierEl = dossierEl || null;
    this.dossierBadgeEl = dossierBadgeEl || null;
    this.dossierTitleEl = dossierTitleEl || null;
    this.dossierDescEl = dossierDescEl || null;
    this.dossierTypeEl = dossierTypeEl || null;
    this.dossierAltEl = dossierAltEl || null;
    this.dossierAtmoEl = dossierAtmoEl || null;
    this.dossierDistEl = dossierDistEl || null;
    this.jumpBtnEl = jumpBtnEl || null;
    this.footerEl = footerEl || null;

    this.sceneManager = sceneManager;
    this.controls = controls;
    this.onConfirmJump = onConfirmJump || ((desc) => sceneManager?.navigateToTarget?.(desc));
    this.onStateChange = onStateChange || (() => {});
    this.createRenderer = createRenderer || null;

    this.state = STAR_MAP_STATES.CLOSED;
    this.selectedPlanetKey = null;
    this.selectedNode = null;
    this.hoveredNode = null;

    // Transición suave 3D entre Nivel 1 y Nivel 2 (~0.75 s)
    this.zoomProgress = 0.0;
    this.zoomTarget = 0.0;
    this.zoomDuration = 0.75;
    this.transitionElapsed = 0.75;
    this.transitionActive = false;
    this.transitionFromCamPos = new THREE.Vector3(0, 145, 195);
    this.transitionFromLookAt = new THREE.Vector3(0, 0, 0);
    this.lastTimeMs = 0;

    // Órbita de cámara 3D independiente para ambos niveles
    this.solarOrbit = { theta: 0.62, phi: 0.92, radius: 225 };
    this.level2Orbit = { theta: 0.65, phi: 1.15, radius: 24 };
    this.curCamPos = new THREE.Vector3(110, 145, 170);
    this.curLookAt = new THREE.Vector3(0, 0, 0);

    // Control de arrastre (> 5 px orbita en 3D sin disparar clic accidental)
    this.viewW = 1280;
    this.viewH = 720;
    this.dpr = 1;
    this.mouseX = -9999;
    this.mouseY = -9999;
    this.isPointerDown = false;
    this.downX = 0;
    this.downY = 0;
    this.lastPointerX = 0;
    this.lastPointerY = 0;
    this.dragDistance = 0;
    this._suppressNextClick = false;

    // Nodos interactivos proyectados en cada frame
    this.currentSolarNodes = [];
    this.currentLevel2Nodes = [];
    this.activeHitMeshes = [];

    // Objetos 3D dedicados (se construyen una vez bajo demanda)
    this.mapScene = null;
    this.mapCamera = null;
    this.renderer = null;
    this.raycaster = new THREE.Raycaster();
    this.planetRigs = new Map();
    this.sunRig = null;
    this.shipBeacon = null;
    this.l2RingsGroup = null;
    this.l2PinGroup = null;
    this.l2PinPool = [];
    this.l2OrbitRingPool = [];
    this.disposables = [];

    // Reutilización DOM de etiquetas proyectadas + SVG leader lines
    this.svgEl = null;
    this.labelEls = new Map();
    this.lineEls = new Map();
    this.tooltipEl = null;

    // Temporales para 0 asignaciones críticas en frame loop
    this._tmpVecA = new THREE.Vector3();
    this._tmpVecB = new THREE.Vector3();
    this._tmpVecC = new THREE.Vector3();
    this._tmpDesiredCam = new THREE.Vector3();
    this._tmpDesiredLook = new THREE.Vector3();
    this._boundHandlers = {};

    this._bindEvents();
  }

  _bindEvents() {
    if (this.backBtnEl) {
      this._boundHandlers.onBackClick = (e) => {
        e.stopPropagation();
        this.backToSolarSystem();
      };
      this.backBtnEl.addEventListener('click', this._boundHandlers.onBackClick);
    }
    if (this.closeBtnEl) {
      this._boundHandlers.onCloseClick = (e) => {
        e.stopPropagation();
        this.close();
      };
      this.closeBtnEl.addEventListener('click', this._boundHandlers.onCloseClick);
    }
    if (this.jumpBtnEl) {
      this._boundHandlers.onJumpClick = (e) => {
        e.stopPropagation();
        this.confirmJump();
      };
      this.jumpBtnEl.addEventListener('click', this._boundHandlers.onJumpClick);
    }

    if (this.canvas) {
      this._boundHandlers.onMouseDown = (e) => {
        if (e.button !== 0) return;
        const rect = this.canvas.getBoundingClientRect();
        this.handlePointerDown(e.clientX - rect.left, e.clientY - rect.top, e.button);
      };
      this._boundHandlers.onMouseMove = (e) => {
        if (!this.isOpen()) return;
        const rect = this.canvas.getBoundingClientRect();
        this.handlePointerMove(e.clientX - rect.left, e.clientY - rect.top);
      };
      this._boundHandlers.onMouseUp = (e) => {
        if (!this.isPointerDown) return;
        const rect = this.canvas.getBoundingClientRect();
        this.handlePointerUp(e.clientX - rect.left, e.clientY - rect.top, e.button);
      };
      this._boundHandlers.onClick = (e) => {
        if (this._suppressNextClick) {
          this._suppressNextClick = false;
          this.dragDistance = 0;
          return;
        }
        const rect = this.canvas.getBoundingClientRect();
        this.handleClick(e.clientX - rect.left, e.clientY - rect.top);
      };
      this._boundHandlers.onDblClick = (e) => {
        if (this.dragDistance > DRAG_THRESHOLD_PX) return;
        const rect = this.canvas.getBoundingClientRect();
        this.handleDoubleClick(e.clientX - rect.left, e.clientY - rect.top);
      };
      this._boundHandlers.onWheel = (e) => {
        if (!this.isOpen()) return;
        e.preventDefault();
        this.handleWheel(e.deltaY);
      };
      this._boundHandlers.onContextMenu = (e) => {
        e.preventDefault();
        if (this.state === STAR_MAP_STATES.PLANET_ZOOM) {
          this.backToSolarSystem();
        }
      };

      this.canvas.addEventListener('mousedown', this._boundHandlers.onMouseDown);
      this.canvas.addEventListener('click', this._boundHandlers.onClick);
      this.canvas.addEventListener('dblclick', this._boundHandlers.onDblClick);
      this.canvas.addEventListener('wheel', this._boundHandlers.onWheel, { passive: false });
      this.canvas.addEventListener('contextmenu', this._boundHandlers.onContextMenu);
    }

    if (typeof window !== 'undefined') {
      this._boundHandlers.onResize = () => this.resize();
      this._boundHandlers.onKeyDown = (e) => this._onKeyDown(e);
      if (this._boundHandlers.onMouseMove) {
        window.addEventListener('mousemove', this._boundHandlers.onMouseMove);
      }
      if (this._boundHandlers.onMouseUp) {
        window.addEventListener('mouseup', this._boundHandlers.onMouseUp);
      }
      window.addEventListener('resize', this._boundHandlers.onResize);
      window.addEventListener('keydown', this._boundHandlers.onKeyDown);
    }
  }

  _onKeyDown(e) {
    if (e.code === 'KeyM' && !e.repeat) {
      e.preventDefault();
      if (this.isOpen()) {
        this.close();
      } else {
        this.open();
      }
      return;
    }

    if (!this.isOpen()) return;

    if (e.code === 'Escape') {
      e.preventDefault();
      this.close();
    } else if (e.code === 'Backspace' && this.state === STAR_MAP_STATES.PLANET_ZOOM) {
      e.preventDefault();
      this.backToSolarSystem();
    } else if (e.code === 'Enter' && this.state === STAR_MAP_STATES.PLANET_ZOOM && this.selectedNode) {
      e.preventDefault();
      this.confirmJump();
    }
  }

  isOpen() {
    return this.state !== STAR_MAP_STATES.CLOSED;
  }

  _trackDisposable(obj) {
    if (obj) this.disposables.push(obj);
    return obj;
  }

  _ensureScene3D(stateSnapshot) {
    if (!this.mapCamera) {
      const aspect = Math.max(0.5, (this.viewW || 1280) / Math.max(1, this.viewH || 720));
      this.mapCamera = new THREE.PerspectiveCamera(45, aspect, 0.1, 10000);
      this._syncCameraFromSpherical(this.curCamPos, this.curLookAt, this.solarOrbit, new THREE.Vector3(0, 0, 0));
      this.mapCamera.position.copy(this.curCamPos);
      this.mapCamera.lookAt(this.curLookAt);
    }

    if (!this.mapScene) {
      this.mapScene = new THREE.Scene();
      this.mapScene.fog = new THREE.FogExp2(0x020612, 0.00055);
      this._buildStaticBackdrop();
    }

    if (!this.renderer && this.canvas) {
      if (typeof this.createRenderer === 'function') {
        this.renderer = this.createRenderer(this.canvas);
      } else {
        this.renderer = new THREE.WebGLRenderer({
          canvas: this.canvas,
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        });
      }
      if (this.renderer) {
        this.renderer.setPixelRatio?.(Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2));
        this.renderer.setSize?.(this.viewW, this.viewH, false);
        this.renderer.setClearColor?.(0x020612, 0.94);
        if ('toneMapping' in this.renderer) {
          this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
          this.renderer.toneMappingExposure = 1.15;
        }
      }
    }

    if (stateSnapshot && !this.sunRig) {
      this._buildSunAndPlanets(stateSnapshot);
    }
  }

  _buildStaticBackdrop() {
    const scene = this.mapScene;
    scene.add(new THREE.AmbientLight(0x284166, 0.52));

    const sunLight = new THREE.PointLight(0xfff1cc, 3.4, 1500, 0.28);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x49c6ff, 0.36);
    rimLight.position.set(-180, 140, -160);
    scene.add(rimLight);

    // Campo estelar 3D profundo
    const starCount = 1100;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const u = Math.sin(i * 12.9898) * 43758.5453;
      const frac1 = u - Math.floor(u);
      const v = Math.sin(i * 78.233) * 28411.172;
      const frac2 = v - Math.floor(v);
      const theta = frac1 * Math.PI * 2;
      const phi = Math.acos(2 * frac2 - 1);
      const r = 1100 + (i % 7) * 140;
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.cos(phi);
      starPositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

      const tint = 0.72 + 0.28 * ((i % 5) / 4);
      starColors[i * 3] = tint * (i % 3 === 0 ? 1.0 : 0.75);
      starColors[i * 3 + 1] = tint * 0.88;
      starColors[i * 3 + 2] = tint;
    }
    const starGeo = this._trackDisposable(new THREE.BufferGeometry());
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    const starMat = this._trackDisposable(
      new THREE.PointsMaterial({
        size: 3.2,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
      })
    );
    scene.add(new THREE.Points(starGeo, starMat));

    // Rejilla polar astrométrica holográfica
    const gridGroup = new THREE.Group();
    const ringRadii = [34, 66, 98, 132, 168, 202];
    const ringMat = this._trackDisposable(
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.14, depthWrite: false })
    );
    for (const r of ringRadii) {
      const pts = [];
      const segs = 128;
      for (let i = 0; i < segs; i++) {
        const a = (i / segs) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * r, -0.4, Math.sin(a) * r));
      }
      const g = this._trackDisposable(new THREE.BufferGeometry().setFromPoints(pts));
      gridGroup.add(new THREE.LineLoop(g, ringMat));
    }

    const spokeMat = this._trackDisposable(
      new THREE.LineBasicMaterial({ color: 0xffc66e, transparent: true, opacity: 0.11, depthWrite: false })
    );
    for (let s = 0; s < 12; s++) {
      const a = (s / 12) * Math.PI * 2;
      const g = this._trackDisposable(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(Math.cos(a) * 20, -0.4, Math.sin(a) * 20),
          new THREE.Vector3(Math.cos(a) * 212, -0.4, Math.sin(a) * 212),
        ])
      );
      gridGroup.add(new THREE.Line(g, spokeMat));
    }
    scene.add(gridGroup);

    // Marcador holográfico 3D de posición actual de la nave [ TÚ ]
    const beaconGroup = new THREE.Group();
    const diamondGeo = this._trackDisposable(new THREE.OctahedronGeometry(2.1, 0));
    const diamondMat = this._trackDisposable(
      new THREE.MeshBasicMaterial({ color: 0xffae42, wireframe: false, transparent: true, opacity: 0.95 })
    );
    const diamondMesh = new THREE.Mesh(diamondGeo, diamondMat);
    beaconGroup.add(diamondMesh);

    const pulseGeo = this._trackDisposable(new THREE.RingGeometry(2.6, 3.2, 32));
    const pulseMat = this._trackDisposable(
      new THREE.MeshBasicMaterial({
        color: 0xffcb70,
        transparent: true,
        opacity: 0.72,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    );
    const pulseRing = new THREE.Mesh(pulseGeo, pulseMat);
    pulseRing.rotation.x = Math.PI * 0.5;
    beaconGroup.add(pulseRing);
    scene.add(beaconGroup);
    this.shipBeacon = { group: beaconGroup, diamond: diamondMesh, ring: pulseRing };

    // Contenedores para anillos y pines locales de Nivel 2
    this.l2RingsGroup = new THREE.Group();
    this.l2RingsGroup.visible = false;
    scene.add(this.l2RingsGroup);

    this.l2PinGroup = new THREE.Group();
    this.l2PinGroup.visible = false;
    scene.add(this.l2PinGroup);
  }

  _buildSunAndPlanets(stateSnapshot) {
    const scene = this.mapScene;

    // Sol central 3D + corona + hit-proxy
    const sunGroup = new THREE.Group();
    const sunGeo = this._trackDisposable(new THREE.SphereGeometry(SUN_CHART_RADIUS, 40, 28));
    const sunMat = this._trackDisposable(
      new THREE.MeshBasicMaterial({
        color: 0xffd66e,
      })
    );
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunGroup.add(sunMesh);

    const coronaGeo = this._trackDisposable(new THREE.SphereGeometry(SUN_CHART_RADIUS * 1.24, 32, 24));
    const coronaMat = this._trackDisposable(createFresnelHaloMaterial('#ff9f2e', 1.15));
    sunGroup.add(new THREE.Mesh(coronaGeo, coronaMat));

    const outerGlowGeo = this._trackDisposable(new THREE.SphereGeometry(SUN_CHART_RADIUS * 1.55, 24, 18));
    const outerGlowMat = this._trackDisposable(
      new THREE.MeshBasicMaterial({
        color: 0xffaa30,
        transparent: true,
        opacity: 0.14,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      })
    );
    sunGroup.add(new THREE.Mesh(outerGlowGeo, outerGlowMat));

    const sunHitGeo = this._trackDisposable(new THREE.SphereGeometry(SUN_CHART_RADIUS * 1.38, 16, 12));
    const sunHitMesh = new THREE.Mesh(sunHitGeo, this._trackDisposable(createHitProxyMaterial()));
    sunGroup.add(sunHitMesh);

    scene.add(sunGroup);
    this.sunRig = { group: sunGroup, mesh: sunMesh, hitMesh: sunHitMesh };

    const sphereGeo = this._trackDisposable(new THREE.SphereGeometry(1, 48, 32));
    const cloudGeo = this._trackDisposable(new THREE.SphereGeometry(1.018, 36, 24));
    const haloGeo = this._trackDisposable(new THREE.SphereGeometry(1.075, 36, 24));
    const moonGeo = this._trackDisposable(new THREE.SphereGeometry(1, 20, 14));
    const hitSphereGeo = this._trackDisposable(new THREE.SphereGeometry(1, 14, 10));
    const hitProxyMat = this._trackDisposable(createHitProxyMaterial());

    const gasGiantTex = createGasGiantTexture();
    if (gasGiantTex) this._trackDisposable(gasGiantTex);

    for (const p of stateSnapshot.planets) {
      const pChartR = p.key === 'p5' ? GAS_GIANT_CHART_RADIUS : DEFAULT_PLANET_CHART_RADIUS;
      const ecc = p.eccentricity || 0.04;

      // 1. Traza orbital 3D kepleriana inclinada exactamente igual que el sistema real
      const orbitPts = [];
      const segs = 144;
      const basePosWorld = new THREE.Vector3();
      for (let i = 0; i < segs; i++) {
        const theta = (i / segs) * Math.PI * 2;
        const rLocal = (p.semiMajorAxis * (1 - ecc * ecc)) / (1 + ecc * Math.cos(theta));
        const rWorld = rLocal * 157.5;
        basePosWorld.set(Math.cos(theta) * rWorld, 0, Math.sin(theta) * rWorld);
        if (p.orbitalPlaneQuat) {
          basePosWorld.applyQuaternion(p.orbitalPlaneQuat);
        }
        orbitPts.push(worldOrbitToChartPos(basePosWorld));
      }
      const orbitGeo = this._trackDisposable(new THREE.BufferGeometry().setFromPoints(orbitPts));
      const orbitMat = this._trackDisposable(
        new THREE.LineBasicMaterial({
          color: new THREE.Color(p.color),
          transparent: true,
          opacity: 0.42,
          depthWrite: false,
        })
      );
      const orbitLine = new THREE.LineLoop(orbitGeo, orbitMat);
      scene.add(orbitLine);

      // 2. Grupo del planeta (en su posición orbital 3D)
      const rootGroup = new THREE.Group();
      const spinGroup = new THREE.Group();
      rootGroup.add(spinGroup);

      const hasTexture = Boolean(p.orbitalMap);
      const pMat = this._trackDisposable(
        new THREE.MeshStandardMaterial({
          color: p.key === 'p5' ? 0xffffff : hasTexture ? 0xffffff : new THREE.Color(p.color),
          map: p.orbitalMap || (p.key === 'p5' ? gasGiantTex : null),
          emissive: p.orbitalEmissiveMap ? new THREE.Color(0xffffff) : new THREE.Color(p.color),
          emissiveMap: p.orbitalEmissiveMap || null,
          emissiveIntensity: p.orbitalEmissiveMap ? 1.15 : 0.14,
          roughness: p.key === 'p5' ? 0.65 : 0.72,
          metalness: 0.08,
        })
      );

      const globeMesh = new THREE.Mesh(sphereGeo, pMat);
      globeMesh.scale.setScalar(pChartR);
      spinGroup.add(globeMesh);

      // Nubes suaves sobre planetas con atmósfera visible
      const cloudMat = this._trackDisposable(
        new THREE.MeshStandardMaterial({
          map: p.cloudMap || null,
          transparent: true,
          opacity: p.cloudMap ? 0.36 : 0.0,
          depthWrite: false,
          roughness: 0.9,
        })
      );
      const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
      cloudMesh.scale.setScalar(pChartR);
      cloudMesh.visible = Boolean(p.cloudMap);
      spinGroup.add(cloudMesh);

      // Halo atmosférico Fresnel
      const haloMat = this._trackDisposable(createFresnelHaloMaterial(p.color, 0.76));
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      haloMesh.scale.setScalar(pChartR);
      spinGroup.add(haloMesh);

      // Anillos planetarios 3D para P5 (gigante gaseoso)
      if (p.key === 'p5') {
        const ringGeo = this._trackDisposable(new THREE.RingGeometry(1.38 * pChartR, 2.36 * pChartR, 84));
        const ringMat = this._trackDisposable(
          new THREE.MeshBasicMaterial({
            color: 0x7fd8ff,
            transparent: true,
            opacity: 0.38,
            side: THREE.DoubleSide,
            depthWrite: false,
          })
        );
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI * 0.44;
        ringMesh.rotation.y = 0.22;
        spinGroup.add(ringMesh);

        const innerRingGeo = this._trackDisposable(new THREE.RingGeometry(1.56 * pChartR, 1.88 * pChartR, 72));
        const innerRingMat = this._trackDisposable(
          new THREE.MeshBasicMaterial({
            color: 0xc2ecff,
            transparent: true,
            opacity: 0.26,
            side: THREE.DoubleSide,
            depthWrite: false,
          })
        );
        const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
        innerRing.rotation.copy(ringMesh.rotation);
        spinGroup.add(innerRing);
      }

      // Hit-proxy para selección fiable en Nivel 1
      const l1HitMesh = new THREE.Mesh(hitSphereGeo, hitProxyMat);
      l1HitMesh.scale.setScalar(pChartR * 1.55);
      rootGroup.add(l1HitMesh);

      // Anillo táctico de selección en Nivel 1 alrededor del planeta
      const selectRingGeo = this._trackDisposable(new THREE.RingGeometry(pChartR * 1.48, pChartR * 1.66, 48));
      const selectRingMat = this._trackDisposable(
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(p.color),
          transparent: true,
          opacity: 0.75,
          side: THREE.DoubleSide,
          depthWrite: false,
        })
      );
      const selectRingMesh = new THREE.Mesh(selectRingGeo, selectRingMat);
      selectRingMesh.rotation.x = Math.PI * 0.5;
      selectRingMesh.visible = false;
      rootGroup.add(selectRingMesh);

      // Lunas 3D locales alrededor del planeta
      const moonRigs = p.moons.map((m, idx) => {
        const moonRadiusChart = Math.max(0.55, Math.min(1.15, (m.moonRadius / Math.max(1, p.worldRadius)) * pChartR * 2.1));
        const moonGroup = new THREE.Group();
        const moonMat = this._trackDisposable(
          new THREE.MeshStandardMaterial({
            color: 0xc8deff,
            emissive: 0x3b6091,
            emissiveIntensity: 0.28,
            roughness: 0.85,
          })
        );
        const mMesh = new THREE.Mesh(moonGeo, moonMat);
        mMesh.scale.setScalar(moonRadiusChart);
        moonGroup.add(mMesh);

        const mHitMesh = new THREE.Mesh(hitSphereGeo, hitProxyMat);
        mHitMesh.scale.setScalar(Math.max(1.5, moonRadiusChart * 2.2));
        moonGroup.add(mHitMesh);

        rootGroup.add(moonGroup);
        return {
          index: idx,
          name: m.name,
          group: moonGroup,
          mesh: mMesh,
          hitMesh: mHitMesh,
          orbitChartR: pChartR * (1.76 + idx * 0.46),
        };
      });

      // Estación 3D Crystal Palace si corresponde a P2
      let stationRig = null;
      if (p.hasCrystalPalace) {
        stationRig = this._buildCrystalPalace3DRig(pChartR, hitSphereGeo, hitProxyMat);
        rootGroup.add(stationRig.group);
      }

      scene.add(rootGroup);
      this.planetRigs.set(p.key, {
        key: p.key,
        pChartR,
        orbitLine,
        orbitMat,
        rootGroup,
        spinGroup,
        globeMesh,
        globeMat: pMat,
        cloudMesh,
        cloudMat,
        haloMat,
        l1HitMesh,
        selectRingMesh,
        moonRigs,
        stationRig,
        lastOrbitalMap: p.orbitalMap || null,
        lastEmissiveMap: p.orbitalEmissiveMap || null,
        lastCloudMap: p.cloudMap || null,
      });
    }
  }

  _buildCrystalPalace3DRig(pChartR, hitSphereGeo, hitProxyMat) {
    const group = new THREE.Group();
    const ringGeo = this._trackDisposable(new THREE.TorusGeometry(0.95, 0.14, 10, 28));
    const metalMat = this._trackDisposable(
      new THREE.MeshStandardMaterial({
        color: 0xffd284,
        emissive: 0xff9b28,
        emissiveIntensity: 0.72,
        metalness: 0.6,
        roughness: 0.25,
      })
    );
    const outerTorus = new THREE.Mesh(ringGeo, metalMat);
    outerTorus.rotation.x = Math.PI * 0.5;
    group.add(outerTorus);

    const coreGeo = this._trackDisposable(new THREE.OctahedronGeometry(0.45, 0));
    const coreMat = this._trackDisposable(
      new THREE.MeshBasicMaterial({ color: 0xffe4b3 })
    );
    group.add(new THREE.Mesh(coreGeo, coreMat));

    const spokeGeo = this._trackDisposable(new THREE.CylinderGeometry(0.06, 0.06, 1.9, 6));
    const spoke1 = new THREE.Mesh(spokeGeo, metalMat);
    spoke1.rotation.z = Math.PI * 0.5;
    const spoke2 = new THREE.Mesh(spokeGeo, metalMat);
    spoke2.rotation.x = Math.PI * 0.5;
    group.add(spoke1, spoke2);

    const hitMesh = new THREE.Mesh(hitSphereGeo, hitProxyMat);
    hitMesh.scale.setScalar(1.9);
    group.add(hitMesh);

    return {
      group,
      hitMesh,
      orbitChartR: pChartR * 1.96,
    };
  }

  resize() {
    if (!this.canvas) return;
    const w = (typeof window !== 'undefined' && window.innerWidth) || this.viewW || 1280;
    const h = (typeof window !== 'undefined' && window.innerHeight) || this.viewH || 720;
    this.dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2);
    this.viewW = Math.max(1, w);
    this.viewH = Math.max(1, h);
    this.canvas.width = Math.round(this.viewW * this.dpr);
    this.canvas.height = Math.round(this.viewH * this.dpr);

    if (this.mapCamera) {
      this.mapCamera.aspect = this.viewW / Math.max(1, this.viewH);
      this.mapCamera.updateProjectionMatrix();
    }
    if (this.renderer) {
      this.renderer.setPixelRatio?.(this.dpr);
      this.renderer.setSize?.(this.viewW, this.viewH, false);
    }
  }

  open() {
    this.resize();
    if (typeof document !== 'undefined' && document.pointerLockElement && document.exitPointerLock) {
      document.exitPointerLock();
    }
    if (this.controls?.setEnabled) {
      this.controls.setEnabled(false);
    } else if (this.controls) {
      this.controls.enabled = false;
    }

    const snapshot = this.sceneManager?.getStarChartState?.() || null;
    this._ensureScene3D(snapshot);

    this.state = STAR_MAP_STATES.SOLAR_SYSTEM;
    this.selectedPlanetKey = null;
    this.selectedNode = null;
    this.hoveredNode = null;
    this.zoomProgress = 0.0;
    this.zoomTarget = 0.0;
    this.transitionActive = false;
    this.transitionElapsed = this.zoomDuration;
    this.lastTimeMs = typeof performance !== 'undefined' ? performance.now() : 0;

    if (snapshot) {
      this._syncScenePositions(snapshot, this.lastTimeMs * 0.001);
      this.currentSolarNodes = this._buildSolarNodes3D(snapshot);
      this._updateCamera(0.016);
      this._updateLabelsAndLeaderLines(snapshot);
    }

    if (this.overlayEl) {
      this.overlayEl.classList.remove('hidden');
    }
    this._syncHeaderAndDossier();
    this.onStateChange(this.state);
  }

  close() {
    if (this.state === STAR_MAP_STATES.CLOSED) return;
    this.state = STAR_MAP_STATES.CLOSED;
    this.hoveredNode = null;
    this.isPointerDown = false;
    this._suppressNextClick = false;
    this.canvas?.classList?.remove('dragging');
    this.canvas?.classList?.remove('hovering');

    this._clearLabelDOM();
    if (this.renderer?.renderLists?.dispose) {
      this.renderer.renderLists.dispose();
    }

    if (this.overlayEl) {
      this.overlayEl.classList.add('hidden');
    }
    if (this.controls?.setEnabled) {
      this.controls.setEnabled(true);
    } else if (this.controls) {
      this.controls.enabled = true;
    }
    this.onStateChange(this.state);
  }

  /**
   * Inicia una interpolación suave 3D (~0.75 s) hacia un planeta en Nivel 2 sin mover la nave física.
   */
  selectPlanetForZoom(planetKey) {
    if (!planetKey) return;
    const stateSnapshot = this.sceneManager?.getStarChartState?.();
    this._ensureScene3D(stateSnapshot);

    this.selectedPlanetKey = planetKey;
    this.state = STAR_MAP_STATES.PLANET_ZOOM;
    this.zoomTarget = 1.0;
    this.hoveredNode = null;

    if (this.mapCamera) {
      this.transitionFromCamPos.copy(this.mapCamera.position);
      this.transitionFromLookAt.copy(this.curLookAt);
      this.transitionElapsed = 0;
      this.transitionActive = true;
    }

    const pRig = this.planetRigs.get(planetKey);
    const pChartR = planetKey === 'sun' ? SUN_CHART_RADIUS : pRig?.pChartR || DEFAULT_PLANET_CHART_RADIUS;
    this.level2Orbit.radius = planetKey === 'sun' ? 46 : pChartR * 4.4;
    this.level2Orbit.phi = 1.12;
    this.level2Orbit.theta = 0.58;

    if (stateSnapshot) {
      this._syncScenePositions(stateSnapshot, 0);
      if (this.l2RingsGroup) this.l2RingsGroup.visible = true;
      if (this.l2PinGroup) this.l2PinGroup.visible = true;
      this.currentLevel2Nodes = this._buildLevel2Nodes3D(stateSnapshot, planetKey);
      this.selectedNode = this.currentLevel2Nodes[0] || null;
      this._updateLabelsAndLeaderLines(stateSnapshot);
    } else {
      this.currentLevel2Nodes = [];
      this.selectedNode = null;
    }

    this._syncHeaderAndDossier();
    this.onStateChange(this.state);
  }

  backToSolarSystem() {
    if (this.state !== STAR_MAP_STATES.PLANET_ZOOM) return;
    this.state = STAR_MAP_STATES.SOLAR_SYSTEM;
    this.zoomTarget = 0.0;
    this.selectedNode = null;
    this.hoveredNode = null;
    if (this.l2RingsGroup) this.l2RingsGroup.visible = false;
    if (this.l2PinGroup) this.l2PinGroup.visible = false;

    if (this.mapCamera) {
      this.transitionFromCamPos.copy(this.mapCamera.position);
      this.transitionFromLookAt.copy(this.curLookAt);
      this.transitionElapsed = 0;
      this.transitionActive = true;
    }

    this._syncHeaderAndDossier();
    this.onStateChange(this.state);
  }

  selectNodeById(nodeId) {
    const node = this.currentLevel2Nodes.find((n) => n.id === nodeId);
    if (!node) return null;
    this.selectedNode = node;
    this._syncHeaderAndDossier();
    return node;
  }

  confirmJump() {
    if (this.state !== STAR_MAP_STATES.PLANET_ZOOM || !this.selectedNode) return null;
    const descriptor = this.selectedNode.descriptor;
    this.state = STAR_MAP_STATES.JUMP_CONFIRMED;
    this.onStateChange(this.state, descriptor);
    this.close();
    this.onConfirmJump(descriptor);
    return descriptor;
  }

  getVisibleNodes() {
    return this.state === STAR_MAP_STATES.PLANET_ZOOM
      ? this.currentLevel2Nodes
      : this.currentSolarNodes;
  }

  handlePointerDown(x, y, button = 0) {
    if (button !== 0) return;
    this.isPointerDown = true;
    this.downX = x;
    this.downY = y;
    this.lastPointerX = x;
    this.lastPointerY = y;
    this.dragDistance = 0;
    this._suppressNextClick = false;
  }

  handlePointerMove(x, y) {
    this.mouseX = x;
    this.mouseY = y;

    if (this.isPointerDown) {
      const dx = x - this.lastPointerX;
      const dy = y - this.lastPointerY;
      this.lastPointerX = x;
      this.lastPointerY = y;
      this.dragDistance = Math.hypot(x - this.downX, y - this.downY);

      if (this.dragDistance > DRAG_THRESHOLD_PX) {
        this._suppressNextClick = true;
        this.canvas?.classList?.add('dragging');
        this.hoveredNode = null;
        if (this.state === STAR_MAP_STATES.PLANET_ZOOM) {
          this.level2Orbit.theta -= dx * 0.0072;
          this.level2Orbit.phi = THREE.MathUtils.clamp(this.level2Orbit.phi - dy * 0.0062, 0.16, 2.94);
        } else {
          this.solarOrbit.theta -= dx * 0.0065;
          this.solarOrbit.phi = THREE.MathUtils.clamp(this.solarOrbit.phi - dy * 0.0055, 0.14, 1.48);
        }
        return;
      }
    }

    const hit = this._pickNodeAt(x, y);
    this.hoveredNode = hit;
    this.canvas?.classList?.toggle('hovering', Boolean(hit));
  }

  handlePointerUp(x, y, button = 0) {
    if (button !== 0) return;
    this.isPointerDown = false;
    this.canvas?.classList?.remove('dragging');
    this.dragDistance = Math.hypot(x - this.downX, y - this.downY);
  }

  handleWheel(deltaY) {
    const factor = 1 + Math.max(-0.35, Math.min(0.35, deltaY * 0.0011));
    if (this.state === STAR_MAP_STATES.PLANET_ZOOM) {
      const pRig = this.planetRigs.get(this.selectedPlanetKey);
      const minR = this.selectedPlanetKey === 'sun' ? 22 : (pRig?.pChartR || 4.2) * 2.1;
      const maxR = this.selectedPlanetKey === 'sun' ? 120 : (pRig?.pChartR || 4.2) * 14;
      this.level2Orbit.radius = THREE.MathUtils.clamp(this.level2Orbit.radius * factor, minR, maxR);
    } else {
      this.solarOrbit.radius = THREE.MathUtils.clamp(this.solarOrbit.radius * factor, 68, 430);
    }
  }

  handleClick(x, y) {
    this.mouseX = x;
    this.mouseY = y;
    const hit = this._pickNodeAt(x, y);
    if (!hit) return;

    if (this.state === STAR_MAP_STATES.SOLAR_SYSTEM) {
      this.selectPlanetForZoom(hit.planetKey);
    } else if (this.state === STAR_MAP_STATES.PLANET_ZOOM) {
      this.selectedNode = hit;
      this._syncHeaderAndDossier();
    }
  }

  handleDoubleClick(x, y) {
    if (this.state !== STAR_MAP_STATES.PLANET_ZOOM) return;
    const hit = this._pickNodeAt(x, y);
    if (hit) {
      this.selectedNode = hit;
      this._syncHeaderAndDossier();
      this.confirmJump();
    }
  }

  _pickNodeAt(x, y) {
    if (!this.mapScene || !this.mapCamera) return null;
    this.mapScene.updateMatrixWorld(true);
    this.mapCamera.updateMatrixWorld();

    const ndcX = (x / Math.max(1, this.viewW)) * 2 - 1;
    const ndcY = -(y / Math.max(1, this.viewH)) * 2 + 1;
    this.raycaster.setFromCamera({ x: ndcX, y: ndcY }, this.mapCamera);

    const nodes = this.getVisibleNodes();
    const candidates = [];
    for (const node of nodes) {
      if (node.occluded || !node.hitMesh) continue;
      node.hitMesh.userData.starNode = node;
      candidates.push(node.hitMesh);
    }

    const hits = this.raycaster.intersectObjects(candidates, false);
    if (hits.length > 0) {
      return hits[0].object.userData.starNode || null;
    }
    return null;
  }

  _syncHeaderAndDossier() {
    const isL2 = this.state === STAR_MAP_STATES.PLANET_ZOOM;
    if (this.backBtnEl) {
      this.backBtnEl.classList.toggle('hidden', !isL2);
    }
    if (this.levelTagEl) {
      this.levelTagEl.textContent = isL2
        ? 'SUB-MAPA PLANETARIO 3D // NIVEL 2'
        : 'CARTOGRAFÍA ESTELAR 3D // NIVEL 1';
    }
    if (this.titleEl) {
      if (isL2 && this.selectedPlanetKey) {
        const snap = this.sceneManager?.getStarChartState?.();
        const p = snap?.planets?.find((it) => it.key === this.selectedPlanetKey);
        this.titleEl.textContent =
          this.selectedPlanetKey === 'sun'
            ? 'SOL CENTRAL // ESTRELLA TIPO G'
            : `${p?.code || ''} · ${p?.shortName || this.selectedPlanetKey.toUpperCase()}`;
      } else {
        this.titleEl.textContent = 'SISTEMA SOLAR CENTRAL';
      }
    }

    if (this.footerEl) {
      this.footerEl.textContent = isL2
        ? 'Arrastra para orbitar el planeta en 3D · Rueda para zoom · Clic en nodo · Doble clic o Enter para saltar · Backspace volver'
        : 'Arrastra para orbitar en 3D · Rueda para zoom · Clic en un planeta para inspeccionarlo antes de saltar · [M] / [ESC] cerrar';
    }

    if (!this.dossierEl) return;
    if (!isL2 || !this.selectedNode) {
      this.dossierEl.classList.add('hidden');
      return;
    }

    const n = this.selectedNode;
    this.dossierEl.classList.remove('hidden');
    if (this.dossierBadgeEl) this.dossierBadgeEl.textContent = n.badge || 'NODO TÁCTICO';
    if (this.dossierTitleEl) this.dossierTitleEl.textContent = n.title || n.label;
    if (this.dossierDescEl) this.dossierDescEl.textContent = n.description || '';
    if (this.dossierTypeEl) this.dossierTypeEl.textContent = n.destTypeLabel || 'Órbita';
    if (this.dossierAltEl) this.dossierAltEl.textContent = n.insertionAlt || '--';
    if (this.dossierAtmoEl) this.dossierAtmoEl.textContent = n.atmoGravity || '--';
    if (this.dossierDistEl) this.dossierDistEl.textContent = n.distText || '--';
  }

  _syncCameraFromSpherical(outPos, lookAt, orbit, center) {
    outPos.set(
      center.x + orbit.radius * Math.sin(orbit.phi) * Math.cos(orbit.theta),
      center.y + orbit.radius * Math.cos(orbit.phi),
      center.z + orbit.radius * Math.sin(orbit.phi) * Math.sin(orbit.theta)
    );
    lookAt.copy(center);
  }

  _getShipChartPos(state) {
    let nearestPlanet = null;
    let nearestDist = Infinity;
    for (const p of state.planets) {
      const d = state.shipPos.distanceTo(p.worldPos);
      if (d < nearestDist) {
        nearestDist = d;
        nearestPlanet = p;
      }
    }

    const basePos = worldOrbitToChartPos(state.shipPos);
    if (nearestPlanet && nearestDist < nearestPlanet.worldRadius * 6.0) {
      const rig = this.planetRigs.get(nearestPlanet.key);
      if (rig) {
        const rel = state.shipPos.clone().sub(nearestPlanet.worldPos);
        const relLen = rel.length();
        const rRatio = Math.max(1.01, relLen / Math.max(1, nearestPlanet.worldRadius));
        const relDir = relLen > 1e-4 ? rel.divideScalar(relLen) : new THREE.Vector3(0, 1, 0);
        const localChartPos = rig.rootGroup.position.clone().addScaledVector(relDir, rig.pChartR * Math.min(2.8, rRatio));
        const blend = THREE.MathUtils.clamp(1.0 - (nearestDist - nearestPlanet.worldRadius * 2.0) / (nearestPlanet.worldRadius * 4.0), 0, 1);
        return basePos.lerp(localChartPos, blend);
      }
    }
    return basePos;
  }

  _syncScenePositions(state, nowSec) {
    for (const p of state.planets) {
      const rig = this.planetRigs.get(p.key);
      if (!rig) continue;

      worldOrbitToChartPos(p.worldPos, rig.rootGroup.position);

      if (p.spinWorldQuat) {
        rig.spinGroup.quaternion.copy(p.spinWorldQuat);
      }

      // Actualizar texturas si cargaron tras abrir escena
      if (p.orbitalMap && p.orbitalMap !== rig.lastOrbitalMap) {
        rig.globeMat.map = p.orbitalMap;
        rig.globeMat.color.setHex(0xffffff);
        rig.globeMat.needsUpdate = true;
        rig.lastOrbitalMap = p.orbitalMap;
      }
      if (p.orbitalEmissiveMap !== rig.lastEmissiveMap) {
        rig.globeMat.emissiveMap = p.orbitalEmissiveMap || null;
        rig.globeMat.emissive.setHex(p.orbitalEmissiveMap ? 0xffffff : 0x000000);
        if (!p.orbitalEmissiveMap) rig.globeMat.emissive.set(p.color);
        rig.globeMat.emissiveIntensity = p.orbitalEmissiveMap ? 1.15 : 0.14;
        rig.globeMat.needsUpdate = true;
        rig.lastEmissiveMap = p.orbitalEmissiveMap || null;
      }
      if (p.cloudMap !== rig.lastCloudMap) {
        rig.cloudMat.map = p.cloudMap || null;
        rig.cloudMat.opacity = p.cloudMap ? 0.36 : 0.0;
        rig.cloudMesh.visible = Boolean(p.cloudMap);
        rig.cloudMat.needsUpdate = true;
        rig.lastCloudMap = p.cloudMap || null;
      }

      const isFocusedPlanet = this.state === STAR_MAP_STATES.PLANET_ZOOM && this.selectedPlanetKey === p.key;
      const isHoverPlanet = this.hoveredNode?.planetKey === p.key;
      rig.orbitMat.opacity = isFocusedPlanet ? 0.85 : isHoverPlanet ? 0.72 : 0.34;
      rig.selectRingMesh.visible =
        this.state === STAR_MAP_STATES.SOLAR_SYSTEM && isHoverPlanet;

      // Posicionar lunas 3D reales
      rig.moonRigs.forEach((mRig, idx) => {
        const m = p.moons[idx];
        if (!m) return;
        const delta = this._tmpVecA.copy(m.worldPos).sub(p.worldPos);
        const len = delta.length();
        if (len > 1e-4) {
          delta.multiplyScalar(mRig.orbitChartR / len);
        } else {
          delta.set(mRig.orbitChartR, 0, 0);
        }
        mRig.group.position.copy(delta);
        mRig.group.rotation.y = nowSec * 0.4;
      });

      // Posicionar Crystal Palace 3D si existe en P2
      if (rig.stationRig && state.crystalPalace) {
        const cpDelta = this._tmpVecA.copy(state.crystalPalace.worldPos).sub(p.worldPos);
        const len = cpDelta.length();
        if (len > 1e-4) {
          cpDelta.multiplyScalar(rig.stationRig.orbitChartR / len);
        } else {
          cpDelta.set(-rig.stationRig.orbitChartR, 1.5, 0);
        }
        rig.stationRig.group.position.copy(cpDelta);
        rig.stationRig.group.rotation.y = nowSec * 0.55;
      }
    }

    // Actualizar marcador del jugador [ TÚ ]
    if (this.shipBeacon) {
      const sPos = this._getShipChartPos(state);
      this.shipBeacon.group.position.copy(sPos);
      this.shipBeacon.diamond.rotation.y = nowSec * 1.4;
      const pulse = 0.88 + Math.sin(nowSec * 4.5) * 0.25;
      this.shipBeacon.ring.scale.setScalar(pulse);
    }
  }

  _buildSolarNodes3D(state) {
    const sunKm = Math.max(
      0,
      Math.round(Math.max(0, state.shipPos.length() - state.sunWorldRadius) * (12000 / 620))
    );
    const nodes = [
      {
        id: 'sun',
        planetKey: 'sun',
        key: 'sun',
        label: 'SOL CENTRAL',
        tagline: 'Estrella central HDR · Iluminación del sistema',
        color: '#ffcc44',
        distKm: sunKm,
        hitMesh: this.sunRig?.hitMesh || null,
        worldAnchor: new THREE.Vector3(0, 0, 0),
        x: 0,
        y: 0,
        occluded: false,
        descriptor: { type: 'sun_orbit' },
      },
    ];

    for (const p of state.planets) {
      const rig = this.planetRigs.get(p.key);
      if (!rig) continue;
      nodes.push({
        id: p.key,
        planetKey: p.key,
        key: p.key,
        planet: p,
        label: `${p.code} · ${p.shortName}`,
        shortName: p.shortName,
        tagline: p.tagline,
        color: p.color,
        accent: p.accent,
        distKm: p.distKm,
        hitMesh: rig.l1HitMesh,
        worldAnchor: rig.rootGroup.position.clone(),
        x: 0,
        y: 0,
        occluded: false,
      });
    }
    return nodes;
  }

  _ensureL2PinPool(count) {
    while (this.l2PinPool.length < count) {
      const group = new THREE.Group();
      const stemGeo = this._trackDisposable(new THREE.CylinderGeometry(0.05, 0.05, 0.75, 6));
      const stemMat = this._trackDisposable(new THREE.MeshBasicMaterial({ color: 0xffffff }));
      const stem = new THREE.Mesh(stemGeo, stemMat);
      stem.position.y = 0.375;

      const headGeo = this._trackDisposable(new THREE.OctahedronGeometry(0.32, 0));
      const headMat = this._trackDisposable(new THREE.MeshBasicMaterial({ color: 0xffffff }));
      const head = new THREE.Mesh(headGeo, headMat);
      head.position.y = 0.85;

      const ringGeo = this._trackDisposable(new THREE.RingGeometry(0.36, 0.48, 24));
      const ringMat = this._trackDisposable(
        new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide, transparent: true, opacity: 0.82 })
      );
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI * 0.5;
      ring.position.y = 0.06;

      const hitGeo = this._trackDisposable(new THREE.SphereGeometry(0.78, 12, 8));
      const hitMesh = new THREE.Mesh(hitGeo, this._trackDisposable(createHitProxyMaterial()));
      hitMesh.position.y = 0.6;

      group.add(stem, head, ring, hitMesh);
      this.l2PinGroup.add(group);
      this.l2PinPool.push({ group, stemMat, head, headMat, ringMat, hitMesh });
    }
  }

  _ensureL2OrbitRingPool(count) {
    while (this.l2OrbitRingPool.length < count) {
      const pts = [];
      for (let i = 0; i < 96; i++) {
        const a = (i / 96) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a), 0, Math.sin(a)));
      }
      const geo = this._trackDisposable(new THREE.BufferGeometry().setFromPoints(pts));
      const mat = this._trackDisposable(
        new THREE.LineBasicMaterial({ color: 0x5ed4ff, transparent: true, opacity: 0.42, depthWrite: false })
      );
      const line = new THREE.LineLoop(geo, mat);
      this.l2RingsGroup.add(line);
      this.l2OrbitRingPool.push({ line, mat });
    }
  }

  _buildLevel2Nodes3D(state, planetKey) {
    if (planetKey === 'sun') {
      const sunKm = Math.max(
        0,
        Math.round(Math.max(0, state.shipPos.length() - state.sunWorldRadius) * (12000 / 620))
      );
      this._ensureL2PinPool(1);
      this._ensureL2OrbitRingPool(1);
      const ringEntry = this.l2OrbitRingPool[0];
      ringEntry.line.visible = true;
      ringEntry.line.position.set(0, 0, 0);
      ringEntry.line.scale.setScalar(SUN_CHART_RADIUS * 1.65);
      ringEntry.mat.color.set('#ffd24c');

      const pin = this.l2PinPool[0];
      pin.group.visible = true;
      pin.group.position.set(SUN_CHART_RADIUS * 1.65, 0, 0);
      pin.group.quaternion.identity();
      pin.stemMat.color.set('#ffd24c');
      pin.headMat.color.set('#ffd24c');
      pin.ringMat.color.set('#ffd24c');
      for (let i = 1; i < this.l2PinPool.length; i++) this.l2PinPool[i].group.visible = false;
      for (let i = 1; i < this.l2OrbitRingPool.length; i++) this.l2OrbitRingPool[i].line.visible = false;

      return [
        {
          id: 'sun_orbit',
          label: 'Órbita Panorámica del Sistema',
          title: 'SOL CENTRAL // ÓRBITA DE OBSERVACIÓN',
          badge: 'ESTRELLA PRINCIPAL',
          description: 'Vista exterior segura frente al disco solar de plasma y las 5 órbitas keplerianas.',
          destTypeLabel: 'Órbita Estelar',
          insertionAlt: '1.150.000 km',
          atmoGravity: 'Corona Plasma · Radiación Extrema',
          distText: `${sunKm.toLocaleString('es-ES')} km`,
          color: '#ffd24c',
          kind: 'orbit',
          hitMesh: pin.hitMesh,
          worldAnchor: pin.group.position.clone(),
          x: 0,
          y: 0,
          occluded: false,
          descriptor: { type: 'sun_orbit' },
        },
      ];
    }

    const p = state.planets.find((it) => it.key === planetKey);
    const rig = this.planetRigs.get(planetKey);
    if (!p || !rig) return [];

    const nodes = [];
    const pCenter = rig.rootGroup.position;
    const pChartR = rig.pChartR;
    const yAxis = new THREE.Vector3(0, 1, 0);

    // Calcular cuántos anillos orbitales y pines 3D necesitamos en Nivel 2
    let pinIdx = 0;
    let ringIdx = 0;

    // 1. Nodo Órbita Baja
    const lowOrbitChartR = pChartR * 1.52;
    this._ensureL2OrbitRingPool(1 + rig.moonRigs.length + (rig.stationRig ? 1 : 0));
    this._ensureL2PinPool(10);

    const lowRing = this.l2OrbitRingPool[ringIdx++];
    lowRing.line.visible = true;
    lowRing.line.position.copy(pCenter);
    lowRing.line.scale.setScalar(lowOrbitChartR);
    lowRing.mat.color.set(p.color);
    lowRing.mat.opacity = 0.56;

    const orbitPin = this.l2PinPool[pinIdx++];
    orbitPin.group.visible = true;
    const orbitPinPos = new THREE.Vector3(
      pCenter.x + Math.cos(-0.68) * lowOrbitChartR,
      pCenter.y + 0.2,
      pCenter.z + Math.sin(-0.68) * lowOrbitChartR
    );
    orbitPin.group.position.copy(orbitPinPos);
    orbitPin.group.quaternion.identity();
    orbitPin.stemMat.color.set(p.color);
    orbitPin.headMat.color.set(p.color);
    orbitPin.ringMat.color.set(p.color);

    nodes.push({
      id: `${p.key}_orbit`,
      label: 'Órbita Baja',
      title: `${p.shortName} · ÓRBITA ESTACIONARIA`,
      badge: 'ÓRBITA BAJA',
      description: p.tagline,
      destTypeLabel: 'Órbita Planetaria',
      insertionAlt: `${Math.round(p.atmoTopAlt * 1.15 * 0.062).toLocaleString('es-ES')} km`,
      atmoGravity: `${p.atmoDesc} · ${p.gravity}`,
      distText: `${p.distKm.toLocaleString('es-ES')} km`,
      color: p.color,
      kind: 'orbit',
      hitMesh: orbitPin.hitMesh,
      _pinObj: orbitPin,
      worldAnchor: orbitPinPos,
      x: 0,
      y: 0,
      occluded: false,
      descriptor: { type: 'planet_orbit', planetKey: p.key },
    });

    // 2. Pines de Superficie / Naciones / Distritos en coordenadas esféricas exactas sobre el globo rotatorio
    if (p.landable) {
      const spinQuat = rig.spinGroup.quaternion;
      const capQuat = p.capLocalQuat || new THREE.Quaternion();

      const pushSurfacePin = ({ id, label, title, badge, description, insertionAlt, color, localDir, descriptor }) => {
        const worldNormal = localDir.clone().normalize().applyQuaternion(capQuat).applyQuaternion(spinQuat).normalize();
        const pinPos = pCenter.clone().addScaledVector(worldNormal, pChartR * 1.015);
        const pin = this.l2PinPool[pinIdx++];
        pin.group.visible = true;
        pin.group.position.copy(pinPos);
        pin.group.quaternion.setFromUnitVectors(yAxis, worldNormal);
        pin.stemMat.color.set(color);
        pin.headMat.color.set(color);
        pin.ringMat.color.set(color);

        nodes.push({
          id,
          label,
          title,
          badge,
          description,
          destTypeLabel: 'Descenso Atmosférico',
          insertionAlt,
          atmoGravity: `${p.atmoDesc} · ${p.gravity}`,
          distText: `${p.distKm.toLocaleString('es-ES')} km`,
          color,
          kind: 'surface',
          surfaceNormal: worldNormal,
          hitMesh: pin.hitMesh,
          _pinObj: pin,
          worldAnchor: pinPos,
          x: 0,
          y: 0,
          occluded: false,
          descriptor,
        });
      };

      if (p.key === 'p1') {
        const pandoraRegions = [
          {
            landmarkId: 'hometree',
            label: 'Nación del Bosque · Árbol-Casa',
            short: 'Bosque (Hometree)',
            badge: 'NACIÓN DEL BOSQUE',
            desc: 'Gran Continente Selvático continuo (45% del globo): árboles gigantes paraguas, secuoyas, manadas y ríos bioluminiscentes.',
            fallbackDir: new THREE.Vector3(0.15, 0.96, 0.22),
            color: '#44f0a8',
          },
          {
            landmarkId: 'metkayina',
            label: 'Nación del Agua · Metkayina',
            short: 'Agua (Metkayina)',
            badge: 'NACIÓN DEL AGUA · BUCEO',
            desc: 'Océano y Archipiélago coralino: aldeas flotantes sobre balsas, laguna turquesa inmersiva, Tulkun, Ilu y arrecifes luminosos.',
            fallbackDir: new THREE.Vector3(-0.78, 0.16, 0.6),
            color: '#26e8ff',
          },
          {
            landmarkId: 'ashland',
            label: 'Nación de la Ceniza · Volcanes',
            short: 'Ceniza (Mangkwan)',
            badge: 'NACIÓN DE LA CENIZA',
            desc: 'Península volcánica oscura tras la cordillera basáltica: 3 volcanes humeantes, fisuras de lava, árboles calcinados y hogueras.',
            fallbackDir: new THREE.Vector3(0.84, -0.05, 0.54),
            color: '#ff6c34',
          },
          {
            landmarkId: 'hallelujah',
            label: 'Montañas Aleluya',
            short: 'Aleluya',
            badge: 'ZONA DE MONTAÑA',
            desc: 'Islas rocosas flotantes entre cascadas, lianas luminosas y bandadas de Ikran y Toruk.',
            fallbackDir: new THREE.Vector3(-0.24, 0.86, -0.45),
            color: '#7ef5c4',
          },
          {
            landmarkId: 'souls',
            label: 'Árbol de las Almas',
            short: 'Árbol Almas',
            badge: 'SANTUARIO',
            desc: 'Cráter sagrado rodeado de arcos de piedra y filamentos luminosos de Eywa.',
            fallbackDir: new THREE.Vector3(0.28, 0.88, -0.38),
            color: '#c978ff',
          },
        ];

        for (const reg of pandoraRegions) {
          const lmData = p.pandoraLandmarks?.find((it) => it.id === reg.landmarkId);
          pushSurfacePin({
            id: `p1_surface_${reg.landmarkId}`,
            label: reg.short,
            title: reg.label.toUpperCase(),
            badge: reg.badge,
            description: reg.desc,
            insertionAlt: '1.850 m s.n.m.',
            color: reg.color,
            localDir: lmData?.capDir || reg.fallbackDir,
            descriptor: { type: 'planet_surface', planetKey: 'p1', landmarkId: reg.landmarkId },
          });
        }
      } else if (p.key === 'p2' && Array.isArray(p.nightCityLandmarks)) {
        for (const d of p.nightCityLandmarks) {
          pushSurfacePin({
            id: `p2_surface_${d.id}`,
            label: d.shortName,
            title: d.name.toUpperCase(),
            badge: d.badge || 'DISTRITO',
            description: d.description,
            insertionAlt: d.id === 'city_center' ? '450 m (Nivel Cañón)' : '720 m (Vuelo Rasante)',
            color: d.color,
            localDir: d.capDir || new THREE.Vector3(0, 1, 0),
            descriptor: { type: 'planet_surface', planetKey: 'p2', landmarkId: d.id },
          });
        }
      } else {
        const surfLabels = {
          p2: {
            short: 'Corpo Plaza (Superficie)',
            title: 'NIGHT CITY // CAÑÓN CENTRAL',
            desc: 'Descenso atravesando nubes hacia Corpo Plaza y los 7 distritos reales de Night City.',
          },
          p3: {
            short: 'Ciudadela Fortaleza',
            title: 'PERUGIUS // CIUDADELA DEL VALLE',
            desc: 'Planeo sobre valles boscosos hacia la fortaleza flotante y murallas doradas del mundo medieval.',
          },
          p4: {
            short: 'Distrito del Senado',
            title: 'CORUSCANT // PLAZA DEL SENADO',
            desc: 'Entrada atmosférica hacia la ecumenópolis global con anillos de luz dorada y tráfico orbital.',
          },
        }[p.key];

        pushSurfacePin({
          id: `${p.key}_surface`,
          label: surfLabels.short,
          title: surfLabels.title,
          badge: 'ATERRIZAJE EN SUPERFICIE',
          description: surfLabels.desc,
          insertionAlt: p.key === 'p2' ? '450 m (Nivel Cañón)' : '2.100 m s.n.m.',
          color: p.accent,
          localDir: new THREE.Vector3(0.32, 0.85, 0.42),
          descriptor: { type: 'planet_surface', planetKey: p.key },
        });
      }
    }

    // 3. Crystal Palace 3D (P2)
    if (p.hasCrystalPalace && state.crystalPalace && rig.stationRig) {
      const cpKm = Math.round(state.crystalPalace.distWorld * (p.kmScale / (620 * 4.8)));
      const stWorldPos = pCenter.clone().add(rig.stationRig.group.position);

      const stRing = this.l2OrbitRingPool[ringIdx++];
      stRing.line.visible = true;
      stRing.line.position.copy(pCenter);
      stRing.line.scale.setScalar(rig.stationRig.orbitChartR);
      stRing.mat.color.set('#ffae42');
      stRing.mat.opacity = 0.48;

      nodes.push({
        id: 'station_crystal_palace',
        label: 'Crystal Palace',
        title: 'ESTACIÓN ORBITAL CRYSTAL PALACE',
        badge: 'ESTACIÓN ESPACIAL',
        description: 'Plataforma orbital de lujo sobre Night City con 36 hangares iluminados y anillos rotatorios.',
        destTypeLabel: 'Estación Orbital',
        insertionAlt: 'Órbita Alta (320 km)',
        atmoGravity: 'Gravedad Artificial · Vacío',
        distText: `${cpKm.toLocaleString('es-ES')} km`,
        color: '#ffae42',
        kind: 'station',
        hitMesh: rig.stationRig.hitMesh,
        worldAnchor: stWorldPos,
        x: 0,
        y: 0,
        occluded: false,
        descriptor: { type: 'station', stationId: 'crystal_palace' },
      });
    }

    // 4. Lunas reales 3D en órbita alrededor del planeta
    p.moons.forEach((m, idx) => {
      const mRig = rig.moonRigs[idx];
      if (!mRig) return;
      const mRing = this.l2OrbitRingPool[ringIdx++];
      mRing.line.visible = true;
      mRing.line.position.copy(pCenter);
      mRing.line.scale.setScalar(mRig.orbitChartR);
      mRing.mat.color.set('#9ec5ff');
      mRing.mat.opacity = 0.34;

      const mWorldPos = pCenter.clone().add(mRig.group.position);
      const mDistKm = Math.max(1, Math.round(Math.max(0, m.distWorld - m.moonRadius) * (p.kmScale / (620 * 4.8))));
      const orbAltKm = Math.round(m.baseRadiusWorld * (p.kmScale / (620 * 4.8)));

      nodes.push({
        id: `${p.key}_moon_${idx}`,
        label: m.name,
        title: m.name.toUpperCase(),
        badge: 'SATÉLITE NATURAL',
        description: `Órbita lunar estacionaria alrededor de ${m.name} con seguimiento gravitatorio sincronizado.`,
        destTypeLabel: 'Órbita Lunar',
        insertionAlt: `Órbita a ${orbAltKm.toLocaleString('es-ES')} km`,
        atmoGravity: 'Exosfera tenue · 0.18 G',
        distText: `${mDistKm.toLocaleString('es-ES')} km`,
        color: '#b8d8ff',
        kind: 'moon',
        hitMesh: mRig.hitMesh,
        worldAnchor: mWorldPos,
        x: 0,
        y: 0,
        occluded: false,
        descriptor: { type: 'moon', planetKey: p.key, moonIndex: m.index },
      });
    });

    for (let i = pinIdx; i < this.l2PinPool.length; i++) {
      this.l2PinPool[i].group.visible = false;
    }
    for (let i = ringIdx; i < this.l2OrbitRingPool.length; i++) {
      this.l2OrbitRingPool[i].line.visible = false;
    }

    // Animar escala suave del pin seleccionado/hover
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node._pinObj) {
        const isSel = this.selectedNode?.id === node.id;
        const isHov = this.hoveredNode?.id === node.id;
        node._pinObj.head.scale.setScalar(isSel ? 1.45 : isHov ? 1.25 : 1.0);
      }
    }

    return nodes;
  }

  _refreshLevel2NodeSelectionPreservingId(prevSelectedId, prevHoverId) {
    if (prevSelectedId) {
      const match = this.currentLevel2Nodes.find((n) => n.id === prevSelectedId);
      if (match) this.selectedNode = match;
    }
    if (prevHoverId) {
      this.hoveredNode = this.currentLevel2Nodes.find((n) => n.id === prevHoverId) || null;
    }
  }

  _updateCamera(dt) {
    const isL2 = this.state === STAR_MAP_STATES.PLANET_ZOOM;
    const lookTargetCenter = this._tmpDesiredLook.set(0, 0, 0);
    if (isL2 && this.selectedPlanetKey && this.selectedPlanetKey !== 'sun') {
      const pRig = this.planetRigs.get(this.selectedPlanetKey);
      if (pRig) lookTargetCenter.copy(pRig.rootGroup.position);
    }

    const activeOrbit = isL2 ? this.level2Orbit : this.solarOrbit;
    this._syncCameraFromSpherical(this._tmpDesiredCam, lookTargetCenter, activeOrbit, lookTargetCenter);

    if (this.transitionActive) {
      this.transitionElapsed = Math.min(this.zoomDuration, this.transitionElapsed + dt);
      const u = this.transitionElapsed / Math.max(0.01, this.zoomDuration);
      const eased = easeInOutCubic(u);
      this.zoomProgress = isL2 ? eased : 1.0 - eased;

      this.curCamPos.lerpVectors(this.transitionFromCamPos, this._tmpDesiredCam, eased);
      this.curLookAt.lerpVectors(this.transitionFromLookAt, this._tmpDesiredLook, eased);

      if (u >= 1) {
        this.transitionActive = false;
        this.zoomProgress = isL2 ? 1.0 : 0.0;
      }
    } else {
      const alpha = 1 - Math.exp(-12 * Math.max(0.001, dt));
      this.curCamPos.lerp(this._tmpDesiredCam, alpha);
      this.curLookAt.lerp(this._tmpDesiredLook, alpha);
      this.zoomProgress = isL2 ? 1.0 : 0.0;
    }

    this.mapCamera.position.copy(this.curCamPos);
    this.mapCamera.lookAt(this.curLookAt);
    this.mapCamera.updateMatrixWorld();
  }

  _ensureLabelOverlayInit() {
    if (!this.labelsEl || typeof document === 'undefined') return false;
    if (!this.svgEl) {
      this.svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this.svgEl.setAttribute('class', 'sm-leader-svg');
      this.labelsEl.appendChild(this.svgEl);
    }
    if (!this.tooltipEl) {
      this.tooltipEl = document.createElement('div');
      this.tooltipEl.className = 'sm-hover-tooltip';
      this.tooltipEl.style.display = 'none';
      this.labelsEl.appendChild(this.tooltipEl);
    }
    return true;
  }

  _clearLabelDOM() {
    for (const el of this.labelEls.values()) {
      el.style.display = 'none';
    }
    for (const line of this.lineEls.values()) {
      line.style.display = 'none';
    }
    if (this.tooltipEl) {
      this.tooltipEl.style.display = 'none';
    }
  }

  _updateLabelsAndLeaderLines(state) {
    const nodes = this.getVisibleNodes();
    const isL2 = this.state === STAR_MAP_STATES.PLANET_ZOOM;
    const pRig = isL2 && this.selectedPlanetKey && this.selectedPlanetKey !== 'sun'
      ? this.planetRigs.get(this.selectedPlanetKey)
      : null;
    const planetCenterWorld = pRig ? pRig.rootGroup.position : null;

    // 1. Proyección de coordenadas 3D -> 2D + oclusión de hemisferio oculto (`facingDot < 0.08`)
    const projVec = this._tmpVecA;
    const toCam = this._tmpVecB;
    const planetCenterScreen = isL2 && planetCenterWorld
      ? planetCenterWorld.clone().project(this.mapCamera)
      : null;
    const pScreenX = planetCenterScreen ? (planetCenterScreen.x * 0.5 + 0.5) * this.viewW : this.viewW * 0.5;
    const pScreenY = planetCenterScreen ? (-planetCenterScreen.y * 0.5 + 0.5) * this.viewH : this.viewH * 0.5;

    for (const node of nodes) {
      if (node.kind === 'surface' && node.surfaceNormal && planetCenterWorld) {
        toCam.copy(this.mapCamera.position).sub(planetCenterWorld).normalize();
        const facingDot = node.surfaceNormal.dot(toCam);
        node.facingDot = facingDot;
        node.occluded = facingDot < 0.08;
      } else {
        node.facingDot = 1.0;
        node.occluded = false;
      }

      projVec.copy(node.worldAnchor).project(this.mapCamera);
      if (projVec.z < -1 || projVec.z > 1) {
        node.occluded = true;
      }
      node.x = (projVec.x * 0.5 + 0.5) * this.viewW;
      node.y = (-projVec.y * 0.5 + 0.5) * this.viewH;
    }

    if (!this._ensureLabelOverlayInit()) return;

    const usedIds = new Set();

    const syncTag = (id, text, sx, sy, lx, ly, color, extraClasses = '') => {
      usedIds.add(id);
      let el = this.labelEls.get(id);
      if (!el) {
        el = document.createElement('div');
        this.labelsEl.appendChild(el);
        this.labelEls.set(id, el);
      }
      el.className = `sm-label ${extraClasses}`.trim();
      el.style.display = 'block';
      el.style.left = `${Math.round(lx)}px`;
      el.style.top = `${Math.round(ly)}px`;
      if (color) el.style.borderColor = color;
      if (el.textContent !== text) el.textContent = text;

      if (Math.hypot(lx - sx, ly - sy) > 2) {
        let line = this.lineEls.get(id);
        if (!line) {
          line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('stroke-width', '1.1');
          line.setAttribute('stroke-opacity', '0.55');
          this.svgEl.appendChild(line);
          this.lineEls.set(id, line);
        }
        line.style.display = 'block';
        line.setAttribute('x1', `${sx.toFixed(1)}`);
        line.setAttribute('y1', `${sy.toFixed(1)}`);
        line.setAttribute('x2', `${lx.toFixed(1)}`);
        line.setAttribute('y2', `${(ly - 2).toFixed(1)}`);
        line.setAttribute('stroke', color || '#5ed4ff');
      }
    };

    for (const node of nodes) {
      if (
        node.occluded ||
        node.x < -80 ||
        node.x > this.viewW + 80 ||
        node.y < -80 ||
        node.y > this.viewH + 80
      ) {
        continue;
      }

      const isSel = isL2 && this.selectedNode?.id === node.id;
      const isHov = this.hoveredNode?.id === node.id;
      let lx = node.x;
      let ly = node.y - 18;

      if (isL2 && node.kind === 'surface') {
        const dx = node.x - pScreenX;
        const dy = node.y - pScreenY;
        const len = Math.max(1, Math.hypot(dx, dy));
        lx = node.x + (dx / len) * 26;
        ly = node.y + (dy / len) * 26 - 6;
      }

      const cls = `${isSel ? 'selected' : ''} ${isHov ? 'hovered' : ''}`.trim();
      syncTag(
        node.id,
        isL2 ? node.label : node.label,
        node.x,
        node.y,
        lx,
        ly,
        isSel ? '#ffae42' : node.color,
        cls
      );
    }

    // Marcador [ TÚ ] proyectado desde la posición 3D real de la nave
    if (this.shipBeacon && state) {
      projVec.copy(this.shipBeacon.group.position).project(this.mapCamera);
      if (projVec.z >= -1 && projVec.z <= 1) {
        const sx = (projVec.x * 0.5 + 0.5) * this.viewW;
        const sy = (-projVec.y * 0.5 + 0.5) * this.viewH;
        const selfLabel = state.isUnderwater
          ? '[ TÚ · OCÉANO ]'
          : state.mode === 'SURFACE'
            ? '[ TÚ · ATMÓSFERA ]'
            : '[ TÚ ]';
        syncTag('__self_beacon__', selfLabel, sx, sy, sx, sy, '#ffae42', 'self-beacon');
      }
    }

    // Ocultar etiquetas no usadas en este frame
    for (const [id, el] of this.labelEls.entries()) {
      if (!usedIds.has(id)) el.style.display = 'none';
    }
    for (const [id, line] of this.lineEls.entries()) {
      if (!usedIds.has(id)) line.style.display = 'none';
    }

    // Tooltip flotante de hover en Nivel 1 o sobre nodos sin ficha duplicada
    const hov = this.hoveredNode;
    if (hov && !hov.occluded && !isL2) {
      this.tooltipEl.style.display = 'block';
      const tx = Math.min(this.viewW - 275, Math.max(16, hov.x + 18));
      const ty = Math.max(76, Math.min(this.viewH - 125, hov.y - 18));
      this.tooltipEl.style.left = `${Math.round(tx)}px`;
      this.tooltipEl.style.top = `${Math.round(ty)}px`;
      this.tooltipEl.style.borderColor = hov.color || '#ffae42';
      this.tooltipEl.innerHTML =
        `<h4>${hov.label}</h4>` +
        `<div class="sm-ht-dist">DISTANCIA: ${Number(hov.distKm || 0).toLocaleString('es-ES')} KM · CLIC PARA ZOOM</div>` +
        `<p>${hov.tagline || ''}</p>`;
    } else {
      this.tooltipEl.style.display = 'none';
    }
  }

  updateAndDraw(nowMs = typeof performance !== 'undefined' ? performance.now() : 0) {
    if (!this.isOpen() || !this.sceneManager) return;

    const dt = this.lastTimeMs ? Math.min(0.1, Math.max(0.001, (nowMs - this.lastTimeMs) / 1000)) : 0.016;
    this.lastTimeMs = nowMs;
    const nowSec = nowMs * 0.001;

    const state = this.sceneManager.getStarChartState();
    this._ensureScene3D(state);
    if (!this.mapScene || !this.mapCamera) return;

    this._syncScenePositions(state, nowSec);

    const isL2 = this.state === STAR_MAP_STATES.PLANET_ZOOM;
    if (this.l2RingsGroup) this.l2RingsGroup.visible = isL2;
    if (this.l2PinGroup) this.l2PinGroup.visible = isL2;

    if (isL2 && this.selectedPlanetKey) {
      const prevSelId = this.selectedNode?.id || null;
      const prevHovId = this.hoveredNode?.id || null;
      this.currentLevel2Nodes = this._buildLevel2Nodes3D(state, this.selectedPlanetKey);
      this._refreshLevel2NodeSelectionPreservingId(prevSelId, prevHovId);
    } else {
      this.currentSolarNodes = this._buildSolarNodes3D(state);
    }

    this._updateCamera(dt);
    this._updateLabelsAndLeaderLines(state);

    if (this.renderer) {
      this.renderer.render(this.mapScene, this.mapCamera);
    }
  }

  dispose() {
    this.close();
    if (this.backBtnEl && this._boundHandlers.onBackClick) {
      this.backBtnEl.removeEventListener('click', this._boundHandlers.onBackClick);
    }
    if (this.closeBtnEl && this._boundHandlers.onCloseClick) {
      this.closeBtnEl.removeEventListener('click', this._boundHandlers.onCloseClick);
    }
    if (this.jumpBtnEl && this._boundHandlers.onJumpClick) {
      this.jumpBtnEl.removeEventListener('click', this._boundHandlers.onJumpClick);
    }
    if (this.canvas) {
      if (this._boundHandlers.onMouseDown) this.canvas.removeEventListener('mousedown', this._boundHandlers.onMouseDown);
      if (this._boundHandlers.onClick) this.canvas.removeEventListener('click', this._boundHandlers.onClick);
      if (this._boundHandlers.onDblClick) this.canvas.removeEventListener('dblclick', this._boundHandlers.onDblClick);
      if (this._boundHandlers.onWheel) this.canvas.removeEventListener('wheel', this._boundHandlers.onWheel);
      if (this._boundHandlers.onContextMenu) this.canvas.removeEventListener('contextmenu', this._boundHandlers.onContextMenu);
    }
    if (typeof window !== 'undefined') {
      if (this._boundHandlers.onMouseMove) window.removeEventListener('mousemove', this._boundHandlers.onMouseMove);
      if (this._boundHandlers.onMouseUp) window.removeEventListener('mouseup', this._boundHandlers.onMouseUp);
      if (this._boundHandlers.onResize) window.removeEventListener('resize', this._boundHandlers.onResize);
      if (this._boundHandlers.onKeyDown) window.removeEventListener('keydown', this._boundHandlers.onKeyDown);
    }

    for (const item of this.disposables) {
      item?.dispose?.();
    }
    this.disposables = [];

    if (this.renderer) {
      this.renderer.renderLists?.dispose?.();
      this.renderer.dispose?.();
      this.renderer = null;
    }

    if (this.labelsEl) {
      this.labelsEl.innerHTML = '';
    }
    this.labelEls.clear();
    this.lineEls.clear();
    this.svgEl = null;
    this.tooltipEl = null;
    this.mapScene = null;
    this.mapCamera = null;
  }
}

export { StarMapController as StarChartMap };
