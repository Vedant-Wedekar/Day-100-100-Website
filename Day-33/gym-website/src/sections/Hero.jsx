import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowDownRight, FiChevronDown } from "react-icons/fi";

const HERO_IMG =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);          // parallax image
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const word = { hidden: { y: "110%" }, show: (i) => ({ y: 0, transition: { delay: 0.6 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] } }) };

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img src={HERO_IMG} alt="Athlete training" className="h-[115%] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />
      </motion.div>

      {/* animated glow blobs */}
      <motion.div className="absolute -z-10 top-1/4 right-[8%] h-72 w-72 rounded-full bg-lime/20 blur-[100px]"
        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 6, repeat: Infinity }} />
      <motion.div className="absolute -z-10 bottom-1/3 left-[5%] h-64 w-64 rounded-full bg-ember/20 blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 7, repeat: Infinity }} />

      <motion.div style={{ y: textY, opacity: fade }} className="container-x section-pad pb-24 sm:pb-28 pt-32 w-full">
        <motion.span
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs sm:text-sm font-medium text-lime tracking-wide"
        >
          <span className="h-2 w-2 rounded-full bg-lime animate-pulse" /> #1 Strength & Conditioning Gym
        </motion.span>

        <h1 className="font-head uppercase leading-[0.85] mt-6 text-[3.4rem] xs:text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">
          {["Forge Your", "Strongest"].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span custom={i} variants={word} initial="hidden" animate="show" className="block">
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span custom={2} variants={word} initial="hidden" animate="show" className="block grad-text">
              Self.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="mt-6 max-w-md text-bone/70 text-base sm:text-lg leading-relaxed"
        >
          Elite coaching, world-class equipment and a community that refuses to quit. Your transformation starts the moment you walk in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35 }}
          className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none"
        >
          <a href="#pricing" className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-4 font-bold text-ink hover:shadow-glow transition-all">
            Join Now <FiArrowDownRight className="group-hover:rotate-45 transition-transform" />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-4 font-semibold hover:border-lime/50 transition-colors">
            Book Free Trial
          </a>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.a href="#about" style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bone/50"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <FiChevronDown size={22} />
        </motion.span>
      </motion.a>
    </section>
  );
}
