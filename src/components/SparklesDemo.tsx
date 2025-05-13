
"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowRight } from "lucide-react";

export function SparklesHero() {
  return (
    <div className="h-[40rem] relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#9b87f5"
          speed={0.8}
        />
      </div>
      <div className="flex flex-col items-center justify-center relative z-20">
        <h1 className="md:text-7xl text-4xl lg:text-8xl font-bold text-center">
          <span className="text-gradient">ELEVATE YOUR</span><br/>
          <span className="purple-text-gradient">COMMUNICATION</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl text-center px-4">
          Transform your messages with perfect tone control. Clarity Bubble helps you craft the right message for every situation.
        </p>
      </div>
    </div>
  );
}

export function SparklesFeatures() {
  return (
    <div className="py-20 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="absolute inset-0 radial-gradient"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        {/* Feature 1 */}
        <div className="premium-card rounded-xl p-8 relative overflow-hidden transform transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 w-full h-full opacity-30">
            <SparklesCore
              background="transparent"
              minSize={0.2}
              maxSize={0.6}
              particleDensity={60}
              particleColor="#9b87f5"
              speed={0.2}
              className="w-full h-full"
            />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-clarity-purple/20 flex items-center justify-center mb-4">
              <span className="text-clarity-purple text-xl">✨</span>
            </div>
            <h3 className="text-xl font-bold mb-2">BEAUTIFULLY DESIGNED</h3>
            <p className="text-foreground/80">
              Craft beautiful messages with our advanced tone detection and suggestion system.
            </p>
            <button className="mt-4 text-clarity-purple flex items-center text-sm font-medium">
              Explore more
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="premium-card rounded-xl p-8 relative overflow-hidden transform transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 w-full h-full opacity-30">
            <SparklesCore
              background="transparent"
              minSize={0.2}
              maxSize={0.6}
              particleDensity={60}
              particleColor="#9b87f5"
              speed={0.2}
              className="w-full h-full"
            />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-clarity-purple/20 flex items-center justify-center mb-4">
              <span className="text-clarity-purple text-xl">📱</span>
            </div>
            <h3 className="text-xl font-bold mb-2">FULLY RESPONSIVE</h3>
            <p className="text-foreground/80">
              Access your message history and tone adjustments on any device, anytime.
            </p>
            <button className="mt-4 text-clarity-purple flex items-center text-sm font-medium">
              Explore more
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="premium-card rounded-xl p-8 relative overflow-hidden transform transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 w-full h-full opacity-30">
            <SparklesCore
              background="transparent"
              minSize={0.2}
              maxSize={0.6}
              particleDensity={60}
              particleColor="#9b87f5"
              speed={0.2}
              className="w-full h-full"
            />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-clarity-purple/20 flex items-center justify-center mb-4">
              <span className="text-clarity-purple text-xl">🎛️</span>
            </div>
            <h3 className="text-xl font-bold mb-2">CUSTOMIZABLE</h3>
            <p className="text-foreground/80">
              Create your own tone presets and customize the app experience to fit your needs.
            </p>
            <button className="mt-4 text-clarity-purple flex items-center text-sm font-medium">
              Explore more
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-24 text-center relative z-10">
        <h2 className="text-5xl font-bold">
          <span className="text-gradient">ELEVATE YOUR</span><br/>
          <span className="purple-text-gradient">COMMUNICATION</span>
        </h2>
      </div>
    </div>
  );
}
