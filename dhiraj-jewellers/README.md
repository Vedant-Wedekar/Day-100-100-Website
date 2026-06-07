# Dhiraj Jewellers — "Where Elegance Meets Tradition"

A premium, mobile-first website for Dhiraj Jewellers, Nagpur (est. 1996) — a rich, regal
heritage design distinct from a typical light-luxury jeweller site.

Deep maroon / oxblood + emerald + antique-gold palette · dark theme · Playfair Display
serif + Mulish body · ornamental arches & mandala motifs. Frontend only — every action
routes to WhatsApp / Call / Maps.

## Tech Stack
- React 18 + Vite
- Tailwind CSS (custom regal theme)
- Framer Motion (reveals, stagger, parallax, twinkles, counters)
- React Icons
- Lenis (smooth scrolling)
- Swiper.js (reviews carousel)

## Getting Started
    npm install
    npm run dev        # local dev server
    npm run build      # production build -> dist/
    npm run preview    # preview the build

## Sections
1. Hero — regal centered arch, mandala rings, twinkling gold, dual CTAs
2. Heritage — brand story (since 1996), trust pillars, animated stats
3. Collections — filterable grid (All/Gold/Diamond/Bridal/Silver) + marquee
4. Signature Pieces — product cards with wishlist + WhatsApp enquiry
5. Bridal & Traditional — bento gallery
6. Why Dhiraj — four trust pillars (exchange, making, hallmark, service)
7. Gallery + Instagram — masonry showroom + @dhiraj_jewellers_ strip
8. Reviews + Gold Rates — auto-scroll carousel + animated rate cards
9. Visit — Call/WhatsApp/Directions + appointment form + map + store info
10. FAQ — accordion
11. Footer — CTA, quick links, collections, contact

## Premium Features
Floating WhatsApp + Call · mobile sticky CTA bar · scroll progress bar · scroll-to-top ·
loading screen · page reveal · parallax · animated counters · Lenis smooth scroll ·
collection filters · wishlist UI · sticky navbar with active-section highlighting ·
animated mobile drawer.

## Responsive
Verified zero horizontal overflow and correct layout at 360 / 390 / 768 / 1024 / 1366 /
1440px. Two-column grids use explicit grid-cols-1 on mobile; marquee/overflow contained
via overflow-x: clip on html/body/#root.

## Project Structure
    src/
    |- components/   Navbar, Loader, FloatingActions, Motion
    |- sections/     Hero, Heritage, Collections, Signature, Bridal, Craft,
    |                Gallery, Reviews, Visit, Faq, Footer
    |- hooks/        useScroll.js (useLenis + useActiveSection)
    |- data/         content.js  <-- SINGLE SOURCE OF TRUTH
    |- App.jsx, main.jsx, index.css

## Customization
- All copy, products, rates, contact: src/data/content.js
- Colours & fonts: tailwind.config.js + font import atop src/index.css
- Images: Unsplash placeholders — replace u(...) IDs in content.js + the hero/heritage
  image URLs with real Dhiraj photography from the studio / Instagram.
- Map iframe in Visit.jsx is a Nagpur placeholder — swap for the exact Google Maps embed.

## Real Brand Details Used
Verified from @dhiraj_jewellers_, newdhirajjewellers.com & listings:
Established 1996 · 4.6 rating (296 reviews) · "Latest & Traditional Designs" ·
100% old gold exchange · 8.5% making charges · BIS 916 hallmarked ·
Manewada Cement Road, opp. Indian Bank, Nagpur · phones 0712 2743070 / 98225 63878.

## Notes
Images load from Unsplash (need internet in the browser). The appointment form is
frontend-only and hands off to WhatsApp. Gold/silver rates are illustrative UI.
