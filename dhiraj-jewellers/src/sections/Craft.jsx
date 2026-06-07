import { motion } from "framer-motion";
import { FaGem, FaExchangeAlt, FaCertificate, FaHandHoldingHeart } from "react-icons/fa";
import { SectionHead, stagger, fadeUp } from "../components/Motion";
import { CRAFT } from "../data/content";

const ICONS = [FaGem, FaCertificate, FaExchangeAlt, FaHandHoldingHeart];

export default function Craft() {
  return (
    <section className="relative section-pad py-24 sm:py-32 bg-maroon/20">
      <div className="container-x">
        <SectionHead center eyebrow="Why Dhiraj" title="Trust, built over" italic="generations"
          sub="Four promises that have made us Manewada's most loved jeweller since 1996." />

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CRAFT.map((c, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div key={c.no} variants={fadeUp} className="card-royal rounded-sm p-7 hover:border-gold/40 hover:shadow-gold group">
                <div className="flex items-center justify-between">
                  <span className="grid place-items-center h-12 w-12 rounded-full bg-night text-gold group-hover:bg-gold group-hover:text-night transition-colors"><Icon size={20} /></span>
                  <span className="font-display text-4xl text-gold/20">{c.no}</span>
                </div>
                <h4 className="font-display text-xl mt-5 text-cream">{c.title}</h4>
                <p className="text-sm text-cream/55 font-light mt-1.5 leading-relaxed">{c.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
