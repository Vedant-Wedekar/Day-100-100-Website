import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Reveal, SectionHead, stagger, fadeUp } from "../components/Motion";
import { STATS, TRUST, BRAND } from "../data/content";

function Counter({ value, suffix, decimal }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 2, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(decimal ? +v.toFixed(1) : Math.floor(v)) });
    return () => c.stop();
  }, [inView, value, decimal]);
  return <span ref={ref}>{decimal ? n.toFixed(1) : n.toLocaleString("en-IN")}{suffix}</span>;
}

export default function Heritage() {
  return (
    <section id="heritage" className="relative section-pad py-24 sm:py-32 overflow-x-hidden">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-w-0">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-sm aspect-[5/6] ornate">
            <img src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&q=80" alt="Dhiraj showroom" className="h-full w-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
          <div className="absolute -bottom-6 -right-2 sm:-right-6 glass rounded-sm px-6 py-5 shadow-royal text-center">
            <p className="font-display text-4xl sm:text-5xl gold-text">{BRAND.since}</p>
            <p className="text-[10px] uppercase tracking-wide2 text-cream/60 mt-1">Serving Nagpur Since</p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHead eyebrow="Our Heritage" title="A glorious tradition of" italic="excellence."
            sub="Since 1996, Dhiraj Jewellers has been a symbol of trust and quality in Manewada, Nagpur. From timeless temple designs to the latest contemporary trends, every masterpiece tells a story of unmatched craftsmanship — where elegance truly meets tradition." />

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            className="mt-8 grid sm:grid-cols-2 gap-4">
            {TRUST.map((t) => (
              <motion.div key={t.title} variants={fadeUp} className="border-l-2 border-gold/40 pl-5 py-1">
                <h4 className="font-display text-xl text-cream">{t.title}</h4>
                <p className="mt-1 text-sm text-cream/55 font-light leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container-x mt-16 sm:mt-24">
        <div className="hair mb-12" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-4xl sm:text-5xl lg:text-6xl gold-text"><Counter value={s.value} suffix={s.suffix} decimal={s.decimal} /></p>
              <p className="mt-2 text-[11px] sm:text-xs uppercase tracking-wide2 text-cream/50">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
