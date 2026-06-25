import Hero from "@/components/sections/Hero";
import DataPlatform from "@/components/sections/DataPlatform";
import WhyHome from "@/components/sections/WhyHome";
import Services from "@/components/sections/Services";
import Platforms from "@/components/sections/Platforms";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import SiteEffects from "@/components/SiteEffects";

export default function Home() {
  return (
    <main>
      <Hero />
      <DataPlatform />
      <WhyHome />
      <Services />
      <Platforms />
      <Process />
      <Testimonials />
      <Faq />
      <SiteEffects />
    </main>
  );
}
