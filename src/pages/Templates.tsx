
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollText, ArrowRight } from "lucide-react";

const TEMPLATES = [
  {
    title: "Professional Email",
    description: "Perfect for business communications and formal settings.",
    tags: ["Business", "Formal"]
  },
  {
    title: "Friendly Response",
    description: "Warm and approachable tone for casual conversations.",
    tags: ["Casual", "Warm"]
  },
  {
    title: "Assertive Request",
    description: "Clear and direct messaging for making requests or setting boundaries.",
    tags: ["Direct", "Clear"]
  },
  {
    title: "Empathetic Message",
    description: "Show understanding and compassion in difficult situations.",
    tags: ["Supportive", "Caring"]
  },
  {
    title: "Follow-up Email",
    description: "Polite reminder without being pushy or demanding.",
    tags: ["Reminder", "Polite"]
  },
  {
    title: "Apology Message",
    description: "Sincere and thoughtful way to make amends.",
    tags: ["Sincere", "Thoughtful"]
  }
];

const TemplatesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none"></div>
      <Navbar />
      <main className="flex-grow relative z-10 mt-32 pb-16">
        <motion.div 
          className="py-8 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold purple-text-gradient purple-glow">Templates</h1>
            <p className="mt-4 text-xl text-foreground/80 max-w-2xl mx-auto">
              Ready-made tone templates for common communication scenarios
            </p>
          </div>
        </motion.div>
        
        <section className="py-16 px-6 relative">
          <div className="absolute inset-0 grid-bg opacity-20"></div>
          <div className="spotlight-gradient absolute top-1/4 right-1/4"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEMPLATES.map((template, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="premium-card rounded-none sharp-border border-plus-pattern hover:border-clarity-purple/30 transition-all duration-300 hover:transform hover:-translate-y-1 overflow-hidden bg-black h-full">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 rounded-none sharp-border bg-clarity-purple/20 flex items-center justify-center mb-4">
                        <ScrollText className="w-5 h-5 text-clarity-purple" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{template.title}</h3>
                      <p className="text-foreground/80 mb-4">{template.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {template.tags.map(tag => (
                          <span key={tag} className="text-xs bg-clarity-purple/20 text-clarity-purple px-2 py-1 sharp-border">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-clarity-purple flex items-center text-sm font-medium group mt-auto">
                        Use template
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TemplatesPage;
