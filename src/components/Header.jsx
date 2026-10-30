import React, { useState, useEffect } from 'react';
import { Phone, Mail, ChevronDown, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, MATERIAL_CATEGORIES, ALUMINUM_SYSTEMS } from '../data/companyData.js';

export default function Header({ currentRoute, onNavigate, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'projects', label: 'Swap Projects' },
    { id: 'brands', label: 'Brands' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar with SWAP Logo Blue Gradient */}
      <div className="bg-gradient-to-r from-[#00132B] via-[#001F43] to-[#0A3366] text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-[#143E6D]/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-medium">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs tracking-wider">
            <span className="flex items-center gap-1.5 text-[#E6C687]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E6C687]" />
              USA TESTED · EUROPEAN TESTED
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300 tracking-wider">
              STEEL · WOOD · ALUMINUM · PVC
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] sm:text-xs">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#E6C687] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#E6C687]" />
              <span className="font-semibold">{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-[#E6C687] transition-colors whitespace-nowrap"
            >
              <Mail className="w-3 h-3 text-[#E6C687]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3.5'
            : 'bg-white border-b border-slate-100 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Logo */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left focus:outline-none group"
              aria-label="SWAP Windows Corp. Homepage"
            >
              <img
                src="/swap-logo-transparent.png"
                alt="SWAP Windows Corp."
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </button>
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            {navItems.map((item) => {
              const isActive = currentRoute === item.id;
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <button
                      onClick={() => onNavigate('products')}
                      className={`flex items-center gap-1 py-2 hover:text-[#0A2540] transition-colors whitespace-nowrap shrink-0 ${
                        isActive ? 'text-[#0A2540] font-semibold' : 'text-slate-600'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          productsDropdownOpen ? 'rotate-180 text-[#0A2540]' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Rich Architectural Mega Dropdown */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[620px] bg-white rounded-xl shadow-xl border border-slate-200 p-6 z-50 grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
                        {/* 4 Materials Column */}
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 pb-1 border-b border-slate-100">
                            Four Material Options
                          </div>
                          <ul className="space-y-2">
                            {MATERIAL_CATEGORIES.map((cat) => (
                              <li key={cat.id}>
                                <button
                                  onClick={() => {
                                    setProductsDropdownOpen(false);
                                    onNavigate('products', { category: cat.id });
                                  }}
                                  className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition-colors group flex items-start justify-between"
                                >
                                  <div>
                                    <div className="text-sm font-semibold text-slate-800 group-hover:text-[#0A2540]">
                                      {cat.name}
                                    </div>
                                    <div className="text-xs text-slate-500 line-clamp-1">
                                      {cat.headline}
                                    </div>
                                  </div>
                                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#C59A45] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                                </button>
                              </li>
                            ))}
                            <li>
                              <button
                                onClick={() => {
                                  setProductsDropdownOpen(false);
                                  onNavigate('products', { category: 'glass' });
                                }}
                                className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition-colors group flex items-start justify-between"
                              >
                                <div>
                                  <div className="text-sm font-semibold text-slate-800 group-hover:text-[#0A2540]">
                                    Glass-Only Supply
                                  </div>
                                  <div className="text-xs text-slate-500">
                                    Architectural glass without frames
                                  </div>
                                </div>
                                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#C59A45] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                              </button>
                            </li>
                          </ul>
                        </div>

                        {/* Architectural Aluminum Systems Column */}
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 pb-1 border-b border-slate-100">
                            Architectural Systems
                          </div>
                          <ul className="space-y-1.5 text-xs">
                            {ALUMINUM_SYSTEMS.slice(0, 5).map((sys) => (
                              <li key={sys.title}>
                                <button
                                  onClick={() => {
                                    setProductsDropdownOpen(false);
                                    onNavigate('products', { system: sys.title });
                                  }}
                                  className="w-full text-left px-2 py-1.5 rounded-md hover:bg-slate-50 hover:text-[#0A2540] text-slate-600 transition-colors flex items-center justify-between"
                                >
                                  <span>{sys.title}</span>
                                  <span className="text-[11px] text-slate-400">{sys.tagline.split(' ')[0]}</span>
                                </button>
                              </li>
                            ))}
                            <li className="pt-2">
                              <button
                                onClick={() => {
                                  setProductsDropdownOpen(false);
                                  onNavigate('products');
                                }}
                                className="w-full text-center text-xs font-semibold text-[#0A2540] hover:text-[#C59A45] py-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                              >
                                View Complete Catalog →
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`py-2 text-sm transition-colors whitespace-nowrap shrink-0 relative ${
                    isActive
                      ? 'text-[#0A2540] font-semibold'
                      : 'text-slate-600 hover:text-[#0A2540]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C59A45]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-swap-blue-btn rounded-lg shadow-sm whitespace-nowrap shrink-0 flex items-center gap-2 border border-[#1A4B82]/50"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E6C687]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-3.5 py-2 text-xs font-semibold text-white bg-swap-blue-btn rounded-lg whitespace-nowrap"
            >
              Get Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0A2540] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[105px] bottom-0 bg-white z-40 border-t border-slate-200 overflow-y-auto px-6 py-8 flex flex-col justify-between animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate(item.id);
                  }}
                  className={`text-left text-lg font-heading py-2 border-b border-slate-100 flex items-center justify-between ${
                    currentRoute === item.id
                      ? 'text-[#0A2540] font-bold'
                      : 'text-slate-800'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </nav>

            {/* Quick materials list in mobile drawer */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Materials & Systems
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {MATERIAL_CATEGORIES.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate('products', { category: m.id });
                    }}
                    className="p-3 text-left bg-slate-50 rounded-lg hover:bg-slate-100 text-slate-800 font-medium"
                  >
                    {m.shortName} Windows
                  </button>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('products', { category: 'glass' });
                  }}
                  className="col-span-2 p-3 text-left bg-slate-50 rounded-lg hover:bg-slate-100 text-slate-800 font-medium"
                >
                  Glass-Only Supply (Without Frames)
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 mt-8 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white bg-swap-blue-btn rounded-lg shadow border border-[#1A4B82]/50"
            >
              Request Project Takeoff
            </button>
            <div className="text-center text-xs text-slate-500 space-y-1">
              <div>Direct Phone: <a href={`tel:${COMPANY_INFO.phoneClean}`} className="font-semibold text-slate-800">{COMPANY_INFO.phone}</a></div>
              <div>Direct Email: <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-slate-800">{COMPANY_INFO.email}</a></div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
