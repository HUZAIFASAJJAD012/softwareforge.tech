"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testimonials from "./Testomonials";

gsap.registerPlugin(ScrollTrigger);

export default function CreativeTitle() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, {
        x: "-30vw",
        y: "-30vh",
        opacity: 0.3,
        scale: 1.05,
        filter: "brightness(0.8)",
      });

      gsap.set(nextRef.current, {
        y: "100%",
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1, // 👈 smooth catch-up
          pin: true,
        },
      })
        // Phase 1: glide into center
        .to(titleRef.current, {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "brightness(1)",
          duration: 1,
        })
        // Phase 2: overlap takeover
        .to(
          nextRef.current,
          {
            y: "0%",
            duration: 1.2,
          },
          0.6 // 👈 overlap timing
        )
        // Phase 3: soften title as it’s covered
        .to(
          titleRef.current,
          {
            scale: 0.96,
            filter: "brightness(0.7)",
          },
          0.6
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-black overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          ref={titleRef}
          className="text-white text-[12vw] font-light will-change-transform"
        >
          Creative
        </h1>
      </div>

      <div
        ref={nextRef}
        className="absolute inset-0"
      >
        <Testimonials />
      </div>
    </section>
  );
}
