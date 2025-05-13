
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold purple-text-gradient purple-glow">Simple Pricing</h2>
          <p className="mt-3 text-xl text-foreground/80">Choose the plan that's right for you</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-morphism rounded-2xl p-8 ${plan.popular ? 'border-clarity-purple ring-1 ring-clarity-purple/50' : 'border-white/10'} relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-clarity-purple text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
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
                  className={`w-full ${plan.popular ? 'bg-clarity-purple hover:bg-clarity-purple/90' : 'bg-white/10 hover:bg-white/20'}`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
