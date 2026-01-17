'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const logos = [
  ['/logos/1.svg', '/logos/2.svg'],
  ['/logos/3.svg', '/logos/4.svg'],
  ['/logos/5.svg', '/logos/6.svg'],
  ['/logos/7.svg', '/logos/8.svg'],
  ['/logos/9.svg', '/logos/10.svg'],
  ['/logos/7.svg', '/logos/8.svg'],
];

export default function ClientLogos() {
  return (
    <div className="w-full pt-16 pb-10">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center opacity-80 justify-items-center">
          {logos.map((pair, index) => (
            <LogoPair key={index} images={pair} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LogoPair({ images, index }: { images: string[]; index: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === 0 ? 1 : 0));
    }, 3000 + index * 500); 

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative h-20 w-44 md:h-24 md:w-56">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            <Image
              src={images[current]}
              alt={`Client logo ${current + 1}`}
              fill
              className="object-contain invert brightness-0 filter" 
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
