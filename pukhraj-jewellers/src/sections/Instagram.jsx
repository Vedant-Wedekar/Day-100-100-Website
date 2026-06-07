import { motion } from "framer-motion";
import { FaInstagram, FaHeart, FaPlay } from "react-icons/fa";
import { SectionHead, stagger, fadeUp } from "../components/Motion";
import { INSTA, BRAND, CONTACT } from "../data/content";

export default function Instagram() {
  return (
    <section className="relative section-pad py-24 sm:py-32 bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHead eyebrow="As Seen on Instagram" title="Join our" italic={`${BRAND.followers} family`}
            sub="The most viral lightweight designs in Nagpur — straight from @pukhrajjewellers_ngp." />
          <a href={CONTACT.instagram} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm uppercase tracking-wide2 text-white shrink-0"
            style={{ background: "linear-gradient(110deg,#dba38a,#c39b4e)" }}>
            <FaInstagram size={18} /> Follow @{BRAND.handle}
          </a>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTA.map((p) => (
            <motion.a key={p.caption} href={CONTACT.instagram} target="_blank" rel="noreferrer" variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-ink">
              <img src={p.img} alt={p.caption} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/10" />
              {p.type === "Reel" && <span className="absolute top-2.5 right-2.5 grid place-items-center h-7 w-7 rounded-full glass text-white"><FaPlay size={10} /></span>}
              <div className="absolute inset-x-0 bottom-0 p-3 text-cream">
                <p className="text-xs font-medium leading-snug">{p.caption}</p>
                <p className="text-[10px] text-goldLt mt-1 flex items-center gap-1"><FaHeart size={9} /> {p.likes}</p>
              </div>
              {/* hover insta icon */}
              <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <FaInstagram size={30} className="text-white drop-shadow-lg" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
