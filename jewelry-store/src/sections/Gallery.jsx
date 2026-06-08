import { motion } from "framer-motion";
import { SectionHead } from "../components/Motion";
import { GALLERY } from "../data/content";

export default function Gallery() {
  return (
    <section className="relative section-pad py-24 sm:py-32 bg-cream/50">
      <div className="container-x">
        <SectionHead center eyebrow="The Showroom" title="Step inside our" italic="world"
          sub="A glimpse of the boutique, the details and the moments made here." />

        {/* CSS columns = true masonry */}
        <div className="mt-14 columns-2 lg:columns-4 gap-4 [column-fill:_balance]">
          {GALLERY.map((src, i) => (
            <motion.figure key={i}
              initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
              className="group relative mb-4 overflow-hidden rounded-2xl break-inside-avoid">
              <img src={src} loading="lazy" alt={`Showroom ${i + 1}`}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-[1.1s]" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-colors duration-300" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-champ/40 transition-all rounded-2xl" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
