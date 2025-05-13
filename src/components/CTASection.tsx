
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";

export default function CTASection() {
  return (
    <section className="py-20 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute inset-0 radial-gradient"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="premium-card rounded-3xl p-12 relative overflow-hidden">
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
            <h2 className="text-3xl font-bold text-gradient">Ready to transform your communication?</h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-xl mx-auto">
              Join thousands of professionals who use Clarity Bubble to communicate with confidence.
            </p>
            
            <div className="mt-8">
              <Button className="bg-clarity-purple hover:bg-clarity-purple/90 text-white px-8 py-6 rounded-full text-lg flex items-center gap-2 purple-button-glow mx-auto">
                Get started for free <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            
            <p className="mt-4 text-sm text-foreground/60">
              No credit card required. Free plan includes 10 rewrites per day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
