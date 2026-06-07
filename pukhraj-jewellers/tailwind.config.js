/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fdfbf7",      // warm white base
        ivory: "#f7f1e8",
        sand: "#efe6d6",
        ink: "#241c15",        // warm near-black
        cocoa: "#4a3b2c",
        gold: "#c39b4e",       // rich gold
        goldLt: "#e7cd92",
        rose: "#dba38a",       // rose gold
        roseLt: "#f0cdbd",
        wine: "#7d2b3a",       // deep accent (bridal)
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        body: ['"Outfit"', "system-ui", "sans-serif"],
      },
      letterSpacing: { luxe: "0.3em", wide2: "0.16em" },
      opacity: { 8: "0.08" },
      boxShadow: {
        luxe: "0 30px 70px -32px rgba(36,28,21,0.45)",
        gold: "0 20px 55px -22px rgba(195,155,78,0.55)",
        soft: "0 12px 40px -18px rgba(36,28,21,0.22)",
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(110deg,#c39b4e,#e7cd92,#dba38a,#c39b4e)",
        "rose-grad": "linear-gradient(120deg,#f0cdbd,#e7cd92,#dba38a)",
        "sheen": "linear-gradient(110deg,transparent 30%,rgba(255,255,255,0.6) 50%,transparent 70%)",
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        shimmer: { "0%": { backgroundPosition: "200% 0" }, "100%": { backgroundPosition: "-200% 0" } },
        spinslow: { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        spinslow: "spinslow 24s linear infinite",
      },
    },
  },
  plugins: [],
};
