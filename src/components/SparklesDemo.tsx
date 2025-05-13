
"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

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
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="glass-morphism rounded-xl p-8 relative overflow-hidden">
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
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="glass-morphism rounded-xl p-8 relative overflow-hidden">
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
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="glass-morphism rounded-xl p-8 relative overflow-hidden">
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
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-24 text-center">
        <h2 className="text-5xl font-bold">
          <span className="text-gradient">ELEVATE YOUR</span><br/>
          <span className="purple-text-gradient">COMMUNICATION</span>
        </h2>
      </div>
    </div>
  );
}
