import Aurora from "@/components/shaders/Aurora";
import WorldMap from "@/components/sections/seo/WorldMap";
import type { ReactNode } from "react";

type SeoHeroShellProps = {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  primaryCta: string;
  primaryHref?: string;
  showWhatsApp?: boolean;
  children?: ReactNode;
};

export default function SeoHeroShell({
  eyebrow,
  title,
  description,
  primaryCta,
  primaryHref = "#cta",
  showWhatsApp = true,
  children,
}: SeoHeroShellProps) {
  return (
    <section className="section seo-hero" id="seo-hero">
      <Aurora />
      <div className="seo-hero-map" aria-hidden="true">
        <WorldMap lineColor="#9D7BFF" />
      </div>
      <div className="container">
        <div className="seo-hero-copy" data-reveal>
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
