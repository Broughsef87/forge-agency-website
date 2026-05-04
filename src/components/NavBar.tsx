'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import ForgeLogo from './ForgeLogo';

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [overVideo, setOverVideo] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

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
            <Link href="/services" className={`transition-colors ${overVideo ? 'hover:text-white' : 'hover:text-stone-900'}`}>AI Agents</Link>
            <Link href="/services/geo" className={`transition-colors ${overVideo ? 'hover:text-white' : 'hover:text-stone-900'}`}>GEO</Link>
            <Link href="/services/seo" className={`transition-colors ${overVideo ? 'hover:text-white' : 'hover:text-stone-900'}`}>SEO</Link>
            <a href={isHome ? '#demo' : '/#demo'} className={`transition-colors ${overVideo ? 'hover:text-white' : 'hover:text-stone-900'}`}>Demo</a>
            <Link href="/about" className={`transition-colors ${overVideo ? 'hover:text-white' : 'hover:text-stone-900'}`}>About Us</Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://calendly.com/broughsef/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium px-4 py-2 rounded-full border transition-all duration-500 ${
                overVideo
                  ? 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'
                  : 'border-stone-300 text-stone-700 hover:border-stone-900 hover:text-stone-900'
              }`}
            >
              Book a Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className={`md:hidden p-2 -mr-2 transition-colors duration-500 ${
              overVideo ? 'text-white/90' : 'text-stone-900'
            }`}
          >
            <Menu size={22} strokeWidth={1.75} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-[#F5F1EA] flex flex-col transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-stone-200/60 shrink-0">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2.5">
            <ForgeLogo className="w-6 h-6" />
            <span className="font-semibold tracking-tight text-sm text-stone-900">THE FORGE AGENCY</span>
          </Link>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="p-2 -mr-2 text-stone-900"
          >
            <X size={22} strokeWidth={1.75} />
          </button>
        </div>

        {/* Menu items */}
        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-6">Practice</p>
          <div className="space-y-0">
            <Link
              href="/services"
              onClick={closeMenu}
              className="flex items-center justify-between py-5 border-b border-stone-200/60 group"
            >
              <span className="font-display text-3xl font-medium tracking-tight text-stone-900 group-hover:text-[#E8572A] transition-colors">
                AI Agents
              </span>
              <span className="font-mono text-[11px] tracking-wider text-stone-400">→</span>
            </Link>
            <Link
              href="/services/geo"
              onClick={closeMenu}
              className="flex items-center justify-between py-5 border-b border-stone-200/60 group"
            >
              <span className="font-display text-3xl font-medium tracking-tight text-stone-900 group-hover:text-[#E8572A] transition-colors">
                GEO
              </span>
              <span className="font-mono text-[11px] tracking-wider text-stone-400">→</span>
            </Link>
            <Link
              href="/services/seo"
              onClick={closeMenu}
              className="flex items-center justify-between py-5 border-b border-stone-200/60 group"
            >
              <span className="font-display text-3xl font-medium tracking-tight text-stone-900 group-hover:text-[#E8572A] transition-colors">
                SEO
              </span>
              <span className="font-mono text-[11px] tracking-wider text-stone-400">→</span>
            </Link>
          </div>

          <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mt-10 mb-6">More</p>
          <div className="space-y-0">
            <a
              href={isHome ? '#demo' : '/#demo'}
              onClick={closeMenu}
              className="flex items-center justify-between py-5 border-b border-stone-200/60 group"
            >
              <span className="font-display text-2xl font-medium tracking-tight text-stone-900 group-hover:text-[#E8572A] transition-colors">
                Live Demo
              </span>
              <span className="font-mono text-[11px] tracking-wider text-stone-400">→</span>
            </a>
            <Link
              href="/about"
              onClick={closeMenu}
              className="flex items-center justify-between py-5 border-b border-stone-200/60 group"
            >
              <span className="font-display text-2xl font-medium tracking-tight text-stone-900 group-hover:text-[#E8572A] transition-colors">
                About Us
              </span>
              <span className="font-mono text-[11px] tracking-wider text-stone-400">→</span>
            </Link>
            <a
              href="https://compass.the-forge-agency.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-between py-5 border-b border-stone-200/60 group"
            >
              <span className="font-display text-2xl font-medium tracking-tight text-stone-900 group-hover:text-[#E8572A] transition-colors">
                Forge Compass
              </span>
              <span className="font-mono text-[11px] tracking-wider text-stone-400">↗</span>
            </a>
          </div>
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 py-6 border-t border-stone-200/60 shrink-0 bg-white/40">
          <a
            href="https://calendly.com/broughsef/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="block w-full text-center py-4 bg-[#E8572A] text-white rounded-full font-medium text-sm hover:bg-[#FF7A3F] transition-colors"
          >
            Book a Call →
          </a>
          <p className="text-center text-xs text-stone-400 font-light mt-4">
            hello@the-forge-agency.com
          </p>
        </div>
      </div>
    </>
  );
}
