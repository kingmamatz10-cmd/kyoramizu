"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Info, X, Leaf } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface IngredientExtra {
  image?: string;
  color: string;
  colSpan: string;
}

const ingredientExtras: Record<string, IngredientExtra> = {
  ginger: {
    image: "/images/kyoramizu_red_ginger_1784941616251.png",
    color: "from-herbal-DEFAULT/40 to-amber-900/30",
    colSpan: "lg:col-span-8",
  },
  sappan: {
    image: "/images/kyoramizu_sappan_wood_1784941627176.png",
    color: "from-herbal-dark/50 to-red-950/40",
    colSpan: "lg:col-span-4",
  },
  lemongrass: {
    color: "from-amber-700/30 to-earth-dark/40",
    colSpan: "lg:col-span-4",
  },
  cinnamon: {
    color: "from-earth-DEFAULT/40 to-amber-900/40",
    colSpan: "lg:col-span-4",
  },
  clove: {
    color: "from-herbal-dark/40 to-amber-950/50",
    colSpan: "lg:col-span-4",
  },
  cardamom: {
    color: "from-botanical-DEFAULT/40 to-amber-900/30",
    colSpan: "lg:col-span-6",
  },
  pandan: {
    color: "from-amber-900/40 to-charcoal-light/60",
    colSpan: "lg:col-span-6",
  },
};

export default function Ingredients() {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = t.ingredients.items.find((i) => i.id === selectedId);
  const selectedExtra = selectedId ? ingredientExtras[selectedId] : null;

  return (
    <section
      id="ingredients"
      className="relative z-10 bg-[#141312] text-[#FAF7F2] py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel text-amber-400 text-xs font-mono tracking-[0.25em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.ingredients.badge}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-cream-DEFAULT tracking-tight leading-tight">
              {t.ingredients.title}
            </h2>
            <p className="font-sans text-sm md:text-base text-cream-soft/70 font-light">
              {t.ingredients.subtitle}
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">
              0% Artificial • 100% Heritage
            </span>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {t.ingredients.items.map((item) => {
            const extra = ingredientExtras[item.id] || {
              color: "from-amber-900/30 to-charcoal-light/40",
              colSpan: "lg:col-span-4",
            };

            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                onClick={() => setSelectedId(item.id)}
                className={`group relative rounded-3xl p-8 cursor-pointer overflow-hidden border border-white/10 glass-card bg-gradient-to-br ${extra.color} ${extra.colSpan} min-h-[320px] flex flex-col justify-between hover:border-amber-500/40 transition-all duration-500`}
              >
                {/* Optional Background Image */}
                {extra.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    style={{ backgroundImage: `url(${extra.image})` }}
                  />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/50 to-transparent z-0" />

                {/* Card Top */}
                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-xs font-mono tracking-[0.25em] text-amber-400 uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {item.benefit}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream-soft group-hover:text-amber-400 group-hover:border-amber-400 transition-colors">
                    <Info className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Bottom */}
                <div className="relative z-10 space-y-2 mt-12">
                  <div className="flex items-baseline space-x-3">
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-cream-DEFAULT group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xs font-sans text-amber-400/80 italic">({item.localName})</span>
                  </div>
                  <p className="font-sans text-xs md:text-sm text-cream-soft/75 font-light line-clamp-2">
                    {item.desc}
                  </p>
                  <div className="pt-2 flex items-center space-x-2 text-[11px] font-mono text-amber-400/90 tracking-wider uppercase">
                    <span>Origin: {item.origin}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Detail View */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel-dark p-8 md:p-12 rounded-3xl max-w-2xl w-full border border-amber-500/30 space-y-6 relative gold-glow"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass-panel text-cream-soft hover:text-amber-400"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  {selectedItem.benefit}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-gold-gradient font-light">
                  {selectedItem.name}
                </h3>
                <p className="text-xs font-mono text-cream-soft/60">{selectedItem.localName}</p>
              </div>

              <p className="font-sans text-sm md:text-base text-cream-soft leading-relaxed font-light">
                {selectedItem.desc}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider">Active Botanical Compounds</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cream-soft/90">
                  {selectedItem.compounds.map((c) => (
                    <li key={c} className="flex items-center space-x-2">
                      <Leaf className="w-3.5 h-3.5 text-amber-400" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-amber-300">
                Harvest Origin: {selectedItem.origin}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
