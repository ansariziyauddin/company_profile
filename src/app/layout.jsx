import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';
import './globals.css';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/og.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contact.whatsapp,
    contactType: 'customer service',
    email: siteConfig.contact.email,
  },
  sameAs: [siteConfig.social.linkedinCompany, siteConfig.social.linkedinPersonal],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: 'website',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
