/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#111111',
        darkBlue: '#0d2b43',
        lightGray: '#555555',
        lightBlue: '#3a4a64',
        lightGreen: '#3e5f42',
        lightYellow: '#999933',
        lightRed: '#7d3535',
      },
      borderRadius: {
        xl: '1.5rem',
      },
    },
  },
  plugins: [],
}