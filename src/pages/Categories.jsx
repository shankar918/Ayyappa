import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import CategoryCard from '../components/CategoryCard';
import { FaPray, FaOm } from 'react-icons/fa';

export default function Categories() {
  useEffect(() => {
    document.title = "Sacred Categories | Ayyappa Devotional Store";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-5" style={{ backgroundColor: '#FCF9F2', minHeight: '80vh' }}>
      <div className="container-fluid" style={{ maxWidth: '1280px' }}>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(212, 167, 44, 0.15)', border: '1px solid rgba(212, 167, 44, 0.4)' }}>
            <FaOm className="text-sacred-gold" />
            <span className="font-cinzel text-sacred-gold fw-bold small text-uppercase tracking-wider">
              SACRED PURSUITS
            </span>
          </div>
          <h1 className="font-cinzel text-temple-navy display-5 fw-bold mb-3">
            Shop by Devotional Category
          </h1>
          <p className="text-muted small max-w-xl mx-auto mb-0" style={{ maxWidth: '640px', lineHeight: 1.6 }}>
            Every product in our temple store is categorized according to traditional Agamic ritual standards. Explore consecrated vigrahams, vratham malas, and Sabarimala pilgrimage kits.
          </p>
        </div>

        {/* 8 Categories Grid */}
        <div className="row g-4 mb-5">
          {categories.map((category) => (
            <div key={category.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>

        {/* Pilgrimage Preparation Banner */}
        <div 
          className="p-4 rounded-3 text-white d-flex flex-column flex-md-row justify-content-between align-items-center gap-4"
          style={{ background: 'linear-gradient(135deg, #071A2B 0%, #102F43 100%)', border: '1px solid rgba(212, 167, 44, 0.4)' }}
        >
          <div>
            <div className="d-flex align-items-center gap-2 mb-2 text-warning">
              <FaPray />
              <span className="font-cinzel fw-bold small">MANDALA VRATHAM DEEKSHA</span>
            </div>
            <h4 className="font-cinzel text-white mb-1">Need a Custom Sangam or Guruswamy Bulk Order?</h4>
            <p className="text-light opacity-75 small mb-0">
              We provide tailored Irumudi sets, pure cotton dhotis, and camphor consignments for Ayyappa Bhakta Mandalis across India and overseas.
            </p>
          </div>
          <Link to="/contact" className="btn btn-sacred-gold text-nowrap px-4 py-2">
            Inquire for Bhakta Sangam
          </Link>
        </div>
      </div>
    </div>
  );
}
