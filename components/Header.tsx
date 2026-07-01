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
        if (!matchMedia("(max-width:820px)").matches) {
          open(true);
          return;
        }
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
      const closeMobileNav = () => {
        mob.style.display = "none";
        burger.setAttribute("aria-expanded", "false");
        document.body.classList.remove("mobile-nav-open");
        mob.querySelectorAll("details[open]").forEach((detail) => {
          detail.removeAttribute("open");
        });
      };
      const onBurger = () => {
        const v = mob.style.display !== "block";
        mob.style.display = v ? "block" : "none";
        burger.setAttribute("aria-expanded", String(v));
        document.body.classList.toggle("mobile-nav-open", v);
      };
      burger.addEventListener("click", onBurger);
      cleanups.push(() => burger.removeEventListener("click", onBurger));
      const mobileQuery = window.matchMedia("(max-width:820px)");
      const onBreakpointChange = (event: MediaQueryListEvent) => {
        if (!event.matches) closeMobileNav();
      };
      if (typeof mobileQuery.addEventListener === "function") {
        mobileQuery.addEventListener("change", onBreakpointChange);
        cleanups.push(() => mobileQuery.removeEventListener("change", onBreakpointChange));
      } else {
        mobileQuery.addListener(onBreakpointChange);
        cleanups.push(() => mobileQuery.removeListener(onBreakpointChange));
      }
      const linkHandlers: Array<[HTMLAnchorElement, () => void]> = [];
      mob.querySelectorAll("a").forEach((a) => {
        const h = closeMobileNav;
        a.addEventListener("click", h);
        linkHandlers.push([a, h]);
      });
      cleanups.push(() => {
        closeMobileNav();
        linkHandlers.forEach(([a, h]) => a.removeEventListener("click", h));
      });
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
                    <div className="d">Organic growth · EN + HK Chinese</div>
                  </div>
                  <span className="ar">→</span>
                </Link>
                <Link className="feat" href="/services/ai-seo/">
                  <div>
                    <div className="t">
                      AI SEO <span className="badge">2026</span>
                    </div>
                    <div className="d">ChatGPT · Gemini · Perplexity · AI Mode</div>
                  </div>
                  <span className="ar">→</span>
                </Link>
              </div>
              <div className="menu-grid">
                <Link className="menu-item" href="/services/seo/local-seo/">
                  <div className="t">Local SEO</div>
                  <div className="d">Google Business · Maps · HK local intent</div>
                </Link>
                <Link className="menu-item" href="/services/ai-seo/geo/">
                  <div className="t">Generative Engine Optimisation</div>
                  <div className="d">Citation measurement · AI visibility audit</div>
                </Link>
                <Link className="menu-item" href="/services/seo/ecommerce-seo/">
                  <div className="t">Ecommerce SEO</div>
                  <div className="d">Shopify · SHOPLINE · Baidu · XHS</div>
                </Link>
                <Link className="menu-item" href="/services/ai-seo/ai-overview/">
                  <div className="t">AI Overview Optimisation</div>
                  <div className="d">Google AI Overview · schema · snippets</div>
                </Link>
                <Link className="menu-item" href="/services/seo/technical-seo/">
                  <div className="t">Technical SEO</div>
                  <div className="d">Audits · schema · Core Web Vitals · hreflang</div>
                </Link>
                <Link className="menu-item" href="/services/content-marketing/">
                  <div className="t">Content Marketing</div>
                  <div className="d">AI content ops · bilingual production</div>
                </Link>
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
                <Link className="feat" href="/services/performance-marketing/">
                  <div>
                    <div className="t">Performance Marketing</div>
                    <div className="d">Full-funnel toolkit — demand gen, lead gen &amp; CRO built in</div>
                  </div>
                  <span className="ar">→</span>
                </Link>
              </div>
              <div className="menu-grid">
                <Link className="menu-item" href="/services/sem/">
                  <div className="t">SEM</div>
                  <div className="d">Google · Bing · Baidu · PMax · Shopping · Conquesting</div>
                </Link>
                <Link className="menu-item" href="/services/video-performance/">
                  <div className="t">Video Performance</div>
                  <div className="d">YouTube · Reels · Shorts · TikTok</div>
                </Link>
                <Link className="menu-item" href="/services/paid-social/">
                  <div className="t">Paid Social</div>
                  <div className="d">Meta · LinkedIn · TikTok · X · XHS · LINE</div>
                </Link>
                <Link className="menu-item" href="/services/analytics-attribution/">
                  <div className="t">Analytics &amp; Attribution</div>
                  <div className="d">GA4 · CAPI · Server-side GTM · MMM · ROAS</div>
                </Link>
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
              <Link href="/blog/">All Articles</Link>
              <Link href="/blog/category/performance-marketing/">Performance Marketing</Link>
              <Link href="/blog/category/ai-marketing/">AI Marketing</Link>
              <Link href="/blog/category/seo/">SEO</Link>
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
          <summary>Services</summary>
          <div className="m-sub">
            <details className="m-nested">
              <summary>SEO</summary>
              <div className="m-sub">
                <details className="m-nested">
                  <summary>SEO</summary>
                  <div className="m-sub">
                    <Link href="/services/seo/" data-view="seo">SEO</Link>
                    <Link href="/services/seo/local-seo/">Local SEO</Link>
                    <Link href="/services/seo/ecommerce-seo/">Ecommerce SEO</Link>
                    <Link href="/services/seo/technical-seo/">Technical SEO</Link>
                    <Link href="/services/content-marketing/">Content Marketing</Link>
                  </div>
                </details>
                <details className="m-nested">
                  <summary>AI SEO</summary>
                  <div className="m-sub">
                    <Link href="/services/ai-seo/">AI SEO</Link>
                    <Link href="/services/ai-seo/geo/">GEO</Link>
                    <Link href="/services/ai-seo/ai-overview/">AI Overview</Link>
                  </div>
                </details>
              </div>
            </details>
            <details className="m-nested">
              <summary>Performance Marketing</summary>
              <div className="m-sub">
                <Link href="/services/performance-marketing/">Performance Marketing</Link>
                <Link href="/services/sem/">SEM</Link>
                <Link href="/services/google-ads/">Google Ads</Link>
                <Link href="/services/google-search-ads/">Google Search Ads</Link>
                <Link href="/services/google-display-ads/">Google Display Ads</Link>
                <Link href="/services/google-performance-max/">Google Performance Max</Link>
                <details className="m-nested">
                  <summary>Paid Social</summary>
                  <div className="m-sub">
                    <Link href="/services/paid-social/">Paid Social</Link>
                    <Link href="/services/paid-social/linkedin-ads/">LinkedIn Ads</Link>
                  </div>
                </details>
                <Link href="/services/video-performance/">Video Performance</Link>
                <Link href="/services/analytics-attribution/">Analytics &amp; Attribution</Link>
                <Link href="/services/demand-gen/">Demand Gen</Link>
                <Link href="/services/lead-generation/">Lead Generation</Link>
              </div>
            </details>
            <Link href="/services/cro/">CRO</Link>
          </div>
        </details>
        <Link className="m-link" href="/free-seo-audit/">
          Free SEO Audit
        </Link>
        <Link className="m-link" href="/case-studies/">
          Case Studies
        </Link>
        <details className="m-group">
          <summary>Blog</summary>
          <div className="m-sub">
            <Link href="/blog/">Blog</Link>
            <Link href="/blog/category/performance-marketing/">Performance Marketing</Link>
            <Link href="/blog/category/ai-marketing/">AI Marketing</Link>
            <Link href="/blog/category/seo/">SEO</Link>
          </div>
        </details>
        <Link href="/free-seo-audit/" className="shiny-cta m-cta">
          <span>Free Audit</span>
        </Link>
      </div>
    </header>
  );
}
