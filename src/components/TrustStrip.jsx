import React from 'react';
import { FaShieldAlt, FaTruck, FaBoxOpen, FaHeadset } from 'react-icons/fa';

export default function TrustStrip() {
  const trustItems = [
    {
      icon: <FaShieldAlt />,
      title: "Authentic Devotional Products",
      desc: "Consecrated Panchaloha & certified organic herbs"
    },
    {
      icon: <FaTruck />,
      title: "Secure Shopping & Fast Shipping",
      desc: "Free Pan-India dispatch on orders above ₹999"
    },
    {
      icon: <FaBoxOpen />,
      title: "Carefully & Reverently Packed",
      desc: "Sacred items wrapped with spiritual reverence"
    },
    {
      icon: <FaHeadset />,
      title: "Devotee Support & Guidance",
      desc: "Experienced Guruswamy advice for rituals"
    }
  ];

  return (
    <section className="trust-strip py-2">
      <div className="container-fluid" style={{ maxWidth: '1280px' }}>
        <div className="row g-3 py-2">
          {trustItems.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3">
              <div className="trust-item h-100">
                <div className="trust-icon-box">
                  {item.icon}
                </div>
                <div>
                  <h6 className="font-cinzel text-temple-navy mb-1 fw-bold fs-6">
                    {item.title}
                  </h6>
                  <p className="text-muted small mb-0 lh-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
