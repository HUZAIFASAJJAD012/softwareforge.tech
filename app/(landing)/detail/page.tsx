'use client';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Suspense } from 'react';
import DetailHeader from '@/components/landing/DetailHeader';
import ScrollProgressFooter from '@/components/landing/ScrollProgressFooter';


export interface DetailContentProps {
  title?: string;
  video?: string | null;
  mediaItems?: string[];
}

export function DetailContent({ 
  title = 'Project Title', 
  video = null, 
  mediaItems = [] 
}: DetailContentProps) {

  // Fallback if no media passed (using the old hardcoded list as fallback)
  const displayMediaItems = mediaItems.length > 0 ? mediaItems : [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
      // "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop",
      // "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
      // "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
  ];

  const isVideo = (url: string) => {
    return url.endsWith('.mp4') || url.endsWith('.webm');
  };

  return (
    <>
    <ScrollProgressFooter />
    <div className="w-full min-h-screen bg-[#fafafa] text-black pt-24 pb-12">
      
      {/* Title Section */}
      <div className="fixed top-32 left-0 w-full z-0">
        <div className="container px-4 md:px-12 mb-12">
            <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-xl leading-none tracking-tighter font-medium text-[#1a1a1a]"
            >
            {title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-col gap-8 items-start"
            >
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm mb-1" style={{ color: 'black' }}>Service</p>
                  <p className="text-lg font-medium text-black" style={{ color: 'black' }}>Web Design</p>
                </div>
                <div>
                  <p className="text-sm mb-1" style={{ color: 'black' }}>Industry</p>
                  <p className="text-lg font-medium text-black" style={{ color: 'black' }}>Health</p>
                </div>
              </div>

              <div 
                className="group mt-2 px-8 py-4 bg-[#f0f0f0] hover:bg-[#e5e5e5] rounded-xl text-black font-medium transition-colors flex items-center gap-2 cursor-pointer"
                style={{ color: 'black' }}
              >
                View site 
                <span className="text-xl leading-none group-hover:translate-x-1 transition-transform">›</span>
              </div>
            </motion.div>
        </div>
      </div>

      {/* Media Grid */}
      <div className="w-full max-w-[1400px] mx-auto px-4 relative z-10 mt-[20vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Main Video/Imagine Slot */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden md:col-span-2 aspect-[16/9] bg-black"
            >
               {video ? (
                 <video 
                   className="w-full h-full object-cover"
                   autoPlay
                   muted
                   loop
                   playsInline
                   src={video}
                 />
               ) : (
                 <Image
                   src={displayMediaItems[0]} // Fallback to first image if no main video
                   alt="Main project image"
                   fill
                   className="object-cover"
                 />
               )}
            </motion.div>

            {/* Remaining Media Items (Right Stack) */}
            <div className="md:col-span-2 flex flex-col items-end gap-12 w-full">
              {displayMediaItems.map((src, i) => (
                  <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full max-w-[1000px] max-h-[600px]"
                  >
                      {isVideo(src) ? (
                        <video 
                          className="w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          src={src}
                        />
                      ) : (
                        <Image
                            src={src}
                            alt={`Detail media ${i + 1}`}
                            fill
                            className="object-cover"
                        />
                      )}
                  </motion.div>
              ))}
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

function DetailPageContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get('title') || 'Project Title';
  const video = searchParams.get('video');
  const mediaParam = searchParams.get('media'); // Get the raw string

  // Parse media items safely
  let mediaItems: string[] = [];
  try {
    if (mediaParam) {
      mediaItems = JSON.parse(mediaParam);
    }
  } catch (e) {
    console.error("Failed to parse media items", e);
  }

  return <DetailContent title={title} video={video} mediaItems={mediaItems} />;
}

export default function DetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#fafafa]" />}>
      <DetailPageContent />
    </Suspense>
  );
}
