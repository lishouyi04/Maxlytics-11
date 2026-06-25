import GeoRankSearch from "@/components/sections/seo/GeoRankSearch";

const ENGINES = [
  { name: "ChatGPT", icon: "/icons/ai/openai.svg", inv: true },
  { name: "Gemini", icon: "/icons/ai/gemini.svg" },
  { name: "Perplexity", icon: "/icons/ai/perplexity.svg" },
  { name: "Google AI Overviews", icon: "/icons/ai/google.svg" },
];

export default function SeoGeo() {
  return (
    <section className="section geo" id="geo">
      <div className="container">
        <div className="geo-card" data-reveal>
          <h2>Generative Engine Optimization (GEO)</h2>
          <p>
            SEO in 2026 is no longer just about standard blue links; it&rsquo;s about getting cited inside AI
            answers. We optimise your website&rsquo;s structural schemas and E-E-A-T signals to ensure your brand
            is actively recommended when users ask ChatGPT, Perplexity, or encounter Google AI Overviews.
          </p>
          <div className="geo-engines" aria-label="AI engines we optimise for">
            {ENGINES.map((e) => (
              <span className="geo-chip" key={e.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={e.icon}
                  alt=""
                  width={16}
                  height={16}
                  className={"geo-chip-ic" + (e.inv ? " inv" : "")}
                />
                {e.name}
              </span>
            ))}
          </div>

          <div className="geo-anim" data-reveal>
            <GeoRankSearch />
          </div>
        </div>
      </div>
    </section>
  );
}
