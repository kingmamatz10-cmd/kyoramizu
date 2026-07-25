"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Send } from "lucide-react";
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
        ? "Bir Pletok is a traditional Betawi herbal elixir from Jakarta. Despite its historical name 'Bir', KYORAMIZU is 100% alcohol-free. It was created in colonial times as a festive non-alcoholic alternative to European beer."
        : "Bir Pletok adalah minuman herbal ramuan khas Betawi. Meskipun menggunakan kata 'Bir' dalam sejarahnya, KYORAMIZU 100% bebas alkohol dan halal.",
    },
    {
      q: language === "EN" ? "How should I store KYORAMIZU Bir Pletok?" : "Bagaimana cara menyimpan KYORAMIZU Bir Pletok?",
      a: language === "EN"
        ? "Keep unopened bottles in a cool, dark pantry away from direct sunlight for up to 12 months. Once opened, refrigerate and consume within 7 days for maximum botanical freshness."
        : "Botol tersegol dapat disimpan di suhu ruangan sejuk hingga 12 bulan. Setelah dibuka, simpan di dalam kulkas dan nikmati dalam 7 hari.",
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
      <div className="max-w-7xl mx-auto space-y-24">
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

        {/* Footer Top: Brand info & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-white/10 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-light tracking-[0.15em] text-gold-gradient uppercase">
                KYORAMIZU
              </h2>
              <p className="font-sans text-xs text-amber-500/80 tracking-[0.25em] uppercase">
                {t.footer.tagline}
              </p>
            </div>
            <p className="font-sans text-xs md:text-sm text-cream-soft/70 font-light leading-relaxed max-w-md">
              {t.nav.brandEssenceDesc}
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6">
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
                className="w-full px-5 py-3.5 rounded-full glass-panel border border-white/10 text-xs text-cream-DEFAULT placeholder:text-cream-soft/40 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-full bg-gold-gradient text-charcoal-dark text-xs font-semibold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] shrink-0 flex items-center space-x-1"
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

          <div className="flex items-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              Instagram
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              TikTok
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              Facebook
            </a>
            <a href="https://shopee.co.id" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              Shopee
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
