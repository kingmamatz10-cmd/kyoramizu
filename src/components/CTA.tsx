"use client";

import { motion } from "framer-motion";
import { Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useLanguage } from "@/context/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section
      id="cta"
      className="relative z-10 bg-[#141312] text-[#FAF7F2] py-36 px-6 md:px-12 overflow-hidden border-t border-amber-500/20"
    >
      {/* Animated Warm Sunlight Radial Gradient Background */}
      <div className="absolute inset-0 bg-sunlight-gradient pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-amber-500/15 via-herbal-DEFAULT/20 to-transparent rounded-full blur-[160px] animate-pulse-slow pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border border-amber-500/40 text-amber-400 text-xs font-mono tracking-[0.3em] uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.cta.badge}</span>
        </div>

        <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-gold-gradient tracking-tight leading-tight">
          {t.cta.title}
        </h2>

        <p className="font-sans text-base sm:text-xl text-cream-soft/80 font-light max-w-2xl mx-auto leading-relaxed">
          {t.cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <MagneticButton
            onClick={() => {
              window.open("https://wa.me/6282218493527?text=Halo%20KYORAMIZU,%20saya%20ingin%20memesan%20Bir%20Pletok", "_blank");
            }}
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-gold-gradient text-charcoal-dark font-sans text-xs font-bold tracking-[0.2em] uppercase shadow-[0_10px_40px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_60px_rgba(212,175,55,0.7)] transition-shadow"
          >
            <span className="flex items-center space-x-3">
              <ShoppingBag className="w-4 h-4" />
              <span>{t.cta.orderWhatsapp}</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </MagneticButton>

          <MagneticButton
            onClick={() => {
              window.open("https://shopee.co.id", "_blank");
            }}
            className="w-full sm:w-auto px-10 py-5 rounded-full glass-panel-dark text-cream-DEFAULT border border-amber-500/40 font-sans text-xs font-medium tracking-[0.2em] uppercase hover:border-amber-300"
          >
            <span>{t.cta.orderShopee}</span>
          </MagneticButton>
        </div>

        <div className="pt-8 flex flex-wrap justify-center items-center gap-6 text-xs font-mono text-amber-500/70 tracking-widest uppercase">
          <span>✓ {t.cta.fastDelivery}</span>
          <span>•</span>
          <span>✓ {t.cta.guarantee}</span>
        </div>
      </div>
    </section>
  );
}
