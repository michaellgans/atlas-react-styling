/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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

