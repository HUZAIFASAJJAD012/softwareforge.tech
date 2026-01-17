import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import SmoothScroll from '../components/landing/SmoothScroll';
import Header from '@/components/Header';

import CustomCursor from '../components/landing/CustomCursor';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SoftwareForge® — Making the Bold Beautiful',
  description: 'Digital agency creating premium bold experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <SmoothScroll>
          <CustomCursor />
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
