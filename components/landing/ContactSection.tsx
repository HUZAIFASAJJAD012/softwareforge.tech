"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUs from "./About";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !leftRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top+=50",
        end: "bottom bottom",
        pin: leftRef.current,
        pinSpacing: false,
        scrub: false,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="w-full py-20 px-4 bg-black text-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT (GSAP pinned) */}
          <div ref={leftRef} className="h-fit">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Get a quote. Fast.
              </h2>

              <p className="text-gray-400 text-lg">
                A one stop shop for marketing, development & creative needs.
              </p>

              <h3 className="text-3xl font-bold">One-off Project</h3>
              <p className="text-gray-400 text-lg">
                Delivery of a brand, website, or full-scale campaign.
              </p>

              <h3 className="text-3xl font-bold">Retained Support</h3>
              <p className="text-gray-400 text-lg">
                Instant response, strategy & reporting at discounted prices.
              </p>
            </div>
          </div>

          {/* RIGHT (scrolls naturally) */}
          <div className="space-y-6 mt-60">
            <h2 className="text-3xl font-bold">Get in touch,</h2>
            <h2 className="text-3xl font-bold">however works for you</h2>

            <p className="text-gray-500 text-lg">
              Let’s not waste any time.
            </p>

            {["Email", "Phone", "test", "test"].map((item) => (
              <div
                key={item}
                className="bg-[#fff9f0] p-8 rounded-xl text-gray-900"
              >
                <h3 className="text-2xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}