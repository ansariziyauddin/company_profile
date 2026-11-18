'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { MobileCard } from '@/components/ui/MobileCard';
import { webProjects, mobileProjects } from '@/data/projects';

export function ProjectsGrid() {
  const [activeTab, setActiveTab] = useState('web');
  return (
    <section id="projects" className="pb-20 pt-8 md:pb-32 md:pt-12">
      <div className="container-main">
        <SectionHeading
          title="Our Projects"
          subtitle="A curated collection of digital products we've designed, built, and shipped — from responsive web platforms to native mobile applications."
        />

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100/60 p-1.5 rounded-2xl shadow-inner border border-gray-200/50">
            <button
              onClick={() => setActiveTab('web')}
              className={`px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === 'web'
                  ? 'bg-white text-accent1 shadow-sm border border-gray-100'
                  : 'text-text-muted hover:text-text-dark'
                }`}
            >
              Web
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === 'mobile'
                  ? 'bg-white text-accent1 shadow-sm border border-gray-100'
                  : 'text-text-muted hover:text-text-dark'
                }`}
            >
              Mobile
            </button>
          </div>
        </div>

        {activeTab === 'web' ? (
          <div className="mb-10">
            <motion.div
              key="web"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {webProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </div>
        ) : (
          <div className="mb-10">
            <motion.div
              key="mobile"
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 justify-items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {mobileProjects.map((project, i) => (
                <MobileCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
