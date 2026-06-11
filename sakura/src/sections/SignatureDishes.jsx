import { Reveal, motion, fadeUp, stagger } from '../lib/motion'
import { DISHES } from '../lib/content'

const toneMap = {
  beni: '#C4453A',
  sora: '#8FB8D6',
  kohaku: '#E89B3B',
  kogane: '#D9A441',
  matcha: '#7C9A6B',
}

export default function SignatureDishes() {
  return (
    <section id="dishes" className="section">
      <div className="wrap">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">献立 · The Menu</p>
            <h2 className="h-section mt-4 text-[color:var(--fg)]">Signature dishes</h2>
          </div>
          <p className="max-w-xs text-sm text-[color:var(--fg-soft)]">
            Ten plates that tell our story — every name in English, then in the language it was born in.
          </p>
        </Reveal>

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        >
          {DISHES.map((d) => {
            const c = toneMap[d.tone]
            return (
              <motion.button
                key={d.en}
                variants={fadeUp}
                data-cursor
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="no-min group relative overflow-hidden rounded-4xl border border-[color:var(--line)] bg-[color:var(--card)] p-6 text-left"
              >
                {/* color flood */}
                <motion.span
                  variants={{ rest: { y: '101%' }, hover: { y: '0%' } }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                  style={{ backgroundColor: c }}
                />
                <span className="relative z-10 block">
                  <span className="block text-4xl transition-transform duration-500 group-hover:scale-110">
                    {d.emoji}
                  </span>
                  <span className="mt-5 block font-display text-xl text-[color:var(--fg)] transition-colors duration-300 group-hover:text-white">
                    {d.en}
                  </span>
                  <span className="mt-0.5 block font-jp text-sm text-[color:var(--fg-soft)] transition-colors duration-300 group-hover:text-white/85">
                    {d.jp}
                  </span>
                  <span className="mt-3 block text-xs text-[color:var(--fg-soft)] transition-colors duration-300 group-hover:text-white/75">
                    {d.note}
                  </span>
                </span>
              </motion.button>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
