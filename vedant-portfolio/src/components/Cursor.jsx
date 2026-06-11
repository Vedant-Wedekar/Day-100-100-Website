import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [grow, setGrow] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 })
  const ry = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 })

  useEffect(() => {
    if (window.matchMedia('(pointer:coarse)').matches) return
    setEnabled(true)
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('mousemove', move)

    const interactive = 'a,button,.mag,.skill,.svc,.proc,.chip,input,textarea,.testi-dots button'
    const over = (e) => { if (e.target.closest(interactive)) setGrow(true) }
    const out = (e) => { if (e.target.closest(interactive)) setGrow(false) }
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [x, y])

  if (!enabled) return null
  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y, translateX: '-50%', translateY: '-50%' }} />
      <motion.div
        className="cursor-ring"
        style={{ x: rx, y: ry, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: grow ? 1.7 : 1, backgroundColor: grow ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0)' }}
        transition={{ duration: 0.25 }}
      />
    </>
  )
}
