import { motion } from "framer-motion";
import { FaCheck, FaTimes, FaWeightHanging, FaGem, FaFeather, FaSun, FaChartLine, FaCrown } from "react-icons/fa";
import { SectionHead, Reveal, stagger, fadeUp } from "../components/Motion";
import { COMPARE } from "../data/content";

const ICONS = { weight: FaWeightHanging, design: FaGem, comfort: FaFeather, daily: FaSun, invest: FaChartLine, style: FaCrown };

export default function WhyLightweight() {
  return (
    <section id="why" className="relative section-pad py-24 sm:py-32 bg-cream">
      <div className="container-x">
        <SectionHead center eyebrow="The Pukhraj Difference" title="Why" italic="Lightweight Jewellery?"
          sub="Same royal look. Up to 60% less gold. It's not magic — it's smarter craftsmanship that means bigger designs, better comfort, and a smarter investment for modern families." />

        {/* VS comparison cards */}
        <div className="mt-14 grid md:grid-cols-2 gap-5 lg:gap-6 relative">
          {/* center VS badge */}
          <div className="hidden md:grid place-items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-16 w-16 rounded-full bg-ink text-cream font-display text-xl shadow-luxe">VS</div>

          {/* Traditional */}
          <Reveal className="rounded-3xl border border-ink/10 bg-white/60 p-7 sm:p-9">
            <p className="eyebrow !text-ink/40 before:bg-ink/20">Traditional Jewellery</p>
            <h3 className="font-display text-3xl mt-3 text-ink/70">The Heavy Way</h3>
            <ul className="mt-6 space-y-3.5">
              {COMPARE.map((c) => (
                <li key={c.benefit} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-ink/8 text-ink/40 shrink-0"><FaTimes size={10} /></span>
                  <span><b className="text-ink/70">{c.benefit}:</b> <span className="text-ink/50">{c.trad}</span></span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Pukhraj */}
          <Reveal delay={0.15} className="relative rounded-3xl p-7 sm:p-9 text-white overflow-hidden shadow-gold"
            style={{ background: "linear-gradient(135deg,#c39b4e,#dba38a)" }}>
            <div className="absolute inset-0 opacity-20 bg-sheen bg-[length:200%_100%] animate-shimmer pointer-events-none" />
            <p className="text-[11px] font-semibold uppercase tracking-luxe text-white/80 flex items-center gap-2"><span className="h-px w-8 bg-white/50" />Pukhraj Lightweight</p>
            <h3 className="font-display text-3xl mt-3">The Smart Way 👑</h3>
            <ul className="mt-6 space-y-3.5">
              {COMPARE.map((c) => (
                <li key={c.benefit} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-white/25 text-white shrink-0"><FaCheck size={10} /></span>
                  <span><b>{c.benefit}:</b> <span className="text-white/85">{c.pukhraj}</span></span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* benefit chips */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-6 grid grid-cols-2 lg:grid-cols-6 gap-3">
          {COMPARE.map((c) => {
            const Icon = ICONS[c.icon];
            return (
              <motion.div key={c.benefit} variants={fadeUp} whileHover={{ y: -5 }}
                className="card-luxe rounded-2xl p-4 text-center hover:border-gold/40 hover:shadow-soft">
                <span className="grid place-items-center h-10 w-10 mx-auto rounded-full bg-rose-grad text-white"><Icon size={16} /></span>
                <p className="mt-2.5 text-xs font-medium text-ink/70">{c.benefit}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
