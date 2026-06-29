/** @type {import('tailwindcss').Config} */
export default {
  // 🚀 FIX CRITICAL: Kasih tahu Tailwind untuk mendeteksi dark mode lewat class HTML
  darkMode: 'class', 

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0f172a",
      }
    },
  },
  plugins: [],
}