import { motion } from 'framer-motion'
import { profile, socials, heroWords, orbitTech } from '../data/content'
import { WordReveal } from '../components/Motion'
import Magnetic from '../components/Magnetic'
import Icon from '../components/Icon'
import { useSmoothScroll } from '../lib/smoothScroll'

export default function Hero() {
  const { scrollTo } = useSmoothScroll()
  const wordClass = (w) => (w === 'Vedant.' ? 'shimmer' : '')

  return (
    <section id="hero" className="section hero-sec">
      <div className="wrap hero-grid">
        <div>
          <motion.div className="hero-status"
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}>
            <span className="pulse" /> Available for work &amp; freelance
          </motion.div>

          <WordReveal words={heroWords} className="hero-h1" wordClass={wordClass} />

          <motion.p className="hero-sub"
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}>
            I craft <b>fast, modern, animated</b> web experiences end-to-end — from
            pixel-perfect interfaces to robust APIs and databases. <b>MERN stack</b>,
            obsessive about detail.
          </motion.p>

          <motion.div className="btn-row"
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.7 }}>
            <Magnetic as="a" href="#work" className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); scrollTo('#work') }}>
              View my work <Icon name="arrow" size={16} />
            </Magnetic>
            <Magnetic as="a" href={profile.resumeUrl} className="btn btn-ghost">
              <Icon name="download" size={16} /> Download résumé
            </Magnetic>
          </motion.div>

          <motion.div className="socials"
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.7 }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}
                 target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <Icon name={s.icon} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div className="hero-orbit"
          initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1.1, ease: [0.22, 0.9, 0.3, 1] }}>
          <div className="orbit o1" /><div className="orbit o2" /><div className="orbit o3" />
          {orbitTech.map((t, i) => (
            <div className={`orbit ${t.ring}`} key={i}>
              <div className={`orbit-spin ${t.rev ? 'rev' : ''}`}>
                <div className="tech-bubble"
                  style={{
                    color: t.color,
                    ...(t.rotate ? { transform: `translateX(-50%) rotate(${t.rotate}deg)` } : {}),
                  }}>
                  {t.label}
                </div>
              </div>
            </div>
          ))}
          <div className="core"><span>&lt;/&gt;</span></div>
        </motion.div>
      </div>
    </section>
  )
}
