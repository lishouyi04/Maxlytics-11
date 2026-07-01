import type { Metadata } from "next";
import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import ViewMoreFeatures from "@/components/sections/seo/ViewMoreFeatures";
import SiteEffects from "@/components/SiteEffects";
import { performanceViewMoreFeatures } from "@/app/services/performanceFeatures";

export const metadata: Metadata = {
  title: "Video Advertising Agency Hong Kong",
  description:
    "Maxlytics builds performance-first video advertising systems for Hong Kong brands across YouTube, TikTok, Meta Reels and localized video placements.",
  keywords: ["video advertising hong kong", "youtube ads", "video advertising agency", "video performance marketing"],
  alternates: { canonical: "/services/video-performance" },
};

const faqItems: FaqItem[] = [
  {
    q: "How much does a YouTube ad campaign cost in Hong Kong?",
    a: "Costs vary by audience density, vertical competition and conversion goal. We focus beyond view cost, using retention, click quality and downstream CPA to decide whether a video campaign is actually efficient.",
  },
  {
    q: "Why choose a performance agency instead of a video production house?",
    a: "Production houses often optimize for cinematic quality and brand polish. Maxlytics builds video assets around hook rate, retention, testing velocity and measurable acquisition performance.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Video Performance Hong Kong",
      serviceType: "Video Advertising",
      provider: { "@type": "Organization", name: "Maxlytics", url: "https://www.maxlytics.io" },
      areaServed: { "@type": "Place", name: "Hong Kong" },
      url: "https://www.maxlytics.io/services/video-performance",
      description:
        "Performance-first video advertising across YouTube, TikTok, Meta Reels and localized placements, including creative testing, retention engineering and conversion tracking.",
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
  ["Optimized CPV", "Target cost-per-view tracking parameters tailored to local industry sectors and audience density."],
  ["Stable CPM", "Predictable cost-per-thousand impression benchmarks across active short-form video ad units."],
  ["-38% CPA", "Acquisition cost reduction target shaped by conversion-centric creative frameworks and cleaner testing loops."],
];

const platforms = [
  ["YouTube Ecosystem", "Search placements, skippable in-stream and Shorts campaigns built around high-intent video discovery.", "/icons/performance/youtube.svg"],
  ["Short-Form Networks", "TikTok and Meta Reels creative engineered for vertical-first consumption and native UI fit.", "/icons/platforms/tiktok.svg"],
  ["Localized Messengers", "WhatsApp-first local video placements and regional feed formats for high-activity transactional users.", "/icons/performance/whatsapp.svg"],
];

const production = [
  ["Briefing & Script Alignment", "Translate acquisition goals into focused messaging maps and measurable creative hypotheses.", "/icons/method/content.svg"],
  ["In-House Shooting & Control", "Control pacing, visual density and asset modularity so production supports performance testing.", "/icons/performance/video.svg"],
  ["Acquisition Editing Metrics", "Structure hook rate, retention loops and explicit CTA framing into each asset variation.", "/icons/audit/intent-recognition.svg"],
  ["Automated Creative A/B Testing", "Deploy variants across live ad structures and cut low-performing angles quickly.", "/icons/method/monitoring.svg"],
];

const scaling = [
  ["AI Video Generation Matrix", "Prototype large creative variation sets that feed platform learning without slowing production.", "/icons/ai/thinking.svg"],
  ["Dynamic Creative Optimization", "Match specific video variants to audience signals and placement-level performance patterns.", "/icons/method/architecture.svg"],
  ["Multi-Lingual Auto-Dubbing", "Scale localized voiceover and subtitle variants for cross-border markets.", "/icons/method/content.svg"],
];

const performanceRows = [
  [
    "Hook Rate Engineering",
    "Brand videos open slowly and lose scroll attention before the value proposition appears.",
    "First 3 seconds are structured to interrupt scroll behaviour and establish immediate buyer relevance.",
  ],
  [
    "Audience Retention Loops",
    "Creative pacing drops after the opening shot and weakens platform delivery signals.",
    "Narrative acceleration markers keep viewers engaged long enough for the algorithm to learn from intent.",
  ],
  [
    "CTA Framing",
    "End cards and calls-to-action are vague, cinematic or detached from the funnel.",
    "Mid-roll and end-card CTA layers route viewers into lead capture or conversion paths.",
  ],
];

export default function VideoPerformancePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoHeroShell
        breadcrumb="Performance Marketing / Video Performance"
        title={
          <>
            Video Advertising Agency in <em className="it">Hong Kong</em>
          </>
        }
        description="Stop spending budget on vanity branding videos with zero tracking accountability. Maxlytics engineers performance-first video assets calibrated to hook high-intent buyers, decrease CPA and optimize cross-platform conversions."
        primaryCta="Claim My Free Video Performance Audit →"
        primaryHref="/free-seo-audit/"
        variant="performance"
      />

      <section className="section mkt" id="video-benchmarks">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Real-Time Hong Kong Digital Video Cost Benchmarks</h2>
            <p>Video performance starts with cost reality. We benchmark CPV, CPM and CPA expectations before deciding which formats deserve budget.</p>
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
            <h2>Multi-Channel Asset Configuration. Precision Variant Targeting.</h2>
            <p>Video placements behave differently across YouTube, TikTok, Meta Reels and localized messenger environments. We design each asset for the format it will actually run in.</p>
          </div>
          <div className="feature-grid three" data-reveal>
            {platforms.map(([title, desc, icon]) => (
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
            <h2>The In-House Production Funnel: Built for Acquisition</h2>
            <p>Creative production and media buying cannot be separated when the goal is conversion. We build assets with testing and funnel routing in mind from the script stage.</p>
          </div>
          <div className="steps ecommerce-playbook-steps">
            {production.map(([title, desc, icon], index) => (
              <div className="step" data-reveal key={title}>
                {index < production.length - 1 && <span className="line"></span>}
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
            <h2>Hook Rate, Retention &amp; CTA Engineering</h2>
            <p>Performance video is measured by behavioural triggers, not just visual polish. We tune the parts of the asset that change platform delivery and conversion quality.</p>
          </div>
          <div className="intent-matrix video-performance-table" data-reveal>
            <div className="intent-row intent-head" aria-hidden="true">
              <p>Creative Lever</p>
              <p>Common Production Gap</p>
              <p>Maxlytics Performance Fix</p>
            </div>
            {performanceRows.map(([lever, gap, fix]) => (
              <div className="intent-row" key={lever}>
                <code>{lever}</code>
                <p>{gap}</p>
                <p>{fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Algorithmic Scaling. Cross-Border Content Prototyping.</h2>
            <p>Once the winning pattern is clear, we use automation to expand creative variants, language versions and market-specific formats faster than manual production alone.</p>
          </div>
          <div className="feature-grid three" data-reveal>
            {scaling.map(([title, desc, icon]) => (
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
        subtitle="Answers for teams evaluating YouTube ads, short-form video and performance-first creative production."
        id="video-performance-faq"
      />

      <ViewMoreFeatures
        features={performanceViewMoreFeatures("video")}
        title="View More Features"
        description="Explore adjacent paid media and AI search systems."
      />
      <SiteEffects />
    </main>
  );
}
