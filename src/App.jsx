import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ShopProvider, useShop } from './context/ShopContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import QuickViewModal from './components/QuickViewModal';
import LoadingScreen from './components/LoadingScreen';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import About from './pages/About';
import PoojaSeva from './pages/PoojaSeva';
import Sabarimala from './pages/Sabarimala';
import Festivals from './pages/Festivals';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import SearchResults from './pages/SearchResults';
import NotFound from './pages/NotFound';

import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Global Toast Banner
function GlobalToast() {
  const { toastMessage } = useShop();
  if (!toastMessage) return null;

  return (
    <div
      className="position-fixed bottom-0 end-0 m-3 p-3 rounded-3 shadow-lg d-flex align-items-center gap-2 text-white"
      style={{
        backgroundColor: '#071A2B',
        border: '1.5px solid #D4A72C',
        zIndex: 9999,
        maxWidth: '360px',
        animation: 'fadeIn 0.3s ease-in-out'
      }}
      role="alert"
    >
      {toastMessage.type === 'info' ? (
        <FaInfoCircle className="text-warning flex-shrink-0" size={18} />
      ) : (
        <FaCheckCircle className="text-success flex-shrink-0" size={18} />
      )}
      <span className="small fw-semibold">{toastMessage.message}</span>
    </div>
  );
}

// App Layout with Search Modal & Shell
function AppLayout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollToTop />
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <QuickViewModal />
      <GlobalToast />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/pooja-seva" element={<PoojaSeva />} />
          <Route path="/sabarimala" element={<Sabarimala />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ShopProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </ShopProvider>
  );
}
