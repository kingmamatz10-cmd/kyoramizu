"use client";

import { motion } from "framer-motion";
import { Sparkles, Flame, ShieldCheck, HeartPulse, RefreshCw, CheckCircle2, XCircle, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Flame, ShieldCheck, HeartPulse, RefreshCw];

export default function Benefits() {
  const { t } = useLanguage();

  const comparisonRows = t.benefits.comparisonRows || [];

  return (
    <section
      id="benefits"
      className="relative z-10 bg-[#141312] text-[#FAF7F2] py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section 1: Health & Wellness Infographic */}
        <div className="space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel text-amber-400 text-xs font-mono tracking-[0.25em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.benefits.badge}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-cream-DEFAULT tracking-tight">
              {t.benefits.title}
            </h2>
            <p className="font-sans text-sm md:text-base text-cream-soft/75 font-light">
              {t.benefits.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.benefits.cards.map((item, idx) => {
              const IconComponent = icons[idx % icons.length];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="glass-card p-8 rounded-3xl border-amber-500/20 space-y-6 flex flex-col justify-between hover:border-amber-400 transition-colors group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-light text-cream-DEFAULT">{item.title}</h3>
                    <p className="font-sans text-xs text-cream-soft/70 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Why We're Different Comparison Table */}
        <div className="space-y-12 pt-12 border-t border-amber-500/15">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel text-amber-400 text-xs font-mono tracking-[0.25em] uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>{t.benefits.comparisonBadge}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-gold-gradient tracking-tight">
              {t.benefits.comparisonTitle}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-cream-soft/75 font-light">
              {t.benefits.comparisonSubtitle}
            </p>
          </div>

          {/* Desktop & Tablet Table Layout */}
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl border-amber-500/30 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-12 bg-white/5 border-b border-amber-500/20 text-xs font-mono uppercase tracking-wider text-cream-soft font-semibold py-4 px-6">
              <div className="col-span-4 sm:col-span-4 flex items-center">
                <span>{t.benefits.aspectHeader}</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center text-amber-300 font-serif font-normal text-sm sm:text-base flex items-center justify-center space-x-1.5 bg-amber-500/10 py-1.5 rounded-xl border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.benefits.kyoramizuHeader}</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center flex items-center justify-center text-cream-soft/50">
                <span>{t.benefits.othersHeader}</span>
              </div>
            </div>

            <div className="divide-y divide-white/5">
              {comparisonRows.map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="grid grid-cols-12 items-center px-6 py-5 hover:bg-white/[0.02] transition-colors"
                >
                  {/* Aspect Title */}
                  <div className="col-span-4 font-serif text-sm sm:text-base text-cream-DEFAULT font-light">
                    {row.aspect}
                  </div>

                  {/* Kyoramizu Advantage (Highlighted) */}
                  <div className="col-span-4 px-3 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center font-sans text-xs sm:text-sm font-medium text-amber-300 flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{row.kyoramizu}</span>
                  </div>

                  {/* Other Brands (Dimmed) */}
                  <div className="col-span-4 text-center font-sans text-xs sm:text-sm font-light text-cream-soft/40 flex items-center justify-center space-x-2">
                    <XCircle className="w-4 h-4 text-rose-500/40 shrink-0" />
                    <span>{row.others}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
