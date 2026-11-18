import { PageHero } from '@/components/sections/PageHero';
import { ContactCards } from '@/components/sections/ContactCards';
import { ContactForm } from '@/components/sections/ContactForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Innovance Tech AI. Reach out via WhatsApp, LinkedIn, or email to discuss your next project.',
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description:
      'Have a project in mind? Reach out via WhatsApp, LinkedIn, or email to discuss how we can bring your vision to life.',
    url: `${siteConfig.url}/contact`,
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact | ${siteConfig.name}`,
  url: `${siteConfig.url}/contact`,
  description: metadata.description,
  mainEntity: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.whatsapp,
      email: siteConfig.contact.email,
      contactType: 'sales & support',
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <PageHero
        title="Get In Touch"
        subtitle="Have a project in mind? Let's discuss how we can bring your vision to life."
      />
      <ContactCards />
      <ContactForm />
    </>
  );
}
