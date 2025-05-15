import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ClarityBubbleDemo = () => {
  const [userText, setUserText] = useState("Let's catch up soon!");
  const [suggestion, setSuggestion] = useState("");
  const [showBubble, setShowBubble] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedTone, setSelectedTone] = useState("neutral");
  const [isTransforming, setIsTransforming] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const [demoPlaying, setDemoPlaying] = useState(true);
  
  // Ref to track if component is mounted
  const isMounted = useRef(true);

  const tones = {
    neutral: "Let's catch up soon!",
    friendly: "Hey! Hope you're well 😊 Let's catch up soon!",
    formal: "I would like to schedule a meeting at your earliest convenience.",
    casual: "Sup! Wanna hang out sometime soon?",
    enthusiastic: "Can't wait to catch up with you! When are you free? 🤩",
    professional: "I'd appreciate the opportunity to connect soon to discuss further."
  };

  // Demo sequence
  useEffect(() => {
    if (!demoPlaying) return;
    
    const demoSequence = async () => {
      if (!isMounted.current) return;
      
      // Initial delay
      await sleep(1500);
      if (!isMounted.current) return;
      
      // Demo Step 1: Show typing indicators
      setIsTyping(true);
      await sleep(1200);
      if (!isMounted.current) return;
      
      // Demo Step 2: Show bubble suggestion
      setIsTyping(false);
      setDemoStep(1);
      setShowBubble(true);
      await sleep(2000);
      if (!isMounted.current) return;
      
      // Demo Step 3: Select tone
      setSelectedTone("friendly");
      setSuggestion(tones.friendly);
      await sleep(1500);
      if (!isMounted.current) return;
      
      // Demo Step 4: Apply the suggestion
      setShowBubble(false);
      setIsTransforming(true);
      await sleep(500);
      if (!isMounted.current) return;
      
      setUserText(tones.friendly);
      setDemoStep(2);
      await sleep(2000);
      if (!isMounted.current) return;
      
      // Demo Step 5: Repeat with another tone
      setUserText("Let's catch up soon!");
      setIsTyping(true);
      await sleep(1200);
      if (!isMounted.current) return;
      
      setIsTyping(false);
      setShowBubble(true);
      setSelectedTone("professional");
      setSuggestion(tones.professional);
      await sleep(2000);
      if (!isMounted.current) return;
      
      setShowBubble(false);
      setIsTransforming(true);
      await sleep(500);
      if (!isMounted.current) return;
      
      setUserText(tones.professional);
      setDemoStep(3);
      await sleep(2000);
      if (!isMounted.current) return;
      
      // Demo Step 6: Repeat with casual tone
      setUserText("Let's catch up soon!");
      setIsTyping(true);
      await sleep(1200);
      if (!isMounted.current) return;
      
      setIsTyping(false);
      setShowBubble(true);
      setSelectedTone("casual");
      setSuggestion(tones.casual);
      await sleep(2000);
      if (!isMounted.current) return;
      
      setShowBubble(false);
      setIsTransforming(true);
      await sleep(500);
      if (!isMounted.current) return;
      
      setUserText(tones.casual);
      setDemoStep(4);
      await sleep(2000);
      if (!isMounted.current) return;
      
      // Reset and loop
      setUserText("Let's catch up soon!");
      setSelectedTone("neutral");
      setDemoStep(0);
      setIsTransforming(false);
      
      // Start the sequence again after a pause
      await sleep(1500);
      if (isMounted.current) {
        demoSequence();
      }
    };
    
    demoSequence();
    
    return () => {
      isMounted.current = false;
    };
  }, [demoPlaying]);

  // Helper function for async sleep
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="flex items-center justify-center p-4 w-full max-w-3xl mx-auto"
    >
      <div className="premium-card w-full rounded-xl border-[3px] border-[#9d4edd] bg-[#0f0018] shadow-xl flex flex-col items-center justify-center relative overflow-hidden p-6 min-h-[500px] z-20">
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(157,78,221,0.15) 0%, rgba(15,0,24,0) 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        {/* Header Content */}
        <motion.div 
          className="text-center relative z-10 w-full mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div 
            className="text-[#9d4edd] font-bold text-2xl mb-3"
            whileHover={{ scale: 1.05 }}
          >
            ClarityBubble in Action
          </motion.div>
          <p className="text-white/80 max-w-md mx-auto">
            Watch how our AI transforms your message in real-time to match your desired tone
          </p>
        </motion.div>

        {/* Tone Selector - Highlighted based on demo sequence */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-6 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {Object.keys(tones).map((tone) => (
            <motion.div
              key={tone}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                selectedTone === tone 
                  ? "bg-[#9d4edd] text-white" 
                  : "bg-[#2a0944] text-white/70"
              }`}
              animate={selectedTone === tone ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              {tone.charAt(0).toUpperCase() + tone.slice(1)}
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Demo Area */}
        <motion.div 
          className="w-full max-w-md relative z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="relative mb-8">
            <textarea
              value={userText}
              readOnly
              className="w-full px-4 py-3 rounded-lg border-2 border-[#9d4edd]/40 bg-black/60 text-white placeholder-white/50 text-base resize-none h-32 focus:outline-none focus:border-[#9d4edd] transition-all shadow-lg"
              style={{ fontFamily: 'inherit' }}
            />
            
            {/* Floating Bubble Icon - Always Present */}
            <motion.div
              className="absolute right-4 bottom-4 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              animate={{ 
                y: [0, -6, 0],
                scale: showBubble ? [1, 1.2, 1] : 1
              }}
              transition={{ 
                y: { duration: 2, repeat: Infinity, repeatType: "reverse" },
                scale: { duration: 0.5 }
              }}
            >
              <div className={`h-10 w-10 rounded-full flex items-center justify-center`}>
                <img src="/logo.svg" alt="ClarityBubble Logo" className="h-7 w-7" />
              </div>
            </motion.div>
            
            {/* AI thinking indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-16 bottom-6 flex items-center gap-1"
                >
                  <span className="text-sm text-[#9d4edd]/80">AI thinking</span>
                  <div className="flex space-x-1">
                    {[0, 1, 2].map((dot) => (
                      <motion.div
                        key={dot}
                        className="h-2 w-2 rounded-full bg-[#9d4edd]"
                        animate={{
                          y: [0, -5, 0]
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: dot * 0.1
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Suggestion Bubble */}
            <AnimatePresence>
              {showBubble && (
                <motion.div 
                  className="absolute -top-16 right-16"
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <div className="flex items-end">
                    <motion.div 
                      className="bg-white rounded-lg p-3 shadow-lg border border-[#9d4edd]/30"
                      whileHover={{ scale: 1.02 }}
                      animate={{ 
                        boxShadow: ["0px 4px 12px rgba(157, 78, 221, 0.2)", "0px 6px 16px rgba(157, 78, 221, 0.4)", "0px 4px 12px rgba(157, 78, 221, 0.2)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-7 w-7 rounded-full flex items-center justify-center overflow-hidden">
                          <img src="/logo.svg" alt="ClarityBubble Logo" className="h-7 w-7" />
                        </div>
                        <span className="text-[#9d4edd] font-bold">ClarityBubble</span>
                      </div>
                      <div className="text-sm text-gray-800 font-medium">
                        Try a <span className="text-[#9d4edd]">{selectedTone}</span> tone?
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        "{suggestion}"
                      </div>
                      <motion.div
                        className="mt-2 w-full bg-[#9d4edd] text-white py-1.5 rounded-md text-sm font-medium text-center"
                        animate={{ 
                          backgroundColor: ["#9d4edd", "#8a2be2", "#9d4edd"],
                        }}
                        transition={{ duration: 2, repeat: 1, repeatDelay: 0.5 }}
                      >
                        Apply Suggestion
                      </motion.div>
                    </motion.div>
                    <div className="w-4 h-4 bg-white transform rotate-45 -ml-2 mt-2 border-r border-b border-[#9d4edd]/30"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Transformation Animation */}
          <AnimatePresence>
            {isTransforming && (
              <motion.div 
                className="absolute inset-0 bg-[#9d4edd]/10 rounded-lg flex items-center justify-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                  className="bg-[#9d4edd] rounded-full flex items-center justify-center"
                >
                  <img src="/logo.svg" alt="ClarityBubble Logo" className="h-14 w-14" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tone Score and Status */}
          <motion.div 
            className="bg-[#2a0944] rounded-lg p-4 border border-[#9d4edd]/40"
            animate={{ 
              borderColor: selectedTone !== "neutral" ? ["rgba(157, 78, 221, 0.4)", "rgba(157, 78, 221, 0.7)", "rgba(157, 78, 221, 0.4)"] : "rgba(157, 78, 221, 0.4)"
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="h-5 w-5 rounded-full flex items-center justify-center overflow-hidden">
                {/* Mini logo */}
                <img src="/logo.svg" alt="ClarityBubble Logo" className="h-5 w-5" />
              </div>
              <div className="text-xs text-[#9d4edd] font-medium">
                {selectedTone === "neutral" ? "ORIGINAL MESSAGE" : `TRANSFORMED TO ${selectedTone.toUpperCase()} TONE`}
              </div>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={userText}
                className="text-white text-sm"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {userText}
              </motion.div>
            </AnimatePresence>
            
            <motion.div 
              className="mt-4 flex justify-between items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-xs text-white/50">
                ClarityBubble {selectedTone === "neutral" ? "is ready to transform your message" : "transformed your message"}
              </div>
              {selectedTone !== "neutral" && (
                <motion.div 
                  className="text-xs flex items-center gap-1 text-[#9d4edd]"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#9d4edd" stroke="#9d4edd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Tone score: {selectedTone === "friendly" ? "95%" : selectedTone === "professional" ? "98%" : "90%"}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="mt-10 px-6 py-3 bg-[#9d4edd] text-white rounded-full font-bold shadow-lg relative z-10 overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <span className="relative z-10">Try ClarityBubble Now</span>
          <motion.div 
            className="absolute inset-0 bg-[#8a2be2]"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ type: "tween" }}
          />
        </motion.button>

        {/* How it works section */}
        <motion.div
          className="mt-10 text-center text-white/80 text-sm max-w-sm relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <div className="text-[#9d4edd] font-semibold mb-2">How it works:</div>
          <div className="flex justify-between mt-3 ml-10 gap-8">
            <motion.div 
              className="flex flex-col items-center"
              animate={{ 
                scale: demoStep === 0 ? [1, 1.1, 1] : 1,
                opacity: demoStep === 0 ? 1 : 0.7
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-[#2a0944] rounded-full w-8 h-8 flex items-center justify-center mb-2">1</div>
              <span>Type</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              animate={{ 
                scale: demoStep === 1 ? [1, 1.1, 1] : 1,
                opacity: demoStep === 1 ? 1 : 0.7
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-[#2a0944] rounded-full w-8 h-8 flex items-center justify-center mb-2">2</div>
              <span>Receive suggestions</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              animate={{ 
                scale: demoStep >= 2 ? [1, 1.1, 1] : 1,
                opacity: demoStep >= 2 ? 1 : 0.7
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-[#2a0944] rounded-full w-8 h-8 flex items-center justify-center mb-2">3</div>
              <span>Transform</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ClarityBubbleDemo;