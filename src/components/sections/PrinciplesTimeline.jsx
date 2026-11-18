'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { HeartHandshake, Clock, ShieldCheck, Target } from 'lucide-react';

const PRINCIPLES = [
  {
    icon: HeartHandshake,
    title: 'Clear Communication',
    description: 'Clear and consistent communication throughout the entire project lifecycle. No surprises, no black boxes.',
  },
  {
    icon: Clock,
    title: 'Realistic Timelines',
    description: 'Honest estimates and transparent execution. We commit to what we can deliver and deliver what we commit.',
  },
  {
    icon: ShieldCheck,
    title: 'High Standards',
    description: 'Uncompromising standards of quality, security, and performance from the first line to the last deployment.',
  },
  {
    icon: Target,
    title: 'Long-term Reliability',
    description: 'Solutions built for longevity — maintainable, documented, and designed to evolve with your business.',
  },
];

export function PrinciplesTimeline() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading
          title="How We Work"
          subtitle="Our objective is not just to deliver software, but to build trusted partnerships that create measurable value for your business."
        />

        <div className="max-w-3xl mx-auto">
          {PRINCIPLES.map((principle, i) => (
            <motion.div
              key={principle.title}
              className="relative flex gap-6 md:gap-8 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Timeline connector */}
              <div className="flex flex-col items-center">
                {/* Number circle */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent1 to-accent2
                              flex items-center justify-center text-white font-bold text-sm
                              shadow-accent shrink-0 z-10
                              group-hover:shadow-accent-lg transition-shadow duration-300">
                  {String(i + 1).padStart(2, '0')}
                </div>
                {/* Vertical line */}
                {i < PRINCIPLES.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-accent1/30 to-accent3/10 my-2" />
                )}
              </div>

              {/* Content card */}
              <div className={`flex-1 pb-12 ${i === PRINCIPLES.length - 1 ? 'pb-0' : ''}`}>
                <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm
                              border border-white/50 shadow-card
                              group-hover:shadow-card-hover group-hover:-translate-y-1
                              transition-all duration-400">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accent1/10 flex items-center justify-center">
                      <principle.icon size={20} className="text-accent1" />
                    </div>
                    <h4 className="text-lg font-semibold text-text-dark">
                      {principle.title}
                    </h4>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed pl-[52px]">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
