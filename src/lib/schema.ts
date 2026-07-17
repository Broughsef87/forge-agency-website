/**
 * Structured-data (JSON-LD) builders for GEO / rich-result eligibility.
 * Plain objects — rendered via <JsonLd data={...} /> (src/components/JsonLd.tsx).
 *
 * FOR-112 (Sage). Voice: factual, no hype, no fabricated metrics.
 *
 * HOST (FOR-131): SITE_URL is imported from src/lib/seo.ts — one source of
 * truth. These two files previously disagreed (JSON-LD on non-www, canonical
 * on www), so a page could declare canonical=www while its own Organization
 * @id, Article url, and BreadcrumbList items all said non-www. Importing
 * rather than redeclaring is what stops that drifting apart again.
 *
 * sameAs discipline (FOR-133): nothing goes in sameAs that has not been
 * verified as ours. "The Forge Agency" is a contested name (6+ same-named
 * agencies), and a wrong sameAs binds our entity to someone else's —
 * absent is harmless, wrong actively poisons entity resolution.
 *   ✅ instagram.com/the_forge_agency      — verified ours
 *   ✅ linkedin.com/company/132323994      — verified ours (numeric because
 *      no vanity slug is set yet; NOTE linkedin.com/company/forge-agency is
 *      an unaffiliated Rotherham UK design agency — never link it)
 *   ❌ facebook.com/TheForgeAgency         — NOT ours. Never list.
 *   ⏳ Clutch                              — omitted until the URL is confirmed.
 *
 * NAP (FOR-131/FOR-140/FOR-141): Forge is a service-area business. The
 * city+region PostalAddress and the telephone below are both real and both
 * deliberate — together they are the "place" half of the name→niche→place
 * binding FOR-133 needs, and NAP (Name/Address/Phone) is what the local
 * pack verifies against. Because the street address is deliberately
 * withheld, the phone carries most of that weight: GBP and the site must
 * agree exactly.
 *
 * Locality is Castle Rock so the entity agrees with every other surface —
 * GBP service area, chamber listing, and /castle-rock-seo (the one local
 * term we can win: 150/mo, KD 0). City-level is not private; Andrew is a
 * public Castle Rock chamber member.
 *
 * The line is NO streetAddress. The phone and the locality/region are
 * correct — do not "tidy" them away as leftover PII.
 *
 * Phone values come from src/lib/contact.ts — never hardcode the number.
 */
import { SITE_URL } from '@/lib/seo';
import { PHONE_E164, EMAIL } from '@/lib/contact';

const ORG_NAME = 'The Forge Agency';
const ORG_LEGAL_NAME = 'Forge Automations LLC';
const ORG_ID = `${SITE_URL}/#organization`;

export const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: ORG_NAME,
  // Binds the trading name to the legal entity behind it, so engines
  // resolving "Forge Automations LLC" in business records land on the same
  // node as "The Forge Agency" (FOR-133).
  legalName: ORG_LEGAL_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/forge-icon.svg`,
  image: `${SITE_URL}/og-image.png`,
  // THE sentence AI reads to decide what Forge is (FOR-133). Names the three
  // legs explicitly — specificity helps entity resolution — and carries
  // name→niche→place, consistent with addressLocality below.
  description:
    'AI automation, dashboards, traditional SEO, and AI SEO (GEO) for the people who build, sell, and finance buildings — contractors and trades, realtors, and mortgage brokers. Based in Castle Rock, Colorado.',
  founder: {
    '@type': 'Person',
    name: 'Andrew Brough',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  // knowsAbout is an EXPERTISE CLAIM — only list what we can actually stand
  // behind. Deliberately no 'real estate marketing' / 'mortgage marketing':
  // we sell those services but have never had a client in either, and
  // claiming a track record we don't have is the one thing that breaks trust
  // with both engines and buyers. Sell the service, don't claim the record.
  knowsAbout: [
    'AI automation',
    'AI agents',
    'SEO',
    'AI SEO',
    'Generative Engine Optimization',
    'local SEO',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: EMAIL,
  },
  telephone: PHONE_E164,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Castle Rock',
    addressRegion: 'Colorado',
    addressCountry: 'US',
  },
  // Verified-ours only — see the sameAs discipline note at the top of this
  // file before adding anything here.
  sameAs: [
    'https://www.instagram.com/the_forge_agency',
    'https://www.linkedin.com/company/132323994',
  ],
} as const;

export const WEBSITE = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: ORG_NAME,
  url: SITE_URL,
  publisher: { '@id': ORG_ID },
} as const;

export interface ServiceSchemaInput {
  name: string;
  serviceType: string;
  description: string;
  path: string; // e.g. "/services/geo"
}

export function serviceSchema({ name, serviceType, description, path }: ServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType,
    description,
    url: `${SITE_URL}${path}`,
    provider: { '@id': ORG_ID },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    // Emitted by /services, /services/seo, /services/geo, /services/web — the
    // structured field built specifically to declare who we serve, so it has
    // to match the widened vertical rather than restate the old one 4×.
    audience: {
      '@type': 'BusinessAudience',
      name: 'Builders, contractors, realtors, and mortgage brokers',
    },
  };
}

export interface FaqItem {
  q: string;
  a: string;
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  path: string; // e.g. "/insights/roi-salesperson-dashboard"
  datePublished: string; // ISO
  authorName?: string;
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  authorName = 'Andrew Brough',
}: ArticleSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: `${SITE_URL}/og-image.png`,
    url: `${SITE_URL}${path}`,
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
      url: `${SITE_URL}/about`,
    },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${path}`,
    },
    articleSection: 'Insights',
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string; // absolute path from site root, e.g. "/" or "/insights/some-slug"
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${item.path}`,
    })),
  };
}
