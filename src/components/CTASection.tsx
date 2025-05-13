import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Repeat2, Megaphone, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute inset-0 radial-gradient"></div>
      <div className="spotlight-gradient absolute bottom-0 right-0"></div>
      <div className="spotlight-gradient-large absolute top-0 left-0"></div>

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="premium-card relative rounded-none sharp-border border-plus-pattern p-12 overflow-hidden">
          {/* Corner + symbols */}
          <span className="absolute top-0 left-0 text-white text-sm">+</span>
          <span className="absolute top-0 right-0 text-white text-sm">+</span>
          <span className="absolute bottom-0 left-0 text-white text-sm">+</span>
          <span className="absolute bottom-0 right-0 text-white text-sm">+</span>

          <div className="absolute inset-0 w-full h-full opacity-30">
            <SparklesCore
              background="transparent"
              minSize={0.2}
              maxSize={0.8}
              particleDensity={100}
              particleColor="#9b87f5"
              speed={0.4}
              className="w-full h-full"
            />
          </div>

          <div className="relative text-center z-10">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gradient"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to transform your communication? ✨
            </motion.h2>

            <motion.p
              className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands of professionals who use Clarity Bubble to communicate with confidence across all platforms.
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button className="bg-clarity-purple hover:bg-clarity-purple/90 text-white px-10 py-7 rounded-none sharp-border text-lg flex items-center gap-2 purple-button-glow mx-auto">
                Get started for free <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>

            <motion.p
              className="mt-4 text-sm text-foreground/60"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              No credit card required. Free plan includes 10 rewrites per day.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap justify-center gap-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mt-10 flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-none sharp-border bg-clarity-purple/10 flex items-center justify-center">
                    <ShieldCheck className="text-clarity-purple w-5 h-5" />
                  </div>
                  <span className="text-foreground/80">Enterprise-grade security</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-none sharp-border bg-clarity-purple/10 flex items-center justify-center">
                    <Zap className="text-clarity-purple w-5 h-5" />
                  </div>
                  <span className="text-foreground/80">Real-time suggestions</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-none sharp-border bg-clarity-purple/10 flex items-center justify-center">
                    <Repeat2 className="text-clarity-purple w-5 h-5" />
                  </div>
                  <span className="text-foreground/80">Unlimited integrations</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-16 py-6 glass-morphism sharp-border rounded-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between px-6 gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 sharp-border bg-clarity-purple/20 flex items-center justify-center">
                <Megaphone className="text-clarity-purple w-4 h-4" />
              </div>
              <span className="text-foreground/90">Stay up to date with new features</span>
            </div>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-black border border-clarity-purple/20 rounded-none sharp-border focus:outline-none focus:border-clarity-purple/50"
              />
              <Button className="ml-2 bg-clarity-purple hover:bg-clarity-purple/90 text-white rounded-none sharp-border">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}