import { PageHero } from '@/components/sections/PageHero';
import { StorySection } from '@/components/sections/StorySection';
import { StatsBar } from '@/components/sections/StatsBar';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { PrinciplesTimeline } from '@/components/sections/PrinciplesTimeline';
import { BottomCTA } from '@/components/sections/BottomCTA';

export const metadata = {
  title: 'About',
  description:
    'Learn about Innovance Tech AI — 14+ years of engineering excellence, multi-tech capability, and a startup mindset focused on building scalable digital systems.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="14+ years of engineering excellence, building digital systems that scale with your ambitions."
      />
      <StorySection />
      <StatsBar />
      <ServicesGrid />
      <PrinciplesTimeline />
      <BottomCTA />
    </>
  );
}
