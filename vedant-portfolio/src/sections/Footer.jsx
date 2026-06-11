import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="big">{profile.name.split(' ')[0].toUpperCase()}</div>
      <div className="foot-row">
        <span>© {new Date().getFullYear()} {profile.name} · {profile.role}</span>
        <span>Built with React-grade obsession · Press ⌘K</span>
      </div>
    </footer>
  )
}
