"use client";

import { motion } from "framer-motion";
import { Sparkles, Flame, ShieldCheck, HeartPulse, RefreshCw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Flame, ShieldCheck, HeartPulse, RefreshCw];

export default function Benefits() {
  const { t } = useLanguage();

  return (
    <section
      id="benefits"
      className="relative z-10 bg-[#141312] text-[#FAF7F2] py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
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
      </div>
    </section>
  );
}
