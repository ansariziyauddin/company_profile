'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './Badge';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm
                 border border-white/60 shadow-card hover:shadow-card-hover hover:-translate-y-2
                 transition-all duration-500 ease-out flex flex-col h-full"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1, ease: 'easeOut' },
        },
      }}
    >
      {/* Image Preview with overlay */}
      <Link
        href={`/projects/${project.id}`}
        className="relative block h-56 md:h-60 overflow-hidden cursor-pointer shrink-0 bg-gray-100"
      >
        <Image
          src={project.image}
          alt={`${project.title} Preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-base/75 via-base/20 to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-400
                        flex items-end justify-between p-6">
          <span className="text-white text-xs font-semibold px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md">
            {project.industry || 'Enterprise System'}
          </span>
          <span className="text-white text-sm font-medium flex items-center gap-1.5 backdrop-blur-md bg-accent1/90 px-4 py-2 rounded-xl">
            Explore Case Study
            <ArrowRight size={14} />
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-7 flex flex-col flex-grow">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent1">
            {project.industry || 'Case Study'}
          </span>
          <span className="text-xs text-text-muted font-medium">
            {project.clientType || 'Enterprise Engagement'}
          </span>
        </div>

        <Link href={`/projects/${project.id}`}>
          <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-accent1 transition-colors duration-300 leading-snug">
            {project.title}
          </h3>
        </Link>

        <p className="text-text-muted text-sm leading-relaxed mb-5 line-clamp-2">
          {project.summary || project.description}
        </p>

        {/* Featured Key Metric */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-5 p-3.5 rounded-xl bg-accent1/5 border border-accent1/10 flex items-start gap-2.5">
            <CheckCircle2 size={16} className="text-accent1 shrink-0 mt-0.5" />
            <span className="text-xs font-semibold text-text-dark leading-tight">
              {project.metrics[0]}
            </span>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {(project.tags || project.techStack || []).slice(0, 4).map((tech) => (
            <Badge key={tech} variant="default" className="text-xs px-2.5 py-0.5 bg-gray-100/80 text-text-dark border-gray-200/50">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent1 hover:text-accent2 transition-colors duration-200 group/link"
          >
            <span>Read Architecture Case Study</span>
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover/link:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
