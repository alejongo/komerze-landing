/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        green: {
          100: "#dcfce7",
          500: "#22c55e",
          600: "#16a34a",
        },
        indigo: {
          100: "#e0e7ff",
          600: "#4f46e5",
        },
        red: {
          100: "#fee2e2",
          600: "#dc2626",
        },
      },
    },
  },
  plugins: [],
};
