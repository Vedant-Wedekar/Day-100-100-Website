import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { SectionHead, stagger, fadeUp } from "../components/Motion";
import { BRIDAL, CONTACT } from "../data/content";

export default function Bridal() {
  return (
    <section id="bridal" className="relative section-pad py-24 sm:py-32 bg-ink text-ivory">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Bridal &amp; Wedding</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 leading-[1.02]">
              For the day you'll <em className="gold-text not-italic italic font-medium">never forget.</em>
            </h2>
            <p className="mt-5 text-ivory/55 font-light text-base sm:text-lg leading-relaxed">
              Bridal sets, engagement solitaires and wedding bands — designed to be passed down as heirlooms.
            </p>
          </div>
          <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-7 py-3.5 text-sm uppercase tracking-wide2 hover:border-gold hover:text-gold transition-colors shrink-0">
            Plan Your Bridal Look <FiArrowRight />
          </a>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] gap-4">
          {BRIDAL.map((b) => (
            <motion.article key={b.title} variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl ${b.span || ""}`}>
              <img src={b.img} alt={b.title} loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1.1s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-champ/20 rounded-2xl" />
              <h3 className="absolute bottom-4 left-4 font-display text-xl sm:text-2xl">{b.title}</h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
