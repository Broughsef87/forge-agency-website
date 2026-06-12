import Link from 'next/link';

export default function PricingSection() {
  const tiers = [
    {
      name: 'Visibility',
      badge: null,
      subtitle: 'Get found by buyers — and cited by AI engines — in your market.',
      price: '$1,500 / mo',
      priceNote: '3-month minimum · delivered by the Forge team, low-touch for you',
      payback: null,
      includes: [
        'Technical SEO done right — site health, schema, local signals',
        'GEO — get cited by ChatGPT, Perplexity, Gemini, and Claude for your trade and region',
        'Local / market-level optimization',
        'Monthly report: where you showed up, what changed, what’s next',
      ],
      proofHref: null,
      proofLabel: null,
      cta: 'Start with Visibility →',
      href: 'https://calendar.app.google/kmAtXQsU4zL9m6Z96',
      highlight: false,
    },
    {
      name: 'Automation Build',
      badge: 'Recommended',
      subtitle: 'A custom system that turns the tools and spreadsheets you already use into something your whole team can actually use.',
      price: 'From $7,500',
      priceNote: 'build + $1,500 / mo · 6-month minimum',
      payback: 'Replaces manual hours. Gives your team visibility. Gets you paid faster.',
      includes: [
        'One bespoke workflow or dashboard built on your existing data — like a live sales/ops dashboard',
        'Wired into the tools you already run — spreadsheets, CRM, email',
        'Training + handoff, so your team actually uses it',
        'Retainer covers tuning, monitoring, and a monthly review',
      ],
      proofHref: '/insights/roi-salesperson-dashboard',
      proofLabel: 'See the ROI Metal Buildings case study',
      cta: 'Scope an Automation Build →',
      href: 'https://calendar.app.google/kmAtXQsU4zL9m6Z96',
      highlight: true,
    },
    {
      name: 'Operating System',
      badge: null,
      subtitle: 'Automation across your whole operation — sales, ops, and delivery.',
      price: 'From $20,000',
      priceNote: 'build · custom monthly retainer',
      payback: null,
      includes: [
        'Multiple connected workflows — sales, ops, and delivery talking to each other',
        'Deep integration across your stack',
        'Priority support',
        'Built for multi-location operators and manufacturers',
      ],
      proofHref: null,
      proofLabel: null,
      cta: 'Talk to Andrew →',
      href: 'https://calendar.app.google/kmAtXQsU4zL9m6Z96',
      highlight: false,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 mb-32">
      <p data-reveal className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">
        Pricing
      </p>
      <h2 data-reveal className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-4 leading-[1.05]">
        Simple, transparent pricing.
      </h2>
      <p data-reveal className="text-lg text-stone-500 font-light leading-relaxed max-w-2xl mb-12">
        Every engagement starts with a free strategy call. Start with Visibility to get found, then add an Automation Build when you&apos;re ready to get hours back — the system is scoped to pay for itself in saved time.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`group relative bg-white rounded-3xl border p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
              tier.highlight
                ? 'border-[#E8572A] shadow-[0_20px_60px_-20px_rgba(232,87,42,0.25)]'
                : 'border-stone-200 hover:border-stone-300 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]'
            }`}
          >
            {/* Badge */}
            <div className="mb-4 min-h-[28px] flex items-center">
              {tier.badge && (
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-semibold bg-[#E8572A] text-white px-3 py-1 rounded-full">
                  {tier.badge}
                </span>
              )}
            </div>

            {/* Name & subtitle */}
            <h3 className="font-display text-xl font-medium tracking-tight text-stone-900 mb-1">{tier.name}</h3>
            <p className="text-sm text-stone-400 font-light mb-6 leading-relaxed">{tier.subtitle}</p>

            {/* Price */}
            <div className="mb-6 pb-6 border-b border-stone-100">
              <span className="font-display text-4xl font-medium tracking-tight text-stone-900">{tier.price}</span>
              {tier.priceNote && (
                <span className="block mt-1 font-mono text-[11px] tracking-wider text-stone-400">{tier.priceNote}</span>
              )}
            </div>

            {/* Payback anchor */}
            {tier.payback && (
              <p className="font-display italic text-[#E8572A] text-sm mb-6 leading-relaxed" style={{ fontVariationSettings: '"SOFT" 50' }}>
                {tier.payback}
              </p>
            )}

            {/* Includes */}
            <div className="flex-1">
              <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">
                What&apos;s included
              </p>
              <ul className="space-y-3">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8572A] shrink-0 mt-2" />
                    <span className="text-sm text-stone-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
              {tier.proofHref && (
                <Link
                  href={tier.proofHref}
                  className="inline-flex items-center gap-2 mt-4 text-xs font-medium text-[#E8572A] hover:text-stone-900 transition-colors"
                >
                  {tier.proofLabel}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
            </div>

            {/* CTA */}
            <a
              href={tier.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full mt-8 inline-flex items-center justify-center gap-2 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                tier.highlight
                  ? 'bg-[#E8572A] text-white hover:bg-[#FF7A3F] hover:shadow-[0_0_30px_-5px_rgba(232,87,42,0.5)]'
                  : 'bg-stone-900 text-white hover:bg-stone-700'
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>

      <p className="text-sm text-stone-400 font-light italic text-center mt-10 max-w-3xl mx-auto leading-relaxed">
        Automation Build and Operating System are quoted after a free 30-minute discovery call. Visibility is fixed-price. Setup invoiced at signature, due net 15. Monthly retainers invoiced on the 1st, due net 15.
      </p>
    </section>
  );
}
