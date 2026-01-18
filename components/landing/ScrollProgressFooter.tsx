'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollProgressFooter() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-[-8px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] z-[100]">
      <div 
        className="relative flex items-center justify-between px-6 py-7 rounded-xl bg-[#edeff1]/80 backdrop-blur-md shadow-sm border border-white/50 gap-6"
      >
        {/* Left: Project Info */}
        <button className="flex items-center gap-2 group shrink-0">
          <span className="font-medium text-black text-sm">Project info</span>
          <span className="text-lg leading-none group-hover:rotate-45 transition-transform duration-300 text-black">+</span>
        </button>

        {/* Center: Progress Bar Tracker */}
        <div className="flex-grow h-[2px] bg-black/10 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute left-0 top-0 bottom-0 bg-black w-full origin-left"
            style={{ scaleX }}
          />
        </div>

        {/* Right: Next Project */}
        <button 
          onClick={handleScrollDown}
          className="flex items-center gap-2 group text-black shrink-0"
        >
          <span className="font-medium text-sm">Next</span>
          <span className="text-lg leading-none group-hover:translate-x-1 transition-transform duration-300">»</span>
        </button>
      </div>
    </div>
  );
}
