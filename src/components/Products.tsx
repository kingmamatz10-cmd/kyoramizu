"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, CheckCircle2, Flame, Snowflake, ShoppingBag, ArrowRight, MessageSquare } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useLanguage } from "@/context/LanguageContext";

export default function Products() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState("features");
  const [selectedVariant, setSelectedVariant] = useState(1);

  // 360 Parallax Tilt Math
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const tabs = [
    { id: "features", label: t.products.ingredientsTitle },
    { id: "serving", label: t.products.tasteProfile },
    { id: "nutrition", label: t.products.volume },
    { id: "packaging", label: t.products.shelfLife },
  ];

  const currentItem = t.products.items[selectedVariant - 1] || t.products.items[0];

  const mainButtonLabel =
    selectedVariant === 1
      ? t.products.orderNow
      : t.products.chatPricing || (language === "EN" ? "Chat For Pricing Info" : "Chat Untuk Info Harga");

  return (
    <section
      id="products"
      className="relative z-10 bg-[#141312] text-[#FAF7F2] py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel text-amber-400 text-xs font-mono tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.products.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-gold-gradient tracking-tight">
            {t.products.title}
          </h2>
          <p className="font-sans text-sm md:text-base text-cream-soft/75 font-light">
            {t.products.subtitle}
          </p>
        </div>

        {/* Product Interactive Main Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 360° Tilt Parallax Cafe Atmosphere Showcase */}
          <div className="lg:col-span-6 flex justify-center perspective-1000">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-md aspect-[3/4] rounded-3xl p-4 glass-panel border border-amber-500/30 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden group"
            >
              {/* Glow Accent behind image */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-amber-500/20 to-herbal-DEFAULT/30 blur-2xl pointer-events-none" />

              {/* Product Cafe Atmosphere Image */}
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                style={{ transform: "translateZ(30px)" }}
              >
                <motion.img
                  src="/images/kyoramizu_product_cafe_atmosphere.jpeg"
                  alt="KYORAMIZU Bir Pletok Cafe Atmosphere"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent opacity-40" />
              </div>

              {/* Interactive Hover Tag */}
              <div
                className="absolute bottom-6 px-4 py-2 rounded-full glass-card border border-amber-500/40 text-amber-300 text-xs font-mono tracking-widest uppercase flex items-center space-x-2 shadow-lg backdrop-blur-md"
                style={{ transform: "translateZ(50px)" }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>360° Interactive View</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Tabbed Product Specifications & Order Box */}
          <div className="lg:col-span-6 space-y-8">
            {/* Tabs Header */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-full glass-panel border border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gold-gradient text-charcoal-dark font-semibold shadow-md"
                      : "text-cream-soft/70 hover:text-cream-DEFAULT"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content Box */}
            <div className="glass-panel p-8 rounded-3xl border-amber-500/20 space-y-6 min-h-[280px]">
              {activeTab === "features" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl text-cream-DEFAULT font-light">
                        {currentItem.name}
                      </h3>
                      <p className="font-sans text-xs text-amber-300/80 font-mono tracking-wide">
                        {currentItem.subtitle}
                      </p>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                      {currentItem.tag}
                    </span>
                  </div>

                  {/* Price & Description Bar */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="font-mono text-sm sm:text-base text-amber-400 font-semibold flex items-center justify-between">
                      <span>{currentItem.price}</span>
                      {currentItem.volume ? (
                        <span className="text-xs font-normal text-cream-soft/60">{currentItem.volume}</span>
                      ) : null}
                    </div>
                    {currentItem.description ? (
                      <p className="text-xs font-sans text-cream-soft/70 font-light leading-relaxed pt-0.5">
                        {currentItem.description}
                      </p>
                    ) : null}
                  </div>

                  <ul className="space-y-3 font-sans text-xs md:text-sm text-cream-soft/80 font-light pt-1">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{currentItem.desc}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>100% alcohol-free traditional Betawi formulation.</span>
                    </li>
                  </ul>
                </motion.div>
              )}

              {activeTab === "serving" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <h3 className="font-serif text-2xl text-cream-DEFAULT font-light">{t.products.tasteProfile}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="flex items-center space-x-2 text-amber-400">
                        <Flame className="w-4 h-4" />
                        <span className="font-mono text-xs uppercase tracking-wider">Warm Serve</span>
                      </div>
                      <p className="text-xs text-cream-soft/75 font-light">
                        {currentItem.taste}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="flex items-center space-x-2 text-sky-400">
                        <Snowflake className="w-4 h-4" />
                        <span className="font-mono text-xs uppercase tracking-wider">Chilled On Ice</span>
                      </div>
                      <p className="text-xs text-cream-soft/75 font-light">
                        Crisp refreshing botanical cold serve over ice cubes.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "nutrition" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  <h3 className="font-serif text-2xl text-cream-DEFAULT font-light">{t.products.volume} & Info</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    {t.products.items.map((p) => (
                      <div key={p.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center items-center space-y-1">
                        <span className="block font-mono text-xs sm:text-sm font-bold text-amber-400">
                          {p.volume || p.price}
                        </span>
                        <span className="text-[10px] text-cream-soft/60 uppercase font-mono">{p.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "packaging" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  <h3 className="font-serif text-2xl text-cream-DEFAULT font-light">{t.products.shelfLife}</h3>
                  <p className="text-xs md:text-sm text-cream-soft/80 font-light leading-relaxed">
                    {currentItem.shelfLife} — Bottled in 100% recyclable heavy UV-blocking dark glass to protect taste & quality.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Variant Selector & Purchase Action */}
            <div className="space-y-4 pt-4">
              <div className="flex justify-between items-center text-xs font-mono text-amber-400 uppercase tracking-widest">
                <span>Collection Options</span>
                <span>Direct Order</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {t.products.items.map((prod, idx) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedVariant(idx + 1)}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between min-h-[90px] ${
                      selectedVariant === idx + 1
                        ? "border-amber-400 bg-amber-500/10 text-cream-DEFAULT shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                        : "border-white/10 bg-white/5 text-cream-soft/60 hover:border-white/30"
                    }`}
                  >
                    <div className="space-y-0.5">
                      <span className="block font-serif text-sm font-light leading-snug">{prod.name}</span>
                      {prod.volume ? (
                        <span className="block font-mono text-[10px] text-amber-500/70 font-semibold">{prod.volume}</span>
                      ) : null}
                    </div>
                    <span className="block font-mono text-xs text-amber-400 font-semibold mt-2 leading-tight">
                      {prod.price}
                    </span>
                  </button>
                ))}
              </div>

              <MagneticButton
                onClick={() => {
                  window.open(
                    `https://wa.me/6282218493527?text=${encodeURIComponent(
                      `Halo KYORAMIZU, saya ingin ${
                        selectedVariant === 1
                          ? "memesan"
                          : "bertanya info harga dan pemesanan untuk"
                      } ${currentItem.name}`
                    )}`,
                    "_blank"
                  );
                }}
                className="w-full py-4 rounded-full bg-gold-gradient text-charcoal-dark font-sans text-xs font-semibold tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                <span className="flex items-center space-x-2">
                  {selectedVariant === 1 ? (
                    <ShoppingBag className="w-4 h-4" />
                  ) : (
                    <MessageSquare className="w-4 h-4" />
                  )}
                  <span>{mainButtonLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
