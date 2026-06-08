# IRONPULSE — Premium Gym & Fitness Website

A modern, premium, production-quality gym landing site. Dark luxury fitness theme, mobile-first, heavily animated.

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- React Icons
- Lenis (smooth scrolling)
- Swiper.js (carousels / before-after / testimonials)

## Getting Started
```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the build
```

## Project Structure
```
src/
├── components/      # Reusable UI: Navbar, Loader, FloatingActions, Motion helpers
├── sections/       # Page sections: Hero, About, Programs, Trainers, Facilities,
│                   #   Transformations, Pricing, Gallery, Testimonials, Contact, Footer
├── hooks/          # useLenis (smooth scroll) + useActiveSection (nav highlight)
├── data/           # content.js — single source of truth for all copy/images
├── App.jsx         # composes sections + loader + page reveal
├── main.jsx        # entry
└── index.css       # Tailwind + global styles, glassmorphism, scrollbar, fonts
```

## Features
- Loading screen + page reveal animation
- Sticky navbar with active-section highlighting + animated mobile drawer
- Full-screen parallax hero with animated headline + glow blobs
- Animated count-up statistics
- Program cards with hover micro-interactions + marquee strip
- Trainer cards with sliding social icons
- Bento-style facilities grid
- Draggable before/after transformation slider
- Pricing plans with highlighted recommended tier
- Masonry gallery with hover zoom + lazy loading
- Auto-scroll testimonials carousel
- Contact section with map embed + WhatsApp CTA
- Floating WhatsApp + Call buttons, scroll-to-top
- Scroll-triggered + staggered Framer Motion animations throughout
- Fully responsive, mobile-first

## Customization
Edit `src/data/content.js` to change all text, plans, trainers, stats, contact info.
Image placeholders use Unsplash URLs — swap for your brand photography.
Theme colors (lime / ember accents) live in `tailwind.config.js`.
