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
        lg: "1100px",
        // => @media (min-width: 992px) { ... }
        xl: "1430px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "2130px"
        // => @media (min-width: 1280px) { ... }
      }
    }
  }
}
