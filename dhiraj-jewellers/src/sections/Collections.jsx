import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { SectionHead } from "../components/Motion";
import { COLLECTIONS, CONTACT } from "../data/content";

const FILTERS = ["All", "Gold", "Diamond", "Bridal", "Silver"];
const groupOf = (name) => {
  if (["Gold", "Necklace", "Bangles", "Earrings", "Mangalsutra"].includes(name)) return "Gold";
  if (["Diamond"].includes(name)) return "Diamond";
  if (["Bridal"].includes(name)) return "Bridal";
  if (["Silver", "Rashi Ratna"].includes(name)) return "Silver";
  return "All";
};

function Marquee() {
  const words = ["LATEST & TRADITIONAL", "WHERE ELEGANCE MEETS TRADITION", "100% OLD GOLD EXCHANGE", "BIS 916 HALLMARKED"];
  return (
    <div className="relative overflow-hidden py-5 border-y border-gold/15 my-16">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((d) => (
          <div key={d} className="flex shrink-0">
            {words.map((w, i) => <span key={i} className="flex items-center font-display italic text-2xl sm:text-3xl text-gold/25 px-8">{w}<span className="text-gold/40 px-8 not-italic">✦</span></span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Collections() {
  const [filter, setFilter] = useState("All");
  const shown = COLLECTIONS.filter((c) => filter === "All" || groupOf(c.name) === filter);

  return (
    <section id="collections" className="relative section-pad py-24 sm:py-32 bg-maroon/20 overflow-x-hidden">
      <div className="container-x">
        <SectionHead center eyebrow="Our Collections" title="Adornments for every" italic="occasion"
          sub="From the latest contemporary trends to timeless traditional masterpieces — all under one roof." />

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`rounded-sm px-5 py-2 text-xs uppercase tracking-wide2 transition-all ${filter === f ? "text-night shadow-gold" : "text-cream/60 border border-gold/25 hover:border-gold"}`}
              style={filter === f ? { background: "linear-gradient(110deg,#caa24a,#e8cf8f)" } : {}}>
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {shown.map((c) => (
              <motion.a key={c.name} href={`https://wa.me/${CONTACT.whatsapp}?text=I'd like to see the ${encodeURIComponent(c.name)} collection`} target="_blank" rel="noreferrer"
                layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-sm border border-gold/15 bg-night ${c.hero ? "col-span-2 lg:col-span-1" : ""}`}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/10 group-hover:ring-gold/40 transition-all" />
                {c.hero && <span className="absolute top-3 left-3 badge">✦ Special</span>}
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-luxe text-goldLt">{c.tag}</span>
                  <h3 className={`font-display leading-none mt-1 text-cream ${c.hero ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>{c.name}</h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-xs uppercase tracking-wide2 text-goldLt opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
                    View <FiArrowUpRight />
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <Marquee />
    </section>
  );
}
