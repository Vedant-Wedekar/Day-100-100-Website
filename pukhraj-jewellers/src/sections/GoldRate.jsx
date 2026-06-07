import { motion } from "framer-motion";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { SectionHead, stagger, fadeUp } from "../components/Motion";
import { RATES } from "../data/content";

const CARDS = [
  { ...RATES.gold, accent: "from-gold to-goldLt" },
  { ...RATES.gold24, accent: "from-rose to-roseLt" },
  { ...RATES.silver, accent: "from-ink to-cocoa" },
];

export default function GoldRate() {
  const today = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  return (
    <section className="relative section-pad py-20 sm:py-24 bg-cream">
      <div className="container-x">
        <SectionHead center eyebrow="Today's Rates" title="Live gold &" italic="silver rates"
          sub={`Indicative Nagpur rates · ${today}. Visit us for the day's best price.`} />

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {CARDS.map((c) => (
            <motion.div key={c.label} variants={fadeUp} whileHover={{ y: -6 }}
              className="relative rounded-3xl p-7 text-white overflow-hidden shadow-luxe">
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${c.accent}`} />
              <div className="absolute inset-0 -z-10 opacity-20 bg-sheen bg-[length:200%_100%] animate-shimmer" />
              <p className="text-xs uppercase tracking-luxe text-white/80">{c.label}</p>
              <p className="font-display text-4xl mt-3">{c.value}<span className="text-lg font-body font-light">{c.unit}</span></p>
              <p className={`mt-2 inline-flex items-center gap-1.5 text-xs rounded-full px-2.5 py-1 ${c.up ? "bg-white/20" : "bg-black/20"}`}>
                {c.up ? <FaArrowUp size={10} /> : <FaArrowDown size={10} />} {c.change} today
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
