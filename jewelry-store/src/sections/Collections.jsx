import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { SectionHead, stagger, fadeUp } from "../components/Motion";
import { COLLECTIONS } from "../data/content";

function Marquee() {
  const words = ["GOLD", "DIAMOND", "BRIDAL", "BESPOKE", "HERITAGE", "CERTIFIED"];
  return (
    <div className="relative overflow-hidden py-6 border-y border-ink/10 my-16 sm:my-20">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((d) => (
          <div key={d} className="flex shrink-0">
            {words.map((w, i) => (
              <span key={i} className="flex items-center font-display text-3xl sm:text-5xl text-ink/15 px-8">
                {w} <span className="text-gold/40 px-8 text-2xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Collections() {
  return (
    <section id="collections" className="relative section-pad py-24 sm:py-32 bg-cream/50">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHead eyebrow="Curated Collections" title="Find the piece that" italic="finds you." />
          <p className="text-ink/45 text-sm md:max-w-xs font-light">Seven signature lines, each a world of its own — from everyday gold to haute joaillerie.</p>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {COLLECTIONS.map((c, i) => (
            <motion.a href="#bestsellers" key={c.name} variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl bg-ink ${i === 0 ? "col-span-2 lg:row-span-2 lg:col-span-2" : ""}`}>
              <div className={`overflow-hidden ${i === 0 ? "aspect-[4/3] lg:aspect-[4/5]" : "aspect-[3/4]"}`}>
                <img src={c.img} alt={c.name} loading="lazy"
                  className="h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end text-ivory">
                <span className="text-[10px] uppercase tracking-luxe text-champ">{c.tag}</span>
                <h3 className={`font-display leading-none mt-1.5 ${i === 0 ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"}`}>{c.name}</h3>
                <p className="text-ivory/70 text-sm font-light mt-1.5 max-w-[26ch] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">{c.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-wide2 text-champ opacity-0 group-hover:opacity-100 transition-opacity">
                  View Collection <FiArrowUpRight />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
      <Marquee />
    </section>
  );
}
