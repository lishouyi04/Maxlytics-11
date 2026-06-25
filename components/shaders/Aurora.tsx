"use client";

import { useEffect, useRef } from "react";

/**
 * SEO hero "Aurora" background — WebGL2, ported verbatim from the original site.
 * Brand color stops (cyan → purple → blue), overall opacity 0.7, IntersectionObserver-gated.
 */
export default function Aurora() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const canvas = document.createElement("canvas");
    host.appendChild(canvas);
    const gl = canvas.getContext("webgl2", { alpha: true, premultipliedAlpha: true, antialias: true });
    if (!gl) return;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    canvas.style.backgroundColor = "transparent";

    const VERT = `#version 300 es
in vec2 position;
void main(){ gl_Position=vec4(position,0.0,1.0); }`;
    const FRAG = `#version 300 es
precision highp float;
uniform float uTime; uniform float uAmplitude; uniform vec3 uColorStops[3];
uniform vec2 uResolution; uniform float uBlend; uniform float uOpacity;
out vec4 fragColor;
vec3 permute(vec3 x){ return mod(((x*34.0)+1.0)*x,289.0); }
float snoise(vec2 v){
  const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i=floor(v+dot(v,C.yy)); vec2 x0=v-i+dot(i,C.xx);
  vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
  vec4 x12=x0.xyxy+C.xxzz; x12.xy-=i1; i=mod(i,289.0);
  vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
  vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
  m=m*m; m=m*m;
  vec3 x=2.0*fract(p*C.www)-1.0; vec3 h=abs(x)-0.5; vec3 ox=floor(x+0.5); vec3 a0=x-ox;
  m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
  vec3 g; g.x=a0.x*x0.x+h.x*x0.y; g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.0*dot(m,g);
}
struct ColorStop{ vec3 color; float position; };
#define COLOR_RAMP(colors,factor,finalColor){ int index=0; for(int i=0;i<2;i++){ ColorStop currentColor=colors[i]; bool isInBetween=currentColor.position<=factor; index=int(mix(float(index),float(i),float(isInBetween))); } ColorStop currentColor=colors[index]; ColorStop nextColor=colors[index+1]; float range=nextColor.position-currentColor.position; float lerpFactor=(factor-currentColor.position)/range; finalColor=mix(currentColor.color,nextColor.color,lerpFactor); }
void main(){
  vec2 uv=gl_FragCoord.xy/uResolution;
  ColorStop colors[3];
  colors[0]=ColorStop(uColorStops[0],0.0);
  colors[1]=ColorStop(uColorStops[1],0.5);
  colors[2]=ColorStop(uColorStops[2],1.0);
  vec3 rampColor; COLOR_RAMP(colors,uv.x,rampColor);
  float height=snoise(vec2(uv.x*2.0+uTime*0.1,uTime*0.25))*0.5*uAmplitude;
  height=exp(height); height=(uv.y*2.0-height+0.2);
  float intensity=0.6*height;
  float midPoint=0.20;
  float auroraAlpha=smoothstep(midPoint-uBlend*0.5,midPoint+uBlend*0.5,intensity);
  vec3 auroraColor=intensity*rampColor;
  fragColor=vec4(auroraColor*auroraAlpha,auroraAlpha)*uOpacity;
}`;

    function sh(t: number, src: string) {
      const s = gl!.createShader(t)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) console.warn(gl!.getShaderInfoLog(s));
      return s;
    }
    const prog = gl.createProgram()!;
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const verts = new Float32Array([-1, -1, 3, -1, -1, 3]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const U = (n: string) => gl.getUniformLocation(prog, n);
    const uTime = U("uTime"), uAmp = U("uAmplitude"), uRes = U("uResolution"), uBlend = U("uBlend"), uOpacity = U("uOpacity"), uStops = U("uColorStops[0]");
    // brand colors: cyan #23E2E0, purple #8C2CF6, blue #1F60DB
    gl.uniform3fv(uStops, new Float32Array([0.137, 0.886, 0.878, 0.549, 0.173, 0.965, 0.122, 0.376, 0.859]));
    gl.uniform1f(uAmp, 1.0); gl.uniform1f(uBlend, 0.5); gl.uniform1f(uOpacity, 0.7);

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = host!.clientWidth || 1, h = host!.clientHeight || 1;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      canvas.style.width = "100%"; canvas.style.height = "100%";
      gl!.viewport(0, 0, canvas.width, canvas.height); gl!.uniform2f(uRes, canvas.width, canvas.height);
    }
    resize();
    const ro = "ResizeObserver" in window ? new ResizeObserver(resize) : null;
    if (ro) ro.observe(host); else window.addEventListener("resize", resize);

    const draw = () => { gl!.clear(gl!.COLOR_BUFFER_BIT); gl!.drawArrays(gl!.TRIANGLES, 0, 3); };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startT = performance.now();
    let raf: number | null = null, playing = false;
    function frame(now: number) { gl!.uniform1f(uTime, (now - startT) * 0.001); draw(); raf = requestAnimationFrame(frame); }
    function play() { if (playing || reduce) return; playing = true; raf = requestAnimationFrame(frame); }
    function stop() { playing = false; if (raf) { cancelAnimationFrame(raf); raf = null; } }

    let iobs: IntersectionObserver | null = null;
    if (reduce) { resize(); gl.uniform1f(uTime, 0.0); draw(); }
    else if ("IntersectionObserver" in window) {
      iobs = new IntersectionObserver((es) => (es[0].isIntersecting ? play() : stop()), { threshold: 0.04 });
      iobs.observe(host);
    } else play();

    return () => {
      stop();
      if (iobs) iobs.disconnect();
      if (ro) ro.disconnect(); else window.removeEventListener("resize", resize);
      try {
        gl.getExtension("WEBGL_lose_context")?.loseContext();
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      } catch {}
    };
  }, []);

  return <div className="seo-rays" id="seoRays" ref={hostRef} aria-hidden="true" />;
}
