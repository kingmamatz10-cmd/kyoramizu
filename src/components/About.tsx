"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <span className="relative inline-block mr-2 md:mr-3 my-1">
      <motion.span style={{ opacity, y }} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
};

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleWords = t.about.title.split(" ");
  const bodyWords = t.about.body.split(" ");

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative z-10 min-h-screen bg-[#141312] text-[#FAF7F2] py-32 px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden border-t border-amber-500/10"
    >
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-herbal-DEFAULT/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full space-y-16 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-mono tracking-[0.3em] uppercase backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.about.badge}</span>
        </div>

        {/* Headline character/word scroll reveal */}
        <div className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-gold-gradient leading-tight tracking-tight max-w-4xl mx-auto drop-shadow-lg">
          {titleWords.map((word, i) => {
            const start = i / titleWords.length;
            const end = start + 1 / titleWords.length;
            return (
              <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start * 0.4, end * 0.4]}>
                {word}
              </Word>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto" />

        {/* Body story scroll reveal */}
        <div className="font-sans text-base sm:text-xl md:text-2xl font-light text-cream-soft leading-relaxed max-w-3xl mx-auto">
          {bodyWords.map((word, i) => {
            const start = 0.3 + (i / bodyWords.length) * 0.5;
            const end = start + 0.05;
            return (
              <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </div>

        {/* Feature Pill Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 text-left">
          {t.about.pills.map((pill, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border-amber-500/20 space-y-2 backdrop-blur-md">
              <span className="font-mono text-xs text-amber-400">{pill.num}</span>
              <h4 className="font-serif text-lg text-cream-DEFAULT font-light">{pill.title}</h4>
              <p className="text-xs text-cream-soft/70 font-light leading-relaxed">
                {pill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
