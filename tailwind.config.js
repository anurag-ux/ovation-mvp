/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#b30920',
        'dark-bg': '#0a0a0f',
        'dark-surface': '#151520',
        'dark-card': '#1a1a2e',
        'dark-border': '#2a2a3e',
        // Option 2 Ovation Colors
        'ovation-bg-primary': 'var(--ovation-bg-primary)',
        'ovation-bg-secondary': 'var(--ovation-bg-secondary)',
        'ovation-bg-tertiary': 'var(--ovation-bg-tertiary)',
        'ovation-brand-primary': 'var(--ovation-brand-primary)',
        'ovation-brand-primary-hover': 'var(--ovation-brand-primary-hover)',
        'ovation-brand-secondary': 'var(--ovation-brand-secondary)',
        'ovation-brand-accent': 'var(--ovation-brand-accent)',
        'ovation-text-primary': 'var(--ovation-text-primary)',
        'ovation-text-secondary': 'var(--ovation-text-secondary)',
        'ovation-text-tertiary': 'var(--ovation-text-tertiary)',
        'ovation-text-disabled': 'var(--ovation-text-disabled)',
        'ovation-border-primary': 'var(--ovation-border-primary)',
        'ovation-border-secondary': 'var(--ovation-border-secondary)',
        'ovation-border-accent': 'var(--ovation-border-accent)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'width-grow': 'width-grow 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(179, 9, 32, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(179, 9, 32, 0.8), 0 0 30px rgba(179, 9, 32, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'width-grow': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
