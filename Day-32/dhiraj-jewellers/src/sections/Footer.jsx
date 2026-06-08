import { FaInstagram, FaWhatsapp, FaFacebookF, FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { Reveal } from "../components/Motion";
import { NAV_LINKS, CONTACT, COLLECTIONS, BRAND } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative section-pad pt-20 pb-24 sm:pb-8 bg-night border-t border-gold/15">
      <Reveal className="container-x">
        <div className="relative overflow-hidden rounded-sm p-8 sm:p-12 text-center border border-gold/30" style={{ background: "radial-gradient(120% 100% at 50% 0%, #3d1419, #140a0c)" }}>
          <p className="relative text-[11px] uppercase tracking-luxe text-gold/80">Latest & Traditional Designs</p>
          <h3 className="relative font-display text-3xl sm:text-5xl leading-tight mt-3 text-cream">Where elegance meets <em className="gold-text not-italic italic">tradition.</em></h3>
          <p className="relative mt-3 font-light text-cream/70">Visit Nagpur's trusted jeweller since {BRAND.since}.</p>
          <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="relative mt-6 btn-gold inline-flex"><FaWhatsapp size={16} /> Book an Appointment</a>
        </div>
      </Reveal>

      <div className="container-x mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="font-display italic text-3xl text-cream">Dhiraj</p>
          <p className="text-[10px] tracking-luxe uppercase text-gold mt-1">Jewellers · Est. {BRAND.since}</p>
          <p className="mt-4 text-sm text-cream/55 font-light leading-relaxed max-w-xs">{BRAND.purity}. 100% old gold exchange · {BRAND.making} making charges. A glorious tradition of excellence in Nagpur.</p>
          <div className="mt-5 flex gap-3">
            {[[FaInstagram, CONTACT.instagram], [FaWhatsapp, `https://wa.me/${CONTACT.whatsapp}`], [FaFacebookF, "#"], [FaGlobe, `https://${CONTACT.website}`]].map(([Ic, href], i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" aria-label="social" className="grid place-items-center h-10 w-10 rounded-full border border-gold/25 text-cream hover:bg-gold hover:text-night hover:border-gold transition-colors"><Ic size={15} /></a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxe text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => <li key={l.id}><a href={`#${l.id}`} className="text-sm text-cream/55 hover:text-gold transition-colors font-light">{l.label}</a></li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxe text-gold">Collections</h4>
          <ul className="mt-4 space-y-2.5">
            {COLLECTIONS.slice(0, 6).map((c) => <li key={c.name}><a href="#collections" className="text-sm text-cream/55 hover:text-gold transition-colors font-light">{c.name}</a></li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxe text-gold">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/55 font-light">
            <li>{CONTACT.address}</li>
            <li className="flex items-center gap-2"><FaPhoneAlt size={11} className="text-gold" /> <a href={`tel:0712-2743070`} className="hover:text-gold">{CONTACT.phone1}</a></li>
            <li><a href={`tel:+91${CONTACT.phoneRaw}`} className="hover:text-gold">{CONTACT.phone2}</a></li>
            <li><a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="hover:text-gold inline-flex items-center gap-2"><FaInstagram size={13} /> @{BRAND.handle}</a></li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-14 pt-6 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/40">
        <p>© {year} Dhiraj Jewellers, Nagpur. All rights reserved.</p>
        <p className="tracking-wide2 uppercase">A Glorious Tradition of Excellence</p>
      </div>
    </footer>
  );
}
