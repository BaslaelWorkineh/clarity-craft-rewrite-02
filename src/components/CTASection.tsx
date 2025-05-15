import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Repeat2, Megaphone, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner"; // Import toast
import React, { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://claritybubble-backend.onrender.com/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        toast.success("Thanks for subscribing!", {
          description: "We'll keep you updated on the latest features.",
        });
        setEmail("");
      } else {
        toast.error("Something went wrong.", {
          description: "Please try again later or contact support.",
          style: { background: '#f87171', color: '#fff' },
        });
      }
    } catch (err) {
      toast.error("Network error.", {
        description: "Please check your connection and try again.",
        style: { background: '#f87171', color: '#fff' },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute inset-0 radial-gradient"></div>
      <div className="spotlight-gradient absolute bottom-0 right-0"></div>
      <div className="spotlight-gradient-large absolute top-0 left-0"></div>

      <div className="max-w-5xl mx-auto relative z-10 overflow-visible">
        {/* New relative wrapper for + symbols and the card */}
        <div className="relative">
          {/* + Symbols are now siblings to the card, positioned relative to this new wrapper */}
          <span className="absolute top-[-0.1rem] left-[0.1rem] -translate-x-1/2 -translate-y-1/2 text-white text-4xl select-none z-20" style={{lineHeight:1}}>+</span>
          <span className="absolute top-[-0.1rem] right-[0.1rem] translate-x-1/2 -translate-y-1/2 text-white text-4xl select-none z-20" style={{lineHeight:1}}>+</span>
          <span className="absolute bottom-[0.1rem] left-[0.1rem] -translate-x-1/2 translate-y-1/2 text-white text-4xl select-none z-20" style={{lineHeight:1}}>+</span>
          <span className="absolute bottom-[0.1rem] right-[0.1rem] translate-x-1/2 translate-y-1/2 text-white text-4xl select-none z-20" style={{lineHeight:1}}>+</span>

          {/* The card itself, its clip-path will only affect its own children */}
          <div className="premium-card relative rounded-none sharp-border border-plus-pattern p-12">
            {/* Original content of the premium-card div starts here */}
            <div className="absolute inset-0 w-full h-full opacity-30">
              
            </div>

            <div className="relative text-center z-10">
              
              <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                Ready to transform your communication? ✨
              </h2>

              
              <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
                Join thousands of professionals who will use Clarity Bubble to communicate with confidence across all platforms.
              </p>

              
              <div className="mt-10 flex flex-row justify-center gap-4">
                <Button
                  className="bg-clarity-purple hover:bg-clarity-purple/90 text-white px-10 py-7 rounded-none sharp-border text-lg flex items-center gap-2 purple-button-glow"
                  asChild
                >
                  <a href="/waitlist">
                    Get started for free <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              
              <p className="mt-4 text-sm text-foreground/60">
                No credit card required. Free plan includes 10 rewrites per day.
              </p>

              
              <div className="mt-10 flex flex-wrap justify-center gap-8">
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
              </div>
            </div>
          </div>
          {/* End of original premium-card content */}
        </div>

        <div className="mt-16 py-6 glass-morphism sharp-border rounded-none">
          <div className="flex flex-col md:flex-row items-center justify-between px-6 gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 sharp-border bg-clarity-purple/20 flex items-center justify-center">
                <Megaphone className="text-clarity-purple w-4 h-4" />
              </div>
              <span className="text-foreground/90">Stay up to date with new features</span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full max-w-md sm:max-w-none gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-black border border-clarity-purple/20 rounded-none sharp-border focus:outline-none focus:border-clarity-purple/50 flex-1 min-w-0"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Button type="submit" className="sm:ml-2 bg-clarity-purple hover:bg-clarity-purple/90 text-white rounded-none sharp-border w-full sm:w-auto" disabled={loading}>
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="animate-spin h-4 w-4" />
                    Subscribing...
                  </span>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          </div>
        </div>
        {/* End of new relative wrapper */}
      </div>

      
    </section>
  );
}