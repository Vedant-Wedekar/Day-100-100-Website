import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSmoothScroll } from '../lib/smoothScroll'

const COMMANDS = [
  { icon: '🏠', label: 'Go to top', href: '#hero' },
  { icon: '👤', label: 'About me', href: '#about' },
  { icon: '⚡', label: 'Skills & stack', href: '#skills' },
  { icon: '💼', label: 'View work', href: '#work' },
  { icon: '🛠', label: 'Services', href: '#services' },
  { icon: '✉️', label: 'Contact', href: '#contact' },
  { icon: '📄', label: 'Download résumé', href: '#resume' },
]

export default function CommandMenu({ open, setOpen }) {
  const [q, setQ] = useState('')
  const inputRef = useRef(null)
  const { scrollTo } = useSmoothScroll()
  const list = COMMANDS.filter((c) => c.label.toLowerCase().includes(q.toLowerCase()))

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault(); setOpen((o) => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setOpen])

  useEffect(() => {
    if (open) { setQ(''); setTimeout(() => inputRef.current?.focus(), 60) }
  }, [open])

  const run = (href) => {
    setOpen(false)
    if (href.startsWith('#') && document.querySelector(href)) scrollTo(href)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="cmdk"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          <motion.div
            className="cmd-box"
            initial={{ y: -20, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && list[0]) run(list[0].href) }}
              placeholder="Type a command or search…"
            />
            <div className="cmd-list">
              {list.map((c, i) => (
                <div
                  key={c.label}
                  className={`cmd-item ${i === 0 ? 'active' : ''}`}
                  onClick={() => run(c.href)}
                >
                  <span className="ci">{c.icon}</span> {c.label}
                  <span className="ck">↵</span>
                </div>
              ))}
              {list.length === 0 && <div className="cmd-item">No results</div>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
