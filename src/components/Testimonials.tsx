"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const reviews = t.testimonials.reviews;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      id="testimonials"
      className="relative z-10 bg-[#141312] text-[#FAF7F2] py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Glow Orbs */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16 text-center">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel text-amber-400 text-xs font-mono tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.testimonials.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-gold-gradient tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="font-sans text-sm md:text-base text-cream-soft/75 font-light">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonial Card Carousel */}
        <div className="relative glass-panel-dark p-8 sm:p-14 md:p-20 rounded-3xl border border-amber-500/30 gold-glow min-h-[380px] flex flex-col justify-between">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-amber-500/20" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 my-auto"
            >
              {/* Rating Stars */}
              <div className="flex justify-center space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-cream-DEFAULT leading-relaxed italic max-w-3xl mx-auto">
                &ldquo;{reviews[current].comment}&rdquo;
              </p>

              {/* Author Details */}
              <div className="space-y-1">
                <h4 className="font-sans text-base text-gold-gradient font-medium">
                  {reviews[current].name}
                </h4>
                <p className="font-sans text-xs text-cream-soft/60 font-light">
                  {reviews[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 border-t border-white/10 z-10">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full glass-panel border border-white/10 text-cream-soft hover:text-amber-400 hover:border-amber-400 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    current === idx ? "w-8 bg-amber-400" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full glass-panel border border-white/10 text-cream-soft hover:text-amber-400 hover:border-amber-400 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
