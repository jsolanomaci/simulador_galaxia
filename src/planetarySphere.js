import * as THREE from 'three';
import { sampleNightCitySurface } from './nightCityZones.js';
import {
  getBrutalistConcretePbrSet,
  getOrganicTerrainPbrSet,
  applyTerrainSplattingShader,
} from './proceduralPbr.js';

/* ------------------------------------------------------------------------------------------
 * Uniformes compartidos: posición del Sol en espacio de vista (para luces nocturnas de ciudad).
 * ---------------------------------------------------------------------------------------- */
export const sharedUniforms = {
  uSunViewPos: { value: new THREE.Vector3() },
};

/* ------------------------------------------------------------------------------------------
 * Ruido procedural rápido (hash entero + value noise 3D) sin dependencias.
 * ---------------------------------------------------------------------------------------- */
export function hashI(x, y, z) {
  let h = (Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263) + Math.imul(z | 0, 1274126177)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
}

export function vnoise(x, y, z) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const iz = Math.floor(z);
  const fx = x - ix;
  const fy = y - iy;
  const fz = z - iz;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const uz = fz * fz * (3 - 2 * fz);

  const a = hashI(ix, iy, iz);
  const b = hashI(ix + 1, iy, iz);
  const c = hashI(ix, iy + 1, iz);
  const d = hashI(ix + 1, iy + 1, iz);
  const e = hashI(ix, iy, iz + 1);
  const f = hashI(ix + 1, iy, iz + 1);
  const g = hashI(ix, iy + 1, iz + 1);
  const h = hashI(ix + 1, iy + 1, iz + 1);

  const x1 = a + (b - a) * ux;
  const x2 = c + (d - c) * ux;
  const x3 = e + (f - e) * ux;
  const x4 = g + (h - g) * ux;
  const y1 = x1 + (x2 - x1) * uy;
  const y2 = x3 + (x4 - x3) * uy;
  return (y1 + (y2 - y1) * uz) * 2 - 1;
}

export function fbm(x, y, z, octaves = 4) {
  let v = 0;
  let amp = 0.5;
  let freq = 1;
  for (let i = 0; i < octaves; i++) {
    v += amp * vnoise(x * freq + i * 17.31, y * freq - i * 9.7, z * freq + i * 3.3);
    freq *= 2.03;
    amp *= 0.5;
  }
  return v;
}

/**
 * Ridged Multifractal Noise 3D para crestas escarpadas, cañones profundos y contrafuertes rocosos en Pandora.
 */
export function ridgedMultifractal(x, y, z, octaves = 4, lacunarity = 2.12, gain = 0.52) {
  let sum = 0.0;
  let freq = 1.0;
  let amp = 0.5;
  let weight = 1.0;
  let norm = 0.0;
  for (let i = 0; i < octaves; i++) {
    let signal = 1.0 - Math.abs(vnoise(x * freq + i * 19.7, y * freq - i * 11.3, z * freq + i * 7.1));
    signal *= signal * weight;
    weight = Math.min(1.0, Math.max(0.0, signal * 1.95));
    sum += signal * amp;
    norm += amp;
    freq *= lacunarity;
    amp *= gain;
  }
  return norm > 0.0 ? sum / norm : 0.0;
}

function sstep(e0, e1, x) {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

/* ------------------------------------------------------------------------------------------
 * Generación de mapas orbitales equirectangulares (difuso + emisivo + relieve) por planeta.
 * Cada píxel se evalúa en 3D sobre la esfera unitaria => sin costuras ni distorsión polar.
 * ---------------------------------------------------------------------------------------- */
function buildHubs(capDir = [0, 1, 0]) {
  const dirs = [
    capDir,
    [-capDir[0], -capDir[1], -capDir[2]],
    [0.8, 0.2, 0.55],
    [-0.7, 0.35, -0.6],
    [0.1, -0.3, -0.95],
    [-0.85, -0.25, 0.45],
    [0.55, -0.6, -0.1],
    [0.15, 0.55, 0.82],
  ];
  return dirs.map((d) => {
    const h = new THREE.Vector3(...d).normalize();
    const ref = Math.abs(h.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
    const e1 = new THREE.Vector3().crossVectors(h, ref).normalize();
    const e2 = new THREE.Vector3().crossVectors(h, e1).normalize();
    return { h, e1, e2 };
  });
}

export const PANDORA_UNDERWATER_DEPTH = 0.11;

export const PANDORA_LANDMARKS = [
  {
    id: 'hometree',
    name: 'Gran Árbol Madre (Hometree)',
    shortName: 'Árbol-Casa',
    theta: 0.045,
    phi: -0.55,
    landBoostRad: 0.24,
    elevMode: 'valley',
    viewAlt: 0.092,
    viewBack: 0.11,
  },
  {
    id: 'hallelujah',
    name: 'Montañas Aleluya',
    shortName: 'Aleluya',
    theta: 0.38,
    phi: 1.15,
    landBoostRad: 0.22,
    elevMode: 'bay',
    viewAlt: 0.135,
    viewBack: 0.145,
  },
  {
    id: 'rookery',
    name: 'Nido de Ikran (Ikran Rookery)',
    shortName: 'Nido Ikran',
    theta: 1.06,
    phi: 3.65,
    landBoostRad: 0.25,
    elevMode: 'canyon',
    viewAlt: 0.105,
    viewBack: 0.125,
  },
  {
    id: 'souls',
    name: 'Árbol de las Almas (Tree of Souls)',
    shortName: 'Árbol Almas',
    theta: 1.54,
    phi: 5.15,
    landBoostRad: 0.26,
    elevMode: 'crater',
    viewAlt: 0.078,
    viewBack: 0.105,
  },
  {
    id: 'mushrooms',
    name: 'Bosque de Setas Gigantes y Géiseres',
    shortName: 'Setas / Géiseres',
    theta: 2.28,
    phi: 2.1,
    landBoostRad: 0.25,
    elevMode: 'basin',
    viewAlt: 0.082,
    viewBack: 0.11,
  },
  {
    id: 'ashland',
    name: 'Tierra de Ceniza (Pueblo Ash)',
    shortName: 'Ceniza / Volcanes',
    theta: 1.88,
    phi: 0.72,
    landBoostRad: 0.34,
    elevMode: 'ash',
    viewAlt: 0.115,
    viewBack: 0.145,
  },
  {
    id: 'metkayina',
    name: 'Arrecife Metkayina (Aldea y Abismo)',
    shortName: 'Metkayina',
    theta: 1.18,
    phi: 2.15,
    landBoostRad: 0.32,
    elevMode: 'reef',
    viewAlt: 0.068,
    viewBack: 0.098,
  },
].map((lm) => {
  const st = Math.sin(lm.theta);
  return {
    ...lm,
    capDir: new THREE.Vector3(st * Math.cos(lm.phi), Math.cos(lm.theta), st * Math.sin(lm.phi)).normalize(),
  };
});

// Anclajes geodésicos de las 3 Macro-Naciones continuas en coordenadas `capFrame`
// (~45% Nación del Bosque, ~36% Nación del Agua Metkayina, ~19% Nación de la Ceniza Mangkwan)
const RAW_FOREST_NATION_SITES = [
  { v: PANDORA_LANDMARKS[0].capDir, bias: 0.25 }, // Hometree
  { v: PANDORA_LANDMARKS[1].capDir, bias: 0.22 }, // Montañas Aleluya
  { v: PANDORA_LANDMARKS[2].capDir, bias: 0.24 }, // Nido de Ikran
  { v: PANDORA_LANDMARKS[3].capDir, bias: 0.26 }, // Árbol de las Almas
  { v: PANDORA_LANDMARKS[4].capDir, bias: 0.29 }, // Bosque de Setas y Géiseres
  { v: new THREE.Vector3(0.12, -0.78, -0.22).normalize(), bias: 0.23 }, // Puente continental sur
  { v: new THREE.Vector3(-0.05, -0.94, 0.32).normalize(), bias: 0.24 }, // Puente polar hacia Setas
  { v: new THREE.Vector3(0.45, 0.62, -0.64).normalize(), bias: 0.18 }, // Meseta noreste
];

const RAW_WATER_NATION_SITES = [
  { v: PANDORA_LANDMARKS[6].capDir, bias: 0.39 }, // Laguna y Arrecife Metkayina
  { v: new THREE.Vector3(-0.82, 0.05, 0.57).normalize(), bias: 0.39 }, // Archipiélago occidental
  { v: new THREE.Vector3(-0.08, 0.18, 0.98).normalize(), bias: 0.32 }, // Mar ecuatorial abierto
  { v: new THREE.Vector3(-0.82, -0.34, -0.45).normalize(), bias: 0.38 }, // Océano suroeste profundo
  { v: new THREE.Vector3(-0.55, -0.40, 0.10).normalize(), bias: 0.31 }, // Cuenca central del agua
  { v: new THREE.Vector3(-0.38, -0.68, -0.62).normalize(), bias: 0.30 }, // Mar abisal del sur
];

const RAW_ASH_NATION_SITES = [
  { v: PANDORA_LANDMARKS[5].capDir, bias: 0.36 }, // Núcleo volcánico Pueblo Ash
  { v: new THREE.Vector3(0.93, -0.15, 0.33).normalize(), bias: 0.30 }, // Macizo basáltico oriental
  { v: new THREE.Vector3(0.74, -0.60, 0.28).normalize(), bias: 0.25 }, // Península volcánica sur
  { v: new THREE.Vector3(0.55, -0.18, 0.81).normalize(), bias: 0.28 }, // Promontorio de lava este
];

/**
 * Construye vectores de hitos y anclajes de las 3 Naciones transformados al espacio orbital de `surfaceMesh` dado `capDir`.
 */
export function buildPandoraSphereLandmarks(capDirArr = [0, 1, 0]) {
  const capVec = new THREE.Vector3(capDirArr[0], capDirArr[1], capDirArr[2]).normalize();
  const qCap = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), capVec);
  const landmarks = PANDORA_LANDMARKS.map((lm) => ({
    ...lm,
    sphereDir: lm.capDir.clone().applyQuaternion(qCap).normalize(),
  }));
  landmarks.nationSites = {
    forest: RAW_FOREST_NATION_SITES.map((s) => ({
      v: s.v.clone().applyQuaternion(qCap).normalize(),
      bias: s.bias,
    })),
    water: RAW_WATER_NATION_SITES.map((s) => ({
      v: s.v.clone().applyQuaternion(qCap).normalize(),
      bias: s.bias,
    })),
    ash: RAW_ASH_NATION_SITES.map((s) => ({
      v: s.v.clone().applyQuaternion(qCap).normalize(),
      bias: s.bias,
    })),
    metkayinaDir: landmarks[6].sphereDir,
    ashDir: landmarks[5].sphereDir,
    soulsDir: landmarks[3].sphereDir,
    mushDir: landmarks[4].sphereDir,
  };
  return landmarks;
}

const DEFAULT_SPHERE_LMS = buildPandoraSphereLandmarks([0, 1, 0]);

/**
 * Partición geodésica esférica continua de Pandora en 3 Macro-Naciones:
 * 1) `forest` (~45%): Gran Continente Selvático (Omatikaya + los 5 monumentos de selva/montaña)
 * 2) `water`  (~36%): Gran Océano y Archipiélago Metkayina (arrecifes, atolones e islas de palmeras)
 * 3) `ash`    (~19%): Tierras Volcánicas de Ceniza (Mangkwan + cordillera basáltica divisoria)
 * Garantiza alineación 1:1 entre la textura orbital y el terreno/flora/fauna 3D.
 */
export function samplePandoraBiomeField(sx, sy, sz, sphereLandmarks, octaves = 5) {
  const lms = sphereLandmarks?.nationSites ? sphereLandmarks : DEFAULT_SPHERE_LMS;
  const { forest, water, ash } = lms.nationSites;

  let fw = -9.0;
  for (let i = 0; i < forest.length; i++) {
    const s = forest[i];
    const d = sx * s.v.x + sy * s.v.y + sz * s.v.z + s.bias;
    if (d > fw) fw = d;
  }

  let ww = -9.0;
  for (let i = 0; i < water.length; i++) {
    const s = water[i];
    const d = sx * s.v.x + sy * s.v.y + sz * s.v.z + s.bias;
    if (d > ww) ww = d;
  }

  let aw = -9.0;
  for (let i = 0; i < ash.length; i++) {
    const s = ash[i];
    const d = sx * s.v.x + sy * s.v.y + sz * s.v.z + s.bias;
    if (d > aw) aw = d;
  }

  // Modulación orgánica de baja frecuencia únicamente en costas y fronteras entre Naciones
  const borderWarp = fbm(sx * 2.2 + 4.1, sy * 2.2 - 1.7, sz * 2.2 + 2.9, Math.min(3, octaves)) * 0.052;
  const coastMicro = vnoise(sx * 6.8 + 1.3, sy * 6.8 - 2.1, sz * 6.8 + 3.4) * 0.016;
  const ashWarp = vnoise(sx * 3.1 - 2.2, sy * 3.1 + 1.9, sz * 3.1 - 0.8) * 0.038;

  const fwW = fw + borderWarp + coastMicro;
  const wwW = ww - borderWarp * 0.85;
  const awW = aw + ashWarp;

  const maxFA = Math.max(fwW, awW);
  const waterMargin = wwW - maxFA;
  const ashMargin = awW - Math.max(fwW, wwW);

  let nation = 'forest';
  if (ashMargin > 0.0 && awW > wwW) {
    nation = 'ash';
  } else if (waterMargin > 0.0) {
    nation = 'water';
  }

  const ashFactor = sstep(-0.035, 0.045, ashMargin);
  const waterFactor = sstep(-0.035, 0.045, waterMargin) * (1.0 - ashFactor);
  const forestFactor = Math.max(0.0, 1.0 - ashFactor - waterFactor);

  // Cordillera basáltica abrupta separando el Continente Selvático de la Península de Ceniza
  const faGap = Math.abs(awW - fwW);
  const borderMountain =
    Math.exp(-Math.pow(faGap / 0.068, 2.0)) * (1.0 - sstep(-0.02, 0.08, waterMargin));

  let cont = 0.0;
  let reefFactor = 0.0;

  if (nation === 'water') {
    const seaDepthT = sstep(0.0, 0.14, waterMargin);
    const md = lms.nationSites.metkayinaDir;
    const mDot = THREE.MathUtils.clamp(sx * md.x + sy * md.y + sz * md.z, -1, 1);
    const mAng = Math.acos(mDot);

    // Gran cuenca del océano azul profundo (-0.36) con barrera de atolones e islas coralinas Metkayina
    cont = -0.02 - seaDepthT * 0.34;

    if (mAng < 0.145) {
      // Laguna interior Metkayina: agua turquesa navegable (-0.08 .. -0.15) bajo las balsas
      const lagT = 1.0 - mAng / 0.145;
      cont = THREE.MathUtils.lerp(-0.085, -0.155, lagT);
      reefFactor = 0.72 + 0.28 * lagT;
    } else if (waterMargin > 0.045) {
      // Archipiélago de arrecifes turquesa, bancos de arena e islas tropicales dispersas
      const archBand = Math.exp(-Math.pow((mAng - 0.28) / 0.17, 2.0));
      const outerAtolls = sstep(0.14, 0.34, waterMargin) * 0.48;
      const atollRidge = 1.0 - Math.abs(vnoise(sx * 4.4 + 2.7, sy * 4.4 - 1.3, sz * 4.4 + 0.8));
      const cayFbm = fbm(sx * 8.5 + 3.1, sy * 8.5 - 1.9, sz * 8.5 + 2.4, Math.min(3, octaves));
      const mask =
        archBand * 0.48 +
        outerAtolls * 0.22 +
        Math.pow(Math.max(0.0, atollRidge), 3.6) * 0.52 +
        cayFbm * 0.26;

      if (mask > 0.72) {
        // Islas de arena coralina y palmeras sobre el océano
        cont = 0.012 + Math.min(0.085, (mask - 0.72) * 0.48);
        reefFactor = 0.90;
      } else if (mask > 0.38) {
        // Bancos poco profundos de arrecife turquesa coralino
        const shelfT = sstep(0.38, 0.72, mask);
        cont = THREE.MathUtils.lerp(-0.14, -0.008, shelfT);
        reefFactor = shelfT * 0.95;
      }
    }
  } else if (nation === 'ash') {
    const inlandAsh = sstep(0.0, 0.11, ashMargin);
    const basaltVar = fbm(sx * 4.1 - 1.3, sy * 4.1 + 2.2, sz * 4.1 - 0.9, Math.min(4, octaves)) * 0.06;
    cont = THREE.MathUtils.lerp(0.06, 0.30, inlandAsh) + Math.max(-0.02, basaltVar) + borderMountain * 0.16;
  } else {
    // Gran Continente Selvático continuo (sin mares intercalados)
    const coastMargin = Math.max(0.0, fwW - wwW);
    const inlandForest = sstep(0.0, 0.12, coastMargin);
    const valleyFbm = fbm(sx * 3.6 + 1.2, sy * 3.6 - 0.8, sz * 3.6 - 2.4, Math.min(4, octaves)) * 0.075;
    cont = THREE.MathUtils.lerp(0.015, 0.28, inlandForest) + Math.max(0.0, valleyFbm) + borderMountain * 0.16;
  }

  let craterDepression = 0.0;
  for (let i = 0; i < 5; i++) {
    const lm = lms[i];
    const sd = lm.sphereDir;
    const ang = Math.acos(THREE.MathUtils.clamp(sx * sd.x + sy * sd.y + sz * sd.z, -1, 1));
    if (ang < lm.landBoostRad) {
      const t = 1.0 - ang / lm.landBoostRad;
      const smooth = t * t * (3.0 - 2.0 * t);
      if (lm.elevMode === 'bay') {
        // Cuenca continental profunda bajo las islas flotantes de Aleluya
        cont = Math.max(cont, 0.14 + smooth * 0.18);
      } else {
        cont = Math.max(cont, 0.16 + smooth * 0.24);
      }
      if ((lm.elevMode === 'crater' || lm.elevMode === 'basin') && ang < 0.11) {
        const ct = 1.0 - ang / 0.11;
        craterDepression = Math.max(craterDepression, ct * ct * 0.0024);
      }
    }
  }

  const ridgeNoise = ridgedMultifractal(
    sx * 4.9 + 1.9,
    sy * 4.9 - 3.4,
    sz * 4.9 + 0.7,
    Math.min(4, Math.max(2, octaves))
  );
  const highlandRidge =
    Math.max(0.0, cont - 0.08) * Math.pow(Math.max(0.0, ridgeNoise), 1.65) + borderMountain * 0.34;
  const forestClump = fbm(sx * 8.2 + 4.1, sy * 8.2 - 2.3, sz * 8.2 + 0.9, 3);

  return {
    cont,
    ridge: ridgeNoise,
    highlandRidge,
    craterDepression,
    forestFactor,
    waterFactor,
    ashFactor,
    reefFactor,
    borderMountain,
    forestClump,
    nation,
  };
}

export function generateSurfaceMaps(planetId, W, H, capDir = [0, 1, 0]) {
  const capVec = new THREE.Vector3(capDir[0], capDir[1], capDir[2]).normalize();
  const cX = capVec.x;
  const cY = capVec.y;
  const cZ = capVec.z;
  const pandoraLandmarks = planetId === 'p1' ? buildPandoraSphereLandmarks([cX, cY, cZ]) : null;
  let ncMat = null;
  if (planetId === 'p2') {
    const qInv = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), capVec).invert();
    ncMat = new THREE.Matrix3().setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(qInv)).elements;
  }
  const diffC = makeCanvas(W, H);
  const emiC = makeCanvas(W, H);
  const bumpC = makeCanvas(W, H);
  const dImg = diffC.getContext('2d').createImageData(W, H);
  const eImg = emiC.getContext('2d').createImageData(W, H);
  const bImg = bumpC.getContext('2d').createImageData(W, H);
  const D = dImg.data;
  const E = eImg.data;
  const B = bImg.data;

  const cosP = new Float32Array(W);
  const sinP = new Float32Array(W);
  for (let px = 0; px < W; px++) {
    const phi = ((px + 0.5) / W) * Math.PI * 2;
    cosP[px] = Math.cos(phi);
    sinP[px] = Math.sin(phi);
  }

  const hubs = planetId === 'p4' ? buildHubs([cX, cY, cZ]) : null;

  for (let py = 0; py < H; py++) {
    const theta = ((py + 0.5) / H) * Math.PI;
    const st = Math.sin(theta);
    const ny = Math.cos(theta);

    for (let px = 0; px < W; px++) {
      // Mismo mapeo UV que THREE.SphereGeometry
      const nx = -cosP[px] * st;
      const nz = sinP[px] * st;
      const capDot = nx * cX + ny * cY + nz * cZ;
      const idx = (py * W + px) * 4;

      let dr = 0, dg = 0, db = 0;
      let er = 0, eg = 0, eb = 0;
      let hb = 0.5;

      if (planetId === 'p4') {
        // ===== CORUSCANT: ecumenópolis con anillos concéntricos y radiales dorados =====
        let best = -2;
        let second = -2;
        let bi = 0;
        for (let k = 0; k < hubs.length; k++) {
          const hv = hubs[k].h;
          const dd = nx * hv.x + ny * hv.y + nz * hv.z;
          if (dd > best) {
            second = best;
            best = dd;
            bi = k;
          } else if (dd > second) {
            second = dd;
          }
        }
        const hub = hubs[bi];
        const ang = Math.acos(Math.min(1, best));
        const az = Math.atan2(
          nx * hub.e2.x + ny * hub.e2.y + nz * hub.e2.z,
          nx * hub.e1.x + ny * hub.e1.y + nz * hub.e1.z
        );

        let rv = Math.abs(Math.cos(ang * 95.0));
        rv *= rv; rv *= rv; rv *= rv; rv *= rv; // ^16 -> anillos finos
        const ringFade = sstep(0.008, 0.02, ang);

        let sv = Math.abs(Math.cos(az * 12.0));
        sv *= sv; sv *= sv; sv *= sv; sv *= sv; sv *= sv; // ^32 -> avenidas radiales
        const spoke = sv * sstep(0.02, 0.07, ang) * (1 - sstep(0.45, 0.9, ang));

        const edge = 1 - sstep(0.0, 0.014, best - second); // arterias entre distritos

        const blk = hashI(Math.floor(nx * 140), Math.floor(ny * 140), Math.floor(nz * 140));
        const fine = hashI(Math.floor(nx * 700) + 3, Math.floor(ny * 700), Math.floor(nz * 700));
        const macro = vnoise(nx * 6, ny * 6, nz * 6) * 0.5 + 0.5;
        const lit = (fine > 0.6 ? 1 : 0) * (0.35 + 0.65 * blk) * (0.4 + 0.6 * macro);

        const e = rv * 0.85 * ringFade + spoke * 0.8 + edge * 1.1 + lit * 0.45;
        let cr, cg, cb;
        if (blk < 0.33) { cr = 1.0; cg = 0.74; cb = 0.32; }
        else if (blk < 0.66) { cr = 1.0; cg = 0.88; cb = 0.62; }
        else { cr = 1.0; cg = 0.52; cb = 0.18; }
        er = e * cr; eg = e * cg; eb = e * cb;

        const base = 0.11 + 0.1 * blk + 0.05 * macro + 0.06 * rv * ringFade;
        dr = base * 1.05; dg = base; db = base * 0.95;
        hb = 0.4 + 0.3 * blk + 0.2 * rv;
      } else if (planetId === 'p2') {
        // ===== NIGHT CITY REAL: costa oceánica oeste + 7 distritos cardinales + Badlands (sin circuitos globales) =====
        const cx = ncMat[0] * nx + ncMat[3] * ny + ncMat[6] * nz;
        const cy = ncMat[1] * nx + ncMat[4] * ny + ncMat[7] * nz;
        const cz = ncMat[2] * nx + ncMat[5] * ny + ncMat[8] * nz;
        const fine = hashI(Math.floor(cx * 560), Math.floor(cy * 560), Math.floor(cz * 560));
        const blk = hashI(Math.floor(cx * 96) + 7, Math.floor(cy * 96), Math.floor(cz * 96));

        if (capDot > 0.84) {
          const s = sampleNightCitySurface(cx, cy, cz);
          const dustN = vnoise(cx * 14 + 3, cy * 14, cz * 14) * 0.5 + 0.5;
          const metroFade = 1.0 - sstep(0.41, 0.49, s.theta);

          if (s.isOcean) {
            // Costa oeste y Bahía Del Coronado oscura con leve borde espumoso
            const shallow = sstep(-0.045, 0.0, s.coastSignedDist);
            dr = 0.012 + 0.018 * shallow;
            dg = 0.032 + 0.045 * shallow;
            db = 0.062 + 0.055 * shallow;
            er = 0; eg = 0; eb = 0;
            hb = 0.25;
          } else if (s.district === 'badlands') {
            if (s.subzone === 'oilfields') {
              dr = 0.075 + 0.04 * dustN;
              dg = 0.07 + 0.035 * dustN;
              db = 0.065 + 0.03 * dustN;
              er = 0; eg = 0; eb = 0;
              hb = 0.44 + 0.2 * dustN;
            } else {
              dr = (0.24 + 0.14 * dustN) * metroFade + 0.19 * (1 - metroFade);
              dg = (0.115 + 0.055 * dustN) * metroFade + 0.10 * (1 - metroFade);
              db = (0.068 + 0.03 * dustN) * metroFade + 0.06 * (1 - metroFade);
              // Sutiles manchas claras en invernaderos Biotechnica al Este (sin saturación neón)
              if (s.subzone === 'eastern_plains' && fine > 0.965 && Math.abs(Math.sin(cx * 42)) > 0.85) {
                er = 0.16; eg = 0.24; eb = 0.20;
              }
              hb = 0.46 + 0.28 * dustN;
            }
          } else if (s.district === 'pacifica') {
            // Mancha costera oscura y prácticamente apagada (ruinas Coastview y Dogtown)
            dr = 0.052 + 0.03 * blk;
            dg = 0.055 + 0.03 * blk;
            db = 0.062 + 0.03 * blk;
            if (fine > 0.992) {
              er = 0.35; eg = 0.12; eb = 0.04;
            }
            hb = 0.44 + 0.16 * blk;
          } else if (s.district === 'santo_domingo') {
            if (s.subzone === 'arroyo') {
              dr = 0.11 + 0.04 * dustN; dg = 0.085 + 0.03 * dustN; db = 0.065 + 0.02 * dustN;
              const spark = fine > 0.92 ? 0.35 + 0.35 * blk : 0.0;
              er = spark * 0.95; eg = spark * 0.42; eb = spark * 0.10;
            } else {
              const grid = Math.abs(Math.sin(s.ax * 190)) > 0.86 || Math.abs(Math.sin(s.ay * 190)) > 0.86;
              dr = 0.13 + 0.04 * dustN; dg = 0.105 + 0.035 * dustN; db = 0.08;
              if (grid && fine > 0.78) {
                er = 0.42; eg = 0.21; eb = 0.06;
              }
            }
            hb = 0.46 + 0.15 * blk;
          } else if (s.district === 'heywood') {
            dr = 0.095 + 0.035 * blk; dg = 0.085 + 0.03 * blk; db = 0.07;
            if (fine > 0.74) {
              const w = 0.38 + 0.45 * blk;
              er = w * 0.96; eg = w * 0.62; eb = w * 0.18;
            }
            hb = 0.52 + 0.24 * blk;
          } else if (s.district === 'westbrook') {
            if (s.subzone === 'north_oak') {
              // Colinas limpias verdes sin contaminación lumínica
              dr = 0.095 + 0.04 * dustN; dg = 0.165 + 0.06 * dustN; db = 0.085 + 0.03 * dustN;
              if (fine > 0.978) {
                er = 0.48; eg = 0.36; eb = 0.18;
              }
              hb = 0.62 + 0.26 * dustN;
            } else if (s.subzone === 'charter_hill') {
              dr = 0.19 + 0.05 * blk; dg = 0.20 + 0.05 * blk; db = 0.22 + 0.05 * blk;
              if (fine > 0.80) {
                er = 0.35; eg = 0.38; eb = 0.44;
              }
              hb = 0.54 + 0.22 * blk;
            } else {
              // Japantown (magenta/rosa/violeta)
              dr = 0.075 + 0.03 * blk; dg = 0.07 + 0.03 * blk; db = 0.095 + 0.04 * blk;
              if (fine > 0.65) {
                const jw = 0.45 + 0.48 * blk;
                er = jw * 0.88; eg = jw * 0.24; eb = jw * 0.72;
              }
              hb = 0.58 + 0.26 * blk;
            }
          } else if (s.district === 'watson') {
            if (s.subzone === 'northside_port') {
              dr = 0.055 + 0.025 * blk; dg = 0.06 + 0.025 * blk; db = 0.075 + 0.03 * blk;
              if (fine > 0.93) {
                er = 0.16; eg = 0.34; eb = 0.42;
              }
              hb = 0.44 + 0.15 * blk;
            } else {
              dr = 0.065 + 0.03 * blk; dg = 0.065 + 0.03 * blk; db = 0.082 + 0.035 * blk;
              if (fine > 0.60) {
                const wt = 0.48 + 0.52 * blk;
                if (blk > 0.62) { er = wt * 0.95; eg = wt * 0.14; eb = wt * 0.22; }
                else if (blk > 0.25) { er = wt * 0.12; eg = wt * 0.78; eb = wt * 0.92; }
                else { er = wt * 0.92; eg = wt * 0.72; eb = wt * 0.16; }
              }
              hb = 0.58 + 0.28 * blk;
            }
          } else {
            // City Center: núcleo compacto luminoso frío/clínico/dorado
            const coreBoost = 1.0 - sstep(0.06, 0.21, Math.hypot(s.ax, s.ay));
            dr = 0.075 + 0.04 * blk; dg = 0.085 + 0.04 * blk; db = 0.115 + 0.05 * blk;
            if (fine > 0.48) {
              const ccW = (0.48 + 0.65 * coreBoost) * (0.45 + 0.55 * blk);
              if (blk > 0.72) { er = ccW * 0.92; eg = ccW * 0.76; eb = ccW * 0.38; }
              else if (blk > 0.34) { er = ccW * 0.22; eg = ccW * 0.78; eb = ccW * 1.0; }
              else { er = ccW * 0.78; eg = ccW * 0.88; eb = ccW * 1.0; }
            }
            hb = 0.65 + 0.28 * coreBoost;
          }
        } else {
          // Resto del globo fuera de la metrópoli: Océano Pacífico occidental y continentes áridos/rocosos (0 luces cyberpunk globales)
          let land = fbm(cx * 2.1 + 4.3, cy * 2.1, cz * 2.1, 5);
          if (cx < -0.25) land -= (-0.25 - cx) * 0.45;
          if (land > 0.04) {
            const desert = vnoise(cx * 9.0 + 1.5, cy * 9.0, cz * 9.0) * 0.5 + 0.5;
            dr = 0.21 + 0.12 * desert;
            dg = 0.105 + 0.05 * desert;
            db = 0.065 + 0.03 * desert;
            hb = 0.46 + 0.28 * desert;
          } else {
            const sh = sstep(-0.35, 0.04, land);
            dr = 0.012 + 0.02 * sh;
            dg = 0.032 + 0.045 * sh;
            db = 0.068 + 0.065 * sh;
            hb = 0.28;
          }
        }
      } else if (planetId === 'p3') {
        // ===== MUNDO MEDIEVAL: continentes verdes, relieve, océanos profundos =====
        let cont = fbm(nx * 1.8 + 11, ny * 1.8, nz * 1.8, 5);
        if (capDot > 0.84) cont = Math.max(cont, 0.08 + (capDot - 0.84) * 0.8);
        const ridge = 1 - Math.abs(vnoise(nx * 7 + 3, ny * 7, nz * 7));
        const mount = Math.max(0, cont - 0.12) * ridge * ridge * 3.0 * (capDot > 0.9 ? 0.2 : 1);
        const v = vnoise(nx * 14, ny * 14, nz * 14);

        if (cont > 0) {
          hb = 0.45 + cont * 0.6 + mount * 0.6;
          if (ny < -0.9 || ny > 0.93) { dr = 0.9; dg = 0.93; db = 0.96; }
          else if (mount > 0.6) { dr = 0.88; dg = 0.9; db = 0.94; }
          else if (mount > 0.25) { dr = 0.36; dg = 0.31; db = 0.26; }
          else if (v > 0.3 && capDot < 0.9) { dr = 0.07; dg = 0.2; db = 0.07; }
          else { dr = 0.15 + 0.04 * v; dg = 0.34 + 0.05 * v; db = 0.11; }

          if (hashI(Math.floor(nx * 300), Math.floor(ny * 300), Math.floor(nz * 300)) > 0.996) {
            er = 0.9; eg = 0.62; eb = 0.3;
          }
        } else {
          const sh = sstep(-0.25, 0.0, cont);
          dr = 0.02 + 0.03 * sh; dg = 0.08 + 0.12 * sh; db = 0.22 + 0.13 * sh;
          if (ny < -0.92 || ny > 0.94) { dr = 0.88; dg = 0.92; db = 0.96; }
          hb = 0.3 + cont * 0.3;
        }
      } else {
        // ===== PANDORA 360°: Estética orbital orgánica tipo luna terrestre/Avatar =====
        const {
          cont,
          highlandRidge,
          forestFactor,
          ashFactor,
          reefFactor,
          borderMountain,
          nation,
        } = samplePandoraBiomeField(nx, ny, nz, pandoraLandmarks);
        const v = vnoise(nx * 11, ny * 11, nz * 11);
        const fineGrain = vnoise(nx * 28.0 + 2.1, ny * 28.0, nz * 28.0 - 1.4) * 0.5 + 0.5;
        const canopyPatch = fbm(nx * 6.5 - 3.2, ny * 6.5 + 1.4, nz * 6.5, 3) * 0.5 + 0.5;

        if (nation === 'ash' && cont > 0) {
          // Nación 3 (Ceniza Mangkwan): extensión gris carbón / basalto con fisuras rojas sutiles
          const cinderShade = 0.125 + 0.085 * fineGrain + 0.03 * v;
          const ridgeTint = Math.min(1.0, highlandRidge * 2.2 + borderMountain * 0.55);
          dr = THREE.MathUtils.lerp(cinderShade * 1.06, 0.24, ridgeTint * 0.6);
          dg = THREE.MathUtils.lerp(cinderShade * 0.98, 0.22, ridgeTint * 0.6);
          db = THREE.MathUtils.lerp(cinderShade * 1.04, 0.24, ridgeTint * 0.6);

          const lavaCrack = Math.pow(
            Math.max(0, 1.0 - Math.abs(vnoise(nx * 18.0 + 4.1, ny * 18.0, nz * 18.0 - 2.3))),
            16.0
          );
          const hotSpot = lavaCrack * ashFactor * 0.72;
          dr = Math.min(1.0, dr + hotSpot * 0.32);
          dg = Math.min(1.0, dg + hotSpot * 0.07);
          er = hotSpot * 0.78;
          eg = hotSpot * 0.16;
          eb = hotSpot * 0.02;
          hb = 0.58 + ashFactor * 0.28 + highlandRidge * 0.42;
        } else if (cont > 0) {
          if (nation === 'water') {
            // Islas y bancos de arena coralina del archipiélago Metkayina
            const beachT = sstep(0.0, 0.032, cont);
            dr = THREE.MathUtils.lerp(0.84, 0.15 + 0.04 * fineGrain, beachT);
            dg = THREE.MathUtils.lerp(0.79, 0.42 + 0.08 * canopyPatch, beachT);
            db = THREE.MathUtils.lerp(0.61, 0.18 + 0.03 * fineGrain, beachT);
            hb = 0.46 + cont * 1.2;
          } else {
            // Nación 1 (Gran Continente Selvático): verde bosque espeso -> esmeralda -> oliva -> cumbres rocosas
            const emeraldMix = sstep(0.28, 0.78, canopyPatch);
            dr = THREE.MathUtils.lerp(0.088, 0.145, emeraldMix) + 0.035 * fineGrain;
            dg = THREE.MathUtils.lerp(0.235, 0.355, emeraldMix) + 0.055 * v;
            db = THREE.MathUtils.lerp(0.105, 0.148, emeraldMix) + 0.022 * fineGrain;

            // Tonos oliva en claros y valles bajos
            const gladeT = sstep(0.55, 0.85, fineGrain) * (1.0 - Math.min(1.0, highlandRidge * 3.0));
            dr = THREE.MathUtils.lerp(dr, 0.22, gladeT * 0.42);
            dg = THREE.MathUtils.lerp(dg, 0.40, gladeT * 0.38);

            // Cumbres rocosas de cordilleras y frontera basáltica con neblina alpina tenue
            const rockT = Math.min(1.0, highlandRidge * 2.6 + borderMountain * 0.72);
            dr = THREE.MathUtils.lerp(dr, 0.28, rockT * 0.65);
            dg = THREE.MathUtils.lerp(dg, 0.31, rockT * 0.58);
            db = THREE.MathUtils.lerp(db, 0.29, rockT * 0.62);

            const highPeakFrost = sstep(0.22, 0.44, highlandRidge);
            dr = THREE.MathUtils.lerp(dr, 0.68, highPeakFrost * 0.52);
            dg = THREE.MathUtils.lerp(dg, 0.74, highPeakFrost * 0.52);
            db = THREE.MathUtils.lerp(db, 0.72, highPeakFrost * 0.52);

            // Ríos finos naturales (tono azul-verde oscuro sin brillo neón de día)
            const riverTrace = Math.pow(
              Math.max(0.0, 1.0 - Math.abs(vnoise(nx * 13.0 + 1.2, ny * 13.0 - 0.7, nz * 13.0 + 2.4))),
              22.0
            );
            if (riverTrace > 0.22 && highlandRidge < 0.14) {
              const rBlend = (riverTrace - 0.22) * 1.1;
              dr = THREE.MathUtils.lerp(dr, 0.04, rBlend);
              dg = THREE.MathUtils.lerp(dg, 0.28, rBlend);
              db = THREE.MathUtils.lerp(db, 0.34, rBlend);
            }

            // Cara nocturna orbital muy tenue y orgánica (micro-bioluminiscencia forestal sutil)
            const microCell = hashI(Math.floor(nx * 260), Math.floor(ny * 260), Math.floor(nz * 260));
            const bioPatch = sstep(0.45, 0.85, canopyPatch) * (microCell > 0.965 ? 0.36 : 0.0);
            const riverNight = riverTrace > 0.3 ? (riverTrace - 0.3) * 0.28 : 0.0;
            const totalBio = (bioPatch + riverNight) * forestFactor * (1.0 - rockT * 0.85);
            const isViolet = fineGrain > 0.52;
            er = totalBio * (isViolet ? 0.22 : 0.04);
            eg = totalBio * (isViolet ? 0.12 : 0.34);
            eb = totalBio * (isViolet ? 0.38 : 0.38);

            hb = 0.48 + cont * 0.58 + highlandRidge * 0.45;
          }
        } else {
          // Nación 2 (Agua / Metkayina): azul marino profundo (#08264a -> #0e4375) y arrecifes turquesa (#1ca39e -> #38d6c4)
          const depthT = sstep(-0.36, -0.06, cont);
          const seaR = THREE.MathUtils.lerp(0.031, 0.055, depthT);
          const seaG = THREE.MathUtils.lerp(0.149, 0.263, depthT);
          const seaB = THREE.MathUtils.lerp(0.290, 0.459, depthT);

          const shallowCoast = sstep(-0.085, 0.0, cont);
          const reefT = Math.min(1.0, Math.max(reefFactor * 0.92, shallowCoast * 0.85));
          const turqHi = sstep(0.45, 0.98, reefT);

          const tR = THREE.MathUtils.lerp(0.110, 0.220, turqHi);
          const tG = THREE.MathUtils.lerp(0.639, 0.839, turqHi);
          const tB = THREE.MathUtils.lerp(0.620, 0.769, turqHi);

          dr = THREE.MathUtils.lerp(seaR, tR, reefT);
          dg = THREE.MathUtils.lerp(seaG, tG, reefT);
          db = THREE.MathUtils.lerp(seaB, tB, reefT);

          // Brillo nocturno muy tenue únicamente en la somera coralina
          const reefNight = reefT * sstep(0.55, 0.95, fineGrain) * 0.26;
          er = reefNight * 0.04;
          eg = reefNight * 0.34;
          eb = reefNight * 0.38;
          hb = 0.28 + reefT * 0.06;
        }
      }

      D[idx] = dr * 255; D[idx + 1] = dg * 255; D[idx + 2] = db * 255; D[idx + 3] = 255;
      E[idx] = er * 255; E[idx + 1] = eg * 255; E[idx + 2] = eb * 255; E[idx + 3] = 255;
      const hv = hb * 255;
      B[idx] = hv; B[idx + 1] = hv; B[idx + 2] = hv; B[idx + 3] = 255;
    }
  }

  diffC.getContext('2d').putImageData(dImg, 0, 0);
  emiC.getContext('2d').putImageData(eImg, 0, 0);
  bumpC.getContext('2d').putImageData(bImg, 0, 0);

  const map = new THREE.CanvasTexture(diffC);
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 8;
  const emissiveMap = new THREE.CanvasTexture(emiC);
  emissiveMap.colorSpace = THREE.SRGBColorSpace;
  emissiveMap.anisotropy = 8;
  const bumpMap = new THREE.CanvasTexture(bumpC);

  return { map, emissiveMap, bumpMap };
}

export function generateCloudMap(planetId, W = 1024, H = 512, capDir = [0, 1, 0]) {
  const capVec = new THREE.Vector3(capDir[0], capDir[1], capDir[2]).normalize();
  const cX = capVec.x;
  const cY = capVec.y;
  const cZ = capVec.z;
  const c = makeCanvas(W, H);
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(W, H);
  const P = img.data;

  const params = {
    p1: { lo: 0.04, hi: 0.34, col: [1, 1, 1], k: 0.92, cyclonic: true },
    p2: { lo: -0.04, hi: 0.32, col: [0.34, 0.40, 0.48], k: 0.56 },
    p3: { lo: 0.08, hi: 0.42, col: [1, 1, 1], k: 0.8, clearNorth: true },
    p4: { lo: 0.12, hi: 0.5, col: [0.92, 0.95, 1.0], k: 0.4 },
  }[planetId] || { lo: 0.1, hi: 0.4, col: [1, 1, 1], k: 0.7 };

  // Centros ciclónicos para remolinos atmosféricos realistas en Pandora
  const cyclones = params.cyclonic
    ? [
        { v: new THREE.Vector3(-0.45, 0.42, 0.78).normalize(), spin: 2.35, radius: 0.55 },
        { v: new THREE.Vector3(0.62, 0.54, -0.57).normalize(), spin: -2.15, radius: 0.48 },
        { v: new THREE.Vector3(0.18, -0.46, 0.87).normalize(), spin: 2.05, radius: 0.50 },
        { v: new THREE.Vector3(-0.74, -0.35, -0.57).normalize(), spin: -2.25, radius: 0.52 },
        { v: new THREE.Vector3(0.78, -0.18, 0.60).normalize(), spin: 1.85, radius: 0.44 },
      ]
    : null;

  const cosP = new Float32Array(W);
  const sinP = new Float32Array(W);
  for (let px = 0; px < W; px++) {
    const phi = ((px + 0.5) / W) * Math.PI * 2;
    cosP[px] = Math.cos(phi);
    sinP[px] = Math.sin(phi);
  }

  for (let py = 0; py < H; py++) {
    const theta = ((py + 0.5) / H) * Math.PI;
    const st = Math.sin(theta);
    const ny = Math.cos(theta);
    for (let px = 0; px < W; px++) {
      const nx = -cosP[px] * st;
      const nz = sinP[px] * st;
      const capDot = nx * cX + ny * cY + nz * cZ;
      let a = 0.0;

      if (params.cyclonic && cyclones) {
        let sx = nx;
        let sy = ny;
        let sz = nz;
        let vortexLift = 0.0;

        for (let k = 0; k < cyclones.length; k++) {
          const cy = cyclones[k];
          const dot = sx * cy.v.x + sy * cy.v.y + sz * cy.v.z;
          if (dot > 0.62) {
            const ang = Math.acos(Math.min(1.0, dot));
            const fall = Math.exp(-Math.pow(ang / cy.radius, 2.0) * 2.6);
            const swirlAng = cy.spin * fall * (1.0 - Math.min(1.0, ang / cy.radius) * 0.4);
            const cosA = Math.cos(swirlAng);
            const sinA = Math.sin(swirlAng);
            // Rotación de Rodrigues alrededor del eje del ciclón `cy.v`
            const kx = cy.v.x, ky = cy.v.y, kz = cy.v.z;
            const cxp = ky * sz - kz * sy;
            const cyp = kz * sx - kx * sz;
            const czp = kx * sy - ky * sx;
            const kdotp = dot;
            sx = sx * cosA + cxp * sinA + kx * kdotp * (1.0 - cosA);
            sy = sy * cosA + cyp * sinA + ky * kdotp * (1.0 - cosA);
            sz = sz * cosA + czp * sinA + kz * kdotp * (1.0 - cosA);
            vortexLift += fall * 0.24;
          }
        }

        const tradeWarp = vnoise(sx * 2.2 + 1.5, sy * 4.5, sz * 2.2 - 0.8) * 0.42;
        const nCloud = fbm(sx * 3.1 + 14.0 + tradeWarp, sy * 5.6, sz * 3.1 - tradeWarp, 5);
        const wisps = vnoise(sx * 9.5 + 3.0, sy * 12.0, sz * 9.5) * 0.08;
        const val = nCloud + vortexLift * 0.55 + wisps;
        a = sstep(params.lo, params.hi, val) * params.k;
      } else {
        const warp = vnoise(nx * 2 + 4, ny * 2, nz * 2) * 0.35;
        const v = fbm(nx * 3.2 + 20 + warp, ny * 5.0, nz * 3.2 - warp, 5);
        a = sstep(params.lo, params.hi, v) * params.k;
        if (params.clearNorth) a *= 1 - sstep(0.78, 0.9, capDot);
      }

      const idx = (py * W + px) * 4;
      P[idx] = params.col[0] * 255;
      P[idx + 1] = params.col[1] * 255;
      P[idx + 2] = params.col[2] * 255;
      P[idx + 3] = a * 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/**
 * Las luces de ciudad / bioluminiscencia solo brillan en la cara nocturna del planeta.
 */
function applyNightLightsShader(material, dayFloor = 0.06) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uSunViewPos = sharedUniforms.uSunViewPos;
    shader.fragmentShader =
      'uniform vec3 uSunViewPos;\n' +
      shader.fragmentShader.replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
        vec3 svDelta = uSunViewPos + vViewPosition;
        vec3 sunDirV = length(svDelta) > 0.0001 ? normalize(svDelta) : vec3(0.0, 1.0, 0.0);
        float nightF = smoothstep(0.09, -0.14, dot(normal, sunDirV));
        totalEmissiveRadiance *= mix(${dayFloor.toFixed(3)}, 1.0, nightF);`
      );
  };
  material.customProgramCacheKey = () => `nightLights_${dayFloor.toFixed(3)}`;
}

/**
 * Textura suave radial modulada con fBm multi-lóbulo para nubes volumétricas atravesables.
 */
function createVolumetricCloudTexture() {
  const S = 128;
  const c = makeCanvas(S, S);
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(S, S);
  const P = img.data;
  for (let py = 0; py < S; py++) {
    const ny = (py / S) * 2 - 1;
    for (let px = 0; px < S; px++) {
      const nx = (px / S) * 2 - 1;
      const dist = Math.hypot(nx, ny);
      const radial = Math.max(0.0, 1.0 - sstep(0.18, 0.98, dist));
      const wisps = fbm(nx * 2.8 + 4.2, ny * 2.8 - 1.7, 3.1, 4) * 0.5 + 0.5;
      const a = Math.max(0.0, Math.min(1.0, radial * (0.45 + 0.85 * wisps)));
      const shade = Math.round(236 + 19 * wisps);
      const idx = (py * S + px) * 4;
      P[idx] = shade;
      P[idx + 1] = Math.min(255, shade + 4);
      P[idx + 2] = 255;
      P[idx + 3] = Math.round(a * 255);
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

function createPassThroughCloudShaderMaterial(cloudPuffTex, baseHex) {
  const uniforms = {
    uMap: { value: cloudPuffTex },
    uColor: { value: new THREE.Color(baseHex) },
    uOpacity: { value: 0.0 },
    uPointSize: { value: 94.0 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: /* glsl */ `
      #include <common>
      #include <logdepthbuf_pars_vertex>
      uniform float uPointSize;
      varying float vCamFade;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float camDist = max(0.1, -mvPosition.z);
        vCamFade = smoothstep(3.5, 28.0, camDist) * (1.0 - smoothstep(420.0, 920.0, camDist));
        gl_PointSize = clamp((uPointSize * 480.0) / camDist, 2.0, 440.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <logdepthbuf_vertex>
      }
    `,
    fragmentShader: /* glsl */ `
      #include <common>
      #include <logdepthbuf_pars_fragment>
      uniform sampler2D uMap;
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vCamFade;
      void main() {
        #include <logdepthbuf_fragment>
        vec4 tex = texture2D(uMap, gl_PointCoord);
        float alpha = tex.a * uOpacity * vCamFade;
        if (alpha < 0.004) discard;
        gl_FragColor = vec4(uColor * tex.rgb, clamp(alpha, 0.0, 0.92));
      }
    `,
    transparent: true,
    depthWrite: false,
    fog: false,
  });
  // Compatibilidad directa con acceso existente `.material.color` y `.material.opacity`
  mat.color = uniforms.uColor.value;
  Object.defineProperty(mat, 'opacity', {
    get: () => uniforms.uOpacity.value,
    set: (v) => {
      uniforms.uOpacity.value = v;
    },
  });
  return mat;
}

/**
 * Shader atmosférico para mantos de nubes bajas y medias con iluminación solar direccional,
 * dispersión en contra-luz ("silver lining") y desvanecimiento suave hacia el horizonte (sin bordes negros).
 */
function createLitCloudDeckMaterial(cloudMap, opts) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uCloudMap: { value: cloudMap },
      uSunPosition: { value: new THREE.Vector3(0, 0, 0) },
      uPlanetCenter: { value: new THREE.Vector3(0, 0, 0) },
      uAmbientColor: { value: new THREE.Color(opts.ambient) },
      uSunColor: { value: new THREE.Color(opts.sunlit) },
      uHorizonColor: { value: new THREE.Color(opts.horizon) },
      uOpacity: { value: 0.0 },
    },
    vertexShader: /* glsl */ `
      #include <common>
      #include <logdepthbuf_pars_vertex>
      uniform vec3 uPlanetCenter;
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vRadialNorm;
      void main() {
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vec3 radDelta = wp.xyz - uPlanetCenter;
        vRadialNorm = length(radDelta) > 0.0001 ? normalize(radDelta) : vec3(0.0, 1.0, 0.0);
        gl_Position = projectionMatrix * viewMatrix * wp;
        #include <logdepthbuf_vertex>
      }
    `,
    fragmentShader: /* glsl */ `
      #include <common>
      #include <logdepthbuf_pars_fragment>
      uniform sampler2D uCloudMap;
      uniform vec3 uSunPosition;
      uniform vec3 uAmbientColor;
      uniform vec3 uSunColor;
      uniform vec3 uHorizonColor;
      uniform float uOpacity;
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vRadialNorm;

      void main() {
        #include <logdepthbuf_fragment>
        vec4 tex = texture2D(uCloudMap, vUv);
        float cloudAlpha = clamp(tex.a * uOpacity, 0.0, 1.0);
        if (cloudAlpha < 0.004) discard;

        vec3 n = length(vRadialNorm) > 0.0001 ? normalize(vRadialNorm) : vec3(0.0, 1.0, 0.0);
        vec3 sDelta = uSunPosition - vWorldPos;
        vec3 sunDir = length(sDelta) > 0.0001 ? normalize(sDelta) : vec3(0.0, 1.0, 0.0);
        vec3 vDelta = cameraPosition - vWorldPos;
        vec3 viewDir = length(vDelta) > 0.0001 ? normalize(vDelta) : vec3(0.0, 1.0, 0.0);

        // Iluminación solar envolvente + dispersión hacia adelante protegida contra pow(<=0)
        float ndots = dot(n, sunDir);
        float sunWrap = smoothstep(-0.42, 0.72, ndots);
        float termGlow = exp(-pow((ndots - 0.04) / 0.22, 2.0)) * 0.55;
        float forwardCos = max(dot(-viewDir, sunDir), 0.0001);
        float forward = pow(forwardCos, 3.2) * 0.45;
        vec3 baseCloud = mix(uAmbientColor, uSunColor, clamp(sunWrap + forward, 0.0, 1.0)) * (0.75 + 0.35 * tex.rgb);
        vec3 litCloud = mix(baseCloud, uHorizonColor * 1.15, termGlow);

        // Fundir bordes rasantes al horizonte con tono diurno/crepúsculo, oscuro en la cara nocturna
        float ndotv = abs(dot(n, viewDir));
        float dayLimb = smoothstep(-0.35, 0.35, ndots);
        float horizonBlend = (1.0 - smoothstep(0.02, 0.28, ndotv)) * mix(0.22, 1.0, dayLimb);
        vec3 rimTarget = mix(uAmbientColor * 0.65, uHorizonColor, dayLimb);
        vec3 finalCol = clamp(mix(litCloud, rimTarget, horizonBlend * 0.78), 0.0, 4.0);
        float edgeAlpha = cloudAlpha * smoothstep(0.005, 0.14, ndotv);

        gl_FragColor = vec4(finalCol, clamp(edgeAlpha, 0.0, 0.96));
      }
    `,
    transparent: true,
    depthWrite: false,
    fog: false,
    side: THREE.DoubleSide,
  });
}

/**
 * Cúpula envolvente con dispersión atmosférica física aproximada (Rayleigh + Mie):
 * genera cielo azul/turquesa profundo en altura, banda crepuscular cálida en horizonte y halo solar Mie.
 */
export function createAtmosphericSkyDome() {
  const geom = new THREE.SphereGeometry(28000, 48, 32);
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uLocalUp: { value: new THREE.Vector3(0, 1, 0) },
      uSunDir: { value: new THREE.Vector3(0, 0.2, 1) },
      uZenithColor: { value: new THREE.Color(0x1e64c8) },
      uMidColor: { value: new THREE.Color(0x4ea8ee) },
      uHorizonColor: { value: new THREE.Color(0xffbd6b) },
      uSunGlowColor: { value: new THREE.Color(0xffe0a0) },
      uHorizonDot: { value: -0.2 },
      uAtmoOpacity: { value: 0.0 },
      uZenithAlpha: { value: 1.0 },
      uMieG: { value: 0.78 },
      uMieIntensity: { value: 0.55 },
    },
    vertexShader: /* glsl */ `
      #include <common>
      #include <logdepthbuf_pars_vertex>
      varying vec3 vWorldPos;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
        #include <logdepthbuf_vertex>
      }
    `,
    fragmentShader: /* glsl */ `
      #include <common>
      #include <logdepthbuf_pars_fragment>
      uniform vec3 uLocalUp;
      uniform vec3 uSunDir;
      uniform vec3 uZenithColor;
      uniform vec3 uMidColor;
      uniform vec3 uHorizonColor;
      uniform vec3 uSunGlowColor;
      uniform float uHorizonDot;
      uniform float uAtmoOpacity;
      uniform float uZenithAlpha;
      uniform float uMieG;
      uniform float uMieIntensity;
      varying vec3 vWorldPos;

      float hgPhase(float cosTheta, float g) {
        float g2 = g * g;
        return (1.0 - g2) / max(0.04, 4.0 * 3.14159265 * pow(max(0.05, 1.0 + g2 - 2.0 * g * cosTheta), 1.5));
      }

      void main() {
        #include <logdepthbuf_fragment>
        if (uAtmoOpacity < 0.004) discard;

        vec3 rDelta = vWorldPos - cameraPosition;
        vec3 rayDir = length(rDelta) > 0.0001 ? normalize(rDelta) : vec3(0.0, 1.0, 0.0);
        vec3 upDir = length(uLocalUp) > 0.0001 ? normalize(uLocalUp) : vec3(0.0, 1.0, 0.0);
        vec3 sDir = length(uSunDir) > 0.0001 ? normalize(uSunDir) : vec3(0.0, 0.0, 1.0);

        float elev = dot(rayDir, upDir);
        float skyH = clamp((elev - uHorizonDot) / max(0.12, 1.0 - uHorizonDot), 0.0, 1.0);
        float sunElev = dot(sDir, upDir);

        // Modelo Rayleigh (extinción óptica según masa de aire hacia el horizonte) + gradiente planetario
        float cosTheta = clamp(dot(rayDir, sDir), -0.999, 0.999);
        float rayleighPhase = 0.75 * (1.0 + cosTheta * cosTheta);
        float horizonMass = exp(-skyH * 3.1);

        vec3 rayCol = mix(uHorizonColor, uMidColor, smoothstep(0.0, 0.28, skyH));
        rayCol = mix(rayCol, uZenithColor, smoothstep(0.24, 0.92, skyH));
        rayCol *= mix(0.86, 1.14, rayleighPhase * 0.55);

        // Dispersión frontal Mie (Henyey-Greenstein) concentrada alrededor del disco solar y ocaso
        float mieHG = hgPhase(cosTheta, uMieG);
        float forwardGlow = pow(max(cosTheta, 0.0), 4.0) * 0.28 + clamp(mieHG * 0.65, 0.0, 1.8);
        float sunsetWarmth = smoothstep(-0.18, 0.25, sunElev) * (0.45 + 0.55 * horizonMass);
        vec3 col = rayCol + uSunGlowColor * forwardGlow * uMieIntensity * sunsetWarmth * (1.0 - skyH * 0.48);
        col = clamp(col, 0.0, 3.8);

        float alpha = mix(1.0, uZenithAlpha, smoothstep(0.14, 0.78, skyH)) * uAtmoOpacity;
        gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
      }
    `,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    fog: false,
    side: THREE.BackSide,
  });

  const mesh = new THREE.Mesh(geom, material);
  mesh.name = 'Atmospheric_Sky_Scattering_Dome';
  mesh.renderOrder = -60;
  mesh.frustumCulled = false;
  mesh.visible = false;
  mesh.userData.skipSSAO = true;
  return mesh;
}

/**
 * Esfera planetaria orbital suave (SphereGeometry 128x128) + capas de nubes volumétricas
 * (capa orbital + capa exterior en borde de atmósfera `atmoTopAlt` + capa densa baja `atmoTopAlt * 0.42`)
 * + atmósfera Fresnel.
 */
export function createOrbitalPlanet(cfg, solarScale = 157.5) {
  const R = cfg.localRadius;
  const group = new THREE.Group();
  group.name = `${cfg.id}_Orbital_Globe`;

  const capDirVec = cfg.capLocalDir ? cfg.capLocalDir.clone().normalize() : new THREE.Vector3(0, 1, 0);
  const capDirArr = [capDirVec.x, capDirVec.y, capDirVec.z];

  const res = { p4: [2048, 1024], p2: [1536, 768], p1: [1536, 768] }[cfg.id] || [1024, 512];
  const { map, emissiveMap, bumpMap } = generateSurfaceMaps(cfg.id, res[0], res[1], capDirArr);

  const look = {
    p1: { ei: 0.56, rough: 0.72, metal: 0.06, bump: 1.45, floor: 0.0 },
    p2: { ei: 0.96, rough: 0.58, metal: 0.3, bump: 0.65, floor: 0.0 },
    p3: { ei: 1.2, rough: 0.85, metal: 0.02, bump: 1.6, floor: 0.0 },
    p4: { ei: 2.4, rough: 0.45, metal: 0.55, bump: 0.8, floor: 0.16 },
  }[cfg.id];

  const material = new THREE.MeshStandardMaterial({
    map,
    emissiveMap,
    emissive: new THREE.Color(1, 1, 1),
    emissiveIntensity: look.ei,
    roughness: look.rough,
    metalness: look.metal,
    bumpMap,
    bumpScale: look.bump,
  });
  applyNightLightsShader(material, look.floor);

  const surfaceMesh = new THREE.Mesh(new THREE.SphereGeometry(R, 128, 128), material);
  surfaceMesh.name = `${cfg.id}_Orbital_Surface`;
  group.add(surfaceMesh);

  const cloudRes = cfg.id === 'p1' ? [1536, 768] : [1024, 512];
  const cloudTex = generateCloudMap(cfg.id, cloudRes[0], cloudRes[1], capDirArr);
  const cloudDeckPalette = {
    p1: { ambient: 0x4b6b88, sunlit: 0xffffff, horizon: 0x9cd8ec },
    p2: { ambient: 0x0d2234, sunlit: 0x5eaed0, horizon: 0x104462 },
    p3: { ambient: 0x7c98be, sunlit: 0xffffff, horizon: 0xf4bc74 },
    p4: { ambient: 0x623018, sunlit: 0xffc888, horizon: 0xdc6e32 },
  }[cfg.id] || { ambient: 0x607080, sunlit: 0xffffff, horizon: 0xaab8c8 };

  // 1. Nubes bajas en Troposfera Alta (`worldRadius * 1.045`, por encima de rascacielos y copas)
  const lowerCloudMat = createLitCloudDeckMaterial(cloudTex, cloudDeckPalette);
  const lowerCloudMesh = new THREE.Mesh(new THREE.SphereGeometry(R * 1.045, 128, 128), lowerCloudMat);
  lowerCloudMesh.name = `${cfg.id}_Low_Cloud_Shell`;
  lowerCloudMesh.userData.skipSSAO = true;
  group.add(lowerCloudMesh);

  // 2. Nubes altas en techo de Troposfera (`worldRadius * 1.082`) abrazando la curvatura desde el espacio
  const upperCloudMat = createLitCloudDeckMaterial(cloudTex, cloudDeckPalette);
  const upperCloudMesh = new THREE.Mesh(new THREE.SphereGeometry(R * 1.082, 128, 128), upperCloudMat);
  upperCloudMesh.name = `${cfg.id}_High_Cloud_Shell`;
  upperCloudMesh.userData.skipSSAO = true;
  group.add(upperCloudMesh);

  // 3. Bancos volumétricos 3D (`lowerCloudPuffs`) en Troposfera Alta (`worldRadius + 65` a `worldRadius + 160`)
  const lowerCloudGroup = new THREE.Group();
  lowerCloudGroup.name = `${cfg.id}_Lower_Cloud_Puffs_Group`;
  lowerCloudGroup.visible = false;
  group.add(lowerCloudGroup);

  const puffCount = 460;
  const puffPositions = new Float32Array(puffCount * 3);
  const minAltLocal = 65.0 / solarScale;
  const maxAltLocal = 160.0 / solarScale;
  const qCap = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), capDirVec);
  const tmpPuff = new THREE.Vector3();

  for (let i = 0; i < puffCount; i++) {
    const theta = Math.acos(1.0 - hashI(i, 2, 17) * 0.42); // Concentrado sobre el hemisferio de aterrizaje
    const phi = hashI(i, 9, 5) * Math.PI * 2;
    const altLocal = minAltLocal + hashI(i, 4, 13) * (maxAltLocal - minAltLocal);
    const rr = R + altLocal;
    tmpPuff.set(
      rr * Math.sin(theta) * Math.cos(phi),
      rr * Math.cos(theta),
      rr * Math.sin(theta) * Math.sin(phi)
    );
    tmpPuff.applyQuaternion(qCap);
    puffPositions[i * 3] = tmpPuff.x;
    puffPositions[i * 3 + 1] = tmpPuff.y;
    puffPositions[i * 3 + 2] = tmpPuff.z;
  }
  const puffGeo = new THREE.BufferGeometry();
  puffGeo.setAttribute('position', new THREE.BufferAttribute(puffPositions, 3));
  const puffMat = createPassThroughCloudShaderMaterial(createVolumetricCloudTexture(), cloudDeckPalette.sunlit);
  const lowerCloudPuffs = new THREE.Points(puffGeo, puffMat);
  lowerCloudPuffs.name = `${cfg.id}_Volumetric_Billboard_Clouds`;
  lowerCloudPuffs.userData.skipSSAO = true;
  lowerCloudGroup.add(lowerCloudPuffs);

  const atmosphere = createFresnelAtmosphereShell(cfg, R, cfg.id === 'p4' ? 1.078 : 1.095);
  group.add(atmosphere);

  return {
    group,
    surfaceMesh,
    upperCloudMesh,
    lowerCloudGroup,
    lowerCloudMesh,
    lowerCloudPuffs,
    cloudDeckPalette,
    atmosphere,
  };
}

/**
 * Capa atmosférica exterior con shader Fresnel (compatible con logarithmicDepthBuffer).
 */
export function createFresnelAtmosphereShell(planetCfg, localRadius, thickness = 1.045) {
  const geom = new THREE.SphereGeometry(localRadius * thickness, 96, 96);

  const colorMap = {
    p1: [0x5cd2ff, 0x92e6ff],
    p2: [0x29c8ff, 0xff2a95],
    p3: [0x6cb8ff, 0xffb85c],
    p4: [0x8cc4ff, 0xffa860],
    p5: [0x4898ff, 0x70ffe0],
  }[planetCfg.id] || [0x68c4ff, 0xffaa55];

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uColorDay: { value: new THREE.Color(colorMap[0]) },
      uColorHorizon: { value: new THREE.Color(colorMap[1]) },
      uSunPosition: { value: new THREE.Vector3(0, 0, 0) },
      uAltitudeFade: { value: 1.0 },
    },
    vertexShader: /* glsl */ `
      #include <common>
      #include <logdepthbuf_pars_vertex>
      varying vec3 vWorldNormal;
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
        #include <logdepthbuf_vertex>
      }
    `,
    fragmentShader: /* glsl */ `
      #include <common>
      #include <logdepthbuf_pars_fragment>
      uniform vec3 uColorDay;
      uniform vec3 uColorHorizon;
      uniform vec3 uSunPosition;
      uniform float uAltitudeFade;
      varying vec3 vWorldNormal;
      varying vec3 vWorldPosition;
      void main() {
        #include <logdepthbuf_fragment>
        vec3 vDelta = cameraPosition - vWorldPosition;
        vec3 viewDir = length(vDelta) > 0.0001 ? normalize(vDelta) : vec3(0.0, 1.0, 0.0);
        vec3 n = length(vWorldNormal) > 0.0001 ? normalize(vWorldNormal) : vec3(0.0, 1.0, 0.0);
        vec3 sDelta = uSunPosition - vWorldPosition;
        vec3 sunDir = length(sDelta) > 0.0001 ? normalize(sDelta) : vec3(0.0, 1.0, 0.0);

        float ndotv = abs(dot(n, viewDir));
        float fresnel = pow(max(1.0 - ndotv, 0.0001), 2.6);
        float sunLight = clamp(dot(n, sunDir) * 0.7 + 0.35, 0.05, 1.0);
        float twilight = smoothstep(-0.35, 0.45, dot(n, sunDir));
        float mieLimb = pow(max(dot(-viewDir, sunDir), 0.0001), 4.0) * 0.55;
        vec3 col = mix(uColorHorizon, uColorDay, twilight) + uColorHorizon * mieLimb;
        float alpha = fresnel * sunLight * uAltitudeFade * 0.9;
        vec3 outCol = clamp(col * (1.15 + fresnel * 0.75), 0.0, 3.6);
        gl_FragColor = vec4(outCol, clamp(alpha, 0.0, 0.9));
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.FrontSide,
  });

  const mesh = new THREE.Mesh(geom, material);
  mesh.name = `${planetCfg.id}_Fresnel_Atmosphere`;
  mesh.userData.skipSSAO = true;
  return mesh;
}

/**
 * Banda de rascacielos instanciados que rodea el casquete urbano hasta el horizonte.
 * Solo visible dentro de la atmósfera (forma parte del grupo de detalle de superficie).
 */
export function createUrbanTowerBand(cfg, count = 1400) {
  const R = cfg.localRadius;
  const R_REF = 1.65;
  const isCoruscant = cfg.id === 'p4';

  const size = 256;
  const dC = makeCanvas(size, size);
  const eC = makeCanvas(size, size);
  const dctx = dC.getContext('2d');
  const ectx = eC.getContext('2d');
  dctx.fillStyle = isCoruscant ? '#2a2c31' : '#111821';
  dctx.fillRect(0, 0, size, size);
  ectx.fillStyle = '#000000';
  ectx.fillRect(0, 0, size, size);
  const palette = isCoruscant
    ? ['#ffb050', '#ffd890', '#ff8a3a', '#fff0d0']
    : ['#00e5ff', '#ff2a95', '#c8f4ff', '#ffaa2b'];
  for (let y = 4; y < size; y += 8) {
    for (let x = 3; x < size; x += 6) {
      if (Math.random() < (isCoruscant ? 0.55 : 0.42)) {
        ectx.fillStyle = palette[(Math.random() * palette.length) | 0];
        ectx.fillRect(x, y, 3, 4);
      }
    }
  }
  const map = new THREE.CanvasTexture(dC);
  map.colorSpace = THREE.SRGBColorSpace;
  const emissiveMap = new THREE.CanvasTexture(eC);
  emissiveMap.colorSpace = THREE.SRGBColorSpace;

  const geo = new THREE.BoxGeometry(1, 1, 1);
  geo.translate(0, 0.5, 0);
  const mat = new THREE.MeshStandardMaterial({
    map,
    emissiveMap,
    emissive: new THREE.Color(1, 1, 1),
    emissiveIntensity: isCoruscant ? 1.6 : 2.0,
    roughness: 0.42,
    metalness: 0.7,
  });

  const mesh = new THREE.InstancedMesh(geo, mat, count);
  mesh.name = `${cfg.id}_Horizon_Tower_Band`;

  const dummy = new THREE.Object3D();
  const up = new THREE.Vector3(0, 1, 0);
  const n = new THREE.Vector3();
  for (let i = 0; i < count; i++) {
    const theta = 0.025 + Math.pow(hashI(i, 3, 9), 0.85) * 0.14;
    const phi = hashI(i, 7, 1) * Math.PI * 2;
    n.set(Math.sin(theta) * Math.cos(phi), Math.cos(theta), Math.sin(theta) * Math.sin(phi));
    dummy.position.copy(n).multiplyScalar(R * 0.9996);
    dummy.quaternion.setFromUnitVectors(up, n);
    dummy.rotateY(hashI(i, 2, 2) * Math.PI);
    const w = R_REF * (0.0024 + 0.0042 * hashI(i, 5, 5));
    const d = R_REF * (0.0024 + 0.0042 * hashI(i, 6, 8));
    const hgt = R_REF * (0.006 + 0.025 * Math.pow(hashI(i, 9, 4), 1.6));
    dummy.scale.set(w, hgt, d);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  return mesh;
}

/**
 * Proyecta y adapta una escena `.glb` sobre el casquete esférico superior (+Y) del planeta.
 * - Geometrías únicas: cada vértice se curva sobre la esfera (terreno, río, murallas, fortaleza);
 *   el perímetro del terreno se hunde en la corteza para eliminar bordes planos.
 * - Geometrías instanciadas/compartidas: se proyecta el pivote y se orienta según la normal.
 */
export function projectGLBOntoSphericalCap(glbScene, localRadius, localScale, planetId) {
  glbScene.position.set(0, 0, 0);
  glbScene.rotation.set(0, 0, 0);
  glbScene.scale.set(1, 1, 1);
  glbScene.updateMatrixWorld(true);

  const isNightCity = planetId === 'p2';
  const upVec = new THREE.Vector3(0, 1, 0);
  const glbSphereRadius = localRadius / localScale;
  const maxFlatRadius = isNightCity ? 124.0 : 152.0;

  function mapFlatPointToSphere(x, y, z, applyEdgeSkirt = false) {
    const horizDist = Math.sqrt(x * x + z * z);
    const theta = Math.min(1.18, horizDist / (glbSphereRadius * 0.94));
    const phi = Math.atan2(z, x);
    const sinTheta = Math.sin(theta);
    const nx = sinTheta * Math.cos(phi);
    const ny = Math.cos(theta);
    const nz = sinTheta * Math.sin(phi);

    let effectiveY = y;
    if (applyEdgeSkirt) {
      const edgeT = THREE.MathUtils.smoothstep(horizDist, maxFlatRadius * 0.65, maxFlatRadius * 1.0);
      effectiveY = THREE.MathUtils.lerp(y, isNightCity ? -36.0 : -18.0, edgeT);
    }

    const heightOffset = planetId === 'p3' ? 14.5 : isNightCity ? 16.5 : 0.4;
    const r = Math.max(glbSphereRadius * 0.90, glbSphereRadius + effectiveY + heightOffset);
    return { px: r * nx, py: r * ny - glbSphereRadius, pz: r * nz, nx, ny, nz };
  }

  const invRootMatrix = new THREE.Matrix4().copy(glbScene.matrixWorld).invert();
  const meshRecords = [];
  const geomUsageCount = new Map();

  glbScene.traverse((child) => {
    if (child.isMesh && child.geometry) {
      const initRootMat = new THREE.Matrix4().multiplyMatrices(invRootMatrix, child.matrixWorld);
      meshRecords.push({ mesh: child, initRootMat });
      geomUsageCount.set(child.geometry, (geomUsageCount.get(child.geometry) || 0) + 1);
    }
  });

  for (const { mesh, initRootMat } of meshRecords) {
    if (mesh.parent !== glbScene) glbScene.attach(mesh);
    initRootMat.decompose(mesh.position, mesh.quaternion, mesh.scale);
    mesh.updateMatrix();
  }

  const pos = new THREE.Vector3();
  const quat = new THREE.Quaternion();
  const scale = new THREE.Vector3();
  const normalVec = new THREE.Vector3();
  const tiltQuat = new THREE.Quaternion();
  const vTemp = new THREE.Vector3();

  const pbrConcrete = getBrutalistConcretePbrSet();
  const pbrTerrain = getOrganicTerrainPbrSet();
  const splatUniformRefs = [];
  let heroShadowCount = 0;

  for (const { mesh, initRootMat } of meshRecords) {
    // En Night City (3.8x), recortar torres exteriores (NC_FarHorizon y NC_Canyon > 128m)
    // para que el núcleo se limite al Anillo 1 (City Center) sin invadir Suburbios ni Badlands.
    if (isNightCity) {
      if (/^NC_FarHorizon/.test(mesh.name)) {
        mesh.visible = false;
        continue;
      }
      if (/^NC_Canyon_Skyscraper/.test(mesh.name)) {
        pos.setFromMatrixPosition(initRootMat);
        const hDist = Math.hypot(pos.x, pos.z);
        if (hDist > 104.0 || pos.x < -58.0) {
          mesh.visible = false;
          continue;
        }
      }
    }

    const usage = geomUsageCount.get(mesh.geometry) || 1;
    const isTerrainSkirt = /Terrain|River|Ground|Forest|Canal|Hill|Slope|Meadow|Grass|Cliff|Earth|Dirt|Landscape|Surface/i.test(mesh.name);
    const isHeroStruct = /Citadel|Castle|Fortress|Keep|Senate|Tower|Skyscraper|Bridge|Spire|Tree|Foliage|Oak|Pine/i.test(mesh.name);

    mesh.castShadow = !isTerrainSkirt && isHeroStruct && heroShadowCount < 110;
    if (mesh.castShadow) heroShadowCount++;
    mesh.receiveShadow = isTerrainSkirt || isHeroStruct;

    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    if (mesh.castShadow && mats.some((m) => m?.transparent && !(m.alphaTest > 0))) {
      mesh.castShadow = false;
    }
    for (const m of mats) {
      if (!m || m.userData?.pbrUpgraded) continue;
      m.userData.pbrUpgraded = true;
      if (isTerrainSkirt && m.isMeshStandardMaterial) {
        if (!m.roughnessMap && pbrTerrain.roughnessMap) m.roughnessMap = pbrTerrain.roughnessMap;
        if (!m.bumpMap && pbrTerrain.bumpMap) {
          m.bumpMap = pbrTerrain.bumpMap;
          m.bumpScale = 0.04;
        }
        if (planetId === 'p3') {
          splatUniformRefs.push(
            applyTerrainSplattingShader(m, {
              mode: 'perugius',
              worldRadius: localRadius * 157.5,
              peakStart: 3.6,
              peakEnd: 8.2,
              shoreBand: 0.55,
            })
          );
        }
        m.needsUpdate = true;
      } else if (m.isMeshStandardMaterial && !m.transparent && !m.map && pbrConcrete.map) {
        m.roughnessMap = pbrConcrete.roughnessMap;
        m.bumpMap = pbrConcrete.bumpMap;
        m.bumpScale = 0.025;
        m.needsUpdate = true;
      }
    }

    if (usage === 1 || isTerrainSkirt) {
      if (usage > 1) mesh.geometry = mesh.geometry.clone();
      const pAttr = mesh.geometry.attributes.position;
      const invMeshMat = new THREE.Matrix4().copy(initRootMat).invert();
      for (let i = 0; i < pAttr.count; i++) {
        vTemp.fromBufferAttribute(pAttr, i).applyMatrix4(initRootMat);
        const m = mapFlatPointToSphere(vTemp.x, vTemp.y, vTemp.z, isTerrainSkirt);
        vTemp.set(m.px, m.py, m.pz).applyMatrix4(invMeshMat);
        pAttr.setXYZ(i, vTemp.x, vTemp.y, vTemp.z);
      }
      pAttr.needsUpdate = true;
      mesh.geometry.computeVertexNormals();
      mesh.geometry.computeBoundingBox();
      mesh.geometry.computeBoundingSphere();
    } else {
      initRootMat.decompose(pos, quat, scale);
      if (isNightCity && /^NC_Canyon_Skyscraper/.test(mesh.name)) {
        const hDist = Math.hypot(pos.x, pos.z);
        const taper = 1.0 - THREE.MathUtils.smoothstep(hDist, 95.0, 128.0) * 0.46;
        scale.y *= taper;
      }
      const m = mapFlatPointToSphere(pos.x, pos.y, pos.z, false);
      normalVec.set(m.nx, m.ny, m.nz).normalize();
      tiltQuat.setFromUnitVectors(upVec, normalVec);
      mesh.position.set(m.px, m.py, m.pz);
      mesh.quaternion.copy(tiltQuat).multiply(quat);
      mesh.scale.copy(scale);
      mesh.updateMatrix();
    }
  }

  glbScene.scale.setScalar(localScale);
  glbScene.position.set(0, localRadius, 0);
  glbScene.updateMatrixWorld(true);
  glbScene.userData.splatUniforms = splatUniformRefs;
}
