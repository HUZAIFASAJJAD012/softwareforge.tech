"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      })
        .to(".line-1", { x: "-25vw", opacity: 0 }, 0)
        .to(".line-2", { x: "25vw", opacity: 0 }, 0)
        .to(".line-3", { x: "-25vw", opacity: 0 }, 0);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen bg-black flex items-center justify-center"
    >
      <div className="text-white leading-none text-center">
        <h1 className="line-1 text-[10vw] font-light">Making</h1>
        <h1 className="line-2 text-[10vw] font-light">the bold</h1>
        <h1 className="line-3 text-[10vw] font-light italic">
          beautiful
        </h1>
      </div>
    </section>
  );
}
