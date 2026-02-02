/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D97706", // Amber-600
        background: "#FFFBEB", // Amber-50
      },
    },
  },
  plugins: [],
};
