import { motion } from "framer-motion";
import { FaArrowRight, FaFeather } from "react-icons/fa";
import { SectionHead, stagger, fadeUp } from "../components/Motion";
import { TRANSFORMATIONS } from "../data/content";

export default function Transformations() {
  return (
    <section className="relative section-pad py-24 sm:py-32 bg-ink text-cream overflow-hidden">
      {/* glow accents */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-rose/20 blur-[100px]" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold/20 blur-[100px]" />

      <div className="container-x relative">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow center justify-center">Real Transformations</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 leading-[1.03]">
            From heavy to <em className="gold-text not-italic italic font-medium">heavenly light.</em>
          </h2>
          <p className="mt-5 text-cream/55 font-light text-base sm:text-lg">The same grandeur our customers dreamed of — reborn at a fraction of the weight.</p>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid md:grid-cols-3 gap-5 lg:gap-6">
          {TRANSFORMATIONS.map((t) => (
            <motion.article key={t.name} variants={fadeUp} className="rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 backdrop-blur">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <span className="absolute top-3 right-3 grid place-items-center h-14 w-14 rounded-full bg-gold-grad text-white text-center shadow-gold">
                  <div><p className="font-display text-lg leading-none">{t.saved}</p><p className="text-[7px] uppercase tracking-wide2">lighter</p></div>
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{t.name}</h3>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <div className="flex-1 rounded-xl bg-white/5 px-3 py-2.5 text-center">
                    <p className="text-[10px] uppercase tracking-wide2 text-cream/40">Before</p>
                    <p className="text-cream/70 mt-0.5 text-xs">{t.before}</p>
                  </div>
                  <FaArrowRight className="text-gold shrink-0" />
                  <div className="flex-1 rounded-xl px-3 py-2.5 text-center text-white" style={{ background: "linear-gradient(110deg,#c39b4e,#dba38a)" }}>
                    <p className="text-[10px] uppercase tracking-wide2 text-white/80 flex items-center justify-center gap-1"><FaFeather size={8} /> After</p>
                    <p className="mt-0.5 text-xs">{t.after}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
