/**
 * Ambient "rising data-stream" visual for the SEO hero right side.
 * Deterministic (SSR-safe) lollipop bars trending up-right, each with a
 * fading trail + glowing dot, gently bobbing on a staggered loop.
 */
export default function HeroDataViz() {
  const W = 560;
  const H = 470;
  const N = 27;
  const left = 18;
  const right = W - 14;
  const bottom = H - 14;
  const step = (right - left) / (N - 1);

  // deterministic pseudo-random jitter (fixed seed)
  let seed = 9;
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };

  const bars = Array.from({ length: N }, (_, i) => {
    const x = left + i * step;
    const trend = i / (N - 1); // 0 → 1 rising
    const baseTop = bottom - 26 - trend * (H - 150);
    const topY = Math.max(20, baseTop + (rnd() - 0.5) * 52);
    return { x, topY, trend, i };
  });

  return (
    <svg className="hv" viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rising data trend">
      <defs>
        <linearGradient id="hvTrail" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--cyan)" stopOpacity="0.85" />
          <stop offset="1" stopColor="var(--cyan)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {bars.map((b) => (
        <g className="hv-bar" key={b.i} style={{ animationDelay: `${(b.i * 0.09).toFixed(2)}s` }}>
          <rect className="hv-trail" x={b.x - 1.5} y={b.topY} width="3" height={bottom - b.topY} rx="1.5" fill="url(#hvTrail)" />
          <circle className="hv-dot" cx={b.x} cy={b.topY} r={3.6} style={{ opacity: (0.45 + b.trend * 0.55).toFixed(2) }} />
        </g>
      ))}
    </svg>
  );
}
