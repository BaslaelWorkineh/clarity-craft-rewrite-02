
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none"></div>
      <Navbar />
      <main className="flex-grow relative z-10 mt-32">
        <motion.div 
          className="py-8 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold purple-text-gradient purple-glow">Pricing</h1>
            <p className="mt-4 text-xl text-foreground/80 max-w-2xl mx-auto">
              Choose the perfect plan for your communication needs
            </p>
          </div>
        </motion.div>
        
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
