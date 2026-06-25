export default function WhyHome() {
  return (
      <section className="section why" id="why">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Three things HK agencies don't offer</h2>
          </div>
          <div className="why-grid">
            <div className="why-card" data-reveal>
              <div className="why-img"><img  src="/img/img-0ea3ed61dc.webp" alt="AI-native marketing stack" /></div>
              <div className="why-node"><span className="dot"></span></div>
              <h3>AI-native</h3>
              <p>GEO and AI Overview optimisation, AI bidding and AI creative — built in, not bolted on. Most HK agencies still don't touch it.</p>
            </div>
            <div className="why-card" data-reveal>
              <div className="why-img"><img  src="/img/img-8364359986.webp" alt="Cross-border reach across Greater China and SEA" /></div>
              <div className="why-node"><span className="dot"></span></div>
              <h3>Cross-border</h3>
              <p>Hong Kong → Baidu, the Greater Bay Area, Taiwan and SEA. Bilingual, with simplified/traditional nuance handled properly.</p>
            </div>
            <div className="why-card" data-reveal>
              <div className="why-img"><img  src="/img/img-f097047fc1.webp" alt="Privacy-first measurement" /></div>
              <div className="why-node"><span className="dot"></span></div>
              <h3>Privacy-first measurement</h3>
              <p>Cookieless by design — server-side GTM, CAPI and consent mode. PDPO and GDPR compliant, future-proof tracking.</p>
            </div>
          </div>
        </div>
      </section>
  );
}
