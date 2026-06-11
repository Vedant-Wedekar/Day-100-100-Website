import { Reveal, motion, fadeUp, stagger } from '../lib/motion'
import { STORY } from '../lib/content'

export default function Story() {
  return (
    <section id="story" className="section">
      <div className="wrap">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{STORY.eyebrow}</p>
          <h2 className="h-section mt-4 text-[color:var(--fg)]">{STORY.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-[color:var(--fg-soft)]">{STORY.body}</p>
        </Reveal>

        <motion.ol
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-16 grid gap-10 md:mt-20"
        >
          {/* center spine on laptop */}
          <span className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-[color:var(--line)] md:left-1/2 md:block" />
          {STORY.milestones.map((m, i) => (
            <motion.li
              key={m.year}
              variants={fadeUp}
              className={`relative grid grid-cols-[auto_1fr] items-start gap-5 md:grid-cols-2 md:gap-12 ${
                i % 2 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* marker + year */}
              <div className={`flex items-center gap-4 md:justify-end ${i % 2 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--fg)] font-jp text-sm text-[color:var(--bg)] md:absolute md:left-1/2 md:-translate-x-1/2">
                  {m.jp}
                </span>
                <span className="font-display text-4xl text-sakuradeep md:text-5xl">{m.year}</span>
              </div>
              {/* card */}
              <div className={`glass no-min rounded-4xl p-6 ${i % 2 ? 'md:text-right' : ''}`}>
                <h3 className="font-display text-2xl text-[color:var(--fg)]">{m.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--fg-soft)]">{m.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
