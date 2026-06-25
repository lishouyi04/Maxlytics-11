"use client";

import { useEffect, useRef } from "react";

/**
 * Hero animated background — raw WebGL "ColorBends" shader.
 * Ported verbatim from the original single-file site (same uniform values),
 * wrapped as a self-contained client component that renders its own host + canvas.
 */
export default function ColorBends() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const canvas = document.createElement("canvas");
    host.appendChild(canvas);
    const opts = { alpha: true, premultipliedAlpha: true, antialias: false, powerPreference: "high-performance" } as WebGLContextAttributes;
    const gl = (canvas.getContext("webgl", opts) || canvas.getContext("experimental-webgl", opts)) as WebGLRenderingContext | null;
    if (!gl) return;

    const vsrc = `attribute vec2 position;attribute vec2 uv;varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position,0.0,1.0);}`;
    const fsrc = `#define MAX_COLORS 8
precision highp float;
uniform vec2 uCanvas; uniform float uTime; uniform float uSpeed; uniform vec2 uRot;
uniform int uColorCount; uniform vec3 uColors[MAX_COLORS]; uniform int uTransparent;
uniform float uScale; uniform float uFrequency; uniform float uWarpStrength;
uniform vec2 uPointer; uniform float uMouseInfluence; uniform float uParallax;
uniform float uNoise; uniform int uIterations; uniform float uIntensity; uniform float uBandWidth;
varying vec2 vUv;
void main(){
  float t=uTime*uSpeed;
  vec2 p=vUv*2.0-1.0;
  p+=uPointer*uParallax*0.1;
  vec2 rp=vec2(p.x*uRot.x-p.y*uRot.y, p.x*uRot.y+p.y*uRot.x);
  vec2 q=vec2(rp.x*(uCanvas.x/uCanvas.y), rp.y);
  q/=max(uScale,0.0001);
  q/=0.5+0.2*dot(q,q);
  q+=0.2*cos(t)-7.56;
  vec2 toward=(uPointer-rp);
  q+=toward*uMouseInfluence*0.2;
  for(int j=0;j<5;j++){ if(j>=uIterations-1) break; vec2 rr=sin(1.5*(q.yx*uFrequency)+2.0*cos(q*uFrequency)); q+=(rr-q)*0.15; }
  vec3 col=vec3(0.0); float a=1.0;
  if(uColorCount>0){
    vec2 s=q; vec3 sumCol=vec3(0.0); float cover=0.0;
    for(int i=0;i<MAX_COLORS;++i){ if(i>=uColorCount) break;
      s-=0.01; vec2 r=sin(1.5*(s.yx*uFrequency)+2.0*cos(s*uFrequency));
      float m0=length(r+sin(5.0*r.y*uFrequency-3.0*t+float(i))/4.0);
      float kBelow=clamp(uWarpStrength,0.0,1.0); float kMix=pow(kBelow,0.3);
      float gain=1.0+max(uWarpStrength-1.0,0.0); vec2 disp=(r-s)*kBelow; vec2 warped=s+disp*gain;
      float m1=length(warped+sin(5.0*warped.y*uFrequency-3.0*t+float(i))/4.0);
      float m=mix(m0,m1,kMix); float w=1.0-exp(-uBandWidth/exp(uBandWidth*m));
      sumCol+=uColors[i]*w; cover=max(cover,w);
    }
    col=clamp(sumCol,0.0,1.0); a=uTransparent>0?cover:1.0;
  } else {
    vec2 s=q;
    for(int k=0;k<3;++k){ s-=0.01; vec2 r=sin(1.5*(s.yx*uFrequency)+2.0*cos(s*uFrequency));
      float m0=length(r+sin(5.0*r.y*uFrequency-3.0*t+float(k))/4.0);
      float kBelow=clamp(uWarpStrength,0.0,1.0); float kMix=pow(kBelow,0.3);
      float gain=1.0+max(uWarpStrength-1.0,0.0); vec2 disp=(r-s)*kBelow; vec2 warped=s+disp*gain;
      float m1=length(warped+sin(5.0*warped.y*uFrequency-3.0*t+float(k))/4.0);
      float m=mix(m0,m1,kMix); col[k]=1.0-exp(-uBandWidth/exp(uBandWidth*m));
    }
    a=uTransparent>0?max(max(col.r,col.g),col.b):1.0;
  }
  col*=uIntensity;
  if(uNoise>0.0001){ float n=fract(sin(dot(gl_FragCoord.xy+vec2(uTime),vec2(12.9898,78.233)))*43758.5453123); col+=(n-0.5)*uNoise; col=clamp(col,0.0,1.0); }
  vec3 rgb=(uTransparent>0)?col*a:col;
  gl_FragColor=vec4(rgb,a);
}`;

    function sh(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) console.warn(gl!.getShaderInfoLog(s));
      return s;
    }
    const prog = gl.createProgram()!;
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, vsrc));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fsrc));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const quad = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
    const b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, "position");
    const uvl = gl.getAttribLocation(prog, "uv");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(uvl);
    gl.vertexAttribPointer(uvl, 2, gl.FLOAT, false, 16, 8);

    const U = (n: string) => gl.getUniformLocation(prog, n);
    const u = {
      canvas: U("uCanvas"), time: U("uTime"), speed: U("uSpeed"), rot: U("uRot"), colorCount: U("uColorCount"),
      colors: U("uColors[0]"), transparent: U("uTransparent"), scale: U("uScale"), freq: U("uFrequency"), warp: U("uWarpStrength"),
      pointer: U("uPointer"), mouse: U("uMouseInfluence"), parallax: U("uParallax"), noise: U("uNoise"), iter: U("uIterations"),
      intensity: U("uIntensity"), band: U("uBandWidth"),
    };
    // defaults from the original component
    gl.uniform1f(u.speed, 0.2); gl.uniform1i(u.colorCount, 0); gl.uniform3fv(u.colors, new Float32Array(24));
    gl.uniform1i(u.transparent, 1); gl.uniform1f(u.scale, 1.0); gl.uniform1f(u.freq, 1.0); gl.uniform1f(u.warp, 1.0);
    gl.uniform1f(u.mouse, 1.0); gl.uniform1f(u.parallax, 0.5); gl.uniform1f(u.noise, 0.15); gl.uniform1i(u.iter, 1);
    gl.uniform1f(u.intensity, 1.5); gl.uniform1f(u.band, 6.0);
    const rad = (90 * Math.PI) / 180; gl.uniform2f(u.rot, Math.cos(rad), Math.sin(rad));

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = host!.clientWidth || 1, h = host!.clientHeight || 1;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      canvas.style.width = "100%"; canvas.style.height = "100%";
      gl!.viewport(0, 0, canvas.width, canvas.height);
      const asp = Math.max(canvas.width / canvas.height, 0.7);
      gl!.uniform2f(u.canvas, asp, 1.0); gl!.uniform1f(u.scale, 1.0);
    }
    resize();
    const ro = "ResizeObserver" in window ? new ResizeObserver(resize) : null;
    if (ro) ro.observe(host); else window.addEventListener("resize", resize);

    const tgt = { x: 0, y: 0 }, cur = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      const r = host!.getBoundingClientRect();
      tgt.x = ((e.clientX - r.left) / (r.width || 1)) * 2 - 1;
      tgt.y = -(((e.clientY - r.top) / (r.height || 1)) * 2 - 1);
    };
    host.addEventListener("pointermove", onMove);

    const draw = () => { gl!.clearColor(0, 0, 0, 0); gl!.clear(gl!.COLOR_BUFFER_BIT); gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4); };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let last = performance.now(), start = last, raf = 0;
    function frame(now: number) {
      const dt = (now - last) / 1000; last = now;
      gl!.uniform1f(u.time, (now - start) / 1000);
      const amt = Math.min(1, dt * 8); cur.x += (tgt.x - cur.x) * amt; cur.y += (tgt.y - cur.y) * amt;
      gl!.uniform2f(u.pointer, cur.x, cur.y);
      draw(); raf = requestAnimationFrame(frame);
    }
    if (reduce) { gl.uniform1f(u.time, 0); gl.uniform2f(u.pointer, 0, 0); draw(); }
    else raf = requestAnimationFrame(frame);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (ro) ro.disconnect(); else window.removeEventListener("resize", resize);
      host.removeEventListener("pointermove", onMove);
      try {
        gl.getExtension("WEBGL_lose_context")?.loseContext();
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      } catch {}
    };
  }, []);

  return <div className="hero-bg" ref={hostRef} />;
}
