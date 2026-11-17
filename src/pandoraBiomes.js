import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { hashI, vnoise, fbm } from './planetarySphere.js';
import { getBarkPbrSet, getRockBasaltPbrSet } from './proceduralPbr.js';

const S = 1.0 / 3.5;
const UP_Y = new THREE.Vector3(0, 1, 0);

function makeSoftParticleTexture(innerRgba, midRgba) {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 32);
  g.addColorStop(0.0, innerRgba);
  g.addColorStop(0.45, midRgba);
  g.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

function buildLocalFrame(centerDir) {
  const upDir = centerDir.clone().normalize();
  const ref = Math.abs(upDir.x) < 0.85 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 0, 1);
  const e1 = new THREE.Vector3().crossVectors(upDir, ref).normalize();
  const e2 = new THREE.Vector3().crossVectors(upDir, e1).normalize();
  return { upDir, e1, e2 };
}

/**
 * Geometría de árbol calcinado sin hojas (tronco retorcido + ramas quemadas).
 */
function createCharredDeadTreeGeometry() {
  const parts = [];
  const trunkCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.05, 0.35, -0.02),
    new THREE.Vector3(-0.04, 0.72, 0.04),
    new THREE.Vector3(0.02, 1.0, -0.01),
  ]);
  parts.push(new THREE.TubeGeometry(trunkCurve, 6, 0.075, 5, false).toNonIndexed());

  const branches = [
    [new THREE.Vector3(0.02, 0.48, 0.01), new THREE.Vector3(0.32, 0.76, 0.14)],
    [new THREE.Vector3(-0.02, 0.62, 0.03), new THREE.Vector3(-0.28, 0.92, -0.18)],
    [new THREE.Vector3(0.0, 0.78, 0.02), new THREE.Vector3(0.18, 1.12, -0.22)],
    [new THREE.Vector3(0.02, 0.56, -0.02), new THREE.Vector3(-0.22, 0.82, 0.25)],
  ];
  for (const [b0, b1] of branches) {
    const mid = b0.clone().lerp(b1, 0.5).add(new THREE.Vector3(0, 0.06, 0));
    const bCurve = new THREE.CatmullRomCurve3([b0, mid, b1]);
    parts.push(new THREE.TubeGeometry(bCurve, 4, 0.026, 4, false).toNonIndexed());
  }

  const merged = mergeGeometries(parts, false);
  merged.computeVertexNormals();
  return merged;
}

/**
 * Construye las 3 geometrías de coral submarino: abanico, grupo tubular y anémona tentacular.
 */
function createCoralGeometries() {
  // 1. Coral abanico ramificado
  const fanParts = [];
  for (let i = -2; i <= 2; i++) {
    const blade = new THREE.PlaneGeometry(0.36, 0.95, 2, 3);
    blade.translate(i * 0.14, 0.48, Math.sin(i * 0.9) * 0.06);
    blade.rotateZ(-i * 0.22);
    fanParts.push(blade.toNonIndexed());
  }
  const fanGeo = mergeGeometries(fanParts, false);
  fanGeo.computeVertexNormals();

  // 2. Coral tubular agrupado
  const tubeParts = [];
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const rad = i === 0 ? 0.0 : 0.28;
    const h = i === 0 ? 1.0 : 0.55 + hashI(i, 3, 7) * 0.45;
    const cyl = new THREE.CylinderGeometry(0.11, 0.08, h, 6, 1);
    cyl.translate(Math.cos(a) * rad, h * 0.5, Math.sin(a) * rad);
    cyl.rotateZ((hashI(i, 2, 5) - 0.5) * 0.22);
    tubeParts.push(cyl.toNonIndexed());
  }
  const tubeGeo = mergeGeometries(tubeParts, false);
  tubeGeo.computeVertexNormals();

  // 3. Anémona marina corona de tentáculos
  const anemParts = [];
  const base = new THREE.CylinderGeometry(0.32, 0.4, 0.28, 8);
  base.translate(0, 0.14, 0);
  anemParts.push(base.toNonIndexed());
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const t = new THREE.ConeGeometry(0.065, 0.72, 4);
    t.translate(0, 0.36, 0);
    t.rotateX(0.55);
    t.rotateY(a);
    t.translate(Math.cos(a) * 0.22, 0.2, Math.sin(a) * 0.22);
    anemParts.push(t.toNonIndexed());
  }
  const anemoneGeo = mergeGeometries(anemParts, false);
  anemoneGeo.computeVertexNormals();

  return { fanGeo, tubeGeo, anemoneGeo };
}

/**
 * Alga gigante marina ondulante (doble cinta helicoidal).
 */
function createGiantKelpGeometry() {
  const parts = [];
  for (let s = 0; s < 2; s++) {
    const strip = new THREE.PlaneGeometry(0.24, 1.0, 2, 8);
    strip.translate(0, 0.5, 0);
    const p = strip.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const y = p.getY(i);
      const x = p.getX(i) + Math.sin(y * Math.PI * 3.0) * 0.14;
      const z = Math.cos(y * Math.PI * 2.5 + s * 1.57) * 0.10;
      p.setXYZ(i, x, y, z);
    }
    strip.rotateY(s * Math.PI * 0.5);
    strip.computeVertexNormals();
    parts.push(strip.toNonIndexed());
  }
  const merged = mergeGeometries(parts, false);
  merged.computeVertexNormals();
  return merged;
}

/**
 * Bioma Volcánico / Región de Ceniza (Pueblo Ash — Avatar 3):
 * - Relieve oscuro de basalto agrietado y ceniza gris con 3 calderas/volcanes humeantes
 * - Vetas de lava incandescente en grietas que despiertan en la oscuridad
 * - 440 árboles calcinados sin hojas + 1.400 partículas de ceniza flotante
 * - Poblado tribal oscuro con huesos gigantes, chozas quemadas, arcos óseos y hogueras vivas
 */
export function buildAshPeopleBiome(R, spec, sampleAtDir, matTracker) {
  const SPREAD = 1.0 / 3.2;
  const fr = buildLocalFrame(spec.capDir);
  const group = new THREE.Group();
  group.name = 'Pandora_Biome_AshPeople';

  const sampleLocalPt = (lx, lz, hOffset = 0.0) => {
    const dir = fr.upDir
      .clone()
      .addScaledVector(fr.e1, lx)
      .addScaledVector(fr.e2, lz)
      .normalize();
    const info = sampleAtDir(dir.x, dir.y, dir.z);
    return {
      pos: dir.clone().multiplyScalar(R + info.elev + hOffset),
      normal: dir,
      elev: info.elev,
      nation: info.nation,
    };
  };

  // 1. Estratovolcanes esculpidos (48x24) con cráter profundo, surcos radiales, faldón enterrado (-18.5 u) y magma central
  // (Las grietas de lava en terreno pasan al shader 3D Voronoi de Pandora_Global_Terrain_360 sin tiras flotantes)
  const pbrRock = getRockBasaltPbrSet();
  const volcanoUniforms = { uLavaTime: { value: 0 } };
  const basaltMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughnessMap: pbrRock.roughnessMap,
    bumpMap: pbrRock.bumpMap,
    bumpScale: 0.055,
    roughness: 0.92,
    metalness: 0.06,
  });
  basaltMat.onBeforeCompile = (shader) => {
    shader.uniforms.uLavaTime = volcanoUniforms.uLavaTime;
    shader.vertexShader =
      `attribute float aVolcanoLava;\nvarying float vVolcanoLava;\nvarying vec3 vVolPos;\n` +
      shader.vertexShader.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>\n        vVolcanoLava = aVolcanoLava;\n        vVolPos = transformed;`
      );
    shader.fragmentShader =
      `uniform float uLavaTime;\nvarying float vVolcanoLava;\nvarying vec3 vVolPos;\n` +
      shader.fragmentShader.replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
        if (vVolcanoLava > 0.01) {
          float pulseV = 0.84 + 0.16 * sin(uLavaTime * 2.4 + vVolPos.x * 95.0 + vVolPos.z * 85.0);
          vec3 magma = mix(vec3(1.1, 0.16, 0.02), vec3(2.2, 0.62, 0.08), vVolcanoLava);
          totalEmissiveRadiance += magma * pow(vVolcanoLava, 1.35) * pulseV;
        }`
      );
  };
  basaltMat.customProgramCacheKey = () => 'pandoraAshStratovolcanoV1';

  const craterLavaMat = new THREE.MeshStandardMaterial({
    color: 0x6b1404,
    emissive: 0xff4608,
    emissiveIntensity: 1.55,
    roughness: 0.25,
  });
  craterLavaMat.userData.animatedEmissive = true;
  matTracker.push({
    mat: craterLavaMat,
    dayColor: 0x7c1c06,
    nightColor: 0xff6218,
    dayEmissive: 0xff3b08,
    nightEmissive: 0xff540c,
    dayEI: 1.45,
    nightEI: 2.65,
    pulsePhase: 0.4,
  });

  const createSculptedStratovolcano = (vs, vSeed) => {
    const ANG_SEGS = 48;
    const H_RINGS = 24;
    const SKIRT_DEPTH = -18.5 / 157.5; // ~ -0.1175 local => -18.5 u bajo el centro en la esfera
    const vCount = (ANG_SEGS + 1) * (H_RINGS + 1);
    const positions = new Float32Array(vCount * 3);
    const colors = new Float32Array(vCount * 3);
    const uvs = new Float32Array(vCount * 2);
    const lavaGlow = new Float32Array(vCount);
    const indices = [];

    const cSkirt = new THREE.Color(0x161417);
    const cMidBasalt = new THREE.Color(0x211d20);
    const cRidgeAsh = new THREE.Color(0x2a2528);
    const cCaldera = new THREE.Color(0x100e10);
    const cTmp = new THREE.Color();

    for (let iy = 0; iy <= H_RINGS; iy++) {
      for (let ix = 0; ix <= ANG_SEGS; ix++) {
        const u = ix / ANG_SEGS;
        const phi = u * Math.PI * 2;
        const cPhi = Math.cos(phi);
        const sPhi = Math.sin(phi);

        const warpN = fbm(cPhi * 2.1 + vSeed, (iy / H_RINGS) * 2.4, sPhi * 2.1 - vSeed, 3);
        const fineN = vnoise(cPhi * 5.8 + vSeed * 1.7, (iy / H_RINGS) * 4.5, sPhi * 5.8);
        const gullyWave = Math.sin(phi * 9.0 + warpN * 4.2 + vSeed * 2.3);
        const chuteMask = Math.pow(Math.max(0, -gullyWave), 2.5);

        let radLocal = vs.rad;
        let yLocal = 0.0;
        let glowVal = 0.0;

        if (iy <= 4) {
          // Faldón ancho enterrado profundamente en la curvatura esférica del planeta
          const st = iy / 4;
          yLocal = THREE.MathUtils.lerp(SKIRT_DEPTH, -0.004, st);
          const flare = THREE.MathUtils.lerp(1.48, 1.30, st);
          radLocal = vs.rad * flare * (1.0 + (warpN - 0.5) * 0.14);
          cTmp.copy(cSkirt);
        } else if (iy <= 18) {
          // Laderas cóncavas erosionadas de estratovolcán con surcos radiales y crestas basálticas
          const st = (iy - 4) / 14;
          const rBase = vs.rad * THREE.MathUtils.lerp(1.30, 0.34, Math.pow(st, 0.72));
          const grooveIndent = 1.0 + (0.12 * gullyWave + 0.16 * (warpN - 0.5) + 0.07 * fineN) * (1.0 - st * 0.28);
          radLocal = rBase * grooveIndent;
          yLocal = THREE.MathUtils.lerp(-0.004, vs.h, Math.pow(st, 1.32)) + (warpN - 0.5) * vs.h * 0.055 * (1.0 - st * 0.3);
          const cr = THREE.MathUtils.smoothstep(st, 0.56, 0.96);
          glowVal = chuteMask * cr * 0.72;
          cTmp.copy(cSkirt).lerp(cMidBasalt, st * 0.8).lerp(cRidgeAsh, Math.max(0, fineN) * 0.48);
        } else {
          // Borde dentado e interior profundo del cráter hasta caldera con magma
          const ct = (iy - 18) / 6;
          const rimR = vs.rad * 0.34 * (1.0 + 0.16 * (warpN - 0.5) + 0.08 * fineN);
          const rimY = vs.h * (1.0 + 0.09 * (warpN - 0.5) + 0.06 * gullyWave);
          radLocal = rimR * (1.0 - ct * 0.88);
          yLocal = rimY - Math.pow(ct, 0.76) * (vs.h * 0.38);
          glowVal = Math.max(chuteMask * 0.45 * (1.0 - ct * 0.5), Math.pow(ct, 1.45) * 0.95);
          cTmp.copy(cMidBasalt).lerp(cCaldera, ct * 0.9);
        }

        const idx = iy * (ANG_SEGS + 1) + ix;
        positions[idx * 3] = cPhi * radLocal;
        positions[idx * 3 + 1] = yLocal;
        positions[idx * 3 + 2] = sPhi * radLocal;

        colors[idx * 3] = cTmp.r;
        colors[idx * 3 + 1] = cTmp.g;
        colors[idx * 3 + 2] = cTmp.b;

        uvs[idx * 2] = u * 4.0;
        uvs[idx * 2 + 1] = (iy / H_RINGS) * 3.0;
        lavaGlow[idx] = glowVal;
      }
    }

    for (let iy = 0; iy < H_RINGS; iy++) {
      for (let ix = 0; ix < ANG_SEGS; ix++) {
        const a = iy * (ANG_SEGS + 1) + ix;
        const b = a + ANG_SEGS + 1;
        const c = a + 1;
        const d = b + 1;
        indices.push(a, b, c, c, b, d);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geo.setAttribute('aVolcanoLava', new THREE.BufferAttribute(lavaGlow, 1));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
  };

  const volcanoSpecs = [
    { lx: -0.045 * SPREAD, lz: 0.032 * SPREAD, rad: 0.185 * S, h: 0.215 * S },
    { lx: 0.072 * SPREAD, lz: -0.048 * SPREAD, rad: 0.155 * S, h: 0.175 * S },
    { lx: -0.025 * SPREAD, lz: -0.095 * SPREAD, rad: 0.142 * S, h: 0.155 * S },
  ];
  const smokeEmitters = [];

  volcanoSpecs.forEach((vs, idx) => {
    const pt = sampleLocalPt(vs.lx, vs.lz, 0.0);
    const vGeo = createSculptedStratovolcano(vs, idx * 4.7 + 1.3);
    const vMesh = new THREE.Mesh(vGeo, basaltMat);
    vMesh.position.copy(pt.pos);
    vMesh.quaternion.setFromUnitVectors(UP_Y, pt.normal);
    vMesh.castShadow = true;
    vMesh.receiveShadow = true;
    vMesh.name = `Pandora_Ash_Volcano_${idx + 1}`;
    group.add(vMesh);

    // Lago de magma horizontal asentado en el fondo profundo de la caldera
    const craterPool = new THREE.Mesh(new THREE.CircleGeometry(vs.rad * 0.22, 18), craterLavaMat);
    craterPool.rotateX(-Math.PI * 0.5);
    craterPool.position.set(0, vs.h * 0.65, 0);
    craterPool.name = `Pandora_Ash_Volcano_MagmaCore_${idx + 1}`;
    vMesh.add(craterPool);

    smokeEmitters.push({
      basePos: pt.pos.clone().addScaledVector(pt.normal, vs.h * 0.72),
      normal: pt.normal.clone(),
      maxH: (0.16 + idx * 0.03) * S,
      phase: idx * 2.1,
    });
  });

  // 2. Columnas de humo oscuro saliendo del cráter + 600 pavesas lentas en el aire de Ceniza
  const puffsPerVolcano = 32;
  const totalSmoke = smokeEmitters.length * puffsPerVolcano;
  const smokePos = new Float32Array(totalSmoke * 3);
  const smokeGeo = new THREE.BufferGeometry();
  smokeGeo.setAttribute('position', new THREE.BufferAttribute(smokePos, 3));
  const smokeMat = new THREE.PointsMaterial({
    size: 14.5,
    map: makeSoftParticleTexture('rgba(38, 34, 36, 0.76)', 'rgba(18, 16, 17, 0.30)'),
    color: 0x262224,
    transparent: true,
    opacity: 0.66,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const smokePoints = new THREE.Points(smokeGeo, smokeMat);
  smokePoints.frustumCulled = false;
  smokePoints.castShadow = false;
  smokePoints.name = 'Pandora_Ash_Volcano_Smoke';
  group.add(smokePoints);

  const ashCount = 600;
  const ashPos = new Float32Array(ashCount * 3);
  const ashSeeds = [];
  for (let i = 0; i < ashCount; i++) {
    const a = hashI(i, 3, 19) * Math.PI * 2;
    const rad = Math.sqrt(hashI(i, 7, 11)) * 0.24 * SPREAD;
    const pt = sampleLocalPt(Math.cos(a) * rad, Math.sin(a) * rad, (0.006 + hashI(i, 5, 2) * 0.20) * S);
    ashPos[i * 3] = pt.pos.x;
    ashPos[i * 3 + 1] = pt.pos.y;
    ashPos[i * 3 + 2] = pt.pos.z;
    ashSeeds.push({
      dir: pt.normal,
      baseAlt: pt.pos.length(),
      phase: hashI(i, 9, 4) * Math.PI * 2,
      speed: 0.04 + hashI(i, 2, 8) * 0.06,
    });
  }
  const ashGeo = new THREE.BufferGeometry();
  ashGeo.setAttribute('position', new THREE.BufferAttribute(ashPos, 3));
  const ashMat = new THREE.PointsMaterial({
    size: 0.62,
    map: makeSoftParticleTexture('rgba(255, 138, 64, 0.92)', 'rgba(180, 62, 24, 0.28)'),
    color: 0xff9a5a,
    transparent: true,
    opacity: 0.54,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const ashPoints = new THREE.Points(ashGeo, ashMat);
  ashPoints.frustumCulled = false;
  ashPoints.castShadow = false;
  ashPoints.name = 'Pandora_Ash_Floating_Cinders';
  group.add(ashPoints);

  // 3. 260 Árboles calcinados sin hojas (castShadow=false para 60 FPS en lejanía)
  const charredCount = 260;
  const pbrBark = getBarkPbrSet();
  const charredGeo = createCharredDeadTreeGeometry();
  charredGeo.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), R + 1.5);
  const charredMat = new THREE.MeshStandardMaterial({
    color: 0x262220,
    map: pbrBark.map,
    roughnessMap: pbrBark.roughnessMap,
    bumpMap: pbrBark.bumpMap,
    bumpScale: 0.04,
    roughness: 0.94,
    metalness: 0.05,
  });
  const charredMatrices = [];
  const dummy = new THREE.Object3D();

  for (let i = 0; i < charredCount * 2 && charredMatrices.length < charredCount; i++) {
    const a = hashI(i, 4, 17) * Math.PI * 2;
    const rad = 0.014 + Math.sqrt(hashI(i, 8, 3)) * 0.10;
    const pt = sampleLocalPt(Math.cos(a) * rad, Math.sin(a) * rad, -0.0005);
    if (pt.nation !== 'ash') continue;
    const ts = (0.018 + hashI(i, 2, 11) * 0.028) * S;
    dummy.position.copy(pt.pos);
    dummy.quaternion.setFromUnitVectors(UP_Y, pt.normal);
    dummy.rotateY(hashI(i, 6, 9) * Math.PI * 2);
    dummy.rotateX((hashI(i, 1, 5) - 0.5) * 0.22);
    dummy.scale.set(ts, ts, ts);
    dummy.updateMatrix();
    charredMatrices.push(dummy.matrix.clone());
  }
  const charredInst = new THREE.InstancedMesh(charredGeo, charredMat, Math.max(1, charredMatrices.length));
  charredInst.name = 'Pandora_Ash_Charred_Trees';
  charredInst.frustumCulled = false;
  charredInst.castShadow = true;
  charredInst.receiveShadow = true;
  charredMatrices.forEach((m, idx) => charredInst.setMatrixAt(idx, m));
  charredInst.instanceMatrix.needsUpdate = true;
  group.add(charredInst);

  // 5. Poblado tribal Ash People (huesos gigantes, arcos óseos, chozas quemadas y hogueras)
  const boneMat = new THREE.MeshStandardMaterial({ color: 0xb9aa96, roughness: 0.78 });
  const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x241d19, roughness: 0.92 });
  const fireMat = new THREE.MeshStandardMaterial({
    color: 0xffaa38,
    emissive: 0xff5a14,
    emissiveIntensity: 1.15,
    roughness: 0.35,
  });
  fireMat.userData.animatedEmissive = true;
  matTracker.push({
    mat: fireMat,
    dayColor: 0xffaa38,
    nightColor: 0xffdd78,
    dayEmissive: 0xff5a14,
    nightEmissive: 0xff6818,
    dayEI: 0.95,
    nightEI: 2.65,
    pulsePhase: 1.1,
  });

  // 6 monumentales arcos de costillas de bestia gigante + 16 chozas oscuras + 6 hogueras
  const hutGeos = [];
  const boneGeos = [];
  const firePositions = [];

  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + 0.3;
    const rad = 0.022 * SPREAD;
    const pt = sampleLocalPt(Math.cos(a) * rad, Math.sin(a) * rad, 0.0002);
    const q = new THREE.Quaternion().setFromUnitVectors(UP_Y, pt.normal);

    // Arco óseo gigante (par de costillas curvas convergentes)
    for (let side = -1; side <= 1; side += 2) {
      const bCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * 0.012 * S, 0, 0),
        new THREE.Vector3(side * 0.018 * S, 0.018 * S, 0.002 * S),
        new THREE.Vector3(0, 0.032 * S, 0),
      ]);
      const bg = new THREE.TubeGeometry(bCurve, 8, 0.0018 * S, 5, false).toNonIndexed();
      bg.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(UP_Y, a));
      bg.applyQuaternion(q);
      bg.translate(pt.pos.x, pt.pos.y, pt.pos.z);
      boneGeos.push(bg);
    }

    // Hoguera central en claro tribal
    const fPt = sampleLocalPt(Math.cos(a + 0.25) * 0.011 * SPREAD, Math.sin(a + 0.25) * 0.011 * SPREAD, 0.0005);
    firePositions.push(fPt);
  }

  for (let h = 0; h < 16; h++) {
    const a = (h / 16) * Math.PI * 2 + hashI(h, 2, 7) * 0.18;
    const rad = (0.018 + (h % 3) * 0.008) * SPREAD;
    const pt = sampleLocalPt(Math.cos(a) * rad, Math.sin(a) * rad, 0.0);
    const hutCone = new THREE.ConeGeometry(0.0075 * S, 0.013 * S, 6);
    hutCone.translate(0, 0.006 * S, 0);
    const hg = hutCone.toNonIndexed();
    hg.rotateY(hashI(h, 4, 1) * Math.PI);
    hg.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(UP_Y, pt.normal));
    hg.translate(pt.pos.x, pt.pos.y, pt.pos.z);
    hutGeos.push(hg);
  }

  const villageBones = new THREE.Mesh(mergeGeometries(boneGeos, false), boneMat);
  villageBones.name = 'Pandora_Ash_Giant_Bone_Totems';
  const villageHuts = new THREE.Mesh(mergeGeometries(hutGeos, false), darkWoodMat);
  villageHuts.name = 'Pandora_Ash_Tribal_Huts';
  group.add(villageBones, villageHuts);

  const fireGeos = [];
  firePositions.forEach((fPt) => {
    const fg = new THREE.ConeGeometry(0.003 * S, 0.009 * S, 6).toNonIndexed();
    fg.translate(0, 0.004 * S, 0);
    fg.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(UP_Y, fPt.normal));
    fg.translate(fPt.pos.x, fPt.pos.y, fPt.pos.z);
    fireGeos.push(fg);
  });
  const firesMesh = new THREE.Mesh(mergeGeometries(fireGeos, false), fireMat);
  firesMesh.name = 'Pandora_Ash_Bonfires';
  group.add(firesMesh);

  return {
    group,
    update(time, nightT) {
      volcanoUniforms.uLavaTime.value = time;
      // Humo volcánico gris oscuro (Día) / tinte brasa inferior (Noche)
      const sAttr = smokeGeo.attributes.position;
      smokeEmitters.forEach((em, eIdx) => {
        for (let p = 0; p < puffsPerVolcano; p++) {
          const idx = eIdx * puffsPerVolcano + p;
          const cyc = (time * 0.24 + em.phase + p / puffsPerVolcano) % 1.0;
          const h = cyc * em.maxH;
          const spread = cyc * 0.025 * S;
          sAttr.setXYZ(
            idx,
            em.basePos.x + em.normal.x * h + Math.sin(idx + time * 0.5) * spread,
            em.basePos.y + em.normal.y * h + Math.cos(idx) * spread * 0.5,
            em.basePos.z + em.normal.z * h + Math.cos(idx + time * 0.4) * spread
          );
        }
      });
      sAttr.needsUpdate = true;
      smokeMat.color.setRGB(
        THREE.MathUtils.lerp(0.24, 0.42, nightT),
        THREE.MathUtils.lerp(0.22, 0.16, nightT),
        THREE.MathUtils.lerp(0.23, 0.14, nightT)
      );

      // Cenizas flotando en el aire volcánico
      const aAttr = ashGeo.attributes.position;
      for (let i = 0; i < ashCount; i++) {
        const a = ashSeeds[i];
        const drift = Math.sin(time * a.speed + a.phase) * 0.004;
        const r = a.baseAlt + Math.cos(time * 0.4 + a.phase) * 0.003;
        aAttr.setXYZ(i, a.dir.x * r + drift, a.dir.y * r, a.dir.z * r - drift);
      }
      aAttr.needsUpdate = true;
    },
  };
}

/**
 * Bioma Oceánico, Aldea Metkayina (balsas tejidas y canoas) y Ecosistema Submarino real:
 * - 18 chozas-balsa tejidas sobre plataformas de madera y raíles de mangle conectadas por pasarelas
 * - 14 canoas amarradas y 28 antorchas cálidas en plataformas
 * - Fondo del arrecife poblado por 1.050 corales bioluminiscentes (abanicos, tubos, anémonas)
 * - Bosque submarino de 720 algas gigantes ondulantes y 32 rayos cáusticos de luz solar
 */
export function buildMetkayinaReefBiome(R, spec, sampleAtDir, matTracker) {
  const SPREAD = 1.0 / 3.4;
  const fr = buildLocalFrame(spec.capDir);
  const group = new THREE.Group();
  group.name = 'Pandora_Biome_MetkayinaReef';

  const waterPt = (lx, lz, hOff = 0.0) => {
    const dir = fr.upDir
      .clone()
      .addScaledVector(fr.e1, lx)
      .addScaledVector(fr.e2, lz)
      .normalize();
    return {
      pos: dir.clone().multiplyScalar(R + hOff),
      normal: dir,
    };
  };

  const seabedPt = (lx, lz, hOff = 0.0) => {
    const dir = fr.upDir
      .clone()
      .addScaledVector(fr.e1, lx)
      .addScaledVector(fr.e2, lz)
      .normalize();
    const info = sampleAtDir(dir.x, dir.y, dir.z);
    return {
      pos: dir.clone().multiplyScalar(R + info.elev + hOff),
      normal: dir,
      elev: info.elev,
      nation: info.nation,
    };
  };

  // 1. Aldea acuática Metkayina sobre el nivel del agua (R)
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x5c3e26, roughness: 0.85 });
  const thatchMat = new THREE.MeshStandardMaterial({ color: 0x76643c, roughness: 0.9 });
  const torchMat = new THREE.MeshStandardMaterial({
    color: 0xffcc66,
    emissive: 0xff8824,
    emissiveIntensity: 0.55,
    roughness: 0.35,
  });
  torchMat.userData.animatedEmissive = true;
  matTracker.push({
    mat: torchMat,
    dayColor: 0xffaa44,
    nightColor: 0xffe088,
    dayEmissive: 0xff7722,
    nightEmissive: 0xff8c28,
    dayEI: 0.45,
    nightEI: 2.55,
    pulsePhase: 1.7,
  });

  const woodGeos = [];
  const roofGeos = [];
  const torchGeos = [];
  const canoePlacements = [];
  const hutAnchors = [];

  for (let i = 0; i < 18; i++) {
    const ring = (i < 6 ? 0.024 : 0.052 + (i % 3) * 0.012) * SPREAD;
    const ang = (i < 6 ? (i / 6) * Math.PI * 2 : ((i - 6) / 12) * Math.PI * 2) + hashI(i, 4, 3) * 0.25;
    const lx = Math.cos(ang) * ring;
    const lz = Math.sin(ang) * ring;
    const pt = waterPt(lx, lz, 0.0005);
    const qOri = new THREE.Quaternion()
      .setFromUnitVectors(UP_Y, pt.normal)
      .multiply(new THREE.Quaternion().setFromAxisAngle(UP_Y, ang + hashI(i, 2, 7)));

    const deckW = (0.018 + hashI(i, 5, 1) * 0.008) * S;
    const deckD = deckW * 1.25;
    hutAnchors.push({ pos: pt.pos.clone(), normal: pt.normal.clone(), qOri });

    // Plataforma de madera flotante
    const deck = new THREE.BoxGeometry(deckW, 0.0016 * S, deckD).toNonIndexed();
    deck.translate(0, 0.0012 * S, 0);
    deck.applyQuaternion(qOri);
    deck.translate(pt.pos.x, pt.pos.y, pt.pos.z);
    woodGeos.push(deck);

    // Raíles curvos de mangle sumergiéndose en el agua bajo los costados de la balsa
    for (let side = -1; side <= 1; side += 2) {
      const mCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * deckW * 0.48, -0.0015 * S, -deckD * 0.72),
        new THREE.Vector3(side * deckW * 0.56, 0.0008 * S, 0),
        new THREE.Vector3(side * deckW * 0.48, -0.0015 * S, deckD * 0.72),
      ]);
      const mRail = new THREE.TubeGeometry(mCurve, 8, 0.0014 * S, 5, false).toNonIndexed();
      mRail.applyQuaternion(qOri);
      mRail.translate(pt.pos.x, pt.pos.y, pt.pos.z);
      woodGeos.push(mRail);
    }

    // Choza tejida abovedada estilo Metkayina
    const roofH = deckW * 0.65;
    const roof = new THREE.CylinderGeometry(0.001, deckW * 0.56, roofH, 8, 1);
    roof.scale(0.95, 1.0, 1.25);
    roof.translate(0, roofH * 0.5 + 0.0018 * S, 0);
    const rg = roof.toNonIndexed();
    rg.applyQuaternion(qOri);
    rg.translate(pt.pos.x, pt.pos.y, pt.pos.z);
    roofGeos.push(rg);

    // Antorchas en postes junto a cada choza
    for (let t = 0; t < (i % 2 === 0 ? 2 : 1); t++) {
      const side = t === 0 ? 1 : -1;
      const post = new THREE.CylinderGeometry(0.0004 * S, 0.0006 * S, 0.007 * S, 5).toNonIndexed();
      post.translate(side * deckW * 0.45, 0.004 * S, deckD * 0.52);
      post.applyQuaternion(qOri);
      post.translate(pt.pos.x, pt.pos.y, pt.pos.z);
      woodGeos.push(post);

      const flame = new THREE.SphereGeometry(0.0014 * S, 6, 5).toNonIndexed();
      flame.translate(side * deckW * 0.45, 0.008 * S, deckD * 0.52);
      flame.applyQuaternion(qOri);
      flame.translate(pt.pos.x, pt.pos.y, pt.pos.z);
      torchGeos.push(flame);
    }

    // Canoa amarrada al borde de la plataforma
    if (i < 14) {
      canoePlacements.push({
        basePos: pt.pos.clone().add(new THREE.Vector3(deckW * 0.72, -0.0002 * S, 0).applyQuaternion(qOri)),
        normal: pt.normal.clone(),
        qOri,
        phase: i * 0.9,
      });
    }
  }

  // Pasarelas flotantes conectando las plataformas Metkayina
  for (let i = 0; i < hutAnchors.length; i++) {
    const a = hutAnchors[i];
    const nextIdx = i < 5 ? i + 1 : i === 5 ? 0 : i < 17 ? i + 1 : 6;
    const b = hutAnchors[nextIdx];
    const dist = a.pos.distanceTo(b.pos);
    if (dist > 0.005 * S && dist < 0.22 * S) {
      const mid = a.pos.clone().add(b.pos).multiplyScalar(0.5).normalize().multiplyScalar(R + 0.0009);
      const bridge = new THREE.BoxGeometry(0.0045 * S, 0.0011 * S, dist).toNonIndexed();
      const fwd = b.pos.clone().sub(a.pos).normalize();
      const up = mid.clone().normalize();
      const rt = new THREE.Vector3().crossVectors(up, fwd).normalize();
      fwd.crossVectors(rt, up).normalize();
      const bMat = new THREE.Matrix4().makeBasis(rt, up, fwd);
      bMat.setPosition(mid);
      bridge.applyMatrix4(bMat);
      woodGeos.push(bridge);
    }
  }

  const villageDeckMesh = new THREE.Mesh(mergeGeometries(woodGeos, false), woodMat);
  villageDeckMesh.name = 'Pandora_Metkayina_Rafts_And_Walkways';
  const villageRoofMesh = new THREE.Mesh(mergeGeometries(roofGeos, false), thatchMat);
  villageRoofMesh.name = 'Pandora_Metkayina_Woven_Huts';
  const torchesMesh = new THREE.Mesh(mergeGeometries(torchGeos, false), torchMat);
  torchesMesh.name = 'Pandora_Metkayina_Torches';
  group.add(villageDeckMesh, villageRoofMesh, torchesMesh);

  // Canoas con batangas balanceándose sobre el agua
  const canoeGeo = new THREE.ConeGeometry(0.0022 * S, 0.022 * S, 6);
  canoeGeo.rotateX(Math.PI * 0.5);
  canoeGeo.scale(1.0, 0.45, 1.0);
  const canoeInst = new THREE.InstancedMesh(canoeGeo, woodMat, canoePlacements.length);
  canoeInst.name = 'Pandora_Metkayina_Moored_Canoes';
  group.add(canoeInst);

  // 2. Arrecife Submarino optimizado (60 FPS): 580 Corales bioluminiscentes + 380 Algas gigantes ondulantes
  const { fanGeo, tubeGeo, anemoneGeo } = createCoralGeometries();
  const reefGlobalSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), R + 1.5);
  fanGeo.boundingSphere = reefGlobalSphere;
  tubeGeo.boundingSphere = reefGlobalSphere;
  anemoneGeo.boundingSphere = reefGlobalSphere;

  const coralSpecs = [
    { name: 'Pandora_Reef_Corals_CyanFans', geo: fanGeo, dayCol: 0x266b64, nightCol: 0x00f5ff, nightEm: 0x00ffe8, matrices: [] },
    { name: 'Pandora_Reef_Corals_MagentaTubes', geo: tubeGeo, dayCol: 0x8c4462, nightCol: 0xff34b0, nightEm: 0xff22a0, matrices: [] },
    { name: 'Pandora_Reef_Corals_CoralAnemones', geo: anemoneGeo, dayCol: 0x9e603a, nightCol: 0xff7824, nightEm: 0xff6218, matrices: [] },
  ];

  const dummy = new THREE.Object3D();
  for (let i = 0; i < 580; i++) {
    const a = hashI(i, 3, 19) * Math.PI * 2;
    const rad = Math.sqrt(hashI(i, 7, 13)) * 0.165 * SPREAD;
    const pt = seabedPt(Math.cos(a) * rad, Math.sin(a) * rad, 0.0);
    if (pt.nation !== 'water' || pt.elev >= -0.002) continue; // Solo bajo el océano Metkayina

    const cs = (0.011 + hashI(i, 5, 11) * 0.017) * S;
    dummy.position.copy(pt.pos);
    dummy.quaternion.setFromUnitVectors(UP_Y, pt.normal);
    dummy.rotateY(hashI(i, 2, 7) * Math.PI * 2);
    dummy.scale.set(cs, cs, cs);
    dummy.updateMatrix();
    coralSpecs[i % 3].matrices.push(dummy.matrix.clone());
  }

  coralSpecs.forEach((cs, idx) => {
    if (cs.matrices.length === 0) return;
    const mat = new THREE.MeshStandardMaterial({
      color: cs.dayCol,
      emissive: cs.nightEm,
      emissiveIntensity: 0.0,
      roughness: 0.55,
      side: THREE.DoubleSide,
    });
    mat.userData.animatedEmissive = true;
    matTracker.push({
      mat,
      dayColor: cs.dayCol,
      nightColor: cs.nightCol,
      dayEmissive: 0x102218,
      nightEmissive: cs.nightEm,
      dayEI: 0.0,
      nightEI: 2.15,
      pulsePhase: idx * 1.4,
    });
    const inst = new THREE.InstancedMesh(cs.geo, mat, cs.matrices.length);
    inst.name = cs.name;
    inst.frustumCulled = false;
    inst.castShadow = false;
    inst.receiveShadow = false;
    cs.matrices.forEach((m, k) => inst.setMatrixAt(k, m));
    inst.instanceMatrix.needsUpdate = true;
    group.add(inst);
  });

  // 380 algas gigantes ondulantes bajo las balsas
  const kelpMatrices = [];
  for (let i = 0; i < 380; i++) {
    const a = hashI(i, 11, 5) * Math.PI * 2;
    const rad = Math.sqrt(hashI(i, 4, 17)) * 0.155 * SPREAD;
    const pt = seabedPt(Math.cos(a) * rad, Math.sin(a) * rad, 0.0);
    if (pt.nation !== 'water' || pt.elev >= -0.014) continue;
    const depthUnits = Math.abs(pt.elev);
    const kh = Math.min(depthUnits * 0.85, (0.045 + hashI(i, 9, 2) * 0.065) * S);
    const kw = (0.014 + hashI(i, 6, 8) * 0.014) * S;
    dummy.position.copy(pt.pos);
    dummy.quaternion.setFromUnitVectors(UP_Y, pt.normal);
    dummy.rotateY(hashI(i, 1, 3) * Math.PI * 2);
    dummy.scale.set(kw, kh, kw);
    dummy.updateMatrix();
    kelpMatrices.push(dummy.matrix.clone());
  }

  const kelpUniforms = { uTime: { value: 0 } };
  const kelpMat = new THREE.MeshStandardMaterial({
    color: 0x1a6848,
    emissive: 0x00d89a,
    emissiveIntensity: 0.0,
    roughness: 0.55,
    side: THREE.DoubleSide,
  });
  kelpMat.userData.animatedEmissive = true;
  kelpMat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = kelpUniforms.uTime;
    shader.vertexShader =
      'uniform float uTime;\n' +
      shader.vertexShader.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        float swayAmp = position.y * 0.14;
        transformed.x += sin(uTime * 1.45 + position.y * 6.0) * swayAmp;
        transformed.z += cos(uTime * 1.2 + position.y * 5.0) * swayAmp;`
      );
  };
  matTracker.push({
    mat: kelpMat,
    dayColor: 0x1a6848,
    nightColor: 0x084248,
    dayEmissive: 0x0c2e1e,
    nightEmissive: 0x00e0a8,
    dayEI: 0.0,
    nightEI: 1.05,
  });

  if (kelpMatrices.length > 0) {
    const kelpGeo = createGiantKelpGeometry();
    kelpGeo.boundingSphere = reefGlobalSphere;
    const kelpInst = new THREE.InstancedMesh(kelpGeo, kelpMat, kelpMatrices.length);
    kelpInst.name = 'Pandora_Reef_Giant_Kelp';
    kelpInst.frustumCulled = false;
    kelpInst.castShadow = false;
    kelpInst.receiveShadow = false;
    kelpMatrices.forEach((m, idx) => kelpInst.setMatrixAt(idx, m));
    kelpInst.instanceMatrix.needsUpdate = true;
    group.add(kelpInst);
  }

  // 3. 32 Rayos cáusticos submarinos proyectados hacia abajo desde la superficie R
  const causticGeos = [];
  for (let i = 0; i < 32; i++) {
    const a = hashI(i, 8, 21) * Math.PI * 2;
    const rad = Math.sqrt(hashI(i, 2, 13)) * 0.145 * SPREAD;
    const ptTop = waterPt(Math.cos(a) * rad, Math.sin(a) * rad, -0.001);
    const beamH = 0.095;
    const cone = new THREE.CylinderGeometry(0.008 * S, 0.028 * S, beamH, 8, 1, true);
    cone.translate(0, -beamH * 0.5, 0);
    const cg = cone.toNonIndexed();
    const tilt = new THREE.Quaternion().setFromUnitVectors(UP_Y, ptTop.normal);
    const slant = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.18, hashI(i, 3, 5) * 6.28, 0.12));
    cg.applyQuaternion(tilt.multiply(slant));
    cg.translate(ptTop.pos.x, ptTop.pos.y, ptTop.pos.z);
    causticGeos.push(cg);
  }
  const causticMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0.32, 0.95, 1.0),
    transparent: true,
    opacity: 0.0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
  const causticsMesh = new THREE.Mesh(mergeGeometries(causticGeos, false), causticMat);
  causticsMesh.name = 'Pandora_Reef_Underwater_Caustics';
  causticsMesh.visible = false;
  group.add(causticsMesh);

  const cDummy = new THREE.Object3D();

  return {
    group,
    update(time, nightT, submergedRatio) {
      kelpUniforms.uTime.value = time;

      // Balanceo de las canoas sobre el oleaje de la laguna
      for (let i = 0; i < canoePlacements.length; i++) {
        const cp = canoePlacements[i];
        const bob = Math.sin(time * 2.1 + cp.phase) * 0.00045 * S;
        const roll = Math.sin(time * 1.6 + cp.phase) * 0.06;
        cDummy.position.copy(cp.basePos).addScaledVector(cp.normal, bob);
        cDummy.quaternion.copy(cp.qOri);
        cDummy.rotateZ(roll);
        cDummy.scale.set(1, 1, 1);
        cDummy.updateMatrix();
        canoeInst.setMatrixAt(i, cDummy.matrix);
      }
      canoeInst.instanceMatrix.needsUpdate = true;

      // Cáusticas submarinas visibles únicamente al bucear por debajo del nivel del mar (R)
      if (submergedRatio > 0.01) {
        const pulse = 0.78 + 0.22 * Math.sin(time * 2.4);
        const sunVis = THREE.MathUtils.lerp(0.28, 0.08, nightT);
        causticMat.opacity = submergedRatio * sunVis * pulse;
        causticsMesh.visible = causticMat.opacity > 0.005;
      } else {
        causticsMesh.visible = false;
      }
    },
  };
}
