'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, ChevronRight, X } from 'lucide-react';
import { TbMenu3 } from "react-icons/tb";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function DetailHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Styling Constants for the Light Theme Header (Project Detail Page)
  const bgStyle = "#f0f0f0"; // Light gray background as requested
  const textPrimary = "text-black";
  const textSecondary = "text-gray-500";
  const borderStyle = "border-black/5"; // Subtle border for light mode
  const backdropStyle = "backdrop-blur-md";

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-start pointer-events-none ${textPrimary}`}
      style={{
        paddingLeft: 'var(--padding-x)',
        paddingRight: 'var(--padding-x)',
        paddingTop: '50px'
      }}
    >
      {/* Left Side */}
      <div className="hidden md:flex gap-3 pointer-events-auto items-start">
        {/* Logo Button - Inverted for light theme */}
        <Link 
          href="/" 
          className={`bg-[${bgStyle}]/70 ${backdropStyle} border ${borderStyle} transition-colors h-14 rounded-xl flex flex-col items-center justify-center font-bold text-xs leading-none tracking-wide gap-0.5`}
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
              backgroundColor: menuOpen ? "rgba(240, 240, 240, 0.9)" : "rgba(240, 240, 240, 0.7)"
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className={`border ${borderStyle} overflow-hidden shadow-2xl relative ${backdropStyle} cursor-pointer group`}
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
              {/* Changed "Home" to "The Creator" as requested */}
              <div className={`flex items-center gap-3 text-lg font-bold ${textPrimary}`}>
                The Creator <span className={`text-[8px] ${textPrimary} font-bold`}>◆</span>
              </div>
              <div className={`${textSecondary} group-hover:text-black transition-colors relative w-6 h-6`}>
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

                  {/* Navigation Links - Styling updated for light theme */}
                  <nav className="flex flex-col gap-3">
                    <Link href="/" className={`text-xl font-medium ${textPrimary} border-b border-black pb-1 w-fit`}>
                      Home
                    </Link>
                    <Link href="/about" className="text-xl font-medium text-gray-500 hover:text-black transition-colors">
                      About
                    </Link>
                    <Link href="/portfolio" className="text-xl font-medium text-gray-500 hover:text-black transition-colors">
                      Portfolio
                    </Link>
                    <Link href="/team" className="text-xl font-medium text-gray-500 hover:text-black transition-colors">
                      Our Team
                    </Link>
                    <Link href="/services" className="text-xl font-medium text-gray-500 hover:text-black transition-colors">
                      Services
                    </Link>
                    <Link href="/contact" className="text-xl font-medium text-gray-500 hover:text-black transition-colors">
                      Contact
                    </Link>
                  </nav>

                  {/* Bottom Cards Section */}
                  <div className="mt-2 flex flex-col gap-3">
                    {/* Follow Us Card */}
                    <Link 
                      href="https://instagram.com" 
                      target="_blank" 
                      className="bg-white/60 backdrop-blur-md border border-black/5 rounded-xl flex items-center justify-between group/card hover:bg-white/80 transition-colors py-[26px] px-[34px]"
                    >
                      <span className="text-sm font-medium text-black/90">Follow us</span>
                      <div className="flex gap-3 text-black/70 group-hover/card:text-black">
                        <FaInstagram className="w-5 h-5" />
                        <FaLinkedin className="w-5 h-5" />
                      </div>
                    </Link>

                    {/* CO2 Offset Card */}
                    <div 
                      className="bg-white/60 backdrop-blur-md border border-black/5 rounded-xl flex items-center justify-between group/card hover:bg-white/80 transition-colors py-[26px] px-[34px]"
                    >
                      <span className="text-sm font-medium text-black/90">
                        CO<sub className="text-[10px]">2</sub> offset
                      </span>
                      <span className="text-sm font-medium text-black/90">290.31 tn</span>
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
        <button className={`bg-[${bgStyle}]/70 ${backdropStyle} border ${borderStyle} h-14 w-14 rounded-xl flex items-center justify-center transition-colors group`}>
          <MessageCircle className="w-5 h-5 -scale-x-100 text-gray-500 group-hover:text-black transition-colors" />
        </button>

        {/* Contact Button */}
        <Link 
          href="/contact" 
          className={`bg-[${bgStyle}]/70 ${backdropStyle} border ${borderStyle} h-14 pl-6 pr-4 rounded-xl flex items-center gap-3 text-sm font-medium transition-colors ${textPrimary} hover:text-black/70 group`}
          style={{ paddingLeft: '15px', paddingRight: '15px' }}
        >
          Contact us <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors" />
        </Link>
      </div>

      {/* Mobile Header (Visible only on mobile) - Simplified adaptation for light theme */}
      <motion.div
        layout
        initial={false}
        animate={{ 
          height: menuOpen ? "auto" : "56px", 
          backgroundColor: "rgba(240, 240, 240, 0.9)"
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={`md:hidden w-full pointer-events-auto border ${borderStyle} overflow-hidden shadow-2xl relative ${backdropStyle} rounded-xl z-50`}
      >
         {/* Mobile Toggle / Header Bar */}
        <div 
          className="h-14 px-5 flex items-center justify-between cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Logo */}
          <div className="flex flex-col items-center justify-center font-bold text-xs leading-none tracking-wide gap-0.5 text-black">
            <span>SOFTWARE</span>
            <span className="flex items-start">FORGE<span className="text-[0.5em] relative -top-0.5 ml-0.5">®</span></span>
          </div>

          {/* Menu Icon */}
          <div className="text-gray-500 relative w-6 h-6">
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
              <div className="w-full h-px bg-black/10" />

              {/* Navigation Links */}
              <nav className="flex flex-col gap-3 text-center">
                <Link href="/" className="text-2xl font-medium text-black border-b border-black pb-1 w-fit mx-auto">
                  Home
                </Link>
                <Link href="/about" className="text-2xl font-medium text-gray-500 hover:text-black transition-colors">
                  About
                </Link>
                <Link href="/portfolio" className="text-2xl font-medium text-gray-500 hover:text-black transition-colors">
                  Portfolio
                </Link>
                <Link href="/team" className="text-2xl font-medium text-gray-500 hover:text-black transition-colors">
                  Our Team
                </Link>
                <Link href="/services" className="text-2xl font-medium text-gray-500 hover:text-black transition-colors">
                  Services
                </Link>
                <Link href="/contact" className="text-2xl font-medium text-gray-500 hover:text-black transition-colors">
                  Contact
                </Link>
              </nav>

              {/* Bottom Cards Section */}
              <div className="mt-4 flex flex-col gap-3">
                <Link 
                  href="https://instagram.com" 
                  target="_blank" 
                  className="bg-white/60 backdrop-blur-md border border-black/5 rounded-xl flex items-center justify-between py-[26px] px-[34px]"
                >
                  <span className="text-sm font-medium text-black/90">Follow us</span>
                  <div className="flex gap-3 text-black/70">
                    <FaInstagram className="w-5 h-5" />
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                </Link>

                <div 
                  className="bg-white/60 backdrop-blur-md border border-black/5 rounded-xl flex items-center justify-between py-[26px] px-[34px]"
                >
                  <span className="text-sm font-medium text-black/90">
                    CO<sub className="text-[10px]">2</sub> offset
                  </span>
                  <span className="text-sm font-medium text-black/90">290.31 tn</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    </header>
  );
}
