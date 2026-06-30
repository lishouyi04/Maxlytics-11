import type { Metadata } from "next";
import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import ViewMoreFeatures from "@/components/sections/seo/ViewMoreFeatures";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: "Generative Engine Optimization Hong Kong",
  description:
    "Maxlytics builds Generative Engine Optimization systems for Hong Kong brands that need citation visibility across ChatGPT, Perplexity, Gemini and Google AI Overviews.",
  keywords: ["generative engine optimization", "geo hong kong", "ai seo hong kong", "llm seo"],
  alternates: { canonical: "/services/ai-seo/geo" },
};

const faqItems: FaqItem[] = [
  {
    q: "Can traditional SEO tools track my brand's performance in generative engine results?",
    a: "No. Legacy rank trackers are designed around static blue-link search results. GEO needs recommendation rank, citation frequency and conversational share-of-voice tracking across live AI answer surfaces.",
  },
  {
    q: "If LLM models use historical training data, how can ongoing GEO work help today?",
    a: "Modern AI answer products increasingly use retrieval-augmented generation. They query live web sources when responding to commercial prompts, so clean schema, entity clarity and trusted citations can influence which brands are selected.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Generative Engine Optimization Hong Kong",
      serviceType: "Generative Engine Optimization",
      provider: { "@type": "Organization", name: "Maxlytics", url: "https://www.maxlytics.io" },
      areaServed: { "@type": "Place", name: "Hong Kong" },
      url: "https://www.maxlytics.io/services/ai-seo/geo",
      description:
        "GEO systems for AI recommendation visibility, including citation tracking, semantic architecture, schema engineering and multi-LLM monitoring.",
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
  ["45%", "of Hong Kong digital users now begin part of their commercial journey inside AI chat networks instead of legacy search bars."],
  ["709K+", "monthly local active visits on ChatGPT web surfaces from the Hong Kong market zone."],
  ["597K+", "regional DeepSeek traffic spikes mapped around Hong Kong commercial discovery patterns."],
];

const measurementCards = [
  ["Citation Frequency", "Track how often your domain assets are quoted, referenced or selected as the primary factual source inside AI answers.", "/icons/geo-measurement/frequency.svg"],
  ["Share of Voice", "Measure the percentage of commercial AI recommendations your brand controls across priority transactional questions.", "/icons/geo-measurement/share-of-voice.svg"],
  ["Recommendation Rank", "Benchmark whether your brand appears as the top recommendation, a secondary option or is missing from the conversation.", "/icons/geo-measurement/ranking.svg"],
];

const proofRows = [
  [
    "Corporate Health Package Central",
    "AI returns generic provider lists with no client mention.",
    "Entity pages, schema and citation layers position the brand as a trusted premium Hong Kong option.",
  ],
  [
    "Cross-Border Trucking B2B Quotation",
    "LLM answers rely on broad logistics definitions instead of supplier recommendations.",
    "Supply-chain metadata and service proof points connect the brand to procurement-ready prompts.",
  ],
  [
    "Enterprise Store Web Design Company",
    "Generated results favour directory-style summaries with weak commercial qualification.",
    "Case-neutral capability clusters and bilingual service architecture lift recommendation confidence.",
  ],
];

const industries = [
  ["Professional Services", "Institutional E-E-A-T signals and expert citation paths for legal, medical and advisory prompts.", "/icons/method/authority.svg"],
  ["Digital Retail & E-commerce", "Product schema matrices and comparison-ready content for conversational product discovery.", "/icons/seo/ecommerce-seo.svg"],
  ["Higher Education & Training", "Regional entity graphs that support executive program and course comparison prompts.", "/icons/method/content.svg"],
  ["Enterprise B2B Retainers", "Supply-chain metadata and procurement language for complex global vendor evaluation queries.", "/icons/method/architecture.svg"],
];

const workflow = [
  ["Generative Visibility Audit", "Audit current citation footprint and identify AI indexing gaps across priority engines.", "/icons/method/authority.svg"],
  ["Knowledge Architecture Restructuring", "Reformat domain information into structured knowledge nodes AI crawlers can parse.", "/icons/method/architecture.svg"],
  ["Schema & AI Crawler Configuration", "Inject nested JSON-LD and crawler-facing semantic signals for major AI answer systems.", "/icons/method/audit.svg"],
  ["Real-Time Citation Monitoring", "Track recommendation rank and protect share-of-voice through a recurring analytics loop.", "/icons/method/monitoring.svg"],
];

const geoViewMoreFeatures = [
  { title: "AI SEO", href: "/services/ai-seo/", desc: "Return to the full AI SEO hub for multi-engine semantic search architecture.", icon: "/icons/ai-seo-view-more/ai-seo.svg" },
  { title: "AI Overview Optimization", href: "/services/ai-seo/ai-overview/", desc: "Capture brand citations inside Google's generated summary surfaces.", icon: "/icons/ai-seo-view-more/ai-overview.svg" },
  { title: "Content Marketing", href: "/services/content-marketing/", desc: "Build semantic content systems that support AI citations, topic authority and organic discovery.", icon: "/icons/ai-seo-view-more/content-marketing.svg" },
];

export default function GeoPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoHeroShell
        breadcrumb="AI SEO / GEO"
        title={
          <>
            Generative Engine <em className="it">Optimization</em> Hong Kong
          </>
        }
        description="When buyers ask ChatGPT, Perplexity, Gemini or Google AI Overviews for recommendations, your brand needs to be cited as the answer. Maxlytics restructures domain assets, schema and authority signals so AI engines can retrieve and trust your business."
        primaryCta="Claim My Free AI Visibility Diagnostic →"
        primaryHref="/free-seo-audit/"
      />

      <section className="section mkt" id="geo-market-data">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>2026 Hong Kong AI Disruption Signals</h2>
            <p>GEO exists because premium buyers are moving from keyword search to conversational discovery. The earlier your entity layer is structured, the easier AI engines can recommend you.</p>
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
            <h2>Our Proprietary GEO Measurement Framework</h2>
            <p>We do not treat AI visibility as a vague brand impression. Every engagement is anchored to citation frequency, recommendation rank and commercial share-of-voice.</p>
          </div>
          <div className="feature-grid three" data-reveal>
            {measurementCards.map(([title, desc, icon]) => (
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
            <h2>Live Algorithmic Proof: HK Query Audit Framework</h2>
            <p>Instead of publishing unverifiable screenshots, we use anonymised commercial prompts to show where AI answers fail before GEO and what the Maxlytics intervention changes.</p>
          </div>
          <div className="intent-matrix geo-proof-table" data-reveal>
            <div className="intent-row intent-head" aria-hidden="true">
              <p>Commercial Query</p>
              <p>Before Optimization</p>
              <p>Maxlytics GEO Intervention</p>
            </div>
            {proofRows.map(([query, before, after]) => (
              <div className="intent-row" key={query}>
                <code>{query}</code>
                <p>{before}</p>
                <p>{after}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Tailored GEO Playbooks for High-Value Sectors</h2>
            <p>Different industries need different proof structures. We adapt entity architecture, citation sources and prompt coverage to the buying logic of each vertical.</p>
          </div>
          <div className="feature-grid four" data-reveal>
            {industries.map(([title, desc, icon]) => (
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
            <h2>Our 4-Step Generative Optimization Blueprint</h2>
            <p>A technical delivery pipeline for moving from AI invisibility to measurable recommendation presence.</p>
          </div>
          <div className="steps ecommerce-playbook-steps">
            {workflow.map(([title, desc, icon], index) => (
              <div className="step" data-reveal key={title}>
                {index < workflow.length - 1 && <span className="line"></span>}
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
        subtitle="Answers for teams evaluating Generative Engine Optimization and AI recommendation visibility."
        id="geo-faq"
      />

      <ViewMoreFeatures
        features={geoViewMoreFeatures}
        title="View More Features"
        description="Explore adjacent AI search and organic growth systems."
      />
      <SiteEffects />
    </main>
  );
}
