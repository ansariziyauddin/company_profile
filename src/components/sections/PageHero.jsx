// Server Component — animation handled by ScrollReveal client wrapper
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function PageHero({ title, subtitle }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-base">
      <div className="container-main relative z-10 text-center">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
