/** @type {import('tailwindcss').Config} */
export default {
  // 1. CONTENT: Keep the standard file inclusion.
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  // 2. DARK MODE: Include the dark mode setting from Bloom-6 if you plan to use it.
  darkMode: "class", 

  theme: {
    extend: {
      // 3. COLORS: Merge all unique colors from both files.
      colors: {
        // Colors from bloomsphere (main dashboard theme)
        primary: "#4CAF50",    // green
        secondary: "#2E7D32",  // dark green
        accent: "#81C784",     // light green
        neutral: "#F5F5F5",    // light gray background
        textDark: "#1B1B1B",
        textLight: "#FFFFFF",
        
        // Colors from Bloom-6 (NASA/Report specific colors)
        nasaBlue: "#0B3D91",      
        nasaGreen: "#22c55e",     
        nasaRed: "#ef4444",       
      },
      
      // 4. FONT FAMILY: Include the custom font from Bloom-6 if needed by its components.
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        // If Bloom-6 used 'orbitron' or 'exo' (from its App.jsx), you might need to add them here:
        // orbitron: ["Orbitron", "sans-serif"], 
        // exo: ["Exo", "sans-serif"], 
      },
      
      // Add any other extensions here (like custom spacing, screens, etc., if they existed)
    },
  },
  
  // 5. PLUGINS: Both were empty, so keep it empty unless you use new plugins.
  plugins: [],
};