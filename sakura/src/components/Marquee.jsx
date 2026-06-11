import { MARQUEE } from '../lib/content'

/** Infinite marquee of dish names. Duplicated track for a seamless loop. */
export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE]
  return (
    <div className="relative z-[1] overflow-hidden border-y border-[color:var(--line)] bg-[color:var(--bg-soft)] py-5">
      <div className="flex w-max animate-marquee gap-10 sm:gap-16">
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-2xl text-[color:var(--fg)] sm:gap-16 sm:text-4xl"
          >
            {t}
            <span className="text-sakuradeep">✿</span>
          </span>
        ))}
      </div>
    </div>
  )
}
