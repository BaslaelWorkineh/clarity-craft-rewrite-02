
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Browser Extensions",
    description: "Transform your messages directly in Gmail, Slack, LinkedIn, and other platforms with our browser plugin.",
    icon: "📱"
  },
  {
    title: "Tone Templates",
    description: "Access pre-made templates for common situations like asking for a raise or rejecting a meeting.",
    icon: "📝"
  },
  {
    title: "AI Memory",
    description: "Our AI learns your preferred tones over time and suggests rewrites automatically.",
    icon: "🧠"
  },
  {
    title: "Tone Analytics",
    description: "Get insights into your communication patterns with weekly reports on your messaging style.",
    icon: "📊"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-background to-clarity-dark-purple/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="spotlight-gradient-large absolute top-1/4 right-1/4"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold purple-text-gradient purple-glow">Key Features</h2>
          <p className="mt-3 text-xl text-foreground/80">Everything you need to communicate effectively</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="premium-card rounded-none sharp-border border-plus-pattern hover:border-clarity-purple/30 transition-all duration-300 hover:transform hover:-translate-y-1 overflow-hidden bg-black">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-none sharp-border bg-clarity-purple/20 flex items-center justify-center mb-4">
                    <span className="text-clarity-purple text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-foreground/80 mb-4">{feature.description}</p>
                  <button className="text-clarity-purple flex items-center text-sm font-medium group">
                    Explore more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
