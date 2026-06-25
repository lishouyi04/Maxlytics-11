"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

// Default (homepage) FAQ copy — placeholder, replace with final approved content.
const DEFAULT_FAQS: FaqItem[] = [
  {
    q: "How soon will we see results?",
    a: "Paid channels usually show signal within the first 2–4 weeks as we gather data and optimise, while SEO and organic growth compound over 3–6 months. We map out a clear timeline for you during the free audit.",
  },
  {
    q: "What does reporting look like?",
    a: "You get a live dashboard plus a plain-English monthly review tied to revenue and ROAS — no vanity metrics, just what each dollar of spend returned.",
  },
  {
    q: "Which channels and platforms do you manage?",
    a: "Google, Meta, TikTok and Baidu for paid media, plus SEO, AI/GEO and content. We run a single cross-channel model so budget follows real return.",
  },
  {
    q: "Is there a minimum contract or ad spend?",
    a: "We work with a range of budgets and keep terms flexible. Tell us your goals in the form below and we'll recommend the right starting point.",
  },
];

export default function Faq({
  items = DEFAULT_FAQS,
  title = "Frequently asked questions",
  subtitle = "Quick answers before you reach out.",
  id = "faq",
}: {
  items?: FaqItem[];
  title?: string;
  subtitle?: string;
  id?: string;
}) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section className="section faq" id={id}>
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="faq-list" data-reveal>
          {items.map((f, i) => {
            const isOpen = open.has(i);
            return (
              <div key={i} className={"faq-item" + (isOpen ? " open" : "")}>
                <button type="button" className="faq-q" aria-expanded={isOpen} onClick={() => toggle(i)}>
                  <span>{f.q}</span>
                  <span className="faq-ic" aria-hidden="true"></span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{f.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
