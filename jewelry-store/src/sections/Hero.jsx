import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";

const HERO = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=80";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const line = { hidden: { y: "115%" }, show: (i) => ({ y: 0, transition: { delay: 0.7 + i * 0.14, duration: 0.9, ease: [0.22, 1, 0.36, 1] } }) };

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden bg-ivory pt-24">
      {/* soft radial atmosphere */}
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(120% 80% at 75% 30%, rgba(205,175,124,0.18), transparent 60%)" }} />

      <div className="container-x section-pad grid lg:grid-cols-12 gap-10 items-center w-full">
        {/* copy */}
        <motion.div style={{ y: textY, opacity: fade }} className="lg:col-span-6 order-2 lg:order-1">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="eyebrow">
            Fine Jewellery · Est. 1949
          </motion.span>

          <h1 className="font-display text-ink leading-[0.95] mt-5 text-[3.3rem] sm:text-7xl xl:text-8xl">
            {["Worn Today,", "Treasured"].map((t, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span custom={i} variants={line} initial="hidden" animate="show" className="block">{t}</motion.span>
              </span>
            ))}
            <span className="block overflow-hidden">
              <motion.span custom={2} variants={line} initial="hidden" animate="show" className="block gold-text italic font-medium">Forever.</motion.span>
            </span>
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
            className="mt-6 max-w-md text-ink/55 text-base sm:text-lg font-light leading-relaxed">
            Heirloom-grade gold, diamond and bridal jewellery — handcrafted by master artisans and certified for generations to come.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.45 }}
            className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none">
            <a href="#collections" className="btn-gold group">Explore Collection <FiArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
            <a href="#contact" className="btn-ghost">Book Appointment</a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
            className="mt-10 flex items-center gap-6 text-xs uppercase tracking-wide2 text-ink/45">
            <span>✦ BIS Hallmarked</span><span>✦ Certified Diamonds</span><span className="hidden sm:inline">✦ Lifetime Exchange</span>
          </motion.div>
        </motion.div>

        {/* featured showcase image */}
        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <motion.div style={{ y: imgY }}
            initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative">
            <div className="relative overflow-hidden rounded-t-[180px] rounded-b-3xl aspect-[4/5] max-w-md mx-auto shadow-soft">
              <img src={HERO} alt="Featured jewellery" className="h-full w-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/30 rounded-t-[180px] rounded-b-3xl" />
            </div>
            {/* floating featured chip */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}
              className="absolute -left-2 sm:-left-6 bottom-12 bg-ivory shadow-soft rounded-2xl px-5 py-4 border border-ink/8">
              <p className="text-[10px] uppercase tracking-wide2 text-gold">Featured</p>
              <p className="font-display text-xl leading-tight mt-1">The Solitaire<br />Edit</p>
            </motion.div>
            <div className="absolute -top-4 -right-2 hidden sm:block h-20 w-20 border border-gold/40 rounded-full animate-floaty" />
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.a href="#about" style={{ opacity: fade }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-ink/40"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
        <span className="text-[10px] tracking-luxe uppercase">Discover</span>
        <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity }}><FiChevronDown size={20} /></motion.span>
      </motion.a>
    </section>
  );
}
