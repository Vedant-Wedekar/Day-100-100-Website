import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { SectionHead } from "../components/Motion";
import { FAQ } from "../data/content";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative section-pad py-24 sm:py-32 bg-maroon/20">
      <div className="container-x max-w-3xl">
        <SectionHead center eyebrow="Good to Know" title="Questions, " italic="answered" />
        <div className="mt-12 space-y-3">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={f.q} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className={`rounded-sm border transition-colors ${isOpen ? "border-gold/40 bg-maroon/40" : "border-gold/15 bg-night/30"}`}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                  <span className="font-display text-lg sm:text-xl text-cream">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className={`grid place-items-center h-8 w-8 rounded-full shrink-0 ${isOpen ? "bg-gold text-night" : "bg-night text-gold/60"}`}><FiPlus size={18} /></motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-cream/60 font-light leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
