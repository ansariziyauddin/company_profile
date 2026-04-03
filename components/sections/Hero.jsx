'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center bg-base"
    >
      {/* Content */}
      <div className="container-main relative z-10 py-24">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          {/* <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       bg-white/5 text-white/70 text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            14+ Years of Engineering Excellence
          </motion.div> */}

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white
                       tracking-tight leading-[1.1] mb-6 max-w-4xl text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Engineering Scalable{' '}
            <span className="text-accent3">
              AI & Digital Systems
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            We build high-performance AI-powered digital products, mobile, and web architectures for startups
            and growing businesses. Systems that scale, solutions that last.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {/* Flat Solid Button */}
            <a href="/#projects" className="inline-flex items-center justify-center font-semibold rounded-xl
                                            px-8 py-4 text-base bg-white text-base hover:bg-gray-100 transition-colors">
              View Our Work
            </a>
            {/* Flat Outline Button */}
            <a href="/contact" className="inline-flex items-center justify-center font-semibold rounded-xl
                                          px-8 py-4 text-base border-2 border-white/20 text-white hover:bg-white/10 transition-colors">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

