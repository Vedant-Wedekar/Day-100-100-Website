import { motion } from "framer-motion";

// Branded loader with a drawn gold line + curtain exit.
export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        animate={{ opacity: 1, letterSpacing: "0.28em" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-display text-5xl sm:text-7xl tracking-luxe text-ink"
      >
        AURELIA
      </motion.div>

      <div className="mt-7 h-px w-52 sm:w-64 overflow-hidden bg-sand">
        <motion.div
          className="h-full bg-gold-grad"
          initial={{ width: "0%" }} animate={{ width: "100%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </div>
      <motion.p
        className="mt-5 text-[10px] tracking-luxe uppercase text-ink/40"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
      >
        Fine Jewellery · Est. 1949
      </motion.p>
    </motion.div>
  );
}
