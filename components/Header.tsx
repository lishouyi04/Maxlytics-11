"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Header() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    /* sticky header */
    const hdr = document.getElementById("hdr");
    const onScroll = () => hdr?.classList.toggle("stuck", window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    /* dropdowns (hover + click) */
    document.querySelectorAll<HTMLElement>(".navitem[data-menu]").forEach((item) => {
      const btn = item.querySelector("button");
      if (!btn) return;
      const open = (v: boolean) => {
        document.querySelectorAll(".navitem.open").forEach((o) => {
          if (o !== item) {
            o.classList.remove("open");
            o.querySelector("button")?.setAttribute("aria-expanded", "false");
          }
        });
        item.classList.toggle("open", v);
        btn.setAttribute("aria-expanded", String(v));
      };
      const onEnter = () => !matchMedia("(max-width:820px)").matches && open(true);
      const onLeave = () => !matchMedia("(max-width:820px)").matches && open(false);
      const onClick = (e: MouseEvent) => {
        e.stopPropagation();
        open(!item.classList.contains("open"));
      };
      item.addEventListener("mouseenter", onEnter);
      item.addEventListener("mouseleave", onLeave);
      btn.addEventListener("click", onClick);
      cleanups.push(() => {
        item.removeEventListener("mouseenter", onEnter);
        item.removeEventListener("mouseleave", onLeave);
        btn.removeEventListener("click", onClick);
      });
    });
    const onDocClick = () =>
      document.querySelectorAll(".navitem.open").forEach((o) => {
        o.classList.remove("open");
        o.querySelector("button")?.setAttribute("aria-expanded", "false");
      });
    document.addEventListener("click", onDocClick);
    cleanups.push(() => document.removeEventListener("click", onDocClick));

    /* mobile nav */
    const burger = document.getElementById("burger");
    const mob = document.getElementById("mobileNav");
    if (burger && mob) {
      const onBurger = () => {
        const v = mob.style.display !== "block";
        mob.style.display = v ? "block" : "none";
        burger.setAttribute("aria-expanded", String(v));
      };
      burger.addEventListener("click", onBurger);
      cleanups.push(() => burger.removeEventListener("click", onBurger));
      const linkHandlers: Array<[HTMLAnchorElement, () => void]> = [];
      mob.querySelectorAll("a").forEach((a) => {
        const h = () => {
          mob.style.display = "none";
          burger.setAttribute("aria-expanded", "false");
        };
        a.addEventListener("click", h);
        linkHandlers.push([a, h]);
      });
      cleanups.push(() => linkHandlers.forEach(([a, h]) => a.removeEventListener("click", h)));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <header id="hdr">
      <div className="container nav">
        <Link href="/" className="logo" data-view="home" aria-label="Maxlytics home">
          <span className="img" role="img" aria-label="Maxlytics"></span>
        </Link>
        <nav className="navlinks" aria-label="Primary">
          <div className="navitem" data-menu>
            <button aria-haspopup="true" aria-expanded="false">
              SEO <span className="caret"></span>
            </button>
            <div className="menu menu-wide" role="menu">
              <div className="menu-label">SEO</div>
              <div className="feat-row">
                <Link className="feat" href="/services/seo" data-view="seo">
                  <div>
                    <div className="t">SEO</div>
                    <div className="d">Organic growth · EN + zh-HK</div>
                  </div>
                  <span className="ar">→</span>
                </Link>
                <a className="feat" href="#">
                  <div>
                    <div className="t">
                      AI SEO <span className="badge">2026</span>
                    </div>
                    <div className="d">ChatGPT · Gemini · Perplexity · AI Mode</div>
                  </div>
                  <span className="ar">→</span>
                </a>
              </div>
              <div className="menu-grid">
                <Link className="menu-item" href="/services/seo/local-seo/">
                  <div className="t">Local SEO</div>
                  <div className="d">Google Business · Maps · 18 districts</div>
                </Link>
                <a className="menu-item" href="#">
                  <div className="t">Generative Engine Optimisation</div>
                  <div className="d">Citation measurement · AI visibility audit</div>
                </a>
                <a className="menu-item" href="#">
                  <div className="t">Ecommerce SEO</div>
                  <div className="d">Shopify · SHOPLINE · Baidu · XHS</div>
                </a>
                <a className="menu-item" href="#">
                  <div className="t">AI Overview Optimisation</div>
                  <div className="d">Google AI Overview · schema · snippets</div>
                </a>
                <a className="menu-item" href="#">
                  <div className="t">Technical SEO</div>
                  <div className="d">Audits · schema · Core Web Vitals · hreflang</div>
                </a>
                <a className="menu-item" href="#">
                  <div className="t">Content Marketing</div>
                  <div className="d">AI content ops · bilingual production</div>
                </a>
              </div>
            </div>
          </div>
          <div className="navitem" data-menu>
            <button aria-haspopup="true" aria-expanded="false">
              Performance Marketing <span className="caret"></span>
            </button>
            <div className="menu menu-wide" role="menu">
              <div className="menu-label">Performance Marketing</div>
              <div className="feat-row one">
                <a className="feat" href="#performance">
                  <div>
                    <div className="t">Performance Marketing</div>
                    <div className="d">Full-funnel toolkit — demand gen, lead gen &amp; CRO built in</div>
                  </div>
                  <span className="ar">→</span>
                </a>
              </div>
              <div className="menu-grid">
                <a className="menu-item" href="#">
                  <div className="t">SEM</div>
                  <div className="d">Google · Bing · Baidu · PMax · Shopping · Conquesting</div>
                </a>
                <a className="menu-item" href="#">
                  <div className="t">Video Performance</div>
                  <div className="d">YouTube · Reels · Shorts · TikTok</div>
                </a>
                <a className="menu-item" href="#">
                  <div className="t">Paid Social</div>
                  <div className="d">Meta · LinkedIn · TikTok · X · XHS · LINE</div>
                </a>
                <a className="menu-item" href="#">
                  <div className="t">Analytics &amp; Attribution</div>
                  <div className="d">GA4 · CAPI · Server-side GTM · MMM · ROAS</div>
                </a>
              </div>
            </div>
          </div>
          <div className="navitem">
            <a href="#cases">Case Studies</a>
          </div>
          <div className="navitem" data-menu>
            <button aria-haspopup="true" aria-expanded="false">
              Resources <span className="caret"></span>
            </button>
            <div className="menu menu-narrow" role="menu">
              <a href="#">All Articles</a>
              <a href="#">Performance Marketing</a>
              <a href="#">AI Marketing</a>
              <a href="#">SEO</a>
            </div>
          </div>
          <div className="navitem">
            <a href="#">About</a>
          </div>
        </nav>
        <div className="nav-right">
          <Link href="/free-seo-audit/" className="shiny-cta sm">
            <span>Free Audit</span>
          </Link>
          <button className="burger" id="burger" aria-label="Open menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className="mobile-nav" id="mobileNav">
        <details className="m-group">
          <summary>SEO</summary>
          <div className="m-sub">
            <Link href="/services/seo" data-view="seo">SEO</Link>
            <a href="#">AI SEO</a>
            <Link href="/services/seo/local-seo/">Local SEO</Link>
            <a href="#">Generative Engine Optimisation</a>
            <a href="#">Ecommerce SEO</a>
            <a href="#">AI Overview Optimisation</a>
            <a href="#">Technical SEO</a>
            <a href="#">Content Marketing</a>
          </div>
        </details>
        <details className="m-group">
          <summary>Performance Marketing</summary>
          <div className="m-sub">
            <a href="#performance">Performance Marketing</a>
            <a href="#">SEM</a>
            <a href="#">Video Performance</a>
            <a href="#">Paid Social</a>
            <a href="#">Analytics &amp; Attribution</a>
          </div>
        </details>
        <a className="m-link" href="#cases">
          Case Studies
        </a>
        <details className="m-group">
          <summary>Resources</summary>
          <div className="m-sub">
            <a href="#">All Articles</a>
            <a href="#">Performance Marketing</a>
            <a href="#">AI Marketing</a>
            <a href="#">SEO</a>
          </div>
        </details>
        <a className="m-link" href="#">
          About
        </a>
        <a className="m-link muted" href="#">
          Contact
        </a>
        <Link href="/free-seo-audit/" className="shiny-cta m-cta">
          <span>Free Audit</span>
        </Link>
      </div>
    </header>
  );
}
