/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "var(--primaryBg)",
        primary: "var(--primary)",
        primaryBgWhite: "var(--primaryBgWhite)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
