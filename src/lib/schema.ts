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
 * ADDRESS (FOR-140): Forge is a service-area business — Andrew's call is no
 * public street address and no public phone (there isn't one). The
 * region-level PostalAddress below is deliberate and is NOT a street
 * address: it binds the entity to Colorado, which is the name→niche→place
 * binding FOR-133 needs. Do not add `telephone` or a street address.
 */
import { SITE_URL } from '@/lib/seo';

const ORG_NAME = 'The Forge Agency';
const ORG_LEGAL_NAME = 'Forge Automations LLC';
const ORG_ID = `${SITE_URL}/#organization`;

export const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: ORG_NAME,
  // Binds the trading name to the legal entity — also explains the
  // the-forge-agency.com / info@forge-automations.com split to engines
  // resolving us (FOR-133 domain fragmentation).
  legalName: ORG_LEGAL_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/forge-icon.svg`,
  image: `${SITE_URL}/og-image.png`,
  description:
    'AI automation, dashboards, and search visibility (SEO + GEO) for construction-trades and building-products companies.',
  founder: {
    '@type': 'Person',
    name: 'Andrew Brough',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  knowsAbout: [
    'AI automation',
    'AI agents',
    'SEO',
    'Generative Engine Optimization',
    'construction technology',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'info@forge-automations.com',
  },
  address: {
    '@type': 'PostalAddress',
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
    audience: {
      '@type': 'BusinessAudience',
      name: 'Construction-trades and building-products businesses',
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
