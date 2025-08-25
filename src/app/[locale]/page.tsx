import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Powerhouse from "@/components/Powerhouse";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MessengerFab from "@/components/MessengerFab";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ConsentBanner from "@/components/ConsentBanner";
// import ExitIntentModal from "@/components/ExitIntentModal";
import Ideas from "@/components/Ideas";

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Packages />
        <Ideas/>
        <Portfolio />
        <Process />
        <Powerhouse />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MessengerFab />
      <MobileBottomCTA />
      <ConsentBanner />
      {/* <ExitIntentModal /> */}
    </div>
  );
}
