# Pukhraj Jewellers — "Luxury That Feels Light"

A premium, mobile-first website for Pukhraj Jewellers, Nagpur — positioned around their
unique identity as **The Lightweight Jewellery King** (more design, less gold).

White luxury base · gold + rose-gold gradients · glassmorphism · Fraunces display serif +
Outfit body. Frontend only — every action routes to WhatsApp / Call / Maps.

## Tech Stack
- React 18 + Vite
- Tailwind CSS (custom luxury theme)
- Framer Motion (reveals, stagger, parallax, particles, counters)
- React Icons
- Lenis (smooth scrolling)
- Swiper.js (reviews carousel)

## Getting Started
    npm install
    npm run dev        # local dev server
    npm run build      # production build -> dist/
    npm run preview    # preview the build

## Sections (in order)
1. Hero — floating gold particles, parallax showcase, weight + savings badges
2. Why Lightweight — interactive Traditional VS Pukhraj comparison (the key section)
3. Featured Collections — filterable grid (All / Bridal / Daily / Diamond) + marquee
4. Lightweight Calculator — live gold + cost savings tool with animated bars
5. Bestsellers — product cards with weight, lightweight badge, wishlist, WhatsApp
6. Customer Transformations — before/after with % lighter
7. Instagram Showcase — reels/posts grid linking to @pukhrajjewellers_ngp
8. Jewellery Finder — tap-an-occasion recommender
9. Reviews + Trust Stats — auto-scroll carousel + animated counters
10. Gold Rate — animated live rate widgets (UI only)
11. Book Store Visit — Call / WhatsApp / Visit + appointment form + map + store info
12. FAQ — accordion
13. Footer — CTA banner, quick links, collections, contact, socials

## Premium Features
Floating WhatsApp + Call buttons · mobile sticky CTA bar · scroll progress indicator ·
scroll-to-top · premium loading screen · page reveal · parallax · animated counters ·
Lenis smooth scroll · collection filters · gold savings calculator · lightweight badges ·
sticky navbar with active-section highlighting · animated mobile menu.

## Project Structure
    src/
    |- components/   Navbar, Loader, FloatingActions, Motion (Reveal/SectionHead)
    |- sections/     One file per section (see list above)
    |- hooks/        useScroll.js (useLenis + useActiveSection)
    |- data/         content.js  <-- SINGLE SOURCE OF TRUTH
    |- App.jsx, main.jsx, index.css

## Customization
- All copy, products, collections, rates, contact details: src/data/content.js
- Brand colours & fonts: tailwind.config.js + the font import atop src/index.css
- Images: placeholders use Unsplash URLs — replace the u(...) IDs in content.js and the
  hero/section image URLs with real brand photography from the studio / Instagram.
- WhatsApp / phone / maps: set in the CONTACT object in content.js.
- The map iframe in BookVisit.jsx is a placeholder centred on Nagpur — swap for the exact
  Google Maps embed of the Manewada Main Road store.

## Real Brand Details Used
Verified from the official Instagram (@pukhrajjewellers_ngp) and public listings:
22KT 916 hallmarked · 8.5% making charges · pan-India shipping · 4.9 rating ·
motto "Satyam Shuddham Sundaram" · Manewada Main Road, near Belsare Hospital, Nagpur ·
phone 8087091660.

## Notes
Images load from Unsplash and need an internet connection in the browser to display.
The appointment form is frontend-only and hands off to WhatsApp with a prefilled message.
Gold/silver rates are illustrative UI, not a live feed.
