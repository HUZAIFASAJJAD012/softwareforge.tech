'use client';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';

export default function Footer() {
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

                    {/* Middle Section - Navigation Links */}
                    <div className="md:col-span-3">
                        <div className="bg-[#191919]/70 backdrop-blur-md border border-white/5 rounded-xl p-6">
                            <nav className="flex flex-col gap-3">
                                <Link
                                    href="/"
                                    className="text-lg font-medium text-white border-b border-white pb-2 w-fit"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                                >
                                    Portfolio
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/careers"
                                    className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                                >
                                    Careers
                                </Link>
                            </nav>
                        </div>
                    </div>

                    {/* Right Section - Privacy, Cookies, Follow, CO2 */}
                    <div className="md:col-span-6 flex flex-col gap-3">
                        {/* Top Row - Privacy & Cookies */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <Link
                                href="/privacy-policy"
                                className="bg-[#191919]/70 backdrop-blur-md border border-white/5 rounded-xl px-6 py-4 flex items-center justify-between group hover:bg-[#2e2e2e]/60 transition-colors"
                            >
                                <span className="text-sm font-medium text-white/90">Privacy policy</span>
                                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                            </Link>

                            <Link
                                href="/cookies"
                                className="bg-[#191919]/70 backdrop-blur-md border border-white/5 rounded-xl px-6 py-4 flex items-center justify-between group hover:bg-[#2e2e2e]/60 transition-colors"
                            >
                                <span className="text-sm font-medium text-white/90">Cookies</span>
                                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                            </Link>
                        </div>

                        {/* Bottom Row - Follow Us & CO2 Offset */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                className="bg-[#191919]/70 backdrop-blur-md border border-white/5 rounded-xl px-6 py-4 flex items-center justify-between group hover:bg-[#2e2e2e]/60 transition-colors"
                            >
                                <span className="text-sm font-medium text-white/90">Follow us</span>
                                <div className="flex gap-3 text-white/70 group-hover:text-white transition-colors">
                                    <FaInstagram className="w-5 h-5" />
                                    <FaLinkedin className="w-5 h-5" />
                                </div>
                            </Link>

                            <div
                                className="bg-[#191919]/70 backdrop-blur-md border border-white/5 rounded-xl px-6 py-4 flex items-center justify-between"
                            >
                                <span className="text-sm font-medium text-white/90">
                                    CO<sub className="text-[10px]">2</sub> offset
                                </span>
                                <span className="text-sm font-medium text-white/90">290.31 tn</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}