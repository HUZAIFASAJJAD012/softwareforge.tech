'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import BookingSection from '@/components/landing/BookingSection';

const teamMembers = [
    {
        name: 'Taimoor Salyhal',
        role: 'Founder & CEO',
        image: '/out team/ceo.webp',
        linkedin: 'https://linkedin.com/in/'
    },
    {
        name: 'Muhammad Maalik',
        role: 'Founder & CEO',
        image: '/out team/founder.webp',
        linkedin: 'https://linkedin.com/in/'
    },
    {
        name: 'Ali Hassan Naseem',
        role: 'Software Engineer',
        image: '/out team/SE.webp',
        linkedin: 'https://linkedin.com/in/'
    },
    {
        name: 'InamUllah Khan',
        role: 'Laravel Developer',
        image: '/out team/laravel-developer.webp',
        linkedin: 'https://linkedin.com/in/'
    },
    {
        name: 'Huzaifa Sajjad',
        role: 'Full Stack Developer',
        image: '/out team/full-stack-dev1.webp',
        linkedin: 'https://linkedin.com/in/'
    },
    {
        name: 'Mubarak Ali',
        role: 'Full Stack Developer',
        image: '/out team/full-stack-dev3.webp',
        linkedin: 'https://linkedin.com/in/'
    },
    {
        name: 'Muhammad Shahzeb Khan',
        role: 'Full Stack Developer',
        image: '/out team/full-stack-dev4.webp',
        linkedin: 'https://linkedin.com/in/'
    },
    {
        name: 'Saad Mustafa',
        role: 'Full Stack Developer',
        image: '/out team/full-stack-dev5.webp',
        linkedin: 'https://linkedin.com/in/'
    },
    {
        name: 'Saeed Siddiqui',
        role: 'Full Stack Developer',
        image: '/out team/full-stack-dev6.webp',
        linkedin: 'https://linkedin.com/in/'
    },
    {
        name: 'Ansar Sultan',
        role: 'Associate Software Engineer',
        image: '/out team/full-stack-dev7.webp',
        linkedin: 'https://linkedin.com/in/'
    }
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-[#fafafa] p-20">
            {/* Main Container */}
            <div className="pt-40 pb-32 px-4 md:px-8 max-w-[1600px] 2xl:max-w-[2000px] mx-auto">
                
                {/* Page Title */}
                <h1 className="text-4xl md:text-8xl font-medium text-black mb-16 tracking-tighter text-center md:text-left">
                    Our Team
                </h1>

                {/* CEO Section */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-40 items-start">
                    {/* CEO Image */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 aspect-[4/3] md:aspect-[5/5] relative rounded-[2rem] overflow-hidden bg-gray-200"
                    >
                         <Image
                            src="/out team/ceo.webp"
                            alt="Taimoor Salyhal"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* CEO Info */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center h-full pt-8 md:pt-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-5xl md:text-7xl font-medium text-black mb-4 tracking-tight">
                                Taimoor Salyhal
                            </h2>
                            <p className="text-xl text-[#e85a48] mb-12 font-medium ml-4">Founder & Lead Product Designer</p>
                            
                            <div className="space-y-8 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                                <p className="text-black">
                                    I am a visionary product strategist and lead designer at SoftwareForge, specializing in creating high-end digital experiences. With a deep focus on brand identity and user-centric design, I help businesses transform complex ideas into intuitive software solutions that scale.
                                </p>
                                <p className="text-black">
                                    My approach combines minimalist aesthetics with strategic design thinking, ensuring that every project is not only visually stunning but also functionally superior. As a lead strategist, I have successfully mentored teams to deliver cutting-edge platforms, focusing on clean code and high-performance branding. I am passionate about helping startups and established enterprises alike transform their boldest ideas into market-ready realities.
                                </p>
                            </div>

                            {/* Book Consultation Button */}
                            <button 
                                onClick={() => {
                                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-[#f05d4d] backdrop-blur text-white font-medium rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                                Book Consultation
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </button>

                        </motion.div>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="w-full">
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-medium text-black mb-16 px-2"
                    >
                        Core Team
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group flex flex-col gap-6"
                            >
                                {/* Image Card */}
                                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                
                                {/* Info */}
                                <div className="text-center group-hover:-translate-y-1 transition-transform duration-300">
                                    <h4 className="text-xl font-bold text-black mb-1">{member.name}</h4>
                                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{member.role}</p>
                                    <Link 
                                        href={member.linkedin} 
                                        target="_blank" 
                                        className="inline-block mt-3 text-gray-400 hover:text-[#0077b5] transition-colors"
                                    >
                                        <FaLinkedin className="w-5 h-5" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

                {/* Booking Section */}
                <BookingSection />

        </main>
    );
}
