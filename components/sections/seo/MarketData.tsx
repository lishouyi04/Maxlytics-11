const BLOCKS = [
  { num: "45%", stmt: "of HK users now prefer starting with AI chat over a traditional search engine." },
  { num: "709K+", stmt: "monthly local active visits on the ChatGPT web platform from Hong Kong." },
  { num: "597K+", stmt: "DeepSeek regional search traffic within the Hong Kong market area." },
];

export default function SeoMarketData() {
  return (
    <section className="section mkt" id="market-data">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Hong Kong Search Landscape (2026 Insights)</h2>
          <p>Why an AI-ready, data-first approach is no longer optional in this market.</p>
        </div>
        <div className="flow mkt-flow">
          {BLOCKS.map((b) => (
            <div className="glow-card mkt" data-reveal key={b.num}>
              <div className="fig">{b.num}</div>
              <p>{b.stmt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
