import type { Metadata } from "next";
import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import ViewMoreFeatures from "@/components/sections/seo/ViewMoreFeatures";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: "AI SEO Agency Hong Kong",
  description:
    "Maxlytics engineers AI SEO and Generative Engine Optimization for Hong Kong brands across ChatGPT, Perplexity, Gemini and Google AI Overviews.",
  keywords: ["ai seo services hong kong", "seo ai", "ai seo agency", "generative engine optimization hong kong"],
  alternates: { canonical: "/services/ai-seo" },
};

const faqItems: FaqItem[] = [
  {
    q: "Can traditional SEO agencies track our brand's conversational visibility inside ChatGPT?",
    a: "Most legacy rank tracking tools only measure static keyword positions on blue-link search pages. Maxlytics measures recommendation rank, citation frequency and share-of-voice across AI answer surfaces.",
  },
  {
    q: "How long does it take to see measurable results from Generative Engine Optimization?",
    a: "Technical schema and entity updates can register within weeks, while sustained semantic network deployment usually compounds over 3 to 6 months depending on category competition and crawl quality.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AI SEO Hong Kong",
      serviceType: "AI SEO and Generative Engine Optimization",
      provider: { "@type": "Organization", name: "Maxlytics", url: "https://www.maxlytics.io" },
      areaServed: { "@type": "Place", name: "Hong Kong" },
      url: "https://www.maxlytics.io/services/ai-seo",
      description:
        "AI SEO and GEO systems for ChatGPT, Perplexity, Gemini and Google AI Overviews, including semantic architecture, schema and citation monitoring.",
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
  ["45%", "of Hong Kong digital users now start some commercial discovery inside AI chat instead of traditional keyword search."],
  ["709K+", "monthly local active visits on ChatGPT web surfaces from the Hong Kong market network."],
  ["597K+", "regional DeepSeek traffic spikes informing conversational discovery and AI answer demand patterns."],
];

const platformRows = [
  [
    "ChatGPT & Perplexity",
    "Static pages fail to intercept interactive conversational purchase recommendations.",
    "Restructure domain assets into semantic knowledge nodes LLM scrapers can cite with confidence.",
  ],
  [
    "Google AI Overviews",
    "Standard blue links can sit below generated answer blocks above the fold.",
    "Optimise FAQ structure, JSON-LD and answer-ready snippets for AI summary inclusion.",
  ],
  [
    "Gemini Integration",
    "Weak semantic trust indicators filter brand authority out of generated responses.",
    "Enforce E-E-A-T validation and localized citation mapping across trusted digital sources.",
  ],
];

const workflow = [
  ["Generative Visibility Audit", "Benchmark recommendation share-of-voice across top AI interfaces.", "/icons/method/audit.svg"],
  ["Knowledge Architecture", "Rebuild directory paths into context-rich structures AI crawlers can digest quickly.", "/icons/method/architecture.svg"],
  ["Schema & E-E-A-T Injection", "Embed structured data and entity links that support LLM citation confidence.", "/icons/method/authority.svg"],
  ["Citation Monitoring", "Track AI visibility movement through server-side dashboards and reporting loops.", "/icons/method/monitoring.svg"],
];

const aiSeoViewMoreFeatures = [
  { title: "Generative Engine Optimization", href: "/services/ai-seo/geo/", desc: "AI crawler configuration, citation tracking and LLM recommendation architecture.", icon: "/icons/ai-seo-view-more/geo.svg" },
  { title: "AI Overview Optimization", href: "/services/ai-seo/ai-overview/", desc: "Capture brand citations inside Google's generated summary surfaces.", icon: "/icons/ai-seo-view-more/ai-overview.svg" },
  { title: "Content Marketing", href: "/services/content-marketing/", desc: "Build semantic content systems that support AI citations, topic authority and organic discovery.", icon: "/icons/ai-seo-view-more/content-marketing.svg" },
];

export default function AiSeoPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoHeroShell
        breadcrumb="AI SEO"
        title={
          <>
            Stop Ranking for Blue Links. Win <em className="it">AI Citations</em> Instead.
          </>
        }
        description="Traditional search result pages are shrinking. Maxlytics engineers GEO playbooks to position your brand inside conversational answers across ChatGPT, Gemini, Perplexity and Google AI Overviews."
        primaryCta="Claim My Free AI Visibility Diagnostic →"
        primaryHref="/free-seo-audit/"
      />

      <section className="section mkt" id="ai-seo-market">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Hong Kong AI Search Adoption Signals</h2>
            <p>AI SEO is not a future channel. It is already changing how premium buyers discover, compare and shortlist brands before they ever click a website.</p>
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
            <h2>Multi-LLM Synergy. Complete Recommendation Coverage.</h2>
            <p>AI search surfaces do not all crawl, summarize or cite in the same way. We map each engine to its own trust, schema and recommendation mechanics.</p>
          </div>
          <div className="intent-matrix ai-seo-platform-table" data-reveal>
            <div className="intent-row intent-head" aria-hidden="true">
              <p>Generative Engines</p>
              <p>Traditional Search Limitation</p>
              <p>Maxlytics GEO Engineering Strategy</p>
            </div>
            {platformRows.map(([engine, limitation, strategy]) => (
              <div className="intent-row" key={engine}>
                <code>{engine}</code>
                <p>{limitation}</p>
                <p>{strategy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Our 4-Step Generative Optimization Process</h2>
            <p>A repeatable technical workflow for moving from invisible in AI answers to measurable recommendation presence.</p>
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
        subtitle="Answers for teams evaluating AI SEO, GEO and conversational search visibility."
        id="ai-seo-faq"
      />

      <ViewMoreFeatures
        features={aiSeoViewMoreFeatures}
        title="View More Features"
        description="Explore adjacent AI search and organic growth pillars."
      />
      <SiteEffects />
    </main>
  );
}
