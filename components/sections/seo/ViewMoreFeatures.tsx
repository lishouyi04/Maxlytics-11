import Link from "next/link";

type Feature = { title: string; href: string; desc: string; icon: string };

const FEATURES: Feature[] = [
  { title: "Local SEO", href: "/services/seo/local-seo/", desc: "Win map pack and local-intent searches across the Hong Kong market.", icon: "/icons/seo/local-seo.svg" },
  { title: "E-commerce SEO", href: "/services/seo/ecommerce-seo/", desc: "Faceted navigation, product schema and category architecture for Shopify & SHOPLINE.", icon: "/icons/seo/ecommerce-seo.svg" },
  { title: "Technical SEO", href: "/services/seo/technical-seo/", desc: "Crawlability, Core Web Vitals, indexation and render-path engineering.", icon: "/icons/seo/technical-seo.svg" },
];

export default function ViewMoreFeatures({ features = FEATURES }: { features?: Feature[] }) {
  return (
    <section className="section more-features" id="more-features">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>View More Features</h2>
          <p>Explore the full Maxlytics SEO stack — every service is engineered around the same data foundation.</p>
        </div>
        <div className="vmf-grid" data-reveal>
          {features.map((f) => (
            <Link key={f.title} href={f.href} className="vmf-card">
              <span className="vmf-ic" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.icon} alt="" width={28} height={28} />
              </span>
              <span className="vmf-body">
                <span className="vmf-title">{f.title}</span>
                <span className="vmf-desc">{f.desc}</span>
              </span>
              <span className="vmf-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
