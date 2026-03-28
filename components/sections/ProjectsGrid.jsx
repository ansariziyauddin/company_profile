'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { MobileCard } from '@/components/ui/MobileCard';
import { webProjects, mobileProjects } from '@/data/projects';

export function ProjectsGrid() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-main">
        <SectionHeading
          title="Our Projects"
          subtitle="A curated collection of digital products we've designed, built, and shipped — from responsive web platforms to native mobile applications."
        />

        <div className="mb-20">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {webProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </div>

        {/* Mobile Applications */}
        <div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {mobileProjects.map((project, i) => (
              <MobileCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
