import React from 'react';
import ProductCard from './ProductCard';
import { FaBoxOpen } from 'react-icons/fa';

export default function ProductGrid({ products = [], columns = 4, emptyMessage = "No devotional items found matching your selection." }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-5 my-4 bg-white rounded-3 p-4 border border-light-cream">
        <div 
          className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 text-sacred-gold"
          style={{ width: '64px', height: '64px', background: 'rgba(212, 167, 44, 0.12)' }}
        >
          <FaBoxOpen size={28} />
        </div>
        <h5 className="font-cinzel text-temple-navy mb-2">No Sacred Items Found</h5>
        <p className="text-muted small mb-0 max-w-md mx-auto">
          {emptyMessage}
        </p>
      </div>
    );
  }

  // Column classes based on prop
  const colClass = columns === 3 
    ? 'col-12 col-sm-6 col-lg-4' 
    : 'col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3';

  return (
    <div className="row g-4">
      {products.map((product) => (
        <div key={product.id} className={colClass}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
