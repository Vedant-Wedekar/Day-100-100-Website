import { Reveal, motion, scaleIn, stagger } from '../lib/motion'
import { FaInstagram } from 'react-icons/fa'
import { INSTAGRAM } from '../lib/content'

export default function Instagram() {
  return (
    <section id="instagram" className="section">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">@sakura.cafe</p>
          <h2 className="h-section mt-4 text-[color:var(--fg)]">Follow the feed</h2>
          <p className="mx-auto mt-4 max-w-md text-[color:var(--fg-soft)]">
            Daily plates, the room, and behind the counter.
          </p>
        </Reveal>

        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {INSTAGRAM.map((p, i) => (
            <motion.a
              key={i}
              href="#"
              variants={scaleIn}
              className="group relative aspect-square overflow-hidden rounded-3xl"
              style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
            >
              <span className="absolute inset-0 grid place-items-center text-5xl transition-transform duration-500 group-hover:scale-125">
                {p.jp}
              </span>
              <span className="absolute inset-0 grid place-items-center bg-sumi/0 text-white opacity-0 transition-all duration-300 group-hover:bg-sumi/40 group-hover:opacity-100">
                <FaInstagram size={28} />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
