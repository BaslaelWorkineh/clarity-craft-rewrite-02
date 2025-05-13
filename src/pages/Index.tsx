
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ToneDemo from "@/components/ToneDemo";
import Features from "@/components/Features";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-clarity-dark-purple text-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ToneDemo />
        <Features />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
