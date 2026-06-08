import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { SectionHead, stagger, fadeUp } from "../components/Motion";
import { OFFERS } from "../data/content";

export default function Offers() {
  return (
    <section className="relative section-pad py-24 sm:py-32 bg-ivory">
      <div className="container-x">
        <SectionHead center eyebrow="This Season" title="Special" italic="offers"
          sub="Thoughtfully timed for festivals, weddings and new beginnings." />

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid md:grid-cols-3 gap-5">
          {OFFERS.map((o) => (
            <motion.a href="#contact" key={o.title} variants={fadeUp} whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl p-8 sm:p-9 min-h-[230px] flex flex-col justify-between bg-gradient-to-br ${o.accent} text-ivory`}>
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-ivory/10 blur-2xl group-hover:bg-ivory/20 transition-colors" />
              <span className="text-[10px] uppercase tracking-luxe text-ivory/80">{o.note}</span>
              <div>
                <h3 className="font-display text-3xl sm:text-4xl leading-tight">{o.title}</h3>
                <p className="text-ivory/85 font-light mt-2">{o.sub}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wide2">
                  Claim Offer <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* EMI banner */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-6 rounded-3xl border border-gold/30 bg-cream/60 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-display text-2xl sm:text-3xl">No-Cost EMI Available</p>
            <p className="text-ink/55 font-light text-sm mt-1">Own it today, pay over 3–24 months. On purchases above ₹25,000.</p>
          </div>
          <a href="#contact" className="btn-gold whitespace-nowrap">Check Eligibility</a>
        </motion.div>
      </div>
    </section>
  );
}
