import NavBar from '@/components/NavBar';
import ScrollVideoHero from '@/components/ScrollVideoHero';
import ForgeLogo from '@/components/ForgeLogo';
import ChatDemo from '@/components/ChatDemo';
import RevOpsDemo from '@/components/RevOpsDemo';
import CSAgentDemo from '@/components/CSAgentDemo';
import PricingSection from '@/components/PricingSection';
import LogoStrip from '@/components/LogoStrip';
import CountUp from '@/components/CountUp';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] text-stone-900 font-sans selection:bg-stone-200">

      <NavBar />

      {/* Scroll-scrubbed video hero */}
      <ScrollVideoHero />

      {/* Trusted-by logo strip (grayscale, under hero) */}
      <LogoStrip />

      <main className="pb-24">

        {/* Stats bar — editorial scale */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <div className="border-t border-stone-300/70 pt-10 pb-4">
            <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-10">
              The numbers
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              <div data-reveal>
                <div className="font-display font-medium tracking-tight text-stone-900 leading-none text-[96px] md:text-[128px] lg:text-[148px]">
                  <CountUp value={10} suffix="×" />
                </div>
                <div className="mt-4 max-w-[16rem]">
                  <div className="text-sm font-semibold text-stone-700 mb-1">Operational throughput</div>
                  <div className="text-xs text-stone-500 font-light leading-relaxed">Measured across first-90-day engagements — vs. pre-automation baseline.</div>
                </div>
              </div>
              <div data-reveal data-delay="150">
                <div className="font-display font-medium tracking-tight leading-none text-[96px] md:text-[128px] lg:text-[148px] text-[#E8572A]">
                  <CountUp value={72} suffix="h" />
                </div>
                <div className="mt-4 max-w-[16rem]">
                  <div className="text-sm font-semibold text-stone-700 mb-1">Average deployment window</div>
                  <div className="text-xs text-stone-500 font-light leading-relaxed">Scope → production. Industry median for comparable builds: 6–12 weeks.</div>
                </div>
              </div>
              <div data-reveal data-delay="300">
                <div className="font-display font-medium tracking-tight text-stone-900 leading-none text-[96px] md:text-[128px] lg:text-[148px]">
                  <CountUp value={0} />
                </div>
                <div className="mt-4 max-w-[16rem]">
                  <div className="text-sm font-semibold text-stone-700 mb-1">Additional headcount required</div>
                  <div className="text-xs text-stone-500 font-light leading-relaxed">Systems replace operational drag — not the operators who run your business.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services — 3 cards, matching /services taxonomy */}
        <section id="services" className="max-w-6xl mx-auto px-6 mb-32" style={{ scrollMarginTop: '80px' }}>
          <p data-reveal className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">What We Build</p>
          <h2 data-reveal data-delay="100" className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-12 max-w-2xl leading-[1.05]">
            Systems that work while you sleep.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Card 1 — AI Automation */}
            <div data-reveal data-delay="100" className="group relative p-8 md:p-10 bg-white rounded-3xl border border-stone-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] hover:border-stone-300">
              <span className="absolute top-6 right-6 font-mono text-[10px] text-stone-300 tracking-wider">01</span>
              <div className="w-12 h-12 bg-stone-100 rounded-2xl mb-8 flex items-center justify-center group-hover:bg-[#E8572A] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-medium tracking-tight text-stone-900 mb-3 group-hover:text-[#E8572A] transition-colors">AI Automation</h3>
              <p className="text-stone-500 font-light leading-relaxed mb-6 text-[15px]">
                Replace the highest-cost manual work in your operation with intelligent, self-running systems.
              </p>
              <ul className="space-y-2.5 text-sm text-stone-600 font-light">
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#E8572A] shrink-0" />
                  Data & document pipelines
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#E8572A] shrink-0" />
                  Email & inbox triage
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#E8572A] shrink-0" />
                  Reporting & dashboards
                </li>
              </ul>
            </div>

            {/* Card 2 — Custom Workflows */}
            <div data-reveal data-delay="200" className="group relative p-8 md:p-10 bg-white rounded-3xl border border-stone-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] hover:border-stone-300">
              <span className="absolute top-6 right-6 font-mono text-[10px] text-stone-300 tracking-wider">02</span>
              <div className="w-12 h-12 bg-stone-100 rounded-2xl mb-8 flex items-center justify-center group-hover:bg-[#E8572A] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h10" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-medium tracking-tight text-stone-900 mb-3 group-hover:text-[#E8572A] transition-colors">Custom Workflows</h3>
              <p className="text-stone-500 font-light leading-relaxed mb-6 text-[15px]">
                Your existing tools, wired together into a single automated operating layer.
              </p>
              <ul className="space-y-2.5 text-sm text-stone-600 font-light">
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#E8572A] shrink-0" />
                  Cross-platform integrations
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#E8572A] shrink-0" />
                  Trigger-based chains
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#E8572A] shrink-0" />
                  Lead routing & qualification
                </li>
              </ul>
            </div>

            {/* Card 3 — Bespoke AI Agents */}
            <div data-reveal data-delay="300" className="group relative p-8 md:p-10 bg-white rounded-3xl border border-stone-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] hover:border-stone-300">
              <span className="absolute top-6 right-6 font-mono text-[10px] text-stone-300 tracking-wider">03</span>
              <div className="w-12 h-12 bg-stone-100 rounded-2xl mb-8 flex items-center justify-center group-hover:bg-[#E8572A] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-medium tracking-tight text-stone-900 mb-3 group-hover:text-[#E8572A] transition-colors">Bespoke AI Agents</h3>
              <p className="text-stone-500 font-light leading-relaxed mb-6 text-[15px]">
                A custom intelligence trained on your data and wired to your tools — acting autonomously 24/7.
              </p>
              <ul className="space-y-2.5 text-sm text-stone-600 font-light">
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#E8572A] shrink-0" />
                  Sales & outreach agents
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#E8572A] shrink-0" />
                  Support & escalation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#E8572A] shrink-0" />
                  Internal knowledge agents
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-stone-500 uppercase hover:text-[#E8572A] transition-colors"
            >
              See the full services breakdown
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Lead-Gen Agent Demo */}
        <ChatDemo />

        {/* RevOps Agent Demo */}
        <RevOpsDemo />

        {/* Customer Success Agent Demo */}
        <CSAgentDemo />

        {/* About / Process */}
        <section id="about" className="max-w-6xl mx-auto px-6 mb-32" style={{ scrollMarginTop: '80px' }}>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div data-reveal>
              <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">Our Approach</p>
              <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6 leading-[1.05]">
                Built for enterprises who think in systems.
              </h2>
              <p className="text-stone-500 font-light leading-relaxed mb-5">
                Forge Agency is a high-ticket B2B AI automation firm. We don&apos;t sell software — we build the intelligence layer that sits inside your operations and produces value around the clock.
              </p>
              <p className="text-stone-500 font-light leading-relaxed">
                Every engagement starts with a deep audit of your workflow, identifying the human bottlenecks costing you the most. Then we architect, build, and deploy the exact systems to remove them.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { num: '01', title: 'Audit', desc: 'Map your current operations and identify the highest-leverage automation opportunities.', delay: '100' },
                { num: '02', title: 'Architect', desc: 'Design the exact agent systems and workflows tailored to your tech stack and business model.', delay: '200' },
                { num: '03', title: 'Deploy', desc: 'Build, integrate, and hand over a fully autonomous system — typically within 72 hours.', delay: '300' },
              ].map((step) => (
                <div
                  key={step.num}
                  data-reveal
                  data-delay={step.delay}
                  className="flex gap-5 p-6 bg-white rounded-2xl border border-stone-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E8572A]/40 hover:shadow-[0_12px_40px_-16px_rgba(232,87,42,0.25)]"
                >
                  <span className="font-mono text-xs font-semibold text-[#E8572A] pt-0.5 shrink-0">{step.num}</span>
                  <div>
                    <div className="font-medium tracking-tight text-stone-900 mb-1">{step.title}</div>
                    <div className="text-sm text-stone-500 font-light leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Team */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <p data-reveal className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">The Team</p>
          <h2 data-reveal data-delay="100" className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-12 leading-[1.05]">
            The humans behind the machines.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Andrew */}
            <div data-reveal data-delay="150" className="group p-8 md:p-10 bg-white rounded-3xl border border-stone-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] hover:border-stone-300">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-28 h-28 bg-stone-100 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 shrink-0">
                  <div className="w-full h-full bg-[url('https://github.com/broughsef.png')] bg-cover bg-center" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight text-stone-900">Andrew</h3>
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-[#E8572A] uppercase mt-1">Founder &amp; CEO</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {['STRATEGY', 'INTEGRATIONS', 'DEPLOYMENT'].map((tag) => (
                      <span key={tag} className="font-mono text-[9px] tracking-[0.15em] text-stone-500 uppercase px-2 py-0.5 rounded-full bg-stone-100">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-stone-500 font-light leading-relaxed">
                10-year Olympic weightlifter turned automation architect. Andrew bridges high-level business strategy with deep technical implementation — ensuring every system we build scales without friction.
              </p>
            </div>
            {/* Lisa */}
            <div data-reveal data-delay="300" className="group p-8 md:p-10 bg-white rounded-3xl border border-stone-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] hover:border-stone-300">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-28 h-28 bg-stone-100 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 shrink-0">
                  <div className="w-full h-full bg-[url('/images/Lisa-Wirth.jpeg')] bg-cover bg-center" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight text-stone-900">Lisa</h3>
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-[#E8572A] uppercase mt-1">Head of Growth</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {['B2B SALES', 'SCOPING', 'DELIVERY'].map((tag) => (
                      <span key={tag} className="font-mono text-[9px] tracking-[0.15em] text-stone-500 uppercase px-2 py-0.5 rounded-full bg-stone-100">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-stone-500 font-light leading-relaxed">
                The strategic force behind Forge Agency&apos;s expansion. Also co-founder of{' '}
                <a href="https://roimetalbuildings.com/" target="_blank" rel="noopener noreferrer"
                   className="text-stone-700 underline underline-offset-2 hover:text-[#E8572A] transition-colors">
                  ROI Metal Buildings
                </a>
                , where she sharpened her expertise in high-ticket B2B sales. She owns the client relationship from first call through deployment.
              </p>
            </div>
          </div>
        </section>

        <PricingSection />

        {/* CTA Block */}
        <section id="contact" className="max-w-6xl mx-auto px-6">
          <div data-reveal className="relative overflow-hidden bg-stone-900 rounded-3xl p-12 md:p-20 text-center">
            {/* Subtle orange radial glow */}
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E8572A] opacity-[0.08] blur-3xl pointer-events-none" />
            {/* Forge icon at very low opacity, cropped */}
            <div className="absolute -bottom-20 -left-10 opacity-[0.04] pointer-events-none select-none">
              <ForgeLogo className="w-[400px] h-[400px] text-white" />
            </div>
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                Your competition is already automating.
              </h2>
              <p className="text-stone-400 font-light text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Book a free 30-minute strategy call. We&apos;ll map out exactly where autonomous systems can remove your biggest operational bottlenecks.
              </p>
              <a
                href="https://calendly.com/broughsef/30min"
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

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white mt-24">
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
              <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">Navigate</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="text-stone-600 hover:text-[#E8572A] transition-colors">Services</Link></li>
                <li><Link href="/#demo" className="text-stone-600 hover:text-[#E8572A] transition-colors">Live Demo</Link></li>
                <li><Link href="/about" className="text-stone-600 hover:text-[#E8572A] transition-colors">About Us</Link></li>
                <li><a href="https://calendly.com/broughsef/30min" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-[#E8572A] transition-colors">Book a Call</a></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">Contact</p>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hello@the-forge-agency.com" className="text-stone-600 hover:text-[#E8572A] transition-colors">hello@the-forge-agency.com</a></li>
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
