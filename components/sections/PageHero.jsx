'use client';

import { motion } from 'framer-motion';

export function PageHero({ title, subtitle }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-base">
      <div className="container-main relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
