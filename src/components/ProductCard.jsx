import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaEye, FaShoppingCart, FaStar, FaCheck } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';

export default function ProductCard({ product }) {
  const { addToCart, isInWishlist, toggleWishlist, openQuickView, cart } = useShop();

  const isFavorited = isInWishlist(product.id);
  const isInCartAlready = cart.some(item => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    openQuickView(product);
  };

  return (
    <div className="devotional-product-card">
      {/* Top Floating Action Buttons */}
      <div className="product-quick-actions">
        <button
          type="button"
          className={`action-circle-btn ${isFavorited ? 'active' : ''}`}
          onClick={handleToggleWishlist}
          title={isFavorited ? "Remove from Wishlist" : "Add to Wishlist"}
          aria-label="Wishlist toggle"
        >
          {isFavorited ? <FaHeart color="#D32F2F" /> : <FaRegHeart />}
        </button>

        <button
          type="button"
          className="action-circle-btn"
          onClick={handleQuickView}
          title="Quick View"
          aria-label="Quick View"
        >
          <FaEye />
        </button>
      </div>

      {/* Image with Aspect Ratio & Discount Badge */}
      <Link to={`/product/${product.id}`} className="product-image-container text-decoration-none">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {product.discount > 0 && (
          <div
            className="position-absolute bottom-0 start-0 m-2 px-2 py-1 rounded"
            style={{
              background: '#6E1F1F',
              color: '#FFFFFF',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.04em'
            }}
          >
            Save {product.discount}%
          </div>
        )}
      </Link>

      {/* Body Details */}
      <div className="p-3 d-flex flex-column flex-grow-1">
        {/* Category & Rating */}
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="text-muted text-uppercase fw-semibold" style={{ fontSize: '0.72rem', letterSpacing: '0.05em' }}>
            {product.category}
          </span>
          <div className="d-flex align-items-center gap-1 text-warning" style={{ fontSize: '0.78rem' }}>
            <FaStar />
            <span className="text-dark fw-bold">{product.rating}</span>
            <span className="text-muted" style={{ fontSize: '0.72rem' }}>({product.reviews})</span>
          </div>
        </div>

        {/* Product Title */}
        <h6 className="font-cinzel text-temple-navy mb-2 line-clamp-2" style={{ minHeight: '2.5rem', fontSize: '0.95rem', lineHeight: '1.35' }}>
          <Link to={`/product/${product.id}`} className="text-decoration-none text-temple-navy">
            {product.name}
          </Link>
        </h6>

        {/* Price Row */}
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

        {/* Action Button */}
        <button
          type="button"
          className="btn btn-sm btn-sacred-gold w-100 py-2 d-flex align-items-center justify-content-center gap-2"
          onClick={handleAddToCart}
        >
          {isInCartAlready ? (
            <>
              <FaCheck size={13} />
              <span>Add Another</span>
            </>
          ) : (
            <>
              <FaShoppingCart size={13} />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
