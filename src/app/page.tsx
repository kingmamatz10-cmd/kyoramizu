"use client";

import { useState } from "react";
import LoadingExperience from "@/components/LoadingExperience";
import Navbar from "@/components/Navbar";
import SequenceScroll from "@/components/SequenceScroll";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Ingredients from "@/components/Ingredients";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Stockists from "@/components/Stockists";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sequenceUrls, setSequenceUrls] = useState<string[]>([]);

  return (
    <main className="relative min-h-screen bg-[#141312] text-[#FAF7F2] overflow-x-hidden selection:bg-amber-500/30">
      {/* Preloader */}
      <LoadingExperience
        onComplete={(urls) => {
          if (urls && urls.length > 0) setSequenceUrls(urls);
          setIsLoaded(true);
        }}
      />

      {isLoaded && (
        <>
          <Navbar />

          {/* ── Hero scrollytelling (h-[400vh] internally) ── */}
          <div id="hero">
            <SequenceScroll imageUrls={sequenceUrls} />
          </div>

          {/* ── Sections wrapper slides over the fixed canvas at z-10 ── */}
          {/* -mt-[100vh]: starts 100vh above hero end → covers canvas dead zone */}
          <div className="relative z-10 -mt-[100vh]">
            <About />
            <Founder />
            <Ingredients />
            <Products />
            <Benefits />
            <Stats />
            <Gallery />
            <Stockists />
            <Testimonials />
            <CTA />
            <Footer />
          </div>
        </>
      )}
    </main>
  );
}
