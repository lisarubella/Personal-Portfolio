import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: '#ff6b9d',
          'light-pink': '#ffe4e9',
          'lighter-pink': '#fff5f7',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
        cravelo: ['var(--font-cravelo)', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'scale-up': 'scaleUp 0.5s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 0 0 rgba(255, 192, 203, 0.7)',
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 0 6px rgba(255, 192, 203, 0)',
          },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        slideInLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        scaleUp: {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      backdropFilter: {
        'blur-10': 'blur(10px)',
        'blur-15': 'blur(15px)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
