import { PageHero } from '@/components/sections/PageHero';
import { StorySection } from '@/components/sections/StorySection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { PrinciplesTimeline } from '@/components/sections/PrinciplesTimeline';
import { BottomCTA } from '@/components/sections/BottomCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'About',
  description:
    'Learn about Innovance Tech AI — 14+ years of engineering excellence, multi-tech capability, and a startup mindset focused on building scalable digital systems.',
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description:
      '14+ years of engineering excellence, multi-tech capability, and a startup mindset focused on building scalable digital systems.',
    url: `${siteConfig.url}/about`,
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: `About | ${siteConfig.name}`,
  url: `${siteConfig.url}/about`,
  description: metadata.description,
  mainEntity: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <PageHero
        title="About Us"
        subtitle="14+ years of engineering excellence, building digital systems that scale with your ambitions."
      />
      <StorySection />
      <ServicesGrid />
      <PrinciplesTimeline />
      <BottomCTA />
    </>
  );
}
