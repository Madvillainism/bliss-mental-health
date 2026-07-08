/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,html}",
  ],
  theme: {
    extend: {
      colors: {
        'bliss-lavender': '#c4b5fd',
        'bliss-soft-lavender': '#ddd6fe',
        'bliss-mauve': '#a78bfa',
        'bliss-sky': '#bae6fd',
        'bliss-soft-sky': '#e0f2fe',
        'bliss-rose': '#fda4af',
        'bliss-soft-rose': '#fecdd3',
        'bliss-mint': '#a7f3d0',
        'bliss-soft-mint': '#d1fae5',
        'bliss-peach': '#fdba74',
        'bliss-soft-peach': '#fed7aa',
        'bliss-cream': '#fef9f0',
        'bliss-white': '#ffffff',
        'bliss-dark': '#1e1b2e',
        'bliss-soft-dark': '#2d2a44',
        'bliss-muted': '#8b87a0',
        'bliss-border': 'rgba(196, 181, 253, 0.2)',
        'bliss-glass': 'rgba(255, 255, 255, 0.15)',
        'bliss-glass-border': 'rgba(255, 255, 255, 0.25)',
      },
      fontFamily: {
        'bliss': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'bliss-display': ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'bliss': '1.5rem',
        'bliss-lg': '2rem',
        'bliss-sm': '1rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'banner-in': 'banner-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'banner-out': 'banner-out 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'banner-in': {
          from: { opacity: '0', transform: 'translateX(100%) scale(0.95)' },
          to: { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        'banner-out': {
          from: { opacity: '1', transform: 'translateX(0) scale(1)' },
          to: { opacity: '0', transform: 'translateX(100%) scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
};
