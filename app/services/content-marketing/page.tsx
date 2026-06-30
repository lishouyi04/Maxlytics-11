import type { Metadata } from "next";
import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import ViewMoreFeatures from "@/components/sections/seo/ViewMoreFeatures";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: "Content Marketing Agency Hong Kong",
  description:
    "Maxlytics builds performance-first content marketing systems for Hong Kong brands, combining semantic research, structured production and revenue-connected distribution.",
  keywords: ["content marketing hong kong", "content marketing agency hong kong", "seo content marketing"],
  alternates: { canonical: "/services/content-marketing" },
};

const faqItems: FaqItem[] = [
  {
    q: "Does Maxlytics deploy content with proper schema markup?",
    a: "Yes. Content frameworks are planned with structured data in mind, including Article, FAQ, Organization and service-level schema where relevant, so search engines and AI retrieval systems can parse the asset more reliably.",
  },
  {
    q: "How does predictive content research handle seasonal search intent?",
    a: "We do not rely only on lagging search volume. We combine audience signals, semantic trend patterns and commercial funnel data to map topic clusters before demand becomes obvious to competitors.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Content Marketing Hong Kong",
      serviceType: "Content Marketing",
      provider: { "@type": "Organization", name: "Maxlytics", url: "https://www.maxlytics.io" },
      areaServed: { "@type": "Place", name: "Hong Kong" },
      url: "https://www.maxlytics.io/services/content-marketing",
      description:
        "Performance-first content marketing for Hong Kong brands, including semantic research, structured production, content distribution and revenue attribution.",
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

const infrastructure = [
  ["Predictive Content Research", "Scrape semantic demand, commercial query gaps and audience signals before transactional topics spike.", "/icons/method/audit.svg"],
  ["Precision Content Production", "Build structured hubs, briefs and content blocks that match crawl paths, AI retrieval patterns and conversion intent.", "/icons/method/content.svg"],
  ["Automated Content Distribution", "Repurpose and distribute optimized assets across local, cross-border and search-facing surfaces without diluting authority.", "/icons/method/monitoring.svg"],
];

const pipeline = [
  ["Traffic Generation", "Deploy high-intent content hubs designed to capture transactional industry queries and organic discovery slots.", "/icons/seo/local-seo.svg"],
  ["Lead Capture", "Insert contextual micro-conversion paths and native lead forms that turn anonymous sessions into verified corporate records.", "/icons/audit/intent-recognition.svg"],
  ["Revenue Realization", "Connect content conversions into analytics and CRM reporting so organic assets can be tied to downstream value.", "/icons/platforms/orbit-center.svg"],
];

const frameworkRows = [
  [
    "Semantic Cluster Mapping",
    "Loose blog calendars create disconnected articles that compete with each other.",
    "Group topics into intent-led hubs with internal links, schema and conversion paths around one commercial outcome.",
  ],
  [
    "Conversion-Led Editorial System",
    "Brand filler earns impressions but fails to qualify buyers.",
    "Plan each asset around buyer stage, problem urgency, proof requirement and next-step CTA.",
  ],
  [
    "Search + AI Retrieval Readiness",
    "Content written only for humans can be difficult for crawlers and LLM retrieval systems to extract.",
    "Structure headings, definitions, FAQs and entity references so content can support blue-link rankings and AI citations.",
  ],
];

const contentViewMoreFeatures = [
  { title: "AI SEO", href: "/services/ai-seo/", desc: "Secure citation visibility across AI engines through semantic architecture and crawler setup.", icon: "/icons/ai-seo-view-more/ai-seo.svg" },
  { title: "Generative Engine Optimization", href: "/services/ai-seo/geo/", desc: "Master conversational recommendations, recommendation rank and citation visibility across AI engines.", icon: "/icons/ai-seo-view-more/geo.svg" },
  { title: "AI Overview Optimization", href: "/services/ai-seo/ai-overview/", desc: "Capture brand citations inside Google's generated summary surfaces.", icon: "/icons/ai-seo-view-more/ai-overview.svg" },
];

export default function ContentMarketingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoHeroShell
        breadcrumb="Services / Content Marketing"
        title={
          <>
            Stop Writing Content for Clicks. Build <em className="it">Pipeline</em> Instead.
          </>
        }
        description="Most agencies publish vanity creative that never converts. Maxlytics engineers performance-first content frameworks, combining semantic search intent, audience data and conversion architecture to turn traffic into qualified business pipeline."
        primaryCta="Claim My Free Content ROI Audit →"
        primaryHref="/free-seo-audit/"
      />

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Algorithmic Content Infrastructure. No Empty AI Claims.</h2>
            <p>Content marketing only compounds when research, production and distribution are connected to crawl behaviour and commercial intent.</p>
          </div>
          <div className="feature-grid three" data-reveal>
            {infrastructure.map(([title, desc, icon]) => (
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
            <h2>The Traffic-to-Revenue Conversion Framework</h2>
            <p>We treat content as an operating system: traffic generation feeds lead capture, and lead capture has to be measurable inside revenue reporting.</p>
          </div>
          <div className="steps ecommerce-channel-steps content-pipeline-steps">
            {pipeline.map(([title, desc, icon], index) => (
              <div className="step" data-reveal key={title}>
                {index < pipeline.length - 1 && <span className="line"></span>}
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
            <h2>Programmatic Content ROI Architecture</h2>
            <p>Instead of isolated articles, we build cluster systems that can rank, be cited, capture leads and pass measurable signals into the sales pipeline.</p>
          </div>
          <div className="intent-matrix content-framework-table" data-reveal>
            <div className="intent-row intent-head" aria-hidden="true">
              <p>Framework Layer</p>
              <p>Common Agency Bottleneck</p>
              <p>Maxlytics Execution System</p>
            </div>
            {frameworkRows.map(([layer, bottleneck, system]) => (
              <div className="intent-row" key={layer}>
                <code>{layer}</code>
                <p>{bottleneck}</p>
                <p>{system}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq
        items={faqItems}
        title="Frequently Asked Questions"
        subtitle="Answers for teams evaluating content marketing as a revenue system, not a publishing calendar."
        id="content-marketing-faq"
      />

      <ViewMoreFeatures
        features={contentViewMoreFeatures}
        title="View More Features"
        description="Explore adjacent growth systems connected to content infrastructure."
      />
      <SiteEffects />
    </main>
  );
}
