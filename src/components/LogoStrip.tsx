import Link from 'next/link';

/**
 * Trusted-by strip. Real clients only — never placeholder wordmarks.
 * Pelican is a client but stays anonymous by agreement (no logo, no name).
 * Add new wordmarks to the `clients` array as engagements become public.
 */
export default function LogoStrip() {
  return (
    <section
      aria-label="Clients we work with"
      data-reveal
      className="max-w-6xl mx-auto px-6 pt-16 pb-20"
    >
      <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase text-center mb-8">
        Trusted by
      </p>
      <div className="flex items-center justify-center">
        <Link
          href="/insights/roi-salesperson-dashboard"
          className="group inline-flex items-baseline gap-3 text-stone-500 font-semibold tracking-[0.2em] text-xs grayscale transition-all duration-300 hover:text-stone-900"
        >
          ROI METAL BUILDINGS
          <span className="font-mono text-[10px] tracking-[0.15em] text-stone-400 normal-case group-hover:text-[#E8572A] transition-colors">
            case study →
          </span>
        </Link>
      </div>
    </section>
  );
}
