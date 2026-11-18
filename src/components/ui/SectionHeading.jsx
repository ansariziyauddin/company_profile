'use client';

import { motion } from 'framer-motion';

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}) {
  const alignments = {
    center: 'text-center mx-auto',
    left: 'text-left',
  };

  return (
    <motion.div
      className={`max-w-3xl mb-16 ${alignments[align]} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2
        className={`
          text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 text-balance
          ${dark ? 'text-white' : 'text-text-dark'}
        `}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`
            text-lg md:text-xl leading-relaxed
            ${dark ? 'text-white/70' : 'text-text-muted'}
          `}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
