'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import ForgeLogo from './ForgeLogo';

const COMPASS_URL = 'https://compass.the-forge-agency.com';
const BOOKING_URL = 'https://calendar.app.google/kmAtXQsU4zL9m6Z96';

const SERVICES = [
  {
    name: 'Website Design',
    href: '/services/web',
    desc: 'Conversion-engineered builds, $1,500–$15k+',
  },
  {
    name: 'AI Agents',
    href: '/services',
    desc: 'Bespoke automation, deployed in 72h',
  },
  {
    name: 'GEO',
    href: '/services/geo',
    desc: 'Get cited by ChatGPT, Perplexity, Gemini, Claude',
  },
  {
    name: 'SEO',
    href: '/services/seo',
    desc: 'Technical foundations done right',
  },
];

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

          {/* Desktop nav */}
          <div
            className={`hidden md:flex gap-8 text-sm font-medium transition-colors duration-500 ${
              overVideo ? 'text-white/60' : 'text-stone-500'
            }`}
          >
            {/* Services dropdown — clickable parent + hover panel */}
            <div className="relative group">
              <Link
                href="/services"
                className={`inline-flex items-center gap-1 transition-colors ${
                  overVideo ? 'hover:text-white' : 'hover:text-stone-900'
                }`}
              >
                Services
                <ChevronDown size={14} strokeWidth={2} className="opacity-70 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Dropdown panel — warm cream, slightly darker than body so it lifts off. */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[340px] opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-[#EFE9E0] rounded-2xl border border-stone-300/60 shadow-[0_30px_80px_-20px_rgba(60,45,25,0.22)] p-2 backdrop-blur-sm">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-3 rounded-xl hover:bg-white/60 transition-colors group/item"
                    >
                      <div className="text-sm font-medium text-stone-900 group-hover/item:text-[#E8572A] transition-colors">
                        {s.name}
                      </div>
                      <div className="text-xs text-stone-500 font-light leading-snug mt-0.5">
                        {s.desc}
                      </div>
                    </Link>
                  ))}

                  {/* Divider */}
                  <div className="h-px bg-stone-300/60 my-2 mx-3" />

                  {/* Forge Compass — external */}
                  <a
                    href={COMPASS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 rounded-xl hover:bg-white/60 transition-colors group/item"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-stone-900 group-hover/item:text-[#E8572A] transition-colors">
                        Forge Compass
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase font-semibold bg-[#E8572A] text-white px-2 py-0.5 rounded-full">Free</span>
                      <svg className="w-3 h-3 text-stone-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    <div className="text-xs text-stone-500 font-light leading-snug mt-0.5">
                      Free AI visibility audit
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <a
              href={isHome ? '#demo' : '/#demo'}
              className={`transition-colors ${overVideo ? 'hover:text-white' : 'hover:text-stone-900'}`}
            >
              Demo
            </a>
            <Link
              href="/about"
              className={`transition-colors ${overVideo ? 'hover:text-white' : 'hover:text-stone-900'}`}
            >
              About
            </Link>
          </div>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={BOOKING_URL}
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
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={closeMenu}
                className="flex items-center justify-between py-5 border-b border-stone-200/60 group"
              >
                <span className="font-display text-3xl font-medium tracking-tight text-stone-900 group-hover:text-[#E8572A] transition-colors">
                  {s.name}
                </span>
                <span className="font-mono text-[11px] tracking-wider text-stone-400">→</span>
              </Link>
            ))}
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
              href={COMPASS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-between py-5 border-b border-stone-200/60 group"
            >
              <span className="font-display text-2xl font-medium tracking-tight text-stone-900 group-hover:text-[#E8572A] transition-colors flex items-center gap-3">
                Forge Compass
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase font-semibold bg-[#E8572A] text-white px-2 py-0.5 rounded-full">
                  Free
                </span>
              </span>
              <span className="font-mono text-[11px] tracking-wider text-stone-400">↗</span>
            </a>
          </div>
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 py-6 border-t border-stone-200/60 shrink-0 bg-white/40">
          <a
            href={BOOKING_URL}
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
