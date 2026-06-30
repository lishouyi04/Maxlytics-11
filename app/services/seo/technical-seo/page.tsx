import type { Metadata } from "next";
import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import ViewMoreFeatures from "@/components/sections/seo/ViewMoreFeatures";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: "Technical SEO Audit Hong Kong",
  description:
    "Maxlytics executes technical SEO audits for Hong Kong and cross-border websites, covering crawlability, hreflang, schema, Core Web Vitals, CDN latency and indexation hygiene.",
  keywords: ["technical seo audit hong kong", "technical seo hong kong", "seo audit hong kong"],
  alternates: { canonical: "/services/seo/technical-seo" },
};

const faqItems: FaqItem[] = [
  {
    q: "Why is our hreflang setup still showing the wrong language in Google HK?",
    a: "Hreflang can fail when sitemaps, canonicals, server headers and internal links send conflicting signals. We audit the full stack instead of checking tags in isolation, then align the language variants around one clean entity structure.",
  },
  {
    q: "Can simple redirects capture Baidu traffic from an existing Hong Kong server?",
    a: "Simple redirects are often weak in cross-border environments because latency and crawler timeouts can reduce trust. Cross-border SEO needs clean headers, regional routing and APAC CDN planning so mainland crawlers can parse assets reliably.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Technical SEO Audit Hong Kong",
      serviceType: "Technical SEO Audit",
      provider: { "@type": "Organization", name: "Maxlytics", url: "https://www.maxlytics.io" },
      areaServed: { "@type": "Place", name: "Hong Kong" },
      url: "https://www.maxlytics.io/services/seo/technical-seo",
      description:
        "Technical SEO audits covering crawlability, server response, hreflang, structured data, Core Web Vitals, APAC CDN latency and indexation performance.",
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

const friction = [
  ["Bilingual Hreflang Alignment", "Fix EN and zh-HK cross-linking so search engines understand regional language variants.", "/icons/technical-seo/bilingual.svg"],
  [".hk Registry Authority", "Audit DNS, canonicals and domain routing that can dilute regional indexing equity.", "/icons/method/authority.svg"],
  ["APAC CDN Latency", "Configure edge delivery to reduce server response delays for Hong Kong and cross-border users.", "/icons/technical-seo/apac-cdn.svg"],
  ["Chinese URL Encoding", "Normalize non-ASCII paths and parameters that can break rendering, crawl or tracking logic.", "/icons/technical-seo/chinese-url.svg"],
  ["Baidu Bridge Framework", "Calibrate headers, routing and crawl access so mainland spiders can parse assets without timeout loops.", "/icons/technical-seo/baidu-color.svg"],
];

const checklistRows = [
  [
    "Layer 01: Crawl & Server Metrics",
    "Server response, rendering paths and crawler connectivity.",
    "TTFB under target thresholds, zero 5xx loops and clean canonical mapping structures.",
  ],
  [
    "Layer 02: Structural Data Layers",
    "Structured semantic data, schema nesting and multi-language code execution.",
    "Clean JSON-LD validation, consistent hreflang clusters and no overlapping directory tag drops.",
  ],
  [
    "Layer 03: Page Experience Indexes",
    "Core Web Vitals across dynamic templates and custom viewports.",
    "LCP, INP and CLS checked against current performance thresholds across priority layouts.",
  ],
];

const diagnostics = [
  ["Screaming Frog Scrapes", "Deep structural crawling to identify rendering blocks, orphan files and duplicate directory pathways.", "/icons/method/audit.svg"],
  ["Google Search Console API", "Data extraction for crawl budget leaks, indexing deltas, query drops and mobile usability flags.", "/icons/technical-seo/google-white.svg"],
  ["Lighthouse Core Profiling", "Rendering sequence, payload execution and script-blocking checks for faster page paint.", "/icons/technical-seo/frame.svg"],
];

const cmsModules = [
  ["Shopify Framework", "Strip redundant app scripts, clean forced nested links and override canonical parameters for high-volume product options.", "/icons/technical-seo/shopify.svg"],
  ["WordPress Architecture", "Reduce plugin bloat, tune database queries and implement caching rules that support crawl and page experience.", "/icons/technical-seo/wordpress.svg"],
  ["Wix Platforms", "Improve client-side rendering paths, schema validation and server-side routing clarity where template controls are limited.", "/icons/technical-seo/wix.svg"],
];

const technicalViewMoreFeatures = [
  { title: "SEO", href: "/services/seo/", desc: "Return to the complete Maxlytics SEO stack: technical, local, ecommerce, AI search and cross-border growth.", icon: "/icons/local-seo/seo.svg" },
  { title: "Local SEO", href: "/services/seo/local-seo/", desc: "Map visibility, bilingual local intent and Google Business Profile architecture for Hong Kong.", icon: "/icons/seo/local-seo.svg" },
  { title: "E-commerce SEO", href: "/services/seo/ecommerce-seo/", desc: "Product variant schema, faceted directory fixes and platform-specific retail SEO.", icon: "/icons/seo/ecommerce-seo.svg" },
];

export default function TechnicalSeoPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoHeroShell
        breadcrumb="SEO / Technical SEO"
        title={
          <>
            Eliminate Code Bottlenecks. Force Crawlers to <em className="it">Index Revenue Assets.</em>
          </>
        }
        description="Generic agencies write content and hope for rankings while ignoring code errors. Maxlytics executes precision technical SEO audits, resolving server latency, hreflang loops and crawl-budget waste so your infrastructure becomes indexable revenue machinery."
        primaryCta="Run Free Technical Code Audit →"
        primaryHref="/free-seo-audit/"
      />

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Overcoming Hong Kong's Core Infrastructure Coding Traps</h2>
            <p>Hong Kong SEO has regional technical constraints: bilingual indexing, .hk authority, APAC latency, Chinese URL handling and cross-border crawler access all need to work together.</p>
          </div>
          <div className="feature-grid paid-social-platform-grid technical-friction-grid" data-reveal>
            {friction.map(([title, desc, icon]) => (
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
            <h2>Our 3-Layer Codebase Quality Audit Checklist</h2>
            <p>Technical SEO is a pass/fail discipline. We inspect crawler access, structured data and page experience thresholds before recommending content expansion.</p>
          </div>
          <div className="intent-matrix technical-checklist-table" data-reveal>
            <div className="intent-row intent-head" aria-hidden="true">
              <p>Audit Layer</p>
              <p>Diagnostic Focus</p>
              <p>Engineering Threshold</p>
            </div>
            {checklistRows.map(([layer, focus, threshold]) => (
              <div className="intent-row" key={layer}>
                <code>{layer}</code>
                <p>{focus}</p>
                <p>{threshold}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Programmatic Diagnostics: Specialized Instrument Integration</h2>
            <p>We pair each diagnostic category with the right inspection tool so the audit produces implementation tasks, not vague recommendations.</p>
          </div>
          <div className="steps ecommerce-channel-steps">
            {diagnostics.map(([title, desc, icon], index) => (
              <div className="step" data-reveal key={title}>
                {index < diagnostics.length - 1 && <span className="line"></span>}
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

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>CMS Codebase Isolation. Zero Template Restrictions.</h2>
            <p>Each CMS creates different technical SEO problems. We adapt the crawl, schema and rendering fixes to the platform rather than forcing one checklist onto every site.</p>
          </div>
          <div className="feature-grid three" data-reveal>
            {cmsModules.map(([title, desc, icon]) => (
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

      <Faq
        items={faqItems}
        title="Frequently Asked Questions"
        subtitle="Answers for teams planning technical SEO audits, hreflang fixes and cross-border crawlability work."
        id="technical-seo-faq"
      />

      <ViewMoreFeatures
        features={technicalViewMoreFeatures}
        title="View More Features"
        description="Explore adjacent SEO and measurement systems."
      />
      <SiteEffects />
    </main>
  );
}
