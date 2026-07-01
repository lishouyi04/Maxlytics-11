import type { Metadata } from "next";
import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import ViewMoreFeatures from "@/components/sections/seo/ViewMoreFeatures";
import SiteEffects from "@/components/SiteEffects";
import { performanceViewMoreFeatures } from "@/app/services/performanceFeatures";

export const metadata: Metadata = {
  title: "Analytics & Attribution Agency Hong Kong",
  description:
    "Maxlytics builds privacy-first analytics and attribution systems in Hong Kong with GA4, server-side GTM, CAPI, MMM and ROAS-focused reporting.",
  keywords: [
    "marketing attribution",
    "multi touch attribution model",
    "ga4 consultant",
    "analytics attribution hong kong",
    "server side gtm hong kong",
  ],
  alternates: { canonical: "/services/analytics-attribution" },
};

const faqItems: FaqItem[] = [
  {
    q: "Why do Meta Ads Manager and GA4 report different acquisition numbers?",
    a: "Meta and GA4 use different attribution windows, event definitions and deduplication logic. We reduce overlap by routing events through server-side proxies, standardising UTMs and mapping unique user signals into one attribution framework.",
  },
  {
    q: "Should we prioritise Marketing Mix Modeling over real-time last-click reporting?",
    a: "They solve different problems. Real-time attribution supports daily media and bid decisions, while MMM gives larger portfolios a longer-horizon read on channel interaction, offline impact and structural budget waste.",
  },
  {
    q: "Is server-side tracking and Conversions API infrastructure compliant under Hong Kong PDPO?",
    a: "Yes, when implemented correctly. Server-side GTM can act as a data firewall, hashing and filtering user parameters on a controlled cloud instance before approved data fragments are passed to advertising platforms.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Analytics & Attribution Hong Kong",
      serviceType: "Marketing Analytics and Attribution",
      provider: { "@type": "Organization", name: "Maxlytics", url: "https://www.maxlytics.io" },
      areaServed: { "@type": "Place", name: "Hong Kong" },
      url: "https://www.maxlytics.io/services/analytics-attribution",
      description:
        "Privacy-first analytics, GA4, server-side GTM, Conversions API and multi-touch attribution systems for Hong Kong performance marketing teams.",
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

const signalFlow = [
  [
    "Direct User Session",
    "Cookieless and iOS-ready event capture begins with cleaner browser, form and transaction signals.",
    "/icons/method/audit.svg",
  ],
  [
    "Server-Side GTM Proxy",
    "Events route through a first-party cloud layer before platform handoff, improving control and data hygiene.",
    "/icons/method/architecture.svg",
  ],
  [
    "Conversions API Ingestion",
    "Sanitised parameters are passed into Meta, Google and TikTok optimisation loops with stronger match quality.",
    "/icons/platforms/orbit-center.svg",
  ],
];

const complianceSpecs = [
  [
    "Privacy Deficit Protections",
    "Reduce exposure to iOS, Safari and cookie degradation while maintaining GDPR and Hong Kong PDPO implementation discipline.",
    "/icons/method/authority.svg",
  ],
  [
    "First-Party Cloud Proxy",
    "Route anonymised interaction data through your secure corporate domain before sending approved signals downstream.",
    "/icons/method/architecture.svg",
  ],
  [
    "Advanced Consent Calibration",
    "Adjust tracking weights around consent mode variables to avoid leakage, reporting distortion and platform risk.",
    "/icons/method/monitoring.svg",
  ],
];

const deliverables = [
  [
    "GA4 Enterprise Implementation",
    "Audit fragmented data layers, rebuild custom event parameters and remove duplicate historical tracking bloat.",
    "/icons/platforms/google.svg",
  ],
  [
    "Server-Side GTM Configuration",
    "Move fragile client-side tags into secure cloud-hosted containers for cleaner hashes and faster page execution.",
    "/icons/method/architecture.svg",
  ],
  [
    "Conversions API Calibration",
    "Build direct database-to-platform event paths across Meta, Google and TikTok bidding systems.",
    "/icons/platform-orbit-refined/meta.svg",
  ],
  [
    "Custom Looker Studio Data Hubs",
    "Centralise channel costs, attribution models and budget movement into an interactive reporting layer.",
    "/icons/method/monitoring.svg",
  ],
  [
    "Cross-Device Identity Tracking",
    "Stitch fragmented mobile and desktop sessions into more coherent consumer journey models.",
    "/icons/audit/intent-recognition.svg",
  ],
];

const attributionRows = [
  [
    "Last-Click Model",
    "Assigns 100% of conversion credit to the final interaction, hiding upper-funnel contribution.",
    "Maintained as a legacy baseline only; risky for cross-channel scaling decisions.",
  ],
  [
    "Linear Framework",
    "Splits credit evenly across every touchpoint, often over-valuing low-impact interactions.",
    "Useful for long-cycle seasonal campaigns where touchpoint frequency matters.",
  ],
  [
    "Time-Decay Protocol",
    "Increases credit for actions closest to checkout and reduces early discovery value.",
    "Applied during short promotional windows with high bottom-funnel velocity.",
  ],
  [
    "Data-Driven Model",
    "Uses predictive logic to isolate conversion probability shifts across sequence histories.",
    "Core standard for daily multi-channel budget scaling and optimisation.",
  ],
  [
    "Marketing Mix Modeling",
    "Evaluates historical transaction data with macro statistical models over longer timelines.",
    "Reserved for enterprise portfolios measuring online, offline and brand synergy.",
  ],
];

const roasSpecs = [
  [
    "Cross-Network ROAS Reconciliation",
    "Strip away platform self-preferencing and calculate unbiased net return by channel.",
    "/icons/geo-measurement/share-of-voice.svg",
  ],
  [
    "Automated Budget Reallocation",
    "Move spend away from redundant ad groups and toward under-valued touchpoints.",
    "/icons/geo-measurement/ranking.svg",
  ],
  [
    "Downstream LTV Ingestion Matrix",
    "Feed customer database milestones and retention value back into media bidding systems.",
    "/icons/geo-measurement/frequency.svg",
  ],
];

const dataLoop = [
  [
    "Raw Conversion Data",
    "Clean lead, transaction and CRM outcomes are prepared for enrichment.",
    "/icons/method/content.svg",
  ],
  [
    "13M+ DMP Enrichment",
    "Anonymous local profile patterns help strengthen match quality and audience direction.",
    "/icons/method/authority.svg",
  ],
  [
    "CAPI Optimisation Loop",
    "High-fidelity signals are returned to platform bidding models for faster learning.",
    "/icons/platforms/orbit-center.svg",
  ],
];

const integrations = [
  "GA4 Framework Engine",
  "GTM Server-Side Platforms",
  "Google BigQuery Architecture",
  "Looker Studio Panel Suites",
  "Conversions API Direct Nests",
  "Segment CDP Platform Mapping",
];

export default function AnalyticsAttributionPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoHeroShell
        breadcrumb="Performance Marketing / Analytics & Attribution"
        title={
          <>
            Privacy-First Analytics &amp; <em className="it">Attribution in Hong Kong</em>
          </>
        }
        description="Measure what matters, optimise for ROAS. Move past fragmented ad platform scripts that blind acquisition decisions. Maxlytics deploys server-side data infrastructure and multi-touch modelling pipelines to clarify the performance of every media dollar."
        primaryCta="Claim My Free Attribution Audit →"
        primaryHref="/free-seo-audit/"
        variant="performance"
      />

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Securing Complete Signal Flow in the Cookieless Era</h2>
            <p>We rebuild the event path from first session to platform ingestion so reporting stays usable as cookies, browsers and privacy rules keep shifting.</p>
          </div>
          <div className="feature-grid three" data-reveal>
            {[...signalFlow, ...complianceSpecs].map(([title, desc, icon]) => (
              <div className="feature-card pattern-card" key={title}>
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
            <h2>Absolute Code-Level Ingestion Deliverables</h2>
            <p>Attribution work has to touch the implementation layer. These are the systems we configure before any media budget decision is trusted.</p>
          </div>
          <div className="feature-grid three" data-reveal>
            {deliverables.map(([title, desc, icon]) => (
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
            <h2>Dynamic Credit Allocation Across Modern Modeling Standards</h2>
            <p>Different attribution models answer different business questions. We choose the model by decision context, not by agency habit.</p>
          </div>
          <div className="intent-matrix sem-benchmark-table" data-reveal>
            <div className="intent-row intent-head" aria-hidden="true">
              <p>Attribution Protocols</p>
              <p>Operational Mechanics &amp; Tracking Gaps</p>
              <p>Maxlytics Tactical Deployment Scenario</p>
            </div>
            {attributionRows.map(([protocol, mechanics, scenario]) => (
              <div className="intent-row" key={protocol}>
                <code>{protocol}</code>
                <p>{mechanics}</p>
                <p>{scenario}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Moving From Event Conversions to Net Business Return</h2>
            <p>Conversion counts are only useful when they reconcile back to revenue quality, lifetime value and budget movement.</p>
          </div>
          <div className="feature-grid three" data-reveal>
            {roasSpecs.map(([title, desc, icon]) => (
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
            <h2>Accelerating Machine Learning with 13M+ Audience Signals</h2>
            <p>Raw first-party events become more useful when they are enriched, cleaned and sent back into bidding systems through controlled server-side loops.</p>
          </div>
          <div className="steps ecommerce-channel-steps">
            {dataLoop.map(([title, desc, icon], index) => (
              <div className="step" data-reveal key={title}>
                {index < dataLoop.length - 1 && <span className="line"></span>}
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
            <h2>Native Compliance Integration Protocols</h2>
            <p>We work directly inside the analytics and data warehouse stack so compliance, reporting and optimisation do not drift apart.</p>
          </div>
          <div className="seo-pills attribution-stack" data-reveal>
            {integrations.map((item) => (
              <span className="seo-pill" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <Faq
        items={faqItems}
        title="Frequently Asked Questions"
        subtitle="Answers for teams evaluating GA4, server-side GTM, CAPI and modern attribution models."
        id="analytics-attribution-faq"
      />

      <ViewMoreFeatures
        features={performanceViewMoreFeatures("analytics")}
        title="View More Features"
        description="Explore adjacent growth systems connected to analytics, paid media and AI search visibility."
      />
      <SiteEffects />
    </main>
  );
}
