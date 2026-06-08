/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f7f3ec",      // warm paper canvas
        cream: "#efe8dc",
        sand: "#e3d8c5",
        ink: "#1a1714",        // espresso black
        char: "#2a2520",
        gold: "#b08d4f",       // antique gold
        champ: "#cdaf7c",      // champagne
        champLt: "#e6d4b3",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body: ['"Jost"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.28em",
        wide2: "0.18em",
      },
      opacity: {
        8: "0.08",
      },
      boxShadow: {
        soft: "0 24px 60px -28px rgba(26,23,20,0.35)",
        gold: "0 18px 50px -20px rgba(176,141,79,0.5)",
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(110deg,#b08d4f,#e6d4b3,#b08d4f)",
        "fade-ivory": "linear-gradient(to bottom, rgba(247,243,236,0), #f7f3ec)",
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        shimmer: { "0%": { backgroundPosition: "200% 0" }, "100%": { backgroundPosition: "-200% 0" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        floaty: "floaty 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
