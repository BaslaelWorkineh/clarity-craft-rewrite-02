
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 py-4 px-6 md:px-12">
      <div className="max-w-5xl mx-auto glass-morphism sharp-border border-plus-pattern">
        <div className="flex justify-between items-center py-3 px-6">
          <div className="flex-1 flex justify-start">
            {/* Empty space for alignment */}
          </div>
          
          <div className="flex items-center gap-1">
            <div className="h-9 w-9 sharp-border bg-gradient-to-br from-clarity-purple to-clarity-deep-purple flex items-center justify-center">
              <span className="text-white font-bold">CB</span>
            </div>
            <span className="text-xl font-bold">Clarity<span className="text-clarity-purple">Bubble</span></span>
            <div className="ml-1 px-2 py-0.5 text-[10px] font-medium bg-clarity-purple/20 text-clarity-purple sharp-border">
              BETA
            </div>
          </div>
          
          <div className="flex-1 flex items-center justify-center gap-6 mx-auto">
            <Link to="#features" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Features</Link>
            <Link to="#pricing" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Pricing</Link>
            <Link to="#templates" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Templates</Link>
            <Link to="#about" className="text-sm text-foreground/80 hover:text-foreground transition-colors">About</Link>
          </div>
          
          <div className="flex-1 flex justify-end">
            <Button className="bg-clarity-purple hover:bg-clarity-purple/90 text-white rounded-none sharp-border flex items-center gap-2 purple-button-glow">
              Join ClarityBubble <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
