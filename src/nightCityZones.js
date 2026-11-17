import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { hashI, fbm, vnoise } from './planetarySphere.js';
import {
  getAsphaltPbrSet,
  getBrutalistConcretePbrSet,
  getRockBasaltPbrSet,
  getOrganicTerrainPbrSet,
  getWaterNormalTexture,
  applyTerrainSplattingShader,
} from './proceduralPbr.js';

const UP_Y = new THREE.Vector3(0, 1, 0);
export const NC_GEO_SCALE = 0.45; // Sobre el planeta 4.8x -> huella metropolitana 2.16x más extensa con edificios a escala real

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

function sstep(e0, e1, x) {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
}

/**
 * Convierte coordenadas equidistantes (ax = Este+, ay = Norte+) en radianes sobre el casquete
 * local (+Y = centro de Corpo Plaza) a vector normal unitario 3D en `capFrame`.
 */
export function ncMapToCapDir(ax, ay) {
  const theta = Math.hypot(ax, ay);
  if (theta < 1e-6) return new THREE.Vector3(0, 1, 0);
  const s = Math.sin(theta) / theta;
  return new THREE.Vector3(ax * s, Math.cos(theta), -ay * s).normalize();
}

/**
 * Convierte un vector unitario (nx, ny, nz) de `capFrame` a coordenadas planas equidistantes
 * (ax = Este+, ay = Norte+, theta = distancia angular al núcleo urbano).
 */
export function ncCapDirToMap(nx, ny, nz) {
  const sinT = Math.hypot(nx, nz);
  const theta = Math.atan2(sinT, clamp(ny, -1, 1));
  const scale = sinT > 1e-6 ? theta / sinT : 0.0;
  return {
    ax: nx * scale,
    ay: -nz * scale,
    theta,
  };
}

/**
 * Definición oficial de los 7 distritos geográficos de Night City (Planeta 2)
 * con coordenadas cardinales reales en `capFrame`, parámetros de vuelo y atmósfera.
 */
export const NIGHT_CITY_DISTRICTS = [
  {
    id: 'city_center',
    name: 'City Center · Corpo Plaza',
    shortName: 'Corpo Plaza',
    badge: 'NÚCLEO CORPORATIVO',
    color: '#2eb8ff',
    accent: '#ffd068',
    mapAx: 0.02,
    mapAy: 0.0,
    ax: 0.02 * NC_GEO_SCALE,
    ay: 0.0 * NC_GEO_SCALE,
    capDir: ncMapToCapDir(0.02 * NC_GEO_SCALE, 0.0),
    viewAlt: 0.145,
    viewBack: 0.165,
    description:
      'Centro neurálgico con Corpo Plaza, monolitos Neomilitaristas (Arasaka/Militech), torres Neokitsch y hologramas Koi en niebla azul clínica.',
    atmo: {
      fogDay: 0x224a68,
      fogNight: 0x071626,
      fogDusk: 0x481a38,
      fogDensity: 0.0046,
      hemiSky: 0x1e4c70,
      hemiGround: 0x101c2a,
      ambient: 0x10283d,
      localLight: 0x38c8ff,
      localBounce: 0xe6a838,
      bloomCap: 0.50,
    },
  },
  {
    id: 'watson',
    name: 'Watson · Little China / Northside',
    shortName: 'Watson',
    badge: 'MEGAEDIFICIOS Y PUERTO',
    color: '#ff3450',
    accent: '#00e5ff',
    mapAx: -0.05,
    mapAy: 0.34,
    ax: -0.05 * NC_GEO_SCALE,
    ay: 0.34 * NC_GEO_SCALE,
    capDir: ncMapToCapDir(-0.05 * NC_GEO_SCALE, 0.34 * NC_GEO_SCALE),
    viewAlt: 0.125,
    viewBack: 0.145,
    description:
      'Norte de Night City: megaedificios mate H10, bloques apilados en Little China/Kabuki con carteles bajos puntuales y muelles en Northside.',
    atmo: {
      fogDay: 0x2c3648,
      fogNight: 0x110b16,
      fogDusk: 0x52182c,
      fogDensity: 0.0054,
      hemiSky: 0x26384d,
      hemiGround: 0x201016,
      ambient: 0x181c28,
      localLight: 0xff3b58,
      localBounce: 0x1ad6eb,
      bloomCap: 0.50,
    },
  },
  {
    id: 'westbrook',
    name: 'Westbrook · Japantown / North Oak',
    shortName: 'Westbrook',
    badge: 'OCIO Y COLINAS ALTAS',
    color: '#e058ff',
    accent: '#fff0d8',
    mapAx: 0.36,
    mapAy: 0.16,
    ax: 0.36 * NC_GEO_SCALE,
    ay: 0.16 * NC_GEO_SCALE,
    capDir: ncMapToCapDir(0.36 * NC_GEO_SCALE, 0.16 * NC_GEO_SCALE),
    viewAlt: 0.135,
    viewBack: 0.155,
    description:
      'Este metropolitano en 3 niveles: neón selectivo en Japantown, terrazas blancas en Charter Hill y mansiones limpias en North Oak.',
    atmo: {
      fogDay: 0x546e88,
      fogNight: 0x0b1628,
      fogDusk: 0x6b325c,
      fogDensity: 0.0024,
      hemiSky: 0x4c6b8c,
      hemiGround: 0x28202c,
      ambient: 0x243448,
      localLight: 0xe878ff,
      localBounce: 0xffdfa8,
      bloomCap: 0.45,
    },
  },
  {
    id: 'heywood',
    name: 'Heywood · The Glen / Vista del Rey',
    shortName: 'Heywood',
    badge: 'DISTRITO SUR · DORADO',
    color: '#ffb03b',
    accent: '#ffd884',
    mapAx: 0.02,
    mapAy: -0.31,
    ax: 0.02 * NC_GEO_SCALE,
    ay: -0.31 * NC_GEO_SCALE,
    capDir: ncMapToCapDir(0.02 * NC_GEO_SCALE, -0.31 * NC_GEO_SCALE),
    viewAlt: 0.125,
    viewBack: 0.145,
    description:
      'Sur de City Center frente a la bahía: torres escalonadas en The Glen/Wellsprings y tejados bajos cálidos en Vista del Rey.',
    atmo: {
      fogDay: 0x5a4628,
      fogNight: 0x1a1208,
      fogDusk: 0x7a4020,
      fogDensity: 0.0040,
      hemiSky: 0x624e30,
      hemiGround: 0x2c1d0c,
      ambient: 0x2b2012,
      localLight: 0xffb347,
      localBounce: 0xd97e24,
      bloomCap: 0.46,
    },
  },
  {
    id: 'santo_domingo',
    name: 'Santo Domingo · Arroyo / Rancho Coronado',
    shortName: 'Santo Domingo',
    badge: 'INDUSTRIA Y SUBURBIOS',
    color: '#ff7a2e',
    accent: '#9aa0a8',
    mapAx: 0.39,
    mapAy: -0.37,
    ax: 0.39 * NC_GEO_SCALE,
    ay: -0.37 * NC_GEO_SCALE,
    capDir: ncMapToCapDir(0.39 * NC_GEO_SCALE, -0.37 * NC_GEO_SCALE),
    viewAlt: 0.115,
    viewBack: 0.145,
    description:
      'Sureste industrial pesado: complejos fabriles, tuberías y refinerías en Arroyo junto al suburbio cuadriculado de Rancho Coronado sin neón.',
    atmo: {
      fogDay: 0x64442c,
      fogNight: 0x1d1108,
      fogDusk: 0x82441c,
      fogDensity: 0.0056,
      hemiSky: 0x62422c,
      hemiGround: 0x28180e,
      ambient: 0x2c1e14,
      localLight: 0xff8432,
      localBounce: 0x6e4226,
      bloomCap: 0.44,
    },
  },
  {
    id: 'pacifica',
    name: 'Pacifica · Coastview / Dogtown',
    shortName: 'Pacifica',
    badge: 'ZONA EN RUINAS · OSCURA',
    color: '#7e8c9e',
    accent: '#ff5228',
    mapAx: -0.23,
    mapAy: -0.47,
    ax: -0.23 * NC_GEO_SCALE,
    ay: -0.47 * NC_GEO_SCALE,
    capDir: ncMapToCapDir(-0.23 * NC_GEO_SCALE, -0.47 * NC_GEO_SCALE),
    viewAlt: 0.115,
    viewBack: 0.145,
    description:
      'Suroeste costero en penumbra: esqueletos de hoteles sin fachada, noria oxidada, fogatas aisladas y la zona amurallada de Dogtown.',
    atmo: {
      fogDay: 0x28323e,
      fogNight: 0x030508,
      fogDusk: 0x382026,
      fogDensity: 0.0044,
      hemiSky: 0x222c38,
      hemiGround: 0x0b0e12,
      ambient: 0x0f141c,
      localLight: 0x5c6f88,
      localBounce: 0xb8421c,
      bloomCap: 0.34,
    },
  },
  {
    id: 'badlands',
    name: 'Las Badlands · Tierras Baldías',
    shortName: 'Las Badlands',
    badge: 'PERÍMETRO EXTERIOR',
    color: '#c96f3b',
    accent: '#e8c488',
    mapAx: 0.76,
    mapAy: 0.06,
    ax: 0.76 * NC_GEO_SCALE,
    ay: 0.06 * NC_GEO_SCALE,
    capDir: ncMapToCapDir(0.76 * NC_GEO_SCALE, 0.06 * NC_GEO_SCALE),
    viewAlt: 0.125,
    viewBack: 0.155,
    description:
      'Cinturón exterior sin neón: campos petrolíferos al norte, parques eólicos e invernaderos Biotechnica al este y desierto nómada al sur.',
    atmo: {
      fogDay: 0x8a5e3a,
      fogNight: 0x020408,
      fogDusk: 0x9c542c,
      fogDensity: 0.0014,
      hemiSky: 0x8a6444,
      hemiGround: 0x3a2012,
      ambient: 0x342214,
      localLight: 0xdca064,
      localBounce: 0x8a4822,
      bloomCap: 0.30,
    },
  },
];

export const NIGHT_CITY_DISTRICT_MAP = Object.fromEntries(
  NIGHT_CITY_DISTRICTS.map((d) => [d.id, d])
);

function makeCanvas(w, h) {
  if (typeof document === 'undefined') return null;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

function createRadialGlowTexture(innerRgba, midRgba) {
  const c = makeCanvas(64, 64);
  if (!c) return null;
  const ctx = c.getContext?.('2d');
  if (!ctx) return null;
  const g = ctx.createRadialGradient(32, 32, 1, 32, 32, 32);
  g.addColorStop(0.0, innerRgba);
  g.addColorStop(0.4, midRgba);
  g.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

/**
 * Genera 4 texturas 512x512 detalladas puramente difusas (sin emisión):
 * 1) Hormigón brutalista con juntas de encofrado y chorretones de humedad/óxido
 * 2) Paneles modulares terracota/ocre con ventanas oscuras no emisivas
 * 3) Chapa industrial acanalada con extractores y manchas de corrosión
 * 4) Cristal corporativo oscuro reflejante (exclusivo City Center)
 */
function createRealisticFacadeTextureSet() {
  const S = 512;
  const buildTex = (drawFn) => {
    const c = makeCanvas(S, S);
    if (!c) return null;
    const ctx = c.getContext?.('2d');
    if (!ctx) return null;
    drawFn(ctx, S);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
  };

  // 1. Hormigón brutalista con juntas y manchas de humedad/óxido
  const texBrutalistConcrete = buildTex((ctx, sz) => {
    ctx.fillStyle = '#6c7075';
    ctx.fillRect(0, 0, sz, sz);
    for (let y = 0; y < sz; y += 32) {
      for (let x = 0; x < sz; x += 64) {
        const v = Math.floor((hashI(x, y, 7) - 0.5) * 18);
        ctx.fillStyle = `rgb(${102 + v}, ${105 + v}, ${110 + v})`;
        ctx.fillRect(x + 1, y + 1, 62, 30);
      }
      ctx.fillStyle = '#383b40';
      ctx.fillRect(0, y, sz, 2);
      // Agujeros de tirante de encofrado
      ctx.fillStyle = '#2d3034';
      for (let hx = 16; hx < sz; hx += 32) {
        ctx.fillRect(hx, y + 14, 3, 3);
      }
    }
    // Chorretones verticales de humedad y óxido
    for (let s = 0; s < 55; s++) {
      const sx = Math.floor(hashI(s, 11, 3) * sz);
      const sy = Math.floor(hashI(s, 19, 5) * (sz - 96));
      const h = 28 + Math.floor(hashI(s, 23, 9) * 84);
      ctx.fillStyle = s % 3 === 0 ? 'rgba(92, 52, 30, 0.28)' : 'rgba(34, 38, 42, 0.34)';
      ctx.fillRect(sx, sy, 2 + (s % 4), h);
    }
    // Ranuras de ventana oscuras hundidas no emisivas reflejando débilmente el cielo
    for (let wy = 8; wy < sz; wy += 32) {
      for (let wx = 8; wx < sz; wx += 20) {
        if (hashI(wx, wy, 31) > 0.22) {
          ctx.fillStyle = '#1b232d';
          ctx.fillRect(wx, wy, 10, 14);
          ctx.fillStyle = 'rgba(130, 165, 195, 0.14)';
          ctx.fillRect(wx + 1, wy + 1, 8, 5);
        }
      }
    }
  });

  // 2. Paneles modulares terracota / ocre desgastados con marcos de ventana oscuros
  const texTerracottaPanels = buildTex((ctx, sz) => {
    ctx.fillStyle = '#8b5d47';
    ctx.fillRect(0, 0, sz, sz);
    for (let y = 0; y < sz; y += 32) {
      for (let x = 0; x < sz; x += 32) {
        const d = Math.floor((hashI(x, y, 17) - 0.5) * 26);
        ctx.fillStyle = `rgb(${144 + d}, ${95 + Math.floor(d * 0.7)}, ${74 + Math.floor(d * 0.5)})`;
        ctx.fillRect(x + 1, y + 1, 30, 30);
        if (hashI(x, y, 59) > 0.18) {
          ctx.fillStyle = '#181e26';
          ctx.fillRect(x + 6, y + 7, 20, 16);
          ctx.fillStyle = 'rgba(110, 140, 168, 0.15)';
          ctx.fillRect(x + 7, y + 8, 18, 6);
        }
      }
      ctx.fillStyle = '#40342f';
      ctx.fillRect(0, y, sz, 3);
    }
  });

  // 3. Chapa industrial acanalada y tejados metálicos con extractores/tuberías
  const texCorrugatedMetal = buildTex((ctx, sz) => {
    ctx.fillStyle = '#484d54';
    ctx.fillRect(0, 0, sz, sz);
    for (let x = 0; x < sz; x += 8) {
      ctx.fillStyle = x % 16 === 0 ? '#5c636b' : '#353a40';
      ctx.fillRect(x, 0, 4, sz);
    }
    for (let y = 0; y < sz; y += 64) {
      ctx.fillStyle = '#25282c';
      ctx.fillRect(0, y, sz, 3);
    }
    // Parches de óxido y rejillas de ventilación
    for (let i = 0; i < 36; i++) {
      const rx = Math.floor(hashI(i, 4, 13) * (sz - 40));
      const ry = Math.floor(hashI(i, 8, 21) * (sz - 40));
      ctx.fillStyle = i % 2 === 0 ? 'rgba(122, 62, 32, 0.35)' : '#23282e';
      ctx.fillRect(rx, ry, 28, 18);
    }
  });

  // 4. Cristal corporativo oscuro reflejante con parteluces verticales (City Center)
  const texCorporateGlass = buildTex((ctx, sz) => {
    const grad = ctx.createLinearGradient(0, 0, sz, sz);
    grad.addColorStop(0.0, '#101d2b');
    grad.addColorStop(0.5, '#193146');
    grad.addColorStop(1.0, '#0e1924');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, sz, sz);
    for (let x = 0; x < sz; x += 16) {
      ctx.fillStyle = x % 48 === 0 ? '#4e6378' : '#213142';
      ctx.fillRect(x, 0, x % 48 === 0 ? 3 : 1, sz);
    }
    for (let y = 0; y < sz; y += 24) {
      ctx.fillStyle = '#091119';
      ctx.fillRect(0, y, sz, 2);
    }
  });

  return {
    texBrutalistConcrete,
    texTerracottaPanels,
    texCorrugatedMetal,
    texCorporateGlass,
  };
}

/**
 * Une en CPU un conjunto de piezas primitivas `{ geo, pos, rot, scale }` en 1 única
 * geometría no indexada con `position`, `normal` y `uv` uniformes (1 solo draw call en InstancedMesh).
 */
function mergeCompoundParts(parts, boundingSphere = null) {
  const mat4 = new THREE.Matrix4();
  const euler = new THREE.Euler();
  const quat = new THREE.Quaternion();
  const vPos = new THREE.Vector3();
  const vScale = new THREE.Vector3();

  const geos = [];
  for (const p of parts) {
    const raw = p.geo;
    const g = raw.index ? raw.toNonIndexed() : raw.clone();
    if (g.attributes.uv1) g.deleteAttribute('uv1');
    if (g.attributes.color) g.deleteAttribute('color');

    vPos.set(p.pos?.[0] || 0, p.pos?.[1] || 0, p.pos?.[2] || 0);
    euler.set(p.rot?.[0] || 0, p.rot?.[1] || 0, p.rot?.[2] || 0);
    quat.setFromEuler(euler);
    vScale.set(p.scale?.[0] ?? 1, p.scale?.[1] ?? 1, p.scale?.[2] ?? 1);
    mat4.compose(vPos, quat, vScale);
    g.applyMatrix4(mat4);
    geos.push(g);
  }

  const merged = mergeGeometries(geos, false);
  for (const g of geos) g.dispose();
  if (boundingSphere) {
    merged.boundingSphere = boundingSphere;
  } else {
    merged.computeBoundingSphere();
  }
  return merged;
}

/**
 * Construye los 10 arquetipos arquitectónicos compuestos distintos mediante `mergeGeometries`.
 * Cada geometría tiene base en `y = 0` y altura normalizada ~`1.0`.
 */
function buildCityArchetypeGeometries(globalSphere) {
  const box = new THREE.BoxGeometry(1, 1, 1);
  const cyl8 = new THREE.CylinderGeometry(0.5, 0.56, 1, 8);
  const cyl12 = new THREE.CylinderGeometry(0.36, 0.48, 1, 12);
  const cool = new THREE.CylinderGeometry(0.38, 0.65, 1, 10);
  const cylRound = new THREE.CylinderGeometry(0.5, 0.5, 1, 12);

  // 1. Megaedificio Residencial Tipo H10 (Watson / Heywood): contrafuertes, pasarelas y núcleo retranqueado
  const geoH10Megablock = mergeCompoundParts(
    [
      { geo: box, pos: [0, 0.11, 0], scale: [1.04, 0.22, 1.04] },
      { geo: box, pos: [-0.26, 0.56, 0], scale: [0.36, 0.72, 0.86] },
      { geo: box, pos: [0.26, 0.56, 0], scale: [0.36, 0.72, 0.86] },
      { geo: box, pos: [0, 0.52, 0], scale: [0.38, 0.64, 0.52] },
      // Contrafuertes estructurales exteriores
      { geo: box, pos: [-0.48, 0.44, -0.34], scale: [0.10, 0.78, 0.14] },
      { geo: box, pos: [0.48, 0.44, -0.34], scale: [0.10, 0.78, 0.14] },
      { geo: box, pos: [-0.48, 0.44, 0.34], scale: [0.10, 0.78, 0.14] },
      { geo: box, pos: [0.48, 0.44, 0.34], scale: [0.10, 0.78, 0.14] },
      // Pasarelas perimetrales a media altura
      { geo: box, pos: [0, 0.42, 0], scale: [1.08, 0.04, 0.96] },
      { geo: box, pos: [0, 0.72, 0], scale: [1.02, 0.04, 0.92] },
      // Cuarto técnico y extractores en azotea
      { geo: box, pos: [0, 0.96, -0.14], scale: [0.46, 0.10, 0.42] },
      { geo: box, pos: [-0.24, 0.94, 0.22], scale: [0.20, 0.07, 0.22] },
    ],
    globalSphere
  );

  // 2. Bloque Modular de Contenedores / Apartamentos Apilados en Voladizo (Watson / Kabuki)
  const geoStackedContainers = mergeCompoundParts(
    [
      { geo: box, pos: [0, 0.18, 0], scale: [0.78, 0.36, 0.78] },
      { geo: box, pos: [-0.22, 0.46, 0.08], scale: [0.72, 0.26, 0.58] },
      { geo: box, pos: [0.22, 0.64, -0.06], scale: [0.68, 0.28, 0.60] },
      { geo: box, pos: [-0.12, 0.84, 0.02], scale: [0.58, 0.22, 0.54] },
      // Unidades A/C en azotea y doble antena
      { geo: box, pos: [0.14, 0.98, 0.12], scale: [0.18, 0.08, 0.18] },
      { geo: cylRound, pos: [-0.22, 1.09, -0.10], scale: [0.03, 0.28, 0.03] },
      { geo: cylRound, pos: [0.06, 1.07, -0.18], scale: [0.025, 0.22, 0.025] },
    ],
    globalSphere
  );

  // 3. Chabolas y Tejados Bajos de Chapa Inclinada con Pasarela Elevada (Watson bajo / Vista del Rey)
  const geoShantySkybridge = mergeCompoundParts(
    [
      { geo: box, pos: [-0.28, 0.24, 0], scale: [0.46, 0.48, 0.68] },
      { geo: box, pos: [0.28, 0.19, 0.06], scale: [0.44, 0.38, 0.62] },
      // Tejados inclinados de chapa
      { geo: box, pos: [-0.28, 0.50, 0], rot: [0, 0, 0.24], scale: [0.52, 0.06, 0.74] },
      { geo: box, pos: [0.28, 0.40, 0.06], rot: [0.18, 0, -0.20], scale: [0.50, 0.05, 0.68] },
      // Pasarela / puente elevado de hormigón y tubería exterior
      { geo: box, pos: [0.08, 0.58, 0], scale: [1.18, 0.07, 0.22] },
      { geo: cylRound, pos: [-0.15, 0.34, 0.42], rot: [0, 0, Math.PI * 0.5], scale: [0.06, 0.96, 0.06] },
    ],
    globalSphere
  );

  // 4. Grúa Portuaria y Almacén Industrial + Depósito Cilíndrico (Northside / Arasaka Waterfront)
  const geoPortCraneDepot = mergeCompoundParts(
    [
      { geo: box, pos: [-0.14, 0.20, 0], scale: [0.74, 0.40, 1.12] },
      { geo: box, pos: [-0.14, 0.43, -0.22], rot: [0.25, 0, 0], scale: [0.70, 0.08, 0.36] },
      { geo: box, pos: [-0.14, 0.43, 0.22], rot: [0.25, 0, 0], scale: [0.70, 0.08, 0.36] },
      // Depósito químico cilíndrico junto al almacén
      { geo: cylRound, pos: [0.38, 0.26, -0.32], scale: [0.34, 0.52, 0.34] },
      // Grúa torre de celosía inclinada sobre el muelle
      { geo: box, pos: [0.34, 0.44, 0.30], scale: [0.10, 0.88, 0.10] },
      { geo: box, pos: [0.34, 0.90, 0.02], rot: [-0.36, 0, 0], scale: [0.09, 0.08, 0.96] },
    ],
    globalSphere
  );

  // 5. Torre Corporativa Neomilitarista Biselada con Helipuerto (City Center)
  const geoCorpoNeoMilTower = mergeCompoundParts(
    [
      { geo: cyl8, pos: [0, 0.29, 0], rot: [0, Math.PI / 8, 0], scale: [0.92, 0.58, 0.92] },
      { geo: cyl8, pos: [0, 0.69, 0], rot: [0, Math.PI / 8, 0], scale: [0.72, 0.26, 0.72] },
      { geo: box, pos: [-0.42, 0.38, 0], scale: [0.16, 0.76, 0.34] },
      { geo: box, pos: [0.42, 0.38, 0], scale: [0.16, 0.76, 0.34] },
      // Corona helipuerto superior
      { geo: cylRound, pos: [0, 0.86, 0], scale: [0.58, 0.06, 0.58] },
      { geo: cylRound, pos: [0, 0.95, 0], scale: [0.14, 0.14, 0.14] },
    ],
    globalSphere
  );

  // 6. Rascacielos Neokitsch de Cristal Dorado/Azul (Corpo Plaza)
  const geoCorpoNeoKitschTower = mergeCompoundParts(
    [
      { geo: cyl12, pos: [0, 0.44, 0], scale: [0.82, 0.88, 0.66] },
      { geo: cyl12, pos: [0, 0.56, 0], scale: [0.96, 0.08, 0.80] },
      { geo: box, pos: [-0.14, 0.96, 0], scale: [0.10, 0.24, 0.24] },
      { geo: cylRound, pos: [0.12, 1.02, 0], scale: [0.06, 0.34, 0.06] },
    ],
    globalSphere
  );

  // 7. Torre Escalonada de Terrazas Claras (Charter Hill / Heywood The Glen)
  const geoCharterTerraceTower = mergeCompoundParts(
    [
      { geo: box, pos: [0, 0.16, 0], scale: [0.96, 0.32, 0.92] },
      { geo: box, pos: [-0.08, 0.45, -0.05], scale: [0.76, 0.28, 0.74] },
      { geo: box, pos: [-0.14, 0.70, -0.10], scale: [0.56, 0.24, 0.56] },
      { geo: box, pos: [0.18, 0.34, 0.24], scale: [0.34, 0.05, 0.28] },
      { geo: box, pos: [-0.14, 0.86, -0.10], scale: [0.46, 0.06, 0.46] },
    ],
    globalSphere
  );

  // 8. Mansión Moderna con Plataforma y Helipuerto (North Oak)
  const geoNorthOakMansion = mergeCompoundParts(
    [
      { geo: box, pos: [0, 0.12, 0], scale: [1.38, 0.24, 0.88] },
      { geo: box, pos: [-0.22, 0.42, -0.10], scale: [0.94, 0.36, 0.52] },
      { geo: box, pos: [0.28, 0.36, 0.18], scale: [0.58, 0.24, 0.46] },
      { geo: cylRound, pos: [0.48, 0.26, -0.26], scale: [0.46, 0.06, 0.46] },
    ],
    globalSphere
  );

  // 9. Complejo Fabril con Chimeneas, Torres Hiperbólicas y Tuberías (Arroyo)
  const geoArroyoFactory = mergeCompoundParts(
    [
      { geo: box, pos: [-0.16, 0.18, 0], scale: [0.92, 0.36, 0.72] },
      { geo: cool, pos: [0.36, 0.34, -0.24], scale: [0.48, 0.68, 0.48] },
      { geo: cylRound, pos: [0.36, 0.48, 0.24], scale: [0.14, 0.96, 0.14] },
      { geo: cylRound, pos: [0.08, 0.45, 0.32], scale: [0.12, 0.90, 0.12] },
      { geo: cylRound, pos: [0.12, 0.38, 0], rot: [0, 0, Math.PI * 0.5], scale: [0.07, 0.64, 0.07] },
    ],
    globalSphere
  );

  // 10A. Casa Prefabricada Suburbial (Rancho Coronado)
  const geoRanchoHouse = mergeCompoundParts(
    [
      { geo: box, pos: [-0.08, 0.30, 0], scale: [0.84, 0.60, 0.72] },
      { geo: box, pos: [0.36, 0.24, 0.14], scale: [0.38, 0.48, 0.48] },
      { geo: box, pos: [-0.08, 0.64, 0.18], rot: [0.12, 0, 0], scale: [0.92, 0.08, 0.94] },
      { geo: box, pos: [-0.24, 0.74, -0.14], scale: [0.22, 0.12, 0.22] },
    ],
    globalSphere
  );

  // 10B. Ruina Esquelética Inacabada con Pilares y Forjados Sin Cerrar (Pacifica / Dogtown)
  const geoPacificaSkeleton = mergeCompoundParts(
    [
      { geo: box, pos: [-0.42, 0.50, -0.38], scale: [0.11, 1.0, 0.11] },
      { geo: box, pos: [0.42, 0.50, -0.38], scale: [0.11, 1.0, 0.11] },
      { geo: box, pos: [-0.42, 0.50, 0.38], scale: [0.11, 1.0, 0.11] },
      { geo: box, pos: [0.42, 0.50, 0.38], scale: [0.11, 1.0, 0.11] },
      { geo: box, pos: [0, 0.18, 0], scale: [0.92, 0.06, 0.84] },
      { geo: box, pos: [0, 0.40, 0], scale: [0.92, 0.06, 0.84] },
      { geo: box, pos: [0, 0.62, 0], scale: [0.92, 0.06, 0.84] },
      { geo: box, pos: [0, 0.84, 0], scale: [0.86, 0.06, 0.78] },
      { geo: box, pos: [0.12, 0.96, 0], scale: [0.32, 0.18, 0.28] },
    ],
    globalSphere
  );

  // Geometría compuesta de puente sobre Bahía Del Coronado
  const geoBayBridge = mergeCompoundParts(
    [
      { geo: box, pos: [0, 0.5, 0], scale: [1.0, 0.14, 1.0] },
      { geo: box, pos: [-0.42, 0.0, 0], scale: [0.14, 1.4, 0.14] },
      { geo: box, pos: [0.42, 0.0, 0], scale: [0.14, 1.4, 0.14] },
    ],
    globalSphere
  );

  // Micro-ventanas aisladas muy discretas por fachada
  const geoMicroWindow = mergeCompoundParts(
    [
      { geo: box, pos: [0, 0.22, 0.51], scale: [0.16, 0.04, 0.02] },
      { geo: box, pos: [0.18, 0.48, -0.51], scale: [0.14, 0.035, 0.02] },
      { geo: box, pos: [-0.51, 0.66, 0.12], scale: [0.02, 0.035, 0.14] },
    ],
    globalSphere
  );

  // Geometría compuesta del dirigible publicitario AV_Blimp
  const geoBlimpHull = mergeCompoundParts(
    [
      { geo: cyl12, pos: [0, 0, 0], rot: [Math.PI * 0.5, 0, 0], scale: [0.42, 1.65, 0.34] },
      { geo: box, pos: [0, -0.22, 0], scale: [0.16, 0.14, 0.76] },
      { geo: box, pos: [0, 0.16, -0.68], scale: [0.04, 0.30, 0.28] },
      { geo: box, pos: [0, 0, -0.68], scale: [0.48, 0.04, 0.26] },
    ],
    globalSphere
  );

  box.dispose();
  cyl8.dispose();
  cyl12.dispose();
  cool.dispose();
  cylRound.dispose();

  return {
    geoH10Megablock,
    geoStackedContainers,
    geoShantySkybridge,
    geoPortCraneDepot,
    geoCorpoNeoMilTower,
    geoCorpoNeoKitschTower,
    geoCharterTerraceTower,
    geoNorthOakMansion,
    geoArroyoFactory,
    geoRanchoHouse,
    geoPacificaSkeleton,
    geoBayBridge,
    geoMicroWindow,
    geoBlimpHull,
  };
}

/**
 * Calcula la línea de costa de la Bahía Del Coronado y el Océano Pacífico occidental.
 */
export function sampleShorelineX(ay, jitter = 0) {
  let shore = -0.24;
  if (ay > 0.26) {
    shore = -0.34 - sstep(0.28, 0.72, ay) * 0.24;
  } else if (ay > -0.20) {
    const penin = Math.exp(-Math.pow(ay / 0.14, 2.0)) * 0.085;
    shore = -0.235 + penin;
  } else {
    shore = -0.23 - sstep(-0.26, -0.58, ay) * 0.26;
  }
  return shore + jitter * 0.035;
}

/**
 * Evalúa la geografía real de los 7 distritos y costa oceánica sobre cualquier punto (nx, ny, nz) de `capFrame`.
 */
export function sampleNightCitySurface(nx, ny, nz) {
  const raw = ncCapDirToMap(nx, ny, nz);
  const ax = raw.ax / NC_GEO_SCALE;
  const ay = raw.ay / NC_GEO_SCALE;
  const theta = raw.theta / NC_GEO_SCALE;
  const fScale = 1.0 / NC_GEO_SCALE;
  const warpX = fbm(nx * 5.2 * fScale + 2.1, ny * 5.2 * fScale, nz * 5.2 * fScale, 3) * 0.045;
  const warpY = fbm(nx * 5.2 * fScale - 3.7, ny * 5.2 * fScale + 1.4, nz * 5.2 * fScale, 3) * 0.045;
  const wx = ax + warpX * 0.45;
  const wy = ay + warpY * 0.45;
  const rUrban = Math.hypot(wx, wy);

  const coastJitter = vnoise(nx * 14.0 * fScale + 1.2, ny * 14.0 * fScale, nz * 14.0 * fScale);
  const shoreX = sampleShorelineX(ay, coastJitter);
  const distToShore = ax - shoreX;

  const canalN =
    ax < 0.04
      ? Math.exp(-Math.pow((ay - 0.195) / 0.022, 2.0)) * sstep(0.05, -0.14, ax)
      : 0.0;
  const canalS =
    ax < 0.05
      ? Math.exp(-Math.pow((ay + 0.195) / 0.022, 2.0)) * sstep(0.06, -0.14, ax)
      : 0.0;
  const isBayChannel = Math.max(canalN, canalS) > 0.48;
  const isOcean = distToShore < 0.0 || isBayChannel;
  const coastSignedDist = Math.min(distToShore, isBayChannel ? -0.02 : 1.0);
  const coastBlend = sstep(-0.025, 0.025, coastSignedDist);

  const ellipseR = Math.hypot(wx * 0.92, wy * 0.95);
  const metroEdge = 0.565 + coastJitter * 0.032;

  let district = 'city_center';
  let subzone = 'corpo_plaza';

  if (isOcean) {
    district = ay < -0.35 && ax > -0.58 ? 'pacifica' : ax > -0.30 && ay > 0.18 ? 'watson' : 'city_center';
    subzone = 'ocean_bay';
  } else if (ellipseR >= metroEdge || theta >= 0.62) {
    district = 'badlands';
    if (ay > 0.34) subzone = 'oilfields';
    else if (ay > -0.32 && ax > 0.25) subzone = 'eastern_plains';
    else subzone = 'southern_desert';
  } else if (rUrban < 0.215 && ax >= shoreX) {
    district = 'city_center';
    subzone = rUrban < 0.11 ? 'corpo_plaza' : 'downtown';
  } else if (ay >= 0.19 && ax < 0.22 + (ay - 0.19) * 0.22) {
    district = 'watson';
    if (ay > 0.39 || ax < shoreX + 0.11) subzone = 'northside_port';
    else if (ax > 0.03) subzone = 'kabuki';
    else subzone = 'little_china';
  } else if (ax >= 0.16 && ay > -0.23) {
    district = 'westbrook';
    if (ax < 0.34 && ay > -0.06 && ay < 0.26) subzone = 'japantown';
    else if (ay <= 0.06) subzone = 'charter_hill';
    else subzone = 'north_oak';
  } else if (ay <= -0.37 && ax < 0.12) {
    district = 'pacifica';
    subzone = ax > -0.06 && ay > -0.51 ? 'dogtown' : 'coastview';
  } else if (ay <= -0.19 && ax < 0.22) {
    district = 'heywood';
    subzone = ax < -0.02 ? 'wellsprings' : ay > -0.33 ? 'the_glen' : 'vista_del_rey';
  } else {
    district = 'santo_domingo';
    subzone = ay > -0.36 ? 'arroyo' : 'rancho_coronado';
  }

  let elevationRatio = 0.0;
  if (isOcean) {
    const seaT = sstep(0.0, -0.12, coastSignedDist);
    elevationRatio = (-0.0022 - 0.0045 * seaT) * 0.25;
  } else {
    const noDist = Math.hypot((ax - 0.42) / 0.17, (ay - 0.28) / 0.16);
    const northOakHill = Math.max(0, 1.0 - noDist * noDist);
    const hillFactor = sstep(0.0, 0.85, northOakHill);

    const innerFade = sstep(0.55, 0.65, theta);
    const outerFade = 1.0 - sstep(0.99, 1.08, theta);
    const badMask = innerFade * outerFade;
    const ridge = 1.0 - Math.abs(vnoise(nx * 14.0 * fScale + 3.1, ny * 14.0 * fScale, nz * 14.0 * fScale - 2.7));
    const dunes = fbm(nx * 7.5 * fScale - 4.2, ny * 7.5 * fScale + 1.1, nz * 7.5 * fScale + 5.8, 4);
    const mesa = Math.max(0.0, dunes + 0.15) * (0.45 + 0.85 * Math.pow(ridge, 2.2));
    const badlandsElev = (-0.0014 + 0.014 * mesa) * badMask;

    elevationRatio = (hillFactor * 0.0155 + badlandsElev) * 0.34;
  }

  const weights = {};
  let wSum = 0;
  for (const d of NIGHT_CITY_DISTRICTS) {
    const dAx = d.mapAx ?? d.ax / NC_GEO_SCALE;
    const dAy = d.mapAy ?? d.ay / NC_GEO_SCALE;
    const distSq = (ax - dAx) * (ax - dAx) + (ay - dAy) * (ay - dAy);
    const sigma = d.id === 'badlands' ? 0.18 : 0.055;
    let w = Math.exp(-distSq / sigma);
    if (d.id === district) w += 1.45;
    if (d.id === 'badlands' && theta > 0.60 && !isOcean) w += 1.65;
    weights[d.id] = w;
    wSum += w;
  }
  for (const d of NIGHT_CITY_DISTRICTS) {
    weights[d.id] /= Math.max(1e-5, wSum);
  }

  return {
    ax: raw.ax,
    ay: raw.ay,
    theta: raw.theta,
    mapAx: ax,
    mapAy: ay,
    mapTheta: theta,
    isOcean,
    isBayChannel,
    coastBlend,
    coastSignedDist,
    district,
    subzone,
    elevationRatio,
    weights,
  };
}

export function sampleBadlandsElevation(nx, ny, nz, _theta, localRadius) {
  return sampleNightCitySurface(nx, ny, nz).elevationRatio * localRadius;
}

function placeDummyOnSphere(dummy, normal, radius, yaw, sx, sy, sz) {
  dummy.position.copy(normal).multiplyScalar(radius);
  dummy.quaternion.setFromUnitVectors(UP_Y, normal);
  if (yaw !== 0) dummy.rotateY(yaw);
  dummy.scale.set(sx, sy, sz);
  dummy.updateMatrix();
}

/**
 * Construye el sistema arquitectónico y geográfico completo de Night City (Planeta 2) a 60 FPS:
 * - Materiales exteriores 100% PBR mate (`emissiveIntensity === 0`) con 4 texturas 512x512 + `setColorAt`
 * - 10+ arquetipos arquitectónicos compuestos con `mergeGeometries` en `InstancedMesh`
 * - Jerarquía real de alturas (90-160m City Center -> 45-85m Watson -> 20-45m Heywood -> 4-14m suburbios)
 * - Neones concentrados en Corpo Plaza / Japantown, <= 22 carteles bajos en Watson, 0 neón en Santo Domingo/Pacifica
 * - 3 dirigibles publicitarios lentos `AV_Blimp` patrullando la frontera entre Watson y City Center
 */
export function createNightCityZonedOutskirts(cfg) {
  const R = cfg.localRadius; // Radio planetario escalado (p.ej. 6.816 en escala 4.8x)
  const R_REF = 1.42; // Referencia 1:1 para alturas/anchuras de edificios y props
  const group = new THREE.Group();
  group.name = 'NightCity_7Districts_Arch_Group';

  const dummy = new THREE.Object3D();
  const norm = new THREE.Vector3();
  const tmpColor = new THREE.Color();
  const globalSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), R * 1.28);

  const {
    texBrutalistConcrete,
    texTerracottaPanels,
    texCorrugatedMetal,
    texCorporateGlass,
  } = createRealisticFacadeTextureSet();

  const geos = buildCityArchetypeGeometries(globalSphere);

  // =========================================================================================
  // 1. MALLA DE TERRENO COSTERO, BAHÍA DEL CORONADO, NORTH OAK Y LAS BADLANDS
  // =========================================================================================
  const tSegTheta = 58;
  const tSegPhi = 112;
  const tVertCount = (tSegTheta + 1) * (tSegPhi + 1);
  const tPositions = new Float32Array(tVertCount * 3);
  const tColors = new Float32Array(tVertCount * 3);
  const tIndices = [];

  for (let it = 0; it <= tSegTheta; it++) {
    const theta = (it / tSegTheta) * (1.08 * NC_GEO_SCALE);
    const st = Math.sin(theta);
    const ct = Math.cos(theta);
    for (let ip = 0; ip <= tSegPhi; ip++) {
      const phi = (ip / tSegPhi) * Math.PI * 2;
      const nx = st * Math.cos(phi);
      const ny = ct;
      const nz = st * Math.sin(phi);

      const s = sampleNightCitySurface(nx, ny, nz);
      const edgeDrop = sstep(1.04, 1.08, s.mapTheta) * -0.0004;
      const rOffset = s.isOcean ? 0.00014 : 0.00024 + Math.max(-0.0001, s.elevationRatio);
      const r = R * (1.0 + rOffset + edgeDrop);
      const vIdx = it * (tSegPhi + 1) + ip;
      tPositions[vIdx * 3] = nx * r;
      tPositions[vIdx * 3 + 1] = ny * r;
      tPositions[vIdx * 3 + 2] = nz * r;

      const grain = vnoise(nx * 24.0 + 2.0, ny * 24.0, nz * 24.0) * 0.5 + 0.5;
      let cr = 0.055;
      let cg = 0.062;
      let cb = 0.075;

      if (s.isOcean) {
        cr = 0.014;
        cg = 0.036 + grain * 0.015;
        cb = 0.064 + grain * 0.024;
      } else if (s.district === 'badlands') {
        if (s.subzone === 'oilfields') {
          cr = 0.07 + grain * 0.04;
          cg = 0.065 + grain * 0.03;
          cb = 0.06 + grain * 0.025;
        } else {
          const craggy = clamp(s.elevationRatio / 0.004, 0, 1);
          cr = 0.24 + grain * 0.13 + craggy * 0.10;
          cg = 0.12 + grain * 0.055 + craggy * 0.04;
          cb = 0.075 + grain * 0.03;
        }
      } else if (s.district === 'westbrook' && s.subzone === 'north_oak') {
        cr = 0.095 + grain * 0.045;
        cg = 0.155 + grain * 0.075;
        cb = 0.085 + grain * 0.035;
      } else if (s.district === 'pacifica') {
        cr = 0.062 + grain * 0.032;
        cg = 0.062 + grain * 0.032;
        cb = 0.068 + grain * 0.032;
      } else if (s.district === 'santo_domingo') {
        cr = 0.095 + grain * 0.04;
        cg = 0.075 + grain * 0.035;
        cb = 0.062 + grain * 0.025;
      } else if (s.district === 'heywood') {
        cr = 0.082 + grain * 0.03;
        cg = 0.076 + grain * 0.025;
        cb = 0.065 + grain * 0.02;
      } else {
        cr = 0.044 + grain * 0.022;
        cg = 0.050 + grain * 0.024;
        cb = 0.064 + grain * 0.028;
      }

      tColors[vIdx * 3] = cr;
      tColors[vIdx * 3 + 1] = cg;
      tColors[vIdx * 3 + 2] = cb;
    }
  }

  for (let it = 0; it < tSegTheta; it++) {
    for (let ip = 0; ip < tSegPhi; ip++) {
      const a = it * (tSegPhi + 1) + ip;
      const b = a + (tSegPhi + 1);
      tIndices.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }

  const terrainGeo = new THREE.BufferGeometry();
  terrainGeo.setAttribute('position', new THREE.BufferAttribute(tPositions, 3));
  terrainGeo.setAttribute('color', new THREE.BufferAttribute(tColors, 3));
  const tUvs = new Float32Array(tVertCount * 2);
  for (let it = 0; it <= tSegTheta; it++) {
    for (let ip = 0; ip <= tSegPhi; ip++) {
      const vIdx = it * (tSegPhi + 1) + ip;
      tUvs[vIdx * 2] = (ip / tSegPhi) * 6.0;
      tUvs[vIdx * 2 + 1] = (it / tSegTheta) * 4.0;
    }
  }
  terrainGeo.setAttribute('uv', new THREE.BufferAttribute(tUvs, 2));
  terrainGeo.setIndex(tIndices);
  terrainGeo.computeVertexNormals();
  terrainGeo.boundingSphere = globalSphere;

  const pbrTerrain = getOrganicTerrainPbrSet();
  const pbrAsphalt = getAsphaltPbrSet();
  const pbrConcrete = getBrutalistConcretePbrSet();
  const pbrRock = getRockBasaltPbrSet();

  const terrainMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughnessMap: pbrTerrain.roughnessMap,
    bumpMap: pbrTerrain.bumpMap,
    bumpScale: 0.045,
    roughness: 0.92,
    metalness: 0.05,
  });
  const terrainSplatUniforms = applyTerrainSplattingShader(terrainMat, {
    mode: 'badlands',
    worldRadius: R * 157.5,
    peakStart: 3.0,
    peakEnd: 8.5,
    shoreBand: 0.55,
  });

  const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
  terrainMesh.name = 'NC_7Districts_Coastal_Terrain';
  terrainMesh.userData.splatUniforms = terrainSplatUniforms;
  terrainMesh.frustumCulled = false;
  terrainMesh.castShadow = false;
  terrainMesh.receiveShadow = false;
  group.add(terrainMesh);

  // =========================================================================================
  // 2. MATERIALES PBR MATE (EMISSIVE = 0 FUERA DE CORPO PLAZA / JAPANTOWN) + HDR SELECTIVO
  // =========================================================================================
  const makeMatteFacadeMat = (tex, roughness = 0.88, metalness = 0.14, pbrOverride = pbrConcrete) => {
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: tex,
      roughnessMap: pbrOverride?.roughnessMap || null,
      bumpMap: pbrOverride?.bumpMap || null,
      bumpScale: 0.032,
      emissive: new THREE.Color(0x000000),
      emissiveMap: null,
      emissiveIntensity: 0,
      roughness,
      metalness,
    });
    mat.userData.outsideCityCenterMatte = true;
    return mat;
  };

  // Todos los exteriores usan strictly emissiveIntensity === 0 y roughness [0.82 .. 0.94]
  const h10Mat = makeMatteFacadeMat(texTerracottaPanels, 0.88, 0.12);
  const stackedMat = makeMatteFacadeMat(texBrutalistConcrete, 0.90, 0.14);
  const shantyMat = makeMatteFacadeMat(texCorrugatedMetal, 0.84, 0.28);
  const portMat = makeMatteFacadeMat(texCorrugatedMetal, 0.85, 0.32);
  const terraceMat = makeMatteFacadeMat(texBrutalistConcrete, 0.86, 0.12);
  const northOakMat = makeMatteFacadeMat(texBrutalistConcrete, 0.82, 0.15);
  const arroyoMat = makeMatteFacadeMat(texCorrugatedMetal, 0.90, 0.24);
  const ranchoMat = makeMatteFacadeMat(texTerracottaPanels, 0.92, 0.06);
  const pacificaMat = makeMatteFacadeMat(texBrutalistConcrete, 0.94, 0.08);
  const turbineMat = makeMatteFacadeMat(null, 0.82, 0.35);
  const rockMat = makeMatteFacadeMat(null, 0.94, 0.04, pbrRock);

  // Materiales exclusivos de City Center (Cristal reflejante + Neomilitarista mate/metálico con PBR)
  const corpoNeoMilMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: texBrutalistConcrete,
    roughnessMap: pbrConcrete.roughnessMap,
    bumpMap: pbrConcrete.bumpMap,
    bumpScale: 0.028,
    emissive: new THREE.Color(0x000000),
    emissiveIntensity: 0,
    roughness: 0.62,
    metalness: 0.45,
  });
  const corpoGlassMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: texCorporateGlass,
    roughnessMap: pbrAsphalt.roughnessMap,
    bumpMap: pbrConcrete.bumpMap,
    bumpScale: 0.015,
    emissive: new THREE.Color(0x4a82a8),
    emissiveIntensity: 0.18,
    roughness: 0.24,
    metalness: 0.82,
  });

  // Invernaderos Biotechnica (blanco suave sin HDR)
  const greenhouseMat = new THREE.MeshStandardMaterial({
    color: 0xcfe0de,
    emissive: new THREE.Color(0x88b4aa),
    emissiveIntensity: 0.18,
    roughness: 0.42,
    metalness: 0.08,
  });

  // Subconjunto aislado (<8% Watson/Heywood, 3% Santo Domingo, 0% Pacifica) de micro-ventanas <= 0.35 (sin Bloom)
  const microWinMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: new THREE.Color(0xffe0b2),
    emissiveIntensity: 0.30,
    roughness: 0.9,
  });
  microWinMat.userData.animatedEmissive = true;
  microWinMat.userData.nightTier = 'microwindow';

  // Héroes HDR selectivos [1.3 .. 1.9] (sin superar nunca 2.0)
  const heroMats = [];
  const makeHeroNeonMat = (hex, intensity, extra = {}) => {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color(hex),
      emissive: new THREE.Color(hex),
      emissiveIntensity: clamp(intensity, 1.3, 1.9),
      roughness: 0.25,
      metalness: 0.1,
      ...extra,
    });
    m.userData.baseEmissive = clamp(intensity, 1.3, 1.9);
    m.userData.nightTier = 'hero';
    m.userData.animatedEmissive = true;
    heroMats.push(m);
    return m;
  };
  const watsonRedNeonMat = makeHeroNeonMat('#ff223d', 1.65);
  const watsonCyanNeonMat = makeHeroNeonMat('#00e5ff', 1.58);
  const japantownNeonMat = makeHeroNeonMat('#ff2eb8', 1.62);
  const corpoBeamMat = makeHeroNeonMat('#30b8ff', 1.55, { transparent: true, opacity: 0.48, depthWrite: false });
  const flareTipMat = makeHeroNeonMat('#ff7a1f', 1.78);
  const blimpBannerMat = makeHeroNeonMat('#ff3b6c', 1.52);

  // =========================================================================================
  // 3. RECOLECCIÓN Y JERARQUÍA DE ALTURAS (City Center -> Watson -> Heywood -> Suburbios)
  // =========================================================================================
  const buckets = {
    h10: [],
    stacked: [],
    shanty: [],
    port: [],
    corpoMil: [],
    corpoKitsch: [],
    terrace: [],
    northOak: [],
    arroyo: [],
    rancho: [],
    pacifica: [],
    bridges: [],
    rocks: [],
    pumpBases: [],
    greenhouses: [],
    turbMasts: [],
    nomads: [],
    microWin: [],
    watsonNeonRed: [],
    watsonNeonCyan: [],
    japantownNeon: [],
    corpoBeams: [],
    arroyoFlares: [],
  };

  const turbines = [];
  const oilPumpjacks = [];
  const streetlampAmber = [];
  const refineryFlareCoords = [];
  const campfireCoords = [];
  const northOakWarmCoords = [];
  const smokeCenters = [];
  const smokePositions = [];

  const pushInst = (bucket, normal, radius, yaw, sx, sy, sz, tintColor) => {
    placeDummyOnSphere(dummy, normal, radius, yaw, sx, sy, sz);
    bucket.push({ matrix: dummy.matrix.clone(), color: tintColor.clone() });
  };

  let seedCounter = 1;
  const sampleDistrictPoints = (filterFn, targetCount, stepScale = 1.0) => {
    const out = [];
    for (let k = 0; k < targetCount * 6 && out.length < targetCount; k++) {
      seedCounter++;
      const ax = (hashI(seedCounter, 3, 17) * 2 - 1) * 0.72 * NC_GEO_SCALE * stepScale;
      const ay = (hashI(seedCounter, 7, 31) * 2 - 1) * 0.72 * NC_GEO_SCALE * stepScale;
      const dir = ncMapToCapDir(ax, ay);
      const s = sampleNightCitySurface(dir.x, dir.y, dir.z);
      if (filterFn(s)) out.push({ dir, s, i: out.length });
    }
    return out;
  };

  // Paletas mates de intemperie para variación por instancia (`setColorAt`)
  const pickTint = (palette, idx, jitter = 0.08) => {
    tmpColor.setHex(palette[idx % palette.length]);
    const j = (hashI(idx, 19, 37) - 0.5) * jitter;
    tmpColor.offsetHSL(j * 0.15, j * 0.25, j);
    return tmpColor;
  };

  // --- DISTRITO 1: CITY CENTER (Torres colosales 90-160m -> R_REF * 0.072..0.128) ---
  const ccPts = sampleDistrictPoints(
    (s) => !s.isOcean && s.district === 'city_center' && Math.hypot(s.mapAx, s.mapAy) > 0.078,
    130,
    0.34
  );
  for (const { dir, i } of ccPts) {
    const h = R_REF * (0.072 + 0.056 * Math.pow(hashI(i, 13, 29), 1.15)); // 90-160m prop. 1:1
    const w = R_REF * (0.009 + 0.009 * hashI(i, 5, 19));
    if (i % 2 === 0) {
      pushInst(
        buckets.corpoMil,
        dir,
        R * 1.00015,
        hashI(i, 2, 5) * Math.PI * 0.5,
        w * 1.1,
        h,
        w * 1.1,
        pickTint([0x363d47, 0x454c54, 0x2a3038], i)
      );
    } else {
      pushInst(
        buckets.corpoKitsch,
        dir,
        R * 1.00015,
        hashI(i, 4, 7) * Math.PI,
        w * 0.95,
        h * 1.06,
        w * 0.95,
        pickTint([0x5a7e9e, 0x8d7652, 0x3b6380], i)
      );
    }
    // Haces verticales luminosos y cartelería HDR exclusivos de Corpo Plaza
    if (i % 7 === 0 && buckets.corpoBeams.length < 18) {
      pushInst(
        buckets.corpoBeams,
        dir,
        R * 1.0002 + h * 0.45,
        0,
        R_REF * 0.0018,
        h * 0.65,
        R_REF * 0.0018,
        tmpColor.setHex(i % 14 === 0 ? 0xffc65c : 0x32c8ff)
      );
    }
  }

  // --- DISTRITO 2: WATSON (Megaedificios 45-85m, Contenedores apilados, Chabolas 4-14m, Puerto Northside) ---
  const watsonPts = sampleDistrictPoints(
    (s) => !s.isOcean && s.district === 'watson' && (s.subzone === 'little_china' || s.subzone === 'kabuki'),
    410,
    0.85
  );
  for (const { dir, s, i } of watsonPts) {
    const yaw = hashI(i, 1, 7) * Math.PI;
    if (i % 5 === 0) {
      // 1. Megaedificio Residencial Tipo H10 (45-85m -> R_REF * 0.036 .. 0.068)
      const w = R_REF * (0.011 + 0.006 * hashI(i, 3, 13));
      const h = R_REF * (0.042 + 0.026 * hashI(i, 9, 3));
      pushInst(
        buckets.h10,
        dir,
        R * 1.00015,
        yaw,
        w,
        h,
        w,
        pickTint([0x8c5b46, 0x6b6f75, 0x997c52, 0x736258], i)
      );
      if (i % 65 === 0) {
        // Menos del 8% de edificios con micro-ventanas sutiles no-bloom
        pushInst(buckets.microWin, dir, R * 1.00015, yaw, w, h, w, pickTint([0xffd394, 0xa8d4f0], i, 0.02));
      }
    } else if (i % 3 === 1 || s.subzone === 'little_china') {
      // 2. Bloque Modular Apilado / Voladizos (32-62m)
      const w = R_REF * (0.008 + 0.005 * hashI(i, 5, 19));
      const h = R_REF * (0.028 + 0.024 * hashI(i, 7, 11));
      pushInst(
        buckets.stacked,
        dir,
        R * 1.00015,
        yaw,
        w,
        h,
        w,
        pickTint([0x7a7d82, 0x946a54, 0x626b70, 0x857862], i)
      );
      if (i % 45 === 1) {
        pushInst(buckets.microWin, dir, R * 1.00015, yaw, w, h, w, pickTint([0xffca82, 0x96c4e8], i, 0.02));
      }
    } else {
      // 3. Chabolas y Tejados Bajos de Chapa con Pasarelas Elevadas en Kabuki (4-14m -> R_REF * 0.005 .. 0.012)
      const w = R_REF * (0.007 + 0.005 * hashI(i, 4, 9));
      const h = R_REF * (0.005 + 0.0065 * hashI(i, 12, 17));
      pushInst(
        buckets.shanty,
        dir,
        R * 1.00015,
        yaw,
        w,
        h,
        w,
        pickTint([0x6e6963, 0x5c646b, 0x7a5c4a], i)
      );
    }

    // Carteles verticales callejeros MUY puntuales a baja altura en Watson: ESTRICTAMENTE < 25 totales (máx 21)
    if (i % 19 === 0 && buckets.watsonNeonRed.length + buckets.watsonNeonCyan.length < 21) {
      const nNorm = dir.clone().add(new THREE.Vector3(0.001, 0, -0.0007)).normalize();
      const targetNeon = i % 38 === 0 ? buckets.watsonNeonRed : buckets.watsonNeonCyan;
      pushInst(
        targetNeon,
        nNorm,
        R * 1.0002 + R_REF * 0.005,
        yaw,
        R_REF * 0.0011,
        R_REF * (0.009 + 0.005 * hashI(i, 2, 11)),
        R_REF * 0.0026,
        tmpColor.setHex(0xffffff)
      );
    }
  }

  // Northside Port & Arasaka Waterfront (Grúas portuarias y almacenes mate sin neón)
  const northsidePts = sampleDistrictPoints(
    (s) => !s.isOcean && s.district === 'watson' && s.subzone === 'northside_port',
    145,
    0.92
  );
  for (const { dir, i } of northsidePts) {
    const w = R_REF * (0.014 + 0.014 * hashI(i, 4, 21));
    const h = R_REF * (0.012 + 0.014 * hashI(i, 8, 13));
    pushInst(
      buckets.port,
      dir,
      R * 1.00015,
      hashI(i, 6, 9) * Math.PI * 0.5,
      w,
      h,
      w,
      pickTint([0x5a6068, 0x6e4f42, 0x454b52], i)
    );
  }

  // --- DISTRITO 3: WESTBROOK (Japantown neón selectivo + Charter Hill terrazas blancas + North Oak mansiones) ---
  const japantownPts = sampleDistrictPoints(
    (s) => !s.isOcean && s.district === 'westbrook' && s.subzone === 'japantown',
    185,
    0.72
  );
  for (const { dir, s, i } of japantownPts) {
    const baseR = R * (1.00015 + s.elevationRatio);
    const w = R_REF * (0.008 + 0.006 * hashI(i, 5, 31));
    const h = R_REF * (0.022 + 0.028 * Math.pow(hashI(i, 12, 7), 1.2));
    const yaw = hashI(i, 3, 21) * Math.PI;
    pushInst(
      buckets.stacked,
      dir,
      baseR,
      yaw,
      w,
      h,
      w,
      pickTint([0x666a78, 0x7d6572, 0x525866], i)
    );
    if (i % 7 === 0 && buckets.japantownNeon.length < 28) {
      pushInst(
        buckets.japantownNeon,
        dir,
        baseR + h * 0.25,
        yaw,
        R_REF * 0.0014,
        h * 0.42,
        R_REF * 0.0034,
        tmpColor.setHex(0xffffff)
      );
    }
  }

  const charterPts = sampleDistrictPoints(
    (s) => !s.isOcean && s.district === 'westbrook' && s.subzone === 'charter_hill',
    155,
    0.85
  );
  for (const { dir, s, i } of charterPts) {
    const baseR = R * (1.00015 + s.elevationRatio);
    const w = R_REF * (0.010 + 0.007 * hashI(i, 2, 11));
    const h = R_REF * (0.018 + 0.022 * hashI(i, 13, 5)); // 20-45m prop.
    pushInst(
      buckets.terrace,
      dir,
      baseR,
      hashI(i, 4, 2) * Math.PI * 0.5,
      w,
      h,
      w,
      pickTint([0xd2d6dc, 0xbec5cc, 0xdfe2e6], i, 0.04)
    );
  }

  const northOakPts = sampleDistrictPoints(
    (s) => !s.isOcean && s.district === 'westbrook' && s.subzone === 'north_oak',
    48,
    0.95
  );
  for (const { dir, s, i } of northOakPts) {
    const baseR = R * (1.00015 + s.elevationRatio);
    const w = R_REF * (0.012 + 0.005 * hashI(i, 3, 9));
    const h = R_REF * (0.005 + 0.003 * hashI(i, 7, 13));
    pushInst(
      buckets.northOak,
      dir,
      baseR,
      hashI(i, 8, 17) * Math.PI,
      w,
      h,
      w,
      pickTint([0xe6e0d6, 0xd4cfc7, 0xede8df], i, 0.03)
    );
    const lR = baseR + h * 1.15;
    northOakWarmCoords.push(dir.x * lR, dir.y * lR, dir.z * lR);
  }

  // --- DISTRITO 4: HEYWOOD (Wellsprings/The Glen 20-45m mate + Vista del Rey chabolas bajas 4-14m, <8% micro-ventanas) ---
  const heywoodPts = sampleDistrictPoints(
    (s) => !s.isOcean && s.district === 'heywood',
    265,
    0.85
  );
  for (const { dir, s, i } of heywoodPts) {
    const yaw = hashI(i, 4, 33) * Math.PI * 0.5;
    if (s.subzone === 'vista_del_rey') {
      const w = R_REF * (0.008 + 0.005 * hashI(i, 3, 27));
      const h = R_REF * (0.0055 + 0.0065 * hashI(i, 11, 7)); // 4-14m bajos
      pushInst(buckets.shanty, dir, R * 1.00015, yaw, w, h, w, pickTint([0x8f745c, 0x7d6552, 0x9c8266], i));
    } else {
      const w = R_REF * (0.009 + 0.006 * hashI(i, 8, 19));
      const h = R_REF * (0.018 + 0.022 * Math.pow(hashI(i, 14, 9), 1.2)); // 20-45m medios
      if (i % 3 === 0) {
        pushInst(buckets.h10, dir, R * 1.00015, yaw, w, h, w, pickTint([0x9c7b5c, 0x827668, 0xa38968], i));
      } else {
        pushInst(buckets.terrace, dir, R * 1.00015, yaw, w, h, w, pickTint([0xb8a48c, 0x9e9284, 0xc4b096], i));
      }
      if (i % 16 === 0) {
        pushInst(buckets.microWin, dir, R * 1.00015, yaw, w, h, w, pickTint([0xffcb80, 0xffe0b0], i, 0.02));
      }
    }
    if (i % 6 === 0) {
      const lR = R * 1.0002 + R_REF * 0.0026;
      streetlampAmber.push(dir.x * lR, dir.y * lR, dir.z * lR);
    }
  }

  // --- DISTRITO 5: SANTO DOMINGO (Arroyo fábricas + Rancho Coronado casas prefabricadas cuadrícula, 0% neón, 3% micro-ventanas) ---
  const arroyoPts = sampleDistrictPoints(
    (s) => !s.isOcean && s.district === 'santo_domingo' && s.subzone === 'arroyo',
    130,
    0.95
  );
  for (const { dir, i } of arroyoPts) {
    const w = R_REF * (0.015 + 0.012 * hashI(i, 2, 11));
    const h = R_REF * (0.016 + 0.018 * hashI(i, 7, 19));
    pushInst(
      buckets.arroyo,
      dir,
      R * 1.00015,
      hashI(i, 4, 15) * Math.PI * 0.5,
      w,
      h,
      w,
      pickTint([0x665e58, 0x52565c, 0x736355], i)
    );
    if (i % 7 === 0 && buckets.arroyoFlares.length < 18) {
      const fR = R * 1.0002 + h * 0.96;
      pushInst(buckets.arroyoFlares, dir, fR, 0, R_REF * 0.003, R_REF * 0.0048, R_REF * 0.003, tmpColor.setHex(0xffffff));
      refineryFlareCoords.push(dir.x * fR, dir.y * fR, dir.z * fR);
    }
    if (i % 6 === 0 && smokeCenters.length < 36) {
      const sAlt = R * 1.0003 + h * 1.12;
      smokeCenters.push({ dir: dir.clone(), alt: sAlt, phase: i * 0.5 });
      smokePositions.push(dir.x * sAlt, dir.y * sAlt, dir.z * sAlt);
    }
  }

  for (let gx = 0; gx < 20; gx++) {
    for (let gy = 0; gy < 20; gy++) {
      const ax = (0.25 + gx * 0.017) * NC_GEO_SCALE;
      const ay = (-0.34 - gy * 0.017) * NC_GEO_SCALE;
      const dir = ncMapToCapDir(ax, ay);
      const s = sampleNightCitySurface(dir.x, dir.y, dir.z);
      if (!s.isOcean && s.district === 'santo_domingo' && s.subzone === 'rancho_coronado') {
        const w = R_REF * 0.0068;
        const h = R_REF * (0.0042 + 0.0018 * hashI(gx, gy, 4)); // 4-10m casas bajas
        pushInst(
          buckets.rancho,
          dir,
          R * 1.0002,
          0.08,
          w,
          h,
          w,
          pickTint([0x8c7866, 0x7d6c5d, 0x99846e], gx * 20 + gy)
        );
        if ((gx * 20 + gy) % 34 === 0) {
          pushInst(buckets.microWin, dir, R * 1.0002, 0.08, w, h, w, tmpColor.setHex(0xffbe72));
        }
        if ((gx + gy) % 5 === 0) {
          const lR = R * 1.0002 + R_REF * 0.0026;
          streetlampAmber.push(dir.x * lR, dir.y * lR, dir.z * lR);
        }
      }
    }
  }

  // --- DISTRITO 6: PACIFICA (Ruinas esqueléticas sin fachada y Dogtown amurallado: 0% neón, 0% ventanas) ---
  const pacificaPts = sampleDistrictPoints(
    (s) => !s.isOcean && s.district === 'pacifica',
    165,
    0.95
  );
  for (const { dir, s, i } of pacificaPts) {
    const w = R_REF * (0.011 + 0.008 * hashI(i, 2, 19));
    const h =
      s.subzone === 'dogtown'
        ? R_REF * (0.010 + 0.014 * hashI(i, 9, 13))
        : R_REF * (0.016 + 0.022 * Math.pow(hashI(i, 6, 29), 1.3));
    pushInst(
      buckets.pacifica,
      dir,
      R * 1.00015,
      hashI(i, 1, 8) * 0.5,
      w,
      h,
      w,
      pickTint([0x4c4f54, 0x5c5852, 0x3b3e42], i)
    );
    if (i % 14 === 0 && campfireCoords.length < 30) {
      const cR = R * 1.0002 + R_REF * 0.0014;
      campfireCoords.push(dir.x * cR, dir.y * cR, dir.z * cR);
    }
  }

  // Noria oxidada abandonada en Coastview Pacifica
  const ferrisDir = ncMapToCapDir(-0.33 * NC_GEO_SCALE, -0.48 * NC_GEO_SCALE);
  const ferrisMesh = new THREE.Mesh(new THREE.TorusGeometry(R_REF * 0.019, R_REF * 0.0014, 6, 20), pacificaMat);
  ferrisMesh.name = 'NC_Pacifica_Abandoned_FerrisWheel';
  ferrisMesh.position.copy(ferrisDir).multiplyScalar(R + R_REF * 0.021);
  ferrisMesh.quaternion.setFromUnitVectors(UP_Y, ferrisDir);
  ferrisMesh.rotateY(0.4);
  ferrisMesh.castShadow = false;
  ferrisMesh.receiveShadow = false;
  group.add(ferrisMesh);

  // Puentes sobre Bahía Del Coronado
  const bridgeRoutes = [
    { a: [-0.08 * NC_GEO_SCALE, 0.14 * NC_GEO_SCALE], b: [-0.20 * NC_GEO_SCALE, 0.25 * NC_GEO_SCALE] },
    { a: [-0.14 * NC_GEO_SCALE, 0.01 * NC_GEO_SCALE], b: [-0.42 * NC_GEO_SCALE, -0.02 * NC_GEO_SCALE] },
    { a: [-0.09 * NC_GEO_SCALE, -0.15 * NC_GEO_SCALE], b: [-0.21 * NC_GEO_SCALE, -0.34 * NC_GEO_SCALE] },
  ];
  for (const br of bridgeRoutes) {
    const segs = 12;
    const pA = ncMapToCapDir(br.a[0], br.a[1]);
    const pB = ncMapToCapDir(br.b[0], br.b[1]);
    const yaw = Math.atan2(pB.x - pA.x, pB.z - pA.z);
    for (let sIdx = 0; sIdx <= segs; sIdx++) {
      const t = sIdx / segs;
      const bNorm = pA.clone().lerp(pB, t).normalize();
      const deckH = R_REF * 0.008 + Math.sin(t * Math.PI) * R_REF * 0.005;
      pushInst(
        buckets.bridges,
        bNorm,
        R - R_REF * 0.002 + deckH,
        yaw,
        R_REF * 0.007,
        R_REF * 0.014,
        R_REF * 0.022,
        tmpColor.setHex(0x4a5058)
      );
    }
  }

  // --- DISTRITO 7: LAS BADLANDS (Campos Petrolíferos, Eólicas, Invernaderos Biotechnica, Desierto Sur) ---
  const badlandsPts = sampleDistrictPoints(
    (s) => !s.isOcean && s.district === 'badlands' && s.mapTheta < 1.05,
    420,
    1.48
  );
  for (const { dir, s, i } of badlandsPts) {
    const baseR = R * 1.0002 + s.elevationRatio * R;
    if (s.subzone === 'oilfields') {
      if (i % 7 === 0 && oilPumpjacks.length < 32) {
        pushInst(buckets.pumpBases, dir, baseR - R_REF * 0.0005, 0, R_REF * 0.004, R_REF * 0.0085, R_REF * 0.004, tmpColor.setHex(0x3a3e44));
        oilPumpjacks.push({
          pos: dir.clone().multiplyScalar(baseR + R_REF * 0.008),
          quat: new THREE.Quaternion().setFromUnitVectors(UP_Y, dir),
          scale: new THREE.Vector3(R_REF * 0.0022, R_REF * 0.0022, R_REF * 0.015),
          phase: i * 0.65,
        });
      } else {
        const sx = R_REF * (0.007 + 0.014 * hashI(i, 3, 5));
        pushInst(buckets.rocks, dir, baseR, hashI(i, 2, 9) * 3.1, sx, sx * 0.6, sx, pickTint([0x3b3532, 0x4d433c], i));
      }
    } else if (s.subzone === 'eastern_plains') {
      if (i % 10 === 0 && turbines.length < 34) {
        const mastH = R_REF * (0.024 + 0.010 * hashI(i, 5, 11));
        pushInst(buckets.turbMasts, dir, baseR - R_REF * 0.0005, 0, R_REF * 0.0022, mastH, R_REF * 0.0022, tmpColor.setHex(0xc2c8ce));
        const baseQuat = new THREE.Quaternion().setFromUnitVectors(UP_Y, dir);
        const yawQ = new THREE.Quaternion().setFromAxisAngle(UP_Y, hashI(i, 12, 5) * Math.PI * 2);
        turbines.push({
          hubPos: dir.clone().multiplyScalar(baseR + mastH),
          orientQuat: baseQuat.multiply(yawQ),
          bladeLen: mastH * 0.56,
          omega: 1.0 + hashI(i, 8, 19) * 0.85,
          phase: hashI(i, 15, 2) * Math.PI * 2,
        });
      } else if (i % 8 === 0 && buckets.greenhouses.length < 44) {
        pushInst(buckets.greenhouses, dir, baseR - R_REF * 0.0004, 0.3, R_REF * 0.011, R_REF * 0.0035, R_REF * 0.032, tmpColor.setHex(0xd8eae6));
      } else {
        const sx = R_REF * (0.009 + 0.018 * Math.pow(hashI(i, 7, 13), 1.5));
        pushInst(buckets.rocks, dir, baseR, hashI(i, 5, 17) * 3.1, sx, sx * 0.7, sx * 0.85, pickTint([0x6b3b28, 0x7d4832], i));
      }
    } else {
      if (i % 16 === 0 && buckets.nomads.length < 36) {
        pushInst(buckets.nomads, dir, baseR, hashI(i, 4, 21) * Math.PI, R_REF * 0.007, R_REF * 0.0038, R_REF * 0.0085, tmpColor.setHex(0x6e665c));
        const fR = baseR + R_REF * 0.0025;
        campfireCoords.push(dir.x * fR, dir.y * fR, dir.z * fR);
      } else {
        const sx = R_REF * (0.008 + 0.018 * Math.pow(hashI(i, 3, 29), 1.6));
        pushInst(buckets.rocks, dir, baseR, hashI(i, 7, 19) * 3.1, sx, sx * 0.65, sx * 0.8, pickTint([0x733e29, 0x5c3221], i));
      }
    }
  }

  // Helper único para crear InstancedMesh optimizados con `setColorAt`, `frustumCulled=false`, sin sombras
  const boxUnitGeo = new THREE.BoxGeometry(1, 1, 1);
  boxUnitGeo.translate(0, 0.5, 0);
  boxUnitGeo.boundingSphere = globalSphere;

  const cylUnitGeo = new THREE.CylinderGeometry(0.45, 0.55, 1, 8);
  cylUnitGeo.translate(0, 0.5, 0);
  cylUnitGeo.boundingSphere = globalSphere;

  const rockUnitGeo = new THREE.DodecahedronGeometry(1.0, 0);
  rockUnitGeo.boundingSphere = globalSphere;

  const emitInstanced = (items, geo, mat, name) => {
    if (!items.length) return null;
    const im = new THREE.InstancedMesh(geo, mat, items.length);
    im.name = name;
    im.frustumCulled = false;
    im.castShadow = false;
    im.receiveShadow = false;
    for (let i = 0; i < items.length; i++) {
      im.setMatrixAt(i, items[i].matrix);
      im.setColorAt(i, items[i].color);
    }
    im.instanceMatrix.needsUpdate = true;
    if (im.instanceColor) im.instanceColor.needsUpdate = true;
    group.add(im);
    return im;
  };

  // 10+ Arquetipos arquitectónicos + puentes + Badlands
  emitInstanced(buckets.h10, geos.geoH10Megablock, h10Mat, 'NC_Arch1_H10_Megablocks');
  emitInstanced(buckets.stacked, geos.geoStackedContainers, stackedMat, 'NC_Arch2_Stacked_Containers');
  emitInstanced(buckets.shanty, geos.geoShantySkybridge, shantyMat, 'NC_Arch3_Slum_SheetRoofs');
  emitInstanced(buckets.port, geos.geoPortCraneDepot, portMat, 'NC_Arch4_Northside_PortDepots');
  emitInstanced(buckets.corpoMil, geos.geoCorpoNeoMilTower, corpoNeoMilMat, 'NC_Arch5_CityCenter_NeoMil');
  emitInstanced(buckets.corpoKitsch, geos.geoCorpoNeoKitschTower, corpoGlassMat, 'NC_Arch6_CityCenter_NeoKitsch');
  emitInstanced(buckets.terrace, geos.geoCharterTerraceTower, terraceMat, 'NC_Arch7_Charter_Heywood_Terraces');
  emitInstanced(buckets.northOak, geos.geoNorthOakMansion, northOakMat, 'NC_Arch8_NorthOak_Mansions');
  emitInstanced(buckets.arroyo, geos.geoArroyoFactory, arroyoMat, 'NC_Arch9_Arroyo_Factories');
  emitInstanced(buckets.rancho, geos.geoRanchoHouse, ranchoMat, 'NC_Arch10_Rancho_Houses');
  emitInstanced(buckets.pacifica, geos.geoPacificaSkeleton, pacificaMat, 'NC_Arch11_Pacifica_Skeletons');
  emitInstanced(buckets.bridges, geos.geoBayBridge, stackedMat, 'NC_Bay_Connecting_Bridges');
  emitInstanced(buckets.rocks, rockUnitGeo, rockMat, 'NC_Badlands_Rocks');
  emitInstanced(buckets.pumpBases, cylUnitGeo, shantyMat, 'NC_Badlands_Oil_Pump_Bases');
  emitInstanced(buckets.turbMasts, cylUnitGeo, turbineMat, 'NC_Badlands_WindTurbine_Masts');
  emitInstanced(buckets.greenhouses, boxUnitGeo, greenhouseMat, 'NC_Badlands_Biotechnica_Greenhouses');
  emitInstanced(buckets.nomads, boxUnitGeo, ranchoMat, 'NC_Badlands_Nomad_Outposts');

  // Micro-ventanas discretas + neones puntuales limitados
  emitInstanced(buckets.microWin, geos.geoMicroWindow, microWinMat, 'NC_Isolated_MicroWindows');
  emitInstanced(buckets.watsonNeonRed, boxUnitGeo, watsonRedNeonMat, 'NC_Watson_VerticalNeon_Red');
  emitInstanced(buckets.watsonNeonCyan, boxUnitGeo, watsonCyanNeonMat, 'NC_Watson_VerticalNeon_Cyan');
  emitInstanced(buckets.japantownNeon, boxUnitGeo, japantownNeonMat, 'NC_Westbrook_Japantown_Neon');
  emitInstanced(buckets.corpoBeams, cylUnitGeo, corpoBeamMat, 'NC_CityCenter_LightBeams');
  emitInstanced(buckets.arroyoFlares, cylUnitGeo, flareTipMat, 'NC_SantoDomingo_Refinery_Flares');

  // Rotores animables y bombas petrolíferas
  const bladeGeo = new THREE.BoxGeometry(0.11, 1.0, 0.03);
  bladeGeo.translate(0, 0.5, 0);
  bladeGeo.boundingSphere = globalSphere;
  const rotorMesh = turbines.length
    ? new THREE.InstancedMesh(bladeGeo, turbineMat, turbines.length * 3)
    : null;
  if (rotorMesh) {
    rotorMesh.name = 'NC_Badlands_WindTurbine_Blades';
    rotorMesh.frustumCulled = false;
    rotorMesh.castShadow = false;
    rotorMesh.receiveShadow = false;
    group.add(rotorMesh);
  }

  const pumpBeamMesh = oilPumpjacks.length
    ? new THREE.InstancedMesh(boxUnitGeo, arroyoMat, oilPumpjacks.length)
    : null;
  if (pumpBeamMesh) {
    pumpBeamMesh.name = 'NC_Badlands_Oil_Pumpjacks';
    pumpBeamMesh.frustumCulled = false;
    pumpBeamMesh.castShadow = false;
    pumpBeamMesh.receiveShadow = false;
    group.add(pumpBeamMesh);
  }

  // 3 Dirigibles publicitarios (`AV_Blimp`) patrullando lentamente entre Watson y City Center
  const blimpBannerGeo = new THREE.BoxGeometry(0.46, 0.16, 0.85);
  blimpBannerGeo.boundingSphere = globalSphere;
  const blimpHullInst = new THREE.InstancedMesh(geos.geoBlimpHull, shantyMat, 3);
  blimpHullInst.name = 'AV_Blimp_Hulls';
  blimpHullInst.frustumCulled = false;
  blimpHullInst.castShadow = false;
  blimpHullInst.receiveShadow = false;

  const blimpScreenInst = new THREE.InstancedMesh(blimpBannerGeo, blimpBannerMat, 3);
  blimpScreenInst.name = 'AV_Blimp_Screens';
  blimpScreenInst.frustumCulled = false;
  blimpScreenInst.castShadow = false;
  blimpScreenInst.receiveShadow = false;
  group.add(blimpHullInst, blimpScreenInst);

  const blimps = [
    { ax0: -0.10 * NC_GEO_SCALE, ay0: 0.21 * NC_GEO_SCALE, rx: 0.14 * NC_GEO_SCALE, ry: 0.06 * NC_GEO_SCALE, alt: R + R_REF * 0.068, omega: 0.085, phase: 0.0, scale: R_REF * 0.022 },
    { ax0: 0.06 * NC_GEO_SCALE, ay0: 0.18 * NC_GEO_SCALE, rx: 0.12 * NC_GEO_SCALE, ry: 0.07 * NC_GEO_SCALE, alt: R + R_REF * 0.080, omega: -0.072, phase: 2.1, scale: R_REF * 0.025 },
    { ax0: -0.03 * NC_GEO_SCALE, ay0: 0.25 * NC_GEO_SCALE, rx: 0.16 * NC_GEO_SCALE, ry: 0.05 * NC_GEO_SCALE, alt: R + R_REF * 0.062, omega: 0.064, phase: 4.2, scale: R_REF * 0.020 },
  ];

  // Carreteras desérticas de Las Badlands consolidadas en 1 malla única
  const badRoadRoutes = [
    { start: [0.58 * NC_GEO_SCALE, -0.15 * NC_GEO_SCALE], end: [0.92 * NC_GEO_SCALE, -0.45 * NC_GEO_SCALE] },
    { start: [0.35 * NC_GEO_SCALE, -0.60 * NC_GEO_SCALE], end: [0.55 * NC_GEO_SCALE, -0.96 * NC_GEO_SCALE] },
  ];
  const roadSegs = 28;
  const hw = R_REF * 0.004;
  const roadParts = [];
  const tangent = new THREE.Vector3();
  const side = new THREE.Vector3();
  const pt = new THREE.Vector3();
  for (let rIdx = 0; rIdx < badRoadRoutes.length; rIdx++) {
    const rt = badRoadRoutes[rIdx];
    const rPos = new Float32Array((roadSegs + 1) * 2 * 3);
    const rUv = new Float32Array((roadSegs + 1) * 2 * 2);
    const rIdxArr = [];
    for (let s = 0; s <= roadSegs; s++) {
      const f = s / roadSegs;
      const ax = THREE.MathUtils.lerp(rt.start[0], rt.end[0], f) + Math.sin(f * 3.2 + rIdx) * 0.025 * NC_GEO_SCALE;
      const ay = THREE.MathUtils.lerp(rt.start[1], rt.end[1], f);
      norm.copy(ncMapToCapDir(ax, ay));
      const surf = sampleNightCitySurface(norm.x, norm.y, norm.z);
      const rr = R * 1.0002 + surf.elevationRatio * R + R_REF * 0.0008;
      pt.copy(norm).multiplyScalar(rr);
      tangent.set(0.3, 0, -1).cross(norm).normalize();
      side.crossVectors(norm, tangent).normalize();
      const vBase = s * 2;
      rPos[vBase * 3] = pt.x - side.x * hw;
      rPos[vBase * 3 + 1] = pt.y - side.y * hw;
      rPos[vBase * 3 + 2] = pt.z - side.z * hw;
      rPos[(vBase + 1) * 3] = pt.x + side.x * hw;
      rPos[(vBase + 1) * 3 + 1] = pt.y + side.y * hw;
      rPos[(vBase + 1) * 3 + 2] = pt.z + side.z * hw;
      rUv[vBase * 2] = 0.0;
      rUv[vBase * 2 + 1] = f * 8.0;
      rUv[(vBase + 1) * 2] = 1.0;
      rUv[(vBase + 1) * 2 + 1] = f * 8.0;
      if (s < roadSegs) rIdxArr.push(vBase, vBase + 2, vBase + 1, vBase + 1, vBase + 2, vBase + 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(rPos, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(rUv, 2));
    g.setIndex(rIdxArr);
    g.computeVertexNormals();
    roadParts.push({ geo: g.toNonIndexed() });
    g.dispose();
  }
  const roadMergedGeo = mergeGeometries(roadParts.map((x) => x.geo), false);
  roadParts.forEach((x) => x.geo.dispose());
  roadMergedGeo.boundingSphere = globalSphere;
  const roadMesh = new THREE.Mesh(
    roadMergedGeo,
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: pbrAsphalt.map,
      roughnessMap: pbrAsphalt.roughnessMap,
      bumpMap: pbrAsphalt.bumpMap,
      bumpScale: 0.04,
      roughness: 1.0,
      metalness: 0.08,
      side: THREE.DoubleSide,
    })
  );
  roadMesh.name = 'NC_Badlands_Desert_Roads';
  roadMesh.frustumCulled = false;
  roadMesh.castShadow = false;
  roadMesh.receiveShadow = false;
  group.add(roadMesh);

  // Superficie reflectante real (THREE.Water) en Bahía Del Coronado
  const bayWaterDir = ncMapToCapDir(-0.27 * NC_GEO_SCALE, 0.01 * NC_GEO_SCALE);
  const bayWaterGeo = new THREE.CircleGeometry(R * 0.16 * NC_GEO_SCALE, 40);
  const bayWater = new Water(bayWaterGeo, {
    textureWidth: 256,
    textureHeight: 256,
    waterNormals: getWaterNormalTexture(),
    sunDirection: new THREE.Vector3(0.4, 0.6, 0.5).normalize(),
    sunColor: 0x8cc2ff,
    waterColor: 0x071d2e,
    distortionScale: 0.35,
    size: 4.5,
    clipBias: 0.002,
    alpha: 0.92,
    fog: true,
  });
  bayWater.name = 'NC_CoronadoBay_Reflective_Water';
  bayWater.position.copy(bayWaterDir).multiplyScalar(R * 1.00025);
  bayWater.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), bayWaterDir);
  bayWater.visible = false;
  bayWater.castShadow = false;
  bayWater.receiveShadow = false;
  group.add(bayWater);

  // Capas de puntos ligeras (farolas tenues, llamas refinería, fogatas Pacifica/Badlands, humo Arroyo)
  const addPointsLayer = (coords, colorHex, size, opacity, additive, name) => {
    if (!coords.length) return null;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(coords, 3));
    g.boundingSphere = globalSphere;
    const m = new THREE.PointsMaterial({
      map: createRadialGlowTexture('rgba(255,255,255,0.92)', 'rgba(255,210,160,0.32)'),
      color: colorHex,
      size,
      transparent: true,
      opacity,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      sizeAttenuation: true,
    });
    const pts = new THREE.Points(g, m);
    pts.name = name;
    pts.frustumCulled = false;
    group.add(pts);
    return { pts, mat: m, geo: g };
  };

  const amberLampPts = addPointsLayer(
    streetlampAmber.concat(northOakWarmCoords),
    0xffaa48,
    1.3,
    0.66,
    true,
    'NC_Heywood_Rancho_Streetlamps'
  );
  const campAndFlarePts = addPointsLayer(
    campfireCoords.concat(refineryFlareCoords),
    0xff6c24,
    2.1,
    0.84,
    true,
    'NC_Pacifica_Arroyo_FlaresAndFires'
  );
  const smogPts = addPointsLayer(smokePositions, 0x2a2420, 14.0, 0.50, false, 'NC_Arroyo_Industrial_Smoke');

  const qSpin = new THREE.Quaternion();
  const qFinal = new THREE.Quaternion();
  const scaleTmp = new THREE.Vector3();
  const matTmp = new THREE.Matrix4();
  const blimpPos = new THREE.Vector3();
  const blimpFwd = new THREE.Vector3();
  const blimpRight = new THREE.Vector3();
  const blimpBasis = new THREE.Matrix4();
  const threeBladesStep = (Math.PI * 2) / 3;
  const rotorShaftAxis = new THREE.Vector3(0, 0, 1);
  const pumpAxis = new THREE.Vector3(1, 0, 0);

  return {
    group,
    terrainSplatUniforms,
    bayWater,
    update(time, nightBoost = 1.0) {
      if (!group.parent || !group.parent.visible) return;
      if (bayWater.material?.uniforms?.time) {
        bayWater.material.uniforms.time.value = time * 0.48;
      }

      // 1. Rotación de aerogeneradores eólicos de Las Badlands
      if (rotorMesh) {
        for (let i = 0; i < turbines.length; i++) {
          const t = turbines[i];
          const baseAng = time * t.omega + t.phase;
          scaleTmp.set(t.bladeLen * 0.25, t.bladeLen, t.bladeLen * 0.25);
          for (let b = 0; b < 3; b++) {
            qSpin.setFromAxisAngle(rotorShaftAxis, baseAng + b * threeBladesStep);
            qFinal.copy(t.orientQuat).multiply(qSpin);
            matTmp.compose(t.hubPos, qFinal, scaleTmp);
            rotorMesh.setMatrixAt(i * 3 + b, matTmp);
          }
        }
        rotorMesh.instanceMatrix.needsUpdate = true;
      }

      // 2. Balanceo de bombas petrolíferas en Campos Petrolíferos Norte
      if (pumpBeamMesh) {
        for (let i = 0; i < oilPumpjacks.length; i++) {
          const pj = oilPumpjacks[i];
          qSpin.setFromAxisAngle(pumpAxis, Math.sin(time * 1.15 + pj.phase) * 0.28);
          qFinal.copy(pj.quat).multiply(qSpin);
          matTmp.compose(pj.pos, qFinal, pj.scale);
          pumpBeamMesh.setMatrixAt(i, matTmp);
        }
        pumpBeamMesh.instanceMatrix.needsUpdate = true;
      }

      // 3. Animación de los 3 dirigibles publicitarios AV_Blimp sobre Watson <-> City Center
      for (let i = 0; i < blimps.length; i++) {
        const b = blimps[i];
        const ang = time * b.omega + b.phase;
        const ax = b.ax0 + Math.cos(ang) * b.rx;
        const ay = b.ay0 + Math.sin(ang) * b.ry;
        const dax = -Math.sin(ang) * b.rx * b.omega;
        const day = Math.cos(ang) * b.ry * b.omega;

        norm.copy(ncMapToCapDir(ax, ay));
        blimpPos.copy(norm).multiplyScalar(b.alt + Math.sin(time * 0.8 + i) * R_REF * 0.002);
        blimpFwd.set(dax, 0, -day);
        blimpFwd.addScaledVector(norm, -norm.dot(blimpFwd));
        if (blimpFwd.lengthSq() < 1e-8) blimpFwd.set(1, 0, 0).addScaledVector(norm, -norm.x);
        blimpFwd.normalize();
        blimpRight.crossVectors(norm, blimpFwd);
        if (blimpRight.lengthSq() < 1e-8) blimpRight.set(0, 0, 1);
        blimpRight.normalize();
        blimpFwd.crossVectors(blimpRight, norm).normalize();
        blimpBasis.makeBasis(blimpRight, norm, blimpFwd);
        blimpBasis.setPosition(blimpPos);
        scaleTmp.setScalar(b.scale);
        blimpBasis.scale(scaleTmp);

        blimpHullInst.setMatrixAt(i, blimpBasis);
        blimpScreenInst.setMatrixAt(i, blimpBasis);
      }
      blimpHullInst.instanceMatrix.needsUpdate = true;
      blimpScreenInst.instanceMatrix.needsUpdate = true;

      // 4. Humo industrial de Arroyo
      if (smogPts && smokeCenters.length > 0) {
        const sAttr = smogPts.geo.attributes.position;
        for (let i = 0; i < smokeCenters.length; i++) {
          const sc = smokeCenters[i];
          const drift = 1.0 + 0.002 * Math.sin(time * 0.7 + sc.phase);
          sAttr.setXYZ(i, sc.dir.x * sc.alt * drift, sc.dir.y * sc.alt * drift, sc.dir.z * sc.alt * drift);
        }
        sAttr.needsUpdate = true;
      }

      // 5. Héroes HDR estricto en [1.3 .. 1.9]; las fachadas mate exteriores permanecen siempre en 0
      const heroPulse = 0.94 + 0.06 * Math.sin(time * 2.2);
      const heroNight = clamp(0.88 + (nightBoost - 1.0) * 0.14, 0.85, 1.08);
      for (let i = 0; i < heroMats.length; i++) {
        const hm = heroMats[i];
        hm.emissiveIntensity = clamp(hm.userData.baseEmissive * heroNight * heroPulse, 1.3, 1.9);
      }

      const dimLamp = clamp(0.42 + (nightBoost - 0.8) * 0.25, 0.35, 0.78);
      if (amberLampPts) amberLampPts.mat.opacity = dimLamp;
      if (campAndFlarePts) campAndFlarePts.mat.opacity = 0.70 + 0.18 * Math.sin(time * 8.2);
    },
  };
}
