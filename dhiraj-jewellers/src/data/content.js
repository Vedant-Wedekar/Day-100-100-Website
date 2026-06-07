// ============================================================
//  DHIRAJ JEWELLERS — central content store
//  Real details from the official Instagram (@dhiraj_jewellers_),
//  newdhirajjewellers.com & public listings (est. 1996).
//  Photography uses Unsplash placeholders — swap for brand assets.
// ============================================================

const u = (id, w = 800, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const BRAND = {
  name: "Dhiraj Jewellers",
  city: "Nagpur",
  since: "1996",
  tagline: "Where Elegance Meets Tradition",
  sub: "Latest & Traditional Designs",
  handle: "dhiraj_jewellers_",
  rating: "4.6",
  reviews: "296",
  making: "8.5%",
  purity: "BIS 916 Hallmarked",
};

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Heritage", id: "heritage" },
  { label: "Collections", id: "collections" },
  { label: "Signature", id: "signature" },
  { label: "Bridal", id: "bridal" },
  { label: "Gallery", id: "gallery" },
  { label: "Reviews", id: "reviews" },
  { label: "Visit", id: "visit" },
];

export const CONTACT = {
  phone1: "0712 2743070",
  phone2: "98225 63878",
  phoneRaw: "9822563878",
  whatsapp: "919822563878",
  email: "dhirajjewellers9@gmail.com",
  website: "newdhirajjewellers.com",
  address: "Manewada Cement Road, opposite Indian Bank, Nagpur 440024",
  maps: "https://maps.google.com/?q=Dhiraj+Jewellers+Manewada+Nagpur",
  instagram: "https://www.instagram.com/dhiraj_jewellers_/",
  hours: "Mon – Sun · 10:30 AM – 8:30 PM",
};

export const STATS = [
  { value: 28, suffix: "+", label: "Years of Heritage" },
  { value: 60000, suffix: "+", label: "Happy Families" },
  { value: 4.6, suffix: "★", label: "Customer Rating", decimal: true },
  { value: 100, suffix: "%", label: "Exchange Value" },
];

export const TRUST = [
  { title: "100% Exchange", desc: "Full value exchange on your old gold, always transparent." },
  { title: "8.5% Making", desc: "Among the lowest making charges in Nagpur." },
  { title: "BIS Hallmarked", desc: "Every piece certified 916 pure gold." },
  { title: "Since 1996", desc: "Nearly three decades of trust in Manewada." },
];

export const COLLECTIONS = [
  { name: "Gold", tag: "22K · 916", img: u("1610694955371-d4a3e0ce4b52", 700, 900) },
  { name: "Diamond", tag: "Certified", img: u("1605100804763-247f67b3557e", 700, 900) },
  { name: "Bridal", tag: "Heirloom Sets", img: u("1535632066927-ab7c9ab60908", 700, 900) },
  { name: "Necklace", tag: "Statement", img: u("1599643478518-a784e5dc4c8f", 700, 900) },
  { name: "Bangles", tag: "Kada & Patli", img: u("1611591437281-460bfbe1220a", 700, 900) },
  { name: "Earrings", tag: "Jhumka & Studs", img: u("1635767798638-3e25273a8236", 700, 900) },
  { name: "Mangalsutra", tag: "Sacred", img: u("1599643477877-530eb83abc8e", 700, 900) },
  { name: "Silver", tag: "Payal & Articles", img: u("1611652022419-a9419f74343d", 700, 900) },
  { name: "Rashi Ratna", tag: "Gemstones", img: u("1602173574767-37ac01994b2a", 700, 900), hero: true },
];

export const SIGNATURE = [
  { name: "Antique Temple Haar", price: "On Request", img: u("1599643478518-a784e5dc4c8f", 600, 700), tag: "Traditional" },
  { name: "Polki Choker Set", price: "On Request", img: u("1535632066927-ab7c9ab60908", 600, 700), tag: "Bridal" },
  { name: "Emerald Gold Necklace", price: "On Request", img: u("1610694955371-d4a3e0ce4b52", 600, 700), tag: "Latest" },
  { name: "Diamond Solitaire Ring", price: "On Request", img: u("1605100804763-247f67b3557e", 600, 700), tag: "Diamond" },
  { name: "Jadau Jhumka", price: "On Request", img: u("1635767798638-3e25273a8236", 600, 700), tag: "Traditional" },
  { name: "Contemporary Kada Pair", price: "On Request", img: u("1611591437281-460bfbe1220a", 600, 700), tag: "Latest" },
];

export const BRIDAL = [
  { title: "Bridal Sets", img: u("1535632066927-ab7c9ab60908", 800, 1000), span: "lg:col-span-2 lg:row-span-2" },
  { title: "Temple Jewellery", img: u("1599643478518-a784e5dc4c8f", 600, 600) },
  { title: "Polki & Kundan", img: u("1605100804763-247f67b3557e", 600, 600) },
  { title: "Maang Tikka", img: u("1610694955371-d4a3e0ce4b52", 600, 600) },
  { title: "Bridal Bangles", img: u("1611591437281-460bfbe1220a", 600, 600) },
];

export const CRAFT = [
  { no: "01", title: "Latest & Traditional", desc: "From age-old temple designs to the newest trends — both under one roof." },
  { no: "02", title: "Hallmarked Purity", desc: "Every gram is BIS 916 certified. No compromise, ever." },
  { no: "03", title: "Honest Pricing", desc: "Transparent rates, 8.5% making and 100% old-gold exchange." },
  { no: "04", title: "Service for Life", desc: "Free cleaning, polishing and lifetime care for your jewellery." },
];

export const GALLERY = [
  u("1515562141207-7a88fb7ce338", 600, 800),
  u("1599643478518-a784e5dc4c8f", 600, 600),
  u("1605100804763-247f67b3557e", 600, 750),
  u("1610694955371-d4a3e0ce4b52", 600, 900),
  u("1611591437281-460bfbe1220a", 600, 600),
  u("1602173574767-37ac01994b2a", 600, 800),
  u("1635767798638-3e25273a8236", 600, 700),
  u("1599643477877-530eb83abc8e", 600, 650),
];

export const INSTA = [
  { caption: "Latest necklace drop ✨", likes: "1.2k", img: u("1599643478518-a784e5dc4c8f", 500, 700) },
  { caption: "24K rate update", likes: "890", img: u("1610694955371-d4a3e0ce4b52", 500, 700) },
  { caption: "Happy bride 💛", likes: "2.1k", img: u("1535632066927-ab7c9ab60908", 500, 700) },
  { caption: "Only 8.5% making", likes: "1.6k", img: u("1611591437281-460bfbe1220a", 500, 700) },
  { caption: "Diamond brilliance 💎", likes: "1.4k", img: u("1605100804763-247f67b3557e", 500, 700) },
  { caption: "Temple jhumka", likes: "980", img: u("1635767798638-3e25273a8236", 500, 700) },
];

export const REVIEWS = [
  { name: "Meena Tai Wankhede", city: "Nagpur", text: "Buying from Dhiraj Jewellers for over 15 years. The staff is so polite and the designs — both latest and traditional — are unmatched in Manewada.", img: u("1438761681033-6461ffad8d80", 200, 200) },
  { name: "Rahul & Snehal", city: "Nagpur", text: "Got our entire wedding set here. 100% exchange on old gold and the lowest making charges we found. Completely transparent and trustworthy.", img: u("1531123897727-8f129e1688ce", 200, 200) },
  { name: "Anjali Deshpande", city: "Wardha", text: "The variety is fabulous and the quality is excellent. Hallmarked gold, fair price and wonderful service. Highly recommended.", img: u("1494790108377-be9c29b29330", 200, 200) },
  { name: "Suresh Patil", city: "Nagpur", text: "A glorious tradition of excellence. Their temple jewellery collection is the best in the city. Been a loyal customer since years.", img: u("1507003211169-0a1dd7228f2d", 200, 200) },
];

export const FAQ = [
  { q: "Where is Dhiraj Jewellers located?", a: "We're on Manewada Cement Road, opposite Indian Bank, Nagpur — serving the city with latest and traditional designs since 1996." },
  { q: "Do you offer old gold exchange?", a: "Yes — we offer 100% transparent exchange value on your old gold, with fair, honest evaluation every time." },
  { q: "What are your making charges?", a: "Among the lowest in Nagpur at just 8.5%, with complete transparency and no hidden costs." },
  { q: "Is your gold hallmarked?", a: "Absolutely. Every piece is BIS 916 hallmarked, guaranteeing certified 22K purity." },
  { q: "Do you make bridal & custom designs?", a: "Yes — we craft complete bridal sets, temple jewellery, polki, kundan and bespoke designs. Share your idea on WhatsApp and we'll bring it to life." },
  { q: "Do you have both latest and traditional designs?", a: "That's our specialty — from age-old temple and antique designs to the very latest contemporary trends, all under one roof." },
];

export const RATES = {
  gold22: { label: "Gold 22K", value: "₹ 7,142", unit: "/g", change: "+0.4%", up: true },
  gold24: { label: "Gold 24K", value: "₹ 7,790", unit: "/g", change: "+0.5%", up: true },
  silver: { label: "Silver", value: "₹ 96.20", unit: "/g", change: "-0.2%", up: false },
};
