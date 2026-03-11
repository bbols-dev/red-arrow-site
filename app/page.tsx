import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThreatTicker from "@/components/ThreatTicker";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import DashboardShowcase from "@/components/DashboardShowcase";
import RiskCategories from "@/components/RiskCategories";
import FixRoadmap from "@/components/FixRoadmap";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ThreatTicker />
        <Stats />
        <DashboardShowcase />
        <Features />
        <HowItWorks />
        <RiskCategories />
        <Testimonials />
        <Pricing />
        <FixRoadmap />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
