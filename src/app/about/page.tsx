import NavBar from '@/components/NavBar';
import ForgeLogo from '@/components/ForgeLogo';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — The Forge Agency',
  description:
    'The Forge Agency is a high-ticket B2B AI automation firm. Meet the team building the intelligence layer inside modern enterprises.',
};

const values = [
  {
    title: 'Outcomes over outputs.',
    desc: 'We don\'t sell hours or deliverables. We sell working systems that produce measurable results. If it doesn\'t move a number, we don\'t build it.',
  },
  {
    title: 'Speed is a feature.',
    desc: 'We deploy in 72 hours because momentum matters. Slow rollouts kill adoption. Our default is: build fast, test in production, iterate.',
  },
  {
    title: 'Simplicity scales.',
    desc: 'The best automation is the one that breaks the least. We design for clarity and resilience — systems your team can understand, audit, and trust.',
  },
  {
    title: 'We don\'t build dependencies.',
    desc: 'Every system we ship, you own. No proprietary black boxes. No lock-in. We hand over full documentation and train your team.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] text-stone-900 font-sans">
      <NavBar />

      {/* Hero */}
      <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
        <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">About Us</p>
        <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-stone-900 leading-[1.02] mb-8 max-w-4xl">
          We build the{' '}
          <span className="italic text-[#E8572A]" style={{ fontVariationSettings: '"SOFT" 50' }}>intelligence layer</span>{' '}
          inside your business.
        </h1>
        <p className="text-xl text-stone-500 font-light leading-relaxed max-w-2xl">
          The Forge Agency is a high-ticket B2B AI automation firm. We don&apos;t sell software — we architect, build, and deploy the autonomous systems that let enterprises scale revenue without scaling headcount.
        </p>
      </section>

      {/* Mission */}
      <section className="relative bg-stone-900 py-24 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#E8572A] opacity-[0.05] blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#FF7A3F] uppercase mb-4">Our Mission</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.05] mb-6">
              Make human labor optional for everything that{' '}
              <span className="italic text-[#FF7A3F]" style={{ fontVariationSettings: '"SOFT" 50' }}>should be</span>{' '}
              automated.
            </h2>
          </div>
          <div className="space-y-6 text-stone-400 font-light leading-relaxed">
            <p>
              Most businesses are running the same manual processes they were running five years ago — just with more headcount. The tools to automate those processes now exist. The barrier isn&apos;t technology; it&apos;s knowing what to build and having the technical depth to build it right.
            </p>
            <p>
              That&apos;s the gap we fill. We work with operators, founders, and enterprise teams to identify exactly where AI can do the heavy lifting — then we build it, deploy it, and hand it over.
            </p>
          </div>
        </div>
      </section>

      {/* Pullquote — extracted editorial statement */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <figure className="text-center">
          <div className="font-display text-6xl md:text-8xl text-[#E8572A]/40 leading-none mb-6 select-none" aria-hidden="true">&ldquo;</div>
          <blockquote className="font-display italic text-3xl md:text-5xl font-medium tracking-tight text-stone-900 leading-[1.1] max-w-4xl mx-auto" style={{ fontVariationSettings: '"SOFT" 80' }}>
            What would need to be true for this business to{' '}
            <span className="text-[#E8572A]">10× output</span>{' '}
            without{' '}
            <span className="text-[#E8572A]">10× headcount</span>?
          </blockquote>
          <figcaption className="mt-8 font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase">
            — every engagement starts here
          </figcaption>
        </figure>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-stone-200/60">
        <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">The Team</p>
        <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-16 leading-[1.05]">
          The humans behind the machines.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Andrew */}
          <div className="group bg-white rounded-3xl border border-stone-200 p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
            <div className="flex items-start gap-6 mb-8">
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
            <p className="text-stone-500 font-light leading-relaxed mb-6">
              10-year Olympic weightlifter turned automation architect. Andrew built his first automation stack to solve operational problems in his own business — and hasn&apos;t stopped since. He bridges high-level business strategy with deep technical implementation, ensuring every system scales without friction.
            </p>
            <p className="text-stone-500 font-light leading-relaxed">
              His background in elite sport means he understands what it takes to build systems that perform under pressure and improve with repetition. He brings that same discipline to every client engagement.
            </p>
          </div>

          {/* Lisa */}
          <div className="group bg-white rounded-3xl border border-stone-200 p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
            <div className="flex items-start gap-6 mb-8">
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
            <p className="text-stone-500 font-light leading-relaxed mb-6">
              The strategic force behind Forge Agency&apos;s expansion. Lisa is also the co-founder of{' '}
              <a href="https://roimetalbuildings.com/" target="_blank" rel="noopener noreferrer"
                className="text-stone-700 underline underline-offset-2 hover:text-[#E8572A] transition-colors">
                ROI Metal Buildings
              </a>
              , where she sharpened her expertise in high-ticket B2B sales and operational scale. She brings that same precision to identifying automation opportunities and ensuring our productized workflows solve the most painful bottlenecks in the market.
            </p>
            <p className="text-stone-500 font-light leading-relaxed">
              She owns the client relationship from first conversation through deployment — making sure every engagement is scoped correctly, delivered on time, and produces results the client can actually measure.
            </p>
          </div>
        </div>
      </section>

      {/* Values — asymmetric left-rail layout with big numbers */}
      <section className="bg-white border-t border-stone-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">How We Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-20 max-w-xl leading-[1.05]">
            The principles behind every system we ship.
          </h2>
          <div className="space-y-16">
            {values.map((v, idx) => (
              <div
                key={v.title}
                className="grid grid-cols-12 gap-6 md:gap-10 items-start pb-16 border-b border-stone-100 last:border-0 last:pb-0"
              >
                <div className="col-span-12 md:col-span-3 flex md:flex-col items-baseline md:items-start gap-4 md:gap-2">
                  <span className="font-display font-light text-[#E8572A] text-6xl md:text-8xl leading-none" style={{ fontVariationSettings: '"opsz" 144' }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-display text-2xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4 leading-[1.1]">{v.title}</h3>
                  <p className="text-stone-500 font-light leading-relaxed text-base md:text-lg max-w-2xl">{v.desc}</p>
                </div>
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
              Your competition is already automating.
            </h2>
            <p className="text-stone-400 font-light text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Book a free 30-minute strategy call. We&apos;ll map out exactly where autonomous systems can remove your biggest operational bottlenecks.
            </p>
            <a
              href="https://calendly.com/broughsef/30min" target="_blank" rel="noopener noreferrer"
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
