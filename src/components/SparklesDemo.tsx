"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function SparklesHero() {
  return (
    <div className="h-[100vh] relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute inset-0 radial-gradient"></div>
      <div className="spotlight-gradient-large absolute top-1/3 left-1/4"></div>
      
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#9b87f5"
          speed={0}
        />
      </div>
      
      <div className="flex flex-col items-center justify-center relative z-20 px-4">
        <h1 className="md:text-7xl text-4xl lg:text-8xl font-bold text-center mb-2">
          <span className="text-gradient">ELEVATE YOUR</span><br/>
          <span className="purple-text-gradient">COMMUNICATION</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-3xl text-center px-4">
          Transform your messages with perfect tone control. Clarity Bubble helps you craft the right message for every situation, adapting automatically to your context.
        </p>
        
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button className="bg-clarity-purple hover:bg-clarity-purple/90 text-white px-8 py-6 rounded-none text-lg flex items-center gap-2 purple-button-glow sharp-border">
            Try it now <ArrowRight className="h-5 w-5" />
          </Button>
          
          <Button variant="outline" className="bg-transparent border-white/20 hover:bg-white/5 text-white px-8 py-6 rounded-none text-lg sharp-border">
            View demos
          </Button>
        </div>
        
        <div className="glass-morphism rounded-none sharp-border px-6 py-3 mt-16">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border border-white/20 bg-clarity-purple/30 flex items-center justify-center text-xs">
                  {i}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium">
              <span className="text-clarity-purple font-semibold">10,000+</span> messages transformed daily
            </span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-clarity-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}

export function SparklesFeatures() {
  return (
    <div className="relative w-full bg-transparent flex items-center justify-center py-10 md:py-16">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      <div className="absolute inset-0 radial-gradient opacity-30"></div>
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfeatures"
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#9b87f5"
          speed={0}
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-2 purple-glow">
          Sparkling Features
        </h2>
        <p className="text-foreground/70 max-w-xl mx-auto">
          Discover how ClarityBubble enhances your writing with intelligent suggestions and seamless integration.
        </p>
      </div>
    </div>
  );
}
