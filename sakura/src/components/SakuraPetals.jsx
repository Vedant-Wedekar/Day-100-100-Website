import { useEffect, useState } from 'react'

/** Ambient falling cherry-blossom petals. Lightweight CSS animation. */
export default function SakuraPetals({ density = 'auto' }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const isSmall = window.innerWidth < 768
    setCount(density === 'auto' ? (isSmall ? 8 : 16) : density)
  }, [density])

  if (!count) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const size = 8 + Math.random() * 12
        const left = Math.random() * 100
        const delay = Math.random() * 12
        const dur = 11 + Math.random() * 12
        const op = 0.4 + Math.random() * 0.4
        return (
          <span
            key={i}
            style={{
              position: 'absolute',
              top: '-6vh',
              left: `${left}%`,
              width: size,
              height: size,
              opacity: op,
              animation: `fall ${dur}s linear ${delay}s infinite`,
            }}
          >
            <svg viewBox="0 0 24 24" width="100%" height="100%">
              <path
                d="M12 2c2 3 2 7 0 10-2-3-2-7 0-10zM12 22c-2-3-2-7 0-10 2 3 2 7 0 10z"
                fill="#F4C7D2"
              />
              <path
                d="M2 12c3-2 7-2 10 0-3 2-7 2-10 0zM22 12c-3 2-7 2-10 0 3-2 7-2 10 0z"
                fill="#E48AA0"
                opacity="0.85"
              />
            </svg>
          </span>
        )
      })}
    </div>
  )
}
