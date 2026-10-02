import React from 'react';
import { Link } from 'react-router-dom';
import { FaFire, FaPray, FaOm, FaBoxOpen, FaBookOpen, FaArrowRight } from 'react-icons/fa';

export default function CategoryCard({ category }) {
  // Map icon name safely to stable icon
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'FaPray': return <FaPray />;
      case 'FaOm': return <FaOm />;
      case 'FaBoxOpen': return <FaBoxOpen />;
      case 'FaBookOpen': return <FaBookOpen />;
      default: return <FaFire />;
    }
  };

  return (
    <div className="category-card d-flex flex-column h-100">
      <div className="category-img-box">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div 
          className="position-absolute top-0 end-0 m-2 px-2 py-1 rounded text-uppercase"
          style={{ background: 'rgba(7, 26, 43, 0.85)', color: '#F5C542', fontSize: '0.7rem', fontWeight: '700' }}
        >
          {category.badge || `${category.itemCount}+ Items`}
        </div>
      </div>

      <div className="p-3 d-flex flex-column flex-grow-1 bg-white">
        <div className="d-flex align-items-center gap-2 mb-2">
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center text-sacred-gold"
            style={{ width: '28px', height: '28px', background: 'rgba(212, 167, 44, 0.15)', fontSize: '0.85rem' }}
          >
            {renderIcon(category.iconName)}
          </div>
          <h5 className="font-cinzel text-temple-navy mb-0 fs-6 fw-bold">
            {category.name}
          </h5>
        </div>

        <p className="text-muted small mb-3 flex-grow-1" style={{ fontSize: '0.85rem', lineHeight: '1.45' }}>
          {category.description}
        </p>

        <Link
          to={`/shop?category=${category.slug}`}
          className="btn btn-sm btn-sacred-outline w-100 mt-auto d-flex align-items-center justify-content-center gap-2"
        >
          <span>Explore Collection</span>
          <FaArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
