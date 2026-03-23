import NavBar from '@/components/NavBar';
import ScrollVideoHero from '@/components/ScrollVideoHero';
import ForgeLogo from '@/components/ForgeLogo';
import ChatDemo from '@/components/ChatDemo';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] text-stone-900 font-sans selection:bg-stone-200">

      <NavBar />

      {/* Scroll-scrubbed video hero */}
      <ScrollVideoHero />

      <main className="pb-24">

        {/* Stats bar */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <div className="border-t border-b border-stone-200 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-stone-200">
            <div data-reveal className="sm:pr-8">
              <div className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-2">10×</div>
              <div className="text-sm text-stone-500 font-medium">Operational throughput increase</div>
            </div>
            <div data-reveal data-delay="150" className="sm:px-8">
              <div className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-2">72h</div>
              <div className="text-sm text-stone-500 font-medium">Average deployment window</div>
            </div>
            <div data-reveal data-delay="300" className="sm:pl-8">
              <div className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-2">0</div>
              <div className="text-sm text-stone-500 font-medium">Additional headcount required</div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="max-w-6xl mx-auto px-6 mb-32">
          <p data-reveal className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-3">What We Build</p>
          <h2 data-reveal data-delay="100" className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-12">
            Systems that work while you sleep.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div data-reveal data-delay="100" className="group p-8 md:p-12 bg-white rounded-3xl border border-stone-200 hover:border-stone-300 transition-colors">
              <div className="w-12 h-12 bg-stone-100 rounded-2xl mb-8 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-stone-900 mb-4">Bespoke AI Workflows</h3>
              <p className="text-stone-500 font-light leading-relaxed mb-8">
                Custom-built agent swarms integrated directly into your operations. We architect systems that let you scale revenue without scaling headcount.
              </p>
              <ul className="space-y-3 text-sm text-stone-600 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0" />
                  Automated Onboarding
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0" />
                  Data Processing Pipelines
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0" />
                  Custom LLM Integrations
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div data-reveal data-delay="200" className="group p-8 md:p-12 bg-white rounded-3xl border border-stone-200 hover:border-stone-300 transition-colors">
              <div className="w-12 h-12 bg-stone-100 rounded-2xl mb-8 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-stone-900 mb-4">Productized Automation</h3>
              <p className="text-stone-500 font-light leading-relaxed mb-8">
                Ready-to-deploy automated systems that eliminate specific bottlenecks immediately. Pay for outcomes, not just software licenses.
              </p>
              <ul className="space-y-3 text-sm text-stone-600 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0" />
                  CRM Automations
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0" />
                  Intelligent Lead Routing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0" />
                  Lead Gen Agents
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* About / Process */}
        <section id="about" className="max-w-6xl mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div data-reveal>
              <p className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-3">Our Approach</p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-6">
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
                  className="flex gap-5 p-6 bg-white rounded-2xl border border-stone-200"
                >
                  <span className="text-xs font-semibold text-stone-400 font-mono pt-0.5 shrink-0">{step.num}</span>
                  <div>
                    <div className="font-medium tracking-tight text-stone-900 mb-1">{step.title}</div>
                    <div className="text-sm text-stone-500 font-light leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead-Gen Agent Demo */}
        <ChatDemo />

        {/* The Team */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <p data-reveal className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-3">The Team</p>
          <h2 data-reveal data-delay="100" className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-12">
            The humans behind the machines.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div data-reveal data-delay="150" className="group p-10 bg-white rounded-3xl border border-stone-200 hover:border-stone-300 transition-all">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-stone-100 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="w-full h-full bg-[url('https://github.com/broughsef.png')] bg-cover bg-center" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-stone-900">Andrew</h3>
                  <p className="text-sm font-semibold tracking-wider text-stone-400 uppercase">Founder & CEO</p>
                </div>
              </div>
              <p className="text-stone-500 font-light leading-relaxed">
                10-year Olympic weightlifter turned automation architect. Andrew bridges the gap between high-level business strategy and deep technical implementation. He ensures every system we build scales without friction.
              </p>
            </div>
            <div data-reveal data-delay="300" className="group p-10 bg-white rounded-3xl border border-stone-200 hover:border-stone-300 transition-all">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-stone-100 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="w-full h-full bg-[url('/images/Lisa-Wirth.jpeg')] bg-cover bg-center" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-stone-900">Lisa</h3>
                  <p className="text-sm font-semibold tracking-wider text-stone-400 uppercase">Head of Growth</p>
                </div>
              </div>
              <p className="text-stone-500 font-light leading-relaxed">
                The strategic force behind Forge Agency's expansion. Lisa specializes in identifying high-ticket B2B opportunities and ensuring our productized workflows solve the most painful operational bottlenecks in the market.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Block */}
        <section id="contact" className="max-w-6xl mx-auto px-6">
          <div data-reveal className="bg-stone-900 rounded-3xl p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
              Your competition is already automating.
            </h2>
            <p className="text-stone-400 font-light text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Book a free 30-minute strategy call. We&apos;ll map out exactly where autonomous systems can remove your biggest operational bottlenecks.
            </p>
            <a
              href="mailto:hello@forgeagency.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5F1EA] text-stone-900 rounded-full font-medium hover:bg-white transition-colors"
            >
              Book a Strategy Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500 font-medium">
          <div className="flex items-center gap-2.5">
            <ForgeLogo className="w-4 h-4" />
            <span>© 2026 THE FORGE AGENCY</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-stone-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
