'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './Badge';
import { ArrowRight } from 'lucide-react';

export function MobileCard({ project, index = 0 }) {
  return (
    <motion.div
      className="group relative flex flex-col items-center"
      className="group relative flex flex-col items-center w-full max-w-[280px]"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1, ease: 'easeOut' },
        },
      }}
    >
      {/* Phone Frame */}
      <Link
        href={`/projects/${project.id}`}
        className="relative block w-44 h-80 md:w-48 md:h-[22rem] rounded-[2rem] overflow-hidden
                   bg-white shadow-card border-[6px] border-white/80
                   group-hover:shadow-card-hover group-hover:-translate-y-3
        className="relative block w-52 h-[23rem] rounded-[2.2rem] overflow-hidden
                   bg-white shadow-card border-[7px] border-white/90
                   group-hover:shadow-card-hover group-hover:-translate-y-2.5
                   transition-all duration-500 ease-out cursor-pointer"
      >
        {/* Screen Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5
                       bg-white rounded-b-xl z-10" />

        <Image
          src={project.image}
          alt={`${project.title} Preview`}
          fill
          sizes="200px"
          sizes="220px"
          className="object-cover transition-transform duration-700 ease-out
                     group-hover:scale-110"
                     group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-base/60 to-transparent
        <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-base/20 to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-400
                        flex items-end justify-center pb-6">
            <span className="text-white text-xs font-medium flex items-center gap-1.5
                           backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full">
              View Details
            </span>
                        flex flex-col justify-end p-5 text-center items-center">
          <span className="text-white text-xs font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md mb-2">
            {project.industry || 'Mobile Suite'}
          </span>
          <span className="text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-md bg-accent1 px-3.5 py-1.5 rounded-lg shadow-sm">
            Read Case Study <ArrowRight size={12} />
          </span>
        </div>
      </Link>

      {/* Content below phone */}
      <div className="mt-5 text-center max-w-[200px]">
      <div className="mt-5 text-center w-full px-2">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-accent1 block mb-1">
          {project.industry || 'Mobile Case Study'}
        </span>
        <Link href={`/projects/${project.id}`}>
          <h3 className="text-base font-bold text-text-dark mb-1.5
                         group-hover:text-accent1 transition-colors duration-300">
          <h3 className="text-base font-bold text-text-dark mb-1.5 group-hover:text-accent1 transition-colors duration-300 line-clamp-1">
            {project.title}
          </h3>
        </Link>
        <p className="text-text-muted text-xs leading-relaxed mb-3 line-clamp-2">
          {project.description}
          {project.summary || project.description}
        </p>

        {/* Metric Pill if available */}
        {project.metrics && project.metrics.length > 0 && (
          <p className="text-[11px] font-medium text-text-dark/80 bg-accent1/5 py-1 px-2.5 rounded-md mb-3 border border-accent1/10 line-clamp-1">
            ✓ {project.metrics[0]}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="muted">{tag}</Badge>
          {(project.tags || []).slice(0, 2).map((tag) => (
            <Badge key={tag} variant="muted" className="text-[10px] px-2 py-0.5">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
