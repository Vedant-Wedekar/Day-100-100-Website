import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND } from '../lib/content'

/** Full-screen intro: brand glyph draws in, percentage ticks, then sweeps away. */
export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const total = reduce ? 350 : 1500
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min(1, (now - start) / total)
      setPct(Math.round(p * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setGone(true), 350)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-washi"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-7xl text-sumi sm:text-8xl"
          >
            {BRAND.jp}
          </motion.div>
          <div className="mt-5 overflow-hidden">
            <motion.p
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow text-sumi"
            >
              {BRAND.name} · 日本料理
            </motion.p>
          </div>
          <div className="absolute bottom-10 left-0 right-0 px-8">
            <div className="mx-auto flex max-w-xs items-center justify-between text-sumi">
              <span className="font-display text-2xl tabular-nums">{pct}</span>
              <span className="eyebrow">Preparing the counter</span>
            </div>
            <div className="mx-auto mt-3 h-px max-w-xs bg-sumi/15">
              <motion.div className="h-full bg-sumi" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
