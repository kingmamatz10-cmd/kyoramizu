"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ShoppingBag, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  { name: "Instagram (@birpletokkyoramizu)", href: "https://instagram.com/birpletokkyoramizu" },
  { name: "WhatsApp (+62-822-1849-3527)", href: "https://wa.me/6282218493527" },
  { name: "Email (birpletokkyoramizu@gmail.com)", href: "mailto:birpletokkyoramizu@gmail.com" },
  { name: "Shopee Store", href: "https://shopee.co.id" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const menuItems = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.founder, href: "#founder" },
    { label: t.nav.ingredients, href: "#ingredients" },
    { label: t.nav.products, href: "#products" },
    { label: t.nav.benefits, href: "#benefits" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.stockists, href: "#stockists" },
    { label: t.nav.testimonials, href: "#testimonials" },
    { label: t.nav.contact, href: "#cta" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "py-4 glass-panel bg-charcoal-dark/80 backdrop-blur-xl border-b border-amber-500/10" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center space-x-3 group text-left"
          >
            <div className="w-8 h-8 rounded-full border border-amber-500/40 flex items-center justify-center font-serif text-sm text-gold-gradient group-hover:border-amber-400 transition-colors">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.2em] font-light text-cream-DEFAULT uppercase group-hover:text-amber-400 transition-colors">
                KYORAMIZU
              </span>
              <span className="text-[9px] font-sans tracking-[0.25em] text-amber-500/80 uppercase -mt-1">
                Bir Pletok
              </span>
            </div>
          </a>

          {/* Right Action Menu */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Language Switch Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 text-xs font-mono tracking-widest text-cream-soft/90 hover:text-amber-400 transition-all py-1.5 px-3 rounded-full border border-amber-500/30 glass-panel bg-amber-500/10 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
              title="Switch Language / Ubah Bahasa"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400 animate-pulse-slow" />
              <span className="font-semibold">{language === "EN" ? "EN | ID" : "ID | EN"}</span>
            </button>

            {/* Direct Order Button */}
            <MagneticButton
              onClick={() => handleNavClick("#cta")}
              className="hidden md:flex px-5 py-2 rounded-full bg-gold-gradient text-charcoal-dark text-xs font-semibold tracking-[0.15em] uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              <span className="flex items-center space-x-1.5">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{t.nav.order}</span>
              </span>
            </MagneticButton>

            {/* Toggle Fullscreen Menu */}
            <MagneticButton
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-full glass-panel border border-amber-500/30 text-cream-DEFAULT hover:border-amber-400"
            >
              {isOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5 text-amber-400" />}
            </MagneticButton>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#141312]/98 backdrop-blur-2xl flex flex-col justify-between p-8 md:p-16 overflow-y-auto select-none"
          >
            {/* Overlay Top Bar */}
            <div className="flex justify-between items-center max-w-7xl mx-auto w-full pt-4">
              <span className="text-xs font-mono tracking-[0.3em] text-amber-500/80 uppercase">
                {t.nav.menuNav}
              </span>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1.5 text-xs font-mono tracking-widest text-amber-400 py-1.5 px-3 rounded-full border border-amber-500/40 bg-amber-500/10"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="font-semibold">{language === "EN" ? "EN | ID" : "ID | EN"}</span>
              </button>
            </div>

            {/* Menu Links Grid */}
            <div className="max-w-7xl mx-auto w-full py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Big Navigation Titles */}
              <div className="lg:col-span-8 space-y-2">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 + idx * 0.03, duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="group flex items-center space-x-4 text-left"
                    >
                      <span className="font-mono text-xs text-amber-500/40 group-hover:text-amber-400 transition-colors">
                        0{idx + 1}
                      </span>
                      <span className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-cream-DEFAULT group-hover:text-gold-gradient group-hover:translate-x-4 transition-all duration-300">
                        {item.label}
                      </span>
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Right Column: Socials & Brand Details */}
              <div className="lg:col-span-4 space-y-8 glass-panel p-8 rounded-3xl border-amber-500/20">
                <div>
                  <h4 className="text-xs font-mono tracking-[0.25em] text-amber-400 uppercase mb-4">
                    {t.nav.brandEssenceTitle}
                  </h4>
                  <p className="font-sans text-xs text-cream-soft/70 leading-relaxed font-light">
                    {t.nav.brandEssenceDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono tracking-[0.25em] text-amber-400 uppercase mb-4">
                    {t.nav.connectWithUs}
                  </h4>
                  <ul className="space-y-3">
                    {socialLinks.map((social) => (
                      <li key={social.name}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between text-xs sm:text-sm text-cream-soft hover:text-amber-400 transition-colors group"
                        >
                          <span>{social.name}</span>
                          <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Notice */}
            <div className="max-w-7xl mx-auto w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between text-xs text-cream-soft/50 font-sans tracking-widest">
              <span>© {new Date().getFullYear()} KYORAMIZU. {t.footer.rights}</span>
              <span>{t.nav.tagline}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
