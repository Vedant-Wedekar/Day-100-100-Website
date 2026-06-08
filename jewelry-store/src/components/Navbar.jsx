import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS, RATES } from "../data/content";

// Thin top utility bar showing live metal rates (UI only).
function RatesBar() {
  return (
    <div className="hidden md:block bg-ink text-ivory/80 text-[11px] tracking-wide2">
      <div className="container-x section-pad flex items-center justify-between h-9">
        <div className="flex items-center gap-6">
          <span>{RATES.gold.label} <b className="text-champ">{RATES.gold.value}</b>{RATES.gold.unit}
            <span className="text-green-400 ml-1">{RATES.gold.change}</span></span>
          <span className="text-ivory/20">|</span>
          <span>{RATES.silver.label} <b className="text-champ">{RATES.silver.value}</b>{RATES.silver.unit}
            <span className="text-red-400 ml-1">{RATES.silver.change}</span></span>
        </div>
        <div className="flex items-center gap-5 uppercase">
          <span className="text-champ">✦ EMI Available</span>
          <span>BIS Hallmarked · Lifetime Exchange</span>
        </div>
      </div>
    </div>
  );
}

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -120 }} animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50"
      >
        <RatesBar />
        <div className={`transition-all duration-300 ${scrolled ? "bg-ivory/90 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
          <nav className="container-x section-pad flex items-center justify-between h-16 sm:h-20">
            <button onClick={() => setOpen(true)} className="lg:hidden grid place-items-center h-11 w-11 -ml-2" aria-label="Open menu">
              <FiMenu size={24} />
            </button>

            <a href="#home" className="font-display text-[1.4rem] sm:text-4xl tracking-[0.12em] sm:tracking-[0.2em] text-ink absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
              AURELIA
            </a>

            <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`}
                    className={`relative text-xs uppercase tracking-wide2 transition-colors ${active === l.id ? "text-gold" : "text-ink/70 hover:text-ink"}`}>
                    {l.label}
                    {active === l.id && <motion.span layoutId="navline" className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold" />}
                  </a>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-gold !px-5 !py-2.5 !text-xs scale-90 sm:scale-100 whitespace-nowrap shrink-0">Book Visit</a>
          </nav>
        </div>
      </motion.header>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              className="absolute left-0 top-0 h-full w-[80%] max-w-sm bg-ivory flex flex-col pt-8 px-7"
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 250 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl tracking-[0.2em]">AURELIA</span>
                <button onClick={() => setOpen(false)} className="grid place-items-center h-11 w-11" aria-label="Close menu"><FiX size={24} /></button>
              </div>
              <div className="hair-divider my-6" />
              <ul className="space-y-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.li key={l.id} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 + i * 0.05 }}>
                    <a href={`#${l.id}`} onClick={() => setOpen(false)}
                      className={`block py-2.5 font-display text-3xl ${active === l.id ? "text-gold" : "text-ink/80"}`}>{l.label}</a>
                  </motion.li>
                ))}
              </ul>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-8">Book Store Visit</a>
              <p className="mt-auto pb-8 pt-6 text-xs text-ink/40 tracking-wide2">{RATES.gold.label} {RATES.gold.value}{RATES.gold.unit} · EMI Available</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
