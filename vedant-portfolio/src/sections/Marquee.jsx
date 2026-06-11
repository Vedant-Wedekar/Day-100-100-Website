const ITEMS = ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Tailwind', 'REST APIs', 'Git']

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className={i % 2 ? 'muted' : ''}>{t}</span>
        ))}
      </div>
    </div>
  )
}
