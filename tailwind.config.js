/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  plugins: [],
  theme: {
    extend: {
      screens: {
        // sm => @media (min-width: 640px) { ... }
        // md => @media (min-width: 768px) { ... }
        lg: "1100px",
        // => @media (min-width: 1024px) { ... }
        xl: "1430px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "2130px"
        // => @media (min-width: 1536px) { ... }
      }
    }
  }
}
