import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Reveal, SectionHead, stagger, fadeUp } from "../components/Motion";
import { CATEGORIES, CONTACT } from "../data/content";

const STEPS = [
  { no: "01", t: "Share your vision", d: "Tell us the story, the occasion and the budget." },
  { no: "02", t: "Co-design", d: "Our designers craft CAD renders for your approval." },
  { no: "03", t: "Handcrafted", d: "Artisans bring it to life in your chosen metal & stones." },
  { no: "04", t: "Yours forever", d: "Delivered certified, hallmarked and ready to treasure." },
];

export default function Bespoke() {
  return (
    <section id="bespoke" className="relative section-pad py-24 sm:py-32 bg-ivory">
      <div className="container-x">
        {/* Custom design banner */}
        <div className="relative overflow-hidden rounded-3xl bg-cream/70 border border-ink/8 grid lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <SectionHead eyebrow="Bespoke Atelier" title="Design your own" italic="heirloom."
              sub="From a sketch on a napkin to a piece worn for a lifetime. Our bespoke service makes one-of-one jewellery as personal as the moment it marks." />
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="btn-gold group">
                Book a Consultation <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-ghost">Virtual Appointment</a>
            </div>
          </div>
          <div className="relative min-h-[280px] lg:min-h-0">
            <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80" alt="Custom design" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-cream/70 to-transparent lg:from-cream/40" />
          </div>
        </div>

        {/* process steps */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s) => (
            <motion.div key={s.no} variants={fadeUp} className="card-luxe rounded-2xl p-6 hover:shadow-soft hover:border-gold/30">
              <span className="font-display text-4xl gold-text">{s.no}</span>
              <h4 className="font-display text-xl mt-3">{s.t}</h4>
              <p className="text-sm text-ink/55 font-light mt-1.5 leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* categories */}
        <div className="mt-20">
          <SectionHead center eyebrow="Shop by Category" title="Every" italic="adornment" />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {CATEGORIES.map((c) => (
              <motion.a href="#bestsellers" key={c} variants={fadeUp}
                className="group relative overflow-hidden rounded-xl border border-ink/10 bg-cream/40 py-7 sm:py-9 text-center hover:border-gold/50 hover:bg-ivory transition-all">
                <span className="absolute inset-x-0 -bottom-10 h-10 bg-gold/10 group-hover:bottom-0 transition-all duration-500" />
                <span className="relative font-display text-xl sm:text-2xl group-hover:text-gold transition-colors">{c}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
