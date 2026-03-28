'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Badge } from './Badge';

export function MobileCard({ project, index = 0 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
        <div
          className="relative w-44 h-80 md:w-48 md:h-[22rem] rounded-[2rem] overflow-hidden
                     bg-white shadow-card border-[6px] border-white/80
                     group-hover:shadow-card-hover group-hover:-translate-y-3
                     transition-all duration-500 ease-out cursor-pointer"
          onClick={() => setIsModalOpen(true)}
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
          <div className="absolute inset-0 bg-gradient-to-t from-base/50 to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        </div>

        {/* Content below phone */}
        <div className="mt-5 text-center max-w-[200px]">
          <h3 className="text-base font-bold text-text-dark mb-1.5
                         group-hover:text-accent1 transition-colors duration-300">
            {project.title}
          </h3>
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

      {/* Fullscreen modal */}
      {typeof window !== 'undefined' &&
        isModalOpen &&
        createPortal(
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center p-8
                         bg-base/80 backdrop-blur-md cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                className="relative w-72 max-h-[80vh] rounded-3xl overflow-hidden
                           shadow-2xl cursor-default bg-white"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={800}
                  className="w-full h-full object-contain"
                />
                <button
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90
                             backdrop-blur-sm text-text-dark flex items-center justify-center
                             text-lg font-bold hover:bg-white transition-colors shadow-lg"
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
