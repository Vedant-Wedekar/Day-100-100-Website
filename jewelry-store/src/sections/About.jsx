import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Reveal, SectionHead } from "../components/Motion";
import { STATS } from "../data/content";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 2, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.floor(v)) });
    return () => c.stop();
  }, [inView, value]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="relative section-pad py-24 sm:py-32 bg-ivory">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* image stack */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl aspect-[5/6]">
            <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80" alt="Artisan at work" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-2 sm:-right-6 w-40 sm:w-52 overflow-hidden rounded-2xl shadow-soft border-4 border-ivory">
            <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80" alt="Jewellery detail" className="w-full aspect-square object-cover" />
          </div>
          <div className="absolute -top-5 -left-3 hidden sm:block h-24 w-24 border border-gold/40 rounded-full" />
        </Reveal>

        {/* story */}
        <div className="order-1 lg:order-2">
          <SectionHead eyebrow="Our Heritage" title="Three generations of" italic="quiet mastery."
            sub="Since 1949, the house of Aurelia has shaped precious metal into memory. What began as a single bench in an old bazaar is today a name trusted across generations — built on craftsmanship, integrity and an obsession with detail." />

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            <Reveal delay={0.1} className="border-l-2 border-gold/40 pl-5">
              <h4 className="font-display text-2xl text-ink">Craftsmanship</h4>
              <p className="mt-1.5 text-sm text-ink/55 font-light leading-relaxed">Every piece is hand-finished and inspected under magnification before it ever reaches you.</p>
            </Reveal>
            <Reveal delay={0.2} className="border-l-2 border-gold/40 pl-5">
              <h4 className="font-display text-2xl text-ink">Why Aurelia</h4>
              <p className="mt-1.5 text-sm text-ink/55 font-light leading-relaxed">Certified stones, transparent pricing, lifetime exchange and a concierge who remembers your name.</p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* trust stats */}
      <div className="container-x mt-16 sm:mt-24">
        <div className="hair-divider mb-12" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-4xl sm:text-5xl lg:text-6xl gold-text"><Counter value={s.value} suffix={s.suffix} /></p>
              <p className="mt-2 text-[11px] sm:text-xs uppercase tracking-wide2 text-ink/50">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
