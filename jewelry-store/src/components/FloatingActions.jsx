import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { CONTACT } from "../data/content";

// Floating contact actions + scroll-to-top.
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
      className={`grid place-items-center rounded-full text-white shadow-soft ${cls}`}
      style={{ height: 52, width: 52 }}>
      {children}
    </motion.a>
  );

  return (
    <>
      <div className="fixed right-4 sm:right-6 bottom-5 sm:bottom-6 z-40 flex flex-col gap-3">
        <Btn href={`https://wa.me/${CONTACT.whatsapp}`} label="WhatsApp" cls="bg-[#25D366]"><FaWhatsapp size={24} /></Btn>
        <Btn href={`tel:${CONTACT.phone}`} label="Call now" cls="bg-ink"><FaPhoneAlt size={17} /></Btn>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ y: -3 }}
            className="fixed left-4 sm:left-6 bottom-5 sm:bottom-6 z-40 grid place-items-center h-12 w-12 rounded-full bg-ink text-ivory shadow-soft">
            <FiArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
