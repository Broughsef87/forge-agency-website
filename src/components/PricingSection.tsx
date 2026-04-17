export default function PricingSection() {
  const tiers = [
    {
      name: 'Starter Agent',
      badge: 'Most Popular',
      subtitle: 'One agent, defined scope, fast delivery.',
      price: 'From $4,997',
      maintenance: '$997 / mo',
      includes: [
        '1 bespoke AI agent (Lead-Gen, RevOps, or CS)',
        '72-hour deployment',
        'Tool integrations (up to 3)',
        'Handoff documentation',
        '30-day support window',
      ],
      cta: 'Get Started →',
      href: 'https://calendly.com/broughsef/30min',
      highlight: true,
    },
    {
      name: 'Growth System',
      badge: null,
      subtitle: 'Multi-agent workflow replacing a full operational function.',
      price: 'From $14,997',
      maintenance: '$1,997 / mo',
      includes: [
        '3–5 connected AI agents',
        'Full workflow architecture',
        'Unlimited tool integrations',
        'Team training session',
        '60-day support + iteration window',
      ],
      cta: 'Book a Scoping Call →',
      href: 'https://calendly.com/broughsef/30min',
      highlight: false,
    },
    {
      name: 'Enterprise',
      badge: null,
      subtitle: 'Bespoke intelligence layer for your entire operation.',
      price: 'Custom',
      maintenance: null,
      includes: [
        'Unlimited agents and workflows',
        'Dedicated build sprint',
        'Custom model fine-tuning',
        'Ongoing management retainer',
        'Priority support + SLA',
      ],
      cta: 'Talk to Andrew →',
      href: 'https://calendly.com/broughsef/30min',
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
        Every engagement starts with a free strategy call. No retainers until you&apos;ve seen results.
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
              {tier.maintenance && (
                <span className="block mt-1 font-mono text-[11px] tracking-wider text-stone-400">then {tier.maintenance} maintenance</span>
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
