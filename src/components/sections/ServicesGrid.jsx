// Server Component — animation via ScrollReveal client wrapper
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Laptop, Code, Rocket, RefreshCw, Link2, Wrench, BrainCircuit } from 'lucide-react';

const SERVICES = [
  {
    Icon: BrainCircuit,
    title: 'AI Solutions',
    description:
      'Integrating predictive analytics, generative AI, and intelligent automation to supercharge your digital products.',
    gradient: 'from-fuchsia-500/10 to-purple-500/10',
  },
  {
    Icon: Laptop,
    title: 'Web & Mobile',
    description:
      'Design and development of responsive web and native mobile applications with modern frameworks.',
    gradient: 'from-violet-500/10 to-purple-500/10',
  },
  {
    Icon: Code,
    title: 'Custom Software',
    description:
      'Tailored software solutions built to solve specific business problems and scale with your growth.',
    gradient: 'from-blue-500/10 to-indigo-500/10',
  },
  {
    Icon: Rocket,
    title: 'MVPs & Prototypes',
    description:
      'Rapid development of minimum viable products and proof-of-concepts to validate your ideas fast.',
    gradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    Icon: RefreshCw,
    title: 'Modernization',
    description:
      'Enhancement, optimization, and modernization of legacy systems to meet current standards.',
    gradient: 'from-amber-500/10 to-orange-500/10',
  },
  {
    Icon: Link2,
    title: 'System Integration',
    description:
      'Seamless integration of third-party services, APIs, and enterprise systems into your workflow.',
    gradient: 'from-cyan-500/10 to-sky-500/10',
  },
  {
    Icon: Wrench,
    title: 'Maintenance & Support',
    description:
      'Ongoing maintenance, monitoring, performance improvements, and dedicated technical support.',
    gradient: 'from-rose-500/10 to-pink-500/10',
  },
];

export function ServicesGrid() {
  return (
    <section className="pt-8 pb-20 md:pt-12 md:pb-24 bg-white/40">
      <div className="container-main">
        <SectionHeading
          title="What We Do"
          subtitle="End-to-end software development and technology services — from consulting and architecture to delivery and long-term support."
        />

        <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group relative p-7 rounded-2xl bg-white/70 backdrop-blur-sm
                         border border-white/50 shadow-card
                         hover:shadow-card-hover hover:-translate-y-1.5
                         transition-all duration-500"
            >
              {/* Subtle gradient background on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient}
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent1/10 flex items-center justify-center mb-5
                              group-hover:bg-accent1/15 transition-colors duration-300">
                  <service.Icon size={22} className="text-accent1" />
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2.5
                             group-hover:text-accent1 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </ScrollReveal>

        <p className="text-center text-text-muted text-sm mt-12 max-w-2xl mx-auto">
          We work across all project sizes and domains — from short-term assignments
          to long-term engagements — and adapt our delivery model to match your requirements.
        </p>
      </div>
    </section>
  );
}
