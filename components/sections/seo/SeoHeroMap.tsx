"use client";

import { useEffect, useRef } from "react";

/**
 * Dotted world-map with an expanding "scan" ripple and a slowly drifting
 * multi-stop gradient. Optimised from the original reference:
 *  - land/ocean membership is computed ONCE per resize (no per-frame getImageData)
 *  - dot positions + distance-to-emitter are precomputed into typed arrays
 *  - dark-theme adapted (transparent bg, additive glow), DPR-aware
 *  - honours prefers-reduced-motion (renders the resting map, no loop)
 */
const GRID = 7;
const DOT_R = 1.05;

const POLYGONS: [number, number][][] = [
  [[0.02, 0.12], [0.12, 0.10], [0.24, 0.14], [0.27, 0.10], [0.30, 0.22], [0.22, 0.38], [0.25, 0.45], [0.17, 0.46], [0.13, 0.36], [0.04, 0.32]],
  [[0.28, 0.05], [0.35, 0.03], [0.37, 0.12], [0.32, 0.14], [0.29, 0.09]],
  [[0.21, 0.46], [0.26, 0.46], [0.32, 0.52], [0.30, 0.62], [0.25, 0.78], [0.22, 0.86], [0.19, 0.68], [0.18, 0.55]],
  [[0.43, 0.38], [0.51, 0.36], [0.56, 0.39], [0.60, 0.46], [0.58, 0.56], [0.51, 0.74], [0.47, 0.73], [0.44, 0.54], [0.40, 0.45]],
  [[0.42, 0.22], [0.53, 0.14], [0.66, 0.13], [0.84, 0.11], [0.94, 0.15], [0.97, 0.25], [0.91, 0.42], [0.83, 0.52], [0.76, 0.49], [0.73, 0.37], [0.61, 0.35], [0.51, 0.33]],
  [[0.78, 0.63], [0.87, 0.65], [0.86, 0.77], [0.77, 0.76], [0.76, 0.67]],
];

const STOPS = [
  { p: 0.0, r: 214, g: 86, b: 32 },
  { p: 0.14, r: 159, g: 122, b: 238 },
  { p: 0.32, r: 69, g: 117, b: 205 },
  { p: 0.5, r: 113, g: 210, b: 240 },
  { p: 0.68, r: 68, g: 180, b: 139 },
  { p: 0.85, r: 244, g: 223, b: 105 },
  { p: 1.0, r: 214, g: 86, b: 32 },
];

export default function SeoHeroMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0;
    let H = 0;
    let dpr = 1;
    // precomputed dots
    let xs = new Float32Array(0);
    let ys = new Float32Array(0);
    let land = new Uint8Array(0);
    let dist = new Float32Array(0);
    let edge = new Float32Array(0);
    let maxRadius = 0;
    let emitterX = 0;
    let emitterY = 0;

    const cos125 = Math.cos((125 * Math.PI) / 180);
    const sin125 = Math.sin((125 * Math.PI) / 180);

    const sample = (x: number, y: number, t0: number) => {
      const proj = x * cos125 + y * sin125;
      const maxProj = W * cos125 + H * sin125 || 1;
      let t = (Math.abs(proj / maxProj) + t0) % 1;
      if (t < 0) t += 1;
      let i = 0;
      for (; i < STOPS.length - 1; i++) if (t >= STOPS[i].p && t <= STOPS[i + 1].p) break;
      const s1 = STOPS[i];
      const s2 = STOPS[i + 1];
      const f = (t - s1.p) / (s2.p - s1.p);
      return {
        r: (s1.r + (s2.r - s1.r) * f) | 0,
        g: (s1.g + (s2.g - s1.g) * f) | 0,
        b: (s1.b + (s2.b - s1.b) * f) | 0,
      };
    };

    const build = () => {
      W = host.clientWidth;
      H = host.clientHeight;
      if (W === 0 || H === 0) return;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      maxRadius = Math.sqrt(W * W + H * H);
      emitterX = W * 0.78;
      emitterY = H * 0.5;

      // "cover" mapping keeps continents undistorted
      const S = Math.max(W, H) * 1.12;
      const offX = (W - S) / 2;
      const offY = (H - S) / 2;

      // rasterise polygons once to test land membership
      const off = document.createElement("canvas");
      off.width = W;
      off.height = H;
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return;
      octx.fillStyle = "#000";
      POLYGONS.forEach((poly) => {
        octx.beginPath();
        poly.forEach((pt, idx) => {
          const px = offX + pt[0] * S;
          const py = offY + pt[1] * S;
          if (idx === 0) octx.moveTo(px, py);
          else octx.lineTo(px, py);
        });
        octx.closePath();
        octx.fill();
      });
      const alpha = octx.getImageData(0, 0, W, H).data;

      const cols = Math.floor(W / GRID) + 1;
      const rows = Math.floor(H / GRID) + 1;
      const n = cols * rows;
      xs = new Float32Array(n);
      ys = new Float32Array(n);
      land = new Uint8Array(n);
      dist = new Float32Array(n);
      edge = new Float32Array(n);
      let k = 0;
      for (let x = 0; x < W; x += GRID) {
        for (let y = 0; y < H; y += GRID) {
          xs[k] = x;
          ys[k] = y;
          const pi = (Math.floor(y) * W + Math.floor(x)) * 4;
          land[k] = alpha[pi + 3] > 0 ? 1 : 0;
          const dx = x - emitterX;
          const dy = y - emitterY;
          dist[k] = Math.sqrt(dx * dx + dy * dy);
          const ex = Math.min(x, W - x) / 60;
          const ey = Math.min(y, H - y) / 60;
          edge[k] = Math.min(1, Math.min(ex, ey));
          k++;
        }
      }
      xs = xs.subarray(0, k);
      ys = ys.subarray(0, k);
      land = land.subarray(0, k);
      dist = dist.subarray(0, k);
      edge = edge.subarray(0, k);
    };

    let scanRadius = 0;
    let state: "expanding" | "resting" | "fading" = reduce ? "resting" : "expanding";
    let restCount = 0;
    let fade = 1;
    let shift = 0;
    let raf = 0;

    const frame = () => {
      ctx.clearRect(0, 0, W, H);

      if (!reduce) {
        if (state === "expanding") {
          scanRadius += 16;
          if (scanRadius > maxRadius) {
            state = "resting";
            restCount = 0;
          }
        } else if (state === "resting") {
          if (++restCount > 180) state = "fading";
        } else {
          fade -= 0.015;
          if (fade <= 0) {
            scanRadius = 0;
            fade = 1;
            state = "expanding";
          }
        }
        shift += 0.001;
      }

      const waveW = 110;
      const n = xs.length;
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < n; i++) {
        const isLand = land[i] === 1;
        let op: number;
        if (!reduce && state === "expanding") {
          const d = dist[i];
          if (d < scanRadius && d > scanRadius - waveW) {
            const f = (d - (scanRadius - waveW)) / waveW;
            op = isLand ? f * 0.95 : f * 0.16;
          } else if (d <= scanRadius - waveW) {
            op = isLand ? 0.82 : 0.07;
          } else {
            op = 0;
          }
        } else {
          op = (isLand ? 0.82 : 0.07) * fade;
        }
        op *= edge[i];
        if (op <= 0.015) continue;
        const c = sample(xs[i], ys[i], shift);
        ctx.beginPath();
        ctx.arc(xs[i], ys[i], DOT_R, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + op + ")";
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";

      if (!reduce) raf = requestAnimationFrame(frame);
    };

    build();
    frame();
    if (reduce) {
      // single static paint already done
    }

    const ro = new ResizeObserver(() => {
      build();
      if (reduce) frame();
    });
    ro.observe(host);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="seo-hero-map" />;
}
