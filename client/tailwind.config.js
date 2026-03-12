/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1152d4",
        "primary-dark": "#0a3aa3",
        accent: "#f59e0b",
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"]
      }
    }
  },
  plugins: []
}
