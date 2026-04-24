/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "#C9A96E",
          light: "#E8D5B0",
          dark: "#A0823F",
        },
        charcoal: "#0d0d0d",
        cream: "#FAF7F2",
      },
    },
  },
  plugins: [],
}
