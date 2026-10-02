import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaOm, FaPray, FaFire, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import sabarimalaImg from '../assets/images/sabarimala_temple_pilgrimage_1790947385351.jpg';
import heroImg from '../assets/images/hero_ayyappa_sabarimala_1790947352250.jpg';
import idolImg from '../assets/images/product_ayyappa_swamy_idol_1790947362973.jpg';

export default function Sabarimala() {
  useEffect(() => {
    document.title = "Sabarimala Pilgrimage & 18 Sacred Steps | Ayyappa Devotional Store";
    window.scrollTo(0, 0);
  }, []);

  const eighteenSteps = [
    { num: 1, name: "Kama (Control over Lust)", meaning: "Sublimation of sensory desires into divine love" },
    { num: 2, name: "Krodha (Freedom from Anger)", meaning: "Cultivation of serene patience under hardship" },
    { num: 3, name: "Lobha (Overcoming Greed)", meaning: "Generosity and sharing food with fellow pilgrims" },
    { num: 4, name: "Moha (Dispelling Delusion)", meaning: "Clear discernment of eternal truth over transient illusions" },
    { num: 5, name: "Mada (Humility over Pride)", meaning: "Recognizing every human as equal manifestation of the Divine" },
    { num: 6, name: "Matsarya (Freedom from Envy)", meaning: "Rejoicing in the spiritual progress of others" },
    { num: 7, name: "Raga (Detachment from Attachments)", meaning: "Surrendering personal ego to Lord Dharma Sastha" },
    { num: 8, name: "Dvesha (Freedom from Hatred)", meaning: "Cultivating boundless universal goodwill" },
    { num: 9, name: "Sathwa (Purity of Thought)", meaning: "Consuming satvic diet and chanting stotrams" },
    { num: 10, name: "Rajas (Balancing Passion)", meaning: "Directing dynamic energy toward selfless seva" },
    { num: 11, name: "Tamas (Transcending Inertia)", meaning: "Rising early in Brahma Muhurtham for prayer" },
    { num: 12, name: "Jnana (Spiritual Wisdom)", meaning: "Understanding the Mahavakya: Tat Tvam Asi" },
    { num: 13, name: "Vairagya (Dispassion)", meaning: "Living simply during the 41-day vratham period" },
    { num: 14, name: "Dharma (Righteous Living)", meaning: "Speaking truth and upholding integrity in deeds" },
    { num: 15, name: "Prema (Unconditional Love)", meaning: "Treating all fellow pilgrims as 'Swami'" },
    { num: 16, name: "Bhakti (Single-minded Devotion)", meaning: "Complete absorption in Lord Ayyappa's lotus feet" },
    { num: 17, name: "Samarpana (Total Surrender)", meaning: "Offering mind, body, and spirit without reservation" },
    { num: 18, name: "Moksha (Liberation / Union)", meaning: "Realizing oneness with Supreme Consciousness at Sannidhanam" }
  ];

  return (
    <div className="py-5" style={{ backgroundColor: '#FCF9F2' }}>
      <div className="container-fluid" style={{ maxWidth: '1280px' }}>
        {/* Hero Banner */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(212, 167, 44, 0.15)', border: '1px solid rgba(212, 167, 44, 0.4)' }}>
            <FaOm className="text-sacred-gold" />
            <span className="font-cinzel text-sacred-gold fw-bold small text-uppercase tracking-wider">
              PATHINETTAMPADI & SANNIDHANAM
            </span>
          </div>
          <h1 className="font-cinzel text-temple-navy display-5 fw-bold mb-3">
            The Holy Abode of Lord Ayyappa
          </h1>
          <p className="text-muted small max-w-xl mx-auto mb-0" style={{ maxWidth: '640px', lineHeight: 1.6 }}>
            Nestled amid the sacred 18 hills of the Western Ghats in Kerala, Sabarimala is one of the world's most revered pilgrimage shrines, visited by millions of disciplined bhaktas.
          </p>
        </div>

        {/* Big Sabarimala Panoramic View */}
        <div className="rounded-3 overflow-hidden border border-gold shadow-lg mb-5 position-relative">
          <img
            src={sabarimalaImg}
            alt="Panoramic View of Sabarimala Sannidhanam"
            className="w-100"
            style={{ maxHeight: '460px', objectFit: 'cover' }}
            referrerPolicy="no-referrer"
          />
          <div 
            className="position-absolute bottom-0 start-0 w-100 p-4"
            style={{ background: 'linear-gradient(to top, rgba(7,26,43,0.95), transparent)' }}
          >
            <h3 className="font-cinzel text-bright-gold mb-1 fw-bold">Sabarimala Sannidhanam</h3>
            <p className="text-light opacity-80 small mb-0">Periyar Tiger Reserve, Pathanamthitta District, Kerala</p>
          </div>
        </div>

        {/* 4 Core Pillars of Pilgrimage */}
        <div className="row g-4 mb-5">
          <div className="col-md-6 col-lg-3">
            <div className="p-4 bg-white rounded-3 border border-light-cream h-100 shadow-sm">
              <div className="text-sacred-gold fs-4 mb-2"><FaCalendarAlt /></div>
              <h5 className="font-cinzel text-temple-navy mb-2 fw-bold fs-6">Mandalakala Season</h5>
              <p className="text-muted small mb-0">
                The 41-day austere vratham begins on the first day of Vrishchikam (mid-November), marked by wearing the sacred Tulsi mala and strict brahmacharya.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="p-4 bg-white rounded-3 border border-light-cream h-100 shadow-sm">
              <div className="text-sacred-gold fs-4 mb-2"><FaMapMarkerAlt /></div>
              <h5 className="font-cinzel text-temple-navy mb-2 fw-bold fs-6">Holy River Pampa</h5>
              <p className="text-muted small mb-0">
                Regarded as Dakshina Ganga. Devotees take holy dip at Triveni Sangam, perform pitru tarpanam, and prepare the sacred Irumudi Kettu for the mountain trek.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="p-4 bg-white rounded-3 border border-light-cream h-100 shadow-sm">
              <div className="text-sacred-gold fs-4 mb-2"><FaFire /></div>
              <h5 className="font-cinzel text-temple-navy mb-2 fw-bold fs-6">Makara Jyothi Divine Light</h5>
              <p className="text-muted small mb-0">
                Celebrated on Makara Sankranti day when the miraculous celestial light shines thrice upon Ponnambalamedu as the Thiruvabharanam arrives at the shrine.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="p-4 bg-white rounded-3 border border-light-cream h-100 shadow-sm">
              <div className="text-sacred-gold fs-4 mb-2"><FaPray /></div>
              <h5 className="font-cinzel text-temple-navy mb-2 fw-bold fs-6">Lord Dharma Sastha</h5>
              <p className="text-muted small mb-0">
                Born of Shiva and Mohini (Vishnu), Lord Manikanta embodies infinite compassion, yogic mastery, and warrior courage over demonic forces.
              </p>
            </div>
          </div>
        </div>

        {/* 18 Sacred Steps (Pathinettampadi) Detailed Grid */}
        <div className="bg-white p-5 rounded-3 border border-light-cream shadow-sm mb-5">
          <div className="text-center mb-5">
            <div className="d-inline-flex align-items-center gap-2 mb-2 text-warning">
              <FaPray />
              <span className="font-cinzel text-sacred-gold fw-bold small text-uppercase">DIVINE ASCENSION</span>
            </div>
            <h2 className="font-cinzel text-temple-navy display-6 fw-bold mb-2">
              The 18 Sacred Steps (Pathinettampadi)
            </h2>
            <p className="text-muted small max-w-xl mx-auto mb-0" style={{ maxWidth: '640px' }}>
              Only devotees observing the pure 41-day deeksha and carrying the sanctified Irumudi Kettu on their head are permitted to ascend the golden steps.
            </p>
          </div>

          <div className="row g-3">
            {eighteenSteps.map((step) => (
              <div key={step.num} className="col-md-6 col-lg-4">
                <div className="p-3 rounded border border-light-cream bg-warm-cream h-100 d-flex gap-3 align-items-start">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center fw-bold font-cinzel flex-shrink-0"
                    style={{ width: '38px', height: '38px', background: '#071A2B', color: '#F5C542', fontSize: '0.9rem' }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h6 className="font-cinzel text-temple-navy mb-1 fw-bold fs-6">
                      {step.name}
                    </h6>
                    <p className="text-muted small mb-0" style={{ fontSize: '0.82rem', lineHeight: '1.4' }}>
                      {step.meaning}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pilgrimage Kit CTA */}
        <div 
          className="p-5 rounded-3 text-white d-flex flex-column flex-md-row justify-content-between align-items-center gap-4"
          style={{ background: 'linear-gradient(135deg, #071A2B 0%, #102F43 100%)', border: '1.5px solid rgba(212, 167, 44, 0.45)' }}
        >
          <div>
            <span className="badge-sacred-gold mb-2 text-uppercase d-inline-block">Guruswamy Verified</span>
            <h3 className="font-cinzel text-bright-gold mb-2 fw-bold">Ready to Prepare Your Holy Irumudi?</h3>
            <p className="text-light opacity-80 small mb-0" style={{ maxWidth: '580px' }}>
              Order our complete Guruswamy-approved Irumudi kits, containing certified pure cow ghee, mudra coconuts, camphor, and ritual dravyas delivered safely to your home.
            </p>
          </div>

          <div className="d-flex flex-column gap-2 text-nowrap">
            <Link to="/product/4" className="btn btn-sacred-gold px-4 py-2">
              <span>View Complete Irumudi Kit</span>
              <FaArrowRight size={12} className="ms-2" />
            </Link>
            <Link to="/shop?category=malas-rudraksha" className="btn btn-sacred-outline px-4 py-2">
              Browse Deeksha Malas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
