import React, { useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { FaSearch, FaArrowLeft, FaOm } from 'react-icons/fa';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  useEffect(() => {
    document.title = query ? `Search: "${query}" | Ayyappa Devotional Store` : "Search Results | Ayyappa Devotional Store";
    window.scrollTo(0, 0);
  }, [query]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const lower = query.toLowerCase();
    return products.filter((p) =>
      p.name.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower)
    );
  }, [query]);

  return (
    <div className="py-5" style={{ backgroundColor: '#FCF9F2', minHeight: '80vh' }}>
      <div className="container-fluid" style={{ maxWidth: '1280px' }}>
        {/* Header */}
        <div className="mb-4 pb-3 border-bottom border-light-cream">
          <div className="d-flex align-items-center gap-2 small text-muted mb-2">
            <Link to="/" className="text-muted text-decoration-none">Home</Link>
            <span>/</span>
            <Link to="/shop" className="text-muted text-decoration-none">Shop</Link>
            <span>/</span>
            <span className="text-sacred-gold fw-semibold">Search Results</span>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">
            <div>
              <h1 className="font-cinzel text-temple-navy display-6 fw-bold mb-1">
                {query ? `Search Results for "${query}"` : 'Search Devotional Store'}
              </h1>
              <p className="text-muted small mb-0">
                Found <strong>{searchResults.length}</strong> consecrated devotional products.
              </p>
            </div>

            <Link to="/shop" className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center gap-2">
              <FaArrowLeft size={12} />
              <span>Back to Complete Shop</span>
            </Link>
          </div>
        </div>

        {/* Results Grid */}
        {searchResults.length > 0 ? (
          <ProductGrid products={searchResults} columns={4} />
        ) : (
          <div className="text-center py-5 my-4 bg-white rounded-3 p-5 border border-light-cream shadow-sm">
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 text-sacred-gold"
              style={{ width: '70px', height: '70px', background: 'rgba(212, 167, 44, 0.12)' }}
            >
              <FaSearch size={30} />
            </div>

            <h3 className="font-cinzel text-temple-navy mb-2 fw-bold">
              No Devotional Products Found
            </h3>

            <p className="text-muted small max-w-md mx-auto mb-4" style={{ maxWidth: '480px' }}>
              We could not find any consecrated items matching "{query}". Try checking your spelling or search by broader terms like "Idol", "Mala", "Lamp", or "Kit".
            </p>

            <div className="d-flex justify-content-center gap-2 flex-wrap">
              {['Ayyappa Idol', 'Tulsi Mala', 'Irumudi Kit', 'Panchaloha', 'Deepam'].map((term) => (
                <Link
                  key={term}
                  to={`/search?q=${encodeURIComponent(term)}`}
                  className="btn btn-sm btn-outline-secondary bg-light"
                >
                  Search "{term}"
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
