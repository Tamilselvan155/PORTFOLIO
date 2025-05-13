/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        extend: {
  animation: {
    'fade-in': 'fadeIn 1s ease-out forwards',
    'fade-in-delay': 'fadeIn 1.5s ease-out forwards',
    'slide-up': 'slideUp 1s ease-out forwards',
    'pulse-slow': 'pulse 6s ease-in-out infinite',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    slideUp: {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  },
},
extend: {
  animation: {
    'fade-in': 'fadeIn 1s ease-out forwards',
    'fade-in-up': 'fadeInUp 1s ease-out forwards',
    'slide-up': 'slideUp 1s ease-out forwards',
    'scale-in': 'scaleIn 0.6s ease-out forwards',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    fadeInUp: {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
    slideUp: {
      '0%': { opacity: 0, transform: 'translateY(40px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
    scaleIn: {
      '0%': { transform: 'scale(0)', opacity: 0 },
      '100%': { transform: 'scale(1)', opacity: 1 },
    },
  },
}

      },
    },
  },
  plugins: [],
};

