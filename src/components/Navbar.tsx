
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close menu when route changes or window is resized
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed w-full top-0 z-50 py-4 px-6 md:px-12">
      <div className="max-w-5xl mx-auto glass-morphism sharp-border border-plus-pattern">
        <div className="flex justify-between items-center py-3 px-6">
          <div className="flex-1 flex justify-start md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
          
          <Link to="/" className="flex items-center gap-1">
            <div className="h-9 w-9 sharp-border bg-gradient-to-br from-clarity-purple to-clarity-deep-purple flex items-center justify-center">
              <span className="text-white font-bold">CB</span>
            </div>
            <span className="text-xl font-bold">Clarity<span className="text-clarity-purple">Bubble</span></span>
            <div className="ml-1 px-2 py-0.5 text-[10px] font-medium bg-clarity-purple/20 text-clarity-purple sharp-border">
              BETA
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center gap-6">
            <Link 
              to="/features" 
              className={`text-sm ${location.pathname === '/features' ? 'text-clarity-purple' : 'text-foreground/80 hover:text-foreground'} transition-colors`}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm ${location.pathname === '/pricing' ? 'text-clarity-purple' : 'text-foreground/80 hover:text-foreground'} transition-colors`}
            >
              Pricing
            </Link>
            <Link 
              to="/templates" 
              className={`text-sm ${location.pathname === '/templates' ? 'text-clarity-purple' : 'text-foreground/80 hover:text-foreground'} transition-colors`}
            >
              Templates
            </Link>
            <Link 
              to="/about" 
              className={`text-sm ${location.pathname === '/about' ? 'text-clarity-purple' : 'text-foreground/80 hover:text-foreground'} transition-colors`}
            >
              About
            </Link>
          </div>
          
          <div className="flex-1 flex justify-end">
            <Button className="bg-clarity-purple hover:bg-clarity-purple/90 text-white rounded-none sharp-border flex items-center gap-2 purple-button-glow">
              Join ClarityBubble <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-3 px-4 animate-fade-in">
            <div className="flex flex-col gap-4 items-center">
              <Link 
                to="/features" 
                className={`text-sm ${location.pathname === '/features' ? 'text-clarity-purple' : 'text-foreground/80'} transition-colors py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className={`text-sm ${location.pathname === '/pricing' ? 'text-clarity-purple' : 'text-foreground/80'} transition-colors py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/templates" 
                className={`text-sm ${location.pathname === '/templates' ? 'text-clarity-purple' : 'text-foreground/80'} transition-colors py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Templates
              </Link>
              <Link 
                to="/about" 
                className={`text-sm ${location.pathname === '/about' ? 'text-clarity-purple' : 'text-foreground/80'} transition-colors py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
