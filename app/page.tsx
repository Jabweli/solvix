import Hero from "@/components/Hero";
import Benefits from "@/components/home/Benefits";
import Blog from "@/components/home/Blog";
import Clients from "@/components/home/Clients";
import CTA from "@/components/home/cta";
import FAQ from "@/components/home/FAQ";
import OurWork from "@/components/home/OurWork";
import SolarSolutions from "@/components/home/SolarSolutions";
import SolutionsAccordion from "@/components/home/SolutionsAccordion";
import Testimonials from "@/components/home/Testimonials";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Clients />
      <Benefits />
      <SolarSolutions />
      <SolutionsAccordion />
      <Testimonials />
      <OurWork />
      <FAQ />
      <Blog />
      <CTA type="home"/>
    </div>
  );
}
