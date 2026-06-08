import { motion } from "framer-motion";
import { SectionHead, stagger, fadeUp } from "../components/Motion";
import { FACILITIES } from "../data/content";

export default function Facilities() {
  return (
    <section id="facilities" className="relative section-pad py-24 sm:py-32 bg-char/40">
      <div className="container-x">
        <SectionHead center eyebrow="Facilities" title="World-Class" accent="Spaces"
          sub="Every square foot engineered for performance, recovery and zero waiting around." />

        <motion.div
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-4"
        >
          {FACILITIES.map((f) => (
            <motion.article key={f.title} variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl ${f.span || ""}`}>
              <img src={f.img} alt={f.title}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <h3 className="font-head text-xl sm:text-2xl uppercase">{f.title}</h3>
                <p className="text-xs sm:text-sm text-bone/60 max-w-[22ch] mt-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">{f.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
