import type { Metadata } from "next";
import Link from "next/link";
import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: "Performance Marketing Agency Hong Kong",
  description:
    "Maxlytics engineers full-funnel performance marketing in Hong Kong across SEM, paid social, video performance, analytics and attribution.",
  keywords: [
    "performance marketing agency hong kong",
    "digital performance marketing agency",
    "performance marketing services",
  ],
  alternates: { canonical: "/services/performance-marketing" },
};

const faqItems: FaqItem[] = [
  {
    q: "Why do Meta Ads Manager and GA4 show different conversion numbers?",
    a: "Meta and GA4 use different attribution windows, event models and deduplication logic. We reduce the gap with server-side tracking, CAPI, clean UTM governance and a single reporting layer tied to business outcomes.",
  },
  {
    q: "What determines success in a performance-based model?",
    a: "We establish a clean baseline during audit, then anchor success to verified business metrics such as CPL reduction, qualified lead volume, transaction value or blended ROAS improvement.",
  },
  {
    q: "Which channels should we start with?",
    a: "It depends on your funnel. High-intent demand usually starts with paid search, while audience creation and retargeting may lean on paid social, video and first-party audience signals.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Performance Marketing",
      serviceType: "Performance Marketing",
      provider: { "@type": "Organization", name: "Maxlytics", url: "https://www.maxlytics.io" },
      areaServed: { "@type": "Place", name: "Hong Kong" },
      url: "https://www.maxlytics.io/services/performance-marketing",
      description:
        "Full-funnel performance marketing across search, social, video, analytics and attribution for Hong Kong and cross-border growth.",
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
  ["4.2x ROAS", "average cross-channel return modelled for active portfolio planning and budget allocation."],
  ["-38% CPA", "targeted reduction unlocked through cleaner tracking, audience signals and channel-level optimisation."],
  ["+54% Leads", "pipeline lift benchmark used to frame first-quarter performance targets and reporting cadence."],
];

const comparisonRows = [
  [
    "Billing Foundation",
    "Fixed retainers and impression-based spend models.",
    "Targets tied to conversion benchmarks, CPL efficiency and verifiable ROAS.",
  ],
  [
    "Data Integrity",
    "Static reports that over-index on clicks, reach and platform-native numbers.",
    "Live dashboards with tracking hygiene, attribution logic and revenue-facing metrics.",
  ],
  [
    "Audience Mapping",
    "Broad platform interests and native lookalikes.",
    "Localized first-party signal strategy supported by the 13M+ Maxlytics data stack.",
  ],
];

const services = [
  [
    "Search Engine Marketing",
    "SEM HUB",
    "Multi-engine paid search across Google, Bing, PMax, Shopping and competitive conquesting.",
    "/services/sem/",
  ],
  [
    "Paid Social Frameworks",
    "SOCIAL",
    "Campaign deployment across Meta, LinkedIn, TikTok, XHS and future high-signal platforms.",
    "/services/paid-social/",
  ],
  [
    "Video Performance Engineering",
    "VIDEO",
    "YouTube, Reels and Shorts creative built around measurable CPA instead of view counts.",
    "/services/video-performance/",
  ],
  [
    "Privacy-First Tracking & Attribution",
    "ATTRIBUTION",
    "Server-side GTM, CAPI and cookieless measurement architecture for real ROAS visibility.",
    "/services/analytics-attribution/",
  ],
];

const funnel = [
  [
    "Demand Generation",
    "Upper Funnel",
    "Use YouTube Shorts, Reels, Demand Gen and platform-native discovery formats to create new audience demand and branded search lift.",
  ],
  [
    "Lead Generation",
    "Lower Funnel",
    "Capture active buyers through paid search, LinkedIn Lead Forms, retargeting and lead scoring logic for higher-value accounts.",
  ],
];

const escapeLinks = [
  ["Google Ads Dedicated Pillar", "Google Search, Smart Bidding and localized PMax scaling playbooks.", "/services/google-ads/"],
  ["AI SEO & GEO Solutions", "Capture conversational recommendations across ChatGPT, Perplexity and AI search surfaces.", "/services/ai-seo/"],
  ["Paid Social Execution Framework", "Meta, LinkedIn, TikTok and XHS audience systems for B2C and B2B growth.", "/services/paid-social/"],
];

export default function PerformanceMarketingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoHeroShell
        title={
          <>
            Stop Burning Your Ad Budget. <em className="it">Scale Predictable Revenue</em> Instead.
          </>
        }
        description="Move past legacy agencies that only report impressions and vanity clicks. Maxlytics engineers full-funnel performance marketing campaigns powered by analytics, attribution and a proprietary 13M+ first-party data stack."
        primaryCta="Claim My Free Performance Audit →"
        primaryHref="/free-seo-audit/"
      />

      <section className="section mkt" id="performance-benchmarks">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Real-Time HK Industry Performance Signals</h2>
            <p>Benchmarks are used as planning anchors, not decorative claims. Every campaign starts with channel economics, tracking quality and attribution confidence.</p>
          </div>
          <div className="flow mkt-flow">
            {metrics.map(([num, stmt]) => (
              <div className="glow-card mkt" data-reveal key={num}>
                <div className="fig">{num}</div>
                <p>{stmt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Pay-for-Results. Absolute Accountability.</h2>
            <p>Performance marketing is not a media-buying label. It is a measurement discipline where channel choices, budgets and creative decisions are accountable to business outcomes.</p>
          </div>
          <div className="performance-ledger" data-reveal>
            <div className="ledger-row ledger-head">
              <p>Performance Vector</p>
              <p>Legacy Agency Pattern</p>
              <p>Maxlytics Framework</p>
            </div>
            {comparisonRows.map(([vector, legacy, maxlytics]) => (
              <div className="ledger-row" key={vector}>
                <h3>{vector}</h3>
                <p>{legacy}</p>
                <p>{maxlytics}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Cross-Channel Engines Configured to Dominate</h2>
            <p>Each channel has a dedicated role, but the growth model is unified: search intent, paid social demand, video creative and attribution all feed one optimisation loop.</p>
          </div>
          <div className="feature-grid four" data-reveal>
            {services.map(([title, tag, desc, href]) => (
              <Link href={href} className="feature-card pm-service-card" key={title}>
                <span className="card-kicker">{tag}</span>
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
          <div className="pm-data-stack" data-reveal>
            <div className="pm-node-panel" aria-hidden="true">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <div>
              <h2>Bypassing Ad Platform Limits with 13M+ Local Profiles</h2>
              <p>
                Standard ad platform targeting is weaker in the cookieless era. Maxlytics uses compliant first-party
                audience signals to help Meta, Google and TikTok optimise faster, reduce waste and understand local Hong
                Kong demand with more precision.
              </p>
              <div className="seo-pills">
                <span className="seo-pill">Audience signal modelling</span>
                <span className="seo-pill">Server-side tracking</span>
                <span className="seo-pill">Cross-channel attribution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Borderless Scale: Automated Cross-Platform Allocation</h2>
            <p>Budget should follow signal quality. We balance Google, Meta, TikTok and Baidu through one measurement layer, then shift spend toward geos and ad units with the strongest verified return.</p>
          </div>
          <div className="feature-grid three" data-reveal>
            {["Google + Bing", "Meta + TikTok", "Baidu Cross-Border"].map((title) => (
              <div className="feature-card" key={title}>
                <h3>{title}</h3>
                <p>Unified campaign governance, conversion mapping and budget pacing for channel-specific growth roles.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Intercepting Demand from First Touch to Final Conversion</h2>
            <p>Performance growth needs both sides of the funnel: demand creation for cold audiences and conversion capture for people already showing commercial intent.</p>
          </div>
          <div className="funnel-split" data-reveal>
            {funnel.map(([title, label, desc]) => (
              <div className="funnel-card" key={title}>
                <span>{label}</span>
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
            <h2>No Hidden Markups. Aligned Growth Incentives.</h2>
            <p>We frame pricing around a fixed management base, minimum media requirements and performance-linked upside only after the measurement baseline is trustworthy.</p>
          </div>
          <div className="pricing-grid" data-reveal>
            {["Audit & Baseline", "Growth Retainer", "Performance Scale"].map((name, index) => (
              <div className={"pcard" + (index === 1 ? " featured" : "")} key={name}>
                <div className="pcard-head">
                  <div className="pcard-tier">0{index + 1}</div>
                  <div className="pcard-name">{name}</div>
                  <p className="pcard-info">Designed to keep incentives clear before spend is scaled.</p>
                </div>
                <div className="pcard-feats">
                  <div className="pcard-feat"><span className="pc-check">✓</span><span>Tracking and attribution review</span></div>
                  <div className="pcard-feat"><span className="pc-check">✓</span><span>Channel economics and benchmark modelling</span></div>
                  <div className="pcard-feat"><span className="pc-check">✓</span><span>Quarterly optimisation roadmap</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq
        items={faqItems}
        title="Frequently Asked Questions"
        subtitle="A few practical answers before you review your performance marketing stack."
        id="performance-marketing-faq"
      />

      <section className="section escape-section">
        <div className="container">
          <p className="escape-label">EXPLORE SPECIFIC CHANNELS</p>
          <div className="escape-links pm-escape-links">
            {escapeLinks.map(([title, desc, href]) => (
              <Link href={href} key={title}>
                <strong>{title} →</strong>
                <span>{desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SiteEffects />
    </main>
  );
}
