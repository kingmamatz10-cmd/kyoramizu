"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Maximize2, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface GalleryImage {
  id: string;
  image: string;
  aspect: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    image: "/images/kyoramizu_gallery_ekstraksi_crimson.jpeg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "g2",
    image: "/images/kyoramizu_gallery_pengemasan_artisanal.jpeg",
    aspect: "aspect-square",
  },
  {
    id: "g3",
    image: "/images/kyoramizu_gallery_panen_dataran_tinggi.jpeg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "g4",
    image: "/images/kyoramizu_gallery_sajikan_tradisional.jpeg",
    aspect: "aspect-square",
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="relative z-10 bg-[#141312] text-[#FAF7F2] py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel text-amber-400 text-xs font-mono tracking-[0.25em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.gallery.badge}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-cream-DEFAULT tracking-tight">
              {t.gallery.title}
            </h2>
            <p className="font-sans text-sm md:text-base text-cream-soft/75 font-light">
              {t.gallery.subtitle}
            </p>
          </div>

          <span className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase hidden md:block">
            Visual Storytelling
          </span>
        </div>

        {/* Masonry / Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.gallery.captions.map((cap, idx) => {
            const imgData = galleryImages[idx % galleryImages.length];

            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                onClick={() => setSelectedIdx(idx)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 ${imgData.aspect} bg-charcoal-light flex flex-col justify-end p-6 hover:border-amber-500/40 transition-all duration-500`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  style={{ backgroundImage: `url(${imgData.image})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/40 to-transparent z-0" />

                <div className="relative z-10 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg text-cream-DEFAULT font-light group-hover:text-amber-300 transition-colors">
                      {cap.title}
                    </h4>
                    <Maximize2 className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="font-sans text-xs text-cream-soft/70 font-light">{cap.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-6"
          >
            <div className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden glass-panel border border-amber-500/30 p-6 flex flex-col items-center">
              <button
                onClick={() => setSelectedIdx(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass-panel text-cream-soft hover:text-amber-400 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={galleryImages[selectedIdx % galleryImages.length].image}
                alt={t.gallery.captions[selectedIdx].title}
                className="w-full h-auto max-h-[60vh] object-contain rounded-2xl"
              />

              <div className="text-center space-y-1 pt-4">
                <h3 className="font-serif text-2xl text-gold-gradient font-light">
                  {t.gallery.captions[selectedIdx].title}
                </h3>
                <p className="text-xs text-cream-soft/80 font-light max-w-md mx-auto">
                  {t.gallery.captions[selectedIdx].desc}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
