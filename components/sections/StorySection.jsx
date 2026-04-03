'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function StorySection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Content Side */}
            <div className="w-full lg:w-1/2">
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
                      <strong className="text-text-dark">With 14+ years in the IT industry,
                        Innovance Tech AI designs, builds, and supports digital solutions
                        that are reliable, secure, and scalable — from early-stage startups
                        to established enterprises.</strong>
                    </p>
                    <p>
                      <strong className="text-text-dark">Our approach is business-first:
                        we understand your goals, challenges, and timelines before writing a
                        single line of code, so every solution aligns with what you actually need.</strong>
                    </p>
                    <p>
                      <strong className="text-text-dark">We bring a startup mindset to every project — flexible, resourceful,
                        and relentlessly focused on delivering measurable value with
                        scalable architecture</strong>.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Image Side */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <ScrollReveal direction="up" delay={0.2}>
                <div className="relative flex justify-center lg:justify-end">
                  {/* Container restrained to roughly half size relative to the column */}
                  <Image
                    src="/images/projects/who_we_are.png"
                    alt="Who We Are - Team and Office"
                    width={1200}
                    height={1200}
                    className="w-[100%] lg:w-[100%] h-auto object-contain rounded-2xl drop-shadow-2xl"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
