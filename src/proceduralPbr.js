import * as THREE from 'three';

/* ------------------------------------------------------------------------------------------
 * Utilidades deterministas de ruido procedural compartido (sin asignaciones por fotograma)
 * ---------------------------------------------------------------------------------------- */
function hash2(x, y, s = 0) {
  let h = (Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263) + Math.imul(s | 0, 1274126177)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
}

// Ruido periódico en [0..period) para mosaicos seamless (repeat wrapping sin costuras)
function tileNoise2(u, v, period, seed = 0) {
  const x = u * period;
  const y = v * period;
  const ix0 = Math.floor(x);
  const iy0 = Math.floor(y);
  const fx = x - ix0;
  const fy = y - iy0;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);

  const x0 = ((ix0 % period) + period) % period;
  const x1 = (x0 + 1) % period;
  const y0 = ((iy0 % period) + period) % period;
  const y1 = (y0 + 1) % period;

  const a = hash2(x0, y0, seed);
  const b = hash2(x1, y0, seed);
  const c = hash2(x0, y1, seed);
  const d = hash2(x1, y1, seed);
  return (a + (b - a) * ux) + ((c + (d - c) * ux) - (a + (b - a) * ux)) * uy;
}

function tileFbm(u, v, basePeriod = 8, octaves = 4, seed = 0) {
  let sum = 0;
  let amp = 0.5;
  let p = basePeriod;
  let norm = 0;
  for (let o = 0; o < octaves; o++) {
    sum += amp * tileNoise2(u, v, p, seed + o * 31);
    norm += amp;
    amp *= 0.5;
    p *= 2;
  }
  return sum / Math.max(1e-5, norm);
}

function tileRidged(u, v, basePeriod = 8, octaves = 4, seed = 100) {
  let sum = 0;
  let amp = 0.5;
  let p = basePeriod;
  let norm = 0;
  for (let o = 0; o < octaves; o++) {
    const n = 1.0 - Math.abs(tileNoise2(u, v, p, seed + o * 37) * 2.0 - 1.0);
    sum += amp * (n * n);
    norm += amp;
    amp *= 0.5;
    p *= 2;
  }
  return sum / Math.max(1e-5, norm);
}

function makeOffscreenCanvas(w, h) {
  if (typeof document === 'undefined') return null;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

function configureTexture(tex, isColor = true, repeat = 4) {
  tex.colorSpace = isColor ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat, repeat);
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  return tex;
}

const pbrCache = new Map();

function createPbrTrio(size, repeat, pixelFn) {
  const cA = makeOffscreenCanvas(size, size);
  const cR = makeOffscreenCanvas(size, size);
  const cB = makeOffscreenCanvas(size, size);
  if (!cA || !cR || !cB) return { map: null, roughnessMap: null, bumpMap: null };

  const ctxA = cA.getContext('2d');
  const ctxR = cR.getContext('2d');
  const ctxB = cB.getContext('2d');
  const imgA = ctxA.createImageData(size, size);
  const imgR = ctxR.createImageData(size, size);
  const imgB = ctxB.createImageData(size, size);
  const dA = imgA.data;
  const dR = imgR.data;
  const dB = imgB.data;

  const out = { r: 128, g: 128, b: 128, rough: 0.85, bump: 0.5 };
  for (let py = 0; py < size; py++) {
    const v = (py + 0.5) / size;
    for (let px = 0; px < size; px++) {
      const u = (px + 0.5) / size;
      pixelFn(u, v, px, py, out);
      const idx = (py * size + px) * 4;
      dA[idx] = Math.min(255, Math.max(0, out.r | 0));
      dA[idx + 1] = Math.min(255, Math.max(0, out.g | 0));
      dA[idx + 2] = Math.min(255, Math.max(0, out.b | 0));
      dA[idx + 3] = 255;

      const rv = Math.min(255, Math.max(0, Math.round(out.rough * 255)));
      dR[idx] = rv;
      dR[idx + 1] = rv;
      dR[idx + 2] = rv;
      dR[idx + 3] = 255;

      const bv = Math.min(255, Math.max(0, Math.round(out.bump * 255)));
      dB[idx] = bv;
      dB[idx + 1] = bv;
      dB[idx + 2] = bv;
      dB[idx + 3] = 255;
    }
  }

  ctxA.putImageData(imgA, 0, 0);
  ctxR.putImageData(imgR, 0, 0);
  ctxB.putImageData(imgB, 0, 0);

  return {
    map: configureTexture(new THREE.CanvasTexture(cA), true, repeat),
    roughnessMap: configureTexture(new THREE.CanvasTexture(cR), false, repeat),
    bumpMap: configureTexture(new THREE.CanvasTexture(cB), false, repeat),
  };
}

/**
 * Set PBR Asfalto & Carreteras de Night City:
 * árido granular, líneas viales desgastadas, grietas y parches húmedos reflectantes (roughness 0.25..0.88).
 */
export function getAsphaltPbrSet() {
  if (pbrCache.has('asphalt')) return pbrCache.get('asphalt');
  const set = createPbrTrio(512, 6, (u, v, px, py, out) => {
    const grain = tileNoise2(u, v, 128, 3);
    const coarse = tileFbm(u, v, 8, 4, 17);
    const crack = 1.0 - Math.pow(tileRidged(u, v, 6, 3, 73), 3.0);
    const puddleMask = Math.max(0, Math.min(1, (coarse - 0.56) * 4.2));

    // Bandas viales sutiles centradas y desgastadas
    const laneCenter = Math.abs(u - 0.5) < 0.014 && (Math.floor(v * 16) % 2 === 0);
    const edgeLine = Math.abs(u - 0.09) < 0.011 || Math.abs(u - 0.91) < 0.011;
    const stripe = (laneCenter || edgeLine) ? 0.62 * (0.5 + 0.5 * grain) : 0.0;

    let base = 26 + grain * 18 + coarse * 16 - crack * 14;
    base *= 1.0 - puddleMask * 0.24;
    out.r = base + stripe * 145;
    out.g = base + stripe * 122;
    out.b = base * 1.08 + stripe * 70;
    out.rough = 0.88 - puddleMask * 0.63 - grain * 0.04; // 0.25 en charcos, ~0.86 en seco
    out.bump = Math.max(0, Math.min(1, 0.5 + (grain - 0.5) * 0.42 - crack * 0.35 - puddleMask * 0.15));
  });
  pbrCache.set('asphalt', set);
  return set;
}

/**
 * Set PBR Hormigón Brutalista para torres exteriores mate (`roughness 0.78..0.95`).
 */
export function getBrutalistConcretePbrSet() {
  if (pbrCache.has('concrete')) return pbrCache.get('concrete');
  const set = createPbrTrio(512, 2, (u, v, px, py, out) => {
    const porous = tileFbm(u, v, 16, 4, 29);
    const fine = tileNoise2(u, v, 96, 11);
    const seamY = (py % 32) < 2 ? 1.0 : 0.0;
    const seamX = (px % 64) < 2 ? 0.7 : 0.0;
    const tieHole = ((px % 32) > 13 && (px % 32) < 17 && (py % 32) > 13 && (py % 32) < 17) ? 1.0 : 0.0;
    const drip = tileNoise2(u, v * 0.25, 24, 53);
    const damp = Math.max(0, (drip - 0.55) * 1.8);

    const shade = 110 + (porous - 0.5) * 32 + (fine - 0.5) * 16 - seamY * 38 - seamX * 26 - tieHole * 36 - damp * 28;
    out.r = shade + damp * 14;
    out.g = shade + damp * 4;
    out.b = shade * 1.03 - damp * 6;
    out.rough = Math.max(0.78, Math.min(0.95, 0.88 + (porous - 0.5) * 0.12 - damp * 0.08 + seamY * 0.05));
    out.bump = Math.max(0, Math.min(1, 0.56 + (fine - 0.5) * 0.28 + (porous - 0.5) * 0.24 - seamY * 0.38 - tieHole * 0.35));
  });
  pbrCache.set('concrete', set);
  return set;
}

/**
 * Set PBR Roca Escarpada / Basalto Volcánico compartido (Pandora acantilados, Badlands mesas, Perugius).
 */
export function getRockBasaltPbrSet() {
  if (pbrCache.has('rock')) return pbrCache.get('rock');
  const set = createPbrTrio(512, 8, (u, v, px, py, out) => {
    const strata = tileFbm(u * 0.7 + tileFbm(u, v, 4, 2, 9) * 0.18, v * 2.2, 6, 4, 41);
    const crack = tileRidged(u, v, 6, 4, 91);
    const grit = tileNoise2(u, v, 96, 19);

    const val = 165 + (strata - 0.5) * 58 - Math.pow(crack, 2.2) * 52 + (grit - 0.5) * 26;
    out.r = val;
    out.g = val * 0.98;
    out.b = val * 0.96;
    out.rough = Math.max(0.70, Math.min(0.96, 0.86 + (grit - 0.5) * 0.14 - crack * 0.1));
    out.bump = Math.max(0, Math.min(1, 0.5 + (strata - 0.5) * 0.45 - crack * 0.32 + (grit - 0.5) * 0.22));
  });
  pbrCache.set('rock', set);
  return set;
}

/**
 * Set PBR Terreno Orgánico Neutro (alta frecuencia 64x, anisotropy 8 para Pandora / Perugius / Badlands).
 */
export function getOrganicTerrainPbrSet() {
  if (pbrCache.has('terrain')) return pbrCache.get('terrain');
  const set = createPbrTrio(512, 64, (u, v, px, py, out) => {
    const macro = tileFbm(u, v, 8, 4, 61);
    const grain = tileNoise2(u, v, 96, 23);
    const vein = tileRidged(u, v, 10, 3, 131);
    // Neutro brillante [185..255] para conservar albedo del vertexColor con relieve PBR
    const luma = 205 + (macro - 0.5) * 44 + (grain - 0.5) * 28 - vein * 18;
    out.r = luma;
    out.g = luma;
    out.b = luma;
    out.rough = Math.max(0.62, Math.min(0.96, 0.86 + (macro - 0.5) * 0.16 - vein * 0.14));
    out.bump = Math.max(0, Math.min(1, 0.52 + (macro - 0.5) * 0.36 + (grain - 0.5) * 0.34 - vein * 0.2));
  });
  pbrCache.set('terrain', set);
  return set;
}

/**
 * Set PBR Corteza Orgánica Rugosa para troncos y raíces aéreas de Pandora (`512x512`).
 */
export function getBarkPbrSet() {
  if (pbrCache.has('bark')) return pbrCache.get('bark');
  const set = createPbrTrio(512, 2, (u, v, px, py, out) => {
    const warp = tileFbm(u * 2.0, v * 0.65, 6, 3, 211) * 0.12;
    const furrow = tileRidged((u * 1.4 + warp + 1.0) % 1.0, (v * 0.35) % 1.0, 12, 3, 223);
    const fine = tileNoise2(u, v, 64, 241);
    const luma = 175 + (fine - 0.5) * 38 - Math.pow(furrow, 1.8) * 58;
    out.r = luma * 1.02;
    out.g = luma * 0.94;
    out.b = luma * 0.84;
    out.rough = Math.max(0.78, Math.min(0.97, 0.88 + furrow * 0.08 + (fine - 0.5) * 0.06));
    out.bump = Math.max(0, Math.min(1, 0.55 - furrow * 0.44 + (fine - 0.5) * 0.24));
  });
  if (set.map) {
    set.map.repeat.set(2, 4);
    set.roughnessMap.repeat.set(2, 4);
    set.bumpMap.repeat.set(2, 4);
  }
  pbrCache.set('bark', set);
  return set;
}

function configureFoliageTex(tex, isColor = true) {
  tex.colorSpace = isColor ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  return tex;
}

function createFoliageTextureCard(size, evalFn) {
  const cMap = makeOffscreenCanvas(size, size);
  const cAlpha = makeOffscreenCanvas(size, size);
  const cRough = makeOffscreenCanvas(size, size);
  const cEmissive = makeOffscreenCanvas(size, size);
  if (!cMap || !cAlpha || !cRough || !cEmissive) {
    return { map: null, alphaMap: null, roughnessMap: null, emissiveMap: null };
  }

  const ctxM = cMap.getContext('2d');
  const ctxA = cAlpha.getContext('2d');
  const ctxR = cRough.getContext('2d');
  const ctxE = cEmissive.getContext('2d');

  const imgM = ctxM.createImageData(size, size);
  const imgA = ctxA.createImageData(size, size);
  const imgR = ctxR.createImageData(size, size);
  const imgE = ctxE.createImageData(size, size);
  const dM = imgM.data;
  const dA = imgA.data;
  const dR = imgR.data;
  const dE = imgE.data;

  const out = { r: 170, g: 205, b: 165, a: 0, rough: 0.68, emR: 0, emG: 0, emB: 0 };
  for (let py = 0; py < size; py++) {
    // Three.js flipY=true: py=0 -> uv.y=1 (punta de hoja/fronda), py=size-1 -> uv.y=0 (tallo)
    const t = 1.0 - (py + 0.5) / size;
    for (let px = 0; px < size; px++) {
      const u = (px + 0.5) / size;
      evalFn(u, t, out);
      const idx = (py * size + px) * 4;
      const alphaByte = Math.min(255, Math.max(0, Math.round(out.a * 255)));

      // Relleno dilatado en texels transparentes para evitar bordes negros por mipmapping
      dM[idx] = Math.min(255, Math.max(0, Math.round(out.r)));
      dM[idx + 1] = Math.min(255, Math.max(0, Math.round(out.g)));
      dM[idx + 2] = Math.min(255, Math.max(0, Math.round(out.b)));
      dM[idx + 3] = alphaByte;

      dA[idx] = alphaByte;
      dA[idx + 1] = alphaByte;
      dA[idx + 2] = alphaByte;
      dA[idx + 3] = 255;

      const rByte = Math.min(255, Math.max(0, Math.round(out.rough * 255)));
      dR[idx] = rByte;
      dR[idx + 1] = rByte;
      dR[idx + 2] = rByte;
      dR[idx + 3] = 255;

      // Emisivo estrictamente recortado al canal alfa (> 0.45) para evitar marcos rectangulares nocturnos
      const emMask = out.a >= 0.45 ? 1.0 : 0.0;
      dE[idx] = Math.min(255, Math.max(0, Math.round(out.emR * emMask)));
      dE[idx + 1] = Math.min(255, Math.max(0, Math.round(out.emG * emMask)));
      dE[idx + 2] = Math.min(255, Math.max(0, Math.round(out.emB * emMask)));
      dE[idx + 3] = 255;
    }
  }

  ctxM.putImageData(imgM, 0, 0);
  ctxA.putImageData(imgA, 0, 0);
  ctxR.putImageData(imgR, 0, 0);
  ctxE.putImageData(imgE, 0, 0);

  return {
    map: configureFoliageTex(new THREE.CanvasTexture(cMap), true),
    alphaMap: configureFoliageTex(new THREE.CanvasTexture(cAlpha), false),
    roughnessMap: configureFoliageTex(new THREE.CanvasTexture(cRough), false),
    emissiveMap: configureFoliageTex(new THREE.CanvasTexture(cEmissive), true),
  };
}

function distToSegment(px, py, ax, ay, bx, by) {
  const vx = bx - ax;
  const vy = by - ay;
  const wx = px - ax;
  const wy = py - ay;
  const lenSq = vx * vx + vy * vy + 1e-8;
  const tProj = Math.min(1, Math.max(0, (wx * vx + wy * vy) / lenSq));
  return Math.hypot(px - (ax + vx * tProj), py - (ay + vy * tProj));
}

/**
 * Genera y cachea las 3 texturas foliares 512x512 RGBA con recorte nítido (`alphaTest >= 0.45`),
 * `alphaMap`, `roughnessMap` y `emissiveMap` sincronizado con nervaduras y bordes bioluminiscentes:
 * - `texPalmFrondAlpha` (frondas arqueadas de palmera con raquis central y foliolos afilados)
 * - `texCanopyBranchAlpha` (ramaje frondoso irregular de copa selvática con racimos superpuestos)
 * - `texFernClusterAlpha` (penacho de helecho pinado con pinnulas festoneadas)
 */
export function getFoliageTextureSet() {
  if (pbrCache.has('foliage')) return pbrCache.get('foliage');

  // 1. texPalmFrondAlpha
  const texPalmFrondAlpha = createFoliageTextureCard(512, (u, t, out) => {
    const spineX = 0.5 + 0.022 * Math.sin(t * Math.PI);
    const dx = u - spineX;
    const rad = Math.abs(dx);
    const stemHalf = 0.015 * (1.0 - t * 0.72);
    const onStem = t >= 0.015 && t <= 0.96 && rad <= stemHalf;

    // Envolvente ahusada de palmera con foliolos afilados y dentados
    const bodyT = (t - 0.08) / 0.89;
    const envelope = bodyT > 0 && bodyT < 1 ? 0.44 * Math.pow(Math.sin(Math.pow(bodyT, 0.78) * Math.PI), 0.72) : 0;
    const jitterEdge = 0.94 + 0.06 * tileNoise2(u, t, 24, 307);
    const reach = envelope * jitterEdge;

    let onLeaflet = false;
    let leafShade = 0.78;
    let tipFactor = 0.0;
    if (bodyT > 0 && bodyT < 1 && rad <= reach && rad >= stemHalf * 0.65) {
      const spanFrac = rad / Math.max(0.02, reach);
      const sweep = t - rad * (0.46 + 0.24 * (1.0 - t));
      const pinnaCoord = sweep * 27.0 + (dx >= 0 ? 0.0 : 0.35);
      const pinnaPhase = pinnaCoord - Math.floor(pinnaCoord);
      const distCenter = Math.abs(pinnaPhase - 0.5) * 2.0;
      const tooth = 0.07 * Math.sin(rad * 140.0);
      const leafletHalf = Math.max(0.08, 0.78 * (1.0 - Math.pow(spanFrac, 1.45)) + tooth);
      if (distCenter <= leafletHalf) {
        onLeaflet = true;
        const vein = Math.exp(-Math.pow(distCenter / 0.16, 2.0));
        const leafIdx = Math.floor(pinnaCoord) + (dx >= 0 ? 11 : 37);
        const varTone = 0.82 + 0.18 * hash2(leafIdx, 5, 19);
        leafShade = varTone * (0.72 + 0.22 * spanFrac + 0.16 * vein);
        tipFactor = Math.max(0, (spanFrac - 0.65) / 0.35) + vein * 0.45;
      }
    }

    if (onStem) {
      const ribHighlight = 1.0 - rad / Math.max(0.001, stemHalf);
      out.r = 165 + ribHighlight * 35;
      out.g = 192 + ribHighlight * 30;
      out.b = 128 + ribHighlight * 25;
      out.a = 1.0;
      out.rough = 0.58;
      out.emR = 140 * ribHighlight;
      out.emG = 235 * ribHighlight;
      out.emB = 210 * ribHighlight;
    } else if (onLeaflet) {
      out.r = 178 * leafShade;
      out.g = 224 * leafShade;
      out.b = 164 * leafShade;
      out.a = 1.0;
      out.rough = 0.66 - Math.min(0.14, tipFactor * 0.1);
      const em = Math.min(1.0, tipFactor * 0.85);
      out.emR = 100 * em;
      out.emG = 245 * em;
      out.emB = 225 * em;
    } else {
      out.r = 135;
      out.g = 175;
      out.b = 120;
      out.a = 0.0;
      out.rough = 0.72;
      out.emR = 0;
      out.emG = 0;
      out.emB = 0;
    }
  });

  // 2. texCanopyBranchAlpha: ramaje frondoso con ~28 hojas puntiagudas solapadas en racimo orgánico
  const branchSegs = [
    [0.5, 0.02, 0.5, 0.55],
    [0.5, 0.28, 0.28, 0.54],
    [0.5, 0.34, 0.72, 0.58],
    [0.5, 0.52, 0.36, 0.82],
    [0.5, 0.55, 0.65, 0.84],
  ];
  const leafCount = 28;
  const leaves = [];
  for (let i = 0; i < leafCount; i++) {
    const layer = i / leafCount;
    const spread = 0.14 + 0.24 * Math.sin(layer * Math.PI * 0.92 + 0.25);
    const a = (i * 2.39996) + (hash2(i, 3, 71) - 0.5) * 0.42;
    const cx = 0.5 + Math.cos(a) * spread * 1.15;
    const cy = 0.24 + layer * 0.64 + (hash2(i, 9, 43) - 0.5) * 0.07;
    const dirAng = Math.atan2(cy - 0.26, cx - 0.5) + (hash2(i, 11, 17) - 0.5) * 0.55;
    const len = 0.13 + hash2(i, 7, 5) * 0.075;
    const wid = len * (0.44 + hash2(i, 13, 29) * 0.16);
    const shade = 0.64 + 0.36 * layer + (hash2(i, 4, 83) - 0.5) * 0.1;
    leaves.push({
      cx,
      cy,
      cosA: Math.cos(dirAng),
      sinA: Math.sin(dirAng),
      invLen: 1.0 / len,
      invWid: 1.0 / wid,
      maxR: len * 1.12,
      shade,
    });
  }

  const texCanopyBranchAlpha = createFoliageTextureCard(512, (u, t, out) => {
    let hit = false;
    let bestShade = 0.72;
    let veinStrength = 0.0;
    let rimStrength = 0.0;

    // Evaluar hojas de atrás hacia adelante para conservar oclusión propia
    for (let i = 0; i < leafCount; i++) {
      const lf = leaves[i];
      if (Math.abs(u - lf.cx) > lf.maxR || Math.abs(t - lf.cy) > lf.maxR) continue;
      const du = u - lf.cx;
      const dt = t - lf.cy;
      // En sistema local de hoja: ly = eje longitudinal, lx = ancho lateral
      const ly = (du * lf.cosA + dt * lf.sinA) * lf.invLen;
      if (ly < -1.0 || ly > 1.0) continue;
      const lx = (-du * lf.sinA + dt * lf.cosA) * lf.invWid;
      // Silueta puntiaguda orgánica con leve dentado lateral
      const taper = (1.0 - ly * ly) * (1.0 - 0.28 * Math.max(0, ly)) + 0.055 * Math.sin(ly * 22.0);
      const normW = Math.abs(lx) / Math.max(0.02, taper);
      if (normW <= 1.0) {
        hit = true;
        const midrib = Math.exp(-Math.pow(Math.abs(lx) / 0.12, 2.0)) * (1.0 - Math.max(0, ly) * 0.45);
        const lateralVein = Math.max(0, Math.sin((ly * 4.5 - Math.abs(lx) * 3.8) * Math.PI)) * (1.0 - normW) * 0.45;
        veinStrength = Math.max(midrib, lateralVein);
        rimStrength = Math.pow(normW, 3.2) * 0.85 + Math.max(0, ly) * 0.35;
        bestShade = lf.shade * (0.86 + 0.18 * (1.0 - normW) + 0.12 * midrib);
      }
    }

    let onTwig = false;
    for (let s = 0; s < branchSegs.length; s++) {
      const seg = branchSegs[s];
      const d = distToSegment(u, t, seg[0], seg[1], seg[2], seg[3]);
      const thick = s === 0 ? 0.015 * (1.0 - t * 0.5) : 0.008;
      if (d <= thick) {
        onTwig = true;
        break;
      }
    }

    if (hit) {
      out.r = 182 * bestShade;
      out.g = 228 * bestShade;
      out.b = 176 * bestShade;
      out.a = 1.0;
      out.rough = 0.68 - veinStrength * 0.14;
      const emGlow = Math.min(1.0, veinStrength * 0.88 + rimStrength * 0.58);
      out.emR = 135 * emGlow;
      out.emG = 248 * emGlow;
      out.emB = 228 * emGlow;
    } else if (onTwig) {
      out.r = 112;
      out.g = 94;
      out.b = 68;
      out.a = 1.0;
      out.rough = 0.88;
      out.emR = 25;
      out.emG = 60;
      out.emB = 55;
    } else {
      out.r = 140;
      out.g = 180;
      out.b = 130;
      out.a = 0.0;
      out.rough = 0.72;
      out.emR = 0;
      out.emG = 0;
      out.emB = 0;
    }
  });

  // 3. texFernClusterAlpha: fronda pinada con pinnulas festoneadas y borde recortado nítido
  const texFernClusterAlpha = createFoliageTextureCard(512, (u, t, out) => {
    const spineX = 0.5 + 0.018 * Math.sin(t * 4.2);
    const dx = u - spineX;
    const rad = Math.abs(dx);
    const stemHalf = 0.014 * (1.0 - t * 0.78);
    const onStem = t >= 0.015 && t <= 0.96 && rad <= stemHalf;

    const bodyT = (t - 0.06) / 0.90;
    const envelope = bodyT > 0 && bodyT < 1 ? 0.45 * Math.pow(Math.sin(Math.pow(bodyT, 0.70) * Math.PI), 0.85) : 0;

    let onLeaf = false;
    let leafVal = 0.8;
    let veinEm = 0.0;
    if (bodyT > 0 && bodyT < 1 && rad <= envelope && rad >= stemHalf * 0.55) {
      const spanFrac = rad / Math.max(0.02, envelope);
      const sweep = t - rad * (0.30 + 0.14 * t);
      const pinnaCoord = sweep * 23.0 + (dx >= 0 ? 0.0 : 0.45);
      const pinnaPhase = pinnaCoord - Math.floor(pinnaCoord);
      const distCenter = Math.abs(pinnaPhase - 0.5) * 2.0;
      // Sub-lóbulos secundarios festoneados típicos de helechos reales
      const scallop = 0.14 * Math.sin(rad * 110.0) * (1.0 - spanFrac * 0.4);
      const widthPinna = Math.max(0.06, 0.82 * (1.0 - Math.pow(spanFrac, 1.25)) + scallop);
      if (distCenter <= widthPinna) {
        onLeaf = true;
        const vein = Math.exp(-Math.pow(distCenter / 0.18, 2.0));
        const rim = Math.pow(distCenter / Math.max(0.05, widthPinna), 2.4);
        const shade = 0.84 + 0.16 * hash2(Math.floor(pinnaCoord), 8, 53);
        leafVal = shade * (0.76 + 0.18 * vein + 0.12 * spanFrac);
        veinEm = Math.min(1.0, vein * 0.75 + rim * 0.65 + spanFrac * 0.25);
      }
    }

    if (onStem) {
      out.r = 160;
      out.g = 205;
      out.b = 142;
      out.a = 1.0;
      out.rough = 0.6;
      out.emR = 110;
      out.emG = 230;
      out.emB = 185;
    } else if (onLeaf) {
      out.r = 176 * leafVal;
      out.g = 230 * leafVal;
      out.b = 165 * leafVal;
      out.a = 1.0;
      out.rough = 0.64;
      out.emR = 95 * veinEm;
      out.emG = 248 * veinEm;
      out.emB = 195 * veinEm;
    } else {
      out.r = 132;
      out.g = 178;
      out.b = 122;
      out.a = 0.0;
      out.rough = 0.72;
      out.emR = 0;
      out.emG = 0;
      out.emB = 0;
    }
  });

  // 4. texMushroomCapAlpha: sombrerete laminar de seta alienígena con branquias radiales y borde festoneado
  const texMushroomCapAlpha = createFoliageTextureCard(512, (u, t, out) => {
    const dx = u - 0.5;
    const dy = Math.max(0.0, t - 0.04);
    const r = Math.hypot(dx * 1.05, dy);
    const ang = Math.atan2(dy, dx);
    const fanAngleOk = Math.abs(ang - Math.PI * 0.5) < 1.38;
    const scallop = 0.78 + 0.065 * Math.sin(ang * 11.0 + 0.5) + 0.028 * Math.cos(ang * 25.0) + 0.03 * tileNoise2(u, t, 20, 409);
    const laceHole = tileNoise2(u, t, 36, 421) > 0.78 && r > scallop * 0.84;

    if (fanAngleOk && r >= 0.02 && r <= scallop && !laceHole) {
      const span = r / Math.max(0.05, scallop);
      const gillWave = Math.pow(Math.abs(Math.sin(ang * 28.0 + Math.sin(r * 14.0) * 0.3)), 1.6);
      const spotNoise = tileNoise2(u * 1.4, t * 1.4, 24, 433);
      const rimGlow = Math.pow(span, 2.8);
      const luma = 0.72 + 0.24 * gillWave + 0.14 * spotNoise - 0.12 * Math.pow(span, 2.0);
      out.r = Math.min(255, 224 * luma);
      out.g = Math.min(255, 198 * luma);
      out.b = Math.min(255, 238 * luma);
      out.a = 1.0;
      out.rough = 0.44 + gillWave * 0.22;
      const gillEm = Math.min(1.0, gillWave * 0.72 * span + rimGlow * 0.78 + (spotNoise > 0.74 ? 0.45 : 0.0));
      out.emR = 235 * gillEm;
      out.emG = 140 * gillEm;
      out.emB = 255 * gillEm;
    } else {
      out.r = 165;
      out.g = 128;
      out.b = 180;
      out.a = 0.0;
      out.rough = 0.65;
      out.emR = 0;
      out.emG = 0;
      out.emB = 0;
    }
  });

  const foliage = {
    texPalmFrondAlpha,
    texCanopyBranchAlpha,
    texFernClusterAlpha,
    texMushroomCapAlpha,
    palm: texPalmFrondAlpha,
    canopy: texCanopyBranchAlpha,
    fern: texFernClusterAlpha,
    mushroom: texMushroomCapAlpha,
  };
  pbrCache.set('foliage', foliage);
  return foliage;
}

const depthMatCache = new WeakMap();

/**
 * Crea o reutiliza `MeshDepthMaterial` con recorte alfa sincronizado (`alphaTest = 0.45`)
 * para proyectar sombras con siluetas recortadas de hojas/frondas y no rectángulos sólidos.
 */
export function createFoliageDepthMaterial(alphaMapTex) {
  if (!alphaMapTex) {
    return new THREE.MeshDepthMaterial({
      depthPacking: THREE.RGBADepthPacking,
      alphaTest: 0.45,
      side: THREE.DoubleSide,
    });
  }
  if (depthMatCache.has(alphaMapTex)) return depthMatCache.get(alphaMapTex);
  const depthMat = new THREE.MeshDepthMaterial({
    depthPacking: THREE.RGBADepthPacking,
    map: alphaMapTex,
    alphaTest: 0.45,
    side: THREE.DoubleSide,
  });
  depthMatCache.set(alphaMapTex, depthMat);
  return depthMat;
}

/**
 * Mapa de normales procedural seamless (`512x512`) para `THREE.Water` (oleaje animado GPU).
 */
export function getWaterNormalTexture() {
  if (pbrCache.has('waterNormals')) return pbrCache.get('waterNormals');
  const size = 512;
  const c = makeOffscreenCanvas(size, size);
  if (!c) return null;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(size, size);
  const d = img.data;

  const evalHeight = (u, v) => {
    const w1 = tileFbm(u, v, 6, 3, 301);
    const w2 = tileFbm(u * 1.5 + 0.3, v * 1.5 - 0.2, 12, 3, 419) * 0.55;
    const ripple =
      Math.sin((u * 6.0 + v * 4.0) * Math.PI * 2) * 0.08 +
      Math.cos((u * 10.0 - v * 8.0) * Math.PI * 2) * 0.05;
    return w1 + w2 + ripple;
  };

  const eps = 1.0 / size;
  for (let py = 0; py < size; py++) {
    const v = (py + 0.5) / size;
    for (let px = 0; px < size; px++) {
      const u = (px + 0.5) / size;
      const dx = (evalHeight((u + eps) % 1, v) - evalHeight((u - eps + 1) % 1, v)) * 2.2;
      const dy = (evalHeight(u, (v + eps) % 1) - evalHeight(u, (v - eps + 1) % 1)) * 2.2;
      const len = Math.hypot(-dx, -dy, 1.0);
      const idx = (py * size + px) * 4;
      d[idx] = Math.round(((-dx / len) * 0.5 + 0.5) * 255);
      d[idx + 1] = Math.round(((-dy / len) * 0.5 + 0.5) * 255);
      d[idx + 2] = Math.round(((1.0 / len) * 0.5 + 0.5) * 255);
      d[idx + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = configureTexture(new THREE.CanvasTexture(c), false, 1);
  pbrCache.set('waterNormals', tex);
  return tex;
}

let fallbackDetailTex = null;
function getFallbackDetailTexture() {
  if (fallbackDetailTex) return fallbackDetailTex;
  const d = new Uint8Array([205, 205, 205, 255]);
  const t = new THREE.DataTexture(d, 1, 1);
  t.wrapS = THREE.RepeatWrapping;
  t.wrapT = THREE.RepeatWrapping;
  t.needsUpdate = true;
  fallbackDetailTex = t;
  return t;
}

/**
 * Inyecta splatting procedural por pendiente (`1 - abs(dot(worldNormal, radialUp))`), altitud
 * y detalle triplanar de alta frecuencia en espacio local (sin moiré orbital) mediante `onBeforeCompile`
 * en `MeshStandardMaterial` para terrenos naturales de Pandora, Badlands y Perugius.
 */
export function applyTerrainSplattingShader(material, opts = {}) {
  const mode = opts.mode || 'pandora';
  const rockColor = new THREE.Color(opts.rockHex ?? (mode === 'badlands' ? 0x5c3626 : 0x3b4046));
  const peakColor = new THREE.Color(opts.peakHex ?? (mode === 'badlands' ? 0x9c6e50 : 0xd2dce8));
  const shoreColor = new THREE.Color(opts.shoreHex ?? (mode === 'badlands' ? 0x16222c : 0x2c3024));
  const peakStart = opts.peakStart ?? 4.8;
  const peakEnd = opts.peakEnd ?? 9.5;
  const shoreBand = opts.shoreBand ?? 0.65;
  const hasAshFissures = Boolean(opts.hasAshFissures);
  const hasNationWeights = Boolean(opts.hasNationWeights);
  const detailTex = opts.detailTex || getOrganicTerrainPbrSet().map || getFallbackDetailTexture();

  const uniforms = {
    uPlanetCenter: { value: new THREE.Vector3() },
    uPlanetWorldRadius: { value: opts.worldRadius ?? 1000.0 },
    uRockColor: { value: rockColor },
    uPeakColor: { value: peakColor },
    uShoreColor: { value: shoreColor },
    uDetailTex: { value: detailTex },
    uLavaTime: { value: 0 },
  };
  material.userData.splatUniforms = uniforms;

  const prevCompile = material.onBeforeCompile;
  material.onBeforeCompile = (shader, renderer) => {
    if (prevCompile) prevCompile(shader, renderer);
    shader.uniforms.uPlanetCenter = uniforms.uPlanetCenter;
    shader.uniforms.uPlanetWorldRadius = uniforms.uPlanetWorldRadius;
    shader.uniforms.uRockColor = uniforms.uRockColor;
    shader.uniforms.uPeakColor = uniforms.uPeakColor;
    shader.uniforms.uShoreColor = uniforms.uShoreColor;
    shader.uniforms.uDetailTex = uniforms.uDetailTex;
    shader.uniforms.uLavaTime = uniforms.uLavaTime;

    const ashVertPars = hasAshFissures ? `attribute float aAshMask;\nvarying float vAshMask;\n` : '';
    const ashVertBody = hasAshFissures ? `\n        vAshMask = aAshMask;` : '';
    const nationVertPars = hasNationWeights ? `attribute vec3 aNationWeights;\nvarying vec3 vNationWeights;\n` : '';
    const nationVertBody = hasNationWeights ? `\n        vNationWeights = aNationWeights;` : '';
    shader.vertexShader =
      `varying vec3 vSplatWorldPos;\nvarying vec3 vSplatWorldNormal;\nvarying vec3 vSplatLocalPos;\nvarying vec3 vSplatLocalNormal;\n${ashVertPars}${nationVertPars}` +
      shader.vertexShader.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        vSplatLocalPos = transformed;
        vSplatLocalNormal = objectNormal;
        vSplatWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vSplatWorldNormal = normalize(mat3(modelMatrix) * objectNormal);${ashVertBody}${nationVertBody}`
      );

    const ashFragPars = hasAshFissures
      ? `uniform float uLavaTime;\nvarying float vAshMask;\nvec3 _hash33(vec3 p3) {\n  p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));\n  p3 += dot(p3, p3.yxz + 33.33);\n  return fract((p3.xxy + p3.yxx) * p3.zyx);\n}\nfloat _vorCrack3D(vec3 x) {\n  vec3 n = floor(x);\n  vec3 f = fract(x);\n  float d1 = 8.0;\n  float d2 = 8.0;\n  for (int k = -1; k <= 1; k++) {\n    for (int j = -1; j <= 1; j++) {\n      for (int i = -1; i <= 1; i++) {\n        vec3 g = vec3(float(i), float(j), float(k));\n        vec3 o = 0.5 + 0.42 * sin(_hash33(n + g) * 6.2831853 + vec3(0.0, 2.1, 4.2));\n        vec3 r = g + o - f;\n        float d = dot(r, r);\n        if (d < d1) { d2 = d1; d1 = d; }\n        else if (d < d2) { d2 = d; }\n      }\n    }\n  }\n  return sqrt(d2) - sqrt(d1);\n}\n`
      : '';
    const nationFragPars = hasNationWeights ? `varying vec3 vNationWeights;\n` : '';

    const nationColorCode = hasNationWeights
      ? `\n          vec3 _natW = vNationWeights / max(0.001, vNationWeights.x + vNationWeights.y + vNationWeights.z);\n          float _flatLand = (1.0 - smoothstep(0.18, 0.44, _splatSlope)) * smoothstep(0.08, 0.55, _splatAlt);\n          vec3 _forestHumus = mix(vec3(0.06, 0.12, 0.07), vec3(0.11, 0.24, 0.10), clamp((_gMacro - 0.55) * 1.8, 0.0, 1.0));\n          diffuseColor.rgb = mix(diffuseColor.rgb, mix(diffuseColor.rgb, _forestHumus, 0.44), _natW.x * _flatLand * _closeFade);\n          float _sandZone = smoothstep(-0.08, 0.16, _splatAlt) * (1.0 - smoothstep(0.45, 1.15, _splatAlt)) * (1.0 - smoothstep(0.25, 0.55, _splatSlope));\n          vec3 _coralSand = vec3(0.76, 0.68, 0.49) * (0.86 + 0.28 * _gMacro);\n          diffuseColor.rgb = mix(diffuseColor.rgb, _coralSand, _natW.y * _sandZone * 0.68);\n          float _wetTide = (1.0 - smoothstep(0.0, 0.34, abs(_splatAlt))) * step(-0.22, _splatAlt);\n          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.14, 0.20, 0.18), _natW.y * _wetTide * 0.58);\n          vec3 _ashBasalt = vec3(0.075, 0.068, 0.072) * (0.82 + 0.36 * _gMacro);\n          diffuseColor.rgb = mix(diffuseColor.rgb, _ashBasalt, _natW.z * smoothstep(0.15, 0.48, _splatSlope) * 0.55);`
      : '';
    const nationRoughCode = hasNationWeights
      ? `\n          vec3 _natWR = vNationWeights / max(0.001, vNationWeights.x + vNationWeights.y + vNationWeights.z);\n          float _wetShoreR = (1.0 - smoothstep(0.0, 0.38, abs(_splatAltR))) * step(-0.24, _splatAltR);\n          roughnessFactor = mix(roughnessFactor, 0.18, _natWR.y * _wetShoreR * 0.88);\n          roughnessFactor = mix(roughnessFactor, 0.84, _natWR.x * (1.0 - _rockRoughMask) * 0.35);`
      : '';

    const ashColorCode = hasAshFissures
      ? `\n          float _vorCrackGlow = 0.0;\n          float _vorCrackCore = 0.0;\n          float _ashZone = smoothstep(0.55, 0.78, vAshMask);\n          if (_ashZone > 0.005) {\n            vec3 _warpP = vSplatLocalPos * 11.5 + sin(vSplatLocalPos.yzx * 23.0) * 0.24 + cos(vSplatLocalPos.zxy * 41.0) * 0.09;\n            float _v1 = _vorCrack3D(_warpP);\n            float _v2 = _vorCrack3D(_warpP * 2.35 + vec3(3.7, 1.9, 5.1));\n            float _cr1 = 1.0 - smoothstep(0.010, 0.062, _v1);\n            float _cr2 = (1.0 - smoothstep(0.006, 0.044, _v2)) * (1.0 - smoothstep(0.018, 0.26, _v1));\n            _vorCrackGlow = clamp(_cr1 + _cr2 * 0.82, 0.0, 1.0) * _ashZone;\n            _vorCrackCore = (1.0 - smoothstep(0.002, 0.026, min(_v1, _v2 * 1.15))) * _ashZone;\n            float _scorchRim = (1.0 - smoothstep(0.03, 0.16, _v1)) * _ashZone;\n            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.048, 0.042, 0.046), _ashZone * 0.45);\n            diffuseColor.rgb *= mix(1.0, 0.38, _scorchRim);\n            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.95, 0.28, 0.04), _vorCrackGlow * 0.55);\n          }`
      : '';

    let frag =
      `uniform vec3 uPlanetCenter;\nuniform float uPlanetWorldRadius;\nuniform vec3 uRockColor;\nuniform vec3 uPeakColor;\nuniform vec3 uShoreColor;\nuniform sampler2D uDetailTex;\n${ashFragPars}${nationFragPars}varying vec3 vSplatWorldPos;\nvarying vec3 vSplatWorldNormal;\nvarying vec3 vSplatLocalPos;\nvarying vec3 vSplatLocalNormal;\n` +
      shader.fragmentShader
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
          vec3 _splatRad = vSplatWorldPos - uPlanetCenter;
          float _splatDist = max(0.001, length(_splatRad));
          vec3 _splatUp = _splatRad / _splatDist;
          float _splatAlt = _splatDist - uPlanetWorldRadius;
          float _splatSlope = 1.0 - abs(dot(normalize(vSplatWorldNormal), _splatUp));
          float _rockMask = smoothstep(0.28, 0.58, _splatSlope) * smoothstep(-0.2, 0.7, _splatAlt);
          float _peakMask = smoothstep(${peakStart.toFixed(2)}, ${peakEnd.toFixed(2)}, _splatAlt);
          float _shoreMask = (1.0 - smoothstep(0.0, ${shoreBand.toFixed(2)}, abs(_splatAlt))) * step(-0.35, _splatAlt);
          float _camDistS = length(cameraPosition - vSplatWorldPos);
          float _closeFade = 1.0 - smoothstep(26.0, 96.0, _camDistS);
          float _microFade = 1.0 - smoothstep(8.0, 38.0, _camDistS);
          vec3 _triW = pow(abs(normalize(vSplatLocalNormal)), vec3(4.0));
          _triW /= max(0.001, _triW.x + _triW.y + _triW.z);
          float _gMacro = texture2D(uDetailTex, vSplatLocalPos.yz * 16.0).g * _triW.x
                        + texture2D(uDetailTex, vSplatLocalPos.xz * 16.0).g * _triW.y
                        + texture2D(uDetailTex, vSplatLocalPos.xy * 16.0).g * _triW.z;
          float _gMicro = texture2D(uDetailTex, vSplatLocalPos.yz * 88.0).g * _triW.x
                        + texture2D(uDetailTex, vSplatLocalPos.xz * 88.0).g * _triW.y
                        + texture2D(uDetailTex, vSplatLocalPos.xy * 88.0).g * _triW.z;
          float _detailMul = 1.0 + (_gMacro - 0.80) * 0.42 * _closeFade + (_gMicro - 0.80) * 0.56 * _microFade;
          float _strataWave = 0.80 + 0.20 * sin(_splatAlt * 26.0 + _gMacro * 4.2);
          vec3 _strataTex = uRockColor * (0.82 + 0.36 * _gMacro) * mix(1.0, _strataWave, 0.68 * _closeFade);
          diffuseColor.rgb = mix(diffuseColor.rgb, _strataTex, _rockMask * 0.78);
          diffuseColor.rgb = mix(diffuseColor.rgb, uPeakColor, _peakMask * 0.62);
          diffuseColor.rgb = mix(diffuseColor.rgb, uShoreColor, _shoreMask * 0.72);${nationColorCode}
          diffuseColor.rgb *= clamp(_detailMul, 0.72, 1.28);${ashColorCode}`
        )
        .replace(
          '#include <roughnessmap_fragment>',
          `#include <roughnessmap_fragment>
          vec3 _splatRadR = vSplatWorldPos - uPlanetCenter;
          float _splatDistR = max(0.001, length(_splatRadR));
          vec3 _splatUpR = _splatRadR / _splatDistR;
          float _splatAltR = _splatDistR - uPlanetWorldRadius;
          float _splatSlopeR = 1.0 - abs(dot(normalize(vSplatWorldNormal), _splatUpR));
          float _rockRoughMask = smoothstep(0.35, 0.65, _splatSlopeR);
          float _shoreRoughMask = (1.0 - smoothstep(0.0, ${shoreBand.toFixed(2)}, abs(_splatAltR))) * step(-0.35, _splatAltR);
          float _camDistR = length(cameraPosition - vSplatWorldPos);
          float _microFadeR = 1.0 - smoothstep(10.0, 52.0, _camDistR);
          vec3 _triWR = pow(abs(normalize(vSplatLocalNormal)), vec3(4.0));
          _triWR /= max(0.001, _triWR.x + _triWR.y + _triWR.z);
          float _gMicroR = texture2D(uDetailTex, vSplatLocalPos.yz * 72.0).g * _triWR.x
                         + texture2D(uDetailTex, vSplatLocalPos.xz * 72.0).g * _triWR.y
                         + texture2D(uDetailTex, vSplatLocalPos.xy * 72.0).g * _triWR.z;
          roughnessFactor = clamp(roughnessFactor + (_gMicroR - 0.80) * 0.28 * _microFadeR, 0.16, 0.98);
          roughnessFactor = mix(roughnessFactor, 0.94, _rockRoughMask * 0.7);
          roughnessFactor = mix(roughnessFactor, 0.22, _shoreRoughMask * 0.85);${nationRoughCode}`
        );

    if (hasAshFissures) {
      frag = frag.replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
          if (_vorCrackGlow > 0.002) {
            float _magmaPulse = 0.86 + 0.14 * sin(uLavaTime * 2.1 + vSplatLocalPos.x * 16.0 + vSplatLocalPos.z * 13.0);
            vec3 _magmaCol = mix(vec3(1.15, 0.18, 0.02), vec3(2.35, 0.92, 0.16), clamp(_vorCrackCore * 1.2, 0.0, 1.0));
            totalEmissiveRadiance += _magmaCol * _vorCrackGlow * _magmaPulse;
          }`
      );
    }
    shader.fragmentShader = frag;
  };
  material.customProgramCacheKey = () => `terrainSplat_${mode}_${peakStart}_${hasAshFissures ? 'ashvor' : 'std'}_${hasNationWeights ? 'nat' : 'nonat'}_triplanar2`;
  return uniforms;
}

/**
 * Shader de Desenfoque Radial periférico (`RadialMotionBlurShader`) para velocidad extrema:
 * mantiene nítido el centro de visión/retícula y desenfoca suavemente la periferia.
 */
export const RadialMotionBlurShader = {
  name: 'RadialMotionBlurShader',
  uniforms: {
    tDiffuse: { value: null },
    uBlurStrength: { value: 0.0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uBlurStrength;
    varying vec2 vUv;
    void main() {
      vec4 base = texture2D(tDiffuse, vUv);
      if (uBlurStrength < 0.002) {
        gl_FragColor = base;
        return;
      }
      vec2 toEdge = vUv - vec2(0.5);
      float radialDist = length(toEdge);
      float edgeMask = smoothstep(0.18, 0.72, radialDist);
      vec2 stepUv = toEdge * (uBlurStrength * 0.036 * edgeMask);
      vec4 accum = base;
      accum += texture2D(tDiffuse, vUv - stepUv * 0.2);
      accum += texture2D(tDiffuse, vUv - stepUv * 0.4);
      accum += texture2D(tDiffuse, vUv - stepUv * 0.6);
      accum += texture2D(tDiffuse, vUv - stepUv * 0.8);
      accum += texture2D(tDiffuse, vUv - stepUv);
      gl_FragColor = mix(base, accum / 6.0, edgeMask);
    }
  `,
};

/**
 * Construye el Cono de Choque Supersónico (Singularidad Prandtl-Glauert) adherido a la cámara.
 */
export function createSupersonicShockwaveCone() {
  const geo = new THREE.ConeGeometry(8.5, 22.0, 32, 8, true);
  // Orientar con vértice hacia adelante (-Z) alrededor de la cabina
  geo.rotateX(-Math.PI * 0.5);
  const uniforms = {
    uTime: { value: 0 },
    uOpacity: { value: 0 },
    uColor: { value: new THREE.Color(0xcceeff) },
  };

  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: /* glsl */ `
      #include <common>
      #include <logdepthbuf_pars_vertex>
      uniform float uTime;
      varying vec2 vUv;
      varying vec3 vNormalV;
      varying vec3 vViewPos;
      void main() {
        vUv = uv;
        vec3 displaced = position + normal * (sin(position.z * 1.4 - uTime * 22.0) * 0.18 * (1.0 - uv.y));
        vec4 mv = modelViewMatrix * vec4(displaced, 1.0);
        vViewPos = -mv.xyz;
        vNormalV = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * mv;
        #include <logdepthbuf_vertex>
      }
    `,
    fragmentShader: /* glsl */ `
      #include <common>
      #include <logdepthbuf_pars_fragment>
      uniform float uTime;
      uniform float uOpacity;
      uniform vec3 uColor;
      varying vec2 vUv;
      varying vec3 vNormalV;
      varying vec3 vViewPos;
      void main() {
        #include <logdepthbuf_fragment>
        if (uOpacity < 0.005) discard;
        vec3 V = normalize(vViewPos);
        vec3 N = normalize(vNormalV);
        float fresnel = pow(max(1.0 - abs(dot(N, V)), 0.001), 2.1);
        float vaporRing = exp(-pow((vUv.y - 0.52) / 0.16, 2.0));
        float streaks = 0.65 + 0.35 * sin(vUv.x * 56.0 + uTime * 18.0);
        float alpha = uOpacity * (fresnel * 0.72 + vaporRing * 0.55) * streaks * smoothstep(0.02, 0.25, vUv.y) * (1.0 - smoothstep(0.82, 1.0, vUv.y));
        gl_FragColor = vec4(uColor * (1.2 + vaporRing * 0.8), clamp(alpha, 0.0, 0.85));
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = 'Mach_Supersonic_Shockwave_Cone';
  mesh.position.set(0, -0.35, -10.5);
  mesh.visible = false;
  mesh.frustumCulled = false;
  mesh.userData.skipSSAO = true;
  return { mesh, uniforms };
}
