import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function QuantitySelector({ quantity = 1, onDecrease, onIncrease, min = 1, max = 99, size = "normal" }) {
  const isSmall = size === "small";

  return (
    <div 
      className="d-inline-flex align-items-center rounded border border-light-cream bg-white"
      style={{
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
        height: isSmall ? '34px' : '42px'
      }}
    >
      <button
        type="button"
        className="btn btn-link text-temple-navy p-0 d-flex align-items-center justify-content-center"
        style={{
          width: isSmall ? '32px' : '40px',
          height: '100%',
          border: 'none',
          textDecoration: 'none'
        }}
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        <FaMinus size={isSmall ? 10 : 12} />
      </button>

      <span 
        className="text-center font-monospace fw-bold text-temple-navy"
        style={{
          width: isSmall ? '34px' : '44px',
          fontSize: isSmall ? '0.85rem' : '0.98rem',
          userSelect: 'none'
        }}
      >
        {quantity}
      </span>

      <button
        type="button"
        className="btn btn-link text-temple-navy p-0 d-flex align-items-center justify-content-center"
        style={{
          width: isSmall ? '32px' : '40px',
          height: '100%',
          border: 'none',
          textDecoration: 'none'
        }}
        onClick={onIncrease}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <FaPlus size={isSmall ? 10 : 12} />
      </button>
    </div>
  );
}
