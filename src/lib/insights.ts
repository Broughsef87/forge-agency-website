/**
 * Insights post registry.
 *
 * Sage: add new posts here — each entry renders at /insights/{slug} via
 * src/app/insights/[slug]/page.tsx and appears on the /insights index
 * automatically (published posts only — see `status` below).
 *
 * Block types: 'p' (paragraph, optionally with inline links via `links`),
 * 'h2' (section heading), 'ul' (bullet list), 'stats' (big-number callout
 * row), 'cta' (inline orange button — for in-body CTAs, separate from the
 * closing CTA card).
 *
 * `status`:
 *   - 'published' — live, indexed, in the /insights index, in sitemap.xml,
 *     full Article + FAQPage (if `faq` present) + BreadcrumbList schema.
 *   - 'staged' — route exists (direct link resolves) but renders a "coming
 *     soon" notice, noindex, NOT in the /insights index, NOT in sitemap.
 *     Use this for content still awaiting voice-pass — never publish raw
 *     draft copy as `published`. Flip to 'published' + fill `blocks`/`faq`
 *     once the body copy is finalized in Andrew's voice.
 *
 * FAQ schema must mirror the visible FAQ copy verbatim (Google requirement)
 * — the `faq` array on a post drives BOTH the visible <Faq> section and the
 * FAQPage JSON-LD, so they can't drift.
 *
 * Keep client confidentiality rules: ROI Metal Buildings may be named;
 * Pelican stays anonymous ("a Pacific Northwest general contractor").
 * No commission or revenue figures unless the client has approved them.
 */

import type { FaqItem } from '@/lib/schema';

export type PostBlock =
  | { type: 'p'; text: string; links?: { match: string; href: string }[] }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'cta'; text: string; href: string };

export interface ClosingCta {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface InsightPost {
  slug: string;
  title: string;
  dek: string;
  category: string;
  date: string; // ISO yyyy-mm-dd
  readMinutes: number;
  status: 'published' | 'staged';
  blocks: PostBlock[];
  faq?: FaqItem[];
  closingCta?: ClosingCta;
}

const COMPASS_URL = 'https://compass.the-forge-agency.com';

export const posts: InsightPost[] = [
  {
    slug: 'roi-salesperson-dashboard',
    title: 'One spreadsheet, seven salespeople: the ROI Metal Buildings dashboard',
    dek: 'How a metal-building manufacturer gave seven reps a private window into their own deals — without changing the spreadsheet that runs the business.',
    category: 'Case Study',
    date: '2026-06-11',
    readMinutes: 4,
    status: 'published',
    blocks: [
      {
        type: 'p',
        text: 'ROI Metal Buildings runs its entire sales operation out of one spreadsheet. Fifty-plus columns. One person can actually read it.',
      },
      {
        type: 'p',
        text: 'Their seven salespeople were flying blind on their own deals. Project status, delivery dates, commission — all of it lived in a master sheet only the ops manager could navigate. A rep who wanted to know "when\'s my building shipping, and when do I get paid?" had to go ask. Every time.',
      },
      { type: 'h2', text: 'The obvious fix was a trap' },
      {
        type: 'p',
        text: 'Their first instinct was the one everybody reaches for: add buttons to the spreadsheet. Click a button, push an update.',
      },
      {
        type: 'p',
        text: 'But buttons were a trap. You can\'t hide one rep\'s numbers from another inside a shared spreadsheet — sheet protection isn\'t access control; anyone with the file can switch it off and read everyone\'s commissions. And a button can\'t safely write across separate files without bolting on paid tooling and hoping it doesn\'t break when two people edit at once.',
      },
      { type: 'h2', text: 'So we built the thing the buttons were a workaround for' },
      {
        type: 'p',
        text: 'A private dashboard, one login per salesperson, that reads their existing master sheet automatically. Three things make it work:',
      },
      {
        type: 'ul',
        items: [
          'It reads the source of truth. The ops manager keeps working in the exact spreadsheet she already maintains. Nobody enters data twice. Nothing changes for the person who runs the sheet.',
          'Each rep sees only their own book. Log in with your work email; see your projects, your delivery dates, your commissions — and nobody else\'s. Enforced by login, not by hoping people don\'t scroll.',
          'Estimated dates lock in once; actuals update live. The sheet changes, the dashboard reflects it within 15 minutes. No buttons to maintain, no second sheet to keep in sync.',
        ],
      },
      {
        type: 'stats',
        items: [
          { value: '7', label: 'reps on private logins' },
          { value: '21', label: 'active projects tracked' },
          { value: '15m', label: 'sheet-to-dashboard sync' },
          { value: '0', label: 'new data entry' },
        ],
      },
      { type: 'h2', text: 'The lesson scales' },
      {
        type: 'p',
        text: 'The information your team needs is almost always already sitting in a spreadsheet someone maintains. The problem isn\'t the data — it\'s that there\'s no window each person can safely look through. You rarely need a new system. You need a read-layer and real access control on the one you already trust.',
      },
      {
        type: 'p',
        text: 'That\'s most of what "AI automation" actually is for a small business: not ripping out what works, but putting a clean, private, always-current window onto it.',
      },
      {
        type: 'p',
        text: 'Building products? Storage? Contracting? If your crew is asking "where\'s my job at" and the answer lives in a tab they can\'t open — that\'s the gap.',
      },
    ],
  },

  // FOR-112, Article 1 — voice-passed by Andrew (Quill draft 2026-06-16 →
  // voice pass 2026-06-29). Body copy below is verbatim from the voice-pass
  // doc. FAQ wording matches the dispatch's FAQPage JSON-LD exactly.
  {
    slug: 'show-up-in-chatgpt',
    title: 'Is Your Construction Business Showing Up in ChatGPT?',
    dek: 'Buyers are asking ChatGPT and Google AI for recommendations. Here\'s how to check if your construction business shows up — and what to do if it doesn\'t.',
    category: 'GEO',
    date: '2026-06-30',
    readMinutes: 3,
    status: 'published',
    blocks: [
      { type: 'p', text: 'Your next customer might not Google you.' },
      {
        type: 'p',
        text: 'They might open ChatGPT and type: "Best metal building supplier near me." "Who builds climate-controlled self storage in Colorado?" "Recommend a commercial GC in the Tri-Cities."',
      },
      {
        type: 'p',
        text: 'AI answers with a short list of specific companies. If your business isn\'t on that list, you don\'t lose the opportunity — you never knew it existed. You won\'t see it in your analytics. The miss is invisible.',
      },
      {
        type: 'p',
        text: 'Here\'s how to check where you stand — and what\'s keeping most construction businesses off the list.',
      },
      { type: 'h2', text: 'Check if you show up. It takes five minutes.' },
      {
        type: 'p',
        text: 'Open ChatGPT, Perplexity, Gemini, and Google\'s AI Overviews. Ask the questions your buyers actually ask:',
      },
      {
        type: 'ul',
        items: [
          '"Best [your trade] in [your city]"',
          '"Who builds [your product] in [your region]"',
          '"Recommend a [your trade] for [the job]"',
        ],
      },
      { type: 'p', text: 'Run five or six queries. See what comes back.' },
      {
        type: 'p',
        text: 'Most owners who do this for the first time find the same thing: competitors are getting named, and they aren\'t. Or nobody gets named, and the AI is pulling from a directory they\'ve never heard of.',
      },
      { type: 'p', text: 'Either way, now you know.' },
      { type: 'h2', text: 'Why you\'re probably not showing up' },
      {
        type: 'p',
        text: 'AI engines don\'t recommend you because they know you. They recommend you because they can read you — clearly, from sources they trust.',
      },
      { type: 'p', text: 'Construction businesses tend to come up short in a few specific places:' },
      {
        type: 'ul',
        items: [
          'Thin website content. "We do quality work" tells a model nothing. If your site doesn\'t plainly say what you do, where, and for whom — the AI has nothing to pull from.',
          'No structured data. Schema markup is how a page tells a machine: here\'s the type of business, the service area, the services. Most trade sites have none.',
          'Missing from the right places. AI engines lean on directories, reviews, and authoritative pages. If you\'re absent or inconsistent across them, you\'re easy to skip.',
          'No content that answers buyer questions. A competitor who published "what does a warehouse-to-storage conversion cost?" gets cited. You don\'t. It\'s not about size — it\'s about who wrote down the answer.',
        ],
      },
      { type: 'h2', text: 'What actually gets you cited' },
      {
        type: 'p',
        text: 'Getting recommended by AI is called GEO — Generative Engine Optimization. The fundamentals:',
        links: [{ match: 'GEO', href: '/services/geo' }],
      },
      {
        type: 'ul',
        items: [
          'Say what you do in plain language, on pages built around what buyers actually ask.',
          'Add structured data so machines can read your services, area, and credentials.',
          'Be consistent across the places AI pulls from: your site, directories, reviews.',
          'Publish content that answers real buyer questions — so you\'re the source AI quotes.',
        ],
      },
      {
        type: 'p',
        text: 'It\'s good SEO pointed at a different reader. Not the person searching. The model deciding who to recommend.',
        links: [{ match: 'good SEO', href: '/services/seo' }],
      },
      { type: 'h2', text: 'See where you stand — free' },
      { type: 'p', text: 'We built a tool for exactly this.' },
      {
        type: 'p',
        text: 'Forge Compass scans your domain and scores your AI visibility — entity clarity, category coverage, and the specific gaps holding you back. About 60 seconds. Free.',
      },
      { type: 'cta', text: 'Run your free Compass audit →', href: COMPASS_URL },
      {
        type: 'p',
        text: 'If the scan shows you\'re invisible, that\'s fixable. It\'s most of what we do.',
        links: [{ match: 'what we do', href: '/about' }],
      },
    ],
    faq: [
      {
        q: 'How do I check if my business shows up in ChatGPT?',
        a: 'Ask ChatGPT, Perplexity, Gemini, and Google AI Overviews the questions your customers would actually ask — "best [trade] in [city]," "who builds [product] near me." Run five or six real queries. Are you named? Is a competitor? Is the AI pulling from a directory you\'ve never heard of? That tells you your baseline. For a scored version, run a free Compass scan.',
      },
      {
        q: 'Why isn\'t my business showing up in AI search?',
        a: 'Almost always a legibility problem, not a size problem. AI engines can\'t clearly read what you do — the site doesn\'t answer buyer questions, there\'s no structured data, the business is absent or inconsistent in the directories AI trusts. All fixable.',
      },
      {
        q: 'What is GEO?',
        a: 'Generative Engine Optimization — making your business visible to AI engines (ChatGPT, Gemini, Perplexity, Google AI Overviews) so they recommend and cite you. It overlaps with SEO but targets the AI\'s answer, not just the blue links.',
      },
      {
        q: 'Is GEO different from SEO?',
        a: 'Related but not the same. Strong SEO helps. But GEO adds structured data, entity clarity, and content built to be quoted by a model. You can rank on page 1 of Google and still be invisible in ChatGPT.',
      },
      {
        q: 'How long does it take to show up?',
        a: 'Depends on the gap. Structured data and clearer pages get read relatively quickly. Building trusted presence takes longer. The first step is knowing where you start — that\'s what the Compass scan shows you.',
      },
    ],
    closingCta: {
      heading: 'You can\'t fix what you can\'t see.',
      body: 'Run a free Forge Compass scan and find out exactly where your business stands in AI search — then we\'ll help you close the gaps.',
      ctaLabel: 'Run your free Compass audit →',
      ctaHref: COMPASS_URL,
    },
  },

  // FOR-112, Articles 2–5 — STAGED. Quill drafts exist but have not been
  // through Andrew's voice pass yet. Do NOT fill `blocks`/`faq` or flip to
  // 'published' until that happens — these ship under Article.author =
  // "Andrew Brough" and get indexed/cited by AI, so unreviewed copy doesn't
  // go live. Title/dek below are confirmed SEO header values from Sage's
  // dispatch (not body copy) — safe to use as-is.
  {
    slug: 'what-is-geo',
    title: 'What Is GEO (Generative Engine Optimization)?',
    dek: 'GEO is how your business gets recommended by AI engines like ChatGPT, Perplexity, and Gemini. Here\'s what it is, how it differs from SEO, and why it matters for construction businesses.',
    category: 'GEO',
    date: '2026-06-30',
    readMinutes: 0,
    status: 'staged',
    blocks: [],
  },
  {
    slug: 'ai-automation-construction',
    title: 'AI Automation for Construction: What to Automate First',
    dek: 'Not everything is worth automating. Here\'s what actually saves time for builders, manufacturers, and contractors — and what to leave for later.',
    category: 'Automation',
    date: '2026-06-30',
    readMinutes: 0,
    status: 'staged',
    blocks: [],
  },
  {
    slug: 'spam-backlinks-what-they-mean',
    title: 'We Found 200+ Spam Backlinks on a Client\'s Site. Here\'s What It Actually Means.',
    dek: 'Spam backlinks pointing at your site are alarming in a report. They\'re usually not a problem. Here\'s what\'s actually happening — and what to do about it.',
    category: 'SEO',
    date: '2026-06-30',
    readMinutes: 0,
    status: 'staged',
    blocks: [],
  },
  {
    slug: 'what-real-seo-looks-like',
    title: 'What Real SEO Looks Like (vs. What Gets Sold to Small Businesses)',
    dek: 'Most SEO sold to small businesses doesn\'t move anything. Here\'s what actually works — and three questions that cut through the noise when evaluating a provider.',
    category: 'SEO',
    date: '2026-06-30',
    readMinutes: 0,
    status: 'staged',
    blocks: [],
  },
];

export function getPost(slug: string): InsightPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPublishedPosts(): InsightPost[] {
  return posts.filter((p) => p.status === 'published');
}
