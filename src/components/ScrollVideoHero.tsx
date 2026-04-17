'use client';

import { useRef, useEffect } from 'react';

export default function ScrollVideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    const progressBar = progressRef.current;
    if (!video || !container) return;

    let rafId: number | null = null;
    const FRAME_THRESHOLD = 1 / 30; // skip seeks smaller than one 30fps frame

    const update = () => {
      rafId = null;
      const { top, height } = container.getBoundingClientRect();
      const scrolled = -top;
      const total = height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / total));

      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress})`;
      }

      if (video.readyState >= 2 && video.duration) {
        const target = progress * video.duration;
        if (Math.abs(target - video.currentTime) > FRAME_THRESHOLD) {
          video.currentTime = target;
        }
      }
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: '240vh' }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Video */}
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          preload="auto"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-900/70" />
        <div className="absolute inset-0 bg-stone-900/20" />

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/55 uppercase mb-8">
            B2B AI Automation Agency
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] text-white max-w-5xl">
            Stop scaling with{' '}
            <span className="italic text-[#FF7A3F]" style={{ fontVariationSettings: '"SOFT" 50' }}>
              headcount
            </span>
            .
          </h1>
          <p className="text-lg md:text-xl text-white/65 font-light max-w-2xl mx-auto mt-8 leading-relaxed">
            We build the AI systems that do the work your team shouldn&apos;t be doing — deployed in 72 hours.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/45 uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
        </div>

        {/* Progress bar — thicker, orange */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
          <div
            ref={progressRef}
            className="h-full bg-[#E8572A] origin-left shadow-[0_0_12px_rgba(232,87,42,0.6)]"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>

      </div>
    </div>
  );
}
