
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Trophy, Globe, Calendar } from "lucide-react";

const AboutPage = () => {
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
            <h1 className="text-5xl font-bold purple-text-gradient purple-glow">About ClarityBubble</h1>
            <p className="mt-4 text-xl text-foreground/80 max-w-2xl mx-auto">
              Our story, mission, and the team behind the technology
            </p>
          </div>
        </motion.div>
        
        <section className="py-16 px-6 relative">
          <div className="absolute inset-0 grid-bg opacity-20"></div>
          <div className="spotlight-gradient absolute top-1/4 right-1/4"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="premium-card sharp-border p-8 border-clarity-purple/30">
              <h2 className="text-3xl font-bold mb-6 purple-text-gradient">Our Mission</h2>
              <p className="text-foreground/90 text-lg mb-6">
                ClarityBubble was founded with a simple yet powerful mission: to help people communicate more effectively in every situation. We believe that the right words, delivered in the right tone, can transform relationships, careers, and outcomes.
              </p>
              <p className="text-foreground/90 text-lg">
                Our AI-powered platform analyzes and optimizes communication in real-time, ensuring your message has the intended impact every time. Whether you're drafting an important email, responding to a difficult message, or trying to strike the perfect tone in a professional setting, ClarityBubble helps you find the words that work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="glass-morphism sharp-border p-6 border-clarity-purple/30">
                <Users className="w-12 h-12 text-clarity-purple mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Team</h3>
                <p className="text-foreground/80">
                  Led by communication experts, linguists, and AI specialists, our diverse team is passionate about the power of effective communication.
                </p>
              </div>
              
              <div className="glass-morphism sharp-border p-6 border-clarity-purple/30">
                <Trophy className="w-12 h-12 text-clarity-purple mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Achievements</h3>
                <p className="text-foreground/80">
                  Recognized as a leader in AI communication tools, with multiple industry awards and over 1 million messages transformed.
                </p>
              </div>
              
              <div className="glass-morphism sharp-border p-6 border-clarity-purple/30">
                <Globe className="w-12 h-12 text-clarity-purple mb-4" />
                <h3 className="text-xl font-bold mb-3">Global Impact</h3>
                <p className="text-foreground/80">
                  Used by professionals in over 30 countries, helping people connect across languages, cultures, and contexts.
                </p>
              </div>
              
              <div className="glass-morphism sharp-border p-6 border-clarity-purple/30">
                <Calendar className="w-12 h-12 text-clarity-purple mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Journey</h3>
                <p className="text-foreground/80">
                  Founded in 2022, we've grown from a small startup to a trusted communication partner for individuals and organizations worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
