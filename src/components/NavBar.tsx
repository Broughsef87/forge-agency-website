'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ForgeLogo from './ForgeLogo';

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [overVideo, setOverVideo] = useState(true);

  useEffect(() => {
    if (!isHome) {
      setOverVideo(false);
      return;
    }
    const check = () => {
      const threshold = window.innerHeight * 2.5;
      setOverVideo(window.scrollY < threshold);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, [isHome]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          overVideo
            ? 'bg-transparent border-white/10'
            : 'bg-[#F5F1EA]/90 backdrop-blur-md border-stone-200/60'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <ForgeLogo className="w-6 h-6" />
            <span
              className={`font-semibold tracking-tight text-sm transition-colors duration-500 ${
                overVideo ? 'text-white/90' : 'text-stone-900'
              }`}
            >
              THE FORGE AGENCY
            </span>
          </Link>
          <div
            className={`hidden md:flex gap-8 text-sm font-medium transition-colors duration-500 ${
              overVideo ? 'text-white/60' : 'text-stone-500'
            }`}
          >
            <a href="#services" className={`transition-colors ${overVideo ? 'hover:text-white' : 'hover:text-stone-900'}`}>Services</a>
            <a href="#demo" className={`transition-colors ${overVideo ? 'hover:text-white' : 'hover:text-stone-900'}`}>Demo</a>
            <a href="#about" className={`transition-colors ${overVideo ? 'hover:text-white' : 'hover:text-stone-900'}`}>About</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:hello@the-forge-agency.com"
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-500 ${
                overVideo
                  ? 'text-white/60 hover:text-white'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Book a Call
            </a>
          </div>
        </div>
      </nav>

    </>
  );
}
