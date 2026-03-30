'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './Badge';

export function MobileCard({ project, index = 0 }) {
  return (
    <motion.div
      className="group relative flex flex-col items-center"
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
          className="object-cover transition-transform duration-700 ease-out
                     group-hover:scale-110"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-base/60 to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-400
                        flex items-end justify-center pb-6">
            <span className="text-white text-xs font-medium flex items-center gap-1.5
                           backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full">
              View Details
            </span>
        </div>
      </Link>

      {/* Content below phone */}
      <div className="mt-5 text-center max-w-[200px]">
        <Link href={`/projects/${project.id}`}>
          <h3 className="text-base font-bold text-text-dark mb-1.5
                         group-hover:text-accent1 transition-colors duration-300">
            {project.title}
          </h3>
        </Link>
        <p className="text-text-muted text-xs leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap justify-center gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="muted">{tag}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
