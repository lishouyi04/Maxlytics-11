"use client";

import { useEffect } from "react";

export default function WhatWeOffer() {
  useEffect(() => {
    const acc = document.getElementById("offerAcc");
    if (!acc) return;
    const panels = Array.from(acc.querySelectorAll<HTMLElement>(".acc-panel"));
    const setActive = (i: number) =>
      panels.forEach((p, idx) => {
        const on = idx === i;
        p.classList.toggle("is-active", on);
        p.setAttribute("aria-expanded", on ? "true" : "false");
      });
    const cleanups: Array<() => void> = [];
    panels.forEach((p, idx) => {
      const onEnter = () => { if (window.matchMedia("(min-width:761px)").matches) setActive(idx); };
      const onClick = () => setActive(idx);
      const onKey = (e: KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(idx); } };
      p.addEventListener("mouseenter", onEnter);
      p.addEventListener("click", onClick);
      p.addEventListener("keydown", onKey);
      cleanups.push(() => { p.removeEventListener("mouseenter", onEnter); p.removeEventListener("click", onClick); p.removeEventListener("keydown", onKey); });
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
      <section className="section offer" id="what-we-offer">
        <div className="container">
          <div className="section-head">
            <h2 data-reveal>What We Offer?</h2>
            <p data-reveal>Seven disciplines that compound into durable organic growth — from strategy and engineering to content, authority and measurement.</p>
          </div>
          <div className="offer-acc" id="offerAcc" data-reveal>
            <div className="acc-panel is-active" data-i="0" role="button" tabIndex={0} aria-expanded="true"><span className="acc-photo" aria-hidden="true"></span><span className="acc-bg" aria-hidden="true">01</span><span className="acc-num">01</span><span className="acc-fold"><span className="acc-fold-t">Precision Keywords</span></span><span className="acc-open"><h3 className="acc-t">Precision Keywords</h3><p className="acc-d">We utilize advanced analytics to identify and optimize high-value keywords, ensuring alignment with target audience intent and business objectives.</p></span></div>
            <div className="acc-panel" data-i="1" role="button" tabIndex={0} aria-expanded="false"><span className="acc-photo" aria-hidden="true"></span><span className="acc-bg" aria-hidden="true">02</span><span className="acc-num">02</span><span className="acc-fold"><span className="acc-fold-t">Technical SEO & Performance</span></span><span className="acc-open"><h3 className="acc-t">Technical SEO & Performance</h3><p className="acc-d">Rigorous technical audits and data-driven analysis enable us to optimize website performance for enhanced search engine visibility and user experience.</p></span></div>
            <div className="acc-panel" data-i="2" role="button" tabIndex={0} aria-expanded="false"><span className="acc-photo" aria-hidden="true"></span><span className="acc-bg" aria-hidden="true">03</span><span className="acc-num">03</span><span className="acc-fold"><span className="acc-fold-t">Data-Driven Content</span></span><span className="acc-open"><h3 className="acc-t">Data-Driven Content</h3><p className="acc-d">We develop content strategies based on user behavior and market trends, creating high-quality, engaging content that drives organic traffic.</p></span></div>
            <div className="acc-panel" data-i="3" role="button" tabIndex={0} aria-expanded="false"><span className="acc-photo" aria-hidden="true"></span><span className="acc-bg" aria-hidden="true">04</span><span className="acc-num">04</span><span className="acc-fold"><span className="acc-fold-t">Link Building & Authority</span></span><span className="acc-open"><h3 className="acc-t">Link Building & Authority</h3><p className="acc-d">We cultivate high-authority backlinks and establish your brand as an industry leader through targeted, data-informed link acquisition.</p></span></div>
            <div className="acc-panel" data-i="4" role="button" tabIndex={0} aria-expanded="false"><span className="acc-photo" aria-hidden="true"></span><span className="acc-bg" aria-hidden="true">05</span><span className="acc-num">05</span><span className="acc-fold"><span className="acc-fold-t">Analytics & ROI Reporting</span></span><span className="acc-open"><h3 className="acc-t">Analytics & ROI Reporting</h3><p className="acc-d">We provide comprehensive reporting and actionable insights derived from advanced analytics, ensuring clear visibility into SEO performance and ROI.</p></span></div>
            <div className="acc-panel" data-i="5" role="button" tabIndex={0} aria-expanded="false"><span className="acc-photo" aria-hidden="true"></span><span className="acc-bg" aria-hidden="true">06</span><span className="acc-num">06</span><span className="acc-fold"><span className="acc-fold-t">Local SEO</span></span><span className="acc-open"><h3 className="acc-t">Local SEO</h3><p className="acc-d">We enhance local search visibility through optimized Google My Business profiles and strategic local citation management.</p></span></div>
            <div className="acc-panel" data-i="6" role="button" tabIndex={0} aria-expanded="false"><span className="acc-photo" aria-hidden="true"></span><span className="acc-bg" aria-hidden="true">07</span><span className="acc-num">07</span><span className="acc-fold"><span className="acc-fold-t">SEO & CRO Integration</span></span><span className="acc-open"><h3 className="acc-t">SEO & CRO Integration</h3><p className="acc-d">We combine SEO and CRO strategies to enhance user journeys and maximize conversion rates, driving tangible business results.</p></span></div>
          </div>
        </div>
      </section>
  );
}
