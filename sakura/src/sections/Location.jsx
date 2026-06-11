import { Reveal } from '../lib/motion'
import { FiMapPin, FiClock, FiPhone } from 'react-icons/fi'
import { BRAND, LOCATION } from '../lib/content'

export default function Location() {
  return (
    <section id="location" className="section bg-[color:var(--bg-soft)]">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">来店 · Visit Us</p>
          <h2 className="h-section mt-4 text-[color:var(--fg)]">Find the lanterns</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="flex flex-col gap-5">
            <InfoCard icon={<FiMapPin />} title="Address · 住所">
              {LOCATION.address}
            </InfoCard>
            <InfoCard icon={<FiClock />} title="Hours · 営業時間">
              <ul className="space-y-1">
                {LOCATION.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="tabular-nums text-[color:var(--fg)]">{h.time}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard icon={<FiPhone />} title="Contact · 連絡先">
              <a href={`tel:${BRAND.phone}`} className="underline-offset-4 hover:underline">
                {BRAND.phone}
              </a>
            </InfoCard>
          </Reveal>

          <Reveal
            variants={{ hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1, transition: { duration: 0.8 } } }}
            className="overflow-hidden rounded-4xl border border-[color:var(--line)] shadow-glass"
          >
            <iframe
              title="Sakura location map"
              src={LOCATION.mapsEmbed}
              className="h-72 w-full sm:h-full sm:min-h-[420px]"
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.05)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, title, children }) {
  return (
    <div className="glass no-min rounded-4xl p-6">
      <div className="flex items-center gap-3 text-sakuradeep">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-sakura/30">{icon}</span>
        <span className="text-xs font-medium uppercase tracking-wider text-[color:var(--fg-soft)]">{title}</span>
      </div>
      <div className="mt-3 text-[color:var(--fg-soft)]">{children}</div>
    </div>
  )
}
