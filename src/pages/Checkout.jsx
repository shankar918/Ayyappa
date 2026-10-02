import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { FaShieldAlt, FaTruck, FaLock, FaCheckCircle, FaOm, FaMoneyBillWave, FaCreditCard, FaMobileAlt, FaUniversity } from 'react-icons/fa';

export default function Checkout() {
  const { cart, cartSubtotal, cartDiscount, cartShipping, cartTotal, placeOrder } = useShop();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sacred Checkout | Ayyappa Devotional Store";
    window.scrollTo(0, 0);
  }, []);

  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'Kerala',
    postalCode: '',
    country: 'India'
  });

  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const deliveryCost = deliveryMethod === 'express' ? 150 : cartShipping;
  const grandTotal = cartSubtotal - cartDiscount + deliveryCost;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!contactInfo.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!contactInfo.email.trim() || !/\S+@\S+\.\S+/.test(contactInfo.email)) {
      errs.email = 'Valid Email is required.';
    }
    if (!contactInfo.phone.trim() || contactInfo.phone.length < 10) {
      errs.phone = '10-digit Mobile number is required.';
    }
    if (!contactInfo.address.trim()) errs.address = 'Street Address is required.';
    if (!contactInfo.city.trim()) errs.city = 'City is required.';
    if (!contactInfo.postalCode.trim() || contactInfo.postalCode.length < 6) {
      errs.postalCode = '6-digit PIN code is required.';
    }
    return errs;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      navigate('/cart');
      return;
    }

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      window.scrollTo({ top: 120, behavior: 'smooth' });
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      placeOrder({
        ...contactInfo,
        deliveryMethod,
        paymentMethod
      });
      navigate('/order-success');
    }, 1200);
  };

  if (cart.length === 0) {
    return (
      <div className="py-5 text-center bg-cream-soft min-vh-50 d-flex flex-column align-items-center justify-content-center">
        <h3 className="font-cinzel text-temple-navy mb-3">No Items to Checkout</h3>
        <p className="text-muted mb-4">Your sacred shopping cart is empty. Please add items to proceed.</p>
        <Link to="/shop" className="btn btn-sacred-gold">
          Go to Devotional Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="py-5" style={{ backgroundColor: '#FCF9F2', minHeight: '80vh' }}>
      <div className="container-fluid" style={{ maxWidth: '1280px' }}>
        {/* Header */}
        <div className="mb-4">
          <div className="d-flex align-items-center gap-2 small text-muted mb-1">
            <Link to="/cart" className="text-muted text-decoration-none">Cart</Link>
            <span>/</span>
            <span className="text-sacred-gold fw-semibold">Checkout</span>
          </div>
          <h1 className="font-cinzel text-temple-navy display-6 fw-bold mb-1">
            Devotional Order Checkout
          </h1>
          <p className="text-muted small mb-0">
            Please provide your sanctified delivery details. No payment credentials required for simulation.
          </p>
        </div>

        <form onSubmit={handlePlaceOrder} noValidate>
          <div className="row g-4">
            {/* Left: Form Sections */}
            <div className="col-lg-8">
              {/* Section 1: Contact Info */}
              <div className="bg-white p-4 rounded-3 border border-light-cream shadow-sm mb-4">
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom border-light-cream">
                  <span className="rounded-circle bg-temple-navy text-bright-gold d-inline-flex align-items-center justify-content-center font-cinzel fw-bold" style={{ width: '28px', height: '28px', fontSize: '0.85rem' }}>1</span>
                  <h5 className="font-cinzel text-temple-navy mb-0 fw-bold fs-6">Contact Information</h5>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-temple-navy">Devotee Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                      placeholder="e.g. S. Venkataraman"
                      value={contactInfo.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-temple-navy">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="e.g. venkat@example.com"
                      value={contactInfo.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-temple-navy">Phone Number (For Courier Tracking) *</label>
                    <input
                      type="tel"
                      name="phone"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      placeholder="e.g. 9840123456"
                      value={contactInfo.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>
                </div>
              </div>

              {/* Section 2: Shipping Address */}
              <div className="bg-white p-4 rounded-3 border border-light-cream shadow-sm mb-4">
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom border-light-cream">
                  <span className="rounded-circle bg-temple-navy text-bright-gold d-inline-flex align-items-center justify-content-center font-cinzel fw-bold" style={{ width: '28px', height: '28px', fontSize: '0.85rem' }}>2</span>
                  <h5 className="font-cinzel text-temple-navy mb-0 fw-bold fs-6">Sanctified Delivery Address</h5>
                </div>

                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label small fw-bold text-temple-navy">Street Address / House / Flat No. *</label>
                    <input
                      type="text"
                      name="address"
                      className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                      placeholder="e.g. 18 Temple Car Street, Near Ayyappa Temple"
                      value={contactInfo.address}
                      onChange={handleChange}
                    />
                    {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                  </div>

                  <div className="col-md-4">
                    <label className="form-label small fw-bold text-temple-navy">City / Town *</label>
                    <input
                      type="text"
                      name="city"
                      className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                      placeholder="e.g. Kottayam"
                      value={contactInfo.city}
                      onChange={handleChange}
                    />
                    {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                  </div>

                  <div className="col-md-4">
                    <label className="form-label small fw-bold text-temple-navy">State *</label>
                    <select
                      name="state"
                      className="form-select"
                      value={contactInfo.state}
                      onChange={handleChange}
                    >
                      <option value="Kerala">Kerala</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Other States">Other Indian States</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label small fw-bold text-temple-navy">PIN / Postal Code *</label>
                    <input
                      type="text"
                      name="postalCode"
                      className={`form-control ${errors.postalCode ? 'is-invalid' : ''}`}
                      placeholder="e.g. 686001"
                      value={contactInfo.postalCode}
                      onChange={handleChange}
                    />
                    {errors.postalCode && <div className="invalid-feedback">{errors.postalCode}</div>}
                  </div>
                </div>
              </div>

              {/* Section 3: Delivery Method */}
              <div className="bg-white p-4 rounded-3 border border-light-cream shadow-sm mb-4">
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom border-light-cream">
                  <span className="rounded-circle bg-temple-navy text-bright-gold d-inline-flex align-items-center justify-content-center font-cinzel fw-bold" style={{ width: '28px', height: '28px', fontSize: '0.85rem' }}>3</span>
                  <h5 className="font-cinzel text-temple-navy mb-0 fw-bold fs-6">Delivery Method</h5>
                </div>

                <div className="d-flex flex-column gap-3">
                  <label className={`p-3 rounded border cursor-pointer d-flex align-items-center justify-content-between ${deliveryMethod === 'standard' ? 'border-gold bg-warm-cream' : 'border-light-cream'}`} style={{ cursor: 'pointer' }}>
                    <div className="d-flex align-items-center gap-3">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="standard"
                        checked={deliveryMethod === 'standard'}
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                        className="form-check-input mt-0"
                      />
                      <div>
                        <strong className="text-temple-navy font-cinzel d-block">Standard Sanctified Delivery (3–5 Business Days)</strong>
                        <span className="text-muted small">Consecrated packing with tamper-evident dual bubble wrap</span>
                      </div>
                    </div>
                    <span className="fw-bold price-display text-temple-navy">
                      {cartShipping === 0 ? <span className="text-success">FREE</span> : `₹${cartShipping}`}
                    </span>
                  </label>

                  <label className={`p-3 rounded border cursor-pointer d-flex align-items-center justify-content-between ${deliveryMethod === 'express' ? 'border-gold bg-warm-cream' : 'border-light-cream'}`} style={{ cursor: 'pointer' }}>
                    <div className="d-flex align-items-center gap-3">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="express"
                        checked={deliveryMethod === 'express'}
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                        className="form-check-input mt-0"
                      />
                      <div>
                        <strong className="text-temple-navy font-cinzel d-block">Priority Express Pilgrimage Courier (1–2 Days)</strong>
                        <span className="text-muted small">Fastest dispatched for upcoming Mandala deeksha or temple pooja</span>
                      </div>
                    </div>
                    <span className="fw-bold price-display text-temple-navy">₹150</span>
                  </label>
                </div>
              </div>

              {/* Section 4: Payment Method UI */}
              <div className="bg-white p-4 rounded-3 border border-light-cream shadow-sm mb-4">
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom border-light-cream">
                  <span className="rounded-circle bg-temple-navy text-bright-gold d-inline-flex align-items-center justify-content-center font-cinzel fw-bold" style={{ width: '28px', height: '28px', fontSize: '0.85rem' }}>4</span>
                  <h5 className="font-cinzel text-temple-navy mb-0 fw-bold fs-6">Payment Method Selection</h5>
                </div>

                <div className="row g-3 mb-3">
                  {[
                    { id: 'cod', title: 'Cash on Delivery (COD)', desc: 'Pay with cash upon reverent door delivery', icon: <FaMoneyBillWave /> },
                    { id: 'upi', title: 'UPI (GPay / PhonePe / Paytm)', desc: 'Instant zero-fee scan and pay at delivery', icon: <FaMobileAlt /> },
                    { id: 'card', title: 'Credit / Debit Card', desc: 'Visa, MasterCard, RuPay accepted', icon: <FaCreditCard /> },
                    { id: 'netbanking', title: 'Net Banking', desc: 'All major Indian private & public banks', icon: <FaUniversity /> },
                  ].map((method) => (
                    <div key={method.id} className="col-12 col-sm-6">
                      <label 
                        className={`p-3 rounded border h-100 d-flex flex-column justify-content-between ${paymentMethod === method.id ? 'border-gold bg-warm-cream' : 'border-light-cream'}`}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            checked={paymentMethod === method.id}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="form-check-input mt-0"
                          />
                          <span className="text-sacred-gold">{method.icon}</span>
                          <strong className="text-temple-navy small font-cinzel">{method.title}</strong>
                        </div>
                        <span className="text-muted small" style={{ fontSize: '0.78rem' }}>
                          {method.desc}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-light rounded text-muted small d-flex align-items-center gap-2">
                  <FaShieldAlt className="text-success" />
                  <span>Frontend demo store: no actual financial transactions or credentials are charged.</span>
                </div>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="col-lg-4">
              <div className="bg-white p-4 rounded-3 border border-light-cream shadow-sm sticky-top" style={{ top: '90px' }}>
                <div className="d-flex align-items-center gap-2 pb-3 mb-3 border-bottom border-light-cream">
                  <FaOm className="text-sacred-gold" />
                  <h5 className="font-cinzel text-temple-navy mb-0 fw-bold fs-6">Order Summary</h5>
                </div>

                {/* Items Mini List */}
                <div className="d-flex flex-column gap-2 mb-3 max-vh-40 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="d-flex align-items-center justify-content-between small py-1 border-bottom border-light-cream">
                      <div className="d-flex align-items-center gap-2 text-truncate" style={{ maxWidth: '70%' }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '32px', height: '32px', objectFit: 'cover', borderRadius: '4px' }}
                        />
                        <span className="text-truncate">{item.name} <span className="text-muted">× {item.quantity}</span></span>
                      </div>
                      <span className="fw-bold price-display">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="d-flex flex-column gap-2 mb-3">
                  <div className="d-flex justify-content-between text-muted small">
                    <span>Subtotal:</span>
                    <span className="price-display fw-semibold text-dark">₹{cartSubtotal.toLocaleString('en-IN')}</span>
                  </div>

                  {cartDiscount > 0 && (
                    <div className="d-flex justify-content-between text-success small">
                      <span>Vratham Discount:</span>
                      <span className="price-display fw-semibold">- ₹{cartDiscount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="d-flex justify-content-between text-muted small">
                    <span>Shipping ({deliveryMethod === 'express' ? 'Express' : 'Standard'}):</span>
                    <span className="price-display fw-semibold text-dark">
                      {deliveryCost === 0 ? <span className="text-success">FREE</span> : `₹${deliveryCost}`}
                    </span>
                  </div>

                  <div className="d-flex justify-content-between align-items-baseline pt-3 mt-2 border-top border-light-cream">
                    <span className="font-cinzel fw-bold text-temple-navy fs-5">Final Total:</span>
                    <span className="font-cinzel fs-3 text-temple-navy fw-bold price-display text-sacred-gold">
                      ₹{grandTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-sacred-gold w-100 py-3 fs-6 d-flex align-items-center justify-content-center gap-2"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span>Placing Sacred Order...</span>
                  ) : (
                    <>
                      <FaLock size={13} />
                      <span>Place Sanctified Order</span>
                    </>
                  )}
                </button>

                <div className="text-center mt-3">
                  <small className="text-muted d-block">
                    By placing order you receive Swamiye Saranam Ayyappa blessings and receipt confirmation.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
