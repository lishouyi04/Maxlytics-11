import type { CSSProperties } from "react";

const STARS = [
  [8, 18, 2.8, 0.1, 2],
  [15, 42, 4.2, 1.2, 2],
  [23, 16, 3.4, 2.1, 3],
  [31, 55, 5.1, 0.7, 2],
  [38, 26, 3.1, 1.8, 2],
  [44, 8, 4.7, 2.6, 2],
  [52, 48, 3.8, 0.4, 3],
  [61, 17, 5.4, 3.2, 2],
  [67, 39, 3.5, 1.5, 2],
  [76, 22, 4.9, 2.4, 3],
  [84, 50, 3.2, 0.9, 2],
  [91, 13, 5.2, 3.6, 2],
  [11, 70, 4.6, 2.8, 2],
  [28, 76, 3.7, 1.1, 2],
  [49, 72, 5.3, 3.1, 3],
  [72, 75, 4.1, 0.5, 2],
  [88, 68, 3.6, 2.2, 2],
] as const;

const CHEVRONS = [0, 0.28, 0.56, 0.84, 1.12, 1.4, 1.68];

const LOGOS = [
  { name: "Baidu", icon: "/icons/platform-orbit-refined/baidu.svg", left: "13%" },
  { name: "Bing", icon: "/icons/platform-orbit-refined/bing.svg", left: "31.5%" },
  { name: "Google", icon: "/icons/platform-orbit-refined/google.svg", left: "50%" },
  { name: "Meta", icon: "/icons/platform-orbit-refined/meta.svg", left: "68.5%" },
  { name: "TikTok", icon: "/icons/platform-orbit-refined/tiktok.svg", left: "87%" },
];

export default function CrossPlatformOrbit() {
  return (
    <div className="platform-orbit bcsa-wrap" aria-hidden="true">
      <div
        className="bcsa-stage"
        role="img"
        aria-label="Central hub automatically allocating across Baidu, Bing, Google, Meta and TikTok"
      >
        <div className="nebula"></div>
        <div className="bcsa-motion-field">
          <div className="stars">
            {STARS.map(([left, top, duration, delay, size]) => (
              <i
                key={`${left}-${top}`}
                style={
                  {
                    left: `${left}%`,
                    top: `${top}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    "--t": `${duration}s`,
                    "--td": `${delay}s`,
                  } as CSSProperties
                }
              />
            ))}
          </div>

          <div className="chev-stream">
            {CHEVRONS.map((delay) => (
              <div className="chev" key={delay} style={{ "--d": `${delay}s` } as CSSProperties}></div>
            ))}
          </div>

          <div className="node">
            <div className="node-glow"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="node-img" src="/icons/platform-orbit-refined/main-logo.svg" alt="" />
          </div>

          <svg className="net" viewBox="0 0 1000 760" preserveAspectRatio="xMidYMid meet">
            <path className="base" d="M500 318 L500 430" />
            <path className="base" d="M130 600 L130 446 Q130 430 146 430 L854 430 Q870 430 870 446 L870 600" />
            <path className="base" d="M315 430 L315 600 M500 430 L500 600 M685 430 L685 600" />
            <path className="route route-0" d="M500 318 L500 430 L146 430 Q130 430 130 446 L130 600" />
            <path className="route route-1" d="M500 318 L500 430 L315 430 L315 600" />
            <path className="route route-2" d="M500 318 L500 600" />
            <path className="route route-3" d="M500 318 L500 430 L685 430 L685 600" />
            <path className="route route-4" d="M500 318 L500 430 L854 430 Q870 430 870 446 L870 600" />
          </svg>

          {LOGOS.map((logo) => (
            <div className="bcsa-logo" key={logo.name} style={{ left: logo.left }}>
              <div className="logo-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <span className="orbit-fade"></span>
    </div>
  );
}
