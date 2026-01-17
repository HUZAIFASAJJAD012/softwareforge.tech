'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

interface WorkShowcaseProps {
  videoSrc: string;
  title: string;
  description: string;
  category: string;
  color: string;
}

export default function WorkShowcase({ videoSrc, title, description, category, color }: WorkShowcaseProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="w-full py-12">
      <div className="w-full max-w-[1000px] mx-auto">
        
        <Link href="#" className="block group relative">
          <div 
            className="w-full relative rounded-3xl overflow-hidden transition-transform duration-500 ease-out"
            style={{ backgroundColor: color }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          > 
            <div className="relative transition-all duration-500">
               <div className="w-full h-auto rounded-xl overflow-hidden shadow-2xl relative">
                  <video 
                    ref={videoRef}
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    src={videoSrc} 
                  />
                  
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
               </div>
            </div>

            <motion.div 
               className="absolute z-20 bg-white text-black px-6 py-2 rounded-full font-medium text-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
               style={{ 
                 left: '50%', 
                 top: '50%', 
                 transform: 'translate(-50%, -50%)' 
               }}
            >
              Open <MoveUpRight className="w-3 h-3" />
            </motion.div>
          </div>

          <div className="mt-8 flex flex-col gap-1 items-start">
            <h3 className="text-3xl font-medium text-white">{title}</h3>
            <p className="text-lg text-gray-400">{description}</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
