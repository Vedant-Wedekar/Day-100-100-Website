# AURELIA — Luxury Jewellery Store

A premium, mobile-first jewellery storefront with an editorial luxury aesthetic — warm ivory canvas, espresso-black ink, and antique-gold accents, paired with Cormorant Garamond display type and Jost body type.

Frontend only. No backend, auth, or database. Every interaction (quick view, wishlist, inquiries) is handled client-side or routed to WhatsApp/phone.

## Tech Stack
- React 18 + Vite
- Tailwind CSS (custom luxury theme)
- Framer Motion — reveals, stagger, parallax, micro-interactions
- React Icons
- Lenis — smooth scrolling
- Swiper.js — testimonials carousel

## Getting Started
    npm install
    npm run dev        # local dev server
    npm run build      # production build -> dist/
    npm run preview    # preview the build

## Project Structure
    src/
    |- components/        Reusable UI
    |   |- Navbar.jsx        sticky nav, live gold/silver rates bar, mobile drawer
    |   |- Loader.jsx        branded loading screen
    |   |- FloatingActions.jsx  WhatsApp + Call + scroll-to-top
    |   |- Modals.jsx        QuickView + RingSize modals (frontend only)
    |   |- Motion.jsx        Reveal / stagger / SectionHead primitives
    |- sections/         Page sections (in render order)
    |   |- Hero.jsx          parallax hero + featured showcase
    |   |- About.jsx         brand story + animated trust stats
    |   |- Collections.jsx   editorial bento grid + marquee
    |   |- Bestsellers.jsx   product cards, quick view, wishlist, WhatsApp
    |   |- Bridal.jsx        bridal & wedding bento gallery
    |   |- Bespoke.jsx       custom design process + categories
    |   |- Craft.jsx         craftsmanship steps + certifications
    |   |- Offers.jsx        festival/wedding offers + EMI banner
    |   |- Services.jsx      ring size, care guide, gift, wedding planner
    |   |- Testimonials.jsx  auto-scrolling Swiper carousel
    |   |- Gallery.jsx       masonry showroom gallery
    |   |- Contact.jsx       address, hours, map embed, appointment CTA
    |   |- Footer.jsx        CTA banner, links, contact
    |- hooks/
    |   |- useScroll.js      useLenis + useActiveSection
    |- data/
    |   |- content.js        SINGLE SOURCE OF TRUTH - all copy, products, contact
    |- App.jsx
    |- main.jsx
    |- index.css             Tailwind + luxury globals, fonts, utilities

## Sections & Features
All 13 requested sections are implemented: Hero, About, Featured Collections, Best Sellers,
Bridal & Wedding, Bespoke/Custom, Categories, Craftsmanship, Testimonials, Gallery, Special
Offers, Contact, and Footer.

Jewellery-specific touches: live Gold/Silver rate widgets (UI), Book Store Visit, virtual
consultation CTA, jewellery care guide, ring-size guide modal, wedding planner, gift collection,
certification & hallmark info, EMI banner, and "Trusted by Thousands" testimonials.

Essential UX: floating WhatsApp + Call buttons, sticky navbar with active-section highlighting,
animated mobile menu, scroll-to-top, Lenis smooth scrolling, loading screen, page-reveal and
scroll-triggered animations, product quick-view modal, and wishlist toggle - all frontend only.

## Customization
- Content: edit src/data/content.js - products, collections, stats, rates, contact details.
- Theme colours & fonts: tailwind.config.js (gold / champ / ink / ivory) and the Google
  Fonts import at the top of src/index.css.
- Images: placeholders use Unsplash URLs. Replace the u(...) IDs in content.js and the
  hero/about/craft image URLs in their section files with your brand photography.
- WhatsApp / phone: set CONTACT.whatsapp and CONTACT.phone in content.js.
- Map: swap the OpenStreetMap iframe in Contact.jsx for your Google Maps embed.

## Notes
Images load from Unsplash, so they require an internet connection in the browser to display.
