import { useState } from 'react'
import { Reveal, motion } from '../lib/motion'
import { AnimatePresence } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import { BRAND } from '../lib/content'

const empty = { name: '', guests: '2', date: '', time: '19:00' }

export default function Reservation() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.date) return
    const msg = `Hello ${BRAND.name}! I'd like to reserve a table.%0A%0AName: ${form.name}%0AGuests: ${form.guests}%0ADate: ${form.date}%0ATime: ${form.time}`
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="reserve" className="section">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">予約 · Reserve</p>
          <h2 className="h-section mt-4 text-[color:var(--fg)]">Hold your table</h2>
          <p className="mt-5 max-w-md text-[color:var(--fg-soft)]">
            Tell us when you're coming and how many. We confirm over WhatsApp within the hour —
            walk-ins are always welcome at the counter.
          </p>
          <p className="mt-6 font-jp text-2xl text-sakuradeep">いらっしゃいませ</p>
        </Reveal>

        <Reveal variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
          <form onSubmit={submit} className="glass rounded-4xl p-6 shadow-glass sm:p-8">
            <Field label="Name · お名前">
              <input
                required
                value={form.name}
                onChange={set('name')}
                placeholder="Your name"
                className="field"
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Guests · 人数">
                <select value={form.guests} onChange={set('guests')} className="field">
                  {['1', '2', '3', '4', '5', '6', '7', '8+'].map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </Field>
              <Field label="Time · 時間">
                <input type="time" value={form.time} onChange={set('time')} className="field" />
              </Field>
            </div>

            <Field label="Date · 日付">
              <input type="date" required value={form.date} onChange={set('date')} className="field" />
            </Field>

            <button type="submit" className="btn btn-primary mt-2 w-full justify-center">
              <AnimatePresence mode="wait" initial={false}>
                {sent ? (
                  <motion.span key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <FiCheck /> Sent to WhatsApp
                  </motion.span>
                ) : (
                  <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    Request reservation
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <p className="mt-3 text-center text-xs text-[color:var(--fg-soft)]">
              No payment needed · confirmation by WhatsApp
            </p>
          </form>
        </Reveal>
      </div>

      <style>{`
        .field{
          width:100%; margin-top:.4rem; border-radius:1rem;
          border:1px solid var(--line); background:var(--bg);
          color:var(--fg); padding:.8rem 1rem; font-size:.95rem;
          transition:border-color .25s, box-shadow .25s;
        }
        .field:focus{ outline:none; border-color:#E48AA0; box-shadow:0 0 0 3px rgba(228,138,160,.25); }
      `}</style>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="mb-4 block">
      <span className="text-xs font-medium uppercase tracking-wider text-[color:var(--fg-soft)]">{label}</span>
      {children}
    </label>
  )
}
