import { Reveal, motion, fadeUp, stagger } from '../lib/motion'
import { STREET } from '../lib/content'

export default function StreetFood() {
  return (
    <section id="street" className="section relative overflow-hidden bg-sumi text-cream">
      {/* night glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(196,69,58,0.35),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(217,164,65,0.25),transparent_40%)]" />

      {/* hanging lanterns */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-around px-6">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="flex origin-top flex-col items-center" style={{ animation: `sway ${4 + i}s ease-in-out infinite` }}>
            <span className="h-10 w-px bg-cream/30 sm:h-16" />
            <span className="h-7 w-6 rounded-full bg-gradient-to-b from-beni to-kohaku shadow-[0_0_24px_rgba(217,164,65,0.6)] sm:h-9 sm:w-8" />
          </div>
        ))}
      </div>

      <div className="wrap relative z-10 pt-16">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-kohaku">屋台 · Night Market</p>
          <h2 className="h-section mt-4">Tokyo street food, after dark</h2>
          <p className="mt-5 max-w-md text-cream/70">
            Step under the lanterns. The griddle hisses, bonito flakes dance, and the city hums.
          </p>
        </Reveal>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STREET.map((s) => (
            <motion.div
              key={s.en}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="no-min rounded-4xl border border-cream/10 bg-cream/5 p-7 backdrop-blur-sm"
            >
              <span className="font-jp text-3xl text-kohaku">{s.jp}</span>
              <h3 className="mt-3 font-display text-2xl">{s.en}</h3>
              <p className="mt-2 text-sm text-cream/65">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
