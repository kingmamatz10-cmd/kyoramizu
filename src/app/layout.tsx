import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { LanguageProvider } from "@/context/LanguageContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KYORAMIZU — Premium Indonesian Herbal Beverage | Bir Pletok",
  description:
    "Experience the world-class scrollytelling landing page for KYORAMIZU Bir Pletok. A luxury blend of modern design, Betawi royal heritage, red ginger, and 7 sacred Indonesian spices.",
  keywords: [
    "KYORAMIZU",
    "Bir Pletok",
    "Indonesian Herbal Beverage",
    "Luxury Herbal Drink",
    "Red Ginger Elixir",
    "Betawi Heritage Beverage",
    "Natural Spices",
    "Non-alcoholic Herbal Drink",
  ],
  authors: [{ name: "KYORAMIZU Luxury Heritage" }],
  openGraph: {
    title: "KYORAMIZU — Sovereign Indonesian Herbal Luxury",
    description:
      "Crafted from Indonesia's finest red ginger, sappan wood, and aromatic island spices. Experience modern luxury in every sip.",
    url: "https://kyoramizu.com",
    siteName: "KYORAMIZU Bir Pletok",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KYORAMIZU — Bir Pletok Herbal Masterpiece",
    description: "Savor centuries of royal Indonesian herbal wisdom, elevated for today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable} dark`}>
      <body className="bg-[#141312] text-[#FAF7F2] antialiased selection:bg-herbal-DEFAULT selection:text-white">
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}

