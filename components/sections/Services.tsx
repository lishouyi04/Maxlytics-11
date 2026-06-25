import Radar from "@/components/shaders/Radar";

export default function Services() {
  return (
      <section className="section" id="services">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>One team for paid and organic growth</h2>
            <p>Every service below has its own dedicated page — start here to see the shape of what we do.</p>
          </div>

          <div className="radar-block" data-reveal id="performance">
            <Radar />
            <div className="radar-grid">
              <div className="quad tl"><img  className="q-ic" src="/img/img-f128ba6125.svg" alt="SEM" /><h3>SEM</h3><p>Paid search across engines, plus cross-border into mainland China.</p></div>
              <div className="quad tr"><img  className="q-ic" src="/img/img-418fc6052a.svg" alt="Paid Social" /><h3>Paid Social</h3><p>Full-stack social buying tuned for HK and cross-border audiences.</p></div>
              <div className="quad bl"><img  className="q-ic" src="/img/img-1e4734c8b0.svg" alt="Video Performance" /><h3>Video Performance</h3><p>Performance-first video — built to a measurable CPA, not just views.</p></div>
              <div className="quad br"><img  className="q-ic" src="/img/img-e40f4add84.svg" alt="Analytics & Attribution" /><h3>Analytics & Attribution</h3><p>Privacy-first tracking and modelling so every dollar is accountable.</p></div>
              <img  className="radar-center" src="/img/img-19094d41ed.png" alt="Maxlytics" />
            </div>
          </div>
        </div>
      </section>
  );
}
