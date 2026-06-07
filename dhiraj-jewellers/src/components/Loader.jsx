import { motion } from "framer-motion";
import { BRAND } from "../data/content";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-night"
      initial={{ opacity: 1 }} exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative grid place-items-center">
        <motion.div className="absolute h-32 w-32 rounded-full border border-gold/25"
          animate={{ rotate: 360 }} transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          style={{ borderTopColor: "#caa24a", borderBottomColor: "#caa24a" }} />
        <motion.div className="absolute h-24 w-24 rounded-full border border-gold/20"
          animate={{ rotate: -360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          style={{ borderLeftColor: "#e8cf8f", borderRightColor: "#e8cf8f" }} />
        <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }} className="font-display italic text-5xl gold-text">D</motion.span>
      </div>

      <motion.p initial={{ opacity: 0, letterSpacing: "0.6em" }} animate={{ opacity: 1, letterSpacing: "0.32em" }}
        transition={{ duration: 1, delay: 0.2 }} className="mt-9 font-display text-2xl sm:text-3xl tracking-luxe text-cream uppercase">
        Dhiraj
      </motion.p>
      <div className="mt-5 h-px w-48 overflow-hidden bg-maroon">
        <motion.div className="h-full bg-gold-grad" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.6, ease: "easeInOut" }} />
      </div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="mt-4 text-[10px] tracking-luxe uppercase text-cream/40">
        Jewellers · Since {BRAND.since}
      </motion.p>
    </motion.div>
  );
}
