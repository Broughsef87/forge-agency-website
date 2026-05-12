import NavBar from '@/components/NavBar';
import ForgeLogo from '@/components/ForgeLogo';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — The Forge Agency',
  description:
    'AI automation, custom workflows, and bespoke AI agents built for enterprises who move fast. Deployed in 72 hours.',
};

const BOOKING_URL = 'https://calendar.app.google/kmAtXQsU4zL9m6Z96';
const COMPASS_URL = 'https://compass.the-forge-agency.com';

const services = [
  {
    num: '01',
    id: 'bespoke-agents',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Bespoke AI Agents',
    tagline: 'A teammate built for your exact problem — not a tool you have to babysit.',
    description:
      "AI agents are software that can reason, plan, and act without you in the loop. We build them tuned to your business — trained on your data, connected to your tools, scoped to a real job. The output isn't 'AI features' bolted onto your stack; it's an autonomous operator that handles a function so your team can stop handling it.",
    bullets: [
      'Sales research and outreach agents',
      'Customer support and escalation agents',
      'Internal knowledge and Q&A agents',
      'Competitive intelligence agents',
      'Proposal and contract generation agents',
    ],
    outcome:
      "Less 'you using AI' and more 'AI doing the work.' Most clients replace 1–2 hires of overhead within 90 days.",
  },
  {
    num: '02',
    id: 'automation',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'AI Automation',
    tagline: 'Eliminate the work that shouldn\'t need humans.',
    description:
      'We identify the highest-cost manual processes in your operation and replace them with intelligent, self-running systems. From data entry and document processing to email triage and reporting — if it\'s repetitive, we automate it.',
    bullets: [
      'Document & data extraction pipelines',
      'Intelligent email and inbox management',
      'Automated reporting and dashboards',
      'CRM data hygiene and enrichment',
      'Multi-step approval and routing workflows',
    ],
    outcome: 'Clients typically reclaim 20–40 hours per week per team within the first month.',
  },
  {
    num: '03',
    id: 'workflows',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Custom Workflows',
    tagline: 'Your stack, wired together the right way.',
    description:
      'Every business has a unique tech stack and a unique set of bottlenecks. We design and build end-to-end workflow systems that connect your existing tools — CRM, ERP, project management, communication platforms — into a single, automated operating layer.',
    bullets: [
      'Cross-platform tool integrations (HubSpot, Salesforce, Notion, Slack, and more)',
      'Trigger-based automation chains',
      'Custom webhooks and API connectors',
      'Lead routing and qualification pipelines',
      'Client onboarding and fulfillment flows',
    ],
    outcome: 'Clean handoffs, reliable signal, no work lost in the gaps between tools.',
  },
];

const tiers = [
  {
    brandName: 'Spark',
    name: 'Starter Agent',
    badge: null,
    subtitle: 'One agent. One job. Live in two weeks.',
    price: '$1,500 – $3,500',
    priceNote: 'One-time · optional $250 / mo monitoring (not required)',
    bestFor:
      'Small businesses or teams testing a specific agent use case before committing to deeper work.',
    outcome:
      'A fully deployed agent for a single use case — lead qualifier, intake bot, FAQ assistant, support triage, internal Q&A. Productized scope, fixed price, fast turnaround.',
    caveat:
      'Single agent, single integration, single workflow. For multi-step workflows or deep integrations, see Bespoke Workflow.',
    includes: [
      'One agent built to a defined scope',
      'Single integration (CRM, helpdesk, chat platform, or internal tool)',
      'Hosting, deployment, and 30-day stabilization window',
      'Documentation handoff',
      'Optional $250/mo monitoring + tweaks (not required to operate)',
    ],
    cta: 'Start with Starter Agent',
    href: BOOKING_URL,
    highlight: false,
  },
  {
    brandName: 'Forge',
    name: 'Bespoke Workflow Agent',
    badge: 'Recommended',
    subtitle: 'A teammate that runs an entire workflow.',
    price: 'From $7,500',
    priceNote: '+ $2,000 – $3,000 / mo retainer · 6-month minimum',
    bestFor:
      'SMBs replacing a function or augmenting a team — RevOps, customer success, support, sales research, content production.',
    outcome:
      "Multi-step agent connected to your full stack, trained on your business context, with continuous tuning and oversight. Functions like a junior hire that doesn't take PTO.",
    caveat:
      'Build is scoped against actual hours; we quote within a band after a 30-min discovery call.',
    includes: [
      'One multi-step workflow agent with up to 5 integrations',
      'Trained on company-specific data and context',
      'Deployment + 60 days of stabilization included in the build',
      'Monthly retainer covers monitoring, tuning, scope expansion, error correction',
      'Quarterly strategy review',
    ],
    cta: 'Build with Bespoke',
    href: BOOKING_URL,
    highlight: true,
  },
  {
    brandName: 'Foundry',
    name: 'Multi-Agent System',
    badge: null,
    subtitle: 'Replace a function. Run a department.',
    price: 'From $20,000',
    priceNote: '+ $5,000 – $15,000 / mo retainer · 6-month minimum',
    bestFor:
      'Companies treating AI as core operations infrastructure, not as a feature.',
    outcome:
      'Multiple connected agents covering an entire operations function — sales research, customer success, content engine, internal Q&A. The AI layer of your business.',
    caveat:
      'Project-managed sprints, weekly checkpoints, hands-on engagement throughout. Quoted per engagement.',
    includes: [
      '3–8 connected agents covering a full operations function',
      'Deep CRM, ERP, and internal-tool integration',
      'Custom data ingestion and continuous training',
      'Dedicated weekly sprint cadence + monthly executive review',
      'First-year roadmap with quarterly milestones',
    ],
    cta: 'Scope a Multi-Agent System',
    href: BOOKING_URL,
    highlight: false,
  },
];

const adjacentPractices = [
  {
    title: 'Website Design & Build',
    desc:
      'Conversion-engineered websites with AI baked in. Express landing pages from $1,500. Custom builds to $15K+.',
    href: '/services/web',
    cta: 'See Website tiers',
  },
  {
    title: 'Generative Engine Optimization (GEO)',
    desc:
      'Get cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews when buyers research your category. Three retainer tiers from $1K/mo.',
    href: '/services/geo',
    cta: 'See GEO tiers',
  },
  {
    title: 'Search Engine Optimization (SEO)',
    desc:
      'Technical SEO foundations done right. One foundation tier at $1,500/mo, 3-month minimum.',
    href: '/services/seo',
    cta: 'See SEO offering',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] text-stone-900 font-sans">
      <NavBar />

      {/* Hero */}
      <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
        <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">
          AI Agents & Automation — Core Practice
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-stone-900 leading-[1.02] mb-8 max-w-3xl">
          Systems that work<br className="hidden md:block" /> while you{' '}
          <span className="italic text-[#E8572A]" style={{ fontVariationSettings: '"SOFT" 50' }}>sleep</span>.
        </h1>
        <p className="text-xl text-stone-500 font-light leading-relaxed max-w-2xl">
          Forge&apos;s core practice: bespoke AI agents and automation systems built for businesses that want a teammate, not a tool. Three engagement tiers, from productized starter agents to multi-agent enterprise operations. Adjacent practices in GEO, SEO, and Website Design — see below.
        </p>
      </section>

      {/* Orientation — how the practices fit together */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl border border-stone-200 p-10 md:p-14">
          <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">How it fits together</p>
          <p className="text-lg text-stone-700 font-light leading-relaxed max-w-4xl">
            We build five kinds of intelligent systems for businesses that take the next decade seriously:{' '}
            <a href="#bespoke-agents" className="text-stone-900 font-medium hover:text-[#E8572A] transition-colors">bespoke AI agents that operate autonomously</a>,{' '}
            <a href="#automation" className="text-stone-900 font-medium hover:text-[#E8572A] transition-colors">AI automation that eliminates repetitive work</a>,{' '}
            <a href="#workflows" className="text-stone-900 font-medium hover:text-[#E8572A] transition-colors">custom workflows that wire your stack together</a> — plus adjacent practices in{' '}
            <Link href="/services/geo" className="text-stone-900 font-medium hover:text-[#E8572A] transition-colors">GEO (getting cited by AI search)</Link>,{' '}
            <Link href="/services/seo" className="text-stone-900 font-medium hover:text-[#E8572A] transition-colors">SEO (technical search foundations)</Link>, and{' '}
            <Link href="/services/web" className="text-stone-900 font-medium hover:text-[#E8572A] transition-colors">Website Design (conversion-engineered builds with AI baked in)</Link>. Most clients start with one and ladder into the rest.
          </p>
        </div>
      </section>

      {/* Services — alternating layouts, editorial numbers, orange outcome bands */}
      <main className="max-w-6xl mx-auto px-6 pb-32 space-y-10">
        {services.map((s, idx) => {
          const flipped = idx % 2 === 1;
          return (
            <div
              key={s.num}
              id={s.id}
              style={{ scrollMarginTop: '80px' }}
              className="relative bg-white rounded-3xl border border-stone-200 overflow-hidden transition-all duration-300 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)]"
            >
              {/* Giant watermark number */}
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
                {/* Left (or Right when flipped) — Description */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#FFF4EC] rounded-2xl flex items-center justify-center text-[#E8572A]">
                      {s.icon}
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#E8572A] tracking-wider">{s.num}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-3 leading-[1.05]">{s.title}</h2>
                  <p className="text-[#E8572A] font-medium italic mb-6 font-display" style={{ fontVariationSettings: '"SOFT" 50' }}>{s.tagline}</p>
                  <p className="text-stone-500 font-light leading-relaxed">{s.description}</p>
                </div>

                {/* Right (or Left when flipped) — What's included */}
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">What&apos;s included</p>
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

              {/* Orange outcome band — pulled out of the card */}
              <div className="relative bg-[#E8572A] text-white px-10 md:px-16 py-6 flex items-center gap-6 flex-wrap">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/70 shrink-0">Outcome</span>
                <p className="font-light leading-relaxed flex-1 min-w-[250px]">{s.outcome}</p>
              </div>
            </div>
          );
        })}
      </main>

      {/* Pricing tiers */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">
          Investment
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-4 leading-[1.05]">
          Three engagement tiers.{' '}
          <span className="italic text-[#E8572A]" style={{ fontVariationSettings: '"SOFT" 50' }}>
            Pick the altitude.
          </span>
        </h2>
        <p className="text-lg text-stone-500 font-light leading-relaxed max-w-2xl mb-12">
          We engage at three altitudes — from a productized starter agent that ships in two weeks, to multi-agent enterprise systems that take six months. The right tier depends on whether you want a tool, a teammate, or an operations layer.
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

              <p
                className="font-display text-3xl italic font-medium tracking-tight text-[#E8572A] leading-none mb-2"
                style={{ fontVariationSettings: '"SOFT" 50' }}
              >
                {tier.brandName}
              </p>
              <h3 className="font-display text-lg font-medium tracking-tight text-stone-700 mb-1">
                {tier.name}
              </h3>
              <p className="text-sm text-stone-400 font-light mb-6 leading-relaxed">{tier.subtitle}</p>

              <div className="mb-6 pb-6 border-b border-stone-100">
                <div className="font-display text-3xl font-medium tracking-tight text-stone-900">
                  {tier.price}
                </div>
                <span className="block mt-1 font-mono text-[11px] tracking-wider text-stone-400">
                  {tier.priceNote}
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

        <p className="text-sm text-stone-400 font-light italic text-center mt-10 max-w-3xl mx-auto leading-relaxed">
          Tier 2 and Tier 3 are quoted after a free 30-minute discovery call. Tier 1 is fixed-price productized scope. Setup invoiced at signature, due net 15. Monthly retainers invoiced on the 1st, due net 15.
        </p>
        <p className="text-xs text-stone-400 font-light italic text-center mt-3 max-w-3xl mx-auto leading-relaxed">
          Tier line is drawn at scope, not dollars. Tier 2 = ONE workflow agent. Tier 3 = MULTIPLE connected agents covering a function.
        </p>
      </section>

      {/* Adjacent practices */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">
          Adjacent practices
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-4 leading-[1.05]">
          We also run three adjacent practices.
        </h2>
        <p className="text-lg text-stone-500 font-light leading-relaxed max-w-2xl mb-12">
          Most clients start with the AI agent practice and ladder into one or more of these. Same operator, same engineering brain — different surface.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {adjacentPractices.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group bg-white rounded-3xl border border-stone-200 p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]"
            >
              <h3 className="font-display text-xl font-medium tracking-tight text-stone-900 mb-3 group-hover:text-[#E8572A] transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-stone-500 font-light leading-relaxed flex-1">{p.desc}</p>
              <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[#E8572A] transition-all">
                {p.cta}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works — animated connector between 01 → 02 → 03 */}
      <section className="relative bg-stone-900 py-24 overflow-hidden">
        {/* Subtle orange glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E8572A] opacity-[0.06] blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#FF7A3F] uppercase mb-4">The Process</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white mb-16 max-w-xl leading-[1.05]">
            From audit to autonomous in{' '}
            <span className="italic text-[#FF7A3F]" style={{ fontVariationSettings: '"SOFT" 50' }}>72 hours</span>.
          </h2>

          {/* Horizontal connecting line (desktop) */}
          <div className="hidden md:block absolute left-0 right-0 top-[58%] h-px bg-gradient-to-r from-transparent via-[#E8572A]/40 to-transparent mx-16 pointer-events-none" />

          <div className="grid md:grid-cols-3 gap-6 relative">
            {[
              { num: '01', title: 'Audit', desc: 'We map your current operations in a 30-minute strategy call and identify the 2–3 highest-leverage automation opportunities.' },
              { num: '02', title: 'Architect', desc: 'We design the exact systems — agent swarms, workflow automations, or integrations — tailored to your tools and business model.' },
              { num: '03', title: 'Deploy', desc: 'We build, integrate, test, and hand over a fully working autonomous system. Typical turnaround: 72 hours.' },
            ].map((step) => (
              <div
                key={step.num}
                className="relative p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-[#E8572A]/40 transition-colors duration-300"
              >
                {/* Numbered dot on the connector line */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 w-3 h-3 rounded-full bg-[#E8572A] shadow-[0_0_16px_rgba(232,87,42,0.7)]" />
                <span className="font-mono text-xs font-semibold text-[#FF7A3F] block mb-4 tracking-wider">{step.num}</span>
                <h3 className="font-display text-xl font-medium text-white mb-3">{step.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="relative overflow-hidden bg-stone-900 rounded-3xl p-12 md:p-20 text-center">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E8572A] opacity-[0.08] blur-3xl pointer-events-none" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
              Ready to remove your biggest bottleneck?
            </h2>
            <p className="text-stone-400 font-light text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Book a free 30-minute strategy call. We&apos;ll identify exactly which system will move the needle fastest for your business.
            </p>
            <a
              href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
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

      {/* Compass cross-link */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="bg-white rounded-3xl border border-stone-200 p-10 md:p-14 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase">Free top-of-funnel</span>
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase font-semibold bg-[#E8572A] text-white px-2 py-0.5 rounded-full">Free</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-stone-900 mb-4 leading-tight">
              See exactly how AI engines describe your business — before you book.
            </h3>
            <p className="text-stone-500 font-light leading-relaxed max-w-xl">
              Forge Compass is our free self-serve audit. Run a scan against your domain and get a structured report on entity health, category visibility, and attribution leaks. We follow up within 24 hours with a personalized walkthrough.
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
                A B2B AI automation firm. We architect and deploy the intelligence layer inside modern enterprises.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">Practice Areas</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="text-stone-600 hover:text-[#E8572A] transition-colors">AI Agents &amp; Automation</Link></li>
                <li><Link href="/services/geo" className="text-stone-600 hover:text-[#E8572A] transition-colors">GEO</Link></li>
                <li><Link href="/services/seo" className="text-stone-600 hover:text-[#E8572A] transition-colors">SEO</Link></li>
                <li><Link href="/services/web" className="text-stone-600 hover:text-[#E8572A] transition-colors">Websites</Link></li>
                <li><a href={COMPASS_URL} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-[#E8572A] transition-colors">Forge Compass — Free Audit</a></li>
                <li><Link href="/#demo" className="text-stone-600 hover:text-[#E8572A] transition-colors">Live Demo</Link></li>
                <li><Link href="/about" className="text-stone-600 hover:text-[#E8572A] transition-colors">About Us</Link></li>
                <li><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-[#E8572A] transition-colors">Book a Call</a></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">Contact</p>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:info@forge-automations.com" className="text-stone-600 hover:text-[#E8572A] transition-colors">info@forge-automations.com</a></li>
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
