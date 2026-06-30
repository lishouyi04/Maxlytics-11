import SeoHeroShell from "@/components/sections/seo/SeoHeroShell";

export default function SeoHero() {
  return (
    <SeoHeroShell
      breadcrumb="SEO"
      title={
        <>
          The Data-First <em className="it">SEO Agency</em> in Hong Kong
        </>
      }
      description="Move past generic vanity metrics. Maxlytics engineers sustainable organic growth and predictable revenue using sophisticated analytics and a proprietary 13M+ first-party data stack."
      primaryCta="Claim Your Free SEO Audit →"
    />
  );
}
