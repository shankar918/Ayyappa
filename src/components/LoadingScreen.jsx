import React from 'react';
import { FaOm } from 'react-icons/fa';

export default function LoadingScreen() {
  return (
    <div 
      className="position-fixed top-0 start-0 w-100 vh-100 d-flex flex-column align-items-center justify-content-center bg-temple-navy"
      style={{ zIndex: 99999 }}
    >
      <div className="position-relative mb-4">
        {/* Outer glowing pulsing ring */}
        <div 
          className="rounded-circle position-absolute top-50 start-50 translate-middle"
          style={{
            width: '120px',
            height: '120px',
            border: '2px solid rgba(212, 167, 44, 0.4)',
            boxShadow: '0 0 35px rgba(245, 197, 66, 0.3)',
            animation: 'flicker 2s infinite ease-in-out'
          }}
        />

        {/* Inner symbol icon */}
        <div 
          className="rounded-circle d-flex align-items-center justify-content-center text-temple-navy"
          style={{
            width: '84px',
            height: '84px',
            background: 'linear-gradient(135deg, #D4A72C 0%, #F5C542 100%)',
            boxShadow: '0 4px 20px rgba(212, 167, 44, 0.5)'
          }}
        >
          <FaOm size={44} />
        </div>
      </div>

      <h2 
        className="font-cinzel text-bright-gold text-center px-3 mb-2 fw-bold"
        style={{ letterSpacing: '0.15em', fontSize: '1.45rem' }}
      >
        SWAMIYE SARANAM AYYAPPA
      </h2>

      <p className="text-light opacity-75 small text-center tracking-wide" style={{ letterSpacing: '0.08em' }}>
        Consecrating Your Devotional Shopping Experience...
      </p>

      {/* Subtle gold line loader */}
      <div 
        className="mt-3 rounded-pill overflow-hidden" 
        style={{ width: '180px', height: '3px', background: 'rgba(255, 255, 255, 0.1)' }}
      >
        <div 
          style={{
            width: '60%',
            height: '100%',
            background: '#D4A72C',
            animation: 'flicker 1.2s infinite alternate ease-in-out'
          }}
        />
      </div>
    </div>
  );
}
