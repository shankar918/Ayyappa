import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaTrash, FaShoppingCart, FaStar, FaArrowRight, FaOm } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';

export default function Wishlist() {
  const { wishlist, removeFromWishlist, moveWishlistToCart } = useShop();

  useEffect(() => {
    document.title = "Devotee Wishlist | Ayyappa Devotional Store";
    window.scrollTo(0, 0);
  }, []);

  if (wishlist.length === 0) {
    return (
      <div className="py-5" style={{ backgroundColor: '#FCF9F2', minHeight: '80vh' }}>
        <div className="container text-center py-5">
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 text-sacred-gold"
            style={{ width: '88px', height: '88px', background: 'rgba(212, 167, 44, 0.15)' }}
          >
            <FaHeart size={38} />
          </div>

          <h2 className="font-cinzel text-temple-navy display-6 fw-bold mb-3">
            Your Wishlist is Empty
          </h2>

          <p className="text-muted small max-w-md mx-auto mb-4" style={{ maxWidth: '480px' }}>
            Save consecrated idols, Vratham malas, and prayer books you cherish. Click the heart icon on any product to add it here.
          </p>

          <Link to="/shop" className="btn btn-sacred-gold px-4 py-2">
            Explore Devotional Store
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-5" style={{ backgroundColor: '#FCF9F2', minHeight: '80vh' }}>
      <div className="container-fluid" style={{ maxWidth: '1280px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-light-cream">
          <div>
            <div className="d-flex align-items-center gap-2 small text-muted mb-1">
              <span>Home</span>
              <span>/</span>
              <span className="text-sacred-gold fw-semibold">Wishlist</span>
            </div>
            <h1 className="font-cinzel text-temple-navy display-6 fw-bold mb-0">
              Devotee Wishlist ({wishlist.length} Saved Items)
            </h1>
          </div>

          <Link to="/shop" className="btn btn-sm btn-sacred-outline">
            Continue Shopping
          </Link>
        </div>

        <div className="row g-4">
          {wishlist.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 border border-light-cream rounded-3 overflow-hidden shadow-sm bg-white d-flex flex-column">
                <div className="position-relative" style={{ height: '220px', background: '#F9F7F2' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                    referrerPolicy="no-referrer"
                  />
                  <button
                    type="button"
                    className="action-circle-btn position-absolute top-0 end-0 m-2 text-danger"
                    onClick={() => removeFromWishlist(product.id)}
                    title="Remove from Wishlist"
                    aria-label="Remove item"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>

                <div className="p-3 d-flex flex-column flex-grow-1">
                  <span className="text-muted text-uppercase small" style={{ fontSize: '0.72rem' }}>
                    {product.category}
                  </span>

                  <h6 className="font-cinzel text-temple-navy mb-2 line-clamp-2" style={{ minHeight: '2.5rem' }}>
                    <Link to={`/product/${product.id}`} className="text-decoration-none text-temple-navy">
                      {product.name}
                    </Link>
                  </h6>

                  <div className="d-flex align-items-center gap-1 text-warning mb-2" style={{ fontSize: '0.78rem' }}>
                    <FaStar />
                    <span className="text-dark fw-bold">{product.rating}</span>
                    <span className="text-muted">({product.reviews})</span>
                  </div>

                  <div className="d-flex align-items-baseline gap-2 mb-3 mt-auto">
                    <span className="font-cinzel fs-5 text-temple-navy fw-bold price-display">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-decoration-line-through text-muted small price-display">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="btn btn-sm btn-sacred-gold w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                    onClick={() => moveWishlistToCart(product)}
                  >
                    <FaShoppingCart size={13} />
                    <span>Move to Sacred Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
