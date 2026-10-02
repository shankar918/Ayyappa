import React, { useState, useEffect } from 'react';
import { FaOm, FaTimes, FaSearchPlus } from 'react-icons/fa';
import heroImg from '../assets/images/hero_ayyappa_sabarimala_1790947352250.jpg';
import sabarimalaImg from '../assets/images/sabarimala_temple_pilgrimage_1790947385351.jpg';
import idolImg from '../assets/images/product_ayyappa_swamy_idol_1790947362973.jpg';
import poojaKitImg from '../assets/images/category_pooja_essentials_kit_1790947374545.jpg';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = "Sacred Devotional Gallery | Ayyappa Devotional Store";
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "Sabarimala Sannidhanam Twilight View",
      category: "Sabarimala",
      image: sabarimalaImg,
      caption: "The golden temple roof glowing beneath the evening twilight in the Periyar hills."
    },
    {
      id: 2,
      title: "Consecrated Panchaloha Vigraham",
      category: "Pooja",
      image: idolImg,
      caption: "Lord Ayyappa adorned with traditional floral garlands and shining deepams."
    },
    {
      id: 3,
      title: "Consecrated Pooja Thali & Diya",
      category: "Temple",
      image: poojaKitImg,
      caption: "Sacred South Indian brass deepam, chandan, vibhuti, and pure tulsi beads."
    },
    {
      id: 4,
      title: "Western Ghats Pilgrimage Path",
      category: "Sabarimala",
      image: heroImg,
      caption: "Devotees walking with Irumudi Kettu across the mountain trail to the shrine."
    },
    {
      id: 5,
      title: "Ayyappa Bhakta Pilgrims at Pampa",
      category: "Devotees",
      image: sabarimalaImg,
      caption: "Pilgrims taking holy bath in sacred River Pampa prior to hill ascent."
    },
    {
      id: 6,
      title: "Makara Jyothi Festival Celebration",
      category: "Festivals",
      image: heroImg,
      caption: "Celestial deepam festival illuminated with millions of devotional prayers."
    },
    {
      id: 7,
      title: "Padi Pooja Sacred 18 Steps Decor",
      category: "Temple",
      image: idolImg,
      caption: "Traditional brass vilakku lighting honoring the guardian deities."
    },
    {
      id: 8,
      title: "Sacred Deeksha Mala Consecration",
      category: "Devotees",
      image: poojaKitImg,
      caption: "Guruswamy blessing the Tulsi and Rudraksha malas for Kanni Swamies."
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-5" style={{ backgroundColor: '#FCF9F2', minHeight: '80vh' }}>
      <div className="container-fluid" style={{ maxWidth: '1280px' }}>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(212, 167, 44, 0.15)', border: '1px solid rgba(212, 167, 44, 0.4)' }}>
            <FaOm className="text-sacred-gold" />
            <span className="font-cinzel text-sacred-gold fw-bold small text-uppercase tracking-wider">
              DIVINE GLIMPSES
            </span>
          </div>
          <h1 className="font-cinzel text-temple-navy display-5 fw-bold mb-3">
            Sacred Devotional Gallery
          </h1>
          <p className="text-muted small max-w-xl mx-auto mb-4" style={{ maxWidth: '640px', lineHeight: 1.6 }}>
            Immerse yourself in photographs of Sabarimala Sannidhanam, temple deepams, consecrated Panchaloha idols, and sacred pilgrimage celebrations.
          </p>

          {/* Filter Categories */}
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {['all', 'Sabarimala', 'Temple', 'Pooja', 'Devotees', 'Festivals'].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`btn btn-sm px-3 py-1 rounded-pill ${
                  activeCategory === cat
                    ? 'btn-sacred-gold'
                    : 'btn-outline-secondary bg-white'
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'all' ? 'All Sacred Photos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="row g-4 mb-5">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-3">
              <div 
                className="rounded-3 overflow-hidden border border-light-cream shadow-sm bg-white position-relative cursor-pointer hover-lift"
                style={{ height: '260px', cursor: 'pointer' }}
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  referrerPolicy="no-referrer"
                />

                <div 
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-3"
                  style={{
                    background: 'linear-gradient(to top, rgba(7,26,43,0.92) 0%, rgba(7,26,43,0.3) 50%, transparent 100%)',
                    opacity: 0.95
                  }}
                >
                  <span className="badge-sacred-gold align-self-start mb-1" style={{ fontSize: '0.68rem' }}>
                    {item.category}
                  </span>
                  <h6 className="font-cinzel text-white mb-0 fs-6 fw-bold">
                    {item.title}
                  </h6>
                </div>

                <div 
                  className="position-absolute top-0 end-0 m-2 rounded-circle bg-dark text-warning p-2 d-flex align-items-center justify-content-center opacity-75"
                  style={{ width: '32px', height: '32px' }}
                >
                  <FaSearchPlus size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: 'rgba(7, 26, 43, 0.9)', backdropFilter: 'blur(6px)', zIndex: 1070 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content devotional-modal-content bg-temple-navy border-gold text-white">
                <div className="modal-header border-bottom border-secondary py-2 px-3">
                  <h5 className="modal-title font-cinzel text-bright-gold fs-6 mb-0">
                    {selectedImage.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setSelectedImage(null)}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body p-0 text-center">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-100"
                    style={{ maxHeight: '70vh', objectFit: 'contain' }}
                  />
                  <div className="p-3 text-start bg-secondary-navy">
                    <span className="badge-sacred-gold mb-1 d-inline-block">{selectedImage.category}</span>
                    <p className="text-light opacity-90 small mb-0">{selectedImage.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
