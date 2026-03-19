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

    const onScroll = () => {
      const { top, height } = container.getBoundingClientRect();
      const scrolled = -top;
      const total = height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / total));

      if (video.readyState >= 2 && video.duration) {
        video.currentTime = progress * video.duration;
      }

      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '280vh' }} className="relative">
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
          <p className="text-xs font-semibold tracking-[0.25em] text-white/50 uppercase mb-8">
            AI Automation Agency
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.92] text-white max-w-4xl">
            The ultimate intelligence layer for modern enterprises.
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-xs tracking-[0.2em] text-white/40 uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10">
          <div
            ref={progressRef}
            className="h-full bg-white/50 origin-left"
            style={{ transform: 'scaleX(0)', transition: 'transform 0.05s linear' }}
          />
        </div>

      </div>
    </div>
  );
}
