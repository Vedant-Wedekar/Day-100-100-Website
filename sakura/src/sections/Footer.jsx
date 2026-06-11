import { motion } from '../lib/motion'
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa'
import { BRAND, NAV } from '../lib/content'
import { scrollToId } from '../hooks/useLenis'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-sumi text-cream">
      {/* watermark */}
      <span className="pointer-events-none absolute -bottom-10 right-0 select-none font-display text-[34vw] leading-none text-cream/4 sm:text-[24vw]">
        {BRAND.jp}
      </span>

      <div className="wrap relative z-10 px-6 py-16 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="font-display text-3xl">
              {BRAND.name} <span className="font-jp text-sakuradeep">{BRAND.jp}</span>
            </span>
            <p className="mt-4 max-w-xs text-cream/65">{BRAND.tagline}</p>
            <p className="mt-1 max-w-xs text-sm text-cream/45">{BRAND.taglineEn}</p>
            <div className="mt-6 flex gap-3">
              {[FaInstagram, FaWhatsapp, FaFacebookF].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 text-cream/80 hover:bg-cream/10"
                  aria-label="social link"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="eyebrow text-cream/60">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <button onClick={() => scrollToId(n.href)} className="text-cream/75 transition-colors hover:text-cream">
                    {n.label} <span className="font-jp text-cream/40">{n.jp}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-cream/60">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-cream/75">
              <li><a href={`tel:${BRAND.phone}`} className="hover:text-cream">{BRAND.phone}</a></li>
              <li><button onClick={() => scrollToId('#reserve')} className="hover:text-cream">Reserve a table</button></li>
              <li><button onClick={() => scrollToId('#location')} className="hover:text-cream">Find us</button></li>
              <li><button onClick={() => scrollToId('#gallery')} className="hover:text-cream">Gallery</button></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-sm text-cream/45 sm:flex-row">
          <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          <span className="font-jp">心を込めて作りました · made with care</span>
        </div>
      </div>
    </footer>
  )
}
