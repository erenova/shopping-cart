/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Consumer Grade": "#b0c3d9",
        "Industrial Grade": "#5e98d9",
        "Mil-Spec Grade": "#4b69ff",
        Restricted: "#8847ff",
        Classified: "#d32ce6",
        Covert: "#eb4b4b",
        Extraordinary: "#eb4b4b",
        Contraband: "#e4ae39",
      },
    },
  },
  plugins: [],
};
