/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgOverlay: "rgba(0,0,0,0.4)",
        lightOverlay: "rgba(256,256,256,0.2)",
        textcolor: "#555",
        textdarkcolor: "#222",
        primary: "#fbfbfb",
      },
    },
  },
  plugins: [],
};
