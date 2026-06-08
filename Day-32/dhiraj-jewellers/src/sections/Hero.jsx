import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { BRAND, CONTACT } from "../data/content";

const HERO = "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1100&q=80";

function Twinkles() {
  const dots = useMemo(() => Array.from({ length: 22 }).map((_, i) => ({
    id: i, left: Math.random() * 100, top: Math.random() * 100, size: 2 + Math.random() * 4, delay: Math.random() * 3, dur: 2.5 + Math.random() * 3,
  })), []);
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {dots.map((d) => (
        <span key={d.id} className="absolute rounded-full animate-twinkle"
          style={{ left: `${d.left}%`, top: `${d.top}%`, width: d.size, height: d.size, background: "#e8cf8f", boxShadow: "0 0 8px #caa24a", animationDelay: `${d.delay}s`, animationDuration: `${d.dur}s` }} />
      ))}
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const word = { hidden: { y: "115%" }, show: (i) => ({ y: 0, transition: { delay: 0.6 + i * 0.13, duration: 0.9, ease: [0.22, 1, 0.36, 1] } }) };

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden text-center pt-28 pb-16"
      style={{ background: "radial-gradient(120% 80% at 50% 0%, #3d1419, #140a0c 65%)" }}>
      <Twinkles />
      {/* faint mandala ring */}
      <motion.div style={{ opacity: fade }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[140vw] max-h-[900px] w-[140vw] max-w-[900px] rounded-full border border-gold/10 animate-spinslow" />
      <motion.div style={{ opacity: fade }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[100vw] max-h-[650px] w-[100vw] max-w-[650px] rounded-full border border-gold/10" />

      <motion.div style={{ opacity: fade }} className="container-x section-pad w-full flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-gold">
          <FaStar size={12} /> {BRAND.rating}★ · {BRAND.reviews} Reviews · Est. {BRAND.since}
        </motion.div>

        {/* ornamental arch image */}
        <motion.div style={{ y: imgY }} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-8 mb-2">
          <div className="relative h-44 w-44 sm:h-52 sm:w-52 overflow-hidden rounded-t-full border-2 border-gold/40 shadow-gold mx-auto">
            <img src={HERO} alt="Dhiraj jewellery" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -inset-3 rounded-t-full border border-gold/20 -z-10" />
        </motion.div>

        <h1 className="font-display text-cream leading-[0.98] mt-4 text-[2.7rem] sm:text-6xl xl:text-7xl">
          <span className="block overflow-hidden"><motion.span custom={0} variants={word} initial="hidden" animate="show" className="block">Where Elegance</motion.span></span>
          <span className="block overflow-hidden"><motion.span custom={1} variants={word} initial="hidden" animate="show" className="block">Meets <em className="gold-text not-italic italic font-medium">Tradition</em></motion.span></span>
        </h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="mt-6 max-w-xl text-cream/60 text-base sm:text-lg font-light leading-relaxed">
          Nagpur's trusted home for the latest & traditional gold, diamond and silver jewellery — crafted with timeless artistry since {BRAND.since}.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35 }}
          className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-md">
          <a href="#collections" className="btn-gold group">Explore Collections <FiArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
          <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="btn-ghost"><FaWhatsapp size={16} /> Book Appointment</a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-wide2 text-cream/45">
          <span>✦ {BRAND.purity}</span><span>✦ 100% Exchange</span><span>✦ {BRAND.making} Making Charges</span>
        </motion.div>
      </motion.div>

      <motion.a href="#heritage" style={{ opacity: fade }} className="absolute bottom-20 sm:bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-cream/40"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}>
        <span className="text-[10px] tracking-luxe uppercase">Discover</span>
        <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity }}><FiChevronDown size={20} /></motion.span>
      </motion.a>
    </section>
  );
}
