'use client'
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [variant, setVariant] = useState('default'); // 'default' | 'open'
  const pathname = usePathname();
  const isDetail = pathname === '/detail';
  const isPortfolio = pathname === '/portfolio';
  const isOurTeam = pathname === '/our-team';
  const isServices = pathname ==='/services';
  const isContact = pathname === '/contact';

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the follower
  const springConfig = { damping: 50, stiffness: 1500, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      const isHoveringOpen = target.closest('[data-cursor="open"]');
      setVariant(isHoveringOpen ? 'open' : 'default');

      if (!isVisible) setIsVisible(true);
    };
    
    // Hide cursor when leaving window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-medium text-sm ${isDetail && variant !== 'open' ? 'text-white' : 'text-black'}`}
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: variant === 'open' ? 100 : 12,
        height: variant === 'open' ? 40 : 12,
        borderRadius: variant === 'open' ? 30 : 0,
        backgroundColor: variant === 'open' ? '#ffffff' : (isDetail || isPortfolio || isOurTeam || isServices || isContact ? '#1a1a1a' : '#ffffff'),
        rotate: variant === 'open' ? 0 : 45,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    >
      <AnimatePresence>
        {variant === 'open' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2"
          >
            Open <MoveUpRight className="w-3 h-3" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
