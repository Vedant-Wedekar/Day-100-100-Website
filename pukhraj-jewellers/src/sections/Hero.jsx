import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { BRAND, CONTACT } from "../data/content";

const HERO = "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1100&q=80";

// Floating gold particles rendered behind the hero.
function Particles() {
  const dots = useMemo(
    () => Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 3 + Math.random() * 7,
      delay: Math.random() * 4,
      dur: 5 + Math.random() * 6,
    })),
    []
  );
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {dots.map((d) => (
        <motion.span key={d.id}
          className="absolute rounded-full"
          style={{ left: `${d.left}%`, top: `${d.top}%`, width: d.size, height: d.size,
            background: "radial-gradient(circle,#e7cd92,#c39b4e)", boxShadow: "0 0 10px rgba(195,155,78,0.6)" }}
          animate={{ y: [0, -30, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const line = { hidden: { y: "115%" }, show: (i) => ({ y: 0, transition: { delay: 0.7 + i * 0.14, duration: 0.9, ease: [0.22, 1, 0.36, 1] } }) };

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-16"
      style={{ background: "radial-gradient(120% 90% at 80% 20%, rgba(240,205,189,0.5), transparent 55%), radial-gradient(100% 80% at 10% 90%, rgba(231,205,146,0.35), transparent 50%), #fdfbf7" }}>
      <Particles />

      <div className="container-x section-pad grid lg:grid-cols-12 gap-10 items-center w-full">
        {/* copy */}
        <motion.div style={{ y: textY, opacity: fade }} className="lg:col-span-6 order-2 lg:order-1">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-gold shadow-soft">
            <FaStar size={12} /> {BRAND.rating}★ · {BRAND.followers} Instagram Family · {BRAND.city}
          </motion.div>

          <h1 className="font-display text-ink leading-[0.98] mt-5 text-[2.9rem] sm:text-6xl xl:text-7xl">
            {["Meet Nagpur's", "Lightweight"].map((t, i) => (
              <span key={i} className="block overflow-hidden"><motion.span custom={i} variants={line} initial="hidden" animate="show" className="block">{t}</motion.span></span>
            ))}
            <span className="block overflow-hidden"><motion.span custom={2} variants={line} initial="hidden" animate="show" className="block gold-text italic font-medium">Jewellery King</motion.span></span>
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
            className="mt-6 max-w-md text-ink/60 text-base sm:text-lg font-light leading-relaxed">
            Beautiful jewellery crafted with innovative lightweight designs that save gold weight — without compromising an ounce of elegance.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.45 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none">
            <a href="#collections" className="btn-gold group">Explore Collections <FiArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="btn-ghost"><FaWhatsapp size={16} /> WhatsApp Consultation</a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-wide2 text-ink/45">
            <span>★ {BRAND.purity}</span><span>★ {BRAND.makingCharges} Making Charges</span><span>★ Pan-India Shipping</span>
          </motion.div>
        </motion.div>

        {/* showcase */}
        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <motion.div style={{ y: imgY }} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="relative overflow-hidden rounded-t-[160px] rounded-b-3xl aspect-[4/5] max-w-md mx-auto shadow-luxe">
              <img src={HERO} alt="Pukhraj lightweight jewellery" className="h-full w-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/30 rounded-t-[160px] rounded-b-3xl" />
            </div>
            {/* floating weight chip */}
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity }}
              className="absolute -left-2 sm:-left-6 bottom-16 glass shadow-luxe rounded-2xl px-5 py-4">
              <p className="text-[10px] uppercase tracking-wide2 text-gold">This Bridal Haar</p>
              <p className="font-display text-2xl leading-none mt-1">Only <span className="gold-text">18.4g</span></p>
              <p className="text-[11px] text-ink/50 mt-1">vs ~42g traditional</p>
            </motion.div>
            {/* savings badge */}
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }}
              className="absolute -right-1 sm:-right-4 top-10 grid place-items-center h-20 w-20 rounded-full bg-gold-grad text-white text-center shadow-gold">
              <div><p className="font-display text-2xl leading-none">60%</p><p className="text-[8px] uppercase tracking-wide2">Lighter</p></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a href="#why" style={{ opacity: fade }} className="absolute bottom-20 sm:bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-ink/40"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
        <span className="text-[10px] tracking-luxe uppercase">Discover</span>
        <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity }}><FiChevronDown size={20} /></motion.span>
      </motion.a>
    </section>
  );
}
