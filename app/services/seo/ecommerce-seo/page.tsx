import type { Metadata } from "next";
import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import ViewMoreFeatures from "@/components/sections/seo/ViewMoreFeatures";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: "E-commerce SEO Hong Kong",
  description:
    "Maxlytics builds ecommerce SEO systems for Shopify, SHOPLINE and custom storefronts in Hong Kong, covering faceted navigation, product schema, Core Web Vitals and cross-border search demand.",
  keywords: ["ecommerce seo hong kong", "e commerce seo hong kong", "shopify seo hong kong"],
  alternates: { canonical: "/services/seo/ecommerce-seo" },
};

const faqItems: FaqItem[] = [
  {
    q: "Will implementing structured schemas or platform overrides slow down our site speed?",
    a: "No. Our implementation removes redundant app code, keeps schema execution clean and prioritises server-side data where possible, so Core Web Vitals and crawl clarity improve together.",
  },
  {
    q: "How does Maxlytics handle multi-currency product variants across target regions?",
    a: "We structure hreflang, canonical rules and nested product schema around localized product directories, so crawlers can match the correct page to the shopper's region, language and currency intent.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "E-commerce SEO Hong Kong",
      serviceType: "E-commerce Search Engine Optimization",
      provider: { "@type": "Organization", name: "Maxlytics", url: "https://www.maxlytics.io" },
      areaServed: { "@type": "Place", name: "Hong Kong" },
      url: "https://www.maxlytics.io/services/seo/ecommerce-seo",
      description:
        "E-commerce SEO for Shopify, SHOPLINE and custom storefronts, including faceted navigation, product schema, site speed and cross-border search architecture.",
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

const platformRows = [
  [
    "Shopify Engine",
    "Nested collection tags, duplicated filter URLs and app-generated index bloat.",
    "Canonical mapping, robots controls and product/category templates that preserve clean commercial URLs.",
  ],
  [
    "SHOPLINE Engine",
    "Layered filter paths, multi-currency tracking fragments and duplicate crawl routes.",
    "JSON-LD schema nesting, URL parameter exclusions and transaction-ready category isolation.",
  ],
  [
    "Custom / Headless",
    "Client-side rendering gaps that leave key product data invisible to crawlers.",
    "SSR pipelines, localized APAC CDN configuration and structured data rendered at crawl time.",
  ],
];

const playbooks = [
  ["Faceted Navigation Architecture", "Control size, colour, price and filter URLs with canonical rules that protect crawl budget.", "/img/img-3fc2d1ec65.svg"],
  ["Product Variant Semantic Nesting", "Expose real inventory, pricing and variant attributes through clean product schema.", "/img/img-407b39ac68.svg"],
  ["Evergreen Out-of-Stock Redirects", "Route expired seasonal products into relevant evergreen categories without wasting authority.", "/img/img-770343fefa.svg"],
  ["Dynamic Image Payload Fixes", "Compress product imagery, ship WebP variants and attach semantic alt text for visual discovery.", "/img/img-501176ce6c.svg"],
];

const crossBorder = [
  ["Google HK", "Category and product architecture aligned to bilingual commercial demand in Hong Kong.", "/icons/platforms/google.svg"],
  ["Baidu", "Mainland-facing technical rules, indexing hygiene and APAC latency planning.", "/icons/platforms/baidu.svg"],
  ["Xiaohongshu", "Search trend signals that inform product naming, comparison content and social discovery paths.", "/icons/platforms/xiaohongshu.svg"],
];

const ecommerceViewMoreFeatures = [
  { title: "SEO", href: "/services/seo/", desc: "Return to the complete Maxlytics SEO stack: technical, local, ecommerce, AI search and cross-border growth.", icon: "/icons/local-seo/seo.svg" },
  { title: "Local SEO", href: "/services/seo/local-seo/", desc: "Map visibility, bilingual local intent and Google Business Profile architecture for Hong Kong.", icon: "/icons/seo/local-seo.svg" },
  { title: "Technical SEO", href: "/services/seo/technical-seo/", desc: "Crawlability, Core Web Vitals, indexation and render-path engineering.", icon: "/icons/seo/technical-seo.svg" },
];

export default function EcommerceSeoPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoHeroShell
        breadcrumb="SEO / E-commerce SEO"
        title={
          <>
            Stop Ranking for Traffic. Start Ranking for <em className="it">Transactions.</em>
          </>
        }
        description="Ranking means nothing if your checkout cart remains empty. Maxlytics builds organic search funnels across Shopify, SHOPLINE and custom storefronts, removing structural bloat so cold search demand turns into e-commerce revenue."
        primaryCta="Audit My E-commerce Store Free →"
        primaryHref="/free-seo-audit/"
      />

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Platform-Specific Architecture. Zero Template Limitations.</h2>
            <p>Every storefront platform creates different SEO constraints. We tune the crawl path, canonical logic and schema layer around the engine your revenue depends on.</p>
          </div>
          <div className="intent-matrix ecommerce-platform-table" data-reveal>
            <div className="intent-row intent-head" aria-hidden="true">
              <p>CMS Framework</p>
              <p>Native Platform Bottleneck</p>
              <p>Maxlytics Injection Playbook</p>
            </div>
            {platformRows.map(([platform, bottleneck, playbook]) => (
              <div className="intent-row" key={platform}>
                <code>{platform}</code>
                <p>{bottleneck}</p>
                <p>{playbook}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Eliminating the Hidden Infrastructure Cracks in Retail SEO</h2>
            <p>High-volume e-commerce SEO is a technical system: crawl rules, variant logic, product data and payload performance all have to move together.</p>
          </div>
          <div className="steps ecommerce-playbook-steps">
            {playbooks.map(([title, desc, icon], index) => (
              <div className="step" data-reveal key={title}>
                {index < playbooks.length - 1 && <span className="line"></span>}
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
            <h2>Multi-Channel Cross-Border Revenue Capture</h2>
            <p>We connect Google HK, Baidu and Xiaohongshu into one cross-border SEO framework, so product demand can be captured across local, international and mainland search behaviour.</p>
          </div>
          <div className="steps ecommerce-channel-steps">
            {crossBorder.map(([title, desc, icon], index) => (
              <div className="step" data-reveal key={title}>
                {index < crossBorder.length - 1 && <span className="line"></span>}
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
        subtitle="Practical answers for Shopify, SHOPLINE and custom storefront teams planning technical e-commerce SEO."
        id="ecommerce-seo-faq"
      />

      <ViewMoreFeatures features={ecommerceViewMoreFeatures} />
      <SiteEffects />
    </main>
  );
}
