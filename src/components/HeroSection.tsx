import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI5NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIHN0cm9rZT0iIzlCODdGNSIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjQ4MCIgcj0iMTAwIi8+PGNpcmNsZSBzdHJva2U9IiM5Qjg3RjUiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSI0ODAiIHI9IjIwMCIvPjxjaXJjbGUgc3Ryb2tlPSIjOUI4N0Y1IiBzdHJva2Utb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNDgwIiByPSIzMDAiLz48Y2lyY2xlIHN0cm9rZT0iIzlCODdGNSIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjQ4MCIgcj0iNDAwIi8+PGNpcmNsZSBzdHJva2U9IiM5Qjg3RjUiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSI0ODAiIHI9IjUwMCIvPjxjaXJjbGUgc3JvbGU9IiM5Qjg3RjUiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSI0ODAiIHI9IjYwMCIvPjwvZz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="glass-morphism inline-block px-4 py-2 rounded-full mb-6 mx-auto">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-clarity-purple" viewBox="0 0 24 24" fill="none">
              <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-sm font-medium">
              <span className="text-clarity-purple">431</span> happy users on GitHub
            </span>
            <ArrowRight className="w-4 h-4 text-clarity-purple/70" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="text-gradient">Say it the way</span><br/>
          <span className="purple-text-gradient">you mean it.</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Transform your messages with perfect tone control. Clarity Bubble helps you craft the right message for every situation, in every platform.
        </p>
        
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          {/* <Button className="bg-clarity-purple hover:bg-clarity-purple/90 text-white px-8 py-6 rounded-full text-lg flex items-center gap-2 purple-button-glow">
            Try it now <ArrowRight className="h-5 w-5" />
          </Button>
          
          <Button variant="outline" className="bg-transparent border-white/20 hover:bg-white/5 text-white px-8 py-6 rounded-full text-lg">
            View templates
          </Button> */}
          <Button
            className="bg-clarity-purple hover:bg-clarity-purple/90 text-white px-8 py-6 rounded-full text-lg flex items-center gap-2 purple-button-glow"
            asChild
          >
            <a href="/waitlist">
              Join Waitlist <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
