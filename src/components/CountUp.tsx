'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  /** The final number shown (e.g. 10, 72, 0). */
  value: number;
  /** Text appended after the animated number (e.g. '×', 'h'). */
  suffix?: string;
  /** Text prepended before the animated number (e.g. '$'). */
  prefix?: string;
  /** Animation duration in ms. */
  duration?: number;
  /** Fixed decimals (e.g. 1 → 9.9). */
  decimals?: number;
  className?: string;
};

/**
 * Counts up from 0 → `value` the first time the element scrolls into view.
 * Uses IntersectionObserver — no polling, no jank. Honors reduced motion.
 */
export default function CountUp({
  value,
  suffix = '',
  prefix = '',
  duration = 1400,
  decimals = 0,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const hasRunRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRunRef.current) {
            hasRunRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              // ease-out cubic
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay(value * eased);
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
