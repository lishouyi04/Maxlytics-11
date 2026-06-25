import CrossBorderCircuit from "@/components/sections/seo/CrossBorderCircuit";

export default function SeoCrossBorder() {
  return (
    <section className="section xborder" id="cross-border">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Cross-Border Growth: Google + Baidu Synergy</h2>
          <p>
            Scale seamlessly from Hong Kong to Mainland China. While most agencies only focus on Google HK,
            Maxlytics deploys a multi-language hreflang architecture, localised APAC CDN configuration, and
            specialised Chinese URL encoding to dominate rankings on both Google and Baidu simultaneously.
          </p>
        </div>
        <div data-reveal>
          <CrossBorderCircuit />
        </div>
      </div>
    </section>
  );
}
