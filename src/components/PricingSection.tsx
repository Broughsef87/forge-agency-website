export default function PricingSection() {
  const tiers = [
    {
      name: 'Starter Agent',
      badge: null,
      subtitle: 'One agent. One workflow. Prove the ROI before you scale.',
      price: 'From $1,500',
      priceNote: 'Optional $250 / mo · no commitment',
      includes: [
        '1 productized AI agent (Lead-Gen, Content, Support, or RevOps)',
        'Fast deployment — typically under a week',
        'Tool integrations (1–2)',
        'Handoff documentation',
        'Optional monthly tuning at $250 / mo',
      ],
      cta: 'Start with Starter →',
      href: 'https://calendar.app.google/kmAtXQsU4zL9m6Z96',
      highlight: false,
    },
    {
      name: 'Bespoke Workflow Agent',
      badge: 'Recommended',
      subtitle: 'End-to-end workflow automation, wired into your stack.',
      price: 'From $10,000',
      priceNote: '+ $2,000 – $3,000 / mo · 6-month minimum',
      includes: [
        '3–5 connected agents running an end-to-end workflow',
        'Full pipeline architecture (RevOps, onboarding, content engine, etc.)',
        'Deep integrations across CRM, ERP, and comms',
        'Iteration, monitoring, and tuning included in retainer',
        'Monthly performance review',
      ],
      cta: 'Scope a Workflow →',
      href: 'https://calendar.app.google/kmAtXQsU4zL9m6Z96',
      highlight: true,
    },
    {
      name: 'Multi-Agent System',
      badge: null,
      subtitle: 'A real intelligence layer for your entire operation.',
      price: 'From $35,000',
      priceNote: '+ $5,000 – $15,000 / mo · 6-month minimum',
      includes: [
        'Interconnected agent swarms across functions',
        'Deep internal tool integration',
        'High-volume data reasoning + custom model fine-tuning',
        'Dedicated team + priority SLA',
        'Treated as core infrastructure — not a single workflow',
      ],
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
        Every engagement starts with a free strategy call. Start with Starter to prove the ROI on a single agent, then ladder into the larger tiers when you&apos;re ready to make AI core infrastructure.
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
            <div className="mb-8 pb-6 border-b border-stone-100">
              <span className="font-display text-4xl font-medium tracking-tight text-stone-900">{tier.price}</span>
              {tier.priceNote && (
                <span className="block mt-1 font-mono text-[11px] tracking-wider text-stone-400">{tier.priceNote}</span>
              )}
            </div>

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
    </section>
  );
}
