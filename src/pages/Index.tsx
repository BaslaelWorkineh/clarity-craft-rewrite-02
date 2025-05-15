import Navbar from "@/components/Navbar";
import ToneDemo from "@/components/ToneDemo";
import Features from "@/components/Features";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { SparklesHero, SparklesFeatures } from "@/components/SparklesDemo";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Wand2, ZapIcon } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link
import ClarityBubbleDemo from "@/components/ClarityBubbleDemo";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none"></div>
      <Navbar />
      <main className="flex-grow relative z-10">
        <SparklesHero />
        
        <motion.div 
          className="py-16 px-6 relative" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold purple-text-gradient purple-glow">How ClarityBubble Works</h2>
            <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
              Our AI-powered tone detection and modification system helps you communicate effectively in any situation
            </p>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="grid grid-cols-1 gap-8">
                {[
                  { step: "01", title: "Write your message", description: "Enter your message in any platform or in our app." },
                  { step: "02", title: "Choose a tone", description: "Select from professional, friendly, assertive, and more." },
                  { step: "03", title: "Get perfect tone", description: "Instantly see your message transformed for perfect impact." }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-morphism sharp-border p-6 relative border-2 border-clarity-purple/30"
                  >
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-clarity-purple text-white flex items-center justify-center sharp-border">
                      {item.step}
                    </div>
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-clarity-purple"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-clarity-purple"></div>
                    <h3 className="text-xl font-bold mb-3 mt-2">{item.title}</h3>
                    <p className="text-foreground/80">{item.description}</p>
                  </motion.div>
                ))}
                
                <motion.div // Changed from motion.a to motion.div for Link wrapping
                  initial={{ opacity: 0, y: 20, x: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/2 mx-auto mt-4"
                >
                  <Link
                    to="/waitlist" // Link to the wishlist page
                    className="bg-clarity-purple text-white py-3 px-6 sharp-border flex items-center justify-center gap-2 group hover:bg-clarity-purple/90 transition-colors purple-button-glow w-full"
                  >
                    <span>Try it</span> {/* Changed text to Try it */}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
              
              <ClarityBubbleDemo />
            </div>
          </div>
        </motion.div>
        
        <ToneDemo />
        <Features />
        {/* <SparklesFeatures /> */}
        <PricingSection />
        <CTASection />

        {/* Social icons row (single, dark, no animation) */}
        <div className="max-w-5xl mx-auto text-center relative z-10 mb-8">
          <h2 className="text-4xl font-bold text-gradient ">Works on your favorite platforms</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
