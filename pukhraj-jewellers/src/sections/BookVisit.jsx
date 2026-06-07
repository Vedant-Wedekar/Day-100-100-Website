import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaRegClock, FaCheckCircle } from "react-icons/fa";
import { Reveal, SectionHead } from "../components/Motion";
import { CONTACT } from "../data/content";

export default function BookVisit() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", purpose: "Bridal" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    // Frontend only — hand off to WhatsApp with a prefilled message.
    const msg = `Hello Pukhraj Jewellers! I'd like to book a store visit.%0AName: ${form.name}%0APhone: ${form.phone}%0APreferred date: ${form.date}%0ALooking for: ${form.purpose}`;
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  };
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="visit" className="relative section-pad py-24 sm:py-32 bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-stretch">
        {/* left: appointment + actions */}
        <div>
          <SectionHead eyebrow="Book a Store Visit" title="Come experience it" italic="in person."
            sub="Try on our lightweight designs, meet our designers, and feel the difference. Book a slot and we'll keep things ready for you." />

          {/* quick actions */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            <a href={`tel:+91${CONTACT.phone}`} className="card-luxe rounded-2xl p-4 text-center hover:border-gold/40 hover:shadow-soft group">
              <span className="grid place-items-center h-11 w-11 mx-auto rounded-full bg-ink text-goldLt group-hover:bg-gold group-hover:text-white transition-colors"><FaPhoneAlt size={15} /></span>
              <p className="text-xs mt-2 font-medium">Call Now</p>
            </a>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="card-luxe rounded-2xl p-4 text-center hover:border-gold/40 hover:shadow-soft group">
              <span className="grid place-items-center h-11 w-11 mx-auto rounded-full bg-[#25D366] text-white transition-transform group-hover:scale-110"><FaWhatsapp size={18} /></span>
              <p className="text-xs mt-2 font-medium">WhatsApp</p>
            </a>
            <a href={CONTACT.maps} target="_blank" rel="noreferrer" className="card-luxe rounded-2xl p-4 text-center hover:border-gold/40 hover:shadow-soft group">
              <span className="grid place-items-center h-11 w-11 mx-auto rounded-full bg-rose text-white transition-transform group-hover:scale-110"><FaMapMarkerAlt size={16} /></span>
              <p className="text-xs mt-2 font-medium">Visit Store</p>
            </a>
          </div>

          {/* form */}
          <form onSubmit={submit} className="mt-6 rounded-3xl glass shadow-soft p-6 sm:p-7 space-y-4">
            {sent && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 rounded-xl bg-green-500/10 text-green-700 px-4 py-3 text-sm">
                <FaCheckCircle /> Opening WhatsApp to confirm your visit…
              </motion.div>
            )}
            <div className="grid sm:grid-cols-2 gap-4">
              <input required value={form.name} onChange={set("name")} placeholder="Your name"
                className="rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm outline-none focus:border-gold" />
              <input required value={form.phone} onChange={set("phone")} placeholder="Phone number" type="tel"
                className="rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm outline-none focus:border-gold" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input value={form.date} onChange={set("date")} type="date"
                className="rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm outline-none focus:border-gold text-ink/70" />
              <select value={form.purpose} onChange={set("purpose")}
                className="rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm outline-none focus:border-gold">
                {["Bridal", "Wedding", "Daily Wear", "Diamond", "Gift", "Custom Design"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <button type="submit" className="btn-gold w-full"><FaWhatsapp size={16} /> Confirm Appointment</button>
            <p className="text-[10px] text-ink/40 text-center">No payment needed · We'll confirm your slot on WhatsApp</p>
          </form>
        </div>

        {/* right: map + store info */}
        <Reveal delay={0.15}>
          <div className="h-full flex flex-col gap-5">
            <div className="relative flex-1 min-h-[260px] rounded-3xl overflow-hidden card-luxe">
              <iframe title="Pukhraj Jewellers location" className="absolute inset-0 h-full w-full"
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.10%2C21.10%2C79.16%2C21.14&layer=mapnik" loading="lazy" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 to-transparent" />
            </div>
            <div className="rounded-3xl bg-ink text-cream p-6 sm:p-7">
              <p className="font-display text-2xl">Pukhraj Jewellers</p>
              <div className="mt-4 space-y-3 text-sm text-cream/70">
                <p className="flex items-start gap-3"><FaMapMarkerAlt className="text-goldLt mt-0.5 shrink-0" /> {CONTACT.address}</p>
                <p className="flex items-center gap-3"><FaPhoneAlt className="text-goldLt shrink-0" /> <a href={`tel:+91${CONTACT.phone}`} className="hover:text-goldLt">{CONTACT.phoneDisplay}</a></p>
                <p className="flex items-center gap-3"><FaRegClock className="text-goldLt shrink-0" /> {CONTACT.hours}</p>
              </div>
              <a href={CONTACT.maps} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-xs uppercase tracking-wide2 hover:bg-white/20 transition-colors"><FaMapMarkerAlt size={12} /> Get Directions</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
