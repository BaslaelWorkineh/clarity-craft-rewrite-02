
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

type ToneOption = "friendly" | "assertive" | "professional" | "empathetic" | "casual" | "apologetic";

const TONE_MAPPING: Record<ToneOption, {text: string, emoji: string}> = {
  friendly: {
    text: "Hey there! I was thinking we should probably take some time to review the budget details soon. What do you think?",
    emoji: "😊"
  },
  assertive: {
    text: "We need to review the budget before moving forward with this project.",
    emoji: "💪"
  },
  professional: {
    text: "I would like to schedule a meeting to discuss the budget allocation for this quarter.",
    emoji: "👔"
  },
  empathetic: {
    text: "I understand you're busy, but I believe reviewing the budget would help us both feel more confident about next steps.",
    emoji: "💭"
  },
  casual: {
    text: "So about that budget thing... we should prob chat about it when you get a sec!",
    emoji: "🙌"
  },
  apologetic: {
    text: "I'm really sorry to bring this up, but I think we might need to take a look at the budget when you have time.",
    emoji: "🙏"
  }
};

export default function ToneDemo() {
  const [message, setMessage] = useState<string>("Hey, I think we should talk about the budget...");
  const [selectedTone, setSelectedTone] = useState<ToneOption>("professional");
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  // Typing animation effect
  useEffect(() => {
    if (!TONE_MAPPING[selectedTone]) return;
    
    setIsTyping(true);
    setDisplayedText("");
    
    const targetText = TONE_MAPPING[selectedTone].text;
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < targetText.length) {
        setDisplayedText(prev => prev + targetText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 30); // Adjust speed as needed
    
    return () => clearInterval(typingInterval);
  }, [selectedTone]);
  
  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute inset-0 radial-gradient"></div>
      <div className="spotlight-gradient absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="premium-card sharp-border rounded-2xl p-8 pb-10 border-plus-pattern">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold purple-text-gradient purple-glow">Message Tone Transformer ✨</h2>
            <p className="mt-3 text-foreground/80">Write your message once, transform it into any tone you need</p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8">
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Your message</label>
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-32 p-4 rounded-xl bg-black border border-clarity-purple/20 focus:border-clarity-purple/50 focus:ring focus:ring-clarity-purple/20 focus:outline-none sharp-border"
                placeholder="Type your message here..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Choose tone</label>
              <Tabs value={selectedTone} onValueChange={(val) => setSelectedTone(val as ToneOption)}>
                <TabsList className="grid grid-cols-2 md:grid-cols-3 gap-2 bg-black/50 sharp-border">
                  {Object.entries(TONE_MAPPING).map(([tone, {emoji}]) => (
                    <TabsTrigger 
                      key={tone} 
                      value={tone} 
                      className="data-[state=active]:bg-clarity-purple sharp-border"
                    >
                      {emoji} {tone.charAt(0).toUpperCase() + tone.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <div className="mt-6">
                  <Card className="bg-black border-clarity-purple/20 sharp-border border-plus-pattern">
                    <CardContent className="p-6">
                      <h3 className="text-clarity-purple font-medium mb-2 text-sm flex items-center">
                        <span className="mr-2">{TONE_MAPPING[selectedTone]?.emoji}</span> 
                        Transformed message:
                      </h3>
                      <p className="text-white text-lg min-h-[80px]">
                        {displayedText}
                        {isTyping && cursorVisible && <span className="animate-blink">|</span>}
                        {!isTyping && cursorVisible && <span className="animate-blink">|</span>}
                      </p>
                    </CardContent>
                  </Card>
                  
                  <div className="mt-4 flex justify-between">
                    <Button variant="ghost" className="text-foreground/70 hover:text-foreground sharp-border">
                      Copy to clipboard
                    </Button>
                    <Button className="bg-clarity-purple hover:bg-clarity-purple/90 purple-button-glow sharp-border">
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
