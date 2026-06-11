import { Reveal, motion, fadeUp, stagger } from '../lib/motion'
import { MATCHA } from '../lib/content'

export default function Matcha() {
  return (
    <section id="matcha" className="section relative overflow-hidden bg-matchadeep text-cream">
      {/* floating leaves */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${(i * 11) % 100}%`,
              top: '-8%',
              animation: `fall ${12 + (i % 5) * 2}s linear ${i * 1.3}s infinite`,
              opacity: 0.5,
            }}
          >
            🍃
          </span>
        ))}
      </div>

      <div className="wrap relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-cream/70">抹茶 · Matcha</p>
          <h2 className="h-section mt-4">Stone-ground, whisked by hand</h2>
          <p className="mt-5 max-w-md text-cream/75">
            Ceremonial-grade matcha from Uji, shaded for weeks before harvest. Earthy, sweet,
            and quietly energising — the calm heart of our café.
          </p>
          <a href="#dishes" className="btn btn-ghost mt-8 border-cream/30 text-cream hover:bg-cream/10">
            See matcha menu
          </a>
        </Reveal>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {MATCHA.map((m, i) => (
            <motion.div
              key={m.en}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className={`no-min rounded-4xl border border-cream/15 bg-cream/8 p-6 backdrop-blur-sm ${
                i % 2 ? 'mt-6' : ''
              }`}
            >
              <span className="block font-jp text-2xl text-cream/80">{m.jp}</span>
              <span className="mt-2 block font-display text-xl">{m.en}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
