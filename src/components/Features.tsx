
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-background to-clarity-dark-purple/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold purple-text-gradient purple-glow">Key Features</h2>
          <p className="mt-3 text-xl text-foreground/80">Everything you need to communicate effectively</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {FEATURES.map((feature, index) => (
            <Card key={index} className="bg-black/30 border-white/10 hover:border-clarity-purple/30 transition-all duration-300 hover:transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
