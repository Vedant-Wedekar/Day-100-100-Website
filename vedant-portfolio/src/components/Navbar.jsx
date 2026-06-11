import { motion } from 'framer-motion'
import { nav, profile } from '../data/content'
import { useSmoothScroll } from '../lib/smoothScroll'

export default function Navbar({ onOpenCmd }) {
  const { scrollTo } = useSmoothScroll()
  const go = (e, href) => { e.preventDefault(); scrollTo(href) }

  return (
    <motion.nav
      className="nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
    >
      <span className="brand">{profile.initials}</span>
      <div className="nav-links">
        {nav.map((n) => (
          <a key={n.href} href={n.href} onClick={(e) => go(e, n.href)}>{n.label}</a>
        ))}
      </div>
      <button className="kbd" onClick={onOpenCmd} aria-label="Open command menu">
        <b>⌘</b> K
      </button>
      <a href="#contact" className="nav-cta" onClick={(e) => go(e, '#contact')}>Let's talk</a>
    </motion.nav>
  )
}
