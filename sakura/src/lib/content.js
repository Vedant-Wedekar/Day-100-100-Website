// Single source of truth for all site copy & data.
// Edit here to update any section.

export const BRAND = {
  name: 'SAKURA',
  jp: '桜',
  phone: '+919876543210', // used for call + whatsapp links
  whatsapp: '919876543210',
  tagline: '日本の味、心の温もり',
  taglineEn: 'Taste of Japan, Warmth for the Soul',
}

export const NAV = [
  { label: 'Story', jp: '物語', href: '#story' },
  { label: 'Menu', jp: '献立', href: '#dishes' },
  { label: 'Matcha', jp: '抹茶', href: '#matcha' },
  { label: 'Gallery', jp: '写真', href: '#gallery' },
  { label: 'Visit', jp: '来店', href: '#location' },
]

export const MARQUEE = [
  'ラーメン', 'Ramen', '寿司', 'Sushi', 'うどん', 'Udon',
  '抹茶', 'Matcha', '天ぷら', 'Tempura', '弁当', 'Bento', '和食',
]

export const STORY = {
  eyebrow: '私たちの物語 · Our Story',
  title: 'A bowl is never just a bowl',
  body: 'Sakura began with a single pot of tonkotsu broth simmered for eighteen hours, and a belief that hospitality — omotenashi — is something you can taste. Every dish carries the patience of the kitchen and the calm of a Kyoto morning.',
  milestones: [
    { year: '1987', jp: '創業', title: 'The first broth', text: 'A family kitchen in Kyoto opens its doors with one ramen recipe.' },
    { year: '2004', jp: '東京へ', title: 'To Tokyo', text: 'The counter moves to the city, trading lanterns for neon — same soul.' },
    { year: '2016', jp: '職人', title: 'The craft deepens', text: 'A sushi master and a matcha artisan join the table.' },
    { year: 'Now', jp: '今', title: 'Your table awaits', text: 'Tradition, plated for a modern evening. Itadakimasu.' },
  ],
}

export const DISHES = [
  { en: 'Ramen', jp: 'ラーメン', emoji: '🍜', note: 'Slow broth, springy noodles', tone: 'beni' },
  { en: 'Sushi', jp: '寿司', emoji: '🍣', note: 'Cut to order, daily fish', tone: 'sora' },
  { en: 'Bento', jp: '弁当', emoji: '🍱', note: 'A balanced little world', tone: 'kohaku' },
  { en: 'Tempura', jp: '天ぷら', emoji: '🍤', note: 'Feather-light, just-fried', tone: 'kogane' },
  { en: 'Onigiri', jp: 'おにぎり', emoji: '🍙', note: 'Hand-pressed rice', tone: 'matcha' },
  { en: 'Japanese Curry', jp: 'カレー', emoji: '🍛', note: 'Deep, gentle spice', tone: 'kohaku' },
  { en: 'Yakitori', jp: '焼き鳥', emoji: '🍢', note: 'Charcoal-grilled skewers', tone: 'beni' },
  { en: 'Gyoza', jp: '餃子', emoji: '🥟', note: 'Crisp-bottomed dumplings', tone: 'matcha' },
  { en: 'Udon', jp: 'うどん', emoji: '🍜', note: 'Thick, silky noodles', tone: 'sora' },
  { en: 'Matcha Desserts', jp: '抹茶', emoji: '🍵', note: 'Stone-ground sweetness', tone: 'matcha' },
]

export const SPECIALS = [
  { en: 'Tonkotsu Ramen', jp: '豚骨ラーメン', desc: '18-hour pork bone broth, chashu, ajitama egg.', price: '₹480' },
  { en: 'Dragon Roll', jp: 'ドラゴンロール', desc: 'Eel, avocado, tobiko — plated like a wave.', price: '₹620' },
  { en: 'Wagyu Ramen', jp: '和牛ラーメン', desc: 'Seared A5 wagyu over clear shoyu broth.', price: '₹890' },
  { en: 'Salmon Nigiri', jp: 'サーモン握り', desc: 'Buttery salmon, warm rice, a brush of soy.', price: '₹360' },
  { en: 'Matcha Cheesecake', jp: '抹茶チーズケーキ', desc: 'Ceremonial-grade matcha, baked soft.', price: '₹290' },
]

export const STREET = [
  { en: 'Takoyaki', jp: 'たこ焼き', desc: 'Octopus balls, bonito dancing on top.' },
  { en: 'Okonomiyaki', jp: 'お好み焼き', desc: 'Savoury Osaka pancake, your way.' },
  { en: 'Taiyaki', jp: 'たい焼き', desc: 'Fish-shaped cake, red bean centre.' },
  { en: 'Karaage', jp: 'から揚げ', desc: 'Crackly fried chicken, lemon squeeze.' },
]

export const CULTURE = [
  { jp: '花見', en: 'Cherry Blossoms', quote: 'We gather under falling petals to remember that beauty is brief.' },
  { jp: '茶道', en: 'Tea Ceremony', quote: 'One encounter, one chance — 一期一会.' },
  { jp: '武士道', en: 'Samurai Heritage', quote: 'Discipline in the smallest motion is its own art.' },
  { jp: '京都', en: 'Kyoto Streets', quote: 'Quiet stone lanes where time keeps its own pace.' },
  { jp: '東京の夜', en: 'Tokyo Nights', quote: 'Neon on rain — a city that hums until morning.' },
]

export const SEASONS = [
  { key: 'spring', en: 'Spring', jp: '春', accent: 'sakura', dish: 'Sakura Ebi Tempura', note: 'Pink shrimp, cherry-leaf salt' },
  { key: 'summer', en: 'Summer', jp: '夏', accent: 'sora', dish: 'Hiyashi Chuka', note: 'Chilled noodles, citrus dashi' },
  { key: 'autumn', en: 'Autumn', jp: '秋', accent: 'kohaku', dish: 'Matsutake Rice', note: 'Mushroom, chestnut, ginkgo' },
  { key: 'winter', en: 'Winter', jp: '冬', accent: 'beni', dish: 'Miso Nabe', note: 'Hot pot for cold nights' },
]

export const MATCHA = [
  { en: 'Matcha Latte', jp: '抹茶ラテ' },
  { en: 'Matcha Ice Cream', jp: '抹茶アイス' },
  { en: 'Matcha Cheesecake', jp: '抹茶チーズケーキ' },
  { en: 'Matcha Pancakes', jp: '抹茶パンケーキ' },
]

// Gallery uses gradient "plates" so the project runs with zero image assets.
export const GALLERY = [
  { label: 'Tonkotsu', jp: '豚骨', span: 'tall', from: '#C4453A', to: '#E89B3B' },
  { label: 'Counter', jp: '席', span: 'wide', from: '#8FB8D6', to: '#4F6B45' },
  { label: 'Matcha', jp: '抹茶', span: 'normal', from: '#7C9A6B', to: '#D9A441' },
  { label: 'Sakura', jp: '桜', span: 'normal', from: '#F4C7D2', to: '#E48AA0' },
  { label: 'Lantern', jp: '提灯', span: 'tall', from: '#1A1614', to: '#C4453A' },
  { label: 'Nigiri', jp: '握り', span: 'wide', from: '#E89B3B', to: '#F4C7D2' },
  { label: 'Tea', jp: '茶', span: 'normal', from: '#4F6B45', to: '#8FB8D6' },
  { label: 'Yuzu', jp: '柚子', span: 'normal', from: '#D9A441', to: '#7C9A6B' },
]

export const REVIEWS = [
  { name: 'Aarav M.', city: 'Nagpur', text: 'The tonkotsu is the most honest bowl of ramen I have had outside Japan. I close my eyes and I am in Kyoto.' },
  { name: 'Ishita R.', city: 'Mumbai', text: 'Every plate looks like it belongs in a gallery, then tastes even better. The matcha cheesecake ruined all others for me.' },
  { name: 'Kenji T.', city: 'Tokyo', text: 'Omotenashi done right. The room is calm, the service is warm, the fish is impeccable.' },
  { name: 'Sara P.', city: 'Pune', text: 'We came for dinner and stayed three hours. The seasonal menu alone is worth the trip.' },
  { name: 'Daniel K.', city: 'Bengaluru', text: 'Award-level interior, street-food prices on the small plates. Takoyaki, twice.' },
]

export const INSTAGRAM = [
  { jp: '🍜', from: '#C4453A', to: '#E89B3B' },
  { jp: '🍣', from: '#8FB8D6', to: '#4F6B45' },
  { jp: '🍵', from: '#7C9A6B', to: '#D9A441' },
  { jp: '🌸', from: '#F4C7D2', to: '#E48AA0' },
  { jp: '🏮', from: '#1A1614', to: '#C4453A' },
  { jp: '🍱', from: '#E89B3B', to: '#F4C7D2' },
  { jp: '🥟', from: '#4F6B45', to: '#8FB8D6' },
  { jp: '🍤', from: '#D9A441', to: '#7C9A6B' },
]

export const FAQ = [
  { q: 'Do you serve vegetarian ramen?', a: 'Yes — our shiro-miso and mushroom-dashi ramen are fully vegetarian, and most small plates have a veg version. Just ask the counter.' },
  { q: 'Is the sushi freshly prepared?', a: 'Every piece is cut to order. Fish arrives daily and we never hold nigiri — what you order is sliced when you order it.' },
  { q: 'Do you offer takeaway?', a: 'We do. Ramen travels in insulated kits that keep broth and noodles separate, and the whole street-food menu is takeaway-ready.' },
  { q: 'Do you accept reservations?', a: 'Absolutely. Use the form below and we confirm over WhatsApp within the hour. Walk-ins are always welcome at the counter.' },
]

export const LOCATION = {
  address: '12 Sakura Lane, Civil Lines, Nagpur, Maharashtra 440001',
  hours: [
    { day: 'Mon — Thu', time: '12:00 – 23:00' },
    { day: 'Fri — Sat', time: '12:00 – 00:30' },
    { day: 'Sunday', time: '11:00 – 23:00' },
  ],
  mapsEmbed:
    'https://www.google.com/maps?q=Civil+Lines+Nagpur&output=embed',
  mapsLink: 'https://maps.google.com/?q=Civil+Lines+Nagpur',
}
