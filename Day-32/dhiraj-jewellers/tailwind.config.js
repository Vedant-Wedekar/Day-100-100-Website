/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Rich regal dark heritage palette
        night: "#140a0c",      // near-black oxblood
        maroon: "#3d1419",     // deep maroon
        wine: "#5c1a23",       // oxblood
        emerald: "#0f3d33",    // deep emerald (jewel accent)
        emLt: "#1b6b58",
        gold: "#caa24a",       // antique gold
        goldLt: "#e8cf8f",
        goldDk: "#9a7521",
        cream: "#f6ecd9",      // warm parchment text
        sand: "#d9c9a8",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"Mulish"', "system-ui", "sans-serif"],
      },
      letterSpacing: { luxe: "0.32em", wide2: "0.16em" },
      boxShadow: {
        royal: "0 30px 70px -30px rgba(0,0,0,0.7)",
        gold: "0 18px 50px -20px rgba(202,162,74,0.45)",
        inner: "inset 0 1px 0 rgba(232,207,143,0.15)",
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(110deg,#9a7521,#e8cf8f,#caa24a,#9a7521)",
        "gold-soft": "linear-gradient(120deg,#caa24a,#e8cf8f)",
        "royal-grad": "linear-gradient(160deg,#3d1419,#140a0c 60%)",
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        shimmer: { "0%": { backgroundPosition: "200% 0" }, "100%": { backgroundPosition: "-200% 0" } },
        spinslow: { to: { transform: "rotate(360deg)" } },
        twinkle: { "0%,100%": { opacity: ".2", transform: "scale(.8)" }, "50%": { opacity: "1", transform: "scale(1.1)" } },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        spinslow: "spinslow 26s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
