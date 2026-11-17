import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';
import { getWaterNormalTexture, createSupersonicShockwaveCone } from './proceduralPbr.js';
import {
  sharedUniforms,
  createOrbitalPlanet,
  createFresnelAtmosphereShell,
  createUrbanTowerBand,
  createAtmosphericSkyDome,
  projectGLBOntoSphericalCap,
  PANDORA_LANDMARKS,
} from './planetarySphere.js';
import { createPandoraSurfaceWorld } from './pandoraWorld.js';
import {
  createUrbanTrafficSystem,
  bindNightCityAnimations,
  bindCoruscantAnimations,
  createMedievalLifeSystem,
  createPandoraLifeSystem,
} from './cityTraffic.js';
import {
  createNightCityZonedOutskirts,
  NIGHT_CITY_DISTRICTS,
  NIGHT_CITY_DISTRICT_MAP,
  sampleNightCitySurface,
} from './nightCityZones.js';

/**
 * Factor de escala global del Sistema Solar (3.5x sobre 45.0) para que cada planeta
 * sea una esfera colosal frente a las ciudades manteniendo órbitas ampliamente separadas.
 */
export const SOLAR_SCALE = 157.5;

/**
 * Factor de escala planetaria realista (~4.8x) para planetas colosales con atmósferas profundas.
 */
export const PLANET_SCALE_MULT = 4.8;

/**
 * Metros reales por unidad de mundo (sincronizado con flightControls y HUD).
 */
export const METERS_PER_WORLD_UNIT = 62.0;

/**
 * Grosor de la capa atmosférica respecto al radio planetario (`atmoTopAlt = worldRadius * 0.72` -> borde exterior `1.72 R`).
 */
export const ATMO_RADIUS_RATIO = 0.72;

const S_SURF = 1.0 / 3.5;

const STREAM_MAX_PER_FRAME = 3;
const STREAM_PREWARM_ALT_RATIO = 0.88;
const STREAM_MACRO_ALT_M = 35000;
const STREAM_MACRO_EXIT_M = 36000;
const STREAM_MEDIUM_ALT_M = 3500;
const STREAM_MICRO_ALT_M = 1200;

// Latitud templada (~22° N, colatitud 68°) donde se ubica la ciudad/valle para garantizar
// barrido completo de Día -> Atardecer -> Noche al rotar el planeta alrededor de su eje inclinado.
const CAP_COLAT_RAD = THREE.MathUtils.degToRad(68);
const DEFAULT_CAP_DIR = new THREE.Vector3(0, Math.cos(CAP_COLAT_RAD), Math.sin(CAP_COLAT_RAD)).normalize(); // Preservar escala 1:1 en edificios, montañas y naves en superficie

/**
 * Configuración orbital, atmosférica y de iluminación adaptativa de los 5 planetas.
 */
export const PLANET_CONFIGS = {
  p1: {
    id: 'p1',
    navKey: '6',
    name: 'Planeta 1 · Pandora (Bioluminiscente)',
    spinnerName: 'OrbitSpinner_P1',
    rootName: 'Planet_01_Desert_Tatooine_Root',
    bodyName: 'Planet_01_Desert_Body',
    semiMajorAxis: 55.2,
    eccentricity: 0.045,
    orbitOmega: 0.00280, // Ley de Kepler (a^-1.5)
    localRadius: 6.336, // worldRadius = 997.9 u, atmoTopAlt = 718.5 u (~44.5 km)
    groundFloorAlt: 1.65,
    kmScale: 27840,
    rotationSpeed: 0.014,
    axialOmega: 0.015,
    axialTiltX: THREE.MathUtils.degToRad(6.0),
    axialTiltZ: THREE.MathUtils.degToRad(21.0),
    initialSpinAngle: -0.95,
    capLocalDir: DEFAULT_CAP_DIR,
    landable: true,
    hasProceduralWorld: true,
    fogColor: 0x5ab2cc,
    maxFogDensity: 0.0036,
    skyColor: 0x2682be,
    particleColor: 0x9ef6ff,
    glowCss: 'rgba(0, 235, 255, 0.45)',
    lowOrbitOffset: new THREE.Vector3(0.0, 6.336 * 2.25, 6.336 * 0.85),
    lowOrbitLookAt: new THREE.Vector3(0.0, 6.336, 0.0),
    highCloudOffset: new THREE.Vector3(-0.08, 6.336 * 1.48, 6.336 * 0.36),
    aerialOffset: new THREE.Vector3(-0.025, 6.336 + 0.072, 0.095),
    aerialLookAt: new THREE.Vector3(0.028, 6.336 + 0.048, -0.022),
    sunColor: 0xfff0d4,
    sunIntensity: 2.85,
    ambientColor: 0x244630,
    ambientIntensity: 0.92,
    hemiSkyColor: 0x62b8ff,
    hemiGroundColor: 0x1e4a28,
    hemiIntensity: 1.45,
    localLightColor: 0x00f0ff,
    localBounceColor: 0xb838ff,
    bloomStrength: 0.54,
    skyDome: {
      zenith: 0x1c7be0,
      mid: 0x52b6ec,
      horizon: 0x8ee8ea,
      sunGlow: 0xfff0c8,
      zenithAlpha: 0.92,
      starFloor: 0.0,
    },
  },
  p2: {
    id: 'p2',
    navKey: '5',
    name: 'Planeta 2 · Night City (Cyberpunk)',
    spinnerName: 'OrbitSpinner_P2',
    rootName: 'Planet_02_Cyberpunk_Root',
    bodyName: 'Planet_02_Cyberpunk_Body',
    semiMajorAxis: 88.8,
    eccentricity: 0.035,
    orbitOmega: 0.00137, // Ley de Kepler (a^-1.5)
    localRadius: 6.816, // worldRadius = 1073.5 u, atmoTopAlt = 772.9 u (~47.9 km)
    groundFloorAlt: 0.32,
    minSpeed: 3.2,
    glbLocalScale: 0.0038 * S_SURF * 3.8,
    kmScale: 29760,
    rotationSpeed: 0.011,
    axialOmega: 0.012,
    axialTiltX: THREE.MathUtils.degToRad(-5.0),
    axialTiltZ: THREE.MathUtils.degToRad(18.5),
    initialSpinAngle: -0.62,
    capLocalDir: DEFAULT_CAP_DIR,
    landable: true,
    surfaceUrl: '/models/cyberpunk_city.glb',
    fogColor: 0x051622,
    maxFogDensity: 0.0044,
    skyColor: 0x030a14,
    particleColor: 0x00e5ff,
    glowCss: 'rgba(0, 210, 255, 0.45)',
    lowOrbitOffset: new THREE.Vector3(0.0, 6.816 * 2.25, 6.816 * 0.85),
    lowOrbitLookAt: new THREE.Vector3(0.0, 6.816, 0.0),
    highCloudOffset: new THREE.Vector3(-0.06, 6.816 * 1.48, 6.816 * 0.36),
    aerialOffset: new THREE.Vector3(-0.012, 6.816 + 0.145, 0.195),
    aerialLookAt: new THREE.Vector3(0.005, 6.816 + 0.175, -0.055),
    sunColor: 0x2a76a6,
    sunIntensity: 1.15,
    ambientColor: 0x0a2234,
    ambientIntensity: 1.38,
    hemiSkyColor: 0x0c344e,
    hemiGroundColor: 0x320a2c,
    hemiIntensity: 1.75,
    localLightColor: 0x00d8ff,
    localBounceColor: 0xff2490,
    bloomStrength: 0.48,
    skyDome: {
      zenith: 0x020c1a,
      mid: 0x082238,
      horizon: 0x104462,
      sunGlow: 0xff2a95,
      zenithAlpha: 0.68,
      starFloor: 0.35,
    },
  },
  p3: {
    id: 'p3',
    navKey: '3',
    name: 'Planeta 3 · Mundo Medieval (Perugius)',
    spinnerName: 'OrbitSpinner_P3',
    rootName: 'Planet_03_Medieval_Root',
    bodyName: 'Planet_03_Medieval_Body',
    semiMajorAxis: 127.2,
    eccentricity: 0.05,
    orbitOmega: 0.000797, // Ley de Kepler (a^-1.5)
    localRadius: 7.296, // worldRadius = 1149.1 u, atmoTopAlt = 827.4 u (~51.3 km)
    groundFloorAlt: 0.95,
    glbLocalScale: 0.004 * S_SURF,
    kmScale: 32640,
    rotationSpeed: 0.01,
    axialOmega: 0.011,
    axialTiltX: THREE.MathUtils.degToRad(8.0),
    axialTiltZ: THREE.MathUtils.degToRad(-23.5),
    initialSpinAngle: -1.18,
    capLocalDir: DEFAULT_CAP_DIR,
    landable: true,
    surfaceUrl: '/models/medieval_world.glb',
    fogColor: 0xd48a42,
    maxFogDensity: 0.0026,
    skyColor: 0x829bb8,
    particleColor: 0xffcf78,
    glowCss: 'rgba(255, 185, 85, 0.45)',
    lowOrbitOffset: new THREE.Vector3(-0.32, 7.296 * 2.25, 7.296 * 0.85),
    lowOrbitLookAt: new THREE.Vector3(0.0, 7.296, 0.0),
    highCloudOffset: new THREE.Vector3(-0.18, 7.296 * 1.48, 7.296 * 0.36),
    aerialOffset: new THREE.Vector3(-0.025, 7.296 + 0.08, 0.092),
    aerialLookAt: new THREE.Vector3(0.003, 7.296 + 0.054, -0.002),
    sunColor: 0xffcf88,
    sunIntensity: 3.15,
    ambientColor: 0x6c543e,
    ambientIntensity: 1.55,
    hemiSkyColor: 0xffc878,
    hemiGroundColor: 0x264420,
    hemiIntensity: 1.8,
    localLightColor: 0xffba60,
    localBounceColor: 0x487a38,
    bloomStrength: 0.42,
    skyDome: {
      zenith: 0x1e6ae0,
      mid: 0x62b4ff,
      horizon: 0xffcf88,
      sunGlow: 0xfff0c0,
      zenithAlpha: 1.0,
      starFloor: 0.0,
    },
  },
  p4: {
    id: 'p4',
    navKey: '4',
    name: 'Planeta 4 · Coruscant (Senado)',
    spinnerName: 'OrbitSpinner_P4',
    rootName: 'Planet_04_Ecumenopolis_Root',
    bodyName: 'Planet_04_Ecumenopolis_Body',
    semiMajorAxis: 170.4,
    eccentricity: 0.04,
    orbitOmega: 0.000516, // Ley de Kepler (a^-1.5)
    localRadius: 7.776, // worldRadius = 1224.7 u, atmoTopAlt = 881.8 u (~54.7 km)
    groundFloorAlt: 0.95,
    glbLocalScale: 0.0039 * S_SURF,
    kmScale: 36000,
    rotationSpeed: 0.009,
    axialOmega: 0.010,
    axialTiltX: THREE.MathUtils.degToRad(-6.0),
    axialTiltZ: THREE.MathUtils.degToRad(24.0),
    initialSpinAngle: -0.88,
    capLocalDir: DEFAULT_CAP_DIR,
    landable: true,
    surfaceUrl: '/models/coruscant.glb',
    fogColor: 0xc65822,
    maxFogDensity: 0.0025,
    skyColor: 0x441a0a,
    particleColor: 0xff944d,
    glowCss: 'rgba(255, 130, 55, 0.45)',
    lowOrbitOffset: new THREE.Vector3(0.0, 7.776 * 2.25, 7.776 * 0.85),
    lowOrbitLookAt: new THREE.Vector3(0.0, 7.776, 0.0),
    highCloudOffset: new THREE.Vector3(0.08, 7.776 * 1.48, 7.776 * 0.36),
    aerialOffset: new THREE.Vector3(0.0, 7.776 + 0.042, 0.102),
    aerialLookAt: new THREE.Vector3(0.0, 7.776 + 0.011, -0.016),
    sunColor: 0xffa054,
    sunIntensity: 2.75,
    ambientColor: 0x5c2c16,
    ambientIntensity: 1.55,
    hemiSkyColor: 0xff9848,
    hemiGroundColor: 0x5e2a10,
    hemiIntensity: 1.85,
    localLightColor: 0xff8c38,
    localBounceColor: 0xffb85c,
    bloomStrength: 0.52,
    skyDome: {
      zenith: 0x3b180e,
      mid: 0x8c3b18,
      horizon: 0xf48436,
      sunGlow: 0xffc878,
      zenithAlpha: 0.95,
      starFloor: 0.06,
    },
  },
  p5: {
    id: 'p5',
    navKey: null,
    name: 'Planeta 5 · Gigante Gaseoso / Anillos',
    spinnerName: 'OrbitSpinner_P5',
    rootName: 'Planet_05_Pandora_Root',
    bodyName: 'Planet_05_Pandora_Body',
    semiMajorAxis: 220.8,
    eccentricity: 0.06,
    orbitOmega: 0.000352, // Ley de Kepler (a^-1.5)
    localRadius: 8.88, // worldRadius = 1398.6 u
    groundFloorAlt: 2.0,
    kmScale: 56640,
    rotationSpeed: 0.05,
    axialOmega: 0.024,
    axialTiltX: THREE.MathUtils.degToRad(7.0),
    axialTiltZ: THREE.MathUtils.degToRad(26.0),
    initialSpinAngle: 0.0,
    landable: false,
  },
};

export class GalaxySceneManager {
  constructor({
    scene,
    camera,
    renderer,
    controls,
    starfield,
    cockpitParticles,
    bloomPass,
    ssaoPass,
    radialBlurPass,
    onStatusUpdate,
  }) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer || null;
    this.controls = controls;
    this.starfield = starfield;
    this.cockpitParticles = cockpitParticles;
    this.bloomPass = bloomPass;
    this.ssaoPass = ssaoPass || null;
    this.radialBlurPass = radialBlurPass || null;
    this.onStatusUpdate = onStatusUpdate || (() => {});

    // Decodificador Draco 100% local
    this.dracoLoader = new DRACOLoader();
    this.dracoLoader.setDecoderPath('/draco/');
    this.dracoLoader.preload();

    this.gltfLoader = new GLTFLoader();
    this.gltfLoader.setDRACOLoader(this.dracoLoader);

    this.modelCache = new Map();

    // Contenedor continuo del Sistema Solar (permanece visible incluso a ras de suelo)
    this.orbitalGroup = new THREE.Group();
    this.orbitalGroup.name = 'Continuous_Solar_System_Container';
    this.orbitalGroup.scale.setScalar(SOLAR_SCALE);
    this.scene.add(this.orbitalGroup);

    this.planetNodes = new Map();
    this.orbitLines = [];
    this.sunNode = null;
    this.sunPlasmaUniforms = null;
    this.crystalPalaceAnchor = null;
    this.crystalPalaceDetailed = null;
    this.crystalPalaceLoading = false;

    this.mode = 'ORBIT';
    this.currentDominantPlanet = null;
    this.lastBannerPlanetId = null;
    this.lastP2DistrictId = 'city_center';
    this.lastP2DistrictName = 'City Center · Corpo Plaza';
    this.elapsedTime = 0;
    this.simulationTime = 0;

    // Control de velocidad temporal [T]: 1x -> 10x -> 60x (solo órbitas y rotación planetaria)
    this.timeScales = [1, 10, 60];
    this.timeScaleIndex = 0;
    this.timeScale = 1;

    // Vectores y colores reutilizables (sin asignaciones por frame)
    this._tmpInvQuat = new THREE.Quaternion();
    this._tmpCapInvQuat = new THREE.Quaternion();
    this._tmpLocalDir = new THREE.Vector3();
    this._tmpRadial = new THREE.Vector3();
    this._tmpSunDir = new THREE.Vector3();
    this._tmpPlanetToSun = new THREE.Vector3();
    this._tmpUp = new THREE.Vector3(0, 1, 0);
    this._tmpStationPos = new THREE.Vector3();
    this._tmpColorA = new THREE.Color();
    this._tmpColorB = new THREE.Color();
    this._tmpColorC = new THREE.Color();
    this._tmpSkyColor = new THREE.Color();
    this._tmpFogColor = new THREE.Color();
    this._p2Atmo = {
      fogDay: new THREE.Color(),
      fogNight: new THREE.Color(),
      fogDusk: new THREE.Color(),
      hemiSky: new THREE.Color(),
      hemiGround: new THREE.Color(),
      ambient: new THREE.Color(),
      localLight: new THREE.Color(),
      localBounce: new THREE.Color(),
      fogDensity: 0.0044,
      bloomCap: 0.48,
    };
    this._identityQuat = new THREE.Quaternion();
    this._tmpCamFwd = new THREE.Vector3();
    this._tmpRayOccl = new THREE.Vector3();
    this._tmpLocalCam = new THREE.Vector3();
    this._tmpIblZenith = new THREE.Color(0x050812);
    this._tmpIblHorizon = new THREE.Color(0x14223a);
    this._tmpIblGround = new THREE.Color(0x04060c);
    this._tmpIblSun = new THREE.Color(0xffe8c0);

    this.skyDome = createAtmosphericSkyDome();
    this.scene.add(this.skyDome);

    // Cono de choque cónico supersónico (Mach Prandtl-Glauert) acoplado al eje delantero de cámara
    const mach = createSupersonicShockwaveCone();
    this.machConeMesh = mach.mesh;
    this.machConeUniforms = mach.uniforms;
    this.camera.add(this.machConeMesh);

    this.solarLensflare = null;
    this.solarLensflareElements = [];

    this._setupLighting();
    this._initIblPipeline();
  }

  _initIblPipeline() {
    if (!this.renderer || typeof this.renderer.getContext !== 'function') {
      this.pmremGenerator = null;
      return;
    }
    this.pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    this.pmremGenerator.compileEquirectangularShader();
    this.envRenderTarget = null;
    this._lastIblTime = -99.0;
    this._lastIblPlanetId = null;
    this._lastIblSunElev = -9.0;
    this._lastIblAltRatio = -9.0;

    this.iblScene = new THREE.Scene();
    this.iblUniforms = {
      uZenithColor: { value: new THREE.Color(0x1852a8) },
      uHorizonColor: { value: new THREE.Color(0x78c4e8) },
      uGroundColor: { value: new THREE.Color(0x18281c) },
      uSunDir: { value: new THREE.Vector3(0.4, 0.7, 0.3) },
      uSunColor: { value: new THREE.Color(2.4, 2.1, 1.6) },
    };
    const iblDomeGeo = new THREE.SphereGeometry(20, 24, 16);
    const iblDomeMat = new THREE.ShaderMaterial({
      uniforms: this.iblUniforms,
      vertexShader: /* glsl */ `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uZenithColor;
        uniform vec3 uHorizonColor;
        uniform vec3 uGroundColor;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        varying vec3 vDir;
        void main() {
          vec3 d = normalize(vDir);
          float h = d.y;
          vec3 col = h >= 0.0
            ? mix(uHorizonColor, uZenithColor, smoothstep(0.0, 0.78, h))
            : mix(uHorizonColor * 0.75, uGroundColor, smoothstep(0.0, -0.45, h));
          float sunSpot = pow(max(dot(d, normalize(uSunDir)), 0.0), 28.0);
          col += uSunColor * sunSpot * 1.4;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
      side: THREE.BackSide,
      depthWrite: false,
    });
    this.iblScene.add(new THREE.Mesh(iblDomeGeo, iblDomeMat));
  }

  _updateDynamicIbl({ planetId, zenithColor, horizonColor, groundColor, sunDir, sunColor, sunElev, altRatio, intensity }) {
    if (!this.pmremGenerator || !this.iblScene) return;
    this.scene.environmentIntensity = intensity;

    const dtIbl = this.elapsedTime - this._lastIblTime;
    const needUpdate =
      planetId !== this._lastIblPlanetId ||
      Math.abs(sunElev - this._lastIblSunElev) > 0.06 ||
      Math.abs(altRatio - this._lastIblAltRatio) > 0.08 ||
      dtIbl > 0.45;
    if (!needUpdate) return;

    this.iblUniforms.uZenithColor.value.copy(zenithColor);
    this.iblUniforms.uHorizonColor.value.copy(horizonColor);
    this.iblUniforms.uGroundColor.value.copy(groundColor);
    this.iblUniforms.uSunDir.value.copy(sunDir).normalize();
    this.iblUniforms.uSunColor.value.copy(sunColor).multiplyScalar(Math.max(0.25, intensity * 2.2));

    const prevRT = this.envRenderTarget;
    this.envRenderTarget = this.pmremGenerator.fromScene(this.iblScene, 0.04);
    this.scene.environment = this.envRenderTarget.texture;
    if (prevRT) prevRT.dispose();

    this._lastIblTime = this.elapsedTime;
    this._lastIblPlanetId = planetId;
    this._lastIblSunElev = sunElev;
    this._lastIblAltRatio = altRatio;
  }

  _setupLighting() {
    this.ambientLight = new THREE.AmbientLight(0x1c2636, 0.55);
    this.scene.add(this.ambientLight);

    this.hemiLight = new THREE.HemisphereLight(0x78a4e0, 0x10141c, 0.42);
    this.scene.add(this.hemiLight);

    // Luz puntual potente del Sol Central sin decaimiento excesivo para iluminar todos los planetas en órbita
    this.solarPointLight = new THREE.PointLight(0xfff0d0, 3.8, 0, 0.0);
    this.solarPointLight.position.set(0, 0, 0);
    this.scene.add(this.solarPointLight);

    // Luz direccional solar atmosférica con sombras PCFSoftShadowMap 2048x2048 y frustum dinámico en superficie
    this.planetaryDirLight = new THREE.DirectionalLight(0xffe2b0, 1.4);
    this.planetaryDirLight.position.set(-400, 600, 350);
    this.planetaryDirLight.castShadow = false;
    this.planetaryDirLight.shadow.mapSize.set(2048, 2048);
    this.planetaryDirLight.shadow.camera.near = 4.0;
    this.planetaryDirLight.shadow.camera.far = 520.0;
    const sExt = 180.0;
    this.planetaryDirLight.shadow.camera.left = -sExt;
    this.planetaryDirLight.shadow.camera.right = sExt;
    this.planetaryDirLight.shadow.camera.top = sExt;
    this.planetaryDirLight.shadow.camera.bottom = -sExt;
    this.planetaryDirLight.shadow.bias = -0.0004;
    this.planetaryDirLight.shadow.normalBias = 0.03;
    this.scene.add(this.planetaryDirLight);
    this.scene.add(this.planetaryDirLight.target);

    // Luces puntuales locales adaptativas por altitud (atmósfera superior + reflejo de cañón/selva)
    this.localAtmoLight = new THREE.PointLight(0xffffff, 0.0, 280, 0.35);
    this.scene.add(this.localAtmoLight);

    this.localBounceLight = new THREE.PointLight(0xffffff, 0.0, 240, 0.35);
    this.scene.add(this.localBounceLight);
  }

  /**
   * Transforma el Sol en un disco solar circular nítido (mitad del radio anterior) con
   * oscurecimiento al limbo, corona compacta y rayos de difracción radiales finos.
   */
  _enhanceLuminousSun(solarRoot) {
    this.sunNode = solarRoot.getObjectByName('Central_Sun_Photosphere');
    const sunRoot = solarRoot.getObjectByName('Central_Star_Sun_Root') || this.sunNode;
    if (!this.sunNode) return;

    // Escala equilibrada del Sol para el Sistema Solar 4.8x con corona compacta y difracción proporcional
    this.sunNode.scale.setScalar(2.72);

    this.sunPlasmaUniforms = {
      uTime: { value: 0 },
      uCoreColor: { value: new THREE.Vector3(3.4, 2.35, 0.72) },
      uHotColor: { value: new THREE.Vector3(4.0, 3.1, 1.45) },
      uLimbColor: { value: new THREE.Vector3(2.2, 0.85, 0.14) },
    };

    const plasmaMat = new THREE.ShaderMaterial({
      uniforms: this.sunPlasmaUniforms,
      vertexShader: /* glsl */ `
        #include <common>
        #include <logdepthbuf_pars_vertex>
        varying vec3 vLocalDir;
        varying vec3 vWorldPos;
        varying vec3 vWorldNorm;
        void main() {
          vLocalDir = length(position) > 0.0001 ? normalize(position) : vec3(0.0, 1.0, 0.0);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vWorldNorm = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * wp;
          #include <logdepthbuf_vertex>
        }
      `,
      fragmentShader: /* glsl */ `
        #include <common>
        #include <logdepthbuf_pars_fragment>
        uniform float uTime;
        uniform vec3 uCoreColor;
        uniform vec3 uHotColor;
        uniform vec3 uLimbColor;
        varying vec3 vLocalDir;
        varying vec3 vWorldPos;
        varying vec3 vWorldNorm;

        float solarTurbulence(vec3 p, float t) {
          float s = 0.0;
          s += sin(p.x * 7.0 + t * 0.9) * cos(p.y * 6.5 - t * 0.7) * sin(p.z * 7.2 + t * 0.6);
          s += 0.5 * sin(p.x * 15.0 - t * 1.4) * sin(p.y * 14.0 + t * 1.1) * cos(p.z * 16.0);
          return clamp(s * 0.48 + 0.52, 0.0, 1.0);
        }

        void main() {
          #include <logdepthbuf_fragment>
          float gran = solarTurbulence(vLocalDir, uTime);
          vec3 vDelta = cameraPosition - vWorldPos;
          vec3 viewDir = length(vDelta) > 0.0001 ? normalize(vDelta) : vec3(0.0, 1.0, 0.0);
          vec3 wn = length(vWorldNorm) > 0.0001 ? normalize(vWorldNorm) : vec3(0.0, 1.0, 0.0);

          // Borde nítido con leve oscurecimiento al limbo
          float ndotv = max(dot(wn, viewDir), 0.0001);
          float limb = pow(ndotv, 0.38);

          vec3 col = mix(uLimbColor, uCoreColor, smoothstep(0.08, 0.65, limb));
          col = mix(col, uHotColor, smoothstep(0.6, 0.95, gran) * limb * 0.65);
          col = clamp(col, 0.0, 4.0);

          gl_FragColor = vec4(col, 1.0);
        }
      `,
      fog: false,
    });

    this.sunNode.traverse((child) => {
      if (child.isMesh) {
        child.material = plasmaMat;
      }
    });

    // Corona compacta ceñida al borde del disco (radio reducido a la mitad)
    const coronaMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Vector3(2.8, 1.35, 0.35) },
      },
      vertexShader: /* glsl */ `
        #include <common>
        #include <logdepthbuf_pars_vertex>
        varying vec3 vWorldPos;
        varying vec3 vWorldNorm;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vWorldNorm = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * wp;
          #include <logdepthbuf_vertex>
        }
      `,
      fragmentShader: /* glsl */ `
        #include <common>
        #include <logdepthbuf_pars_fragment>
        uniform vec3 uColor;
        varying vec3 vWorldPos;
        varying vec3 vWorldNorm;
        void main() {
          #include <logdepthbuf_fragment>
          vec3 vDelta = cameraPosition - vWorldPos;
          vec3 viewDir = length(vDelta) > 0.0001 ? normalize(vDelta) : vec3(0.0, 1.0, 0.0);
          vec3 wn = length(vWorldNorm) > 0.0001 ? normalize(vWorldNorm) : vec3(0.0, 1.0, 0.0);
          float ndotv = abs(dot(wn, viewDir));
          float glow = pow(max(1.0 - ndotv, 0.0001), 4.6) * smoothstep(0.02, 0.4, ndotv);
          vec3 col = clamp(uColor * glow, 0.0, 3.0);
          gl_FragColor = vec4(col, clamp(glow * 0.42, 0.0, 0.65));
        }
      `,
      transparent: true,
      depthWrite: false,
      fog: false,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const coronaMesh = new THREE.Mesh(new THREE.SphereGeometry(2.52 * 3.2, 48, 48), coronaMat);
    coronaMesh.name = 'Solar_Tight_Corona';

    // Rayos de luz radiales finos (6 haces de difracción sutiles en Sprite aditivo)
    const rayCanvas = document.createElement('canvas');
    rayCanvas.width = 512;
    rayCanvas.height = 512;
    const ctx = rayCanvas.getContext('2d');
    ctx.clearRect(0, 0, 512, 512);
    const cx = 256;
    const cy = 256;

    // Núcleo de resplandor ajustado
    const coreGrad = ctx.createRadialGradient(cx, cy, 4, cx, cy, 130);
    coreGrad.addColorStop(0.0, 'rgba(255, 245, 205, 0.72)');
    coreGrad.addColorStop(0.28, 'rgba(255, 195, 100, 0.24)');
    coreGrad.addColorStop(1.0, 'rgba(255, 140, 40, 0.0)');
    ctx.fillStyle = coreGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 130, 0, Math.PI * 2);
    ctx.fill();

    // 6 rayos de difracción finos y elegantes
    const rayAngles = [0, Math.PI / 3, (2 * Math.PI) / 3];
    rayAngles.forEach((ang, idx) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ang + 0.18);
      const len = idx === 0 ? 242 : 210;
      const g = ctx.createLinearGradient(-len, 0, len, 0);
      g.addColorStop(0.0, 'rgba(255, 210, 120, 0.0)');
      g.addColorStop(0.32, 'rgba(255, 225, 160, 0.22)');
      g.addColorStop(0.5, 'rgba(255, 250, 225, 0.55)');
      g.addColorStop(0.68, 'rgba(255, 225, 160, 0.22)');
      g.addColorStop(1.0, 'rgba(255, 210, 120, 0.0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(0, 0, len, 3.2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    const rayTex = new THREE.CanvasTexture(rayCanvas);
    rayTex.colorSpace = THREE.SRGBColorSpace;
    const rayMat = new THREE.SpriteMaterial({
      map: rayTex,
      color: 0xffe4b0,
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
      fog: false,
      blending: THREE.AdditiveBlending,
    });
    const raySprite = new THREE.Sprite(rayMat);
    raySprite.name = 'Solar_Diffraction_Rays';
    raySprite.scale.set(10.8 * 3.2, 10.8 * 3.2, 1.0);

    if (sunRoot) {
      sunRoot.add(coronaMesh);
      sunRoot.add(raySprite);
    }

    this._createSolarLensflare();
  }

  _createSolarLensflare() {
    if (this.solarLensflare || typeof document === 'undefined') return;
    const makeFlareTex = (sz, isCore) => {
      const c = document.createElement('canvas');
      c.width = sz;
      c.height = sz;
      const ctx = c.getContext('2d');
      const mid = sz * 0.5;
      if (isCore) {
        const g = ctx.createRadialGradient(mid, mid, 2, mid, mid, mid);
        g.addColorStop(0.0, 'rgba(255, 252, 240, 0.95)');
        g.addColorStop(0.18, 'rgba(255, 232, 175, 0.52)');
        g.addColorStop(0.45, 'rgba(255, 180, 95, 0.14)');
        g.addColorStop(1.0, 'rgba(255, 140, 40, 0.0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, sz, sz);
        // Destello horizontal anamórfico sutil
        const hg = ctx.createLinearGradient(0, mid, sz, mid);
        hg.addColorStop(0.0, 'rgba(180, 225, 255, 0.0)');
        hg.addColorStop(0.5, 'rgba(255, 240, 200, 0.42)');
        hg.addColorStop(1.0, 'rgba(180, 225, 255, 0.0)');
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.ellipse(mid, mid, mid * 0.96, Math.max(2, sz * 0.025), 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        const g = ctx.createRadialGradient(mid, mid, mid * 0.45, mid, mid, mid * 0.96);
        g.addColorStop(0.0, 'rgba(255, 255, 255, 0.0)');
        g.addColorStop(0.58, 'rgba(165, 215, 255, 0.22)');
        g.addColorStop(0.82, 'rgba(255, 210, 150, 0.28)');
        g.addColorStop(1.0, 'rgba(255, 255, 255, 0.0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(mid, mid, mid * 0.96, 0, Math.PI * 2);
        ctx.fill();
      }
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };

    const texCore = makeFlareTex(256, true);
    const texGhost = makeFlareTex(128, false);
    const lensflare = new Lensflare();
    lensflare.name = 'Central_Solar_Lensflare';
    lensflare.userData.skipSSAO = true;

    const specs = [
      { tex: texCore, size: 320, dist: 0.0, hex: 0xfff0d0 },
      { tex: texGhost, size: 78, dist: 0.34, hex: 0xffe0a8 },
      { tex: texGhost, size: 54, dist: 0.58, hex: 0x8ad0ff },
      { tex: texGhost, size: 96, dist: 0.88, hex: 0xffb878 },
    ];
    this.solarLensflareElements = specs.map((sp) => {
      const col = new THREE.Color(sp.hex);
      const el = new LensflareElement(sp.tex, sp.size, sp.dist, col.clone());
      el.baseColor = col;
      lensflare.addElement(el);
      return el;
    });
    lensflare.position.set(0, 0, 0);
    this.scene.add(lensflare);
    this.solarLensflare = lensflare;
  }

  setRenderer(renderer) {
    this.renderer = renderer || null;
    if (!this.pmremGenerator) {
      this._initIblPipeline();
    }
  }

  _hideAllReflectiveWaters(excludeNode = null) {
    for (const [, pNode] of this.planetNodes) {
      if (pNode === excludeNode || !pNode.reflectiveWaters) continue;
      for (const rw of pNode.reflectiveWaters) {
        if (rw.water) rw.water.visible = false;
      }
    }
  }

  _updateReflectiveWaters(planetNode, allowReflection, submergedRatio, sunDir) {
    if (!planetNode || !planetNode.reflectiveWaters || !planetNode.reflectiveWaters.length) return;
    if (!allowReflection) {
      for (const rw of planetNode.reflectiveWaters) {
        if (rw.water) rw.water.visible = false;
      }
      return;
    }

    planetNode.surfaceCapGroup.updateMatrixWorld();
    let bestRw = null;
    let bestDistSq = 240.0 * 240.0;

    for (const rw of planetNode.reflectiveWaters) {
      if (!rw.water) continue;
      if (rw.isOceanSurface && submergedRatio > 0.06) {
        rw.water.visible = false;
        continue;
      }
      this._tmpStationPos.copy(rw.centerLocal).applyMatrix4(planetNode.surfaceCapGroup.matrixWorld);
      const dSq = this._tmpStationPos.distanceToSquared(this.camera.position);
      if (dSq < bestDistSq) {
        bestDistSq = dSq;
        bestRw = rw;
      }
    }

    for (const rw of planetNode.reflectiveWaters) {
      if (!rw.water) continue;
      const isChosen = rw === bestRw;
      rw.water.visible = isChosen;
      if (isChosen && rw.water.material?.uniforms) {
        const wu = rw.water.material.uniforms;
        if (wu.eye) wu.eye.value.copy(this.camera.position);
        if (wu.sunDirection) wu.sunDirection.value.copy(sunDir).normalize();
        if (wu.sunColor) wu.sunColor.value.copy(this.planetaryDirLight.color);
      }
    }
  }

  _updateSolarLensflare(inAtmosphere, isUnderwater, sunElev, atmoDepth, submergedRatio) {
    if (!this.solarLensflare || !this.solarLensflareElements.length) return;
    const camDistToSunSq = this.camera.position.lengthSq();
    if (camDistToSunSq < 25.0 || isUnderwater) {
      this.solarLensflare.visible = false;
      return;
    }

    const dSun = Math.sqrt(camDistToSunSq);
    this._tmpRayOccl.copy(this.camera.position).negate().multiplyScalar(1.0 / dSun);

    let occFactor = 1.0;
    for (const [, pNode] of this.planetNodes) {
      const oc = this._tmpStationPos.copy(pNode.currWorldPos).sub(this.camera.position);
      const tProj = oc.dot(this._tmpRayOccl);
      if (tProj > 0.0 && tProj < dSun) {
        const perpSq = Math.max(0.0, oc.lengthSq() - tProj * tProj);
        const r = pNode.config.localRadius * SOLAR_SCALE;
        if (perpSq < r * r) {
          occFactor = 0.0;
          break;
        } else if (perpSq < r * r * 1.08) {
          const d = Math.sqrt(perpSq) / r;
          occFactor = Math.min(occFactor, THREE.MathUtils.smoothstep(d, 1.0, 1.04));
        }
      }
    }

    if (inAtmosphere && occFactor > 0.01) {
      const horizonFade = THREE.MathUtils.smoothstep(sunElev, -0.04, 0.08);
      const atmoExtinction = THREE.MathUtils.lerp(1.0, 0.68, atmoDepth);
      occFactor *= horizonFade * atmoExtinction * (1.0 - submergedRatio);
    }

    if (occFactor <= 0.01) {
      this.solarLensflare.visible = false;
      return;
    }

    this.solarLensflare.visible = true;
    for (const el of this.solarLensflareElements) {
      if (el.color && el.baseColor) {
        el.color.copy(el.baseColor).multiplyScalar(occFactor);
      }
    }
  }

  /**
   * Cicla la escala temporal de simulación orbital y rotación axial: 1x -> 10x -> 60x.
   */
  cycleTimeScale() {
    this.timeScaleIndex = (this.timeScaleIndex + 1) % this.timeScales.length;
    this.timeScale = this.timeScales[this.timeScaleIndex];
    return this.timeScale;
  }

  /**
   * Sincroniza la cúpula de cielo, campo estelar y luces locales después de actualizar el vuelo manual
   * para evitar cualquier desfase de 1 frame al rotar con el planeta a 10x/60x.
   */
  syncCameraPostFlight() {
    this.starfield.position.copy(this.camera.position);
    this.skyDome.position.copy(this.camera.position);
    this.camera.updateMatrixWorld();
    sharedUniforms.uSunViewPos.value.set(0, 0, 0).applyMatrix4(this.camera.matrixWorldInverse);
    if (this.ssaoPass && this.ssaoPass.enabled && this.ssaoPass.ssaoMaterial?.uniforms) {
      const sUniforms = this.ssaoPass.ssaoMaterial.uniforms;
      if (sUniforms.cameraProjectionMatrix) {
        sUniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix);
      }
      if (sUniforms.cameraInverseProjectionMatrix) {
        sUniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse);
      }
    }
    if (this.localAtmoLight.intensity > 0.001 || this.localBounceLight.intensity > 0.001) {
      this.localAtmoLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial, 18.0);
      this.localBounceLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial, -8.0);
    }
  }

  async _loadGLB(url) {
    if (this.modelCache.has(url)) {
      return this.modelCache.get(url);
    }

    const gltf = await new Promise((resolve, reject) => {
      this.gltfLoader.load(
        url,
        (data) => resolve(data),
        undefined,
        (err) => reject(err)
      );
    });

    const root = gltf.scene;
    root.traverse((child) => {
      if (!child.isMesh) return;
      child.frustumCulled = true;
      const mats = Array.isArray(child.material) ? child.material : [child.material];
      for (const mat of mats) {
        if (!mat) continue;
        if (mat.emissiveIntensity !== undefined && mat.emissiveIntensity > 3.2) {
          mat.emissiveIntensity = 2.2 + Math.log10(mat.emissiveIntensity) * 0.85;
        }
      }
    });

    this.modelCache.set(url, root);
    return root;
  }

  /**
   * Inicializa el Sistema Solar: ilumina el Sol, genera las esferas planetarias 128x128
   * con mapas de alta resolución, nubes y atmósferas Fresnel, y prepara la carga oculta
   * hasta entrada atmosférica de cada mundo.
   */
  async init(onProgress) {
    if (onProgress) onProgress(20, 'Cargando Sistema Solar (solar_system.glb)...');
    const solarRoot = await this._loadGLB('/models/solar_system.glb');
    this.orbitalGroup.add(solarRoot);

    this._enhanceLuminousSun(solarRoot);

    // Recopilar y escalar 4.8x TODAS las trazas orbitales keplerianas (`Orbit_P*` y `*_Orbit`)
    solarRoot.traverse((child) => {
      if (child.isMesh && (/^Orbit_P/i.test(child.name) || /_Orbit$/i.test(child.name))) {
        child.scale.multiplyScalar(PLANET_SCALE_MULT);
        const mat = child.material;
        if (mat) {
          mat.transparent = true;
          mat.depthWrite = false;
          this.orbitLines.push({
            mesh: child,
            material: mat,
            baseOpacity: mat.opacity ?? 1.0,
          });
        }
      }
    });

    if (onProgress) onProgress(50, 'Generando planetas 128×128, Pandora y atmósferas Fresnel...');

    for (const [key, cfg] of Object.entries(PLANET_CONFIGS)) {
      const spinnerObj = solarRoot.getObjectByName(cfg.spinnerName);
      const rootObj = solarRoot.getObjectByName(cfg.rootName);
      const bodyObj = solarRoot.getObjectByName(cfg.bodyName);
      if (!rootObj) continue;

      const euler = new THREE.Euler().setFromQuaternion(
        spinnerObj ? spinnerObj.quaternion : new THREE.Quaternion(),
        'YXZ'
      );
      const initialAngle = euler.y || 0;
      const a0 = cfg.semiMajorAxis;
      const e0 = cfg.eccentricity || 0.04;
      const r0 = (a0 * (1.0 - e0 * e0)) / (1.0 + e0 * Math.cos(initialAngle));
      rootObj.position.set(r0, 0, 0);

      // Recopilar lunas locales pequeñas y despejadas (con nombre legible, radio y seguimiento orbital)
      const moonOrbits = [];
      let moonIdx = 0;
      const MOON_DISPLAY_NAMES = {
        P1_Moon_A_Ghomrassen: 'Luna Ghomrassen',
        P1_Moon_B_Guermessa: 'Luna Guermessa',
        P2_Moon_NeoLuna: 'Neo-Luna',
        P3_Moon_A_Argent: 'Luna Argent',
        P3_Moon_B_Crimson: 'Luna Crimson',
        P4_Moon_Centax_1: 'Centax I',
        P4_Moon_Centax_2: 'Centax II',
        P4_Moon_Centax_3: 'Centax III',
        P5_Moon_1_InnerShepherd: 'Pastora Interior',
        P5_Moon_2_Polyphemus_Minor: 'Polyphemus Minor',
        P5_Moon_3_Eywa_Outpost: 'Puesto Eywa',
      };
      this.orbitalGroup.updateMatrixWorld(true);
      rootObj.children.forEach((ch) => {
        if (ch.name.includes('Moon') && !ch.name.endsWith('_Orbit')) {
          ch.scale.multiplyScalar(2.6);
          let estLocalRadius = 0.08;
          ch.traverse((m) => {
            if (m.isMesh && m.material) {
              m.material.fog = false;
              if (m.geometry) {
                if (!m.geometry.boundingSphere) m.geometry.computeBoundingSphere();
                const sr = (m.geometry.boundingSphere?.radius || 0.5) * Math.max(m.scale.x, m.scale.y, m.scale.z);
                if (sr > estLocalRadius) estLocalRadius = sr;
              }
            }
          });
          const minOrbitMult = 2.35 + moonIdx * 0.48;
          if (key === 'p1') {
            const rDist = cfg.localRadius * (2.35 + moonIdx * 0.62);
            const elev = rDist * (0.16 + moonIdx * 0.08);
            const startAng = moonIdx === 0 ? -1.85 : -0.78;
            ch.position.set(Math.cos(startAng) * rDist, elev, Math.sin(startAng) * rDist);
            rootObj.updateMatrixWorld(true);
            const initMoonW = new THREE.Vector3();
            ch.getWorldPosition(initMoonW);
            moonOrbits.push({
              index: moonIdx,
              rawName: ch.name,
              name: MOON_DISPLAY_NAMES[ch.name] || `Luna ${key.toUpperCase()}-${moonIdx + 1}`,
              node: ch,
              moonRadius: Math.max(20.0, estLocalRadius * Math.max(ch.scale.x, 1) * SOLAR_SCALE),
              baseRadius: rDist,
              angle: startAng,
              yOffset: elev,
              speed: 0.014 + moonIdx * 0.008,
              prevWorldPos: initMoonW.clone(),
              currWorldPos: initMoonW.clone(),
              deltaPos: new THREE.Vector3(),
            });
          } else {
            ch.position.multiplyScalar(PLANET_SCALE_MULT);
            if (ch.position.length() < cfg.localRadius * minOrbitMult) {
              ch.position.normalize().multiplyScalar(cfg.localRadius * minOrbitMult);
            }
            rootObj.updateMatrixWorld(true);
            const initMoonW = new THREE.Vector3();
            ch.getWorldPosition(initMoonW);
            const horizR = Math.max(cfg.localRadius * minOrbitMult * 0.85, Math.hypot(ch.position.x, ch.position.z));
            moonOrbits.push({
              index: moonIdx,
              rawName: ch.name,
              name: MOON_DISPLAY_NAMES[ch.name] || `Luna ${key.toUpperCase()}-${moonIdx + 1}`,
              node: ch,
              moonRadius: Math.max(20.0, estLocalRadius * Math.max(ch.scale.x, 1) * SOLAR_SCALE),
              baseRadius: horizR,
              angle: Math.atan2(ch.position.z, ch.position.x),
              yOffset: ch.position.y,
              speed: 0.06 + (moonIdx % 3) * 0.03,
              prevWorldPos: initMoonW.clone(),
              currWorldPos: initMoonW.clone(),
              deltaPos: new THREE.Vector3(),
            });
          }
          moonIdx++;
        }
      });

      // Contenedor con inclinación axial + giro diurno alrededor del polo planetario
      const tiltGroup = new THREE.Group();
      tiltGroup.name = `${cfg.id}_Axial_Tilt`;
      tiltGroup.rotation.order = 'XZY';
      tiltGroup.rotation.x = cfg.axialTiltX || 0;
      tiltGroup.rotation.z = cfg.axialTiltZ || 0;
      rootObj.add(tiltGroup);

      const spinGroup = new THREE.Group();
      spinGroup.name = `${cfg.id}_Axial_Spin`;
      spinGroup.rotation.y = cfg.initialSpinAngle || 0;
      tiltGroup.add(spinGroup);

      let orbitalBundle = null;
      let atmosphereShell = null;
      let capFrame = null;

      if (cfg.landable) {
        // Ocultar completamente mallas originales heredadas (incluyendo Planet_01* oscuro de solar_system.glb)
        rootObj.traverse((ch) => {
          if (
            ch !== rootObj &&
            ch.isMesh &&
            (ch.name.includes('_Body') ||
              ch.name.includes('_Atmosphere') ||
              ch.name.includes('_Clouds') ||
              ch.name.includes('_DarkClouds') ||
              /^Planet_01/i.test(ch.name))
          ) {
            ch.visible = false;
          }
        });

        orbitalBundle = createOrbitalPlanet(cfg, SOLAR_SCALE);
        orbitalBundle.userBaseColors = {
          sunlit: new THREE.Color(orbitalBundle.cloudDeckPalette.sunlit),
          ambient: new THREE.Color(orbitalBundle.cloudDeckPalette.ambient),
          horizon: new THREE.Color(orbitalBundle.cloudDeckPalette.horizon),
        };
        spinGroup.add(orbitalBundle.group);
        atmosphereShell = orbitalBundle.atmosphere;

        // Marco local orientado hacia la latitud templada (~22° N) donde yace la ciudad/valle
        capFrame = new THREE.Group();
        capFrame.name = `${cfg.id}_Cap_Frame`;
        const capDir = cfg.capLocalDir
          ? cfg.capLocalDir.clone().normalize()
          : new THREE.Vector3(0, 1, 0);
        capFrame.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), capDir);
        spinGroup.add(capFrame);
      } else {
        // Mover cuerpo y anillos de P5 (sin tocar lunas ni tiltGroup) dentro del giro inclinado a escala 4.8x
        const bodyChildren = rootObj.children.filter(
          (c) => c !== tiltGroup && !c.name.includes('Moon') && !c.name.includes('_Orbit')
        );
        for (const bc of bodyChildren) {
          bc.scale.multiplyScalar(PLANET_SCALE_MULT);
          spinGroup.add(bc);
        }
        atmosphereShell = createFresnelAtmosphereShell(cfg, cfg.localRadius, 1.05);
        spinGroup.add(atmosphereShell);
      }

      // Contenedor para los detalles de superficie (.glb proyectado, torres, tráfico AV y Pandora);
      // Permanece STRICTAMENTE OCULTO (`visible = false`) hasta cruzar la atmósfera.
      const surfaceCapGroup = new THREE.Group();
      surfaceCapGroup.name = `${cfg.id}_Atmosphere_Surface_Detail`;
      surfaceCapGroup.visible = false;
      (capFrame || spinGroup).add(surfaceCapGroup);

      this.orbitalGroup.updateMatrixWorld(true);
      const initWorldPos = new THREE.Vector3();
      rootObj.getWorldPosition(initWorldPos);
      const initSpinQuat = new THREE.Quaternion();
      spinGroup.getWorldQuaternion(initSpinQuat);

      this.planetNodes.set(key, {
        config: cfg,
        spinner: spinnerObj,
        root: rootObj,
        tiltGroup,
        spinGroup,
        capFrame,
        body: bodyObj,
        orbitalBundle,
        atmosphereShell,
        surfaceCapGroup,
        surfaceLoaded: false,
        surfaceLoading: false,
        surfaceStreaming: null,
        surfaceTerrainActivated: false,
        lastActivatedThisFrame: 0,
        animators: [],
        nightMaterials: [],
        orbitAngle: initialAngle,
        spinAngle: cfg.initialSpinAngle || 0,
        prevWorldPos: initWorldPos.clone(),
        currWorldPos: initWorldPos.clone(),
        planetDeltaPos: new THREE.Vector3(),
        prevSpinWorldQuat: initSpinQuat.clone(),
        currSpinWorldQuat: initSpinQuat.clone(),
        spinQuatDelta: new THREE.Quaternion(),
        moonOrbits,
      });
    }

    // Estación Orbital Crystal Palace orbitando en órbita alta fuera de la atmósfera profunda 1.72 R de Night City
    this.crystalPalaceAnchor = solarRoot.getObjectByName('P2_Crystal_Palace_Station_Root');
    if (this.crystalPalaceAnchor) {
      this.crystalPalaceAnchor.position.set(
        -2.95 * PLANET_SCALE_MULT,
        2.15 * PLANET_SCALE_MULT,
        2.35 * PLANET_SCALE_MULT
      );
    }

    // Posición panorámica inicial viendo el Sol gigante y los 5 planetas 4.8x en órbita
    this.controls.setPose(new THREE.Vector3(0, 5600, 19800), new THREE.Vector3(0, 0, 0));

    if (onProgress) onProgress(85, 'Precargando Crystal Palace y superficies planetarias...');
    this.ensureCrystalPalaceLoaded();
    for (const key of ['p1', 'p3', 'p4', 'p2']) {
      this.ensurePlanetSurfaceLoaded(key);
    }

    if (onProgress) onProgress(100, 'Sistema estelar listo.');
  }

  async ensureCrystalPalaceLoaded() {
    if (this.crystalPalaceDetailed || this.crystalPalaceLoading || !this.crystalPalaceAnchor) {
      return this.crystalPalaceDetailed;
    }

    this.crystalPalaceLoading = true;
    try {
      const stationScene = await this._loadGLB('/models/crystal_palace.glb');
      const horizonProxy = stationScene.getObjectByName('Horizon_Planet_Root');
      if (horizonProxy) {
        horizonProxy.visible = false;
      }

      this.crystalPalaceAnchor.traverse((child) => {
        if (child.isMesh) {
          child.visible = false;
        }
      });

      stationScene.scale.setScalar(0.0072);
      stationScene.position.set(0, 0, 0);
      this.crystalPalaceAnchor.add(stationScene);
      this.crystalPalaceDetailed = stationScene;
    } catch (err) {
      console.error('Error cargando crystal_palace.glb:', err);
    } finally {
      this.crystalPalaceLoading = false;
    }

    return this.crystalPalaceDetailed;
  }

  /**
   * Construye o carga las estructuras de superficie + tráfico/vida del planeta dentro de `surfaceCapGroup`
   * (manteniéndolas ocultas mientras el usuario esté en el espacio u órbita alta).
   */
  async ensurePlanetSurfaceLoaded(planetKey) {
    const entry = this.planetNodes.get(planetKey);
    if (!entry || !entry.config.landable || entry.surfaceLoaded) {
      return entry?.surfacePromise || null;
    }
    if (entry.surfacePromise) {
      return entry.surfacePromise;
    }

    entry.surfaceLoading = true;
    const cfg = entry.config;

    entry.surfacePromise = (async () => {
      try {
        if (cfg.hasProceduralWorld) {
          // Mundo procedural global 360° de Pandora: 3 biomas, 5 monumentos icónicos y fauna distribuida
          const pandoraWorld = createPandoraSurfaceWorld(cfg);
          entry.surfaceCapGroup.add(pandoraWorld.group);
          entry.pandoraWorld = pandoraWorld;
          if (pandoraWorld.terrainSplatUniforms) {
            entry.splatUniforms = [pandoraWorld.terrainSplatUniforms];
          }
          if (pandoraWorld.reflectiveWaters) {
            entry.reflectiveWaters = pandoraWorld.reflectiveWaters;
          }

          const pandoraLife = createPandoraLifeSystem(cfg.localRadius, pandoraWorld);
          entry.surfaceCapGroup.add(pandoraLife.group);
          entry.animators.push(pandoraLife);
        } else if (cfg.surfaceUrl) {
          const glbScene = await this._loadGLB(cfg.surfaceUrl);
          projectGLBOntoSphericalCap(glbScene, cfg.localRadius, cfg.glbLocalScale, cfg.id);
          entry.surfaceCapGroup.add(glbScene);
          if (glbScene.userData?.splatUniforms?.length) {
            entry.splatUniforms = [...(entry.splatUniforms || []), ...glbScene.userData.splatUniforms];
          }

          if (cfg.id === 'p2') {
            this._calibrateNightCityMaterials(glbScene);

            // Anillo 2 (Suburbios Industriales sombríos) y Anillo 3 (Las Badlands áridas y eólicas)
            const zonedOutskirts = createNightCityZonedOutskirts(cfg);
            const ncTerrain = zonedOutskirts.group.getObjectByName('NC_7Districts_Coastal_Terrain');
            if (ncTerrain) ncTerrain.receiveShadow = true;
            const ncRoads = zonedOutskirts.group.getObjectByName('NC_Badlands_Desert_Roads');
            if (ncRoads) ncRoads.receiveShadow = true;
            if (zonedOutskirts.terrainSplatUniforms) {
              entry.splatUniforms = [...(entry.splatUniforms || []), zonedOutskirts.terrainSplatUniforms];
            }
            if (zonedOutskirts.bayWater) {
              entry.reflectiveWaters = [
                { water: zonedOutskirts.bayWater, centerLocal: zonedOutskirts.bayWater.position.clone(), isOceanSurface: false },
              ];
            }
            entry.surfaceCapGroup.add(zonedOutskirts.group);
            entry.animators.push(zonedOutskirts);

            // 350 vehículos voladores instanciados concentrados en Corpo Plaza / City Center
            const traffic = createUrbanTrafficSystem(cfg.id, cfg.localRadius, 350);
            entry.surfaceCapGroup.add(traffic.group);
            entry.animators.push(traffic);

            entry.animators.push(bindNightCityAnimations(glbScene));
          } else if (cfg.id === 'p4') {
            // Banda de rascacielos en el horizonte urbano (solo Coruscant, intacto)
            const horizonBand = createUrbanTowerBand(cfg, 1400);
            entry.surfaceCapGroup.add(horizonBand);

            // 350 vehículos voladores instanciados (InstancedMesh a 60 FPS)
            const traffic = createUrbanTrafficSystem(cfg.id, cfg.localRadius, 350);
            entry.surfaceCapGroup.add(traffic.group);
            entry.animators.push(traffic);

            entry.animators.push(bindCoruscantAnimations(glbScene));
          } else if (cfg.id === 'p3') {
            const medievalLife = createMedievalLifeSystem(cfg.localRadius);
            entry.surfaceCapGroup.add(medievalLife.group);
            entry.animators.push(medievalLife);

            // Agua reflectante en cuenca del río medieval de Perugius
            const p3WaterGeo = new THREE.CircleGeometry(cfg.localRadius * 0.038, 32);
            const p3Water = new Water(p3WaterGeo, {
              textureWidth: 256,
              textureHeight: 256,
              waterNormals: getWaterNormalTexture(),
              sunDirection: new THREE.Vector3(0.4, 0.7, 0.3).normalize(),
              sunColor: 0xffcf88,
              waterColor: 0x165e68,
              distortionScale: 0.36,
              size: 3.2,
              clipBias: 0.002,
              alpha: 0.88,
              fog: true,
            });
            p3Water.name = 'P3_Perugius_Reflective_Water';
            p3Water.position.set(0.035, cfg.localRadius + 0.0025, 0.015);
            p3Water.rotation.x = -Math.PI * 0.5;
            p3Water.visible = false;
            entry.surfaceCapGroup.add(p3Water);
            entry.reflectiveWaters = [
              { water: p3Water, centerLocal: p3Water.position.clone(), isOceanSurface: false },
            ];
            entry.p3Water = p3Water;
          }
        }

        // Recopilar materiales emisivos estáticos (ventanas, faroles de Perugius, setas/flores de Pandora)
        // para encenderlos en el ciclo nocturno sin interferir con animadores dinámicos.
        const seenMats = new Set();
        entry.surfaceCapGroup.traverse((child) => {
          if (!child.isMesh && !child.isInstancedMesh) return;
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          for (const mat of mats) {
            if (!mat || seenMats.has(mat) || mat.userData?.animatedEmissive) continue;
            seenMats.add(mat);
            const hasEmissive =
              mat.emissive &&
              mat.emissiveIntensity !== undefined &&
              (mat.emissiveMap ||
                mat.emissive.r > 0.008 ||
                mat.emissive.g > 0.008 ||
                mat.emissive.b > 0.008);
            if (hasEmissive) {
              entry.nightMaterials.push({
                material: mat,
                baseEmissive: mat.emissiveIntensity,
                tier: mat.userData?.nightTier || 'default',
              });
            }
          }
        });

        this._buildSurfaceStreamingQueue(entry);
        entry.surfaceLoaded = true;
      } catch (err) {
        console.error(`Error cargando detalle atmosférico de ${planetKey}:`, err);
      } finally {
        entry.surfaceLoading = false;
      }
    })();

    return entry.surfacePromise;
  }

  _classifySurfaceTier(obj, rootGroup) {
    const MICRO_RE =
      /Shanty|Slum|Rancho|MicroWindow|VerticalNeon|Japantown_Neon|Streetlamp|FlaresAndFires|Industrial_Smoke|Abandoned_FerrisWheel|Giant_Ferns|Broadleaf_Shrubs|Ground_Clutter|Flowers_|Mushrooms_|Mossy_Rocks|WaterLilies|Hanging_Vines|Waterfall|Floating_Cinders|Reef_Corals|Giant_Kelp|Underwater_Caustics|Metkayina_Torches|Ash_Bonfires|Volcano_Smoke|HoloSign_|Sign_3D_|EdgeBeacon|Antenna|Beacon|Billboard|Lamp/i;
    const MEDIUM_RE =
      /H10_Megablock|Stacked_Container|PortDepot|Charter_Heywood|NorthOak|Pacifica_Skeleton|Bay_Connecting_Bridges|Badlands_Rocks|Oil_Pump|WindTurbine|Greenhouse|Nomad|Desert_Roads|AV_Blimp|Urban_AV_Traffic|TowerBand|Medieval_Life|Geyser|IkranRookery|TreeOfSouls|Metkayina|Ash_Volcano|Giant_Bone|Tribal_Huts|Charred_Trees|Lava_Fissures|VineBridges|Canyon_Spires|Coral_Reefs|Valley_Arch|Inland_Lakes|Canopy_Under|Alien_Palms|Gnarled_Root|Alien_Redwood/i;
    const MACRO_RE =
      /Terrain|Crystal_Ocean|Rivers|Hometree|HallelujahMountains|Tree_Trunks|Canopy_Tops|NeoMil|NeoKitsch|CityCenter_LightBeams|Procedural_Districts_Terrain/i;

    const n = obj.name || '';
    if (MICRO_RE.test(n)) return 'micro';
    if (MEDIUM_RE.test(n)) return 'medium';
    if (MACRO_RE.test(n)) return 'macro';

    let p = obj.parent;
    while (p && p !== rootGroup) {
      const pn = p.name || '';
      if (MICRO_RE.test(pn)) return 'micro';
      if (MEDIUM_RE.test(pn) || /Pandora_Life_System|Urban_AV_Traffic|TowerBand/i.test(pn)) return 'medium';
      p = p.parent;
    }
    return 'macro';
  }

  _buildSurfaceStreamingQueue(entry) {
    const items = [];
    const tierOrder = { macro: 0, medium: 1, micro: 2 };
    entry.surfaceCapGroup.traverse((child) => {
      if (child === entry.surfaceCapGroup) return;
      if (child.isWater || child.userData?.manualClutterLod) {
        child.visible = false;
        return;
      }
      if (child.isMesh || child.isInstancedMesh || child.isPoints) {
        const tier = this._classifySurfaceTier(child, entry.surfaceCapGroup);
        const isTerrainHero = /Terrain|Crystal_Ocean|NeoMil|NeoKitsch|Hometree/i.test(child.name || '');
        child.visible = false;
        items.push({
          obj: child,
          tier,
          priority: tierOrder[tier] * 10 + (isTerrainHero ? 0 : 1),
          activated: false,
          isPandoraTerrain: child.name === 'Pandora_Global_Terrain_360',
        });
      } else if ((child.isGroup || child.isObject3D) && !child.isLight) {
        child.visible = true;
      }
    });
    items.sort((a, b) => a.priority - b.priority);
    entry.surfaceStreaming = {
      items,
      totalCount: items.length,
      macroCount: items.filter((it) => it.tier === 'macro').length,
      mediumCount: items.filter((it) => it.tier === 'medium').length,
      microCount: items.filter((it) => it.tier === 'micro').length,
      compiled: false,
      compiling: false,
    };
    entry.surfaceTerrainActivated = false;
    entry.lastActivatedThisFrame = 0;
  }

  _updateSurfaceStreaming(node, altRatio, altMeters) {
    node.lastActivatedThisFrame = 0;
    const s = node.surfaceStreaming;
    if (!node.surfaceLoaded || !s) {
      node.surfaceCapGroup.visible = false;
      if (node.orbitalBundle?.surfaceMesh) {
        node.orbitalBundle.surfaceMesh.visible = true;
      }
      return;
    }

    // Precompilar shaders asíncronamente en estratosfera alta antes de activar mallas
    if (
      altRatio <= STREAM_PREWARM_ALT_RATIO &&
      !s.compiled &&
      !s.compiling &&
      typeof this.renderer?.compileAsync === 'function'
    ) {
      s.compiling = true;
      Promise.resolve(this.renderer.compileAsync(node.surfaceCapGroup, this.camera, this.scene))
        .catch(() => {})
        .finally(() => {
          s.compiled = true;
          s.compiling = false;
        });
    }

    // Fuera de la atmósfera media (> 36.000 m o altRatio > 0.88): carga geométrica 0%
    if (altMeters > STREAM_MACRO_EXIT_M || altRatio > STREAM_PREWARM_ALT_RATIO) {
      if (node.surfaceCapGroup.visible || node.surfaceTerrainActivated) {
        node.surfaceCapGroup.visible = false;
        node.surfaceTerrainActivated = false;
        for (let i = 0; i < s.items.length; i++) {
          const it = s.items[i];
          if (it.activated || it.obj.visible) {
            it.obj.visible = false;
            it.activated = false;
          }
        }
      }
      if (node.orbitalBundle?.surfaceMesh) {
        node.orbitalBundle.surfaceMesh.visible = true;
      }
      return;
    }

    const allowMacro = altMeters <= STREAM_MACRO_ALT_M && altRatio <= 0.86;
    const allowMedium = altMeters <= STREAM_MEDIUM_ALT_M;
    const allowMicro = altMeters <= STREAM_MICRO_ALT_M;

    if (!allowMacro) {
      node.surfaceCapGroup.visible = false;
      node.surfaceTerrainActivated = false;
      for (let i = 0; i < s.items.length; i++) {
        const it = s.items[i];
        if (it.activated || it.obj.visible) {
          it.obj.visible = false;
          it.activated = false;
        }
      }
      if (node.orbitalBundle?.surfaceMesh) {
        node.orbitalBundle.surfaceMesh.visible = true;
      }
      return;
    }

    node.surfaceCapGroup.visible = true;
    let activatedThisFrame = 0;

    for (let i = 0; i < s.items.length; i++) {
      const it = s.items[i];
      const allowed =
        it.tier === 'macro'
          ? allowMacro
          : it.tier === 'medium'
          ? allowMedium
          : allowMicro;

      if (!allowed) {
        if (it.activated || it.obj.visible) {
          it.obj.visible = false;
          it.activated = false;
          if (it.isPandoraTerrain) node.surfaceTerrainActivated = false;
        }
        continue;
      }

      if (!it.activated) {
        if (activatedThisFrame < STREAM_MAX_PER_FRAME) {
          it.obj.visible = true;
          it.activated = true;
          activatedThisFrame++;
          if (it.isPandoraTerrain) node.surfaceTerrainActivated = true;
        }
      }
    }

    node.lastActivatedThisFrame = activatedThisFrame;
    if (node.config.hasProceduralWorld && node.orbitalBundle?.surfaceMesh) {
      node.orbitalBundle.surfaceMesh.visible = !node.surfaceTerrainActivated;
    }
  }

  /**
   * Calibra selectivamente los emisivos de Night City (`cyberpunk_city.glb`) para evitar
   * saturación homogénea y reservar picos HDR (1.4..2.1) solo en Koi, carteles heroicos y faros.
   */
  _calibrateNightCityMaterials(glbScene) {
    const seen = new Set();
    glbScene.traverse((child) => {
      if (child.isLight) {
        child.visible = false;
        child.intensity = 0;
        return;
      }
      if (!child.isMesh) return;
      const isHeroStruct = /Skyscraper|Tower|Plaza|Arasaka|Militech|Corp|Bridge/i.test(child.name || '');
      child.castShadow = isHeroStruct;
      child.receiveShadow = true;
      const mats = Array.isArray(child.material) ? child.material : [child.material];
      for (const mat of mats) {
        if (!mat || seen.has(mat) || mat.emissiveIntensity === undefined) continue;
        seen.add(mat);
        mat.userData = mat.userData || {};
        const name = mat.name || '';

        if (/Windows_Dense|Windows_Brutal|Windows_High|backboard/i.test(name)) {
          // Ventanas normales <= 0.28 (debajo del threshold bloom 0.95) para evitar mancha luminosa
          mat.emissive.setHex(0xa8c2d8);
          mat.emissiveIntensity = 0.24;
          mat.userData.nightTier = 'window';
        } else if (/rib_warm_white/i.test(name)) {
          mat.emissiveIntensity = 0.27;
          mat.userData.nightTier = 'window';
        } else if (/rib_amber_gold|rib_cyan_cold|bridge_cable_glow|bridge_deck_amber/i.test(name)) {
          mat.emissiveIntensity = 0.82;
          mat.userData.nightTier = 'accent';
        } else if (/chimney_flare/i.test(name)) {
          mat.emissiveIntensity = 1.78;
          mat.userData.nightTier = 'hero';
        } else if (
          /neon_|Mega_sign_|Mega_hex_motif_|Mega_pad_neon_|Geisha_Billboard|Holo_Koi|Holo_Banner|bridge_beacon_red|MAT_AV_/i.test(
            name
          )
        ) {
          // Picos HDR selectivos en [1.3, 1.9] exclusivamente en Koi y letreros emblemáticos de Corpo Plaza
          mat.emissiveIntensity = /Koi|Geisha|Banner/i.test(name) ? 1.85 : 1.62;
          mat.userData.nightTier = 'hero';
        } else {
          mat.emissiveIntensity = Math.min(0.24, mat.emissiveIntensity);
          mat.userData.nightTier = 'window';
        }
      }
    });
  }

  _showTransitionBanner(subtitle, title, glowCss, durationMs = 1500) {
    const banner = document.getElementById('hud-transition-banner');
    const subEl = document.getElementById('banner-subtitle');
    const titleEl = document.getElementById('banner-title');
    const overlay = document.getElementById('atmosphere-overlay');

    if (subEl) subEl.textContent = subtitle;
    if (titleEl) titleEl.textContent = title;
    if (banner) banner.classList.remove('hidden');

    if (overlay) {
      overlay.style.setProperty('--atmo-glow', glowCss || 'rgba(255, 160, 60, 0.45)');
      overlay.classList.add('active');
    }

    setTimeout(() => {
      if (banner) banner.classList.add('hidden');
      if (overlay) overlay.classList.remove('active');
    }, durationMs);
  }

  _highlightActiveNavButton(targetStr) {
    const buttons = document.querySelectorAll('.nav-btn');
    if (buttons.length === 0) return;
    buttons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.target === String(targetStr));
    });
  }

  /**
   * Piloto automático unificado:
   * - Acepta códigos clásicos (`'1'`..`'6'`) para atajos rápidos [1]–[6]
   * - Y descriptores estructurados del Mapa Estelar (`planet_orbit`, `planet_surface`, `moon`, `station`, `sun_orbit`)
   */
  async navigateToTarget(target) {
    if (target && typeof target === 'object') {
      return this._navigateToDescriptor(target);
    }

    const id = String(target);
    this._highlightActiveNavButton(id);

    if (id === '1') {
      return this._flyToSolarSystemOverview(false);
    }
    if (id === '2') {
      return this._flyToStation('crystal_palace');
    }

    const targetPlanetMap = {
      3: 'p3',
      4: 'p4',
      5: 'p2',
      6: 'p1',
    };
    const planetKey = targetPlanetMap[id];
    if (!planetKey) return;

    const entry = this.planetNodes.get(planetKey);
    if (!entry) return;

    await this.ensurePlanetSurfaceLoaded(planetKey);
    this.orbitalGroup.updateMatrixWorld(true);
    const currentWorldPos = new THREE.Vector3();
    entry.root.getWorldPosition(currentWorldPos);
    const currentDist = this.camera.position.distanceTo(currentWorldPos);
    const worldRadius = entry.config.localRadius * SOLAR_SCALE;
    const atmoTopAlt = worldRadius * ATMO_RADIUS_RATIO;
    const currentSurfAlt = currentDist - worldRadius;

    // 1er toque (desde lejos): órbita baja exterior contemplando el globo completo
    if (currentSurfAlt > atmoTopAlt * 1.1) {
      return this._flyToPlanetOrbit(planetKey);
    }
    // 2do toque (en órbita / atmósfera): descenso por capas de nubes hasta superficie
    return this._flyToPlanetSurface(planetKey);
  }

  async _navigateToDescriptor(desc) {
    switch (desc.type) {
      case 'sun_orbit':
        return this._flyToSolarSystemOverview(true);
      case 'station':
        return this._flyToStation(desc.stationId || 'crystal_palace');
      case 'planet_orbit':
        return this._flyToPlanetOrbit(desc.planetKey);
      case 'planet_surface':
        return this._flyToPlanetSurface(desc.planetKey, desc.landmarkId);
      case 'moon':
        return this._flyToMoon(desc.planetKey, desc.moonIndex ?? 0);
      default:
        return null;
    }
  }

  _flyToSolarSystemOverview(closeUpSun = false) {
    const pose = closeUpSun
      ? {
          targetPos: new THREE.Vector3(0, 1200, 4400),
          lookAtPos: new THREE.Vector3(0, 0, 0),
        }
      : {
          targetPos: new THREE.Vector3(0, 6100, 21000),
          lookAtPos: new THREE.Vector3(0, 0, 0),
        };
    this.controls.engageAutopilot({
      getTargetPose: () => ({
        targetPos: pose.targetPos.clone(),
        lookAtPos: pose.lookAtPos.clone(),
        upVec: new THREE.Vector3(0, 1, 0),
      }),
      duration: 3.4,
    });
  }

  async _flyToStation(stationId = 'crystal_palace') {
    if (stationId !== 'crystal_palace') return;
    await this.ensureCrystalPalaceLoaded();
    if (!this.crystalPalaceAnchor) return;

    this.orbitalGroup.updateMatrixWorld(true);
    const initPos = new THREE.Vector3();
    this.crystalPalaceAnchor.getWorldPosition(initPos);
    const dist = this.camera.position.distanceTo(initPos);
    const duration = THREE.MathUtils.clamp(dist / 3200.0, 2.8, 5.2);

    this.controls.engageAutopilot({
      getTargetPose: () => {
        this.orbitalGroup.updateMatrixWorld(true);
        const stationWorldPos = new THREE.Vector3();
        this.crystalPalaceAnchor.getWorldPosition(stationWorldPos);
        const toSun = stationWorldPos.clone().negate().normalize();
        const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), toSun).normalize();
        const vantage = stationWorldPos
          .clone()
          .addScaledVector(toSun, 62.0)
          .addScaledVector(right, 38.0)
          .add(new THREE.Vector3(0, 20.0, 0));
        return {
          targetPos: vantage,
          lookAtPos: stationWorldPos,
          upVec: new THREE.Vector3(0, 1, 0),
        };
      },
      duration,
    });
  }

  async _flyToPlanetOrbit(planetKey) {
    const entry = this.planetNodes.get(planetKey);
    if (!entry) return;
    const cfg = entry.config;
    if (cfg.landable) {
      await this.ensurePlanetSurfaceLoaded(planetKey);
    }

    const frameObj = entry.capFrame || entry.spinGroup || entry.root;
    this.orbitalGroup.updateMatrixWorld(true);
    const worldPos = new THREE.Vector3();
    entry.root.getWorldPosition(worldPos);
    const currentDist = this.camera.position.distanceTo(worldPos);
    const travelDuration = THREE.MathUtils.clamp(currentDist / 3400.0, 2.8, 5.4);

    this.controls.engageAutopilot({
      getTargetPose: () => {
        this.orbitalGroup.updateMatrixWorld(true);
        if (!cfg.landable) {
          // Órbita panorámica iluminada sobre los anillos del Gigante Gaseoso P5
          const planetW = new THREE.Vector3();
          entry.root.getWorldPosition(planetW);
          const toSun = planetW.clone().negate().normalize();
          const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), toSun).normalize();
          const Rw = cfg.localRadius * SOLAR_SCALE;
          const vantage = planetW
            .clone()
            .addScaledVector(toSun, Rw * 2.55)
            .addScaledVector(right, Rw * 1.45)
            .add(new THREE.Vector3(0, Rw * 1.15, 0));
          return {
            targetPos: vantage,
            lookAtPos: planetW,
            upVec: new THREE.Vector3(0, 1, 0),
          };
        }
        return {
          targetPos: cfg.lowOrbitOffset.clone().applyMatrix4(frameObj.matrixWorld),
          lookAtPos: cfg.lowOrbitLookAt.clone().applyMatrix4(frameObj.matrixWorld),
          upVec: new THREE.Vector3(0, 1, 0).transformDirection(frameObj.matrixWorld).normalize(),
        };
      },
      duration: travelDuration,
    });
  }

  async _flyToPlanetSurface(planetKey, landmarkId = null) {
    const entry = this.planetNodes.get(planetKey);
    if (!entry) return;
    const cfg = entry.config;
    if (!cfg.landable) {
      return this._flyToPlanetOrbit(planetKey);
    }

    await this.ensurePlanetSurfaceLoaded(planetKey);
    if (planetKey === 'p1' && landmarkId) {
      return this.navigateToPandoraLandmark(landmarkId);
    }
    if (planetKey === 'p2' && landmarkId) {
      return this.navigateToNightCityDistrict(landmarkId);
    }

    const frameObj = entry.capFrame || entry.spinGroup || entry.root;
    this.orbitalGroup.updateMatrixWorld(true);
    const worldPos = new THREE.Vector3();
    entry.root.getWorldPosition(worldPos);
    const currentDist = this.camera.position.distanceTo(worldPos);
    const worldRadius = cfg.localRadius * SOLAR_SCALE;
    const atmoTopAlt = worldRadius * ATMO_RADIUS_RATIO;
    const currentSurfAlt = currentDist - worldRadius;

    // Si venimos de otro planeta / órbita lejana: salto interplanetario a entrada atmosférica y encadenar descenso
    if (currentSurfAlt > atmoTopAlt * 1.18) {
      const jumpDuration = THREE.MathUtils.clamp(currentDist / 3400.0, 2.8, 5.4);
      this.controls.engageAutopilot({
        getTargetPose: () => {
          this.orbitalGroup.updateMatrixWorld(true);
          return {
            targetPos: cfg.highCloudOffset.clone().applyMatrix4(frameObj.matrixWorld),
            lookAtPos: cfg.lowOrbitLookAt.clone().applyMatrix4(frameObj.matrixWorld),
            upVec: new THREE.Vector3(0, 1, 0).transformDirection(frameObj.matrixWorld).normalize(),
          };
        },
        duration: jumpDuration,
        onComplete: () => {
          this._engageCloudBreakoutGlide(cfg, frameObj);
        },
      });
      return;
    }

    if (currentSurfAlt > atmoTopAlt * 0.24) {
      this._engageCloudBreakoutGlide(cfg, frameObj);
      return;
    }

    // Ya en vuelo bajo: reorientar al punto panorámico de superficie
    this.controls.engageAutopilot({
      getTargetPose: () => {
        this.orbitalGroup.updateMatrixWorld(true);
        return {
          targetPos: cfg.aerialOffset.clone().applyMatrix4(frameObj.matrixWorld),
          lookAtPos: cfg.aerialLookAt.clone().applyMatrix4(frameObj.matrixWorld),
          upVec: new THREE.Vector3(0, 1, 0).transformDirection(frameObj.matrixWorld).normalize(),
        };
      },
      duration: 2.6,
    });
  }

  _engageCloudBreakoutGlide(cfg, frameObj) {
    this.orbitalGroup.updateMatrixWorld(true);
    const invMat = new THREE.Matrix4().copy(frameObj.matrixWorld).invert();
    const p0Local = this.camera.position.clone().applyMatrix4(invMat);

    const waypoints = [p0Local];
    if (p0Local.distanceTo(cfg.highCloudOffset) > cfg.localRadius * 0.28) {
      waypoints.push(cfg.highCloudOffset.clone());
    }
    const lowCloudPass = cfg.highCloudOffset
      .clone()
      .lerp(cfg.aerialOffset, 0.55)
      .normalize()
      .multiplyScalar(cfg.localRadius * (1.0 + ATMO_RADIUS_RATIO * 0.48));
    const midBreakout = cfg.highCloudOffset
      .clone()
      .lerp(cfg.aerialOffset, 0.82)
      .normalize()
      .multiplyScalar(cfg.localRadius * (1.0 + ATMO_RADIUS_RATIO * 0.16));
    waypoints.push(lowCloudPass, midBreakout, cfg.aerialOffset.clone());

    const curve = new THREE.CatmullRomCurve3(waypoints);
    this.controls.engageAutopilot({
      useDirectCurve: true,
      duration: 8.2,
      getTargetPose: (ease) => {
        this.orbitalGroup.updateMatrixWorld(true);
        const posLocal = curve.getPoint(ease);
        const lookHorizonLocal = cfg.aerialLookAt
          .clone()
          .lerp(cfg.lowOrbitLookAt, Math.pow(1.0 - ease, 1.8) * 0.45);
        const aheadLocal = curve.getPoint(Math.min(1.0, ease + 0.08));
        const finalLookLocal = aheadLocal.lerp(lookHorizonLocal, Math.min(1.0, ease * 1.15 + 0.2));

        return {
          targetPos: posLocal.applyMatrix4(frameObj.matrixWorld),
          lookAtPos: finalLookLocal.applyMatrix4(frameObj.matrixWorld),
          upVec: new THREE.Vector3(0, 1, 0).transformDirection(frameObj.matrixWorld).normalize(),
        };
      },
    });
  }

  async _flyToMoon(planetKey, moonIndex = 0) {
    const entry = this.planetNodes.get(planetKey);
    const moon = entry?.moonOrbits?.[moonIndex];
    if (!entry || !moon) return;

    this.orbitalGroup.updateMatrixWorld(true);
    const initMoonW = new THREE.Vector3();
    moon.node.getWorldPosition(initMoonW);
    const dist = this.camera.position.distanceTo(initMoonW);
    const duration = THREE.MathUtils.clamp(dist / 3400.0, 2.8, 5.4);
    const standoff = Math.max(46.0, moon.moonRadius * 4.0);

    this.controls.engageAutopilot({
      getTargetPose: () => {
        this.orbitalGroup.updateMatrixWorld(true);
        const moonWorld = new THREE.Vector3();
        moon.node.getWorldPosition(moonWorld);
        const toSun = moonWorld.clone().negate().normalize();
        const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), toSun).normalize();
        const vantage = moonWorld
          .clone()
          .addScaledVector(toSun, standoff * 0.72)
          .addScaledVector(right, standoff * 0.68)
          .add(new THREE.Vector3(0, standoff * 0.26, 0));
        return {
          targetPos: vantage,
          lookAtPos: moonWorld,
          upVec: new THREE.Vector3(0, 1, 0),
        };
      },
      duration,
    });
  }

  /**
   * Sobrevuela un monumento o nación de Pandora (`hometree`, `hallelujah`, `rookery`, `souls`, `mushrooms`, `ashland`, `metkayina`)
   * desde el espacio profundo o siguiendo un arco esférico sobre los 360° del globo sin atravesar el planeta.
   */
  async navigateToPandoraLandmark(landmarkId) {
    const lm = PANDORA_LANDMARKS.find((item) => item.id === landmarkId);
    return this._navigateToCapLandmark('p1', lm);
  }

  /**
   * Sobrevuela cualquiera de los 7 distritos reales de Night City (`city_center`, `watson`, `westbrook`,
   * `heywood`, `santo_domingo`, `pacifica`, `badlands`) siguiendo un arco limpio sobre la curvatura urbana.
   */
  async navigateToNightCityDistrict(districtId) {
    const lm = NIGHT_CITY_DISTRICT_MAP[districtId] || NIGHT_CITY_DISTRICT_MAP.city_center;
    return this._navigateToCapLandmark('p2', lm);
  }

  async _navigateToCapLandmark(planetKey, lm) {
    const entry = this.planetNodes.get(planetKey);
    if (!lm || !entry) return;

    await this.ensurePlanetSurfaceLoaded(planetKey);
    const frameObj = entry.capFrame || entry.spinGroup || entry.root;
    this.orbitalGroup.updateMatrixWorld(true);

    const R = entry.config.localRadius;
    const invMat = new THREE.Matrix4().copy(frameObj.matrixWorld).invert();
    const p0Local = this.camera.position.clone().applyMatrix4(invMat);
    const dirTarget = lm.capDir.clone().normalize();

    const ref = Math.abs(dirTarget.y) < 0.85 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
    const tangentBack = new THREE.Vector3().crossVectors(dirTarget, ref).normalize();

    const endLocal = dirTarget
      .clone()
      .multiplyScalar(R + lm.viewAlt)
      .addScaledVector(tangentBack, -lm.viewBack)
      .normalize()
      .multiplyScalar(R + lm.viewAlt);
    const lookTargetLocal = dirTarget.clone().multiplyScalar(R + lm.viewAlt * 0.25);

    if (p0Local.length() > R * 1.88) {
      const highEntryLocal = dirTarget
        .clone()
        .multiplyScalar(R * 1.48)
        .addScaledVector(tangentBack, -0.22);
      const planetCenterW = new THREE.Vector3();
      entry.root.getWorldPosition(planetCenterW);
      const jumpDur = THREE.MathUtils.clamp(this.camera.position.distanceTo(planetCenterW) / 3400.0, 2.8, 5.4);
      this.controls.engageAutopilot({
        getTargetPose: () => {
          this.orbitalGroup.updateMatrixWorld(true);
          return {
            targetPos: highEntryLocal.clone().applyMatrix4(frameObj.matrixWorld),
            lookAtPos: dirTarget.clone().multiplyScalar(R).applyMatrix4(frameObj.matrixWorld),
            upVec: dirTarget.clone().transformDirection(frameObj.matrixWorld).normalize(),
          };
        },
        duration: jumpDur,
        onComplete: () => {
          this._navigateToCapLandmark(planetKey, lm);
        },
      });
      return;
    }

    const dir0 = p0Local.clone().normalize();
    const angle = dir0.angleTo(dirTarget);
    const arcLift = Math.min(1.15, angle * 0.65);
    const steps = Math.max(3, Math.ceil(angle / 0.35));
    const qStep = new THREE.Quaternion();
    const qFull = new THREE.Quaternion().setFromUnitVectors(dir0, dirTarget);
    const qId = new THREE.Quaternion();

    const rStart = Math.max(R + 0.05, Math.min(p0Local.length(), R * 1.48));
    const rEnd = R + lm.viewAlt;
    const waypoints = [p0Local.clone()];
    for (let s = 1; s < steps; s++) {
      const f = s / steps;
      qStep.copy(qId).slerp(qFull, f);
      const midDir = dir0.clone().applyQuaternion(qStep).normalize();
      const midR = THREE.MathUtils.lerp(rStart, rEnd, f) + Math.sin(f * Math.PI) * arcLift;
      waypoints.push(midDir.multiplyScalar(midR));
    }
    waypoints.push(endLocal);

    const curve = new THREE.CatmullRomCurve3(waypoints);
    const duration = THREE.MathUtils.clamp(2.2 + angle * 1.5, 2.4, 5.4);

    this.controls.engageAutopilot({
      useDirectCurve: true,
      duration,
      getTargetPose: (ease) => {
        this.orbitalGroup.updateMatrixWorld(true);
        const posLocal = curve.getPoint(ease);
        const aheadLocal = curve.getPoint(Math.min(1.0, ease + 0.08));
        const finalLookLocal = aheadLocal.lerp(lookTargetLocal, Math.min(1.0, ease * 1.35));
        const radialUpLocal = posLocal.clone().normalize();
        return {
          targetPos: posLocal.applyMatrix4(frameObj.matrixWorld),
          lookAtPos: finalLookLocal.applyMatrix4(frameObj.matrixWorld),
          upVec: radialUpLocal.transformDirection(frameObj.matrixWorld).normalize(),
        };
      },
    });
  }

  /**
   * Calcula los parámetros atmosféricos interpolados suavemente entre los 7 distritos de Night City.
   */
  _sampleNightCityAtmo(p2Info) {
    const out = this._p2Atmo;
    out.fogDay.setRGB(0, 0, 0);
    out.fogNight.setRGB(0, 0, 0);
    out.fogDusk.setRGB(0, 0, 0);
    out.hemiSky.setRGB(0, 0, 0);
    out.hemiGround.setRGB(0, 0, 0);
    out.ambient.setRGB(0, 0, 0);
    out.localLight.setRGB(0, 0, 0);
    out.localBounce.setRGB(0, 0, 0);
    let dens = 0;
    let bloom = 0;

    for (const d of NIGHT_CITY_DISTRICTS) {
      const w = p2Info.weights[d.id] || 0;
      if (w <= 0.0001) continue;
      const a = d.atmo;
      out.fogDay.add(this._tmpColorC.setHex(a.fogDay).multiplyScalar(w));
      out.fogNight.add(this._tmpColorC.setHex(a.fogNight).multiplyScalar(w));
      out.fogDusk.add(this._tmpColorC.setHex(a.fogDusk).multiplyScalar(w));
      out.hemiSky.add(this._tmpColorC.setHex(a.hemiSky).multiplyScalar(w));
      out.hemiGround.add(this._tmpColorC.setHex(a.hemiGround).multiplyScalar(w));
      out.ambient.add(this._tmpColorC.setHex(a.ambient).multiplyScalar(w));
      out.localLight.add(this._tmpColorC.setHex(a.localLight).multiplyScalar(w));
      out.localBounce.add(this._tmpColorC.setHex(a.localBounce).multiplyScalar(w));
      dens += a.fogDensity * w;
      bloom += a.bloomCap * w;
    }

    if (p2Info.district === 'westbrook' && p2Info.subzone === 'north_oak') {
      dens *= 0.48;
      bloom = Math.min(bloom, 0.40);
    }
    out.fogDensity = dens;
    out.bloomCap = bloom;
    return out;
  }

  /**
   * Actualiza Sol, órbitas, visibilidad por altitud, tráfico/vida e iluminación adaptativa.
   */
  update(dt) {
    const safeDt = Math.min(dt, 0.1);
    const simDt = safeDt * this.timeScale;
    this.elapsedTime += safeDt;
    this.simulationTime += simDt;

    if (this.sunPlasmaUniforms) {
      this.sunPlasmaUniforms.uTime.value = this.elapsedTime;
    }

    // Actualizar posición del Sol en espacio de vista para apagar/encender las luces nocturnas en las esferas
    sharedUniforms.uSunViewPos.value.set(0, 0, 0).applyMatrix4(this.camera.matrixWorldInverse);

    this.starfield.position.copy(this.camera.position);
    this.skyDome.position.copy(this.camera.position);

    // 1. Mover los 5 planetas en sus órbitas keplerianas y rotar alrededor de su eje inclinado
    for (const [, node] of this.planetNodes) {
      const cfg = node.config;
      node.prevWorldPos.copy(node.currWorldPos);
      if (node.spinGroup) {
        node.prevSpinWorldQuat.copy(node.currSpinWorldQuat);
      }

      node.orbitAngle += simDt * cfg.orbitOmega;
      const a = cfg.semiMajorAxis;
      const e = cfg.eccentricity || 0.04;
      const rLocal = (a * (1.0 - e * e)) / (1.0 + e * Math.cos(node.orbitAngle));

      if (node.spinner) {
        node.spinner.rotation.y = node.orbitAngle;
      }
      node.root.position.set(rLocal, 0, 0);

      for (const m of node.moonOrbits) {
        m.angle += simDt * m.speed;
        m.node.position.set(
          Math.cos(m.angle) * m.baseRadius,
          m.yOffset,
          Math.sin(m.angle) * m.baseRadius
        );
      }

      // Rotación axial real inclinada (arrastra esfera, nubes pegadas y detalles de superficie juntos)
      node.spinAngle += simDt * (cfg.axialOmega ?? cfg.rotationSpeed ?? 0.012);
      if (node.spinGroup) {
        node.spinGroup.rotation.y = node.spinAngle;
      }

      if (node.orbitalBundle) {
        // Vientos planetarios suaves sobre las capas de nubes pegadas al globo
        node.orbitalBundle.lowerCloudMesh.rotation.y += simDt * cfg.rotationSpeed * 0.45;
        node.orbitalBundle.upperCloudMesh.rotation.y += simDt * cfg.rotationSpeed * 0.85;
        node.orbitalBundle.lowerCloudGroup.rotation.y += simDt * cfg.rotationSpeed * 0.28;
      }
    }

    if (this.crystalPalaceDetailed) {
      this.crystalPalaceDetailed.rotation.y += simDt * 0.06;
    }

    this.orbitalGroup.updateMatrixWorld(true);

    // 2. Evaluar distancias orbitales, nubes pegadas al globo (`1.045 R` / `1.082 R`), streaming time-sliced y LOD
    let nearestName = 'Sol Central';
    let nearestSurfaceDist = Math.max(0, this.camera.position.length() - 2.21 * 3.2 * SOLAR_SCALE);
    let nearestKmScale = 12000;
    let closestPlanetKey = null;
    let closestPlanetNode = null;
    let closestPlanetSurfaceAlt = 99999;

    for (const [key, node] of this.planetNodes) {
      node.root.getWorldPosition(node.currWorldPos);
      node.planetDeltaPos.copy(node.currWorldPos).sub(node.prevWorldPos);

      for (const m of node.moonOrbits) {
        m.prevWorldPos.copy(m.currWorldPos);
        m.node.getWorldPosition(m.currWorldPos);
        m.deltaPos.copy(m.currWorldPos).sub(m.prevWorldPos);
      }

      if (node.spinGroup) {
        node.spinGroup.getWorldQuaternion(node.currSpinWorldQuat);
        this._tmpInvQuat.copy(node.prevSpinWorldQuat).invert();
        node.spinQuatDelta.copy(node.currSpinWorldQuat).multiply(this._tmpInvQuat).normalize();
      }

      const worldRadius = node.config.localRadius * SOLAR_SCALE;
      const atmoTopAlt = worldRadius * ATMO_RADIUS_RATIO;
      const centerDist = this.camera.position.distanceTo(node.currWorldPos);
      const surfaceAlt = centerDist - worldRadius;
      const altRatio = surfaceAlt / atmoTopAlt;

      if (node.atmosphereShell && node.atmosphereShell.material.uniforms) {
        const uniforms = node.atmosphereShell.material.uniforms;
        uniforms.uSunPosition.value.set(0, 0, 0);
        const fade = THREE.MathUtils.smoothstep(altRatio, 0.0, 0.85);
        uniforms.uAltitudeFade.value = THREE.MathUtils.lerp(0.18, 1.0, fade);
      }

      if (node.config.landable) {
        if (!node.surfaceLoaded && !node.surfaceLoading && centerDist < worldRadius * 4.5) {
          this.ensurePlanetSurfaceLoaded(key);
        }

        // Escala 1:1 fija
        node.surfaceCapGroup.scale.setScalar(1.0);

        const approxAltMeters = Math.max(0, (surfaceAlt - (node.config.groundFloorAlt ?? 0.95)) * METERS_PER_WORLD_UNIT);
        this._updateSurfaceStreaming(node, altRatio, approxAltMeters);

        if (node.orbitalBundle) {
          const b = node.orbitalBundle;
          b.lowerCloudMesh.material.uniforms.uPlanetCenter.value.copy(node.currWorldPos);
          b.upperCloudMesh.material.uniforms.uPlanetCenter.value.copy(node.currWorldPos);

          // Capas de nubes orbitales (`1.045 R` y `1.082 R`) visibles desde el espacio
          // y desvanecidas al bajar por la troposfera hacia torres/montañas.
          const shellOrbitalVis = THREE.MathUtils.smoothstep(altRatio, 0.14, 0.42);
          const lowerOp = shellOrbitalVis * 0.64;
          const upperOp = shellOrbitalVis * 0.86;
          b.lowerCloudMesh.material.uniforms.uOpacity.value = lowerOp;
          b.lowerCloudMesh.visible = lowerOp > 0.008;
          b.upperCloudMesh.material.uniforms.uOpacity.value = upperOp;
          b.upperCloudMesh.visible = upperOp > 0.008;

          // Bancos volumétricos 3D (`worldRadius + 65` a `worldRadius + 160`) para cruce atmosférico
          if (altRatio < 0.85) {
            const puffBuild = 1.0 - THREE.MathUtils.smoothstep(altRatio, 0.42, 0.85);
            const puffPeak = Math.exp(-Math.pow((altRatio - 0.15) / 0.14, 2.0)) * 0.85;
            const puffOp = Math.max(puffBuild * 0.36, puffPeak);
            b.lowerCloudPuffs.material.opacity = puffOp;
            b.lowerCloudGroup.visible = puffOp > 0.008;
          } else {
            b.lowerCloudGroup.visible = false;
          }
        }
      }

      if (surfaceAlt < nearestSurfaceDist) {
        nearestSurfaceDist = Math.max(0, surfaceAlt);
        nearestName = node.config.name;
        nearestKmScale = node.config.kmScale;
      }

      if (surfaceAlt < closestPlanetSurfaceAlt) {
        closestPlanetSurfaceAlt = surfaceAlt;
        closestPlanetNode = node;
        closestPlanetKey = key;
      }
    }

    if (this.crystalPalaceAnchor) {
      this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos);
      const stDist = Math.max(0, this.camera.position.distanceTo(this._tmpStationPos) - 12.0);
      if (stDist < nearestSurfaceDist) {
        nearestSurfaceDist = stDist;
        nearestName = 'Estación Crystal Palace';
        nearestKmScale = 850;
      }
    }

    // 3. Pozo gravitatorio co-rotatorio, profundidad atmosférica y ciclo real Día / Atardecer / Noche
    let inAtmosphere = false;
    let inGravityWell = false;
    let activeSunElev = 1.0;
    let activeAtmoDepth = 0.0;
    let activePlanetDelta = null;
    let activePlanetCenter = null;
    let activePrevPlanetCenter = null;
    let activePlanetQuatDelta = this._identityQuat;
    let closestWorldRadius = 220.0;
    let closestAtmoTopAlt = 220.0 * ATMO_RADIUS_RATIO;
    let closestGroundFloorAlt = 0.95;
    let closestMinSpeed = 8.0;
    let submergedRatio = 0.0;
    let submergedDepth = 0.0;
    let p1RegionInfo = null;
    let p2RegionInfo = null;
    let p2AtmoBlend = null;
    let solarPhaseName = 'ESPACIO';

    if (closestPlanetNode) {
      const pCfg = closestPlanetNode.config;
      closestWorldRadius = pCfg.localRadius * SOLAR_SCALE;
      closestAtmoTopAlt = closestWorldRadius * ATMO_RADIUS_RATIO;
      closestGroundFloorAlt = pCfg.groundFloorAlt ?? 0.95;
      closestMinSpeed = pCfg.minSpeed ?? 8.0;

      if (pCfg.id === 'p1' && closestPlanetNode.pandoraWorld) {
        this._tmpRadial
          .copy(this.camera.position)
          .sub(closestPlanetNode.currWorldPos)
          .normalize();
        const frameObj = closestPlanetNode.capFrame || closestPlanetNode.spinGroup || closestPlanetNode.root;
        frameObj.getWorldQuaternion(this._tmpCapInvQuat);
        this._tmpCapInvQuat.invert();
        this._tmpLocalDir.copy(this._tmpRadial).applyQuaternion(this._tmpCapInvQuat).normalize();
        const floorInfo = closestPlanetNode.pandoraWorld.getFloorAndWaterAtDir(this._tmpLocalDir);
        p1RegionInfo = floorInfo;
        const solidFloor = floorInfo.terrainElev * SOLAR_SCALE + (floorInfo.hasWater ? 0.55 : 1.15);
        closestGroundFloorAlt = floorInfo.hasWater ? solidFloor : Math.max(0.65, solidFloor);
        if (floorInfo.hasWater) {
          const waterLevelWorld = floorInfo.waterElev * SOLAR_SCALE;
          if (closestPlanetSurfaceAlt < waterLevelWorld) {
            submergedDepth = waterLevelWorld - closestPlanetSurfaceAlt;
            submergedRatio = THREE.MathUtils.clamp(submergedDepth / 1.8, 0.0, 1.0);
          }
        }
      } else if (pCfg.id === 'p2') {
        this._tmpRadial
          .copy(this.camera.position)
          .sub(closestPlanetNode.currWorldPos)
          .normalize();
        const frameObj = closestPlanetNode.capFrame || closestPlanetNode.spinGroup || closestPlanetNode.root;
        frameObj.getWorldQuaternion(this._tmpCapInvQuat);
        this._tmpCapInvQuat.invert();
        this._tmpLocalDir.copy(this._tmpRadial).applyQuaternion(this._tmpCapInvQuat).normalize();
        p2RegionInfo = sampleNightCitySurface(this._tmpLocalDir.x, this._tmpLocalDir.y, this._tmpLocalDir.z);
        p2AtmoBlend = this._sampleNightCityAtmo(p2RegionInfo);
        const surfElevWorld = Math.max(0, p2RegionInfo.elevationRatio) * closestWorldRadius;
        closestGroundFloorAlt = Math.max(pCfg.groundFloorAlt ?? 0.32, surfElevWorld + 0.38);
      }

      const gravityWellAlt = closestAtmoTopAlt * 1.25;
      const altRatio = closestPlanetSurfaceAlt / closestAtmoTopAlt;

      if (altRatio > 1.0) {
        // En espacio orbital exterior, dar prioridad a lunas cercanas y Crystal Palace sobre el giro axial del planeta
        for (const m of closestPlanetNode.moonOrbits) {
          const moonDist = this.camera.position.distanceTo(m.currWorldPos);
          if (moonDist < Math.max(85.0, m.moonRadius * 6.0)) {
            inGravityWell = true;
            activePlanetDelta = m.deltaPos;
            activePlanetCenter = m.currWorldPos;
            activePrevPlanetCenter = m.prevWorldPos;
            activePlanetQuatDelta = this._identityQuat;
            closestWorldRadius = m.moonRadius;
            closestGroundFloorAlt = 1.8;
            closestAtmoTopAlt = Math.max(95.0, m.moonRadius * 4.5);
            closestPlanetSurfaceAlt = moonDist - m.moonRadius;
            nearestName = m.name;
            nearestSurfaceDist = Math.max(0, closestPlanetSurfaceAlt);
            break;
          }
        }
        if (!inGravityWell && this.crystalPalaceAnchor) {
          const p2Node = this.planetNodes.get('p2');
          if (p2Node) {
            this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos);
            if (this.camera.position.distanceTo(this._tmpStationPos) < 220.0) {
              inGravityWell = true;
              activePlanetDelta = p2Node.planetDeltaPos;
              activePlanetCenter = p2Node.currWorldPos;
              activePrevPlanetCenter = p2Node.prevWorldPos;
              activePlanetQuatDelta = this._identityQuat;
            }
          }
        }
      }

      if (!inGravityWell && closestPlanetSurfaceAlt < gravityWellAlt) {
        inGravityWell = true;
        activePlanetDelta = closestPlanetNode.planetDeltaPos;
        activePlanetCenter = closestPlanetNode.currWorldPos;
        activePrevPlanetCenter = closestPlanetNode.prevWorldPos;
        activePlanetQuatDelta = closestPlanetNode.spinQuatDelta;
      }

      if (pCfg.landable && altRatio < 1.06) {
        inAtmosphere = altRatio <= 1.0;
        this.currentDominantPlanet = inAtmosphere ? pCfg : null;

        if (inAtmosphere && this.lastBannerPlanetId !== pCfg.id) {
          this.lastBannerPlanetId = pCfg.id;
          this._showTransitionBanner(
            'ENTRADA EN ALTA ATMÓSFERA',
            `ATMOSFERA // ${pCfg.name.toUpperCase()}`,
            pCfg.glowCss,
            1700
          );
          if (pCfg.navKey) {
            this._highlightActiveNavButton(pCfg.navKey);
          }
        }

        // Factor continuo [0 en borde exterior 100% -> 1 en superficie 0%]
        const atmoDepth = THREE.MathUtils.clamp(1.0 - altRatio, 0.0, 1.0);
        const entryFade = 1.0 - THREE.MathUtils.smoothstep(altRatio, 0.92, 1.06);

        // Elevación solar local: sunElev = dot(normalSuperficie, vectorAlSol)
        const radialOut = this._tmpRadial
          .copy(this.camera.position)
          .sub(closestPlanetNode.currWorldPos)
          .normalize();
        const sunDir = this._tmpSunDir.copy(this.camera.position).negate().normalize();
        const sunElev = THREE.MathUtils.clamp(radialOut.dot(sunDir), -1.0, 1.0);
        activeSunElev = sunElev;
        activeAtmoDepth = atmoDepth;

        const nightFactor = THREE.MathUtils.smoothstep(-sunElev, -0.02, 0.24);
        const dayFactor = THREE.MathUtils.smoothstep(sunElev, -0.02, 0.28);
        const duskFactor = Math.exp(-Math.pow((sunElev - 0.02) / 0.14, 2.0)) * (1.0 - nightFactor * 0.55);

        if (sunElev > 0.14) {
          solarPhaseName = 'DÍA';
        } else if (sunElev >= -0.08) {
          solarPhaseName = 'ATARDECER';
        } else {
          solarPhaseName = 'NOCHE';
        }

        // 1. Ocultar todas las trazas orbitales keplerianas al entrar en alta atmósfera (`atmoDepth > 0.25`)
        const orbitOpFactor = 1.0 - THREE.MathUtils.smoothstep(atmoDepth, 0.04, 0.25);
        for (const ol of this.orbitLines) {
          ol.material.opacity = ol.baseOpacity * orbitOpFactor;
          ol.mesh.visible = orbitOpFactor > 0.01;
        }

        // 2. Cúpula de dispersión atmosférica modulada por Día / Atardecer / Noche
        const hDot = -Math.sqrt(
          Math.max(
            0.0,
            1.0 -
              Math.pow(
                closestWorldRadius / Math.max(closestWorldRadius, closestWorldRadius + closestPlanetSurfaceAlt),
                2.0
              )
          )
        );
        const skyOp = THREE.MathUtils.smoothstep(atmoDepth, 0.01, 0.36);
        const skyU = this.skyDome.material.uniforms;
        if (pCfg.skyDome) {
          const sunsetZenithHex = pCfg.id === 'p2' ? 0x160a24 : 0x1c183c;
          const sunsetMidHex = pCfg.id === 'p2' ? 0x6c1d4c : pCfg.id === 'p1' ? 0x5c266e : 0x9b3e30;
          const sunsetHorHex = pCfg.id === 'p2' ? 0xff3b7d : 0xff7b34;
          const nightMidHex = pCfg.id === 'p2' ? 0x050e1c : 0x030816;
          const nightHorHex =
            pCfg.id === 'p2'
              ? 0x102848
              : pCfg.id === 'p1'
              ? 0x062c38
              : pCfg.id === 'p4'
              ? 0x261208
              : 0x081326;

          const baseZenithHex =
            pCfg.id === 'p1' && p1RegionInfo
              ? this._tmpColorC
                  .setHex(0x1b74cb)
                  .lerp(this._tmpColorB.setHex(0x1a82ea), p1RegionInfo.waterFactor)
                  .lerp(this._tmpColorB.setHex(0x2e2826), p1RegionInfo.ashFactor)
                  .getHex()
              : pCfg.skyDome.zenith;
          const baseMidHex =
            pCfg.id === 'p1' && p1RegionInfo
              ? this._tmpColorC
                  .setHex(0x4eb0cc)
                  .lerp(this._tmpColorB.setHex(0x56c6f5), p1RegionInfo.waterFactor)
                  .lerp(this._tmpColorB.setHex(0x604638), p1RegionInfo.ashFactor)
                  .getHex()
              : pCfg.skyDome.mid;
          const baseHorizonHex =
            pCfg.id === 'p1' && p1RegionInfo
              ? this._tmpColorC
                  .setHex(0x84dec6)
                  .lerp(this._tmpColorB.setHex(0xa4f4fa), p1RegionInfo.waterFactor)
                  .lerp(this._tmpColorB.setHex(0xa85e32), p1RegionInfo.ashFactor)
                  .getHex()
              : pCfg.skyDome.horizon;

          this._tmpColorA.setHex(baseZenithHex);
          this._tmpColorA.lerp(this._tmpColorB.setHex(sunsetZenithHex), duskFactor * 0.78);
          this._tmpColorA.lerp(this._tmpColorB.setHex(0x010308), nightFactor * 0.94);
          skyU.uZenithColor.value.copy(this._tmpColorA);

          this._tmpColorA.setHex(baseMidHex);
          this._tmpColorA.lerp(this._tmpColorB.setHex(sunsetMidHex), duskFactor * 0.85);
          this._tmpColorA.lerp(this._tmpColorB.setHex(nightMidHex), nightFactor * 0.92);
          skyU.uMidColor.value.copy(this._tmpColorA);

          this._tmpColorA.setHex(baseHorizonHex);
          this._tmpColorA.lerp(this._tmpColorB.setHex(sunsetHorHex), duskFactor * 0.9);
          this._tmpColorA.lerp(this._tmpColorB.setHex(nightHorHex), nightFactor * 0.92);
          skyU.uHorizonColor.value.copy(this._tmpColorA);

          this._tmpColorA.setHex(pCfg.skyDome.sunGlow);
          this._tmpColorA.lerp(this._tmpColorB.setHex(0xffb454), duskFactor * 0.82);
          this._tmpColorA.lerp(this._tmpColorB.setHex(0x16243d), nightFactor * 0.9);
          skyU.uSunGlowColor.value.copy(this._tmpColorA);

          const baseZenithAlpha = pCfg.skyDome.zenithAlpha;
          skyU.uZenithAlpha.value = THREE.MathUtils.lerp(
            baseZenithAlpha,
            Math.max(0.16, baseZenithAlpha * 0.24),
            nightFactor
          );
          if (submergedRatio > 0.001) {
            const subSkyHex = nightFactor > 0.5 ? 0x021622 : 0x085a72;
            const subHorHex = nightFactor > 0.5 ? 0x04283c : 0x0c88a2;
            skyU.uZenithColor.value.lerp(this._tmpColorB.setHex(subSkyHex), submergedRatio);
            skyU.uMidColor.value.lerp(this._tmpColorB.setHex(subSkyHex), submergedRatio);
            skyU.uHorizonColor.value.lerp(this._tmpColorB.setHex(subHorHex), submergedRatio);
            skyU.uSunGlowColor.value.lerp(this._tmpColorB.setHex(0x2ad8ee), submergedRatio * 0.85);
            skyU.uZenithAlpha.value = THREE.MathUtils.lerp(skyU.uZenithAlpha.value, 0.96, submergedRatio);
          }
          skyU.uLocalUp.value.copy(radialOut);
          skyU.uSunDir.value.copy(sunDir);
          skyU.uHorizonDot.value = hDot;
          skyU.uAtmoOpacity.value = skyOp;
          if (skyU.uMieIntensity) {
            skyU.uMieIntensity.value = THREE.MathUtils.lerp(0.62, 0.08, nightFactor);
          }
          this.skyDome.visible = skyOp > 0.005;

          // Mostrar cielo estrellado y lunas al caer la noche (más nítido en Badlands / North Oak, oculto bajo el océano)
          if (this.starfield.userData.setStarVisibility) {
            const badlandsWeight = p2RegionInfo?.weights?.badlands || 0;
            const northOakClear =
              p2RegionInfo?.district === 'westbrook' && p2RegionInfo?.subzone === 'north_oak' ? 0.35 : 0.0;
            const clearBonus = Math.min(0.6, badlandsWeight * 0.55 + northOakClear);
            const twilightStarTarget = THREE.MathUtils.lerp(
              Math.max(pCfg.skyDome.starFloor, clearBonus),
              Math.max(pCfg.skyDome.starFloor, 0.45 + clearBonus * 0.35),
              duskFactor * (1.0 - dayFactor * 0.7)
            );
            const cycleStarTarget = THREE.MathUtils.lerp(
              twilightStarTarget,
              p2RegionInfo && badlandsWeight > 0.45 ? 1.0 : 0.96,
              nightFactor
            );
            const starFactor =
              THREE.MathUtils.lerp(
                1.0,
                cycleStarTarget,
                THREE.MathUtils.smoothstep(atmoDepth, 0.06, 0.42)
              ) *
              (1.0 - submergedRatio);
            this.starfield.userData.setStarVisibility(starFactor);
          }
        }

        // Teñir nubes orbitales y bancos volumétricos de acuerdo al ciclo solar
        if (closestPlanetNode.orbitalBundle) {
          const ob = closestPlanetNode.orbitalBundle;
          const duskCloudHex = pCfg.id === 'p2' ? 0xd9488a : 0xff9256;
          const duskHorHex = pCfg.id === 'p2' ? 0xff3b7d : 0xff702c;
          if (ob.userBaseColors) {
            this._tmpColorA.copy(ob.userBaseColors.sunlit).lerp(this._tmpColorB.setHex(duskCloudHex), duskFactor * 0.72);
            this._tmpColorC.copy(ob.userBaseColors.horizon).lerp(this._tmpColorB.setHex(duskHorHex), duskFactor * 0.85);
            for (const cMesh of [ob.upperCloudMesh, ob.lowerCloudMesh]) {
              cMesh.material.uniforms.uSunColor.value.copy(this._tmpColorA);
              cMesh.material.uniforms.uHorizonColor.value.copy(this._tmpColorC);
            }
          }
          const nightPuffHex = pCfg.id === 'p2' ? 0x162a48 : 0x142238;
          this._tmpColorA.copy(ob.userBaseColors ? ob.userBaseColors.sunlit : this._tmpColorB.setHex(0xffffff));
          this._tmpColorA.lerp(this._tmpColorB.setHex(duskCloudHex), duskFactor * 0.78);
          this._tmpColorA.lerp(this._tmpColorB.setHex(nightPuffHex), nightFactor * 0.88);
          ob.lowerCloudPuffs.material.color.copy(this._tmpColorA);
        }

        // Ocultar planetas lejanos del sistema solar dentro de la atmósfera iluminada
        const hideDistant = atmoDepth > 0.32;
        for (const [oKey, oNode] of this.planetNodes) {
          oNode.root.visible = hideDistant ? oKey === closestPlanetKey : true;
        }

        // Fondo base alineado al cielo, nación de Pandora, ciclo solar y océano submarino
        const skyT = 1.0 - THREE.MathUtils.smoothstep(altRatio, 0.45, 0.98);
        const nightBgHex = pCfg.id === 'p1' && p1RegionInfo && p1RegionInfo.ashFactor > 0.35 ? 0x0e0604 : 0x03060c;
        const sunsetBgHex = pCfg.id === 'p2' ? 0x3b122b : 0x7c3424;
        const baseSkyBgHex =
          pCfg.id === 'p1' && p1RegionInfo
            ? this._tmpColorC
                .setHex(0x2884b4)
                .lerp(this._tmpColorB.setHex(0x2692d0), p1RegionInfo.waterFactor)
                .lerp(this._tmpColorB.setHex(0x4c362c), p1RegionInfo.ashFactor)
                .getHex()
            : pCfg.skyColor;
        this._tmpSkyColor
          .setHex(baseSkyBgHex)
          .lerp(this._tmpColorB.setHex(sunsetBgHex), duskFactor * 0.72)
          .lerp(this._tmpColorB.setHex(nightBgHex), nightFactor * 0.92);
        if (submergedRatio > 0.001) {
          this._tmpSkyColor.lerp(
            this._tmpColorB.setHex(0x0a6c86).lerp(this._tmpColorC.setHex(0x021a28), nightFactor),
            submergedRatio
          );
        }
        this.scene.background = this._tmpColorA.setHex(nightBgHex).clone().lerp(this._tmpSkyColor, skyT * 0.9);

        // Niebla FogExp2 real modulada por Nación de Pandora o Distrito de Night City, ciclo solar e inmersión submarina
        const regionalFogDensityMult =
          pCfg.id === 'p1' && p1RegionInfo
            ? 1.05 * p1RegionInfo.forestFactor + 0.78 * p1RegionInfo.waterFactor + 2.15 * p1RegionInfo.ashFactor
            : 1.0;
        const baseMaxFog =
          pCfg.id === 'p2' && p2AtmoBlend ? p2AtmoBlend.fogDensity : pCfg.maxFogDensity * regionalFogDensityMult;
        const clearAtmoFog =
          baseMaxFog * (1.0 - THREE.MathUtils.smoothstep(altRatio, 0.20, 0.90));
        const lowCloudMist = 0.012 * Math.exp(-Math.pow((altRatio - 0.14) / 0.06, 2.0));
        const upperCloudMist = 0.0022 * Math.exp(-Math.pow((altRatio - 0.85) / 0.12, 2.0));
        const jungleRiverMist =
          pCfg.id === 'p1'
            ? 0.0024 * (1.0 - THREE.MathUtils.smoothstep(altRatio, 0.0, 0.05)) * (1.0 - (p1RegionInfo?.ashFactor || 0) * 0.4)
            : 0.0;
        const atmoFogDensity = (clearAtmoFog + lowCloudMist + upperCloudMist + jungleRiverMist) * entryFade;
        const subFogDensity = THREE.MathUtils.lerp(0.022, 0.036, nightFactor);
        const fogDensity = THREE.MathUtils.lerp(atmoFogDensity, subFogDensity, submergedRatio);

        if (pCfg.id === 'p2' && p2AtmoBlend) {
          this._tmpFogColor
            .copy(p2AtmoBlend.fogDay)
            .lerp(p2AtmoBlend.fogDusk, duskFactor * 0.76)
            .lerp(p2AtmoBlend.fogNight, nightFactor * 0.92);
        } else {
          const baseDayFogHex =
            pCfg.id === 'p1' && p1RegionInfo
              ? this._tmpColorC
                  .setHex(0x4ca8aa)
                  .lerp(this._tmpColorB.setHex(0x62d2eb), p1RegionInfo.waterFactor)
                  .lerp(this._tmpColorB.setHex(0x5c4434), p1RegionInfo.ashFactor)
                  .getHex()
              : pCfg.fogColor;
          const sunsetFogHex = pCfg.id === 'p2' ? 0x62183a : 0xd46a3a;
          const nightFogHex =
            pCfg.id === 'p1'
              ? p1RegionInfo && p1RegionInfo.ashFactor > 0.35
                ? 0x160a06
                : 0x041a24
              : 0x050810;
          this._tmpFogColor
            .setHex(baseDayFogHex)
            .lerp(this._tmpColorB.setHex(sunsetFogHex), duskFactor * 0.78)
            .lerp(this._tmpColorB.setHex(nightFogHex), nightFactor * 0.9);
        }
        if (submergedRatio > 0.001) {
          this._tmpFogColor.lerp(
            this._tmpColorB.setHex(0x0d7a96).lerp(this._tmpColorC.setHex(0x032232), nightFactor),
            submergedRatio
          );
        }

        // Sincronizar niebla con dispersión Mie hacia el horizonte en la dirección solar
        this.camera.getWorldDirection(this._tmpCamFwd);
        const camSunDot = Math.max(0.0, this._tmpCamFwd.dot(sunDir));
        const mieHorizonGlow = Math.pow(camSunDot, 3.0) * 0.35 * (1.0 - nightFactor * 0.8) * (1.0 - submergedRatio);
        if (mieHorizonGlow > 0.001 && skyU.uSunGlowColor) {
          this._tmpFogColor.lerp(skyU.uSunGlowColor.value, mieHorizonGlow);
        }

        if (!this.scene.fog) {
          this.scene.fog = new THREE.FogExp2(this._tmpFogColor.getHex(), fogDensity);
        } else {
          this.scene.fog.color.copy(this._tmpFogColor);
          this.scene.fog.density = fogDensity;
        }

        const isSubmerged = submergedDepth > 0.05;
        const altMetersSurface = Math.max(0, (closestPlanetSurfaceAlt - closestGroundFloorAlt) * METERS_PER_WORLD_UNIT);

        // Iluminación local adaptativa por altitud, nación de Pandora, inclinación solar, agua y bioluminiscencia
        const canopyShade =
          pCfg.id === 'p1' ? 1.0 - 0.34 * (1.0 - THREE.MathUtils.smoothstep(altRatio, 0.0, 0.05)) : 1.0;
        const bioPulse = pCfg.id === 'p1' ? 0.9 + 0.16 * Math.sin(this.elapsedTime * 0.6) : 1.0;
        const directSunFade = THREE.MathUtils.lerp(0.05, 1.0, THREE.MathUtils.smoothstep(sunElev, -0.06, 0.24));
        const waterSunFilter = THREE.MathUtils.lerp(1.0, 0.45, submergedRatio);

        // Alinear luz solar direccional al vector real desde el Sol central (0,0,0) hacia el planeta
        this._tmpPlanetToSun.copy(closestPlanetNode.currWorldPos).negate().normalize();
        const isPandora = pCfg.id === 'p1';
        const maxShadowAlt = isPandora ? 1500 : 2500;
        const shouldCastShadow =
          inAtmosphere &&
          altMetersSurface < maxShadowAlt &&
          directSunFade > 0.08 &&
          !isSubmerged;
        this.planetaryDirLight.castShadow = shouldCastShadow;
        if (shouldCastShadow) {
          const sCam = this.planetaryDirLight.shadow.camera;
          const targetExt = isPandora
            ? altMetersSurface < 350
              ? 46.0
              : THREE.MathUtils.lerp(46.0, 110.0, THREE.MathUtils.smoothstep(altMetersSurface, 350, 1500))
            : altMetersSurface < 450
            ? 48.0
            : THREE.MathUtils.lerp(48.0, 180.0, THREE.MathUtils.smoothstep(altMetersSurface, 450, 2500));
          if (Math.abs(sCam.right - targetExt) > 1.0) {
            sCam.left = -targetExt;
            sCam.right = targetExt;
            sCam.top = targetExt;
            sCam.bottom = -targetExt;
            sCam.near = 4.0;
            sCam.far = 520.0;
            sCam.updateProjectionMatrix();
          }
          this.planetaryDirLight.target.position.copy(this.camera.position);
          this.planetaryDirLight.position
            .copy(this.camera.position)
            .addScaledVector(this._tmpPlanetToSun, 220.0);
          this.planetaryDirLight.target.updateMatrixWorld();
        } else {
          this.planetaryDirLight.target.position.copy(closestPlanetNode.currWorldPos);
          this.planetaryDirLight.position
            .copy(closestPlanetNode.currWorldPos)
            .addScaledVector(this._tmpPlanetToSun, 1200.0);
          this.planetaryDirLight.target.updateMatrixWorld();
        }
        this.planetaryDirLight.color
          .setHex(pCfg.sunColor)
          .lerp(this._tmpColorB.setHex(0xff7430), duskFactor * 0.72)
          .lerp(this._tmpColorB.setHex(0x4c6b98), nightFactor * 0.85);
        this.planetaryDirLight.intensity =
          THREE.MathUtils.lerp(0.25, pCfg.sunIntensity, atmoDepth) * canopyShade * directSunFade * waterSunFilter;

        // Alinear HemisphereLight al cenit local (radialOut) y tinte regional
        this.hemiLight.position.copy(radialOut).multiplyScalar(100.0);
        const sunsetHemiHex = pCfg.id === 'p2' ? 0xff3b7d : 0xff7b34;
        const nightHemiSky = pCfg.id === 'p1' ? 0x083444 : pCfg.id === 'p2' ? 0x0e2240 : 0x0c162c;
        const nightHemiGround = pCfg.id === 'p1' ? 0x062028 : 0x080c14;
        const regionalHemiSkyHex =
          pCfg.id === 'p1' && p1RegionInfo
            ? this._tmpColorC
                .setHex(0x5cc4b8)
                .lerp(this._tmpColorB.setHex(0x70d8ff), p1RegionInfo.waterFactor)
                .lerp(this._tmpColorB.setHex(0x8a644c), p1RegionInfo.ashFactor)
                .getHex()
            : pCfg.id === 'p2' && p2AtmoBlend
            ? p2AtmoBlend.hemiSky.getHex()
            : pCfg.hemiSkyColor;
        const regionalHemiGroundHex =
          pCfg.id === 'p1' && p1RegionInfo
            ? this._tmpColorC
                .setHex(0x1e4a28)
                .lerp(this._tmpColorB.setHex(0x144e60), p1RegionInfo.waterFactor)
                .lerp(this._tmpColorB.setHex(0x2c1c14), p1RegionInfo.ashFactor)
                .getHex()
            : pCfg.id === 'p2' && p2AtmoBlend
            ? p2AtmoBlend.hemiGround.getHex()
            : pCfg.hemiGroundColor;
        this._tmpColorA
          .setHex(regionalHemiSkyHex)
          .lerp(this._tmpColorB.setHex(sunsetHemiHex), duskFactor * 0.55)
          .lerp(this._tmpColorB.setHex(nightHemiSky), nightFactor * 0.9);
        if (submergedRatio > 0.001) {
          this._tmpColorA.lerp(
            this._tmpColorB.setHex(0x1cd4ea).lerp(this._tmpColorC.setHex(0x063848), nightFactor),
            submergedRatio * 0.85
          );
        }
        this.hemiLight.color.lerp(this._tmpColorA, Math.min(1, atmoDepth * 0.35 + 0.08));

        this._tmpColorA
          .setHex(regionalHemiGroundHex)
          .lerp(this._tmpColorB.setHex(nightHemiGround), nightFactor * 0.85);
        this.hemiLight.groundColor.lerp(this._tmpColorA, Math.min(1, atmoDepth * 0.35 + 0.08));
        this.hemiLight.intensity =
          THREE.MathUtils.lerp(0.42, pCfg.hemiIntensity, atmoDepth) * THREE.MathUtils.lerp(1.0, 0.36, nightFactor);

        const regionalAmbientHex =
          pCfg.id === 'p1' && p1RegionInfo
            ? this._tmpColorC
                .setHex(0x224a32)
                .lerp(this._tmpColorB.setHex(0x1e4e64), p1RegionInfo.waterFactor)
                .lerp(this._tmpColorB.setHex(0x36241a), p1RegionInfo.ashFactor)
                .getHex()
            : pCfg.id === 'p2' && p2AtmoBlend
            ? p2AtmoBlend.ambient.getHex()
            : pCfg.ambientColor;
        this._tmpColorA
          .setHex(regionalAmbientHex)
          .lerp(this._tmpColorB.setHex(0x101828), nightFactor * 0.82);
        this.ambientLight.color.lerp(this._tmpColorA, Math.min(1, atmoDepth * 0.35 + 0.08));
        this.ambientLight.intensity =
          THREE.MathUtils.lerp(0.55, pCfg.ambientIntensity, atmoDepth) *
          canopyShade *
          THREE.MathUtils.lerp(1.0, 0.45, nightFactor);

        // Encender progresivamente emisivos urbanos, faroles de Perugius y bioluminiscencia de Pandora al atardecer/noche
        const baseDayE = pCfg.id === 'p1' ? 0.74 : pCfg.id === 'p3' ? 0.85 : 0.9;
        const peakNightE =
          pCfg.id === 'p1' ? 2.45 * bioPulse : pCfg.id === 'p2' ? 2.15 : pCfg.id === 'p3' ? 2.25 : 1.95;
        const nightBlend = Math.min(1.0, Math.max(nightFactor, duskFactor * 0.45));
        const planetNightBoost = THREE.MathUtils.lerp(baseDayE, peakNightE, nightBlend);

        if (closestPlanetNode.surfaceCapGroup.visible) {
          if (closestPlanetNode.splatUniforms?.length) {
            for (const su of closestPlanetNode.splatUniforms) {
              su.uPlanetCenter.value.copy(closestPlanetNode.currWorldPos);
            }
          }
          if (closestPlanetNode.p3Water?.material?.uniforms?.time) {
            closestPlanetNode.p3Water.material.uniforms.time.value += safeDt * 0.5;
          }
          this._hideAllReflectiveWaters(closestPlanetNode);
          this._updateReflectiveWaters(
            closestPlanetNode,
            inAtmosphere && !isSubmerged && altMetersSurface < 10000,
            submergedRatio,
            sunDir
          );
          if (pCfg.id === 'p1' && closestPlanetNode.pandoraWorld?.updateGroundClutter) {
            closestPlanetNode.pandoraWorld.updateGroundClutter(this._tmpLocalDir, altMetersSurface, submergedRatio);
          }
          for (const anim of closestPlanetNode.animators) {
            anim.update(this.elapsedTime, planetNightBoost, sunElev, submergedRatio);
          }
          for (const nm of closestPlanetNode.nightMaterials) {
            if (pCfg.id === 'p2') {
              if (nm.tier === 'window') {
                // Fachadas/ventanas normales siempre <= 0.28 (debajo de threshold bloom 0.95)
                nm.material.emissiveIntensity = Math.min(
                  0.28,
                  nm.baseEmissive * THREE.MathUtils.lerp(0.70, 1.15, nightBlend)
                );
              } else if (nm.tier === 'hero') {
                nm.material.emissiveIntensity = THREE.MathUtils.clamp(
                  nm.baseEmissive * THREE.MathUtils.lerp(0.88, 1.04, nightBlend),
                  1.3,
                  1.9
                );
              } else {
                nm.material.emissiveIntensity = Math.min(
                  0.88,
                  nm.baseEmissive * THREE.MathUtils.lerp(0.75, 1.10, nightBlend)
                );
              }
            } else {
              nm.material.emissiveIntensity = nm.baseEmissive * planetNightBoost;
            }
          }
        } else if (pCfg.id === 'p1' && closestPlanetNode.pandoraWorld?.updateGroundClutter) {
          closestPlanetNode.pandoraWorld.updateGroundClutter(null, 99999, 0);
        }

        const lowCanyonBlend = 1.0 - THREE.MathUtils.smoothstep(altRatio, 0.05, 0.45);
        const pandoraGlowFactor = pCfg.id === 'p1' ? THREE.MathUtils.smoothstep(-sunElev, -0.10, 0.04) : 1.0;
        const regionalLocalAtmoHex =
          pCfg.id === 'p1' && p1RegionInfo && submergedRatio <= 0.2
            ? this._tmpColorC
                .setHex(pCfg.localLightColor)
                .lerp(this._tmpColorB.setHex(0x28f0d8), p1RegionInfo.waterFactor)
                .lerp(this._tmpColorB.setHex(0xff7838), p1RegionInfo.ashFactor)
                .getHex()
            : pCfg.id === 'p2' && p2AtmoBlend
            ? p2AtmoBlend.localLight.getHex()
            : submergedRatio > 0.2
            ? 0x1ce8ff
            : pCfg.localLightColor;
        const regionalBounceHex =
          pCfg.id === 'p1' && p1RegionInfo
            ? this._tmpColorC
                .setHex(pCfg.localBounceColor)
                .lerp(this._tmpColorB.setHex(0x18d8ff), p1RegionInfo.waterFactor)
                .lerp(this._tmpColorB.setHex(0xff4a18), p1RegionInfo.ashFactor)
                .getHex()
            : pCfg.id === 'p2' && p2AtmoBlend
            ? p2AtmoBlend.localBounce.getHex()
            : pCfg.localBounceColor;

        this.localAtmoLight.color.setHex(regionalLocalAtmoHex);
        const p2DimScale =
          pCfg.id === 'p2' && p2RegionInfo
            ? p2RegionInfo.district === 'pacifica'
              ? 0.28
              : p2RegionInfo.district === 'badlands'
              ? 0.22
              : 0.72
            : 1.0;
        this.localAtmoLight.intensity =
          lowCanyonBlend * 5.2 * p2DimScale * bioPulse * THREE.MathUtils.lerp(0.85, 1.38, nightBlend) * Math.max(pandoraGlowFactor, submergedRatio * 0.6);
        this.localAtmoLight.position.copy(this.camera.position).addScaledVector(radialOut, 18.0);

        this.localBounceLight.color.setHex(regionalBounceHex);
        this.localBounceLight.intensity =
          lowCanyonBlend * 4.8 * p2DimScale * bioPulse * THREE.MathUtils.lerp(0.85, 1.35, nightBlend) * pandoraGlowFactor;
        this.localBounceLight.position.copy(this.camera.position).addScaledVector(radialOut, -8.0);

        const iblIntensity = THREE.MathUtils.lerp(0.85, 0.55, nightFactor) * (1.0 - submergedRatio * 0.45);
        this._updateDynamicIbl({
          planetId: pCfg.id,
          zenithColor: skyU.uZenithColor ? skyU.uZenithColor.value : this._tmpIblZenith,
          horizonColor: this._tmpFogColor,
          groundColor: this.hemiLight.groundColor,
          sunDir,
          sunColor: this.planetaryDirLight.color,
          sunElev,
          altRatio,
          intensity: iblIntensity,
        });

        if (this.ssaoPass) {
          const ssaoActive = inAtmosphere && altMetersSurface < 4000 && !isSubmerged;
          this.ssaoPass.enabled = ssaoActive;
          if (ssaoActive && this.ssaoPass.ssaoMaterial?.uniforms) {
            const sU = this.ssaoPass.ssaoMaterial.uniforms;
            if (sU.cameraProjectionMatrix) sU.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix);
            if (sU.cameraInverseProjectionMatrix) sU.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse);
          }
        }

        if (this.bloomPass) {
          if (pCfg.id === 'p2' && p2AtmoBlend) {
            const p2TargetBloom = Math.min(0.45, p2AtmoBlend.bloomCap * THREE.MathUtils.lerp(0.82, 0.95, nightFactor));
            this.bloomPass.strength = THREE.MathUtils.lerp(0.36, p2TargetBloom, lowCanyonBlend);
          } else {
            const nightBloomCap = 1.12;
            const targetBloom = Math.min(
              0.45,
              pCfg.bloomStrength * 0.68 * bioPulse * THREE.MathUtils.lerp(0.85, nightBloomCap, nightFactor)
            );
            this.bloomPass.strength = THREE.MathUtils.lerp(0.35, targetBloom, lowCanyonBlend);
          }
          this.bloomPass.strength = Math.min(0.45, this.bloomPass.strength);
        }

        if (this.renderer) {
          const targetExposure = THREE.MathUtils.lerp(1.04, 1.12, nightFactor) * (1.0 - submergedRatio * 0.06);
          this.renderer.toneMappingExposure = THREE.MathUtils.lerp(
            this.renderer.toneMappingExposure,
            THREE.MathUtils.clamp(targetExposure, 0.98, 1.15),
            Math.min(1, safeDt * 3.0)
          );
        }

        // Estelas de reentrada, ceniza volcánica, niebla baja o plancton/burbujas bajo el mar
        const upperEntryStreaks = Math.exp(-Math.pow((altRatio - 0.78) / 0.2, 2.0)) * 0.85;
        const lowMist = Math.exp(-Math.pow((altRatio - 0.4) / 0.14, 2.0)) * 0.55;
        const ashHazeBoost = pCfg.id === 'p1' && p1RegionInfo ? p1RegionInfo.ashFactor * lowCanyonBlend * 0.42 : 0.0;
        const particleCol =
          submergedRatio > 0.08
            ? 0x3ef5e8
            : pCfg.id === 'p1' && p1RegionInfo && p1RegionInfo.ashFactor > 0.38
            ? 0xff9a58
            : pCfg.particleColor;
        this.cockpitParticles.setAtmosphereStyle(
          particleCol,
          Math.max(Math.max(upperEntryStreaks, lowMist), submergedRatio * 0.72, ashHazeBoost)
        );
      }
    }

    if (closestPlanetNode && closestPlanetSurfaceAlt / closestAtmoTopAlt >= 1.06) {
      inAtmosphere = false;
    }

    this.mode = inAtmosphere ? 'SURFACE' : 'ORBIT';

    if (
      !closestPlanetNode ||
      !closestPlanetNode.config.landable ||
      closestPlanetSurfaceAlt / closestAtmoTopAlt >= 1.06
    ) {
      this.currentDominantPlanet = null;
      this.lastBannerPlanetId = null;

      this.skyDome.visible = false;
      this.skyDome.material.uniforms.uAtmoOpacity.value = 0.0;

      for (const ol of this.orbitLines) {
        ol.material.opacity = ol.baseOpacity;
        ol.mesh.visible = true;
      }
      if (this.starfield.userData.setStarVisibility) {
        this.starfield.userData.setStarVisibility(1.0);
      }
      for (const [, oNode] of this.planetNodes) {
        oNode.root.visible = true;
        if (oNode.config.hasProceduralWorld && oNode.orbitalBundle) {
          oNode.orbitalBundle.surfaceMesh.visible = true;
        }
      }

      this._hideAllReflectiveWaters(null);
      this.planetNodes.get('p1')?.pandoraWorld?.updateGroundClutter?.(null, 99999, 0);

      this.scene.background.lerp(new THREE.Color(0x03060c), Math.min(1, safeDt * 4.0));
      if (this.scene.fog) {
        this.scene.fog.density *= Math.exp(-5.0 * safeDt);
        if (this.scene.fog.density < 0.00005) {
          this.scene.fog = null;
        }
      }

      // En espacio abierto, dejar el protagonismo real a la PointLight del Sol central sin segundo sol falso
      this.planetaryDirLight.castShadow = false;
      this.planetaryDirLight.intensity = THREE.MathUtils.lerp(this.planetaryDirLight.intensity, 0.22, 0.1);
      this.hemiLight.position.set(0, 100, 0);
      this.hemiLight.color.lerp(new THREE.Color(0x78a4e0), Math.min(1, safeDt * 3.0));
      this.hemiLight.groundColor.lerp(new THREE.Color(0x10141c), Math.min(1, safeDt * 3.0));
      this.hemiLight.intensity = THREE.MathUtils.lerp(this.hemiLight.intensity, 0.42, 0.1);

      this.ambientLight.color.lerp(new THREE.Color(0x1c2636), Math.min(1, safeDt * 3.0));
      this.ambientLight.intensity = THREE.MathUtils.lerp(this.ambientLight.intensity, 0.55, 0.1);

      this.localAtmoLight.intensity = THREE.MathUtils.lerp(this.localAtmoLight.intensity, 0.0, 0.15);
      this.localBounceLight.intensity = THREE.MathUtils.lerp(this.localBounceLight.intensity, 0.0, 0.15);

      if (closestPlanetNode) {
        this._tmpPlanetToSun.copy(closestPlanetNode.currWorldPos).negate().normalize();
      } else {
        this._tmpPlanetToSun.copy(this.camera.position).negate().normalize();
      }
      this._updateDynamicIbl({
        planetId: 'space',
        zenithColor: this._tmpIblZenith,
        horizonColor: this._tmpIblHorizon,
        groundColor: this._tmpIblGround,
        sunDir: this._tmpPlanetToSun,
        sunColor: this._tmpIblSun,
        sunElev: 1.0,
        altRatio: 2.0,
        intensity: 0.25,
      });

      if (this.ssaoPass) {
        this.ssaoPass.enabled = false;
      }
      if (this.bloomPass) {
        this.bloomPass.strength = THREE.MathUtils.lerp(this.bloomPass.strength, 0.38, 0.1);
      }
      if (this.renderer) {
        this.renderer.toneMappingExposure = THREE.MathUtils.lerp(
          this.renderer.toneMappingExposure,
          1.05,
          Math.min(1, safeDt * 3.0)
        );
      }
      this.cockpitParticles.setAtmosphereStyle(0x88ccff, 0.0);
    }

    // Efectos supersónicos de alta velocidad (Radial Blur + Cono Mach Prandtl-Glauert) y oclusión Solar Lensflare
    const speedRatio = typeof this.controls.getSpeedRatio === 'function' ? this.controls.getSpeedRatio() : 0.0;
    const isUnderwaterFx = inAtmosphere && submergedDepth > 0.05;
    if (this.radialBlurPass?.uniforms?.uBlurStrength) {
      const blurT = speedRatio > 0.45 ? THREE.MathUtils.smoothstep(speedRatio, 0.45, 1.0) : 0.0;
      const targetBlur = blurT * (isUnderwaterFx ? 0.35 : 1.0);
      this.radialBlurPass.uniforms.uBlurStrength.value = THREE.MathUtils.lerp(
        this.radialBlurPass.uniforms.uBlurStrength.value,
        targetBlur,
        Math.min(1, safeDt * 8.0)
      );
      this.radialBlurPass.enabled = this.radialBlurPass.uniforms.uBlurStrength.value > 0.002;
    }

    if (this.machConeMesh && this.machConeUniforms) {
      const machInLowerAtmo = Boolean(
        inAtmosphere && !isUnderwaterFx && closestPlanetNode && closestPlanetSurfaceAlt / closestAtmoTopAlt < 0.85
      );
      const targetMachOp = machInLowerAtmo && speedRatio > 0.72
        ? THREE.MathUtils.smoothstep(speedRatio, 0.72, 1.0) * 0.72
        : 0.0;
      this.machConeUniforms.uTime.value = this.elapsedTime;
      this.machConeUniforms.uOpacity.value = THREE.MathUtils.lerp(
        this.machConeUniforms.uOpacity.value,
        targetMachOp,
        Math.min(1, safeDt * 7.0)
      );
      this.machConeMesh.visible = this.machConeUniforms.uOpacity.value > 0.01;
    }

    this._updateSolarLensflare(inAtmosphere, isUnderwaterFx, activeSunElev, activeAtmoDepth, submergedRatio);

    this.controls.setAltitudeContext({
      surfaceAltitude: closestPlanetSurfaceAlt,
      planetRadius: closestWorldRadius,
      atmoTopAlt: closestAtmoTopAlt,
      groundFloorAlt: closestGroundFloorAlt,
      minSpeed: closestMinSpeed,
      metersPerUnit: METERS_PER_WORLD_UNIT,
      submergedRatio,
      planetCenter: activePlanetCenter || (closestPlanetNode ? closestPlanetNode.currWorldPos : null),
      prevPlanetCenter: activePrevPlanetCenter || (closestPlanetNode ? closestPlanetNode.prevWorldPos : null),
      hasPlanet: Boolean(closestPlanetNode),
      inGravityWell,
      planetDeltaPos: activePlanetDelta,
      planetQuatDelta: activePlanetQuatDelta,
    });

    if (inAtmosphere && this.currentDominantPlanet) {
      const isUnderwater = submergedDepth > 0.05;
      const altMeters = isUnderwater
        ? Math.round(submergedDepth * 15)
        : Math.max(0, Math.round((closestPlanetSurfaceAlt - closestGroundFloorAlt) * METERS_PER_WORLD_UNIT));
      let pandoraLandmarks = null;
      if (this.currentDominantPlanet.id === 'p1') {
        const p1Node = this.planetNodes.get('p1');
        const fObj = p1Node?.capFrame || p1Node?.spinGroup || p1Node?.root;
        if (fObj) {
          pandoraLandmarks = PANDORA_LANDMARKS.map((lm) => {
            this._tmpStationPos
              .copy(lm.capDir)
              .multiplyScalar(p1Node.config.localRadius)
              .applyMatrix4(fObj.matrixWorld);
            const km = Math.round(
              this.camera.position.distanceTo(this._tmpStationPos) * (p1Node.config.kmScale / (620 * PLANET_SCALE_MULT))
            );
            return { id: lm.id, shortName: lm.shortName, distKm: km };
          });
        }
      }
      this.lastP1RegionInfo = p1RegionInfo;
      if (this.currentDominantPlanet.id === 'p2' && p2RegionInfo) {
        const dObj = NIGHT_CITY_DISTRICT_MAP[p2RegionInfo.district] || NIGHT_CITY_DISTRICT_MAP.city_center;
        this.lastP2DistrictId = dObj.id;
        this.lastP2DistrictName =
          p2RegionInfo.subzone === 'north_oak'
            ? 'Westbrook · North Oak'
            : p2RegionInfo.subzone === 'dogtown'
            ? 'Pacifica · Dogtown'
            : dObj.name;
        this.lastP2DistrictShort =
          p2RegionInfo.subzone === 'north_oak'
            ? 'North Oak'
            : p2RegionInfo.subzone === 'dogtown'
            ? 'Dogtown'
            : dObj.shortName;
      }
      this.lastSolarPhaseName = solarPhaseName;
      this.lastIsUnderwater = isUnderwater;

      const sectorText =
        this.currentDominantPlanet.id === 'p2'
          ? `NIGHT CITY // ${this.lastP2DistrictName.toUpperCase()}`
          : this.currentDominantPlanet.name.toUpperCase();

      this.onStatusUpdate({
        modeText: isUnderwater ? 'SUBMARINO' : 'ATMOSFÉRICO',
        isSurface: true,
        isUnderwater,
        sectorName: sectorText,
        nearestText:
          this.currentDominantPlanet.id === 'p2' ? this.lastP2DistrictName : `${this.currentDominantPlanet.name}`,
        altitudeText: isUnderwater
          ? `-${altMeters.toLocaleString('es-ES')} m`
          : `${altMeters.toLocaleString('es-ES')} m`,
        timeScale: this.timeScale,
        solarPhaseName,
        pandoraLandmarks,
        nightCityDistrict: this.currentDominantPlanet.id === 'p2' ? this.lastP2DistrictId : null,
      });
    } else {
      this.lastP1RegionInfo = null;
      this.lastSolarPhaseName = 'ESPACIO';
      this.lastIsUnderwater = false;
      const distKm = Math.max(1, Math.round(nearestSurfaceDist * (nearestKmScale / 620)));
      this.onStatusUpdate({
        modeText: 'ÓRBITA',
        isSurface: false,
        sectorName: 'SISTEMA SOLAR CENTRAL',
        nearestText: `${nearestName} · ${distKm.toLocaleString('es-ES')} km`,
        altitudeText: `${distKm.toLocaleString('es-ES')} km`,
        timeScale: this.timeScale,
        solarPhaseName: 'ESPACIO',
      });
    }
  }

  /**
   * Captura el estado astrométrico y atmosférico en tiempo real para el Minimapa Táctico y el Mapa Estelar (tecla M).
   */
  getStarChartState() {
    this.orbitalGroup.updateMatrixWorld(true);
    const camPos = this.camera.position.clone();
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion).normalize();
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion).normalize();
    const camYawRad = Math.atan2(forward.x, forward.z);

    let crystalPalace = null;
    if (this.crystalPalaceAnchor) {
      const cpPos = new THREE.Vector3();
      this.crystalPalaceAnchor.getWorldPosition(cpPos);
      crystalPalace = {
        id: 'crystal_palace',
        name: 'CRYSTAL PALACE',
        planetKey: 'p2',
        worldPos: cpPos,
        distWorld: camPos.distanceTo(cpPos),
        loaded: Boolean(this.crystalPalaceDetailed),
      };
    }

    const planetsMeta = {
      p1: {
        shortName: 'PANDORA',
        code: 'P1',
        tagline: 'Luna oceánica y selvática · 3 Macro-Naciones',
        color: '#34d8c4',
        accent: '#44f0a8',
        gravity: '0.80 G',
        atmoDesc: 'Densa · Respirable c/máscara (Nitrógeno/Xenón)',
        climate: 'Selva bioluminiscente, archipiélago Metkayina y calderas de Ceniza',
      },
      p2: {
        shortName: 'NIGHT CITY',
        code: 'P2',
        tagline: 'Megalópolis cyberpunk · Corpo Plaza y Crystal Palace',
        color: '#00d8ff',
        accent: '#ff3b9a',
        gravity: '1.00 G',
        atmoDesc: 'Densa · Niebla urbana e industrial estratificada',
        climate: 'Cañón neón central, suburbios sombríos y Badlands áridas',
      },
      p3: {
        shortName: 'PERUGIUS',
        code: 'P3',
        tagline: 'Mundo templado medieval · Ciudadela Fortaleza',
        color: '#6ec878',
        accent: '#ffba52',
        gravity: '0.95 G',
        atmoDesc: 'Óptima · Cielos dorados templados',
        climate: 'Valles verdes, fortalezas en altura y cumbres nevadas',
      },
      p4: {
        shortName: 'CORUSCANT',
        code: 'P4',
        tagline: 'Ecumenópolis total · Distrito del Senado',
        color: '#f4a259',
        accent: '#ff8a3a',
        gravity: '1.00 G',
        atmoDesc: 'Regulada · Tráfico orbital y cúpulas ámbar',
        climate: 'Planeta-ciudad continuo de miles de niveles',
      },
      p5: {
        shortName: 'GIGANTE P5',
        code: 'P5',
        tagline: 'Gigante gaseoso azul con sistema de anillos y 3 lunas',
        color: '#5fa8ff',
        accent: '#8ee8ff',
        gravity: '2.45 G',
        atmoDesc: 'Turbulenta · Hidrógeno y helio (Solo órbita)',
        climate: 'Tormentas de metano, anillos helados y lunas pastoras',
      },
    };

    const planets = [];
    const order = ['p1', 'p2', 'p3', 'p4', 'p5'];
    for (const key of order) {
      const node = this.planetNodes.get(key);
      if (!node) continue;
      const cfg = node.config;
      const meta = planetsMeta[key] || { shortName: key.toUpperCase(), code: key.toUpperCase(), color: '#8cc4ff' };
      const worldPos = node.currWorldPos.clone();
      const distWorld = camPos.distanceTo(worldPos);
      const moons = node.moonOrbits.map((m, idx) => ({
        index: idx,
        name: m.name,
        baseRadius: m.baseRadius,
        baseRadiusWorld: m.baseRadius * SOLAR_SCALE,
        angle: m.angle,
        yOffset: m.yOffset,
        moonRadius: m.moonRadius,
        worldPos: m.currWorldPos.clone(),
        distWorld: camPos.distanceTo(m.currWorldPos),
      }));

      const spinWorldQuat = new THREE.Quaternion();
      if (node.spinGroup) {
        node.spinGroup.getWorldQuaternion(spinWorldQuat);
      }
      const orbitalPlaneQuat = new THREE.Quaternion();
      if (node.spinner?.parent) {
        node.spinner.parent.getWorldQuaternion(orbitalPlaneQuat);
      }
      const capLocalQuat = node.capFrame ? node.capFrame.quaternion.clone() : new THREE.Quaternion();

      planets.push({
        key,
        id: cfg.id,
        code: meta.code,
        name: cfg.name,
        shortName: meta.shortName,
        tagline: meta.tagline,
        color: meta.color,
        accent: meta.accent,
        gravity: meta.gravity,
        atmoDesc: meta.atmoDesc,
        climate: meta.climate,
        navKey: cfg.navKey,
        landable: cfg.landable,
        semiMajorAxis: cfg.semiMajorAxis,
        semiMajorAxisWorld: cfg.semiMajorAxis * SOLAR_SCALE,
        eccentricity: cfg.eccentricity || 0.04,
        orbitAngle: node.orbitAngle,
        localRadius: cfg.localRadius,
        worldRadius: cfg.localRadius * SOLAR_SCALE,
        atmoTopAlt: cfg.localRadius * SOLAR_SCALE * ATMO_RADIUS_RATIO,
        kmScale: cfg.kmScale,
        glowCss: cfg.glowCss || 'rgba(94, 212, 255, 0.45)',
        worldPos,
        distWorld,
        distKm: Math.max(0, Math.round(Math.max(0, distWorld - cfg.localRadius * SOLAR_SCALE) * (cfg.kmScale / (620 * PLANET_SCALE_MULT)))),
        moons,
        hasCrystalPalace: key === 'p2' && Boolean(crystalPalace),
        spinWorldQuat,
        orbitalPlaneQuat,
        capLocalQuat,
        orbitalMap: node.orbitalBundle?.surfaceMesh?.material?.map || null,
        orbitalEmissiveMap: node.orbitalBundle?.surfaceMesh?.material?.emissiveMap || null,
        cloudMap: node.orbitalBundle?.upperCloudMesh?.material?.uniforms?.uCloudMap?.value || null,
        pandoraLandmarks: key === 'p1' ? PANDORA_LANDMARKS : null,
        nightCityLandmarks: key === 'p2' ? NIGHT_CITY_DISTRICTS : null,
      });
    }

    let atmosphereLocal = null;
    if (this.mode === 'SURFACE' && this.currentDominantPlanet) {
      const domCfg = this.currentDominantPlanet;
      const domNode = this.planetNodes.get(domCfg.id);
      if (domNode) {
        const frameObj = domNode.capFrame || domNode.spinGroup || domNode.root;
        const planetW = domNode.currWorldPos.clone();
        const radialUp = camPos.clone().sub(planetW).normalize();
        const sunDir = camPos.clone().negate().normalize();
        const markers = [];

        if (domCfg.id === 'p1') {
          const nationColors = {
            hometree: { nation: 'forest', color: '#44f0a8' },
            hallelujah: { nation: 'forest', color: '#44f0a8' },
            rookery: { nation: 'forest', color: '#44f0a8' },
            souls: { nation: 'forest', color: '#44f0a8' },
            mushrooms: { nation: 'forest', color: '#a864ff' },
            ashland: { nation: 'ash', color: '#ff6c34' },
            metkayina: { nation: 'water', color: '#26e8ff' },
          };
          for (const lm of PANDORA_LANDMARKS) {
            const wPos = lm.capDir
              .clone()
              .multiplyScalar(domCfg.localRadius)
              .applyMatrix4(frameObj.matrixWorld);
            const meta = nationColors[lm.id] || { nation: 'forest', color: '#44f0a8' };
            markers.push({
              id: lm.id,
              shortName: lm.shortName,
              nation: meta.nation,
              color: meta.color,
              worldPos: wPos,
              distKm: Math.round(camPos.distanceTo(wPos) * (domCfg.kmScale / (620 * PLANET_SCALE_MULT))),
            });
          }
        } else if (domCfg.id === 'p2') {
          for (const d of NIGHT_CITY_DISTRICTS) {
            const wPos = d.capDir
              .clone()
              .multiplyScalar(domCfg.localRadius)
              .applyMatrix4(frameObj.matrixWorld);
            markers.push({
              id: d.id,
              shortName: d.shortName,
              color: d.color,
              worldPos: wPos,
              distKm: Math.round(camPos.distanceTo(wPos) * (domCfg.kmScale / (620 * PLANET_SCALE_MULT))),
            });
          }
        } else {
          const cPos = new THREE.Vector3(0, domCfg.localRadius, 0).applyMatrix4(frameObj.matrixWorld);
          markers.push({
            id: 'capital',
            shortName: domCfg.id === 'p3' ? 'Fortaleza Perugius' : 'Plaza del Senado',
            color: domCfg.id === 'p3' ? '#ffcf78' : '#ff944d',
            worldPos: cPos,
            distKm: Math.round(camPos.distanceTo(cPos) * (domCfg.kmScale / (620 * PLANET_SCALE_MULT))),
          });
        }

        atmosphereLocal = {
          planetKey: domCfg.id,
          planetName: domCfg.name,
          planetWorldPos: planetW,
          worldRadius: domCfg.localRadius * SOLAR_SCALE,
          radialUp,
          sunDir,
          solarPhaseName: this.lastSolarPhaseName || 'DÍA',
          isUnderwater: Boolean(this.lastIsUnderwater),
          regionNation: this.lastP1RegionInfo?.nation || 'forest',
          regionDistrict: this.lastP2DistrictId || 'city_center',
          regionDistrictName: this.lastP2DistrictName || 'Corpo Plaza',
          regionDistrictShort: this.lastP2DistrictShort || 'Corpo Plaza',
          markers,
        };
      }
    }

    return {
      mode: this.mode,
      isUnderwater: Boolean(this.lastIsUnderwater),
      shipPos: camPos,
      shipForward: forward,
      shipRight: right,
      shipYawRad: camYawRad,
      sunPos: new THREE.Vector3(0, 0, 0),
      sunWorldRadius: 2.21 * 3.2 * SOLAR_SCALE,
      planets,
      crystalPalace,
      atmosphereLocal,
      dominantPlanetKey: this.currentDominantPlanet?.id || null,
    };
  }
}
