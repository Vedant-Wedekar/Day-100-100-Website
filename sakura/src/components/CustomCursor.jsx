import { useEffect, useRef, useState } from 'react'

/** A soft ink dot + trailing ring. Renders only for fine pointers (desktop). */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const dot = useRef(null)
  const ring = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    setEnabled(true)
    document.documentElement.classList.add('cursor-host')

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }
    const onOver = (e) => {
      const interactive = e.target.closest('a, button, [data-cursor]')
      if (ring.current) {
        ring.current.style.width = interactive ? '56px' : '30px'
        ring.current.style.height = interactive ? '56px' : '30px'
        ring.current.style.borderColor = interactive
          ? 'rgba(228,138,160,0.9)'
          : 'rgba(26,22,20,0.35)'
      }
    }

    let raf
    const loop = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.16
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.16
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.classList.remove('cursor-host')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-sakuradeep"
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ marginLeft: '-15px', marginTop: '-15px', transition: 'width .25s, height .25s, border-color .25s' }}
      />
    </>
  )
}
