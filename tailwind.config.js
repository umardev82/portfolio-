/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          cyan:   '#06b6d4',
          purple: '#a855f7',
          blue:   '#3b82f6',
        },
        dark: {
          900: '#040814',
          800: '#0a0f1e',
          700: '#0f172a',
          600: '#1e293b',
          500: '#334155',
        },
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'slide-up':   'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        'gradient-x': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundSize: { '200%': '200%' },
    },
  },
  plugins: [],
}
