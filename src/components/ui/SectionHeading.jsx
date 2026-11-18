// Server Component shell — ScrollReveal handles animation client-side
import { ScrollReveal } from '@/components/ui/ScrollReveal';

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
    <ScrollReveal className={`max-w-3xl mb-16 ${alignments[align]} ${className}`}>
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
    </ScrollReveal>
  );
}
