/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main-background': '#edf7fd',
      'player-background': '#B0E7FC',
      'hover': '#76d4f9',
      'active': '#4fc8f8',
      'text-color': '#03120e',
      'playing': '#27677C',
      'muted-text': '#6C5D96'
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

