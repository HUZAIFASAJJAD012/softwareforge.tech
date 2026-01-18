'use client';
import BookingSection from '@/components/landing/BookingSection';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#fafafa]">
            <div className="pt-40 pb-24 px-4 md:px-8 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                    
                    {/* LEFT SIDE: Contact Info (Sticky) */}
                    <div className="lg:sticky lg:top-40">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-medium text-black mb-8 tracking-tight">
                                Let&apos;s talk.
                            </h1>
                            <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-md">
                                Do you have a project in mind? We&apos;d love to hear from you. 
                                Let&apos;s build something amazing together.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-12 border-t border-gray-200 pt-12"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">Visit</h3>
                                    <p className="text-base text-gray-600 leading-relaxed">
                                        Empire Heights 2,<br />
                                        Bahria Town Phase 6,<br />
                                        Rawalpindi, Pakistan.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">Contact</h3>
                                    <a href="mailto:info@softwareforge.tech" className="text-base text-gray-600 hover:text-black transition-colors block mb-2">
                                        info@softwareforge.tech
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">Socials</h3>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                                        <FaLinkedinIn className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                                        <FaFacebookF className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                                        <FaInstagram className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100"
                    >
                        <form className="space-y-8">
                            <h2 className="text-2xl font-medium text-black mb-6">Send us a message</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-gray-900">First Name</label>
                                    <input 
                                        type="text" 
                                        id="firstName"
                                        className="w-full px-4 py-3 bg-[#f8f8f8] border border-transparent rounded-xl focus:bg-white focus:border-black focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-gray-900">Last Name</label>
                                    <input 
                                        type="text" 
                                        id="lastName"
                                        className="w-full px-4 py-3 bg-[#f8f8f8] border border-transparent rounded-xl focus:bg-white focus:border-black focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-900">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    className="w-full px-4 py-3 bg-[#f8f8f8] border border-transparent rounded-xl focus:bg-white focus:border-black focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-900">Subject</label>
                                <div className="relative">
                                    <select 
                                        id="subject"
                                        className="w-full px-4 py-3 bg-[#f8f8f8] border border-transparent rounded-xl focus:bg-white focus:border-black focus:ring-0 outline-none transition-all duration-300 text-gray-800 appearance-none cursor-pointer"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="project">New Project</option>
                                        <option value="career">Careers</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-900">Message</label>
                                <textarea 
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 bg-[#f8f8f8] border border-transparent rounded-xl focus:bg-white focus:border-black focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400 resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button 
                                type="submit"
                                className="w-full py-4 bg-black text-white font-medium rounded-xl hover:bg-[#333] transition-all duration-300 transform hover:scale-[1.01] shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
            
            <BookingSection />
        </main>
    );
}
