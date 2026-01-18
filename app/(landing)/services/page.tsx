'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Code2, ShoppingBag, Brain, Palette } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: 'logo-design',
        title: 'Logo Design',
        subtitle: 'Brand Identity That Speaks',
        description: 'We craft distinctive visual identities that capture your brand essence. Our logo designs are more than just graphics—they are the foundation of your brand story, meticulously designed to resonate with your audience and stand the test of time.',
        features: ['Custom Brand Identity', 'Vector Graphics', 'Brand Guidelines', 'Multiple Concepts'],
        image: '/services/logo-design.png',
        icon: Palette,
        color: '#000000',
    },
    {
        id: 'ecommerce',
        title: 'E-Commerce Development',
        subtitle: 'Sell Smarter, Scale Faster',
        description: 'Transform your business with powerful e-commerce solutions. We build high-converting online stores with seamless payment integration, inventory management, and user experiences that turn visitors into loyal customers.',
        features: ['Custom Storefronts', 'Payment Integration', 'Inventory Systems', 'Analytics Dashboard'],
        image: '/services/ecommerce.png',
        icon: ShoppingBag,
        color: '#000000',
    },
    {
        id: 'ai-development',
        title: 'AI Development',
        subtitle: 'Intelligence That Transforms',
        description: 'Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent solutions. From machine learning models to AI-powered chatbots, we bring cutting-edge technology to your fingertips.',
        features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
        image: '/services/ai-development.png',
        icon: Brain,
        color: '#000000',
    },
    {
        id: 'web-design',
        title: 'Website Design',
        subtitle: 'Digital Experiences That Captivate',
        description: 'Create stunning, responsive websites that leave lasting impressions. Our designs blend aesthetics with functionality, ensuring your digital presence reflects the premium quality of your brand across all devices.',
        features: ['Responsive Design', 'UI/UX Excellence', 'Performance Optimized', 'SEO Ready'],
        image: '/services/web-design.png',
        icon: Code2,
        color: '#000000',
    },
];

export default function ServicesPage() {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const btnRef = useRef(null);

    // Hero Internal Animation (Fade out on scroll)
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "+=150%", 
                pin: true,
                scrub: 1,
            }
        });

        tl.to(titleRef.current, { y: -150, opacity: 0, duration: 1, ease: "power1.in" }, 0)
          .to(textRef.current, { y: -150, opacity: 0, duration: 1, ease: "power1.in" }, 0)
          .to(btnRef.current, { y: -150, opacity: 0, duration: 1, ease: "power1.in" }, 0);
          
    }, { scope: containerRef });

    return (
        <main ref={containerRef} className="bg-[#fafafa]">
            
            {/* HERO SECTION (Sticky Card 1) */}
            <section 
                ref={heroRef} 
                className="relative h-screen flex flex-col items-center justify-center px-4 md:px-8 overflow-hidden z-0"
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 h-full w-full">
                    <Image
                        src="/services/hero.png"
                        alt="Services Hero"
                        fill
                        priority
                        className="object-cover opacity-50"
                    />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto text-center mt-[80px]">
                    <div ref={titleRef}>
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-medium text-black tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
                        >
                            Engineering Digital Excellence for{' '}
                            <span className="text-black">Tomorrow&apos;s Brands</span>
                        </motion.h1>
                    </div>

                    <div ref={textRef}>
                        <motion.p
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
                            className="text-lg md:text-xl text-gray-900 max-w-2xl mx-auto mb-12"
                        >
                            We transform bold ideas into extraordinary digital experiences. 
                            From brand identity to AI-powered solutions, we craft the future of your business.
                        </motion.p>
                    </div>

                    <div ref={btnRef}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.7 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black  font-medium rounded-full  transition-all duration-300 hover:scale-105"
                                style={{ color: 'white' }}
                            >
                                Start Your Project
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SERVICES LOOP (Sticky Cards 2...N) */}
            {services.map((service, index) => {
                const IconComponent = service.icon;
                const isEven = index % 2 === 0;
                return (
                    <section 
                        key={service.id}
                        className="sticky top-0 min-h-[70vh] py-24 flex flex-col justify-center px-4 md:px-8 bg-[#fafafa] border-t border-gray-100"
                        style={{ zIndex: index + 10 }}
                    >
                        <div className="max-w-[1400px] mx-auto w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-10 items-center`}
                            >
                                {/* Image */}
                                <div className="w-full lg:w-1/2">
                                    <div 
                                        className="relative aspect-video md:aspect-square rounded-3xl overflow-hidden group w-full max-h-[60vh]"
                                        style={{
                                            boxShadow: `0 20px 60px ${service.color}20`,
                                        }}
                                    >
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Overlay gradient */}
                                        <div 
                                            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                            style={{ background: `linear-gradient(135deg, ${service.color}, transparent)` }}
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-1/2">
                                    <div 
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                                        style={{ 
                                            backgroundColor: `${service.color}15`,
                                            color: service.color 
                                        }}
                                    >
                                        <IconComponent className="w-4 h-4" />
                                        <span className="text-sm font-semibold">{service.subtitle}</span>
                                    </div>

                                    <h2 className="text-3xl md:text-5xl font-medium text-black mb-6 tracking-tight">
                                        {service.title}
                                    </h2>

                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <div 
                                                key={idx}
                                                className="flex items-center gap-3"
                                            >
                                                <div 
                                                    className="w-2 h-2 rounded-full"
                                                    style={{ backgroundColor: service.color }}
                                                />
                                                <span className="text-gray-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-black font-medium hover:gap-4 transition-all duration-300"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                );
            })}

            {/* CTA SECTION (Final Sticky Card) */}
            <section 
                className="sticky top-0 min-h-[70vh] py-24 flex flex-col justify-center items-center px-4 md:px-8 bg-white/60 backdrop-blur-xl border-t border-gray-100"
                style={{ zIndex: 50 }}
            >
                <div className="max-w-[1200px] mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-medium text-black mb-6 tracking-tight"
                    >
                        Ready to Build Something Amazing?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
                    >
                        Let&apos;s collaborate to create digital experiences that set your brand apart. 
                        Your vision, our expertise—together we build the extraordinary.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-[#333] transition-all duration-300 hover:scale-105"
                            style={{ color: 'white' }}
                        >
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black/10 text-black font-medium rounded-full transition-all duration-300 border border-black/20"
                        >
                            View Our Work
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
