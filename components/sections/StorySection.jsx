'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function StorySection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="up">
            <div>
              <motion.span
                className="inline-block text-sm font-semibold text-accent1 uppercase tracking-wider mb-4"
              >
                Who We Are
              </motion.span>

              <h2 className="text-3xl md:text-4xl font-bold text-text-dark tracking-tight mb-6 leading-tight">
                We don&apos;t just write code —{' '}
                <span className="gradient-text">we design systems</span>{' '}
                that grow with your business.
              </h2>

              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  With <strong className="text-text-dark">14+ years in the IT industry</strong>,
                  Inovance Technologies designs, builds, and supports digital solutions
                  that are reliable, secure, and scalable — from early-stage startups
                  to established enterprises.
                </p>
                <p>
                  Our approach is <strong className="text-text-dark">business-first</strong>:
                  we understand your goals, challenges, and timelines before writing a
                  single line of code, so every solution aligns with what you actually need.
                </p>
                <p>
                  We bring a startup mindset to every project — flexible, resourceful,
                  and relentlessly focused on delivering measurable value with
                  <strong className="text-text-dark"> scalable architecture</strong>.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
