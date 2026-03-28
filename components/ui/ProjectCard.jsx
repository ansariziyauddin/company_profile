'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Badge } from './Badge';
import { ExternalLink } from 'lucide-react';

export function ProjectCard({ project, index = 0 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="group relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm
                   border border-white/50 shadow-card
                   hover:shadow-card-hover hover:-translate-y-2
                   transition-all duration-500 ease-out"
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
        <div
          className="relative h-52 md:h-56 overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
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
              Click to expand
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-accent1
                         transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          {/* Link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent1
                         hover:text-accent2 transition-colors duration-200 group/link"
            >
              View Live
              <ExternalLink
                size={14}
                className="transition-transform duration-200 group-hover/link:translate-x-0.5
                           group-hover/link:-translate-y-0.5"
              />
            </a>
          )}
        </div>
      </motion.div>

      {/* Fullscreen modal */}
      {typeof window !== 'undefined' &&
        isModalOpen &&
        createPortal(
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8
                         bg-base/80 backdrop-blur-md cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden
                           shadow-2xl cursor-default"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-contain bg-white"
                />
                <button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90
                             backdrop-blur-sm text-text-dark flex items-center justify-center
                             text-xl font-bold hover:bg-white transition-colors shadow-lg"
                  onClick={() => setIsModalOpen(false)}
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
