import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Reveal, SectionHead } from "../components/Motion";
import { CONTACT } from "../data/content";

export default function Contact() {
  const items = [
    { icon: FaMapMarkerAlt, label: "Visit Us", value: CONTACT.address, href: "#" },
    { icon: FaPhoneAlt, label: "Call Us", value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
    { icon: FaEnvelope, label: "Email Us", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  ];
  return (
    <section id="contact" className="relative section-pad py-24 sm:py-32">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHead eyebrow="Get In Touch" title="Start Today." accent="No Excuses."
            sub="Book a free trial or just drop by. Our team will get you set up with a plan that fits your goals." />

          <div className="mt-8 space-y-4">
            {items.map((it, i) => (
              <Reveal key={it.label} delay={i * 0.1}>
                <a href={it.href} className="flex items-center gap-4 glass rounded-2xl p-4 sm:p-5 hover:border-lime/40 transition-colors group">
                  <span className="grid place-items-center h-12 w-12 rounded-xl bg-ink/60 text-lime group-hover:bg-lime group-hover:text-ink transition-colors shrink-0">
                    <it.icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-bone/45">{it.label}</p>
                    <p className="text-sm sm:text-base font-medium break-all">{it.value}</p>
                  </div>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-bold text-white hover:opacity-90 transition-opacity">
                <FaWhatsapp size={22} /> Chat on WhatsApp
              </a>
            </Reveal>
          </div>
        </div>

        {/* Map placeholder */}
        <Reveal delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden glass aspect-square lg:aspect-[4/5]">
            <iframe
              title="Gym location"
              className="absolute inset-0 h-full w-full grayscale contrast-125 opacity-80"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.45%2C37.74%2C-122.39%2C37.79&layer=mapnik"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-ink/60 to-transparent" />
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-ember text-white shadow-ember">
              <FaMapMarkerAlt size={20} />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
