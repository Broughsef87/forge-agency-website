'use client';

import { useState, useEffect } from 'react';
import ForgeLogo from './ForgeLogo';
import LeadQualificationModal from './LeadQualificationModal';

export default function NavBar() {
  const [overVideo, setOverVideo] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      // 280vh is the video section height
      const threshold = window.innerHeight * 2.5;
      setOverVideo(window.scrollY < threshold);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

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
          <div className="flex items-center gap-2.5">
            <ForgeLogo className="w-6 h-6" />
            <span
              className={`font-semibold tracking-tight text-sm transition-colors duration-500 ${
                overVideo ? 'text-white/90' : 'text-stone-900'
              }`}
            >
              THE FORGE AGENCY
            </span>
          </div>
          <div
            className={`hidden md:flex gap-8 text-sm font-medium transition-colors duration-500 ${
              overVideo ? 'text-white/60' : 'text-stone-500'
            }`}
          >
            <a href="#services" className={`transition-colors ${overVideo ? 'hover:text-white' : 'hover:text-stone-900'}`}>Services</a>
            <a href="#about" className={`transition-colors ${overVideo ? 'hover:text-white' : 'hover:text-stone-900'}`}>About Us</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-500 ${
                overVideo
                  ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm'
                  : 'bg-stone-900 text-[#F5F1EA] hover:bg-stone-800 shadow-sm'
              }`}
            >
              Qualified Leads?
            </button>
            <a
              href="#contact"
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

      <LeadQualificationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
