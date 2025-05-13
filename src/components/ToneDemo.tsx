
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

type ToneOption = "friendly" | "assertive" | "professional" | "empathetic" | "casual" | "apologetic";

const TONE_MAPPING: Record<ToneOption, string> = {
  friendly: "Hey there! I was thinking we should probably take some time to review the budget details soon. What do you think?",
  assertive: "We need to review the budget before moving forward with this project.",
  professional: "I would like to schedule a meeting to discuss the budget allocation for this quarter.",
  empathetic: "I understand you're busy, but I believe reviewing the budget would help us both feel more confident about next steps.",
  casual: "So about that budget thing... we should prob chat about it when you get a sec!",
  apologetic: "I'm really sorry to bring this up, but I think we might need to take a look at the budget when you have time."
};

export default function ToneDemo() {
  const [message, setMessage] = useState<string>("Hey, I think we should talk about the budget...");
  const [selectedTone, setSelectedTone] = useState<ToneOption>("professional");

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass-morphism rounded-2xl p-8 pb-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold purple-text-gradient purple-glow">Message Tone Transformer</h2>
            <p className="mt-3 text-foreground/80">Write your message once, transform it into any tone you need</p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8">
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Your message</label>
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-32 p-4 rounded-xl bg-white/5 border border-white/10 focus:border-clarity-purple/50 focus:ring focus:ring-clarity-purple/20 focus:outline-none"
                placeholder="Type your message here..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Choose tone</label>
              <Tabs value={selectedTone} onValueChange={(val) => setSelectedTone(val as ToneOption)}>
                <TabsList className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <TabsTrigger value="friendly" className="data-[state=active]:bg-clarity-purple">Friendly</TabsTrigger>
                  <TabsTrigger value="assertive" className="data-[state=active]:bg-clarity-purple">Assertive</TabsTrigger>
                  <TabsTrigger value="professional" className="data-[state=active]:bg-clarity-purple">Professional</TabsTrigger>
                  <TabsTrigger value="empathetic" className="data-[state=active]:bg-clarity-purple">Empathetic</TabsTrigger>
                  <TabsTrigger value="casual" className="data-[state=active]:bg-clarity-purple">Casual</TabsTrigger>
                  <TabsTrigger value="apologetic" className="data-[state=active]:bg-clarity-purple">Apologetic</TabsTrigger>
                </TabsList>
                
                <div className="mt-6">
                  <Card className="bg-black/40 border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-clarity-purple font-medium mb-2 text-sm">Transformed message:</h3>
                      <p className="text-white text-lg">{TONE_MAPPING[selectedTone]}</p>
                    </CardContent>
                  </Card>
                  
                  <div className="mt-4 flex justify-between">
                    <Button variant="ghost" className="text-foreground/70 hover:text-foreground">
                      Copy to clipboard
                    </Button>
                    <Button className="bg-clarity-purple hover:bg-clarity-purple/90">
                      Save to history
                    </Button>
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
