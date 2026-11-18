'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './Badge';
import { ExternalLink, ArrowRight } from 'lucide-react';

export function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm
                 border border-white/50 shadow-card
                 hover:shadow-card-hover hover:-translate-y-2
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
      {/* Image Container */}
      <Link
        href={`/projects/${project.id}`}
        className="relative block h-52 md:h-56 overflow-hidden cursor-pointer shrink-0"
      >
        <Image
          src={project.image}
          alt={`${project.title} Preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-700 ease-out
                     group-hover:scale-110"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-base/10 to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500
                        flex items-end justify-center pb-4">
          <span className="text-white text-sm font-medium flex items-center gap-1.5
                         backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
            View Details
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/projects/${project.id}`}>
          <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-accent1
                         transition-colors duration-300">
            {project.title}
          </h3>
        </Link>
        <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-dark hover:text-accent1 transition-colors duration-200"
          >
            Details <ArrowRight size={14} />
          </Link>
          
          {/* Link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent1
                         hover:text-accent2 transition-colors duration-200 group/link"
            >
              Live
              <ExternalLink
                size={14}
                className="transition-transform duration-200 group-hover/link:translate-x-0.5
                           group-hover/link:-translate-y-0.5"
              />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
