/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#dc2626",
          dark: "#0f172a",
          gray: "#1f2937",
          light: "#f8fafc"
        }
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.2)"
      }
    },
  },
  plugins: [],
}
