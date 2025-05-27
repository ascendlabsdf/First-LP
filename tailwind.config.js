/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f8ff',
          100: '#b3e7ff',
          200: '#80d6ff',
          300: '#4dc4ff',
          400: '#1ab3ff',
          500: '#00a1f2',
          600: '#007fcf',
          700: '#0060ac',
          800: '#004189',
          900: '#002466',
        },
        accent: {
          50: '#e6fff0',
          100: '#b3ffce',
          200: '#80ffab',
          300: '#4dff89',
          400: '#1aff66',
          500: '#00e755',
          600: '#00c443',
          700: '#00a132',
          800: '#007e21',
          900: '#005b10',
        },
        dark: {
          50: '#e6e6e7',
          100: '#b3b3b7',
          200: '#808087',
          300: '#4d4d56',
          400: '#1a1a26',
          500: '#14141e',
          600: '#0e0e16',
          700: '#08080e',
          800: '#020207',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};