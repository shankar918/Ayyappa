import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import TrustStrip from '../components/TrustStrip';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { FaOm, FaArrowRight, FaPray, FaStar, FaFire } from 'react-icons/fa';
import sabarimalaImg from '../assets/images/sabarimala_temple_pilgrimage_1790947385351.jpg';

export default function Home() {
  useEffect(() => {
    document.title = "Ayyappa Devotional Store | Swamiye Saranam Ayyappa";
  }, []);

  // Display 8 featured products
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 8);

  const devoteeTestimonials = [
    {
      name: "S. Guruswamy Rajesh",
      city: "Chennai, Tamil Nadu",
      comment: "The Panchaloha Ayyappa idol arrived in divine condition. Consecrated properly and authentic weight. Perfect for our mandala pooja.",
      rating: 5,
      date: "Mandala Season"
    },
    {
      name: "K. Venugopal",
      city: "Hyderabad, Telangana",
      comment: "Ordered 12 Irumudi kits for our pilgrimage group. Each item was clean, pure, and packed with high ritual sanctity. Blessed service.",
      rating: 5,
      date: "Verified Devotee"
    },
    {
      name: "R. Aravind Swamy",
      city: "Bengaluru, Karnataka",
      comment: "The 108 bead Tulsi mala has natural aroma and flawless finishing. Wearing it throughout my 41-day vratham with pure peace of mind.",
      rating: 5,
      date: "Verified Devotee"
    }
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Shop By Category */}
      <section className="py-5" style={{ backgroundColor: '#FCF9F2' }}>
        <div className="container-fluid" style={{ maxWidth: '1280px' }}>
          <div className="text-center mb-5">
            <div className="d-inline-flex align-items-center gap-2 mb-2">
              <FaPray className="text-sacred-gold" />
              <span className="font-cinzel text-sacred-gold fw-bold small text-uppercase tracking-wider">
                Devotional Collections
              </span>
            </div>
            <h2 className="font-cinzel text-temple-navy display-6 fw-bold mb-2">
              Shop by Sacred Category
            </h2>
            <p className="text-muted small max-w-xl mx-auto mb-0" style={{ maxWidth: '600px' }}>
              Explore authentic puja articles, Panchaloha vigrahams, and ritual items curated specifically for Ayyappa devotees and Sabarimala pilgrims.
            </p>
          </div>

          <div className="row g-4">
            {categories.map((category) => (
              <div key={category.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <CategoryCard category={category} />
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/categories" className="btn btn-sacred-outline px-4 py-2">
              <span>View All 8 Sacred Categories</span>
              <FaArrowRight size={12} className="ms-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Featured Products Section */}
      <section className="py-5 bg-white border-top border-bottom border-light-cream">
        <div className="container-fluid" style={{ maxWidth: '1280px' }}>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
            <div>
              <div className="d-inline-flex align-items-center gap-2 mb-2">
                <FaFire className="text-saffron" />
                <span className="font-cinzel text-sacred-gold fw-bold small text-uppercase tracking-wider">
                  Handcrafted & Blessed
                </span>
              </div>
              <h2 className="font-cinzel text-temple-navy display-6 fw-bold mb-1">
                Featured Devotional Items
              </h2>
              <p className="text-muted small mb-0">
                Top consecrated idols, malas, pooja lamps, and books chosen by thousands of pilgrims.
              </p>
            </div>

            <Link to="/shop" className="btn btn-sm btn-sacred-gold mt-3 mt-md-0 d-inline-flex align-items-center gap-2">
              <span>Explore All Products</span>
              <FaArrowRight size={12} />
            </Link>
          </div>

          <div className="row g-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-md-6 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sabarimala Pilgrimage Spotlight */}
      <section className="py-5" style={{ background: '#071A2B', color: '#FFFFFF' }}>
        <div className="container-fluid" style={{ maxWidth: '1280px' }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="rounded-3 overflow-hidden border border-gold position-relative shadow-lg">
                <img
                  src={sabarimalaImg}
                  alt="Sacred Sabarimala Sannidhanam"
                  className="w-100"
                  style={{ maxHeight: '420px', objectFit: 'cover' }}
                  referrerPolicy="no-referrer"
                />
                <div 
                  className="position-absolute bottom-0 start-0 w-100 p-3"
                  style={{ background: 'linear-gradient(to top, rgba(7,26,43,0.95), transparent)' }}
                >
                  <span className="font-cinzel text-bright-gold fw-bold fs-6">Sannidhanam & Pathinettampadi</span>
                  <p className="small text-light opacity-75 mb-0">18 Sacred Steps to Moksha</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(212, 167, 44, 0.15)', border: '1px solid rgba(212, 167, 44, 0.4)' }}>
                <FaOm className="text-bright-gold" />
                <span className="font-cinzel text-bright-gold fw-bold small">
                  THE SACRED PILGRIMAGE
                </span>
              </div>

              <h2 className="font-cinzel text-white display-6 fw-bold mb-3">
                Preparing for Your Holy Sabarimala Journey
              </h2>

              <p className="text-light opacity-80 mb-3" style={{ lineHeight: 1.7 }}>
                The 41-day Mandala Vratham is a period of supreme self-discipline, purity of thought, and utter devotion to Lord Ayyappa. Carrying the holy Irumudi Kettu across the Periyar hills and ascending the 18 golden steps is the culmination of every devotee's tapasya.
              </p>

              <div className="p-3 bg-secondary-navy rounded-3 border border-gold-subtle mb-4">
                <h6 className="font-cinzel text-sacred-gold mb-2 fw-bold">Consecrated Irumudi Preparation Guidance</h6>
                <p className="text-light opacity-75 small mb-0">
                  We supply genuine ghee coconut funnels, pure mudra coconuts, camphor, and herbal dravyas carefully packed in sacred cloth as mandated by Agamic tradition.
                </p>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/sabarimala" className="btn btn-sacred-gold">
                  <span>Learn Significance of 18 Steps</span>
                  <FaArrowRight size={13} className="ms-1" />
                </Link>
                <Link to="/pooja-seva" className="btn btn-sacred-outline">
                  <span>Book Padi Pooja Seva</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Devotee Testimonials */}
      <section className="py-5" style={{ backgroundColor: '#FCF9F2' }}>
        <div className="container-fluid" style={{ maxWidth: '1280px' }}>
          <div className="text-center mb-5">
            <h2 className="font-cinzel text-temple-navy fw-bold mb-2">
              Words of Devotion & Trust
            </h2>
            <p className="text-muted small max-w-lg mx-auto mb-0">
              Blessings and reviews from fellow pilgrims and Guruswamys across India.
            </p>
          </div>

          <div className="row g-4">
            {devoteeTestimonials.map((t, idx) => (
              <div key={idx} className="col-12 col-md-4">
                <div className="p-4 bg-white rounded-3 border border-light-cream h-100 shadow-sm d-flex flex-column">
                  <div className="d-flex text-warning mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} size={14} className="me-1" />
                    ))}
                  </div>
                  <p className="text-muted small fst-italic mb-4 flex-grow-1" style={{ lineHeight: 1.6 }}>
                    "{t.comment}"
                  </p>
                  <div className="pt-3 border-top border-light-cream d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="font-cinzel text-temple-navy mb-0 fs-6 fw-bold">{t.name}</h6>
                      <small className="text-muted">{t.city}</small>
                    </div>
                    <span className="badge-sacred-gold">{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
