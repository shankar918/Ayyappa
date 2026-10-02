import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes, FaStar, FaShoppingCart, FaArrowRight, FaOm } from 'react-icons/fa';
import QuantitySelector from './QuantitySelector';
import WishlistButton from './WishlistButton';
import { useShop } from '../context/ShopContext';

export default function QuickViewModal() {
  const { quickViewProduct, closeQuickView, addToCart } = useShop();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  if (!quickViewProduct) return null;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    closeQuickView();
  };

  const handleGoToDetails = () => {
    closeQuickView();
    navigate(`/product/${quickViewProduct.id}`);
  };

  return (
    <div 
      className="modal fade show d-block" 
      tabIndex="-1" 
      style={{ backgroundColor: 'rgba(7, 26, 43, 0.8)', backdropFilter: 'blur(4px)', zIndex: 1065 }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content devotional-modal-content bg-white shadow-lg">
          <div className="modal-header bg-temple-navy text-white border-bottom border-gold py-2 px-3">
            <span className="font-cinzel text-bright-gold small d-flex align-items-center gap-2">
              <FaOm /> Quick View: {quickViewProduct.name}
            </span>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={closeQuickView}
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-4">
            <div className="row g-4">
              {/* Product Image */}
              <div className="col-md-5">
                <div className="rounded overflow-hidden border border-light-cream position-relative">
                  <img
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    className="w-100"
                    style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                    referrerPolicy="no-referrer"
                  />
                  {quickViewProduct.discount > 0 && (
                    <div 
                      className="position-absolute top-0 start-0 m-2 px-2 py-1 rounded bg-danger text-white small fw-bold"
                    >
                      Save {quickViewProduct.discount}%
                    </div>
                  )}
                </div>
              </div>

              {/* Product Meta */}
              <div className="col-md-7 d-flex flex-column">
                <span className="text-muted text-uppercase small fw-semibold mb-1">
                  {quickViewProduct.category}
                </span>

                <h4 className="font-cinzel text-temple-navy mb-2 fw-bold">
                  {quickViewProduct.name}
                </h4>

                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="d-flex text-warning">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <span className="fw-bold small">{quickViewProduct.rating}</span>
                  <span className="text-muted small">({quickViewProduct.reviews} devotee reviews)</span>
                </div>

                <div className="d-flex align-items-baseline gap-2 mb-3">
                  <span className="font-cinzel fs-3 text-temple-navy fw-bold price-display">
                    ₹{quickViewProduct.price.toLocaleString('en-IN')}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-decoration-line-through text-muted price-display">
                      ₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>

                <p className="text-muted small mb-3">
                  {quickViewProduct.description}
                </p>

                {quickViewProduct.material && (
                  <div className="small mb-3 text-secondary">
                    <strong>Sacred Material:</strong> {quickViewProduct.material}
                  </div>
                )}

                {/* Quantity and Actions */}
                <div className="mt-auto pt-3 border-top border-light-cream">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="small text-muted fw-semibold">Quantity:</span>
                    <QuantitySelector
                      quantity={quantity}
                      onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
                      onIncrease={() => setQuantity(quantity + 1)}
                    />
                  </div>

                  <div className="d-flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="btn btn-sacred-gold flex-grow-1 py-2 d-flex align-items-center justify-content-center gap-2"
                      onClick={handleAddToCart}
                    >
                      <FaShoppingCart size={14} />
                      <span>Add to Cart</span>
                    </button>

                    <WishlistButton product={quickViewProduct} />

                    <button
                      type="button"
                      className="btn btn-outline-secondary py-2 px-3 d-flex align-items-center gap-1"
                      onClick={handleGoToDetails}
                    >
                      <span>Full Details</span>
                      <FaArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
