import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPray, FaTruck, FaMapMarkerAlt, FaCalendarAlt, FaPrint, FaArrowRight, FaOm } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';

export default function OrderSuccess() {
  const { recentOrder } = useShop();

  useEffect(() => {
    document.title = "Order Confirmed | Swamiye Saranam Ayyappa";
    window.scrollTo(0, 0);
  }, []);

  const orderId = recentOrder ? recentOrder.orderId : '#AYP20261001';
  const orderDate = recentOrder ? recentOrder.date : new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  const estimatedDelivery = recentOrder ? recentOrder.estimatedDelivery : 'Within 3–5 Business Days';
  const customer = recentOrder ? recentOrder.customer : {
    fullName: 'Devotee',
    address: 'Temple Car Street',
    city: 'Kottayam',
    state: 'Kerala',
    postalCode: '686001',
    paymentMethod: 'Cash on Delivery'
  };

  const items = recentOrder && recentOrder.items ? recentOrder.items : [];
  const total = recentOrder ? recentOrder.total : 1499;

  return (
    <div className="py-5" style={{ backgroundColor: '#FCF9F2', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        {/* Success Card */}
        <div className="bg-white p-4 p-md-5 rounded-3 border border-gold shadow-sm text-center mb-4 position-relative overflow-hidden">
          {/* Top Decorative Temple Accent */}
          <div 
            className="position-absolute top-0 start-50 translate-middle-x px-4 py-1 rounded-bottom bg-temple-navy text-bright-gold font-cinzel small fw-bold"
            style={{ borderBottom: '2px solid #D4A72C' }}
          >
            SWAMIYE SARANAM AYYAPPA
          </div>

          <div className="mt-3 mb-4">
            <div 
              className="rounded-circle d-inline-flex align-items-center justify-content-center text-success mb-3"
              style={{ width: '84px', height: '84px', background: 'rgba(25, 135, 84, 0.12)' }}
            >
              <FaCheckCircle size={48} />
            </div>

            <h1 className="font-cinzel text-temple-navy display-6 fw-bold mb-2">
              Order Placed Successfully
            </h1>

            <p className="text-muted fs-6 mb-3">
              Thank you for shopping with us. May the infinite grace of Lord Ayyappa bring peace, health, and prosperity into your home.
            </p>

            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded bg-warm-cream border border-gold-subtle">
              <span className="text-muted small">Sanctified Order Reference:</span>
              <strong className="font-cinzel text-temple-navy fs-6">{orderId}</strong>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="row g-3 py-3 border-top border-bottom border-light-cream text-start mb-4">
            <div className="col-sm-4">
              <div className="d-flex align-items-center gap-2 text-muted small mb-1">
                <FaCalendarAlt className="text-sacred-gold" />
                <span>Order Date:</span>
              </div>
              <strong className="text-temple-navy small font-cinzel">{orderDate}</strong>
            </div>

            <div className="col-sm-4">
              <div className="d-flex align-items-center gap-2 text-muted small mb-1">
                <FaTruck className="text-sacred-gold" />
                <span>Estimated Delivery:</span>
              </div>
              <strong className="text-success small font-cinzel">{estimatedDelivery}</strong>
            </div>

            <div className="col-sm-4">
              <div className="d-flex align-items-center gap-2 text-muted small mb-1">
                <FaPray className="text-sacred-gold" />
                <span>Payment Mode:</span>
              </div>
              <strong className="text-temple-navy small font-cinzel text-uppercase">{customer.paymentMethod || 'Cash on Delivery'}</strong>
            </div>
          </div>

          {/* Order Details Accordion / Summary */}
          <div className="text-start mb-4">
            <h5 className="font-cinzel text-temple-navy mb-3 fw-bold fs-6">
              Ordered Consecrated Items
            </h5>

            {items.length > 0 ? (
              <div className="list-group mb-3 border border-light-cream rounded">
                {items.map((item) => (
                  <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center p-3 border-light-cream">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '4px' }}
                      />
                      <div>
                        <div className="fw-semibold text-temple-navy small">{item.name}</div>
                        <div className="text-muted small">Qty: {item.quantity} · ₹{item.price} each</div>
                      </div>
                    </div>
                    <span className="font-cinzel fw-bold price-display text-temple-navy">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-3 bg-light rounded text-muted small mb-3">
                Order details confirmed and recorded in local session.
              </div>
            )}

            {/* Delivery Destination */}
            <div className="p-3 bg-warm-cream rounded border border-light-cream">
              <div className="d-flex align-items-center gap-2 text-temple-navy mb-1">
                <FaMapMarkerAlt className="text-sacred-gold" />
                <strong className="font-cinzel small">Delivering Sanctified Shipment To:</strong>
              </div>
              <div className="text-muted small">
                {customer.fullName} — {customer.address}, {customer.city}, {customer.state} - {customer.postalCode}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <button
              type="button"
              className="btn btn-outline-secondary d-inline-flex align-items-center gap-2"
              onClick={() => window.print()}
            >
              <FaPrint size={14} />
              <span>Print Order Receipt</span>
            </button>

            <Link to="/shop" className="btn btn-sacred-gold d-inline-flex align-items-center gap-2">
              <span>Continue Shopping</span>
              <FaArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Spiritual Blessing Card */}
        <div className="text-center p-3 rounded bg-white border border-light-cream small text-muted">
          "Lokaveeram Mahapoojyam Sarvarakshaakaram Vibhum | Parvathihrudayaanandam Saasthaaram Pranamaamyaham"
        </div>
      </div>
    </div>
  );
}
