
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const PRICING_PLANS = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out Clarity Bubble",
    features: [
      "10 tone rewrites per day",
      "3 tone types",
      "Basic message history",
      "Text-only interface"
    ],
    cta: "Start for Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$7",
    period: "/month",
    description: "Everything you need for perfect communication",
    features: [
      "Unlimited rewrites",
      "All tone types",
      "Gmail/Slack/LinkedIn integration",
      "Communication analytics",
      "Priority support"
    ],
    cta: "Get Pro Plan",
    popular: true
  },
  {
    name: "Team",
    price: "$15",
    period: "/user/month",
    description: "For teams that want to improve communication",
    features: [
      "Everything in Pro",
      "Team dashboard",
      "Shared templates",
      "Communication guidelines",
      "Admin controls",
      "Advanced analytics"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 px-6 relative">
      {/* Premium grid background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="absolute inset-0 radial-gradient"></div>
      <div className="spotlight-gradient-large absolute top-1/4 right-1/4"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold purple-text-gradient purple-glow">Premium Plans</h2>
          <p className="mt-3 text-xl text-foreground/80">Choose the plan that's right for you</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`${plan.popular ? 'premium-card' : 'glass-morphism'} rounded-none sharp-border border-plus-pattern p-8 ${plan.popular ? 'border-clarity-purple ring-1 ring-clarity-purple/30' : 'border-white/10'} relative transform transition-all duration-300 hover:-translate-y-1`}
              whileHover={plan.popular ? { boxShadow: "0 0 25px rgba(155, 135, 245, 0.5)" } : {}}
            >
              {plan.popular && (
                <>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-clarity-purple text-white text-xs font-bold px-4 py-1 rounded-none sharp-border">
                    MOST POPULAR
                  </div>
                  <div className="premium-shine"></div>
                </>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-end justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-foreground/70 ml-1">{plan.period}</span>}
                </div>
                <p className="mt-3 text-sm text-foreground/70 h-12">{plan.description}</p>
              </div>
              
              <div className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-clarity-purple shrink-0 mr-3 mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button 
                  className={`w-full sharp-border text-white ${plan.popular ? 'bg-clarity-purple hover:bg-clarity-purple/90 purple-button-glow' : 'bg-black border border-white/10 hover:bg-white/5'}`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
