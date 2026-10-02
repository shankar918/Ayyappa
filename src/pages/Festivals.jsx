import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaOm, FaCalendarAlt, FaFire, FaPray, FaStar, FaArrowRight } from 'react-icons/fa';
import heroImg from '../assets/images/hero_ayyappa_sabarimala_1790947352250.jpg';
import sabarimalaImg from '../assets/images/sabarimala_temple_pilgrimage_1790947385351.jpg';
import idolImg from '../assets/images/product_ayyappa_swamy_idol_1790947362973.jpg';

export default function Festivals() {
  useEffect(() => {
    document.title = "Sacred Festivals Calendar | Ayyappa Devotional Store";
    window.scrollTo(0, 0);
  }, []);

  const festivals = [
    {
      id: 'mandala-season',
      title: 'Mandala Pooja Season (Mandalakala)',
      timing: 'Mid-November to Late-December (41 Days)',
      icon: <FaCalendarAlt />,
      image: heroImg,
      summary: 'The primary pilgrimage period commencing on the 1st day of the Malayalam month Vrishchikam. Devotees observe strict vratham, wear black garments and Tulsi malas, and make the arduous journey to Sabarimala with the Irumudi.',
      rituals: 'Wearing Mala with Guruswamy blessings, daily cold water bath, single satvic meal, evening Harivarasanam chanting, and Neyyabhishekam at Sannidhanam.'
    },
    {
      id: 'makaravilakku',
      title: 'Makaravilakku Festival & Thiruvabharanam',
      timing: 'January 14 / Makara Sankranti',
      icon: <FaFire />,
      image: sabarimalaImg,
      summary: 'The grand celestial festival commemorating Lord Ayyappa adorned with the sacred royal ornaments (Thiruvabharanam) brought in a holy casket procession from Pandalam Palace escorted by Garuda (Krishna parunthu).',
      rituals: 'Procession through traditional forest routes, sanctification of royal crown and armor, and deepam lighting across the entire mountain valley.'
    },
    {
      id: 'makara-jyothi',
      title: 'Divine Makara Jyothi Darshanam',
      timing: 'Dusk of Makara Sankranti',
      icon: <FaStar />,
      image: heroImg,
      summary: 'At twilight, as the temple bells ring and deepams glow across Sannidhanam, the sacred celestial flame flashes thrice atop the distant Ponnambalamedu hill. Millions of pilgrims chant "Swamiye Saranam Ayyappa" in unison.',
      rituals: 'Silent meditation, camphor waving, and collective prayers for spiritual enlightenment and universal peace.'
    },
    {
      id: 'vishu',
      title: 'Maha Vishu Kani & New Year Festival',
      timing: 'Mid-April (Medam 1st)',
      icon: <FaPray />,
      image: idolImg,
      summary: 'The auspicious Malayalam New Year when the shrine opens for Vishu Kani darshanam. The Lord is presented with auspicious golden fruits, Kanikkonna yellow flowers, gold coins, and mirrors at dawn.',
      rituals: 'Vishu Kani darshanam, receiving Vishu Kaineettam coins blessed at the altar, and prayers for agricultural abundance.'
    },
    {
      id: 'panguni-uthiram',
      title: 'Panguni Uthiram & Temple Utsavam',
      timing: 'March / April (Aarattu Festival)',
      icon: <FaOm />,
      image: sabarimalaImg,
      summary: 'Celebration of Lord Manikanta’s birth and incarnation day under the auspicious Uthiram nakshatra. Features the 10-day annual temple festival culminating in holy immersion (Aarattu) in River Pampa.',
      rituals: 'Kodi-yettam (flag hoisting), Caparisoned elephant processions, special Abhishekam, and holy dip at Pampa Triveni.'
    }
  ];

  return (
    <div className="py-5" style={{ backgroundColor: '#FCF9F2', minHeight: '80vh' }}>
      <div className="container-fluid" style={{ maxWidth: '1280px' }}>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(212, 167, 44, 0.15)', border: '1px solid rgba(212, 167, 44, 0.4)' }}>
            <FaOm className="text-sacred-gold" />
            <span className="font-cinzel text-sacred-gold fw-bold small text-uppercase tracking-wider">
              AUSPICIOUS MUHURTHAMS
            </span>
          </div>
          <h1 className="font-cinzel text-temple-navy display-5 fw-bold mb-3">
            Sacred Festivals & Auspicious Dates
          </h1>
          <p className="text-muted small max-w-xl mx-auto mb-0" style={{ maxWidth: '640px', lineHeight: 1.6 }}>
            Understand the spiritual significance, ritual timings, and celebration schedules of the great festivals honoring Lord Ayyappa throughout the sacred calendar.
          </p>
        </div>

        {/* Timeline / Card Design */}
        <div className="d-flex flex-column gap-5 mb-5">
          {festivals.map((fest, idx) => (
            <div 
              key={fest.id}
              className="bg-white rounded-3 border border-light-cream overflow-hidden shadow-sm"
            >
              <div className="row g-0 align-items-center">
                <div className={`col-lg-5 ${idx % 2 === 1 ? 'order-lg-2' : ''}`}>
                  <div style={{ height: '320px' }}>
                    <img
                      src={fest.image}
                      alt={fest.title}
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className={`col-lg-7 p-4 p-md-5 ${idx % 2 === 1 ? 'order-lg-1' : ''}`}>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="text-sacred-gold fs-5">{fest.icon}</span>
                    <span className="badge-sacred-gold">{fest.timing}</span>
                  </div>

                  <h3 className="font-cinzel text-temple-navy fw-bold mb-3 fs-4">
                    {fest.title}
                  </h3>

                  <p className="text-muted mb-3" style={{ lineHeight: 1.6 }}>
                    {fest.summary}
                  </p>

                  <div className="p-3 bg-warm-cream rounded border border-light-cream mb-4">
                    <strong className="text-temple-navy small font-cinzel d-block mb-1">
                      Key Sacred Observances:
                    </strong>
                    <span className="text-muted small">
                      {fest.rituals}
                    </span>
                  </div>

                  <Link to="/shop" className="btn btn-sm btn-sacred-gold d-inline-flex align-items-center gap-2">
                    <span>Equip for This Festival</span>
                    <FaArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
