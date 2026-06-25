import { PLATFORM_LOGOS, type Logo } from "@/lib/logos";

/** Continuously scrolling logo strip. Pass `logos` to customise (defaults to platform logos). */
export default function LogoMarquee({ logos = PLATFORM_LOGOS }: { logos?: Logo[] }) {
  return (
    <div className="logo-cloud" data-reveal>
      <div className="logo-band">
        <div className="logo-track">
          {logos.map((l) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={l.alt} className="plogo" src={l.src} alt={l.alt} loading="lazy" />
          ))}
          {logos.map((l) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={"dup-" + l.alt} className="plogo dup" src={l.src} alt="" aria-hidden="true" loading="lazy" />
          ))}
        </div>
        <span className="logo-fade l" aria-hidden="true"></span>
        <span className="logo-fade r" aria-hidden="true"></span>
      </div>
    </div>
  );
}
