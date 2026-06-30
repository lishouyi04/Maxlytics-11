import type { Metadata } from "next";
import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import ViewMoreFeatures from "@/components/sections/seo/ViewMoreFeatures";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: "Google AI Overview Optimization Hong Kong",
  description:
    "Maxlytics helps Hong Kong brands earn citations inside Google AI Overviews through schema, FAQ architecture, bilingual hreflang and answer-ready content structures.",
  keywords: ["ai overviews", "google ai overview", "ai overview optimization", "aio seo hong kong"],
  alternates: { canonical: "/services/ai-seo/ai-overview" },
};

const faqItems: FaqItem[] = [
  {
    q: "Does our domain need very high authority to qualify for Google AI Overview citations?",
    a: "Authority helps with crawl frequency, but AIO inclusion also depends on clear information structure, schema compliance, answer-ready FAQ context and source reliability. Smaller brands can improve eligibility by making their assets easier for Google's retrieval systems to parse.",
  },
  {
    q: "Can traditional tracking tools show whether our site was cited inside an AI Overview?",
    a: "Most legacy tools only report standard blue-link ranking. AI Overview tracking requires snapshot detection, citation-source monitoring and prompt-specific visibility checks across live SERP states.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Google AI Overview Optimization Hong Kong",
      serviceType: "AI Overview Optimization",
      provider: { "@type": "Organization", name: "Maxlytics", url: "https://www.maxlytics.io" },
      areaServed: { "@type": "Place", name: "Hong Kong" },
      url: "https://www.maxlytics.io/services/ai-seo/ai-overview",
      description:
        "AI Overview optimization for Google SERPs, including structured data, FAQ architecture, bilingual hreflang and citation monitoring.",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const metrics = [
  ["50+ Verticals", "Hong Kong commercial search categories tested for AI Overview trigger patterns."],
  ["High Trigger Rate", "Observed across premium, high-intent query blocks where traditional rankings are pushed lower."],
  ["Industry Classified", "AIO snapshot behaviour mapped by semantic intent, language and commercial category."],
];

const comparisonRows = [
  [
    "User Interaction Pattern",
    "Voluntary multi-turn comparison and research prompts inside conversational AI mode.",
    "Automatically triggered above standard organic links for commercial, high-intent searches.",
  ],
  [
    "Crawler Integration",
    "Broader model memory, historical caches and Gemini-led conversational context.",
    "Retrieval-augmented generation that can live-scrape web assets during the query block.",
  ],
  [
    "Hong Kong Commercial Impact",
    "Useful for upper-funnel education, competitor comparison and research journeys.",
    "Controls zero-click visibility above the fold and can suppress legacy blue-link traffic.",
  ],
];

const technicalVectors = [
  ["Faceted Schema Structuring", "Inject granular JSON-LD arrays that let Google's retrieval systems verify business data quickly.", "/icons/method/architecture.svg"],
  ["FAQ Structure Optimization", "Reformat content into Q&A fragments that match the intent pattern of AI summary generation.", "/icons/method/content.svg"],
  ["Featured Snippet Domination", "Tighten heading hierarchy and definition blocks so answer seeds can be reused inside snapshots.", "/icons/method/authority.svg"],
];

const localisationRows = [
  [
    "English Corporate Intent",
    "Enterprise teams compare providers through English service, capability and procurement language.",
    "Map executive search phrasing into schema, FAQ and service-page headings that Google can cite cleanly.",
  ],
  [
    "Traditional Chinese / Cantonese Intent",
    "Local buyers search with different comparison terms, category names and purchase questions.",
    "Align zh-HK hreflang, local phrasing and bilingual entity data without duplicating thin content.",
  ],
  [
    "Cross-Language Citation",
    "Google may evaluate language variants separately before choosing a citation source.",
    "Connect canonical, hreflang and structured data so both language paths reinforce the same brand entity.",
  ],
];

const checklist = [
  ["Schema Health", "Audit Organization, Service, FAQPage and Breadcrumb structured data for AIO readability.", "/icons/method/audit.svg"],
  ["Content Hierarchy", "Check whether page headings, summaries and definitions can be extracted as complete answer blocks.", "/icons/method/content.svg"],
  ["Citation Eligibility", "Review source clarity, authoritativeness and internal links that support Google's snapshot confidence.", "/icons/method/monitoring.svg"],
];

const aioViewMoreFeatures = [
  { title: "AI SEO", href: "/services/ai-seo/", desc: "Return to the full AI SEO hub for semantic architecture and multi-engine crawler setup.", icon: "/icons/ai-seo-view-more/ai-seo.svg" },
  { title: "Generative Engine Optimization", href: "/services/ai-seo/geo/", desc: "Master conversational recommendations, recommendation rank and citation visibility across AI engines.", icon: "/icons/ai-seo-view-more/geo.svg" },
  { title: "Content Marketing", href: "/services/content-marketing/", desc: "Build semantic content systems that support AI citations, topic authority and organic discovery.", icon: "/icons/ai-seo-view-more/content-marketing.svg" },
];

export default function AiOverviewPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoHeroShell
        breadcrumb="AI SEO / AI Overview"
        title={
          <>
            Get Cited in Google <em className="it">AI Overview.</em>
          </>
        }
        description="Traditional page-one blue links are being displaced by Google's automated summaries. Maxlytics engineers semantic structure, schema and answer-ready content so your assets can become citation sources inside the zero-click SERP."
        primaryCta="Claim My Free AI Visibility Diagnostic →"
        primaryHref="/free-seo-audit/"
      />

      <section className="section mkt" id="aio-study">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>The Hong Kong AI Overview Triggering Study</h2>
            <p>We classify high-intent Hong Kong query groups by vertical, language and snapshot behaviour to understand when Google chooses to generate an AI Overview.</p>
          </div>
          <div className="flow mkt-flow">
            {metrics.map(([value, copy]) => (
              <div className="glow-card mkt" data-reveal key={value}>
                <div className="fig">{value}</div>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>AI Mode vs. AI Overview: Practical Impact on HK Enterprise</h2>
            <p>Both surfaces are powered by AI, but they affect discovery differently. AI Overviews matter because they appear directly above standard organic listings.</p>
          </div>
          <div className="intent-matrix aio-comparison-table" data-reveal>
            <div className="intent-row intent-head" aria-hidden="true">
              <p>Evaluation Vector</p>
              <p>Conversational AI Mode</p>
              <p>Google AI Overviews</p>
            </div>
            {comparisonRows.map(([vector, mode, overview]) => (
              <div className="intent-row" key={vector}>
                <code>{vector}</code>
                <p>{mode}</p>
                <p>{overview}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Structural Code Injection. Forcing the Citation Loop.</h2>
            <p>AIO optimization is not just copywriting. We rebuild the technical and content layer so Google's retrieval systems can validate, extract and cite your assets.</p>
          </div>
          <div className="feature-grid three" data-reveal>
            {technicalVectors.map(([title, desc, icon]) => (
              <div className="feature-card" key={title}>
                <span className="feature-icon" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon} alt="" />
                </span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>EN/ZH-HK Hreflang Alignment: Bilingual AI Tracking</h2>
            <p>Google evaluates English corporate intent and local Traditional Chinese search behaviour through different semantic signals. We connect both paths into one citation-ready entity system.</p>
          </div>
          <div className="intent-matrix aio-localisation-table" data-reveal>
            <div className="intent-row intent-head" aria-hidden="true">
              <p>Language Layer</p>
              <p>AIO Visibility Risk</p>
              <p>Maxlytics Alignment</p>
            </div>
            {localisationRows.map(([layer, risk, alignment]) => (
              <div className="intent-row" key={layer}>
                <code>{layer}</code>
                <p>{risk}</p>
                <p>{alignment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Step-by-Step AIO Self-Audit Checklist</h2>
            <p>Before any AIO campaign starts, we inspect whether the site can be understood, trusted and extracted by Google's summary systems.</p>
          </div>
          <div className="steps ecommerce-channel-steps">
            {checklist.map(([title, desc, icon], index) => (
              <div className="step" data-reveal key={title}>
                {index < checklist.length - 1 && <span className="line"></span>}
                <div className="n">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="step-ic" src={icon} alt="" />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq
        items={faqItems}
        title="Frequently Asked Questions"
        subtitle="Answers for teams planning Google AI Overview visibility and citation tracking."
        id="ai-overview-faq"
      />

      <ViewMoreFeatures
        features={aioViewMoreFeatures}
        title="View More Features"
        description="Explore adjacent AI search and technical SEO pillars."
      />
      <SiteEffects />
    </main>
  );
}
