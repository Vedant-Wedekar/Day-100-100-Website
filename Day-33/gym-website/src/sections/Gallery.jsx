import { motion } from "framer-motion";
import { SectionHead } from "../components/Motion";
import { GALLERY } from "../data/content";

export default function Gallery() {
  return (
    <section className="relative section-pad py-24 sm:py-32">
      <div className="container-x">
        <SectionHead center eyebrow="Inside The Gym" title="The" accent="Atmosphere"
          sub="A look at the space, the energy and the people who make it all happen." />

        {/* CSS columns = true masonry */}
        <div className="mt-14 columns-2 lg:columns-4 gap-4 [column-fill:_balance]">
          {GALLERY.map((src, i) => (
            <motion.figure key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group relative mb-4 overflow-hidden rounded-2xl break-inside-avoid">
              <img src={src} loading="lazy" alt={`Gallery ${i + 1}`}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-lime/0 group-hover:bg-ink/40 transition-colors duration-300" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
