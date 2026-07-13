import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Problem from "@/src/components/Problem";
import HowItWorks from "@/src/components/HowItWorks";
import Trust from "@/src/components/Trust";
import Eventfeed from "@/src/components/EventFeed";
import CTA from "@/src/components/CTA";
import CampusNetwork from "@/src/components/CampusNetwork";
import FAQ from "@/src/components/FAQ";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Trust />
      <Eventfeed />
      <CTA />
      <CampusNetwork />
      <FAQ />
      <Footer/>
    </main>
  );
}
