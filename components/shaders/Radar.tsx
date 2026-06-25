"use client";

import { useEffect, useRef } from "react";

/**
 * Services section radar background — raw WebGL shader.
 * Ported verbatim from the original single-file site (same uniform values).
 */
export default function Radar() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const c = document.createElement("canvas");
    host.appendChild(c);
    const opts = { alpha: true, premultipliedAlpha: false, antialias: true } as WebGLContextAttributes;
    const gl = (c.getContext("webgl", opts) || c.getContext("experimental-webgl", opts)) as WebGLRenderingContext | null;
    if (!gl) return;
    gl.clearColor(0, 0, 0, 0);

    const vsrc = `attribute vec2 position;void main(){gl_Position=vec4(position,0.0,1.0);}`;
    const fsrc = `precision highp float;
uniform float uTime;uniform vec3 uResolution;uniform float uSpeed;uniform float uScale;
uniform float uRingCount;uniform float uSpokeCount;uniform float uRingThickness;uniform float uSpokeThickness;
uniform float uSweepSpeed;uniform float uSweepWidth;uniform float uSweepLobes;uniform vec3 uColor;uniform vec3 uBgColor;
uniform float uFalloff;uniform float uBrightness;uniform vec2 uMouse;uniform float uMouseInfluence;uniform bool uEnableMouse;
#define TAU 6.28318530718
void main(){
  vec2 st=gl_FragCoord.xy/uResolution.xy;
  st=st*2.0-1.0;
  st.x*=uResolution.x/uResolution.y;
  if(uEnableMouse){vec2 mShift=(uMouse*2.0-1.0);mShift.x*=uResolution.x/uResolution.y;st-=mShift*uMouseInfluence;}
  st*=uScale;
  float dist=length(st);float theta=atan(st.y,st.x);float t=uTime*uSpeed;
  float ringPhase=dist*uRingCount-t;float ringDist=abs(fract(ringPhase)-0.5);float ringGlow=1.0-smoothstep(0.0,uRingThickness,ringDist);
  float spokeAngle=abs(fract(theta*uSpokeCount/TAU+0.5)-0.5)*TAU/uSpokeCount;float arcDist=spokeAngle*dist;float spokeGlow=(1.0-smoothstep(0.0,uSpokeThickness,arcDist))*smoothstep(0.0,0.1,dist);
  float sweepPhase=t*uSweepSpeed;float sweepBeam=pow(max(0.5*sin(uSweepLobes*theta+sweepPhase)+0.5,0.0),uSweepWidth);
  float fade=smoothstep(1.05,0.85,dist)*pow(max(1.0-dist,0.0),uFalloff);
  float intensity=max((ringGlow+spokeGlow+sweepBeam)*fade*uBrightness,0.0);
  vec3 col=uColor*intensity+uBgColor;
  float alpha=clamp(length(col),0.0,1.0);
  gl_FragColor=vec4(col,alpha);
}`;

    function sh(t: number, s: string) {
      const o = gl!.createShader(t)!;
      gl!.shaderSource(o, s);
      gl!.compileShader(o);
      if (!gl!.getShaderParameter(o, gl!.COMPILE_STATUS)) console.warn(gl!.getShaderInfoLog(o));
      return o;
    }
    const prog = gl.createProgram()!;
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, vsrc));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fsrc));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const tri = new Float32Array([-1, -1, 3, -1, -1, 3]);
    const b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, tri, gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const U = (n: string) => gl.getUniformLocation(prog, n);
    const u = {
      time: U("uTime"), res: U("uResolution"), speed: U("uSpeed"), scale: U("uScale"), ring: U("uRingCount"), spoke: U("uSpokeCount"),
      rth: U("uRingThickness"), sth: U("uSpokeThickness"), swsp: U("uSweepSpeed"), sww: U("uSweepWidth"), swl: U("uSweepLobes"),
      col: U("uColor"), bg: U("uBgColor"), fall: U("uFalloff"), bri: U("uBrightness"), mouse: U("uMouse"), mi: U("uMouseInfluence"), em: U("uEnableMouse"),
    };
    gl.uniform1f(u.speed, 1.0); gl.uniform1f(u.scale, 0.5); gl.uniform1f(u.ring, 10.0); gl.uniform1f(u.spoke, 4.0);
    gl.uniform1f(u.rth, 0.05); gl.uniform1f(u.sth, 0.01); gl.uniform1f(u.swsp, 1.0); gl.uniform1f(u.sww, 2.0); gl.uniform1f(u.swl, 1.0);
    gl.uniform3f(u.col, 0x8c / 255, 0x2c / 255, 0xf6 / 255); gl.uniform3f(u.bg, 0, 0, 0); gl.uniform1f(u.fall, 2.0); gl.uniform1f(u.bri, 1.0);
    gl.uniform1f(u.mi, 0.1); gl.uniform1i(u.em, 1);

    let mx = 0.5, my = 0.5, tmx = 0.5, tmy = 0.5;
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = host!.clientWidth || 1, h = host!.clientHeight || 1;
      c.width = Math.round(w * dpr); c.height = Math.round(h * dpr); c.style.width = "100%"; c.style.height = "100%";
      gl!.viewport(0, 0, c.width, c.height); gl!.uniform3f(u.res, c.width, c.height, c.width / c.height);
    }
    resize();
    const ro = "ResizeObserver" in window ? new ResizeObserver(resize) : null;
    if (ro) ro.observe(host); else window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => { const r = c.getBoundingClientRect(); tmx = (e.clientX - r.left) / r.width; tmy = 1.0 - (e.clientY - r.top) / r.height; };
    const onLeave = () => { tmx = 0.5; tmy = 0.5; };
    host.addEventListener("mousemove", onMove);
    host.addEventListener("mouseleave", onLeave);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const draw = () => { gl!.clear(gl!.COLOR_BUFFER_BIT); gl!.drawArrays(gl!.TRIANGLES, 0, 3); };
    let raf = 0;
    function frame(now: number) {
      gl!.uniform1f(u.time, now * 0.001); mx += 0.05 * (tmx - mx); my += 0.05 * (tmy - my);
      gl!.uniform2f(u.mouse, mx, my); draw(); raf = requestAnimationFrame(frame);
    }
    if (reduce) { gl.uniform1f(u.time, 2.0); gl.uniform2f(u.mouse, 0.5, 0.5); draw(); }
    else raf = requestAnimationFrame(frame);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (ro) ro.disconnect(); else window.removeEventListener("resize", resize);
      host.removeEventListener("mousemove", onMove);
      host.removeEventListener("mouseleave", onLeave);
      try {
        gl.getExtension("WEBGL_lose_context")?.loseContext();
        if (c.parentNode) c.parentNode.removeChild(c);
      } catch {}
    };
  }, []);

  return <div className="radar-bg" ref={hostRef} />;
}
