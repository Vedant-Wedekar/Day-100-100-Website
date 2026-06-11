import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin sakura→matcha gradient progress bar fixed to the top. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[90] h-[3px] w-full origin-left bg-gradient-to-r from-sakuradeep via-kohaku to-matcha"
      aria-hidden="true"
    />
  )
}
