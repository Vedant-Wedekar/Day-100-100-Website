import { motion } from "framer-motion";
import { BRAND } from "../data/content";

// Branded loader: monogram + drawn gold line + curtain exit.
export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* rotating ring monogram */}
      <div className="relative grid place-items-center">
        <motion.div
          className="absolute h-28 w-28 rounded-full border border-gold/30"
          animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ borderTopColor: "#c39b4e", borderRightColor: "#dba38a" }}
        />
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-5xl gold-text"
        >
          P
        </motion.span>
      </div>

      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.5em" }} animate={{ opacity: 1, letterSpacing: "0.3em" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-8 font-display text-2xl sm:text-3xl tracking-luxe text-ink uppercase"
      >
        Pukhraj
      </motion.p>

      <div className="mt-5 h-px w-48 overflow-hidden bg-sand">
        <motion.div className="h-full bg-gold-grad" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.6, ease: "easeInOut" }} />
      </div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="mt-4 text-[10px] tracking-luxe uppercase text-ink/40">
        {BRAND.tagline}
      </motion.p>
    </motion.div>
  );
}
