import * as THREE from 'three';

const _vUp = new THREE.Vector3(0, 1, 0);
const _fHoriz = new THREE.Vector3();
const _rHoriz = new THREE.Vector3();
const _delta = new THREE.Vector3();

/**
 * Minimapa / Radar Táctico Circular siempre activo en la esquina superior derecha.
 * Alterna automáticamente entre:
 * - Radar Solar centrado en la nave (Sol, P1..P5 y Crystal Palace) en espacio abierto
 * - Radar Atmosférico Local (horizonte planetario, dirección del Sol e hitos/naciones) dentro de atmósfera
 */
export class TacticalMinimap {
  constructor({ containerEl, canvasEl, scaleEl, sceneManager, onOpenStarMap }) {
    this.containerEl = containerEl;
    this.canvas = canvasEl;
    this.ctx = canvasEl?.getContext?.('2d') || null;
    this.scaleEl = scaleEl;
    this.sceneManager = sceneManager;
    this.onOpenStarMap = onOpenStarMap || (() => {});

    this.size = 170;
    this._bindEvents();
    this._resizeCanvas();
  }

  _bindEvents() {
    if (this.containerEl) {
      this.containerEl.addEventListener('click', (e) => {
        e.stopPropagation();
        this.onOpenStarMap();
      });
    }
  }

  _resizeCanvas() {
    if (!this.canvas || !this.ctx) return;
    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    this.canvas.width = this.size * dpr;
    this.canvas.height = this.size * dpr;
    this.dpr = dpr;
  }

  update(timeSec = 0) {
    if (!this.ctx || !this.sceneManager) return;
    const ctx = this.ctx;
    const S = this.size;
    const R = S * 0.5;
    const dpr = this.dpr || 1;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, S, S);

    const state = this.sceneManager.getStarChartState();
    if (!state) return;

    ctx.save();
    ctx.beginPath();
    ctx.arc(R, R, R - 2, 0, Math.PI * 2);
    ctx.clip();

    // Anillos concéntricos y retícula holográfica
    ctx.strokeStyle = 'rgba(94, 212, 255, 0.16)';
    ctx.lineWidth = 1;
    for (const frac of [0.32, 0.62, 0.90]) {
      ctx.beginPath();
      ctx.arc(R, R, (R - 6) * frac, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.strokeStyle = 'rgba(94, 212, 255, 0.12)';
    ctx.beginPath();
    ctx.moveTo(R, 8);
    ctx.lineTo(R, S - 8);
    ctx.moveTo(8, R);
    ctx.lineTo(S - 8, R);
    ctx.stroke();

    // Barrido de radar sutil
    const sweepAng = (timeSec * 1.35) % (Math.PI * 2);
    const sweepGrad = ctx.createRadialGradient(R, R, 4, R, R, R - 6);
    sweepGrad.addColorStop(0, 'rgba(94, 212, 255, 0.02)');
    sweepGrad.addColorStop(1, 'rgba(94, 212, 255, 0.12)');
    ctx.fillStyle = sweepGrad;
    ctx.beginPath();
    ctx.moveTo(R, R);
    ctx.arc(R, R, R - 6, sweepAng - 0.45, sweepAng);
    ctx.closePath();
    ctx.fill();

    if (state.mode === 'SURFACE' && state.atmosphereLocal) {
      this._drawAtmosphericRadar(ctx, S, R, state);
    } else {
      this._drawSolarRadar(ctx, S, R, state);
    }

    // Triángulo direccional centrado representando nuestra nave (siempre apunta arriba en marco local)
    ctx.fillStyle = state.isUnderwater ? '#38f6d2' : '#ffae42';
    ctx.strokeStyle = '#040a14';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(R, R - 7);
    ctx.lineTo(R + 5.2, R + 5.2);
    ctx.lineTo(R, R + 2.6);
    ctx.lineTo(R - 5.2, R + 5.2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  _drawSolarRadar(ctx, S, R, state) {
    // Orientación horizontal en plano XZ usando rumbo actual de la cámara
    let fx = state.shipForward.x;
    let fz = state.shipForward.z;
    const fLen = Math.hypot(fx, fz);
    if (fLen < 1e-3) {
      fx = 0;
      fz = -1;
    } else {
      fx /= fLen;
      fz /= fLen;
    }
    const rx = -fz;
    const rz = fx;

    const maxPlotR = R - 15;
    // Escala adaptativa según distancia al centro del sistema 4.8x
    const shipRad = Math.hypot(state.shipPos.x, state.shipPos.z);
    const radarRange = Math.max(12000, Math.min(48000, shipRad * 1.45 + 11000));

    if (this.scaleEl) {
      this.scaleEl.textContent = `ÓRBITA · ${Math.round(radarRange / 100) / 10}k`;
    }

    const projectXZ = (wx, wz) => {
      const dx = wx - state.shipPos.x;
      const dz = wz - state.shipPos.z;
      const rightDist = dx * rx + dz * rz;
      const fwdDist = dx * fx + dz * fz;
      const rawR = Math.hypot(rightDist, fwdDist);
      const norm = Math.pow(Math.min(1.0, rawR / radarRange), 0.78);
      const ang = Math.atan2(-fwdDist, rightDist);
      return {
        x: R + Math.cos(ang) * norm * maxPlotR,
        y: R + Math.sin(ang) * norm * maxPlotR,
        clipped: rawR > radarRange,
      };
    };

    // Sol central
    const sunPt = projectXZ(state.sunPos.x, state.sunPos.z);
    ctx.fillStyle = 'rgba(255, 200, 72, 0.35)';
    ctx.beginPath();
    ctx.arc(sunPt.x, sunPt.y, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffdc64';
    ctx.beginPath();
    ctx.arc(sunPt.x, sunPt.y, 4.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(255, 224, 130, 0.9)';
    ctx.font = '600 8px "Cascadia Code", Consolas, monospace';
    ctx.textAlign = 'center';
    ctx.fillText('SOL', sunPt.x, sunPt.y - 7);

    // Crystal Palace
    if (state.crystalPalace) {
      const cpPt = projectXZ(state.crystalPalace.worldPos.x, state.crystalPalace.worldPos.z);
      ctx.strokeStyle = '#ffae42';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(cpPt.x, cpPt.y - 3.5);
      ctx.lineTo(cpPt.x + 3.5, cpPt.y);
      ctx.lineTo(cpPt.x, cpPt.y + 3.5);
      ctx.lineTo(cpPt.x - 3.5, cpPt.y);
      ctx.closePath();
      ctx.stroke();
    }

    // Planetas P1..P5
    for (const p of state.planets) {
      const pt = projectXZ(p.worldPos.x, p.worldPos.z);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, p.landable ? 3.8 : 4.6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(230, 243, 255, 0.9)';
      ctx.font = '700 8px "Cascadia Code", Consolas, monospace';
      ctx.textAlign = 'center';
      ctx.fillText(p.code, pt.x, pt.y - 6);
    }
  }

  _drawAtmosphericRadar(ctx, S, R, state) {
    const atmo = state.atmosphereLocal;
    const radialUp = atmo.radialUp;

    // Proyectar horizonte de la cámara paralelo al suelo local del planeta
    _fHoriz.copy(state.shipForward).addScaledVector(radialUp, -state.shipForward.dot(radialUp));
    if (_fHoriz.lengthSq() < 1e-4) {
      _fHoriz.copy(state.shipRight).cross(radialUp);
    }
    _fHoriz.normalize();
    _rHoriz.crossVectors(_fHoriz, radialUp).normalize();

    const maxPlotR = R - 16;
    const rangeWorld = Math.max(220, atmo.planetKey === 'p2' ? atmo.worldRadius * 0.56 : atmo.worldRadius * 1.08);

    if (this.scaleEl) {
      const tag = atmo.isUnderwater
        ? 'SUBMARINO'
        : atmo.planetKey === 'p1'
        ? { forest: 'BOSQUE', water: 'METKAYINA', ash: 'CENIZA' }[atmo.regionNation] || 'PANDORA'
        : atmo.planetKey === 'p2'
        ? (atmo.regionDistrictShort || atmo.regionDistrictName || 'NIGHT CITY').toUpperCase()
        : atmo.planetKey.toUpperCase();
      this.scaleEl.textContent = `${tag} · ${atmo.solarPhaseName}`;
    }

    // Horizonte planetario y dirección del Sol (para identificar Día / Noche)
    const sunR = _delta.copy(atmo.sunDir).dot(_rHoriz);
    const sunF = _delta.dot(_fHoriz);
    const sunAng = Math.atan2(-sunF, sunR);
    const sx = R + Math.cos(sunAng) * (R - 11);
    const sy = R + Math.sin(sunAng) * (R - 11);

    ctx.fillStyle = '#ffd65a';
    ctx.beginPath();
    ctx.arc(sx, sy, 4.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 214, 90, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(sx, sy, 7, 0, Math.PI * 2);
    ctx.stroke();

    // Hitos y regiones locales
    ctx.font = '600 7.5px "Cascadia Code", Consolas, monospace';
    ctx.textAlign = 'center';
    for (const m of atmo.markers) {
      _delta.copy(m.worldPos).sub(state.shipPos);
      const dr = _delta.dot(_rHoriz);
      const df = _delta.dot(_fHoriz);
      const dist = Math.hypot(dr, df);
      const frac = Math.min(1.0, Math.pow(dist / rangeWorld, 0.72));
      const ang = Math.atan2(-df, dr);
      const px = R + Math.cos(ang) * frac * maxPlotR;
      const py = R + Math.sin(ang) * frac * maxPlotR;

      const farSide = _delta.dot(radialUp) < -atmo.worldRadius * 0.45;
      ctx.globalAlpha = farSide ? 0.45 : 0.95;
      ctx.fillStyle = m.color || '#5ed4ff';
      ctx.beginPath();
      ctx.arc(px, py, farSide ? 2.4 : 3.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#e6f3ff';
      const label = m.shortName.length > 9 ? m.shortName.slice(0, 8) + '.' : m.shortName;
      ctx.fillText(label, px, py - 5);
    }
    ctx.globalAlpha = 1.0;
    void _vUp;
  }
}
