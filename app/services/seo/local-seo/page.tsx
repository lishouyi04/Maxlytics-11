import type { Metadata } from "next";
import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import ViewMoreFeatures from "@/components/sections/seo/ViewMoreFeatures";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: "Local SEO Hong Kong",
  description:
    "Maxlytics builds bilingual Local SEO systems for Hong Kong businesses: 18-district keyword mapping, Google Business Profile optimisation, local citations and schema.",
  keywords: ["Local SEO Hong Kong", "Local SEO HK", "Hong Kong Local SEO"],
  alternates: { canonical: "/services/seo/local-seo" },
};

const faqItems: FaqItem[] = [
  {
    q: "Our business operates across multiple physical branches in Hong Kong. Do we need independent landing pages for each location?",
    a: "Yes. We build district-level landing pages for priority markets and connect each page to the relevant Google Business Profile, so search engines can understand the location, service scope and commercial intent clearly.",
  },
  {
    q: "Is Maxlytics Local SEO architecture compatible with Shopify or SHOPLINE frameworks?",
    a: "Absolutely. We use implementation patterns designed for Shopify and SHOPLINE, including multi-location structured data, local category pages and clean bilingual metadata without bloating the template.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Local SEO Hong Kong",
      serviceType: "Local Search Engine Optimization",
      provider: { "@type": "Organization", name: "Maxlytics", url: "https://www.maxlytics.io" },
      areaServed: { "@type": "Place", name: "Hong Kong" },
      url: "https://www.maxlytics.io/services/seo/local-seo",
      description:
        "Bilingual Local SEO for Hong Kong businesses, including Google Business Profile optimisation, 18-district keyword mapping and local citation architecture.",
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
  ["45%", "of local commercial discovery now resolves inside map interfaces and AI geographic citations."],
  ["18 Districts", "mapped into granular keyword clusters for every priority commercial hub in Hong Kong."],
  ["13M+ Profiles", "inform local search behaviour, click intent and audience signal modelling."],
];

const intentRows = [
  ["Corporate clinic in Central", "Central body check recommendation", "Bilingual hreflang and entity signals connect executive English searches with local Cantonese purchase intent."],
  ["B2B logistics provider HK", "Hong Kong cross-border truck quotation", "Schema and service clusters map long-tail B2B searches to specific commercial zones."],
  ["Shopify developer Hong Kong", "Online store web design company", "District-level landing pages intercept transaction-ready local service searches before competitors do."],
];

const citations = [
  ["OpenRice Citation Sync", "Retail & F&B", "Synchronise NAP data across high-traffic local dining platforms to reduce indexing conflicts."],
  ["28Hse & Commercial Directories", "Real Estate & B2B", "Build contextual local authority for premium, high-ticket service categories."],
  ["HKGolden / LIHKG Entity Mentions", "Community Signals", "Create entity co-occurrence signals that support local trust and map visibility."],
];

const steps = [
  ["01", "NAP Consistency & Verification", "Clean duplicate listings, historical address conflicts and incorrect contact data."],
  ["02", "Layered Schema Nesting", "Add store hours, geocoordinates and bilingual categories through clean JSON-LD."],
  ["03", "Review Velocity Automation", "Build post-purchase feedback flows that increase natural review velocity."],
];

export default function LocalSeoPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoHeroShell
        title={
          <>
            Buy Traffic? Dominate <em className="it">Local HK Search</em> Intent Instead.
          </>
        }
        description="Maxlytics deploys a precision bilingual local search framework to position your brand for Google Map Pack visibility and high-intent commercial traffic across Hong Kong's 18 districts."
        primaryCta="Get My Free Local Traffic Audit →"
        primaryHref="/free-seo-audit/"
      />

      <section className="section mkt" id="local-market-data">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>18-District Local Search Landscape</h2>
            <p>Local SEO in Hong Kong is no longer just a Google Business Profile checklist. Winning requires map visibility, bilingual intent coverage and audience data tuned to each district.</p>
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
            <h2>HK District Strategy for Commercial Intent</h2>
            <p>We map services, categories and branch pages against Hong Kong's district-level demand patterns, so each landing page has a clear job in the local funnel.</p>
          </div>
          <div className="feature-grid three" data-reveal>
            {[
              ["Commercial Hubs", "Central, Tsim Sha Tsui, Causeway Bay and Kwun Tong pages for high-intent professional, retail and B2B queries."],
              ["Branch-Level Relevance", "Each priority location receives unique service copy, schema, map signals and internal links instead of duplicated boilerplate."],
              ["Industry Modifiers", "Healthcare, education, real estate, F&B and ecommerce searches are grouped by how Hong Kong users actually compare providers."],
            ].map(([title, desc]) => (
              <div className="feature-card" key={title}>
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
            <h2>Bilingual Keyword Research. No Intent Left Behind.</h2>
            <p>Hong Kong search behaviour often splits between English corporate discovery and Cantonese local purchase intent. We plan both paths in one architecture while keeping the page experience natural for English readers.</p>
          </div>
          <div className="intent-matrix" data-reveal>
            <div className="intent-row intent-head" aria-hidden="true">
              <p>English Corporate Intent</p>
              <p>Local Cantonese Intent Context</p>
              <p>Maxlytics Interception Strategy</p>
            </div>
            {intentRows.map(([en, local, strategy]) => (
              <div className="intent-row" key={en}>
                <code>{en}</code>
                <code>{local}</code>
                <p>{strategy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Dominating Local Citations &amp; Domain Trust</h2>
            <p>Local citation work gives Google more consistent proof of who you are, where you operate and which commercial categories your brand should be associated with.</p>
          </div>
          <div className="feature-grid three" data-reveal>
            {citations.map(([title, tag, desc]) => (
              <div className="feature-card" key={title}>
                <span className="card-kicker">{tag}</span>
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
            <h2>Our 3-Step Google Business Profile Blueprint</h2>
            <p>We treat GBP as a structured search asset, not a static business listing. The goal is cleaner entity data, stronger map relevance and more reliable conversion paths.</p>
          </div>
          <div className="process-line" data-reveal>
            {steps.map(([num, title, desc]) => (
              <div className="process-node" key={num}>
                <span>{num}</span>
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
        subtitle="Answers to the most common Local SEO questions from multi-location and ecommerce teams in Hong Kong."
        id="local-seo-faq"
      />

      <ViewMoreFeatures />
      <SiteEffects />
    </main>
  );
}
