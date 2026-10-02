import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaOm, FaPray, FaClock } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = "Contact & Guruswamy Helpline | Ayyappa Devotional Store";
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit mobile number.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please write a message with at least 10 characters.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="py-5" style={{ backgroundColor: '#FCF9F2', minHeight: '80vh' }}>
      <div className="container-fluid" style={{ maxWidth: '1280px' }}>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(212, 167, 44, 0.15)', border: '1px solid rgba(212, 167, 44, 0.4)' }}>
            <FaOm className="text-sacred-gold" />
            <span className="font-cinzel text-sacred-gold fw-bold small text-uppercase tracking-wider">
              DEVOTEE ASSISTANCE
            </span>
          </div>
          <h1 className="font-cinzel text-temple-navy display-5 fw-bold mb-3">
            Contact & Devotee Guidance
          </h1>
          <p className="text-muted small max-w-xl mx-auto mb-0" style={{ maxWidth: '640px', lineHeight: 1.6 }}>
            Have questions about consecrated idols, vratham deeksha rules, bulk sangam kits, or your orders? Our devotee seva team is honored to assist.
          </p>
        </div>

        <div className="row g-5">
          {/* Left: Contact Info Cards */}
          <div className="col-lg-5">
            <div className="bg-white p-4 rounded-3 border border-light-cream shadow-sm mb-4">
              <h4 className="font-cinzel text-temple-navy mb-4 fw-bold fs-5">
                Temple Seva Center
              </h4>

              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-start gap-3">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center text-sacred-gold flex-shrink-0"
                    style={{ width: '44px', height: '44px', background: 'rgba(212, 167, 44, 0.15)' }}
                  >
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <h6 className="font-cinzel text-temple-navy mb-1 fw-bold fs-6">Registered Seva Office</h6>
                    <p className="text-muted small mb-0">
                      Sanctum Road, Sannidhanam Way, Pampa, Pathanamthitta, Kerala 689662, India
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center text-sacred-gold flex-shrink-0"
                    style={{ width: '44px', height: '44px', background: 'rgba(212, 167, 44, 0.15)' }}
                  >
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <h6 className="font-cinzel text-temple-navy mb-1 fw-bold fs-6">Guruswamy Devotee Helpline</h6>
                    <p className="text-muted small mb-1">+91 94440 18181 (Toll-Free Devotee Support)</p>
                    <p className="text-muted small mb-0">+91 98412 18182 (WhatsApp Seva Desk)</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center text-sacred-gold flex-shrink-0"
                    style={{ width: '44px', height: '44px', background: 'rgba(212, 167, 44, 0.15)' }}
                  >
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <h6 className="font-cinzel text-temple-navy mb-1 fw-bold fs-6">Electronic Mail</h6>
                    <p className="text-muted small mb-0">seva@ayyappastore.com / orders@ayyappastore.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center text-sacred-gold flex-shrink-0"
                    style={{ width: '44px', height: '44px', background: 'rgba(212, 167, 44, 0.15)' }}
                  >
                    <FaClock size={18} />
                  </div>
                  <div>
                    <h6 className="font-cinzel text-temple-navy mb-1 fw-bold fs-6">Operating Timings</h6>
                    <p className="text-muted small mb-0">
                      Monday to Sunday: 5:00 AM – 9:30 PM (IST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Devotee Blessing Notice */}
            <div className="p-4 rounded-3 bg-temple-navy text-white border border-gold">
              <div className="d-flex align-items-center gap-2 mb-2 text-warning">
                <FaPray />
                <span className="font-cinzel fw-bold small">SWAMIYE SARANAM AYYAPPA</span>
              </div>
              <p className="small text-light opacity-80 mb-0">
                Senior Guruswamys are available to clarify ritual doubts regarding Mala Dharanam, Irumudi Kettu items, and fasting practices during the sacred Mandala season.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="col-lg-7">
            <div className="bg-white p-4 p-md-5 rounded-3 border border-light-cream shadow-sm">
              <h4 className="font-cinzel text-temple-navy mb-2 fw-bold fs-5">
                Send a Devotional Message
              </h4>
              <p className="text-muted small mb-4">
                Fill out the form below and our devotee desk will respond promptly with spiritual care.
              </p>

              {submitted ? (
                <div className="text-center py-5">
                  <div 
                    className="rounded-circle bg-success text-white d-inline-flex p-3 mb-3 shadow-sm"
                  >
                    <FaCheckCircle size={40} />
                  </div>
                  <h4 className="font-cinzel text-temple-navy mb-2 fw-bold">
                    Thank you! Your message has been received.
                  </h4>
                  <p className="text-muted small mb-4" style={{ maxWidth: '480px', margin: '0 auto' }}>
                    May Lord Ayyappa bless you and your family. Our team will review your inquiry and get in touch within 24 hours.
                  </p>
                  <button
                    type="button"
                    className="btn btn-sacred-gold"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-temple-navy">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="e.g. Anand Swamy"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-temple-navy">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="e.g. anand@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-temple-navy">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-temple-navy">Subject</label>
                      <select
                        name="subject"
                        className="form-select"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="">Select a topic...</option>
                        <option value="Product Inquiry">Product Inquiry (Idols/Malas)</option>
                        <option value="Irumudi Bulk Orders">Bhakta Sangam / Bulk Irumudi Orders</option>
                        <option value="Pooja & Seva Assistance">Pooja & Seva Assistance</option>
                        <option value="Delivery Status">Delivery & Tracking Status</option>
                        <option value="General Guidance">Guruswamy Ritual Guidance</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label small fw-bold text-temple-navy">Devotional Message / Question *</label>
                      <textarea
                        rows="4"
                        name="message"
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                        placeholder="Please write your questions or request here..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>

                    <div className="col-12 mt-4">
                      <button type="submit" className="btn btn-sacred-gold w-100 py-3 fs-6">
                        Submit Message
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
