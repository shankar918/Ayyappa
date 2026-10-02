import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import { useShop } from '../context/ShopContext';
import { FaShoppingCart, FaArrowLeft, FaTrash, FaOm, FaPray } from 'react-icons/fa';

export default function Cart() {
  const { cart, clearCart } = useShop();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sacred Shopping Cart | Ayyappa Devotional Store";
    window.scrollTo(0, 0);
  }, []);

  if (cart.length === 0) {
    return (
      <div className="py-5" style={{ backgroundColor: '#FCF9F2', minHeight: '80vh' }}>
        <div className="container text-center py-5">
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 text-sacred-gold"
            style={{ width: '88px', height: '88px', background: 'rgba(212, 167, 44, 0.15)' }}
          >
            <FaShoppingCart size={40} />
          </div>

          <h2 className="font-cinzel text-temple-navy display-6 fw-bold mb-3">
            Your Sacred Cart is Empty
          </h2>

          <p className="text-muted small max-w-md mx-auto mb-4" style={{ maxWidth: '480px' }}>
            Bring devotion and blessings into your home. Explore our consecrated collection of Panchaloha Ayyappa vigrahams, Vratham malas, and Sabarimala Irumudi kits.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <Link to="/shop" className="btn btn-sacred-gold px-4 py-2">
              Browse Devotional Store
            </Link>
            <Link to="/categories" className="btn btn-sacred-outline px-4 py-2">
              Explore Categories
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-5" style={{ backgroundColor: '#FCF9F2', minHeight: '80vh' }}>
      <div className="container-fluid" style={{ maxWidth: '1280px' }}>
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-4 pb-3 border-bottom border-light-cream">
          <div>
            <div className="d-flex align-items-center gap-2 small text-muted mb-1">
              <span>Home</span>
              <span>/</span>
              <span className="text-sacred-gold fw-semibold">Sacred Cart</span>
            </div>
            <h1 className="font-cinzel text-temple-navy display-6 fw-bold mb-0">
              Your Devotional Cart ({cart.reduce((t, i) => t + i.quantity, 0)} Items)
            </h1>
          </div>

          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn btn-sm btn-outline-danger d-flex align-items-center gap-1"
              onClick={clearCart}
            >
              <FaTrash size={12} />
              <span>Clear Cart</span>
            </button>
            <Link to="/shop" className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1">
              <FaArrowLeft size={12} />
              <span>Add More Items</span>
            </Link>
          </div>
        </div>

        <div className="row g-4">
          {/* Left: Cart Items List */}
          <div className="col-lg-8">
            <div className="d-flex flex-column">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Sanctified Packing Notice */}
            <div className="p-3 mt-3 bg-white rounded-3 border border-light-cream shadow-sm d-flex align-items-center gap-3">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center text-sacred-gold flex-shrink-0"
                style={{ width: '42px', height: '42px', background: 'rgba(212, 167, 44, 0.15)' }}
              >
                <FaPray size={18} />
              </div>
              <div className="small">
                <strong className="text-temple-navy font-cinzel d-block">Sanctified Packing Guarantee</strong>
                <span className="text-muted">
                  All items are prepared and packed in a clean, pure atmosphere with consecrated vibhuti and sacred prasadam included free of charge.
                </span>
              </div>
            </div>
          </div>

          {/* Right: Cart Summary */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '90px' }}>
              <CartSummary showCheckoutButton={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
