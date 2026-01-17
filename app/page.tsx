import Header from '@/components/Header';
import Hero from '@/components/Hero';

import CreativeTitle from '@/components/landing/CreativeTitle';

import ContactSection from '@/components/landing/ContactSection';
import Testimonials from '@/components/landing/Testomonials';

import WorkShowcase from '@/components/WorkShowcase';

import Link from 'next/link';


export default function Home() {
  return (
    <main className="w-full bg-[var(--bg-color)] min-h-[200vh]">
      <Header />
      <Hero />


      {/* Spacer content to demonstrate smooth scrolling */}
      <section className="container py-24 border-t border-white/10">
        <div className="flex flex-col gap-12">
          <div className="flex justify-between items-baseline">
            <h2 className="text-4xl text-[var(--text-primary)]">Selected Works</h2>
            <span className="text-[var(--text-secondary)]">2023 — 2024</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-[4/5] bg-[#1a1a1a] rounded-lg relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--accent-green)] transition-colors duration-500">
                  Project {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24 border-t border-white/10">
        <div className="flex flex-col gap-12">
          <h2 className="text-4xl text-[var(--text-primary)]">Agency</h2>
          <p className="text-xl max-w-2xl text-[var(--text-secondary)]">
            We are a team of designers, developers, and strategists building the future of the web.
          </p>
        </div>

      
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
      <CreativeTitle />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
