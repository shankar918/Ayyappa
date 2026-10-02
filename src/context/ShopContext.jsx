import React, { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

export const ShopProvider = ({ children }) => {
  // Initialize Cart from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('ayyappa_store_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.error('Failed reading cart from localStorage', e);
      return [];
    }
  });

  // Initialize Wishlist from localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem('ayyappa_store_wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (e) {
      console.error('Failed reading wishlist from localStorage', e);
      return [];
    }
  });

  // Quick View Modal state
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Search & Toast notification states
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  
  // Last placed order for OrderSuccess page
  const [recentOrder, setRecentOrder] = useState(() => {
    try {
      const savedOrder = localStorage.getItem('ayyappa_store_recent_order');
      return savedOrder ? JSON.parse(savedOrder) : null;
    } catch (e) {
      return null;
    }
  });

  // Save Cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ayyappa_store_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed writing cart to localStorage', e);
    }
  }, [cart]);

  // Save Wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ayyappa_store_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed writing wishlist to localStorage', e);
    }
  }, [wishlist]);

  // Show Toast
  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Cart operations
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
    showToast(`Added "${product.name}" to cart.`);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    showToast('Item removed from cart.', 'info');
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      showToast(`Removed from wishlist.`, 'info');
    } else {
      setWishlist((prev) => [...prev, product]);
      showToast(`Added "${product.name}" to wishlist.`);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
    showToast('Removed from wishlist.', 'info');
  };

  const moveWishlistToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
  };

  // Calculations
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  // Free delivery above ₹999, else ₹80
  const cartShipping = cartSubtotal >= 999 || cartSubtotal === 0 ? 0 : 80;
  // Auspicious discount 5% if above ₹2000
  const cartDiscount = cartSubtotal > 2000 ? Math.round(cartSubtotal * 0.05) : 0;
  const cartTotal = cartSubtotal - cartDiscount + cartShipping;

  const placeOrder = (orderDetails) => {
    const finalOrder = {
      orderId: `AYP${new Date().getFullYear()}${String(Date.now()).slice(-6)}`,
      date: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      items: [...cart],
      subtotal: cartSubtotal,
      shipping: cartShipping,
      discount: cartDiscount,
      total: cartTotal,
      customer: orderDetails,
      status: 'Confirmed - Preparing Sanctified Shipment',
      estimatedDelivery: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }),
    };
    setRecentOrder(finalOrder);
    localStorage.setItem('ayyappa_store_recent_order', JSON.stringify(finalOrder));
    clearCart();
    return finalOrder;
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        cartCount,
        cartSubtotal,
        cartShipping,
        cartDiscount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        wishlist,
        isInWishlist,
        toggleWishlist,
        removeFromWishlist,
        moveWishlistToCart,
        quickViewProduct,
        openQuickView: setQuickViewProduct,
        closeQuickView: () => setQuickViewProduct(null),
        searchQuery,
        setSearchQuery,
        toastMessage,
        showToast,
        recentOrder,
        placeOrder,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
