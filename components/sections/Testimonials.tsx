import { TESTIMONIALS, type Testimonial } from "@/lib/testimonials";

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="tcard">
      <div className="q">{`\u201c${t.q}\u201d`}</div>
      <div className="who">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="av" src={t.img} alt={t.n} width={42} height={42} loading="lazy" />
        <div>
          <div className="nm">{t.n}</div>
          <div className="ro">{t.r}</div>
        </div>
      </div>
    </div>
  );
}

const COLS: { cls: string; dur: string; items: Testimonial[] }[] = [
  { cls: "tcol1", dur: "19s", items: TESTIMONIALS.slice(0, 3) },
  { cls: "tcol2", dur: "24s", items: TESTIMONIALS.slice(3, 6) },
  { cls: "tcol3", dur: "21s", items: TESTIMONIALS.slice(6, 9) },
];

export default function Testimonials() {
  return (
    <section className="section" id="cases">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>What our clients say</h2>
          <p>Hong Kong brands on what changed after switching to Maxlytics.</p>
        </div>
        <div className="tcols" id="tcols">
          {COLS.map((col) => (
            <div key={col.cls} className={`tcol ${col.cls}`} style={{ "--dur": col.dur } as React.CSSProperties}>
              {/* duplicated set for a seamless marquee loop */}
              {[...col.items, ...col.items].map((t, i) => (
                <Card key={i} t={t} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
