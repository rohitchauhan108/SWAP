import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingContactDock from './components/FloatingContactDock.jsx';
import QuoteModal from './components/QuoteModal.jsx';
import ProductDetailModal from './components/ProductDetailModal.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import BrandsPage from './pages/BrandsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [routeParams, setRouteParams] = useState({});
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteInitialSystem, setQuoteInitialSystem] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Initialize route from current window path if set
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, '');
      const validRoutes = ['home', 'about', 'products', 'projects', 'brands', 'contact'];
      if (validRoutes.includes(path)) {
        setCurrentRoute(path);
      } else {
        setCurrentRoute('home');
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (route, params = {}) => {
    setCurrentRoute(route);
    setRouteParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const urlPath = route === 'home' ? '/' : `/${route}`;
      window.history.pushState({ route, params }, '', urlPath);
    } catch {
      // Fallback for isolated iframe contexts
    }
  };

  const handleOpenQuote = (systemName = '') => {
    setQuoteInitialSystem(typeof systemName === 'string' ? systemName : '');
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setQuoteInitialSystem('');
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#1E293B]">
      {/* Universal Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Multi-Page Content Area */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenQuote={handleOpenQuote}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentRoute === 'products' && (
          <ProductsPage
            initialCategory={routeParams.category}
            initialSystem={routeParams.system}
            onOpenQuote={handleOpenQuote}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentRoute === 'projects' && (
          <ProjectsPage
            onNavigate={navigateTo}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentRoute === 'brands' && (
          <BrandsPage
            onNavigate={navigateTo}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Universal Editorial Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Interactive Project Takeoff / Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        initialSystem={quoteInitialSystem}
      />

      {/* Interactive Product Details & Technical Specs Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={handleCloseProductModal}
        onOpenQuote={handleOpenQuote}
      />

      {/* Floating Trade Contact Dock (WhatsApp & Email only) */}
      <FloatingContactDock />
    </div>
  );
}
