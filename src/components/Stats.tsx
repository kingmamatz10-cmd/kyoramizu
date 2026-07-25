"use client";

import { motion } from "framer-motion";
import { Award, Users, Leaf, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const statIcons = [Leaf, Users, Shield, Award];

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 bg-[#141312] text-[#FAF7F2] py-24 px-6 md:px-12 border-t border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="font-mono text-xs text-amber-400 tracking-[0.3em] uppercase">
            {t.stats.badge}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-cream-DEFAULT">
            {t.stats.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.items.map((stat, idx) => {
            const IconComponent = statIcons[idx % statIcons.length];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="glass-card p-8 rounded-3xl border-amber-500/20 space-y-4 text-center hover:border-amber-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="font-serif text-4xl sm:text-5xl font-light text-gold-gradient tracking-tight">
                  {stat.value}
                </div>

                <div className="space-y-1">
                  <h4 className="font-sans text-sm text-cream-DEFAULT font-medium">{stat.label}</h4>
                  <p className="font-sans text-xs text-cream-soft/60 font-light">{stat.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
