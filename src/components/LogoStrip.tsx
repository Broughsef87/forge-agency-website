/**
 * Placeholder "trusted by" strip. Replace the `clients` array with real
 * client wordmarks (either inline SVG or <Image>) when available.
 *
 * The visual treatment — grayscale, low-opacity, tight letterspacing —
 * deliberately mutes the marks so they read as social proof rather than
 * competing with the hero above. Drop-in real logos inherit the same
 * treatment via `grayscale opacity-60 hover:opacity-100`.
 */
export default function LogoStrip() {
  const clients = [
    'NORTHWIND',
    'ACME INDUSTRIAL',
    'ATLAS / GROUP',
    'SIGNAL·OPS',
    'ROI METAL',
    'MERIDIAN',
  ];

  return (
    <section
      aria-label="Teams we work with"
      data-reveal
      className="max-w-6xl mx-auto px-6 pt-16 pb-20"
    >
      <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase text-center mb-8">
        Trusted by operators at
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
        {clients.map((name) => (
          <span
            key={name}
            className="text-stone-500 font-semibold tracking-[0.2em] text-xs grayscale transition-all duration-300 hover:text-stone-900 hover:opacity-100"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
