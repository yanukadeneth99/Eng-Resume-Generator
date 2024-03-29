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
        primaryBgDark: "var(--primaryBgDark)",
        primaryBgWhite: "var(--primaryBgWhite)",
        primaryBgShapes: "var(--primaryBgShapes)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "footer-texture": "url('/images/shapes/footer-shapes.png')",
        "login-texture": "url('/images/shapes/login-shapes.png')",
      },
    },
  },
  plugins: [],
};
