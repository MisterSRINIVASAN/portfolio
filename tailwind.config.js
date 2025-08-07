// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        "color-cycle": "colorCycle 5s linear infinite",
        "spin-slow": "spin 8s linear infinite",     // 👈 add this
        "bounce-slow": "bounce 3s ease-in-out infinite", // 👈 and this
        "pulse-slow": "pulse 4s ease-in-out infinite" // optional slower pulse
      },
      keyframes: {
        colorCycle: {
          "0%": { color: "#ff6b6b" },
          "25%": { color: "#feca57" },
          "50%": { color: "#48dbfb" },
          "75%": { color: "#1dd1a1" },
          "100%": { color: "#ff6b6b" },
        },
      },
    },
  },
  plugins: [],
};
