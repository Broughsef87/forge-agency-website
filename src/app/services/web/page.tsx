import NavBar from '@/components/NavBar';
import ForgeLogo from '@/components/ForgeLogo';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Design & Build | The Forge Agency',
  description:
    'Conversion-engineered websites built fast with AI tooling. Express landing pages from $1,500. Bespoke business sites from $7,500. Built on Next.js + Tailwind, deployed on Vercel.',
};

const BOOKING_URL = 'https://calendar.app.google/kmAtXQsU4zL9m6Z96';
const COMPASS_URL = 'https://compass.the-forge-agency.com';

const workstreams = [
  {
    num: '01',
    title: 'Strategy & Architecture',
    tagline: 'Decide what every page is for before we draw it.',
    description:
      'A site that converts starts before the design tool opens. We map your audience, the offer, the buyer journey, and the specific action each page exists to drive. Every section gets a job before it gets a layout.',
    bullets: [
      'Conversion goal definition per page',
      'Audience and offer-fit interview',
      'Information architecture and page-job map',
      'Reference patterns from sites that already work in your space',
    ],
    outcome: 'You see the blueprint before pixels move — no surprises in week three.',
  },
  {
    num: '02',
    title: 'Design System',
    tagline: 'A brand language that scales past one page.',
    description:
      'We build a small, opinionated design system: typography, color tokens, spacing, components. Not a 200-page brand book — just the pieces a real site needs, sized for AI-assisted iteration so you can extend it without us once we hand off.',
    bullets: [
      'Type system, color tokens, spacing scale',
      'Reusable component library aligned to your brand',
      'Editorial accent moves — italic, weight, scale — for premium feel',
      'Documented in code so AI tools can extend it',
    ],
    outcome: 'A consistent visual language that holds up at 5 pages or 50.',
  },
  {
    num: '03',
    title: 'Build & Integration',
    tagline: 'Modern stack. Real performance. No agency theater.',
    description:
      'We build on Next.js + Tailwind, deployed on Vercel. Page-speed, Core Web Vitals, and SEO foundations are non-negotiable. Integrations get wired in cleanly — Calendly, Stripe, your CRM, your analytics — without bolting on a CMS that nobody on your team will ever log into.',
    bullets: [
      'Next.js + Tailwind on Vercel — fast by default',
      'Form-to-CRM, scheduling, payment, and chat integrations',
      'CMS only when content velocity actually demands it',
      'Mobile-first, accessible, lighthouse-clean',
    ],
    outcome: 'A site that loads instantly, ranks cleanly, and connects to the tools you already pay for.',
  },
  {
    num: '04',
    title: 'Conversion Wiring',
    tagline: 'Make every visitor measurable.',
    description:
      'Analytics, conversion tracking, schema, and event instrumentation are wired in from day one — not bolted on after launch. Every CTA fires a tracked event. Every form fields into your CRM. The site arrives knowing how to tell you what works.',
    bullets: [
      'GA4 + Meta Pixel + LinkedIn Insight tracking',
      'Conversion events on every CTA, form, and scheduled call',
      'Schema markup for Organization, Product, FAQ, Article',
      'A/B-ready structure for future iteration',
    ],
    outcome: 'On day one you can answer the question "is this site working?" with data, not vibes.',
  },
  {
    num: '05',
    title: 'Launch & Iterate',
    tagline: 'Ship clean. Then keep shipping.',
    description:
      'Launch is a milestone, not a finish line. We handle QA, deploy, DNS, post-launch monitoring, and a 30-day iteration window where the highest-leverage adjustments come for free. Most sites need at least one revision after real traffic shows what people actually do.',
    bullets: [
      'Pre-launch QA across browsers and breakpoints',
      'Domain, DNS, SSL, redirect handling',
      'Post-launch monitoring (Sentry, uptime, analytics)',
      '30-day iteration window included',
    ],
    outcome: 'You launch with a site that works — and a feedback loop that makes it work harder over time.',
  },
];

const tiers = [
  {
    name: 'Express Landing Page',
    badge: null,
    subtitle: 'One page. One offer. Live in under a week.',
    price: 'from $1,500',
    period: '',
    setup: '',
    term: '3–5 day turnaround',
    bestFor: 'Founders who need a high-converting page for one offer or campaign — fast.',
    outcome:
      'A polished, conversion-architected landing page that proves the offer before you commit to a full site.',
    caveat:
      'No deep integrations and no CMS — this is a focused conversion surface, not a content machine.',
    includes: [
      'Single-page, conversion-architected layout',
      'Custom copy aligned to your offer + audience',
      'Brand-aligned visual design tokens',
      'Mobile-first, accessible, lighthouse-clean',
      'Form + analytics wired in',
    ],
    cta: 'Start with Express',
    href: BOOKING_URL,
    highlight: false,
  },
  {
    name: 'Custom Landing Page',
    badge: null,
    subtitle: 'Bespoke design + copy. A real launch.',
    price: 'from $3,500',
    period: '',
    setup: '',
    term: '1–2 week turnaround',
    bestFor: 'A real launch — new product, funded round, paid-ad campaign, or category claim.',
    outcome:
      'A landing page designed from scratch around your offer — visual identity, copy, structure, all original.',
    caveat:
      'Single page with up to one integration (Calendly, Stripe checkout, or form-to-CRM). For multi-page systems, see Business Website.',
    includes: [
      'Bespoke design + copy from scratch',
      'A/B-ready structure (headline, hero, social proof variants)',
      'One integration: scheduling, payment, or CRM',
      'Custom interactions and motion where they earn attention',
      'Conversion event tracking',
    ],
    cta: 'Launch with Custom LP',
    href: BOOKING_URL,
    highlight: false,
  },
  {
    name: 'Business Website',
    badge: 'Recommended',
    subtitle: 'A real website for a real business. Not a brochure.',
    price: 'from $7,500',
    period: '',
    setup: '',
    term: '3–4 week turnaround',
    bestFor: 'Established businesses replacing or upgrading their main site as primary top-of-funnel.',
    outcome:
      'A 5–8 page site with cohesive design, technical foundations, and integrations — the operating front door for your business.',
    caveat:
      'Built for clarity and conversion, not for design awards. If you want maximalist motion or experimental UX, that\'s the Custom Build tier.',
    includes: [
      '5–8 pages, cohesive visual + editorial design',
      'Technical SEO foundation (schema, sitemap, page speed)',
      'Up to three integrations (CRM, scheduling, payments, chat)',
      'GA4 + conversion event instrumentation',
      'Email-deliverability hardening (SPF, DKIM, DMARC)',
      'Optional CMS for blog or case studies',
      'Optional AI integration (lead qualifier, intake bot, or content agent) wired into your CRM',
    ],
    cta: 'Build with Business',
    href: BOOKING_URL,
    highlight: true,
  },
  {
    name: 'Custom Build',
    badge: null,
    subtitle: 'Your site as a revenue surface. Project-managed.',
    price: '$15,000+',
    period: '',
    setup: '',
    term: '6+ week engagement',
    bestFor: 'Companies treating their site as a real revenue surface — not a brochure.',
    outcome:
      "A site that doesn't just inform — it qualifies, books, sells, and supports. AI agents and automations baked into the experience, not bolted on after launch.",
    caveat:
      'Scoped against actual hours at quote time. Examples: gated portals, AI-assisted product pages, multi-site architecture, deep CRM/ERP integration.',
    includes: [
      'AI / automation embedded in the site experience (qualifying, booking, support, content)',
      'Multi-page or multi-site architecture',
      'Custom backend behavior or app-style interactions',
      'Project-managed sprints with weekly checkpoints',
      'Dedicated post-launch optimization retainer (optional)',
    ],
    cta: 'Scope a Custom Build',
    href: BOOKING_URL,
    highlight: false,
  },
];

const traditionalVsForge = [
  { dim: 'Timeline', trad: '8–12 weeks for a basic site', forge: '3 days to 4 weeks, by tier' },
  { dim: 'Pricing', trad: 'Custom quotes, scope creep', forge: 'Fixed tiers, transparent floors' },
  { dim: 'Approach', trad: 'Visual design first, conversion later', forge: 'Conversion architecture first, design serves it' },
  { dim: 'Stack', trad: 'WordPress + plugins + custom theme', forge: 'Next.js + Tailwind on Vercel — fast by default' },
  { dim: 'Output', trad: 'A site that looks good', forge: 'A site that moves pipeline' },
];

export default function WebsitesServicePage() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] text-stone-900 font-sans">
      <NavBar />

      {/* Hero */}
      <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
        <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">
          Website Design & Build
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-stone-900 leading-[1.02] mb-8 max-w-4xl">
          Sites that{' '}
          <span className="italic text-[#E8572A]" style={{ fontVariationSettings: '"SOFT" 50' }}>
            sell
          </span>
          . Agents that{' '}
          <span className="italic text-[#E8572A]" style={{ fontVariationSettings: '"SOFT" 50' }}>
            scale
          </span>
          .
        </h1>
        <p className="text-xl text-stone-500 font-light leading-relaxed max-w-2xl mb-8">
          AI-native website builds. Conversion-engineered, agent-ready, deployed in days. Sites that sell — and a stack that lets us bake intelligence directly into them when you&apos;re ready.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8572A] text-white rounded-full font-medium hover:bg-[#FF7A3F] hover:shadow-[0_0_40px_-5px_rgba(232,87,42,0.6)] transition-all duration-300 text-sm"
          >
            Book a 30-min Build Brief
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
            See your AI visibility first
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* The Shift — Traditional Agency vs Forge */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">
          The Shift
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6 leading-[1.05] max-w-3xl">
          Most agencies build sites that look good.{' '}
          <span className="italic text-[#E8572A]" style={{ fontVariationSettings: '"SOFT" 50' }}>
            We build sites that work.
          </span>
        </h2>
        <p className="text-lg text-stone-500 font-light leading-relaxed max-w-3xl mb-12">
          Every page, every section, every word is engineered around one question — does this make a qualified buyer take action? AI tooling lets us ship faster than traditional agencies, but the strategy is human: your offer, your audience, your conversion goals. The output is a site that does work, not one that wins design awards.
        </p>

        <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden">
          <div className="grid grid-cols-3 bg-stone-900 text-white">
            <div className="p-5 font-mono text-[10px] tracking-[0.3em] uppercase text-stone-400">Dimension</div>
            <div className="p-5 font-mono text-[10px] tracking-[0.3em] uppercase text-stone-400 border-l border-white/10">
              Traditional Agency
            </div>
            <div className="p-5 font-mono text-[10px] tracking-[0.3em] uppercase text-[#FF7A3F] border-l border-white/10">
              The Forge
            </div>
          </div>
          {traditionalVsForge.map((row, i) => (
            <div
              key={row.dim}
              className={`grid grid-cols-3 ${i !== traditionalVsForge.length - 1 ? 'border-b border-stone-100' : ''}`}
            >
              <div className="p-5 font-medium text-stone-900 text-sm">{row.dim}</div>
              <div className="p-5 text-stone-500 font-light text-sm border-l border-stone-100">{row.trad}</div>
              <div className="p-5 text-stone-700 font-light text-sm border-l border-stone-100">{row.forge}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 border-l-4 border-[#E8572A] bg-white rounded-r-2xl">
          <p className="text-stone-700 font-light leading-relaxed italic">
            A website that looks beautiful but doesn&apos;t convert is just an expensive piece of art. We&apos;d rather build something that pays for itself by Q3.
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
            One pipeline.
          </span>
        </h2>
        <p className="text-lg text-stone-500 font-light leading-relaxed max-w-3xl mb-12">
          Every build runs through the same five workstreams — scaled to the tier. An Express page hits all five in a week. A Custom Build runs them across six weeks of project-managed sprints.
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

      {/* Pricing — four tiers */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">
          Investment
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-4 leading-[1.05]">
          Four tiers.{' '}
          <span className="italic text-[#E8572A]" style={{ fontVariationSettings: '"SOFT" 50' }}>
            Pick the surface.
          </span>
        </h2>
        <p className="text-lg text-stone-500 font-light leading-relaxed max-w-2xl mb-12">
          Fixed price floors. Transparent scope. Most clients start with Express to validate an offer, then ladder up to Business when they&apos;re ready to make their site the operating front door.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

              <h3 className="font-display text-xl font-medium tracking-tight text-stone-900 mb-1">
                {tier.name}
              </h3>
              <p className="text-sm text-stone-400 font-light mb-6 leading-relaxed">{tier.subtitle}</p>

              <div className="mb-6 pb-6 border-b border-stone-100">
                <div className="font-display text-3xl font-medium tracking-tight text-stone-900">
                  {tier.price}
                </div>
                <span className="block mt-1 font-mono text-[11px] tracking-wider text-stone-400">
                  {tier.term}
                </span>
              </div>

              <p className="text-xs text-stone-700 font-light mb-3 leading-relaxed">
                <span className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase block mb-1.5">
                  Best for
                </span>
                {tier.bestFor}
              </p>

              <p className="text-xs text-stone-700 font-light mb-3 leading-relaxed">
                <span className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase block mb-1.5">
                  Outcome
                </span>
                {tier.outcome}
              </p>

              <p className="text-[11px] text-stone-500 font-light italic mb-6 leading-relaxed">
                {tier.caveat}
              </p>

              <div className="flex-1">
                <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">
                  What&apos;s included
                </p>
                <ul className="space-y-2">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-[#E8572A] shrink-0 mt-2" />
                      <span className="text-xs text-stone-600 font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={tier.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full mt-6 inline-flex items-center justify-center gap-2 py-3 rounded-full font-medium text-xs transition-all duration-300 ${
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
          50% deposit at engagement, balance on launch. Express invoiced flat. Custom Build scoped against actual hours and quoted before contract — no surprises.
        </p>
      </section>

      {/* AI Inside — explicit niche callout */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="relative overflow-hidden bg-stone-900 rounded-3xl p-12 md:p-20">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E8572A] opacity-[0.08] blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#FF7A3F] uppercase mb-4">
              AI Inside
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.05] max-w-3xl">
              Every Forge site can be wired with{' '}
              <span className="italic text-[#FF7A3F]" style={{ fontVariationSettings: '"SOFT" 50' }}>
                intelligence
              </span>
              .
            </h2>
            <p className="text-stone-300 font-light text-lg leading-relaxed max-w-3xl mb-10">
              Lead-qualification chatbots. Customer-support agents. Content engines that generate and publish. Internal copilots that brief your team. We build the AI agent practice — your website is just one of the surfaces it can live on.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#FF7A3F] mb-2">Business Website tier</p>
                <p className="text-white font-light leading-relaxed">One AI integration included — typically a lead qualifier or intake bot wired into your CRM.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#FF7A3F] mb-2">Custom Build tier</p>
                <p className="text-white font-light leading-relaxed">Unlimited AI/automation integrations. The website becomes a delivery surface for your agent stack.</p>
              </div>
            </div>
            <p className="text-stone-400 font-light text-sm italic mb-8 max-w-3xl">
              Not available on Express or Custom Landing Page — those are focused conversion surfaces, not platforms for ongoing intelligence.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8572A] text-white rounded-full font-medium hover:bg-[#FF7A3F] hover:shadow-[0_0_40px_-5px_rgba(232,87,42,0.6)] transition-all duration-300 text-sm"
            >
              See the AI Agents practice
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Compass cross-link */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="bg-white rounded-3xl border border-stone-200 p-10 md:p-16 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase">Diagnose first</span>
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase font-semibold bg-[#E8572A] text-white px-2 py-0.5 rounded-full">Free</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-stone-900 mb-4 leading-tight">
              Not sure if a new site is what you actually need?
            </h3>
            <p className="text-stone-500 font-light leading-relaxed max-w-xl">
              Forge Compass is our free self-serve audit. It scans your domain and tells you where the real conversion gaps are — sometimes a fresh build, sometimes just GEO investment or technical SEO. Honest answer plus a personalized walkthrough within 24 hours.
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
              When you&apos;re ready
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight max-w-2xl mx-auto">
              Stop paying for sites that decorate.
            </h2>
            <p className="text-stone-400 font-light text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Book a 30-minute Build Brief. Bring the offer; we&apos;ll bring a scoped recommendation, a realistic tier, and a launch date.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8572A] text-white rounded-full font-medium hover:bg-[#FF7A3F] hover:shadow-[0_0_40px_-5px_rgba(232,87,42,0.6)] transition-all duration-300"
            >
              Book a Build Brief
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
                A B2B AI-native consultancy. We build websites, automation, AI agents, and GEO programs for companies that take the next decade seriously.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">Practice Areas</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/web" className="text-stone-600 hover:text-[#E8572A] transition-colors">Websites</Link></li>
                <li><Link href="/services" className="text-stone-600 hover:text-[#E8572A] transition-colors">AI Agents</Link></li>
                <li><Link href="/services/geo" className="text-stone-600 hover:text-[#E8572A] transition-colors">GEO</Link></li>
                <li><Link href="/services/seo" className="text-stone-600 hover:text-[#E8572A] transition-colors">SEO</Link></li>
                <li>
                  <a href={COMPASS_URL} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-[#E8572A] transition-colors inline-flex items-center gap-2">
                    Forge Compass
                    <span className="font-mono text-[8px] tracking-[0.2em] uppercase font-semibold bg-[#E8572A] text-white px-1.5 py-0.5 rounded-full">Free</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">Contact</p>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:info@forge-automations.com" className="text-stone-600 hover:text-[#E8572A] transition-colors">info@forge-automations.com</a></li>
                <li><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-[#E8572A] transition-colors">Book a Build Brief</a></li>
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
