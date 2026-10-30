import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.js';
import swapBuildingFacade from '../assets/images/swap_building_facade_1793362746018.jpg';

export default function SWAPHeroSection({ onNavigate, onOpenQuote }) {

  const swapDisciplines = [
    { letter: 'S', title: 'Steel', category: 'steel' },
    { letter: 'W', title: 'Wood', category: 'wood' },
    { letter: 'A', title: 'Aluminum', category: 'aluminum' },
    { letter: 'P', title: 'PVC', category: 'pvc' },
  ];

  return (
    <div className="w-full">
      {/* =========================================================
          PART 1: THE ARCHITECTURAL FACADE BANNER (S · W · A · P)
          Re-imagined from the old website hero in our architectural theme
         ========================================================= */}
      <section className="relative w-full min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#0A1626]">
        {/* Real Architectural Building Facade Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={swapBuildingFacade}
            alt="SWAP Windows Corp. - Architectural Building Facade with Steel, Wood, Aluminum, and PVC Fenestration"
            className="w-full h-full object-cover object-center brightness-90 contrast-[1.05] transition-transform duration-1000 scale-100 hover:scale-[1.02]"
          />
          {/* Architectural Dark Gradient Scrim for crisp letter contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#061426] via-[#081B33]/65 to-[#051122]/75" />
          <div className="absolute inset-0 bg-architectural-grid opacity-15 pointer-events-none" />
        </div>

        {/* Top Editorial Kicker Bar */}
        <div className="relative z-10 w-full pt-8 sm:pt-10 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4 text-xs">
            <div className="flex items-center gap-2 text-white/90">
              <span className="w-2 h-2 rounded-full bg-[#E5B552] animate-pulse"></span>
              <span className="font-mono uppercase tracking-widest text-[11px] text-[#E6C687]">
                SWAP = STEEL · WOOD · ALUMINUM · PVC
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-white/75 text-[11px] font-mono tracking-wider">
              <span>USA TESTED & EUROPEAN TESTED</span>
              <span>·</span>
              <span>WHOLESALE SUPPLY TO GLAZING CONTRACTORS</span>
            </div>
          </div>
        </div>

        {/* The 4 SWAP Columns Overlaid Across the Facade - Minimal and Clean */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12 my-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {swapDisciplines.map((item) => (
              <div
                key={item.letter}
                onClick={() => onNavigate('products', { category: item.category })}
                className="group relative cursor-pointer rounded-xl py-6 sm:py-8 px-4 transition-all duration-300 flex flex-col items-center text-center justify-center backdrop-blur-md bg-[#001328]/60 hover:bg-[#001833]/85 border border-white/20 hover:border-[#E5B552] shadow-xl hover:shadow-[0_0_25px_rgba(229,181,82,0.25)] hover:-translate-y-1"
              >
                {/* Letter (Smaller & Proportional) */}
                <div className="mb-2">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5C7] via-[#E5B552] to-[#B37E1C] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] select-none transition-transform duration-300 group-hover:scale-105 inline-block">
                    {item.letter}
                  </span>
                </div>

                {/* Material Name Only: Steel, Wood, Aluminum, PVC */}
                <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-white tracking-wide group-hover:text-[#E6C687] transition-colors drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner Glass Bar */}
        <div className="relative z-10 w-full bg-[#051122]/90 border-t border-white/10 py-3.5 px-4 sm:px-8 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <span className="text-[#E6C687] font-semibold">Glass-Only Option:</span>
              <span>Need glass without frames? We supply IGUs, laminated, tempered, and acoustic glass.</span>
            </div>
            <button
              onClick={() => onNavigate('products', { category: 'glass' })}
              className="text-[#E6C687] hover:text-white font-bold uppercase tracking-wider text-[11px] flex items-center gap-1"
            >
              <span>Explore Glass Supply</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          PART 2: WELCOME TO SWAP WINDOWS CORP
          Exact text and positioning from the old website, in our theme styling
         ========================================================= */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200 bg-architectural-grid relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          {/* Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2540]/5 border border-[#0A2540]/15 text-xs font-bold text-[#0A2540] uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5 text-[#C59A45]" />
            <span>High-End Architectural Fenestration</span>
          </div>

          {/* Header matching Company Overview: font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#0A2540] leading-tight */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0A2540] leading-tight tracking-tight">
            Welcome to SWAP Windows Corp.
          </h1>

          {/* Subtitle Quote from old site */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-800 font-semibold italic max-w-4xl mx-auto leading-relaxed">
            “Upgrade Every Project — Commercial & Residential — with Premium, Energy-Efficient Windows and Doors.”
          </p>

          {/* Full body copy from old site */}
          <p className="text-base sm:text-lg text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
            At <strong className="font-semibold text-[#0A2540]">SWAP Windows Corp</strong>, we believe windows and doors should do more than serve a function—they should add style, comfort, and long-term value to every space. As one of the <strong className="font-semibold text-[#0A2540]">leading window and door suppliers in the USA, Canada, and Europe</strong>, we deliver high-performance architectural solutions designed to meet the unique demands of architects, builders, and property owners.
          </p>

          {/* Feature Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-700 font-medium">
            <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#C59A45]" />
              <span>Commercial & Luxury Residential</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#C59A45]" />
              <span>USA & European Standards Tested</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#C59A45]" />
              <span>Full Schedule Takeoffs from Drawings</span>
            </div>
          </div>

          {/* High-Impact Actions with Logo-Derived Gradients */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-4 bg-swap-gold-btn text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 border border-[#D4A143]/50 group"
            >
              <span>Submit Architectural Takeoff</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('products')}
              className="w-full sm:w-auto px-8 py-4 bg-swap-blue-btn text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 border border-[#1A4B82]/50 group"
            >
              <span>Explore 4 Materials</span>
              <ArrowRight className="w-4 h-4 text-[#E6C687] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full sm:w-auto px-7 py-4 bg-transparent hover:bg-slate-100 text-[#0A2540] border border-slate-300 hover:border-[#0A2540] text-xs font-bold uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59A45]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
