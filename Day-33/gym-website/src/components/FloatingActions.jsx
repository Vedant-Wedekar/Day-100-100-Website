import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { CONTACT } from "../data/content";

// Floating WhatsApp + Call buttons, plus scroll-to-top.
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Btn = ({ href, label, children, cls }) => (
    <motion.a
      href={href} target="_blank" rel="noreferrer" aria-label={label}
      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}
      className={`grid place-items-center h-13 w-13 sm:h-14 sm:w-14 rounded-full text-white shadow-lg ${cls}`}
      style={{ height: 52, width: 52 }}
    >
      {children}
    </motion.a>
  );

  return (
    <>
      <div className="fixed right-4 sm:right-6 bottom-5 sm:bottom-6 z-40 flex flex-col gap-3">
        <Btn href={`https://wa.me/${CONTACT.whatsapp}`} label="WhatsApp" cls="bg-[#25D366]">
          <FaWhatsapp size={24} />
        </Btn>
        <Btn href={`tel:${CONTACT.phone}`} label="Call now" cls="bg-ember">
          <FaPhoneAlt size={18} />
        </Btn>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ y: -3 }}
            className="fixed left-4 sm:left-6 bottom-5 sm:bottom-6 z-40 grid place-items-center h-12 w-12 rounded-full bg-lime text-ink shadow-glow"
          >
            <FaArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
