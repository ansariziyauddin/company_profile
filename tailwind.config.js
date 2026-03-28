/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#1B0B3B',
        surface: '#F3F2F8',
        accent1: '#7C3AED',
        accent2: '#6D28D9',
        accent3: '#A78BFA',
        'text-light': '#FFFFFF',
        'text-dark': '#1E1145',
        'text-muted': '#9F8FBF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.4)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(31, 38, 135, 0.08)',
        'glass-lg': '0 16px 48px rgba(31, 38, 135, 0.12)',
        'accent': '0 8px 30px rgba(124, 58, 237, 0.15)',
        'accent-lg': '0 20px 60px rgba(124, 58, 237, 0.25)',
        'card': '0 4px 24px rgba(30, 17, 69, 0.06)',
        'card-hover': '0 16px 48px rgba(124, 58, 237, 0.18)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #7C3AED, #6D28D9)',
        'gradient-hero': 'linear-gradient(135deg, #1B0B3B 0%, #2D1B69 50%, #1B0B3B 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(167, 139, 250, 0.05))',
      },
      backdropBlur: {
        'glass': '20px',
      },
    },
  },
  plugins: [],
};
