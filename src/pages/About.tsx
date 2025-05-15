import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Baslel Workineh",
      role: "Founder & Developer",
      image: "/me.jpg",
      bio: "I am passionate about building tools that empower people to communicate with clarity and confidence."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none"></div>
      <Navbar />
      <main className="flex-grow relative z-10">

        <section className="px-6 relative">
          <div className="absolute inset-0 grid-bg opacity-20"></div>
          <div className="spotlight-gradient absolute top-1/4 right-1/4"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="mt-24">
              <h2 className="text-3xl font-bold purple-text-gradient text-center mb-16">About the Founder</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full sharp-border overflow-hidden border-4 border-clarity-purple shadow-lg flex-shrink-0">
                  <img 
                    src="/me.jpg" 
                    alt="Baslel Workineh" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-bold text-2xl md:text-3xl text-white mb-2">Baslel Workineh</h3>
                  <p className="text-lg text-clarity-purple font-semibold mb-4">Founder & Developer</p>
                  <p className="text-foreground/70 text-base leading-relaxed">
                    You know what? I'm honestly tired of people never getting my tone right. It's like, how hard is it to understand a simple message? Maybe if everyone used ClarityBubble, we wouldn't have to deal with all these misunderstandings. Actually, come to think of it, <span className="font-bold text-clarity-purple">I should probably use my own platform</span>—clearly, the world needs it (and so do I).<br /><br />
                    Communication shouldn't be this frustrating, but here we are. So, I built this tool to finally put an end to the madness. Enjoy.
                  </p>
                </div>
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
