import type { Metadata } from "next";
import Link from "next/link";
import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import ViewMoreFeatures from "@/components/sections/seo/ViewMoreFeatures";
import SiteEffects from "@/components/SiteEffects";
import { performanceViewMoreFeatures } from "@/app/services/performanceFeatures";

export const metadata: Metadata = {
  title: "SEM Agency Hong Kong",
  description:
    "Maxlytics builds multi-engine SEM systems for Hong Kong brands across Google Search, Microsoft/Bing Ads, Baidu cross-border search, PMax and competitor conquesting.",
  keywords: ["sem hong kong", "search engine marketing hong kong", "sem agency hong kong", "competitor conquesting", "bing advertising"],
  alternates: { canonical: "/services/sem" },
};

const faqItems: FaqItem[] = [
  {
    q: "Why should a Hong Kong enterprise allocate spend into Bing Ads if Google dominates local search?",
    a: "Google carries the largest consumer search volume, but Microsoft/Bing can capture valuable corporate desktop and professional-service demand with less auction pressure. For B2B accounts, lower CPC density can create efficient lead pockets.",
  },
  {
    q: "Is bidding on competitor brand keywords compliant?",
    a: "Ad platforms generally allow competitor brand-term bidding as long as the competitor trademark is not misused inside the actual ad copy. We structure conquesting campaigns around compliant alternative value propositions and careful query controls.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "SEM Hong Kong",
      serviceType: "Search Engine Marketing",
      provider: { "@type": "Organization", name: "Maxlytics", url: "https://www.maxlytics.io" },
      areaServed: { "@type": "Place", name: "Hong Kong" },
      url: "https://www.maxlytics.io/services/sem",
      description:
        "Multi-engine search engine marketing across Google, Bing, Baidu, PMax, Shopping and competitor conquesting for Hong Kong and cross-border brands.",
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

const benchmarkRows = [
  ["FinTech & Corporate Banking", "HKD 14.50", "HKD 38.20", "Optimized CPL lead lock"],
  ["E-commerce & Global Retail", "HKD 2.10", "HKD 6.80", "Max storefront ROAS target"],
  ["Medical, Healthcare & Services", "HKD 8.40", "HKD 19.50", "Booked appointment cost conversion"],
  ["Premium High-Ticket B2B", "HKD 18.20", "HKD 45.00", "Enterprise pipeline scale"],
];

const engines = [
  ["Google Ads Infrastructure", "Capture the core of Hong Kong transactional demand across dominant mobile and desktop search inventory.", "/icons/platforms/google.svg"],
  ["Microsoft / Bing Ads Framework", "Intercept corporate desktop, Office and Windows-linked commercial demand with lower auction density.", "/icons/platforms/bing.svg"],
  ["Cross-Border Baidu Strategy", "Configure paid search funnels for Hong Kong brands targeting mainland China demand paths.", "/icons/platforms/baidu.svg"],
];

const adFormats = [
  ["PPC Search Ads Solutions", "Rebuild search campaign structures to filter low-intent query bloat.", "/services/google-search-ads/", "/img/img-f128ba6125.svg"],
  ["Performance Max Tuning", "Use first-party signals to shape automated multi-channel optimization loops.", "/services/google-performance-max/", "/icons/platforms/orbit-center.svg"],
  ["Google Display Realignment", "Retargeting structures and visual asset optimization for GDN inventory.", "/services/google-display-ads/", "/img/img-418fc6052a.svg"],
  ["Google Shopping Engine", "Merchant feed structure, product matching and multi-currency campaign hygiene.", "/services/google-ads/", "/icons/seo/ecommerce-seo.svg"],
  ["YouTube Video Funnels", "CPA-oriented video placements built to support measurable conversion paths.", "/services/video-performance/", "/icons/performance/video.svg"],
  ["App Conversion Scaling", "Deep-linking and event parameters designed for efficient mobile app acquisition.", "/services/google-ads/", "/icons/performance/conversion-lift.svg"],
];

const conquesting = [
  ["Competitor Term Intent", "Rival brand searches and comparison queries are identified from paid search logs and market demand.", "/icons/audit/intent-recognition.svg"],
  ["Real-Time Intercept", "Dynamic ad structures position your alternative value proposition at the decision point.", "/icons/method/architecture.svg"],
  ["Brand SERP Domination", "Paid and organic search surfaces are coordinated to expand share of voice without careless trademark use.", "/icons/method/authority.svg"],
];

const process = [
  ["Codebase Technical Audit", "Scan conversion loops, landing-page routing, UTMs and event syntax discrepancies.", "/icons/method/audit.svg"],
  ["Intent Keyword Structure", "Rebuild exact ad groups to eliminate irrelevant long-tail spend and cannibalization.", "/icons/audit/intent-recognition.svg"],
  ["Dynamic Ad Copy Injection", "Use controlled copy variants and query logic to match buyer urgency.", "/icons/method/content.svg"],
  ["Quality Score Automation", "Tune landing page relevance, speed and historical performance inputs.", "/icons/method/authority.svg"],
  ["Cross-Engine Bid Tracking", "Synchronize bidding weights across Google, Bing and Baidu-facing structures.", "/icons/platforms/orbit-center.svg"],
  ["Dashboard Sync", "Unify account performance inside clear reporting tied to CPA, CPL and ROAS.", "/icons/method/monitoring.svg"],
];

export default function SemPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoHeroShell
        breadcrumb="Performance Marketing / SEM"
        title={
          <>
            Dominate Paid Search Intent. <em className="it">Across Every Engine.</em>
          </>
        }
        description="Standard agencies run isolated Google Ads campaigns and ignore the wider search ecosystem. Maxlytics deploys a unified SEM framework across Google Search, Microsoft/Bing Ads and Baidu cross-border configurations to intercept transactional buyer intent wherever it searches."
        primaryCta="Claim My Free PPC Account Audit →"
        primaryHref="/free-seo-audit/"
        variant="performance"
      />

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Real-Time Hong Kong Paid Search Cost Benchmarks</h2>
            <p>Benchmarks are planning references, not decorative numbers. We use them to frame account structure, bid ceilings and conversion expectations before scaling spend.</p>
          </div>
          <div className="intent-matrix sem-benchmark-table" data-reveal>
            <div className="intent-row intent-head" aria-hidden="true">
              <p>Target Industry</p>
              <p>Low-Range CPC</p>
              <p>Medium CPC / CPA Target</p>
            </div>
            {benchmarkRows.map(([sector, low, medium, cpa]) => (
              <div className="intent-row" key={sector}>
                <code>{sector}</code>
                <code>{low}</code>
                <p><strong>{medium}</strong><br />{cpa}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Unifying the Paid Search Landscape: Google, Bing &amp; Baidu</h2>
            <p>SEM is no longer a single-engine discipline. We assign each engine a commercial role, then measure results through one account-governance layer.</p>
          </div>
          <div className="feature-grid three" data-reveal>
            {engines.map(([title, desc, icon]) => (
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
            <h2>Full-Spectrum Search Ad Deployment Formats</h2>
            <p>Each ad format routes to a specific job: capture existing demand, retarget qualified visitors, tune automation or expand revenue through product and video surfaces.</p>
          </div>
          <div className="feature-grid three sem-format-grid" data-reveal>
            {adFormats.map(([title, desc, href, icon]) => (
              <Link href={href} className="feature-card pm-service-card" key={title}>
                <span className="feature-icon" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon} alt="" />
                </span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="arrow-link">Explore <span>→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Competitive Conquesting: Bidding on Rival Brand Terms</h2>
            <p>Conquesting only works when it is controlled, compliant and paired with landing pages that prove the alternative. We use it to expand search share of voice without wasting budget on broad curiosity clicks.</p>
          </div>
          <div className="steps ecommerce-channel-steps">
            {conquesting.map(([title, desc, icon], index) => (
              <div className="step" data-reveal key={title}>
                {index < conquesting.length - 1 && <span className="line"></span>}
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
            <h2>Our 6-Step Programmatic Paid Search Management</h2>
            <p>Paid search performance comes from operational discipline: clean tracking, cleaner intent structures and a reporting layer that makes waste visible fast.</p>
          </div>
          <div className="feature-grid three" data-reveal>
            {process.map(([title, desc, icon], index) => (
              <div className="feature-card" key={title}>
                <span className="feature-icon" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon} alt="" />
                </span>
                <span className="card-kicker">{String(index + 1).padStart(2, "0")}</span>
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
        subtitle="Answers for teams evaluating multi-engine SEM, competitor conquesting and paid search account structure."
        id="sem-faq"
      />

      <ViewMoreFeatures
        features={performanceViewMoreFeatures("sem")}
        title="View More Features"
        description="Explore adjacent paid media and AI search systems."
      />
      <SiteEffects />
    </main>
  );
}
