import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaRing, FaGift, FaHeart, FaBook } from "react-icons/fa";
import { SectionHead, stagger, fadeUp } from "../components/Motion";
import { CONTACT } from "../data/content";

// Concierge-style services. Ring size opens a modal via onRingSize.
export default function Services({ onRingSize }) {
  const cards = [
    { icon: FaRing, t: "Ring Size Guide", d: "Find your perfect fit in seconds with our sizing chart.", action: "Open Guide", onClick: onRingSize },
    { icon: FaBook, t: "Jewellery Care", d: "Keep every piece radiant for a lifetime with expert tips.", href: `https://wa.me/${CONTACT.whatsapp}?text=Please share the jewellery care guide` },
    { icon: FaGift, t: "Gift Collection", d: "Curated gifting for birthdays, anniversaries & festivals.", href: "#bestsellers" },
    { icon: FaHeart, t: "Wedding Planner", d: "A dedicated stylist to plan your complete bridal look.", href: `https://wa.me/${CONTACT.whatsapp}?text=I'd like help planning my wedding jewellery` },
  ];

  return (
    <section className="relative section-pad py-24 sm:py-32 bg-ink text-ivory">
      <div className="container-x">
        <SectionHead center eyebrow="Concierge Services" title="Here for" italic="every step"
          sub="More than a store — a lifelong jewellery partner." />

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cards.map((c) => {
            const inner = (
              <>
                <span className="grid place-items-center h-12 w-12 rounded-full bg-ivory/5 text-champ group-hover:bg-gold group-hover:text-ink transition-colors"><c.icon size={20} /></span>
                <h4 className="font-display text-xl sm:text-2xl mt-5">{c.t}</h4>
                <p className="text-sm text-ivory/55 font-light mt-2 leading-relaxed">{c.d}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wide2 text-champ">
                  {c.action || "Learn More"} <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </>
            );
            const cls = "group text-left rounded-2xl border border-ivory/10 bg-ivory/[0.03] p-6 sm:p-7 hover:border-champ/40 hover:bg-ivory/[0.06] transition-all w-full";
            return (
              <motion.div key={c.t} variants={fadeUp}>
                {c.onClick
                  ? <button onClick={c.onClick} className={cls}>{inner}</button>
                  : <a href={c.href} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={`block ${cls}`}>{inner}</a>}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
