"use client";

import { useRef, useState, useEffect } from "react";

const DATA = [
  { quote: "The end result was fantastic and our website is stellar and often complimented.", author: "Luke Bugbee, Creative Director, 8VC" },
  { quote: "They transformed our brand completely.", author: "Raj Somaiya, Founder" },
  { quote: "The most helpful, fun people we've worked with.", author: "Nelson Travel" },
  { quote: "Amazing experience and results.", author: "Jane Doe, CEO" },
  { quote: "I recommend them to everyone!", author: "John Smith, Founder" },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const [index, setIndex] = useState(DATA.length);
  const TOTAL = DATA.length;

  const LOOPED = [...DATA, ...DATA, ...DATA];

  useEffect(() => {
    if (index < TOTAL) setTimeout(() => setIndex(index + TOTAL), 500);
    if (index >= TOTAL * 2) setTimeout(() => setIndex(index - TOTAL), 500);
  }, [index, TOTAL]);

  const onStart = (x: number) => (startX.current = x);
  const onEnd = (x: number) => {
    const diff = x - startX.current;
    if (diff > 60) setIndex((i) => i - 1);
    if (diff < -60) setIndex((i) => i + 1);
  };

  return (
    <section className="h-full bg-black overflow-hidden flex items-center relative ">
      {/* Rainbow line at the very top of THIS section */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10"
        style={{
          background: "linear-gradient(90deg,#ff00cc,#3333ff,#00ffcc)",
        }}
      />

      <div
        ref={trackRef}
        className="flex transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)] mt-30"
        style={{
          transform: `translateX(calc(50vw - ${(index + 0.5) * 33.333}vw))`,
        }}
        onMouseDown={(e) => onStart(e.clientX)}
        onMouseUp={(e) => onEnd(e.clientX)}
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
        onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
      >
        {LOOPED.map((item, i) => {
          const isActive = i === index;
          return (
            <div
              key={i}
              className={`w-[33.333vw] max-w-[720px] px-10 shrink-0 text-center transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-30 scale-95"
                }`}
            >
              {/* Rainbow line above testimonial */}
              <div
                className="h-[2px] mb-6 transition-transform duration-700"
                style={{
                  background: "linear-gradient(90deg,#ff00cc,#3333ff,#00ffcc)",
                  transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "center",
                }}
              />
              <p className="text-white text-3xl mb-4">{item.quote}</p>
              <span className="text-white/60 text-xl">— {item.author}</span>
              <p className="text-white/60 text-xl">◆</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}