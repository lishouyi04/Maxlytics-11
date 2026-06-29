import type { CSSProperties } from "react";

const ICONS = [
  { name: "Google", icon: "/icons/platforms/google.svg" },
  { name: "Bing", icon: "/icons/platforms/bing.svg", rotate: true },
  { name: "Baidu", icon: "/icons/platforms/baidu.svg" },
  { name: "Meta", icon: "/icons/platforms/meta.svg", rotate: true },
  { name: "TikTok", icon: "/icons/platforms/tiktok.svg" },
];

export default function CrossPlatformOrbit() {
  const orbitCount = 3;
  const orbitGap = 8;
  const iconsPerOrbit = Math.ceil(ICONS.length / orbitCount);

  return (
    <div className="platform-orbit" aria-hidden="true">
      <div className="orbit-crop">
        <div className="orbit-stage">
          <div className="orbit-hub">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/platforms/orbit-center.svg" alt="" />
          </div>

          {Array.from({ length: orbitCount }).map((_, orbitIndex) => {
            const size = `${12 + orbitGap * (orbitIndex + 1)}rem`;
            const orbitIcons = ICONS.slice(orbitIndex * iconsPerOrbit, orbitIndex * iconsPerOrbit + iconsPerOrbit);
            const angleStep = (2 * Math.PI) / orbitIcons.length;

            return (
              <div
                className="orbit-layer"
                key={orbitIndex}
                style={
                  {
                    width: size,
                    height: size,
                    animationDuration: `${12 + orbitIndex * 6}s`,
                  } as CSSProperties
                }
              >
                {orbitIcons.map((platform, iconIndex) => {
                  const angle = iconIndex * angleStep - Math.PI / 2;
                  const x = 50 + 50 * Math.cos(angle);
                  const y = 50 + 50 * Math.sin(angle);

                  return (
                    <div
                      className={"orbit-logo" + (platform.rotate ? " rotate-logo" : "")}
                      key={platform.name}
                      style={
                        {
                          left: `${x}%`,
                          top: `${y}%`,
                        } as CSSProperties
                      }
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={platform.icon} alt="" />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <span className="orbit-fade"></span>
    </div>
  );
}
