'use client';

export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-accent3/15 text-accent2 border-accent3/20',
    accent: 'bg-accent1/10 text-accent1 border-accent1/20',
    muted: 'bg-text-muted/10 text-text-muted border-text-muted/15',
    light: 'bg-white/60 text-accent2 border-white/40',
  };

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
        border backdrop-blur-sm transition-all duration-200
        hover:scale-105
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
