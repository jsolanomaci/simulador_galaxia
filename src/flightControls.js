import * as THREE from 'three';

/**
 * Controlador de vuelo espacial con física inercial, inclinación automática en giros (banking),
 * velocidad adaptativa por altitud, Impulso Pulse interplanetario y Piloto Automático con seguimiento móvil.
 */
export class SpaceshipControls {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;

    this.keys = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      up: false,
      down: false,
      rollLeft: false,
      rollRight: false,
      boost: false,
    };

    // Cinemática con inercia exponencial
    this.velocity = new THREE.Vector3();
    this.angularVelocity = new THREE.Vector3(); // x: pitch, y: yaw, z: roll
    this.shipQuaternion = camera.quaternion.clone();

    // Banking (alabeo automático al girar con el ratón)
    this.currentBankAngle = 0.0;
    this.targetBankAngle = 0.0;

    // Multiplicador manual (rueda del ratón), carga Pulse y ratio normalizado de velocidad supersónica [0..1]
    this.speedMultiplier = 1.0;
    this.pulseDriveCharge = 0.0;
    this.speedRatio = 0.0;
    this.lastLayerBaseSpeed = 8.0;
    this.lastLayerBoostMax = 24.0;
    this._shakePhase = 0.0;
    this._qShake = new THREE.Quaternion();
    this._eulerShake = new THREE.Euler();

    // Contexto gravitatorio y de altitud actualizado cada frame por GalaxySceneManager
    this.altitudeContext = {
      surfaceAltitude: 9999,
      planetRadius: 1050,
      atmoTopAlt: 750,
      groundFloorAlt: 0.9,
      minSpeed: 8.0,
      metersPerUnit: 62.0,
      submergedRatio: 0.0,
      planetCenter: new THREE.Vector3(),
      prevPlanetCenter: new THREE.Vector3(),
      hasPlanet: false,
      inGravityWell: false,
      planetDeltaPos: new THREE.Vector3(),
      planetQuatDelta: new THREE.Quaternion(),
    };

    this._tmpToShip = new THREE.Vector3();

    // Control maestro de habilitación (pausado cuando el Mapa Estelar está abierto)
    this.enabled = true;

    // Estado del ratón / PointerLock
    this.isLocked = false;
    this.isDragging = false;
    this.mouseSensitivity = 0.0021;

    // Piloto automático con seguimiento en tiempo real de objetivos en órbita
    this.autopilot = null;

    this.baseFov = camera.fov || 60;

    this._bindEvents();
  }

  /**
   * Activa o pausa los controles manuales de la cabina y libera PointerLock al deshabilitar.
   */
  setEnabled(enabled) {
    this.enabled = Boolean(enabled);
    if (!this.enabled) {
      this.isDragging = false;
      for (const k of Object.keys(this.keys)) {
        this.keys[k] = false;
      }
      if (typeof document !== 'undefined' && document.pointerLockElement === this.domElement && document.exitPointerLock) {
        document.exitPointerLock();
      }
    }
  }

  _bindEvents() {
    window.addEventListener('keydown', (e) => this._onKeyChange(e, true));
    window.addEventListener('keyup', (e) => this._onKeyChange(e, false));

    this.domElement.addEventListener('click', () => {
      if (!this.enabled) return;
      if (!this.isLocked && this.domElement.requestPointerLock) {
        this.domElement.requestPointerLock();
      }
    });

    document.addEventListener('pointerlockchange', () => {
      this.isLocked = document.pointerLockElement === this.domElement;
      const promptEl = document.getElementById('hud-lock-prompt');
      if (promptEl) {
        promptEl.classList.toggle('locked', this.isLocked);
      }
    });

    this.domElement.addEventListener('mousedown', (e) => {
      if (!this.enabled) return;
      if (e.button === 0 && !this.isLocked) {
        this.isDragging = true;
      }
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.enabled) return;
      if (!this.isLocked && !this.isDragging) return;
      if (this.autopilot) return;

      const dx = e.movementX || 0;
      const dy = e.movementY || 0;

      // Acumular guiñada (yaw) y cabeceo (pitch)
      this.angularVelocity.y -= dx * this.mouseSensitivity;
      this.angularVelocity.x -= dy * this.mouseSensitivity;

      // Inclinación automática de cabina (banking) proporcional al giro horizontal del ratón
      const bankImpulse = THREE.MathUtils.clamp(-dx * 0.011, -0.52, 0.52);
      this.targetBankAngle = THREE.MathUtils.clamp(
        this.targetBankAngle + bankImpulse,
        -0.48,
        0.48
      );
    });

    window.addEventListener(
      'wheel',
      (e) => {
        if (!this.enabled) return;
        const delta = -Math.sign(e.deltaY) * 0.2;
        this.speedMultiplier = THREE.MathUtils.clamp(
          Number((this.speedMultiplier + delta).toFixed(1)),
          0.2,
          8.0
        );
      },
      { passive: true }
    );
  }

  _onKeyChange(event, isDown) {
    if (!this.enabled) {
      if (!isDown) {
        // Asegurar liberación de teclas si se sueltan estando pausado
      } else {
        return;
      }
    }
    if (isDown && this.autopilot && ['KeyW', 'KeyS', 'KeyA', 'KeyD'].includes(event.code)) {
      this.autopilot = null;
    }

    switch (event.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.keys.forward = isDown;
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.keys.backward = isDown;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.keys.left = isDown;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.keys.right = isDown;
        break;
      case 'KeyQ':
        this.keys.rollLeft = isDown;
        break;
      case 'KeyE':
        this.keys.rollRight = isDown;
        break;
      case 'Space':
        this.keys.up = isDown;
        break;
      case 'ControlLeft':
      case 'ControlRight':
      case 'KeyC':
        this.keys.down = isDown;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.keys.boost = isDown;
        break;
      default:
        break;
    }
  }

  /**
   * Actualiza los datos de altitud, techo atmosférico, suelo firme y arrastre orbital.
   */
  setAltitudeContext({
    surfaceAltitude,
    planetRadius,
    atmoTopAlt,
    groundFloorAlt,
    minSpeed,
    metersPerUnit,
    submergedRatio,
    planetCenter,
    prevPlanetCenter,
    hasPlanet,
    inGravityWell,
    planetDeltaPos,
    planetQuatDelta,
  }) {
    this.altitudeContext.surfaceAltitude = surfaceAltitude;
    this.altitudeContext.planetRadius = planetRadius || 1050;
    this.altitudeContext.atmoTopAlt = atmoTopAlt || this.altitudeContext.planetRadius * 0.72;
    this.altitudeContext.groundFloorAlt = groundFloorAlt ?? 0.9;
    this.altitudeContext.minSpeed = minSpeed ?? 8.0;
    this.altitudeContext.metersPerUnit = metersPerUnit ?? 62.0;
    this.altitudeContext.submergedRatio = THREE.MathUtils.clamp(submergedRatio ?? 0.0, 0.0, 1.0);
    if (planetCenter) {
      this.altitudeContext.planetCenter.copy(planetCenter);
      this.altitudeContext.prevPlanetCenter.copy(prevPlanetCenter || planetCenter);
      this.altitudeContext.hasPlanet = hasPlanet !== false;
    } else {
      this.altitudeContext.hasPlanet = false;
    }
    this.altitudeContext.inGravityWell = Boolean(inGravityWell);
    if (planetDeltaPos) {
      this.altitudeContext.planetDeltaPos.copy(planetDeltaPos);
    } else {
      this.altitudeContext.planetDeltaPos.set(0, 0, 0);
    }
    if (planetQuatDelta) {
      this.altitudeContext.planetQuatDelta.copy(planetQuatDelta);
    } else {
      this.altitudeContext.planetQuatDelta.identity();
    }
  }

  /**
   * Activa el Piloto Automático con seguimiento dinámico de un objetivo móvil (o trayectoria curva).
   */
  engageAutopilot({
    getTargetPose,
    targetPos,
    lookAtPos,
    duration = 3.6,
    useDirectCurve = false,
    onComplete = null,
  }) {
    this.velocity.set(0, 0, 0);
    this.angularVelocity.set(0, 0, 0);
    this.currentBankAngle = 0.0;
    this.targetBankAngle = 0.0;

    const startPos = this.camera.position.clone();
    const startQuat = this.shipQuaternion.clone();

    const poseProvider =
      getTargetPose ||
      (() => ({
        targetPos: targetPos.clone(),
        lookAtPos: lookAtPos.clone(),
        upVec: new THREE.Vector3(0, 1, 0),
      }));

    this.autopilot = {
      startPos,
      startQuat,
      poseProvider,
      elapsed: 0,
      duration: Math.max(0.5, duration),
      useDirectCurve,
      onComplete,
    };
  }

  /**
   * Coloca instantáneamente la nave en una posición y orientación limpias.
   */
  setPose(position, lookAtTarget, upVector = new THREE.Vector3(0, 1, 0)) {
    this.autopilot = null;
    this.velocity.set(0, 0, 0);
    this.angularVelocity.set(0, 0, 0);
    this.currentBankAngle = 0;
    this.targetBankAngle = 0;
    this.camera.position.copy(position);
    this.camera.up.copy(upVector);
    this.camera.lookAt(lookAtTarget);
    this.shipQuaternion.copy(this.camera.quaternion);
  }

  getCurrentSpeed() {
    return this.velocity.length();
  }

  /**
   * Devuelve el factor de velocidad normalizado [0..1] para FOV dinámico, desenfoque radial y cono de Mach.
   */
  getSpeedRatio() {
    return this.speedRatio;
  }

  /**
   * Devuelve la intensidad actual [0..1] del motor Pulse / hipersalto para las estelas y el HUD.
   */
  getPulseRatio() {
    if (this.autopilot) return 0.92;
    return this.pulseDriveCharge;
  }

  /**
   * Curva de velocidad adaptativa continua en 4 capas reales sobre la escala planetaria 4.8x:
   * 1) Superficie / Rasante (0 - 2.500 m): vuelo preciso entre cañones, copas y agua (minSpeed -> 18 u/s)
   * 2) Troposfera Alta (2.500 - 12.000 m): cruce de nubes y sobrevuelo continental (18 -> 44 u/s)
   * 3) Estratosfera (12.000 - 35.000 m): entrada y dispersión atmosférica (44 -> 105 u/s)
   * 4) Órbita Baja / Exosfera (> 35.000 m): órbita rápida -> vuelo interplanetario Pulse (~440 base, ~3.150 con Shift)
   */
  _computeAdaptiveSpeedLimits(dt) {
    const alt = Math.max(0, this.altitudeContext.surfaceAltitude);
    const groundFloor = Math.max(0, this.altitudeContext.groundFloorAlt || 0);
    const altAboveFloor = Math.max(0, alt - groundFloor);
    const altMeters = altAboveFloor * (this.altitudeContext.metersPerUnit ?? 62.0);
    const atmoTop = Math.max(200, this.altitudeContext.atmoTopAlt);

    const inAtmoRatio = THREE.MathUtils.clamp(alt / atmoTop, 0.0, 1.0);
    const deepSpaceFactor = THREE.MathUtils.smoothstep(alt, atmoTop, atmoTop + 2600.0);

    const minAtmoSpeed = this.altitudeContext.minSpeed ?? 8.0;
    const hydroDrag = THREE.MathUtils.lerp(1.0, 0.48, this.altitudeContext.submergedRatio || 0.0);

    const tSurface = THREE.MathUtils.smoothstep(altMeters, 0.0, 2500.0);
    const tTrop = THREE.MathUtils.smoothstep(altMeters, 2500.0, 12000.0);
    const tStrat = THREE.MathUtils.smoothstep(altMeters, 12000.0, 35000.0);
    const tExo = THREE.MathUtils.smoothstep(altMeters, 35000.0, 62000.0);

    let atmoSpeed = THREE.MathUtils.lerp(minAtmoSpeed, 18.0, tSurface);
    atmoSpeed = THREE.MathUtils.lerp(atmoSpeed, 44.0, tTrop);
    atmoSpeed = THREE.MathUtils.lerp(atmoSpeed, 105.0, tStrat);
    atmoSpeed = THREE.MathUtils.lerp(atmoSpeed, 165.0, tExo);
    atmoSpeed *= hydroDrag;

    const baseSpeed = THREE.MathUtils.lerp(atmoSpeed, 440.0, Math.pow(deepSpaceFactor, 1.08));

    const isThrusting =
      this.keys.forward ||
      this.keys.backward ||
      this.keys.left ||
      this.keys.right ||
      this.keys.up ||
      this.keys.down;

    if (this.keys.boost && isThrusting) {
      const maxPulse = THREE.MathUtils.lerp(
        THREE.MathUtils.lerp(0.24, 0.62, inAtmoRatio),
        1.0,
        deepSpaceFactor
      );
      this.pulseDriveCharge = THREE.MathUtils.lerp(
        this.pulseDriveCharge,
        maxPulse,
        1.0 - Math.exp(-3.4 * dt)
      );
    } else {
      this.pulseDriveCharge = THREE.MathUtils.lerp(
        this.pulseDriveCharge,
        0.0,
        1.0 - Math.exp(-5.5 * dt)
      );
    }

    const boostFraction =
      this.keys.boost && isThrusting
        ? Math.min(1.0, this.pulseDriveCharge / Math.max(0.2, THREE.MathUtils.lerp(0.24, 1.0, deepSpaceFactor)))
        : this.pulseDriveCharge;

    const atmoBoost = THREE.MathUtils.lerp(2.2, 3.2, inAtmoRatio);
    const spaceBoost = 7.2;
    const targetBoostMult = THREE.MathUtils.lerp(atmoBoost, spaceBoost, deepSpaceFactor);
    const boostMult = THREE.MathUtils.lerp(1.0, targetBoostMult, Math.min(1.0, boostFraction));

    this.lastLayerBaseSpeed = baseSpeed * this.speedMultiplier;
    this.lastLayerBoostMax = baseSpeed * this.speedMultiplier * targetBoostMult;

    return baseSpeed * this.speedMultiplier * boostMult;
  }

  update(dt) {
    const safeDt = Math.min(dt, 0.1);

    // 1. Si estamos dentro del pozo gravitatorio co-rotatorio de un planeta (y sin piloto automático),
    // aplicar el movimiento rígido completo: traslación orbital + rotación axial alrededor del centro planetario
    if (!this.autopilot && this.altitudeContext.inGravityWell) {
      const qDelta = this.altitudeContext.planetQuatDelta;
      const rotSq = qDelta.x * qDelta.x + qDelta.y * qDelta.y + qDelta.z * qDelta.z;
      if (rotSq > 1e-14) {
        this._tmpToShip
          .copy(this.camera.position)
          .sub(this.altitudeContext.prevPlanetCenter)
          .applyQuaternion(qDelta);
        this.camera.position.copy(this.altitudeContext.planetCenter).add(this._tmpToShip);
        this.shipQuaternion.premultiply(qDelta).normalize();
        this.velocity.applyQuaternion(qDelta);
        this.camera.quaternion.copy(this.shipQuaternion);
      } else {
        this.camera.position.add(this.altitudeContext.planetDeltaPos);
      }
    }

    // 2. Piloto Automático con seguimiento en tiempo real (lineal o trayectoria curva atmosférica)
    if (this.autopilot) {
      this.autopilot.elapsed += safeDt;
      const t = Math.min(1.0, this.autopilot.elapsed / this.autopilot.duration);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const { targetPos, lookAtPos, upVec, useCurveNow } = this.autopilot.poseProvider(
        ease,
        t,
        this.autopilot.startPos
      );

      const prevPos = this.camera.position.clone();
      if (this.autopilot.useDirectCurve || useCurveNow) {
        this.camera.position.copy(targetPos);
      } else {
        this.camera.position.lerpVectors(this.autopilot.startPos, targetPos, ease);
      }

      const tempCam = this.camera.clone();
      tempCam.position.copy(this.camera.position);
      tempCam.up.copy(upVec || new THREE.Vector3(0, 1, 0));
      tempCam.lookAt(lookAtPos);

      this.shipQuaternion.slerpQuaternions(
        this.autopilot.startQuat,
        tempCam.quaternion,
        this.autopilot.useDirectCurve ? Math.min(1.0, ease * 2.2) : Math.min(1.0, ease * 1.25)
      );
      this.camera.quaternion.copy(this.shipQuaternion);

      if (safeDt > 0) {
        this.velocity.copy(this.camera.position).sub(prevPos).divideScalar(safeDt);
      }

      const fovBoost = this.autopilot.useDirectCurve ? Math.sin(t * Math.PI) * 14.0 : Math.sin(t * Math.PI) * 28.0;
      const warpFov = this.baseFov + fovBoost;
      if (Math.abs(this.camera.fov - warpFov) > 0.03) {
        this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, warpFov, 0.22);
        this.camera.updateProjectionMatrix();
      }
      this.speedRatio = THREE.MathUtils.lerp(
        this.speedRatio,
        this.autopilot.useDirectCurve ? 0.35 * Math.sin(t * Math.PI) : 0.72 * Math.sin(t * Math.PI),
        0.18
      );

      if (t >= 1.0) {
        const doneCb = this.autopilot.onComplete;
        this.autopilot = null;
        // Detener impulso remanente de viaje interplanetario al estacionar en destino final
        if (doneCb) {
          this.velocity.multiplyScalar(0.2);
          doneCb();
        } else {
          this.velocity.set(0, 0, 0);
        }
      }
      return;
    }

    // Pausar rotación/empuje manual cuando el Mapa Estelar está abierto (conservando co-rotación orbital)
    if (!this.enabled) {
      this.angularVelocity.set(0, 0, 0);
      return;
    }

    // 3. Rotación suave con inercia y alabeo automático (banking) al girar con el ratón
    const rollInput = (this.keys.rollLeft ? 1 : 0) - (this.keys.rollRight ? 1 : 0);
    this.angularVelocity.z += rollInput * 1.85 * safeDt;

    if (this.angularVelocity.lengthSq() > 1e-8) {
      const qPitch = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(1, 0, 0),
        this.angularVelocity.x
      );
      const qYaw = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(0, 1, 0),
        this.angularVelocity.y
      );
      const qRoll = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(0, 0, 1),
        this.angularVelocity.z
      );

      this.shipQuaternion.multiply(qYaw);
      this.shipQuaternion.multiply(qPitch);
      this.shipQuaternion.multiply(qRoll);
      this.shipQuaternion.normalize();
    }

    // Amortiguación exponencial de velocidad angular
    const angularDamping = Math.exp(-9.5 * safeDt);
    this.angularVelocity.multiplyScalar(angularDamping);

    // Suavizado del banking automático de cabina y retorno progresivo al centro
    this.targetBankAngle *= Math.exp(-5.2 * safeDt);
    this.currentBankAngle = THREE.MathUtils.lerp(
      this.currentBankAngle,
      this.targetBankAngle,
      1.0 - Math.exp(-8.5 * safeDt)
    );

    const qBank = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(0, 0, 1),
      this.currentBankAngle
    );
    this.camera.quaternion.copy(this.shipQuaternion).multiply(qBank);

    // 4. Empuje lineal con aceleración adaptativa según altitud e inercia exponencial
    const inputDir = new THREE.Vector3(
      (this.keys.right ? 1 : 0) - (this.keys.left ? 1 : 0),
      (this.keys.up ? 1 : 0) - (this.keys.down ? 1 : 0),
      (this.keys.backward ? 1 : 0) - (this.keys.forward ? 1 : 0)
    );

    const maxSpeed = this._computeAdaptiveSpeedLimits(safeDt);

    if (inputDir.lengthSq() > 0) {
      inputDir.normalize();
      inputDir.applyQuaternion(this.shipQuaternion);

      const targetVel = inputDir.multiplyScalar(maxSpeed);
      // Respuesta más ágil a baja altitud, inercia más pesada en impulso interplanetario
      const accelResponse = THREE.MathUtils.lerp(5.8, 3.8, this.pulseDriveCharge);
      this.velocity.lerp(targetVel, 1.0 - Math.exp(-accelResponse * safeDt));
    } else {
      // Damping exponencial suave al soltar los propulsores (mayor viscosidad hidrodinámica bajo el agua)
      const hydroDamping = THREE.MathUtils.lerp(3.4, 6.2, this.altitudeContext.submergedRatio || 0.0);
      this.velocity.multiplyScalar(Math.exp(-hydroDamping * safeDt));
      if (this.velocity.lengthSq() < 1e-4) {
        this.velocity.set(0, 0, 0);
      }
    }

    this.camera.position.addScaledVector(this.velocity, safeDt);

    // 5. Colisión radial firme contra la superficie planetaria (impide atravesar el planeta por debajo)
    if (this.altitudeContext.hasPlanet) {
      const minR = this.altitudeContext.planetRadius + this.altitudeContext.groundFloorAlt;
      const toShip = this._tmpToShip
        .copy(this.camera.position)
        .sub(this.altitudeContext.planetCenter);
      const dist = toShip.length();
      if (dist > 1e-4 && dist < minR) {
        const radialNormal = toShip.divideScalar(dist);
        this.camera.position
          .copy(this.altitudeContext.planetCenter)
          .addScaledVector(radialNormal, minR);
        const inwardVel = this.velocity.dot(radialNormal);
        if (inwardVel < 0) {
          this.velocity.addScaledVector(radialNormal, -inwardVel);
        }
      }
    }

    // 6. Factor normalizado de velocidad, FOV supersónico (60° -> 94°) y micro-vibración transónica
    const rawSpeed = this.velocity.length();
    const denom = Math.max(1e-3, this.lastLayerBoostMax - this.lastLayerBaseSpeed * 0.25);
    const velNorm = THREE.MathUtils.clamp((rawSpeed - this.lastLayerBaseSpeed * 0.25) / denom, 0.0, 1.0);
    const desiredRatio = THREE.MathUtils.clamp(Math.max(velNorm, this.pulseDriveCharge * 0.94), 0.0, 1.0);
    this.speedRatio = THREE.MathUtils.lerp(this.speedRatio, desiredRatio, 1.0 - Math.exp(-8.5 * safeDt));

    const atmoAlt = Math.max(0, this.altitudeContext.surfaceAltitude || 9999);
    const atmoTop = Math.max(200, this.altitudeContext.atmoTopAlt || 750);
    const altFrac = atmoAlt / atmoTop;
    const inAtmoMach = this.altitudeContext.hasPlanet && altFrac < 0.85 && (this.altitudeContext.submergedRatio || 0) < 0.08;
    if (inAtmoMach && this.speedRatio > 0.72) {
      this._shakePhase += safeDt * 58.0;
      const qDyn = THREE.MathUtils.smoothstep(this.speedRatio, 0.72, 1.0) * (1.0 - THREE.MathUtils.clamp(altFrac / 0.85, 0, 1));
      const amp = qDyn * 0.0042;
      this._eulerShake.set(
        Math.sin(this._shakePhase * 1.13) * amp,
        Math.cos(this._shakePhase * 0.89) * amp,
        Math.sin(this._shakePhase * 1.47) * amp * 1.4
      );
      this._qShake.setFromEuler(this._eulerShake);
      this.camera.quaternion.multiply(this._qShake);
    }

    const targetFov = THREE.MathUtils.lerp(this.baseFov, 94.0, Math.pow(this.speedRatio, 1.12));
    if (Math.abs(this.camera.fov - targetFov) > 0.03) {
      this.camera.fov = THREE.MathUtils.lerp(
        this.camera.fov,
        targetFov,
        1.0 - Math.exp(-7.5 * safeDt)
      );
      this.camera.updateProjectionMatrix();
    }
  }
}
