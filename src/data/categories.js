// Centralized Category Data for Ayyappa Devotional Store
import poojaKitImg from '../assets/images/category_pooja_essentials_kit_1790947374545.jpg';
import idolImg from '../assets/images/product_ayyappa_swamy_idol_1790947362973.jpg';
import heroImg from '../assets/images/hero_ayyappa_sabarimala_1790947352250.jpg';

export const categories = [
  {
    id: 'pooja-essentials',
    name: 'Pooja Essentials',
    slug: 'pooja-essentials',
    iconName: 'FaFire',
    image: poojaKitImg,
    description: 'Pure camphor, organic sandalwood paste, sacred vibhuti, brass deepams & puja oils.',
    itemCount: 24,
    badge: 'Daily Devotion'
  },
  {
    id: 'ayyappa-idols',
    name: 'Ayyappa Idols',
    slug: 'ayyappa-idols',
    iconName: 'FaPray',
    image: idolImg,
    description: 'Panchaloha, pure brass, marble & handcrafted wooden Lord Ayyappa vigrahams.',
    itemCount: 18,
    badge: 'Sacred Morthi'
  },
  {
    id: 'malas-rudraksha',
    name: 'Malas & Rudraksha',
    slug: 'malas-rudraksha',
    iconName: 'FaOm',
    image: poojaKitImg,
    description: 'Consecrated Tulsi malas, authentic 5-mukhi Rudraksha, lotus seed & Spatika rosaries.',
    itemCount: 16,
    badge: 'Deeksha Essential'
  },
  {
    id: 'pooja-kits',
    name: 'Pooja Kits',
    slug: 'pooja-kits',
    iconName: 'FaBoxOpen',
    image: poojaKitImg,
    description: 'Complete Irumudi Kettu sets, Mandala Deeksha kits & Padi Pooja ceremonial hampers.',
    itemCount: 12,
    badge: 'Pilgrim Favorite'
  },
  {
    id: 'devotional-books',
    name: 'Devotional Books',
    slug: 'devotional-books',
    iconName: 'FaBookOpen',
    image: heroImg,
    description: 'Ayyappa Sahasranamam, Harivarasanam stotrams, 18-step significance & bhajans.',
    itemCount: 20,
    badge: 'Spiritual Wisdom'
  },
  {
    id: 'clothing',
    name: 'Clothing',
    slug: 'clothing',
    iconName: 'FaOm',
    image: idolImg,
    description: 'Traditional pure cotton black & blue dhotis, sacred shawls & deeksha angavastrams.',
    itemCount: 14,
    badge: '100% Pure Cotton'
  },
  {
    id: 'home-decor',
    name: 'Home Decor',
    slug: 'home-decor',
    iconName: 'FaFire',
    image: heroImg,
    description: 'Gold-foiled Ayyappa framed portraits, brass wall hanging deepams & torans.',
    itemCount: 22,
    badge: 'Auspicious Ambience'
  },
  {
    id: 'devotional-accessories',
    name: 'Devotional Accessories',
    slug: 'devotional-accessories',
    iconName: 'FaPray',
    image: poojaKitImg,
    description: 'Ghee-filling funnels for coconuts, deeksha lockets, holy keychains & brass bells.',
    itemCount: 28,
    badge: 'Handcrafted'
  }
];
