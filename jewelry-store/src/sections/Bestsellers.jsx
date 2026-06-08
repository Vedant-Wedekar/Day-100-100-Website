import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart, FaWhatsapp } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { SectionHead, stagger, fadeUp } from "../components/Motion";
import { BESTSELLERS, CONTACT } from "../data/content";

export default function Bestsellers({ onQuickView }) {
  const [wished, setWished] = useState({});
  const toggle = (name) => setWished((w) => ({ ...w, [name]: !w[name] }));

  return (
    <section id="bestsellers" className="relative section-pad py-24 sm:py-32 bg-ivory">
      <div className="container-x">
        <SectionHead center eyebrow="Most Coveted" title="Best" italic="sellers"
          sub="The pieces our patrons return for, again and again." />

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7">
          {BESTSELLERS.map((p) => (
            <motion.article key={p.name} variants={fadeUp} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-cream aspect-[5/6]">
                <img src={p.img} alt={p.name} loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />

                {/* wishlist */}
                <button onClick={() => toggle(p.name)} aria-label="Wishlist"
                  className="absolute top-3 right-3 grid place-items-center h-10 w-10 rounded-full bg-ivory/85 backdrop-blur hover:bg-ivory transition-colors">
                  <motion.span key={String(wished[p.name])} initial={{ scale: 0.4 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400, damping: 14 }}>
                    {wished[p.name] ? <FaHeart className="text-gold" size={17} /> : <FaRegHeart className="text-ink/60" size={17} />}
                  </motion.span>
                </button>

                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wide2 bg-ink/80 text-ivory px-2.5 py-1 rounded-full">{p.tag}</span>

                {/* quick actions */}
                <div className="absolute inset-x-3 bottom-3 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button onClick={() => onQuickView(p)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-ivory/95 backdrop-blur px-3 py-2.5 text-[11px] uppercase tracking-wide2 hover:bg-ivory">
                    <FiEye size={14} /> Quick View
                  </button>
                  <a href={`https://wa.me/${CONTACT.whatsapp}?text=I'm interested in the ${encodeURIComponent(p.name)}`} target="_blank" rel="noreferrer"
                    aria-label="WhatsApp inquiry"
                    className="grid place-items-center h-9 w-9 rounded-full bg-[#25D366] text-white shrink-0">
                    <FaWhatsapp size={16} />
                  </a>
                </div>
              </div>

              <div className="mt-3.5 flex items-start justify-between gap-2">
                <h3 className="font-display text-lg sm:text-xl leading-tight">{p.name}</h3>
              </div>
              <p className="gold-text font-medium text-sm sm:text-base mt-0.5">{p.price}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
