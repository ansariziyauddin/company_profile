'use client';

import Link from 'next/link';

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold
    rounded-xl transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-accent1/50 focus:ring-offset-2 focus:ring-offset-surface
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-accent1 to-accent2 text-white
      shadow-accent hover:shadow-accent-lg hover:-translate-y-0.5
      active:translate-y-0
    `,
    outline: `
      bg-transparent border-2 border-accent1/30 text-accent1
      hover:bg-accent1/5 hover:border-accent1/50 hover:-translate-y-0.5
      active:translate-y-0
    `,
    ghost: `
      bg-transparent text-text-dark
      hover:bg-accent1/5 hover:text-accent1
    `,
    light: `
      bg-white/90 text-accent1 border border-white/50
      shadow-glass hover:shadow-glass-lg hover:-translate-y-0.5
      backdrop-blur-sm
    `,
  };

  const sizes = {
    small: 'px-4 py-2 text-sm gap-1.5',
    default: 'px-6 py-3 text-sm gap-2',
    large: 'px-8 py-4 text-base gap-2.5',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (href.startsWith('#') || href.startsWith('http')) {
      return (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
