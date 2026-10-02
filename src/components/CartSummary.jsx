import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaTruck, FaArrowRight, FaOm } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';

export default function CartSummary({ showCheckoutButton = true }) {
  const { cartSubtotal, cartShipping, cartDiscount, cartTotal, cart } = useShop();
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-3 border border-light-cream shadow-sm">
      <div className="d-flex align-items-center gap-2 pb-3 mb-3 border-bottom border-light-cream">
        <FaOm className="text-sacred-gold" />
        <h5 className="font-cinzel text-temple-navy mb-0 fw-bold fs-6">Order Summary</h5>
      </div>

      <div className="d-flex flex-column gap-2 mb-3">
        <div className="d-flex justify-content-between text-muted" style={{ fontSize: '0.9rem' }}>
          <span>Items Subtotal:</span>
          <span className="price-display text-dark fw-semibold">₹{cartSubtotal.toLocaleString('en-IN')}</span>
        </div>

        {cartDiscount > 0 && (
          <div className="d-flex justify-content-between text-success" style={{ fontSize: '0.9rem' }}>
            <span>Auspicious Vratham Discount (5%):</span>
            <span className="price-display fw-semibold">- ₹{cartDiscount.toLocaleString('en-IN')}</span>
          </div>
        )}

        <div className="d-flex justify-content-between text-muted" style={{ fontSize: '0.9rem' }}>
          <span>Sanctified Packaging & Shipping:</span>
          <span className="price-display fw-semibold">
            {cartShipping === 0 ? (
              <span className="text-success">FREE</span>
            ) : (
              `₹${cartShipping}`
            )}
          </span>
        </div>

        {cartSubtotal > 0 && cartSubtotal < 999 && (
          <div className="p-2 bg-warm-cream rounded text-center small text-temple-navy border border-light-cream">
            Add <strong>₹{999 - cartSubtotal}</strong> more for <strong>FREE Devotional Delivery</strong>!
          </div>
        )}

        <div className="d-flex justify-content-between align-items-baseline pt-3 mt-2 border-top border-light-cream">
          <span className="font-cinzel fw-bold text-temple-navy fs-5">Estimated Total:</span>
          <span className="font-cinzel fs-4 text-temple-navy fw-bold price-display text-sacred-gold">
            ₹{cartTotal.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      {showCheckoutButton && (
        <div className="d-flex flex-column gap-2 mt-4">
          <button
            type="button"
            className="btn btn-sacred-gold w-100 py-3 d-flex align-items-center justify-content-center gap-2 fs-6"
            onClick={() => navigate('/checkout')}
            disabled={cart.length === 0}
          >
            <span>Proceed to Checkout</span>
            <FaArrowRight size={14} />
          </button>

          <Link
            to="/shop"
            className="btn btn-outline-secondary w-100 py-2 small text-center"
          >
            Continue Devotional Shopping
          </Link>
        </div>
      )}

      {/* Trust Badges in Cart */}
      <div className="mt-4 pt-3 border-top border-light-cream">
        <div className="d-flex align-items-center gap-2 mb-2 text-muted small">
          <FaShieldAlt className="text-sacred-gold flex-shrink-0" />
          <span>100% Genuine Temple Consecrated Items</span>
        </div>
        <div className="d-flex align-items-center gap-2 text-muted small">
          <FaTruck className="text-sacred-gold flex-shrink-0" />
          <span>Safe Pan-India Dual-Layer Protection Dispatch</span>
        </div>
      </div>
    </div>
  );
}
