"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, PackageCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Founder() {
  const { t } = useLanguage();

  return (
    <section
      id="founder"
      className="relative z-10 min-h-screen bg-[#141312] text-[#FAF7F2] py-32 px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden border-t border-amber-500/10"
    >
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-20 z-10">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-mono tracking-[0.3em] uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.founder.badge}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-light text-gold-gradient tracking-tight leading-tight">
            {t.founder.title}
          </h2>
        </div>

        {/* Main Founder Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Founder Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden glass-card p-3 border-amber-500/30 shadow-[0_0_50px_rgba(212,175,55,0.15)] group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/Bir_pletok_production_founder.jpeg"
                  alt="Diana - Founder Bir Pletok Kyoramizu"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent opacity-60" />
              </div>

              {/* Float Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border-white/20 backdrop-blur-xl space-y-1">
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                  <span className="font-serif text-xl text-cream-DEFAULT font-light">{t.founder.name}</span>
                </div>
                <p className="font-mono text-xs text-amber-400/90 tracking-wider uppercase">
                  {t.founder.role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="font-mono text-xs text-amber-400 tracking-[0.25em] uppercase">
                Est. 2017 • Handcrafted Legacy
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-cream-DEFAULT font-light leading-snug">
                "Bir Pletok Kyoramizu lahir dari tekad merawat kehangatan tradisi Betawi dalam setiap momen berharga."
              </h3>
            </div>

            <div className="glass-card p-8 rounded-3xl border-amber-500/20 space-y-4 backdrop-blur-md">
              <p className="font-sans text-base sm:text-lg text-cream-soft/90 font-light leading-relaxed">
                {t.founder.story}
              </p>

              <div className="pt-4 flex items-center space-x-3 text-xs font-mono text-amber-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Original Secret Recipe • 100% Natural Botanicals</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Accurate Packaging Evolution Timeline Section */}
        <div className="space-y-8 pt-12 border-t border-amber-500/10">
          <div className="text-center space-y-2">
            <span className="font-mono text-xs text-amber-400 tracking-[0.25em] uppercase">
              {t.founder.timelineTitle}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-cream-DEFAULT font-light">
              Perjalanan Transformasi Mutu & Kemasan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.founder.timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass-card p-6 rounded-2xl border-white/10 space-y-3 relative overflow-hidden group hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold">
                    {item.year}
                  </span>
                  <PackageCheck className="w-5 h-5 text-amber-400/70" />
                </div>
                <h4 className="font-serif text-xl text-cream-DEFAULT font-light">
                  {item.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-cream-soft/70 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
