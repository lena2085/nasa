/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",   // green
        secondary: "#2E7D32", // dark green
        accent: "#81C784",    // light green
        neutral: "#F5F5F5",   // light gray background
        textDark: "#1B1B1B",
        textLight: "#FFFFFF"
      }
    },
  },
  plugins: [],
};
