/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        forge: {
          50:  '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7fd',
          300: '#a5bcfb',
          400: '#8199f8',
          500: '#6374f1',
          600: '#4f55e5',
          700: '#4144ca',
          800: '#3638a3',
          900: '#313381',
          950: '#1e1f4b',
        },
        neutral: {
          50:  '#f8f9fb',
          100: '#f1f3f6',
          200: '#e4e8ef',
          300: '#cdd3de',
          400: '#a8b3c4',
          500: '#7e8fa6',
          600: '#5f6f87',
          700: '#4b586d',
          800: '#3a4557',
          900: '#1e2533',
          950: '#0f1520',
        }
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        'soft': '0 2px 12px 0 rgba(0,0,0,0.06)',
        'card': '0 4px 24px 0 rgba(0,0,0,0.08)',
        'glow': '0 0 40px 0 rgba(99,116,241,0.25)',
        'glow-sm': '0 0 20px 0 rgba(99,116,241,0.15)',
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h32v1H0zm0 31h32v1H0zM0 0v32h1V0zm31 0v32h1V0z' fill='%239CA3AF' fill-opacity='0.08'/%3E%3C/svg%3E\")",
        'dot-pattern': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%239CA3AF' fill-opacity='0.12'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out both',
        'fade-in': 'fadeIn 0.4s ease-out both',
        'slide-in': 'slideIn 0.3s ease-out both',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
