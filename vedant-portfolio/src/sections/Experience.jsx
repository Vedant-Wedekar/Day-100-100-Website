import { Reveal, StaggerGroup, StaggerItem } from '../components/Motion'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <Reveal as="span" className="eyebrow"><span className="dot" /> Experience &amp; education</Reveal>
        <Reveal as="h2" className="title">The road <span className="serif">so far.</span></Reveal>
        <StaggerGroup className="timeline" amount={0.12}>
          {experience.map((e) => (
            <StaggerItem key={e.title} className="tl-item">
              <div className="when">{e.when}</div>
              <h4>{e.title}</h4>
              <div className="role">{e.role}</div>
              <p>{e.blurb}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
