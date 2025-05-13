import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const WaitlistPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://claritybubble-backend.onrender.com/api/waitlist/count")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://claritybubble-backend.onrender.com/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        toast.success("You're on the waitlist!", {
          description: "Thank you for joining the ClarityBubble waitlist. We'll notify you as soon as you get access.",
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
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none"></div>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-20"
      >
        <section className="py-16 px-6 relative">
          <div className="absolute inset-0 grid-bg opacity-20"></div>
          <div className="spotlight-gradient absolute top-1/4 right-1/4"></div>

          <div className="max-w-xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold purple-text-gradient purple-glow mb-4">
                Join the ClarityBubble Waitlist
              </h1>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Be the first to experience the next generation of productivity tools. Sign up to get early access and updates!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="mt-12 glass-morphism p-8 sharp-border"
            >
              {count !== null && (
                <div className="mb-4 text-center text-foreground/80 text-sm">
                  <span className="font-semibold text-clarity-purple">{count}+ </span> people have already joined the waitlist
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="bg-background/50 border-clarity-purple/30 focus:border-clarity-purple"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-clarity-purple hover:bg-clarity-purple/90 text-white sharp-border purple-button-glow py-3"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="animate-spin h-5 w-5" />
                      Joining...
                    </span>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </motion.main>
      <Footer />
    </div>
  );
};

export default WaitlistPage;
