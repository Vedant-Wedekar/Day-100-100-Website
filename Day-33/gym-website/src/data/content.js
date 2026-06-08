// ============================================================
//  Central content store — keeps components clean & reusable.
//  Images use Unsplash source URLs as professional photo
//  placeholders (swap for real brand assets in production).
// ============================================================

import {
  FaDumbbell, FaFireAlt, FaHeartbeat, FaUserShield,
  FaRunning, FaBolt, FaSpa,
} from "react-icons/fa";

const img = (id, w = 800, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Programs", id: "programs" },
  { label: "Trainers", id: "trainers" },
  { label: "Facilities", id: "facilities" },
  { label: "Results", id: "results" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

export const STATS = [
  { value: 12500, suffix: "+", label: "Active Members" },
  { value: 48, suffix: "", label: "Elite Trainers" },
  { value: 15, suffix: "", label: "Years Experience" },
  { value: 9300, suffix: "+", label: "Success Stories" },
];

export const PROGRAMS = [
  { icon: FaDumbbell, title: "Weight Training", desc: "Progressive overload programming built to pack on lean, dense muscle.", tag: "Hypertrophy" },
  { icon: FaFireAlt, title: "Fat Loss", desc: "High-burn metabolic circuits that strip fat without killing strength.", tag: "Cut" },
  { icon: FaBolt, title: "Strength Training", desc: "Powerlifting fundamentals — squat, bench, deadlift, repeat, dominate.", tag: "Power" },
  { icon: FaUserShield, title: "Personal Training", desc: "1-on-1 coaching tailored to your body, goals and schedule.", tag: "Coached" },
  { icon: FaRunning, title: "CrossFit", desc: "Constantly varied, high-intensity functional WODs in a pack.", tag: "Conditioning" },
  { icon: FaHeartbeat, title: "Cardio Training", desc: "Engine-building intervals across rowers, bikes and assault zones.", tag: "Endurance" },
  { icon: FaSpa, title: "Yoga & Flexibility", desc: "Recover, mobilize and bulletproof your joints for the long game.", tag: "Mobility" },
];

export const TRAINERS = [
  { name: "Marcus Vance", role: "Head Strength Coach", exp: "12 yrs", spec: "Powerlifting · Hypertrophy", img: img("1567013127542-490d757e51fc") },
  { name: "Lena Cruz", role: "Conditioning Lead", exp: "9 yrs", spec: "CrossFit · Metcon", img: img("1594381898411-846e7d193883") },
  { name: "Dré Coleman", role: "Performance Coach", exp: "11 yrs", spec: "Athletic Power · Speed", img: img("1571019614242-c5c5dee9f50b") },
  { name: "Aisha Rahman", role: "Mobility Specialist", exp: "8 yrs", spec: "Yoga · Rehab · Flexibility", img: img("1518611012118-696072aa579a") },
];

export const FACILITIES = [
  { title: "Strength Zone", desc: "Calibrated plates, mono-lifts & competition racks.", img: img("1534438327276-14e5300c3a48", 900, 700), span: "lg:col-span-2 lg:row-span-2" },
  { title: "Cardio Zone", desc: "Curved treadmills, rowers & assault bikes.", img: img("1540497077202-7c8a3999166f", 600, 500) },
  { title: "Functional Area", desc: "Turf, sleds, ropes & rigs.", img: img("1517836357463-d25dfeac3438", 600, 500) },
  { title: "Steam & Sauna", desc: "Recovery suite with steam and cold plunge.", img: img("1571902943202-507ec2618e8f", 600, 500) },
  { title: "Locker Rooms", desc: "Luxury showers & secure smart lockers.", img: img("1558611848-73f7eb4001a1", 600, 500) },
];

export const TRANSFORMATIONS = [
  { name: "Jordan M.", weeks: "16 weeks", before: img("1581009146145-b5ef050c2e1e", 500, 600), after: img("1583454110551-21f2fa2afe61", 500, 600), quote: "Lost 22kg and finally deadlift double bodyweight. This place rebuilt me." },
  { name: "Priya K.", weeks: "20 weeks", before: img("1518310383802-640c2de311b2", 500, 600), after: img("1550345332-09e3ac987658", 500, 600), quote: "From zero confidence to competing on stage. The coaches never let me coast." },
  { name: "Sam O.", weeks: "12 weeks", before: img("1534258936925-c58bed479fcf", 500, 600), after: img("1576678927484-cc907957088c", 500, 600), quote: "Added 30kg to my squat and dropped my body fat by half. Insane support." },
];

export const PLANS = [
  { name: "Monthly", price: 49, period: "/mo", desc: "Flexible, no commitment.", perks: ["Full gym access", "2 group classes / wk", "Locker & towel service", "Mobile workout app"], featured: false },
  { name: "Quarterly", price: 39, period: "/mo", desc: "Best value for momentum.", perks: ["Everything in Monthly", "Unlimited group classes", "1 PT session / month", "Nutrition starter plan", "Recovery suite access"], featured: true },
  { name: "Annual", price: 29, period: "/mo", desc: "Commit. Transform. Save big.", perks: ["Everything in Quarterly", "4 PT sessions / month", "Full nutrition coaching", "Body composition scans", "Guest passes x4"], featured: false },
];

export const GALLERY = [
  img("1534438327276-14e5300c3a48", 600, 800),
  img("1540497077202-7c8a3999166f", 600, 600),
  img("1517836357463-d25dfeac3438", 600, 700),
  img("1571019613454-1cb2f99b2d8b", 600, 900),
  img("1532384748853-8f54a8f476e2", 600, 600),
  img("1599058917212-d750089bc07e", 600, 800),
  img("1583454110551-21f2fa2afe61", 600, 700),
  img("1546483875-ad9014c88eba", 600, 600),
];

export const TESTIMONIALS = [
  { name: "Ethan R.", role: "Member · 2 yrs", text: "The energy here is unmatched. I've trained at five gyms — none come close to the coaching and community at IRONPULSE.", img: img("1500648767791-00dcc994a43e", 200, 200) },
  { name: "Maya T.", role: "Member · 1 yr", text: "Booked a free trial on a whim and never left. The trainers actually care about your progress, not just your money.", img: img("1438761681033-6461ffad8d80", 200, 200) },
  { name: "Carlos D.", role: "Member · 3 yrs", text: "Hands down the best facility in the city. The equipment is elite and the recovery suite is a game changer.", img: img("1507003211169-0a1dd7228f2d", 200, 200) },
  { name: "Nina P.", role: "Member · 8 mo", text: "I came in nervous and unfit. Eight months later I'm the strongest I've ever been. Forever grateful.", img: img("1494790108377-be9c29b29330", 200, 200) },
];

export const CONTACT = {
  address: "27 Forge Street, Iron District, Metro City 90210",
  phone: "+1 (555) 018-2274",
  whatsapp: "15550182274",
  email: "train@ironpulse.fit",
};
