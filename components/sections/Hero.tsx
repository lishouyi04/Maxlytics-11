import ColorBends from "@/components/shaders/ColorBends";
import LogoMarquee from "@/components/sections/LogoMarquee";
import { CLIENT_LOGOS } from "@/lib/logos";

export default function Hero() {
  return (
      <section className="hero section" id="hero">
        <ColorBends />
        <div className="container">
          <h1 data-reveal>No More Vague Reports. Just <em className="it">Verifiable ROAS</em>.</h1>
          <p className="sub" data-reveal>We leverage 13M+ first-party data points to prove returns on every dollar you spend.</p>
          <div className="hero-cta" data-reveal>
            <a href="#cta" className="shiny-cta"><span>Free Audit</span></a>
            <a href="https://wa.me/85297632957" className="wa-btn" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
              <span className="wa-btn-decor" aria-hidden="true"></span>
              <span className="wa-btn-content">
                <span className="wa-btn__icon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/whatsapp.svg" alt="" width={24} height={24} />
                </span>
                <span className="wa-btn__text">WhatsApp Us</span>
              </span>
            </a>
          </div>

          <div className="trust" data-reveal>
            <LogoMarquee logos={CLIENT_LOGOS} />
            <h2 className="trust-title" data-reveal>Impact you can measure</h2>
            <div className="metrics">
              <div className="metric"><div className="v" data-to="13.2" data-dec="1" data-suf="M+">0</div><div className="l">first-party profiles</div></div>
              <div className="metric"><div className="v" data-pre="HK$" data-to="120" data-suf="M+">0</div><div className="l">ad spend managed</div></div>
              <div className="metric"><div className="v" data-to="4.2" data-dec="1" data-suf="x">0</div><div className="l">avg ROAS lift</div></div>
              <div className="metric"><div className="v" data-to="200" data-suf="+">0</div><div className="l">campaigns shipped</div></div>
            </div>
          </div>
        </div>
      </section>
  );
}
