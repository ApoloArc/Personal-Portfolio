/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      colors:{
        secondary: "#CE643A",
        bg: "#F5F3F3"
      }
    },
  },
  plugins: [],
}
