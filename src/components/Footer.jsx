import React from 'react';
import { Link } from 'react-router-dom';
import { FaOm, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="devotional-footer pt-5 pb-3">
      <div className="container-fluid" style={{ maxWidth: '1280px' }}>
        {/* Sacred Chanting Banner */}
        <div 
          className="p-3 mb-5 rounded text-center d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
          style={{ 
            background: 'linear-gradient(90deg, rgba(212, 167, 44, 0.15) 0%, rgba(245, 197, 66, 0.25) 50%, rgba(212, 167, 44, 0.15) 100%)',
            border: '1px solid rgba(212, 167, 44, 0.35)'
          }}
        >
          <div className="d-flex align-items-center gap-3">
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center text-temple-navy"
              style={{ width: '42px', height: '42px', background: '#F5C542' }}
            >
              <FaOm size={20} />
            </div>
            <div className="text-start">
              <h5 className="font-cinzel text-bright-gold mb-0 fw-bold">SWAMIYE SARANAM AYYAPPA</h5>
              <small className="text-light opacity-75">Spiritual devotion, pure authenticity & consecrated craftsmanship</small>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <Link to="/sabarimala" className="btn btn-sm btn-sacred-gold">
              Explore 18 Sacred Steps
            </Link>
            <Link to="/pooja-seva" className="btn btn-sm btn-sacred-outline">
              Book Temple Seva
            </Link>
          </div>
        </div>

        {/* 5 Column Grid */}
        <div className="row g-4 mb-5">
          {/* Col 1: About */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div 
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: '32px', height: '32px', background: '#D4A72C', color: '#071A2B' }}
              >
                <FaOm />
              </div>
              <span className="font-cinzel fw-bold text-white fs-5">AYYAPPA STORE</span>
            </div>
            <p className="text-light opacity-75 small lh-base mb-3">
              Dedicated to serving millions of Ayyappa bhaktas worldwide. We provide authentic, consecrated puja items, Panchaloha vigrahams, original Tulsi & Rudraksha malas, and Sabarimala Irumudi pilgrimage kits verified by experienced Guruswamys.
            </p>
            <div className="d-flex gap-2">
              <a href="#facebook" className="action-circle-btn text-decoration-none" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#instagram" className="action-circle-btn text-decoration-none" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#youtube" className="action-circle-btn text-decoration-none" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#twitter" className="action-circle-btn text-decoration-none" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="font-cinzel text-sacred-gold mb-3 fw-bold">QUICK LINKS</h6>
            <ul className="list-unstyled mb-0">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/shop" className="footer-link">Devotional Shop</Link></li>
              <li><Link to="/categories" className="footer-link">All Categories</Link></li>
              <li><Link to="/pooja-seva" className="footer-link">Pooja & Seva</Link></li>
              <li><Link to="/sabarimala" className="footer-link">Sabarimala Shrine</Link></li>
              <li><Link to="/festivals" className="footer-link">Festivals Calendar</Link></li>
              <li><Link to="/gallery" className="footer-link">Sacred Gallery</Link></li>
            </ul>
          </div>

          {/* Col 3: Shop Categories */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="font-cinzel text-sacred-gold mb-3 fw-bold">CATEGORIES</h6>
            <ul className="list-unstyled mb-0">
              <li><Link to="/shop?category=ayyappa-idols" className="footer-link">Ayyappa Idols</Link></li>
              <li><Link to="/shop?category=malas-rudraksha" className="footer-link">Malas & Rudraksha</Link></li>
              <li><Link to="/shop?category=pooja-kits" className="footer-link">Irumudi & Pooja Kits</Link></li>
              <li><Link to="/shop?category=pooja-essentials" className="footer-link">Brass Deepams</Link></li>
              <li><Link to="/shop?category=devotional-books" className="footer-link">Stotrams & Books</Link></li>
              <li><Link to="/shop?category=clothing" className="footer-link">Deeksha Attire</Link></li>
              <li><Link to="/shop?category=home-decor" className="footer-link">Framed Portraits</Link></li>
            </ul>
          </div>

          {/* Col 4: Customer Support */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="font-cinzel text-sacred-gold mb-3 fw-bold">DEVOTEE CARE</h6>
            <ul className="list-unstyled mb-0">
              <li><Link to="/about" className="footer-link">About Our Mission</Link></li>
              <li><Link to="/cart" className="footer-link">Shopping Cart</Link></li>
              <li><Link to="/wishlist" className="footer-link">My Wishlist</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><span className="footer-link text-light opacity-50">Shipping & Returns</span></li>
              <li><span className="footer-link text-light opacity-50">Authenticity Guarantee</span></li>
              <li><span className="footer-link text-light opacity-50">Vratham FAQ</span></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="font-cinzel text-sacred-gold mb-3 fw-bold">CONTACT</h6>
            <div className="d-flex flex-column gap-2 small text-light opacity-75">
              <div className="d-flex align-items-start gap-2">
                <FaMapMarkerAlt className="text-sacred-gold mt-1 flex-shrink-0" />
                <span>Sanctum Road, Sannidhanam Way, Pampa, Kerala 689662</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaPhone className="text-sacred-gold flex-shrink-0" />
                <span>+91 94440 18181</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaEnvelope className="text-sacred-gold flex-shrink-0" />
                <span>seva@ayyappastore.com</span>
              </div>
              <div className="mt-2 pt-2 border-top border-secondary">
                <small className="text-warning">Daily Seva Hours: 5:00 AM – 9:30 PM</small>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-3 border-top border-secondary d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 small text-light opacity-60">
          <div>
            © {new Date().getFullYear()} Ayyappa Devotional Store. Consecrated with <FaHeart className="text-danger mx-1" /> for devotees everywhere.
          </div>
          <div>
            Swamiye Saranam Ayyappa · 18 Sacred Steps · Dharma Sastha Blessings
          </div>
        </div>
      </div>
    </footer>
  );
}
