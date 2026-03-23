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
      <p data-reveal className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-3">
        Pricing
      </p>
      <h2 data-reveal className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">
        Simple, transparent pricing.
      </h2>
      <p data-reveal className="text-lg text-stone-500 font-light leading-relaxed max-w-2xl mb-12">
        Every engagement starts with a free strategy call. No retainers until you&apos;ve seen results.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`bg-white rounded-3xl border p-8 flex flex-col ${
              tier.highlight ? 'border-stone-900' : 'border-stone-200'
            }`}
          >
            {/* Badge */}
            <div className="mb-4 min-h-[28px] flex items-center">
              {tier.badge && (
                <span className="text-xs font-semibold bg-stone-900 text-white px-3 py-1 rounded-full">
                  {tier.badge}
                </span>
              )}
            </div>

            {/* Name & subtitle */}
            <h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-1">{tier.name}</h3>
            <p className="text-sm text-stone-400 font-light mb-6 leading-relaxed">{tier.subtitle}</p>

            {/* Price */}
            <div className="mb-8">
              <span className="text-4xl font-bold tracking-tight text-stone-900">{tier.price}</span>
              {tier.maintenance && (
                <span className="text-sm text-stone-400 font-normal ml-1">{tier.maintenance} maintenance</span>
              )}
            </div>

            {/* Includes */}
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-[0.15em] text-stone-400 uppercase mb-4">
                What&apos;s included
              </p>
              <ul className="space-y-3">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0 mt-2" />
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
              className="w-full mt-auto pt-6 inline-flex items-center justify-center gap-2 bg-stone-900 text-white py-3 rounded-full font-medium text-sm hover:bg-stone-700 transition-colors"
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
