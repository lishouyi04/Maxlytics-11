import type { Metadata } from "next";
import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import ViewMoreFeatures from "@/components/sections/seo/ViewMoreFeatures";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: "Local SEO Hong Kong",
  description:
    "Maxlytics builds bilingual Local SEO systems for Hong Kong businesses: market-level keyword mapping, Google Business Profile optimisation, local citations and schema.",
  keywords: ["Local SEO Hong Kong", "Local SEO HK", "Hong Kong Local SEO"],
  alternates: { canonical: "/services/seo/local-seo" },
};

const faqItems: FaqItem[] = [
  {
    q: "Our business operates across multiple physical branches in Hong Kong. Do we need independent landing pages for each location?",
    a: "Yes. We build branch-specific landing pages for priority markets and connect each page to the relevant Google Business Profile, so search engines can understand the location, service scope and commercial intent clearly.",
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
        "Bilingual Local SEO for Hong Kong businesses, including Google Business Profile optimisation, market-level keyword mapping and local citation architecture.",
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
  ["HK Local Intent", "mapped into granular keyword clusters for priority services, branches and commercial areas in Hong Kong."],
  ["13M+ Profiles", "inform local search behaviour, click intent and audience signal modelling."],
];

const intentRows = [
  ["Corporate clinic in Central", "中環身體檢查邊間好", "Bilingual hreflang and entity signals connect executive English searches with local Cantonese purchase intent."],
  ["B2B logistics provider HK", "香港跨境物流報價", "Schema and service clusters map long-tail B2B searches to specific commercial zones."],
  ["Shopify developer Hong Kong", "香港網店設計公司推薦", "Localized service pages intercept transaction-ready searches before competitors do."],
];

const citations = [
  ["Vertical Directory Consistency", "Synchronise NAP data across relevant industry directories to reduce indexing conflicts.", "/img/local-citation-directory.png"],
  ["Commercial Listing Coverage", "Build contextual local authority through business listings that match the client's service category.", "/img/local-citation-listing.png"],
  ["Local Entity Mentions", "Create credible entity co-occurrence signals that support local trust and map visibility.", "/img/local-citation-entity.png"],
];

const steps = [
  ["NAP Consistency", "Clean duplicate listings, historical address conflicts and incorrect contact data.", "/img/img-3fc2d1ec65.svg"],
  ["Schema Nesting", "Add store hours, geocoordinates and bilingual categories through clean JSON-LD.", "/img/img-407b39ac68.svg"],
  ["Review Velocity", "Build post-purchase feedback flows that increase natural review velocity.", "/img/img-770343fefa.svg"],
];

const localisationCards = [
  ["Commercial-Area Intent", "Location-sensitive language for high-intent professional, retail and B2B queries without over-fragmenting Hong Kong into artificial zones.", "/icons/method/audit.svg"],
  ["Branch-Level Relevance", "Each priority location receives unique service copy, schema, map signals and internal links instead of duplicated boilerplate.", "/icons/seo/local-seo.svg"],
  ["Industry Modifiers", "Healthcare, education, real estate, F&B and ecommerce searches are grouped by how Hong Kong users actually compare providers.", "/icons/method/content.svg"],
];

const localViewMoreFeatures = [
  { title: "SEO", href: "/services/seo/", desc: "Return to the full Maxlytics SEO stack: technical, local, ecommerce, AI search and cross-border growth.", icon: "/icons/method/architecture.svg" },
  { title: "E-commerce SEO", href: "/services/seo/ecommerce-seo/", desc: "Faceted navigation, product schema and category architecture for Shopify & SHOPLINE.", icon: "/icons/seo/ecommerce-seo.svg" },
  { title: "Technical SEO", href: "/services/seo/technical-seo/", desc: "Crawlability, Core Web Vitals, indexation and render-path engineering.", icon: "/icons/seo/technical-seo.svg" },
];

export default function LocalSeoPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoHeroShell
        breadcrumb="SEO / Local SEO"
        title={
          <>
            Buy Traffic? Dominate <em className="it">Local HK Search</em> Intent Instead.
          </>
        }
        description="Maxlytics deploys a precision bilingual local search framework to position your brand for Google Map Pack visibility and high-intent commercial traffic across the Hong Kong market."
        primaryCta="Get My Free Local Traffic Audit →"
        primaryHref="/free-seo-audit/"
      />

      <section className="section mkt" id="local-market-data">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Hong Kong Local Search Landscape</h2>
            <p>Local SEO in Hong Kong is no longer just a Google Business Profile checklist. Winning requires map visibility, bilingual intent coverage and audience data tuned to real local buying behaviour.</p>
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
            <h2>HK Localisation Strategy for Commercial Intent</h2>
            <p>We map services, categories and branch pages against Hong Kong search behaviour, so each landing page has a clear job in the local funnel.</p>
          </div>
          <div className="feature-grid three" data-reveal>
            {localisationCards.map(([title, desc, icon]) => (
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
            <h2>Bilingual Keyword Research. No Intent Left Behind.</h2>
            <p>Hong Kong search behaviour often splits between English corporate discovery and Cantonese local purchase intent. We plan both paths in one architecture, including the actual phrasing users type in Cantonese.</p>
          </div>
          <div className="intent-matrix" data-reveal>
            <div className="intent-row intent-head" aria-hidden="true">
              <p>English Corporate Intent</p>
              <p>Local Cantonese Search Phrase</p>
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
            <p>Local citation work gives Google more consistent proof of who you are, where you operate and which commercial categories your brand should be associated with. We prioritise verified, category-relevant sources rather than name-dropping platforms without supporting evidence.</p>
          </div>
          <div className="why-grid local-citation-grid">
            {citations.map(([title, desc, image]) => (
              <div className="why-card" data-reveal key={title}>
                <div className="why-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image} alt={title} />
                </div>
                <div className="why-node"><span className="dot"></span></div>
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
          <div className="steps local-gbp-steps">
            {steps.map(([title, desc, icon], index) => (
              <div className="step" data-reveal key={title}>
                {index < steps.length - 1 && <span className="line"></span>}
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
        subtitle="Answers to the most common Local SEO questions from multi-location and ecommerce teams in Hong Kong."
        id="local-seo-faq"
      />

      <ViewMoreFeatures features={localViewMoreFeatures} />
      <SiteEffects />
    </main>
  );
}
