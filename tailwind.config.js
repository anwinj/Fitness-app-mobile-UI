/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue1': '#95BEFF',
        'blue2': '#7B91FF',
        'blue3': '#DEE5FF',
        'blue4': '#8CB1FF',
      }
    }
  },
  plugins: [],
}

