/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'dark-black': '#0A0A0A',
        'blue-primary': '#2563EB',
        'blue-dark': '#1E40AF',
        'blue-light': '#DBEAFE',
        offwhite: '#F5F5F0',
        'offwhite-warm': '#FAF9F6',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '3.5xl': '2rem',
      },
    },
  },
  plugins: [],
};
