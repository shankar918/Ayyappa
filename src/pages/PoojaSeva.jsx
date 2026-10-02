import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaOm, FaFire, FaPray, FaHeart, FaCheckCircle, FaStar } from 'react-icons/fa';
import poojaKitImg from '../assets/images/category_pooja_essentials_kit_1790947374545.jpg';
import heroImg from '../assets/images/hero_ayyappa_sabarimala_1790947352250.jpg';
import idolImg from '../assets/images/product_ayyappa_swamy_idol_1790947362973.jpg';
import sabarimalaImg from '../assets/images/sabarimala_temple_pilgrimage_1790947385351.jpg';

export default function PoojaSeva() {
  const [selectedSeva, setSelectedSeva] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [devoteeName, setDevoteeName] = useState('');
  const [nakshatra, setNakshatra] = useState('');
  const [gotra, setGotra] = useState('');

  useEffect(() => {
    document.title = "Pooja & Seva Services | Ayyappa Devotional Store";
    window.scrollTo(0, 0);
  }, []);

  const sevas = [
    {
      id: 'padi-pooja',
      title: 'Padi Pooja (18 Holy Steps Worship)',
      icon: <FaFire />,
      image: heroImg,
      fee: '₹2,501',
      description: 'The supreme ritual worshipping each of the eighteen sacred steps with silk, flowers, deepams, coconuts, and Vedic chants invoking the guardian deities.',
      benefits: 'Cleanses karmic obstacles, blesses the family with spiritual ascension and protection.'
    },
    {
      id: 'abhishekam',
      title: 'Neyyabhishekam & Panchamrita Abhishekam',
      icon: <FaPray />,
      image: idolImg,
      fee: '₹1,101',
      description: 'Sacred ceremonial bathing of Lord Ayyappa with pure sanctified cow ghee, panchamrita, tender coconut water, rosewater, and sandalwood paste.',
      benefits: 'Brings immense peace of mind, cooling of bodily ailments, and divine spiritual grace.'
    },
    {
      id: 'annadanam',
      title: 'Maha Annadanam (Devotee Feast)',
      icon: <FaHeart />,
      image: sabarimalaImg,
      fee: '₹3,001',
      description: 'Sponsoring warm sanctified meals for fasting pilgrims and visiting Ayyappa Swamies during the Mandala and Makaravilakku holy seasons.',
      benefits: 'The highest charity (Maha Dana) that eliminates generational ancestral karmas.'
    },
    {
      id: 'bhajan-kirtan',
      title: 'Ayyappa Bhajan & Harivarasanam Seva',
      icon: <FaOm />,
      image: poojaKitImg,
      fee: '₹1,501',
      description: 'Organizing evening devotional bhajan sessions featuring traditional stotrams, 108 Saranam Vili, and divine Harivarasanam chanting.',
      benefits: 'Transforms home atmosphere with high devotional vibrations and deep spiritual focus.'
    },
    {
      id: 'special-pooja',
      title: 'Mandala Vratham Special Archana',
      icon: <FaStar />,
      image: idolImg,
      fee: '₹751',
      description: 'Personalized Astothara Sahasranama Archana performed in the name and nakshatra of your family members by temple priests.',
      benefits: 'Family health, prosperity, and blessings for children undertaking exams and new careers.'
    },
    {
      id: 'temple-seva',
      title: 'Pushpabhishekam (Floral Offering)',
      icon: <FaCheckCircle />,
      image: heroImg,
      fee: '₹1,801',
      description: 'Anointing the consecrated vigraham with fragrant temple flowers including jasmine, lotus, tulsi garlands, and sacred bilva leaves.',
      benefits: 'Enhances prosperity, beauty of thought, and boundless divine compassion.'
    }
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedSeva(null);
      setDevoteeName('');
      setNakshatra('');
      setGotra('');
    }, 3500);
  };

  return (
    <div className="py-5" style={{ backgroundColor: '#FCF9F2', minHeight: '80vh' }}>
      <div className="container-fluid" style={{ maxWidth: '1280px' }}>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(212, 167, 44, 0.15)', border: '1px solid rgba(212, 167, 44, 0.4)' }}>
            <FaOm className="text-sacred-gold" />
            <span className="font-cinzel text-sacred-gold fw-bold small text-uppercase tracking-wider">
              SACRED RITUALS & TEMPLE OFFERINGS
            </span>
          </div>
          <h1 className="font-cinzel text-temple-navy display-5 fw-bold mb-3">
            Pooja & Seva Offerings
          </h1>
          <p className="text-muted small max-w-xl mx-auto mb-0" style={{ maxWidth: '640px', lineHeight: 1.6 }}>
            Partake in blessed temple sevas performed in your name and family gotra with Vedic Agamic rituals. Receive consecrated holy prasad delivered to your home.
          </p>
        </div>

        {/* Sevas Grid */}
        <div className="row g-4 mb-5">
          {sevas.map((seva) => (
            <div key={seva.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border border-light-cream rounded-3 overflow-hidden shadow-sm hover-lift">
                <div className="position-relative" style={{ height: '200px' }}>
                  <img
                    src={seva.image}
                    alt={seva.title}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                    referrerPolicy="no-referrer"
                  />
                  <div
                    className="position-absolute top-0 end-0 m-2 px-2 py-1 rounded font-cinzel fw-bold"
                    style={{ background: '#071A2B', color: '#F5C542', fontSize: '0.85rem' }}
                  >
                    {seva.fee}
                  </div>
                </div>

                <div className="card-body p-4 d-flex flex-column bg-white">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="text-sacred-gold fs-5">{seva.icon}</span>
                    <h5 className="font-cinzel text-temple-navy mb-0 fs-6 fw-bold">
                      {seva.title}
                    </h5>
                  </div>

                  <p className="text-muted small mb-3 flex-grow-1" style={{ lineHeight: 1.5 }}>
                    {seva.description}
                  </p>

                  <div className="p-2 bg-warm-cream rounded mb-3 small text-secondary border border-light-cream">
                    <strong>Devotional Merit:</strong> {seva.benefits}
                  </div>

                  <button
                    type="button"
                    className="btn btn-sm btn-sacred-gold w-100 py-2"
                    onClick={() => setSelectedSeva(seva)}
                  >
                    Book Seva & Prasad
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seva Booking Modal */}
        {selectedSeva && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: 'rgba(7, 26, 43, 0.75)', zIndex: 1060 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content devotional-modal-content bg-white">
                <div className="modal-header bg-temple-navy text-white border-bottom border-gold">
                  <h5 className="modal-title font-cinzel text-bright-gold fs-6 d-flex align-items-center gap-2">
                    <FaOm /> Book {selectedSeva.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setSelectedSeva(null)}
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body p-4">
                  {bookingSuccess ? (
                    <div className="text-center py-4">
                      <div className="rounded-circle bg-success text-white d-inline-flex p-3 mb-3">
                        <FaCheckCircle size={32} />
                      </div>
                      <h5 className="font-cinzel text-temple-navy mb-2 fw-bold">Seva Registered with Reverence!</h5>
                      <p className="text-muted small mb-0">
                        Thank you, devotee. Your sankalpam details have been noted. The seva will be performed on the next auspicious muhurtham and sanctified prasad dispatched to your address.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleBooking}>
                      <div className="p-2 bg-warm-cream rounded mb-3 small border border-light-cream">
                        <div className="d-flex justify-content-between">
                          <span>Seva Offering:</span>
                          <strong>{selectedSeva.title}</strong>
                        </div>
                        <div className="d-flex justify-content-between mt-1">
                          <span>Dakshina / Donation:</span>
                          <strong className="text-sacred-gold">{selectedSeva.fee}</strong>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label small fw-bold text-temple-navy">Devotee Full Name</label>
                        <input
                          type="text"
                          required
                          className="form-control form-control-sm"
                          placeholder="e.g. Ramesh Guruswamy"
                          value={devoteeName}
                          onChange={(e) => setDevoteeName(e.target.value)}
                        />
                      </div>

                      <div className="row g-2 mb-3">
                        <div className="col-6">
                          <label className="form-label small fw-bold text-temple-navy">Nakshatra / Star</label>
                          <input
                            type="text"
                            required
                            className="form-control form-control-sm"
                            placeholder="e.g. Rohini / Uthiradam"
                            value={nakshatra}
                            onChange={(e) => setNakshatra(e.target.value)}
                          />
                        </div>
                        <div className="col-6">
                          <label className="form-label small fw-bold text-temple-navy">Gotra (Optional)</label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="e.g. Kashyapa / Bharadwaja"
                            value={gotra}
                            onChange={(e) => setGotra(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label small fw-bold text-temple-navy">Prasad Delivery Address</label>
                        <textarea
                          rows="2"
                          required
                          className="form-control form-control-sm"
                          placeholder="Complete postal address for consecrated vibhuti & prasad packet"
                        ></textarea>
                      </div>

                      <div className="d-flex gap-2">
                        <button type="submit" className="btn btn-sacred-gold w-100 py-2">
                          Confirm Seva Sankalpam
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary w-100 py-2"
                          onClick={() => setSelectedSeva(null)}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
