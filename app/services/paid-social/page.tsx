import type { Metadata } from "next";
import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import ViewMoreFeatures from "@/components/sections/seo/ViewMoreFeatures";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: "Paid Social Advertising Hong Kong",
  description:
    "Maxlytics builds paid social advertising systems across Meta, Instagram, LinkedIn, TikTok, Xiaohongshu and LINE for Hong Kong and cross-border growth.",
  keywords: ["facebook ads hong kong", "facebook advertising hong kong", "facebook ads agency hong kong", "paid social", "instagram ads hong kong"],
  alternates: { canonical: "/services/paid-social" },
};

const faqItems: FaqItem[] = [
  {
    q: "Why are Meta Ads Manager purchase numbers often higher than GA4?",
    a: "Meta and GA4 use different attribution models. Meta can claim view-through and multi-day click-through influence, while standard GA4 often emphasizes last-click behaviour. We reduce the gap with server-side tracking, cleaner event design and attribution governance.",
  },
  {
    q: "Is first-party DMP audience mapping compliant with local privacy frameworks?",
    a: "Audience activation should rely on permissioned, de-identified and hashed identifiers. Maxlytics structures social audience workflows around privacy-first matching and compliant data handling rather than raw personal data exposure.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Paid Social Advertising Hong Kong",
      serviceType: "Paid Social Advertising",
      provider: { "@type": "Organization", name: "Maxlytics", url: "https://www.maxlytics.io" },
      areaServed: { "@type": "Place", name: "Hong Kong" },
      url: "https://www.maxlytics.io/services/paid-social",
      description:
        "Paid social advertising across Meta, Instagram, LinkedIn, TikTok, Xiaohongshu and LINE, supported by first-party audience signals, server-side tracking and DCO.",
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

const platforms = [
  ["Meta Ecosystem", "Facebook and Instagram conversion tracking, lookalikes and Advantage+ shopping frameworks for B2C scale.", "/icons/platforms/meta.svg"],
  ["LinkedIn B2B Advertising", "Decision-maker targeting, seniority layers and native lead forms for high-value professional audiences.", "/img/img-418fc6052a.svg"],
  ["TikTok Performance Networks", "Native short-form hooks and fast creative testing for youth, lifestyle and trend-led demand.", "/icons/platforms/tiktok.svg"],
  ["Xiaohongshu & Emerging Channels", "Lifestyle and cross-border discovery paths for premium mainland-facing consumer intent.", "/icons/platforms/xiaohongshu.svg"],
  ["LINE Local Ads", "Localized messaging loops and direct-response paths for friction-light communication and conversion.", "/icons/method/monitoring.svg"],
];

const benchmarkRows = [
  ["FinTech & Financial Capital", "HKD 6.20 - 14.50", "HKD 4.10 - 9.80", "Optimized lead lock target"],
  ["E-commerce & Global Retail", "HKD 1.80 - 4.50", "HKD 0.90 - 2.80", "Scaled direct order value"],
  ["Medical & Premium Healthcare", "HKD 4.50 - 11.20", "HKD 3.20 - 7.50", "Appointment conversion cost"],
  ["High-Ticket B2B Services", "HKD 8.50 - 22.00", "HKD 5.40 - 14.00", "Verified corporate pipeline"],
];

const audienceLoop = [
  ["Raw Platform Clicks", "Standard broad-feed signals are captured from campaign traffic and on-site events.", "/icons/audit/intent-recognition.svg"],
  ["13M+ DMP Overlay", "Compliant local audience patterns enrich cold platform data with better persona and purchase-context signals.", "/icons/platforms/orbit-center.svg"],
  ["Custom Match Loaded", "Meta, TikTok and LinkedIn optimization systems receive cleaner custom audience direction.", "/icons/method/authority.svg"],
];

const expansion = [
  ["HK Foundation", "Local campaign structure, creative language and conversion tracking are stabilized first.", "/icons/local-seo/commercial.svg"],
  ["TW / SEA Expansion", "Creative formats, messaging and bidding are localized for each regional audience environment.", "/icons/platforms/tiktok.svg"],
  ["Mainland China Path", "XHS and mainland-facing discovery loops are coordinated with cross-border attribution planning.", "/icons/platforms/xiaohongshu.svg"],
];

const technicalStack = [
  ["Dynamic Creative Optimization", "Generate, test and retire creative variants based on intent, audience and placement performance.", "/icons/method/content.svg"],
  ["Conversions API Integration", "Preserve conversion signals through server-to-server tracking and cleaner event deduplication.", "/icons/method/architecture.svg"],
  ["Advantage+ Catalog Feeds", "Structure product feeds, variants and currency layers for accurate dynamic retargeting.", "/icons/seo/ecommerce-seo.svg"],
  ["Server-Side Token Processing", "Process hashed event identifiers through privacy-first infrastructure for more reliable attribution.", "/icons/method/monitoring.svg"],
];

const paidSocialViewMoreFeatures = [
  { title: "LinkedIn Ads", href: "/services/paid-social/linkedin-ads/", desc: "Corporate target matching, seniority layers and B2B lead-generation setup.", icon: "/img/img-418fc6052a.svg" },
  { title: "SEM", href: "/services/sem/", desc: "Multi-engine paid keyword intent across Google, Bing, Baidu and conquesting.", icon: "/img/img-f128ba6125.svg" },
  { title: "AI SEO", href: "/services/ai-seo/", desc: "Secure citation visibility across ChatGPT, Perplexity and Google AI surfaces.", icon: "/icons/ai/openai.svg" },
];

export default function PaidSocialPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoHeroShell
        breadcrumb="Performance Marketing / Paid Social"
        title={
          <>
            Paid Social Advertising in <em className="it">Hong Kong</em>
          </>
        }
        description="Stop relying on broad legacy interest groups that drain budget. Maxlytics builds hyper-targeted paid social funnels, injecting first-party audience signals and clean tracking loops into social algorithms to convert traffic feeds into predictable revenue."
        primaryCta="Get My Free Paid Social Audit →"
        primaryHref="/free-seo-audit/"
        variant="performance"
      />

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Multi-Channel Execution. Scalable Social Footprints.</h2>
            <p>Each paid social platform has a different job. We map creative, tracking and audience logic to the network where your buyers actually spend attention.</p>
          </div>
          <div className="feature-grid paid-social-platform-grid" data-reveal>
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
            <h2>Local Cost Benchmarks: Meta vs. TikTok Cost Realities</h2>
            <p>Paid social benchmarks give budget planning a floor. We use them to pressure-test channel fit before scaling creative or audience spend.</p>
          </div>
          <div className="intent-matrix paid-social-benchmark-table" data-reveal>
            <div className="intent-row intent-head" aria-hidden="true">
              <p>Industry</p>
              <p>Meta CPC Range</p>
              <p>TikTok CPC / CPL Target</p>
            </div>
            {benchmarkRows.map(([industry, meta, tiktok, cpl]) => (
              <div className="intent-row" key={industry}>
                <code>{industry}</code>
                <code>{meta}</code>
                <p><strong>{tiktok}</strong><br />{cpl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Weaponizing 13M+ Local Profiles for Algorithmic Targeting</h2>
            <p>Platform-native targeting is weaker in a privacy-first environment. We improve optimization quality by feeding social algorithms cleaner, compliant audience direction.</p>
          </div>
          <div className="steps ecommerce-channel-steps">
            {audienceLoop.map(([title, desc, icon], index) => (
              <div className="step" data-reveal key={title}>
                {index < audienceLoop.length - 1 && <span className="line"></span>}
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
            <h2>Borderless Social Scale: HK → TW / SEA / Mainland China</h2>
            <p>Cross-border social growth needs localized creative, regional platform rules and attribution planning that can survive market expansion.</p>
          </div>
          <div className="feature-grid three" data-reveal>
            {expansion.map(([title, desc, icon]) => (
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
            <h2>DCO, Pixel Integrity &amp; Server-Side Tracking</h2>
            <p>Creative scale means little without clean events. We connect asset testing, catalog logic and server-side tracking into one paid social operating layer.</p>
          </div>
          <div className="feature-grid four" data-reveal>
            {technicalStack.map(([title, desc, icon]) => (
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
        subtitle="Answers for teams evaluating paid social, CAPI tracking and first-party audience activation."
        id="paid-social-faq"
      />

      <ViewMoreFeatures
        features={paidSocialViewMoreFeatures}
        title="View More Features"
        description="Explore adjacent paid media and AI search systems."
      />
      <SiteEffects />
    </main>
  );
}
