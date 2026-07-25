"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Send, MapPin, Phone, Mail, Instagram, ShieldCheck, Award, FileCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const faqItems = [
    {
      q: language === "EN" ? "What is Bir Pletok and does KYORAMIZU contain alcohol?" : "Apakah Bir Pletok KYORAMIZU mengandung alkohol?",
      a: language === "EN"
        ? "Bir Pletok is a traditional Betawi herbal elixir from Jakarta. Despite its historical name 'Bir', KYORAMIZU is 100% alcohol-free and Halal. It was created in colonial times as a festive non-alcoholic alternative to European beer."
        : "Bir Pletok adalah minuman herbal ramuan khas Betawi. Meskipun menggunakan kata 'Bir' dalam sejarahnya, KYORAMIZU 100% bebas alkohol, terdaftar PIRT & KHI, serta Halal.",
    },
    {
      q: language === "EN" ? "How should I store KYORAMIZU Bir Pletok?" : "Bagaimana cara menyimpan KYORAMIZU Bir Pletok?",
      a: language === "EN"
        ? "Keep unopened bottles in a cool, dark pantry away from direct sunlight for up to 3 months. Once opened, refrigerate and consume within 7 days for maximum botanical freshness."
        : "Botol tersegel dapat disimpan di suhu ruangan sejuk hingga 3 bulan. Setelah dibuka, simpan di dalam kulkas dan nikmati dalam 7 hari.",
    },
    {
      q: language === "EN" ? "Can I drink KYORAMIZU warm or chilled?" : "Apakah KYORAMIZU bisa diminum hangat atau dingin?",
      a: language === "EN"
        ? "Both! Warm it gently to 65°C for comforting throat relief and digestive warmth, or pour over ice for an invigorating tropical afternoon refreshment."
        : "Sangat bisa! Hangatkan secara perlahan untuk efek relaksasi tenggorokan dan pencernaan, atau tuangkan ke atas es batu untuk kesegaran di sore hari.",
    },
  ];

  return (
    <footer id="contact" className="relative z-10 bg-[#0E0D0C] text-[#FAF7F2] border-t border-white/10 pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* FAQ Accordion Section */}
        <div id="faq" className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono text-amber-400 tracking-[0.25em] uppercase">
              {t.nav.faq} & Info
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-cream-DEFAULT">
              {language === "EN" ? "Frequently Asked Questions" : "Pertanyaan Yang Sering Diajukan"}
            </h3>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl border-white/10 overflow-hidden transition-colors hover:border-amber-500/30"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center space-x-4 font-serif text-lg text-cream-DEFAULT font-light"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-xs sm:text-sm font-sans text-cream-soft/80 font-light leading-relaxed border-t border-white/5 pt-4"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pt-12 border-t border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-light tracking-[0.15em] text-gold-gradient uppercase">
                KYORAMIZU
              </h2>
              <p className="font-sans text-xs text-amber-500/80 tracking-[0.25em] uppercase">
                {t.footer.tagline}
              </p>
            </div>
            <p className="font-sans text-xs text-cream-soft/70 font-light leading-relaxed max-w-sm">
              {t.nav.brandEssenceDesc}
            </p>

            {/* Official Legal Badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full glass-panel border border-amber-500/30 text-[11px] font-mono text-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.footer.halalCert}</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full glass-panel border border-amber-500/30 text-[11px] font-mono text-amber-300">
                <FileCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.footer.pirtCert}</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full glass-panel border border-amber-500/30 text-[11px] font-mono text-amber-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.footer.khiCert}</span>
              </span>
            </div>
          </div>

          {/* Contact Details & Address (REAL BUSINESS DATA) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono text-amber-400 uppercase tracking-[0.25em]">
              {t.footer.addressTitle} & {t.nav.contact}
            </h4>
            <ul className="space-y-3 font-sans text-xs text-cream-soft/80 font-light leading-relaxed">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href="https://wa.me/6282218493527"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  WhatsApp: +62-822-1849-3527
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href="https://instagram.com/birpletokkyoramizu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  Instagram: @birpletokkyoramizu
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href="mailto:birpletokkyoramizu@gmail.com"
                  className="hover:text-amber-300 transition-colors"
                >
                  birpletokkyoramizu@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono text-amber-400 uppercase tracking-[0.25em]">
              {language === "EN" ? "Newsletter & Updates" : "Berlangganan Kabar & Promo"}
            </h4>
            <p className="font-sans text-xs text-cream-soft/70 font-light">
              {language === "EN"
                ? "Subscribe to receive private harvest releases, seasonal culinary pairings, and exclusive wellness insights."
                : "Dapatkan informasi panen rempah terbatas, inspirasi racikan herbal, serta penawaran eksklusif."}
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder={language === "EN" ? "Enter your email address..." : "Masukkan alamat email Anda..."}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-full glass-panel border border-white/10 text-xs text-cream-DEFAULT placeholder:text-cream-soft/40 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-full bg-gold-gradient text-charcoal-dark text-xs font-semibold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] shrink-0 flex items-center space-x-1"
              >
                <span>{language === "EN" ? "Join" : "Kirim"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs font-mono text-amber-400">
                {language === "EN" ? "Thank you for subscribing to KYORAMIZU." : "Terima kasih telah berlangganan KYORAMIZU."}
              </p>
            )}
          </div>
        </div>

        {/* Big Watermark Typography */}
        <div className="w-full overflow-hidden text-center opacity-10 select-none py-6 pointer-events-none">
          <span className="font-serif text-[12vw] leading-none font-bold tracking-[0.1em] text-cream-DEFAULT uppercase">
            KYORAMIZU
          </span>
        </div>

        {/* Footer Bottom Links & Socials */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-xs text-cream-soft/60 font-sans tracking-widest">
          <div>
            © {new Date().getFullYear()} KYORAMIZU Official. {t.footer.rights}
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="https://instagram.com/birpletokkyoramizu" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              Instagram
            </a>
            <a href="https://wa.me/6282218493527" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              WhatsApp
            </a>
            <a href="mailto:birpletokkyoramizu@gmail.com" className="hover:text-amber-400 transition-colors">
              Email
            </a>
            <a href="https://shopee.co.id" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              Shopee
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
