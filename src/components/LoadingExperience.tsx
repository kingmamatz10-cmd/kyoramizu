"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface LoadingExperienceProps {
  onComplete?: (urls?: string[]) => void;
  totalFrames?: number;
  imageUrls?: string[];
}

export default function LoadingExperience({
  onComplete,
  totalFrames = 240,
  imageUrls,
}: LoadingExperienceProps) {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const hasStartedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    let isMounted = true;

    const maxTimeout = setTimeout(() => {
      if (!isMounted) return;
      setProgress(100);
      setTimeout(() => {
        if (!isMounted) return;
        setIsLoaded(true);
        if (onCompleteRef.current) onCompleteRef.current();
      }, 400);
    }, 3500);

    async function loadSequence() {
      let urls: string[] = imageUrls && imageUrls.length > 0 ? imageUrls : [];

      if (urls.length === 0) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 1200);
          const res = await fetch("/api/sequence", { signal: controller.signal });
          clearTimeout(timeoutId);

          if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data.images) && data.images.length > 0) {
              urls = data.images;
            }
          }
        } catch (err) {
          // Fallback on timeout
        }
      }

      if (urls.length === 0) {
        const count = totalFrames || 240;
        urls = Array.from(
          { length: count },
          (_, i) => `/sequence/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`
        );
      }

      const totalCount = urls.length;
      let loadedCount = 0;

      const updateProgress = () => {
        if (!isMounted) return;
        loadedCount++;
        const pct = Math.min(100, Math.round((loadedCount / totalCount) * 100));
        setProgress((prev) => Math.max(prev, pct));
      };

      const promises = urls.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            updateProgress();
            resolve();
          };
          img.onerror = () => {
            updateProgress();
            resolve();
          };
        });
      });

      const priorityCount = Math.min(30, totalCount);
      await Promise.all(promises.slice(0, priorityCount));
      Promise.all(promises);

      clearTimeout(maxTimeout);

      if (!isMounted) return;
      setProgress(100);

      setTimeout(() => {
        if (!isMounted) return;
        setIsLoaded(true);
        if (onCompleteRef.current) {
          onCompleteRef.current(urls);
        }
      }, 400);
    }

    loadSequence();

    return () => {
      isMounted = false;
      clearTimeout(maxTimeout);
    };
  }, [imageUrls, totalFrames]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#141312] p-8 md:p-16 text-[#FAF7F2] select-none"
        >
          <div className="w-full flex justify-between items-center text-xs tracking-[0.3em] uppercase text-amber-500/70 font-sans">
            <span>Indonesia Heritage</span>
            <span>Bir Pletok</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Animated Brand Crest */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex items-center justify-center w-24 h-24"
            >
              <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-pulse-slow" />
              <div className="absolute inset-2 rounded-full border border-amber-500/40 animate-spin-slow" />
              <span className="font-serif text-3xl font-bold tracking-wider text-gold-gradient">
                KY
              </span>
            </motion.div>

            {/* Title & Tagline */}
            <div className="text-center space-y-2">
              <h1 className="font-serif text-3xl md:text-5xl tracking-[0.2em] font-light text-gradient uppercase">
                {t.loading.title}
              </h1>
              <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-cream-soft/60 uppercase">
                {t.loading.subtitle}
              </p>
            </div>

            {/* Progress Bar & Percentage */}
            <div className="w-64 space-y-3">
              <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gold-gradient"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-amber-500/80">
                <span>LOADING EXPERIENCE</span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="text-[10px] tracking-[0.25em] text-cream-soft/40 uppercase">
            Designed for Immersion
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
