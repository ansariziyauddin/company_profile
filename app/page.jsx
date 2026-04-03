import { Hero } from '@/components/sections/Hero';

import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { BottomCTA } from '@/components/sections/BottomCTA';

export default function HomePage() {
  return (
    <>
      <Hero />

      <ProjectsGrid />
      <BottomCTA />
    </>
  );
}
