import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { hashI, PANDORA_LANDMARKS } from './planetarySphere.js';
import {
  samplePandoraTerrainOffset,
  samplePandoraGlobalPoint,
  pandoraCapPoint,
} from './pandoraWorld.js';

/**
 * Textura suave circular reutilizable para esporas bioluminiscentes y nubes medievales.
 */
function createGlowSpriteTexture() {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)');
  g.addColorStop(0.28, 'rgba(220, 248, 255, 0.8)');
  g.addColorStop(0.65, 'rgba(130, 210, 255, 0.22)');
  g.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

const sharedGlowTexture = createGlowSpriteTexture();

/**
 * Crea un sistema de 350 vehículos voladores (AVs) instanciados a 60 FPS para Night City (p2)
 * o Coruscant (p4), circulando en múltiples carriles y altitudes sobre la curvatura esférica del planeta.
 * Incluye fuselaje metálico, faros delanteros blanco/cian HDR y estelas traseras naranjas/rojas HDR.
 */
export function createUrbanTrafficSystem(planetId, localRadius, count = 350) {
  const R = localRadius;
  const S = 1.0 / 3.5; // Escala base 1:1 en superficie acorde con SOLAR_SCALE = 157.5
  const isNightCity = planetId === 'p2';
  const group = new THREE.Group();
  group.name = `${planetId}_Urban_AV_Traffic_System`;

  // Longitud base del vehículo (ampliada en Night City para armonizar con torres 3.8x sin desbordar)
  const avScale = (isNightCity ? 0.0068 : 0.0033) * S;

  // 1. Fuselaje oscuro aerodinámico
  const hullGeo = new THREE.BoxGeometry(avScale * 0.55, avScale * 0.34, avScale * 1.85);
  const hullMat = new THREE.MeshStandardMaterial({
    color: 0x181c24,
    roughness: 0.38,
    metalness: 0.85,
  });
  const hullMesh = new THREE.InstancedMesh(hullGeo, hullMat, count);

  // 2. Faros delanteros blanco/cian brillante HDR (+Z es frente en nuestro basis)
  const headGeo = new THREE.BoxGeometry(avScale * 0.58, avScale * 0.22, avScale * 0.55);
  headGeo.translate(0, 0, avScale * 0.92);
  const headMat = new THREE.MeshBasicMaterial({
    color: planetId === 'p4' ? new THREE.Color(2.1, 2.3, 2.5) : new THREE.Color(1.35, 1.70, 1.88),
  });
  const headMesh = new THREE.InstancedMesh(headGeo, headMat, count);

  // 3. Estelas traseras naranjas/rojas alargadas HDR (-Z es zaga)
  const tailGeo = new THREE.BoxGeometry(avScale * 0.42, avScale * 0.16, avScale * 3.8);
  tailGeo.translate(0, 0, -avScale * 2.55);
  const tailMat = new THREE.MeshBasicMaterial({
    color: planetId === 'p4' ? new THREE.Color(3.6, 1.25, 0.25) : new THREE.Color(1.85, 0.56, 0.22),
    transparent: true,
    opacity: 0.85,
  });
  const tailMesh = new THREE.InstancedMesh(tailGeo, tailMat, count);

  for (const im of [hullMesh, headMesh, tailMesh]) {
    im.frustumCulled = false;
    im.castShadow = false;
    im.receiveShadow = false;
    im.geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), R * 1.28);
  }

  group.add(hullMesh, headMesh, tailMesh);

  // Generar datos de carriles curvos esféricos (concentrados en el centro en Night City 3.8x)
  const agents = [];
  const baseTiltAxes = [
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(0, 0, 1),
    new THREE.Vector3(0.707, 0, 0.707),
    new THREE.Vector3(-0.707, 0, 0.707),
  ];

  for (let i = 0; i < count; i++) {
    const isRingLane = i % 2 === 0;
    const altTier = i % 7;
    // Altitud 1:1 entre R + 6u y R + 18u tanto en Night City como en Coruscant
    const alt = 0.038 + (altTier / 6) * 0.062 + hashI(i, 3, 7) * 0.014;
    const radius = R + alt;

    if (isRingLane) {
      // En Night City / Coruscant: carriles ceñidos sobre City Center, Watson y el distrito Senado
      const laneIndex = (i >> 1) % 14;
      const theta = isNightCity
        ? (0.032 + (laneIndex / 13) * 0.185 + (hashI(i, 1, 9) - 0.5) * 0.012) * 0.45
        : ((0.035 + laneIndex * 0.034 + (hashI(i, 1, 9) - 0.5) * 0.014) * S * 1.2) / 3.2;
      const dir = laneIndex % 2 === 0 ? 1 : -1;
      const omega =
        ((dir * (0.085 + hashI(i, 5, 2) * 0.11)) / Math.max(0.04, Math.sin(theta))) *
        (isNightCity ? 0.48 : 1.0 / 1.5);
      agents.push({
        type: 'ring',
        radius,
        theta,
        sinTheta: Math.sin(theta),
        cosTheta: Math.cos(theta),
        phi0: hashI(i, 8, 4) * Math.PI * 2,
        omega,
        dir,
        bobAmp: (isNightCity ? 0.006 : 0.002 + hashI(i, 2, 6) * 0.0025) * S,
        bobPhase: hashI(i, 4, 1) * Math.PI * 2,
      });
    } else {
      // Autopistas de círculo máximo cruzando City Center, Watson y el núcleo urbano de Coruscant
      const corridorIdx = i % baseTiltAxes.length;
      const spreadScale = isNightCity ? 0.064 * 0.45 : (0.042 * 1.15) / 3.2;
      const laneOffset = ((Math.floor(i / 8) % 11) - 5) * spreadScale * S;
      const axis = baseTiltAxes[corridorIdx];
      const qPlane = new THREE.Quaternion().setFromAxisAngle(axis, laneOffset);
      if (isNightCity && i % 3 === 0) {
        // Desplazar ~1/3 de corredores hacia Watson Norte (-Z en capFrame)
        qPlane.premultiply(new THREE.Quaternion().setFromAxisAngle(baseTiltAxes[0], -0.22 * 0.45));
      }
      const dir = i % 4 === 1 ? 1 : -1;
      const arcSpan = isNightCity ? 0.24 * 0.45 : (0.52 * S * 1.2) / 3.2;
      const s0 = (hashI(i, 6, 3) * 2 - 1) * arcSpan;
      const speed =
        (dir * (isNightCity ? 0.13 + hashI(i, 9, 5) * 0.16 : (0.09 + hashI(i, 9, 5) * 0.13) * 1.25) * S) / 4.8;

      agents.push({
        type: 'corridor',
        radius,
        qPlane,
        s0,
        arcSpan,
        speed,
        dir,
        bobAmp: (isNightCity ? 0.005 : 0.002 + hashI(i, 7, 2) * 0.002) * S,
        bobPhase: hashI(i, 3, 4) * Math.PI * 2,
      });
    }
  }

  // Objetos temporales reutilizados cada frame (cero garbage collection)
  const pos = new THREE.Vector3();
  const normal = new THREE.Vector3();
  const forward = new THREE.Vector3();
  const right = new THREE.Vector3();
  const basis = new THREE.Matrix4();
  const scaleVec = new THREE.Vector3();

  return {
    update(time) {
      if (!group.parent || !group.parent.visible) return;

      for (let i = 0; i < count; i++) {
        const a = agents[i];
        const bob = Math.sin(time * 2.2 + a.bobPhase) * a.bobAmp;
        const r = a.radius + bob;

        if (a.type === 'ring') {
          const phi = a.phi0 + a.omega * time;
          const cosP = Math.cos(phi);
          const sinP = Math.sin(phi);

          normal.set(a.sinTheta * cosP, a.cosTheta, a.sinTheta * sinP).normalize();
          pos.copy(normal).multiplyScalar(r);

          // Tangente d(normal)/d(phi) * dir
          forward.set(-a.dir * sinP, 0, a.dir * cosP).normalize();
          // Ajustar tangente ortogonal a la normal esférica
          right.crossVectors(normal, forward).normalize();
          forward.crossVectors(right, normal).normalize();
        } else {
          // Mover continuamente y envolver suavemente dentro del casquete urbano [-arcSpan, +arcSpan]
          const span2 = a.arcSpan * 2.0;
          let u = (a.s0 + a.speed * time + a.arcSpan) % span2;
          if (u < 0) u += span2;
          const arcAngle = u - a.arcSpan;

          const sinA = Math.sin(arcAngle);
          const cosA = Math.cos(arcAngle);
          normal.set(sinA, cosA, 0).applyQuaternion(a.qPlane).normalize();
          pos.copy(normal).multiplyScalar(r);

          forward.set(a.dir * cosA, -a.dir * sinA, 0).applyQuaternion(a.qPlane).normalize();
          right.crossVectors(normal, forward).normalize();
        }

        // Ocultar en los extremos del corredor para evitar salto visual del wrap
        let lenScale = 1.0;
        if (a.type === 'corridor') {
          const edge = Math.abs(Math.acos(THREE.MathUtils.clamp(normal.y, -1, 1))) / a.arcSpan;
          lenScale = 1.0 - THREE.MathUtils.smoothstep(edge, 0.85, 1.0);
        }

        basis.makeBasis(right, normal, forward);
        basis.setPosition(pos);
        if (lenScale < 0.99) {
          scaleVec.setScalar(Math.max(0.01, lenScale));
          basis.scale(scaleVec);
        }

        hullMesh.setMatrixAt(i, basis);
        headMesh.setMatrixAt(i, basis);
        tailMesh.setMatrixAt(i, basis);
      }

      hullMesh.instanceMatrix.needsUpdate = true;
      headMesh.instanceMatrix.needsUpdate = true;
      tailMesh.instanceMatrix.needsUpdate = true;
    },
    group,
  };
}

/**
 * Conecta animaciones dinámicas sobre las mallas proyectadas de `cyberpunk_city.glb`:
 * - Ondulación sinusoidal suave en los 2 hologramas Koi flotantes (cian y naranja dorado)
 * - Levitación y brillo holográfico en `HoloSign_*` y `Sign_3D_*`
 * - Parpadeo sutil realista en letreros `NC_Neon_Sign_*`
 * - Pulso y rotación en antenas/balizas de azotea (`CorpPad_EdgeBeacon_*`, `*Spire*`)
 */
export function bindNightCityAnimations(glbScene) {
  const cyanKoiParts = [];
  const goldKoiParts = [];
  const holoSigns = [];
  const neonSigns = [];
  const rooftopBeacons = [];

  const capturePart = (mesh, seed) => {
    if (mesh.material) {
      mesh.material.userData = mesh.material.userData || {};
      mesh.material.userData.animatedEmissive = true;
    }
    return {
      mesh,
      basePos: mesh.position.clone(),
      baseQuat: mesh.quaternion.clone(),
      normal: mesh.position.clone().normalize(),
      material: mesh.material,
      baseEmissive: mesh.material?.emissiveIntensity ?? 1.5,
      baseOpacity: mesh.material?.opacity ?? 1.0,
      seed,
    };
  };

  let idx = 0;
  glbScene.traverse((child) => {
    if (!child.isMesh) return;
    const name = child.name || '';
    idx++;

    if (name.startsWith('Hologram_Giant_Koi_ElectricCyan')) {
      cyanKoiParts.push(capturePart(child, idx));
    } else if (name.startsWith('Hologram_Giant_Koi_OrangeGold')) {
      goldKoiParts.push(capturePart(child, idx));
    } else if (/HoloSign_|Sign_3D_|CorpPad_NeonRing_/.test(name)) {
      holoSigns.push(capturePart(child, idx));
    } else if (/NC_Neon_Sign_/.test(name)) {
      neonSigns.push(capturePart(child, idx));
    } else if (/EdgeBeacon|Hexagon_Ring|Hexagon_Spoke|Antenna|Beacon/i.test(name)) {
      rooftopBeacons.push(capturePart(child, idx));
    }
  });

  // Calcular centro y ejes locales para ondulación coherente de cada pez Koi
  const buildKoiGroupStats = (parts) => {
    if (parts.length === 0) return null;
    const centroid = new THREE.Vector3();
    for (const p of parts) centroid.add(p.basePos);
    centroid.divideScalar(parts.length);
    const localUp = centroid.clone().normalize();
    return { parts, centroid, localUp };
  };

  const koiGroups = [buildKoiGroupStats(cyanKoiParts), buildKoiGroupStats(goldKoiParts)].filter(Boolean);

  const qSwim = new THREE.Quaternion();
  const qSpin = new THREE.Quaternion();
  const relVec = new THREE.Vector3();

  return {
    update(time, nightBoost = 1.0) {
      // 1. Peces Koi holográficos nadando con onda sinusoidal suave en las alturas de Night City
      koiGroups.forEach((kg, kIdx) => {
        const phaseOffset = kIdx * 2.4;
        const bob = Math.sin(time * 1.45 + phaseOffset) * 1.4;
        const swimYaw = Math.sin(time * 1.15 + phaseOffset) * 0.08;

        for (let i = 0; i < kg.parts.length; i++) {
          const p = kg.parts[i];
          const isTailOrFin = /Tail|Fin/i.test(p.mesh.name);
          const partWave = Math.sin(time * 3.1 + phaseOffset + i * 0.65) * (isTailOrFin ? 0.14 : 0.045);

          relVec.copy(p.basePos).sub(kg.centroid);
          qSwim.setFromAxisAngle(kg.localUp, swimYaw + partWave);
          relVec.applyQuaternion(qSwim);

          p.mesh.position.copy(kg.centroid).add(relVec).addScaledVector(kg.localUp, bob);
          p.mesh.quaternion.copy(qSwim).multiply(p.baseQuat);

          if (p.material && p.material.emissiveIntensity !== undefined) {
            p.material.emissiveIntensity = Math.min(
              1.9,
              p.baseEmissive * (0.86 + 0.14 * Math.sin(time * 2.6 + i * 0.7 + phaseOffset)) * nightBoost
            );
          }
        }
      });

      // 2. Carteles holográficos flotantes con leve oscilación vertical y pulso luminoso (tope HDR 1.9)
      for (let i = 0; i < holoSigns.length; i++) {
        const s = holoSigns[i];
        const lift = Math.sin(time * 1.6 + s.seed * 0.9) * 0.55;
        s.mesh.position.copy(s.basePos).addScaledVector(s.normal, lift);
        if (s.material && s.material.emissiveIntensity !== undefined) {
          s.material.emissiveIntensity = Math.min(
            1.9,
            s.baseEmissive * (0.88 + 0.10 * Math.sin(time * 3.4 + s.seed)) * nightBoost
          );
        }
      }

      // 3. Parpadeo eléctrico sutil en letreros de neón (tope HDR 1.9)
      for (let i = 0; i < neonSigns.length; i++) {
        const n = neonSigns[i];
        if (!n.material || n.material.emissiveIntensity === undefined) continue;
        const slowWave = 0.88 + 0.10 * Math.sin(time * 2.2 + n.seed * 1.7);
        const glitch = Math.sin(time * 23.0 + n.seed * 7.3) > 0.965 ? 0.55 : 1.0;
        n.material.emissiveIntensity = Math.min(1.9, n.baseEmissive * slowWave * glitch * nightBoost);
      }

      // 4. Balizas y motivos hexagonales de azotea pulsando y rotando suavemente (tope HDR 1.85)
      for (let i = 0; i < rooftopBeacons.length; i++) {
        const b = rooftopBeacons[i];
        if (b.material && b.material.emissiveIntensity !== undefined) {
          b.material.emissiveIntensity = Math.min(
            1.85,
            b.baseEmissive * (0.76 + 0.30 * Math.sin(time * 3.2 + b.seed * 0.8)) * nightBoost
          );
        }
        if (/Hexagon_Ring|Hexagon_Spoke/i.test(b.mesh.name)) {
          qSpin.setFromAxisAngle(b.normal, time * 0.35 * (i % 2 === 0 ? 1 : -1));
          b.mesh.quaternion.copy(qSpin).multiply(b.baseQuat);
        }
      }
    },
  };
}

/**
 * Conecta pulso luminoso dorado suave en los anillos de la Cúpula del Senado
 * y luces ceremoniales de Coruscant (`coruscant.glb`).
 */
export function bindCoruscantAnimations(glbScene) {
  const senateLights = [];
  let idx = 0;

  glbScene.traverse((child) => {
    if (!child.isMesh || !child.material) return;
    const name = child.name || '';
    if (/Senate_Dome_LightRing|Senate_Abyss_LightRing|Senate_Dome_GoldBand|Ceremonial_Pylon_Light|Senate_Avenue_LightStrip/.test(name)) {
      idx++;
      child.material.userData = child.material.userData || {};
      child.material.userData.animatedEmissive = true;
      senateLights.push({
        mesh: child,
        material: child.material,
        baseEmissive: child.material.emissiveIntensity ?? 1.5,
        phase: idx * 0.42,
      });
    }
  });

  return {
    update(time, nightBoost = 1.0) {
      for (let i = 0; i < senateLights.length; i++) {
        const s = senateLights[i];
        if (s.material.emissiveIntensity !== undefined) {
          const wave = 0.78 + 0.36 * Math.sin(time * 1.9 - s.phase);
          s.material.emissiveIntensity = s.baseEmissive * wave * nightBoost;
        }
      }
    },
  };
}

/**
 * Crea la vida atmosférica del Planeta 3 (Medieval / Fortaleza Flotante de Perugius):
 * - Bandada de ~90 aves / grifos planeando con aleteo suave alrededor de Chaos Breaker y el valle
 * - ~42 bancos de nubes suaves desplazándose lentamente sobre los flancos del valle medieval
 */
export function createMedievalLifeSystem(localRadius) {
  const R = localRadius;
  const S = 1.0 / 3.5;
  const group = new THREE.Group();
  group.name = 'Medieval_Perugius_Living_Atmosphere';

  // 1. Aves / grifos con cuerpo + ala izquierda + ala derecha animada (InstancedMesh)
  const birdCount = 90;
  const birdScale = 0.0022 * S;

  const bodyGeo = new THREE.BoxGeometry(birdScale * 0.4, birdScale * 0.32, birdScale * 1.8);
  const wingGeoL = new THREE.BoxGeometry(birdScale * 1.9, birdScale * 0.08, birdScale * 0.72);
  wingGeoL.translate(birdScale * 0.95, 0, 0);
  const wingGeoR = new THREE.BoxGeometry(birdScale * 1.9, birdScale * 0.08, birdScale * 0.72);
  wingGeoR.translate(-birdScale * 0.95, 0, 0);

  const birdMat = new THREE.MeshStandardMaterial({
    color: 0xd8cdb8,
    emissive: 0x3b2c1a,
    emissiveIntensity: 0.45,
    roughness: 0.65,
  });

  const bodyInst = new THREE.InstancedMesh(bodyGeo, birdMat, birdCount);
  const wingLInst = new THREE.InstancedMesh(wingGeoL, birdMat, birdCount);
  const wingRInst = new THREE.InstancedMesh(wingGeoR, birdMat, birdCount);
  group.add(bodyInst, wingLInst, wingRInst);

  const birds = [];
  for (let i = 0; i < birdCount; i++) {
    const flockCenterAlt = R + (i < 55 ? 0.145 + hashI(i, 2, 7) * 0.09 : 0.035 + hashI(i, 4, 3) * 0.06) * S;
    const orbitTheta = (0.025 + hashI(i, 5, 1) * 0.24) * S * 1.1;
    const phi0 = hashI(i, 8, 9) * Math.PI * 2;
    const omega = (i % 3 === 0 ? -1 : 1) * (0.28 + hashI(i, 3, 6) * 0.28);
    birds.push({
      alt: flockCenterAlt,
      theta: orbitTheta,
      phi0,
      omega,
      dir: omega >= 0 ? 1 : -1,
      flapSpeed: 5.5 + hashI(i, 1, 5) * 3.5,
      flapPhase: hashI(i, 7, 2) * Math.PI * 2,
      scaleFactor: 0.75 + hashI(i, 9, 4) * 0.8,
    });
  }

  // 2. Bancos de nubes suaves desplazándose lentamente por los bordes del valle (claro central abierto)
  const cloudCount = 42;
  const cloudPositions = new Float32Array(cloudCount * 3);
  const cloudSeeds = [];
  for (let i = 0; i < cloudCount; i++) {
    const theta = (0.16 + hashI(i, 11, 2) * 0.24) * S * 1.15;
    const phi0 = hashI(i, 13, 5) * Math.PI * 2;
    const alt = R + (0.045 + hashI(i, 4, 8) * 0.065) * S;
    cloudSeeds.push({ theta, phi0, alt, speed: 0.028 + hashI(i, 6, 3) * 0.025 });
  }
  const cloudGeo = new THREE.BufferGeometry();
  cloudGeo.setAttribute('position', new THREE.BufferAttribute(cloudPositions, 3));
  const cloudMat = new THREE.PointsMaterial({
    map: sharedGlowTexture,
    color: 0xfff0dc,
    size: 10.5,
    transparent: true,
    opacity: 0.34,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const cloudPoints = new THREE.Points(cloudGeo, cloudMat);
  cloudPoints.name = 'Medieval_Drifting_Cloud_Banks';
  group.add(cloudPoints);

  const pos = new THREE.Vector3();
  const normal = new THREE.Vector3();
  const forward = new THREE.Vector3();
  const right = new THREE.Vector3();
  const basis = new THREE.Matrix4();
  const wingMat = new THREE.Matrix4();
  const wingRoll = new THREE.Quaternion();
  const axisZ = new THREE.Vector3(0, 0, 1);
  const vScale = new THREE.Vector3();

  return {
    group,
    update(time, pandoraNightBoost = 1.0) {
      if (!group.parent || !group.parent.visible) return;

      for (let i = 0; i < birdCount; i++) {
        const b = birds[i];
        const phi = b.phi0 + b.omega * time;
        const thetaWobble = b.theta + Math.sin(time * 0.6 + b.flapPhase) * 0.008;
        const r = b.alt + Math.sin(time * 1.1 + b.flapPhase) * 0.0018;

        const sinT = Math.sin(thetaWobble);
        const cosT = Math.cos(thetaWobble);
        const cosP = Math.cos(phi);
        const sinP = Math.sin(phi);

        normal.set(sinT * cosP, cosT, sinT * sinP).normalize();
        pos.copy(normal).multiplyScalar(r);

        forward.set(-b.dir * sinP, 0, b.dir * cosP).normalize();
        right.crossVectors(normal, forward).normalize();
        forward.crossVectors(right, normal).normalize();

        basis.makeBasis(right, normal, forward);
        basis.setPosition(pos);
        vScale.setScalar(b.scaleFactor);
        basis.scale(vScale);

        bodyInst.setMatrixAt(i, basis);

        // Aleteo alternado con planeo suave
        const glideCycle = Math.sin(time * 0.45 + b.flapPhase);
        const flapAmp = glideCycle > -0.25 ? 0.55 : 0.12;
        const angle = Math.sin(time * b.flapSpeed + b.flapPhase) * flapAmp;

        wingRoll.setFromAxisAngle(axisZ, angle);
        wingMat.makeRotationFromQuaternion(wingRoll);
        wingMat.premultiply(basis);
        wingLInst.setMatrixAt(i, wingMat);

        wingRoll.setFromAxisAngle(axisZ, -angle);
        wingMat.makeRotationFromQuaternion(wingRoll);
        wingMat.premultiply(basis);
        wingRInst.setMatrixAt(i, wingMat);
      }

      bodyInst.instanceMatrix.needsUpdate = true;
      wingLInst.instanceMatrix.needsUpdate = true;
      wingRInst.instanceMatrix.needsUpdate = true;

      // Actualizar nubes suaves desplazándose sobre el valle
      const cAttr = cloudGeo.attributes.position;
      for (let i = 0; i < cloudCount; i++) {
        const c = cloudSeeds[i];
        const phi = c.phi0 + c.speed * time;
        const sinT = Math.sin(c.theta);
        cAttr.setXYZ(
          i,
          c.alt * sinT * Math.cos(phi),
          c.alt * Math.cos(c.theta),
          c.alt * sinT * Math.sin(phi)
        );
      }
      cAttr.needsUpdate = true;
    },
  };
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
 * Geometría de ala membranosa estilizada para Ikran (Banshees) y Toruk (+1 o -1 lado).
 */
function createSweptMembraneWingGeometry(span, chord, sideSign) {
  const safeSpan = Math.max(1e-6, span);
  const g = new THREE.PlaneGeometry(safeSpan, chord, 4, 2);
  g.rotateX(-Math.PI * 0.5);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    // Clamp estricto en [0, 1] para evitar Math.pow(-eps, exp) = NaN
    const u = THREE.MathUtils.clamp((p.getX(i) + safeSpan * 0.5) / safeSpan, 0.0, 1.0);
    const v = p.getZ(i);
    const x = sideSign * u * safeSpan;
    const sweepBack = -Math.pow(u, 1.35) * chord * 0.85;
    const taper = 1.0 - Math.pow(u, 1.6) * 0.78;
    const camber = Math.sin(u * Math.PI) * chord * 0.14;
    p.setXYZ(i, x, camber, v * taper + sweepBack);
  }
  g.computeVertexNormals();
  return sanitizeNormals(g, 1.0);
}

/**
 * Cuerpo estilizado de depredador aéreo (torso, cresta cefálica y cola).
 */
function createFlyerBodyGeometry(scaleUnit) {
  const parts = [];
  const torso = new THREE.ConeGeometry(scaleUnit * 0.34, scaleUnit * 2.6, 6);
  torso.rotateX(Math.PI * 0.5);
  parts.push(torso.toNonIndexed());

  const crest = new THREE.ConeGeometry(scaleUnit * 0.18, scaleUnit * 0.9, 4);
  crest.rotateX(Math.PI * 0.42);
  crest.translate(0, scaleUnit * 0.2, scaleUnit * 1.15);
  parts.push(crest.toNonIndexed());

  const tail = new THREE.ConeGeometry(scaleUnit * 0.12, scaleUnit * 2.1, 5);
  tail.rotateX(-Math.PI * 0.5);
  tail.translate(0, 0, -scaleUnit * 1.85);
  parts.push(tail.toNonIndexed());

  const merged = mergeGeometries(parts, false);
  merged.computeVertexNormals();
  return merged;
}

/**
 * Geometrías de cuadrúpedo acorazado (Sturmbeest / Direhorse) y patas articuladas.
 */
function createArmoredQuadrupedParts(scaleUnit) {
  const bodyParts = [];
  const chest = new THREE.BoxGeometry(scaleUnit * 0.72, scaleUnit * 0.68, scaleUnit * 1.55);
  chest.translate(0, scaleUnit * 0.95, 0);
  bodyParts.push(chest.toNonIndexed());

  const neck = new THREE.BoxGeometry(scaleUnit * 0.36, scaleUnit * 0.58, scaleUnit * 0.68);
  neck.rotateX(0.45);
  neck.translate(0, scaleUnit * 1.32, scaleUnit * 0.85);
  bodyParts.push(neck.toNonIndexed());

  const crest = new THREE.BoxGeometry(scaleUnit * 0.92, scaleUnit * 0.44, scaleUnit * 0.36);
  crest.rotateX(0.28);
  crest.translate(0, scaleUnit * 1.54, scaleUnit * 1.15);
  bodyParts.push(crest.toNonIndexed());

  const bodyGeo = mergeGeometries(bodyParts, false);
  bodyGeo.computeVertexNormals();

  // Pares de patas pivotando desde cadera/hombro
  const legPartsF = [];
  const legFL = new THREE.CylinderGeometry(scaleUnit * 0.1, scaleUnit * 0.08, scaleUnit * 0.85, 5);
  legFL.translate(scaleUnit * 0.28, -scaleUnit * 0.42, 0);
  const legFR = legFL.clone();
  legFR.translate(-scaleUnit * 0.56, 0, 0);
  legPartsF.push(legFL.toNonIndexed(), legFR.toNonIndexed());
  const frontLegsGeo = mergeGeometries(legPartsF, false);
  frontLegsGeo.computeVertexNormals();

  const backLegsGeo = frontLegsGeo.clone();
  return { bodyGeo, frontLegsGeo, backLegsGeo };
}

/**
 * Geometrías de medusa aérea (campana translúcida + tentáculos colgantes).
 */
function createJellyfishParts(scaleUnit) {
  const bellGeo = new THREE.SphereGeometry(scaleUnit * 0.62, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.58);
  bellGeo.scale(1.0, 0.75, 1.0);
  bellGeo.computeVertexNormals();
  sanitizeNormals(bellGeo, 1.0);

  const tentParts = [];
  for (let i = 0; i < 4; i++) {
    const ang = (i / 4) * Math.PI * 2;
    const t = new THREE.CylinderGeometry(scaleUnit * 0.05, scaleUnit * 0.012, scaleUnit * 1.45, 4);
    t.translate(Math.cos(ang) * scaleUnit * 0.22, -scaleUnit * 0.72, Math.sin(ang) * scaleUnit * 0.22);
    tentParts.push(t.toNonIndexed());
  }
  const tentGeo = mergeGeometries(tentParts, false);
  tentGeo.computeVertexNormals();
  sanitizeNormals(tentGeo, -1.0);
  return { bellGeo, tentGeo };
}

function normalizeMergeParts(parts) {
  return parts.map((g) => {
    const ng = g.index ? g.toNonIndexed() : g;
    if (ng.attributes.uv) ng.deleteAttribute('uv');
    return ng;
  });
}

/**
 * Geometría esculpida de un Tulkun (ballena acorazada gigante de Pandora)
 * con crestas craneales, grandes aletas pectorales y cola bifurcada (+Z = proa).
 */
function createTulkunParts(scaleUnit) {
  const s = scaleUnit;
  const bodyParts = [];

  const torso = new THREE.SphereGeometry(s * 0.42, 12, 10);
  torso.scale(0.88, 0.72, 2.55);
  bodyParts.push(torso);

  // Cabeza ancha blindada con doble cresta rostral
  const head = new THREE.ConeGeometry(s * 0.42, s * 1.15, 8);
  head.rotateX(Math.PI * 0.5);
  head.scale(1.18, 0.72, 1.0);
  head.translate(0, s * 0.03, s * 1.15);
  bodyParts.push(head);

  [-1, 1].forEach((side) => {
    const crest = new THREE.BoxGeometry(s * 0.16, s * 0.16, s * 0.92);
    crest.rotateY(side * 0.12);
    crest.translate(side * s * 0.24, s * 0.20, s * 0.92);
    bodyParts.push(crest);

    // Grandes aletas pectorales extendidas en ala submarina
    const pec = new THREE.BoxGeometry(s * 1.55, s * 0.06, s * 0.48);
    pec.rotateY(-side * 0.34);
    pec.rotateZ(-side * 0.10);
    pec.translate(side * s * 0.85, -s * 0.12, s * 0.18);
    bodyParts.push(pec);
  });

  // Pedúnculo y aleta caudal ancha
  const tailShaft = new THREE.ConeGeometry(s * 0.25, s * 1.35, 7);
  tailShaft.rotateX(-Math.PI * 0.5);
  tailShaft.translate(0, 0, -s * 1.35);
  bodyParts.push(tailShaft);

  const fluke = new THREE.BoxGeometry(s * 1.35, s * 0.05, s * 0.44);
  fluke.translate(0, s * 0.02, -s * 1.98);
  bodyParts.push(fluke);

  const bodyGeo = mergeGeometries(normalizeMergeParts(bodyParts), false);
  bodyGeo.computeVertexNormals();
  sanitizeNormals(bodyGeo, 1.0);

  // Franjas laterales bioluminiscentes (noche / bajo el agua)
  const glowParts = [];
  [-1, 1].forEach((side) => {
    for (let k = 0; k < 4; k++) {
      const band = new THREE.BoxGeometry(s * 0.05, s * 0.07, s * 0.22);
      band.rotateY(side * 0.08);
      band.translate(side * (s * 0.36 - k * 0.04 * s), s * 0.06, s * (0.72 - k * 0.42));
      glowParts.push(band);
    }
  });
  const glowGeo = mergeGeometries(normalizeMergeParts(glowParts), false);
  glowGeo.computeVertexNormals();
  sanitizeNormals(glowGeo, 1.0);

  return { bodyGeo, glowGeo };
}

/**
 * Geometría de Ilu (montura marina ágil de cuello largo y cuatro aletas) (+Z = proa).
 */
function createIluParts(scaleUnit) {
  const s = scaleUnit;
  const bodyParts = [];

  const core = new THREE.SphereGeometry(s * 0.24, 9, 7);
  core.scale(0.85, 0.72, 2.0);
  bodyParts.push(core);

  const neck = new THREE.CylinderGeometry(s * 0.07, s * 0.14, s * 0.85, 6);
  neck.rotateX(Math.PI * 0.42);
  neck.translate(0, s * 0.12, s * 0.74);
  bodyParts.push(neck);

  const head = new THREE.ConeGeometry(s * 0.09, s * 0.36, 5);
  head.rotateX(Math.PI * 0.5);
  head.translate(0, s * 0.22, s * 1.24);
  bodyParts.push(head);

  const tail = new THREE.ConeGeometry(s * 0.14, s * 1.15, 6);
  tail.rotateX(-Math.PI * 0.5);
  tail.translate(0, -s * 0.02, -s * 0.95);
  bodyParts.push(tail);

  const bodyGeo = mergeGeometries(normalizeMergeParts(bodyParts), false);
  bodyGeo.computeVertexNormals();
  sanitizeNormals(bodyGeo, 1.0);

  const flipParts = [];
  [-1, 1].forEach((side) => {
    const fFore = new THREE.BoxGeometry(s * 0.92, s * 0.04, s * 0.28);
    fFore.rotateY(-side * 0.35);
    fFore.translate(side * s * 0.48, -s * 0.05, s * 0.24);
    flipParts.push(fFore);

    const fHind = new THREE.BoxGeometry(s * 0.62, s * 0.035, s * 0.22);
    fHind.rotateY(-side * 0.28);
    fHind.translate(side * s * 0.34, -s * 0.06, -s * 0.34);
    flipParts.push(fHind);
  });
  const flipperGeo = mergeGeometries(normalizeMergeParts(flipParts), false);
  flipperGeo.computeVertexNormals();
  sanitizeNormals(flipperGeo, 1.0);

  return { bodyGeo, flipperGeo };
}

/**
 * Pez de arrecife bioluminiscente para cardúmenes coralinos (+Z = proa).
 */
function createReefFishGeometry(scaleUnit) {
  const s = scaleUnit;
  const parts = [];
  const body = new THREE.ConeGeometry(s * 0.24, s * 0.85, 5);
  body.rotateX(Math.PI * 0.5);
  body.scale(0.55, 1.0, 1.0);
  body.translate(0, 0, s * 0.15);
  parts.push(body);

  const tail = new THREE.ConeGeometry(s * 0.22, s * 0.42, 4);
  tail.rotateX(-Math.PI * 0.5);
  tail.scale(0.32, 1.15, 1.0);
  tail.translate(0, 0, -s * 0.44);
  parts.push(tail);

  const geo = mergeGeometries(normalizeMergeParts(parts), false);
  geo.computeVertexNormals();
  sanitizeNormals(geo, 1.0);
  return geo;
}

/**
 * Ecosistema vivo global 360° de Pandora (Planeta 1):
 * - 90 Ikran (Banshees) alrededor de Árbol-Casa, Montañas Aleluya y Nido de Ikran
 * - 4 Toruk patrullando cotas altas sobre los monumentos principales
 * - 6 manadas terrestres (48 cuadrúpedos acorazados) en praderas de distintos continentes
 * - Enjambre de 240 medusas aéreas en selvas y Árbol de las Almas
 * - 2.200 esporas selváticas globales con transición real Día (sutil natural) <-> Noche (bioluminiscente)
 * - Fauna marina Metkayina: 5 Tulkun, 24 Ilu y 450 peces coralinos nadando bajo el agua
 */
export function createPandoraLifeSystem(localRadius, pandoraWorld) {
  const R = localRadius;
  const S = 1.0 / 3.5;
  const group = new THREE.Group();
  group.name = 'Pandora_Bioluminescent_Life';

  const samplerCtx = pandoraWorld?.samplerCtx || null;
  const qCap = samplerCtx?.qCap;
  const sphereLandmarks = samplerCtx?.sphereLandmarks;

  const makeLocalBasis = (dirVec) => {
    const normalDir = dirVec.clone().normalize();
    const ref = Math.abs(normalDir.x) < 0.85 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 0, 1);
    const e1 = new THREE.Vector3().crossVectors(normalDir, ref).normalize();
    const e2 = new THREE.Vector3().crossVectors(normalDir, e1).normalize();
    return { normalDir, e1, e2 };
  };

  // 1. 180 esporas selváticas optimizadas concentradas en bosques e hitos clave (60 FPS)
  const sporeCount = 180;
  const sporePos = new Float32Array(sporeCount * 3);
  const sporeCol = new Float32Array(sporeCount * 3);
  const sporeSeeds = [];
  const sporePalette = [
    new THREE.Color(0x00f5ff),
    new THREE.Color(0xb048ff),
    new THREE.Color(0x3a88ff),
    new THREE.Color(0xff52b8),
  ];

  const goldenRatio = (1 + Math.sqrt(5)) * 0.5;
  const landDirs = [];
  for (let probe = 0; probe < 5000; probe++) {
    const yB = 1.0 - ((probe + 0.5) / 5000) * 2.0;
    const rXY = Math.sqrt(Math.max(0.0, 1.0 - yB * yB));
    const phi = (2.0 * Math.PI * probe) / goldenRatio;
    const dx = Math.cos(phi) * rXY;
    const dz = Math.sin(phi) * rXY;
    const info = samplePandoraGlobalPoint(dx, yB, dz, qCap, sphereLandmarks);
    if (
      info.nation === 'forest' &&
      info.forestFactor > 0.99 &&
      info.ashFactor < 0.01 &&
      info.waterFactor < 0.01 &&
      info.borderMountain < 0.12 &&
      info.cont > 0.06 &&
      info.biome !== 'lake' &&
      info.elev > 0.0005
    ) {
      landDirs.push({ dir: new THREE.Vector3(dx, yB, dz), elev: info.elev, cont: info.cont });
    }
  }
  if (landDirs.length === 0) {
    landDirs.push({ dir: PANDORA_LANDMARKS[0].capDir.clone(), elev: 0.002, cont: 0.25 });
  }

  for (let i = 0; i < sporeCount; i++) {
    let dir;
    let groundElev = 0.002;
    if (i < 90) {
      // Concentración alrededor de los 5 monumentos de la Nación del Bosque
      const lm = PANDORA_LANDMARKS[i % 5];
      const fr = makeLocalBasis(lm.capDir);
      const a = hashI(i, 7, 13) * Math.PI * 2;
      const rad = Math.sqrt(hashI(i, 3, 19)) * (0.105 / 3.2);
      dir = fr.normalDir
        .clone()
        .addScaledVector(fr.e1, Math.cos(a) * rad)
        .addScaledVector(fr.e2, Math.sin(a) * rad)
        .normalize();
      const sInfo = samplePandoraGlobalPoint(dir.x, dir.y, dir.z, qCap, sphereLandmarks, 3);
      if (sInfo.nation !== 'forest') {
        const fallback = landDirs[i % landDirs.length];
        dir.copy(fallback.dir);
        groundElev = fallback.elev;
      } else {
        groundElev = sInfo.elev;
      }
    } else {
      const ld = landDirs[(i * 7 + Math.floor(hashI(i, 4, 11) * 19)) % landDirs.length];
      const fr = makeLocalBasis(ld.dir);
      const a = hashI(i, 2, 17) * Math.PI * 2;
      const rad = hashI(i, 9, 5) * (0.025 / 3.2);
      dir = fr.normalDir
        .clone()
        .addScaledVector(fr.e1, Math.cos(a) * rad)
        .addScaledVector(fr.e2, Math.sin(a) * rad)
        .normalize();
      groundElev = ld.elev;
    }

    const baseAlt = R + groundElev + (0.005 + hashI(i, 5, 11) * 0.19) * S;
    sporeSeeds.push({
      dir,
      baseAlt,
      driftSpeed: 0.025 + hashI(i, 2, 7) * 0.035,
      risePhase: hashI(i, 9, 4) * Math.PI * 2,
    });

    const c = sporePalette[i % sporePalette.length];
    sporeCol[i * 3] = c.r;
    sporeCol[i * 3 + 1] = c.g;
    sporeCol[i * 3 + 2] = c.b;
  }

  const sporeGeo = new THREE.BufferGeometry();
  sporeGeo.setAttribute('position', new THREE.BufferAttribute(sporePos, 3));
  sporeGeo.setAttribute('color', new THREE.BufferAttribute(sporeCol, 3));

  const sporeMat = new THREE.PointsMaterial({
    size: 0.72,
    map: sharedGlowTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.16,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  const sporePoints = new THREE.Points(sporeGeo, sporeMat);
  sporePoints.frustumCulled = false;
  group.add(sporePoints);

  // 2. Bandada de 90 Ikran (Banshees) alrededor de Árbol-Casa, Montañas Aleluya y Nido de Ikran
  const ikranCount = 90;
  const iScale = 0.0054 * S;
  const ikranBodyMat = new THREE.MeshStandardMaterial({
    color: 0x0b5b78,
    emissive: 0x00d8ff,
    emissiveIntensity: 0.08,
    roughness: 0.42,
  });
  const ikranForeMat = new THREE.MeshStandardMaterial({
    color: 0x00a8c0,
    emissive: 0x00f0ff,
    emissiveIntensity: 0.10,
    roughness: 0.38,
    side: THREE.DoubleSide,
  });
  const ikranHindMat = new THREE.MeshStandardMaterial({
    color: 0x0e6ad4,
    emissive: 0x2088ff,
    emissiveIntensity: 0.10,
    roughness: 0.42,
    side: THREE.DoubleSide,
  });
  ikranBodyMat.userData.animatedEmissive = true;
  ikranForeMat.userData.animatedEmissive = true;
  ikranHindMat.userData.animatedEmissive = true;

  const iBody = new THREE.InstancedMesh(createFlyerBodyGeometry(iScale), ikranBodyMat, ikranCount);
  const iForeL = new THREE.InstancedMesh(
    createSweptMembraneWingGeometry(iScale * 2.75, iScale * 1.1, 1),
    ikranForeMat,
    ikranCount
  );
  const iForeR = new THREE.InstancedMesh(
    createSweptMembraneWingGeometry(iScale * 2.75, iScale * 1.1, -1),
    ikranForeMat,
    ikranCount
  );
  const iHindL = new THREE.InstancedMesh(
    createSweptMembraneWingGeometry(iScale * 1.65, iScale * 0.75, 1),
    ikranHindMat,
    ikranCount
  );
  const iHindR = new THREE.InstancedMesh(
    createSweptMembraneWingGeometry(iScale * 1.65, iScale * 0.75, -1),
    ikranHindMat,
    ikranCount
  );
  [iBody, iForeL, iForeR, iHindL, iHindR].forEach((m) => {
    m.frustumCulled = false;
    group.add(m);
  });

  // Distribuir espirales entre Árbol-Casa, Montañas Aleluya y Nido de Ikran
  const spiralFrames = [
    makeLocalBasis(PANDORA_LANDMARKS[0].capDir), // Hometree (0)
    makeLocalBasis(PANDORA_LANDMARKS[1].capDir), // Hallelujah (1)
    makeLocalBasis(PANDORA_LANDMARKS[2].capDir), // Ikran Rookery (2)
  ];
  const archList = pandoraWorld?.archCenters || [];
  for (let a = 0; a < archList.length; a++) {
    if (archList[a]?.normal) {
      spiralFrames.push(makeLocalBasis(archList[a].normal));
    }
  }

  const ikranAgents = [];
  for (let i = 0; i < ikranCount; i++) {
    const landmarkSelect = i < 25 ? 0 : i < 55 ? 1 : 2;
    const frame =
      i < 60
        ? spiralFrames[landmarkSelect]
        : spiralFrames[i % spiralFrames.length];
    const orbitRad = ((0.032 + hashI(i, 4, 1) * 0.088) * S) / 3.2;
    const alt = R + (0.055 + hashI(i, 8, 5) * 0.17) * S;
    const omega = (i % 3 === 0 ? -1 : 1) * (0.4 + hashI(i, 6, 3) * 0.34);
    ikranAgents.push({
      frame,
      orbitRad,
      alt,
      phi0: hashI(i, 4, 2) * Math.PI * 2,
      omega,
      phase: hashI(i, 3, 9) * Math.PI * 2,
      scale: 0.78 + hashI(i, 5, 6) * 0.55,
    });
  }

  // 3. 4 Toruk majestuosos patrullando sobre distintos continentes/monumentos
  const torukCount = 4;
  const tScale = 0.0145 * S;
  const torukBodyMat = new THREE.MeshStandardMaterial({
    color: 0xa6160a,
    emissive: 0xff3c10,
    emissiveIntensity: 0.1,
    roughness: 0.4,
  });
  const torukWingMat = new THREE.MeshStandardMaterial({
    color: 0xd82a0e,
    emissive: 0xff5a18,
    emissiveIntensity: 0.12,
    roughness: 0.4,
    side: THREE.DoubleSide,
  });
  torukBodyMat.userData.animatedEmissive = true;
  torukWingMat.userData.animatedEmissive = true;

  const tBody = new THREE.InstancedMesh(createFlyerBodyGeometry(tScale), torukBodyMat, torukCount);
  const tForeL = new THREE.InstancedMesh(
    createSweptMembraneWingGeometry(tScale * 3.1, tScale * 1.25, 1),
    torukWingMat,
    torukCount
  );
  const tForeR = new THREE.InstancedMesh(
    createSweptMembraneWingGeometry(tScale * 3.1, tScale * 1.25, -1),
    torukWingMat,
    torukCount
  );
  const tHindL = new THREE.InstancedMesh(
    createSweptMembraneWingGeometry(tScale * 1.85, tScale * 0.85, 1),
    torukWingMat,
    torukCount
  );
  const tHindR = new THREE.InstancedMesh(
    createSweptMembraneWingGeometry(tScale * 1.85, tScale * 0.85, -1),
    torukWingMat,
    torukCount
  );
  [tBody, tForeL, tForeR, tHindL, tHindR].forEach((m) => {
    m.frustumCulled = false;
    group.add(m);
  });

  const torukAgents = [
    { frame: makeLocalBasis(PANDORA_LANDMARKS[0].capDir), alt: R + 0.19 * S, orbitRad: (0.11 * S) / 3.2, phi0: 0.4, omega: 0.22, phase: 0.0 },
    { frame: makeLocalBasis(PANDORA_LANDMARKS[1].capDir), alt: R + 0.26 * S, orbitRad: (0.14 * S) / 3.2, phi0: 2.1, omega: -0.2, phase: 1.5 },
    { frame: makeLocalBasis(PANDORA_LANDMARKS[2].capDir), alt: R + 0.21 * S, orbitRad: (0.12 * S) / 3.2, phi0: 3.9, omega: 0.21, phase: 2.7 },
    { frame: makeLocalBasis(PANDORA_LANDMARKS[3].capDir), alt: R + 0.18 * S, orbitRad: (0.10 * S) / 3.2, phi0: 5.1, omega: -0.23, phase: 0.9 },
  ];

  // 4. 6 Manadas terrestres (48 cuadrúpedos acorazados) en praderas de varios continentes
  const herdCount = 48;
  const qScale = 0.0048 * S;
  const { bodyGeo: qBodyGeo, frontLegsGeo: qFrontGeo, backLegsGeo: qBackGeo } =
    createArmoredQuadrupedParts(qScale);
  const quadBodyMat = new THREE.MeshStandardMaterial({
    color: 0x383254,
    emissive: 0x1e6098,
    emissiveIntensity: 0.0,
    roughness: 0.68,
  });
  const quadLegMat = new THREE.MeshStandardMaterial({
    color: 0x26243a,
    roughness: 0.75,
  });
  quadBodyMat.userData.animatedEmissive = true;

  const qBodyInst = new THREE.InstancedMesh(qBodyGeo, quadBodyMat, herdCount);
  const qFrontInst = new THREE.InstancedMesh(qFrontGeo, quadLegMat, herdCount);
  const qBackInst = new THREE.InstancedMesh(qBackGeo, quadLegMat, herdCount);
  [qBodyInst, qFrontInst, qBackInst].forEach((m) => {
    m.frustumCulled = false;
    group.add(m);
  });

  // Seleccionar 6 praderas dentro de claros interiores de la Nación del Bosque (verificando todo el perímetro de pastoreo)
  const plainsCandidates = landDirs.filter((d) => d.cont > 0.08);
  const pool = plainsCandidates.length >= 6 ? plainsCandidates : landDirs;
  const herdFrames = [];
  const pCheck = new THREE.Vector3();
  for (let h = 0; h < 6; h++) {
    let chosenBasis = null;
    const radOff = (0.015 + (h % 3) * 0.004) / 3.2;
    const startIdx = Math.floor((h / 6) * pool.length) % pool.length;
    for (let step = 0; step < pool.length; step++) {
      const cand = pool[(startIdx + step * 7) % pool.length];
      const b = makeLocalBasis(cand.dir);
      let allForest = true;
      for (let k = 0; k < 8; k++) {
        const ang = (k / 8) * Math.PI * 2;
        pCheck
          .copy(b.normalDir)
          .addScaledVector(b.e1, Math.cos(ang) * radOff * 1.3)
          .addScaledVector(b.e2, Math.sin(ang) * radOff * 1.3)
          .normalize();
        const chk = samplePandoraGlobalPoint(pCheck.x, pCheck.y, pCheck.z, qCap, sphereLandmarks, 3);
        if (chk.nation !== 'forest' || chk.ashFactor > 0.04 || chk.biome === 'lake') {
          allForest = false;
          break;
        }
      }
      if (allForest) {
        chosenBasis = b;
        break;
      }
    }
    herdFrames.push({
      ...(chosenBasis || makeLocalBasis(PANDORA_LANDMARKS[0].capDir)),
      radOffset: radOff,
      speed: (h % 2 === 0 ? 1 : -1) * (0.14 + (h % 3) * 0.02),
    });
  }

  const quadAgents = [];
  for (let i = 0; i < herdCount; i++) {
    const hf = herdFrames[i % herdFrames.length];
    const memberIdx = Math.floor(i / herdFrames.length);
    quadAgents.push({
      herd: hf,
      offsetAng: memberIdx * 0.78 + hashI(i, 2, 7) * 0.35,
      radialFactor: 0.52 + hashI(i, 5, 3) * 0.65,
      phase: hashI(i, 9, 1) * Math.PI * 2,
      scale: 0.85 + hashI(i, 4, 8) * 0.38,
    });
  }

  // 5. Enjambre de 240 Medusas aéreas flotando en bosques globales y Árbol de las Almas
  const jellyCount = 240;
  const jScale = 0.0038 * S;
  const { bellGeo: jBellGeo, tentGeo: jTentGeo } = createJellyfishParts(jScale);
  const jellyBellMat = new THREE.MeshStandardMaterial({
    color: 0xf4dcff,
    emissive: 0xc254ff,
    emissiveIntensity: 0.12,
    transparent: true,
    opacity: 0.35,
    roughness: 0.25,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
  const jellyTentMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0.85, 0.75, 1.05),
    transparent: true,
    opacity: 0.28,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  jellyBellMat.userData.animatedEmissive = true;
  jellyTentMat.userData.animatedEmissive = true;

  const jBellInst = new THREE.InstancedMesh(jBellGeo, jellyBellMat, jellyCount);
  const jTentInst = new THREE.InstancedMesh(jTentGeo, jellyTentMat, jellyCount);
  jBellInst.frustumCulled = false;
  jTentInst.frustumCulled = false;
  group.add(jBellInst, jTentInst);

  const jellySeeds = [];
  for (let i = 0; i < jellyCount; i++) {
    let fr;
    let baseDir;
    let elev;
    if (i < 75) {
      // Sagrado enjambre dentro del Árbol de las Almas y Árbol-Casa
      const lm = i < 45 ? PANDORA_LANDMARKS[3] : PANDORA_LANDMARKS[0];
      fr = makeLocalBasis(lm.capDir);
      const a = hashI(i, 3, 15) * Math.PI * 2;
      const rad = Math.sqrt(hashI(i, 6, 11)) * (0.075 / 3.2);
      baseDir = fr.normalDir
        .clone()
        .addScaledVector(fr.e1, Math.cos(a) * rad)
        .addScaledVector(fr.e2, Math.sin(a) * rad)
        .normalize();
      elev = samplePandoraTerrainOffset(baseDir.x, baseDir.y, baseDir.z, 0, samplerCtx);
    } else {
      const ld = landDirs[(i * 11 + Math.floor(hashI(i, 2, 13) * 13)) % landDirs.length];
      baseDir = ld.dir;
      fr = makeLocalBasis(baseDir);
      elev = ld.elev;
    }
    jellySeeds.push({
      frame: fr,
      alt: R + elev + (0.015 + hashI(i, 9, 7) * 0.068) * S,
      phase: hashI(i, 2, 5) * Math.PI * 2,
      scale: 0.72 + hashI(i, 8, 3) * 0.78,
    });
  }

  // 6. Fauna submarina en los arrecifes Metkayina y océanos (5 Tulkun, 24 Ilu y 450 peces coralinos)
  const metkayinaLm = PANDORA_LANDMARKS[6]; // Lagoon Metkayina (elevación submarina hasta -0.135)
  const metkFrame = makeLocalBasis(metkayinaLm.capDir);
  const deepReefDirs = [];
  for (let probe = 0; probe < 1200; probe++) {
    const a = hashI(probe, 11, 29) * Math.PI * 2;
    const rad = Math.sqrt(hashI(probe, 17, 7)) * (0.14 / 3.2);
    const d = metkFrame.normalDir
      .clone()
      .addScaledVector(metkFrame.e1, Math.cos(a) * rad)
      .addScaledVector(metkFrame.e2, Math.sin(a) * rad)
      .normalize();
    const info = samplePandoraGlobalPoint(d.x, d.y, d.z, qCap, sphereLandmarks, 3);
    if (info.nation === 'water' && info.waterFactor > 0.92 && info.elev < -0.045) {
      deepReefDirs.push({ dir: d, elev: info.elev });
    }
  }
  if (deepReefDirs.length === 0) {
    deepReefDirs.push({ dir: metkFrame.normalDir.clone(), elev: -0.095 });
  }

  // 6A. 5 Tulkun colosales bajo las balsas y canales profundos
  const tulkunCount = 5;
  const tulkunScale = 0.0145 * S;
  const { bodyGeo: tulkBodyGeo, glowGeo: tulkGlowGeo } = createTulkunParts(tulkunScale);
  const tulkBodyMat = new THREE.MeshStandardMaterial({
    color: 0x26485e,
    roughness: 0.42,
    metalness: 0.14,
  });
  const tulkGlowMat = new THREE.MeshStandardMaterial({
    color: 0x58e8ff,
    emissive: 0x00f0ff,
    emissiveIntensity: 0.06,
    roughness: 0.3,
  });
  tulkGlowMat.userData.animatedEmissive = true;

  const tBodyInst = new THREE.InstancedMesh(tulkBodyGeo, tulkBodyMat, tulkunCount);
  const tGlowInst = new THREE.InstancedMesh(tulkGlowGeo, tulkGlowMat, tulkunCount);
  tBodyInst.frustumCulled = false;
  tGlowInst.frustumCulled = false;
  group.add(tBodyInst, tGlowInst);

  const tulkunAgents = [];
  for (let i = 0; i < tulkunCount; i++) {
    const seed = deepReefDirs[Math.floor((i / tulkunCount) * deepReefDirs.length) % deepReefDirs.length];
    tulkunAgents.push({
      frame: makeLocalBasis(seed.dir),
      orbitRad: (0.055 + hashI(i, 3, 19) * 0.065) / 3.2,
      depthRatio: 0.45 + hashI(i, 8, 13) * 0.25,
      phi0: hashI(i, 5, 23) * Math.PI * 2,
      omega: (i % 2 === 0 ? 1 : -1) * (0.11 + hashI(i, 2, 17) * 0.06),
      phase: hashI(i, 7, 11) * Math.PI * 2,
      scale: 0.85 + hashI(i, 9, 4) * 0.42,
    });
  }

  // 6B. 24 Ilu ágiles nadando en ochos entre el kelp coralino
  const iluCount = 24;
  const iluScale = 0.0056 * S;
  const { bodyGeo: iluBodyGeo, flipperGeo: iluFlipGeo } = createIluParts(iluScale);
  const iluBodyMat = new THREE.MeshStandardMaterial({
    color: 0x165e78,
    emissive: 0x00c8ff,
    emissiveIntensity: 0.06,
    roughness: 0.35,
  });
  const iluFlipMat = new THREE.MeshStandardMaterial({
    color: 0x20889e,
    emissive: 0x24ffe0,
    emissiveIntensity: 0.06,
    roughness: 0.38,
  });
  iluBodyMat.userData.animatedEmissive = true;
  iluFlipMat.userData.animatedEmissive = true;

  const iluBodyInst = new THREE.InstancedMesh(iluBodyGeo, iluBodyMat, iluCount);
  const iluFlipInst = new THREE.InstancedMesh(iluFlipGeo, iluFlipMat, iluCount);
  iluBodyInst.frustumCulled = false;
  iluFlipInst.frustumCulled = false;
  group.add(iluBodyInst, iluFlipInst);

  const iluAgents = [];
  for (let i = 0; i < iluCount; i++) {
    const seed = deepReefDirs[(i * 19 + 3) % deepReefDirs.length];
    iluAgents.push({
      frame: makeLocalBasis(seed.dir),
      orbitRad: (0.025 + hashI(i, 4, 29) * 0.038) / 3.2,
      phi0: hashI(i, 12, 5) * Math.PI * 2,
      omega: (i % 2 === 0 ? 1 : -1) * (0.28 + hashI(i, 6, 17) * 0.14),
      phase: hashI(i, 8, 21) * Math.PI * 2,
      scale: 0.78 + hashI(i, 3, 14) * 0.48,
    });
  }

  // 6C. 220 Peces de arrecife en 6 cardúmenes sincronizados alrededor de los corales
  const fishCount = 220;
  const schoolCount = 6;
  const fishScale = 0.0020 * S;
  const fishGeo = createReefFishGeometry(fishScale);
  const fishMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0x30d8ff,
    emissiveIntensity: 0.08,
    roughness: 0.28,
  });
  fishMat.userData.animatedEmissive = true;

  const fishInst = new THREE.InstancedMesh(fishGeo, fishMat, fishCount);
  fishInst.name = 'Pandora_Reef_Fish_Schools';
  fishInst.frustumCulled = false;
  fishInst.castShadow = false;
  fishInst.receiveShadow = false;
  const fishPalette = [
    new THREE.Color(0x28f2ff),
    new THREE.Color(0xffb438),
    new THREE.Color(0xff5ea8),
    new THREE.Color(0x64ffb8),
    new THREE.Color(0x66aaff),
  ];
  for (let i = 0; i < fishCount; i++) {
    fishInst.setColorAt(i, fishPalette[Math.floor(hashI(i, 15, 3) * fishPalette.length) % fishPalette.length]);
  }
  if (fishInst.instanceColor) fishInst.instanceColor.needsUpdate = true;
  group.add(fishInst);

  const fishSchools = [];
  for (let sIdx = 0; sIdx < schoolCount; sIdx++) {
    const seed = deepReefDirs[(sIdx * 47 + 7) % deepReefDirs.length];
    fishSchools.push({
      frame: makeLocalBasis(seed.dir),
      orbitRad: (0.022 + hashI(sIdx, 9, 13) * 0.035) / 3.2,
      omega: (sIdx % 2 === 0 ? 1 : -1) * (0.22 + hashI(sIdx, 2, 19) * 0.12),
      phi0: hashI(sIdx, 6, 31) * Math.PI * 2,
      phase: hashI(sIdx, 14, 7) * Math.PI * 2,
      centerDir: new THREE.Vector3(),
      centerAlt: R - 0.035,
      aheadDir: new THREE.Vector3(),
      tangentForward: new THREE.Vector3(),
      tangentRight: new THREE.Vector3(),
    });
  }

  const fishAgents = [];
  for (let i = 0; i < fishCount; i++) {
    fishAgents.push({
      schoolIdx: i % schoolCount,
      localAng: hashI(i, 4, 17) * Math.PI * 2,
      localRad: ((0.0025 + hashI(i, 9, 23) * 0.011) * (0.5 + 0.5 * (i % 3))) / 3.2,
      vertOff: (hashI(i, 13, 5) - 0.5) * 0.018,
      phase: hashI(i, 21, 11) * Math.PI * 2,
      scale: 0.72 + hashI(i, 7, 19) * 0.65,
    });
  }

  // Objetos temporales reutilizados para 60 FPS sin asignación de memoria
  const pos = new THREE.Vector3();
  const nextPos = new THREE.Vector3();
  const aheadNorm = new THREE.Vector3();
  const aheadSwimNorm = new THREE.Vector3();
  const normal = new THREE.Vector3();
  const forward = new THREE.Vector3();
  const right = new THREE.Vector3();
  const basis = new THREE.Matrix4();
  const mWing = new THREE.Matrix4();
  const qRoll = new THREE.Quaternion();
  const qBank = new THREE.Quaternion();
  const axisX = new THREE.Vector3(1, 0, 0);
  const axisZ = new THREE.Vector3(0, 0, 1);
  const vScale = new THREE.Vector3();
  const upY = new THREE.Vector3(0, 1, 0);
  const driftVec = new THREE.Vector3();

  const updateFourWingedFlyer = (
    idx,
    bodyMesh,
    foreLMesh,
    foreRMesh,
    hindLMesh,
    hindRMesh,
    worldPos,
    aheadPos,
    flapAngleFore,
    flapAngleHind,
    scaleVal,
    bankAngle
  ) => {
    normal.copy(worldPos).normalize();
    forward.copy(aheadPos).sub(worldPos);
    if (forward.lengthSq() < 1e-12) forward.set(1, 0, 0);
    forward.normalize();
    right.crossVectors(normal, forward).normalize();
    forward.crossVectors(right, normal).normalize();

    basis.makeBasis(right, normal, forward);
    qBank.setFromAxisAngle(axisZ, bankAngle);
    mWing.makeRotationFromQuaternion(qBank);
    basis.multiply(mWing);
    basis.setPosition(worldPos);
    vScale.setScalar(scaleVal);
    basis.scale(vScale);

    bodyMesh.setMatrixAt(idx, basis);

    qRoll.setFromAxisAngle(axisZ, flapAngleFore);
    mWing.makeRotationFromQuaternion(qRoll);
    mWing.premultiply(basis);
    foreLMesh.setMatrixAt(idx, mWing);

    qRoll.setFromAxisAngle(axisZ, -flapAngleFore);
    mWing.makeRotationFromQuaternion(qRoll);
    mWing.premultiply(basis);
    foreRMesh.setMatrixAt(idx, mWing);

    qRoll.setFromAxisAngle(axisZ, flapAngleHind);
    mWing.makeRotationFromQuaternion(qRoll);
    mWing.setPosition(0, 0, -iScale * 0.72);
    mWing.premultiply(basis);
    hindLMesh.setMatrixAt(idx, mWing);

    qRoll.setFromAxisAngle(axisZ, -flapAngleHind);
    mWing.makeRotationFromQuaternion(qRoll);
    mWing.setPosition(0, 0, -iScale * 0.72);
    mWing.premultiply(basis);
    hindRMesh.setMatrixAt(idx, mWing);
  };

  const evalArchSpiralPos = (cr, tEval, outVec) => {
    const ang = cr.phi0 + cr.omega * tEval;
    const rad = cr.orbitRad + Math.sin(tEval * 0.8 + cr.phase) * (0.008 / 3.2) * S;
    const alt = cr.alt + Math.sin(tEval * 1.15 + cr.phase) * 0.006 * S;
    outVec
      .copy(cr.frame.normalDir)
      .addScaledVector(cr.frame.e1, Math.cos(ang) * rad)
      .addScaledVector(cr.frame.e2, Math.sin(ang) * rad)
      .normalize()
      .multiplyScalar(alt);
  };

  return {
    group,
    update(time, _pandoraNightBoost = 1.0, sunElev = 0.5, submergedRatio = 0.0) {
      if (!group.parent || !group.parent.visible) return;

      const nightT = THREE.MathUtils.smoothstep(-sunElev, -0.10, 0.04);

      // Actualizar flora, terreno, ríos, cascadas, biomas Ceniza/Metkayina y luz submarina
      if (pandoraWorld?.updateDayNight) {
        pandoraWorld.updateDayNight(sunElev, time, submergedRatio);
      }

      // 1. Esporas selváticas globales (sutil polvo solar de día -> enjambre bioluminiscente de noche)
      const sAttr = sporeGeo.attributes.position;
      for (let i = 0; i < sporeCount; i++) {
        const s = sporeSeeds[i];
        const rise = ((s.risePhase + time * s.driftSpeed * 3.0) % 1.0) * 0.015;
        const r = s.baseAlt + rise;
        const jitter = Math.sin(time * 0.65 + s.risePhase) * 0.0022;
        sAttr.setXYZ(
          i,
          s.dir.x * r + jitter,
          s.dir.y * r,
          s.dir.z * r + jitter
        );
      }
      sAttr.needsUpdate = true;
      sporeMat.opacity = THREE.MathUtils.lerp(0.14, 0.92, nightT);

      // 2. Bandadas de 90 Ikran alrededor de Hometree, Aleluya y Nido de Ikran
      for (let i = 0; i < ikranCount; i++) {
        const cr = ikranAgents[i];
        evalArchSpiralPos(cr, time, pos);
        evalArchSpiralPos(cr, time + 0.05, nextPos);

        const glide = Math.sin(time * 0.65 + cr.phase) > -0.2 ? 0.46 : 0.1;
        const flapFore = Math.sin(time * 4.9 + cr.phase) * glide;
        const flapHind = Math.sin(time * 4.9 + cr.phase - 0.85) * glide * 0.82;
        const bank = cr.omega > 0 ? -0.32 : 0.32;

        updateFourWingedFlyer(
          i,
          iBody,
          iForeL,
          iForeR,
          iHindL,
          iHindR,
          pos,
          nextPos,
          flapFore,
          flapHind,
          cr.scale,
          bank
        );
      }
      iBody.instanceMatrix.needsUpdate = true;
      iForeL.instanceMatrix.needsUpdate = true;
      iForeR.instanceMatrix.needsUpdate = true;
      iHindL.instanceMatrix.needsUpdate = true;
      iHindR.instanceMatrix.needsUpdate = true;
      ikranBodyMat.emissiveIntensity = THREE.MathUtils.lerp(0.06, 1.45, nightT);
      ikranForeMat.emissiveIntensity = THREE.MathUtils.lerp(0.08, 1.85, nightT);
      ikranHindMat.emissiveIntensity = THREE.MathUtils.lerp(0.08, 1.65, nightT);

      // 3. 4 Toruk patrullando sobre Hometree, Aleluya, Nido de Ikran y Árbol de las Almas
      for (let i = 0; i < torukCount; i++) {
        const tr = torukAgents[i];
        evalArchSpiralPos(tr, time, pos);
        evalArchSpiralPos(tr, time + 0.08, nextPos);
        const flapFore = Math.sin(time * 2.5 + tr.phase) * 0.42;
        const flapHind = Math.sin(time * 2.5 + tr.phase - 0.9) * 0.35;
        updateFourWingedFlyer(
          i,
          tBody,
          tForeL,
          tForeR,
          tHindL,
          tHindR,
          pos,
          nextPos,
          flapFore,
          flapHind,
          1.0,
          tr.omega > 0 ? -0.25 : 0.25
        );
      }
      tBody.instanceMatrix.needsUpdate = true;
      tForeL.instanceMatrix.needsUpdate = true;
      tForeR.instanceMatrix.needsUpdate = true;
      tHindL.instanceMatrix.needsUpdate = true;
      tHindR.instanceMatrix.needsUpdate = true;
      torukBodyMat.emissiveIntensity = THREE.MathUtils.lerp(0.08, 1.9, nightT);
      torukWingMat.emissiveIntensity = THREE.MathUtils.lerp(0.10, 2.15, nightT);

      // 4. 6 Manadas terrestres distribuidas por varios continentes
      const evalQuadPoint = (qa, tEval, outPos, outNorm) => {
        const ang = qa.offsetAng + qa.herd.speed * tEval;
        const rad = qa.herd.radOffset * qa.radialFactor;
        outNorm
          .copy(qa.herd.normalDir)
          .addScaledVector(qa.herd.e1, Math.cos(ang) * rad)
          .addScaledVector(qa.herd.e2, Math.sin(ang) * rad)
          .normalize();
        const elev = samplePandoraTerrainOffset(outNorm.x, outNorm.y, outNorm.z, 0, samplerCtx);
        outPos.copy(outNorm).multiplyScalar(R + elev);
      };

      for (let i = 0; i < herdCount; i++) {
        const qa = quadAgents[i];
        evalQuadPoint(qa, time, pos, normal);
        evalQuadPoint(qa, time + 0.08, nextPos, aheadNorm);

        forward.copy(nextPos).sub(pos).normalize();
        right.crossVectors(normal, forward).normalize();
        forward.crossVectors(right, normal).normalize();

        basis.makeBasis(right, normal, forward);
        basis.setPosition(pos);
        vScale.setScalar(qa.scale);
        basis.scale(vScale);
        qBodyInst.setMatrixAt(i, basis);

        const stride = Math.sin(time * 4.5 + qa.phase) * 0.42;
        qRoll.setFromAxisAngle(axisX, stride);
        mWing.makeRotationFromQuaternion(qRoll);
        mWing.setPosition(0, qScale * 0.72, qScale * 0.52);
        mWing.premultiply(basis);
        qFrontInst.setMatrixAt(i, mWing);

        qRoll.setFromAxisAngle(axisX, -stride);
        mWing.makeRotationFromQuaternion(qRoll);
        mWing.setPosition(0, qScale * 0.72, -qScale * 0.56);
        mWing.premultiply(basis);
        qBackInst.setMatrixAt(i, mWing);
      }
      qBodyInst.instanceMatrix.needsUpdate = true;
      qFrontInst.instanceMatrix.needsUpdate = true;
      qBackInst.instanceMatrix.needsUpdate = true;
      quadBodyMat.emissiveIntensity = THREE.MathUtils.lerp(0.0, 0.95, nightT);

      // 5. Enjambre de Medusas aéreas flotando en bosques y Árbol de las Almas (orientación única compartida campana+tentáculos)
      for (let i = 0; i < jellyCount; i++) {
        const j = jellySeeds[i];
        const bob = Math.sin(time * 1.15 + j.phase) * 0.0045 * S;
        const sway1 = Math.cos(time * 0.45 + j.phase) * (0.004 / 3.2) * S;
        const sway2 = Math.sin(time * 0.35 + j.phase) * (0.004 / 3.2) * S;
        normal
          .copy(j.frame.normalDir)
          .addScaledVector(j.frame.e1, sway1)
          .addScaledVector(j.frame.e2, sway2)
          .normalize();
        pos.copy(normal).multiplyScalar(j.alt + bob);

        const sSin = Math.sin(time * 2.8 + j.phase);
        const pulse = 1.0 + sSin * 0.16;
        qRoll.setFromUnitVectors(upY, normal);
        vScale.set(j.scale * pulse, j.scale / Math.sqrt(pulse), j.scale * pulse);
        basis.compose(pos, qRoll, vScale);
        jBellInst.setMatrixAt(i, basis);

        vScale.set(j.scale, j.scale * (1.0 + sSin * 0.08), j.scale);
        basis.compose(pos, qRoll, vScale);
        jTentInst.setMatrixAt(i, basis);
      }
      jBellInst.instanceMatrix.needsUpdate = true;
      jTentInst.instanceMatrix.needsUpdate = true;
      jellyBellMat.opacity = THREE.MathUtils.lerp(0.32, 0.82, nightT);
      jellyBellMat.emissiveIntensity = THREE.MathUtils.lerp(0.08, 2.35, nightT);
      jellyTentMat.opacity = THREE.MathUtils.lerp(0.24, 0.65, nightT);
      jellyTentMat.color.setRGB(
        THREE.MathUtils.lerp(0.85, 1.4, nightT),
        THREE.MathUtils.lerp(0.88, 0.85, nightT),
        THREE.MathUtils.lerp(0.96, 2.2, nightT)
      );

      // 6. Fauna submarina de los arrecifes Metkayina (5 Tulkun, 24 Ilu, 220 peces coralinos)
      const evalSwimPos = (frame, orbRad, phi0, omega, depthRatio, minClear, waterCeil, tEval, outPos, outNorm) => {
        const ang = phi0 + omega * tEval;
        outNorm
          .copy(frame.normalDir)
          .addScaledVector(frame.e1, Math.cos(ang) * orbRad)
          .addScaledVector(frame.e2, Math.sin(ang) * orbRad)
          .normalize();
        const fElev = samplePandoraTerrainOffset(outNorm.x, outNorm.y, outNorm.z, 0, samplerCtx);
        const safeBot = Math.min(waterCeil - 0.004, fElev + minClear);
        const swimElev = THREE.MathUtils.lerp(safeBot, waterCeil, depthRatio);
        outPos.copy(outNorm).multiplyScalar(R + swimElev);
      };

      // 6A. 5 Tulkun majestuosos
      for (let i = 0; i < tulkunCount; i++) {
        const tk = tulkunAgents[i];
        evalSwimPos(tk.frame, tk.orbitRad, tk.phi0, tk.omega, tk.depthRatio, 0.015, -0.016, time, pos, normal);
        evalSwimPos(tk.frame, tk.orbitRad, tk.phi0, tk.omega, tk.depthRatio, 0.015, -0.016, time + 0.14, nextPos, aheadSwimNorm);

        forward.copy(nextPos).sub(pos);
        if (forward.lengthSq() < 1e-12) forward.set(1, 0, 0);
        forward.normalize();
        right.crossVectors(normal, forward).normalize();
        forward.crossVectors(right, normal).normalize();

        const pitchSway = Math.sin(time * 1.15 + tk.phase) * 0.06;
        qRoll.setFromAxisAngle(axisX, pitchSway);
        basis.makeBasis(right, normal, forward);
        basis.setPosition(pos);
        vScale.setScalar(tk.scale);
        basis.scale(vScale);
        mWing.makeRotationFromQuaternion(qRoll);
        basis.multiply(mWing);
        tBodyInst.setMatrixAt(i, basis);
        tGlowInst.setMatrixAt(i, basis);
      }
      tBodyInst.instanceMatrix.needsUpdate = true;
      tGlowInst.instanceMatrix.needsUpdate = true;
      tulkGlowMat.emissiveIntensity = THREE.MathUtils.lerp(0.06, 1.85, nightT);

      // 6B. 24 Ilu nadando en ocho sinuoso
      for (let i = 0; i < iluCount; i++) {
        const il = iluAgents[i];
        const dr = 0.55 + Math.sin(time * 0.75 + il.phase) * 0.25;
        evalSwimPos(il.frame, il.orbitRad, il.phi0, il.omega, dr, 0.008, -0.010, time, pos, normal);
        evalSwimPos(il.frame, il.orbitRad, il.phi0, il.omega, dr, 0.008, -0.010, time + 0.07, nextPos, aheadSwimNorm);

        forward.copy(nextPos).sub(pos);
        if (forward.lengthSq() < 1e-12) forward.set(1, 0, 0);
        forward.normalize();
        right.crossVectors(normal, forward).normalize();
        forward.crossVectors(right, normal).normalize();

        basis.makeBasis(right, normal, forward);
        basis.setPosition(pos);
        vScale.setScalar(il.scale);
        basis.scale(vScale);
        iluBodyInst.setMatrixAt(i, basis);

        const flipStroke = Math.sin(time * 5.4 + il.phase) * 0.42;
        qRoll.setFromAxisAngle(axisZ, flipStroke);
        mWing.makeRotationFromQuaternion(qRoll);
        mWing.premultiply(basis);
        iluFlipInst.setMatrixAt(i, mWing);
      }
      iluBodyInst.instanceMatrix.needsUpdate = true;
      iluFlipInst.instanceMatrix.needsUpdate = true;
      iluBodyMat.emissiveIntensity = THREE.MathUtils.lerp(0.06, 1.35, nightT);
      iluFlipMat.emissiveIntensity = THREE.MathUtils.lerp(0.08, 1.75, nightT);

      // 6C. 450 Peces de arrecife en 9 cardúmenes sincronizados
      for (let sIdx = 0; sIdx < schoolCount; sIdx++) {
        const sc = fishSchools[sIdx];
        const ang = sc.phi0 + sc.omega * time;
        const angNext = sc.phi0 + sc.omega * (time + 0.06);
        sc.centerDir
          .copy(sc.frame.normalDir)
          .addScaledVector(sc.frame.e1, Math.cos(ang) * sc.orbitRad)
          .addScaledVector(sc.frame.e2, Math.sin(ang) * sc.orbitRad)
          .normalize();
        sc.aheadDir
          .copy(sc.frame.normalDir)
          .addScaledVector(sc.frame.e1, Math.cos(angNext) * sc.orbitRad)
          .addScaledVector(sc.frame.e2, Math.sin(angNext) * sc.orbitRad)
          .normalize();

        const fElev = samplePandoraTerrainOffset(sc.centerDir.x, sc.centerDir.y, sc.centerDir.z, 0, samplerCtx);
        const safeBot = Math.min(-0.022, fElev + 0.010);
        const swimE = THREE.MathUtils.lerp(safeBot, -0.018, 0.48 + 0.25 * Math.sin(time * 0.65 + sc.phase));
        sc.centerAlt = R + swimE;

        sc.tangentForward.copy(sc.aheadDir).sub(sc.centerDir);
        if (sc.tangentForward.lengthSq() < 1e-12) sc.tangentForward.set(1, 0, 0);
        sc.tangentForward.normalize();
        sc.tangentRight.crossVectors(sc.centerDir, sc.tangentForward).normalize();
        sc.tangentForward.crossVectors(sc.tangentRight, sc.centerDir).normalize();
      }

      for (let i = 0; i < fishCount; i++) {
        const fa = fishAgents[i];
        const sc = fishSchools[fa.schoolIdx];
        const swirl = fa.localAng + time * 1.15;
        const fBob = Math.sin(time * 3.4 + fa.phase) * 0.0024;
        normal
          .copy(sc.centerDir)
          .addScaledVector(sc.tangentRight, Math.cos(swirl) * fa.localRad)
          .addScaledVector(sc.tangentForward, Math.sin(swirl) * fa.localRad)
          .normalize();
        const fishR = Math.min(R - 0.008, sc.centerAlt + fa.vertOff + fBob);
        pos.copy(normal).multiplyScalar(fishR);

        // Wiggle lateral sutil del pez dentro del cardumen
        const yawWiggle = Math.sin(time * 8.5 + fa.phase) * 0.14;
        qRoll.setFromAxisAngle(axisX, 0);
        forward.copy(sc.tangentForward).addScaledVector(sc.tangentRight, yawWiggle).normalize();
        right.crossVectors(normal, forward).normalize();
        forward.crossVectors(right, normal).normalize();

        basis.makeBasis(right, normal, forward);
        basis.setPosition(pos);
        vScale.setScalar(fa.scale);
        basis.scale(vScale);
        fishInst.setMatrixAt(i, basis);
      }
      fishInst.instanceMatrix.needsUpdate = true;
      fishMat.emissiveIntensity = THREE.MathUtils.lerp(0.08, 1.65, nightT);
      void driftVec;
    },
  };

  function dummySetBasis(mat, worldP, nrm, sxz, sy) {
    qRoll.setFromUnitVectors(upY, nrm);
    vScale.set(sxz, sy, sxz);
    mat.compose(worldP, qRoll, vScale);
  }
}
