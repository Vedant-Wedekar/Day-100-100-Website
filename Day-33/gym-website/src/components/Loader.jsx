import { motion } from "framer-motion";

// Full-screen branded loader with animated bar + page-curtain exit.
export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-head text-5xl sm:text-7xl uppercase tracking-tight"
      >
        IRON<span className="grad-text">PULSE</span>
      </motion.div>

      <div className="mt-8 h-[3px] w-56 sm:w-72 overflow-hidden rounded-full bg-ash">
        <motion.div
          className="h-full bg-gradient-to-r from-lime to-ember"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
      <motion.p
        className="mt-5 text-xs tracking-[0.4em] uppercase text-bone/40"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
      >
        Forging your session
      </motion.p>
    </motion.div>
  );
}
