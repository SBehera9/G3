import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Inter", "sans-serif"],
      },
      boxShadow: {
        custom: 'inset 20px 10px 20px rgba(0, 0, 0, 0.1), 15px 20px 10px rgba(0, 0, 0, 0.1), 15px 20px 20px rgba(0, 0, 0, 0.1), inset -10px -10px 30px rgba(255, 255, 255, 0.6)'
      },
      perspective: {
        1000: "1000px",
      },
      rotate: {
        'y-180': '180deg',
      },
      colors: {
        primary: '#4096B5',
        secondary: '#2471a3',
        accent: '#4682B4',
      }
    },
  },
  variants: {
    extend: {
      transform: ["group-hover"],
      rotate: ["group-hover"],
    },
  },
 
}
