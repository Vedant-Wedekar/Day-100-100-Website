import { motion } from "framer-motion";
import { FaInstagram, FaHeart } from "react-icons/fa";
import { SectionHead } from "../components/Motion";
import { GALLERY, INSTA, BRAND, CONTACT } from "../data/content";

export default function Gallery() {
  return (
    <section id="gallery" className="relative section-pad py-24 sm:py-32">
      <div className="container-x">
        <SectionHead center eyebrow="The Showroom" title="Step inside our" italic="world of gold"
          sub="A glimpse of the boutique, the craftsmanship and the moments made here." />

        <div className="mt-14 columns-2 lg:columns-4 gap-4 [column-fill:_balance]">
          {GALLERY.map((src, i) => (
            <motion.figure key={i} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
              className="group relative mb-4 overflow-hidden rounded-sm border border-gold/15 break-inside-avoid">
              <img src={src} loading="lazy" alt={`Showroom ${i + 1}`} className="w-full object-cover group-hover:scale-110 transition-transform duration-[1.1s]" />
              <div className="absolute inset-0 bg-night/0 group-hover:bg-night/30 transition-colors" />
            </motion.figure>
          ))}
        </div>

        {/* Instagram strip */}
        <div className="mt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">On Instagram</span>
            <h3 className="font-display text-3xl sm:text-4xl mt-3 text-cream">Follow <em className="gold-text not-italic italic">@{BRAND.handle}</em></h3>
          </div>
          <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="btn-ghost shrink-0"><FaInstagram size={18} /> Follow Us</a>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTA.map((p) => (
            <a key={p.caption} href={CONTACT.instagram} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-sm aspect-square border border-gold/15 bg-night">
              <img src={p.img} alt={p.caption} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-night/85 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-2.5">
                <p className="text-[10px] text-cream/90 leading-snug line-clamp-1">{p.caption}</p>
                <p className="text-[9px] text-goldLt mt-0.5 flex items-center gap-1"><FaHeart size={8} /> {p.likes}</p>
              </div>
              <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity"><FaInstagram size={26} className="text-white" /></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
