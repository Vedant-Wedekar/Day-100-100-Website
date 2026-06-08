import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { Reveal, SectionHead } from "../components/Motion";
import { CONTACT } from "../data/content";

export default function Contact() {
  const items = [
    { icon: FaMapMarkerAlt, label: "Visit Our Boutique", value: CONTACT.address },
    { icon: FaPhoneAlt, label: "Call Us", value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
    { icon: FaEnvelope, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: FaRegClock, label: "Store Hours", value: CONTACT.hours },
  ];

  return (
    <section id="contact" className="relative section-pad py-24 sm:py-32 bg-ivory">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-stretch">
        <div>
          <SectionHead eyebrow="Book an Appointment" title="Let's create something" italic="unforgettable."
            sub="Schedule a private viewing, a virtual consultation or simply drop by. Our concierge will take care of the rest." />

          <div className="mt-8 space-y-3">
            {items.map((it, i) => (
              <Reveal key={it.label} delay={i * 0.08}>
                {it.href ? (
                  <a href={it.href} className="flex items-center gap-4 card-luxe rounded-2xl p-4 sm:p-5 hover:border-gold/40 hover:shadow-soft group">
                    <span className="grid place-items-center h-12 w-12 rounded-full bg-ink text-champ group-hover:bg-gold group-hover:text-ink transition-colors shrink-0"><it.icon size={17} /></span>
                    <div><p className="text-[11px] uppercase tracking-wide2 text-ink/45">{it.label}</p><p className="text-sm sm:text-base font-light break-all">{it.value}</p></div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 card-luxe rounded-2xl p-4 sm:p-5">
                    <span className="grid place-items-center h-12 w-12 rounded-full bg-ink text-champ shrink-0"><it.icon size={17} /></span>
                    <div><p className="text-[11px] uppercase tracking-wide2 text-ink/45">{it.label}</p><p className="text-sm sm:text-base font-light">{it.value}</p></div>
                  </div>
                )}
              </Reveal>
            ))}
            <Reveal delay={0.32}>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] text-white px-7 py-4 text-sm uppercase tracking-wide2">
                <FaWhatsapp size={20} /> Chat on WhatsApp
              </a>
            </Reveal>
          </div>
        </div>

        {/* map */}
        <Reveal delay={0.2}>
          <div className="relative h-full min-h-[360px] rounded-3xl overflow-hidden card-luxe">
            <iframe title="Boutique location" className="absolute inset-0 h-full w-full grayscale contrast-[1.05] opacity-90"
              src="https://www.openstreetmap.org/export/embed.html?bbox=78.42%2C17.40%2C78.47%2C17.44&layer=mapnik" loading="lazy" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-ivory/40 to-transparent" />
            <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-gold text-ink shadow-soft">
              <FaMapMarkerAlt size={19} />
            </motion.div>
            <div className="absolute bottom-4 left-4 right-4 bg-ivory/95 backdrop-blur rounded-xl px-5 py-3.5 shadow-soft">
              <p className="font-display text-lg leading-tight">Aurelia Flagship Boutique</p>
              <p className="text-xs text-ink/55 mt-0.5">{CONTACT.hours}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
