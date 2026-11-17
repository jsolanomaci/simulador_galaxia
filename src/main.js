import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

import { createStarfield, CockpitAtmosphereParticles } from './starfield.js';
import { SpaceshipControls } from './flightControls.js';
import { GalaxySceneManager } from './sceneManager.js';
import { TacticalMinimap } from './minimap.js';
import { StarMapController } from './starMap.js';
import { RadialMotionBlurShader } from './proceduralPbr.js';

// Referencias del DOM (HUD)
const canvas = document.getElementById('app-canvas');
const loadingScreen = document.getElementById('loading-screen');
const loadingStatus = document.getElementById('loading-status');
const loadingBarFill = document.getElementById('loading-bar-fill');

const hudMode = document.getElementById('hud-mode');
const hudSector = document.getElementById('hud-sector');
const hudNearest = document.getElementById('hud-nearest');
const hudAltitude = document.getElementById('hud-altitude');
const hudTimeBtn = document.getElementById('hud-time-btn');
const hudTime = document.getElementById('hud-time');
const pandoraLandmarksBar = document.getElementById('pandora-landmarks-bar');
const hudSpeed = document.getElementById('hud-speed');
const hudSpeedUnit = document.getElementById('hud-speed-unit');
const hudSpeedBar = document.getElementById('hud-speed-bar');
const hudMult = document.getElementById('hud-mult');
const hudBoost = document.getElementById('hud-boost');
const hudCoords = document.getElementById('hud-coords');

// 1. Escena y Cámara con amplio rango interplanetario y detalle cercano
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x03060c);

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.05,
  480000
);
scene.add(camera);

// 2. Renderizador WebGL con logarithmicDepthBuffer, ACESFilmicToneMapping y sombras suaves PCFSoftShadowMap
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  logarithmicDepthBuffer: true,
  powerPreference: 'high-performance',
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

function configureSsaoForLogDepth(ssaoPass, cam) {
  ssaoPass.kernelRadius = 6;
  ssaoPass.minDistance = 0.001;
  ssaoPass.maxDistance = 0.04;
  ssaoPass.enabled = false;
  ssaoPass.ssaoMaterial.uniforms.uLogFar = { value: Math.log2(cam.far + 1.0) };

  let frag = ssaoPass.ssaoMaterial.fragmentShader;
  frag = frag
    .replace(
      'uniform float cameraFar;',
      'uniform float cameraFar;\n\t\tuniform float uLogFar;'
    )
    .replace(
      /float getViewZ\([\s\S]*?\n\t\t\}/,
      `float getViewZ( const in float depth ) {
        float wVal = pow( 2.0, clamp( depth * uLogFar, 0.0, 22.0 ) );
        return -( wVal - 1.0 );
      }`
    )
    .replace(
      /vec3 getViewPosition\([\s\S]*?\n\t\t\}/,
      `vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {
        vec4 rayClip = vec4( screenPosition * 2.0 - 1.0, -1.0, 1.0 );
        vec4 rayView = cameraInverseProjectionMatrix * rayClip;
        vec3 viewRay = rayView.xyz / max( 1e-4, abs( rayView.w ) );
        return viewRay * ( -viewZ / max( 1e-4, -viewRay.z ) );
      }`
    )
    .replace(
      'if ( depth == 1.0 ) {',
      'float _vzRoot = getViewZ( depth );\n\t\t\tif ( depth >= 0.99999 || -_vzRoot > 1100.0 ) {'
    )
    .replace('float viewZ = getViewZ( depth );', 'float viewZ = _vzRoot;')
    .replace(
      'float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture\n\t\t\t\t\tfloat sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value',
      'float realDepth = -getViewZ( getDepth( samplePointUv ) ) / 65.0;\n\t\t\t\t\tfloat sampleDepth = -samplePoint.z / 65.0;'
    )
    .replace(
      'gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );',
      'gl_FragColor = vec4( vec3( 1.0 - occlusion * 0.42 ), 1.0 );'
    );
  ssaoPass.ssaoMaterial.fragmentShader = frag;
  ssaoPass.ssaoMaterial.needsUpdate = true;

  // Excluir cúpula celeste, nubes, atmósferas y cono de choque transparente de oclusión SSAO
  ssaoPass.overrideVisibility = function () {
    const sc = this.scene;
    const cache = this._visibilityCache;
    sc.traverse((obj) => {
      cache.set(obj, obj.visible);
      if (
        obj.isPoints ||
        obj.isLine ||
        obj.userData?.skipSSAO ||
        (obj.isMesh && obj.material && !Array.isArray(obj.material) && obj.material.transparent && !obj.isWater)
      ) {
        obj.visible = false;
      }
    });
  };
}

// 3. Postprocesado HDR: RenderPass -> SSAOPass (<4km) -> UnrealBloomPass -> RadialMotionBlurPass -> OutputPass
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

const ssaoPass = new SSAOPass(scene, camera, window.innerWidth, window.innerHeight, 16);
configureSsaoForLogDepth(ssaoPass, camera);
composer.addPass(ssaoPass);

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.42,
  0.34,
  0.96
);
composer.addPass(bloomPass);

const radialBlurPass = new ShaderPass(RadialMotionBlurShader);
radialBlurPass.enabled = false;
composer.addPass(radialBlurPass);

const outputPass = new OutputPass();
composer.addPass(outputPass);

// 4. Fondo estelar procedural + Partículas de cabina y Estelas de Impulso Pulse
const starfield = createStarfield(8500, 190000);
scene.add(starfield);

const cockpitParticles = new CockpitAtmosphereParticles(camera, 420);

// 5. Controles de vuelo con inercia exponencial, banking automático, FOV dinámico y motor Pulse
const controls = new SpaceshipControls(camera, canvas);

// 6. Gestor del Sistema Solar en órbita real y planetas esféricos 3D sin cortes
const sceneManager = new GalaxySceneManager({
  scene,
  camera,
  renderer,
  controls,
  starfield,
  cockpitParticles,
  bloomPass,
  ssaoPass,
  radialBlurPass,
  onStatusUpdate: (telemetry) => {
    if (hudMode) {
      hudMode.textContent = telemetry.modeText;
      const modeClass = telemetry.isUnderwater
        ? 'mode-sub'
        : telemetry.isSurface
        ? 'mode-atmo'
        : 'mode-orbit';
      hudMode.className = `hud-value ${modeClass}`;
    }
    if (hudSector) hudSector.textContent = telemetry.sectorName;
    if (hudNearest) hudNearest.textContent = telemetry.nearestText;
    if (hudAltitude) hudAltitude.textContent = telemetry.altitudeText;
    if (hudTime) {
      hudTime.textContent = `${telemetry.timeScale}x · ${telemetry.solarPhaseName}`;
      hudTime.className = `hud-value ${
        telemetry.solarPhaseName === 'DÍA'
          ? 'phase-day'
          : telemetry.solarPhaseName === 'ATARDECER'
          ? 'phase-dusk'
          : telemetry.solarPhaseName === 'NOCHE'
          ? 'phase-night'
          : ''
      }`;
    }
    if (pandoraLandmarksBar) {
      if (telemetry.pandoraLandmarks) {
        pandoraLandmarksBar.classList.remove('hidden');
        for (const lm of telemetry.pandoraLandmarks) {
          const distEl = pandoraLandmarksBar.querySelector(`small[data-dist="${lm.id}"]`);
          if (distEl) distEl.textContent = `${lm.distKm.toLocaleString('es-ES')} km`;
        }
      } else {
        pandoraLandmarksBar.classList.add('hidden');
      }
    }
  },
});

const handleTimeToggle = () => {
  const newScale = sceneManager.cycleTimeScale();
  if (hudTime) {
    const currentPhase = hudTime.textContent.split('·')[1]?.trim() || 'ESPACIO';
    hudTime.textContent = `${newScale}x · ${currentPhase}`;
  }
};

if (hudTimeBtn) {
  hudTimeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    handleTimeToggle();
  });
}

// 7. Mapa Estelar Holográfico en 2 Niveles (tecla M) y Minimapa Táctico Superior Derecho
const starMap = new StarMapController({
  overlayEl: document.getElementById('star-map-overlay'),
  canvasEl: document.getElementById('star-map-canvas'),
  labelsEl: document.getElementById('star-map-labels'),
  backBtnEl: document.getElementById('star-map-back-btn'),
  closeBtnEl: document.getElementById('star-map-close-btn'),
  levelTagEl: document.getElementById('star-map-level-tag'),
  titleEl: document.getElementById('star-map-title'),
  dossierEl: document.getElementById('star-map-dossier'),
  dossierBadgeEl: document.getElementById('dossier-badge'),
  dossierTitleEl: document.getElementById('dossier-title'),
  dossierDescEl: document.getElementById('dossier-desc'),
  dossierTypeEl: document.getElementById('dossier-type'),
  dossierAltEl: document.getElementById('dossier-alt'),
  dossierAtmoEl: document.getElementById('dossier-atmo'),
  dossierDistEl: document.getElementById('dossier-dist'),
  jumpBtnEl: document.getElementById('star-map-jump-btn'),
  footerEl: document.getElementById('star-map-footer'),
  sceneManager,
  controls,
  onConfirmJump: (dest) => sceneManager.navigateToTarget(dest),
});

const minimap = new TacticalMinimap({
  containerEl: document.getElementById('tactical-minimap'),
  canvasEl: document.getElementById('minimap-canvas'),
  scaleEl: document.getElementById('minimap-scale'),
  sceneManager,
  onOpenStarMap: () => starMap.open(),
});

// Accesos directos de monumentos de Pandora y atajos de teclado opcionales [1]–[6]
document.querySelectorAll('.pandora-lm-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const landmarkId = btn.dataset.landmark;
    if (landmarkId) {
      sceneManager.navigateToPandoraLandmark(landmarkId);
    }
  });
});

window.addEventListener('keydown', (e) => {
  if (starMap.isOpen()) return;
  if (['Digit1', 'Numpad1'].includes(e.code)) sceneManager.navigateToTarget('1');
  if (['Digit2', 'Numpad2'].includes(e.code)) sceneManager.navigateToTarget('2');
  if (['Digit3', 'Numpad3'].includes(e.code)) sceneManager.navigateToTarget('3');
  if (['Digit4', 'Numpad4'].includes(e.code)) sceneManager.navigateToTarget('4');
  if (['Digit5', 'Numpad5'].includes(e.code)) sceneManager.navigateToTarget('5');
  if (['Digit6', 'Numpad6'].includes(e.code)) sceneManager.navigateToTarget('6');
  if (e.code === 'KeyT' && !e.repeat) handleTimeToggle();
});

window.addEventListener('resize', () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  composer.setSize(w, h);
  ssaoPass.setSize(w, h);
  bloomPass.resolution.set(w, h);
});

// 8. Inicialización y bucle principal de simulación
async function bootstrap() {
  try {
    await sceneManager.init((pct, msg) => {
      if (loadingBarFill) loadingBarFill.style.width = `${pct}%`;
      if (loadingStatus) loadingStatus.textContent = msg;
    });
  } catch (err) {
    console.error('Error inicializando simulador:', err);
    if (loadingStatus) {
      loadingStatus.textContent = 'Error cargando modelos GLB. Verifica public/models/.';
    }
  } finally {
    setTimeout(() => {
      if (loadingScreen) loadingScreen.classList.add('hidden');
    }, 300);
  }
}

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const dt = clock.getDelta();
  // Actualizar primero las órbitas planetarias y el contexto de altitud, luego la física de la nave,
  // y sincronizar cúpula/estelas al resultado exacto del vuelo (0 frames de desfase a 60x)
  sceneManager.update(dt);
  controls.update(dt);
  sceneManager.syncCameraPostFlight();

  const rawSpeed = controls.getCurrentSpeed();
  const pulseRatio = controls.getPulseRatio();
  cockpitParticles.update(dt, rawSpeed, pulseRatio);

  // Actualizar velocímetro y telemetría de cabina
  const isOrbit = sceneManager.mode === 'ORBIT';
  const displaySpeed = isOrbit ? (rawSpeed * 1.4).toFixed(1) : Math.round(rawSpeed * 22);
  if (hudSpeed) hudSpeed.textContent = displaySpeed;
  if (hudSpeedUnit) hudSpeedUnit.textContent = isOrbit ? 'km/s' : 'm/s';

  if (hudSpeedBar) {
    const maxRef = (isOrbit ? 1400.0 : 120.0) * controls.speedMultiplier;
    const pct = Math.min(100, (rawSpeed / Math.max(1, maxRef)) * 100);
    hudSpeedBar.style.width = `${pct}%`;
  }

  if (hudMult) hudMult.textContent = `x${controls.speedMultiplier.toFixed(1)}`;
  if (hudBoost) {
    const pulsing = pulseRatio > 0.1;
    hudBoost.textContent = controls.autopilot
      ? 'PILOTO AUTO'
      : pulsing
      ? 'MOTOR PULSE'
      : 'EN ESPERA';
    hudBoost.className = pulsing ? 'status-active' : 'status-standby';
  }

  if (hudCoords) {
    const p = camera.position;
    hudCoords.textContent = `${p.x.toFixed(0)}, ${p.y.toFixed(0)}, ${p.z.toFixed(0)}`;
  }

  if (starMap.isOpen()) {
    starMap.updateAndDraw(performance.now());
  } else {
    minimap.update(clock.elapsedTime);
  }

  composer.render();
}

bootstrap();
animate();
