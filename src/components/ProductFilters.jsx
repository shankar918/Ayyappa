import React from 'react';
import { categories } from '../data/categories';
import { FaFilter, FaStar, FaTimes, FaUndo } from 'react-icons/fa';

export default function ProductFilters({
  selectedCategory,
  onSelectCategory,
  priceRange,
  onChangePriceRange,
  selectedRating,
  onSelectRating,
  inStockOnly,
  onToggleInStock,
  onResetFilters,
  totalResults = 0
}) {
  return (
    <div className="bg-white p-4 rounded-3 border border-light-cream shadow-sm">
      <div className="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom border-light-cream">
        <div className="d-flex align-items-center gap-2">
          <FaFilter className="text-sacred-gold" />
          <h6 className="font-cinzel text-temple-navy mb-0 fw-bold">Filter Products</h6>
        </div>
        <button
          type="button"
          onClick={onResetFilters}
          className="btn btn-sm text-muted p-0 d-flex align-items-center gap-1 hover-gold"
          style={{ fontSize: '0.8rem' }}
        >
          <FaUndo size={11} /> Reset
        </button>
      </div>

      {/* Categories Filter */}
      <div className="mb-4">
        <label className="font-cinzel text-temple-navy fw-bold small mb-2 d-block">
          Categories
        </label>
        <div className="d-flex flex-column gap-1">
          <button
            type="button"
            className={`btn text-start btn-sm py-1 px-2 rounded ${
              selectedCategory === 'all'
                ? 'bg-temple-navy text-bright-gold fw-bold'
                : 'text-dark hover-bg-cream'
            }`}
            onClick={() => onSelectCategory('all')}
          >
            All Sacred Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              className={`btn text-start btn-sm py-1 px-2 rounded d-flex justify-content-between align-items-center ${
                selectedCategory === cat.slug
                  ? 'bg-temple-navy text-bright-gold fw-bold'
                  : 'text-dark hover-bg-cream'
              }`}
              onClick={() => onSelectCategory(cat.slug)}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <label className="font-cinzel text-temple-navy fw-bold small mb-0">
            Max Price: <span className="text-sacred-gold">₹{priceRange}</span>
          </label>
        </div>
        <input
          type="range"
          className="form-range"
          min="200"
          max="3000"
          step="50"
          value={priceRange}
          onChange={(e) => onChangePriceRange(Number(e.target.value))}
        />
        <div className="d-flex justify-content-between text-muted" style={{ fontSize: '0.75rem' }}>
          <span>₹200</span>
          <span>₹3,000+</span>
        </div>
      </div>

      {/* Customer Rating Filter */}
      <div className="mb-4">
        <label className="font-cinzel text-temple-navy fw-bold small mb-2 d-block">
          Minimum Rating
        </label>
        <div className="d-flex flex-column gap-1">
          {[4.8, 4.5, 4.0].map((star) => (
            <button
              key={star}
              type="button"
              className={`btn text-start btn-sm py-1 px-2 rounded d-flex align-items-center gap-2 ${
                selectedRating === star
                  ? 'bg-warm-cream border border-gold text-temple-navy fw-bold'
                  : 'text-dark'
              }`}
              onClick={() => onSelectRating(selectedRating === star ? 0 : star)}
            >
              <div className="text-warning d-flex align-items-center gap-1" style={{ fontSize: '0.8rem' }}>
                <FaStar />
              </div>
              <span style={{ fontSize: '0.85rem' }}>{star} Stars & Above</span>
            </button>
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div className="mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="inStockCheck"
            checked={inStockOnly}
            onChange={(e) => onToggleInStock(e.target.checked)}
          />
          <label className="form-check-label small text-dark" htmlFor="inStockCheck">
            In Stock Only (Ready to Dispatch)
          </label>
        </div>
      </div>

      <div className="mt-4 pt-3 border-top border-light-cream text-muted text-center" style={{ fontSize: '0.8rem' }}>
        Showing <strong>{totalResults}</strong> consecrated items
      </div>
    </div>
  );
}
