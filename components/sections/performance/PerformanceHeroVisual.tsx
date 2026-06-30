export default function PerformanceHeroVisual() {
  return (
    <div className="performance-hero-visual" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="performance-hero-person" src="/img/performance-hero-composite/person-frame.png" alt="" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="performance-hero-first-party" src="/img/performance-hero-composite/first-party-card.png" alt="" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="performance-hero-sales" src="/img/performance-hero-composite/sales-card.png" alt="" />
      <div className="performance-donut">
        <span>15%</span>
        <span>20%</span>
        <span>65%</span>
      </div>
    </div>
  );
}
