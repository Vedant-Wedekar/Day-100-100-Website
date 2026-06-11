import { Reveal, StaggerGroup, StaggerItem } from '../components/Motion'
import { services } from '../data/content'
import Icon from '../components/Icon'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <Reveal as="span" className="eyebrow"><span className="dot" /> Services</Reveal>
        <Reveal as="h2" className="title">What I can <span className="serif">build for you.</span></Reveal>
        <StaggerGroup className="svc-grid" amount={0.07}>
          {services.map((s) => (
            <StaggerItem key={s.title} className="svc glass"
              whileHover={{ y: -6, boxShadow: '0 22px 50px rgba(12,12,40,.12)' }}>
              <div className="ico" style={{ background: s.grad }}><Icon name={s.icon} size={24} /></div>
              <h4>{s.title}</h4>
              <p>{s.blurb}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
