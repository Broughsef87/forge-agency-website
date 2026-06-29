import JsonLd from '@/components/JsonLd';
import { faqSchema, type FaqItem } from '@/lib/schema';

/**
 * Visible FAQ section + matching FAQPage JSON-LD.
 * Server component, native <details> disclosure — no client JS.
 *
 * Pass 4–6 items. Used on the homepage (live copy) and scaffolded on
 * service pages (FOR-112). Per-page service FAQ copy: Sage/Quill to
 * finalize — see SEED markers at each call site.
 */
export default function Faq({
  items,
  heading = 'Frequently asked questions',
  eyebrow = 'FAQ',
}: {
  items: FaqItem[];
  heading?: string;
  eyebrow?: string;
}) {
  if (!items.length) return null;

  return (
    <section className="max-w-3xl mx-auto px-6 mb-32" aria-labelledby="faq-heading">
      <JsonLd data={faqSchema(items)} />
      <p data-reveal className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">
        {eyebrow}
      </p>
      <h2
        id="faq-heading"
        data-reveal
        data-delay="100"
        className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-10 leading-[1.05]"
      >
        {heading}
      </h2>

      <div className="divide-y divide-stone-200 border-t border-stone-200">
        {items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
              <span className="font-display text-lg md:text-xl font-medium tracking-tight text-stone-900 group-open:text-[#E8572A] transition-colors">
                {item.q}
              </span>
              <span
                className="shrink-0 mt-1 text-stone-400 group-open:text-[#E8572A] transition-transform duration-300 group-open:rotate-45"
                aria-hidden="true"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </summary>
            <p className="text-stone-500 font-light leading-relaxed mt-4 pr-10">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
