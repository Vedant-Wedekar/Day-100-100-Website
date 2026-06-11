import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal } from '../components/Motion'
import { testimonials } from '../data/content'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const n = testimonials.length

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % n), 5500)
    return () => clearInterval(id)
  }, [n])

  return (
    <section id="testimonials" className="section">
      <div className="wrap" style={{ maxWidth: 860 }}>
        <Reveal as="span" className="eyebrow"><span className="dot" /> Kind words</Reveal>
        <Reveal as="h2" className="title" style={{ textAlign: 'center' }}>
          What people <span className="serif">say.</span>
        </Reveal>

        <Reveal style={{ overflow: 'hidden', marginTop: 30 }}>
          <motion.div className="testi-track"
            animate={{ x: `-${i * 100}%` }}
            transition={{ duration: 0.6, ease: [0.22, 0.9, 0.3, 1] }}>
            {testimonials.map((t) => (
              <div className="testi glass" key={t.name}>
                <div className="quote">“{t.quote}”</div>
                <div className="who">
                  <div className="av" style={{ background: t.grad }}>{t.av}</div>
                  <div><b>{t.name}</b><small>{t.title}</small></div>
                </div>
              </div>
            ))}
          </motion.div>
        </Reveal>

        <div className="testi-dots">
          {testimonials.map((_, k) => (
            <button key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)}
              aria-label={`Testimonial ${k + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
