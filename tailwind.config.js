// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // make sure your paths are correct
  theme: {
    extend: {
      animation: {
        "color-cycle": "colorCycle 5s linear infinite", // 5s = speed
      },
      keyframes: {
        colorCycle: {
          "0%": { color: "#ff6b6b" },     // red
          "25%": { color: "#feca57" },    // yellow-orange
          "50%": { color: "#48dbfb" },    // sky blue
          "75%": { color: "#1dd1a1" },    // mint green
          "100%": { color: "#ff6b6b" },   // back to red
        },
      },
    },
  },
  plugins: [],
};
