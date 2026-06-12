/**
 * Insights post registry.
 *
 * Sage: add new posts here — each entry renders at /insights/{slug} via
 * src/app/insights/[slug]/page.tsx and appears on the /insights index
 * automatically. Block types: 'p' (paragraph), 'h2' (section heading),
 * 'ul' (bullet list), 'stats' (big-number callout row).
 *
 * Keep client confidentiality rules: ROI Metal Buildings may be named;
 * Pelican stays anonymous ("a Pacific Northwest general contractor").
 * No commission or revenue figures unless the client has approved them.
 */

export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'stats'; items: { value: string; label: string }[] };

export interface InsightPost {
  slug: string;
  title: string;
  dek: string;
  category: string;
  date: string; // ISO yyyy-mm-dd
  readMinutes: number;
  blocks: PostBlock[];
}

export const posts: InsightPost[] = [
  {
    slug: 'roi-salesperson-dashboard',
    title: 'One spreadsheet, seven salespeople: the ROI Metal Buildings dashboard',
    dek: 'How a metal-building manufacturer gave seven reps a private window into their own deals — without changing the spreadsheet that runs the business.',
    category: 'Case Study',
    date: '2026-06-11',
    readMinutes: 4,
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
];

export function getPost(slug: string): InsightPost | undefined {
  return posts.find((p) => p.slug === slug);
}
