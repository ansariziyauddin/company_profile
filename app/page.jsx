import { Hero } from '@/components/sections/Hero';
import { StatsBar } from '@/components/sections/StatsBar';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { BottomCTA } from '@/components/sections/BottomCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProjectsGrid />
      <BottomCTA />
    </>
  );
}
