"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, CheckCircle2, Flame, Snowflake, ShoppingBag, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useLanguage } from "@/context/LanguageContext";

export default function Products() {
  const { t } = useLanguage();
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
          {/* Left Column: 360° Tilt Parallax Bottle Showcase */}
          <div className="lg:col-span-6 flex justify-center perspective-1000">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-md aspect-[3/4] rounded-3xl p-8 glass-panel border border-amber-500/30 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            >
              {/* Glow Accent behind bottle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-amber-500/20 to-herbal-DEFAULT/30 blur-2xl pointer-events-none" />

              {/* Bottle Image */}
              <motion.img
                src="/images/kyoramizu_product_bottle_1784941662207.png"
                alt="KYORAMIZU Bir Pletok Bottle"
                className="w-full h-auto max-h-[380px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] pointer-events-none"
                style={{ transform: "translateZ(50px)" }}
              />

              {/* Interactive Hover Tag */}
              <div
                className="absolute bottom-6 px-4 py-2 rounded-full glass-card border border-amber-500/40 text-amber-300 text-xs font-mono tracking-widest uppercase flex items-center space-x-2"
                style={{ transform: "translateZ(40px)" }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>360° Interactive Bottle</span>
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
            <div className="glass-panel p-8 rounded-3xl border-amber-500/20 space-y-6 min-h-[260px]">
              {activeTab === "features" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  <h3 className="font-serif text-2xl text-cream-DEFAULT font-light">
                    {t.products.items[0].name}
                  </h3>
                  <ul className="space-y-3 font-sans text-xs md:text-sm text-cream-soft/80 font-light">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{t.products.items[0].desc}</span>
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
                        {t.products.items[0].taste}
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
                  <h3 className="font-serif text-2xl text-cream-DEFAULT font-light">{t.products.volume}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                    {t.products.items.map((p) => (
                      <div key={p.id} className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <span className="block font-mono text-sm font-bold text-amber-400">{p.volume}</span>
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
                    {t.products.items[0].shelfLife} — Bottled in 100% recyclable heavy UV-blocking amber glass.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Variant Selector & Purchase Action */}
            <div className="space-y-4 pt-4">
              <div className="flex justify-between items-center text-xs font-mono text-amber-400 uppercase tracking-widest">
                <span>Collection Options</span>
                <span>Express Delivery</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {t.products.items.map((prod, idx) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedVariant(idx + 1)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      selectedVariant === idx + 1
                        ? "border-amber-400 bg-amber-500/10 text-cream-DEFAULT"
                        : "border-white/10 bg-white/5 text-cream-soft/60 hover:border-white/30"
                    }`}
                  >
                    <span className="block font-serif text-sm font-light truncate">{prod.name}</span>
                    <span className="block font-mono text-[10px] opacity-70">{prod.volume}</span>
                    <span className="block font-mono text-xs text-amber-400 font-semibold mt-1">{prod.price}</span>
                  </button>
                ))}
              </div>

              <MagneticButton
                onClick={() => {
                  const cta = document.getElementById("cta");
                  cta?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-4 rounded-full bg-gold-gradient text-charcoal-dark font-sans text-xs font-semibold tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                <span className="flex items-center space-x-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t.products.orderNow}</span>
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
