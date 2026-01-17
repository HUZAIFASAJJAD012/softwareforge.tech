'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MoveUpRight } from 'lucide-react';
import ClientLogos from './ClientLogos';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef(null);
  const titleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const introLineRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const starRef = useRef(null);
  const logoRef = useRef(null);
  
  // Parallax Refs
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRefs.current, {
      yPercent: 100,
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.5
    });

    gsap.to(starRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 10,
      ease: "linear"
    });
    
    tl.from(introLineRefs.current, {
      yPercent: 100,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=1"); 

    tl.from(logoRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");

    // Scroll Parallax & Pin Animation
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=150%", // Pin for 1.5 screen heights
        pin: true,
        scrub: 1,
      }
    });

    scrollTl.to(line1Ref.current, { x: "150vw", ease: "power1.in" }, 0)
            .to(line2Ref.current, { x: "-150vw", ease: "power1.in" }, 0)
            .to(line3Ref.current, { x: "150vw", ease: "power1.in" }, 0)
            .to(".hero-intro", { opacity: 0, duration: 0.5 }, 0)
            .to(".client-logos-container", { opacity: 0, duration: 0.5 }, 0);

  }, { scope: container });

  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !titleRefs.current.includes(el)) {
      titleRefs.current.push(el);
    }
  };

  const addToIntroRefs = (el: HTMLParagraphElement | null) => {
    if (el && !introLineRefs.current.includes(el)) {
      introLineRefs.current.push(el);
    }
  };

  return (
    <div>
      <section 
        ref={container} 
        className="h-screen relative flex flex-col items-center justify-center bg-[#0D0D0D] overflow-hidden mt-20"
        style={{
          paddingLeft: 'var(--padding-x)',
          paddingRight: 'var(--padding-x)'
        }}
      >
        
        {/* Main Typography */}
        <div className="flex flex-col items-center leading-[0.85] text-[13vw] md:text-[12vw] tracking-tighter uppercase text-[#FAFAFA] w-full max-w-[1600px] mt-0">
          
          {/* Line 1: Making */}
          <div ref={line1Ref} className="overflow-hidden w-full flex justify-center md:justify-start md:pl-[10%]">
            <span ref={addToRefs} className="block font-normal">Making</span>
          </div>
          
          {/* Line 2: The bold */}
          <div ref={line2Ref} className="overflow-hidden w-full flex justify-center items-center gap-[2vw]">
             <span ref={addToRefs} className="block font-serif italic lowercase font-light" style={{ fontFamily: 'var(--font-serif)' }}>the</span>
             <span ref={addToRefs} className="block font-semibold">bold</span>
          </div>
          
        {/* Line 3: beautiful & Intro */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end relative px-4 md:px-0 z-10">
           {/* Intro Text (Left) */}
           <div className="hero-intro max-w-sm text-white font-sans tracking-normal normal-case mb-2 md:mb-5 text-left md:ml-[10%] relative z-20">
              <div className="overflow-hidden py-1"><p ref={addToIntroRefs} className="leading-relaxed text-sm">End-to-end creative</p></div>
              <div className="overflow-hidden py-1"><p ref={addToIntroRefs} className="leading-relaxed text-sm">Sotware Company for the</p></div>
              <div className="overflow-hidden py-1"><p ref={addToIntroRefs} className="leading-relaxed text-sm">ambitious.</p></div>
           </div>

           {/* Beautiful (Right) */}
           <div ref={line3Ref} className="overflow-hidden flex md:pr-[5%]">
              <span ref={addToRefs} className="block font-serif italic lowercase" style={{ fontFamily: 'var(--font-serif)' }}>
                beautiful
              </span>
           </div>
        </div>
      </div>
      
        <div className="client-logos-container">
          <ClientLogos />
        </div>
      </section>
    </div>
  );
}
