import NavBar from '@/components/NavBar';
import ForgeLogo from '@/components/ForgeLogo';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO — Foundation Tier | The Forge Agency',
  description:
    'Technical SEO and search hygiene for businesses that need foundations done right. $1,500/month, 3-month minimum. Honest about what SEO does and doesn\'t do in 2026.',
};

const BOOKING_URL = 'https://calendar.app.google/kmAtXQsU4zL9m6Z96';
const COMPASS_URL = 'https://compass.the-forge-agency.com';

const included = [
  {
    title: 'Technical foundation',
    items: [
      'Full technical audit (Core Web Vitals, crawl errors, site architecture)',
      'XML sitemap generation and submission',
      'robots.txt + canonical-tag strategy',
      'Schema markup deployment (Organization, Product, FAQ, Article)',
      'Email-deliverability hardening (SPF, DKIM, DMARC)',
    ],
  },
  {
    title: 'On-page work',
    items: [
      'Meta title and description optimization across all key pages',
      'Heading hierarchy and internal-linking cleanup',
      'Image alt-text and accessibility pass',
      'Page-speed optimization recommendations',
    ],
  },
  {
    title: 'Measurement & reporting',
    items: [
      'Google Search Console setup and monitoring',
      'Google Analytics 4 setup with conversion tracking',
      'Monthly written report — what moved, what didn\'t, what\'s next',
      'Quarterly review call',
    ],
  },
];

const wontDo = [
  'Content marketing campaigns or editorial calendars',
  'Aggressive link-building or paid placements',
  'Competitive ranking battles for high-volume head terms',
  'AI-search visibility (ChatGPT / Perplexity / Gemini citation work) — that\'s GEO',
];

export default function SeoServicePage() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] text-stone-900 font-sans">
      <NavBar />

      {/* Hero */}
      <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
        <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">
          Search Engine Optimization
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-stone-900 leading-[1.02] mb-8 max-w-4xl">
          SEO that{' '}
          <span className="italic text-[#E8572A]" style={{ fontVariationSettings: '"SOFT" 50' }}>
            earns its keep
          </span>
          .
        </h1>
        <p className="text-xl text-stone-500 font-light leading-relaxed max-w-2xl mb-8">
          Technical SEO and search hygiene for businesses that need their foundation done right. Honest scope, predictable pricing, no agency theater.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8572A] text-white rounded-full font-medium hover:bg-[#FF7A3F] hover:shadow-[0_0_40px_-5px_rgba(232,87,42,0.6)] transition-all duration-300 text-sm"
          >
            Book a Discovery Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* The honest pitch */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-3xl border border-stone-200 p-10 md:p-14">
          <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">
            Read this first
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-stone-900 mb-6 leading-tight">
            We don&apos;t lead with SEO anymore. We do offer it — for the right reason.
          </h2>
          <div className="space-y-5 text-stone-600 font-light leading-relaxed">
            <p>
              Generative Engine Optimization (GEO) — getting cited by ChatGPT, Perplexity, Gemini, and Claude when buyers ask category-level questions — is where the next decade of B2B search demand is going. That&apos;s the work we lead with, and it&apos;s where most of our clients should invest.
            </p>
            <p>
              But SEO foundations still matter. If your schema is broken, your sitemap doesn&apos;t exist, your email is hitting spam, and Google Search Console hasn&apos;t been touched in two years — no amount of GEO investment is going to compound. The foundation has to be right first.
            </p>
            <p>
              That&apos;s what this tier is for. One offering, predictable price, foundation-focused work. If we can&apos;t honestly say it&apos;ll move the needle for you, we&apos;ll tell you up front.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing — single tier */}
      <section className="max-w-4xl mx-auto px-6 pb-32">
        <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">
          Investment
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-12 leading-[1.05]">
          One tier.{' '}
          <span className="italic text-[#E8572A]" style={{ fontVariationSettings: '"SOFT" 50' }}>
            Honest scope.
          </span>
        </h2>

        <div className="bg-white rounded-3xl border-2 border-[#E8572A] shadow-[0_20px_60px_-20px_rgba(232,87,42,0.25)] p-10 md:p-14">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start mb-10">
            <div>
              <h3 className="font-display text-3xl font-medium tracking-tight text-stone-900 mb-2">
                Foundation
              </h3>
              <p className="text-sm text-stone-400 font-light mb-6 leading-relaxed">
                Technical SEO done right. No fluff.
              </p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display text-5xl font-medium tracking-tight text-stone-900">
                  $1,500
                </span>
                <span className="font-mono text-base text-stone-400">/month</span>
              </div>
              <span className="block font-mono text-[11px] tracking-wider text-stone-400">
                $1,500 setup · 3-month minimum
              </span>
            </div>
            <div className="md:border-l md:border-stone-100 md:pl-10">
              <p className="text-stone-700 font-light leading-relaxed mb-4">
                <span className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase block mb-2">
                  Outcome
                </span>
                Your technical foundation is solid. Search engines can crawl, index, and understand your site. Your data is captured. Your email lands in inboxes. Nothing is silently bleeding.
              </p>
              <p className="text-stone-700 font-light leading-relaxed">
                <span className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase block mb-2">
                  Best for
                </span>
                Businesses with clear technical gaps that need closing before more strategic investment makes sense. Often a stepping stone to GEO.
              </p>
            </div>
          </div>

          <div className="border-t border-stone-100 pt-10">
            <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-6">
              What&apos;s included
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {included.map((group) => (
                <div key={group.title}>
                  <h4 className="font-display text-base font-medium text-stone-900 mb-4">{group.title}</h4>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E8572A] shrink-0 mt-2" />
                        <span className="text-sm text-stone-600 font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-stone-100 pt-10 mt-10">
            <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-6">
              What it won&apos;t do
            </p>
            <ul className="space-y-3">
              {wontDo.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-stone-400 shrink-0 font-mono text-sm leading-relaxed">×</span>
                  <span className="text-sm text-stone-500 font-light italic leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-10 inline-flex items-center justify-center gap-2 py-4 rounded-full font-medium text-sm bg-[#E8572A] text-white hover:bg-[#FF7A3F] hover:shadow-[0_0_30px_-5px_rgba(232,87,42,0.5)] transition-all duration-300"
          >
            Book a 30-min Discovery Call →
          </a>
        </div>

        <p className="text-sm text-stone-400 font-light italic text-center mt-8 max-w-2xl mx-auto">
          Setup invoiced at signature, due net-15. Monthly retainer invoiced on the 1st, due net-15. Auto-renews month-to-month after the minimum term — cancellable with 30 days&apos; notice.
        </p>
      </section>

      {/* Pivot to GEO */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="bg-stone-900 text-white rounded-3xl p-12 md:p-16 grid md:grid-cols-[1fr_auto] gap-10 items-center overflow-hidden relative">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E8572A] opacity-[0.08] blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#FF7A3F] uppercase mb-4">
              Honestly, though
            </p>
            <h3 className="font-display text-2xl md:text-4xl font-medium tracking-tight text-white mb-4 leading-tight">
              If you&apos;re investing in search at all in 2026, GEO is the play.
            </h3>
            <p className="text-stone-400 font-light leading-relaxed max-w-2xl">
              SEO foundations are necessary but not sufficient. Buyers are reading AI answers, not Google results. The companies that get cited by ChatGPT and Perplexity in 2026 will be the default vendors of 2030. SEO without GEO is a stalled engine. Read the GEO breakdown — it&apos;s where most of our clients eventually land.
            </p>
          </div>
          <Link
            href="/services/geo"
            className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8572A] text-white rounded-full font-medium hover:bg-[#FF7A3F] hover:shadow-[0_0_40px_-5px_rgba(232,87,42,0.6)] transition-all duration-300 text-sm shrink-0"
          >
            See the GEO Practice
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Compass cross-link */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="bg-white rounded-3xl border border-stone-200 p-10 md:p-14 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">
              Diagnose first
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-stone-900 mb-4 leading-tight">
              Not sure if SEO is actually what you need?
            </h3>
            <p className="text-stone-500 font-light leading-relaxed max-w-xl">
              Forge Compass is our free self-serve audit. It scans your domain, identifies the specific gaps in your search foundations, and tells you whether SEO maintenance, GEO investment, or both is the right move for your business. Honest answer plus a personalized walkthrough within 24 hours.
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
