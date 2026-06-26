import type { Metadata } from "next";
import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";
import Faq, { type FaqItem } from "@/components/sections/Faq";
import SiteEffects from "@/components/SiteEffects";
import Radar from "@/components/shaders/Radar";

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
  ["Technical SEO Audit", "Crawlability, broken redirects, mobile performance and loading dead-zone checks.", "/icons/audit/technical-audit-fix.svg"],
  ["Content Intent Audit", "Semantic gaps, keyword cannibalisation and bilingual HK intent alignment.", "/icons/audit/intent-recognition.svg"],
  ["Backlink Authority Audit", "Domain trust velocity, toxic link screening and local directory coverage.", "/icons/audit/link-authority.svg"],
  ["AI Visibility Audit", "Recommendation-rank checks across ChatGPT, Perplexity, Gemini and Google AI Overviews.", "/icons/audit/ai-visibility.svg"],
];

const metrics = [
  ["Core Web Vitals", "Rendering speed and interaction responsiveness signals.", "/img/img-3fc2d1ec65.svg"],
  ["SSL Integrity", "Security certificate validation and trust readiness.", "/img/img-407b39ac68.svg"],
  ["XML Sitemap", "Crawl path structure for search discovery.", "/img/img-770343fefa.svg"],
  ["Schema Coverage", "Rich-result and schema nesting eligibility.", "/img/img-501176ce6c.svg"],
  ["Mobile Response", "Viewport and device rendering parity.", "/img/img-39cf66c0da.svg"],
];

const reportItems = [
  ["Technical Health Score Board", "Crawl maps that show link breakages and rendering issues.", "/icons/audit/technical-audit-fix.svg"],
  ["AI Overviews Coverage Heatmap", "Where your brand is cited, ignored or displaced in AI search answers.", "/icons/audit/ai-visibility.svg"],
  ["Bilingual Content Gap Framework", "English and Traditional Chinese keyword gaps mapped against competitors.", "/icons/audit/intent-recognition.svg"],
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
          <div className="radar-block" data-reveal>
            <Radar />
            <div className="radar-grid">
              {pillars.map(([title, desc, icon], index) => (
                <div className={`quad ${["tl", "tr", "bl", "br"][index]}`} key={title}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="q-ic" src={icon} alt="" />
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="radar-center" src="/img/img-19094d41ed.png" alt="Maxlytics" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Instant Core Analytics</h2>
            <p>See how search crawlers interpret your basic digital infrastructure before the full report is prepared.</p>
          </div>
          <div className="steps">
            {metrics.map(([title, desc, icon], index) => (
              <div className="step" data-reveal key={title}>
                {index < metrics.length - 1 && <span className="line"></span>}
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
            <h2>Inside Your Final Audit Deliverable</h2>
          </div>
          <div className="report-strip" data-reveal>
            {reportItems.map(([title, desc, icon]) => (
              <div className="report-card" key={title}>
                <span className="feature-icon report-icon" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon} alt="" />
                </span>
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

      <SiteEffects />
    </main>
  );
}
