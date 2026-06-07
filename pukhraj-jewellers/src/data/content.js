// ============================================================
//  PUKHRAJ JEWELLERS — central content store
//  Real brand details sourced from the official Instagram
//  (@pukhrajjewellers_ngp) and public listings.
//  Photography uses Unsplash placeholders — swap for brand assets.
// ============================================================

const u = (id, w = 800, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const BRAND = {
  name: "Pukhraj Jewellers",
  city: "Nagpur",
  motto: "सत्यम · शुद्धम · सुंदरम",
  tagline: "Luxury That Feels Light",
  handle: "pukhrajjewellers_ngp",
  followers: "397k",
  rating: "4.9",
  makingCharges: "8.5%",
  purity: "22KT · 916 Hallmarked",
};

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Why Lightweight", id: "why" },
  { label: "Collections", id: "collections" },
  { label: "Calculator", id: "calculator" },
  { label: "Bestsellers", id: "bestsellers" },
  { label: "Reviews", id: "reviews" },
  { label: "Visit", id: "visit" },
];

export const CONTACT = {
  phone: "8087091660",
  phoneDisplay: "+91 80870 91660",
  whatsapp: "918087091660",
  email: "pukhrajjwells@gmail.com",
  address: "Manewada Main Road, near Belsare Children's Hospital, opposite Gyaneshwar Nagar Gate, Nagpur 440024",
  maps: "https://maps.app.goo.gl/QWM85BdF7zFNYVa2A",
  instagram: "https://www.instagram.com/pukhrajjewellers_ngp",
  hours: "Mon – Sun · 11:00 AM – 9:00 PM",
};

export const COMPARE = [
  { benefit: "Gold Weight", trad: "Heavy — 25–40g typical", pukhraj: "Up to 60% lighter", icon: "weight" },
  { benefit: "Design Size", trad: "Limited by gold cost", pukhraj: "Bigger, bolder designs", icon: "design" },
  { benefit: "Comfort", trad: "Heavy on the body", pukhraj: "Feather-light all day", icon: "comfort" },
  { benefit: "Daily Wear", trad: "Reserved for occasions", pukhraj: "Effortless everyday", icon: "daily" },
  { benefit: "Investment", trad: "More gold locked in", pukhraj: "Smarter value, less cost", icon: "invest" },
  { benefit: "Styling", trad: "Traditional only", pukhraj: "Modern + traditional", icon: "style" },
];

export const COLLECTIONS = [
  { name: "Bridal", tag: "Heirloom Sets", img: u("1599643478518-a784e5dc4c8f", 700, 900) },
  { name: "Wedding", tag: "His & Hers", img: u("1535632066927-ab7c9ab60908", 700, 900) },
  { name: "Mangalsutra", tag: "Sacred Bond", img: u("1610694955371-d4a3e0ce4b52", 700, 900) },
  { name: "Bangles", tag: "Stacks & Kadas", img: u("1611591437281-460bfbe1220a", 700, 900) },
  { name: "Necklace", tag: "Statement Pieces", img: u("1599643477877-530eb83abc8e", 700, 900) },
  { name: "Earrings", tag: "Studs to Jhumkas", img: u("1635767798638-3e25273a8236", 700, 900) },
  { name: "Diamond", tag: "Certified Sparkle", img: u("1605100804763-247f67b3557e", 700, 900) },
  { name: "Daily Wear", tag: "Light & Easy", img: u("1612225330812-01a9c6b355ec", 700, 900) },
  { name: "Lightweight", tag: "Signature Line", img: u("1602173574767-37ac01994b2a", 700, 900), hero: true },
];

export const FINDER = [
  { occasion: "Wedding", emoji: "💍", picks: ["Bridal", "Necklace", "Bangles"], blurb: "Complete bridal sets that dazzle without the weight." },
  { occasion: "Engagement", emoji: "💎", picks: ["Diamond", "Earrings"], blurb: "Certified diamond rings & delicate accents." },
  { occasion: "Daily Wear", emoji: "☀️", picks: ["Daily Wear", "Lightweight"], blurb: "Feather-light pieces made for everyday elegance." },
  { occasion: "Gift", emoji: "🎁", picks: ["Earrings", "Mangalsutra"], blurb: "Thoughtful gifting for the ones you love." },
  { occasion: "Festival", emoji: "✨", picks: ["Necklace", "Bangles"], blurb: "Festive statement jewellery that shines bright." },
  { occasion: "Anniversary", emoji: "❤️", picks: ["Diamond", "Mangalsutra"], blurb: "Mark the milestone with timeless brilliance." },
];

export const BESTSELLERS = [
  { name: "Featherlight Bridal Haar", weight: "18.4 g", saved: "42%", img: u("1599643478518-a784e5dc4c8f", 600, 700) },
  { name: "Rose-Gold Daily Mangalsutra", weight: "6.2 g", saved: "55%", img: u("1610694955371-d4a3e0ce4b52", 600, 700) },
  { name: "Airy Jali Kada (Pair)", weight: "12.8 g", saved: "48%", img: u("1611591437281-460bfbe1220a", 600, 700) },
  { name: "Whisper Diamond Studs", weight: "3.1 g", saved: "38%", img: u("1605100804763-247f67b3557e", 600, 700) },
  { name: "Cloud Choker Necklace", weight: "15.6 g", saved: "50%", img: u("1599643477877-530eb83abc8e", 600, 700) },
  { name: "Petal Jhumka Earrings", weight: "8.3 g", saved: "45%", img: u("1635767798638-3e25273a8236", 600, 700) },
];

export const TRANSFORMATIONS = [
  { name: "Aarti's Bridal Set", before: "52 g traditional haar", after: "21 g lightweight haar", saved: "60%", img: u("1535632066927-ab7c9ab60908", 600, 700) },
  { name: "Sneha's Daily Set", before: "18 g heavy chain", after: "7 g airy chain", saved: "61%", img: u("1599643477877-530eb83abc8e", 600, 700) },
  { name: "Pooja's Bangles", before: "40 g solid kadas", after: "16 g jali kadas", saved: "60%", img: u("1611591437281-460bfbe1220a", 600, 700) },
];

export const INSTA = [
  { type: "Reel", caption: "Viral lightweight haar 🔥", likes: "12.4k", img: u("1599643478518-a784e5dc4c8f", 500, 700) },
  { type: "Post", caption: "Bridal trial day ✨", likes: "8.1k", img: u("1535632066927-ab7c9ab60908", 500, 700) },
  { type: "Reel", caption: "60% lighter mangalsutra", likes: "21.7k", img: u("1610694955371-d4a3e0ce4b52", 500, 700) },
  { type: "Post", caption: "Customer love 💛", likes: "5.3k", img: u("1611591437281-460bfbe1220a", 500, 700) },
  { type: "Reel", caption: "How to reach Pukhraj 📍", likes: "9.9k", img: u("1605100804763-247f67b3557e", 500, 700) },
  { type: "Post", caption: "New diamond drop 💎", likes: "7.6k", img: u("1635767798638-3e25273a8236", 500, 700) },
];

export const REVIEWS = [
  { name: "Aarti Deshmukh", city: "Nagpur", text: "My entire bridal set weighs less than my mother's single necklace — but looks twice as grand! Pukhraj truly is the lightweight king.", img: u("1438761681033-6461ffad8d80", 200, 200) },
  { name: "Sneha & Rohit", city: "Wardha", text: "We saved almost 55% on gold weight for our wedding jewellery. Same royal look, smarter investment. Highly recommend.", img: u("1531123897727-8f129e1688ce", 200, 200) },
  { name: "Priya Joshi", city: "Amravati", text: "I wear my Pukhraj mangalsutra every single day — it's so light I forget I have it on. The design still turns heads.", img: u("1494790108377-be9c29b29330", 200, 200) },
  { name: "Vaishali Patil", city: "Nagpur", text: "Lowest making charges in the city and the most viral designs. The staff helped me pick the perfect festive set.", img: u("1487412720507-e7ab37603c6f", 200, 200) },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Years of Trust" },
  { value: 50000, suffix: "+", label: "Happy Customers" },
  { value: 15000, suffix: "+", label: "Lightweight Designs" },
  { value: 8000, suffix: "+", label: "Bridal Sets Delivered" },
];

export const FAQ = [
  { q: "What is lightweight jewellery?", a: "Lightweight jewellery uses innovative hollow, jali (mesh) and smart-engineering techniques to create big, beautiful designs with significantly less gold — often 40–60% lighter than traditional pieces, with the same luxurious look." },
  { q: "Is lightweight jewellery durable?", a: "Absolutely. Every Pukhraj piece is 22KT 916 BIS-hallmarked and crafted with reinforced techniques so it stays strong for daily and bridal wear, backed by our service guarantee." },
  { q: "How much gold can I save?", a: "Most customers save between 40% and 60% on gold weight versus a traditional design of the same visual size — meaning a smaller bill and a smarter investment. Try our live calculator above!" },
  { q: "Can I create custom designs?", a: "Yes. Share a reference or your idea on WhatsApp and our designers will craft a bespoke lightweight version tailored to your budget and occasion." },
  { q: "Do you provide bridal collections?", a: "We specialise in complete bridal collections — haar, chokers, mangalsutra, bangles, earrings and more — designed to look grand while staying remarkably light and comfortable for your big day." },
  { q: "What are your making charges?", a: "Among the lowest in Nagpur at just 8.5%, with full transparency and pan-India shipping available." },
];

// gentle simulated live rates (UI only)
export const RATES = {
  gold: { label: "Gold 22KT", value: "₹ 7,142", unit: "/g", change: "+0.4%", up: true },
  gold24: { label: "Gold 24KT", value: "₹ 7,790", unit: "/g", change: "+0.5%", up: true },
  silver: { label: "Silver", value: "₹ 96.20", unit: "/g", change: "-0.2%", up: false },
};
