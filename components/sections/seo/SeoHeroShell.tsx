import Aurora from "@/components/shaders/Aurora";
import ColorBends from "@/components/shaders/ColorBends";
import PerformanceHeroVisual from "@/components/sections/performance/PerformanceHeroVisual";
import WorldMap from "@/components/sections/seo/WorldMap";
import type { ReactNode } from "react";

type SeoHeroShellProps = {
  eyebrow?: string;
  breadcrumb?: string;
  title: ReactNode;
  description: string;
  primaryCta: string;
  primaryHref?: string;
  showWhatsApp?: boolean;
  variant?: "map" | "performance" | "home";
  children?: ReactNode;
};

export default function SeoHeroShell({
  eyebrow,
  breadcrumb,
  title,
  description,
  primaryCta,
  primaryHref = "#cta",
  showWhatsApp = true,
  variant = "map",
  children,
}: SeoHeroShellProps) {
  return (
    <section
      className={`section seo-hero ${variant === "performance" ? "performance-hero" : ""} ${variant === "home" ? "home-style-hero" : ""}`}
      id="seo-hero"
    >
      {variant === "home" ? <ColorBends /> : <Aurora />}
      {variant === "map" ? (
        <div className="seo-hero-map" aria-hidden="true">
          <WorldMap lineColor="#9D7BFF" />
        </div>
      ) : variant === "performance" ? (
        <PerformanceHeroVisual />
      ) : null}
      <div className="container">
        <div className="seo-hero-copy" data-reveal>
          {breadcrumb && <div className="hero-breadcrumb">{breadcrumb}</div>}
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <div className="cta-row">
            <a href={primaryHref} className="shiny-cta">
              <span>{primaryCta}</span>
            </a>
            {showWhatsApp && (
              <a
                href="https://wa.me/85297632957"
                className="wa-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <span className="wa-btn-decor" aria-hidden="true"></span>
                <span className="wa-btn-content">
                  <span className="wa-btn__icon">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/whatsapp.svg" alt="" width={24} height={24} />
                  </span>
                  <span className="wa-btn__text">WhatsApp Us</span>
                </span>
              </a>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
