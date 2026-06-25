"use client";

import { useEffect } from "react";

/**
 * Global client-side behaviours ported from the original site:
 *  - reveal-on-scroll  (adds .in to [data-reveal] as it enters the viewport)
 *  - count-up reels    (animated rolling digits on [data-to])
 *  - data-platform glow spotlight (pointer-tracked CSS vars on #flow)
 */
export default function SiteEffects() {
  useEffect(() => {
    const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* reveal on scroll */
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    /* count-up — rolling number reels */
    function rollNumber(el: HTMLElement) {
      const to = parseFloat(el.dataset.to || "0");
      const dec = +(el.dataset.dec || 0);
      const pre = el.dataset.pre || "";
      const suf = el.dataset.suf || "";
      const full = pre + to.toFixed(dec) + suf;
      if (RM) {
        el.textContent = full;
        return;
      }
      el.textContent = "";
      const reels: { strip: HTMLSpanElement; d: number }[] = [];
      for (const chr of full) {
        if (chr >= "0" && chr <= "9") {
          const reel = document.createElement("span");
          reel.className = "reel";
          const strip = document.createElement("span");
          strip.className = "strip";
          let h = "";
          for (let r = 0; r < 2; r++) for (let n = 0; n <= 9; n++) h += "<span>" + n + "</span>";
          strip.innerHTML = h;
          reel.appendChild(strip);
          el.appendChild(reel);
          reels.push({ strip, d: +chr });
        } else {
          const s = document.createElement("span");
          s.className = "ch";
          s.textContent = chr;
          el.appendChild(s);
        }
      }
      void el.offsetHeight; // force reflow so the transition runs
      reels.forEach((r, i) => {
        r.strip.style.transitionDelay = i * 0.07 + "s";
        r.strip.style.transform = "translateY(-" + (10 + r.d) + "em)";
      });
    }
    const cio = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            rollNumber(e.target as HTMLElement);
            cio.unobserve(e.target);
          }
        }),
      { threshold: 0.35 }
    );
    document.querySelectorAll("[data-to]").forEach((el) => cio.observe(el));

    /* glow cards — pointer-tracked spotlight (every .flow grid) */
    const flows = Array.from(document.querySelectorAll<HTMLElement>(".flow"));
    let onPointer: ((e: PointerEvent) => void) | null = null;
    if (flows.length) {
      for (const f of flows) {
        f.style.setProperty("--x", (window.innerWidth / 2).toFixed(1));
        f.style.setProperty("--y", (window.innerHeight * 0.5).toFixed(1));
      }
      if (!RM) {
        onPointer = (e: PointerEvent) => {
          const x = e.clientX.toFixed(1);
          const y = e.clientY.toFixed(1);
          const xp = (e.clientX / window.innerWidth).toFixed(3);
          const yp = (e.clientY / window.innerHeight).toFixed(3);
          for (const f of flows) {
            f.style.setProperty("--x", x);
            f.style.setProperty("--y", y);
            f.style.setProperty("--xp", xp);
            f.style.setProperty("--yp", yp);
          }
        };
        document.addEventListener("pointermove", onPointer, { passive: true });
      }
    }

    return () => {
      io.disconnect();
      cio.disconnect();
      if (onPointer) document.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return null;
}
