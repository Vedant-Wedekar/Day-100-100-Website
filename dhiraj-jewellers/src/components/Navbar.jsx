import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { NAV_LINKS, RATES, BRAND, CONTACT } from "../data/content";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  return <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 z-[55] h-[3px] origin-left bg-gold-grad" />;
}

function RatesBar() {
  return (
    <div className="hidden lg:block bg-night/95 text-cream/75 text-[11px] tracking-wide2 border-b border-gold/10">
      <div className="container-x section-pad flex items-center justify-between h-9">
        <div className="flex items-center gap-5">
          <span>{RATES.gold22.label} <b className="text-goldLt">{RATES.gold22.value}</b>{RATES.gold22.unit}<span className="text-emLt ml-1">{RATES.gold22.change}</span></span>
          <span className="text-cream/20">|</span>
          <span>{RATES.silver.label} <b className="text-goldLt">{RATES.silver.value}</b>{RATES.silver.unit}</span>
        </div>
        <div className="flex items-center gap-5 uppercase">
          <span className="text-goldLt">✦ 100% Old Gold Exchange</span>
          <span>{BRAND.purity} · {BRAND.making} Making</span>
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
      <ScrollProgress />
      <motion.header initial={{ y: -120 }} animate={{ y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50">
        <RatesBar />
        <div className={`transition-all duration-300 ${scrolled ? "bg-night/90 backdrop-blur-md border-b border-gold/15 shadow-royal" : "bg-transparent"}`}>
          <nav className="container-x section-pad flex items-center justify-between h-16 sm:h-20">
            <button onClick={() => setOpen(true)} className="lg:hidden grid place-items-center h-11 w-11 -ml-2 text-cream" aria-label="Open menu"><FiMenu size={24} /></button>

            <a href="#home" className="flex flex-col items-center lg:items-start absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 leading-none shrink-0">
              <span className="font-display italic text-2xl sm:text-3xl lg:text-2xl xl:text-3xl text-cream">Dhiraj</span>
              <span className="text-[8px] sm:text-[9px] tracking-luxe uppercase text-gold mt-0.5">Jewellers · Est. {BRAND.since}</span>
            </a>

            <ul className="hidden lg:flex items-center gap-4 xl:gap-7 mx-auto lg:mx-4">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className={`relative text-[11px] xl:text-xs uppercase tracking-wide2 whitespace-nowrap transition-colors ${active === l.id ? "text-gold" : "text-cream/70 hover:text-cream"}`}>
                    {l.label}
                    {active === l.id && <motion.span layoutId="navline" className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold" />}
                  </a>
                </li>
              ))}
            </ul>

            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="btn-gold !px-4 sm:!px-5 !py-2.5 !text-[11px] sm:!text-xs scale-95 sm:scale-100 shrink-0">
              <FaWhatsapp size={15} /> <span className="hidden xs:inline">Enquire</span>
            </a>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-night/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div className="absolute left-0 top-0 h-full w-[80%] max-w-sm bg-maroon flex flex-col pt-8 px-7 border-r border-gold/20"
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", damping: 28, stiffness: 250 }}>
              <div className="flex items-center justify-between">
                <div className="leading-none">
                  <p className="font-display italic text-3xl text-cream">Dhiraj</p>
                  <p className="text-[9px] tracking-luxe uppercase text-gold mt-1">Jewellers · Est. {BRAND.since}</p>
                </div>
                <button onClick={() => setOpen(false)} className="grid place-items-center h-11 w-11 text-cream" aria-label="Close"><FiX size={24} /></button>
              </div>
              <div className="hair my-6" />
              <ul className="space-y-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.li key={l.id} initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 + i * 0.05 }}>
                    <a href={`#${l.id}`} onClick={() => setOpen(false)} className={`block py-2.5 font-display text-2xl ${active === l.id ? "text-gold" : "text-cream/80"}`}>{l.label}</a>
                  </motion.li>
                ))}
              </ul>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="btn-gold mt-8"><FaWhatsapp size={16} /> WhatsApp Enquiry</a>
              <p className="mt-auto pb-8 pt-6 text-xs text-cream/40 tracking-wide2">{BRAND.purity} · {BRAND.making} Making</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
