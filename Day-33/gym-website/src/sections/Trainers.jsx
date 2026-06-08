import { motion } from "framer-motion";
import { FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { SectionHead, stagger, fadeUp } from "../components/Motion";
import { TRAINERS } from "../data/content";

export default function Trainers() {
  return (
    <section id="trainers" className="relative section-pad py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHead eyebrow="The Team" title="Coaches Who" accent="Care"
            sub="Certified, battle-tested and genuinely invested in your progress." />
          <p className="text-bone/40 text-sm md:max-w-xs">Every coach holds national certifications and years of competitive experience.</p>
        </div>

        <motion.div
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {TRAINERS.map((t) => (
            <motion.article key={t.name} variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={t.img} alt={t.name}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

              {/* socials slide in */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                {[FaInstagram, FaXTwitter, FaLinkedinIn].map((Ic, i) => (
                  <a key={i} href="#" className="grid place-items-center h-9 w-9 rounded-full glass text-bone hover:bg-lime hover:text-ink transition-colors">
                    <Ic size={15} />
                  </a>
                ))}
              </div>

              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                <span className="text-[10px] tracking-[0.2em] uppercase text-lime">{t.exp} exp</span>
                <h3 className="font-head text-xl sm:text-2xl uppercase leading-none mt-1">{t.name}</h3>
                <p className="text-xs text-bone/60 mt-1">{t.role}</p>
                <p className="text-[11px] text-bone/40 mt-0.5">{t.spec}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
