import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaHeart, FaRegHeart } from 'react-icons/fa';
import QuantitySelector from './QuantitySelector';
import { useShop } from '../context/ShopContext';

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity, isInWishlist, toggleWishlist } = useShop();
  const isFavorited = isInWishlist(item.id);

  return (
    <div className="p-3 mb-3 bg-white rounded-3 border border-light-cream shadow-sm">
      <div className="row align-items-center g-3">
        {/* Product Image */}
        <div className="col-4 col-sm-3 col-md-2">
          <Link to={`/product/${item.id}`} className="d-block overflow-hidden rounded border border-light-cream">
            <img
              src={item.image}
              alt={item.name}
              className="w-100"
              style={{ aspectRatio: '1/1', objectFit: 'cover' }}
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>

        {/* Product Details */}
        <div className="col-8 col-sm-9 col-md-4">
          <span className="text-muted text-uppercase small" style={{ fontSize: '0.72rem' }}>
            {item.category}
          </span>
          <h6 className="font-cinzel text-temple-navy mb-1 fs-6">
            <Link to={`/product/${item.id}`} className="text-decoration-none text-temple-navy">
              {item.name}
            </Link>
          </h6>
          <div className="text-sacred-gold fw-bold price-display" style={{ fontSize: '0.9rem' }}>
            ₹{item.price.toLocaleString('en-IN')} each
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="col-6 col-sm-6 col-md-3 d-flex align-items-center">
          <QuantitySelector
            quantity={item.quantity}
            onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
            onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
            size="small"
          />
        </div>

        {/* Subtotal & Actions */}
        <div className="col-6 col-sm-6 col-md-3 text-end d-flex flex-column align-items-end justify-content-between">
          <div className="font-cinzel fs-6 fw-bold text-temple-navy price-display mb-2">
            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
          </div>

          <div className="d-flex align-items-center gap-2">
            <button
              type="button"
              className="btn btn-sm btn-link text-muted p-1"
              title={isFavorited ? "Saved in Wishlist" : "Move to Wishlist"}
              onClick={() => toggleWishlist(item)}
              aria-label="Wishlist"
            >
              {isFavorited ? <FaHeart color="#D32F2F" /> : <FaRegHeart />}
            </button>
            <button
              type="button"
              className="btn btn-sm btn-link text-danger p-1"
              title="Remove item"
              onClick={() => removeFromCart(item.id)}
              aria-label="Remove item"
            >
              <FaTrash size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
