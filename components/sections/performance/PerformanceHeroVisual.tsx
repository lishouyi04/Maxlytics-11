export default function PerformanceHeroVisual() {
  return (
    <div className="performance-hero-visual" aria-hidden="true">
      <div className="performance-portrait">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/performance-hero-person.png" alt="" />
      </div>
      <div className="performance-stat-card stat-primary">
        <span className="stat-icon">13M+</span>
        <strong>first-party</strong>
        <p>High-quality user data powering smarter media decisions</p>
        <span className="stat-line"></span>
      </div>
      <div className="performance-stat-card stat-chart">
        <strong>Optimize Your Sales</strong>
        <p>Revenue signals shaped by AI-driven insights</p>
        <div className="mini-chart">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>
      <div className="performance-donut">
        <span>15%</span>
        <span>20%</span>
        <span>65%</span>
      </div>
    </div>
  );
}
