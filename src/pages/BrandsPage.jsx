import React from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { BRANDS, COMPANY_INFO } from '../data/companyData.js';

export default function BrandsPage({ onNavigate, onOpenQuote }) {
  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Editorial Header */}
      <section className="pt-16 pb-16 md:pt-20 md:pb-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
              Global Manufacturing Network
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-[#0A2540] tracking-tight">
              Brands We Supply — Plus Others.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              SWAP Windows Corp. distributes leading European profile systems and premier architectural glass manufacturers. We coordinate direct fabrication, customs, and job-site delivery.
            </p>
          </div>

          {/* Reynaers SL38 Spotlight Callout with SWAP Logo Gradient */}
          <div className="mt-10 bg-gradient-to-r from-[#00142E] via-[#002552] to-[#124480] text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-[#17487F]/60 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#205FA6]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-1 max-w-xl relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E6C687]">
                Featured Pricing Partnership
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                Special Discount Pricing on Reynaers SL38
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Ask about our special trade discount pricing on Reynaers SL38 slim-profile aluminum systems for your upcoming projects.
              </p>
            </div>
            <button
              onClick={() => onOpenQuote('Reynaers SL38 Pricing Request')}
              className="px-6 py-3 bg-swap-gold-btn text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap shadow-md border border-[#D4A143]/40 relative z-10"
            >
              Inquire on SL38 Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Profile Systems Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
              Fenestration Profiles
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0A2540]">
              Architectural Profile Brands
            </h2>
            <p className="text-sm text-slate-600 font-light">
              Supplying premier Swiss steel, Belgian aluminum, and European multi-chamber systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRANDS.profiles.map((brand) => (
              <div
                key={brand.name}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-[#0A2540]">{brand.country}</span>
                    {brand.featured && (
                      <span className="text-[#C59A45] font-bold text-[10px] uppercase">
                        Key Partner
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-[#0A2540]">
                    {brand.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {brand.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenQuote(`${brand.name} Profile System`)}
                    className="text-xs font-bold uppercase tracking-wider text-[#0A2540] hover:text-[#C59A45] transition-colors flex items-center gap-1.5"
                  >
                    <span>Request Brand Pricing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glass Manufacturers Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#C59A45] font-bold">
              Architectural Glazing
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0A2540]">
              Glass Companies
            </h2>
            <p className="text-sm text-slate-600 font-light">
              High-performance solar control, low-iron clarity, and acoustic laminated glass.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BRANDS.glass.map((g) => (
              <div
                key={g.name}
                className="bg-[#FAFAFA] p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4"
              >
                <div className="text-xs uppercase font-bold text-[#C59A45] tracking-wider">
                  {g.category}
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#0A2540]">
                  {g.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {g.description}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => onOpenQuote(`${g.name} Glass Supply`)}
                    className="text-xs font-bold uppercase tracking-wider text-[#0A2540] hover:text-[#C59A45] transition-colors"
                  >
                    Inquire on {g.name} Glass →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-slate-500 italic">
            {BRANDS.note}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0A2540]">
            Looking for a specific profile or glass system?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Our international procurement team can source, engineer, and import specialty architectural profiles and oversized glass packages for your exact project requirements.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-3.5 bg-swap-blue-btn text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md border border-[#1A4B82]/50"
            >
              Discuss System Specifications
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
