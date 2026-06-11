import { useState } from 'react'
import { Reveal, motion } from '../lib/motion'
import { AnimatePresence } from 'framer-motion'
import { SEASONS } from '../lib/content'

const bg = {
  sakura: 'from-sakura/60 to-washi',
  sora: 'from-sora/50 to-washi',
  kohaku: 'from-kohaku/45 to-washi',
  beni: 'from-beni/40 to-washi',
}
const dark = {
  sakura: 'dark:from-sakuradeep/30',
  sora: 'dark:from-sora/25',
  kohaku: 'dark:from-kohaku/25',
  beni: 'dark:from-beni/30',
}

export default function Seasonal() {
  const [active, setActive] = useState(0)
  const s = SEASONS[active]

  return (
    <section id="seasonal" className="section">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">旬 · Seasonal Menu</p>
          <h2 className="h-section mt-4 text-[color:var(--fg)]">Cooking with the calendar</h2>
        </Reveal>

        <div className="mx-auto mt-10 flex max-w-md flex-wrap justify-center gap-2">
          {SEASONS.map((season, i) => (
            <button
              key={season.key}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm transition-all ${
                i === active
                  ? 'bg-[color:var(--fg)] text-[color:var(--bg)]'
                  : 'border border-[color:var(--line)] text-[color:var(--fg-soft)] hover:text-[color:var(--fg)]'
              }`}
            >
              {season.en} <span className="font-jp">{season.jp}</span>
            </button>
          ))}
        </div>

        <div className="relative mt-8 overflow-hidden rounded-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.key}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`flex min-h-[260px] flex-col items-center justify-center bg-gradient-to-b p-10 text-center sm:min-h-[320px] ${bg[s.accent]} ${dark[s.accent]} dark:to-sumi`}
            >
              <span className="font-jp text-7xl text-[color:var(--fg)] sm:text-8xl">{s.jp}</span>
              <h3 className="mt-4 font-display text-3xl text-[color:var(--fg)] sm:text-4xl">{s.dish}</h3>
              <p className="mt-2 text-[color:var(--fg-soft)]">{s.note}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
