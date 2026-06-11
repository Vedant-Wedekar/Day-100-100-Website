import { Reveal, StaggerGroup, StaggerItem } from '../components/Motion'
import { skills, chips } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <Reveal as="span" className="eyebrow"><span className="dot" /> Skills &amp; stack</Reveal>
        <Reveal as="h2" className="title">
          Everything I need to <span className="serif">build the whole thing.</span>
        </Reveal>
        <Reveal as="p" className="lead" style={{ marginBottom: 36 }}>
          From the database to the last pixel — one developer, full ownership.
        </Reveal>

        <StaggerGroup className="skill-grid" amount={0.07}>
          {skills.map((s) => (
            <StaggerItem key={s.name} className="skill glass"
              whileHover={{ y: -6, boxShadow: '0 22px 50px rgba(12,12,40,.12)' }}>
              <div className="ico" style={{ background: s.grad }}>{s.glyph}</div>
              <h4>{s.name}</h4>
              <p>{s.blurb}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="chips">
          {chips.map((c) => <span className="chip" key={c}>{c}</span>)}
        </Reveal>
      </div>
    </section>
  )
}
