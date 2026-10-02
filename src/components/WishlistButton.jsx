import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';

export default function WishlistButton({ product, showText = false, className = '' }) {
  const { isInWishlist, toggleWishlist } = useShop();
  const isFavorited = isInWishlist(product.id);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  if (showText) {
    return (
      <button
        type="button"
        className={`btn btn-sacred-outline d-inline-flex align-items-center gap-2 ${className}`}
        onClick={handleClick}
        aria-label={isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}
      >
        {isFavorited ? <FaHeart color="#D32F2F" /> : <FaRegHeart />}
        <span>{isFavorited ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={`action-circle-btn ${isFavorited ? 'active' : ''} ${className}`}
      onClick={handleClick}
      title={isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}
      aria-label="Wishlist toggle"
    >
      {isFavorited ? <FaHeart color="#D32F2F" /> : <FaRegHeart />}
    </button>
  );
}
