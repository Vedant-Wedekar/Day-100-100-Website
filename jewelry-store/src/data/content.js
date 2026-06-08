// ============================================================
//  AURELIA — central content store.
//  All copy, products, collections & contact info live here so
//  components stay clean and the site is easy to re-skin.
//  Photography uses Unsplash placeholders — swap for brand assets.
// ============================================================

const u = (id, w = 800, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Collections", id: "collections" },
  { label: "Bestsellers", id: "bestsellers" },
  { label: "Bridal", id: "bridal" },
  { label: "Bespoke", id: "bespoke" },
  { label: "Craft", id: "craft" },
  { label: "Contact", id: "contact" },
];

export const STATS = [
  { value: 75, suffix: "+", label: "Years of Heritage" },
  { value: 48000, suffix: "+", label: "Happy Patrons" },
  { value: 12000, suffix: "+", label: "Bespoke Designs" },
  { value: 60, suffix: "+", label: "Cities Served" },
];

export const COLLECTIONS = [
  { name: "Gold", tag: "22K & 18K", img: u("1610694955371-d4a3e0ce4b52", 700, 900), blurb: "Timeless yellow-gold craftsmanship." },
  { name: "Diamond", tag: "VVS Certified", img: u("1605100804763-247f67b3557e", 700, 900), blurb: "Brilliance graded for forever." },
  { name: "Bridal", tag: "Heirloom Sets", img: u("1535632066927-ab7c9ab60908", 700, 900), blurb: "Sets worthy of your vows." },
  { name: "Wedding", tag: "His & Hers", img: u("1599643478518-a784e5dc4c8f", 700, 900), blurb: "Bands that bind a lifetime." },
  { name: "Silver", tag: "925 Sterling", img: u("1611591437281-460bfbe1220a", 700, 900), blurb: "Everyday shine, refined." },
  { name: "Daily Wear", tag: "Light & Easy", img: u("1599643477877-530eb83abc8e", 700, 900), blurb: "Effortless pieces for every day." },
  { name: "Luxury", tag: "Haute Joaillerie", img: u("1602173574767-37ac01994b2a", 700, 900), blurb: "One-of-one statement art." },
];

export const BESTSELLERS = [
  { name: "Aurelia Solitaire Ring", price: "₹ 1,24,000", img: u("1605100804763-247f67b3557e", 600, 700), tag: "Diamond" },
  { name: "Champagne Drop Earrings", price: "₹ 86,500", img: u("1535632066927-ab7c9ab60908", 600, 700), tag: "Gold" },
  { name: "Eternity Tennis Bracelet", price: "₹ 1,98,000", img: u("1611591437281-460bfbe1220a", 600, 700), tag: "Diamond" },
  { name: "Heritage Gold Necklace", price: "₹ 2,45,000", img: u("1599643478518-a784e5dc4c8f", 600, 700), tag: "Bridal" },
  { name: "Pavé Halo Pendant", price: "₹ 64,000", img: u("1602173574767-37ac01994b2a", 600, 700), tag: "Daily" },
  { name: "Regal Kundan Set", price: "₹ 3,10,000", img: u("1610694955371-d4a3e0ce4b52", 600, 700), tag: "Bridal" },
];

export const BRIDAL = [
  { title: "Bridal Sets", img: u("1535632066927-ab7c9ab60908", 800, 1000), span: "lg:col-span-2 lg:row-span-2" },
  { title: "Engagement Rings", img: u("1605100804763-247f67b3557e", 600, 600) },
  { title: "Wedding Bands", img: u("1599643478518-a784e5dc4c8f", 600, 600) },
  { title: "Maang Tikka", img: u("1610694955371-d4a3e0ce4b52", 600, 600) },
  { title: "Bridal Bangles", img: u("1611591437281-460bfbe1220a", 600, 600) },
];

export const CATEGORIES = [
  "Rings", "Necklaces", "Earrings", "Bangles",
  "Bracelets", "Pendants", "Mangalsutra", "Nose Pins",
];

export const CRAFT_STEPS = [
  { no: "01", title: "Design & Sketch", desc: "Master designers translate your vision into detailed CAD renders and hand sketches." },
  { no: "02", title: "Wax & Casting", desc: "Precision lost-wax casting in 22K gold and platinum by veteran artisans." },
  { no: "03", title: "Stone Setting", desc: "Each certified stone is hand-set under magnification for flawless symmetry." },
  { no: "04", title: "Polish & Hallmark", desc: "Final hand-polish, BIS hallmarking and lifetime authenticity certification." },
];

export const TESTIMONIALS = [
  { name: "Ananya Mehta", city: "Mumbai", text: "My bridal set was beyond anything I imagined. The craftsmanship and personal attention made me feel truly special.", img: u("1438761681033-6461ffad8d80", 200, 200) },
  { name: "Rohan & Priya", city: "Delhi", text: "We designed our wedding bands here. The bespoke process was seamless and the result is a forever keepsake.", img: u("1531123897727-8f129e1688ce", 200, 200) },
  { name: "Sara Kapoor", city: "Bengaluru", text: "Exceptional quality and certification you can trust. The diamond solitaire sparkles like nothing I've seen.", img: u("1494790108377-be9c29b29330", 200, 200) },
  { name: "Vikram Nair", city: "Chennai", text: "Bought an anniversary pendant — the team helped me choose perfectly. Truly a heritage house of jewellery.", img: u("1507003211169-0a1dd7228f2d", 200, 200) },
];

export const GALLERY = [
  u("1515562141207-7a88fb7ce338", 600, 800),
  u("1599643478518-a784e5dc4c8f", 600, 600),
  u("1605100804763-247f67b3557e", 600, 750),
  u("1610694955371-d4a3e0ce4b52", 600, 900),
  u("1611591437281-460bfbe1220a", 600, 600),
  u("1602173574767-37ac01994b2a", 600, 800),
  u("1535632066927-ab7c9ab60908", 600, 700),
  u("1599643477877-530eb83abc8e", 600, 650),
];

export const OFFERS = [
  { title: "Festival Edit", sub: "Up to 25% off making charges", note: "Limited period", accent: "from-gold/90 to-champ/80" },
  { title: "Wedding Season", sub: "Complimentary bridal styling", note: "Book a consult", accent: "from-ink to-char" },
  { title: "New Arrivals", sub: "The Aurelia Spring Collection", note: "Just launched", accent: "from-champ/80 to-gold/90" },
];

export const CONTACT = {
  address: "Aurelia House, 12 Heritage Mile, Banjara Hills, Hyderabad 500034",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "concierge@aurelia.jewels",
  hours: "Mon – Sun · 10:30 AM – 8:30 PM",
};

// gentle simulated live metal rates (UI only)
export const RATES = {
  gold: { label: "Gold 22K", value: "₹ 7,142", unit: "/g", change: "+0.4%" },
  silver: { label: "Silver", value: "₹ 96.20", unit: "/g", change: "-0.2%" },
};
