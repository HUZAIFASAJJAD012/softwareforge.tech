'use client';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();
    return (
        <footer
            className="w-full bg-[#0a0a0a] text-[#F3F3F3] py-16"
            style={{
                paddingLeft: 'var(--padding-x)',
                paddingRight: 'var(--padding-x)',
            }}
        >
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

                    {/* Left Section - Logo & Copyright */}
                    <div className="md:col-span-3 flex flex-col justify-between">
                        <div className="flex flex-col items-start font-bold text-sm leading-none tracking-wide gap-1 mb-8 md:mb-0">
                            <span>SOFTWARE</span>
                            <span className="flex items-start">
                                FORGE<span className="text-[0.5em] relative -top-0.5 ml-0.5">®</span>
                            </span>
                        </div>

                        <p className="text-sm text-white/50 mt-auto">
                            ©2024. Software Forge Ltd.
                        </p>
                    </div>

                    {/* Main Content Details (Navigation + Utils) */}
                    <div className="md:col-span-7 md:col-start-6 flex flex-col gap-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            
                            {/* Navigation Card */}
                            <div className="bg-[#191919]/70 backdrop-blur-md border border-white/5 rounded-xl p-8">
                                <nav className="flex flex-col gap-4">
                                    {[
                                        { name: 'Home', href: '/' },
                                        { name: 'About', href: '/about' },
                                        { name: 'Portfolio', href: '/portfolio' },
                                        { name: 'Our Team', href: '/our-team' },
                                        { name: 'Services', href: '/services' },
                                        { name: 'Contact', href: '/contact' },
                                    ].map((link) => {
                                        const isActive = pathname === link.href;
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className="group relative w-fit"
                                            >
                                                <span className={`text-lg font-medium transition-colors ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`}>
                                                    {link.name}
                                                </span>
                                                <span 
                                                    className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                                                />
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>

                            {/* Utility Column (Privacy/Cookies + CO2) */}
                            <div className="flex flex-col gap-3">
                                {/* Privacy & Cookies Combined Card */}
                                <div className="bg-[#191919]/70 backdrop-blur-md border border-white/5 rounded-xl p-8 flex flex-col gap-4 flex-grow">
                                    <Link
                                        href="/privacy-policy"
                                        className="text-sm font-medium text-white/90 flex items-center gap-1 hover:opacity-70 transition-opacity"
                                    >
                                        Privacy policy <ChevronRight className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        href="/cookies"
                                        className="text-sm font-medium text-white/90 flex items-center gap-1 hover:opacity-70 transition-opacity"
                                    >
                                        Cookies <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>

                                {/* CO2 Offset Card */}
                                <div
                                    className="bg-[#191919]/70 backdrop-blur-md border border-white/5 rounded-xl px-8 py-6 flex items-center justify-between"
                                >
                                    <span className="text-sm font-medium text-white/90">
                                        CO<sub className="text-[10px]">2</sub> offset
                                    </span>
                                    <span className="text-sm font-medium text-white/90">290.31 tn</span>
                                </div>
                            </div>
                        </div>

                        {/* Follow Us Card - Full Width */}
                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            className="bg-[#191919]/70 backdrop-blur-md border border-white/5 rounded-xl px-8 py-6 flex items-center justify-between group hover:bg-[#2e2e2e]/60 transition-colors"
                        >
                            <span className="text-lg font-medium text-white/90">Follow us</span>
                            <div className="flex gap-4 text-white text-xl">
                                <FaInstagram />
                                <FaLinkedin />
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}