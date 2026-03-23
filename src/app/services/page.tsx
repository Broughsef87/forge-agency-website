import NavBar from '@/components/NavBar';
import ForgeLogo from '@/components/ForgeLogo';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — The Forge Agency',
  description:
    'AI automation, custom workflows, and bespoke AI agents built for enterprises who move fast. Deployed in 72 hours.',
};

const services = [
  {
    num: '01',
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
    num: '02',
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
    outcome: 'No more copy-pasting between tools. No more dropped handoffs. Just clean, reliable signal.',
  },
  {
    num: '03',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Bespoke AI Agents',
    tagline: 'A custom intelligence built for your exact problem.',
    description:
      'AI agents are software that can reason, plan, and act autonomously on your behalf. We build agents tuned to your business context — trained on your data, connected to your tools, and capable of executing multi-step tasks without human intervention.',
    bullets: [
      'Sales research and outreach agents',
      'Customer support and escalation agents',
      'Internal knowledge and Q&A agents',
      'Competitive intelligence agents',
      'Proposal and contract generation agents',
    ],
    outcome: 'Think of it as hiring a tireless, expert operator — one that works 24/7 and costs a fraction of a headcount.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] text-stone-900 font-sans">
      <NavBar />

      {/* Hero */}
      <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-4">What We Build</p>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 leading-[1.05] mb-8 max-w-3xl">
          Systems that work<br className="hidden md:block" /> while you sleep.
        </h1>
        <p className="text-xl text-stone-500 font-light leading-relaxed max-w-2xl">
          We build three types of intelligent systems — each one designed to remove a specific class of operational drag from your business.
        </p>
      </section>

      {/* Services */}
      <main className="max-w-6xl mx-auto px-6 pb-32 space-y-8">
        {services.map((s) => (
          <div key={s.num} className="bg-white rounded-3xl border border-stone-200 p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-start">

              {/* Left */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-600">
                    {s.icon}
                  </div>
                  <span className="text-xs font-semibold font-mono text-stone-400">{s.num}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-3">{s.title}</h2>
                <p className="text-[#E8572A] font-medium mb-6">{s.tagline}</p>
                <p className="text-stone-500 font-light leading-relaxed">{s.description}</p>
              </div>

              {/* Right */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] text-stone-400 uppercase mb-4">What&apos;s included</p>
                  <ul className="space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-stone-700 font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E8572A] shrink-0 mt-2" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                  <p className="text-xs font-semibold tracking-[0.15em] text-stone-400 uppercase mb-2">Outcome</p>
                  <p className="text-stone-700 font-light leading-relaxed text-sm">{s.outcome}</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </main>

      {/* How it works */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-4">The Process</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-16 max-w-xl">
            From audit to autonomous in 72 hours.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Audit', desc: 'We map your current operations in a 30-minute strategy call and identify the 2–3 highest-leverage automation opportunities.' },
              { num: '02', title: 'Architect', desc: 'We design the exact systems — agent swarms, workflow automations, or integrations — tailored to your tools and business model.' },
              { num: '03', title: 'Deploy', desc: 'We build, integrate, test, and hand over a fully working autonomous system. Typical turnaround: 72 hours.' },
            ].map((step) => (
              <div key={step.num} className="p-8 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-xs font-semibold font-mono text-stone-500 block mb-4">{step.num}</span>
                <h3 className="text-xl font-medium text-white mb-3">{step.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-stone-900 rounded-3xl p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
            Ready to remove your biggest bottleneck?
          </h2>
          <p className="text-stone-400 font-light text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free 30-minute strategy call. We&apos;ll identify exactly which system will move the needle fastest for your business.
          </p>
          <a
            href="https://calendly.com/broughsef/30min" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5F1EA] text-stone-900 rounded-full font-medium hover:bg-white transition-colors"
          >
            Book a Strategy Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500 font-medium">
          <Link href="/" className="flex items-center gap-2.5 hover:text-stone-900 transition-colors">
            <ForgeLogo className="w-4 h-4" />
            <span>© 2026 THE FORGE AGENCY</span>
          </Link>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-stone-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
