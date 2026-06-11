# SAKURA · 桜 — Japanese Café & Restaurant

An award-leaning, mobile-first single-page site for an authentic Japanese café & restaurant.
Zen × modern Tokyo aesthetic, built with the requested stack.

**Stack:** React 18 · Vite · Tailwind CSS v3 · Framer Motion · Lenis · Swiper · React Icons
Frontend only — no backend, no login.

---

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → /dist
npm run preview    # preview the build
```

Requires Node 18+.

---

## Responsive design — how it works (phone → laptop → desktop)

This was the priority. The site is mobile-first and fluid; nothing relies on a single fixed width.

- **Fluid spacing & type.** Sections use `clamp()` for padding and font sizes (`.section`, `.h-display`,
  `.h-section`, `.eyebrow` in `src/index.css`), so the layout breathes smoothly between a 360px phone
  and a 1440px laptop instead of jumping at breakpoints.
- **Breakpoints.** Tailwind screens are `xs 480 · sm 640 · md 768 · lg 1024 · xl 1280` (`tailwind.config.js`).
  Grids step up cleanly, e.g. dishes go `1 → 2 (xs) → 3 (sm) → 5 (lg)` columns.
- **No horizontal scroll.** `overflow-x: clip` on `body` / `#root`, plus `.no-min` (`min-width: 0`) on grid
  and flex children that would otherwise force overflow — the usual culprits on mobile.
- **Touch vs. mouse.** The custom cursor and heavier hover effects only activate on fine pointers
  (`@media (pointer: fine)`); touch devices get a clean native experience. Petal count drops on small screens.
- **Mobile chrome.** A sticky bottom CTA bar + WhatsApp button appear only under `sm`; the desktop
  floating action buttons appear only at `sm+`. The mobile drawer locks body scroll while open and
  respects `env(safe-area-inset-bottom)` for notched phones.
- **Accessibility floor.** Visible keyboard focus, `prefers-reduced-motion` disables animation and Lenis,
  and `prefers-color-scheme` seeds the dark/light theme on first load.

Quick test: open dev tools → device toolbar, and sweep the width from ~360px upward. Everything reflows.

---

## Structure

```
src/
  hooks/useLenis.js          smooth scroll + scrollToId helper
  lib/
    content.js               ← single source of truth for ALL copy & data
    motion.jsx               shared Framer Motion variants + <Reveal/>
  components/                Loader, Navbar, CustomCursor, ScrollProgress,
                             SakuraPetals, Marquee, FloatingButtons (+ MobileCTA)
  sections/                  Hero, Story, SignatureDishes, ChefSpecial, StreetFood,
                             Culture, Seasonal, Matcha, Gallery, Reviews, Instagram,
                             Reservation, Location, FAQ, Footer
  App.jsx                    composition + dark mode + smooth scroll
  index.css                  design tokens, washi texture, dark theme, base
```

Architecture mirrors a section-per-file pattern with one `content.js` data source and shared
Motion primitives, so adding or reordering a section is a one-line change in `App.jsx`.

---

## Customise

- **Copy / dishes / reviews / hours:** all in `src/lib/content.js`.
- **Phone & WhatsApp:** `BRAND.phone` and `BRAND.whatsapp` in `content.js` (drives the call button,
  floating WhatsApp, and the reservation form, which opens a pre-filled WhatsApp message).
- **Colours & fonts:** `tailwind.config.js` (palette) and `index.html` (Google Fonts).
- **Photos:** the Gallery and Instagram sections use gradient "plates" so the project runs with zero
  image assets. Drop real images into `src/assets/` (or `public/`) and swap the gradient `<div>` /
  background for an `<img>`.
- **Google Map:** replace `LOCATION.mapsEmbed` in `content.js` with your venue's embed URL.

---

## Optional add-ons (per the brief)

GSAP and a Three.js hero object were listed as optional. They're intentionally left out to keep the
build lean and reliable — the hero parallax, waves, and petals are done with SVG + Framer Motion.
Both drop in cleanly if you want them later:

```bash
npm install gsap @gsap/react three @react-three/fiber
```

A natural first target for GSAP is a pinned horizontal scroll on the Signature Dishes section.
