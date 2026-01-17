import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WorkShowcase from '@/components/WorkShowcase';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full bg-[var(--bg-color)] min-h-[200vh]">
      <Header />
      <Hero />
      
      <section className="bg-black relative z-10">
        <WorkShowcase 
          videoSrc="/videos/v1.mp4"
          title="Need"
          description="Need is your cancer protection system"
          category="Healthcare"
          color="#142d24" 
        />
        
        <WorkShowcase 
          videoSrc="/videos/v2.mp4"
          title="Ocean Bottle"
          description="The world's most needed reusable bottle"
          category="E-commerce"
          color="#1a1a1a"
        />

        <WorkShowcase 
          videoSrc="/videos/v1.mp4"
          title="Need"
          description="Need is your cancer protection system"
          category="Healthcare"
          color="#142d24" 
        />

         <WorkShowcase 
          videoSrc="/videos/v2.mp4"
          title="Ocean Bottle"
          description="The world's most needed reusable bottle"
          category="E-commerce"
          color="#1a1a1a"
        />


      </section>
    </main>
  );
}
