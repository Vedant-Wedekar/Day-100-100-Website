import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { SectionHead } from "../components/Motion";
import { COLLECTIONS, CONTACT } from "../data/content";

const FILTERS = ["All", "Bridal", "Daily", "Diamond"];
const groupOf = (name) => {
  if (["Bridal", "Wedding", "Mangalsutra"].includes(name)) return "Bridal";
  if (["Daily Wear", "Lightweight", "Bangles"].includes(name)) return "Daily";
  if (["Diamond", "Earrings", "Necklace"].includes(name)) return "Diamond";
  return "All";
};

function Marquee() {
  const words = ["MORE DESIGN · LESS GOLD", "LUXURY THAT FEELS LIGHT", "BIGGER BEAUTY · LESSER WEIGHT", "SMART LUXURY"];
  return (
    <div className="relative overflow-hidden py-5 border-y border-ink/10 my-16">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((d) => (
          <div key={d} className="flex shrink-0">
            {words.map((w, i) => <span key={i} className="flex items-center font-display text-2xl sm:text-3xl text-ink/15 px-8">{w}<span className="text-gold/40 px-8">✦</span></span>)}
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
    <section id="collections" className="relative section-pad py-24 sm:py-32 bg-cream">
      <div className="container-x">
        <SectionHead center eyebrow="Featured Collections" title="Crafted for every" italic="moment"
          sub="From grand bridal sets to everyday elegance — each design reimagined to be remarkably light." />

        {/* filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-xs uppercase tracking-wide2 transition-all ${filter === f ? "text-white shadow-gold" : "text-ink/60 border border-ink/15 hover:border-gold"}`}
              style={filter === f ? { background: "linear-gradient(110deg,#c39b4e,#dba38a)" } : {}}>
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {shown.map((c) => (
              <motion.a href={`https://wa.me/${CONTACT.whatsapp}?text=I'd like to see the ${encodeURIComponent(c.name)} collection`} target="_blank" rel="noreferrer"
                key={c.name} layout
                initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-2xl bg-ink ${c.hero ? "col-span-2 lg:col-span-1 lg:row-span-1" : ""}`}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
                {c.hero && <span className="absolute top-3 left-3 badge-lw">★ Signature</span>}
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-cream">
                  <span className="text-[10px] uppercase tracking-luxe text-goldLt">{c.tag}</span>
                  <h3 className="font-display text-2xl sm:text-3xl leading-none mt-1">{c.name}</h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-xs uppercase tracking-wide2 text-goldLt opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
                    Quick View <FiArrowUpRight />
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
