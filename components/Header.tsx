'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, ChevronRight, X } from 'lucide-react';
import { TbMenu3 } from "react-icons/tb";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-start pointer-events-none text-[#F3F3F3]"
      style={{
        paddingLeft: 'var(--padding-x)',
        paddingRight: 'var(--padding-x)',
        paddingTop: '50px'
      }}
    >
      {/* Left Side */}
      <div className="hidden md:flex gap-3 pointer-events-auto items-start">
        {/* Logo Button */}
        <Link 
          href="/" 
          className="bg-[#191919]/70 backdrop-blur-md border border-white/5 transition-colors h-14 rounded-xl flex flex-col items-center justify-center font-bold text-xs leading-none tracking-wide gap-0.5"
          style={{ paddingLeft: '15px', paddingRight: '15px' }}
        >
          <span>SOFTWARE</span>
          <span className="flex items-start">FORGE<span className="text-[0.5em] relative -top-0.5 ml-0.5">®</span></span>
        </Link>

        {/* Self-Expanding Home / Menu Button */}
        <motion.div
            layout
            initial={false}
            onClick={() => setMenuOpen(!menuOpen)}
            animate={{ 
              height: menuOpen ? "auto" : "56px", 
              backgroundColor: "rgba(25, 25, 25, 0.70)"
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="border border-white/5 overflow-hidden shadow-2xl relative backdrop-blur-md cursor-pointer group"
            style={{ 
              width: '350px',
              borderRadius: '12px',
            }}
          >
            {/* Header / Toggle Section */}
            <motion.div 
              layout="position"
              className="h-14 px-5 flex items-center justify-between"
              style={{ paddingLeft: '20px', paddingRight: '20px' }}
            >
              <div className="flex items-center gap-3 text-lg font-bold text-gray-200">
                Home <span className="text-[8px] text-white font-bold">◆</span>
              </div>
              <div className="text-gray-300 group-hover:text-white transition-colors relative w-6 h-6">
                <AnimatePresence mode="popLayout" initial={false}>
                  {menuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -360, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 360, scale: 0.5 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="absolute inset-0 origin-center"
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 360, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -360, scale: 0.5 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="absolute inset-0 origin-center"
                    >
                      <TbMenu3 className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Expandable Content */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="pb-8 flex flex-col gap-6"
                  style={{ paddingLeft: '35px', paddingRight: '24px',marginBottom: '10px' }}
                >
                   {/* Divider */}

                  {/* Navigation Links */}
                  <nav className="flex flex-col gap-3">
                    <Link href="/" className="text-xl font-medium text-white border-b border-white pb-1 w-fit">
                      Home
                    </Link>
                    <Link href="/about" className="text-xl font-medium text-white/70 hover:text-white transition-colors">
                      About
                    </Link>
                    <Link href="/portfolio" className="text-xl font-medium text-white/70 hover:text-white transition-colors">
                      Portfolio
                    </Link>
                    <Link href="/team" className="text-xl font-medium text-white/70 hover:text-white transition-colors">
                      Our Team
                    </Link>
                    <Link href="/services" className="text-xl font-medium text-white/70 hover:text-white transition-colors">
                      Services
                    </Link>
                    <Link href="/contact" className="text-xl font-medium text-white/70 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </nav>

                  {/* Bottom Cards Section */}
                  <div className="mt-2 flex flex-col gap-3">
                    {/* Follow Us Card */}
                    <Link 
                      href="https://instagram.com" 
                      target="_blank" 
                      className="bg-[#2e2e2e]/40 backdrop-blur-md border border-white/5 rounded-xl flex items-center justify-between group/card hover:bg-[#2e2e2e]/60 transition-colors py-[26px] px-[34px]"
                    >
                      <span className="text-sm font-medium text-white/90">Follow us</span>
                      <div className="flex gap-3 text-white/70 group-hover/card:text-white">
                        <FaInstagram className="w-5 h-5" />
                        <FaLinkedin className="w-5 h-5" />
                      </div>
                    </Link>

                    {/* CO2 Offset Card */}
                    <div 
                      className="bg-[#2e2e2e]/40 backdrop-blur-md border border-white/5 rounded-xl flex items-center justify-between group/card hover:bg-[#2e2e2e]/60 transition-colors py-[26px] px-[34px]"
                    >
                      <span className="text-sm font-medium text-white/90">
                        CO<sub className="text-[10px]">2</sub> offset
                      </span>
                      <span className="text-sm font-medium text-white/90">290.31 tn</span>
                    </div>
                  
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </motion.div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex gap-2 pointer-events-auto"
      style={{ paddingLeft: '15px', paddingRight: '15px' }}
      >
        {/* Chat Icon */}
        <button className="bg-[#191919]/70 backdrop-blur-md border border-white/5 h-14 w-14 rounded-xl flex items-center justify-center transition-colors group">
          <MessageCircle className="w-5 h-5 -scale-x-100 text-gray-300 group-hover:text-white transition-colors" />
        </button>

        {/* Contact Button */}
        <Link 
          href="/contact" 
          className="bg-[#191919]/70 backdrop-blur-md border border-white/5 h-14 pl-6 pr-4 rounded-xl flex items-center gap-3 text-sm font-medium transition-colors text-gray-200 hover:text-white group"
          style={{ paddingLeft: '15px', paddingRight: '15px' }}
        >
          Contact us <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
        </Link>
      </div>

      {/* Mobile Header (Visible only on mobile) */}
      <motion.div
        layout
        initial={false}
        animate={{ 
          height: menuOpen ? "auto" : "56px", 
          backgroundColor: "rgba(25, 25, 25, 0.70)"
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="md:hidden w-full pointer-events-auto border border-white/5 overflow-hidden shadow-2xl relative backdrop-blur-md rounded-xl z-50"
      >
         {/* Mobile Toggle / Header Bar */}
        <div 
          className="h-14 px-5 flex items-center justify-between cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Logo */}
          <div className="flex flex-col items-center justify-center font-bold text-xs leading-none tracking-wide gap-0.5 text-white">
            <span>SOFTWARE</span>
            <span className="flex items-start">FORGE<span className="text-[0.5em] relative -top-0.5 ml-0.5">®</span></span>
          </div>

          {/* Menu Icon */}
          <div className="text-gray-300 relative w-6 h-6">
             <AnimatePresence mode="popLayout" initial={false}>
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -360, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 360, scale: 0.5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="absolute inset-0 origin-center"
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 360, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -360, scale: 0.5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="absolute inset-0 origin-center"
                >
                  <TbMenu3 className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Expanded Menu Content */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="px-5 pb-8 flex flex-col gap-6"
            >
              {/* Divider */}
              <div className="w-full h-px bg-white/10" />

              {/* Navigation Links */}
              <nav className="flex flex-col gap-3 text-center">
                <Link href="/" className="text-2xl font-medium text-white border-b border-white pb-1 w-fit mx-auto">
                  Home
                </Link>
                <Link href="/about" className="text-2xl font-medium text-white/70 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/portfolio" className="text-2xl font-medium text-white/70 hover:text-white transition-colors">
                  Portfolio
                </Link>
                <Link href="/team" className="text-2xl font-medium text-white/70 hover:text-white transition-colors">
                  Our Team
                </Link>
                <Link href="/services" className="text-2xl font-medium text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="/contact" className="text-2xl font-medium text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>

              {/* Bottom Cards Section */}
              <div className="mt-4 flex flex-col gap-3">
                <Link 
                  href="https://instagram.com" 
                  target="_blank" 
                  className="bg-[#2e2e2e]/40 backdrop-blur-md border border-white/5 rounded-xl flex items-center justify-between py-[26px] px-[34px]"
                >
                  <span className="text-sm font-medium text-white/90">Follow us</span>
                  <div className="flex gap-3 text-white/70">
                    <FaInstagram className="w-5 h-5" />
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                </Link>

                <div 
                  className="bg-[#2e2e2e]/40 backdrop-blur-md border border-white/5 rounded-xl flex items-center justify-between py-[26px] px-[34px]"
                >
                  <span className="text-sm font-medium text-white/90">
                    CO<sub className="text-[10px]">2</sub> offset
                  </span>
                  <span className="text-sm font-medium text-white/90">290.31 tn</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    </header>
  );
}
