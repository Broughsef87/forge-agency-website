/**
 * Insights post registry.
 *
 * Sage: add new posts here — each entry renders at /insights/{slug} via
 * src/app/insights/[slug]/page.tsx and appears on the /insights index
 * automatically (published posts only — see `status` below).
 *
 * Block types:
 *   'p'      paragraph. Optional `lead` renders a bold inline label before
 *            the text (for the "Term. Explanation." pattern used across
 *            these articles). Optional `links` auto-links ONE occurrence
 *            of a substring — see renderTextWithLinks in [slug]/page.tsx;
 *            only the first match in the text is linked, so repeated terms
 *            (e.g. "GEO" used a dozen times in one article) don't get
 *            relinked every time they appear.
 *   'h2'     section heading.
 *   'ul'     bullet list.
 *   'stats'  big-number callout row.
 *   'cta'    inline orange button — in-body CTA, separate from the closing
 *            CTA card.
 *   'related' bordered card linking to a sibling /insights article —
 *            navigational, not part of the voice-passed prose.
 *
 * `status`:
 *   - 'published' — live, indexed, in the /insights index, in sitemap.xml,
 *     full Article + FAQPage (if `faq` present) + BreadcrumbList schema.
 *   - 'staged' — route exists (direct link resolves) but renders a "coming
 *     soon" notice, noindex, NOT in the /insights index, NOT in sitemap.
 *     Use this for content still awaiting voice-pass — never publish raw
 *     draft copy as `published`.
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
  | { type: 'p'; text: string; lead?: string; links?: { match: string; href: string }[] }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'cta'; text: string; href: string }
  | { type: 'related'; label: string; href: string };

export interface ClosingCta {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface InsightPost {
  slug: string;
  title: string;
  /** SEO <title> tag — must stay ≤60 chars. Distinct from `title` (the H1),
   * which runs longer for readability. See generateMetadata in
   * app/insights/[slug]/page.tsx — this is the only thing it drives. */
  metaTitle: string;
  dek: string;
  /** Optional <meta name="description"> override, ≤155 chars. Falls back to
   * `dek` when absent — set this only when `dek` itself runs long. */
  metaDescription?: string;
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
    metaTitle: 'One Spreadsheet, Seven Salespeople — ROI Dashboard | Forge',
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
  // voice pass 2026-06-29). Doc unchanged since first publish. Body copy
  // verbatim; FAQ matches the dispatch's FAQPage JSON-LD exactly.
  {
    slug: 'show-up-in-chatgpt',
    title: 'Is Your Construction Business Showing Up in ChatGPT?',
    metaTitle: 'How to Show Up in ChatGPT (for Contractors & Builders)',
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

  // FOR-112, Article 2 — voice-passed, v2 (tightened "why now" section per
  // Andrew's direction). Published from doc 1ibg5YtUa7xKq13S0xiBJMqvOj_UeT2TZ_jkHI0-ByQc.
  {
    slug: 'what-is-geo',
    title: 'What Is GEO (Generative Engine Optimization)?',
    metaTitle: 'What Is GEO? Generative Engine Optimization Explained',
    dek: 'GEO is how your business gets recommended by AI engines like ChatGPT, Perplexity, and Gemini. Here\'s what it is, how it differs from SEO, and why it matters for construction businesses.',
    metaDescription: 'GEO is how your business gets recommended by AI engines like ChatGPT, Perplexity, and Gemini — what it is, how it differs from SEO, and why it matters.',
    category: 'GEO',
    date: '2026-07-01',
    readMinutes: 5,
    status: 'published',
    blocks: [
      { type: 'p', text: 'And the more practical question: does your construction business need it?' },
      {
        type: 'p',
        text: 'Short answer: GEO is how you get recommended by AI. When a potential customer asks ChatGPT who builds metal buildings in their state, or asks Perplexity for a GC recommendation, the AI generates an answer with a short list of real companies. GEO is the work that puts you on that list.',
        links: [{ match: 'GEO', href: '/services/geo' }],
      },
      { type: 'h2', text: 'What GEO stands for' },
      {
        type: 'p',
        text: 'GEO stands for Generative Engine Optimization. "Generative engine" is the category of AI tools that generate an original answer instead of returning a list of links — ChatGPT, Perplexity, Google Gemini, Google AI Overviews, and Microsoft Copilot are the main ones.',
      },
      { type: 'p', text: 'Traditional search gives you ten blue links. You pick one.' },
      { type: 'p', text: 'AI search gives you one answer. With specific recommendations baked in.' },
      { type: 'p', text: 'If you\'re not in the answer, you don\'t get a shot.' },
      { type: 'h2', text: 'How GEO is different from SEO' },
      { type: 'p', text: 'They overlap more than they differ.' },
      {
        type: 'p',
        text: 'SEO — Search Engine Optimization — is the practice of making your site and content rank well in Google. GEO is the same discipline applied to a different target: the AI deciding who to recommend.',
        links: [{ match: 'SEO — Search Engine Optimization', href: '/services/seo' }],
      },
      { type: 'p', text: 'The fundamentals carry over:' },
      {
        type: 'ul',
        items: [
          'Clear, well-organized website content',
          'Accurate, consistent information across the web',
          'Presence in directories and on review sites',
          'Pages that answer real buyer questions',
        ],
      },
      { type: 'p', text: 'Where GEO adds something new:' },
      {
        type: 'p',
        lead: 'Structured data (schema markup).',
        text: 'AI engines parse machine-readable schema to understand what type of business you are, what services you offer, and where you operate. Most trade sites have none.',
      },
      {
        type: 'p',
        lead: 'Entity clarity.',
        text: 'AI engines build a "picture" of your business from everything they can read about you. If your name, address, phone number, and description vary across sources, the picture gets fuzzy — and you\'re harder to recommend confidently.',
      },
      {
        type: 'p',
        lead: 'Citable content.',
        text: 'AI engines pull from pages they can quote. Content built around specific buyer questions — "what does it cost to build a 5,000 sq ft metal building in Colorado?" — gets cited. Content built around vague claims about your values doesn\'t.',
      },
      { type: 'p', text: 'You can rank on page 1 of Google and still be invisible in ChatGPT. GEO is the bridge.' },
      { type: 'h2', text: 'Why construction-trades businesses should care now' },
      {
        type: 'p',
        text: 'Buyers are already using AI for vendor research. The ones doing it tend to be high-intent — further along in the decision process, ready to buy.',
      },
      { type: 'p', text: 'The window to get ahead is now.' },
      {
        type: 'p',
        text: 'Most construction businesses aren\'t showing up in AI answers. That gap closes over the next few years as early movers fill it. The businesses doing the foundation work now become the default answers.',
      },
      { type: 'h2', text: 'What GEO work actually looks like' },
      { type: 'p', text: 'For a construction or trades business, the work breaks into a few tracks:' },
      {
        type: 'p',
        lead: 'Your website.',
        text: 'Clear descriptions of what you do, where, and for whom. Pages built around real buyer questions. Schema markup on every page that matters.',
      },
      {
        type: 'p',
        lead: 'Your presence across the web.',
        text: 'Consistent name, address, phone in every directory that matters. The directories AI trusts are largely the same ones that help local SEO: Google Business Profile, industry-specific directories, chamber listings, local business profiles.',
      },
      {
        type: 'p',
        lead: 'Citable content.',
        text: 'Articles, case studies, and answers that give AI engines something to quote when a buyer asks about your category. "Who builds metal buildings in [state]?" needs a page on your site that says exactly that, clearly.',
      },
      {
        type: 'p',
        lead: 'Reviews.',
        text: 'AI surfaces businesses with real, recent reviews from real customers. Thin or absent reviews make you hard to recommend confidently.',
      },
      {
        type: 'p',
        text: 'None of it is exotic. Most of it is work your business should be doing anyway for traditional search. GEO just makes it matter more.',
      },
      { type: 'h2', text: 'Where does Forge come in?' },
      {
        type: 'p',
        text: 'We run AI-visibility audits through Forge Compass — a scored read on how visible you are across the major AI engines. 60 seconds. Free.',
        links: [{ match: 'how visible you are across the major AI engines', href: '/insights/show-up-in-chatgpt' }],
      },
      { type: 'p', text: 'We fix what\'s broken from there.' },
      { type: 'cta', text: 'Run your free Compass audit →', href: COMPASS_URL },
    ],
    faq: [
      {
        q: 'What does GEO stand for?',
        a: 'Generative Engine Optimization. It refers to making your business visible to AI tools — ChatGPT, Perplexity, Gemini, Google AI Overviews — that generate original answers when someone asks for a recommendation.',
      },
      {
        q: 'Is GEO just a new name for SEO?',
        a: 'They overlap — the same fundamentals apply — but GEO adds things traditional SEO doesn\'t require: structured data (schema markup), entity clarity across all your online sources, and content specifically built to be cited by a model. You can rank on page 1 of Google and still be invisible in ChatGPT.',
      },
      {
        q: 'Do I need GEO if my business runs mostly on referrals?',
        a: 'The shift is gradual. If referrals are your main channel today, you\'re probably fine today. But referrals increasingly involve AI-assisted validation — someone gets referred to you, then asks ChatGPT to vet you. How you look in that step matters. The businesses showing up in AI answers now will have a meaningful head start when adoption accelerates in your market.',
      },
      {
        q: 'Which AI engines should I focus on?',
        a: 'The ones that matter most right now for a construction-trades buyer: ChatGPT (by far the most used), Google AI Overviews (reaches the most people, since it runs inside Google search), and Perplexity (smaller audience, but high-intent researchers). Gemini and Copilot are secondary. The foundation work that helps you show up in one generally helps across all of them.',
      },
      {
        q: 'How do I know if I\'m showing up in AI search right now?',
        a: 'Ask. Open ChatGPT and type the question your buyer would ask — "best [trade] in [city]," "who builds [product] near me." Do the same on Perplexity and Google AI Overviews. For a structured baseline with a score, run a free Forge Compass scan.',
      },
    ],
    closingCta: {
      heading: 'Most construction businesses aren\'t showing up in AI search yet.',
      body: 'Find out where you stand.',
      ctaLabel: 'Run your free Compass audit →',
      ctaHref: COMPASS_URL,
    },
  },

  // FOR-112, Article 3 — voice-passed, v2 (cut wind-up intro, tightened CTA).
  // Published from doc 1AuWXdWDw6VypzNAanNLUO0S8-Gku71KXi1GPByAA32A.
  // Automation link fixed per dispatch: /services/automation (404) -> /services#automation.
  {
    slug: 'ai-automation-construction',
    title: 'AI Automation for Construction: What to Automate First',
    metaTitle: 'AI Automation for Construction: What to Automate First',
    dek: 'Not everything is worth automating. Here\'s what actually saves time for builders, manufacturers, and contractors — and what to leave for later.',
    category: 'Automation',
    date: '2026-07-01',
    readMinutes: 4,
    status: 'published',
    blocks: [
      { type: 'p', text: 'You don\'t have time to automate everything. You have time to fix one thing.' },
      {
        type: 'p',
        text: 'The highest-ROI automation is almost never the flashy one. It\'s the thing your team does manually every week that doesn\'t need to be manual.',
        links: [{ match: 'automation', href: '/services#automation' }],
      },
      { type: 'h2', text: 'Start with your biggest recurring time sink' },
      { type: 'p', text: 'Most construction businesses have one of these in common:' },
      {
        type: 'p',
        text: 'Someone rebuilds the same report every week — pulling numbers from three different spreadsheets for a Monday morning meeting.',
      },
      {
        type: 'p',
        text: 'Someone follows up on the same things manually — payment status, delivery confirmations, permit approvals — because nothing fires automatically.',
      },
      { type: 'p', text: 'Someone re-enters the same data in two places that should talk to each other but don\'t.' },
      {
        type: 'p',
        text: 'That\'s where you start. Not because it\'s the most strategic — because it\'s the one where the hours come back fast enough to make the rest of it believable.',
      },
      { type: 'h2', text: 'The highest-ROI automations for construction businesses' },
      {
        type: 'p',
        lead: 'Live visibility off your existing spreadsheets',
        text: 'Most builders and manufacturers aren\'t ready to replace their spreadsheets. They don\'t need to. The fastest win is pulling a live dashboard from the spreadsheet they already run — so the owner, ops manager, and reps can see current status without anyone rebuilding a report.',
      },
      {
        type: 'p',
        text: 'We did this for a metal building manufacturer. Seven workflows running off one master spreadsheet — delivery dates, commission status, per-rep job views, payment tracking. The owner told us he spent two hours every Monday pulling those numbers together for the team meeting. That meeting now takes 10 minutes.',
      },
      { type: 'p', text: 'He didn\'t replace his system. He made it work for him.' },
      {
        type: 'p',
        lead: 'Automated follow-up on money and delivery',
        text: 'Late payments and missed delivery confirmations cost real money. The fix is usually straightforward: a trigger fires when a contract is signed, a delivery window is set, or a payment comes due — and the right message goes to the right person automatically.',
      },
      { type: 'p', text: 'Nobody has to remember to chase it. The system handles it.' },
      {
        type: 'p',
        lead: 'Notifications that fire on status changes',
        text: 'When a delivery date is confirmed, the rep should know immediately. When a payment clears, accounting should know. When a job hits a milestone, whoever owns the next step should get a ping.',
      },
      {
        type: 'p',
        text: 'Manual notification chains — calling, texting, emailing to relay status — are a hidden tax on your team\'s time. These are usually quick builds once the logic is mapped.',
      },
      {
        type: 'p',
        lead: 'An AI intake system',
        text: 'This one takes longer to build, but for businesses with real inbound volume, it\'s a multiplier. An AI intake layer handles inquiry routing, appointment booking, and first-response around the clock. The trade businesses that get this right reclaim hours every week from voicemail and email triage.',
      },
      { type: 'h2', text: 'What to leave for later' },
      { type: 'p', text: 'Not everything is worth automating now.' },
      {
        type: 'p',
        text: 'If a process runs once a quarter, or the steps change constantly, or human judgment is genuinely required at every decision point — leave it. The automation that breaks every time the process evolves costs more than the time it saves.',
      },
      { type: 'p', text: 'Build automation where the steps are consistent and the volume is real.' },
      { type: 'h2', text: 'The honest take on AI automation hype' },
      {
        type: 'p',
        text: 'AI automation gets oversold. You\'ll see pitches for "end-to-end AI systems" that promise to replace your entire back office. Some of that will be real in a few years. Today, the highest-value work is simpler: find the manual steps that happen repeatedly, map them clearly, and wire them to run without a human in the loop.',
      },
      { type: 'p', text: 'For most construction businesses, that\'s one or two workflows. Not twenty.' },
      { type: 'p', text: 'Get those right. Let the team feel what it does for them. Build from there.' },
      { type: 'h2', text: 'Ready to figure out where to start?' },
      { type: 'p', text: 'Shortest path: a conversation. Or run a free Compass scan — we can talk from there.' },
      { type: 'cta', text: 'Run your free Compass audit →', href: COMPASS_URL },
      { type: 'related', label: 'Is your construction business showing up in ChatGPT?', href: '/insights/show-up-in-chatgpt' },
    ],
    faq: [
      {
        q: 'What\'s the best first automation for a small construction business?',
        a: 'Start with your biggest recurring manual time sink — usually the weekly report someone rebuilds every Monday, or the follow-up chain someone runs manually on payments and deliveries. Consistent, high-volume, and the hour savings show up fast enough to matter.',
      },
      {
        q: 'Do I need to replace my existing software to automate?',
        a: 'Usually not. Most of what we build sits on top of whatever systems you\'re already running. Automating off an existing spreadsheet is faster and cheaper than migrating to new software — and the team doesn\'t have to change how they work.',
      },
      {
        q: 'Can AI automation work with construction-specific workflows like delivery scheduling and job tracking?',
        a: 'Yes — these are among the most automatable parts of the business. High-volume, repetitive, consistent steps. We\'ve built exactly these for a metal building manufacturer: delivery confirmations, per-rep job visibility, commission tracking, payment triggers.',
      },
      {
        q: 'What does automation actually cost for a small business?',
        a: 'It depends on complexity. Simple automations — a trigger, a notification, a dashboard off an existing spreadsheet — are days of work, not months. We price on scope, not on a subscription that grows regardless of whether it\'s working.',
      },
      {
        q: 'How long does it take to see results?',
        a: 'The fastest wins show up in week one. A live dashboard replaces a two-hour meeting immediately. Bigger builds take longer to wire up, but the payoff compounds over time.',
      },
    ],
    closingCta: {
      heading: 'The best time to automate was last year.',
      body: 'The second best is before it gets worse. Tell us what\'s eating your week.',
      ctaLabel: 'Run your free Compass audit →',
      ctaHref: COMPASS_URL,
    },
  },

  // FOR-112, Article 4 — voice-passed. Published from doc
  // 1YuDvnlXCHtiGbOxiLS-L9ZD9EQDl1QXEYTT6eAi_N6c (no v2 — this is the
  // confirmed source per the dispatch's SOURCE DOCS table).
  {
    slug: 'spam-backlinks-what-they-mean',
    title: 'We Found 200+ Spam Backlinks on a Client\'s Site. Here\'s What It Actually Means.',
    metaTitle: 'Found 200+ Spam Backlinks? Here\'s What It Actually Means',
    dek: 'Spam backlinks pointing at your site are alarming in a report. They\'re usually not a problem. Here\'s what\'s actually happening — and what to do about it.',
    category: 'SEO',
    date: '2026-07-01',
    readMinutes: 6,
    status: 'published',
    blocks: [
      { type: 'p', text: 'We pulled a client\'s backlink profile this week and found 200+ spam links pointing at their domain.' },
      { type: 'p', text: 'They\'d never bought a single one.' },
      {
        type: 'p',
        text: 'This comes up more often than people think. And it\'s almost never as bad as it looks. Here\'s what\'s actually happening, why Google mostly doesn\'t care, and what you should do — which is usually nothing.',
      },
      // FOR-132: definitional block (Sage's prose, pending Andrew voice-pass).
      // Ranks for the head term but never defined it; a crisp definition is
      // the most citable unit for AI engines. Inline **bold**/*italic* from
      // the dispatch markdown is rendered as plain text — the 'p' block model
      // has no inline emphasis; words are verbatim.
      { type: 'h2', text: 'What is a spam backlink?' },
      {
        type: 'p',
        text: 'A spam backlink is a link pointing to your website from a low-quality site that exists to distribute links rather than serve readers — auto-generated directories, link farms, scraped template sites, and private blog networks. You didn\'t request it, you didn\'t pay for it, and in most cases you\'ve never heard of the site.',
      },
      {
        type: 'p',
        text: 'The distinguishing feature isn\'t that the link is bad. It\'s that you didn\'t build it. Spam links you didn\'t create are ambient noise on the internet — a normal byproduct of having a domain. Google\'s systems identify and discount them automatically. Spam links a site deliberately buys to manipulate rankings are a different thing entirely, and that\'s what penalties are actually for.',
      },
      {
        type: 'p',
        text: 'So the question worth asking isn\'t "do I have spam backlinks?" Almost every site does. It\'s "did anyone build them on purpose?" — and for the overwhelming majority of businesses, the answer is no.',
      },
      { type: 'h2', text: 'Where spam backlinks come from' },
      {
        type: 'p',
        text: 'There are entire networks of junk "SEO" sites that auto-scrape the web and attach links to random domains. Template sites with names like "buybacklinks" and "seoexpress." Directories that exist only to sell or distribute links. Link farms. Sites with no real content, no real traffic, and no real audience.',
      },
      {
        type: 'p',
        text: 'These networks pick up your domain and start pointing links at it. You didn\'t ask for it. You didn\'t pay for it. You\'ve probably never heard of the sites.',
      },
      { type: 'p', text: 'It\'s essentially graffiti — someone spray-painted on your building. Annoying to find in a report. Not a structural problem.' },
      { type: 'h2', text: 'Does Google penalize you for spam backlinks you didn\'t build?' },
      { type: 'p', text: 'Usually no.' },
      {
        type: 'p',
        text: 'Google has been getting good at this for a long time. The Penguin algorithm update (2012, then rolled into Google\'s core algorithm in 2016) specifically targets manipulative link schemes. Google knows the difference between spam you built and spam that someone else pointed at your site.',
      },
      {
        type: 'p',
        text: 'If Google penalized every business that had junk links pointing at it, competitors could tank each other\'s rankings by buying spam against their domains. That\'s not how the system works.',
      },
      { type: 'h2', text: 'Should you run a disavow file?' },
      { type: 'p', text: 'Probably not.' },
      {
        type: 'p',
        text: 'A disavow file is a manual override — you\'re telling Google to ignore specific links when evaluating your site. It was designed for sites that deliberately built bad links and needed to recover. For most businesses dealing with naturally occurring spam, it\'s unnecessary.',
      },
      {
        type: 'p',
        text: 'Here\'s the risk: if you run a disavow incorrectly, you can accidentally exclude links that are actually helping you. The cure becomes worse than the disease.',
      },
      {
        type: 'p',
        text: 'Rule of thumb: if your organic traffic is healthy and there\'s no manual action in Google Search Console, leave the spam links alone.',
      },
      { type: 'h2', text: 'What to actually look for' },
      { type: 'p', text: 'The spam links themselves usually aren\'t the problem. Here\'s what\'s worth paying attention to:' },
      {
        type: 'p',
        lead: 'A manual action in Google Search Console.',
        text: 'This means Google has flagged your site for a link scheme. It\'s relatively rare, and it shows up clearly in GSC if it\'s there. Check this first before doing anything else.',
      },
      {
        type: 'p',
        lead: 'Anchor text manipulation.',
        text: 'If a large percentage of your backlinks use the same exact-match keyword anchor text — "best steel building manufacturer Colorado" over and over — someone may have built those deliberately. That\'s a different problem than ambient spam.',
      },
      {
        type: 'p',
        lead: 'A sudden spike from one network.',
        text: 'Rare, but it happens: a competitor paying to point spam at your domain. Usually shows up as an unusual spike in toxic links from a single source, all appearing at once. Documenting those in a disavow as a precaution is reasonable.',
      },
      {
        type: 'p',
        text: 'For most businesses looking at a spam-heavy report: it\'s ambient noise. Google discounts it. Build the legitimate stuff.',
      },
      { type: 'h2', text: 'What actually builds real authority' },
      { type: 'p', text: 'One link from a real site is worth more than 1,000 spam directory links. By a lot.' },
      {
        type: 'p',
        text: 'A mention in your regional newspaper. A listing on your city\'s chamber of commerce website. A supplier linking to your business. A trade association member page. These carry weight because the sites behind them have real traffic, real reputations, and aren\'t in the business of selling links to anyone who pays.',
      },
      { type: 'p', text: 'The path that holds:' },
      {
        type: 'ul',
        items: [
          'Consistent, accurate citations in real directories',
          'Earned mentions in industry and local press',
          'Content other sites actually want to reference',
          'Legitimate supplier, association, and partner links',
        ],
      },
      { type: 'p', text: 'It\'s slower. There\'s no shortcut. Anyone telling you otherwise is selling the graffiti.' },
      { type: 'h2', text: 'What to do if you\'ve been pitched a "backlink cleanup"' },
      { type: 'p', text: 'Be skeptical.' },
      {
        type: 'p',
        text: 'Some SEO providers charge significant money to identify and "clean up" spam backlinks. Most of the time, you\'re paying to solve a problem you don\'t have. Google is already discounting those links. A disavow file you don\'t need costs money and can make things worse.',
      },
      {
        type: 'p',
        text: 'If you\'ve been told your spam backlinks are hurting you — and you haven\'t seen a corresponding drop in organic traffic, and there\'s no manual action in GSC — get a second opinion before paying for a cleanup.',
      },
      {
        type: 'p',
        text: 'We pull client backlink profiles regularly. If what we\'re looking at is ambient junk, we say so. If there\'s a real problem, we\'ll show you the evidence.',
      },
      { type: 'h2', text: 'See your site\'s real SEO health — free' },
      {
        type: 'p',
        text: 'Forge Compass gives you a scored read on your AI visibility and SEO foundation — not a scare report designed to sell you services.',
        links: [{ match: 'SEO foundation', href: '/services/seo' }],
      },
      { type: 'cta', text: 'Run your free Compass audit →', href: COMPASS_URL },
      { type: 'related', label: 'What real SEO looks like (vs. what gets sold to you)', href: '/insights/what-real-seo-looks-like' },
    ],
    faq: [
      {
        q: 'I found spam backlinks pointing at my site. Should I be worried?',
        a: 'In most cases, no. Spam backlinks you didn\'t build are a normal byproduct of having a website. Google is good at identifying and discounting them. Check Google Search Console for manual actions first — if there are none and your organic traffic is healthy, you\'re almost certainly fine.',
      },
      {
        q: 'What is a disavow file and do I need one?',
        a: 'A disavow file tells Google to ignore specific links when evaluating your site. It was designed for sites that deliberately built bad links and needed to clean house. For most businesses dealing with naturally occurring spam, it\'s unnecessary — and if done incorrectly, it can hurt you by excluding links that are helping you.',
      },
      {
        q: 'Can a competitor pay to spam my site and hurt my rankings?',
        a: 'Theoretically possible — it\'s called "negative SEO." Google\'s systems are specifically designed to prevent it from working, and it almost never does. If you see a sudden spike in spam from one network, documenting those in a disavow as a precaution is reasonable. But it\'s rare, and Google usually discounts it without any action on your part.',
      },
      {
        q: 'What\'s the difference between spam backlinks and a genuinely bad backlink profile?',
        a: 'Spam backlinks are low-quality links that appeared without your involvement — auto-scrapers, link farms, junk directories. A genuinely bad backlink profile usually means someone deliberately built low-quality links chasing quick rankings. The second is a real problem. The first usually isn\'t.',
      },
      {
        q: 'What should I actually do to build real backlink authority?',
        a: 'Earn links from real sources. Consistent citations in legitimate local and industry directories. Mentions in regional or trade press. Links from suppliers, associations, and partners who genuinely vouch for you. One real link from a trusted source outweighs hundreds of spam links — and unlike spam, it compounds.',
      },
      // FOR-132: two appended FAQs (Sage's prose, pending Andrew voice-pass).
      // Target adjacent queries "what are spam backlinks" / "how to check
      // spam backlinks". This `faq` array drives BOTH the visible <Faq> block
      // and the FAQPage JSON-LD, so visible + schema stay in lockstep.
      {
        q: 'What are spam backlinks?',
        a: 'Links pointing at your site from low-quality domains that exist to distribute links rather than serve readers — link farms, scraped directories, auto-generated template sites. They typically appear without your involvement. Google discounts them automatically, and they\'re rarely a problem unless you built them deliberately.',
      },
      {
        q: 'How do I check my site for spam backlinks?',
        a: 'Pull your backlink profile in a tool like Ahrefs, Semrush, or Google Search Console\'s Links report and look at the referring domains. Ignore the raw count — it\'s alarming and mostly meaningless. Check three things instead: is there a manual action in Search Console, is your organic traffic healthy, and is a large share of your anchor text the same exact-match keyword? If it\'s no, yes, and no — you\'re fine.',
      },
    ],
    closingCta: {
      heading: 'Want an honest read on where your site actually stands?',
      body: 'Not a scare report designed to sell you a retainer. Run a free Forge Compass scan.',
      ctaLabel: 'Run your free Compass audit →',
      ctaHref: COMPASS_URL,
    },
  },

  // FOR-112, Article 5 — voice-passed. Published from doc
  // 1op2Bn8rQAEeYFDIG4ZfT3NhCA0-pzPb9jkyBie7QdGY with the dispatch's 3 edits
  // applied (body/CTA only — FAQ unchanged, matches doc verbatim):
  //   1. Cut the parenthetical business-type list from the "three things" line.
  //   2. Cut the redundant AI-search sentence in the GEO-connection section.
  //   3. Final CTA replaced with the tightened version.
  {
    slug: 'what-real-seo-looks-like',
    title: 'What Real SEO Looks Like (vs. What Gets Sold to Small Businesses)',
    metaTitle: 'What Real SEO Looks Like (vs. What Gets Sold to You)',
    dek: 'Most SEO sold to small businesses doesn\'t move anything. Here\'s what actually works — and three questions that cut through the noise when evaluating a provider.',
    category: 'SEO',
    date: '2026-07-01',
    readMinutes: 6,
    status: 'published',
    blocks: [
      {
        type: 'p',
        text: 'Most SEO sold to small businesses is theater.',
        links: [{ match: 'SEO', href: '/services/seo' }],
      },
      {
        type: 'p',
        text: 'Monthly reports full of vanity metrics. "We submitted you to 500 directories." Backlink packages. Keyword rankings that don\'t connect to real traffic. It looks like work. It isn\'t.',
      },
      {
        type: 'p',
        text: 'Here\'s what SEO that actually does something looks like — and how to tell the difference before you sign a contract.',
      },
      { type: 'h2', text: 'What most "SEO" is actually selling' },
      { type: 'p', text: 'If your SEO provider\'s monthly report includes any of these, that\'s a flag:' },
      {
        type: 'p',
        lead: '"We built X backlinks this month."',
        text: 'Where? From what sites? If they can\'t show you the specific domains and explain why each one matters, they\'re buying junk. Real link-building is specific, slow, and hard to fake.',
      },
      {
        type: 'p',
        lead: 'Keyword rankings without traffic context.',
        text: 'Ranking #1 for a keyword nobody searches doesn\'t help your business. Rankings without search volume and click-through data are just numbers on a slide.',
      },
      {
        type: 'p',
        lead: '"We submitted you to 300 directories."',
        text: 'Real citation work involves a short list of high-authority, industry-relevant directories. Bulk directory submissions are usually spam. Google knows the difference.',
      },
      {
        type: 'p',
        lead: 'Traffic charts that never translate to leads.',
        text: 'If your traffic is up but you\'re getting the same number of calls and form fills, someone is gaming a metric rather than driving a business outcome.',
      },
      { type: 'p', text: 'None of this is rare. It\'s the business model of most cheap SEO providers.' },
      { type: 'h2', text: 'What actually moves the needle' },
      // EDIT 1 applied: dropped the "— a metal building manufacturer, a GC, a
      // trades contractor, a self-storage developer —" parenthetical list.
      { type: 'p', text: 'For a small business, real SEO is three things:' },
      {
        type: 'p',
        lead: 'A technically clean site that Google can crawl and trust',
        text: 'This isn\'t glamorous. It means: pages that load at a reasonable speed, structured data that tells Google what type of business you are, accurate title tags and meta descriptions, no broken links or duplicate content, a complete and accurate Google Business Profile.',
      },
      { type: 'p', text: 'Most small business sites fail at least two of these. Fixing them is real work, but it moves real rankings.' },
      {
        type: 'p',
        lead: 'Pages that answer what your buyers actually type',
        text: 'If a potential customer types "how much does a 5,000 sq ft metal building cost in Texas," you should have a page that answers that question clearly — with honest numbers and what variables affect the price. Not a vague "contact us for a quote" redirect.',
      },
      { type: 'p', text: 'Content that answers real questions gets found. Content about your company values and mission doesn\'t.' },
      {
        type: 'p',
        lead: 'A handful of legitimate links, built over time',
        text: 'Not hundreds. A handful. From real sites: your industry directory, your local chamber of commerce, a regional newspaper, a supplier, a trade association. One real link from a site with an actual audience and a real reputation is worth more than a thousand bulk-bought directory links.',
      },
      { type: 'p', text: 'This work compounds over months and years. There\'s no shortcut. Anyone telling you otherwise is selling graffiti.' },
      // FOR-132: reciprocal in-body link INTO the spam-backlinks article with a
      // varied anchor (not the related-card label). Connective sentence is
      // CC-authored to carry the anchor — flagged for Andrew's voice-pass.
      {
        type: 'p',
        text: 'It cuts both ways. Junk links pointed at your site are ambient noise, not a threat — we broke down the 200+ spam links we found on a client\'s site, and Google had already discounted every one. The fix was to do nothing.',
        links: [{ match: 'the 200+ spam links we found on a client\'s site', href: '/insights/spam-backlinks-what-they-mean' }],
      },
      { type: 'h2', text: 'What a realistic SEO timeline looks like' },
      { type: 'p', text: 'If someone starts SEO work on your site today, here\'s an honest picture of when results show up:' },
      {
        type: 'ul',
        items: [
          'Weeks 1-4: Technical fixes go live. Google starts crawling the improved site.',
          'Months 1-3: Indexing catches up. Quick wins on branded searches and hyper-local queries start appearing.',
          'Months 3-6: Pages targeting real buyer questions begin ranking. Non-branded organic traffic starts.',
          'Month 6+: Results compound as authority builds. This is when SEO starts paying for itself.',
        ],
      },
      { type: 'p', text: 'Anyone promising meaningful results in 30 days is selling you something. The timeline is what it is.' },
      { type: 'h2', text: 'Three questions that cut through the noise' },
      { type: 'p', text: 'Before you hire an SEO provider — or renew with one you\'re not sure about — ask these:' },
      {
        type: 'p',
        lead: '"Can you show me exactly which links you\'ve built and where?"',
        text: 'If they can\'t answer this specifically, they\'re buying junk. The answer should include real domain names you can verify.',
      },
      {
        type: 'p',
        lead: '"What specific pages have you created or improved, and what search terms were they targeting?"',
        text: 'If they can\'t map their work to specific content and keywords, they\'re not doing anything that moves rankings.',
      },
      {
        type: 'p',
        lead: '"What\'s your plan if rankings don\'t improve after six months?"',
        text: 'Listen for honesty. Does the answer involve a specific plan — different content angles, technical audit, link-building pivot — or does it involve more dashboard jargon?',
      },
      { type: 'p', text: 'A good SEO provider answers all three directly. A bad one pivots to their reporting platform.' },
      { type: 'h2', text: 'One more thing: the connection to AI search' },
      {
        type: 'p',
        text: 'Real SEO and AI visibility (GEO) share the same foundation.',
        links: [{ match: 'GEO', href: '/services/geo' }],
      },
      // EDIT 2 applied: deleted "Getting cited by ChatGPT, Perplexity, and
      // Google AI Overviews requires the same things as ranking well in
      // traditional search — clear content, structured data, legitimate
      // presence in trusted sources." — the sentence above already covers it.
      {
        type: 'p',
        text: 'Businesses doing real SEO now are building the exact foundation that helps them show up in AI answers.',
      },
      { type: 'p', text: 'Businesses buying backlink packages are building nothing that transfers.' },
      { type: 'h2', text: 'See where your site actually stands' },
      {
        type: 'p',
        text: 'We\'re not going to tell you there\'s a problem until we\'ve looked. Forge Compass gives you an honest score on your AI visibility and SEO foundation — entity clarity, content coverage, the gaps that actually matter. Not a scare report designed to sell you a retainer.',
      },
      { type: 'cta', text: 'Run your free Compass audit →', href: COMPASS_URL },
      { type: 'related', label: 'We found 200+ spam backlinks on a client\'s site — here\'s what it means', href: '/insights/spam-backlinks-what-they-mean' },
    ],
    faq: [
      {
        q: 'How do I know if my current SEO provider is actually doing something?',
        a: 'Track organic traffic and — more importantly — organic leads (calls, forms) over six months. Ask them to show you exactly which links they\'ve built and which pages they\'ve created. If the numbers aren\'t moving after six months and they can\'t explain why in plain English, that\'s your answer.',
      },
      {
        q: 'What\'s a realistic timeline for SEO to show results?',
        a: 'Meaningful movement on real buyer-intent searches typically starts at 3-6 months. Competitive terms take longer. Hyper-local searches can move faster if the technical foundation is solid. Anyone promising significant results in 30 days is overselling.',
      },
      {
        q: 'What\'s the biggest SEO mistake small businesses make?',
        a: 'Paying for bulk links or directory submissions instead of fixing the technical foundation and building content that answers real buyer questions. The flashy stuff is easy to sell and easy to fake. The fundamentals are less exciting and harder to shortcut — which is exactly why they work.',
      },
      {
        q: 'How many backlinks does my business actually need?',
        a: 'Less about quantity, more about quality. A small business competing in a regional market might need a dozen strong, relevant links — from local and industry sources with real authority. A hundred junk links from bulk directories won\'t help and may complicate things.',
      },
      {
        q: 'Is SEO still worth it now that AI search is changing things?',
        a: 'Yes — and the two are more connected than most people realize. The fundamentals of getting cited by AI (clear content, structured data, legitimate trusted presence) are nearly identical to good SEO. Businesses doing real SEO now are building the same foundation that helps them show up in ChatGPT and Perplexity. Businesses buying fake links are building nothing that transfers.',
      },
    ],
    closingCta: {
      // EDIT 3 applied: "If you've been paying for SEO and can't tell if
      // it's working, start with the free Compass scan. 60 seconds."
      heading: 'If you\'ve been paying for SEO and can\'t tell if it\'s working,',
      body: 'Start with the free Compass scan. 60 seconds.',
      ctaLabel: 'Run your free Compass audit →',
      ctaHref: COMPASS_URL,
    },
  },
];

export function getPost(slug: string): InsightPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPublishedPosts(): InsightPost[] {
  return posts.filter((p) => p.status === 'published');
}
