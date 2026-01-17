import ClientLogos from '@/components/landing/ClientLogos';

import CreativeTitle from '@/components/landing/CreativeTitle';

import ContactSection from '@/components/landing/ContactSection';
import Testimonials from '@/components/landing/Testomonials';

import WorkShowcase from '@/components/landing/WorkShowcase';

import Link from 'next/link';
import Hero from '@/components/landing/Hero';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <main className="w-full bg-[var(--bg-color)] min-h-[200vh]">
      <Hero />
      <section className="bg-black relative z-10">
        <WorkShowcase
          videoSrc="/videos/v1.mp4"
          title="Need"
          description="Need is your cancer protection system"
          category="Healthcare"
          color="#142d24"
          mediaItems={[
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop",
            "/videos/v1.mp4", // Adding a video to test the video rendering feature
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
          ]}
        />

        <WorkShowcase
          videoSrc="/videos/v2.mp4"
          title="Ocean Bottle"
          description="The world's most needed reusable bottle"
          category="E-commerce"
          color="#1a1a1a"
          mediaItems={[
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop",
            "/videos/v2.mp4",
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop"
          ]}
        />

        <WorkShowcase
          videoSrc="/videos/v1.mp4"
          title="Need"
          description="Need is your cancer protection system"
          category="Healthcare"
          color="#142d24"
          mediaItems={[
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
          ]}
        />

        <WorkShowcase
          videoSrc="/videos/v2.mp4"
          title="Ocean Bottle"
          description="The world's most needed reusable bottle"
          category="E-commerce"
          color="#1a1a1a"
          mediaItems={[
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop"
          ]}
        />
      </section>
      <CreativeTitle />

      <ContactSection />
      <Footer />
    </main>
  );
}