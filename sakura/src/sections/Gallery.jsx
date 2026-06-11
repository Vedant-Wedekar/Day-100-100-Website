import { Reveal, motion, fadeIn, stagger } from '../lib/motion'
import { GALLERY } from '../lib/content'

const heightFor = (span) =>
  span === 'tall' ? 'h-72 sm:h-96' : span === 'wide' ? 'h-44 sm:h-56' : 'h-56 sm:h-64'

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-[color:var(--bg-soft)]">
      <div className="wrap">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">写真 · Gallery</p>
            <h2 className="h-section mt-4 text-[color:var(--fg)]">Through the window</h2>
          </div>
          <p className="max-w-xs text-sm text-[color:var(--fg-soft)]">
            Food, room, and the quiet details. Swap these blocks for your own photography.
          </p>
        </Reveal>

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 columns-2 gap-4 lg:columns-4 [&>*]:mb-4"
        >
          {GALLERY.map((g) => (
            <motion.figure
              key={g.label}
              variants={fadeIn}
              className="group relative block break-inside-avoid overflow-hidden rounded-3xl"
            >
              <div
                className={`w-full ${heightFor(g.span)} transition-transform duration-700 ease-out group-hover:scale-110`}
                style={{ background: `linear-gradient(135deg, ${g.from}, ${g.to})` }}
              />
              <figcaption className="absolute inset-0 flex flex-col items-center justify-center bg-sumi/0 text-white opacity-0 transition-all duration-500 group-hover:bg-sumi/35 group-hover:opacity-100">
                <span className="font-jp text-3xl">{g.jp}</span>
                <span className="mt-1 text-sm tracking-wide">{g.label}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
