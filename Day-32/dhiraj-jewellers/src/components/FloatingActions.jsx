import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { CONTACT } from "../data/content";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Btn = ({ href, label, children, cls }) => (
    <motion.a href={href} target="_blank" rel="noreferrer" aria-label={label}
      whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
      className={`grid place-items-center rounded-full text-white shadow-royal ${cls}`} style={{ height: 52, width: 52 }}>
      {children}
    </motion.a>
  );

  return (
    <>
      <div className="fixed right-4 sm:right-6 bottom-20 sm:bottom-6 z-40 flex-col gap-3 hidden sm:flex">
        <Btn href={`https://wa.me/${CONTACT.whatsapp}`} label="WhatsApp" cls="bg-[#25D366]"><FaWhatsapp size={24} /></Btn>
        <Btn href={`tel:+91${CONTACT.phoneRaw}`} label="Call now" cls="bg-gold !text-night"><FaPhoneAlt size={17} /></Btn>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} whileHover={{ y: -3 }}
            className="fixed left-4 sm:left-6 bottom-20 sm:bottom-6 z-40 grid place-items-center h-12 w-12 rounded-full bg-gold text-night shadow-royal">
            <FiArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* mobile sticky CTA */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-night/95 backdrop-blur border-t border-gold/20 px-3 py-2.5 flex gap-2">
        <a href={`tel:+91${CONTACT.phoneRaw}`} className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm border border-gold/40 text-cream py-3 text-sm font-semibold"><FaPhoneAlt size={14} /> Call</a>
        <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] text-white py-3 text-sm font-semibold"><FaWhatsapp size={16} /> WhatsApp</a>
        <a href="#visit" className="flex-1 inline-flex items-center justify-center gap-2 btn-gold !py-3 !px-0 !text-sm">Visit</a>
      </div>
    </>
  );
}
