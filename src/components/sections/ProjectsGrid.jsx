'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { MobileCard } from '@/components/ui/MobileCard';
import { webProjects, mobileProjects } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

export function ProjectsGrid() {
  const [activeTab, setActiveTab] = useState('web');

  return (
    <section id="projects" className="pb-20 pt-8 md:pb-32 md:pt-12">
      <div className="container-main">
        <SectionHeading
          title="Our Projects"
          subtitle="A curated collection of digital products we've designed, built, and shipped — from responsive web platforms to native mobile applications."
          title="Featured Systems & Case Studies"
          subtitle="A proven track record of engineering scalable digital architectures — solving complex business challenges with measurable impact across web, mobile, and distributed cloud systems."
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div
            role="tablist"
            aria-label="Project categories"
            aria-label="System architectures"
            className="inline-flex bg-gray-100/60 p-1.5 rounded-2xl shadow-inner border border-gray-200/50"
          >
            <button
              role="tab"
              id="tab-web"
              aria-selected={activeTab === 'web'}
              aria-controls="panel-web"
              onClick={() => setActiveTab('web')}
              className={`px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'web'
                  ? 'bg-white text-accent1 shadow-sm border border-gray-100'
                  : 'text-text-muted hover:text-text-dark'
              }`}
            >
              Web
              Web Platforms ({webProjects.length})
            </button>
            <button
              role="tab"
              id="tab-mobile"
              aria-selected={activeTab === 'mobile'}
              aria-controls="panel-mobile"
              onClick={() => setActiveTab('mobile')}
              className={`px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'mobile'
                  ? 'bg-white text-accent1 shadow-sm border border-gray-100'
                  : 'text-text-muted hover:text-text-dark'
              }`}
            >
              Mobile
              Mobile Systems ({mobileProjects.length})
            </button>
          </div>
        </div>

        {/* Web Projects Panel — preserved in DOM for SEO crawlability */}
        <div
          role="tabpanel"
          id="panel-web"
          aria-labelledby="tab-web"
          className={activeTab === 'web' ? 'mb-10 block' : 'mb-10 hidden'}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile Projects Panel — preserved in DOM for SEO crawlability */}
        <div
          role="tabpanel"
          id="panel-mobile"
          aria-labelledby="tab-mobile"
          className={activeTab === 'mobile' ? 'mb-10 block' : 'mb-10 hidden'}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 justify-items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
            {mobileProjects.map((project, i) => (
              <MobileCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
        <div className="text-center mt-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold
                       bg-white text-text-dark hover:text-accent1 shadow-sm border border-gray-200/60
                       hover:border-accent1/30 hover:shadow-md transition-all duration-300"
                       hover:border-accent1/30 hover:shadow-md transition-all duration-300 group"
          >
            <span>Browse Complete Portfolio</span>
            <ArrowRight size={16} />
            <span>View All Engineering Case Studies</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
