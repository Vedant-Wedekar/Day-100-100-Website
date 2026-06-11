import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { BRAND } from '../lib/content'
import { scrollToId } from '../hooks/useLenis'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yFuji = useTransform(scrollYProgress, [0, 1], [0, 120])
  const ySun = useTransform(scrollYProgress, [0, 1], [0, 200])
  const yText = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* sky wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-sakura/40 via-washi to-cream dark:from-beni/20 dark:via-sumi dark:to-ink" />

      {/* rising sun */}
      <motion.div
        style={{ y: ySun }}
        className="absolute left-1/2 top-[16%] -z-0 h-[44vw] max-h-[420px] w-[44vw] max-w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-b from-kohaku/70 to-beni/40 blur-[2px] dark:from-beni/60 dark:to-beni/10"
      />

      {/* Mount Fuji silhouette */}
      <motion.svg
        style={{ y: yFuji }}
        viewBox="0 0 1440 360"
        preserveAspectRatio="xMidYMax slice"
        className="absolute bottom-[18%] left-0 h-[34vh] w-full text-sora/50 dark:text-sora/20"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 360 L560 70 Q600 40 640 70 L720 130 L800 70 Q840 40 880 70 L1440 360 Z"
        />
        <path
          fill="#FBF8F2"
          opacity="0.85"
          d="M600 95 L720 130 L840 95 L800 130 Q760 150 720 135 Q680 150 640 130 Z"
        />
      </motion.svg>

      {/* content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="wrap relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-24 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
          className="eyebrow mb-5 rounded-full border border-[color:var(--line)] bg-[color:var(--card)] px-4 py-2 backdrop-blur"
        >
          {BRAND.tagline} · {BRAND.taglineEn}
        </motion.span>

        <h1 className="h-display max-w-4xl text-[color:var(--fg)]">
          {['Experience', 'The Soul', 'Of Japan'].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.45 + i * 0.12, duration: 0.9, ease: EASE }}
              >
                {i === 1 ? (
                  <em className="not-italic text-sakuradeep">{line}</em>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
          className="mt-6 max-w-md text-base text-[color:var(--fg-soft)] sm:max-w-xl sm:text-lg"
        >
          Authentic ramen, sushi, and traditional Japanese flavours — crafted with love,
          plated with calm.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8, ease: EASE }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <button onClick={() => scrollToId('#dishes')} className="btn btn-primary w-full sm:w-auto">
            Explore Menu · 献立
          </button>
          <button onClick={() => scrollToId('#reserve')} className="btn btn-ghost w-full sm:w-auto">
            Reserve a Table
          </button>
        </motion.div>
      </motion.div>

      {/* animated seigaiha waves */}
      <div className="relative z-[2] -mb-px">
        <Waves />
      </div>

      {/* scroll indicator */}
      <motion.button
        onClick={() => scrollToId('#story')}
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-[20%] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[color:var(--fg-soft)] sm:bottom-[22%]"
        aria-label="Scroll to story"
      >
        <span className="eyebrow">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown />
        </motion.span>
      </motion.button>
    </section>
  )
}

function Waves() {
  const layers = [
    { fill: 'var(--bg)', d: 'M0 60 C 240 0 480 120 720 60 C 960 0 1200 120 1440 60 L1440 120 L0 120 Z', dur: 9, op: 1 },
    { fill: '#E48AA0', d: 'M0 70 C 240 20 480 110 720 70 C 960 30 1200 110 1440 70 L1440 120 L0 120 Z', dur: 12, op: 0.25 },
    { fill: '#7C9A6B', d: 'M0 80 C 240 40 480 120 720 80 C 960 40 1200 120 1440 80 L1440 120 L0 120 Z', dur: 16, op: 0.18 },
  ]
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block h-[12vh] min-h-[70px] w-full">
      {layers.map((l, i) => (
        <motion.path
          key={i}
          d={l.d}
          fill={l.fill}
          opacity={l.op}
          animate={{ x: [0, -60, 0] }}
          transition={{ duration: l.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  )
}
