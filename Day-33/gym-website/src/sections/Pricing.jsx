import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { SectionHead, stagger, fadeUp } from "../components/Motion";
import { PLANS } from "../data/content";

export default function Pricing() {
  return (
    <section id="pricing" className="relative section-pad py-24 sm:py-32 bg-char/40">
      <div className="container-x">
        <SectionHead center eyebrow="Membership" title="Plans Built To" accent="Commit"
          sub="No hidden fees, cancel anytime. Pick the runway that matches your ambition." />

        <motion.div
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch"
        >
          {PLANS.map((p) => (
            <motion.div key={p.name} variants={fadeUp}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col ${
                p.featured
                  ? "bg-gradient-to-b from-lime/15 to-char border-2 border-lime shadow-glow md:-mt-4 md:mb-4"
                  : "glass"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime px-4 py-1 text-xs font-bold text-ink uppercase tracking-wide">
                  Recommended
                </span>
              )}
              <h3 className="font-head text-2xl uppercase">{p.name}</h3>
              <p className="text-sm text-bone/55 mt-1">{p.desc}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="font-head text-5xl sm:text-6xl">${p.price}</span>
                <span className="text-bone/50 mb-2">{p.period}</span>
              </div>
              <ul className="mt-7 space-y-3 flex-1">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm text-bone/75">
                    <span className={`mt-0.5 grid place-items-center h-5 w-5 rounded-full shrink-0 ${p.featured ? "bg-lime text-ink" : "bg-ash text-lime"}`}>
                      <FiCheck size={13} />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
              <a href="#contact"
                className={`mt-8 inline-flex justify-center rounded-full px-6 py-4 font-bold transition-all ${
                  p.featured ? "bg-lime text-ink hover:shadow-glow" : "glass hover:border-lime/50"
                }`}>
                Choose {p.name}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
