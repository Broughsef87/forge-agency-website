import NavBar from '@/components/NavBar';
import ForgeLogo from '@/components/ForgeLogo';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GEO — Generative Engine Optimization | The Forge Agency',
  description:
    'When buyers ask ChatGPT, Perplexity, Gemini, or Claude to recommend leading vendors in your category, we make sure your name comes back. Six-month engagements from $1,000/mo.',
};

const BOOKING_URL = 'https://calendar.app.google/kmAtXQsU4zL9m6Z96';
const COMPASS_URL = 'https://compass.the-forge-agency.com';

const workstreams = [
  {
    num: '01',
    title: 'Audit & Baseline',
    tagline: 'Map exactly how AI engines describe you today.',
    description:
      'We run a defined prompt panel across ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews — measuring exactly which queries cite you, which cite your competitors, and where the gaps live. The output is a quantified scorecard you can compare against every month.',
    bullets: [
      'Full-page diagnostic audit across all major engines',
      '50-prompt buyer-query panel calibrated to your category',
      'Competitive share-of-voice baseline against named rivals',
      'Entity ambiguity and attribution-leak detection',
    ],
    outcome: 'You see your starting position with the same precision as your competitors do.',
  },
  {
    num: '02',
    title: 'Entity Consolidation',
    tagline: 'Make AI engines confident about who you are.',
    description:
      'AI engines have to recognize your business as a single, canonical entity before they can recommend it. We resolve name and domain splits, deploy Organization, Product, FAQ, and Article schema, and reinforce one canonical identity across Wikidata, Wikipedia, Crunchbase, LinkedIn, and the registries the models weight most.',
    bullets: [
      'Schema deployment across every page',
      'Wikidata + Wikipedia + Crunchbase entity work',
      'Canonical-tag and domain-merge strategy',
      'sameAs reinforcement across third-party registries',
    ],
    outcome: 'Your entity stops being guessed at and starts being recognized.',
  },
  {
    num: '03',
    title: 'Canonical Content',
    tagline: 'Build the source-of-truth pages models want to cite.',
    description:
      'AI engines preferentially quote structured, authoritative content. We build the comparison hubs, technical specs, quantified case studies, and category-defining glossary pages that become the primary sources models reach for when answering category-level queries about you and your industry.',
    bullets: [
      'Vendor comparison hubs',
      'Schema-marked technical specs',
      'Quantified, citation-ready case studies',
      'Glossary and FAQ pages for category-defining terms',
    ],
    outcome: 'Your own pages become the source models cite — not your competitors\'.',
  },
  {
    num: '04',
    title: 'Citation Acquisition',
    tagline: 'Get cited where the models actually look.',
    description:
      'AI engines weight third-party authority sites heavily. We place targeted content — analyst notes, industry trade pieces, podcast appearances, academic and association references — on the exact sources the models index when answering buyer queries in your space.',
    bullets: [
      'Trade publication and analyst placements',
      'Wikipedia article expansion or creation',
      'Podcast outreach and booked appearances',
      'Industry-association and registry inclusion',
    ],
    outcome: 'When the models look for authority, they find you.',
  },
  {
    num: '05',
    title: 'Continuous Testing',
    tagline: 'Measure every week. Iterate against the data.',
    description:
      'GEO isn\'t a one-shot. We re-run the prompt panel weekly, track mention frequency, sentiment, and competitive position over time, and adjust strategy based on what\'s actually moving. The result is a live dashboard, not a one-time report.',
    bullets: [
      'Weekly automated prompt-panel runs',
      'Mention, sentiment, and position tracking',
      'Competitive share-of-voice trend analysis',
      'Monthly written brief with strategy adjustments',
    ],
    outcome: 'You see what\'s working, what\'s not, and what we\'re changing — every week.',
  },
];

const tiers = [
  {
    name: 'Spark',
    badge: null,
    subtitle: 'Foundation only. Stop bleeding attribution.',
    price: '$1,000',
    period: '/month',
    setup: '$1,500 setup',
    term: '3-month minimum',
    outcome:
      'Clean entity. Stop being misattributed when AI does mention you. Foundation for later.',
    caveat:
      'Will not get you into category-leadership answers. We\'ll tell you that up front rather than sell you on it.',
    includes: [
      '10-prompt baseline panel',
      'One-pass entity & schema deployment',
      'Wikidata / Crunchbase / LinkedIn cleanup',
      'Monthly automated dashboard',
      'Async email support, 48h response',
    ],
    cta: 'Start with Spark',
    href: BOOKING_URL,
    highlight: false,
  },
  {
    name: 'Forge',
    badge: null,
    subtitle: 'Show up where it matters. Validate the channel.',
    price: '$3,000',
    period: '/month',
    setup: '$2,500 setup',
    term: '6-month minimum',
    outcome:
      'Visible in 2–3 mid-tail category prompts. Mentioned in answers about specific use-cases.',
    caveat:
      'Limited competitive push. Won\'t reliably outrank category leaders on head-of-category queries — that\'s Foundry.',
    includes: [
      '25-prompt panel + 3 named competitors',
      'Quarterly entity & schema refresh',
      '1 canonical content piece per month',
      '1 third-party citation placement per month',
      'Monthly 60-minute review call',
    ],
    cta: 'Validate with Forge',
    href: BOOKING_URL,
    highlight: false,
  },
  {
    name: 'Foundry',
    badge: 'Recommended',
    subtitle: 'Win the category. Challenge the leaders.',
    price: '$5,000',
    period: '/month',
    setup: '$3,500 setup',
    term: '6-month minimum',
    outcome:
      'Cited by name alongside category leaders across head-of-category prompts. Story re-anchored to you.',
    caveat:
      'Designed for companies treating AI search as the primary top-of-funnel for the next 24 months.',
    includes: [
      '50-prompt panel + full competitor comparison set',
      'Continuous entity & schema maintenance',
      '3 canonical content pieces per month',
      '2 third-party citation placements per month',
      'Active Wikipedia + Wikidata expansion',
      'Weekly 30-min sync + on-demand access',
    ],
    cta: 'Win with Foundry',
    href: BOOKING_URL,
    highlight: true,
  },
];

const seoVsGeo = [
  { dim: 'Goal', seo: 'Rank on a results page', geo: 'Be cited inside an AI answer' },
  { dim: 'Optimization unit', seo: 'Pages and keywords', geo: 'Entities, claims, citations' },
  {
    dim: 'Signals that move it',
    seo: 'Backlinks, on-page keywords',
    geo: 'Schema, Wikipedia/Wikidata, third-party authority sites, structured FAQs',
  },
  {
    dim: 'Tracking',
    seo: 'Position in SERP',
    geo: 'Mention frequency, sentiment, share-of-voice across AI engines',
  },
  { dim: 'Decay rate', seo: 'Days to weeks', geo: 'Months — model retraining cycles' },
];

export default function GeoServicePage() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] text-stone-900 font-sans">
      <NavBar />

      {/* Hero */}
      <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
        <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">
          Generative Engine Optimization
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-stone-900 leading-[1.02] mb-8 max-w-4xl">
          Make AI search{' '}
          <span className="italic text-[#E8572A]" style={{ fontVariationSettings: '"SOFT" 50' }}>
            recommend you
          </span>
          .
        </h1>
        <p className="text-xl text-stone-500 font-light leading-relaxed max-w-2xl mb-8">
          When buyers ask ChatGPT, Perplexity, Gemini, or Claude to recommend leading vendors in your category — we make sure your name comes back.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8572A] text-white rounded-full font-medium hover:bg-[#FF7A3F] hover:shadow-[0_0_40px_-5px_rgba(232,87,42,0.6)] transition-all duration-300 text-sm"
          >
            Book a Strategy Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href={COMPASS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-stone-300 text-stone-700 rounded-full font-medium hover:border-stone-900 hover:text-stone-900 transition-all duration-300 text-sm"
          >
            See Your AI Visibility
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* The Shift — SEO vs GEO */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">
          The Shift
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6 leading-[1.05] max-w-3xl">
          Search isn&apos;t search anymore.{' '}
          <span className="italic text-[#E8572A]" style={{ fontVariationSettings: '"SOFT" 50' }}>
            It&apos;s an answer.
          </span>
        </h2>
        <p className="text-lg text-stone-500 font-light leading-relaxed max-w-3xl mb-12">
          B2B buyers no longer start research with a Google blue-link list. They type a question into an AI engine and read back a curated short-list of vendors. By the time a prospect reaches your site, they&apos;ve already received a recommendation from a model. If your name isn&apos;t in that short-list, you don&apos;t get the inquiry. You don&apos;t get the demo. You don&apos;t get the chance to compete.
        </p>

        <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden">
          <div className="grid grid-cols-3 bg-stone-900 text-white">
            <div className="p-5 font-mono text-[10px] tracking-[0.3em] uppercase text-stone-400">Dimension</div>
            <div className="p-5 font-mono text-[10px] tracking-[0.3em] uppercase text-stone-400 border-l border-white/10">
              Traditional SEO
            </div>
            <div className="p-5 font-mono text-[10px] tracking-[0.3em] uppercase text-[#FF7A3F] border-l border-white/10">
              GEO (what we do)
            </div>
          </div>
          {seoVsGeo.map((row, i) => (
            <div
              key={row.dim}
              className={`grid grid-cols-3 ${i !== seoVsGeo.length - 1 ? 'border-b border-stone-100' : ''}`}
            >
              <div className="p-5 font-medium text-stone-900 text-sm">{row.dim}</div>
              <div className="p-5 text-stone-500 font-light text-sm border-l border-stone-100">{row.seo}</div>
              <div className="p-5 text-stone-700 font-light text-sm border-l border-stone-100">{row.geo}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 border-l-4 border-[#E8572A] bg-white rounded-r-2xl">
          <p className="text-stone-700 font-light leading-relaxed italic">
            The companies that get cited by AI in 2026 will be the default vendors of 2030. The ones that don&apos;t will spend the rest of the decade outbidding them on Google Ads.
          </p>
        </div>
      </section>

      {/* Methodology — 5 workstreams */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">
          Methodology
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6 leading-[1.05] max-w-3xl">
          Five workstreams.{' '}
          <span className="italic text-[#E8572A]" style={{ fontVariationSettings: '"SOFT" 50' }}>
            One outcome.
          </span>
        </h2>
        <p className="text-lg text-stone-500 font-light leading-relaxed max-w-3xl mb-12">
          We organize every GEO engagement into five workstreams that run in parallel, not sequence. Each has measurable output every month — never opaque, never on-faith.
        </p>

        <div className="space-y-10">
          {workstreams.map((s, idx) => {
            const flipped = idx % 2 === 1;
            return (
              <div
                key={s.num}
                className="relative bg-white rounded-3xl border border-stone-200 overflow-hidden transition-all duration-300 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)]"
              >
                <span
                  className={`pointer-events-none select-none absolute top-4 font-display font-light text-stone-200 leading-none text-[240px] md:text-[320px] ${
                    flipped ? 'left-6' : 'right-6'
                  }`}
                  style={{ fontVariationSettings: '"opsz" 144' }}
                  aria-hidden="true"
                >
                  {s.num}
                </span>

                <div className={`relative grid md:grid-cols-2 gap-12 items-start p-10 md:p-16 ${flipped ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-mono text-xs font-semibold text-[#E8572A] tracking-wider">
                        {s.num}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-3 leading-[1.05]">
                      {s.title}
                    </h3>
                    <p
                      className="text-[#E8572A] font-medium italic mb-6 font-display"
                      style={{ fontVariationSettings: '"SOFT" 50' }}
                    >
                      {s.tagline}
                    </p>
                    <p className="text-stone-500 font-light leading-relaxed">{s.description}</p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">
                      What we do
                    </p>
                    <ul className="space-y-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-stone-700 font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E8572A] shrink-0 mt-2" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative bg-[#E8572A] text-white px-10 md:px-16 py-6 flex items-center gap-6 flex-wrap">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/70 shrink-0">
                    Outcome
                  </span>
                  <p className="font-light leading-relaxed flex-1 min-w-[250px]">{s.outcome}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing — three tiers */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">
          Investment
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-4 leading-[1.05]">
          Three tiers.{' '}
          <span className="italic text-[#E8572A]" style={{ fontVariationSettings: '"SOFT" 50' }}>
            Pick the altitude.
          </span>
        </h2>
        <p className="text-lg text-stone-500 font-light leading-relaxed max-w-2xl mb-12">
          GEO outcomes scale with how aggressively we run the methodology. We&apos;re honest about that — the cheapest tier won&apos;t get you into category leadership. Pick the altitude that matches the outcome you actually want.
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
              <div className="mb-4 min-h-[28px] flex items-center">
                {tier.badge && (
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-semibold bg-[#E8572A] text-white px-3 py-1 rounded-full">
                    {tier.badge}
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl font-medium tracking-tight text-stone-900 mb-1">
                {tier.name}
              </h3>
              <p className="text-sm text-stone-400 font-light mb-6 leading-relaxed">{tier.subtitle}</p>

              <div className="mb-8 pb-6 border-b border-stone-100">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-medium tracking-tight text-stone-900">
                    {tier.price}
                  </span>
                  <span className="font-mono text-sm text-stone-400">{tier.period}</span>
                </div>
                <span className="block mt-1 font-mono text-[11px] tracking-wider text-stone-400">
                  {tier.setup} · {tier.term}
                </span>
              </div>

              <p className="text-sm text-stone-700 font-light mb-4 leading-relaxed">
                <span className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase block mb-2">
                  Outcome
                </span>
                {tier.outcome}
              </p>

              <p className="text-xs text-stone-500 font-light italic mb-6 leading-relaxed">
                {tier.caveat}
              </p>

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
                {tier.cta} →
              </a>
            </div>
          ))}
        </div>

        <p className="text-sm text-stone-400 font-light italic text-center mt-10 max-w-2xl mx-auto">
          Setup invoiced at signature, due net-15. Monthly retainer invoiced on the 1st, due net-15. Auto-renews month-to-month after the minimum term — cancellable with 30 days&apos; notice.
        </p>
      </section>

      {/* Compass cross-link */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="bg-white rounded-3xl border border-stone-200 p-10 md:p-16 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">
              Before you book
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-stone-900 mb-4 leading-tight">
              See exactly how AI engines describe your business right now.
            </h3>
            <p className="text-stone-500 font-light leading-relaxed max-w-xl">
              Forge Compass is our free self-serve audit tool. Run a scan against your domain and get a structured report — entity health, category visibility, attribution leaks, and the specific gaps a GEO engagement would close. We follow up within 24 hours with a personalized walkthrough. The audit is the first deliverable in a Foundry engagement, so you start the engagement already a step ahead.
            </p>
          </div>
          <a
            href={COMPASS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-700 transition-all duration-300 text-sm shrink-0"
          >
            Run Forge Compass
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden bg-stone-900 rounded-3xl p-12 md:p-20 text-center">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E8572A] opacity-[0.08] blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#FF7A3F] uppercase mb-4">
              Ready when you are
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight max-w-2xl mx-auto">
              Don&apos;t cede the next decade to your competitors&apos; SEO budget.
            </h2>
            <p className="text-stone-400 font-light text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Book a 30-minute call. We&apos;ll run live AI queries against your category together — you&apos;ll see exactly what your buyers see when they ask.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8572A] text-white rounded-full font-medium hover:bg-[#FF7A3F] hover:shadow-[0_0_40px_-5px_rgba(232,87,42,0.6)] transition-all duration-300"
            >
              Book a Strategy Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <Link href="/" className="flex items-center gap-2.5 mb-4">
                <ForgeLogo className="w-6 h-6" />
                <span className="font-semibold tracking-tight text-sm text-stone-900">THE FORGE AGENCY</span>
              </Link>
              <p className="text-sm text-stone-500 font-light leading-relaxed max-w-xs">
                A B2B AI-native consultancy. We build GEO programs that get you cited by AI engines, and bespoke AI agents that automate your operations.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">Practice Areas</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/geo" className="text-stone-600 hover:text-[#E8572A] transition-colors">GEO</Link></li>
                <li><Link href="/services/seo" className="text-stone-600 hover:text-[#E8572A] transition-colors">SEO</Link></li>
                <li><Link href="/services" className="text-stone-600 hover:text-[#E8572A] transition-colors">AI Agents</Link></li>
                <li><a href={COMPASS_URL} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-[#E8572A] transition-colors">Forge Compass</a></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">Contact</p>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hello@the-forge-agency.com" className="text-stone-600 hover:text-[#E8572A] transition-colors">hello@the-forge-agency.com</a></li>
                <li><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-[#E8572A] transition-colors">Book a Call</a></li>
                <li className="text-stone-500 font-light">Based in Colorado · Working globally</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 font-light pt-8 border-t border-stone-100">
            <span className="font-mono tracking-wider">© 2026 THE FORGE AGENCY · ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
