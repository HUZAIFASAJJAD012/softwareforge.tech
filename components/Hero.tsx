'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MoveUpRight } from 'lucide-react';

export default function Hero() {
  const container = useRef(null);
  const titleRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRefs.current, {
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.5
    });
    
    // Fade in intro text
    gsap.from(".hero-intro", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.5,
      ease: "power2.out"
    });
  }, { scope: container });

  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !titleRefs.current.includes(el)) {
      titleRefs.current.push(el);
    }
  };

  return (
    <section 
      ref={container} 
      className="h-screen relative flex flex-col items-center justify-center bg-[#0D0D0D] overflow-hidden"
      style={{
        paddingLeft: 'var(--padding-x)',
        paddingRight: 'var(--padding-x)'
      }}
    >
      
      {/* Main Typography */}
      <div className="flex flex-col items-center leading-[0.85] text-[15vw] md:text-[14vw] tracking-tighter uppercase text-[#FAFAFA] w-full max-w-[1600px] mt-[-5vh]">
        
        {/* Line 1: Making */}
        <div className="overflow-hidden w-full flex justify-center md:justify-start md:pl-[10%]">
          <span ref={addToRefs} className="block font-medium">Making</span>
        </div>
        
        {/* Line 2: The bold */}
        <div className="overflow-hidden w-full flex justify-center items-center gap-[2vw]">
           <span ref={addToRefs} className="block font-serif italic lowercase font-light" style={{ fontFamily: 'var(--font-serif)' }}>the</span>
           <span ref={addToRefs} className="block font-bold">bold</span>
        </div>
        
        {/* Line 3: beautiful */}
        <div className="overflow-hidden w-full flex justify-center md:justify-end md:pr-[5%] relative">
          <span ref={addToRefs} className="block font-serif italic lowercase" style={{ fontFamily: 'var(--font-serif)' }}>
            beautiful
            {/* Star Icon */}
            <svg width="0.3em" height="0.3em" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[10%] left-[26%] w-[12%] h-[12%] text-white animate-pulse">
               <path d="M26 0L28.5 23.5L52 26L28.5 28.5L26 52L23.5 28.5L0 26L23.5 23.5L26 0Z" fill="currentColor"/>
            </svg>
          </span>
        </div>
      </div>
      
      {/* Bottom Content */}
      <div className="absolute bottom-12 left-0 w-full px-8 md:px-12 flex flex-col md:flex-row justify-between items-end hero-intro">
        
        {/* Intro Text */}
        <div className="max-w-xs text-sm md:text-base text-[#E5E5E5] font-sans leading-relaxed mb-12 md:mb-0">
          <p>End-to-end creative</p>
          <p>agency for the</p>
          <p>ambitious.</p>
        </div>

        {/* Client Logos Row (Mockups) */}
        <div className="flex flex-wrap gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-xl font-bold font-sans">ocean<br/>bottle</span>
          <div className="bg-white text-black p-1 font-bold rounded-sm h-8 w-8 flex items-center justify-center text-xs">EPIC</div>
          <span className="text-lg font-bold">PrimaryBid</span>
          <span className="text-lg font-light tracking-widest">8VC</span>
          <span className="border border-white/50 px-2 py-0.5 text-xs tracking-[0.2em] uppercase">Stanley's</span>
          <div className="text-xs leading-tight">PROJECT<br/><span className="italic font-serif text-lg">Giving Back</span></div>
        </div>
      </div>
    </section>
  );
}
