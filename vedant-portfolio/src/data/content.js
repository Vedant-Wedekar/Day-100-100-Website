// ============================================================
//  SINGLE SOURCE OF TRUTH
//  Edit everything about the site from this one file.
//  Swap the "#" placeholders for your real links before deploy.
// ============================================================

export const profile = {
  name: 'Vedant Wedekar',
  initials: 'VW',
  role: 'Full-Stack Developer',
  location: 'Nagpur, Maharashtra, India',
  email: 'vedant@example.com',          // TODO: your email
  phone: '+91 00000 00000',             // TODO: your number
  resumeUrl: '#',                        // TODO: link to your résumé (PDF)
  available: true,
}

export const socials = [
  { label: 'GitHub',   href: '#', icon: 'github' },    // TODO
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },  // TODO
  { label: 'Email',    href: 'mailto:vedant@example.com', icon: 'mail' },
  { label: 'X',        href: '#', icon: 'x' },          // TODO
]

export const nav = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Work',     href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact' },
]

export const heroWords = ['Hi, I\'m', 'Vedant.', 'Full-Stack', 'Developer']

export const stats = [
  { num: '3+',   lbl: 'Production sites shipped' },
  { num: '100%', lbl: 'Responsive, mobile-first' },
  { num: '14+',  lbl: 'Technologies in my stack' },
  { num: '∞',    lbl: 'Attention to detail' },
]

export const skills = [
  { name: 'React.js',      blurb: 'Component-driven UIs, hooks, performant rendering.', glyph: '⚛', grad: 'linear-gradient(135deg,var(--cyan),var(--blue))' },
  { name: 'Node.js',       blurb: 'Event-driven servers and tooling.',                  glyph: 'N', grad: 'linear-gradient(135deg,var(--green),#0a8f6a)' },
  { name: 'Express.js',    blurb: 'Fast, minimal REST API layers.',                     glyph: 'Ex', grad: 'linear-gradient(135deg,#333,#000)' },
  { name: 'MongoDB',       blurb: 'Flexible document data modelling.',                  glyph: '🍃', grad: 'linear-gradient(135deg,var(--green),var(--cyan))' },
  { name: 'JavaScript',    blurb: 'ES6+, the language I think in.',                     glyph: 'JS', grad: 'linear-gradient(135deg,var(--orange),#f5c518)' },
  { name: 'Tailwind CSS',  blurb: 'Utility-first, design-system speed.',                glyph: 'TW', grad: 'linear-gradient(135deg,var(--cyan),var(--blue))' },
  { name: 'Framer Motion', blurb: 'Declarative, buttery animations.',                   glyph: '✦', grad: 'linear-gradient(135deg,var(--violet),var(--pink))' },
  { name: 'Git & GitHub',  blurb: 'Version control & collaboration.',                   glyph: '⎇', grad: 'linear-gradient(135deg,#f05133,#c33)' },
]

export const chips = ['HTML5','CSS3','REST APIs','Vite','GSAP','Lenis','Responsive Design','Frontend Dev','Backend Dev','Full-Stack']

export const orbitTech = [
  { ring: 'o1', label: 'Mongo',    color: 'var(--green)',  rev: false, rotate: 0 },
  { ring: 'o2', label: 'Express',  color: 'var(--ink)',    rev: true,  rotate: 0 },
  { ring: 'o2', label: 'React',    color: 'var(--cyan)',   rev: false, rotate: 180 },
  { ring: 'o3', label: 'Node',     color: 'var(--green)',  rev: true,  rotate: 0 },
  { ring: 'o3', label: 'Tailwind', color: 'var(--violet)', rev: false, rotate: 120 },
]

export const projects = [
  {
    tag: 'Premium Gym · Concept Brand',
    title: 'IRONPULSE',
    overview: 'A high-energy fitness brand site with cinematic scroll, animated stats and class schedules. Built mobile-first with a focus on conversion and a bold, kinetic identity.',
    stack: ['React','Vite','Tailwind','Framer Motion','Lenis'],
    metrics: [{ b: '100%', s: 'Responsive' }, { b: '60fps', s: 'Scroll animation' }, { b: 'A+', s: 'Visual polish' }],
    live: '#', github: '#',
    visualGrad: 'linear-gradient(135deg,#fff1e6,#ffe0ec)',
    barGrad: 'linear-gradient(90deg,var(--orange),var(--pink))',
  },
  {
    tag: 'Luxury E-commerce · Concept',
    title: 'AURELIA',
    overview: 'An elegant luxury jewellery storefront with refined typography, product galleries and smooth Swiper-powered carousels. Quiet, premium motion that lets the products breathe.',
    stack: ['React','Tailwind','Framer Motion','Swiper.js','Lenis'],
    metrics: [{ b: 'Mobile', s: 'First design' }, { b: 'Swiper', s: 'Galleries' }, { b: 'Lux', s: 'Aesthetic' }],
    live: '#', github: '#',
    visualGrad: 'linear-gradient(135deg,#f3eaff,#e6f0ff)',
    barGrad: 'linear-gradient(90deg,var(--violet),var(--blue))',
  },
  {
    tag: 'Brand Rebuild · Live Client · Nagpur',
    title: 'Pukhraj Jewellers',
    overview: 'A full brand rebuild for a real Nagpur jeweller. My most elaborate build — real brand research plus custom features: a <b>gold-savings calculator</b>, a <b>jewellery-finder quiz</b>, and a <b>WhatsApp-integrated appointment</b> flow.',
    stack: ['React','Vite','Tailwind','Framer Motion','WhatsApp API'],
    metrics: [{ b: '3', s: 'Custom tools' }, { b: 'Real', s: 'Brand research' }, { b: 'WhatsApp', s: 'Booking flow' }],
    live: '#', github: '#',
    visualGrad: 'linear-gradient(135deg,#fff6e0,#ffe9d6)',
    barGrad: 'linear-gradient(90deg,#d4a017,var(--orange))',
  },
]

export const process = [
  { step: '01', title: 'Research',    blurb: 'Understand the brand, users and goals before a single line of code.', grad: 'linear-gradient(135deg,var(--blue),var(--cyan))' },
  { step: '02', title: 'Design',      blurb: 'Wireframes to high-fidelity UI, motion direction and a design system.', grad: 'linear-gradient(135deg,var(--violet),var(--blue))' },
  { step: '03', title: 'Development', blurb: 'Clean, component-driven code. Front-end, APIs and database wired up.', grad: 'linear-gradient(135deg,var(--pink),var(--violet))' },
  { step: '04', title: 'Testing',     blurb: 'Cross-device QA, performance tuning and accessibility checks.', grad: 'linear-gradient(135deg,var(--orange),var(--pink))' },
  { step: '05', title: 'Deployment',  blurb: 'Shipped to Vercel / Render with CI, then iterated on feedback.', grad: 'linear-gradient(135deg,var(--green),var(--cyan))' },
]

export const experience = [
  { when: '2025 — Present', title: 'Freelance Full-Stack Developer', role: 'Self-employed · Nagpur', blurb: 'Building production React websites for clients and brands — including a live brand rebuild for Pukhraj Jewellers with custom interactive tools and a WhatsApp booking flow.' },
  { when: '2024 — 2025', title: 'Personal & Concept Projects', role: 'IRONPULSE · AURELIA', blurb: 'Self-directed builds to master modern frontend: advanced animation with Framer Motion & GSAP, smooth scrolling with Lenis, and reusable component architecture.' },
  { when: 'Graduated', title: 'Bachelor of Computer Applications (BCA)', role: 'Foundations in CS & Web Development', blurb: 'Built a strong base in programming, databases and software fundamentals — then went deep on the full MERN stack independently.' },
]

export const services = [
  { title: 'Website Development',     blurb: 'Fast, animated, responsive marketing & brand sites that convert.', grad: 'linear-gradient(135deg,var(--blue),var(--cyan))', icon: 'monitor' },
  { title: 'Full-Stack Applications', blurb: 'End-to-end MERN apps with auth, dashboards and real data.', grad: 'linear-gradient(135deg,var(--violet),var(--pink))', icon: 'code' },
  { title: 'Landing Pages',           blurb: 'High-converting, conversion-focused pages with bold motion.', grad: 'linear-gradient(135deg,var(--pink),var(--orange))', icon: 'home' },
  { title: 'Dashboard Systems',       blurb: 'Data-rich admin panels and analytics interfaces.', grad: 'linear-gradient(135deg,var(--orange),var(--green))', icon: 'grid' },
  { title: 'API Development',         blurb: 'Clean, documented REST APIs with Node & Express.', grad: 'linear-gradient(135deg,var(--green),var(--cyan))', icon: 'link' },
  { title: 'UI/UX Implementation',    blurb: 'Pixel-perfect translation of designs into living interfaces.', grad: 'linear-gradient(135deg,var(--cyan),var(--violet))', icon: 'target' },
]

export const testimonials = [
  { quote: 'Vedant delivered a site that genuinely surprised us. The animations are smooth and the whole thing just feels premium — exactly what our brand needed.', name: 'Pukhraj Jewellers', title: 'Client · Nagpur', av: 'PJ', grad: 'linear-gradient(135deg,var(--blue),var(--violet))' },
  { quote: 'Fast, communicative, and obsessive about the details. He turned a rough idea into something that looked like it cost ten times the budget.', name: 'Rohit K.', title: 'Startup Founder', av: 'RK', grad: 'linear-gradient(135deg,var(--pink),var(--orange))' },
  { quote: 'The kind of developer who cares about the easing on a hover. Rare. The portfolio alone made the hiring decision easy.', name: 'Ananya M.', title: 'Design Lead', av: 'AM', grad: 'linear-gradient(135deg,var(--green),var(--cyan))' },
]

export const contactMethods = [
  { icon: 'mail',   b: profile.email, s: 'Email me directly' },
  { icon: 'phone',  b: profile.phone, s: 'Available on WhatsApp' },
  { icon: 'pin',    b: 'Nagpur, Maharashtra', s: 'Open to remote worldwide' },
]
