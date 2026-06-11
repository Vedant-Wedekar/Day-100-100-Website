import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { profile } from '../data/content'

// ---------- Page loader ----------
export function Loader({ onDone }) {
  const [show, setShow] = useState(true)
  const letters = profile.name.split(' ')[0].toUpperCase().split('')

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {show && (
        <motion.div
          className="loader"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="loader-name">
            {letters.map((c, i) => (
              <motion.span
                key={i}
                style={{ display: 'inline-block' }}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {c}
              </motion.span>
            ))}
          </div>
          <div className="loader-bar">
            <motion.i
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ---------- Scroll progress bar ----------
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return <motion.div className="progress" style={{ scaleX: scrollYProgress }} />
}

// ---------- Atmospheric background ----------
export function Background() {
  return (
    <>
      <div className="bg-mesh">
        <div className="blob b1" /><div className="blob b2" />
        <div className="blob b3" /><div className="blob b4" />
      </div>
      <div className="grain" />
    </>
  )
}
