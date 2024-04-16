/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        triangle: "#00da8b",
        square: "#e689c6",
        circle: "#ff0520",
        cross: "#31ace0",
        "bg-game-over": "rgba(40, 38, 23, 0.95)",
        reamtch: "#fcd256",
      },
      animation: {
        "pop-in": "pop-in 0.5s cubic-bezier(0.68, -0.55, 0.65, 0.52) forwards",
      },
      boxShadow: {
        "rematch-button": "0 0 8px rgba(255, 187, 0, 0.4)",
        "rematch-button-hover": "0 0 20px rgba(255, 187, 0, 0.8)",
      },
    },
  },
  plugins: [],
};
