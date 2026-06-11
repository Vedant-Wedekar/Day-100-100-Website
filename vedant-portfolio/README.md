# Vedant Wedekar — Portfolio (Vite + React + Framer Motion + Lenis)

A premium, animated developer portfolio. Clean-white base, vibrant gradients,
glassmorphism, custom cursor, ⌘K command menu, and scroll-driven motion.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Architecture

Follows a content-first, section-per-file structure:

```
src/
├─ main.jsx               # React entry
├─ App.jsx                # composes providers + chrome + sections
├─ index.css             # Tailwind layers + all component CSS (design tokens via CSS vars)
├─ data/
│  └─ content.js          # ⭐ SINGLE SOURCE OF TRUTH — edit everything here
├─ lib/
│  └─ smoothScroll.jsx     # Lenis provider + useSmoothScroll() (anchor scrolling)
├─ components/
│  ├─ Motion.jsx           # reusable primitives: Reveal, StaggerGroup/Item, WordReveal, variants
│  ├─ Magnetic.jsx         # magnetic hover button (Framer springs)
│  ├─ Cursor.jsx           # custom cursor (desktop only)
│  ├─ Chrome.jsx           # Loader, ScrollProgress, Background
│  ├─ Navbar.jsx           # floating glass nav
│  ├─ CommandMenu.jsx      # ⌘K / Ctrl+K palette
│  └─ Icon.jsx             # inline SVG icon set (no icon dependency)
└─ sections/               # one file per page section
   ├─ Hero.jsx  Marquee.jsx  About.jsx  Skills.jsx  Work.jsx
   ├─ Process.jsx  Experience.jsx  Services.jsx
   └─ Testimonials.jsx  Contact.jsx  Footer.jsx
```

### Where to edit what
- **All copy, links, projects, skills, testimonials** → `src/data/content.js`
- **Colours / spacing / effects** → CSS variables at the top of `src/index.css`
- **Animation timing** → variants in `src/components/Motion.jsx`

## Before you deploy — replace the placeholders
In `src/data/content.js`, swap every `#` and `example.com`:
- `profile.email`, `profile.phone`, `profile.resumeUrl`
- each `socials[].href`
- each `projects[].live` and `projects[].github`

Drop your résumé PDF in `/public` and point `resumeUrl` at `/your-resume.pdf`.

## Making the contact form live
`src/sections/Contact.jsx` has a `submit()` with a commented-out `fetch`.
Two options:
1. **Quick:** sign up for [EmailJS](https://www.emailjs.com) and call their SDK in `submit()`.
2. **Full-stack:** POST to your own `POST /api/contact` (Node/Express + MongoDB).
   The next step in this project is building that backend.

## Notes
- Smooth scroll is handled by **Lenis**; anchor links go through `useSmoothScroll().scrollTo()`.
- Fonts (Bricolage Grotesque / Instrument Serif / Sora) load from Google Fonts in `index.html`.
- Respects `prefers-reduced-motion`.
- Tailwind custom opacity steps (4/6/8) are registered in `tailwind.config.js` so
  slash-notation like `border-ink/8` compiles.

## Deploy (frontend)
Push to GitHub → import on **Vercel** → it auto-detects Vite. Build command
`npm run build`, output dir `dist`. Done.
