import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#141312] text-[#FAF7F2] flex flex-col items-center justify-center p-8 text-center select-none">
      <div className="space-y-6 max-w-md">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel text-amber-400 text-xs font-mono tracking-[0.25em] uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>404 — Page Not Found</span>
        </div>

        <h1 className="font-serif text-6xl md:text-8xl text-gold-gradient tracking-tight font-light">
          404
        </h1>

        <p className="font-sans text-sm text-cream-soft/70 font-light leading-relaxed">
          The sovereign herbal path you are looking for does not exist or has been relocated.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gold-gradient text-charcoal-dark text-xs font-semibold tracking-[0.15em] uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to KYORAMIZU</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
