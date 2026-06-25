import type { Metadata } from "next";
import SeoHero from "@/components/sections/SeoHero";
import SeoCaseStudies from "@/components/sections/seo/CaseStudies";
import SeoCrossBorder from "@/components/sections/seo/CrossBorder";
import SeoGeo from "@/components/sections/seo/Geo";
import SeoMethodology from "@/components/sections/seo/Methodology";
import SeoMarketData from "@/components/sections/seo/MarketData";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import ViewMoreFeatures from "@/components/sections/seo/ViewMoreFeatures";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: "SEO Agency Hong Kong",
  description:
    "Maxlytics is a data-first SEO agency in Hong Kong. Technical, local, e-commerce and AI SEO (GEO), plus Google + Baidu cross-border growth — engineered for verifiable rankings and ROI.",
  keywords: ["SEO Agency Hong Kong", "SEO Company Hong Kong", "SEO Services Hong Kong"],
  alternates: { canonical: "/services/seo" },
  openGraph: {
    type: "website",
    url: "/services/seo",
    title: "SEO Agency Hong Kong | Maxlytics",
    description:
      "Data-first SEO in Hong Kong — technical, local, e-commerce and AI SEO (GEO), plus Google + Baidu cross-border growth.",
  },
};

const SEO_FAQS: FaqItem[] = [
  {
    q: "How long does it take to see measurable SEO results in Hong Kong?",
    a: "While technical and indexation updates can show positive data curves within weeks, a structured, intent-driven content strategy typically yields compound organic revenue ROI within 3 to 6 months.",
  },
  {
    q: "Is Maxlytics SEO compatible with custom Shopify or SHOPLINE frameworks?",
    a: "Absolutely. We implement platform-specific codebase protocols optimised for Shopify and SHOPLINE to manage layered faceted navigation, canonical variants, and semantic schema nesting correctly.",
  },
  {
    q: "Can you help Hong Kong businesses target mainland China via Baidu?",
    a: "Yes, cross-border deployment is our specialised sector. We resolve latency via regional APAC CDNs, handle mainland indexing barriers, and optimise double-engine setups seamlessly.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "SEO Services",
      serviceType: "Search Engine Optimization",
      provider: { "@type": "Organization", name: "Maxlytics", url: "https://www.maxlytics.io" },
      areaServed: { "@type": "Place", name: "Hong Kong" },
      url: "https://www.maxlytics.io/services/seo",
      description:
        "Data-first SEO in Hong Kong: technical, local, e-commerce and AI SEO (GEO), plus Google + Baidu cross-border growth.",
    },
    {
      "@type": "FAQPage",
      mainEntity: SEO_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.maxlytics.io/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.maxlytics.io/services" },
        { "@type": "ListItem", position: 3, name: "SEO", item: "https://www.maxlytics.io/services/seo" },
      ],
    },
  ],
};

export default function SeoPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoHero />
      <SeoMarketData />
      <SeoCaseStudies />
      <SeoCrossBorder />
      <SeoGeo />
      <SeoMethodology />
      <Faq items={SEO_FAQS} id="seo-faq" subtitle="" />
      <ViewMoreFeatures />
      <SiteEffects />
    </main>
  );
}
