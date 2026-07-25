"use client";

import { motion } from "framer-motion";
import { Sparkles, Eye, Target, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface WordProps {
  children: string;
  delay?: number;
}

const Word = ({ children, delay = 0 }: WordProps) => {
  return (
    <span className="relative inline-block mr-2 md:mr-3 my-1">
      <motion.span
        initial={{ opacity: 0.15, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.4, ease: "easeOut" }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default function About() {
  const { t } = useLanguage();

  const titleWords = t.about.title.split(" ");
  const bodyWords = t.about.body.split(" ");

  return (
    <section
      id="about"
      className="relative z-10 min-h-screen bg-[#141312] text-[#FAF7F2] py-32 px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden border-t border-amber-500/10"
    >
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-herbal-DEFAULT/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full space-y-16 text-center z-10">
        {/* Badge & Official Tagline */}
        <div className="flex flex-col items-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-mono tracking-[0.3em] uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <span className="font-serif text-lg md:text-xl italic text-amber-300/90 tracking-wide">
            "{t.about.tagline}"
          </span>
        </div>

        {/* Headline character/word reveal once in view */}
        <div className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-gold-gradient leading-tight tracking-tight max-w-4xl mx-auto drop-shadow-lg">
          {titleWords.map((word, i) => (
            <Word key={`${word}-${i}`} delay={i * 0.04}>
              {word}
            </Word>
          ))}
        </div>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto" />

        {/* Body story reveal once in view */}
        <div className="font-sans text-base sm:text-xl md:text-2xl font-light text-cream-soft leading-relaxed max-w-3xl mx-auto">
          {bodyWords.map((word, i) => (
            <Word key={`${word}-${i}`} delay={0.15 + i * 0.015}>
              {word}
            </Word>
          ))}
        </div>

        {/* Feature Pill Highlights (4 Pillars, including 2017 Founding History) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-left">
          {t.about.pills.map((pill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
              className="glass-card p-6 rounded-2xl border-amber-500/20 space-y-2 backdrop-blur-md hover:border-amber-400/40 transition-colors"
            >
              <span className="font-mono text-xs text-amber-400">{pill.num}</span>
              <h4 className="font-serif text-lg text-cream-DEFAULT font-light">{pill.title}</h4>
              <p className="text-xs text-cream-soft/70 font-light leading-relaxed">
                {pill.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 text-left">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="glass-card p-8 rounded-3xl border-amber-500/30 space-y-4 backdrop-blur-md relative overflow-hidden group hover:border-amber-400/50 transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-cream-DEFAULT font-light tracking-wide">
              {t.about.vision.title}
            </h3>
            <p className="font-sans text-sm text-cream-soft/80 font-light leading-relaxed">
              {t.about.vision.desc}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass-card p-8 rounded-3xl border-amber-500/30 space-y-4 backdrop-blur-md relative overflow-hidden group hover:border-amber-400/50 transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-cream-DEFAULT font-light tracking-wide">
              {t.about.mission.title}
            </h3>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-cream-soft/80 font-light">
              {t.about.mission.items.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
