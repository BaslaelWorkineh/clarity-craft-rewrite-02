import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react";

export default function Navbar() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();
  
  // Close menu when route changes or window is resized
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 glass-morphism sharp-border border-plus-pattern">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-1">
              <div className="h-9 w-9 sharp-border bg-gradient-to-br from-clarity-purple to-clarity-deep-purple flex items-center justify-center">
                <span className="text-white font-bold">CB</span>
              </div>
              <span className="text-xl font-bold">Clarity<span className="text-clarity-purple">Bubble</span></span>
              <div className="ml-1 px-2 py-0.5 text-[10px] font-medium bg-clarity-purple/20 text-clarity-purple sharp-border">
                BETA
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:flex-grow md:items-center md:justify-center gap-6">
            <Link 
              to="/features" 
              className={`text-sm ${location.pathname === '/features' ? 'text-clarity-purple' : 'text-foreground/80 hover:text-foreground'}`}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm ${location.pathname === '/pricing' ? 'text-clarity-purple' : 'text-foreground/80 hover:text-foreground'}`}
            >
              Pricing
            </Link>
            <Link 
              to="/templates" 
              className={`text-sm ${location.pathname === '/templates' ? 'text-clarity-purple' : 'text-foreground/80 hover:text-foreground'}`}
            >
              Templates
            </Link>
            <Link 
              to="/about" 
              className={`text-sm ${location.pathname === '/about' ? 'text-clarity-purple' : 'text-foreground/80 hover:text-foreground'}`}
            >
              About
            </Link>
          </div>
          
          {/* CTA Button (Desktop) & Burger Menu (Mobile) */}
          <div className="flex items-center">
            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              {!isSignedIn && (
                <div className="flex gap-2">
                  <SignInButton mode="modal">
                    <Button variant="outline" className="rounded-none sharp-border">Sign In</Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button className="bg-clarity-purple hover:bg-clarity-purple/90 text-white rounded-none sharp-border flex items-center gap-2">
                      Sign Up <ArrowRight className="h-4 w-4" />
                    </Button>
                  </SignUpButton>
                </div>
              )}
              {isSignedIn && (
                <UserButton afterSignOutUrl="/" />
              )}
            </div>

            {/* Burger Menu (Mobile) */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 mt-3 pt-3">
            <div className="flex flex-col gap-4 items-center">
              <Link 
                to="/features" 
                className={`text-sm ${location.pathname === '/features' ? 'text-clarity-purple' : 'text-foreground/80'} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className={`text-sm ${location.pathname === '/pricing' ? 'text-clarity-purple' : 'text-foreground/80'} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/templates" 
                className={`text-sm ${location.pathname === '/templates' ? 'text-clarity-purple' : 'text-foreground/80'} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Templates
              </Link>
              <Link 
                to="/about" 
                className={`text-sm ${location.pathname === '/about' ? 'text-clarity-purple' : 'text-foreground/80'} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              {/* Mobile CTA Button */}
              {!isSignedIn && (
                <>
                  <SignInButton mode="modal">
                    <Button variant="outline" className="w-full rounded-none sharp-border">Sign In</Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button className="w-full bg-clarity-purple hover:bg-clarity-purple/90 text-white rounded-none sharp-border flex items-center justify-center gap-2 mt-2">
                      Sign Up <ArrowRight className="h-4 w-4" />
                    </Button>
                  </SignUpButton>
                </>
              )}
              {isSignedIn && (
                <div className="w-full flex justify-center mt-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
