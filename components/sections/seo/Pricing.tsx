const TIERS = [
  {
    name: "Growth",
    tagline: "Local Growth",
    price: "HKD 8,500",
    per: "/ mo",
    bestFor: "Best for Local HK SMBs & Startups",
    featured: false,
    cta: "Get started",
    feats: ["Local SEO & GBP setup", "Technical audit & core fixes", "30 keyword rankings tracked"],
  },
  {
    name: "Professional",
    tagline: "Market Leader",
    price: "HKD 18,500",
    per: "/ mo",
    bestFor: "Best for Expanding HK Enterprises",
    featured: true,
    cta: "Get started",
    feats: ["Advanced content hub strategy", "Competitor conquesting playbook", "100 keyword rankings tracked"],
  },
  {
    name: "Enterprise",
    tagline: "Global Cross-Border",
    price: "Custom",
    per: "retainer",
    bestFor: "Best for E-commerce & Enterprise Brands",
    featured: false,
    cta: "Contact sales",
    feats: ["Google + Baidu dual optimisation", "GA4 server-side integration", "Dedicated senior SEO consultant"],
  },
];

function Star() {
  return (
    <svg className="pc-star" viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
      <path fill="currentColor" d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17l-6 3.5 1.5-6.7L2.4 8.8l6.8-.6z" />
    </svg>
  );
}
function Check() {
  return (
    <svg className="pc-check" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SeoPricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Transparent, 3-Tier SEO Pricing</h2>
          <p>Pick a starting point — scope scales with your goals, with no lock-in surprises.</p>
        </div>
        <div className="pricing-grid">
          {TIERS.map((t) => (
            <div className={"pcard" + (t.featured ? " featured" : "")} key={t.name} data-reveal>
              <div className="pcard-head">
                {t.featured && (
                  <span className="pcard-pop">
                    <Star /> Popular
                  </span>
                )}
                <span className="pcard-tier">{t.tagline}</span>
                <div className="pcard-name">{t.name}</div>
                <p className="pcard-info">{t.bestFor}</p>
                <h3 className="pcard-price">
                  <span className="pcard-amt">{t.price}</span>
                  <span className="pcard-per">{t.per}</span>
                </h3>
              </div>
              <div className="pcard-feats">
                {t.feats.map((f) => (
                  <div className="pcard-feat" key={f}>
                    <Check />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="pcard-foot">
                <a href="#cta" className={(t.featured ? "shiny-cta" : "price-btn") + " pcard-btn"}>
                  <span>{t.cta}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
