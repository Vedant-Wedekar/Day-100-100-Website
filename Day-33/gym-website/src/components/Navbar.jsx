import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS } from "../data/content";

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-black/40" : "bg-transparent"
        }`}
      >
        <nav className="container-x section-pad flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="font-head text-2xl sm:text-3xl uppercase tracking-tight">
            IRON<span className="grad-text">PULSE</span>
          </a>

          {/* desktop links */}
          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative text-sm font-medium transition-colors ${
                    active === l.id ? "text-lime" : "text-bone/70 hover:text-bone"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span layoutId="navdot" className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-lime" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden sm:inline-flex items-center rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-ink hover:shadow-glow transition-shadow">
              Join Now
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid place-items-center h-11 w-11 rounded-full glass"
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 h-full w-[78%] max-w-sm glass border-l border-white/10 flex flex-col pt-24 px-7"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
            >
              <ul className="space-y-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.li key={l.id}
                    initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <a href={`#${l.id}`} onClick={() => setOpen(false)}
                      className={`block py-3 font-head text-3xl uppercase ${active === l.id ? "text-lime" : "text-bone/80"}`}>
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a href="#pricing" onClick={() => setOpen(false)}
                className="mt-8 inline-flex justify-center rounded-full bg-lime px-6 py-4 font-bold text-ink">
                Join Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
