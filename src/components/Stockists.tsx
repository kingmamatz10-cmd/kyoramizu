"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Store, Utensils, MapPin, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Stockists() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "retail" | "hospitality">("all");

  const retailItems = t.stockists.retailItems || [];
  const hospitalityItems = t.stockists.hospitalityItems || [];

  return (
    <section
      id="stockists"
      className="relative z-10 min-h-screen bg-[#141312] text-[#FAF7F2] py-32 px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden border-t border-amber-500/10"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-16 z-10">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-mono tracking-[0.3em] uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.stockists.badge}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-light text-gold-gradient tracking-tight leading-tight">
            {t.stockists.title}
          </h2>

          <p className="font-sans text-sm sm:text-lg text-cream-soft/80 font-light leading-relaxed">
            {t.stockists.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center items-center gap-3 flex-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
              activeTab === "all"
                ? "bg-gold-gradient text-charcoal-dark font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                : "glass-panel text-cream-soft/70 hover:text-amber-400 border border-white/10"
            }`}
          >
            All Stockists ({retailItems.length + hospitalityItems.length})
          </button>
          <button
            onClick={() => setActiveTab("retail")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center space-x-2 ${
              activeTab === "retail"
                ? "bg-gold-gradient text-charcoal-dark font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                : "glass-panel text-cream-soft/70 hover:text-amber-400 border border-white/10"
            }`}
          >
            <Store className="w-3.5 h-3.5" />
            <span>{t.stockists.retailCategory} ({retailItems.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("hospitality")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center space-x-2 ${
              activeTab === "hospitality"
                ? "bg-gold-gradient text-charcoal-dark font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                : "glass-panel text-cream-soft/70 hover:text-amber-400 border border-white/10"
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>{t.stockists.hospitalityCategory} ({hospitalityItems.length})</span>
          </button>
        </div>

        {/* Grids */}
        <div className="space-y-16">
          {/* Category 1: Toko Retail */}
          {(activeTab === "all" || activeTab === "retail") && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-2 border-b border-amber-500/20">
                <Store className="w-5 h-5 text-amber-400" />
                <h3 className="font-serif text-2xl text-cream-DEFAULT font-light tracking-wide">
                  {t.stockists.retailCategory}
                </h3>
                <span className="text-xs font-mono text-amber-500/60 font-normal">
                  ({retailItems.length} Locations)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {retailItems.map((item, idx) => (
                  <motion.div
                    key={`retail-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04, duration: 0.4 }}
                    className="glass-card p-5 rounded-2xl border-white/10 hover:border-amber-500/40 transition-all group flex items-start space-x-3"
                  >
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans text-sm text-cream-DEFAULT font-medium group-hover:text-amber-300 transition-colors">
                        {item}
                      </h4>
                      <p className="text-[11px] font-mono text-cream-soft/50 flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3 text-emerald-400/80 inline mr-1" />
                        <span>Ready in Store</span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Category 2: Resto, Kafe, Hotel & Korporat */}
          {(activeTab === "all" || activeTab === "hospitality") && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-2 border-b border-amber-500/20">
                <Utensils className="w-5 h-5 text-amber-400" />
                <h3 className="font-serif text-2xl text-cream-DEFAULT font-light tracking-wide">
                  {t.stockists.hospitalityCategory}
                </h3>
                <span className="text-xs font-mono text-amber-500/60 font-normal">
                  ({hospitalityItems.length} Partners)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {hospitalityItems.map((item, idx) => (
                  <motion.div
                    key={`hosp-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03, duration: 0.4 }}
                    className="glass-card p-5 rounded-2xl border-white/10 hover:border-amber-500/40 transition-all group flex items-start space-x-3"
                  >
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <Utensils className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans text-sm text-cream-DEFAULT font-medium group-hover:text-amber-300 transition-colors">
                        {item}
                      </h4>
                      <p className="text-[11px] font-mono text-cream-soft/50 flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3 text-emerald-400/80 inline mr-1" />
                        <span>Official Partner</span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
