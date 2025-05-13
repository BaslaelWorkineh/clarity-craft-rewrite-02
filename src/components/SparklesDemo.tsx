
"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

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
          speed={0.8}
        />
      </div>
      
      <motion.div 
        className="flex flex-col items-center justify-center relative z-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="md:text-7xl text-4xl lg:text-8xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gradient">ELEVATE YOUR</span><br/>
          <span className="purple-text-gradient">COMMUNICATION</span>
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-lg md:text-xl text-foreground/80 max-w-3xl text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transform your messages with perfect tone control. Clarity Bubble helps you craft the right message for every situation, adapting automatically to your context.
        </motion.p>
        
        <motion.div 
          className="mt-10 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button className="bg-clarity-purple hover:bg-clarity-purple/90 text-white px-8 py-6 rounded-none text-lg flex items-center gap-2 purple-button-glow sharp-border">
            Try it now <ArrowRight className="h-5 w-5" />
          </Button>
          
          <Button variant="outline" className="bg-transparent border-white/20 hover:bg-white/5 text-white px-8 py-6 rounded-none text-lg sharp-border">
            View demos
          </Button>
        </motion.div>
        
        <motion.div 
          className="glass-morphism rounded-none sharp-border px-6 py-3 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
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
        </motion.div>
      </motion.div>
      
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
