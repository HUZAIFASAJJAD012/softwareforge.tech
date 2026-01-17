'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const logos = [
  ['/logos/1.png', '/logos/2.png'],
  ['/logos/3.png', '/logos/4.png'],
  ['/logos/5.png', '/logos/6.png'],
  ['/logos/7.png', '/logos/8.png'],
  ['/logos/9.png', '/logos/10.png'],
];

export default function ClientLogos() {
  return (
    <section className="w-full  py-20 border-t border-white/5">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="flex flex-wrap justify-between items-center gap-12 md:gap-20 opacity-80">
          {logos.map((pair, index) => (
            <LogoPair key={index} images={pair} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoPair({ images, index }: { images: string[]; index: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Stagger the interval slightly based on index to create a wave effect
    // or just random start.
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === 0 ? 1 : 0));
    }, 3000 + index * 500); // Base 3s + offset

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative h-12 w-32 md:h-16 md:w-40">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Using fill to handle varied logo aspect ratios gracefully */}
          <div className="relative w-full h-full">
            <Image
              src={images[current]}
              alt={`Client logo ${current + 1}`}
              fill
              className="object-contain invert brightness-0 filter" // Ensuring white logo if they are black, or keeping as is if white. 
              // The reference image shows white logos on black. Assuming source images might need inversion or are already correct.
              // I'll assume they might be colored or black and force them to white/gray scale if needed. 
              // For now, object-contain is key.
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
