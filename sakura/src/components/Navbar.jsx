import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { BRAND, NAV } from '../lib/content'
import { scrollToId } from '../hooks/useLenis'

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = (href) => { setOpen(false); setTimeout(() => scrollToId(href), 10) }

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <nav
          className={`wrap flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
            scrolled ? 'glass shadow-glass' : 'bg-transparent'
          }`}
          style={{ maxWidth: scrolled ? '72rem' : '80rem' }}
        >
          <button onClick={() => go('#top')} className="flex items-baseline gap-2">
            <span className="font-display text-2xl leading-none text-[color:var(--fg)]">
              {BRAND.name}
            </span>
            <span className="font-jp text-sm text-sakuradeep">{BRAND.jp}</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <button
                  onClick={() => go(n.href)}
                  className="group relative rounded-full px-4 py-2 text-sm text-[color:var(--fg-soft)] transition-colors hover:text-[color:var(--fg)]"
                >
                  <span>{n.label}</span>
                  <span className="ml-1.5 font-jp text-[0.7rem] opacity-50">{n.jp}</span>
                  <span className="absolute inset-x-4 -bottom-0 h-px origin-left scale-x-0 bg-sakuradeep transition-transform duration-300 group-hover:scale-x-100" />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle dark mode"
              className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] text-[color:var(--fg)] transition-colors hover:bg-[color:var(--card)]"
            >
              {dark ? <FiSun size={17} /> : <FiMoon size={17} />}
            </button>
            <button
              onClick={() => go('#reserve')}
              className="btn btn-primary hidden h-10 !py-0 text-sm sm:inline-flex"
            >
              Reserve
            </button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] text-[color:var(--fg)] md:hidden"
            >
              <FiMenu size={19} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[95] bg-sumi/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[96] flex h-[100dvh] w-[82%] max-w-sm flex-col bg-[color:var(--bg)] p-7 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 32 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl text-[color:var(--fg)]">
                  {BRAND.name} <span className="font-jp text-base text-sakuradeep">{BRAND.jp}</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] text-[color:var(--fg)]"
                >
                  <FiX size={20} />
                </button>
              </div>

              <ul className="mt-10 flex flex-col gap-1">
                {NAV.map((n, i) => (
                  <motion.li
                    key={n.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i + 0.1 }}
                  >
                    <button
                      onClick={() => go(n.href)}
                      className="flex w-full items-baseline justify-between border-b border-[color:var(--line)] py-4 text-left"
                    >
                      <span className="font-display text-3xl text-[color:var(--fg)]">{n.label}</span>
                      <span className="font-jp text-base text-[color:var(--fg-soft)]">{n.jp}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>

              <button onClick={() => go('#reserve')} className="btn btn-primary mt-auto w-full justify-center">
                Reserve a table · 予約
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
