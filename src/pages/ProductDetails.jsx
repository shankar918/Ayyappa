import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, products } from '../data/products';
import QuantitySelector from '../components/QuantitySelector';
import WishlistButton from '../components/WishlistButton';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import { FaStar, FaShoppingCart, FaBolt, FaCheckCircle, FaShieldAlt, FaTruck, FaUndo, FaOm } from 'react-icons/fa';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, isInWishlist, toggleWishlist } = useShop();
  
  const product = getProductById(id);
  const [selectedImg, setSelectedImg] = useState(product ? product.image : '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (product) {
      setSelectedImg(product.image);
      setQuantity(1);
      document.title = `${product.name} | Ayyappa Devotional Store`;
      window.scrollTo(0, 0);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="py-5 text-center bg-cream-soft min-vh-50 d-flex flex-column align-items-center justify-content-center">
        <h3 className="font-cinzel text-temple-navy mb-3">Product Not Found</h3>
        <p className="text-muted mb-4">The devotional item you are looking for is not available or has moved.</p>
        <Link to="/shop" className="btn btn-sacred-gold">
          Return to Devotional Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  // Related products from same category
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, 4);

  const galleryImages = product.images && product.images.length > 0 ? product.images : [product.image];

  return (
    <div className="py-4" style={{ backgroundColor: '#FCF9F2' }}>
      <div className="container-fluid" style={{ maxWidth: '1280px' }}>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb small text-muted">
            <li className="breadcrumb-item"><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/shop" className="text-muted text-decoration-none">Shop</Link></li>
            <li className="breadcrumb-item">
              <Link to={`/shop?category=${product.categorySlug}`} className="text-muted text-decoration-none">
                {product.category}
              </Link>
            </li>
            <li className="breadcrumb-item active text-temple-navy fw-semibold" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Product Showcase Row */}
        <div className="row g-4 mb-5">
          {/* Left: Product Images */}
          <div className="col-lg-6">
            <div className="bg-white p-3 rounded-3 border border-light-cream shadow-sm sticky-top" style={{ top: '90px' }}>
              {/* Main Image */}
              <div 
                className="rounded overflow-hidden mb-3 border border-light-cream position-relative"
                style={{ backgroundColor: '#F9F7F2', minHeight: '380px' }}
              >
                <img
                  src={selectedImg}
                  alt={product.name}
                  className="w-100"
                  style={{
                    maxHeight: '480px',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease'
                  }}
                  referrerPolicy="no-referrer"
                />

                {product.discount > 0 && (
                  <div
                    className="position-absolute top-0 start-0 m-3 px-3 py-1 rounded bg-danger text-white fw-bold small shadow-sm"
                  >
                    Save {product.discount}%
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="d-flex gap-2 justify-content-center">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`btn p-0 rounded overflow-hidden border ${selectedImg === img ? 'border-2 border-warning shadow-sm' : 'border-light-cream opacity-75'}`}
                      style={{ width: '65px', height: '65px' }}
                      onClick={() => setSelectedImg(img)}
                    >
                      <img
                        src={img}
                        alt={`${product.name} preview ${idx + 1}`}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Purchase Module */}
          <div className="col-lg-6">
            <div className="bg-white p-4 rounded-3 border border-light-cream shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge-sacred-gold text-uppercase">{product.category}</span>
                <span className="text-secondary">·</span>
                <span className="badge bg-success-subtle text-success border border-success-subtle d-inline-flex align-items-center gap-1">
                  <FaCheckCircle size={11} /> Consecrated & Authentic
                </span>
              </div>

              <h1 className="font-cinzel text-temple-navy display-6 fw-bold mb-3 fs-3">
                {product.name}
              </h1>

              {/* Ratings */}
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="d-flex text-warning">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={15} />
                  ))}
                </div>
                <span className="fw-bold text-dark">{product.rating}</span>
                <span className="text-muted small">({product.reviews} verified devotee reviews)</span>
              </div>

              {/* Pricing */}
              <div className="p-3 bg-warm-cream rounded-3 border border-light-cream mb-4">
                <div className="d-flex align-items-baseline gap-3">
                  <span className="font-cinzel fs-2 text-temple-navy fw-bold price-display text-sacred-gold">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-decoration-line-through text-muted fs-5 price-display">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="badge bg-danger small">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>
                <div className="small text-muted mt-1">
                  Inclusive of all taxes · Free sanctified delivery on orders above ₹999
                </div>
              </div>

              {/* Short Description */}
              <p className="text-muted mb-4" style={{ lineHeight: 1.6 }}>
                {product.description}
              </p>

              {/* Availability & Stock */}
              <div className="mb-4">
                <div className="d-flex align-items-center gap-2 small">
                  <span className="fw-bold text-temple-navy">Availability:</span>
                  {product.inStock ? (
                    <span className="text-success fw-semibold d-inline-flex align-items-center gap-1">
                      <FaCheckCircle /> In Stock (Ready to dispatch within 24 hours)
                    </span>
                  ) : (
                    <span className="text-danger fw-semibold">Temporarily Out of Stock</span>
                  )}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="d-flex align-items-center gap-3 mb-4">
                <span className="fw-semibold text-temple-navy small">Quantity:</span>
                <QuantitySelector
                  quantity={quantity}
                  onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
                  onIncrease={() => setQuantity(quantity + 1)}
                />
              </div>

              {/* Action Buttons */}
              <div className="row g-2 mb-4">
                <div className="col-12 col-sm-6">
                  <button
                    type="button"
                    className="btn btn-sacred-gold w-100 py-3 d-flex align-items-center justify-content-center gap-2 fs-6"
                    onClick={handleAddToCart}
                  >
                    <FaShoppingCart size={15} />
                    <span>Add to Sacred Cart</span>
                  </button>
                </div>
                <div className="col-12 col-sm-6">
                  <button
                    type="button"
                    className="btn btn-temple-navy w-100 py-3 d-flex align-items-center justify-content-center gap-2 fs-6"
                    onClick={handleBuyNow}
                  >
                    <FaBolt size={15} className="text-warning" />
                    <span>Proceed to Buy Now</span>
                  </button>
                </div>
                <div className="col-12 mt-2">
                  <WishlistButton product={product} showText={true} className="w-100 py-2 justify-content-center" />
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-3 border-top border-light-cream">
                <div className="row g-2 text-muted small">
                  <div className="col-6 d-flex align-items-center gap-2">
                    <FaShieldAlt className="text-sacred-gold" />
                    <span>100% Genuine Sanctity</span>
                  </div>
                  <div className="col-6 d-flex align-items-center gap-2">
                    <FaTruck className="text-sacred-gold" />
                    <span>Safe Temple Packaging</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white p-4 rounded-3 border border-light-cream shadow-sm mb-5">
          <ul className="nav nav-tabs mb-4 border-light-cream" id="productTabs" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link font-cinzel fw-bold ${activeTab === 'description' ? 'active text-temple-navy border-gold' : 'text-muted'}`}
                onClick={() => setActiveTab('description')}
                type="button"
              >
                Devotional Significance
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link font-cinzel fw-bold ${activeTab === 'specifications' ? 'active text-temple-navy border-gold' : 'text-muted'}`}
                onClick={() => setActiveTab('specifications')}
                type="button"
              >
                Specifications & Material
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link font-cinzel fw-bold ${activeTab === 'reviews' ? 'active text-temple-navy border-gold' : 'text-muted'}`}
                onClick={() => setActiveTab('reviews')}
                type="button"
              >
                Devotee Reviews ({product.reviews})
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link font-cinzel fw-bold ${activeTab === 'shipping' ? 'active text-temple-navy border-gold' : 'text-muted'}`}
                onClick={() => setActiveTab('shipping')}
                type="button"
              >
                Shipping & Sanctity Care
              </button>
            </li>
          </ul>

          <div className="tab-content pt-2">
            {activeTab === 'description' && (
              <div>
                <h5 className="font-cinzel text-temple-navy mb-3 fw-bold">Spiritual Significance & Benefits</h5>
                <p className="text-muted lh-base mb-3">{product.description}</p>
                <div className="p-3 bg-warm-cream rounded-3 border border-light-cream">
                  <h6 className="font-cinzel text-temple-navy mb-1 fw-bold">Ritual & Spiritual Benefits</h6>
                  <p className="text-muted small mb-0">{product.benefits}</p>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h5 className="font-cinzel text-temple-navy mb-3 fw-bold">Item Specifications</h5>
                <table className="table table-bordered table-striped border-light-cream small">
                  <tbody>
                    <tr>
                      <th style={{ width: '30%' }} className="text-muted">Material</th>
                      <td className="text-dark fw-semibold">{product.material}</td>
                    </tr>
                    <tr>
                      <th className="text-muted">Dimensions / Size</th>
                      <td className="text-dark">{product.dimensions}</td>
                    </tr>
                    <tr>
                      <th className="text-muted">Care Instructions</th>
                      <td className="text-dark">{product.careInstructions}</td>
                    </tr>
                    <tr>
                      <th className="text-muted">Authenticity</th>
                      <td className="text-success fw-semibold">Guruswamy Verified Consecrated Product</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h5 className="font-cinzel text-temple-navy mb-1 fw-bold">Customer Devotee Reviews</h5>
                    <div className="d-flex align-items-center gap-2">
                      <div className="text-warning d-flex">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      </div>
                      <span className="fw-bold">{product.rating} out of 5</span>
                      <span className="text-muted small">based on {product.reviews} ratings</span>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column gap-3">
                  <div className="p-3 rounded border border-light-cream bg-light">
                    <div className="d-flex justify-content-between mb-1">
                      <strong className="text-temple-navy font-cinzel">S. Ramakrishnan (Sabarimala Kanni Swamy)</strong>
                      <span className="text-muted small">Mandala Season 2025</span>
                    </div>
                    <div className="text-warning small mb-2"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    <p className="small text-muted mb-0">
                      "Extremely pure and genuine. The craftsmanship is flawless, packed with utmost respect and holy vibhuti. Swamiye Saranam Ayyappa!"
                    </p>
                  </div>

                  <div className="p-3 rounded border border-light-cream bg-light">
                    <div className="d-flex justify-content-between mb-1">
                      <strong className="text-temple-navy font-cinzel">N. Balaji Guruswamy</strong>
                      <span className="text-muted small">2 weeks ago</span>
                    </div>
                    <div className="text-warning small mb-2"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    <p className="small text-muted mb-0">
                      "I ordered this for our temple Padi Pooja. Everyone in our bhakta sangam was amazed at the divine luster and finishing."
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div>
                <h5 className="font-cinzel text-temple-navy mb-3 fw-bold">Packaging & Delivery Information</h5>
                <p className="text-muted lh-base mb-3">{product.shippingInfo}</p>
                <div className="row g-3 small">
                  <div className="col-md-4">
                    <div className="p-3 bg-light rounded border border-light-cream h-100">
                      <h6 className="fw-bold text-temple-navy mb-1">Safe Transit Guarantee</h6>
                      <p className="text-muted mb-0">Double-walled thermocol shockproof enclosure ensuring zero damage during transit.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 bg-light rounded border border-light-cream h-100">
                      <h6 className="fw-bold text-temple-navy mb-1">Sacred Reverence</h6>
                      <p className="text-muted mb-0">Packed in consecrated environment by practicing devotees chanting holy mantras.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 bg-light rounded border border-light-cream h-100">
                      <h6 className="fw-bold text-temple-navy mb-1">Easy Replacement</h6>
                      <p className="text-muted mb-0">Complimentary replacement in the rare event of transit damage upon delivery.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* "You May Also Like" Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <FaOm className="text-sacred-gold" />
              <h3 className="font-cinzel text-temple-navy mb-0 fw-bold fs-4">
                You May Also Like
              </h3>
            </div>
            <div className="row g-4">
              {relatedProducts.map(p => (
                <div key={p.id} className="col-12 col-sm-6 col-md-6 col-lg-3">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
