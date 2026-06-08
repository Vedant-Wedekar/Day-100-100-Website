import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Reveal, SectionHead } from "../components/Motion";
import { STATS } from "../data/content";

// Counts up to `value` once scrolled into view.
function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2, ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="relative section-pad py-24 sm:py-32">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* image collage */}
        <Reveal className="relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80"
              alt="Gym interior" className="h-full w-full object-cover" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-2 sm:-right-6 glass rounded-2xl p-5 sm:p-6 shadow-glow"
          >
            <p className="font-head text-4xl sm:text-5xl grad-text">15+</p>
            <p className="text-xs sm:text-sm text-bone/70 mt-1">Years building champions</p>
          </motion.div>
          <div className="absolute -top-5 -left-3 hidden sm:block h-24 w-24 border-2 border-lime/40 rounded-2xl" />
        </Reveal>

        {/* copy + mission/vision */}
        <div>
          <SectionHead eyebrow="About IRONPULSE" title="More Than A Gym." accent="A Forge."
            sub="Since 2010 we've built a temple of iron where ambition meets discipline. No egos, no shortcuts — just relentless progress backed by elite coaching and a community that shows up." />

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            <Reveal delay={0.1} className="glass rounded-2xl p-6">
              <h4 className="font-head text-xl uppercase text-lime">Our Mission</h4>
              <p className="mt-2 text-sm text-bone/65 leading-relaxed">Make world-class strength training accessible, so every member leaves stronger than they arrived.</p>
            </Reveal>
            <Reveal delay={0.2} className="glass rounded-2xl p-6">
              <h4 className="font-head text-xl uppercase text-ember">Our Vision</h4>
              <p className="mt-2 text-sm text-bone/65 leading-relaxed">A culture where discipline becomes identity and every goal is just the next rep waiting to be hit.</p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* stats strip */}
      <div className="container-x mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}
            className="glass rounded-2xl p-6 sm:p-8 text-center hover:border-lime/40 transition-colors">
            <p className="font-head text-4xl sm:text-5xl lg:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs sm:text-sm text-bone/55 uppercase tracking-wide">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
