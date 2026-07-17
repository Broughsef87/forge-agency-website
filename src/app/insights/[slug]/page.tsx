import NavBar from '@/components/NavBar';
import ForgeLogo from '@/components/ForgeLogo';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPost, posts, type PostBlock } from '@/lib/insights';
import JsonLd from '@/components/JsonLd';
import Faq from '@/components/Faq';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '@/lib/contact';

const BOOKING_URL = 'https://calendar.app.google/kmAtXQsU4zL9m6Z96';
const COMPASS_URL = 'https://compass.the-forge-agency.com';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'Insights — The Forge Agency' };

  if (post.status === 'staged') {
    // Route resolves (so direct links don't 404) but stays out of search —
    // body copy hasn't been voice-passed yet. See src/lib/insights.ts.
    return {
      title: post.metaTitle,
      robots: { index: false, follow: false },
    };
  }

  // Self-referential www canonical + og:url, article-specific og:/twitter:
  // (both derived from the same source — the long headline + dek — so the
  // Twitter card no longer falls back to homepage boilerplate). FOR-131.
  return pageMetadata({
    path: `/insights/${post.slug}`,
    title: post.metaTitle,
    description: post.metaDescription ?? post.dek,
    socialTitle: post.title,
    socialDescription: post.dek,
    ogType: 'article',
  });
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

// Links only the FIRST occurrence of the earliest-matching term — a
// paragraph that says "GEO" five times (because it's defining GEO) should
// not turn into five identical links. Each post block carries at most one
// `links` entry in practice; if a block ever needs more than one, this
// still degrades safely (later terms simply aren't linked in that block).
function renderTextWithLinks(text: string, links?: { match: string; href: string }[]) {
  if (!links || links.length === 0) return text;

  let best: { index: number; link: { match: string; href: string } } | null = null;
  for (const link of links) {
    const idx = text.indexOf(link.match);
    if (idx !== -1 && (best === null || idx < best.index)) {
      best = { index: idx, link };
    }
  }
  if (!best) return text;

  const { index, link } = best;
  const before = text.slice(0, index);
  const matched = text.slice(index, index + link.match.length);
  const after = text.slice(index + link.match.length);
  const isExternal = /^https?:\/\//.test(link.href);
  const linkClass = 'text-stone-900 font-medium underline underline-offset-2 hover:text-[#E8572A] transition-colors';

  const anchor = isExternal ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {matched}
    </a>
  ) : (
    <Link href={link.href} className={linkClass}>
      {matched}
    </Link>
  );

  return (
    <>
      {before}
      {anchor}
      {after}
    </>
  );
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="font-display text-2xl md:text-4xl font-medium tracking-tight text-stone-900 mt-14 mb-6 leading-[1.1]">
          {block.text}
        </h2>
      );
    case 'p':
      return (
        <p className="text-lg text-stone-600 font-light leading-relaxed mb-6">
          {block.lead && (
            <strong className="block text-stone-900 font-medium mb-1">{block.lead}</strong>
          )}
          {renderTextWithLinks(block.text, block.links)}
        </p>
      );
    case 'ul':
      return (
        <ul className="space-y-4 my-8">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-4 text-lg text-stone-600 font-light leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8572A] shrink-0 mt-3" />
              {item}
            </li>
          ))}
        </ul>
      );
    case 'stats':
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12 p-8 bg-white rounded-3xl border border-stone-200">
          {block.items.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-4xl md:text-5xl font-medium tracking-tight text-[#E8572A] leading-none">
                {stat.value}
              </div>
              <div className="mt-2 text-xs text-stone-500 font-light leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      );
    case 'cta': {
      const isExternal = /^https?:\/\//.test(block.href);
      return (
        <a
          href={block.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-[#E8572A] text-white rounded-full font-medium text-sm hover:bg-[#FF7A3F] hover:shadow-[0_0_30px_-5px_rgba(232,87,42,0.5)] transition-all duration-300"
        >
          {block.text}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      );
    }
    case 'related':
      return (
        <Link
          href={block.href}
          className="group flex items-center justify-between gap-4 mb-8 px-6 py-4 bg-white border border-stone-200 rounded-2xl hover:border-stone-300 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] transition-all duration-300"
        >
          <span className="text-sm">
            <span className="font-mono text-[10px] tracking-[0.2em] text-stone-400 uppercase block mb-1">Related reading</span>
            <span className="font-medium text-stone-900 group-hover:text-[#E8572A] transition-colors">{block.label}</span>
          </span>
          <svg className="w-4 h-4 text-stone-400 group-hover:text-[#E8572A] transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      );
  }
}

function SiteFooter() {
  return (
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
              <li><a href={PHONE_TEL_HREF} className="text-stone-600 hover:text-[#E8572A] transition-colors">{PHONE_DISPLAY}</a></li>
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
  );
}

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  if (post.status === 'staged') {
    return (
      <div className="min-h-screen bg-[#F5F1EA] text-stone-900 font-sans">
        <NavBar />
        <div className="pt-40 pb-32 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-6">Insights · Coming soon</p>
            <h1 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-700 leading-[1.1] mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-stone-500 font-light leading-relaxed mb-10">
              This piece is being finished — check back soon.
            </p>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#E8572A] hover:text-stone-900 transition-colors"
            >
              ← Back to Insights
            </Link>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const closing = post.closingCta;

  return (
    <div className="min-h-screen bg-[#F5F1EA] text-stone-900 font-sans">
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.dek,
          path: `/insights/${post.slug}`,
          datePublished: post.date,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
          { name: post.title, path: `/insights/${post.slug}` },
        ])}
      />
      <NavBar />

      <article className="pt-40 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            <Link href="/insights" className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase hover:text-[#E8572A] transition-colors">
              ← Insights
            </Link>
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#E8572A] uppercase">{post.category}</span>
            <span className="font-mono text-[10px] tracking-wider text-stone-400">{formatDate(post.date)} · {post.readMinutes} min</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl font-medium tracking-tight text-stone-900 leading-[1.05] mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-stone-500 font-light leading-relaxed mb-14 pb-10 border-b border-stone-300/70">
            {post.dek}
          </p>

          {/* Body */}
          {post.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </article>

      {/* Visible FAQ + matching FAQPage schema (FOR-112) — own section, same
          max-w-3xl px-6 treatment as the article body, not nested inside it */}
      {post.faq && post.faq.length > 0 && (
        <Faq items={post.faq} eyebrow="FAQ" heading="Frequently asked questions" />
      )}

      {/* Closing CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden bg-stone-900 rounded-3xl p-10 md:p-14 text-center">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#E8572A] opacity-[0.08] blur-3xl pointer-events-none" />
          <div className="relative">
            <h2 className="font-display text-2xl md:text-4xl font-medium tracking-tight text-white mb-4 leading-tight">
              {closing?.heading ?? 'Sound like your operation?'}
            </h2>
            <p className="text-stone-400 font-light mb-8 max-w-md mx-auto leading-relaxed">
              {closing?.body ?? 'Tell us how your team sees their numbers today. We\'ll tell you if there\'s a window worth building.'}
            </p>
            <a
              href={closing?.ctaHref ?? BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8572A] text-white rounded-full font-medium text-sm hover:bg-[#FF7A3F] hover:shadow-[0_0_40px_-5px_rgba(232,87,42,0.6)] transition-all duration-300"
            >
              {closing?.ctaLabel ?? 'Book a Strategy Call'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
