import { FaInstagram, FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";
import { Reveal } from "../components/Motion";
import { NAV_LINKS, CONTACT, COLLECTIONS } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  const support = ["Jewellery Care", "Ring Size Guide", "Certification", "Lifetime Exchange", "EMI Options"];

  return (
    <footer className="relative section-pad pt-20 pb-8 bg-ink text-ivory">
      {/* CTA banner */}
      <Reveal className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gold-grad p-8 sm:p-12 text-ink text-center">
          <div className="absolute inset-0 bg-grain opacity-[0.04] mix-blend-multiply" />
          <h3 className="relative font-display text-3xl sm:text-5xl leading-tight">Begin your Aurelia story today.</h3>
          <p className="relative mt-3 font-light text-ink/80">Book a private appointment with our master jewellers.</p>
          <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer"
            className="relative mt-6 inline-flex rounded-full bg-ink text-ivory px-8 py-4 text-sm uppercase tracking-wide2 hover:scale-105 transition-transform">
            Book Store Visit
          </a>
        </div>
      </Reveal>

      <div className="container-x mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-3xl tracking-[0.2em]">AURELIA</p>
          <p className="mt-4 text-sm text-ivory/55 font-light leading-relaxed max-w-xs">Fine jewellery and bespoke heirlooms, handcrafted since 1949. BIS hallmarked · Certified · Trusted.</p>
          <div className="mt-5 flex gap-3">
            {[FaInstagram, FaFacebookF, FaPinterestP, FaYoutube].map((Ic, i) => (
              <a key={i} href="#" aria-label="social" className="grid place-items-center h-10 w-10 rounded-full border border-ivory/15 hover:bg-gold hover:text-ink hover:border-gold transition-colors"><Ic size={15} /></a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxe text-champ">Quick Links</h4>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => <li key={l.id}><a href={`#${l.id}`} className="text-sm text-ivory/55 hover:text-champ transition-colors font-light">{l.label}</a></li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxe text-champ">Collections</h4>
          <ul className="mt-4 space-y-2.5">
            {COLLECTIONS.slice(0, 6).map((c) => <li key={c.name}><a href="#collections" className="text-sm text-ivory/55 hover:text-champ transition-colors font-light">{c.name}</a></li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxe text-champ">Customer Support</h4>
          <ul className="mt-4 space-y-2.5">
            {support.map((s) => <li key={s}><a href="#contact" className="text-sm text-ivory/55 hover:text-champ transition-colors font-light">{s}</a></li>)}
          </ul>
          <div className="mt-5 text-sm text-ivory/55 font-light space-y-1.5">
            <p><a href={`tel:${CONTACT.phone}`} className="hover:text-champ">{CONTACT.phone}</a></p>
            <p><a href={`mailto:${CONTACT.email}`} className="hover:text-champ break-all">{CONTACT.email}</a></p>
          </div>
        </div>
      </div>

      <div className="container-x mt-14 pt-6 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/40">
        <p>© {year} Aurelia Fine Jewellery. All rights reserved.</p>
        <p className="tracking-wide2 uppercase">Crafted with devotion · Est. 1949</p>
      </div>
    </footer>
  );
}
