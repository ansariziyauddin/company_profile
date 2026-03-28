'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  Laptop, Code, Rocket, RefreshCw, Link2, Wrench
} from 'lucide-react';

const SERVICES = [
  {
    icon: Laptop,
    title: 'Web & Mobile',
    description: 'Design and development of responsive web and native mobile applications with modern frameworks.',
    gradient: 'from-violet-500/10 to-purple-500/10',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions built to solve specific business problems and scale with your growth.',
    gradient: 'from-blue-500/10 to-indigo-500/10',
  },
  {
    icon: Rocket,
    title: 'MVPs & Prototypes',
    description: 'Rapid development of minimum viable products and proof-of-concepts to validate your ideas fast.',
    gradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: RefreshCw,
    title: 'Modernization',
    description: 'Enhancement, optimization, and modernization of legacy systems to meet current standards.',
    gradient: 'from-amber-500/10 to-orange-500/10',
  },
  {
    icon: Link2,
    title: 'System Integration',
    description: 'Seamless integration of third-party services, APIs, and enterprise systems into your workflow.',
    gradient: 'from-cyan-500/10 to-sky-500/10',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance, monitoring, performance improvements, and dedicated technical support.',
    gradient: 'from-rose-500/10 to-pink-500/10',
  },
];

export function ServicesGrid() {
  return (
    <section className="section-padding bg-white/40">
      <div className="container-main">
        <SectionHeading
          title="What We Do"
          subtitle="End-to-end software development and technology services — from consulting and architecture to delivery and long-term support."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              className="group relative p-7 rounded-2xl bg-white/70 backdrop-blur-sm
                         border border-white/50 shadow-card
                         hover:shadow-card-hover hover:-translate-y-1.5
                         transition-all duration-500"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              {/* Subtle gradient background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient}
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent1/10 flex items-center justify-center mb-5
                              group-hover:bg-accent1/15 transition-colors duration-300">
                  <service.icon size={22} className="text-accent1" />
                </div>
                <h4 className="text-lg font-semibold text-text-dark mb-2.5
                             group-hover:text-accent1 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          className="text-center text-text-muted text-sm mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          We work across all project sizes and domains — from short-term assignments
          to long-term engagements — and adapt our delivery model to match your requirements.
        </motion.p>
      </div>
    </section>
  );
}
