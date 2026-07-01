import type { Metadata } from "next";
import Link from "next/link";
import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import ViewMoreFeatures from "@/components/sections/seo/ViewMoreFeatures";
import SiteEffects from "@/components/SiteEffects";
import CrossPlatformOrbit from "@/components/sections/performance/CrossPlatformOrbit";
import { performanceViewMoreFeatures } from "@/app/services/performanceFeatures";

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
    "/img/img-f128ba6125.svg",
  ],
  [
    "Paid Social Frameworks",
    "SOCIAL",
    "Campaign deployment across Meta, LinkedIn, TikTok, XHS and future high-signal platforms.",
    "/services/paid-social/",
    "/img/img-418fc6052a.svg",
  ],
  [
    "Video Performance Engineering",
    "VIDEO",
    "YouTube, Reels and Shorts creative built around measurable CPA instead of view counts.",
    "/services/video-performance/",
    "/icons/performance/video.svg",
  ],
  [
    "Privacy-First Tracking & Attribution",
    "ATTRIBUTION",
    "Server-side GTM, CAPI and cookieless measurement architecture for real ROAS visibility.",
    "/services/analytics-attribution/",
    "/img/img-e40f4add84.svg",
  ],
];

const funnel = [
  [
    "Demand Generation",
    "Upper Funnel",
    "Use YouTube Shorts, Reels, Demand Gen and platform-native discovery formats to create new audience demand and branded search lift.",
    "/icons/performance/demand-generation.svg",
  ],
  [
    "Lead Generation",
    "Lower Funnel",
    "Capture active buyers through paid search, LinkedIn Lead Forms, retargeting and lead scoring logic for higher-value accounts.",
    "/icons/performance/lead-generation.svg",
  ],
];

const allocationItems = [
  {
    title: "Google + Bing",
    desc: "Unified campaign governance, conversion mapping and budget pacing for high-intent search growth.",
    icons: ["/icons/platform-orbit-refined/google.svg", "/icons/platform-orbit-refined/bing.svg"],
  },
  {
    title: "Meta + TikTok",
    desc: "Creative signal loops and audience pacing that shift spend toward verified social demand.",
    icons: ["/icons/platform-orbit-refined/meta.svg", "/icons/platform-orbit-refined/tiktok.svg"],
  },
  {
    title: "Baidu Cross-Border",
    desc: "Mainland-facing allocation logic for Baidu demand, APAC routing and cross-border conversion paths.",
    icons: ["/icons/platform-orbit-refined/baidu.svg"],
  },
];

export default function PerformanceMarketingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoHeroShell
        breadcrumb="Performance Marketing"
        title={
          <>
            Stop Burning Budget. <em className="it">Start Scaling Revenue.</em>
          </>
        }
        description="Move past legacy agencies that only report impressions and vanity clicks. Maxlytics engineers full-funnel performance marketing campaigns powered by analytics, attribution and a proprietary 13M+ first-party data stack."
        primaryCta="Claim My Free Performance Audit →"
        primaryHref="/free-seo-audit/"
        variant="performance"
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
            {services.map(([title, _tag, desc, href, icon]) => (
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
          <div className="pm-data-stack" data-reveal>
            <div className="pm-data-visual" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/performance/local-profiles-platform.png" alt="" />
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
          <div className="pm-allocation-layout" data-reveal>
            <CrossPlatformOrbit />
            <div className="pm-allocation-list">
              {allocationItems.map(({ title, desc, icons }) => (
                <div className="pm-allocation-item" key={title}>
                  <span className="pm-allocation-icon" aria-hidden="true">
                    {icons.map((icon) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={icon} alt="" key={icon} />
                    ))}
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
            {funnel.map(([title, label, desc, icon]) => (
              <div className="funnel-card pattern-card" key={title}>
                <span className="feature-icon" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon} alt="" />
                </span>
                <span>{label}</span>
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
        subtitle="A few practical answers before you review your performance marketing stack."
        id="performance-marketing-faq"
      />

      <ViewMoreFeatures
        features={performanceViewMoreFeatures("performance")}
        title="View More Features"
        description="Explore the full Performance Marketing stack — each channel plugs into the same measurement and optimisation loop."
      />
      <SiteEffects />
    </main>
  );
}
