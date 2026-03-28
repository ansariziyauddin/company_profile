'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function BottomCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent1/[0.03] to-transparent" />

      <div className="container-main relative z-10">
        <motion.div
          className="relative rounded-3xl overflow-hidden bg-gradient-hero p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          {/* Blobs */}
          <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full
                         bg-accent1/20 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-[250px] h-[250px] rounded-full
                         bg-accent3/15 blur-[80px]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
              Let&apos;s Build Something{' '}
              <span className="bg-gradient-to-r from-accent3 to-white bg-clip-text text-transparent">
                Great
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Have a project in mind? Reach out and let&apos;s architect your next big thing together.
            </p>
            <Button
              href="/contact"
              variant="light"
              size="large"
              className="group"
            >
              Get In Touch
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
