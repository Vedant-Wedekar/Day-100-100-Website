import { Reveal } from '../components/Motion'
import { projects } from '../data/content'
import Magnetic from '../components/Magnetic'
import Icon from '../components/Icon'

function Mock({ barGrad }) {
  return (
    <div className="mock">
      <div className="mock-bar">
        <i style={{ background: '#ff5f57' }} />
        <i style={{ background: '#febc2e' }} />
        <i style={{ background: '#28c840' }} />
      </div>
      <div className="mock-body">
        <div className="mr" style={{ width: '52%', height: 18, background: barGrad }} />
        <div className="mr" style={{ width: '88%' }} />
        <div className="mr" style={{ width: '76%' }} />
        <div className="mr" style={{ width: '40%', height: 30, background: 'var(--ink)' }} />
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <Reveal as="span" className="eyebrow"><span className="dot" /> Selected work</Reveal>
        <Reveal as="h2" className="title">Projects I'm <span className="serif">proud of.</span></Reveal>
        <Reveal as="p" className="lead" style={{ marginBottom: 42 }}>
          Real, production-grade builds — not tutorials.
        </Reveal>

        {projects.map((p, i) => (
          <Reveal key={p.title} className={`proj glass ${i % 2 ? 'flip' : ''}`}>
            <div className="proj-visual" style={{ background: p.visualGrad }}>
              <Mock barGrad={p.barGrad} />
            </div>
            <div className="proj-info">
              <div className="proj-tag">{p.tag}</div>
              <h3>{p.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: p.overview }} />
              <div className="proj-stack">
                {p.stack.map((t) => <span key={t}>{t}</span>)}
              </div>
              <div className="proj-metrics">
                {p.metrics.map((m) => (
                  <div key={m.s}><b>{m.b}</b><small>{m.s}</small></div>
                ))}
              </div>
              <div className="proj-links">
                <Magnetic as="a" href={p.live} className="solid" target="_blank" rel="noreferrer">
                  Live preview <Icon name="external" size={14} />
                </Magnetic>
                <Magnetic as="a" href={p.github} target="_blank" rel="noreferrer">GitHub</Magnetic>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
