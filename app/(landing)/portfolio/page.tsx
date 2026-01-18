'use client';
import DetailHeader from '@/components/landing/DetailHeader';
import PortfolioFooter from '@/components/landing/PortfolioFooter';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollProgressFooter from '@/components/landing/ScrollProgressFooter';

const portfolioItems = [
  {
    src: '/portfolio/one.webp',
    title: 'Need',
    category: 'Healthcare',
    description: 'We believe cancer doctors are heroes',
    video: '/videos/v1.mp4',
    mediaItems: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop'
    ]
  },
  {
    src: '/portfolio/two.png',
    title: 'Ella May',
    category: 'Fashion',
    description: 'London Fashion Week 2024',
    video: '/videos/v2.mp4',
    mediaItems: [
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2576&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2574&auto=format&fit=crop'
    ]
  },
  {
    src: '/portfolio/three.png',
    title: 'GetYourGuide',
    category: 'Travel',
    description: 'Fall Campaigns',
    video: '/videos/v3.mp4',
    mediaItems: [
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2670&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop',
        '/videos/v1.mp4'
    ]
  },
  {
    src: '/portfolio/four.webp',
    title: 'Urban Shift',
    category: 'Architecture',
    description: 'Modern living spaces',
    video: '/videos/v4.mp4',
    mediaItems: [
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2610&auto=format&fit=crop'
    ]
  },
  {
    src: '/portfolio/five.webp',
    title: 'Neon Nights',
    category: 'Entertainment',
    description: 'Nightlife reimagined',
    video: '/videos/v1.mp4', // Reusing v1 since there are only 4 videos
    mediaItems: [
      'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop'
    ]
  },
  {
    src: '/portfolio/six.webp',
    title: 'Eco Life',
    category: 'Sustainability',
    description: 'Green energy solutions',
    video: '/videos/v2.mp4', // Reusing v2
    mediaItems: [
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2641&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2574&auto=format&fit=crop'
    ]
  }
];

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-[#fafafa] px-20">
            <ScrollProgressFooter />
            <div className="pt-40 pb-32 px-4 md:px-8 max-w-[1600px] 2xl:max-w-[2000px] mx-auto min-h-[60vh]">
                <h1 className="text-4xl md:text-8xl font-medium text-black mb-20 tracking-tighter">Portfolio</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    {portfolioItems.map((item, index) => {
                       // Construct query parameters
                       const query = new URLSearchParams({
                         title: item.title,
                         video: item.video,
                         media: JSON.stringify(item.mediaItems)
                       }).toString();

                       return (
                        <div 
                            key={index} 
                            className={`flex flex-col gap-4 ${index % 3 === 1 ? 'md:mt-12' : ''}`}
                        >
                            <Link href={`/detail?${query}`} className="block group cursor-pointer">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden"
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </motion.div>
                            </Link>
                            
                            <div className="flex items-center justify-between px-2">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-xl font-medium text-black">{item.title}</h3>
                                        {index < 3 && (
                                            <span className="px-3 py-1 rounded-full bg-[#f0f0f0] text-xs font-medium text-black">New</span>
                                        )}
                                    </div>
                                    <span className="text-sm text-gray-500">{item.category}</span>
                                </div>
                                <Link 
                                  href={`/detail?${query}`}
                                  className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors text-sm"
                                >
                                    ↗
                                </Link>
                            </div>
                        </div>
                       );
                    })}
                </div>
            </div>
        </main>
    );
}