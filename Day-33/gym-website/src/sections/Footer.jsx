import { FaInstagram, FaXTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";
import { Reveal } from "../components/Motion";
import { NAV_LINKS, CONTACT } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative section-pad pt-20 pb-8 border-t border-white/10 bg-char/60">
      {/* CTA banner */}
      <Reveal className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-lime to-ember p-8 sm:p-12 text-ink text-center">
          <h3 className="font-head text-3xl sm:text-5xl uppercase leading-none">Ready to forge greatness?</h3>
          <p className="mt-3 font-medium opacity-80">Your first session is on us. Claim your free trial today.</p>
          <a href="#contact" className="mt-6 inline-flex rounded-full bg-ink px-8 py-4 font-bold text-bone hover:scale-105 transition-transform">
            Book Free Trial
          </a>
        </div>
      </Reveal>

      <div className="container-x mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#home" className="font-head text-3xl uppercase">IRON<span className="grad-text">PULSE</span></a>
          <p className="mt-4 text-sm text-bone/55 leading-relaxed max-w-xs">Premium strength & conditioning. Built for those who refuse average.</p>
          <div className="mt-5 flex gap-3">
            {[FaInstagram, FaXTwitter, FaFacebookF, FaYoutube].map((Ic, i) => (
              <a key={i} href="#" className="grid place-items-center h-10 w-10 rounded-full glass hover:bg-lime hover:text-ink transition-colors">
                <Ic size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-head uppercase text-lg">Quick Links</h4>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.id}><a href={`#${l.id}`} className="text-sm text-bone/55 hover:text-lime transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-head uppercase text-lg">Hours</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-bone/55">
            <li>Mon–Fri · 5:00 – 23:00</li>
            <li>Saturday · 6:00 – 22:00</li>
            <li>Sunday · 7:00 – 20:00</li>
            <li className="text-lime">Open 365 days a year</li>
          </ul>
        </div>

        <div>
          <h4 className="font-head uppercase text-lg">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-bone/55">
            <li>{CONTACT.address}</li>
            <li><a href={`tel:${CONTACT.phone}`} className="hover:text-lime">{CONTACT.phone}</a></li>
            <li><a href={`mailto:${CONTACT.email}`} className="hover:text-lime break-all">{CONTACT.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-bone/40">
        <p>© {year} IRONPULSE Fitness. All rights reserved.</p>
        <p>Crafted to make you train harder.</p>
      </div>
    </footer>
  );
}
