import { useState } from 'react'
import { Reveal, motion } from '../lib/motion'
import { AnimatePresence } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'
import { FAQ as FAQS } from '../lib/content'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section">
      <div className="wrap max-w-3xl">
        <Reveal className="text-center">
          <p className="eyebrow">よくある質問 · FAQ</p>
          <h2 className="h-section mt-4 text-[color:var(--fg)]">Good to know</h2>
        </Reveal>

        <div className="mt-10 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} amount={0.6}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-lg text-[color:var(--fg)] sm:text-xl">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[color:var(--line)] text-[color:var(--fg)]"
                  >
                    <FiPlus />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-12 text-[color:var(--fg-soft)]">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
