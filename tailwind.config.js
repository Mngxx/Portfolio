/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app.js",
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#082f49',
        },
        accent: {
          400: '#00ffdd',
          500: '#4FD3C4',
          600: '#00d9cc',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'DM Sans', 'sans-serif'],
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
}
