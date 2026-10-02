import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaTimes, FaArrowRight, FaOm } from 'react-icons/fa';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';

export default function SearchBar({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { setSearchQuery } = useShop();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 100);
    } else {
      setSearchTerm('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchQuery(searchTerm.trim());
      onClose();
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  // Live matching suggestions
  const suggestions = searchTerm.trim().length > 1
    ? products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 4)
    : [];

  const handleSelectProduct = (productId) => {
    onClose();
    navigate(`/product/${productId}`);
  };

  return (
    <div 
      className="modal fade show d-block" 
      tabIndex="-1" 
      style={{ backgroundColor: 'rgba(7, 26, 43, 0.85)', backdropFilter: 'blur(5px)', zIndex: 1070 }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content devotional-modal-content bg-white shadow-lg">
          <div className="modal-header bg-temple-navy text-white border-bottom border-gold py-3 px-4">
            <div className="d-flex align-items-center gap-2">
              <FaOm className="text-sacred-gold fs-5" />
              <h5 className="modal-title font-cinzel text-bright-gold mb-0">
                Search Devotional Store
              </h5>
            </div>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="input-group input-group-lg mb-3">
                <span className="input-group-text bg-white border-end-0 text-sacred-gold">
                  <FaSearch />
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  className="form-control border-start-0 ps-0"
                  placeholder="Search for Idols, Tulsi Mala, Irumudi Kits, Deepams, Books..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ boxShadow: 'none' }}
                />
                <button 
                  className="btn btn-sacred-gold px-4" 
                  type="submit"
                  disabled={!searchTerm.trim()}
                >
                  Search
                </button>
              </div>
            </form>

            {/* Quick Suggestions */}
            {suggestions.length > 0 && (
              <div className="mt-3">
                <h6 className="font-cinzel text-muted small text-uppercase mb-2">
                  Matching Sacred Items
                </h6>
                <div className="list-group">
                  {suggestions.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="list-group-item list-group-item-action d-flex align-items-center justify-content-between p-2 border-light-cream"
                      onClick={() => handleSelectProduct(item.id)}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '45px', height: '45px', objectFit: 'cover', borderRadius: '4px' }}
                        />
                        <div className="text-start">
                          <div className="fw-semibold text-temple-navy" style={{ fontSize: '0.9rem' }}>
                            {item.name}
                          </div>
                          <div className="text-muted small">
                            {item.category} · <span className="text-success fw-bold">₹{item.price}</span>
                          </div>
                        </div>
                      </div>
                      <FaArrowRight className="text-muted" size={12} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            <div className="mt-4 pt-3 border-top border-light-cream">
              <span className="small text-muted me-2">Popular Searches:</span>
              <div className="d-inline-flex flex-wrap gap-1 mt-1">
                {['Ayyappa Idol', 'Irumudi Kit', 'Tulsi Mala', 'Rudraksha', 'Brass Lamp', 'Sahasranamam'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="btn btn-sm btn-light border py-0 px-2 rounded text-muted hover-gold"
                    style={{ fontSize: '0.78rem' }}
                    onClick={() => {
                      setSearchTerm(tag);
                      setSearchQuery(tag);
                      onClose();
                      navigate(`/search?q=${encodeURIComponent(tag)}`);
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
