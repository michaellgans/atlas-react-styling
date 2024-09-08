/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-grey': '#363531',
      'bronze': '#E0B961',
      'light-teal': '#A6B597',
      'teal': '#77A272'
    },
    extend: {
      height: {
        '400': '400px',
      },
      width: {
        '400': '400px',
      },
      maxWidth: {
        '400': '400px'
      }
    },
  },
  plugins: [],
}

