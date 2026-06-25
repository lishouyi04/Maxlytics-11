const CASES = [
  {
    metric: "300%",
    label: "Healthcare Website Traffic Jump",
    body: "Maxlytics provided in-depth technical support and redefined the web content strategy, achieving immediate indexation and a sustainable organic peak.",
    tag: "Medical & Healthcare",
    img: "/img/img-2f81419ccb.webp",
    alt: "Google Search Console: healthcare site clicks and impressions trending up",
  },
  {
    metric: "No.1 Rank",
    label: "Real Estate Market Conquest",
    body: "Targeted ‘UAE mortgage’ as the core intent keyword. Leveraged PressLogic’s 150M+ monthly view content network to push the client to the absolute top of SERP in less than a month.",
    tag: "Cross-Border Real Estate",
    img: "/img/img-1774998af0.webp",
    alt: "Google search result ranking #1 for a UAE mortgage keyword",
  },
];

export default function SeoCaseStudies() {
  return (
    <section className="section cs" id="case-studies">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Verifiable Rankings. Hard Metrics.</h2>
          <p>No vanity numbers — only outcomes we can show you in Search Console.</p>
        </div>
        <div className="cs-grid">
          {CASES.map((c) => (
            <article className="cs-card" key={c.label} data-reveal>
              <div className="cs-metric">{c.metric}</div>
              <div className="cs-label">{c.label}</div>
              <p className="cs-body">{c.body}</p>
              <span className="cs-tag">{c.tag}</span>
              <div className="cs-shot">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.alt} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
