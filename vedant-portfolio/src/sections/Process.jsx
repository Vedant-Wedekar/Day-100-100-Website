import { Reveal, StaggerGroup, StaggerItem } from '../components/Motion'
import { process } from '../data/content'

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="wrap">
        <Reveal as="span" className="eyebrow"><span className="dot" /> How I build</Reveal>
        <Reveal as="h2" className="title">A process that <span className="serif">ships.</span></Reveal>
        <StaggerGroup className="proc-grid" amount={0.08}>
          {process.map((p) => (
            <StaggerItem key={p.step} className="proc glass"
              whileHover={{ y: -6, boxShadow: '0 22px 50px rgba(12,12,40,.12)' }}>
              <div className="step" style={{ background: p.grad }}>{p.step}</div>
              <h4>{p.title}</h4>
              <p>{p.blurb}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
