import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Water } from 'three/examples/jsm/objects/Water.js';
import {
  hashI,
  fbm,
  vnoise,
  ridgedMultifractal,
  PANDORA_LANDMARKS,
  PANDORA_UNDERWATER_DEPTH,
  buildPandoraSphereLandmarks,
  samplePandoraBiomeField,
} from './planetarySphere.js';
import { buildAshPeopleBiome, buildMetkayinaReefBiome } from './pandoraBiomes.js';
import {
  getOrganicTerrainPbrSet,
  getRockBasaltPbrSet,
  getBarkPbrSet,
  getFoliageTextureSet,
  createFoliageDepthMaterial,
  getWaterNormalTexture,
  applyTerrainSplattingShader,
} from './proceduralPbr.js';

const S = 1.0 / 3.5; // Escala 1:1 en superficie acorde a SOLAR_SCALE = 157.5
export const PANDORA_CAP_THETA = Math.PI; // Cobertura global 360°

const UP_Y = new THREE.Vector3(0, 1, 0);
const DEFAULT_CAP_QUAT = new THREE.Quaternion().setFromUnitVectors(
  UP_Y,
  new THREE.Vector3(
    0,
    Math.cos(THREE.MathUtils.degToRad(68)),
    Math.sin(THREE.MathUtils.degToRad(68))
  ).normalize()
);
const DEFAULT_SPHERE_LANDMARKS = buildPandoraSphereLandmarks([
  0,
  Math.cos(THREE.MathUtils.degToRad(68)),
  Math.sin(THREE.MathUtils.degToRad(68)),
]);

const PANDORA_SPREAD_TIGHT = 1.0 / 3.2;

// 5 cuencas lacustres interiores exclusivamente dentro de la Nación del Bosque (coordenadas normalizadas en capFrame)
const INLAND_LAKE_BASINS = [
  { id: 'valley_lake', dir: new THREE.Vector3(-0.08, 0.992, 0.095).normalize(), angRad: 0.024, waterElev: 0.0026 },
  { id: 'east_lake', dir: new THREE.Vector3(0.42, 0.78, 0.46).normalize(), angRad: 0.025, waterElev: 0.0028 },
  { id: 'west_lake', dir: new THREE.Vector3(-0.56, 0.62, -0.55).normalize(), angRad: 0.024, waterElev: 0.0027 },
  { id: 'souls_lake', dir: new THREE.Vector3(0.36, -0.12, -0.92).normalize(), angRad: 0.026, waterElev: 0.0028 },
  { id: 'mush_lake', dir: new THREE.Vector3(-0.24, -0.78, 0.58).normalize(), angRad: 0.024, waterElev: 0.0027 },
];

const _vCap = new THREE.Vector3();
const _vSphere = new THREE.Vector3();

/**
 * Convierte coordenadas polares locales sobre el marco esférico en posición y normal.
 */
export function pandoraCapPoint(R, theta, phi, heightOffset = 0) {
  const sinT = Math.sin(theta);
  const nx = sinT * Math.cos(phi);
  const ny = Math.cos(theta);
  const nz = sinT * Math.sin(phi);
  const r = R + heightOffset;
  return {
    pos: new THREE.Vector3(r * nx, r * ny, r * nz),
    normal: new THREE.Vector3(nx, ny, nz),
  };
}

/**
 * Evalúa el relieve multi-octava, nación, bioma, lagos y profundidades marinas en los 360° de Pandora
 * a partir de una normal unitaria `(nx, ny, nz)` en `capFrame`.
 */
export function samplePandoraGlobalPoint(
  nx,
  ny,
  nz,
  qCap = DEFAULT_CAP_QUAT,
  sphereLandmarks = DEFAULT_SPHERE_LANDMARKS,
  octaves = 4
) {
  _vCap.set(nx, ny, nz).normalize();
  _vSphere.copy(_vCap).applyQuaternion(qCap).normalize();
  const sx = _vSphere.x;
  const sy = _vSphere.y;
  const sz = _vSphere.z;

  const {
    cont,
    ridge,
    highlandRidge,
    craterDepression,
    forestFactor,
    waterFactor,
    ashFactor,
    reefFactor,
    borderMountain,
    forestClump,
    nation,
  } = samplePandoraBiomeField(sx, sy, sz, sphereLandmarks, octaves);

  // Evaluar proximidad a las 5 cuencas lacustres interiores únicamente dentro de Nación del Bosque
  let lakeBlend = 0.0;
  let lakeWaterElev = 0.0;
  if (nation === 'forest' && forestFactor > 0.55) {
    for (let i = 0; i < INLAND_LAKE_BASINS.length; i++) {
      const lk = INLAND_LAKE_BASINS[i];
      const d = _vCap.dot(lk.dir);
      if (d > 0.992) {
        const ang = Math.acos(THREE.MathUtils.clamp(d, -1, 1));
        if (ang < lk.angRad) {
          const lt = 1.0 - ang / lk.angRad;
          lakeBlend = Math.max(lakeBlend, lt * lt * (3.0 - 2.0 * lt));
          lakeWaterElev = lk.waterElev;
        }
      }
    }
  }

  let elev = 0.0;
  let biome = 'ocean';

  if (cont <= 0.0) {
    // Lecho marino profundo hasta -PANDORA_UNDERWATER_DEPTH (-21 u) con bancos de arena turquesa en arrecifes
    const deepT = THREE.MathUtils.smoothstep(cont, -0.34, -0.02);
    const lagoonUndulation = vnoise(sx * 19.0, sy * 19.0, sz * 19.0) * 0.008;
    const minDepth = -PANDORA_UNDERWATER_DEPTH * (0.45 + 0.55 * Math.max(0.45, reefFactor));
    elev = THREE.MathUtils.lerp(minDepth, -0.0012, deepT) + lagoonUndulation * (1.0 - deepT * 0.5);
    if (reefFactor > 0.25 && cont > -0.16) {
      elev = THREE.MathUtils.lerp(elev, -0.022 - (1.0 - deepT) * 0.085, 0.65);
    }
    biome = cont > -0.16 || reefFactor > 0.25 ? 'reef' : 'ocean';
  } else {
    // Relieve escarpado multi-octava (Ridged Multifractal): valles, acantilados karst, cordillera basáltica e islas coralinas
    const warpX = vnoise(sx * 9.0 + 1.2, sy * 9.0, sz * 9.0) * 0.12;
    const warpZ = vnoise(sx * 9.0, sy * 9.0 + 2.4, sz * 9.0) * 0.12;
    const hills = fbm((sx + warpX) * 14.0 + 3.1, sy * 14.0 - 1.4, (sz + warpZ) * 14.0 + 2.7, 4);
    const ridgedCrag = ridgedMultifractal((sx + warpX) * 18.0 + 4.3, sy * 18.0 - 2.1, (sz + warpZ) * 18.0 + 1.9, 4, 2.18, 0.52);
    const canyonCarve = ridgedMultifractal(sx * 24.0 - 1.7, sy * 24.0 + 3.2, sz * 24.0, 3, 2.05, 0.50);
    const detailRock = (Math.abs(vnoise(sx * 36.0, sy * 36.0, sz * 36.0)) * 0.0022 + canyonCarve * 0.0024) * 1.0;
    const shelf = THREE.MathUtils.smoothstep(cont, 0.0, 0.14);

    // Acantilados karst escalonados y gran cordillera basáltica entre Bosque y Ceniza
    const cliffStep = THREE.MathUtils.smoothstep(highlandRidge, 0.020, 0.24) * (0.014 + 0.0075 * ridgedCrag);
    const karstSpire = Math.pow(Math.max(0.0, ridgedCrag - 0.36), 1.55) * 0.009 * shelf * (nation === 'water' ? 0.25 : 1.0);
    const divideCrest = borderMountain * (0.014 + Math.max(0.0, ridge) * 0.013);
    const ashCrag = ashFactor * (0.0065 + Math.pow(Math.max(0.0, ridge), 1.75) * 0.0135 + Math.max(0.0, ridgedCrag - 0.4) * 0.005);

    elev = Math.min(
      0.068,
      (shelf * 0.0018 +
        Math.max(0.0, hills * 0.52 + 0.34) * 0.0072 * shelf +
        detailRock * shelf +
        cliffStep +
        karstSpire +
        divideCrest +
        ashCrag -
        craterDepression) * 1.45
    );

    // Tallar depresiones de lagos interiores bajo waterElev
    if (lakeBlend > 0.01) {
      elev = THREE.MathUtils.lerp(elev, lakeWaterElev - 0.0038, lakeBlend);
    }
    elev = Math.max(0.0004, elev);

    if (nation === 'ash') {
      biome = 'ash';
    } else if (nation === 'water') {
      biome = 'atoll_island';
    } else if (lakeBlend > 0.45) {
      biome = 'lake';
    } else if (highlandRidge > 0.036 || borderMountain > 0.45) {
      biome = 'canyon';
    } else {
      biome = 'forest';
    }
  }

  return {
    cont,
    ridge,
    highlandRidge,
    forestFactor,
    waterFactor,
    ashFactor,
    reefFactor,
    borderMountain,
    forestClump,
    lakeBlend,
    lakeWaterElev,
    elev,
    biome,
    nation,
    sx,
    sy,
    sz,
  };
}

/**
 * Altura del terreno compatible para manadas, flora y ríos.
 */
export function samplePandoraTerrainOffset(nx, ny, nz, _theta = 0, ctx = null) {
  const q = ctx?.qCap || DEFAULT_CAP_QUAT;
  const lms = ctx?.sphereLandmarks || DEFAULT_SPHERE_LANDMARKS;
  return samplePandoraGlobalPoint(nx, ny, nz, q, lms, 3).elev;
}

function buildLocalFrame(centerDir) {
  const upDir = centerDir.clone().normalize();
  const ref = Math.abs(upDir.x) < 0.85 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 0, 1);
  const e1 = new THREE.Vector3().crossVectors(upDir, ref).normalize();
  const e2 = new THREE.Vector3().crossVectors(upDir, e1).normalize();
  return { upDir, e1, e2 };
}

function framePointOnSphere(R, frame, tangentX, tangentZ, heightOffset, qCap, sphereLandmarks) {
  const n = frame.upDir
    .clone()
    .addScaledVector(frame.e1, tangentX)
    .addScaledVector(frame.e2, tangentZ)
    .normalize();
  const elev = samplePandoraGlobalPoint(n.x, n.y, n.z, qCap, sphereLandmarks, 3).elev;
  return {
    pos: n.clone().multiplyScalar(R + elev + heightOffset),
    normal: n,
    elev,
  };
}

/**
 * Traza 7 ríos caudalosos exclusivamente dentro de los valles de la Nación del Bosque de Pandora.
 */
export function buildPandoraRiverPaths(R, ctx = null) {
  const qCap = ctx?.qCap || DEFAULT_CAP_QUAT;
  const sphereLandmarks = ctx?.sphereLandmarks || DEFAULT_SPHERE_LANDMARKS;
  const riverDefs = [
    { anchor: new THREE.Vector3(0.0, 1.0, 0.0), span: 0.24, angle: 0.55, amp: 0.045, steps: 42 },
    { anchor: new THREE.Vector3(0.14, 0.985, 0.09).normalize(), span: 0.20, angle: -1.1, amp: 0.038, steps: 32 },
    { anchor: PANDORA_LANDMARKS[2].capDir.clone(), span: 0.24, angle: 0.8, amp: 0.038, steps: 36 },
    { anchor: PANDORA_LANDMARKS[3].capDir.clone(), span: 0.24, angle: 2.1, amp: 0.04, steps: 36 },
    { anchor: PANDORA_LANDMARKS[4].capDir.clone(), span: 0.20, angle: -0.7, amp: 0.032, steps: 32 },
    { anchor: new THREE.Vector3(0.48, 0.58, -0.65).normalize(), span: 0.22, angle: 1.4, amp: 0.036, steps: 32 },
    { anchor: new THREE.Vector3(-0.46, 0.72, -0.52).normalize(), span: 0.22, angle: -1.6, amp: 0.036, steps: 32 },
  ];

  const rivers = [];
  for (const def of riverDefs) {
    const fr = buildLocalFrame(def.anchor);
    const cA = Math.cos(def.angle);
    const sA = Math.sin(def.angle);
    const pts = [];
    for (let i = 0; i <= def.steps; i++) {
      const t = i / def.steps;
      const along = (t - 0.5) * def.span;
      const sway = Math.sin(t * Math.PI * 2.4) * def.amp;
      const lx = along * cA - sway * sA;
      const lz = along * sA + sway * cA;
      const n = fr.upDir.clone().addScaledVector(fr.e1, lx).addScaledVector(fr.e2, lz).normalize();
      const info = samplePandoraGlobalPoint(n.x, n.y, n.z, qCap, sphereLandmarks, 3);
      if (info.nation !== 'forest' || info.cont <= 0.005) {
        if (pts.length >= 6) break;
        continue;
      }
      pts.push({
        theta: Math.acos(THREE.MathUtils.clamp(n.y, -1, 1)),
        phi: Math.atan2(n.z, n.x),
        pos: n.clone().multiplyScalar(R + info.elev + 0.00055),
        normal: n,
        elev: info.elev,
      });
    }
    if (pts.length >= 6) rivers.push(pts);
  }
  return rivers;
}

function sanitizeNormals(geo, fallbackY = 1.0) {
  const n = geo.attributes.normal;
  if (!n) return geo;
  for (let i = 0; i < n.count; i++) {
    const x = n.getX(i);
    const y = n.getY(i);
    const z = n.getZ(i);
    const len = Math.hypot(x, y, z);
    if (!Number.isFinite(len) || len < 1e-4) {
      n.setXYZ(i, 0, fallbackY, 0);
    } else if (Math.abs(len - 1.0) > 1e-3) {
      n.setXYZ(i, x / len, y / len, z / len);
    }
  }
  n.needsUpdate = true;
  return geo;
}

/**
 * Añade atributo `color` sólido a una geometría sin índice antes de fusionar árboles bicolores.
 */
function tintGeometryVertices(geo, hexColor) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const col = new THREE.Color(hexColor);
  const cnt = g.attributes.position.count;
  const arr = new Float32Array(cnt * 3);
  for (let i = 0; i < cnt; i++) {
    arr[i * 3] = col.r;
    arr[i * 3 + 1] = col.g;
    arr[i * 3 + 2] = col.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}

/**
 * Tarjeta foliar 3D arqueada y alabeada con UVs `[0..1]` y normales suavizadas hacia fuera
 * para follaje `DoubleSide + alphaTest: 0.45` sin aspecto plano ni sombreado duro de canto.
 */
function createCurvedFoliageCard(w, h, archDroop = 0.28, lateralCup = 0.10, segsW = 2, segsH = 3, outwardBiasY = 0.45) {
  const g = new THREE.PlaneGeometry(w, h, segsW, segsH);
  g.translate(0, h * 0.5, 0);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i);
    const y = p.getY(i);
    const t = THREE.MathUtils.clamp(y / Math.max(1e-4, h), 0.0, 1.0);
    const uNorm = THREE.MathUtils.clamp(x / Math.max(1e-4, w), -0.5, 0.5) * 2.0; // -1..1
    const archZ = archDroop * Math.pow(t, 1.55) * h;
    const cupZ = -lateralCup * (uNorm * uNorm - 0.35) * (0.25 + 0.75 * t) * w;
    const liftY = Math.sin(t * Math.PI) * Math.abs(archDroop) * 0.14 * h;
    p.setXYZ(i, x, y + liftY, archZ + cupZ);
  }
  const nonIdx = g.toNonIndexed();
  nonIdx.computeVertexNormals();
  const n = nonIdx.attributes.normal;
  const pos = nonIdx.attributes.position;
  const outV = new THREE.Vector3();
  const curN = new THREE.Vector3();
  for (let i = 0; i < n.count; i++) {
    curN.fromBufferAttribute(n, i);
    outV.set(pos.getX(i), outwardBiasY * h + pos.getY(i) * 0.65, pos.getZ(i) + 0.12 * h);
    if (outV.lengthSq() > 1e-6) {
      outV.normalize();
      curN.lerp(outV, 0.42).normalize();
      n.setXYZ(i, curN.x, curN.y, curN.z);
    }
  }
  return sanitizeNormals(nonIdx, 1.0);
}

/**
 * Silueta 2 de árbol (Tronco + ramas estructurales PBR): Secuoya alienígena gigante.
 */
function createAlienRedwoodGeometry() {
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.030, 0.14, 1.0, 6, 1);
  trunk.translate(0, 0.5, 0);
  parts.push(trunk.toNonIndexed());

  const tiers = [
    { y: 0.42, rad: 0.24 },
    { y: 0.60, rad: 0.20 },
    { y: 0.77, rad: 0.16 },
    { y: 0.91, rad: 0.11 },
  ];
  for (let ti = 0; ti < tiers.length; ti++) {
    const t = tiers[ti];
    for (let b = 0; b < 3; b++) {
      const ang = (b / 3) * Math.PI * 2 + ti * 0.72;
      const limb = new THREE.CylinderGeometry(0.008, 0.022, t.rad, 4, 1);
      limb.translate(0, t.rad * 0.5, 0);
      limb.rotateZ(-1.35);
      limb.rotateY(ang);
      limb.translate(0, t.y, 0);
      parts.push(limb.toNonIndexed());
    }
  }
  const merged = mergeGeometries(parts, false);
  merged.computeVertexNormals();
  return sanitizeNormals(merged, 1.0);
}

/**
 * Copa foliar de Secuoya alienígena en rosetas 3D arqueadas (`alphaTest: 0.45`).
 */
function createAlienRedwoodCanopyGeometry() {
  const parts = [];
  const tiers = [
    { y: 0.42, w: 0.40, h: 0.50, n: 4, tilt: 1.24, twist: 0.0 },
    { y: 0.60, w: 0.35, h: 0.44, n: 4, tilt: 1.18, twist: 0.45 },
    { y: 0.77, w: 0.29, h: 0.36, n: 3, tilt: 1.08, twist: 0.25 },
    { y: 0.91, w: 0.24, h: 0.28, n: 3, tilt: 0.88, twist: 0.65 },
  ];
  for (const tier of tiers) {
    for (let i = 0; i < tier.n; i++) {
      const ang = (i / tier.n) * Math.PI * 2 + tier.twist;
      const card = createCurvedFoliageCard(tier.w, tier.h, 0.26, 0.09, 1, 2, 0.35);
      card.rotateX(tier.tilt);
      card.rotateZ(((i % 2) * 2 - 1) * 0.14);
      card.rotateY(ang);
      card.translate(Math.sin(ang) * 0.03, tier.y, Math.cos(ang) * 0.03);
      parts.push(card);
    }
  }
  const cap = createCurvedFoliageCard(0.24, 0.28, 0.18, 0.08, 1, 2, 0.5);
  cap.rotateX(0.32);
  cap.rotateY(0.3);
  cap.translate(0, 0.96, 0);
  parts.push(cap);
  const merged = mergeGeometries(parts, false);
  merged.computeVertexNormals();
  return sanitizeNormals(merged, 1.0);
}

/**
 * Silueta 3 de árbol (Tronco retorcido + 4 raíces aéreas + ramas maestras PBR).
 */
function createGnarledRootTreeGeometry() {
  const parts = [];
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.08, 0.32, 0.04),
    new THREE.Vector3(-0.05, 0.68, -0.05),
    new THREE.Vector3(0.03, 0.94, 0.02),
  ]);
  parts.push(new THREE.TubeGeometry(curve, 6, 0.068, 5, false).toNonIndexed());

  // 4 raíces aéreas arqueadas hacia el suelo
  for (let r = 0; r < 4; r++) {
    const a = (r / 4) * Math.PI * 2 + 0.4;
    const rc = new THREE.CatmullRomCurve3([
      new THREE.Vector3(Math.cos(a) * 0.04, 0.34, Math.sin(a) * 0.04),
      new THREE.Vector3(Math.cos(a) * 0.18, 0.22, Math.sin(a) * 0.18),
      new THREE.Vector3(Math.cos(a) * 0.26, -0.02, Math.sin(a) * 0.26),
    ]);
    parts.push(new THREE.TubeGeometry(rc, 4, 0.028, 4, false).toNonIndexed());
  }

  // 3 ramas principales bifurcadas desde lo alto del tronco
  for (let b = 0; b < 3; b++) {
    const a = (b / 3) * Math.PI * 2 + 0.55;
    const bc = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.01, 0.78, 0.0),
      new THREE.Vector3(Math.cos(a) * 0.16, 0.90, Math.sin(a) * 0.16),
      new THREE.Vector3(Math.cos(a) * 0.32, 0.96, Math.sin(a) * 0.32),
    ]);
    parts.push(new THREE.TubeGeometry(bc, 4, 0.024, 4, false).toNonIndexed());
  }

  const merged = mergeGeometries(parts, false);
  merged.computeVertexNormals();
  return sanitizeNormals(merged, 1.0);
}

/**
 * Copa irregular en roseta 3D arqueada para el árbol de raíces aéreas (`alphaTest: 0.45`).
 */
function createGnarledRootCanopyGeometry() {
  const parts = [];
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + 0.22;
    const card = createCurvedFoliageCard(0.56, 0.64, 0.32, 0.12, 1, 2, 0.38);
    card.rotateX(1.12 + (i % 2) * 0.14);
    card.rotateZ(((i % 3) - 1) * 0.12);
    card.rotateY(a);
    card.translate(0.03 + Math.sin(a) * 0.08, 0.92 + (i % 2) * 0.04, 0.02 + Math.cos(a) * 0.08);
    parts.push(card);
  }
  for (let t = 0; t < 2; t++) {
    const topCard = createCurvedFoliageCard(0.60, 0.62, 0.24, 0.14, 1, 2, 0.5);
    topCard.rotateX(0.68);
    topCard.rotateY(t * Math.PI * 0.65 + 0.4);
    topCard.translate(0.03, 0.96, 0.02);
    parts.push(topCard);
  }
  const merged = mergeGeometries(parts, false);
  merged.computeVertexNormals();
  return sanitizeNormals(merged, 1.0);
}

/**
 * Silueta 4 de árbol (Tronco arqueado PBR): Palmera alienígena costera.
 */
function createAlienPalmGeometry() {
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.06, 0.38, 0.03),
    new THREE.Vector3(0.14, 0.78, -0.02),
    new THREE.Vector3(0.18, 1.0, 0.0),
  ]);
  const trunk = new THREE.TubeGeometry(curve, 6, 0.052, 5, false).toNonIndexed();
  trunk.computeVertexNormals();
  return sanitizeNormals(trunk, 1.0);
}

/**
 * Corona de 8 frondas arqueadas sub-segmentadas (`texPalmFrondAlpha`, `alphaTest: 0.45`) para palmeras.
 */
function createAlienPalmFrondsGeometry() {
  const parts = [];
  for (let i = 0; i < 5; i++) {
    const ang = (i / 5) * Math.PI * 2;
    const frond = createCurvedFoliageCard(0.44, 0.92, 0.42, 0.14, 1, 3, 0.28);
    frond.rotateX(1.06 + (i % 2) * 0.16);
    frond.rotateZ(((i % 2) * 2 - 1) * 0.10);
    frond.rotateY(ang);
    frond.translate(0.18, 0.98, 0.0);
    parts.push(frond);
  }
  for (let j = 0; j < 3; j++) {
    const ang = (j / 3) * Math.PI * 2 + 0.42;
    const frond = createCurvedFoliageCard(0.36, 0.74, 0.30, 0.12, 1, 3, 0.45);
    frond.rotateX(0.62 + (j % 2) * 0.12);
    frond.rotateY(ang);
    frond.translate(0.18, 1.0, 0.0);
    parts.push(frond);
  }
  const merged = mergeGeometries(parts, false);
  merged.computeVertexNormals();
  return sanitizeNormals(merged, 1.0);
}

/**
 * Arbusto denso de sotobosque con 5 tarjetas foliares arqueadas (`alphaTest: 0.45`).
 */
function createBroadleafShrubGeometry() {
  const parts = [];
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    const card = createCurvedFoliageCard(0.60, 0.72, 0.34, 0.12, 1, 2, 0.38);
    card.rotateX(0.95 + (i % 2) * 0.18);
    card.rotateY(a);
    parts.push(card);
  }
  for (let j = 0; j < 2; j++) {
    const a = j * Math.PI + 0.52;
    const card = createCurvedFoliageCard(0.48, 0.68, 0.22, 0.10, 1, 2, 0.52);
    card.rotateX(0.52);
    card.rotateY(a);
    parts.push(card);
  }
  const merged = mergeGeometries(parts, false);
  merged.computeVertexNormals();
  return sanitizeNormals(merged, 1.0);
}

/**
 * Grupo de rocas cubiertas de musgo para el sotobosque y riberas.
 */
function createMossyRockClusterGeometry() {
  const parts = [];
  const r1 = new THREE.DodecahedronGeometry(0.48, 0);
  r1.scale(1.2, 0.65, 1.0);
  r1.translate(0, 0.22, 0);
  parts.push(tintGeometryVertices(r1, 0x3b4836));

  const r2 = new THREE.DodecahedronGeometry(0.32, 0);
  r2.scale(1.0, 0.72, 1.1);
  r2.translate(0.38, 0.14, 0.24);
  parts.push(tintGeometryVertices(r2, 0x2a542e));

  const merged = mergeGeometries(parts, false);
  merged.computeVertexNormals();
  return merged;
}

/**
 * Helecho gigante de 5 frondas pinadas arqueadas (`texFernClusterAlpha`, `alphaTest: 0.45`).
 */
function createGiantFernGeometry() {
  const parts = [];
  for (let i = 0; i < 4; i++) {
    const ang = (i / 4) * Math.PI * 2;
    const frond = createCurvedFoliageCard(0.48, 1.0, 0.44, 0.15, 1, 3, 0.3);
    frond.rotateX(0.86 + (i % 2) * 0.14);
    frond.rotateY(ang);
    parts.push(frond);
  }
  const centerFrond = createCurvedFoliageCard(0.38, 0.80, 0.26, 0.12, 1, 2, 0.48);
  centerFrond.rotateX(0.44);
  centerFrond.rotateY(0.6);
  parts.push(centerFrond);
  const merged = mergeGeometries(parts, false);
  merged.computeVertexNormals();
  return sanitizeNormals(merged, 1.0);
}

/**
 * Matojo ligero de hierba/helecho bajo en estrella de 3 tarjetas curvas para micro-clutter (< 450 m).
 */
function createGroundClutterGrassGeometry() {
  const parts = [];
  for (let i = 0; i < 3; i++) {
    const ang = (i / 3) * Math.PI * 2 + 0.2;
    const blade = createCurvedFoliageCard(0.72, 0.96, 0.24, 0.10, 1, 2, 0.45);
    blade.rotateX(0.36);
    blade.rotateY(ang);
    parts.push(blade);
  }
  const merged = mergeGeometries(parts, false);
  merged.computeVertexNormals();
  return sanitizeNormals(merged, 1.0);
}

/**
 * Grupo de piedrecitas / guijarros low-poly para micro-clutter (< 450 m).
 */
function createGroundClutterPebblesGeometry() {
  const parts = [];
  const p1 = new THREE.DodecahedronGeometry(0.42, 0);
  p1.scale(1.25, 0.56, 0.95);
  p1.translate(0, 0.16, 0);
  parts.push(p1.index ? p1.toNonIndexed() : p1);

  const p2 = new THREE.DodecahedronGeometry(0.28, 0);
  p2.scale(0.9, 0.68, 1.15);
  p2.rotateY(0.85);
  p2.translate(0.38, 0.11, -0.22);
  parts.push(p2.index ? p2.toNonIndexed() : p2);

  const merged = mergeGeometries(parts, false);
  merged.computeVertexNormals();
  return sanitizeNormals(merged, 1.0);
}

function createFlowerGeometry() {
  const parts = [];
  for (let i = 0; i < 6; i++) {
    const petal = createCurvedFoliageCard(0.46, 0.72, 0.34, 0.16, 2, 3, 0.42);
    petal.rotateX(1.02 + (i % 2) * 0.14);
    petal.rotateY((i / 6) * Math.PI * 2);
    parts.push(petal);
  }
  for (let i = 0; i < 3; i++) {
    const inner = createCurvedFoliageCard(0.28, 0.56, 0.18, 0.10, 2, 2, 0.55);
    inner.rotateX(0.44);
    inner.rotateY((i / 3) * Math.PI * 2 + 0.5);
    parts.push(inner);
  }
  const merged = mergeGeometries(parts, false);
  merged.computeVertexNormals();
  return sanitizeNormals(merged, 1.0);
}

/**
 * Seta alienígena laminar 3D (`DoubleSide + alphaTest: 0.45` sobre `texMushroomCapAlpha`)
 * con pedúnculo sólido (UV fijada en el centro opaco) + doble corona abanico con branquias luminiscentes.
 */
function createCupMushroomGeometry() {
  const parts = [];
  const stemRaw = new THREE.CylinderGeometry(0.12, 0.24, 0.86, 6, 1);
  stemRaw.translate(0, 0.43, 0);
  const stem = stemRaw.toNonIndexed();
  const sUv = stem.attributes.uv;
  if (sUv) {
    for (let i = 0; i < sUv.count; i++) {
      sUv.setXY(i, 0.48 + sUv.getX(i) * 0.04, 0.26 + sUv.getY(i) * 0.24);
    }
  }
  parts.push(stem);

  // Corona principal de sombrerete laminar festoneado en 5 abanicos arqueados
  for (let i = 0; i < 5; i++) {
    const ang = (i / 5) * Math.PI * 2;
    const fan = createCurvedFoliageCard(1.18, 1.08, 0.36, 0.16, 2, 3, 0.52);
    fan.rotateX(1.16 + (i % 2) * 0.08);
    fan.rotateY(ang);
    fan.translate(0, 0.82, 0);
    parts.push(fan);
  }

  // Embudo superior luminiscente
  for (let i = 0; i < 3; i++) {
    const ang = (i / 3) * Math.PI * 2 + 0.45;
    const cup = createCurvedFoliageCard(0.72, 0.78, -0.22, 0.12, 2, 2, 0.65);
    cup.rotateX(0.54);
    cup.rotateY(ang);
    cup.translate(0, 0.86, 0);
    parts.push(cup);
  }

  const merged = mergeGeometries(parts, false);
  merged.computeVertexNormals();
  return sanitizeNormals(merged, 1.0);
}

/**
 * Paraguas foliar optimizado en rosetas 3D de tarjetas arqueadas (`DoubleSide + alphaTest: 0.45`):
 * - `outer`: 8 ramas frondosas amplias en doble corona radial + remate central abovedado
 * - `under`: 5 ramas colgantes del envés con nervaduras bioluminiscentes
 */
function createUmbrellaCanopyPair() {
  const outerParts = [];
  for (let i = 0; i < 5; i++) {
    const ang = (i / 5) * Math.PI * 2;
    const bough = createCurvedFoliageCard(0.96, 1.12, 0.34, 0.14, 1, 2, 0.45);
    bough.rotateX(1.36 + (i % 2) * 0.08);
    bough.rotateZ(((i % 2) * 2 - 1) * 0.10);
    bough.rotateY(ang);
    bough.translate(0, 0.02, 0);
    outerParts.push(bough);
  }
  for (let u = 0; u < 3; u++) {
    const ang = (u / 3) * Math.PI * 2 + 0.42;
    const upper = createCurvedFoliageCard(0.88, 0.92, 0.24, 0.12, 1, 2, 0.58);
    upper.rotateX(0.86);
    upper.rotateY(ang);
    upper.translate(0, 0.11, 0);
    outerParts.push(upper);
  }
  const outer = mergeGeometries(outerParts, false);
  outer.computeVertexNormals();
  sanitizeNormals(outer, 1.0);

  const underParts = [];
  for (let i = 0; i < 5; i++) {
    const ang = (i / 5) * Math.PI * 2 + 0.26;
    const card = createCurvedFoliageCard(0.88, 0.98, 0.38, 0.12, 1, 2, -0.35);
    card.rotateX(1.62 + (i % 2) * 0.08);
    card.rotateY(ang);
    card.translate(0, -0.02, 0);
    underParts.push(card);
  }
  const under = mergeGeometries(underParts, false);
  under.computeVertexNormals();
  sanitizeNormals(under, -1.0);

  return { outer, under };
}

function createHallelujahIslandGeometry(seed, radiusX, radiusZ, height) {
  const geo = new THREE.IcosahedronGeometry(1.0, 2);
  const pos = geo.attributes.position;
  const count = pos.count;
  const colors = new Float32Array(count * 3);

  const cTopMoss = new THREE.Color(0x1f5c2d);
  const cRimMoss = new THREE.Color(0x2a7a3e);
  const cRock = new THREE.Color(0x3a3f46);
  const cDarkRock = new THREE.Color(0x1e2228);
  const col = new THREE.Color();

  for (let i = 0; i < count; i++) {
    let x = pos.getX(i);
    let y = pos.getY(i);
    let z = pos.getZ(i);

    const n = ridgedMultifractal(x * 2.4 + seed * 3.1, y * 2.2 - seed, z * 2.4 + seed * 1.9, 4, 2.15, 0.52) * 2.0 - 0.85;
    const n2 = vnoise(x * 5.8 + seed * 7.3, y * 4.8, z * 5.8);

    if (y > 0.15) {
      const plateau = 0.24 + (y - 0.15) * 0.22 + 0.08 * n;
      const radialScale = 1.0 + 0.19 * n;
      x *= radiusX * radialScale;
      z *= radiusZ * radialScale;
      y = height * plateau;
      col.copy(cTopMoss).lerp(cRimMoss, Math.max(0, n2) * 0.68);
    } else {
      const downT = Math.min(1.0, (0.15 - y) / 1.15);
      const taper = Math.pow(1.0 - downT * 0.86, 1.25);
      const strataLedge = Math.sin(downT * Math.PI * 5.0 + n2 * 1.6) * 0.09;
      const jag = 1.0 + 0.34 * n + 0.16 * n2 + strataLedge;
      x *= radiusX * taper * jag;
      z *= radiusZ * taper * jag;
      y = -height * downT * (0.85 + 0.25 * Math.abs(n));
      col.copy(cRock).lerp(cDarkRock, downT * 0.72 + Math.max(0, -n) * 0.28);
    }

    pos.setXYZ(i, x, y, z);
    colors[i * 3] = col.r;
    colors[i * 3 + 1] = col.g;
    colors[i * 3 + 2] = col.b;
  }

  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  return geo;
}

function createGlobalStoneArchGeometry(R, frame, x1, z1, x2, z2, peakAlt, tubeRadius, seed, qCap, sphereLandmarks) {
  const start = framePointOnSphere(R, frame, x1, z1, -0.0025 * S, qCap, sphereLandmarks).pos;
  const end = framePointOnSphere(R, frame, x2, z2, -0.0025 * S, qCap, sphereLandmarks).pos;

  const midDir = start.clone().add(end).multiplyScalar(0.5).normalize();
  const q1 = start.clone().lerp(end, 0.26).normalize().multiplyScalar(R + peakAlt * 0.74);
  const apex = midDir.clone().multiplyScalar(R + peakAlt);
  const q2 = start.clone().lerp(end, 0.74).normalize().multiplyScalar(R + peakAlt * 0.76);

  const curve = new THREE.CatmullRomCurve3([start, q1, apex, q2, end]);
  const geo = new THREE.TubeGeometry(curve, 24, tubeRadius, 8, false);
  const pos = geo.attributes.position;
  const norm = geo.attributes.normal;
  const colors = new Float32Array(pos.count * 3);

  const cSlate = new THREE.Color(0x32373e);
  const cMoss = new THREE.Color(0x23582c);
  const cLightMoss = new THREE.Color(0x38783c);
  const v = new THREE.Vector3();
  const n = new THREE.Vector3();
  const c = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    n.fromBufferAttribute(norm, i);
    const rough = vnoise(v.x * 220 + seed * 3.7, v.y * 220, v.z * 220 - seed);
    const fine = vnoise(v.x * 520, v.y * 520, v.z * 520);
    const radialOut = v.clone().normalize();
    const upness = Math.max(0, n.dot(radialOut));

    v.addScaledVector(n, tubeRadius * (0.36 * rough + 0.16 * fine));
    pos.setXYZ(i, v.x, v.y, v.z);

    c.copy(cSlate).lerp(cMoss, Math.pow(upness, 1.25));
    if (upness > 0.45 && fine > 0.2) {
      c.lerp(cLightMoss, 0.48);
    }
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  return { geo, curve, apex };
}

function createRockSpireGeometry(seed) {
  const geo = new THREE.CylinderGeometry(0.12, 1.0, 1.0, 8, 6);
  geo.translate(0, 0.5, 0);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);

  const cBase = new THREE.Color(0x2a2f38);
  const cMoss = new THREE.Color(0x24562c);
  const cTip = new THREE.Color(0x36723e);
  const col = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i);
    const y = pos.getY(i);
    let z = pos.getZ(i);

    const n = vnoise(x * 3.8 + seed * 2.1, y * 4.5, z * 3.8 - seed);
    const ridge = 1.0 + 0.35 * n;
    x *= ridge;
    z *= ridge;
    pos.setXYZ(i, x, y, z);

    col.copy(cBase).lerp(cMoss, THREE.MathUtils.smoothstep(y, 0.22, 0.72));
    if (y > 0.72 && n > 0.1) col.lerp(cTip, 0.45);

    colors[i * 3] = col.r;
    colors[i * 3 + 1] = col.g;
    colors[i * 3 + 2] = col.b;
  }

  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  return geo;
}

/**
 * Suaviza radialmente el borde alfa de superficies `THREE.Water` circulares (`alpha * (1 - smoothstep(fadeStart, 1.0, r))`)
 * para eliminar cualquier costura circular brusca sobre el océano o los lagos.
 */
function featherWaterCircleShader(waterObj, fadeStart = 0.66) {
  const mat = waterObj?.material;
  if (!mat || !mat.vertexShader || !mat.fragmentShader) return waterObj;
  if (!mat.fragmentShader.includes('_waterEdgeFeather')) {
    mat.vertexShader =
      `varying vec2 vWaterDiscUv;\n` +
      mat.vertexShader.replace('void main() {', 'void main() {\n\t\t\t\tvWaterDiscUv = uv;');
    mat.fragmentShader =
      `varying vec2 vWaterDiscUv;\n` +
      mat.fragmentShader.replace(
        'gl_FragColor = vec4( outgoingLight, alpha );',
        `float _waterEdgeDist = length(vWaterDiscUv - vec2(0.5)) * 2.0;\n\t\t\t\tfloat _waterEdgeFeather = 1.0 - smoothstep(${fadeStart.toFixed(2)}, 1.0, _waterEdgeDist);\n\t\t\t\tgl_FragColor = vec4( outgoingLight, alpha * _waterEdgeFeather );`
      );
    mat.transparent = true;
    mat.depthWrite = false;
    mat.needsUpdate = true;
  }
  return waterObj;
}

function createMergedRiversMeshes(riverPaths, halfWidths) {
  const waterGeos = [];
  const bankGeos = [];
  const tangent = new THREE.Vector3();
  const side = new THREE.Vector3();
  const up = new THREE.Vector3();
  const cShallowRim = new THREE.Color(0x4be6ea);
  const cDeepCenter = new THREE.Color(0x065c78);
  const cBankWet = new THREE.Color(0x164438);
  const cBankMoss = new THREE.Color(0x306a40);

  riverPaths.forEach((pathPts, rIdx) => {
    const segs = pathPts.length;
    const hwBase = halfWidths[rIdx] || 0.008 * S;
    const waterVerts = [];
    const waterUvs = [];
    const waterCols = [];
    const edgePositionsL = [];
    const edgeUvsL = [];
    const edgeColsL = [];
    const edgePositionsR = [];
    const edgeUvsR = [];
    const edgeColsR = [];
    let arcLen = 0.0;

    for (let i = 0; i < segs; i++) {
      const pCurr = pathPts[i];
      const pPrev = pathPts[Math.max(0, i - 1)];
      const pNext = pathPts[Math.min(segs - 1, i + 1)];
      if (i > 0) arcLen += pCurr.pos.distanceTo(pPrev.pos);

      tangent.copy(pNext.pos).sub(pPrev.pos).normalize();
      up.copy(pCurr.normal);
      side.crossVectors(tangent, up).normalize();

      const wobble = 1.0 + 0.22 * Math.sin(i * 0.45 + rIdx);
      const hw = hwBase * wobble;
      const edgeW = hw * 0.28;
      const vCoord = arcLen * 28.0;

      const L = pCurr.pos.clone().addScaledVector(side, -hw);
      const C = pCurr.pos.clone().addScaledVector(up, 0.00012);
      const Rgt = pCurr.pos.clone().addScaledVector(side, hw);
      const Lo = pCurr.pos.clone().addScaledVector(side, -(hw + edgeW)).addScaledVector(up, 0.00014);
      const Ro = pCurr.pos.clone().addScaledVector(side, hw + edgeW).addScaledVector(up, 0.00014);

      waterVerts.push(L.x, L.y, L.z, C.x, C.y, C.z, Rgt.x, Rgt.y, Rgt.z);
      waterUvs.push(0.0, vCoord, 0.5, vCoord, 1.0, vCoord);
      waterCols.push(
        cShallowRim.r, cShallowRim.g, cShallowRim.b,
        cDeepCenter.r, cDeepCenter.g, cDeepCenter.b,
        cShallowRim.r, cShallowRim.g, cShallowRim.b
      );

      edgePositionsL.push(Lo.x, Lo.y, Lo.z, L.x, L.y, L.z);
      edgeUvsL.push(0.0, vCoord, 1.0, vCoord);
      edgeColsL.push(cBankMoss.r, cBankMoss.g, cBankMoss.b, cBankWet.r, cBankWet.g, cBankWet.b);

      edgePositionsR.push(Rgt.x, Rgt.y, Rgt.z, Ro.x, Ro.y, Ro.z);
      edgeUvsR.push(0.0, vCoord, 1.0, vCoord);
      edgeColsR.push(cBankWet.r, cBankWet.g, cBankWet.b, cBankMoss.r, cBankMoss.g, cBankMoss.b);
    }

    const buildChannel = () => {
      const indices = [];
      for (let i = 0; i < segs - 1; i++) {
        const b = i * 3;
        const n = (i + 1) * 3;
        indices.push(b, b + 1, n, b + 1, n + 1, n);
        indices.push(b + 1, b + 2, n + 1, b + 2, n + 2, n + 1);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(waterVerts, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(waterUvs, 2));
      g.setAttribute('color', new THREE.Float32BufferAttribute(waterCols, 3));
      g.setIndex(indices);
      g.computeVertexNormals();
      return g.toNonIndexed();
    };

    const buildStrip = (verts, uvs, cols) => {
      const indices = [];
      for (let i = 0; i < segs - 1; i++) {
        const a = i * 2;
        const b = a + 1;
        const c = a + 2;
        const d = a + 3;
        indices.push(a, b, c, b, d, c);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
      g.setIndex(indices);
      g.computeVertexNormals();
      return g.toNonIndexed();
    };

    waterGeos.push(buildChannel());
    bankGeos.push(
      buildStrip(edgePositionsL, edgeUvsL, edgeColsL),
      buildStrip(edgePositionsR, edgeUvsR, edgeColsR)
    );
  });

  const waterGeo = mergeGeometries(waterGeos, false);
  const bankGeo = mergeGeometries(bankGeos, false);

  const waterNormalsBase = getWaterNormalTexture();
  const riverNormalMap = waterNormalsBase ? waterNormalsBase.clone() : null;
  if (riverNormalMap) {
    riverNormalMap.wrapS = THREE.RepeatWrapping;
    riverNormalMap.wrapT = THREE.RepeatWrapping;
    riverNormalMap.repeat.set(2, 6);
    riverNormalMap.needsUpdate = true;
  }

  const waterMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    vertexColors: true,
    normalMap: riverNormalMap,
    normalScale: new THREE.Vector2(0.42, 0.42),
    emissive: 0x0088b8,
    emissiveIntensity: 0.0,
    roughness: 0.09,
    metalness: 0.62,
    transparent: true,
    opacity: 0.90,
    depthWrite: false,
  });

  const bankMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    vertexColors: true,
    emissive: 0x00f5ff,
    emissiveIntensity: 0.0,
    roughness: 0.42,
    transparent: true,
    opacity: 0.88,
    depthWrite: false,
  });

  const waterMesh = new THREE.Mesh(waterGeo, waterMat);
  waterMesh.name = 'Pandora_Global_Rivers_Water';
  waterMesh.receiveShadow = true;
  const bankMesh = new THREE.Mesh(bankGeo, bankMat);
  bankMesh.name = 'Pandora_Global_Rivers_Banks';
  bankMesh.receiveShadow = true;

  return { waterMesh, bankMesh, waterMat, bankMat, riverNormalMap };
}

/**
 * Textura de detalle de alta frecuencia (musgo, barro húmedo, basalto, arena coralina) para el terreno.
 */
function createHighFreqDetailMap() {
  const SIZ = 512;
  const c = document.createElement('canvas');
  c.width = SIZ;
  c.height = SIZ;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(SIZ, SIZ);
  const D = img.data;
  for (let y = 0; y < SIZ; y++) {
    for (let x = 0; x < SIZ; x++) {
      const grain = vnoise(x * 0.18, y * 0.18, 2.3) * 0.5 + 0.5;
      const micro = hashI(x, y, 37);
      const val = Math.floor(THREE.MathUtils.clamp((0.76 + 0.24 * grain + 0.16 * (micro - 0.5)) * 255, 130, 255));
      const idx = (y * SIZ + x) * 4;
      D[idx] = val;
      D[idx + 1] = val;
      D[idx + 2] = val;
      D[idx + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(96, 48);
  tex.anisotropy = 8;
  return tex;
}

/**
 * Mapa emisivo nocturno 360°: micelio orgánico sutil en bosques, arrecifes coralinos y vetas de lava en Ceniza.
 */
function createPandoraTerrainGlowTexture(qCap, sphereLandmarks) {
  const W = 1024;
  const H = 512;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(W, H);
  const P = img.data;

  const soulsDir = PANDORA_LANDMARKS[3].capDir;
  const mushDir = PANDORA_LANDMARKS[4].capDir;
  const vSph = new THREE.Vector3();

  for (let py = 0; py < H; py++) {
    const theta = ((py + 0.5) / H) * Math.PI;
    const st = Math.sin(theta);
    const ny = Math.cos(theta);
    for (let px = 0; px < W; px++) {
      const phi = ((px + 0.5) / W) * Math.PI * 2;
      const nx = -Math.cos(phi) * st;
      const nz = Math.sin(phi) * st;
      vSph.set(nx, ny, nz).applyQuaternion(qCap);

      const { cont, ashFactor, reefFactor, nation, borderMountain } = samplePandoraBiomeField(
        vSph.x,
        vSph.y,
        vSph.z,
        sphereLandmarks,
        4
      );
      let er = 0;
      let eg = 0;
      let eb = 0;

      if (nation === 'ash' && cont > 0.0) {
        // Las grietas incandescentes en Ceniza se renderizan en tiempo real con Voronoi 3D en shader
        er = 0;
        eg = 0;
        eb = 0;
      } else if (nation === 'forest' && cont > 0.0) {
        let microRoot = 1.0 - Math.abs(vnoise(nx * 24.0 + 1.0, ny * 24.0, nz * 24.0));
        microRoot = Math.pow(Math.max(0.0, microRoot), 18.0);
        const footsteps =
          hashI(Math.floor(nx * 360), Math.floor(ny * 360), Math.floor(nz * 360)) > 0.986 ? 0.55 : 0.0;
        const vein = Math.min(0.68, microRoot * 0.58 + footsteps) * (1.0 - Math.min(0.9, borderMountain));
        const hue = vnoise(nx * 5.0 + 9.0, ny * 5.0, nz * 5.0);

        if (hue > 0.1) {
          er = vein * 0.06;
          eg = vein * 0.78;
          eb = vein * 0.85;
        } else {
          er = vein * 0.58;
          eg = vein * 0.18;
          eb = vein * 0.85;
        }

        const dSouls = Math.acos(THREE.MathUtils.clamp(nx * soulsDir.x + ny * soulsDir.y + nz * soulsDir.z, -1, 1));
        if (dSouls < 0.032) {
          const sg = Math.pow(1.0 - dSouls / 0.032, 1.6);
          er = Math.min(1.0, er + sg * 0.78);
          eg = Math.min(1.0, eg + sg * 0.38);
          eb = Math.min(1.0, eb + sg * 0.92);
        }
        const dMush = Math.acos(THREE.MathUtils.clamp(nx * mushDir.x + ny * mushDir.y + nz * mushDir.z, -1, 1));
        if (dMush < 0.032) {
          const mg = Math.pow(1.0 - dMush / 0.032, 1.7);
          er = Math.min(1.0, er + mg * 0.85);
          eg = Math.min(1.0, eg + mg * 0.22);
          eb = Math.min(1.0, eb + mg * 0.72);
        }
      } else if (cont <= 0.0) {
        const reef = Math.max(THREE.MathUtils.smoothstep(cont, -0.11, -0.002) * 0.55, reefFactor * 0.58) * 0.58;
        er = reef * 0.05;
        eg = reef * 0.75;
        eb = reef * 0.85;
      }

      const idx = (py * W + px) * 4;
      P[idx] = Math.min(255, er * 255);
      P[idx + 1] = Math.min(255, eg * 255);
      P[idx + 2] = Math.min(255, eb * 255);
      P[idx + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function buildHometreeLandmark(R, spec, qCap, sphereLandmarks, matTracker) {
  const fr = buildLocalFrame(spec.capDir);
  const centerPt = framePointOnSphere(R, fr, 0, 0, -0.001, qCap, sphereLandmarks);
  const lmGroup = new THREE.Group();
  lmGroup.name = 'Pandora_Landmark_Hometree';
  lmGroup.position.copy(centerPt.pos);
  lmGroup.quaternion.setFromUnitVectors(UP_Y, centerPt.normal);

  const pbrBark = getBarkPbrSet();
  const foliage = getFoliageTextureSet();
  const barkMat = new THREE.MeshStandardMaterial({
    color: 0x5c4634,
    map: pbrBark.map,
    roughnessMap: pbrBark.roughnessMap,
    bumpMap: pbrBark.bumpMap,
    bumpScale: 0.045,
    emissive: 0x052834,
    emissiveIntensity: 0.0,
    roughness: 0.9,
  });
  matTracker.push({ mat: barkMat, dayColor: 0x5c4634, nightColor: 0x222c44, dayEmissive: 0x052834, nightEmissive: 0x0c4252, dayEI: 0.0, nightEI: 0.45 });

  const height = 0.56 * S;
  const trunkGeo = new THREE.CylinderGeometry(0.065 * S, 0.14 * S, height, 14, 14, true);
  trunkGeo.translate(0, height * 0.5, 0);
  const tp = trunkGeo.attributes.position;
  for (let i = 0; i < tp.count; i++) {
    const vx = tp.getX(i);
    const vy = tp.getY(i);
    const vz = tp.getZ(i);
    const yt = vy / height;
    const twist = yt * 2.4;
    const rib = 1.0 + 0.24 * Math.sin(Math.atan2(vz, vx) * 6.0 + twist);
    const flare = yt < 0.25 ? 1.0 + Math.pow((0.25 - yt) / 0.25, 1.5) * 0.65 : 1.0;
    const rx = (vx * Math.cos(twist * 0.35) - vz * Math.sin(twist * 0.35)) * rib * flare;
    const rz = (vx * Math.sin(twist * 0.35) + vz * Math.cos(twist * 0.35)) * rib * flare;
    tp.setXYZ(i, rx, vy, rz);
  }
  trunkGeo.computeVertexNormals();
  const hTrunk = new THREE.Mesh(trunkGeo, barkMat);
  hTrunk.castShadow = true;
  hTrunk.receiveShadow = true;
  lmGroup.add(hTrunk);

  for (let i = 0; i < 14; i++) {
    const ang = (i / 14) * Math.PI * 2 + (hashI(i, 3, 7) - 0.5) * 0.15;
    const reach = (0.14 + hashI(i, 8, 2) * 0.09) * S;
    const hAttach = (0.12 + hashI(i, 5, 4) * 0.18) * S;
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(Math.cos(ang) * 0.06 * S, hAttach, Math.sin(ang) * 0.06 * S),
      new THREE.Vector3(Math.cos(ang) * reach * 0.62, hAttach * 0.62, Math.sin(ang) * reach * 0.62),
      new THREE.Vector3(Math.cos(ang) * reach, -0.015 * S, Math.sin(ang) * reach),
    ]);
    const buttress = new THREE.Mesh(new THREE.TubeGeometry(curve, 10, 0.012 * S, 6, false), barkMat);
    buttress.castShadow = true;
    buttress.receiveShadow = true;
    lmGroup.add(buttress);
  }

  const topLeafMat = new THREE.MeshStandardMaterial({
    color: 0x3b8648,
    map: foliage.canopy.map,
    roughnessMap: foliage.canopy.roughnessMap,
    emissiveMap: foliage.canopy.emissiveMap,
    emissive: 0x063842,
    emissiveIntensity: 0.0,
    roughness: 0.68,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  matTracker.push({ mat: topLeafMat, dayColor: 0x3b8648, nightColor: 0x104c56, dayEmissive: 0x063842, nightEmissive: 0x088296, dayEI: 0.0, nightEI: 0.85 });

  const underLeafMat = new THREE.MeshStandardMaterial({
    color: 0x468854,
    map: foliage.canopy.map,
    roughnessMap: foliage.canopy.roughnessMap,
    emissiveMap: foliage.canopy.emissiveMap,
    emissive: 0x00ffe8,
    emissiveIntensity: 0.0,
    roughness: 0.52,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  matTracker.push({ mat: underLeafMat, dayColor: 0x468854, nightColor: 0x14d8e8, dayEmissive: 0x1c4a26, nightEmissive: 0x00f8ff, dayEI: 0.0, nightEI: 2.25, pulsePhase: 0.6 });

  const heartMat = new THREE.MeshStandardMaterial({ color: 0x3b2a1d, emissive: 0xffaa38, emissiveIntensity: 0.0, roughness: 0.5 });
  matTracker.push({ mat: heartMat, dayColor: 0x3b2a1d, nightColor: 0xffc864, dayEmissive: 0x2a1a10, nightEmissive: 0xff9a28, dayEI: 0.0, nightEI: 2.1, pulsePhase: 1.4 });

  const tierRadii = [0.34 * S, 0.28 * S, 0.21 * S, 0.14 * S];
  const tierHeights = [0.34 * S, 0.44 * S, 0.53 * S, 0.61 * S];
  const { outer, under } = createUmbrellaCanopyPair();
  const hometreeLeafDepthMat = createFoliageDepthMaterial(foliage.canopy.map);

  for (let t = 0; t < tierRadii.length; t++) {
    const tr = tierRadii[t];
    const th = tierHeights[t];
    const topM = new THREE.Mesh(outer, topLeafMat);
    topM.position.set(0, th, 0);
    topM.scale.set(tr, tr * 0.9, tr);
    topM.castShadow = true;
    topM.receiveShadow = true;
    topM.customDepthMaterial = hometreeLeafDepthMat;
    lmGroup.add(topM);

    const underM = new THREE.Mesh(under, underLeafMat);
    underM.position.set(0, th - 0.004 * S, 0);
    underM.scale.set(tr * 0.98, tr * 0.9, tr * 0.98);
    underM.receiveShadow = true;
    lmGroup.add(underM);
  }

  const hearth = new THREE.Mesh(new THREE.SphereGeometry(0.055 * S, 12, 8), heartMat);
  hearth.position.set(0, 0.06 * S, 0);
  lmGroup.add(hearth);

  return { group: lmGroup, anchorDir: centerPt.normal, anchorPos: centerPt.pos };
}

function buildTreeOfSoulsLandmark(R, spec, qCap, sphereLandmarks, matTracker) {
  const fr = buildLocalFrame(spec.capDir);
  const centerPt = framePointOnSphere(R, fr, 0, 0, -0.0005, qCap, sphereLandmarks);
  const lmGroup = new THREE.Group();
  lmGroup.name = 'Pandora_Landmark_TreeOfSouls';

  const pbrRock = getRockBasaltPbrSet();
  const archMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughnessMap: pbrRock.roughnessMap,
    bumpMap: pbrRock.bumpMap,
    bumpScale: 0.045,
    emissive: 0x2a1448,
    emissiveIntensity: 0.0,
    roughness: 0.85,
  });
  matTracker.push({ mat: archMat, dayColor: 0xffffff, nightColor: 0x9aa4c4, dayEmissive: 0x101820, nightEmissive: 0x261a44, dayEI: 0.0, nightEI: 0.45 });

  for (let i = 0; i < 7; i++) {
    const a1 = (i / 7) * Math.PI * 2;
    const a2 = a1 + Math.PI * 0.88;
    const rad = 0.072 * PANDORA_SPREAD_TIGHT;
    const { geo } = createGlobalStoneArchGeometry(
      R, fr, Math.cos(a1) * rad, Math.sin(a1) * rad, Math.cos(a2) * rad, Math.sin(a2) * rad,
      (0.145 + (i % 3) * 0.025) * S, 0.011 * S, 50 + i, qCap, sphereLandmarks
    );
    const aM = new THREE.Mesh(geo, archMat);
    aM.castShadow = true;
    aM.receiveShadow = true;
    lmGroup.add(aM);
  }

  const mossDisc = new THREE.Group();
  mossDisc.position.copy(centerPt.pos);
  mossDisc.quaternion.setFromUnitVectors(UP_Y, centerPt.normal);
  lmGroup.add(mossDisc);

  const craterFloorMat = new THREE.MeshStandardMaterial({ color: 0x2d6836, emissive: 0x8a38ff, emissiveIntensity: 0.0, roughness: 0.72 });
  matTracker.push({ mat: craterFloorMat, dayColor: 0x2d6836, nightColor: 0x1e2858, dayEmissive: 0x123820, nightEmissive: 0x7632ff, dayEI: 0.0, nightEI: 1.45, pulsePhase: 2.1 });
  mossDisc.add(new THREE.Mesh(new THREE.CylinderGeometry(0.18 * S, 0.2 * S, 0.004 * S, 24), craterFloorMat));

  const soulTrunkMat = new THREE.MeshStandardMaterial({ color: 0x9e92a8, emissive: 0x8050d0, emissiveIntensity: 0.0, roughness: 0.7 });
  matTracker.push({ mat: soulTrunkMat, dayColor: 0x8d8290, nightColor: 0xc2b0f0, dayEmissive: 0x483c54, nightEmissive: 0x9058ff, dayEI: 0.0, nightEI: 1.1 });

  const soulH = 0.25 * S;
  const sTrunkGeo = new THREE.CylinderGeometry(0.024 * S, 0.055 * S, soulH, 10, 8);
  sTrunkGeo.translate(0, soulH * 0.5, 0);
  mossDisc.add(new THREE.Mesh(sTrunkGeo, soulTrunkMat));

  const crownGeo = new THREE.SphereGeometry(0.13 * S, 12, 8);
  crownGeo.scale(1.25, 0.35, 1.25);
  crownGeo.translate(0, soulH * 0.96, 0);
  mossDisc.add(new THREE.Mesh(crownGeo, soulTrunkMat));

  const filamentCount = 340;
  const filGeo = new THREE.CylinderGeometry(0.0014 * S, 0.0005 * S, 1.0, 4, 1);
  filGeo.translate(0, -0.5, 0);
  const filMat = new THREE.MeshStandardMaterial({ color: 0xd6c8ec, emissive: 0xe6b8ff, emissiveIntensity: 0.0, roughness: 0.28, transparent: true, opacity: 0.92 });
  matTracker.push({ mat: filMat, dayColor: 0xdfd4ea, nightColor: 0xffffff, dayEmissive: 0xbfa8dc, nightEmissive: 0xdc96ff, dayEI: 0.0, nightEI: 2.35, pulsePhase: 0.2 });

  const filInst = new THREE.InstancedMesh(filGeo, filMat, filamentCount);
  filInst.name = 'Pandora_TreeOfSouls_Filaments';
  const dummy = new THREE.Object3D();
  for (let i = 0; i < filamentCount; i++) {
    const a = hashI(i, 4, 17) * Math.PI * 2;
    const rad = (0.015 + Math.sqrt(hashI(i, 8, 11)) * 0.135) * S;
    const fLen = (0.08 + hashI(i, 3, 19) * 0.13) * S;
    dummy.position.set(Math.cos(a) * rad, soulH * 0.95, Math.sin(a) * rad);
    dummy.rotation.set((hashI(i, 1, 5) - 0.5) * 0.14, a, (hashI(i, 2, 7) - 0.5) * 0.14);
    dummy.scale.set(1.0, fLen, 1.0);
    dummy.updateMatrix();
    filInst.setMatrixAt(i, dummy.matrix);
  }
  filInst.instanceMatrix.needsUpdate = true;
  mossDisc.add(filInst);

  return { group: lmGroup, anchorDir: centerPt.normal, anchorPos: centerPt.pos };
}

function buildHallelujahArchipelago(R, spec, qCap, sphereLandmarks, matTracker, waterfalls, hangingVines) {
  const fr = buildLocalFrame(spec.capDir);
  const group = new THREE.Group();
  group.name = 'Pandora_Landmark_HallelujahMountains';

  const pbrRock = getRockBasaltPbrSet();
  const islandMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughnessMap: pbrRock.roughnessMap,
    bumpMap: pbrRock.bumpMap,
    bumpScale: 0.05,
    emissive: 0x062c30,
    emissiveIntensity: 0.0,
    roughness: 0.86,
    metalness: 0.06,
  });
  matTracker.push({ mat: islandMat, dayColor: 0xffffff, nightColor: 0x628098, dayEmissive: 0x0c2414, nightEmissive: 0x0a3846, dayEI: 0.0, nightEI: 0.52 });

  const waterfallMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.85, 0.96, 1.0), transparent: true, opacity: 0.56, side: THREE.DoubleSide, depthWrite: false });
  matTracker.push({ mat: waterfallMat, dayColorRGB: [0.82, 0.95, 1.0], nightColorRGB: [0.42, 1.75, 2.3], isWaterfall: true });

  const islandsData = [];
  const islandCount = 32;
  for (let i = 0; i < islandCount; i++) {
    const ring = i === 0 ? 0.0 : (0.03 + Math.sqrt(hashI(i, 4, 11)) * 0.14) * PANDORA_SPREAD_TIGHT;
    const phi = i * 2.39996 + hashI(i, 7, 3) * 0.45;
    const alt = (i === 0 ? 0.24 : 0.078 + hashI(i, 9, 2) * 0.21) * S;

    const pt = framePointOnSphere(R, fr, Math.cos(phi) * ring, Math.sin(phi) * ring, alt, qCap, sphereLandmarks);
    const rx = (i === 0 ? 0.095 : 0.036 + hashI(i, 2, 5) * 0.056) * S;
    const rz = rx * (0.72 + hashI(i, 5, 8) * 0.45);
    const h = (i === 0 ? 0.145 : 0.052 + hashI(i, 6, 1) * 0.082) * S;

    const rockGeo = createHallelujahIslandGeometry(i + 1, rx, rz, h);
    const rockMesh = new THREE.Mesh(rockGeo, islandMat);
    rockMesh.position.copy(pt.pos);
    rockMesh.quaternion.setFromUnitVectors(UP_Y, pt.normal);
    rockMesh.rotateY(hashI(i, 1, 8) * Math.PI * 2);
    rockMesh.castShadow = i < 16;
    rockMesh.receiveShadow = true;
    group.add(rockMesh);
    islandsData.push({ pos: pt.pos, normal: pt.normal, rx, rz, h, alt });

    for (let v = 0; v < 4; v++) {
      const a = hashI(i, v, 14) * Math.PI * 2;
      const rad = 0.25 + hashI(i, v, 2) * 0.55;
      const off = new THREE.Vector3(Math.cos(a) * rx * rad, -h * 0.34, Math.sin(a) * rz * rad).applyQuaternion(rockMesh.quaternion);
      hangingVines.push({ pos: pt.pos.clone().add(off), normal: pt.normal, length: (0.016 + hashI(i, v, 8) * 0.036) * S });
    }

    if (i < 15) {
      const dropHeight = alt + 0.015 * S;
      const wfWidth = (0.0065 + hashI(i, 12, 4) * 0.0075) * S;
      const wfGeo = new THREE.PlaneGeometry(wfWidth, dropHeight, 2, 10);
      const wPos = wfGeo.attributes.position;
      for (let v = 0; v < wPos.count; v++) {
        const u = (wPos.getY(v) + dropHeight * 0.5) / dropHeight;
        wPos.setZ(v, Math.sin((1.0 - u) * Math.PI * 0.5) * 0.014 * S);
      }
      wfGeo.computeVertexNormals();
      const edgePhi = hashI(i, 3, 6) * Math.PI * 2;
      const qAlign = new THREE.Quaternion().setFromUnitVectors(UP_Y, pt.normal);
      const sideOffset = new THREE.Vector3(Math.cos(edgePhi) * rx * 0.72, 0, Math.sin(edgePhi) * rz * 0.72).applyQuaternion(qAlign);
      const wfMesh = new THREE.Mesh(wfGeo, waterfallMat);
      wfMesh.position.copy(pt.pos).add(sideOffset).addScaledVector(pt.normal, -dropHeight * 0.5 + h * 0.16);
      wfMesh.quaternion.copy(qAlign);
      wfMesh.rotateY(edgePhi + Math.PI * 0.5);
      group.add(wfMesh);
      waterfalls.push({ mesh: wfMesh, material: waterfallMat, phase: i * 1.17 });
    }
  }

  const vineBridgeMat = new THREE.MeshStandardMaterial({ color: 0x3b582c, emissive: 0x00e8d0, emissiveIntensity: 0.0, roughness: 0.55 });
  matTracker.push({ mat: vineBridgeMat, dayColor: 0x3b582c, nightColor: 0x0e5864, dayEmissive: 0x1a3816, nightEmissive: 0x10ffd8, dayEI: 0.0, nightEI: 1.35 });

  const bridgeGeos = [];
  for (let i = 0; i < islandCount; i++) {
    const a = islandsData[i];
    let bestJ = -1;
    let bestDist = 0.25 * S;
    for (let j = i + 1; j < islandCount; j++) {
      const b = islandsData[j];
      const d = a.pos.distanceTo(b.pos);
      if (d > (a.rx + b.rx) * 0.85 && d < bestDist) {
        bestDist = d;
        bestJ = j;
      }
    }
    if (bestJ >= 0) {
      const b = islandsData[bestJ];
      const mid = a.pos.clone().add(b.pos).multiplyScalar(0.5);
      mid.add(mid.clone().normalize().multiplyScalar(-bestDist * 0.18));
      const curve = new THREE.CatmullRomCurve3([a.pos.clone(), mid, b.pos.clone()]);
      bridgeGeos.push(new THREE.TubeGeometry(curve, 10, 0.0014 * S, 5, false).toNonIndexed());
    }
  }
  if (bridgeGeos.length > 0) {
    const bridgesMesh = new THREE.Mesh(mergeGeometries(bridgeGeos, false), vineBridgeMat);
    bridgesMesh.name = 'Pandora_Hallelujah_VineBridges';
    group.add(bridgesMesh);
  }

  return { group, islandsData, anchorDir: fr.upDir, anchorPos: fr.upDir.clone().multiplyScalar(R) };
}

function buildIkranRookeryLandmark(R, spec, qCap, sphereLandmarks, matTracker, hangingVines) {
  const fr = buildLocalFrame(spec.capDir);
  const group = new THREE.Group();
  group.name = 'Pandora_Landmark_IkranRookery';

  const pbrRock = getRockBasaltPbrSet();
  const rookeryMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughnessMap: pbrRock.roughnessMap,
    bumpMap: pbrRock.bumpMap,
    bumpScale: 0.045,
    emissive: 0x063844,
    emissiveIntensity: 0.0,
    roughness: 0.88,
  });
  matTracker.push({ mat: rookeryMat, dayColor: 0xffffff, nightColor: 0x627a92, dayEmissive: 0x102818, nightEmissive: 0x0a4452, dayEI: 0.0, nightEI: 0.42 });

  const archCenters = [];
  const archSpecs = [
    [-0.08 * PANDORA_SPREAD_TIGHT, -0.05 * PANDORA_SPREAD_TIGHT, 0.08 * PANDORA_SPREAD_TIGHT, 0.05 * PANDORA_SPREAD_TIGHT, 0.21 * S, 0.015 * S],
    [-0.06 * PANDORA_SPREAD_TIGHT, 0.07 * PANDORA_SPREAD_TIGHT, 0.07 * PANDORA_SPREAD_TIGHT, -0.06 * PANDORA_SPREAD_TIGHT, 0.24 * S, 0.016 * S],
    [-0.10 * PANDORA_SPREAD_TIGHT, 0.01 * PANDORA_SPREAD_TIGHT, 0.02 * PANDORA_SPREAD_TIGHT, 0.09 * PANDORA_SPREAD_TIGHT, 0.17 * S, 0.013 * S],
    [0.01 * PANDORA_SPREAD_TIGHT, -0.09 * PANDORA_SPREAD_TIGHT, 0.09 * PANDORA_SPREAD_TIGHT, 0.02 * PANDORA_SPREAD_TIGHT, 0.18 * S, 0.013 * S],
    [-0.09 * PANDORA_SPREAD_TIGHT, -0.02 * PANDORA_SPREAD_TIGHT, 0.05 * PANDORA_SPREAD_TIGHT, 0.07 * PANDORA_SPREAD_TIGHT, 0.15 * S, 0.012 * S],
    [-0.04 * PANDORA_SPREAD_TIGHT, -0.08 * PANDORA_SPREAD_TIGHT, 0.08 * PANDORA_SPREAD_TIGHT, -0.02 * PANDORA_SPREAD_TIGHT, 0.16 * S, 0.011 * S],
    [-0.07 * PANDORA_SPREAD_TIGHT, 0.04 * PANDORA_SPREAD_TIGHT, 0.03 * PANDORA_SPREAD_TIGHT, -0.07 * PANDORA_SPREAD_TIGHT, 0.19 * S, 0.012 * S],
    [-0.03 * PANDORA_SPREAD_TIGHT, 0.08 * PANDORA_SPREAD_TIGHT, 0.09 * PANDORA_SPREAD_TIGHT, 0.06 * PANDORA_SPREAD_TIGHT, 0.14 * S, 0.011 * S],
  ];

  archSpecs.forEach(([x1, z1, x2, z2, peak, rad], idx) => {
    const { geo, curve, apex } = createGlobalStoneArchGeometry(R, fr, x1, z1, x2, z2, peak, rad, 10 + idx, qCap, sphereLandmarks);
    const m = new THREE.Mesh(geo, rookeryMat);
    m.name = `Pandora_IkranRookery_Arch_${idx + 1}`;
    group.add(m);
    archCenters.push({ apex, normal: apex.clone().normalize() });

    for (let v = 0; v < 14; v++) {
      const pt = curve.getPoint(0.2 + (v / 13) * 0.6);
      const nrm = pt.clone().normalize();
      hangingVines.push({ pos: pt.addScaledVector(nrm, -rad * 0.65), normal: nrm, length: (0.014 + hashI(v, idx, 19) * 0.026) * S });
    }
  });

  return { group, archCenters, anchorDir: fr.upDir, anchorPos: fr.upDir.clone().multiplyScalar(R) };
}

function buildMushroomGeyserBasin(R, spec, qCap, sphereLandmarks, matTracker) {
  const fr = buildLocalFrame(spec.capDir);
  const group = new THREE.Group();
  group.name = 'Pandora_Landmark_MushroomGeysers';

  const ventConeMat = new THREE.MeshStandardMaterial({ color: 0x3b3532, emissive: 0x00d8e8, emissiveIntensity: 0.0, roughness: 0.88 });
  matTracker.push({ mat: ventConeMat, dayColor: 0x3b3532, nightColor: 0x1e3848, dayEmissive: 0x0e2226, nightEmissive: 0x00e8ff, dayEI: 0.0, nightEI: 1.85 });

  const geyserCount = 14;
  const coneGeo = new THREE.CylinderGeometry(0.18, 0.95, 1.0, 9, 1);
  coneGeo.translate(0, 0.5, 0);
  const ventInst = new THREE.InstancedMesh(coneGeo, ventConeMat, geyserCount);
  ventInst.name = 'Pandora_Geyser_Vents';

  const geyserEmitters = [];
  const dummy = new THREE.Object3D();
  for (let i = 0; i < geyserCount; i++) {
    const a = (i / geyserCount) * Math.PI * 2 + hashI(i, 3, 7) * 0.4;
    const rad = (0.014 + hashI(i, 9, 2) * 0.068) * PANDORA_SPREAD_TIGHT;
    const pt = framePointOnSphere(R, fr, Math.cos(a) * rad, Math.sin(a) * rad, -0.0005, qCap, sphereLandmarks);
    const vW = (0.008 + hashI(i, 2, 11) * 0.006) * S;
    const vH = (0.014 + hashI(i, 5, 13) * 0.012) * S;
    dummy.position.copy(pt.pos);
    dummy.quaternion.setFromUnitVectors(UP_Y, pt.normal);
    dummy.scale.set(vW, vH, vW);
    dummy.updateMatrix();
    ventInst.setMatrixAt(i, dummy.matrix);

    geyserEmitters.push({
      basePos: pt.pos.clone().addScaledVector(pt.normal, vH * 0.95),
      normal: pt.normal.clone(),
      phase: hashI(i, 6, 4) * Math.PI * 2,
      maxHeight: (0.065 + hashI(i, 8, 9) * 0.055) * S,
    });
  }
  ventInst.instanceMatrix.needsUpdate = true;
  group.add(ventInst);

  const puffsPerGeyser = 22;
  const totalPuffs = geyserCount * puffsPerGeyser;
  const plumePos = new Float32Array(totalPuffs * 3);
  const plumeCol = new Float32Array(totalPuffs * 3);
  for (let i = 0; i < totalPuffs; i++) {
    plumeCol[i * 3] = 0.78;
    plumeCol[i * 3 + 1] = 0.94;
    plumeCol[i * 3 + 2] = 1.0;
  }
  const plumeGeo = new THREE.BufferGeometry();
  plumeGeo.setAttribute('position', new THREE.BufferAttribute(plumePos, 3));
  plumeGeo.setAttribute('color', new THREE.BufferAttribute(plumeCol, 3));

  const gCanvas = document.createElement('canvas');
  gCanvas.width = 64;
  gCanvas.height = 64;
  const gCtx = gCanvas.getContext('2d');
  const gGrad = gCtx.createRadialGradient(32, 32, 2, 32, 32, 32);
  gGrad.addColorStop(0.0, 'rgba(255, 255, 255, 0.85)');
  gGrad.addColorStop(0.45, 'rgba(180, 245, 255, 0.42)');
  gGrad.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
  gCtx.fillStyle = gGrad;
  gCtx.fillRect(0, 0, 64, 64);
  const gTex = new THREE.CanvasTexture(gCanvas);
  gTex.needsUpdate = true;

  const plumeMat = new THREE.PointsMaterial({
    size: 5.5,
    map: gTex,
    vertexColors: true,
    transparent: true,
    opacity: 0.48,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  const plumePoints = new THREE.Points(plumeGeo, plumeMat);
  plumePoints.name = 'Pandora_Geyser_Plumes';
  plumePoints.frustumCulled = false;
  group.add(plumePoints);

  return { group, geyserEmitters, plumeGeo, plumeMat, puffsPerGeyser, anchorDir: fr.upDir, anchorPos: fr.upDir.clone().multiplyScalar(R) };
}

/**
 * Construye los 5 lagos interiores cristalinos + ~540 Nenúfares Gigantes bioluminiscentes flotantes.
 */
function buildInlandLakesAndWaterLilies(R, qCap, sphereLandmarks, matTracker) {
  const group = new THREE.Group();
  group.name = 'Pandora_Inland_Lakes_And_Lilies';

  const lakeWaterGeos = [];
  const lilyPadMatrices = [];
  const lilyFlowerPinkMatrices = [];
  const lilyFlowerTurqMatrices = [];
  const dummy = new THREE.Object3D();

  INLAND_LAKE_BASINS.forEach((lk, lIdx) => {
    const fr = buildLocalFrame(lk.dir);
    const lakeRad = R + lk.waterElev;
    const segR = 8;
    const segA = 20;
    const posArr = [];
    const idxArr = [];

    for (let ir = 0; ir <= segR; ir++) {
      const frac = ir / segR;
      const rad = frac * lk.angRad * 0.82;
      for (let ia = 0; ia <= segA; ia++) {
        const a = (ia / segA) * Math.PI * 2;
        const pDir = fr.upDir
          .clone()
          .addScaledVector(fr.e1, Math.cos(a) * rad)
          .addScaledVector(fr.e2, Math.sin(a) * rad)
          .normalize();
        posArr.push(pDir.x * lakeRad, pDir.y * lakeRad, pDir.z * lakeRad);
      }
    }
    for (let ir = 0; ir < segR; ir++) {
      for (let ia = 0; ia < segA; ia++) {
        const a = ir * (segA + 1) + ia;
        const b = a + (segA + 1);
        idxArr.push(a, a + 1, b, a + 1, b + 1, b);
      }
    }
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.Float32BufferAttribute(posArr, 3));
    lg.setIndex(idxArr);
    lg.computeVertexNormals();
    lakeWaterGeos.push(lg.toNonIndexed());

    // ~108 nenúfares gigantes por lago (~540 en total)
    for (let i = 0; i < 108; i++) {
      const a = hashI(i, lIdx + 3, 19) * Math.PI * 2;
      const rad = Math.sqrt(hashI(i, lIdx + 7, 11)) * lk.angRad * 0.72;
      const pDir = fr.upDir
        .clone()
        .addScaledVector(fr.e1, Math.cos(a) * rad)
        .addScaledVector(fr.e2, Math.sin(a) * rad)
        .normalize();

      const lilyScale = (0.0045 + hashI(i, lIdx + 1, 5) * 0.006) * S;
      dummy.position.copy(pDir).multiplyScalar(lakeRad + 0.00018);
      dummy.quaternion.setFromUnitVectors(UP_Y, pDir);
      dummy.rotateY(hashI(i, 2, 9) * Math.PI * 2);
      dummy.scale.set(lilyScale, lilyScale, lilyScale);
      dummy.updateMatrix();
      lilyPadMatrices.push(dummy.matrix.clone());

      // Flor de nenúfar en el borde / centro
      const flScale = lilyScale * 0.65;
      dummy.position.copy(pDir).multiplyScalar(lakeRad + 0.00038);
      dummy.scale.set(flScale, flScale, flScale);
      dummy.updateMatrix();
      if (i % 2 === 0) lilyFlowerPinkMatrices.push(dummy.matrix.clone());
      else lilyFlowerTurqMatrices.push(dummy.matrix.clone());
    }
  });

  const lakeMat = new THREE.MeshStandardMaterial({
    color: 0x0e92aa,
    emissive: 0x0088b8,
    emissiveIntensity: 0.0,
    roughness: 0.08,
    metalness: 0.62,
    transparent: true,
    opacity: 0.88,
    depthWrite: false,
  });
  matTracker.push({ mat: lakeMat, dayColor: 0x0e92aa, nightColor: 0x044456, dayEmissive: 0x08586c, nightEmissive: 0x0098cc, dayEI: 0.0, nightEI: 1.05 });
  const lakeMesh = new THREE.Mesh(mergeGeometries(lakeWaterGeos, false), lakeMat);
  lakeMesh.name = 'Pandora_Global_Inland_Lakes';
  group.add(lakeMesh);

  // Hoja circular muescada del nenúfar gigante
  const padGeo = new THREE.CylinderGeometry(1.0, 0.92, 0.08, 12, 1, false, 0.25, Math.PI * 1.85);
  padGeo.translate(0, 0.04, 0);
  const padMat = new THREE.MeshStandardMaterial({
    color: 0x246e38,
    emissive: 0x00d898,
    emissiveIntensity: 0.0,
    roughness: 0.52,
  });
  matTracker.push({ mat: padMat, dayColor: 0x246e38, nightColor: 0x0c4440, dayEmissive: 0x103818, nightEmissive: 0x00e09a, dayEI: 0.0, nightEI: 1.35, pulsePhase: 1.3 });
  const padInst = new THREE.InstancedMesh(padGeo, padMat, lilyPadMatrices.length);
  padInst.name = 'Pandora_Giant_WaterLilies_Pads';
  padInst.frustumCulled = false;
  lilyPadMatrices.forEach((m, i) => padInst.setMatrixAt(i, m));
  padInst.instanceMatrix.needsUpdate = true;
  group.add(padInst);

  const foliageLilies = getFoliageTextureSet();
  const lilyFlowerDepthMat = createFoliageDepthMaterial(foliageLilies.mushroom.map);
  const fGeo = createFlowerGeometry();
  const pinkMat = new THREE.MeshStandardMaterial({
    color: 0xff8ec4,
    map: foliageLilies.mushroom.map,
    roughnessMap: foliageLilies.mushroom.roughnessMap,
    emissiveMap: foliageLilies.mushroom.emissiveMap,
    emissive: 0xff38b8,
    emissiveIntensity: 0.0,
    roughness: 0.42,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  const turqMat = new THREE.MeshStandardMaterial({
    color: 0x7be6f0,
    map: foliageLilies.mushroom.map,
    roughnessMap: foliageLilies.mushroom.roughnessMap,
    emissiveMap: foliageLilies.mushroom.emissiveMap,
    emissive: 0x00f5ff,
    emissiveIntensity: 0.0,
    roughness: 0.42,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  matTracker.push({ mat: pinkMat, dayColor: 0xff8ec4, nightColor: 0xff62d0, dayEmissive: 0x482038, nightEmissive: 0xff32b4, dayEI: 0.0, nightEI: 2.35, pulsePhase: 0.4 });
  matTracker.push({ mat: turqMat, dayColor: 0x7be6f0, nightColor: 0x48ffff, dayEmissive: 0x1c4850, nightEmissive: 0x00f5ff, dayEI: 0.0, nightEI: 2.35, pulsePhase: 2.0 });

  const flPink = new THREE.InstancedMesh(fGeo, pinkMat, lilyFlowerPinkMatrices.length);
  flPink.name = 'Pandora_Giant_WaterLilies_PinkFlowers';
  flPink.frustumCulled = false;
  flPink.castShadow = true;
  flPink.receiveShadow = true;
  flPink.customDepthMaterial = lilyFlowerDepthMat;
  lilyFlowerPinkMatrices.forEach((m, i) => flPink.setMatrixAt(i, m));
  flPink.instanceMatrix.needsUpdate = true;

  const flTurq = new THREE.InstancedMesh(fGeo, turqMat, lilyFlowerTurqMatrices.length);
  flTurq.name = 'Pandora_Giant_WaterLilies_TurqFlowers';
  flTurq.frustumCulled = false;
  flTurq.castShadow = true;
  flTurq.receiveShadow = true;
  flTurq.customDepthMaterial = lilyFlowerDepthMat;
  lilyFlowerTurqMatrices.forEach((m, i) => flTurq.setMatrixAt(i, m));
  flTurq.instanceMatrix.needsUpdate = true;

  group.add(flPink, flTurq);

  // Superficies reflectantes THREE.Water para los 5 lagos interiores (activadas solo por cercanía/baja altitud)
  const lakeWaters = [];
  const waterNormals = getWaterNormalTexture();
  INLAND_LAKE_BASINS.forEach((lk, lIdx) => {
    const lakeReflector = new Water(new THREE.CircleGeometry(lk.angRad * R * 0.78, 28), {
      textureWidth: 256,
      textureHeight: 256,
      waterNormals,
      sunDirection: new THREE.Vector3(0.4, 0.7, 0.3).normalize(),
      sunColor: 0xfff0d4,
      waterColor: 0x0a6c7a,
      distortionScale: 0.36,
      size: 3.0,
      clipBias: 0.002,
      alpha: 0.88,
      fog: true,
    });
    featherWaterCircleShader(lakeReflector, 0.65);
    lakeReflector.name = `Pandora_Inland_Lake_Water_${lIdx}`;
    lakeReflector.position.copy(lk.dir).multiplyScalar(R + lk.waterElev + 0.00018);
    lakeReflector.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), lk.dir);
    lakeReflector.visible = false;
    group.add(lakeReflector);
    lakeWaters.push({ water: lakeReflector, centerLocal: lakeReflector.position.clone(), isOceanSurface: false });
  });

  void qCap;
  void sphereLandmarks;

  return { group, lakeWaters };
}

/**
 * Construye el ecosistema global 360° de Pandora (Planeta 1) a 60 FPS:
 * - Relieve escarpado multi-octava + detalle de alta frecuencia (musgo, barro, basalto, arena, ceniza)
 * - 30.000+ instancias GPU de selvas irregulares densas con 4 siluetas de árboles + sotobosque tupido + claros
 * - Lagos interiores con nenúfares bioluminiscentes gigantes
 * - Bioma volcánico Ash People + Bioma oceánico Metkayina con balsas e inmersión submarina real
 */
export function createPandoraSurfaceWorld(cfg) {
  const R = cfg.localRadius; // 1.32 -> 207.9 u
  const capDirVec = cfg.capLocalDir ? cfg.capLocalDir.clone().normalize() : new THREE.Vector3(0, 1, 0);
  const qCap = new THREE.Quaternion().setFromUnitVectors(UP_Y, capDirVec);
  const sphereLandmarks = buildPandoraSphereLandmarks([capDirVec.x, capDirVec.y, capDirVec.z]);
  const samplerCtx = { qCap, sphereLandmarks };

  const group = new THREE.Group();
  group.name = 'Pandora_Global_360_World';

  const matTracker = [];
  const sampleAtDir = (nx, ny, nz) => samplePandoraGlobalPoint(nx, ny, nz, qCap, sphereLandmarks, 4);

  // 1. Terreno esférico 360° de alta resolución (192x128) con acantilados, lagos, arrecifes y ceniza
  const terrainGeo = new THREE.SphereGeometry(R, 192, 128);
  const tPos = terrainGeo.attributes.position;
  const vCount = tPos.count;
  const tColors = new Float32Array(vCount * 3);
  const tAshMask = new Float32Array(vCount);
  const tNationWeights = new Float32Array(vCount * 3);

  const cDeepSeabed = new THREE.Color(0x042138);
  const cShallowReef = new THREE.Color(0x22b5b2);
  const cCoralSand = new THREE.Color(0xd8cda0);
  const cIslandGreen = new THREE.Color(0x2c6e32);
  const cCoastSand = new THREE.Color(0x8c9660);
  const cEmeraldJungle = new THREE.Color(0x1b5c29);
  const cOliveMud = new THREE.Color(0x3b5826);
  const cBasaltCliff = new THREE.Color(0x3a3e40);
  const cDarkAsh = new THREE.Color(0x141215);
  const cTemp = new THREE.Color();
  const nVec = new THREE.Vector3();

  for (let i = 0; i < vCount; i++) {
    nVec.set(tPos.getX(i), tPos.getY(i), tPos.getZ(i)).normalize();
    const {
      cont,
      highlandRidge,
      forestFactor,
      waterFactor,
      ashFactor,
      reefFactor,
      borderMountain,
      elev,
      nation,
    } = samplePandoraGlobalPoint(
      nVec.x,
      nVec.y,
      nVec.z,
      qCap,
      sphereLandmarks,
      4
    );

    tPos.setXYZ(i, nVec.x * (R + elev), nVec.y * (R + elev), nVec.z * (R + elev));
    tAshMask[i] = ashFactor * THREE.MathUtils.smoothstep(cont, -0.01, 0.04);
    tNationWeights[i * 3] = Math.max(0.0, forestFactor);
    tNationWeights[i * 3 + 1] = Math.max(0.0, waterFactor);
    tNationWeights[i * 3 + 2] = Math.max(0.0, ashFactor);

    if (cont <= 0.0) {
      const sh = Math.max(THREE.MathUtils.smoothstep(cont, -0.24, 0.0), reefFactor * 0.78);
      cTemp.copy(cDeepSeabed).lerp(cShallowReef, sh);
    } else if (nation === 'water') {
      // Islas y cayos coralinos del archipiélago Metkayina: playa blanca/coral -> palmar verde
      const islandVeg = THREE.MathUtils.smoothstep(cont, 0.015, 0.055);
      cTemp.copy(cCoralSand).lerp(cIslandGreen, islandVeg);
    } else {
      const nHue = vnoise(nVec.x * 22.0 + 3.0, nVec.y * 22.0, nVec.z * 22.0) * 0.5 + 0.5;
      cTemp.copy(cCoastSand).lerp(cEmeraldJungle, THREE.MathUtils.smoothstep(cont, 0.0, 0.075));
      cTemp.lerp(cOliveMud, nHue * 0.52);
      const rockBlend = Math.min(0.92, highlandRidge * 3.8 + borderMountain * 0.85);
      if (rockBlend > 0.02) {
        cTemp.lerp(cBasaltCliff, rockBlend);
      }
      if (ashFactor > 0.05 || nation === 'ash') {
        cTemp.lerp(cDarkAsh, nation === 'ash' ? 0.96 : Math.min(1.0, ashFactor * 1.15));
      }
    }

    tColors[i * 3] = cTemp.r;
    tColors[i * 3 + 1] = cTemp.g;
    tColors[i * 3 + 2] = cTemp.b;
  }

  terrainGeo.setAttribute('color', new THREE.BufferAttribute(tColors, 3));
  terrainGeo.setAttribute('aAshMask', new THREE.BufferAttribute(tAshMask, 1));
  terrainGeo.setAttribute('aNationWeights', new THREE.BufferAttribute(tNationWeights, 3));
  terrainGeo.computeVertexNormals();

  const pbrTerrain = getOrganicTerrainPbrSet();
  const waterNormalsTex = getWaterNormalTexture();
  const terrainDetailTex = createHighFreqDetailMap();
  const terrainGlowTex = createPandoraTerrainGlowTexture(qCap, sphereLandmarks);
  const terrainMat = new THREE.MeshStandardMaterial({
    map: terrainDetailTex,
    roughnessMap: pbrTerrain.roughnessMap,
    bumpMap: pbrTerrain.bumpMap,
    bumpScale: 0.055,
    vertexColors: true,
    emissiveMap: terrainGlowTex,
    emissive: new THREE.Color(1, 1, 1),
    emissiveIntensity: 0.0,
    roughness: 0.88,
    metalness: 0.04,
  });
  const terrainSplatUniforms = applyTerrainSplattingShader(terrainMat, {
    mode: 'pandora',
    hasAshFissures: true,
    hasNationWeights: true,
    worldRadius: R * 157.5,
    peakStart: 4.5,
    peakEnd: 9.8,
    shoreBand: 0.65,
    detailTex: pbrTerrain.map,
  });
  matTracker.push({
    mat: terrainMat,
    dayColor: 0xffffff,
    nightColor: 0x3b485a,
    dayEmissive: 0xffffff,
    nightEmissive: 0xffffff,
    dayEI: 0.0,
    nightEI: 1.25,
  });

  const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
  terrainMesh.name = 'Pandora_Global_Terrain_360';
  terrainMesh.userData.splatUniforms = terrainSplatUniforms;
  terrainMesh.receiveShadow = true;
  group.add(terrainMesh);

  // Océano cristalino translúcido DoubleSide (global + inmersión submarina) con normales animadas
  const oceanNormalMap = waterNormalsTex ? waterNormalsTex.clone() : null;
  if (oceanNormalMap) {
    oceanNormalMap.repeat.set(36, 18);
    oceanNormalMap.needsUpdate = true;
  }
  const oceanMat = new THREE.MeshStandardMaterial({
    color: 0x0b849e,
    normalMap: oceanNormalMap,
    normalScale: new THREE.Vector2(0.32, 0.32),
    emissive: 0x008ab8,
    emissiveIntensity: 0.0,
    roughness: 0.08,
    metalness: 0.58,
    transparent: true,
    opacity: 0.72,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  matTracker.push({
    mat: oceanMat,
    dayColor: 0x0b849e,
    nightColor: 0x033246,
    dayEmissive: 0x04586c,
    nightEmissive: 0x0088b8,
    dayEI: 0.0,
    nightEI: 0.72,
  });
  const oceanMesh = new THREE.Mesh(new THREE.SphereGeometry(R, 112, 72), oceanMat);
  oceanMesh.name = 'Pandora_Global_Crystal_Ocean';
  oceanMesh.receiveShadow = true;
  group.add(oceanMesh);

  // Superficie reflectante THREE.Water sobre el Arrecife / Laguna Metkayina (conmutable al bucear)
  const metkDir = PANDORA_LANDMARKS[6].capDir.clone().normalize();
  const metkayinaWater = new Water(new THREE.CircleGeometry(R * 0.048, 36), {
    textureWidth: 256,
    textureHeight: 256,
    waterNormals: waterNormalsTex,
    sunDirection: new THREE.Vector3(0.4, 0.7, 0.3).normalize(),
    sunColor: 0xfff0d4,
    waterColor: 0x0e9ab8,
    distortionScale: 0.45,
    size: 4.0,
    clipBias: 0.002,
    alpha: 0.90,
    fog: true,
  });
  featherWaterCircleShader(metkayinaWater, 0.65);
  metkayinaWater.name = 'Pandora_Metkayina_Reflective_Water';
  metkayinaWater.position.copy(metkDir).multiplyScalar(R + 0.00025);
  metkayinaWater.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), metkDir);
  metkayinaWater.visible = false;
  group.add(metkayinaWater);

  // 2. 7 ríos globales + 5 lagos con 540 nenúfares gigantes
  const riverPaths = buildPandoraRiverPaths(R, samplerCtx);
  const riverWidths = [0.011 * S, 0.007 * S, 0.008 * S, 0.0085 * S, 0.008 * S, 0.0075 * S, 0.0075 * S];
  const { waterMesh, bankMesh, waterMat, bankMat, riverNormalMap } = createMergedRiversMeshes(riverPaths, riverWidths);
  group.add(waterMesh, bankMesh);
  const pulsingRivers = [{ waterMat, bankMat, phase: 0.4 }];

  const riverMirrorWaters = [];
  for (let rMirrorIdx = 0; rMirrorIdx < Math.min(2, riverPaths.length); rMirrorIdx++) {
    const rPts = riverPaths[rMirrorIdx];
    if (!rPts || rPts.length < 3) continue;
    const midNode = rPts[Math.floor(rPts.length * 0.5)];
    const rMirror = new Water(new THREE.CircleGeometry((riverWidths[rMirrorIdx] || 0.009 * S) * 1.45, 24), {
      textureWidth: 256,
      textureHeight: 256,
      waterNormals: waterNormalsTex,
      sunDirection: new THREE.Vector3(0.4, 0.7, 0.3).normalize(),
      sunColor: 0xfff0d4,
      waterColor: 0x0b7b8e,
      distortionScale: 0.34,
      size: 2.6,
      clipBias: 0.002,
      alpha: 0.86,
      fog: true,
    });
    featherWaterCircleShader(rMirror, 0.60);
    rMirror.name = `Pandora_River_Reflective_Water_${rMirrorIdx}`;
    rMirror.position.copy(midNode.normal).multiplyScalar(midNode.pos.length() + 0.00022);
    rMirror.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), midNode.normal);
    rMirror.visible = false;
    group.add(rMirror);
    riverMirrorWaters.push({ water: rMirror, centerLocal: rMirror.position.clone(), isOceanSurface: false });
  }

  const { group: lakesGroup, lakeWaters } = buildInlandLakesAndWaterLilies(R, qCap, sphereLandmarks, matTracker);
  group.add(lakesGroup);
  const reflectiveWaters = [
    { water: metkayinaWater, centerLocal: metkayinaWater.position.clone(), isOceanSurface: true },
    ...lakeWaters,
    ...riverMirrorWaters,
  ];

  // 3. Construcción de los 7 Monumentos y Biomas Especializados
  const hangingVines = [];
  const waterfalls = [];
  const dummy = new THREE.Object3D();

  const hometreeRes = buildHometreeLandmark(R, PANDORA_LANDMARKS[0], qCap, sphereLandmarks, matTracker);
  const hallelujahRes = buildHallelujahArchipelago(
    R, PANDORA_LANDMARKS[1], qCap, sphereLandmarks, matTracker, waterfalls, hangingVines
  );
  const rookeryRes = buildIkranRookeryLandmark(
    R, PANDORA_LANDMARKS[2], qCap, sphereLandmarks, matTracker, hangingVines
  );
  const soulsRes = buildTreeOfSoulsLandmark(R, PANDORA_LANDMARKS[3], qCap, sphereLandmarks, matTracker);
  const mushroomRes = buildMushroomGeyserBasin(R, PANDORA_LANDMARKS[4], qCap, sphereLandmarks, matTracker);
  const ashBiomeRes = buildAshPeopleBiome(R, PANDORA_LANDMARKS[5], sampleAtDir, matTracker);
  const metkayinaBiomeRes = buildMetkayinaReefBiome(R, PANDORA_LANDMARKS[6], sampleAtDir, matTracker);

  group.add(
    hometreeRes.group,
    hallelujahRes.group,
    rookeryRes.group,
    soulsRes.group,
    mushroomRes.group,
    ashBiomeRes.group,
    metkayinaBiomeRes.group
  );

  // Arcos en el valle principal
  const valleyFrame = buildLocalFrame(PANDORA_LANDMARKS[0].capDir);
  const pbrRock = getRockBasaltPbrSet();
  const valleyArchMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughnessMap: pbrRock.roughnessMap,
    bumpMap: pbrRock.bumpMap,
    bumpScale: 0.045,
    roughness: 0.88,
  });
  const archCenters = [...rookeryRes.archCenters];
  [
    [-0.02 * PANDORA_SPREAD_TIGHT, 0.05 * PANDORA_SPREAD_TIGHT, 0.07 * PANDORA_SPREAD_TIGHT, -0.04 * PANDORA_SPREAD_TIGHT, 0.14 * S, 0.011 * S],
    [-0.07 * PANDORA_SPREAD_TIGHT, -0.03 * PANDORA_SPREAD_TIGHT, 0.03 * PANDORA_SPREAD_TIGHT, 0.07 * PANDORA_SPREAD_TIGHT, 0.13 * S, 0.010 * S],
  ].forEach(([x1, z1, x2, z2, peak, rad], idx) => {
    const { geo, apex } = createGlobalStoneArchGeometry(R, valleyFrame, x1, z1, x2, z2, peak, rad, 30 + idx, qCap, sphereLandmarks);
    const m = new THREE.Mesh(geo, valleyArchMat);
    m.name = `Pandora_Valley_Arch_${idx + 1}`;
    m.castShadow = true;
    m.receiveShadow = true;
    group.add(m);
    archCenters.push({ apex, normal: apex.clone().normalize() });
  });
  archCenters.push({ apex: hometreeRes.anchorPos, normal: hometreeRes.anchorDir });
  archCenters.push({ apex: hallelujahRes.anchorPos, normal: hallelujahRes.anchorDir });

  // Lianas colgantes bajo Aleluya e Ikran Rookery
  const vineGeo = new THREE.CylinderGeometry(0.00034 * S, 0.00012 * S, 1.0, 4, 1);
  vineGeo.translate(0, -0.5, 0);
  const vineMat = new THREE.MeshStandardMaterial({ color: 0x3b6e35, emissive: 0x22ffd8, emissiveIntensity: 0.0, roughness: 0.42 });
  matTracker.push({ mat: vineMat, dayColor: 0x3b6e35, nightColor: 0x00e8ff, dayEmissive: 0x1a3e1a, nightEmissive: 0x20ffd8, dayEI: 0.0, nightEI: 1.95, pulsePhase: 0.9 });
  const vineInst = new THREE.InstancedMesh(vineGeo, vineMat, hangingVines.length);
  vineInst.name = 'Pandora_Global_Hanging_Vines';
  vineInst.frustumCulled = false;
  hangingVines.forEach((v, idx) => {
    dummy.position.copy(v.pos);
    dummy.quaternion.setFromUnitVectors(UP_Y, v.normal);
    dummy.scale.set(1.0, v.length, 1.0);
    dummy.updateMatrix();
    vineInst.setMatrixAt(idx, dummy.matrix);
  });
  vineInst.instanceMatrix.needsUpdate = true;
  group.add(vineInst);

  // 4. SELVAS IRREGULARES DENSAS Y SOTOBOSQUE (30.000+ instancias GPU con variación setColorAt)
  const umbMatrices = [];
  const umbColors = [];
  const umbCanopyMatrices = [];
  const umbUnderTurqMatrices = [];
  const umbUnderMagMatrices = [];

  const redwoodMatrices = [];
  const redwoodColors = [];
  const gnarledMatrices = [];
  const gnarledColors = [];
  const palmMatrices = [];
  const palmColors = [];

  const fernMatrices = [];
  const fernColors = [];
  const shrubMatrices = [];
  const shrubColors = [];
  const mossRockMatrices = [];
  const flowerVioletMatrices = [];
  const flowerOrangeMatrices = [];
  const mushVioletMatrices = [];
  const mushPinkMatrices = [];

  const spireMatrices = [];
  const reefMatrices = [];

  const cTint = new THREE.Color();
  // Paleta orgánica rica diurna: musgo, pino alienígena, esmeralda, dorado cálido y turquesa foliar
  const leafPaletteHex = [0x6ea84c, 0x3b8c4c, 0x4ca662, 0x8ea44a, 0x3c9e82, 0x2f7d40];
  const makeLeafTint = (seed) => {
    const idx = Math.floor(seed * leafPaletteHex.length) % leafPaletteHex.length;
    cTint.setHex(leafPaletteHex[idx]);
    cTint.offsetHSL((seed - 0.5) * 0.04, 0.0, (seed - 0.5) * 0.14);
    return cTint.clone();
  };
  // Tinte suave para árboles bicolores (conserva la corteza marrón natural sin oscurecer el tronco)
  const makeBicolorTint = (seed) => {
    cTint.setRGB(
      0.86 + seed * 0.24,
      0.92 + (1.0 - Math.abs(seed - 0.5) * 2.0) * 0.22,
      0.80 + (1.0 - seed) * 0.24
    );
    return cTint.clone();
  };

  // Árboles sobre las Montañas Aleluya
  for (let i = 0; i < 64; i++) {
    const isl = hallelujahRes.islandsData[i % hallelujahRes.islandsData.length];
    const ang = hashI(i, 2, 13) * Math.PI * 2;
    const rad = Math.sqrt(hashI(i, 5, 2)) * 0.52;
    const localOff = new THREE.Vector3(Math.cos(ang) * isl.rx * rad, isl.h * 0.28, Math.sin(ang) * isl.rz * rad);
    const qIsl = new THREE.Quaternion().setFromUnitVectors(UP_Y, isl.normal);
    localOff.applyQuaternion(qIsl);
    const basePos = isl.pos.clone().add(localOff);
    const ts = (0.018 + hashI(i, 8, 4) * 0.022) * S;
    const cr = ts * 0.65;

    dummy.position.copy(basePos);
    dummy.quaternion.copy(qIsl);
    dummy.rotateY(hashI(i, 9, 9) * Math.PI * 2);
    dummy.scale.set(ts, ts, ts);
    dummy.updateMatrix();
    umbMatrices.push(dummy.matrix.clone());
    umbColors.push(makeLeafTint(hashI(i, 3, 5)));

    dummy.position.copy(basePos).addScaledVector(isl.normal, ts * 0.92);
    dummy.scale.set(cr, cr, cr);
    dummy.updateMatrix();
    umbCanopyMatrices.push(dummy.matrix.clone());
    (i % 2 === 0 ? umbUnderTurqMatrices : umbUnderMagMatrices).push(dummy.matrix.clone());
  }

  // Muestreo esférico optimizado (60 FPS):
  //  - 9.000 puntos concentrados en el horizonte de exploración del Bosque
  //  - 12.500 puntos globales 360° (reducción de redundancia lejana con copas arbóreas 1.15x más frondosas)
  const goldenRatio = (1 + Math.sqrt(5)) * 0.5;
  const localHorizonSamples = 9000;
  const globalSamples = 12500;
  const probeSamples = localHorizonSamples + globalSamples;
  const nTmp = new THREE.Vector3();
  const basePosTmp = new THREE.Vector3();
  const qTmp = new THREE.Quaternion();
  const jDir = new THREE.Vector3();
  const jTanA = new THREE.Vector3();
  const jTanB = new THREE.Vector3();
  const forestHorizonFrames = [0, 1, 2, 3, 4].map((idx) => buildLocalFrame(PANDORA_LANDMARKS[idx].capDir));

  for (let i = 0; i < probeSamples; i++) {
    if (i < localHorizonSamples) {
      const frIdx = i % forestHorizonFrames.length;
      const fr = forestHorizonFrames[frIdx];
      const ang = (2.0 * Math.PI * i) / goldenRatio;
      const radMax = frIdx === 0 ? 0.36 : 0.24;
      const rad = Math.sqrt(((i + 0.5) / localHorizonSamples)) * radMax;
      nTmp
        .copy(fr.upDir)
        .addScaledVector(fr.e1, Math.cos(ang) * rad)
        .addScaledVector(fr.e2, Math.sin(ang) * rad)
        .normalize();
    } else {
      const gIdx = i - localHorizonSamples;
      const uLat = (gIdx * 0.7548776662) % 1.0;
      const yBase = 1.0 - uLat * 2.0;
      const rXY = Math.sqrt(Math.max(0.0, 1.0 - yBase * yBase));
      const phi = (2.0 * Math.PI * gIdx) / goldenRatio + (hashI(i, 3, 17) - 0.5) * 0.028;
      nTmp.set(Math.cos(phi) * rXY, yBase, Math.sin(phi) * rXY).normalize();
    }

    const {
      cont,
      highlandRidge,
      ashFactor,
      forestClump,
      lakeBlend,
      elev,
      biome,
      nation,
    } = samplePandoraGlobalPoint(nTmp.x, nTmp.y, nTmp.z, qCap, sphereLandmarks, 3);

    const r1 = hashI(i, 11, 29);
    const r2 = hashI(i, 19, 7);
    const r3 = hashI(i, 23, 13);

    // NACIÓN 3 (Ceniza Mangkwan): 0% vegetación verde, lagos o flores
    if (nation === 'ash' || ashFactor > 0.22) {
      continue;
    }

    // NACIÓN 2 (Océano y Archipiélago Metkayina)
    if (nation === 'water') {
      if (cont <= 0.002) {
        if (biome === 'reef' && reefMatrices.length < 280 && r1 < 0.14 && elev > -0.025) {
          basePosTmp.copy(nTmp).multiplyScalar(R + elev - 0.0002);
          qTmp.setFromUnitVectors(UP_Y, nTmp);
          dummy.position.copy(basePosTmp);
          dummy.quaternion.copy(qTmp);
          dummy.rotateY(r2 * Math.PI * 2);
          const rw = (0.007 + r2 * 0.013) * S;
          dummy.scale.set(rw, rw * 0.45, rw * 0.85);
          dummy.updateMatrix();
          reefMatrices.push(dummy.matrix.clone());
        }
      } else if (cont > 0.005) {
        // Islas del archipiélago Metkayina: SOLO palmeras costeras y flora tropical de playa
        basePosTmp.copy(nTmp).multiplyScalar(R + elev);
        qTmp.setFromUnitVectors(UP_Y, nTmp);
        if (palmMatrices.length < 1400 && r1 < 0.62) {
          const ps = 0.017 * S * (0.65 + r2 * 1.15) * 1.15;
          dummy.position.copy(basePosTmp);
          dummy.quaternion.copy(qTmp);
          dummy.rotateY(r2 * Math.PI * 2);
          dummy.rotateX((r3 - 0.5) * 0.14);
          dummy.scale.set(ps, ps, ps);
          dummy.updateMatrix();
          palmMatrices.push(dummy.matrix.clone());
          palmColors.push(makeBicolorTint(r3));
        } else if (shrubMatrices.length < 1600 && r2 < 0.42) {
          const ss = (0.007 + r1 * 0.008) * S;
          dummy.position.copy(basePosTmp);
          dummy.quaternion.copy(qTmp);
          dummy.rotateY(r1 * Math.PI * 2);
          dummy.scale.set(ss, ss, ss);
          dummy.updateMatrix();
          shrubMatrices.push(dummy.matrix.clone());
          shrubColors.push(makeLeafTint(r1));
        } else if (fernMatrices.length < 2400 && r3 < 0.32) {
          const fs = (0.006 + r2 * 0.007) * S;
          dummy.position.copy(basePosTmp);
          dummy.quaternion.copy(qTmp);
          dummy.rotateY(r3 * Math.PI * 2);
          dummy.scale.set(fs, fs, fs);
          dummy.updateMatrix();
          fernMatrices.push(dummy.matrix.clone());
          fernColors.push(makeLeafTint(r2));
        }
      }
      continue;
    }

    // NACIÓN 1 (Gran Continente Selvático): excluir únicamente lagos interiores y el claro sagrado
    if (biome === 'lake' || lakeBlend > 0.35 || cont <= 0.0) continue;
    if (nTmp.distanceTo(PANDORA_LANDMARKS[3].capDir) < 0.036 * PANDORA_SPREAD_TIGHT) continue;

    basePosTmp.copy(nTmp).multiplyScalar(R + elev);
    qTmp.setFromUnitVectors(UP_Y, nTmp);

    if (biome === 'canyon' && spireMatrices.length < 250 && highlandRidge > 0.042 && r1 < 0.24) {
      dummy.position.copy(nTmp).multiplyScalar(R + elev - 0.001 * S);
      dummy.quaternion.copy(qTmp);
      dummy.rotateY(r2 * Math.PI * 2);
      const bw = (0.008 + r2 * 0.011) * S;
      const sh = (0.036 + r3 * 0.052) * S;
      dummy.scale.set(bw, sh, bw);
      dummy.updateMatrix();
      spireMatrices.push(dummy.matrix.clone());
      continue;
    }

    // Densidad irregular: masas selváticas densas (forestClump > -0.04) alternadas con claros naturales
    const isDenseJungle = forestClump > -0.04;
    const isNearCoast = cont < 0.065;

    // 4 siluetas arbóreas exclusivamente dentro del Continente Selvático (copas +15% para frondosidad con -50% instancias)
    if (isDenseJungle || (isNearCoast && r1 < 0.45)) {
      const scaleMult = 0.5 + Math.pow(r2, 1.3) * 1.9; // 0.5x .. 2.4x
      const leanX = (r3 - 0.5) * 0.16;
      const leanZ = (hashI(i, 5, 31) - 0.5) * 0.16;
      const leafTint = makeLeafTint(r3);
      const bicolorTint = makeBicolorTint(r3);

      dummy.position.copy(basePosTmp);
      dummy.quaternion.copy(qTmp);
      dummy.rotateY(r2 * Math.PI * 2);
      dummy.rotateX(leanX);
      dummy.rotateZ(leanZ);

      if (isNearCoast && r1 < 0.55 && palmMatrices.length < 1400) {
        const ps = 0.019 * S * scaleMult * 1.15;
        dummy.scale.set(ps, ps, ps);
        dummy.updateMatrix();
        palmMatrices.push(dummy.matrix.clone());
        palmColors.push(bicolorTint);
      } else {
        const pick = Math.floor(r1 * 100) % 3;
        if (pick === 0 && umbMatrices.length < 2300) {
          const ts = 0.024 * S * scaleMult;
          const cr = ts * (0.58 + r3 * 0.22) * 1.15;
          dummy.scale.set(ts, ts, ts);
          dummy.updateMatrix();
          umbMatrices.push(dummy.matrix.clone());
          umbColors.push(leafTint);

          dummy.position.copy(basePosTmp).addScaledVector(nTmp, ts * 0.9);
          dummy.scale.set(cr, cr, cr);
          dummy.updateMatrix();
          umbCanopyMatrices.push(dummy.matrix.clone());
          (umbMatrices.length % 2 === 0 ? umbUnderTurqMatrices : umbUnderMagMatrices).push(dummy.matrix.clone());
        } else if (pick === 1 && redwoodMatrices.length < 2500) {
          const rs = 0.032 * S * scaleMult * 1.15;
          dummy.scale.set(rs * 0.9, rs * 1.35, rs * 0.9);
          dummy.updateMatrix();
          redwoodMatrices.push(dummy.matrix.clone());
          redwoodColors.push(bicolorTint);
        } else if (gnarledMatrices.length < 2350) {
          const gs = 0.022 * S * scaleMult * 1.15;
          dummy.scale.set(gs, gs, gs);
          dummy.updateMatrix();
          gnarledMatrices.push(dummy.matrix.clone());
          gnarledColors.push(bicolorTint);
        } else if (palmMatrices.length < 1400) {
          const ps = 0.020 * S * scaleMult * 1.15;
          dummy.scale.set(ps, ps, ps);
          dummy.updateMatrix();
          palmMatrices.push(dummy.matrix.clone());
          palmColors.push(bicolorTint);
        }
      }

      // Apilar sotobosque bajo copas optimizado (helechos, arbustos y rocas musgosas)
      const refV = Math.abs(nTmp.x) < 0.85 ? UP_Y : new THREE.Vector3(0, 0, 1);
      jTanA.crossVectors(nTmp, refV).normalize();
      jTanB.crossVectors(nTmp, jTanA).normalize();

      if (fernMatrices.length < 2800 && r2 < 0.52) {
        jDir
          .copy(nTmp)
          .addScaledVector(jTanA, (r1 - 0.5) * 0.0025)
          .addScaledVector(jTanB, (r3 - 0.5) * 0.0025)
          .normalize();
        const fs = (0.0085 + r3 * 0.0095) * S;
        dummy.position.copy(jDir).multiplyScalar(R + elev);
        dummy.quaternion.setFromUnitVectors(UP_Y, jDir);
        dummy.rotateY(r2 * Math.PI * 2);
        dummy.scale.set(fs, fs, fs);
        dummy.updateMatrix();
        fernMatrices.push(dummy.matrix.clone());
        fernColors.push(makeLeafTint(r2));
      }

      if (shrubMatrices.length < 1900 && r3 > 0.54) {
        jDir
          .copy(nTmp)
          .addScaledVector(jTanA, (r3 - 0.5) * 0.003)
          .addScaledVector(jTanB, (r1 - 0.5) * 0.003)
          .normalize();
        const ss = (0.010 + r1 * 0.011) * S;
        dummy.position.copy(jDir).multiplyScalar(R + elev);
        dummy.quaternion.setFromUnitVectors(UP_Y, jDir);
        dummy.rotateY(r1 * Math.PI * 2);
        dummy.scale.set(ss, ss, ss);
        dummy.updateMatrix();
        shrubMatrices.push(dummy.matrix.clone());
        shrubColors.push(makeLeafTint(r1));
      }

      if (mossRockMatrices.length < 950 && r1 > 0.80) {
        jDir
          .copy(nTmp)
          .addScaledVector(jTanA, (r2 - 0.5) * 0.003)
          .addScaledVector(jTanB, (r3 - 0.5) * 0.003)
          .normalize();
        const ms = (0.0068 + r2 * 0.010) * S;
        dummy.position.copy(jDir).multiplyScalar(R + elev);
        dummy.quaternion.setFromUnitVectors(UP_Y, jDir);
        dummy.rotateY(r3 * Math.PI * 2);
        dummy.scale.set(ms, ms, ms);
        dummy.updateMatrix();
        mossRockMatrices.push(dummy.matrix.clone());
      }
    } else {
      // Claros abiertos y riberas: parches de flores exóticas y colonias de setas
      if (flowerVioletMatrices.length + flowerOrangeMatrices.length < 1000 && r1 < 0.22) {
        const flS = (0.0056 + r2 * 0.0065) * S;
        dummy.position.copy(basePosTmp);
        dummy.quaternion.copy(qTmp);
        dummy.rotateY(r3 * Math.PI * 2);
        dummy.scale.set(flS, flS, flS);
        dummy.updateMatrix();
        (i % 2 === 0 ? flowerVioletMatrices : flowerOrangeMatrices).push(dummy.matrix.clone());
      } else if (mushVioletMatrices.length + mushPinkMatrices.length < 520 && r1 > 0.85) {
        const ms = (0.011 + r2 * 0.016) * S;
        dummy.position.copy(basePosTmp);
        dummy.quaternion.copy(qTmp);
        dummy.rotateY(r3 * Math.PI * 2);
        dummy.scale.set(ms, ms, ms);
        dummy.updateMatrix();
        (i % 2 === 0 ? mushVioletMatrices : mushPinkMatrices).push(dummy.matrix.clone());
      }
    }
  }

  // Colonia extra de setas colosales en Monumento 5 (Bosque de Setas y Géiseres)
  const mushBasinFrame = buildLocalFrame(PANDORA_LANDMARKS[4].capDir);
  for (let i = 0; i < 120; i++) {
    const cluster = Math.floor(i / 4);
    const a = hashI(cluster, 4, 17) * Math.PI * 2;
    const rad = Math.sqrt(hashI(cluster, 11, 3)) * (0.095 * PANDORA_SPREAD_TIGHT);
    const lx = Math.cos(a) * rad + (hashI(i, 2, 9) - 0.5) * (0.012 * PANDORA_SPREAD_TIGHT);
    const lz = Math.sin(a) * rad + (hashI(i, 7, 5) - 0.5) * (0.012 * PANDORA_SPREAD_TIGHT);
    const pt = framePointOnSphere(R, mushBasinFrame, lx, lz, 0, qCap, sphereLandmarks);
    const ms = (0.018 + hashI(i, 9, 6) * 0.026) * S;
    dummy.position.copy(pt.pos);
    dummy.quaternion.setFromUnitVectors(UP_Y, pt.normal);
    dummy.rotateY(hashI(i, 5, 1) * Math.PI * 2);
    dummy.scale.set(ms, ms, ms);
    dummy.updateMatrix();
    (cluster % 2 === 0 ? mushVioletMatrices : mushPinkMatrices).push(dummy.matrix.clone());
  }

  // Helechos extra en riberas de los 7 ríos
  for (let i = 0; i < 200; i++) {
    const rList = riverPaths[i % riverPaths.length];
    const rNode = rList[Math.floor(hashI(i, 5, 3) * rList.length)];
    const phi = rNode.phi + (i % 2 === 0 ? 1 : -1) * (0.008 + hashI(i, 7, 1) * 0.026) * S;
    const theta = THREE.MathUtils.clamp(rNode.theta + (hashI(i, 3, 8) - 0.5) * 0.018 * S, 0.001, Math.PI - 0.001);
    const sinT = Math.sin(theta);
    const elev = samplePandoraGlobalPoint(sinT * Math.cos(phi), Math.cos(theta), sinT * Math.sin(phi), qCap, sphereLandmarks, 3).elev;
    const pt = pandoraCapPoint(R, theta, phi, elev);
    dummy.position.copy(pt.pos);
    dummy.quaternion.setFromUnitVectors(UP_Y, pt.normal);
    dummy.rotateY(hashI(i, 1, 6) * Math.PI * 2);
    const fs = (0.008 + hashI(i, 4, 9) * 0.01) * S;
    dummy.scale.set(fs, fs, fs);
    dummy.updateMatrix();
    fernMatrices.push(dummy.matrix.clone());
    fernColors.push(makeLeafTint(hashI(i, 2, 3)));
  }

  const pbrBark = getBarkPbrSet();
  const foliage = getFoliageTextureSet();
  const canopyDepthMat = createFoliageDepthMaterial(foliage.canopy.map);
  const palmDepthMat = createFoliageDepthMaterial(foliage.palm.map);
  const fernDepthMat = createFoliageDepthMaterial(foliage.fern.map);
  const mushDepthMat = createFoliageDepthMaterial(foliage.mushroom.map);
  const globalInstSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), R + 1.8);

  const buildInst = (name, geo, mat, matrices, colors = null, { castShadow = false, receiveShadow = false, customDepthMaterial = null } = {}) => {
    geo.boundingSphere = globalInstSphere;
    const mesh = new THREE.InstancedMesh(geo, mat, Math.max(1, matrices.length));
    mesh.name = name;
    mesh.frustumCulled = false;
    mesh.castShadow = castShadow;
    mesh.receiveShadow = receiveShadow;
    if (customDepthMaterial) mesh.customDepthMaterial = customDepthMaterial;
    matrices.forEach((m, idx) => {
      mesh.setMatrixAt(idx, m);
      if (colors && colors[idx]) mesh.setColorAt(idx, colors[idx]);
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (colors && mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    group.add(mesh);
    return mesh;
  };

  if (spireMatrices.length > 0) {
    const spireMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughnessMap: pbrRock.roughnessMap,
      bumpMap: pbrRock.bumpMap,
      bumpScale: 0.045,
      roughness: 0.88,
    });
    buildInst('Pandora_Global_Canyon_Spires', createRockSpireGeometry(7), spireMat, spireMatrices, null, { castShadow: true, receiveShadow: true });
  }
  if (reefMatrices.length > 0) {
    const reefMat = new THREE.MeshStandardMaterial({ color: 0x4b7068, emissive: 0x00f0ff, emissiveIntensity: 0.0, roughness: 0.72 });
    matTracker.push({ mat: reefMat, dayColor: 0x4b7068, nightColor: 0x084862, dayEmissive: 0x184038, nightEmissive: 0x00e8ff, dayEI: 0.0, nightEI: 1.75, pulsePhase: 1.2 });
    buildInst('Pandora_Global_Coral_Reefs', new THREE.DodecahedronGeometry(1.0, 0), reefMat, reefMatrices);
  }
  if (mossRockMatrices.length > 0) {
    const mossRockMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughnessMap: pbrRock.roughnessMap,
      bumpMap: pbrRock.bumpMap,
      bumpScale: 0.035,
      roughness: 0.9,
    });
    buildInst('Pandora_Global_Mossy_Rocks', createMossyRockClusterGeometry(), mossRockMat, mossRockMatrices, null, { castShadow: true, receiveShadow: true });
  }

  // Material base de corteza rugosa PBR para los 4 arquetipos de árboles
  const barkInstMat = new THREE.MeshStandardMaterial({
    color: 0x624b36,
    map: pbrBark.map,
    roughnessMap: pbrBark.roughnessMap,
    bumpMap: pbrBark.bumpMap,
    bumpScale: 0.04,
    roughness: 0.92,
  });
  matTracker.push({ mat: barkInstMat, dayColor: 0x624b36, nightColor: 0x22263c, dayEmissive: 0x000000, nightEmissive: 0x0a1c2a, dayEI: 0.0, nightEI: 0.16 });

  // Arquetipo 1: Árbol Paraguas (troncos + rosetas arqueadas DoubleSide alphaTest: 0.45 + envés bioluminiscente)
  const trunkGeo = new THREE.CylinderGeometry(0.055, 0.18, 1.0, 6, 1);
  trunkGeo.translate(0, 0.5, 0);
  buildInst('Pandora_Global_Tree_Trunks', trunkGeo, barkInstMat, umbMatrices, null, { castShadow: true, receiveShadow: true });

  const { outer: outerGeo, under: underGeo } = createUmbrellaCanopyPair();
  const outerCanopyMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: foliage.canopy.map,
    roughnessMap: foliage.canopy.roughnessMap,
    emissiveMap: foliage.canopy.emissiveMap,
    emissive: 0x083440,
    emissiveIntensity: 0.0,
    roughness: 0.68,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  matTracker.push({ mat: outerCanopyMat, dayColor: 0xd4ebd4, nightColor: 0x1b5c5e, dayEmissive: 0x0a2e16, nightEmissive: 0x0894a8, dayEI: 0.0, nightEI: 1.18 });
  buildInst('Pandora_Global_Canopy_Tops', outerGeo, outerCanopyMat, umbCanopyMatrices, umbColors, { castShadow: true, receiveShadow: true, customDepthMaterial: canopyDepthMat });

  const underTurqMat = new THREE.MeshStandardMaterial({
    color: 0x3b8648,
    map: foliage.canopy.map,
    roughnessMap: foliage.canopy.roughnessMap,
    emissiveMap: foliage.canopy.emissiveMap,
    emissive: 0x00ffe8,
    emissiveIntensity: 0.0,
    roughness: 0.52,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  matTracker.push({ mat: underTurqMat, dayColor: 0x3b8648, nightColor: 0x10e8f8, dayEmissive: 0x16381c, nightEmissive: 0x00ffe8, dayEI: 0.0, nightEI: 2.2, pulsePhase: 0.0 });
  buildInst('Pandora_Global_Canopy_Under_Turquoise', underGeo, underTurqMat, umbUnderTurqMatrices, null, { castShadow: false, receiveShadow: true });

  const underMagMat = new THREE.MeshStandardMaterial({
    color: 0x458842,
    map: foliage.canopy.map,
    roughnessMap: foliage.canopy.roughnessMap,
    emissiveMap: foliage.canopy.emissiveMap,
    emissive: 0xff22a0,
    emissiveIntensity: 0.0,
    roughness: 0.52,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  matTracker.push({ mat: underMagMat, dayColor: 0x458842, nightColor: 0xff42b8, dayEmissive: 0x1a3c18, nightEmissive: 0xff22a0, dayEI: 0.0, nightEI: 2.15, pulsePhase: 1.9 });
  buildInst('Pandora_Global_Canopy_Under_Magenta', underGeo, underMagMat, umbUnderMagMatrices, null, { castShadow: false, receiveShadow: true });

  // Arquetipo 2: Secuoyas Alienígenas (tronco PBR + copas multi-nivel alphaTest)
  buildInst('Pandora_Global_Alien_Redwoods', createAlienRedwoodGeometry(), barkInstMat, redwoodMatrices, null, { castShadow: true, receiveShadow: true });
  const redwoodCanopyMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: foliage.canopy.map,
    roughnessMap: foliage.canopy.roughnessMap,
    emissiveMap: foliage.canopy.emissiveMap,
    emissive: 0x00c8d8,
    emissiveIntensity: 0.0,
    roughness: 0.68,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  matTracker.push({ mat: redwoodCanopyMat, dayColor: 0xd8edd8, nightColor: 0x3b8ea0, dayEmissive: 0x0c2e1c, nightEmissive: 0x00a4b8, dayEI: 0.0, nightEI: 1.16 });
  buildInst('Pandora_Global_Alien_Redwoods_Canopy', createAlienRedwoodCanopyGeometry(), redwoodCanopyMat, redwoodMatrices, redwoodColors, { castShadow: true, receiveShadow: true, customDepthMaterial: canopyDepthMat });

  // Arquetipo 3: Árboles Retorcidos con Raíces Aéreas (tronco PBR + copa irregular alphaTest)
  buildInst('Pandora_Global_Gnarled_Root_Trees', createGnarledRootTreeGeometry(), barkInstMat, gnarledMatrices, null, { castShadow: true, receiveShadow: true });
  const gnarledCanopyMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: foliage.canopy.map,
    roughnessMap: foliage.canopy.roughnessMap,
    emissiveMap: foliage.canopy.emissiveMap,
    emissive: 0x9048ff,
    emissiveIntensity: 0.0,
    roughness: 0.68,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  matTracker.push({ mat: gnarledCanopyMat, dayColor: 0xd6ead4, nightColor: 0x627098, dayEmissive: 0x122618, nightEmissive: 0x6838d0, dayEI: 0.0, nightEI: 1.22 });
  buildInst('Pandora_Global_Gnarled_Root_Canopy', createGnarledRootCanopyGeometry(), gnarledCanopyMat, gnarledMatrices, gnarledColors, { castShadow: true, receiveShadow: true, customDepthMaterial: canopyDepthMat });

  // Arquetipo 4: Palmeras Alienígenas Costeras (tronco curvo PBR + 10 frondas arqueadas texPalmFrondAlpha)
  buildInst('Pandora_Global_Alien_Palms', createAlienPalmGeometry(), barkInstMat, palmMatrices, null, { castShadow: true, receiveShadow: true });
  const palmFrondMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: foliage.palm.map,
    roughnessMap: foliage.palm.roughnessMap,
    emissiveMap: foliage.palm.emissiveMap,
    emissive: 0x00d8a8,
    emissiveIntensity: 0.0,
    roughness: 0.68,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  matTracker.push({ mat: palmFrondMat, dayColor: 0xd8f0d8, nightColor: 0x4ca49c, dayEmissive: 0x123818, nightEmissive: 0x00cca8, dayEI: 0.0, nightEI: 1.28 });
  buildInst('Pandora_Global_Alien_Palms_Fronds', createAlienPalmFrondsGeometry(), palmFrondMat, palmMatrices, palmColors, { castShadow: true, receiveShadow: true, customDepthMaterial: palmDepthMat });

  // Sotobosque denso con recorte alfa real y proyección de sombras alfa sincronizada (`customDepthMaterial`)
  const shrubMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: foliage.canopy.map,
    roughnessMap: foliage.canopy.roughnessMap,
    emissiveMap: foliage.canopy.emissiveMap,
    emissive: 0x00e0aa,
    emissiveIntensity: 0.0,
    roughness: 0.68,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  matTracker.push({ mat: shrubMat, dayColor: 0xd6ecd4, nightColor: 0x1c665e, dayEmissive: 0x12341a, nightEmissive: 0x00d8a8, dayEI: 0.0, nightEI: 1.38, pulsePhase: 1.1 });
  buildInst('Pandora_Global_Broadleaf_Shrubs', createBroadleafShrubGeometry(), shrubMat, shrubMatrices, shrubColors, { castShadow: true, receiveShadow: true, customDepthMaterial: canopyDepthMat });

  const fernMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: foliage.fern.map,
    roughnessMap: foliage.fern.roughnessMap,
    emissiveMap: foliage.fern.emissiveMap,
    emissive: 0x00e89c,
    emissiveIntensity: 0.0,
    roughness: 0.66,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  matTracker.push({ mat: fernMat, dayColor: 0xd8eed8, nightColor: 0x186b52, dayEmissive: 0x14421e, nightEmissive: 0x00e8a6, dayEI: 0.0, nightEI: 1.42, pulsePhase: 2.4 });
  buildInst('Pandora_Global_Giant_Ferns', createGiantFernGeometry(), fernMat, fernMatrices, fernColors, { castShadow: true, receiveShadow: true, customDepthMaterial: fernDepthMat });

  const flowerGeo = createFlowerGeometry();
  const fVioletMat = new THREE.MeshStandardMaterial({
    color: 0xc46ce0,
    map: foliage.mushroom.map,
    roughnessMap: foliage.mushroom.roughnessMap,
    emissiveMap: foliage.mushroom.emissiveMap,
    emissive: 0xc238ff,
    emissiveIntensity: 0.0,
    roughness: 0.48,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  matTracker.push({ mat: fVioletMat, dayColor: 0xc46ce0, nightColor: 0xd04aff, dayEmissive: 0x3a1842, nightEmissive: 0xb830ff, dayEI: 0.0, nightEI: 2.35, pulsePhase: 0.8 });
  buildInst('Pandora_Global_Flowers_Violet', flowerGeo, fVioletMat, flowerVioletMatrices, null, { castShadow: true, receiveShadow: true, customDepthMaterial: mushDepthMat });

  const fOrangeMat = new THREE.MeshStandardMaterial({
    color: 0xff8c48,
    map: foliage.mushroom.map,
    roughnessMap: foliage.mushroom.roughnessMap,
    emissiveMap: foliage.mushroom.emissiveMap,
    emissive: 0xff6e1a,
    emissiveIntensity: 0.0,
    roughness: 0.48,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  matTracker.push({ mat: fOrangeMat, dayColor: 0xff8c48, nightColor: 0xff7a22, dayEmissive: 0x4c2410, nightEmissive: 0xff6814, dayEI: 0.0, nightEI: 2.35, pulsePhase: 2.6 });
  buildInst('Pandora_Global_Flowers_Orange', flowerGeo, fOrangeMat, flowerOrangeMatrices, null, { castShadow: true, receiveShadow: true, customDepthMaterial: mushDepthMat });

  const mushGeo = createCupMushroomGeometry();
  const mVioletMat = new THREE.MeshStandardMaterial({
    color: 0xa474c2,
    map: foliage.mushroom.map,
    roughnessMap: foliage.mushroom.roughnessMap,
    emissiveMap: foliage.mushroom.emissiveMap,
    emissive: 0xa838ff,
    emissiveIntensity: 0.0,
    roughness: 0.50,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  matTracker.push({ mat: mVioletMat, dayColor: 0xa474c2, nightColor: 0xa23aff, dayEmissive: 0x321c38, nightEmissive: 0x982eff, dayEI: 0.0, nightEI: 2.45, pulsePhase: 1.5 });
  buildInst('Pandora_Global_Mushrooms_Violet', mushGeo, mVioletMat, mushVioletMatrices, null, { castShadow: true, receiveShadow: true, customDepthMaterial: mushDepthMat });

  const mPinkMat = new THREE.MeshStandardMaterial({
    color: 0xe07898,
    map: foliage.mushroom.map,
    roughnessMap: foliage.mushroom.roughnessMap,
    emissiveMap: foliage.mushroom.emissiveMap,
    emissive: 0xff36a8,
    emissiveIntensity: 0.0,
    roughness: 0.50,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  matTracker.push({ mat: mPinkMat, dayColor: 0xe07898, nightColor: 0xff38aa, dayEmissive: 0x421c28, nightEmissive: 0xff2898, dayEI: 0.0, nightEI: 2.45, pulsePhase: 3.1 });
  buildInst('Pandora_Global_Mushrooms_NeonPink', mushGeo, mPinkMat, mushPinkMatrices, null, { castShadow: true, receiveShadow: true, customDepthMaterial: mushDepthMat });

  // Anillo dinámico de Micro-Clutter a ras de suelo (LOD < 450 m): 1.200 matojos + 600 piedrecitas (1.800 total)
  const CLUTTER_GRASS_MAX = 1200;
  const CLUTTER_PEBBLES_MAX = 600;
  const clutterGrassGeo = createGroundClutterGrassGeometry();
  clutterGrassGeo.boundingSphere = globalInstSphere;
  const clutterGrassMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: foliage.fern.map,
    roughnessMap: foliage.fern.roughnessMap,
    emissiveMap: foliage.fern.emissiveMap,
    emissive: 0x00e096,
    emissiveIntensity: 0.0,
    roughness: 0.68,
    alphaTest: 0.45,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  matTracker.push({ mat: clutterGrassMat, dayColor: 0xd4ebd2, nightColor: 0x165e4c, dayEmissive: 0x10361a, nightEmissive: 0x00dba0, dayEI: 0.0, nightEI: 1.36, pulsePhase: 0.9 });
  const clutterGrassInst = new THREE.InstancedMesh(clutterGrassGeo, clutterGrassMat, CLUTTER_GRASS_MAX);
  clutterGrassInst.name = 'Pandora_Ground_Clutter_Grass';
  clutterGrassInst.frustumCulled = false;
  clutterGrassInst.castShadow = false;
  clutterGrassInst.receiveShadow = true;
  clutterGrassInst.visible = false;
  clutterGrassInst.userData.manualClutterLod = true;
  clutterGrassInst.setColorAt(0, new THREE.Color(0xffffff));

  const clutterPebbleGeo = createGroundClutterPebblesGeometry();
  clutterPebbleGeo.boundingSphere = globalInstSphere;
  const clutterPebbleMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughnessMap: pbrRock.roughnessMap,
    bumpMap: pbrRock.bumpMap,
    bumpScale: 0.03,
    roughness: 0.92,
  });
  const clutterPebbleInst = new THREE.InstancedMesh(clutterPebbleGeo, clutterPebbleMat, CLUTTER_PEBBLES_MAX);
  clutterPebbleInst.name = 'Pandora_Ground_Clutter_Pebbles';
  clutterPebbleInst.frustumCulled = false;
  clutterPebbleInst.castShadow = false;
  clutterPebbleInst.receiveShadow = true;
  clutterPebbleInst.visible = false;
  clutterPebbleInst.userData.manualClutterLod = true;
  clutterPebbleInst.setColorAt(0, new THREE.Color(0xffffff));

  const _initMat = new THREE.Matrix4().makeScale(0, 0, 0);
  const _initCol = new THREE.Color(1, 1, 1);
  for (let i = 0; i < CLUTTER_GRASS_MAX; i++) {
    clutterGrassInst.setMatrixAt(i, _initMat);
    clutterGrassInst.setColorAt(i, _initCol);
  }
  for (let i = 0; i < CLUTTER_PEBBLES_MAX; i++) {
    clutterPebbleInst.setMatrixAt(i, _initMat);
    clutterPebbleInst.setColorAt(i, _initCol);
  }
  clutterGrassInst.count = 0;
  clutterPebbleInst.count = 0;
  group.add(clutterGrassInst);
  group.add(clutterPebbleInst);

  waterMat.userData.animatedEmissive = true;
  bankMat.userData.animatedEmissive = true;
  for (let i = 0; i < matTracker.length; i++) {
    matTracker[i].mat.userData = matTracker[i].mat.userData || {};
    matTracker[i].mat.userData.animatedEmissive = true;
  }

  const _cA = new THREE.Color();
  const _cB = new THREE.Color();
  const _nColDayWater = new THREE.Color(0xdcf8ff);
  const _nColNightWater = new THREE.Color(0x6496ae);
  const _nColDayBank = new THREE.Color(0xeef8ee);
  const _nColNightBank = new THREE.Color(0x52e8ff);

  /**
   * Devuelve alturas locales exactas de suelo sólido y nivel del agua en cualquier dirección unitaria `localDir`
   * (permite inmersión submarina real bajo R en el océano y colisión sólida en montañas/fondo marino).
   */
  const getFloorAndWaterAtDir = (localDir) => {
    const info = samplePandoraGlobalPoint(
      localDir.x,
      localDir.y,
      localDir.z,
      qCap,
      sphereLandmarks,
      3
    );
    const hasWater = info.cont <= 0.0 || info.lakeBlend > 0.35;
    const waterElev = info.cont <= 0.0 ? 0.0 : info.lakeBlend > 0.35 ? info.lakeWaterElev : -1.0;
    return {
      terrainElev: info.elev,
      waterElev,
      hasWater,
      nation: info.nation,
      forestFactor: info.forestFactor,
      waterFactor: info.waterFactor,
      ashFactor: info.ashFactor,
      reefFactor: info.reefFactor,
      biome: info.biome,
    };
  };

  /**
   * Actualiza la apariencia global de todos los biomas según `sunElev`, `elapsedTime` y `submergedRatio`:
   * - Día (`sunElev > 0.1`): verde orgánico, agua cristalina, humo ceniza gris y cero neón
   * - Noche (`sunElev < 0.0`): enciende bioluminiscencia, nenúfares, corales submarinos, antorchas Metkayina y lava Ash
   */
  const updateDayNight = (sunElev, elapsedTime, submergedRatio = 0.0) => {
    const nightT = THREE.MathUtils.smoothstep(-sunElev, -0.10, 0.04);
    if (terrainSplatUniforms?.uLavaTime) {
      terrainSplatUniforms.uLavaTime.value = elapsedTime;
    }

    for (let i = 0; i < matTracker.length; i++) {
      const m = matTracker[i];
      if (m.isWaterfall) {
        const pulse = 0.85 + 0.15 * Math.sin(elapsedTime * 3.8 + i);
        m.mat.color.setRGB(
          THREE.MathUtils.lerp(m.dayColorRGB[0], m.nightColorRGB[0] * pulse, nightT),
          THREE.MathUtils.lerp(m.dayColorRGB[1], m.nightColorRGB[1] * pulse, nightT),
          THREE.MathUtils.lerp(m.dayColorRGB[2], m.nightColorRGB[2] * pulse, nightT)
        );
        m.mat.opacity = THREE.MathUtils.lerp(0.52, 0.72, nightT);
        continue;
      }

      if (m.dayColor !== undefined) {
        _cA.setHex(m.dayColor);
        _cB.setHex(m.nightColor);
        m.mat.color.copy(_cA).lerp(_cB, nightT);
      }
      if (m.dayEmissive !== undefined) {
        _cA.setHex(m.dayEmissive);
        _cB.setHex(m.nightEmissive);
        m.mat.emissive.copy(_cA).lerp(_cB, nightT);
      }
      if (m.dayEI !== undefined) {
        const wave = m.pulsePhase !== undefined ? 0.9 + 0.16 * Math.sin(elapsedTime * 1.7 + m.pulsePhase) : 1.0;
        m.mat.emissiveIntensity = THREE.MathUtils.lerp(m.dayEI, m.nightEI * wave, nightT);
      }
    }

    const riverPulse = 0.85 + 0.25 * Math.sin(elapsedTime * 2.0);
    waterMat.color.copy(_nColDayWater).lerp(_nColNightWater, nightT);
    waterMat.emissiveIntensity = THREE.MathUtils.lerp(0.0, 1.15 * riverPulse, nightT);
    bankMat.color.copy(_nColDayBank).lerp(_nColNightBank, nightT);
    bankMat.emissiveIntensity = THREE.MathUtils.lerp(0.0, 2.35 * riverPulse, nightT);

    // Actualizar columnas de vapor de géiseres en el Bosque de Setas
    const pAttr = mushroomRes.plumeGeo.attributes.position;
    const cAttr = mushroomRes.plumeGeo.attributes.color;
    const emitters = mushroomRes.geyserEmitters;
    const puffsPer = mushroomRes.puffsPerGeyser;
    for (let g = 0; g < emitters.length; g++) {
      const em = emitters[g];
      for (let p = 0; p < puffsPer; p++) {
        const idx = g * puffsPer + p;
        const cycle = (elapsedTime * 0.48 + em.phase + p / puffsPer) % 1.0;
        const h = cycle * em.maxHeight;
        const spread = Math.sin(cycle * Math.PI) * 0.004 * S;
        pAttr.setXYZ(
          idx,
          em.basePos.x + em.normal.x * h + Math.cos(idx) * spread,
          em.basePos.y + em.normal.y * h,
          em.basePos.z + em.normal.z * h + Math.sin(idx) * spread
        );
        const rC = THREE.MathUtils.lerp(0.85, g % 2 === 0 ? 0.2 : 0.95, nightT);
        const gC = THREE.MathUtils.lerp(0.95, g % 2 === 0 ? 1.45 : 0.45, nightT);
        const bC = THREE.MathUtils.lerp(1.0, 1.85, nightT);
        cAttr.setXYZ(idx, rC, gC, bC);
      }
    }
    pAttr.needsUpdate = true;
    cAttr.needsUpdate = true;
    mushroomRes.plumeMat.opacity = THREE.MathUtils.lerp(0.32, 0.65, nightT);

    // Actualizar región volcánica Ash (humo/ceniza) y arrecife submarino Metkayina (canoas, algas y cáusticas)
    if (oceanNormalMap) {
      oceanNormalMap.offset.x = (elapsedTime * 0.014) % 1.0;
      oceanNormalMap.offset.y = (elapsedTime * 0.009) % 1.0;
    }
    if (riverNormalMap) {
      riverNormalMap.offset.x = (elapsedTime * 0.006) % 1.0;
      riverNormalMap.offset.y = (elapsedTime * -0.085) % 1.0;
    }
    for (let w = 0; w < reflectiveWaters.length; w++) {
      const rw = reflectiveWaters[w];
      if (rw.water.material?.uniforms?.time) {
        rw.water.material.uniforms.time.value = elapsedTime * 0.55;
      }
    }
    ashBiomeRes.update(elapsedTime, nightT);
    metkayinaBiomeRes.update(elapsedTime, nightT, submergedRatio);
  };

  // Scratch prealocados para actualización 0-alloc de micro-clutter (< 450 m) sobre grilla esférica fija
  const GRID_STEP = 0.0011;
  const HALF_CELLS = 19; // círculo r<=19 => ~1.134 celdas <= 1.200 hierba, ~520 <= 600 guijarros
  let clutterLastKey = '';
  const _clDir = new THREE.Vector3();
  const _clDummy = new THREE.Object3D();
  const _clColA = new THREE.Color();
  const _clColB = new THREE.Color();

  const _projectCube = (dx, dy, dz) => {
    const ax = Math.abs(dx);
    const ay = Math.abs(dy);
    const az = Math.abs(dz);
    if (ax >= ay && ax >= az) {
      const s = dx >= 0 ? 1 : -1;
      return { face: dx >= 0 ? 0 : 1, u: (dy * s) / Math.max(1e-5, ax), v: dz / Math.max(1e-5, ax) };
    }
    if (ay >= ax && ay >= az) {
      const s = dy >= 0 ? 1 : -1;
      return { face: dy >= 0 ? 2 : 3, u: (dx * s) / Math.max(1e-5, ay), v: dz / Math.max(1e-5, ay) };
    }
    const s = dz >= 0 ? 1 : -1;
    return { face: dz >= 0 ? 4 : 5, u: (dx * s) / Math.max(1e-5, az), v: dy / Math.max(1e-5, az) };
  };

  const _unprojectCube = (face, u, v, out) => {
    if (face === 0) out.set(1, u, v);
    else if (face === 1) out.set(-1, -u, v);
    else if (face === 2) out.set(u, 1, v);
    else if (face === 3) out.set(-u, -1, v);
    else if (face === 4) out.set(u, v, 1);
    else out.set(-u, v, -1);
    return out.normalize();
  };

  const updateGroundClutter = (camLocalDir, altMeters, submergedRatio = 0.0) => {
    if (
      !camLocalDir ||
      !Number.isFinite(altMeters) ||
      altMeters >= 450 ||
      submergedRatio > 0.05
    ) {
      clutterGrassInst.visible = false;
      clutterPebbleInst.visible = false;
      clutterLastKey = '';
      return;
    }

    const cl = camLocalDir.lengthSq();
    if (!Number.isFinite(cl) || cl < 1e-6) {
      clutterGrassInst.visible = false;
      clutterPebbleInst.visible = false;
      return;
    }

    const { face, u, v } = _projectCube(camLocalDir.x, camLocalDir.y, camLocalDir.z);
    const cu0 = Math.round(u / GRID_STEP);
    const cv0 = Math.round(v / GRID_STEP);
    const cellKey = `${face}_${cu0}_${cv0}`;

    if (cellKey === clutterLastKey) {
      clutterGrassInst.visible = clutterGrassInst.count > 0;
      clutterPebbleInst.visible = clutterPebbleInst.count > 0;
      return;
    }
    clutterLastKey = cellKey;

    let gCount = 0;
    let pCount = 0;

    for (let dv = -HALF_CELLS; dv <= HALF_CELLS; dv++) {
      const iv = cv0 + dv;
      for (let du = -HALF_CELLS; du <= HALF_CELLS; du++) {
        if (du * du + dv * dv > HALF_CELLS * HALF_CELLS) continue;
        const iu = cu0 + du;
        const h1 = hashI(iu + 5000, iv + 5000, face * 17 + 3);
        const h2 = hashI(iu + 5000, iv + 5000, face * 31 + 11);
        const h3 = hashI(iu + 5000, iv + 5000, face * 47 + 23);

        const cu = (iu + (h1 - 0.5) * 0.85) * GRID_STEP;
        const cv = (iv + (h2 - 0.5) * 0.85) * GRID_STEP;
        _unprojectCube(face, cu, cv, _clDir);

        const info = samplePandoraGlobalPoint(_clDir.x, _clDir.y, _clDir.z, qCap, sphereLandmarks, 3);
        if (!Number.isFinite(info.elev) || info.cont <= 0.004 || info.lakeBlend > 0.35) continue;

        const rSurf = R + info.elev;
        const isAsh = info.nation === 'ash' || info.ashFactor > 0.25;
        const isCoast = info.nation === 'water';

        // Matojos de hierba/helechos bajos (excluidos en Ceniza y agua profunda)
        if (!isAsh && gCount < CLUTTER_GRASS_MAX && (!isCoast || h3 < 0.42)) {
          const gs = (isCoast ? 0.0014 : 0.0020 + h1 * 0.0028) * S;
          _clDummy.position.copy(_clDir).multiplyScalar(rSurf);
          _clDummy.quaternion.setFromUnitVectors(UP_Y, _clDir);
          _clDummy.rotateY(h2 * Math.PI * 2);
          _clDummy.rotateX((h3 - 0.5) * 0.16);
          _clDummy.scale.set(gs * (0.85 + h2 * 0.35), gs * (0.8 + h3 * 0.55), gs * (0.85 + h1 * 0.35));
          _clDummy.updateMatrix();
          clutterGrassInst.setMatrixAt(gCount, _clDummy.matrix);

          if (isCoast) {
            _clColA.setHex(0x64b868).lerp(_clColB.setHex(0x88cc7a), h3);
          } else {
            _clColA.setHex(0x1f6e34).lerp(_clColB.setHex(0x289668), h2).lerp(_clColB.setHex(0x4a8230), h3 * 0.35);
          }
          clutterGrassInst.setColorAt(gCount, _clColA);
          gCount++;
        }

        // Guijarros y piedras volcánicas / ribereñas (en los 3 biomas terrestres, únicas en Ceniza)
        const pebbleChance = isAsh ? 0.58 : isCoast ? 0.32 : 0.42;
        if (h3 < pebbleChance && pCount < CLUTTER_PEBBLES_MAX) {
          const j1 = (h2 - 0.5) * GRID_STEP * 0.35;
          const j2 = (h1 - 0.5) * GRID_STEP * 0.35;
          _unprojectCube(face, cu + j1, cv + j2, _clDir);
          const ps = (isAsh ? 0.0014 + h2 * 0.0024 : 0.0011 + h1 * 0.0018) * S;
          _clDummy.position.copy(_clDir).multiplyScalar(rSurf - ps * 0.08);
          _clDummy.quaternion.setFromUnitVectors(UP_Y, _clDir);
          _clDummy.rotateY(h1 * Math.PI * 2);
          _clDummy.scale.set(ps, ps * (0.75 + h3 * 0.5), ps);
          _clDummy.updateMatrix();
          clutterPebbleInst.setMatrixAt(pCount, _clDummy.matrix);

          if (isAsh) {
            _clColA.setHex(0x262426).lerp(_clColB.setHex(0x3a3230), h2);
          } else if (isCoast) {
            _clColA.setHex(0xc8be9e).lerp(_clColB.setHex(0x9a9688), h1);
          } else {
            _clColA.setHex(0x444c40).lerp(_clColB.setHex(0x305834), h2 * 0.65);
          }
          clutterPebbleInst.setColorAt(pCount, _clColA);
          pCount++;
        }
      }
    }

    clutterGrassInst.count = gCount;
    clutterGrassInst.instanceMatrix.needsUpdate = true;
    if (clutterGrassInst.instanceColor) clutterGrassInst.instanceColor.needsUpdate = true;
    clutterGrassInst.visible = gCount > 0;

    clutterPebbleInst.count = pCount;
    clutterPebbleInst.instanceMatrix.needsUpdate = true;
    if (clutterPebbleInst.instanceColor) clutterPebbleInst.instanceColor.needsUpdate = true;
    clutterPebbleInst.visible = pCount > 0;
  };

  return {
    group,
    terrainSplatUniforms,
    reflectiveWaters,
    waterfalls,
    pulsingRivers,
    archCenters,
    riverPaths,
    landmarks: PANDORA_LANDMARKS,
    samplerCtx,
    getFloorAndWaterAtDir,
    updateDayNight,
    updateGroundClutter,
    groundClutterMeshes: { grass: clutterGrassInst, pebbles: clutterPebbleInst },
  };
}
