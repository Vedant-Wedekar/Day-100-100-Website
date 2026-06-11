import { Reveal, StaggerGroup, StaggerItem } from '../components/Motion'
import { stats } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <Reveal as="span" className="eyebrow"><span className="dot" /> About me</Reveal>
        <Reveal as="h2" className="title">
          Turning ideas into <span className="serif">living interfaces.</span>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-copy">
            <p>I'm <span className="hl">Vedant Wedekar</span>, a Full-Stack Web Developer and <span className="hl">BCA graduate</span> based in Nagpur, India. I build modern web applications that look premium and feel effortless — across desktop, tablet and mobile.</p>
            <p>My focus is the <span className="hl">full picture</span>: thoughtful UI, smooth motion, clean component architecture on the front end, and reliable APIs and data on the back end. I care about the details most people never notice — the easing on a hover, the rhythm of spacing, the moment a page loads.</p>
            <p>Right now I'm sharpening my craft through real client builds and pushing what's possible with <span className="hl">React, Framer Motion and the MERN stack</span> — always chasing that Awwwards-level polish.</p>
          </Reveal>
          <StaggerGroup className="stat-grid" amount={0.12}>
            {stats.map((s) => (
              <StaggerItem key={s.lbl} className="stat glass">
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
