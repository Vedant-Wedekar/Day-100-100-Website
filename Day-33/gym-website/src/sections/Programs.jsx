import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { SectionHead, stagger, fadeUp } from "../components/Motion";
import { PROGRAMS } from "../data/content";

// Infinite marquee of motivational keywords.
function Marquee() {
  const words = ["NO EXCUSES", "TRAIN HARD", "STAY HUNGRY", "OUTWORK EVERYONE", "EARN IT", "PUSH LIMITS"];
  return (
    <div className="relative overflow-hidden py-5 border-y border-white/10 my-16 sm:my-20">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0">
            {words.map((w, i) => (
              <span key={i} className="flex items-center font-head text-2xl sm:text-4xl uppercase text-bone/30 px-6">
                {w} <span className="text-lime px-6">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="relative section-pad py-24 sm:py-32 bg-char/40">
      <div className="container-x">
        <SectionHead center eyebrow="Programs" title="Train With" accent="Purpose"
          sub="Whatever your goal, there's a proven path here. Pick your battle — our coaches handle the strategy." />

        <motion.div
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {PROGRAMS.map((p) => {
            const Icon = p.icon;
            return (
              <motion.article key={p.title} variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl glass p-7 cursor-pointer hover:border-lime/40 transition-colors"
              >
                {/* hover glow */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-lime/0 group-hover:bg-lime/15 blur-2xl transition-colors duration-500" />
                <div className="flex items-center justify-between">
                  <div className="grid place-items-center h-14 w-14 rounded-xl bg-ink/60 text-lime group-hover:bg-lime group-hover:text-ink transition-colors">
                    <Icon size={26} />
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-bone/40 border border-white/10 rounded-full px-3 py-1">{p.tag}</span>
                </div>
                <h3 className="font-head text-2xl uppercase mt-6 group-hover:text-lime transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-bone/60 leading-relaxed">{p.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-lime opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                  Explore <FiArrowUpRight />
                </span>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
      <Marquee />
    </section>
  );
}
