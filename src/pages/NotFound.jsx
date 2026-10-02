import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaOm, FaArrowRight } from 'react-icons/fa';

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | Ayyappa Devotional Store";
  }, []);

  return (
    <div className="py-5 text-center min-vh-75 d-flex flex-column align-items-center justify-content-center bg-cream-soft">
      <div className="container py-5" style={{ maxWidth: '600px' }}>
        <div 
          className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 text-sacred-gold"
          style={{ width: '90px', height: '90px', background: 'rgba(212, 167, 44, 0.15)' }}
        >
          <FaOm size={44} />
        </div>

        <h1 className="font-cinzel text-temple-navy display-4 fw-bold mb-2">404</h1>
        <h2 className="font-cinzel text-sacred-gold fs-4 fw-bold mb-3">Path Not Found, Devotee</h2>

        <p className="text-muted small mb-4">
          The devotional page or product you are searching for does not exist or may have been relocated. Let us guide you back to the sacred sanctum.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <Link to="/" className="btn btn-sacred-gold px-4 py-2">
            Return to Home Sanctum
          </Link>
          <Link to="/shop" className="btn btn-sacred-outline px-4 py-2">
            <span>Browse Devotional Shop</span>
            <FaArrowRight size={12} className="ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
