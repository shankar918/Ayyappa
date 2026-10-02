import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes, FaOm } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';

export default function Navbar({ onOpenSearch }) {
  const { cartCount, wishlist } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsNavCollapsed(true);
  };

  return (
    <>
      <header className={`sticky-top devotional-navbar ${isScrolled ? 'scrolled' : ''}`}>
        {/* Top Devotional Ribbon */}
        <div style={{ background: '#051320', borderBottom: '1px solid rgba(212, 167, 44, 0.2)' }} className="py-1 px-3 d-none d-md-block">
          <div className="container-fluid d-flex justify-content-between align-items-center" style={{ maxWidth: '1280px' }}>
            <div className="d-flex align-items-center gap-2 text-warning" style={{ fontSize: '0.78rem', letterSpacing: '0.06em' }}>
              <FaOm className="text-sacred-gold" />
              <span className="fw-semibold">SWAMIYE SARANAM AYYAPPA</span>
              <span className="text-secondary">·</span>
              <span className="text-light opacity-75">Blessed Pooja Items & Consecrated Pilgrimage Essentials</span>
            </div>
            <div className="d-flex align-items-center gap-3" style={{ fontSize: '0.78rem' }}>
              <span className="text-light opacity-75">Free Shipping on Orders Above ₹999</span>
              <span className="text-secondary">|</span>
              <Link to="/contact" className="text-warning text-decoration-none">
                Devotee Helpline: +91 94440 18181
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="navbar navbar-expand-lg py-2">
          <div className="container-fluid" style={{ maxWidth: '1280px' }}>
            {/* Logo */}
            <Link to="/" className="navbar-brand d-flex align-items-center gap-2 m-0" onClick={handleNavClick}>
              <div 
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: '38px',
                  height: '38px',
                  background: 'linear-gradient(135deg, #D4A72C 0%, #F5C542 100%)',
                  color: '#071A2B',
                  fontSize: '1.25rem',
                  boxShadow: '0 2px 8px rgba(212, 167, 44, 0.4)'
                }}
              >
                <FaOm />
              </div>
              <div className="d-flex flex-column">
                <span className="font-cinzel fw-bold text-white lh-1" style={{ fontSize: '1.2rem', letterSpacing: '0.04em' }}>
                  AYYAPPA STORE
                </span>
                <span style={{ fontSize: '0.66rem', color: '#D4A72C', letterSpacing: '0.12em', fontWeight: 600 }}>
                  SWAMIYE SARANAM
                </span>
              </div>
            </Link>

            {/* Mobile Actions & Toggle */}
            <div className="d-flex align-items-center gap-2 d-lg-none">
              <button
                type="button"
                className="nav-icon-btn"
                onClick={onOpenSearch}
                aria-label="Search items"
              >
                <FaSearch />
              </button>

              <Link to="/wishlist" className="nav-icon-btn" aria-label="View wishlist">
                <FaHeart />
                {wishlist.length > 0 && (
                  <span className="nav-badge-count">{wishlist.length}</span>
                )}
              </Link>

              <Link to="/cart" className="nav-icon-btn" aria-label="View shopping cart">
                <FaShoppingCart />
                {cartCount > 0 && (
                  <span className="nav-badge-count">{cartCount}</span>
                )}
              </Link>

              <button
                className="navbar-toggler border-0 text-white p-1"
                type="button"
                onClick={() => setIsNavCollapsed(!isNavCollapsed)}
                aria-controls="devotionalNavbarNav"
                aria-expanded={!isNavCollapsed}
                aria-label="Toggle navigation"
              >
                {isNavCollapsed ? <FaBars size={22} className="text-warning" /> : <FaTimes size={22} className="text-warning" />}
              </button>
            </div>

            {/* Nav Menu */}
            <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="devotionalNavbarNav">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
                <li className="nav-item">
                  <NavLink to="/" end className="nav-link-devotional nav-link" onClick={handleNavClick}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/shop" className="nav-link-devotional nav-link" onClick={handleNavClick}>
                    Shop
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/categories" className="nav-link-devotional nav-link" onClick={handleNavClick}>
                    Categories
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/pooja-seva" className="nav-link-devotional nav-link" onClick={handleNavClick}>
                    Pooja & Seva
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/sabarimala" className="nav-link-devotional nav-link" onClick={handleNavClick}>
                    Sabarimala
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/festivals" className="nav-link-devotional nav-link" onClick={handleNavClick}>
                    Festivals
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link-devotional nav-link" onClick={handleNavClick}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link-devotional nav-link" onClick={handleNavClick}>
                    Contact
                  </NavLink>
                </li>
              </ul>

              {/* Desktop Action Icons */}
              <div className="d-none d-lg-flex align-items-center gap-3">
                <button
                  type="button"
                  className="nav-icon-btn"
                  onClick={onOpenSearch}
                  title="Search Store"
                  aria-label="Open search dialog"
                >
                  <FaSearch />
                </button>

                <Link
                  to="/wishlist"
                  className="nav-icon-btn"
                  title="Devotee Wishlist"
                  aria-label="Wishlist"
                >
                  <FaHeart />
                  {wishlist.length > 0 && (
                    <span className="nav-badge-count">{wishlist.length}</span>
                  )}
                </Link>

                <Link
                  to="/cart"
                  className="nav-icon-btn"
                  title="Sacred Cart"
                  aria-label="Shopping Cart"
                >
                  <FaShoppingCart />
                  {cartCount > 0 && (
                    <span className="nav-badge-count">{cartCount}</span>
                  )}
                </Link>

                <button
                  type="button"
                  className="nav-icon-btn"
                  onClick={() => setShowAccountModal(true)}
                  title="Devotee Account"
                  aria-label="Devotee Profile"
                >
                  <FaUser />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Devotee Account UI Dialog */}
      {showAccountModal && (
        <div 
          className="modal fade show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(7, 26, 43, 0.7)', zIndex: 1060 }}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content devotional-modal-content bg-white">
              <div className="modal-header bg-temple-navy text-white border-bottom border-gold">
                <h5 className="modal-title font-cinzel text-bright-gold d-flex align-items-center gap-2">
                  <FaOm /> Devotee Portal
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowAccountModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-4 text-center">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ width: '60px', height: '60px', background: 'rgba(212, 167, 44, 0.15)', color: '#D4A72C', fontSize: '1.5rem' }}
                >
                  <FaUser />
                </div>
                <h6 className="font-cinzel text-temple-navy mb-1">Ayyappa Bhakta Sewa</h6>
                <p className="text-muted small mb-3">
                  Welcome, devotee. You can track your consecrated orders and manage your sacred wishlist directly on this device.
                </p>
                <div className="p-3 bg-warm-cream rounded mb-3 text-start small border border-light-cream">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted">Active Cart Items:</span>
                    <strong className="text-temple-navy">{cartCount} items</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted">Saved in Wishlist:</span>
                    <strong className="text-temple-navy">{wishlist.length} items</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Deeksha Support:</span>
                    <span className="text-success fw-semibold">24/7 Available</span>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button 
                    type="button" 
                    className="btn btn-sacred-gold w-100"
                    onClick={() => {
                      setShowAccountModal(false);
                      navigate('/cart');
                    }}
                  >
                    View My Cart
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary w-100"
                    onClick={() => setShowAccountModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
