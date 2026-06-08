import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaRegClock, FaCheckCircle, FaGlobe } from "react-icons/fa";
import { Reveal, SectionHead } from "../components/Motion";
import { CONTACT } from "../data/content";

export default function Visit() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", purpose: "Bridal" });
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const msg = `Hello Dhiraj Jewellers! I'd like to book a visit.%0AName: ${form.name}%0APhone: ${form.phone}%0APreferred date: ${form.date}%0ALooking for: ${form.purpose}`;
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  };
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="visit" className="relative section-pad py-24 sm:py-32 overflow-x-hidden">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch min-w-0">
        <div>
          <SectionHead eyebrow="Visit Our Showroom" title="Come see it" italic="in person."
            sub="Step into our Manewada showroom to explore the full collection, or book an appointment and we'll keep things ready for you." />

          <div className="mt-8 grid grid-cols-3 gap-3">
            <a href={`tel:+91${CONTACT.phoneRaw}`} className="card-royal rounded-sm p-4 text-center hover:border-gold/40 group">
              <span className="grid place-items-center h-11 w-11 mx-auto rounded-full bg-night text-gold group-hover:bg-gold group-hover:text-night transition-colors"><FaPhoneAlt size={15} /></span>
              <p className="text-xs mt-2 font-medium text-cream">Call Now</p>
            </a>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="card-royal rounded-sm p-4 text-center hover:border-gold/40 group">
              <span className="grid place-items-center h-11 w-11 mx-auto rounded-full bg-[#25D366] text-white group-hover:scale-110 transition-transform"><FaWhatsapp size={18} /></span>
              <p className="text-xs mt-2 font-medium text-cream">WhatsApp</p>
            </a>
            <a href={CONTACT.maps} target="_blank" rel="noreferrer" className="card-royal rounded-sm p-4 text-center hover:border-gold/40 group">
              <span className="grid place-items-center h-11 w-11 mx-auto rounded-full bg-emerald text-goldLt group-hover:scale-110 transition-transform"><FaMapMarkerAlt size={16} /></span>
              <p className="text-xs mt-2 font-medium text-cream">Directions</p>
            </a>
          </div>

          <form onSubmit={submit} className="mt-6 glass rounded-sm p-6 sm:p-7 space-y-4">
            {sent && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 rounded-sm bg-emerald/30 text-goldLt px-4 py-3 text-sm border border-gold/20">
                <FaCheckCircle /> Opening WhatsApp to confirm your appointment…
              </motion.div>
            )}
            <div className="grid sm:grid-cols-2 gap-4">
              <input required value={form.name} onChange={set("name")} placeholder="Your name" className="rounded-sm border border-gold/25 bg-night/40 px-4 py-3 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-gold" />
              <input required value={form.phone} onChange={set("phone")} placeholder="Phone number" type="tel" className="rounded-sm border border-gold/25 bg-night/40 px-4 py-3 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-gold" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input value={form.date} onChange={set("date")} type="date" className="rounded-sm border border-gold/25 bg-night/40 px-4 py-3 text-sm text-cream/70 outline-none focus:border-gold" />
              <select value={form.purpose} onChange={set("purpose")} className="rounded-sm border border-gold/25 bg-night/40 px-4 py-3 text-sm text-cream outline-none focus:border-gold">
                {["Bridal", "Gold", "Diamond", "Silver", "Gift", "Old Gold Exchange"].map((o) => <option key={o} className="bg-night">{o}</option>)}
              </select>
            </div>
            <button type="submit" className="btn-gold w-full"><FaWhatsapp size={16} /> Confirm Appointment</button>
            <p className="text-[10px] text-cream/40 text-center">No payment needed · We'll confirm your slot on WhatsApp</p>
          </form>
        </div>

        <Reveal delay={0.15}>
          <div className="h-full flex flex-col gap-5">
            <div className="relative flex-1 min-h-[260px] rounded-sm overflow-hidden border border-gold/20">
              <iframe title="Dhiraj Jewellers location" className="absolute inset-0 h-full w-full" style={{ filter: "invert(0.9) hue-rotate(180deg) saturate(0.6)" }}
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.10%2C21.10%2C79.16%2C21.14&layer=mapnik" loading="lazy" />
            </div>
            <div className="rounded-sm bg-maroon/50 border border-gold/20 p-6 sm:p-7">
              <p className="font-display italic text-2xl text-cream">Dhiraj Jewellers</p>
              <div className="mt-4 space-y-3 text-sm text-cream/70">
                <p className="flex items-start gap-3"><FaMapMarkerAlt className="text-gold mt-0.5 shrink-0" /> {CONTACT.address}</p>
                <p className="flex items-center gap-3"><FaPhoneAlt className="text-gold shrink-0" /> <a href={`tel:0712-2743070`} className="hover:text-goldLt">{CONTACT.phone1}</a> · <a href={`tel:+91${CONTACT.phoneRaw}`} className="hover:text-goldLt">{CONTACT.phone2}</a></p>
                <p className="flex items-center gap-3"><FaGlobe className="text-gold shrink-0" /> {CONTACT.website}</p>
                <p className="flex items-center gap-3"><FaRegClock className="text-gold shrink-0" /> {CONTACT.hours}</p>
              </div>
              <a href={CONTACT.maps} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-sm bg-night px-5 py-2.5 text-xs uppercase tracking-wide2 text-cream hover:text-gold transition-colors border border-gold/20"><FaMapMarkerAlt size={12} /> Get Directions</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
