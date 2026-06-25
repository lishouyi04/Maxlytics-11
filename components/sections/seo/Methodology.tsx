const STEPS = [
  { t: "Technical audit & fix", icon: "/icons/method/audit.svg", d: "Scan and eradicate crawl blockages, broken links, and rendering dead-zones." },
  { t: "Architecture restructuring", icon: "/icons/method/architecture.svg", d: "Build a clean directory hierarchy so engines index your money pages in seconds." },
  { t: "Precision content mapping", icon: "/icons/method/content.svg", d: "Intercept transaction-ready search intent instead of generic traffic keywords." },
  { t: "Authority amplification", icon: "/icons/method/authority.svg", d: "Earn domain trust safely with authoritative local backlinks and native media assets." },
  { t: "Server-side monitoring", icon: "/icons/method/monitoring.svg", d: "Deploy cookieless GA4 and Looker Studio dashboards that map verified conversion paths." },
];

function Cell({ icon, t, d }: { icon: string; t: string; d: string }) {
  return (
    <div className="mcell">
      <span className="mcell-ic">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt="" aria-hidden="true" />
      </span>
      <h3 className="mcell-t">{t}</h3>
      <p className="mcell-d">{d}</p>
    </div>
  );
}

export default function SeoMethodology() {
  return (
    <section className="section method" id="methodology">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Our 5-Step Organic Growth Process</h2>
          <p>From technical foundation to verified conversion tracking — the full engineering flow.</p>
        </div>

        <div className="mgrid" data-reveal>
          <div className="mrow mrow-3">
            {STEPS.slice(0, 3).map((s) => (
              <Cell key={s.t} {...s} />
            ))}
          </div>
          <span className="mgrid-rule" aria-hidden="true" />
          <div className="mrow mrow-2">
            {STEPS.slice(3).map((s) => (
              <Cell key={s.t} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
