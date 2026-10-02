import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaOm, FaPray, FaFire } from 'react-icons/fa';
import heroImg from '../assets/images/hero_ayyappa_sabarimala_1790947352250.jpg';

export default function HeroSection() {
  return (
    <section className="devotional-hero">
      {/* Background Image with subtle zoom */}
      <img
        src={heroImg}
        alt="Sabarimala Sannidhanam and Lord Ayyappa Shrine"
        className="hero-background-img"
        referrerPolicy="no-referrer"
      />

      {/* Layered overlays */}
      <div className="hero-overlay-gradient"></div>
      <div className="hero-gold-glow"></div>

      {/* Decorative Traditional Temple Motifs */}
      <div 
        className="position-absolute d-none d-xl-block"
        style={{ top: '15%', left: '4%', opacity: 0.12, color: '#D4A72C' }}
      >
        <FaOm size={140} />
      </div>

      <div className="container-fluid position-relative py-5" style={{ maxWidth: '1280px', zIndex: 3 }}>
        <div className="row align-items-center">
          <div className="col-lg-8 col-xl-7 text-white">
            {/* Sacred Kicker */}
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(212, 167, 44, 0.18)', border: '1px solid rgba(212, 167, 44, 0.4)' }}>
              <FaPray className="text-bright-gold" />
              <span className="font-cinzel text-bright-gold fw-bold" style={{ fontSize: '0.85rem', letterSpacing: '0.12em' }}>
                SWAMIYE SARANAM AYYAPPA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-cinzel text-white display-4 fw-bold mb-3 lh-sm" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
              Divine Products for <span className="text-bright-gold" style={{ textDecoration: 'underline', textDecorationColor: 'rgba(212, 167, 44, 0.5)', textUnderlineOffset: '8px' }}>Every Devotee</span>
            </h1>

            {/* Supporting Copy */}
            <p className="lead text-light opacity-90 mb-4 fs-5" style={{ maxWidth: '580px', lineHeight: 1.6 }}>
              Bring devotion, tradition and blessings into your home with our carefully curated collection of Ayyappa devotional products. Consecrated Panchaloha idols, Vratham malas, and Guruswamy-approved Irumudi kits.
            </p>

            {/* Key Sacred Highlights */}
            <div className="d-flex flex-wrap gap-4 mb-4 pb-2 text-light" style={{ fontSize: '0.88rem' }}>
              <div className="d-flex align-items-center gap-2">
                <FaFire className="text-warning" />
                <span>100% Consecrated Items</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaOm className="text-warning" />
                <span>Verified by Guruswamys</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="text-bright-gold fw-bold">✓</span>
                <span>Fast & Safe Pan-India Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap align-items-center gap-3">
              <Link to="/shop" className="btn btn-sacred-gold py-3 px-4 fs-6">
                <span>Shop Now</span>
                <FaArrowRight size={14} />
              </Link>

              <Link to="/categories" className="btn btn-sacred-outline py-3 px-4 fs-6">
                <span>Explore Collections</span>
              </Link>
            </div>
          </div>

          {/* Right Floating Sacred Highlight Card */}
          <div className="col-lg-4 col-xl-5 d-none d-lg-block">
            <div 
              className="p-4 rounded-3 text-white position-relative"
              style={{
                background: 'rgba(13, 38, 56, 0.75)',
                backdropFilter: 'blur(12px)',
                border: '1.5px solid rgba(212, 167, 44, 0.45)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)',
                maxWidth: '380px',
                marginLeft: 'auto'
              }}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="badge-sacred-gold text-uppercase">Mandala Season Special</span>
                <span className="text-warning small d-flex align-items-center gap-1">
                  <FaFire className="flicker-flame" /> Sanctified
                </span>
              </div>

              <h5 className="font-cinzel text-white mb-2">Complete Irumudi Kettu Kit</h5>
              <p className="text-light opacity-75 small mb-3">
                Everything required for your sacred 41-day Mandala Vratham and holy Sabarimala pilgrimage, packed with ritual purity.
              </p>

              <div className="d-flex align-items-baseline gap-2 mb-3">
                <span className="font-cinzel fs-3 text-bright-gold fw-bold">₹1,499</span>
                <span className="text-decoration-line-through text-muted small">₹1,999</span>
                <span className="badge bg-danger ms-1">Save 25%</span>
              </div>

              <Link to="/product/4" className="btn btn-sm btn-sacred-gold w-100 py-2">
                View Special Kit Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
