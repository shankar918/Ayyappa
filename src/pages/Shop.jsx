import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import ProductFilters from '../components/ProductFilters';
import { products } from '../data/products';
import { FaFilter, FaTimes, FaSortAmountDown, FaOm } from 'react-icons/fa';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState(3000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  // Sync category state when URL query changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  useEffect(() => {
    document.title = "Devotional Shop | Ayyappa Swamy Idols & Pooja Essentials";
  }, []);

  const handleCategorySelect = (categorySlug) => {
    setSelectedCategory(categorySlug);
    if (categorySlug === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: categorySlug });
    }
    setShowMobileFilters(false);
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setPriceRange(3000);
    setSelectedRating(0);
    setInStockOnly(false);
    setSortBy('featured');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  // Filter and sort computation
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.categorySlug !== selectedCategory) {
        return false;
      }
      // Price filter
      if (product.price > priceRange) {
        return false;
      }
      // Rating filter
      if (selectedRating > 0 && product.rating < selectedRating) {
        return false;
      }
      // In stock filter
      if (inStockOnly && !product.inStock) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return b.id - a.id;
      // Default: featured first
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, priceRange, selectedRating, inStockOnly, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="py-4" style={{ backgroundColor: '#FCF9F2', minHeight: '80vh' }}>
      <div className="container-fluid" style={{ maxWidth: '1280px' }}>
        {/* Breadcrumb & Header */}
        <div className="mb-4">
          <div className="d-flex align-items-center gap-2 small text-muted mb-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-sacred-gold fw-semibold">Devotional Shop</span>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
            <div>
              <h1 className="font-cinzel text-temple-navy display-6 fw-bold mb-1">
                Ayyappa Devotional Collection
              </h1>
              <p className="text-muted small mb-0">
                Browse authentic Panchaloha vigrahams, Vratham malas, brass pooja lamps, and certified sacred items.
              </p>
            </div>

            {/* Sort & Mobile Filter Toggle */}
            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                className="btn btn-sacred-outline btn-sm d-lg-none d-flex align-items-center gap-2"
                onClick={() => setShowMobileFilters(true)}
              >
                <FaFilter size={12} />
                <span>Filters ({filteredProducts.length})</span>
              </button>

              <div className="d-flex align-items-center gap-2">
                <FaSortAmountDown className="text-muted d-none d-sm-inline" />
                <select
                  className="form-select form-select-sm border-light-cream bg-white text-dark shadow-sm"
                  style={{ minWidth: '170px' }}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Sort products"
                >
                  <option value="featured">Featured / Best Devotion</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Devotee Rating</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="row g-4">
          {/* Desktop Left Sidebar Filters */}
          <div className="col-lg-3 d-none d-lg-block">
            <ProductFilters
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
              priceRange={priceRange}
              onChangePriceRange={setPriceRange}
              selectedRating={selectedRating}
              onSelectRating={setSelectedRating}
              inStockOnly={inStockOnly}
              onToggleInStock={setInStockOnly}
              onResetFilters={handleResetFilters}
              totalResults={filteredProducts.length}
            />
          </div>

          {/* Right Product Grid */}
          <div className="col-lg-9">
            <ProductGrid
              products={displayedProducts}
              columns={3}
              emptyMessage="No consecrated items match your current filter criteria. Try adjusting your filters or price slider."
            />

            {/* Load More Pagination */}
            {displayedProducts.length < filteredProducts.length && (
              <div className="text-center mt-5">
                <button
                  type="button"
                  className="btn btn-sacred-gold px-4 py-2"
                  onClick={() => setVisibleCount((prev) => prev + 8)}
                >
                  Load More Consecrated Products ({filteredProducts.length - displayedProducts.length} remaining)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Offcanvas / Modal */}
      {showMobileFilters && (
        <div
          className="modal fade show d-block d-lg-none"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(7, 26, 43, 0.75)', zIndex: 1060 }}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content devotional-modal-content">
              <div className="modal-header bg-temple-navy text-white border-bottom border-gold">
                <h5 className="modal-title font-cinzel text-bright-gold d-flex align-items-center gap-2 fs-6">
                  <FaFilter /> Filters & Categories
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowMobileFilters(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-0">
                <ProductFilters
                  selectedCategory={selectedCategory}
                  onSelectCategory={handleCategorySelect}
                  priceRange={priceRange}
                  onChangePriceRange={setPriceRange}
                  selectedRating={selectedRating}
                  onSelectRating={setSelectedRating}
                  inStockOnly={inStockOnly}
                  onToggleInStock={setInStockOnly}
                  onResetFilters={handleResetFilters}
                  totalResults={filteredProducts.length}
                />
              </div>
              <div className="modal-footer bg-light p-2">
                <button
                  type="button"
                  className="btn btn-sacred-gold w-100"
                  onClick={() => setShowMobileFilters(false)}
                >
                  View {filteredProducts.length} Products
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
