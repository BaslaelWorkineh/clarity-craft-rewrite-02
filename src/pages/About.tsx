
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MessageCircle, Users, Code, Clock } from "lucide-react";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Sarah Lee",
      role: "CTO",
      image: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Michael Chen",
      role: "Lead AI Engineer",
      image: "https://i.pravatar.cc/150?img=3"
    },
    {
      name: "Aisha Patel",
      role: "Head of Product",
      image: "https://i.pravatar.cc/150?img=9"
    }
  ];

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
            <h1 className="text-5xl font-bold purple-text-gradient purple-glow">About Us</h1>
            <p className="mt-4 text-xl text-foreground/80 max-w-2xl mx-auto">
              We're building the future of communication through AI
            </p>
          </div>
        </motion.div>

        <section className="py-16 px-6 relative">
          <div className="absolute inset-0 grid-bg opacity-20"></div>
          <div className="spotlight-gradient absolute top-1/4 right-1/4"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold purple-text-gradient">Our Mission</h2>
              <p className="mt-6 text-lg text-foreground/80 max-w-3xl mx-auto">
                At ClarityBubble, we believe that effective communication is the foundation of personal and professional success. Our mission is to empower people with AI-powered tools that help them communicate with clarity, confidence, and intention in every situation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {[
                { title: "Clear Communication", description: "We help people express themselves clearly and effectively", icon: <MessageCircle className="w-6 h-6" /> },
                { title: "For Everyone", description: "Our tools are designed for individuals and teams of all sizes", icon: <Users className="w-6 h-6" /> },
                { title: "Cutting-edge AI", description: "We're constantly improving our AI models for better results", icon: <Code className="w-6 h-6" /> },
                { title: "Save Time", description: "Spend less time drafting messages and more time connecting", icon: <Clock className="w-6 h-6" /> }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-morphism p-6 sharp-border"
                >
                  <div className="w-12 h-12 rounded-none sharp-border bg-clarity-purple/20 flex items-center justify-center mb-4">
                    <span className="text-clarity-purple">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-24">
              <h2 className="text-3xl font-bold purple-text-gradient text-center mb-16">Our Team</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-32 h-32 mx-auto sharp-border overflow-hidden relative">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-clarity-purple"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-clarity-purple"></div>
                    </div>
                    <h3 className="mt-4 font-bold">{member.name}</h3>
                    <p className="text-sm text-foreground/70">{member.role}</p>
                  </motion.div>
                ))}
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
