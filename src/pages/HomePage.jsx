import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  ShieldCheck,
  Building,
  Layers,
  Sparkles,
  Truck,
  Compass,
  FileCheck2,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import SWAPHeroSection from '../components/SWAPHeroSection.jsx';
import TradePartnershipSection from '../components/TradePartnershipSection.jsx';
import {
  COMPANY_INFO,
  MATERIAL_CATEGORIES,
  ALUMINUM_SYSTEMS,
  GLASS_ONLY_SUPPLY,
  SERVICES,
  WHY_WORK_WITH_SWAP,
  BRANDS,
  PRODUCTS_CATALOG
} from '../data/companyData.js';

export default function HomePage({ onNavigate, onOpenQuote, onSelectProduct }) {
  const [activeMaterialTab, setActiveMaterialTab] = useState('steel');

  const selectedMaterial = MATERIAL_CATEGORIES.find((m) => m.id === activeMaterialTab) || MATERIAL_CATEGORIES[0];

  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* 1. NEW SWAP HERO SECTION (S - Steel, W - Wood, A - Aluminum, P - PVC in our architectural theme) */}
      <SWAPHeroSection onNavigate={onNavigate} onOpenQuote={onOpenQuote} />

      {/* 2. TRADE PARTNERSHIP & CAPABILITIES SECTION (Preserved after hero section) */}
      <TradePartnershipSection onNavigate={onNavigate} onOpenQuote={onOpenQuote} />

      {/* 2. INTRODUCTORY COMPANY SECTION */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3]">
                <img
                  src="/src/assets/images/materials_steel_minimal_1793359234398.jpg"
                  alt="Craftsmanship in architectural steel fenestration"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Quarty-style caption note */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>Precision Engineering & Shop Glazing</span>
                <span className="font-semibold text-[#0A2540]">SWAP Wholesale Supply</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 lg:pl-6">
              <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
                Company Overview
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0A2540] leading-tight">
                Engineering excellence and single-source wholesale supply.
              </h2>
              <p className="text-base text-slate-700 font-light leading-relaxed">
                SWAP Windows Corp. is dedicated exclusively to the architectural window and glazing trade. We empower glazing contractors and window dealers with comprehensive product access across four core material families, world-renowned European profile brands, and specialized glass supply.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                From initial schedule takeoffs and value engineering to customs clearance and job-site logistics, we eliminate the supply friction for complex commercial and luxury residential fenestration packages.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0A2540] hover:text-[#C59A45] transition-colors"
                >
                  <span>Learn More About Our Trade Partnership</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR MATERIAL CATEGORIES (Interactive Architectural Showcase) */}
      <section className="py-20 md:py-28 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
                Material Options
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0A2540]">
                Four Material Disciplines.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-light">
                Steel, Wood, Aluminum, and PVC are our primary material options for custom windows and doors.
              </p>
            </div>

            {/* Availability Note */}
            <div className="text-xs text-slate-500 max-w-xs bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="font-semibold text-slate-700 block mb-0.5">Note on Availability:</span>
              Product availability is determined by the selected system and project requirements.
            </div>
          </div>

          {/* Interactive Material Selector Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 mb-8 overflow-x-auto pb-1">
            {MATERIAL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveMaterialTab(cat.id)}
                className={`px-5 py-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border-b-2 ${
                  activeMaterialTab === cat.id
                    ? 'border-[#0A2540] text-[#0A2540]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Selected Material Feature Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAFA] rounded-2xl p-6 sm:p-10 border border-slate-200">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C59A45]">
                  {selectedMaterial.shortName} Fenestration
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0A2540]">
                  {selectedMaterial.headline}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedMaterial.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key System Characteristics
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedMaterial.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C59A45] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Typical Architectural Applications
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedMaterial.applications.map((app, i) => (
                    <span
                      key={i}
                      className="text-xs text-slate-700 bg-white px-3 py-1.5 rounded border border-slate-200"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('products', { category: selectedMaterial.id })}
                  className="px-6 py-3 bg-swap-blue-btn text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 shadow border border-[#1A4B82]/50"
                >
                  <span>Explore {selectedMaterial.shortName} Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E6C687]" />
                </button>
                <button
                  onClick={() => onOpenQuote(`${selectedMaterial.name} Scope`)}
                  className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#0A2540] transition-colors"
                >
                  Request Takeoff →
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3] bg-slate-200">
                <img
                  src={selectedMaterial.image}
                  alt={selectedMaterial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ARCHITECTURAL ALUMINUM SYSTEMS */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
              Aluminum Systems
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0A2540]">
              Architectural Aluminum Systems.
            </h2>
            <p className="text-base text-slate-600 font-light">
              Storefronts, curtain walls, office partitions, balcony glazing and railing systems, shower enclosures, commercial entrances, and large-format specialty sliding systems are supplied as aluminum systems. Standard sliding windows and doors may also be available in other materials.
            </p>
          </div>

          {/* Grid of 7 Systems */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALUMINUM_SYSTEMS.map((sys, idx) => (
              <div
                key={sys.title}
                className="bg-white p-7 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                    <span className="text-[11px] uppercase tracking-wider text-[#C59A45] font-semibold">
                      Aluminum
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-heading font-bold text-[#0A2540] group-hover:text-[#C59A45] transition-colors">
                      {sys.title}
                    </h3>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {sys.tagline}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sys.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
                    {sys.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#C59A45] rounded-full"></span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4">
                  <button
                    onClick={() => onNavigate('products', { system: sys.title })}
                    className="text-xs font-bold uppercase tracking-wider text-[#0A2540] hover:text-[#C59A45] transition-colors flex items-center gap-1.5"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GLASS-ONLY SUPPLY (Dedicated Visual Spotlight) */}
      <section className="py-20 md:py-28 bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#E6C687] font-semibold">
                  Glass-Only Supply
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                  Need Glass Without Frames?
                </h2>
                <p className="text-base text-slate-300 font-light leading-relaxed">
                  We supply glass separately for storefronts, curtain walls, windows, doors, balconies, and showers — manufactured to your project drawings and specifications.
                </p>
              </div>

              {/* Glass Capabilities List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                {GLASS_ONLY_SUPPLY.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#12365C]/50 p-2.5 rounded border border-[#1E3A5F]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#E6C687] shrink-0" />
                    <span className="text-slate-200">{cap}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuote('Glass-Only Supply')}
                  className="px-6 py-3.5 bg-[#C59A45] hover:bg-[#D4AF37] text-white text-xs font-bold uppercase tracking-wider rounded transition-all flex items-center gap-2 shadow"
                >
                  <span>Request Glass-Only Takeoff</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => onNavigate('products', { category: 'glass' })}
                  className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
                >
                  View Glass Options →
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#143B66] aspect-[4/3] bg-slate-900">
                <img
                  src={GLASS_ONLY_SUPPLY.image}
                  alt="Architectural glass without frames"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DRAWINGS, TAKEOFFS & PROJECT SERVICES with Blueprint Grid */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200 bg-architectural-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
              Comprehensive Trade Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0A2540]">
              Drawings, Takeoffs & Project Services.
            </h2>
            <p className="text-base text-slate-600 font-light">
              Send us your architectural drawings and schedules. SWAP will prepare takeoffs, review the scope, and follow up promptly.
            </p>
          </div>

          {/* 8 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.number}
                className="p-6 rounded-xl bg-[#FAFAFA] border border-slate-200 hover:border-[#0A2540] transition-colors space-y-3 group"
              >
                <div className="text-2xl font-heading font-extrabold text-[#C59A45]">
                  {srv.number}
                </div>
                <h3 className="text-lg font-heading font-bold text-[#0A2540]">
                  {srv.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>

          {/* Prompt follow-up action banner */}
          <div className="mt-12 p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-lg font-heading font-bold text-[#0A2540]">
                Ready to review your upcoming schedule?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Our estimating team reviews PDF, CAD (.dwg), and Excel schedules with rapid turnaround.
              </p>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 bg-swap-blue-btn text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap shadow border border-[#1A4B82]/50"
            >
              Send Drawings to SWAP
            </button>
          </div>
        </div>
      </section>

      {/* 7. WHY WORK WITH SWAP */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
              Trade Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0A2540]">
              Why Work With SWAP.
            </h2>
            <p className="text-base text-slate-600 font-light">
              Built specifically to support glazing contractors and window dealers through every phase of procurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_WORK_WITH_SWAP.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0A2540]/5 flex items-center justify-center text-[#0A2540] mb-2 font-bold font-heading">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-heading font-bold text-[#0A2540]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Installation Teams & Site Delivery Highlight (Direct from PDF) */}
          <div className="mt-12 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C59A45]">
                Qualified Trade Network
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#0A2540]">
                Installation Teams & Site Delivery
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                SWAP can help locate qualified installation teams, including experienced glazing contractors able to provide insurance required for the project. Regardless of order size, we coordinate logistics to your needs and arrange prompt delivery directly to the job site.
              </p>
            </div>

            <div className="space-y-3 border-t md:border-t-0 md:border-l border-slate-200 md:pl-8 pt-6 md:pt-0">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0A2540]">
                Direct Trade Inquiries
              </div>
              <div className="text-2xl font-heading font-bold text-[#0A2540]">
                {COMPANY_INFO.phone}
              </div>
              <div className="text-xs text-slate-500">
                Call our trade line or email your schedules to <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#0A2540] font-semibold underline">{COMPANY_INFO.email}</a>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FEATURED SPOTLIGHT: REYNAERS SL38 SLIM-PROFILE SYSTEM with SWAP Logo Gradient */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-gradient-to-r from-[#00142E] via-[#002552] to-[#124480] text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-[#17487F]/60 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#205FA6]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 max-w-2xl relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E6C687]">
                Featured Profile Special
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
                Special Discount Pricing on Reynaers SL38
              </h3>
              <p className="text-sm text-slate-200 font-light leading-relaxed">
                Ask about special discount pricing on Reynaers SL38 slim-profile aluminum systems. Send us your plans for project-specific pricing — we look forward to working with you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto relative z-10">
              <button
                onClick={() => onOpenQuote('Reynaers SL38 Slim-Profile System')}
                className="px-6 py-3.5 bg-swap-gold-btn text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all text-center shadow-md border border-[#D4A143]/40"
              >
                Inquire on SL38 Pricing
              </button>
              <button
                onClick={() => onNavigate('products', { system: 'Reynaers SL38' })}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all text-center border border-white/20"
              >
                View System Specs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BRANDS WE SUPPLY — PLUS OTHERS (Direct from PDF) */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
              Global Manufacturing Partners
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0A2540]">
              Brands We Supply — Plus Others.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light">
              We partner directly with leading European profile systems and architectural glass manufacturers.
            </p>
          </div>

          {/* Profile Brands */}
          <div className="mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 text-center">
              Architectural Profile Systems
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
              {BRANDS.profiles.map((brand) => (
                <div
                  key={brand.name}
                  className="bg-white p-5 rounded-xl border border-slate-200 text-center hover:shadow-md transition-shadow"
                >
                  <div className="font-heading font-bold text-base text-[#0A2540]">
                    {brand.name}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {brand.country}
                  </div>
                  {brand.specialNote && (
                    <div className="text-[11px] text-[#C59A45] font-medium mt-2 line-clamp-1">
                      {brand.specialNote}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Glass Companies */}
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 text-center">
              Architectural Glass Companies
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {BRANDS.glass.map((g) => (
                <div
                  key={g.name}
                  className="bg-white p-6 rounded-xl border border-slate-200 text-center hover:shadow-md transition-shadow"
                >
                  <div className="font-heading font-bold text-lg text-[#0A2540]">
                    {g.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-2">
                    {g.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center text-xs text-slate-500 italic">
            {BRANDS.note}
          </div>
        </div>
      </section>

      {/* 10. PROJECT TAKE-OFF CTA SECTION */}
      <section className="py-20 md:py-28 bg-[#0A2540] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#E6C687] font-semibold">
            Partner With SWAP Windows Corp.
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white max-w-3xl mx-auto leading-tight">
            Send us your plans for project-specific pricing — we look forward to working with you.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Glazing contractors and window dealers nationwide rely on SWAP for competitive wholesale pricing, precision engineering, and job-site delivery.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-4 bg-[#C59A45] hover:bg-[#D4AF37] text-white text-xs font-bold uppercase tracking-widest rounded transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Submit Architectural Takeoff</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-slate-500 text-xs font-bold uppercase tracking-widest rounded transition-all flex items-center justify-center gap-2"
            >
              <span>Call 877-212-SWAP</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
