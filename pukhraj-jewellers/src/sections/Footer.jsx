import { FaInstagram, FaWhatsapp, FaFacebookF, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { Reveal } from "../components/Motion";
import { NAV_LINKS, CONTACT, COLLECTIONS, BRAND } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative section-pad pt-20 pb-24 sm:pb-8 bg-ink text-cream">
      {/* CTA banner */}
      <Reveal className="container-x">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-white text-center" style={{ background: "linear-gradient(120deg,#c39b4e,#dba38a)" }}>
          <div className="absolute inset-0 opacity-20 bg-sheen bg-[length:200%_100%] animate-shimmer" />
          <p className="relative text-[11px] uppercase tracking-luxe text-white/80">{BRAND.motto}</p>
          <h3 className="relative font-display text-3xl sm:text-5xl leading-tight mt-3">Luxury that feels light.</h3>
          <p className="relative mt-3 font-light text-white/85">Visit Nagpur's Lightweight Jewellery King today.</p>
          <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-ink text-cream px-8 py-4 text-sm uppercase tracking-wide2 hover:scale-105 transition-transform"><FaWhatsapp size={16} /> Start on WhatsApp</a>
        </div>
      </Reveal>

      <div className="container-x mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-3xl tracking-[0.12em]">PUKHRAJ</p>
          <p className="text-[10px] tracking-luxe uppercase text-gold mt-1">Jewellers · Nagpur</p>
          <p className="mt-4 text-sm text-cream/55 font-light leading-relaxed max-w-xs">{BRAND.purity}. Lowest making charges at {BRAND.makingCharges}. Pan-India shipping. The King of Lightweight Jewellery.</p>
          <div className="mt-5 flex gap-3">
            {[[FaInstagram, CONTACT.instagram], [FaWhatsapp, `https://wa.me/${CONTACT.whatsapp}`], [FaFacebookF, "#"], [FaYoutube, "#"]].map(([Ic, href], i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" aria-label="social" className="grid place-items-center h-10 w-10 rounded-full border border-cream/15 hover:bg-gold hover:text-white hover:border-gold transition-colors"><Ic size={15} /></a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxe text-goldLt">Quick Links</h4>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => <li key={l.id}><a href={`#${l.id}`} className="text-sm text-cream/55 hover:text-goldLt transition-colors font-light">{l.label}</a></li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxe text-goldLt">Collections</h4>
          <ul className="mt-4 space-y-2.5">
            {COLLECTIONS.slice(0, 6).map((c) => <li key={c.name}><a href="#collections" className="text-sm text-cream/55 hover:text-goldLt transition-colors font-light">{c.name}</a></li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxe text-goldLt">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/55 font-light">
            <li>{CONTACT.address}</li>
            <li><a href={`tel:+91${CONTACT.phone}`} className="hover:text-goldLt inline-flex items-center gap-2"><FaPhoneAlt size={11} /> {CONTACT.phoneDisplay}</a></li>
            <li><a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-goldLt inline-flex items-center gap-2"><FaWhatsapp size={13} /> WhatsApp Us</a></li>
            <li><a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="hover:text-goldLt inline-flex items-center gap-2"><FaInstagram size={13} /> @{BRAND.handle}</a></li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-14 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/40">
        <p>© {year} Pukhraj Jewellers, Nagpur. All rights reserved.</p>
        <p className="tracking-wide2 uppercase">More Design · Less Gold</p>
      </div>
    </footer>
  );
}
