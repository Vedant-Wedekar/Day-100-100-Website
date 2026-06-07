import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { stagger, fadeUp } from "../components/Motion";
import { BRIDAL, CONTACT } from "../data/content";

export default function Bridal() {
  return (
    <section id="bridal" className="relative section-pad py-24 sm:py-32 bg-gradient-to-b from-maroon/40 to-night overflow-x-hidden">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Bridal & Traditional</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 leading-[1.05] text-cream">
              For the day you'll <em className="gold-text not-italic italic font-medium">always cherish.</em>
            </h2>
            <p className="mt-5 text-cream/55 font-light text-base sm:text-lg leading-relaxed">
              Complete bridal sets, temple jewellery, polki and kundan — heirlooms designed to be passed down generations.
            </p>
          </div>
          <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="btn-ghost shrink-0">Plan Your Bridal Look <FiArrowRight /></a>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] gap-4">
          {BRIDAL.map((b) => (
            <motion.article key={b.title} variants={fadeUp} className={`group relative overflow-hidden rounded-sm border border-gold/15 ${b.span || ""}`}>
              <img src={b.img} alt={b.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1.1s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-night/85 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/15" />
              <h3 className="absolute bottom-4 left-4 font-display text-xl sm:text-2xl text-cream">{b.title}</h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
