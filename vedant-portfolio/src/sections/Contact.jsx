import { useState } from 'react'
import { Reveal } from '../components/Motion'
import { profile, contactMethods } from '../data/content'
import Magnetic from '../components/Magnetic'
import Icon from '../components/Icon'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async () => {
    if (!form.name.trim()) return
    // TODO: POST to your Node/Express + MongoDB API, or use EmailJS.
    // await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
    setSent(true)
    setForm({ name: '', email: '', msg: '' })
    setTimeout(() => setSent(false), 2200)
  }

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <Reveal className="glass contact-card">
          <div className="contact-grid">
            <div className="contact-side">
              <span className="eyebrow"><span className="dot" /> Get in touch</span>
              <h3>Let's build something <span className="grad-text">unforgettable.</span></h3>
              <p>Have a project, a role, or just an idea? I'd love to hear about it. I usually reply within a day.</p>
              {contactMethods.map((m) => (
                <div className="contact-method" key={m.b}>
                  <div className="ci"><Icon name={m.icon} size={18} /></div>
                  <div><b>{m.b}</b><small>{m.s}</small></div>
                </div>
              ))}
            </div>

            <div>
              <div className="field">
                <label>Your name</label>
                <input type="text" placeholder="Jane Doe" value={form.name} onChange={set('name')} />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="jane@company.com" value={form.email} onChange={set('email')} />
              </div>
              <div className="field">
                <label>Message</label>
                <textarea placeholder="Tell me about your project…" value={form.msg} onChange={set('msg')} />
              </div>
              <Magnetic as="button" className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', background: sent ? 'var(--green)' : undefined }}
                onClick={submit}>
                {sent ? 'Sent ✓' : <>Send message <Icon name="send" size={16} /></>}
              </Magnetic>
              <p className="form-note">
                Demo handler — wire <code>submit()</code> to your Node/Express + MongoDB API
                (see <code>{profile.name.split(' ')[0]}</code>'s backend) or a service like EmailJS to make it live.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
