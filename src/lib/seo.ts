/**
 * Shared page-metadata builder (FOR-131).
 *
 * Every content route builds its Next.js `metadata` through `pageMetadata()`
 * so that — sitewide, without per-page ceremony beyond the call itself —
 * each page emits:
 *   - a self-referential canonical on the www host
 *   - a self-referential og:url on the www host
 *   - og: + twitter: title/description drawn from the SAME per-page source
 *     (no silent fallback to homepage boilerplate)
 *
 * We build absolute URLs off SITE_URL (www) rather than leaning on
 * metadataBase resolution, so the canonical/og:url host is explicit and
 * matches the host the non-www 301 resolves to. metadataBase is still set
 * (www) in the root layout so relative asset URLs like the OG image resolve
 * consistently.
 *
 * Canonical is deliberately NOT set on the root layout — an inherited
 * layout-level canonical would silently point every un-overridden route at
 * the homepage. Each route owns its own canonical via this helper instead.
 */
import type { Metadata } from 'next';

export const SITE_URL = 'https://www.the-forge-agency.com';
const OG_IMAGE = '/og-image.png';
const OG_ALT = 'The Forge Agency — AI & Search for Construction Trades';
const SITE_NAME = 'The Forge Agency';

export interface PageMetadataInput {
  /** Absolute path from site root, self-referential. '' for the homepage,
   *  '/insights' for the hub, '/insights/some-slug' for an article. */
  path: string;
  /** The <title> tag. */
  title: string;
  /** The <meta name="description">. */
  description: string;
  /** og:/twitter: title. Defaults to `title`. Set when the social title
   *  should differ from the SEO <title> (e.g. articles use the long
   *  headline for og:title but a ≤60-char metaTitle for <title>). */
  socialTitle?: string;
  /** og:/twitter: description. Defaults to `description`. */
  socialDescription?: string;
  /** og:type — 'website' (default) or 'article'. */
  ogType?: 'website' | 'article';
}

export function pageMetadata({
  path,
  title,
  description,
  socialTitle,
  socialDescription,
  ogType = 'website',
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const stitle = socialTitle ?? title;
  const sdesc = socialDescription ?? description;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: stitle,
      description: sdesc,
      url,
      siteName: SITE_NAME,
      type: ogType,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_ALT }],
    },
    twitter: {
      card: 'summary_large_image',
      title: stitle,
      description: sdesc,
      images: [OG_IMAGE],
    },
  };
}
