/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif']
      },
      colors: {
        primary: {
          50: '#fdf2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f98080',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.15)'
      }
    },
  },
  plugins: [],
}
