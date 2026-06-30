/**
 * Structured-data (JSON-LD) builders for GEO / rich-result eligibility.
 * Plain objects — rendered via <JsonLd data={...} /> (src/components/JsonLd.tsx).
 *
 * FOR-112 (Sage). Voice: factual, no hype, no fabricated metrics.
 *
 * TODO(Sage/Andrew): add real social URLs to ORGANIZATION.sameAs once
 * confirmed (LinkedIn, etc.). Omitted deliberately — a 404 sameAs hurts
 * more than an absent one.
 */

const SITE_URL = 'https://the-forge-agency.com';
const ORG_NAME = 'The Forge Agency';
const ORG_ID = `${SITE_URL}/#organization`;

export const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: ORG_NAME,
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
  // sameAs: [],  // TODO(Sage/Andrew): real LinkedIn + social URLs
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
