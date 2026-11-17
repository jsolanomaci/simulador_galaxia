import * as THREE from 'three';

/**
 * Genera una textura circular suave en memoria para las estrellas y partículas.
 */
function createSoftParticleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)');
  gradient.addColorStop(0.25, 'rgba(240, 248, 255, 0.85)');
  gradient.addColorStop(0.6, 'rgba(160, 210, 255, 0.25)');
  gradient.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * Crea un fondo estelar procedural (`THREE.Points`) con miles de estrellas
 * de distintas magnitudes y clases espectrales.
 */
export function createStarfield(starCount = 8500, radius = 14000) {
  const group = new THREE.Group();
  group.name = 'Procedural_Starfield';

  const positions = new Float32Array(starCount * 3);
  const colors = new Float32Array(starCount * 3);

  const spectralPalette = [
    new THREE.Color(0x9bb8ff), // Azul O/B
    new THREE.Color(0xcad8ff), // Blanco azulado B/A
    new THREE.Color(0xf8f7ff), // Blanco puro A/F
    new THREE.Color(0xfff4ea), // Blanco cálido G
    new THREE.Color(0xffd2a1), // Ámbar K
    new THREE.Color(0xffa86b), // Naranja/Rojo M
  ];

  for (let i = 0; i < starCount; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    let phi = Math.acos(2.0 * v - 1.0);

    if (Math.random() < 0.35) {
      phi = Math.PI * 0.5 + (Math.random() - 0.5) * 0.32;
    }

    const r = radius * (0.55 + 0.45 * Math.random());
    const sinPhi = Math.sin(phi);

    positions[i * 3] = r * sinPhi * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.cos(phi);
    positions[i * 3 + 2] = r * sinPhi * Math.sin(theta);

    const baseColor = spectralPalette[Math.floor(Math.random() * spectralPalette.length)];
    const brightness = 0.45 + 0.55 * Math.pow(Math.random(), 1.6);

    colors[i * 3] = baseColor.r * brightness;
    colors[i * 3 + 1] = baseColor.g * brightness;
    colors[i * 3 + 2] = baseColor.b * brightness;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const sprite = createSoftParticleTexture();

  const radiusRatio = radius / 14000;
  const material = new THREE.PointsMaterial({
    size: 28.0 * radiusRatio,
    map: sprite,
    vertexColors: true,
    transparent: true,
    opacity: 0.92,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });

  const stars = new THREE.Points(geometry, material);
  group.add(stars);

  // Capa secundaria de estrellas brillantes de primera magnitud
  const brightCount = 500;
  const brightPos = new Float32Array(brightCount * 3);
  const brightCol = new Float32Array(brightCount * 3);

  for (let i = 0; i < brightCount; i++) {
    const theta = Math.random() * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * Math.random() - 1.0);
    const r = radius * 0.72;

    brightPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    brightPos[i * 3 + 1] = r * Math.cos(phi);
    brightPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

    const c = spectralPalette[i % spectralPalette.length];
    brightCol[i * 3] = c.r;
    brightCol[i * 3 + 1] = c.g;
    brightCol[i * 3 + 2] = c.b;
  }

  const brightGeo = new THREE.BufferGeometry();
  brightGeo.setAttribute('position', new THREE.BufferAttribute(brightPos, 3));
  brightGeo.setAttribute('color', new THREE.BufferAttribute(brightCol, 3));

  const brightMat = new THREE.PointsMaterial({
    size: 56.0 * radiusRatio,
    map: sprite,
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  group.add(new THREE.Points(brightGeo, brightMat));
  group.renderOrder = -80;
  stars.renderOrder = -80;
  const brightPoints = group.children[1];
  brightPoints.renderOrder = -80;

  group.userData.setStarVisibility = (factor) => {
    const clamped = THREE.MathUtils.clamp(factor, 0.0, 1.0);
    material.opacity = 0.92 * clamped;
    brightMat.opacity = 0.95 * clamped;
    group.visible = clamped > 0.015;
  };

  return group;
}

/**
 * Sistema de partículas de viento / nubes y estelas de velocidad (Impulso Pulse)
 * adherido a la cámara de la nave.
 */
export class CockpitAtmosphereParticles {
  constructor(camera, count = 420) {
    this.camera = camera;
    this.count = count;
    this.intensity = 0;
    this.targetIntensity = 0;

    // 1. Partículas suaves de entrada atmosférica / niebla
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = -Math.random() * 55;
    }

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    this.material = new THREE.PointsMaterial({
      color: new THREE.Color(0xffb86c),
      size: 0.42,
      map: createSoftParticleTexture(),
      transparent: true,
      opacity: 0.0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.points.name = 'Cockpit_Reentry_Particles';
    this.points.frustumCulled = false;
    this.camera.add(this.points);

    // 2. Estelas longitudinales de velocidad (Pulse Drive / Salto Interplanetario)
    this.streakCount = 220;
    this.streakSeeds = [];
    const linePositions = new Float32Array(this.streakCount * 6);

    for (let i = 0; i < this.streakCount; i++) {
      // Cilindro hueco alrededor del eje de visión para no tapar el centro de la retícula
      const angle = Math.random() * Math.PI * 2.0;
      const radius = 3.5 + Math.random() * 22.0;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius * 0.72;
      const z = -8.0 - Math.random() * 95.0;
      const len = 3.5 + Math.random() * 7.5;

      this.streakSeeds.push({ x, y, z, len });

      linePositions[i * 6] = x;
      linePositions[i * 6 + 1] = y;
      linePositions[i * 6 + 2] = z;
      linePositions[i * 6 + 3] = x;
      linePositions[i * 6 + 4] = y;
      linePositions[i * 6 + 5] = z - len;
    }

    this.streakGeometry = new THREE.BufferGeometry();
    this.streakGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    this.streakMaterial = new THREE.LineBasicMaterial({
      color: 0x88e8ff,
      transparent: true,
      opacity: 0.0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.streakLines = new THREE.LineSegments(this.streakGeometry, this.streakMaterial);
    this.streakLines.name = 'Cockpit_Pulse_Speed_Lines';
    this.streakLines.frustumCulled = false;
    this.camera.add(this.streakLines);

    this.pulseFactor = 0.0;
  }

  setAtmosphereStyle(colorHex, targetIntensity) {
    this.material.color.setHex(colorHex);
    this.targetIntensity = THREE.MathUtils.clamp(targetIntensity, 0, 1);
  }

  update(dt, shipSpeed = 10, pulseRatio = 0.0) {
    const safeDt = Math.min(dt, 0.1);

    // Actualizar partículas atmosféricas
    this.intensity = THREE.MathUtils.lerp(
      this.intensity,
      this.targetIntensity,
      Math.min(1, safeDt * 4.5)
    );
    this.material.opacity = this.intensity * 0.68;
    this.points.visible = this.intensity > 0.01;

    if (this.points.visible) {
      const posAttr = this.geometry.attributes.position;
      const array = posAttr.array;
      const streamSpeed = Math.max(24, shipSpeed * 1.4) * safeDt;

      for (let i = 0; i < this.count; i++) {
        let z = array[i * 3 + 2] + streamSpeed;
        if (z > 2.0) {
          z = -52 - Math.random() * 12;
          array[i * 3] = (Math.random() - 0.5) * 28;
          array[i * 3 + 1] = (Math.random() - 0.5) * 18;
        }
        array[i * 3 + 2] = z;
      }
      posAttr.needsUpdate = true;
    }

    // Actualizar estelas de Impulso Pulse
    this.pulseFactor = THREE.MathUtils.lerp(
      this.pulseFactor,
      THREE.MathUtils.clamp(pulseRatio, 0, 1),
      Math.min(1, safeDt * 6.0)
    );
    this.streakMaterial.opacity = this.pulseFactor * 0.78;
    this.streakLines.visible = this.pulseFactor > 0.02;

    if (this.streakLines.visible) {
      const lineAttr = this.streakGeometry.attributes.position;
      const arr = lineAttr.array;
      const streakSpeed = (110.0 + shipSpeed * 0.85) * safeDt;
      const stretch = 1.0 + this.pulseFactor * 3.2;

      for (let i = 0; i < this.streakCount; i++) {
        const s = this.streakSeeds[i];
        s.z += streakSpeed;
        if (s.z > 4.0) {
          s.z = -95.0 - Math.random() * 25.0;
        }
        const tailZ = s.z - s.len * stretch;

        arr[i * 6] = s.x;
        arr[i * 6 + 1] = s.y;
        arr[i * 6 + 2] = s.z;
        arr[i * 6 + 3] = s.x;
        arr[i * 6 + 4] = s.y;
        arr[i * 6 + 5] = tailZ;
      }
      lineAttr.needsUpdate = true;
    }
  }
}
