import { siteConfig } from './site';
import type { Metadata } from 'next';

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = '/og.png',
  noIndex = false,
  canonicalUrl,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
} = {}): Metadata {
  return {
    title: title
      ? { default: title, template: `%s | ${siteConfig.name}` }
      : { default: siteConfig.tagline, template: `%s | ${siteConfig.name}` },
    description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name }],
    metadataBase: new URL(siteConfig.url),
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    openGraph: {
      type: 'website',
      title: title ?? siteConfig.tagline,
      description,
      url: canonicalUrl ?? siteConfig.url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: title ?? siteConfig.tagline,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
