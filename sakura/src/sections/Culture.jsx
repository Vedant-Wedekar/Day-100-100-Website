import { Reveal, motion, fadeUp, stagger } from '../lib/motion'
import { CULTURE } from '../lib/content'

// bento spans: first card is large on laptop
const spans = [
  'sm:col-span-2 sm:row-span-2',
  '',
  '',
  'sm:col-span-2',
  '',
]

export default function Culture() {
  return (
    <section id="culture" className="section">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">文化 · Culture</p>
          <h2 className="h-section mt-4 text-[color:var(--fg)]">The world around the table</h2>
        </Reveal>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {CULTURE.map((c, i) => (
            <motion.figure
              key={c.en}
              variants={fadeUp}
              whileHover={{ scale: 0.985 }}
              className={`no-min relative flex flex-col justify-between overflow-hidden rounded-4xl border border-[color:var(--line)] bg-[color:var(--card)] p-6 ${spans[i]}`}
            >
              <span className="font-jp text-5xl text-sakuradeep sm:text-6xl">{c.jp}</span>
              <figcaption>
                <h3 className="font-display text-2xl text-[color:var(--fg)]">{c.en}</h3>
                <p className="mt-1.5 text-sm italic text-[color:var(--fg-soft)]">“{c.quote}”</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
