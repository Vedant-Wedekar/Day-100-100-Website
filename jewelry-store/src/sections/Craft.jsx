import { motion } from "framer-motion";
import { FaGem, FaAward, FaShieldAlt, FaCertificate } from "react-icons/fa";
import { Reveal, SectionHead, stagger, fadeUp } from "../components/Motion";
import { CRAFT_STEPS } from "../data/content";

const ASSURANCE = [
  { icon: FaCertificate, t: "BIS Hallmarked", d: "Every gold piece is government-certified for purity." },
  { icon: FaGem, t: "Certified Diamonds", d: "IGI / GIA graded stones with full documentation." },
  { icon: FaShieldAlt, t: "Lifetime Exchange", d: "Transparent buyback and exchange, always." },
  { icon: FaAward, t: "Premium Materials", d: "Responsibly sourced 22K gold and platinum." },
];

export default function Craft() {
  return (
    <section id="craft" className="relative section-pad py-24 sm:py-32 bg-cream/50">
      <div className="container-x grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* process list */}
        <div>
          <SectionHead eyebrow="The Craft" title="From molten gold to" italic="masterpiece."
            sub="Four meticulous stages, dozens of pairs of hands, and a standard that has never wavered in 75 years." />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            className="mt-9 space-y-2">
            {CRAFT_STEPS.map((s) => (
              <motion.div key={s.no} variants={fadeUp}
                className="group flex gap-5 items-start p-4 rounded-xl hover:bg-ivory transition-colors">
                <span className="font-display text-3xl gold-text w-12 shrink-0">{s.no}</span>
                <div>
                  <h4 className="font-display text-xl">{s.title}</h4>
                  <p className="text-sm text-ink/55 font-light mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* image */}
        <Reveal delay={0.1} className="relative">
          <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1633934542430-0905ccb5f050?auto=format&fit=crop&w=900&q=80" alt="Artisan crafting jewellery" className="h-full w-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/30 rounded-3xl" />
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-ink text-ivory rounded-full px-6 py-3 text-xs uppercase tracking-luxe whitespace-nowrap shadow-soft">
            Hand-finished · Hallmarked · Certified
          </div>
        </Reveal>
      </div>

      {/* assurance grid */}
      <div className="container-x mt-20">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {ASSURANCE.map((a) => (
            <motion.div key={a.t} variants={fadeUp} className="card-luxe rounded-2xl p-6 text-center hover:border-gold/30 hover:shadow-soft">
              <span className="grid place-items-center h-12 w-12 mx-auto rounded-full bg-ink text-champ"><a.icon size={20} /></span>
              <h4 className="font-display text-lg mt-4">{a.t}</h4>
              <p className="text-xs text-ink/50 font-light mt-1.5 leading-relaxed">{a.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
