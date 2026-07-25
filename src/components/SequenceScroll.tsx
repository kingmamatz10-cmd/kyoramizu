"use client";

import {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// ─── Types ────────────────────────────────────────────────────────────────────
interface SequenceScrollProps {
  imageUrls?: string[];
}

// ─── Canvas draw: object-cover + vignette ─────────────────────────────────────
function drawFrame(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  img: HTMLImageElement
) {
  const dpr = window.devicePixelRatio || 1;
  const W   = window.innerWidth;
  const H   = window.innerHeight;

  // Resize backing store only when needed
  const tw = Math.round(W * dpr);
  const th = Math.round(H * dpr);
  if (canvas.width !== tw || canvas.height !== th) {
    canvas.width         = tw;
    canvas.height        = th;
    canvas.style.width   = `${W}px`;
    canvas.style.height  = `${H}px`;
  }

  // Reset transform every frame — prevents scale accumulation
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, W, H);

  const imgR = img.naturalWidth / img.naturalHeight;
  const canR = W / H;
  let sw: number, sh: number, sx: number, sy: number;
  if (canR > imgR) {
    sw = W;    sh = W / imgR; sx = 0;          sy = (H - sh) / 2;
  } else {
    sh = H;    sw = H * imgR; sx = (W - sw) / 2; sy = 0;
  }
  ctx.drawImage(img, sx, sy, sw, sh);

  // Edge-darkening vignette
  const vg = ctx.createRadialGradient(
    W / 2, H / 2, Math.min(W, H) * 0.12,
    W / 2, H / 2, Math.max(W, H) * 0.88
  );
  vg.addColorStop(0,    "rgba(0,0,0,0)");
  vg.addColorStop(0.55, "rgba(10,9,8,0.12)");
  vg.addColorStop(1,    "rgba(5,4,3,0.82)");
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, W, H);
}

// ─── Text overlay timing ──────────────────────────────────────────────────────
const STAGES = [
  { id: 0, in: 0,    show: 0.04, out: 0.15, gone: 0.22 },
  { id: 1, in: 0.25, show: 0.30, out: 0.45, gone: 0.52 },
  { id: 2, in: 0.55, show: 0.60, out: 0.75, gone: 0.82 },
  { id: 3, in: 0.85, show: 0.89, out: 1.00, gone: 1.00 },
];

function useStageMotion(progress: ReturnType<typeof useScroll>["scrollYProgress"], stage: typeof STAGES[0]) {
  return {
    opacity: useTransform(progress, [stage.in, stage.show, stage.out, stage.gone], [0, 1, 1, 0]),
    y:       useTransform(progress, [stage.in, stage.show, stage.out, stage.gone], [28, 0, 0, -24]),
  };
}

export default function SequenceScroll({ imageUrls }: SequenceScrollProps) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);

  const [images,      setImages]      = useState<HTMLImageElement[]>([]);
  const [frameIndex,  setFrameIndex]  = useState(0);
  const [heroPast,    setHeroPast]    = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const total = imageUrls?.length ?? 0;

  // Preload images into memory
  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) return;
    let cancel = false;
    const loaded: HTMLImageElement[] = [];
    let count = 0;

    imageUrls.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (cancel) return;
        loaded[idx] = img;
        count++;
        if (count === imageUrls.length) {
          setImages([...loaded]);
        }
      };
    });

    return () => { cancel = true; };
  }, [imageUrls]);

  // Handle Canvas Drawing per frame
  const renderFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas || !images[index]) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      drawFrame(ctx, canvas, images[index]);
    },
    [images]
  );

  // Subscribe scroll progress -> frame index
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (latest) => {
      if (total === 0) return;
      const idx = Math.min(total - 1, Math.floor(latest * total));
      setFrameIndex(idx);
      setHeroPast(latest >= 0.98);
    });
    return () => unsub();
  }, [scrollYProgress, total]);

  // Redraw when images load or frameIndex changes
  useEffect(() => {
    if (images.length > 0) {
      renderFrame(frameIndex);
    }
  }, [images, frameIndex, renderFrame]);

  // Stage motion hooks
  const s0 = useStageMotion(scrollYProgress, STAGES[0]);
  const s1 = useStageMotion(scrollYProgress, STAGES[1]);
  const s2 = useStageMotion(scrollYProgress, STAGES[2]);
  const s3 = useStageMotion(scrollYProgress, STAGES[3]);

  const barH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full text-[#FAF7F2]"
      style={{ height: "400vh" }}
    >
      {/* ── Fixed full-screen canvas layer (z-0) ─────────────────────── */}
      <div
        className="fixed inset-0 w-full h-full"
        style={{
          zIndex: 0,
          visibility: heroPast ? "hidden" : "visible",
          pointerEvents: heroPast ? "none" : "auto",
        }}
      >
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{ display: "block", width: "100%", height: "100%" }}
        />

        {/* Ambient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-amber-500/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-herbal-DEFAULT/10 rounded-full blur-[120px]" />
        </div>

        {/* Side progress indicator */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-3" style={{ zIndex: 30 }}>
          <span className="font-mono text-[10px] text-amber-400/60 tracking-[0.3em] [writing-mode:vertical-rl]">
            {String(frameIndex + 1).padStart(3, "0")} / {String(total || 1).padStart(3, "0")}
          </span>
          <div className="w-px h-28 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="w-full bg-gold-gradient" style={{ height: barH }} />
          </div>
        </div>

        {/* ── Stage 0 — 0%: Hero title ───────────────────────────────── */}
        <motion.div
          style={{ opacity: s0.opacity, y: s0.y }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
          aria-hidden="true"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[10px] sm:text-xs tracking-[0.35em] text-amber-400 uppercase mb-5"
          >
            {t.hero.badge}
          </motion.p>

          <h1 className="font-serif text-[clamp(3rem,12vw,9rem)] tracking-[0.12em] font-light text-gold-gradient uppercase leading-none drop-shadow-2xl">
            {t.hero.title}
          </h1>

          <p className="mt-5 font-sans text-xs sm:text-sm md:text-base font-light tracking-[0.28em] text-cream-soft/80 uppercase max-w-md">
            {t.hero.subtitle}
          </p>

          <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-60">
            <span className="text-[9px] tracking-[0.35em] uppercase text-cream-soft/50 font-mono">
              {t.hero.scrollPrompt}
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-amber-400/60 to-transparent animate-pulse" />
          </div>
        </motion.div>

        {/* ── Stage 1 — 30%: Left glass card ──────────────────────────── */}
        <motion.div
          style={{ opacity: s1.opacity, y: s1.y }}
          className="absolute inset-0 flex flex-col items-start justify-center px-10 md:px-24 pointer-events-none"
          aria-hidden="true"
        >
          <div className="glass-panel backdrop-blur-md p-8 md:p-12 rounded-3xl max-w-lg border border-amber-500/20">
            <span className="block font-mono text-[10px] tracking-[0.35em] text-amber-400 uppercase mb-4">
              01 — {t.about.badge}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-cream-DEFAULT leading-snug tracking-tight">
              {t.about.title}
            </h2>
            <p className="mt-4 font-sans text-sm text-cream-soft/75 font-light leading-relaxed">
              {t.about.pills[0].desc}
            </p>
          </div>
        </motion.div>

        {/* ── Stage 2 — 60%: Right glass card ─────────────────────────── */}
        <motion.div
          style={{ opacity: s2.opacity, y: s2.y }}
          className="absolute inset-0 flex flex-col items-end justify-center px-10 md:px-24 pointer-events-none"
          aria-hidden="true"
        >
          <div className="glass-panel backdrop-blur-md p-8 md:p-12 rounded-3xl max-w-lg border border-amber-500/20 text-right">
            <span className="block font-mono text-[10px] tracking-[0.35em] text-amber-400 uppercase mb-4">
              02 — {t.ingredients.title}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-cream-DEFAULT leading-snug tracking-tight">
              {t.ingredients.subtitle}
            </h2>
            <div className="mt-5 flex flex-wrap justify-end gap-2 text-[10px] font-mono tracking-widest text-amber-300/80">
              {t.ingredients.items.map((h) => (
                <span key={h.id} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{h.name}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Stage 3 — 90%: CTA card ──────────────────────────────────── */}
        <motion.div
          style={{ opacity: s3.opacity, y: s3.y }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-auto"
        >
          <div className="glass-panel-dark p-10 md:p-16 rounded-3xl max-w-2xl border border-amber-500/30 gold-glow space-y-7">
            <span className="block font-mono text-[10px] tracking-[0.35em] text-amber-400 uppercase">
              {t.cta.badge}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-gold-gradient leading-tight tracking-tight">
              {t.cta.title}
            </h2>
            <p className="font-sans text-sm text-cream-soft/80 font-light max-w-sm mx-auto">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <MagneticButton
                className="px-8 py-4 rounded-full bg-gold-gradient text-charcoal-dark font-sans text-xs font-bold tracking-[0.18em] uppercase hover:shadow-[0_0_32px_rgba(212,175,55,0.55)] transition-shadow"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="flex items-center gap-2">
                  <span>{t.products.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </MagneticButton>
              <MagneticButton
                className="px-8 py-4 rounded-full glass-panel text-cream-DEFAULT border border-amber-500/30 font-sans text-xs font-medium tracking-[0.18em] uppercase hover:border-amber-400 transition-colors"
                onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-amber-400" />
                  <span>{t.nav.order}</span>
                </span>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
