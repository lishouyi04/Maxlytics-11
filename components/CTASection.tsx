"use client";

import { useEffect, useRef, useState } from "react";

type FieldKey = "name" | "email" | "phone" | "company" | "title" | "message";

const FIELDS: { key: FieldKey; label: string; type: string; ph: string; req: boolean; ac: string }[] = [
  { key: "name", label: "Name", type: "text", ph: "e.g. Chris Wong", req: true, ac: "name" },
  { key: "email", label: "Email", type: "email", ph: "e.g. chris@company.com", req: true, ac: "email" },
  { key: "phone", label: "Phone", type: "tel", ph: "e.g. +852 9123 4567", req: true, ac: "tel" },
  { key: "company", label: "Company Name", type: "text", ph: "e.g. Acme Ltd.", req: false, ac: "organization" },
  { key: "title", label: "Job Title", type: "text", ph: "e.g. Marketing Director", req: false, ac: "organization-title" },
];

const REQUIRED: FieldKey[] = ["name", "email", "phone"];

function validate(key: FieldKey, raw: string): string {
  const v = raw.trim();
  if (REQUIRED.includes(key) && !v) return "This field is required.";
  if (key === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Enter a valid email address.";
  if (key === "phone" && v && !/^[+()\d][\d\s()+-]{5,}$/.test(v)) return "Enter a valid phone number.";
  return "";
}

const EMPTY: Record<FieldKey, string> = { name: "", email: "", phone: "", company: "", title: "", message: "" };

export default function CTASection() {
  const [done, setDone] = useState(false);
  const [values, setValues] = useState<Record<FieldKey, string>>({ ...EMPTY });
  const [touched, setTouched] = useState<Record<FieldKey, boolean>>({
    name: false, email: false, phone: false, company: false, title: false, message: false,
  });
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (done && doneRef.current) {
      try {
        doneRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {}
    }
  }, [done]);

  const setVal = (k: FieldKey) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((s) => ({ ...s, [k]: e.target.value }));
  const setTouch = (k: FieldKey) => () => setTouched((s) => ({ ...s, [k]: true }));

  const state = (k: FieldKey) => {
    const err = validate(k, values[k]);
    const show = touched[k];
    return { err, invalid: show && !!err, valid: show && !err && values[k].trim() !== "" };
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, company: true, title: true, message: true });
    if (REQUIRED.some((k) => validate(k, values[k]))) return;
    setDone(true);
  };

  return (
    <section className="section final" id="cta">
      <div className="orb orb-4 floaty"></div>
      <div className="container">
        <div className="contact">
          <div className="contact-left" data-reveal>
            <h2>
              Ready to take your business to the next level? <span className="it">Let’s talk!</span>
            </h2>
            <p className="lead">
              Unlock your brand’s growth potential today. Contact us to discuss your unique needs and goals.
            </p>
            <div className="cta-rule"></div>
            <div className="cta-contact">
              <p>
                Whatsapp: <a href="https://wa.me/85297632957">+852 9763 2957</a>
              </p>
              <p>
                Phone: <a className="plain" href="tel:+85237092787">+852 3709 2787</a>
              </p>
              <p>
                Email: <a href="mailto:info@maxlytics.io">info@maxlytics.io</a>
              </p>
            </div>
          </div>
          <div className="card contact-card" data-reveal>
            {!done ? (
              <form id="auditForm" noValidate onSubmit={onSubmit}>
                {FIELDS.map((f) => {
                  const st = state(f.key);
                  return (
                    <div key={f.key} className={"field" + (st.invalid ? " invalid" : st.valid ? " valid" : "")}>
                      <label htmlFor={f.key}>
                        {f.label} {f.req && <span className="req">*</span>}
                      </label>
                      <div className="field-control">
                        <input
                          id={f.key}
                          name={f.key}
                          type={f.type}
                          autoComplete={f.ac}
                          placeholder={f.ph}
                          value={values[f.key]}
                          onChange={setVal(f.key)}
                          onBlur={setTouch(f.key)}
                          aria-invalid={st.invalid || undefined}
                          aria-describedby={st.invalid ? f.key + "-err" : undefined}
                        />
                        <span className="field-mark" aria-hidden="true"></span>
                      </div>
                      {st.invalid && (
                        <p className="field-err" id={f.key + "-err"}>
                          {st.err}
                        </p>
                      )}
                    </div>
                  );
                })}
                <div className="field">
                  <label htmlFor="message">How can we help you?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your goals — or just say 'free audit'."
                    value={values.message}
                    onChange={setVal("message")}
                  />
                </div>
                <button type="submit" className="shiny-cta" style={{ width: "100%", WebkitAppearance: "none", appearance: "none" } as React.CSSProperties}>
                  <span>Submit →</span>
                </button>
              </form>
            ) : (
              <div className="form-done show" id="formDone" role="status" aria-live="polite" ref={doneRef}>
                <span className="fd-check" aria-hidden="true">
                  <svg viewBox="0 0 52 52">
                    <path className="fd-k" d="M14 27 l8 8 l16 -18" />
                  </svg>
                </span>
                <h3 className="fd-title">Application submitted!</h3>
                <p className="fd-sub">Thanks for your application — We will get in touch with you by email as soon as possible.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
