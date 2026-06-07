import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { SectionHead } from "../components/Motion";
import { FINDER, CONTACT } from "../data/content";

export default function Finder() {
  const [pick, setPick] = useState(null);
  const sel = FINDER.find((f) => f.occasion === pick);

  return (
    <section className="relative section-pad py-24 sm:py-32 bg-cream">
      <div className="container-x">
        <SectionHead center eyebrow="Jewellery Finder" title="What are you" italic="shopping for?"
          sub="Tap an occasion and we'll point you to the perfect lightweight collections." />

        <div className="mt-12 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!sel ? (
              <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {FINDER.map((f, i) => (
                  <motion.button key={f.occasion} onClick={() => setPick(f.occasion)}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                    whileHover={{ y: -5 }} whileTap={{ scale: 0.97 }}
                    className="card-luxe rounded-2xl p-6 text-center hover:border-gold/40 hover:shadow-soft">
                    <span className="text-4xl">{f.emoji}</span>
                    <p className="mt-3 font-display text-xl">{f.occasion}</p>
                  </motion.button>
                ))}
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="rounded-3xl glass shadow-luxe p-8 sm:p-10 text-center">
                <span className="text-5xl">{sel.emoji}</span>
                <h3 className="font-display text-3xl mt-4">For your {sel.occasion}</h3>
                <p className="text-ink/55 font-light mt-2 max-w-md mx-auto">{sel.blurb}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                  {sel.picks.map((p) => (
                    <span key={p} className="rounded-full bg-white/70 border border-gold/30 px-4 py-2 text-sm text-ink/70">{p} Collection</span>
                  ))}
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <a href={`https://wa.me/${CONTACT.whatsapp}?text=I'm shopping for ${encodeURIComponent(sel.occasion)} — please recommend lightweight pieces`} target="_blank" rel="noreferrer" className="btn-gold"><FaWhatsapp size={16} /> Get Recommendations</a>
                  <button onClick={() => setPick(null)} className="btn-ghost"><FiArrowLeft /> Start Over</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
