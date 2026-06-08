import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart, FaWhatsapp } from "react-icons/fa";
import { SectionHead, stagger, fadeUp } from "../components/Motion";
import { SIGNATURE, CONTACT } from "../data/content";

export default function Signature() {
  const [wished, setWished] = useState({});
  const toggle = (n) => setWished((w) => ({ ...w, [n]: !w[n] }));

  return (
    <section id="signature" className="relative section-pad py-24 sm:py-32">
      <div className="container-x">
        <SectionHead center eyebrow="Signature Pieces" title="Crafted to be" italic="treasured"
          sub="A glimpse of our most admired designs — each one a blend of artistry and heritage." />

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7">
          {SIGNATURE.map((p) => (
            <motion.article key={p.name} variants={fadeUp} className="group">
              <div className="relative overflow-hidden rounded-sm border border-gold/15 bg-maroon/30 aspect-[5/6]">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-3 left-3 badge">{p.tag}</span>
                <button onClick={() => toggle(p.name)} aria-label="Wishlist" className="absolute top-3 right-3 grid place-items-center h-10 w-10 rounded-full glass hover:bg-night/60 transition-colors">
                  <motion.span key={String(wished[p.name])} initial={{ scale: 0.4 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400, damping: 14 }}>
                    {wished[p.name] ? <FaHeart className="text-gold" size={17} /> : <FaRegHeart className="text-cream/70" size={17} />}
                  </motion.span>
                </button>
                <div className="absolute inset-x-3 bottom-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a href={`https://wa.me/${CONTACT.whatsapp}?text=I'm interested in the ${encodeURIComponent(p.name)}`} target="_blank" rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#25D366] text-white py-2.5 text-xs uppercase tracking-wide2"><FaWhatsapp size={15} /> Enquire</a>
                </div>
              </div>
              <h3 className="mt-3.5 font-display text-lg sm:text-xl leading-tight text-cream">{p.name}</h3>
              <p className="text-sm text-gold/80 mt-0.5">{p.price}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
