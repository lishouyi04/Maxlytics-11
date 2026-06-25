import type { Metadata } from "next";
import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import ViewMoreFeatures from "@/components/sections/seo/ViewMoreFeatures";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: "Free SEO Audit Hong Kong",
  description:
    "Run a free AI SEO audit for your Hong Kong website. Check technical SEO, content intent, backlink authority and AI visibility across modern search surfaces.",
  keywords: ["Free SEO Audit Hong Kong", "SEO Audit HK", "Free AI SEO Audit"],
  alternates: { canonical: "/free-seo-audit" },
};

const faqItems: FaqItem[] = [
  {
    q: "Can ChatGPT perform a comprehensive SEO audit for my business?",
    a: "ChatGPT can help with content and schema ideas, but it cannot replace live crawl diagnostics, backlink health checks, server-side rendering analysis or search visibility measurement across real platforms.",
  },
  {
    q: "Is this audit completely free, or are there hidden subscription lock-ins?",
    a: "The audit is complimentary and does not require a credit card. It is designed to show where your current organic and AI search visibility may be leaking performance.",
  },
  {
    q: "How long does it take for my full diagnostic report to arrive?",
    a: "Baseline signals are collected immediately. A deeper diagnostic summary can then be prepared and sent to your corporate inbox after review.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Free SEO Audit Hong Kong",
      url: "https://www.maxlytics.io/free-seo-audit",
      description:
        "Free SEO audit for Hong Kong websites covering technical SEO, content intent, backlink authority and AI visibility.",
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

const pillars = [
  ["Technical SEO Audit", "Crawlability, broken redirects, mobile performance and loading dead-zone checks."],
  ["Content Intent Audit", "Semantic gaps, keyword cannibalisation and bilingual HK intent alignment."],
  ["Backlink Authority Audit", "Domain trust velocity, toxic link screening and local directory coverage."],
  ["AI Visibility Audit", "Recommendation-rank checks across ChatGPT, Perplexity, Gemini and Google AI Overviews."],
];

const metrics = [
  ["Core Web Vitals Status", "Rendering speed and interaction responsiveness signals."],
  ["SSL & Encryption Integrity", "Security certificate validation and trust readiness."],
  ["XML Sitemap Readiness", "Crawl path structure for search discovery."],
  ["Structured Data Coverage", "Rich-result and schema nesting eligibility."],
  ["Mobile Response Configuration", "Viewport and device rendering parity."],
];

const reportItems = [
  ["Technical Health Score Board", "Crawl maps that show link breakages and rendering issues."],
  ["AI Overviews Coverage Heatmap", "Where your brand is cited, ignored or displaced in AI search answers."],
  ["Bilingual Content Gap Framework", "English and Traditional Chinese keyword gaps mapped against competitors."],
];

export default function FreeSeoAuditPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoHeroShell
        title={
          <>
            Your SEO Is Losing Traffic to AI. <em className="it">Run a 5-Minute Diagnostic.</em>
          </>
        }
        description="Stop guessing why competitors outrank you. Run a multi-dimensional audit across traditional search algorithms and modern generative AI visibility models, tailored to Hong Kong."
        primaryCta="Generate My 5-Minute AI SEO Audit →"
        primaryHref="#audit-pillars"
      />

      <section className="section" id="audit-pillars">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>4 Core Dimensions of Our Deep-Dive Audit</h2>
          </div>
          <div className="feature-grid four" data-reveal>
            {pillars.map(([title, desc], index) => (
              <div className={"feature-card" + (index === 3 ? " featured-card" : "")} key={title}>
                <span className="card-kicker">0{index + 1}</span>
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
            <h2>Instant Core Analytics</h2>
            <p>See how search crawlers interpret your basic digital infrastructure before the full report is prepared.</p>
          </div>
          <div className="terminal-grid" data-reveal>
            {metrics.map(([title, desc], index) => (
              <div className="terminal-metric" key={title}>
                <span>Metric 0{index + 1}</span>
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
            <h2>Inside Your Final Audit Deliverable</h2>
          </div>
          <div className="report-strip" data-reveal>
            {reportItems.map(([title, desc]) => (
              <div className="report-card" key={title}>
                <div className="report-window" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faqItems} title="Frequently Asked Questions" subtitle="" id="free-audit-faq" />

      <ViewMoreFeatures />
      <SiteEffects />
    </main>
  );
}
