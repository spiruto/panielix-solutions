import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Powerhouse from "@/components/Powerhouse";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
// import MessengerFab from "@/components/MessengerFab";
// import MobileBottomCTA from "@/components/MobileBottomCTA";
// import ExitIntentModal from "@/components/ExitIntentModal";
import Ideas from "@/components/Ideas";

export default function Page() {
  return (
    <>
      <Hero />
      <Benefits />
      <Packages />
      <Ideas />
      <Portfolio />
      <Process />
      <Powerhouse />
      <Testimonials />
      <FAQ />
      <Contact />
    </>

  );
}
