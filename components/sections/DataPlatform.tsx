export default function DataPlatform() {
  return (
      <section className="section platform" id="platform">
        <div className="orb orb-2 floaty"></div>
        <div className="orb orb-3"></div>
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Built on a 13M-profile data platform</h2>
            <p>Not a buzzword — a first-party data layer that turns raw profiles into accountable, full-funnel optimisation.</p>
          </div>

          <div className="flow" id="flow">
            <div className="glow-card" data-reveal><div className="num">01</div><h3>Data platform</h3><p>13M+ first-party profiles, privacy-compliant.</p><div className="fig">13.2M<span className="fig-u">Base</span></div></div>
            <div className="glow-card" data-reveal><div className="num">02</div><h3>Audience signal</h3><p>Lookalikes & intent enrichment per channel.</p><div className="fig">+45%<span className="fig-u">Net</span></div></div>
            <div className="glow-card" data-reveal><div className="num">03</div><h3>Cross-channel attribution</h3><p>One model across search, social, video, Baidu.</p><div className="fig">1<span className="fig-u">model</span></div></div>
            <div className="glow-card" data-reveal><div className="num">04</div><h3>Full-funnel optimisation</h3><p>Budget reallocated to real return, weekly.</p><div className="fig">4.2x<span className="fig-u">ROAS</span></div></div>
          </div>
        </div>
      </section>
  );
}
