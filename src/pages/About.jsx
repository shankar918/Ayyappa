import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaOm, FaPray, FaShieldAlt, FaHeart, FaFire, FaCheckCircle } from 'react-icons/fa';
import heroImg from '../assets/images/hero_ayyappa_sabarimala_1790947352250.jpg';
import idolImg from '../assets/images/product_ayyappa_swamy_idol_1790947362973.jpg';

export default function About() {
  useEffect(() => {
    document.title = "About Our Mission | Ayyappa Devotional Store";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-5" style={{ backgroundColor: '#FCF9F2' }}>
      <div className="container-fluid" style={{ maxWidth: '1280px' }}>
        {/* Hero Banner */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(212, 167, 44, 0.15)', border: '1px solid rgba(212, 167, 44, 0.4)' }}>
            <FaOm className="text-sacred-gold" />
            <span className="font-cinzel text-sacred-gold fw-bold small text-uppercase tracking-wider">
              SWAMIYE SARANAM AYYAPPA
            </span>
          </div>
          <h1 className="font-cinzel text-temple-navy display-5 fw-bold mb-3">
            Our Sacred Calling & Devotional Journey
          </h1>
          <p className="text-muted small max-w-xl mx-auto mb-0" style={{ maxWidth: '640px', lineHeight: 1.6 }}>
            Serving millions of Ayyappa bhaktas worldwide with authentic puja essentials, consecrated Panchaloha vigrahams, and blessed Sabarimala pilgrimage items.
          </p>
        </div>

        {/* Story Section */}
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <div className="rounded-3 overflow-hidden border border-gold shadow-lg position-relative">
              <img
                src={heroImg}
                alt="Sabarimala Temple Sacred View"
                className="w-100"
                style={{ maxHeight: '420px', objectFit: 'cover' }}
                referrerPolicy="no-referrer"
              />
              <div 
                className="position-absolute bottom-0 start-0 w-100 p-3"
                style={{ background: 'linear-gradient(to top, rgba(7,26,43,0.9), transparent)' }}
              >
                <div className="text-bright-gold font-cinzel fw-bold fs-6">Sannidhanam Pilgrimage Heritage</div>
                <small className="text-light opacity-75">Founded with reverence by lifelong Sabarimala pilgrims</small>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <h2 className="font-cinzel text-temple-navy display-6 fw-bold mb-3">
              Our Sacred Story
            </h2>
            <p className="text-muted mb-3" style={{ lineHeight: 1.7 }}>
              Ayyappa Store was founded by a fellowship of Guruswamys and dedicated devotees who have completed decades of pilgrimage to Sabarimala Sannidhanam. We recognized that thousands of devotees across India and around the globe often struggled to obtain genuine, consecrated deeksha items that comply with traditional Agamic standards.
            </p>
            <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
              Our mission is simple: to treat every single idol, mala, camphor block, and Irumudi cloth as a sacred trust. When you open a parcel from Ayyappa Store, you receive the spiritual sanctity of temple prasad.
            </p>
            <div className="d-flex flex-wrap gap-4">
              <div>
                <h4 className="font-cinzel text-sacred-gold fw-bold mb-0">150,000+</h4>
                <small className="text-muted">Devotees Served</small>
              </div>
              <div className="border-start ps-4">
                <h4 className="font-cinzel text-sacred-gold fw-bold mb-0">100%</h4>
                <small className="text-muted">Consecrated Purity</small>
              </div>
              <div className="border-start ps-4">
                <h4 className="font-cinzel text-sacred-gold fw-bold mb-0">38+</h4>
                <small className="text-muted">Years of Guruswamy Heritage</small>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Devotion */}
        <div className="bg-white p-5 rounded-3 border border-light-cream shadow-sm mb-5">
          <div className="text-center mb-5">
            <h3 className="font-cinzel text-temple-navy fw-bold mb-2">
              Our Devotional Pillars
            </h3>
            <p className="text-muted small max-w-md mx-auto mb-0">
              The sacred values guiding every item we consecrate and deliver.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="p-3 text-center h-100">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 text-sacred-gold"
                  style={{ width: '56px', height: '56px', background: 'rgba(212, 167, 44, 0.15)' }}
                >
                  <FaPray size={24} />
                </div>
                <h5 className="font-cinzel text-temple-navy mb-2 fw-bold">Spiritual Devotion</h5>
                <p className="text-muted small mb-0">
                  Every product is handled with utmost reverence, washed and packed by fasting devotees chanting holy mantras.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="p-3 text-center h-100">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 text-sacred-gold"
                  style={{ width: '56px', height: '56px', background: 'rgba(212, 167, 44, 0.15)' }}
                >
                  <FaShieldAlt size={24} />
                </div>
                <h5 className="font-cinzel text-temple-navy mb-2 fw-bold">Ritual Purity</h5>
                <p className="text-muted small mb-0">
                  Panchaloha vigrahams molded according to authentic Shilpa Shastras by multigenerational temple craftsmen.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="p-3 text-center h-100">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 text-sacred-gold"
                  style={{ width: '56px', height: '56px', background: 'rgba(212, 167, 44, 0.15)' }}
                >
                  <FaFire size={24} />
                </div>
                <h5 className="font-cinzel text-temple-navy mb-2 fw-bold">Temple Heritage</h5>
                <p className="text-muted small mb-0">
                  Honoring the ancient rituals of the 18 holy steps, Pampa bathing, and Erumeli pettathullal with authentic gear.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="p-3 text-center h-100">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 text-sacred-gold"
                  style={{ width: '56px', height: '56px', background: 'rgba(212, 167, 44, 0.15)' }}
                >
                  <FaHeart size={24} />
                </div>
                <h5 className="font-cinzel text-temple-navy mb-2 fw-bold">Devotee Care</h5>
                <p className="text-muted small mb-0">
                  Unmatched pilgrim guidance, free consultation with senior Guruswamys, and safe tamper-proof delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="text-center p-5 rounded-3 bg-temple-navy text-white border border-gold">
          <h3 className="font-cinzel text-bright-gold mb-2 fw-bold">
            Bring Divine Grace to Your Home Temple
          </h3>
          <p className="text-light opacity-75 small max-w-lg mx-auto mb-4" style={{ maxWidth: '580px' }}>
            Whether you are undertaking your first Kanni Swamy pilgrimage or honoring your daily home altar, our store is blessed to assist your journey.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/shop" className="btn btn-sacred-gold px-4 py-2">
              Browse Devotional Store
            </Link>
            <Link to="/contact" className="btn btn-sacred-outline px-4 py-2">
              Speak to Guruswamy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
