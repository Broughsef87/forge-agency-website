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
        <p className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-4">About Us</p>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 leading-[1.05] mb-8 max-w-4xl">
          We build the intelligence layer inside your business.
        </h1>
        <p className="text-xl text-stone-500 font-light leading-relaxed max-w-2xl">
          The Forge Agency is a high-ticket B2B AI automation firm. We don&apos;t sell software — we architect, build, and deploy the autonomous systems that let enterprises scale revenue without scaling headcount.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-4">Our Mission</p>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-6">
              Make human labor optional for everything that should be automated.
            </h2>
          </div>
          <div className="space-y-6 text-stone-400 font-light leading-relaxed">
            <p>
              Most businesses are running the same manual processes they were running five years ago — just with more headcount. The tools to automate those processes now exist. The barrier isn&apos;t technology; it&apos;s knowing what to build and having the technical depth to build it right.
            </p>
            <p>
              That&apos;s the gap we fill. We work with operators, founders, and enterprise teams to identify exactly where AI can do the heavy lifting — then we build it, deploy it, and hand it over.
            </p>
            <p>
              Every engagement starts with a question: <em className="text-white">what would need to be true for this business to 10x output without 10x headcount?</em> We work backwards from there.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-4">The Team</p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-16">
          The humans behind the machines.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* Andrew */}
          <div className="bg-white rounded-3xl border border-stone-200 p-10">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 bg-stone-100 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shrink-0">
                <div className="w-full h-full bg-[url('https://github.com/broughsef.png')] bg-cover bg-center" />
              </div>
              <div>
                <h3 className="text-2xl font-medium tracking-tight text-stone-900">Andrew</h3>
                <p className="text-sm font-semibold tracking-wider text-[#E8572A] uppercase mt-1">Founder & CEO</p>
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
          <div className="bg-white rounded-3xl border border-stone-200 p-10">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 bg-stone-100 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shrink-0">
                <div className="w-full h-full bg-[url('/images/Lisa-Wirth.jpeg')] bg-cover bg-center" />
              </div>
              <div>
                <h3 className="text-2xl font-medium tracking-tight text-stone-900">Lisa</h3>
                <p className="text-sm font-semibold tracking-wider text-[#E8572A] uppercase mt-1">Head of Growth</p>
              </div>
            </div>
            <p className="text-stone-500 font-light leading-relaxed mb-6">
              The strategic force behind Forge Agency&apos;s expansion. Lisa specializes in identifying high-ticket B2B opportunities and ensuring our productized workflows solve the most painful operational bottlenecks in the market.
            </p>
            <p className="text-stone-500 font-light leading-relaxed">
              She owns the client relationship from first conversation through deployment — making sure every engagement is scoped correctly, delivered on time, and produces results the client can actually measure.
            </p>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="bg-white border-t border-stone-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-4">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-16 max-w-xl">
            The principles behind every system we ship.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-2xl border border-stone-200 bg-[#F5F1EA]">
                <h3 className="text-lg font-medium tracking-tight text-stone-900 mb-3">{v.title}</h3>
                <p className="text-stone-500 font-light leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-stone-900 rounded-3xl p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
            Your competition is already automating.
          </h2>
          <p className="text-stone-400 font-light text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free 30-minute strategy call. We&apos;ll map out exactly where autonomous systems can remove your biggest operational bottlenecks.
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
