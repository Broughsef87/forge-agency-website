import NavBar from '@/components/NavBar';
import ForgeLogo from '@/components/ForgeLogo';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getPublishedPosts } from '@/lib/insights';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/insights',
  title: 'Insights — The Forge Agency',
  description:
    'Case studies and field notes on AI automation, SEO, and GEO for construction-trades businesses — real builds, real numbers, no theory.',
});

const BOOKING_URL = 'https://calendar.app.google/kmAtXQsU4zL9m6Z96';
const COMPASS_URL = 'https://compass.the-forge-agency.com';

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function InsightsIndexPage() {
  const posts = getPublishedPosts();
  return (
    <div className="min-h-screen bg-[#F5F1EA] text-stone-900 font-sans">
      <NavBar />

      {/* Hero */}
      <section className="pt-40 pb-16 max-w-6xl mx-auto px-6">
        <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">
          Insights
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-stone-900 leading-[1.02] mb-8 max-w-4xl">
          Field notes from{' '}
          <span className="italic text-[#E8572A]" style={{ fontVariationSettings: '"SOFT" 50' }}>
            real builds
          </span>
          .
        </h1>
        <p className="text-xl text-stone-500 font-light leading-relaxed max-w-2xl">
          Case studies and working notes on AI automation, SEO, and GEO for construction-trades businesses. Real numbers from live engagements — no theory, no stock photography.
        </p>
      </section>

      {/* Post list */}
      <main className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group p-8 md:p-10 bg-white rounded-3xl border border-stone-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] hover:border-stone-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#E8572A] uppercase">{post.category}</span>
                <span className="font-mono text-[10px] tracking-wider text-stone-400">{formatDate(post.date)} · {post.readMinutes} min</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-stone-900 mb-4 leading-tight group-hover:text-[#E8572A] transition-colors">
                {post.title}
              </h2>
              <p className="text-stone-500 font-light leading-relaxed flex-1">{post.dek}</p>
              <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[#E8572A]">
                Read
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}

          {/* Reserved slot — anonymized GC SEO story */}
          <div className="p-8 md:p-10 bg-white/60 rounded-3xl border border-dashed border-stone-300 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase">Case Study</span>
              <span className="font-mono text-[10px] tracking-wider text-stone-400">In progress</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-stone-700 mb-4 leading-tight">
              A Pacific Northwest general contractor — SEO &amp; AI visibility
            </h2>
            <p className="text-stone-500 font-light leading-relaxed flex-1">
              Publishing once the results are real, not projected.
            </p>
          </div>
        </div>
      </main>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden bg-stone-900 rounded-3xl p-12 md:p-20 text-center">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E8572A] opacity-[0.08] blur-3xl pointer-events-none" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
              Got a spreadsheet running your business?
            </h2>
            <p className="text-stone-400 font-light text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Book a free 30-minute call. Tell us how your team sees their numbers today — we&apos;ll tell you if there&apos;s a window worth building.
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
                AI automation, dashboards, and search visibility for builders, contractors, and building-products companies.
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
                <li><Link href="/insights" className="text-stone-600 hover:text-[#E8572A] transition-colors">Insights</Link></li>
                <li><Link href="/about" className="text-stone-600 hover:text-[#E8572A] transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">Contact</p>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:info@forge-automations.com" className="text-stone-600 hover:text-[#E8572A] transition-colors">info@forge-automations.com</a></li>
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
