"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "EN" | "ID";

export const translations = {
  EN: {
    nav: {
      home: "Home",
      about: "About",
      ingredients: "Ingredients",
      products: "Products",
      benefits: "Benefits",
      gallery: "Gallery",
      stockists: "Where to Find Us",
      testimonials: "Testimonials",
      faq: "FAQ",
      contact: "Contact",
      order: "Order Now",
      menuNav: "Menu Navigation",
      brandEssenceTitle: "Brand Essence",
      brandEssenceDesc: "KYORAMIZU elevates Betawi heritage Bir Pletok into a world-class luxury herbal beverage. Warmth, health, and Indonesian spirit in every bottle.",
      connectWithUs: "Connect With Us",
      tagline: "Authentic Indonesian Bir Pletok",
    },
    hero: {
      badge: "HERITAGE BOTANICAL ELIXIR",
      title: "KYORAMIZU",
      subtitle: "The Royal Betawi Bir Pletok, Re-imagined in Artisanal Perfection",
      scrollPrompt: "SCROLL TO DISCOVER",
    },
    loading: {
      tagline: "ARTISANAL BOTANICAL ELIXIR",
      title: "KYORAMIZU",
      subtitle: "Preparing Heritage Experience",
    },
    about: {
      badge: "The Story of Bir Pletok",
      tagline: "Taste of Tradition, Style of Today",
      title: "Inspired by Indonesia. Perfected for Today.",
      body: "Originating from Betawi royal traditions, Bir Pletok was born as a non-alcoholic herbal elixir of triumph—a vibrant fusion of red ginger warmth, deep crimson Sappan wood, sweet cinnamon, and aromatic cloves. KYORAMIZU re-imagines this timeless heritage, blending century-old botanical wisdom with contemporary luxury aesthetic and pure artisanal perfection.",
      pills: [
        {
          num: "01 / ORIGIN",
          title: "Betawi Heritage",
          desc: "Crafted in Old Batavia as a royal celebratory herbal beverage without alcohol.",
        },
        {
          num: "02 / BOTANICALS",
          title: "7 Precious Herbs",
          desc: "Synergistic blend of Red Ginger, Sappan Wood, Lemongrass, Pandan, Cardamom, Clove, Cinnamon.",
        },
        {
          num: "03 / ELEVATED",
          title: "Contemporary Luxury",
          desc: "Cold-filtered, micro-batched, and bottled with ultra-premium glass design.",
        },
        {
          num: "04 / HISTORY",
          title: "Est. 2017",
          desc: "Evolving from simple plastic bottles to premium dark glass bottlings to preserve taste quality and brand prestige.",
        },
      ],
      vision: {
        title: "Our Vision",
        desc: "To be a pioneer of modern herbal beverages elevating Indonesian cultural heritage through quality, innovation, and health values.",
      },
      mission: {
        title: "Our Mission",
        items: [
          "Delivering high quality Bir Pletok",
          "Building a modern image for traditional beverages",
          "Raising public awareness of Indonesian spice health benefits",
          "Expanding distribution networks",
        ],
      },
    },
    ingredients: {
      badge: "Pure Botanicals",
      title: "7 Sacred Heritage Herbs",
      subtitle: "Selected from organic Indonesian high-altitude farms, hand-harvested at peak potency.",
      items: [
        {
          id: "ginger",
          name: "Red Ginger",
          localName: "Jahe Merah (Zingiber officinale var. rubrum)",
          origin: "Kerinci Plateau, Sumatra",
          desc: "Intensely warm and packed with gingerol antioxidants. Enhances blood circulation and deeply calms inflammation.",
          compounds: ["Gingerol", "Shogaol", "Zingerone"],
          benefit: "Immunity & Thermal Vitality",
        },
        {
          id: "sappan",
          name: "Sappan Wood",
          localName: "Kayu Secang (Caesalpinia sappan)",
          origin: "Yogyakarta, Java",
          desc: "Imparts the iconic ruby crimson hue. Rich in brazilin antioxidants, supporting cardiovascular wellness and cellular balance.",
          compounds: ["Brazilin", "Flavonoids", "Tannins"],
          benefit: "Cardiovascular Support & Natural Crimson Color",
        },
        {
          id: "lemongrass",
          name: "Fragrant Lemongrass",
          localName: "Serai Wangi (Cymbopogon citratus)",
          origin: "Bogor Botanical Highlands",
          desc: "Delivers crisp citrus top notes while soothing digestive harmony and relieving daily tension.",
          compounds: ["Citral", "Geraniol", "Myrcene"],
          benefit: "Digestive Balance & Stress Relief",
        },
        {
          id: "cinnamon",
          name: "Kayu Manis Cinnamon",
          localName: "Kayu Manis (Cinnamomum burmannii)",
          origin: "Kerinci, West Sumatra",
          desc: "World-renowned Indonesian Cassia cinnamon providing smooth velvet sweetness and natural glycemic regulation.",
          compounds: ["Cinnamaldehyde", "Proanthocyanidins"],
          benefit: "Metabolic Support & Velvet Sweetness",
        },
        {
          id: "clove",
          name: "Moluccan Cloves",
          localName: "Cengkeh (Syzygium aromaticum)",
          origin: "Spice Islands, Maluku",
          desc: "Historic spice offering intense aromatic warmth, natural antimicrobial protection, and soothing comfort.",
          compounds: ["Eugenol", "Eugenyl Acetate"],
          benefit: "Antimicrobial & Deep Aromatic Warmth",
        },
        {
          id: "cardamom",
          name: "Javanese Cardamom",
          localName: "Kapulaga (Amomum compactum)",
          origin: "West Java Highlands",
          desc: "Spicy-sweet botanical pod that clears respiratory pathways and enhances herbal synergy.",
          compounds: ["1,8-Cineole", "Terpinyl Acetate"],
          benefit: "Respiratory Clarity & Synergy",
        },
        {
          id: "pandan",
          name: "Aromatic Pandan",
          localName: "Pandan Wangi (Pandanus amaryllifolius)",
          origin: "Subang, West Java",
          desc: "Known as the Vanilla of the East, bringing a soothing nutty aroma and antioxidant balance.",
          compounds: ["2-Acetyl-1-pyrroline", "Alkaloids"],
          benefit: "Soothing Aroma & Antioxidant Balance",
        },
      ],
    },
    products: {
      badge: "Artisanal Collection",
      title: "Handcrafted Luxury Bottlings",
      subtitle: "Each batch is micro-extracted for 12 hours and cold-bottled in sustainable dark glass.",
      orderNow: "Order Now",
      viewDetails: "View Details",
      ingredientsTitle: "Key Botanicals",
      tasteProfile: "Taste Profile",
      volume: "Volume",
      shelfLife: "Shelf Life",
      closeModal: "Close Details",
      items: [
        {
          id: "royal-original",
          name: "Royal Heritage Pletok",
          subtitle: "Classic Crimson Elixir",
          price: "IDR 75.000",
          volume: "350ml glass bottle",
          desc: "The timeless signature blend. Bold red ginger heat harmonized with ruby Sappan wood, sweet cinnamon, and smooth palm nectar.",
          taste: "Warm spicy ginger entry, smooth floral sweetness, lingering clove-cinnamon finish.",
          shelfLife: "3 Months (Refrigerated)",
          tag: "Bestseller",
        },
        {
          id: "reserve-sparkling",
          name: "Reserve Botanical Elixir",
          subtitle: "Zero-Alcohol Artisanal Reserve",
          price: "IDR 125.000",
          volume: "500ml decanter glass",
          desc: "Double-extracted premium reserve with Javanese Cardamom and organic wild honey. Aged for 48 hours for velvety depth.",
          taste: "Complex botanical warmth, subtle herbal honey richness, long glowing finish.",
          shelfLife: "6 Months (Refrigerated)",
          tag: "Limited Reserve",
        },
        {
          id: "pletok-concentrate",
          name: "Elixir Concentrate",
          subtitle: "Pure Botanical Extract (1:4 Mix)",
          price: "IDR 195.000",
          volume: "700ml apothecary bottle",
          desc: "Ultra-concentrated herbal base for crafting hot elixirs, cold mocktails, or culinary herbal tea infusions at home.",
          taste: "Intense red ginger punch, concentrated cinnamon & spice notes, versatile mixability.",
          shelfLife: "12 Months",
          tag: "Artisan Choice",
        },
      ],
    },
    benefits: {
      badge: "Holistic Wellness",
      title: "Crafted for Body & Spirit",
      subtitle: "Ancient botanical wisdom validated by modern natural wellness science.",
      cards: [
        {
          title: "100% Non-Alcoholic",
          desc: "Pure herbal brew safe for everyone, celebrating the name 'Bir' from Batavia's historic word for elixir.",
        },
        {
          title: "Immunity Support",
          desc: "High concentration of gingerols and brazilin antioxidants strengthening natural defense.",
        },
        {
          title: "Thermal Vitality & Warmth",
          desc: "Naturally stimulates blood circulation, bringing soothing internal warmth to soothe fatigue.",
        },
        {
          title: "Digestive Harmony",
          desc: "Lemongrass and pandan promote calm digestion and ease bloating naturally.",
        },
      ],
    },
    stats: {
      badge: "Heritage Excellence",
      title: "Purity by the Numbers",
      items: [
        { value: "100%", label: "Natural Ingredients", desc: "No artificial color, flavor, or preservatives" },
        { value: "7", label: "Heritage Botanicals", desc: "Hand-selected Indonesian organic spices" },
        { value: "0.0%", label: "Alcohol Content", desc: "Halal & non-alcoholic herbal elixir" },
        { value: "12h", label: "Slow Extraction", desc: "Low-temperature brewing to lock nutrients" },
      ],
    },
    gallery: {
      badge: "Visual Journey",
      title: "Artistry in Every Bottle",
      subtitle: "From highland spice gardens to luxury dining experiences.",
      captions: [
        { title: "Crimson Extraction", desc: "Pure Sappan wood brewing into ruby elixir" },
        { title: "Artisanal Bottling", desc: "Sustainable amber glass protecting freshness" },
        { title: "Highland Harvest", desc: "Organic Red Ginger from West Java mountains" },
        { title: "Heritage Serving", desc: "Best served cold over ice or piping hot" },
      ],
    },
    stockists: {
      badge: "Distribution Network",
      title: "Available At Select Retailers & Partners",
      subtitle: "Find Bir Pletok Kyoramizu at your favorite supermarkets, restaurants, cafes, and hotels.",
      retailCategory: "Retail Stores & Supermarkets",
      hospitalityCategory: "Restaurants, Cafes, Hotels & Corporate",
      retailItems: [
        "Yogya Junction Kota Baru Parahyangan",
        "Yogya Bojongsoang",
        "Griya Hemat Soekarno Hatta Bandung",
        "Griya Buah Batu",
        "Griya Sumber Sari",
        "Griya Derwati",
        "Griya Antapani",
        "Griya Kiaracondong",
        "Griya Margahayu Raya-Pluto",
        "Griya Margahayu-Metro",
        "Griya Cinunuk",
      ],
      hospitalityItems: [
        "RM Laksana Mekarwangi",
        "RM Laksana Sutami",
        "Gruty Cibaduyut",
        "RM Bakul Daun Buah Batu",
        "Curug Sampireun",
        "Kop. PT. Telkom",
        "Kop. PT. PLN",
        "Kop. PT. LEN",
        "Salapak Hotel Horison",
        "Warung Taru Dago",
        "Gado-Gado Cihapit",
        "Rose Brend",
        "Hotel Jayakarta Bandung Woodcase",
        "Kopi Sejati",
        "RM Reog 45",
        "Oldie Caffee Kantin AA DU",
        "RM Sunda Sarana",
        "Resto Sehati Cipacing",
        "Hotel Lingga",
      ],
    },
    testimonials: {
      badge: "Collector & Connoisseur Reviews",
      title: "Loved by Mindful Drinkers",
      subtitle: "Hear what culinary experts and wellness enthusiasts say about KYORAMIZU.",
      reviews: [
        {
          name: "Chef Maya Sastro",
          role: "Culinary Historian & Restaurateur",
          comment: "KYORAMIZU captures the exact soul of authentic Betawi Bir Pletok while elevating the presentation to Michelin-level standards.",
        },
        {
          name: "Rangga Diputra",
          role: "Beverage Director & Mixologist",
          comment: "The depth of spice and ruby clarity is unmatched. It serves as an extraordinary zero-proof cocktail base or standalone digestive.",
        },
        {
          name: "Dr. Amanda Wijaya",
          role: "Holistic Health Practitioner",
          comment: "Red ginger and Sappan wood combination provides real anti-inflammatory and thermal circulation benefits. My daily wellness ritual.",
        },
      ],
    },
    cta: {
      badge: "Experience Kyoramizu",
      title: "Bring Home Authentic Indonesian Heritage",
      subtitle: "Order directly via WhatsApp or Shopee with nationwide cold-chain delivery.",
      orderWhatsapp: "Order via WhatsApp",
      orderShopee: "Buy on Shopee",
      fastDelivery: "Same-day delivery available for Greater Jakarta & Bandung",
      guarantee: "100% Satisfaction & Freshness Guarantee",
    },
    footer: {
      tagline: "The Royal Betawi Bir Pletok, Re-imagined for Global Connoisseurs.",
      quickLinks: "Quick Navigation",
      legal: "Legal & Info",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      halalCert: "Halal Certified",
      pirtCert: "PIRT Licensed",
      khiCert: "KHI Registered Brand",
      addressTitle: "Headquarters",
      address: "Apartemen Buah Batu Park Tower D lt 1 No 12-13, Kota Bandung",
      phone: "+62-822-1849-3527",
      email: "birpletokkyoramizu@gmail.com",
      instagram: "@birpletokkyoramizu",
      rights: "All Rights Reserved.",
    },
  },
  ID: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      ingredients: "Rempah",
      products: "Produk",
      benefits: "Manfaat",
      gallery: "Galeri",
      stockists: "Tersedia Di",
      testimonials: "Testimoni",
      faq: "FAQ",
      contact: "Kontak",
      order: "Pesan Sekarang",
      menuNav: "Navigasi Menu",
      brandEssenceTitle: "Esensi Brand",
      brandEssenceDesc: "KYORAMIZU mengangkat warisan Bir Pletok khas Betawi menjadi minuman herbal mewah kelas dunia. Hangat, sehat, dan penuh semangat Indonesia di setiap botol.",
      connectWithUs: "Hubungi Kami",
      tagline: "Bir Pletok Autentik Khas Betawi",
    },
    hero: {
      badge: "ELIKSER REMPAH WARISAN NUSANTARA",
      title: "KYORAMIZU",
      subtitle: "Bir Pletok Khas Betawi, Dihadirkan Kembali Dalam Kesempurnaan Artisanal",
      scrollPrompt: "GULIR UNTUK MENJELAJAH",
    },
    loading: {
      tagline: "MINUMAN REMPAH ARTISANAL",
      title: "KYORAMIZU",
      subtitle: "Menyiapkan Pengalaman Warisan Betawi",
    },
    about: {
      badge: "Kisah Bir Pletok",
      tagline: "Rasa Tradisi, Gaya Masa Kini",
      title: "Terinspirasi Tradisi Nusantara. Disempurnakan Masa Kini.",
      body: "Lahir dari tradisi bangsawan Betawi Tempo Doeloe, Bir Pletok diciptakan sebagai elikser ramuan herbal perayaan yang non-alkohol—perpaduan hangat jahe merah, warna merah crimson kayu secang, manisnya kayu manis, serta aroma cengkeh yang memikat. KYORAMIZU merefleksikan kemewahan warisan ini dengan memadukan kearifan rempah berusia ratusan tahun dan estetika modern kelas dunia.",
      pills: [
        {
          num: "01 / ASAL-USUL",
          title: "Warisan Betawi",
          desc: "Diciptakan di Batavia Lama sebagai minuman perayaan istimewa tanpa kandungan alkohol.",
        },
        {
          num: "02 / REMPAH PILIHAN",
          title: "7 Rempah Mulia",
          desc: "Racikan sinergis Jahe Merah, Kayu Secang, Serai, Pandan, Kapulaga, Cengkeh, dan Kayu Manis.",
        },
        {
          num: "03 / KUALITAS TINGGI",
          title: "Kemewahan Modern",
          desc: "Diekstraksi dingin, dikemas terbatas dalam botol kaca premium ramah lingkungan.",
        },
        {
          num: "04 / SEJARAH",
          title: "Berdiri Sejak 2017",
          desc: "Berawal dari kemasan botol plastik sederhana, kini berkembang menjadi botol kaca premium untuk menjaga kualitas rasa dan citra produk.",
        },
      ],
      vision: {
        title: "Visi Kami",
        desc: "Menjadi pelopor minuman rempah modern yang mengangkat warisan budaya Indonesia lewat kualitas, inovasi, dan nilai kesehatan.",
      },
      mission: {
        title: "Misi Kami",
        items: [
          "Menghadirkan Bir Pletok berkualitas tinggi",
          "Membangun citra baru minuman tradisional",
          "Meningkatkan kesadaran masyarakat terhadap manfaat rempah Nusantara",
          "Mengembangkan jaringan distribusi",
        ],
      },
    },
    ingredients: {
      badge: "Rempah Murni",
      title: "7 Rempah Suci Warisan Nusantara",
      subtitle: "Dipilih dari perkebunan organik dataran tinggi Indonesia, dipetik saat potensi nutrisi puncak.",
      items: [
        {
          id: "ginger",
          name: "Jahe Merah",
          localName: "Jahe Merah (Zingiber officinale var. rubrum)",
          origin: "Dataran Tinggi Kerinci, Sumatra",
          desc: "Sensasi hangat kuat kaya akan gingerol antioksidan. Melancarkan sirkulasi darah dan meredakan peradangan.",
          compounds: ["Gingerol", "Shogaol", "Zingerone"],
          benefit: "Imunitas & Kehangatan Tubuh",
        },
        {
          id: "sappan",
          name: "Kayu Secang",
          localName: "Kayu Secang (Caesalpinia sappan)",
          origin: "Yogyakarta, Jawa",
          desc: "Memberikan warna merah crimson alami yang ikonis. Rich akan brazilin untuk menjaga kesehatan jantung dan sel tubuh.",
          compounds: ["Brazilin", "Flavonoid", "Tanin"],
          benefit: "Kesehatan Jantung & Warna Merah Alami",
        },
        {
          id: "lemongrass",
          name: "Serai Wangi",
          localName: "Serai Wangi (Cymbopogon citratus)",
          origin: "Pegunungan Bogor",
          desc: "Memberikan aroma sitrus segar yang menenangkan pencernaan dan meredakan ketegangan tubuh.",
          compounds: ["Citral", "Geraniol", "Myrcene"],
          benefit: "Keseimbangan Pencernaan & Relaksasi",
        },
        {
          id: "cinnamon",
          name: "Kayu Manis",
          localName: "Kayu Manis (Cinnamomum burmannii)",
          origin: "Kerinci, Sumatra Barat",
          desc: "Kayu manis kualitas dunia asal Indonesia yang memberikan rasa manis lembut alami dan menjaga kadar gula darah.",
          compounds: ["Sinamaldehid", "Proanthocyanidins"],
          benefit: "Dukungan Metabolik & Manis Lembut",
        },
        {
          id: "clove",
          name: "Cengkeh Maluku",
          localName: "Cengkeh (Syzygium aromaticum)",
          origin: "Kepulauan Rempah, Maluku",
          desc: "Rempah bersejarah yang memberikan aroma hangat intens, perlindungan antimikroba alami, serta kesegaran napas.",
          compounds: ["Eugenol", "Eugenyl Acetate"],
          benefit: "Antimikroba & Aroma Hangat Tajam",
        },
        {
          id: "cardamom",
          name: "Kapulaga Jawa",
          localName: "Kapulaga (Amomum compactum)",
          origin: "Dataran Tinggi Jawa Barat",
          desc: "Polong rempah pedas-manis yang melegakan saluran pernapasan dan menyatukan seluruh harmoni rasa rempah.",
          compounds: ["1,8-Cineole", "Terpinyl Acetate"],
          benefit: "Kejelasan Pernapasan & Sinergi Rempah",
        },
        {
          id: "pandan",
          name: "Pandan Wangi",
          localName: "Pandan Wangi (Pandanus amaryllifolius)",
          origin: "Subang, Jawa Barat",
          desc: "Dikenal sebagai Vanila dari Timur, memberikan aroma wangi lembut yang menenangkan dan menjaga kebugaran.",
          compounds: ["2-Acetyl-1-pyrroline", "Alkaloid"],
          benefit: "Aroma Menenangkan & Antioksidan",
        },
      ],
    },
    products: {
      badge: "Koleksi Artisanal",
      title: "Racikan Mewah Buatan Tangan",
      subtitle: "Setiap racikan diekstraksi perlahan selama 12 jam dan dikemas dingin dalam botol kaca gelap.",
      orderNow: "Pesan Sekarang",
      viewDetails: "Lihat Detail",
      ingredientsTitle: "Kandungan Rempah Utama",
      tasteProfile: "Profil Rasa",
      volume: "Volume",
      shelfLife: "Masa Simpan",
      closeModal: "Tutup Detail",
      items: [
        {
          id: "royal-original",
          name: "Royal Heritage Pletok",
          subtitle: "Elikser Merah Klasik",
          price: "Rp 75.000",
          volume: "Botol Kaca 350ml",
          desc: "Varian signature klasik. Kehangatan jahe merah dipadukan dengan kayu secang crimson, kayu manis, dan gula aren murni.",
          taste: "Sentuhan jahe hangat pedas, manis floral lembut, berakhiran aroma cengkeh kayu manis yang tahan lama.",
          shelfLife: "3 Bulan (Dalam Kulkas)",
          tag: "Terlaris",
        },
        {
          id: "reserve-sparkling",
          name: "Reserve Botanical Elixir",
          subtitle: "Racikan Mewah Non-Alkohol Reserve",
          price: "Rp 125.000",
          volume: "Dekanter Kaca 500ml",
          desc: "Ekstraksi ganda dengan kapulaga Jawa dan madu hutan organik. Diendapkan 48 jam untuk kedalaman rasa lembut.",
          taste: "Kompleksitas kehangatan rempah, kelembutan madu hutan, sensasi hangat berkepanjangan.",
          shelfLife: "6 Bulan (Dalam Kulkas)",
          tag: "Edisi Terbatas",
        },
        {
          id: "pletok-concentrate",
          name: "Elixir Concentrate",
          subtitle: "Ekstrak Rempah Murni (Racikan 1:4)",
          price: "Rp 195.000",
          volume: "Botol Apoteker 700ml",
          desc: "Konsentrat rempah pekat untuk membuat seduhan hangat, mocktail dingin, maupun teh herbal di rumah.",
          taste: "Sensasi jahe merah pekat, aksen kayu manis dan cengkeh kuat, sangat mudah dicampur.",
          shelfLife: "12 Bulan",
          tag: "Pilihan Artisanal",
        },
      ],
    },
    benefits: {
      badge: "Kesehatan Holistik",
      title: "Dibuat Untuk Tubuh & Jiwa",
      subtitle: "Kearifan rempah tradisional yang terbukti secara sains kesehatan alami.",
      cards: [
        {
          title: "100% Tanpa Alkohol",
          desc: "Minuman murni herbal yang aman untuk semua orang, menghormati nama 'Bir' dari sejarah kata elikser di Batavia.",
        },
        {
          title: "Dukungan Sistem Imun",
          desc: "Kandungan tinggi gingerol dan antioksidan brazilin yang memperkuat daya tahan tubuh alami.",
        },
        {
          title: "Kehangatan & Vitalitas",
          desc: "Merangsang sirkulasi darah secara alami, memberikan kehangatan tubuh dan meredakan rasa lelah.",
        },
        {
          title: "Keseimbangan Pencernaan",
          desc: "Serai wangi dan pandan membantu menenangkan perut dan meredakan kembung secara alami.",
        },
      ],
    },
    stats: {
      badge: "Keunggulan Warisan",
      title: "Kemurnian Dalam Angka",
      items: [
        { value: "100%", label: "Bahan Alami", desc: "Tanpa pewarna, perisa, atau pengawet buatan" },
        { value: "7", label: "Rempah Warisan", desc: "Rempah-rempah organik pilihan khas Indonesia" },
        { value: "0,0%", label: "Kadar Alkohol", desc: "Minuman ramuan herbal halal & bebas alkohol" },
        { value: "12j", label: "Ekstraksi Dingin", desc: "Proses pembuatan suhu rendah menjaga nutrisi" },
      ],
    },
    gallery: {
      badge: "Perjalanan Visual",
      title: "Seni Dalam Setiap Botol",
      subtitle: "Dari kebun rempah dataran tinggi hingga pengalaman kuliner mewah.",
      captions: [
        { title: "Ekstraksi Crimson", desc: "Penyeduhan kayu secang murni menjadi elikser merah" },
        { title: "Pengemasan Artisanal", desc: "Botol kaca amber ramah lingkungan menjaga kesegaran" },
        { title: "Panen Dataran Tinggi", desc: "Jahe Merah organik dari pegunungan Jawa Barat" },
        { title: "Sajikan Tradisional", desc: "Sangat nikmat disajikan dingin dengan es atau hangat" },
      ],
    },
    stockists: {
      badge: "Jaringan Distribusi",
      title: "Tersedia Di Toko & Mitra Pilihan",
      subtitle: "Temukan Bir Pletok Kyoramizu di supermarket, restoran, kafe, dan hotel favorit Anda.",
      retailCategory: "Toko Retail & Supermarket",
      hospitalityCategory: "Resto, Kafe, Hotel & Korporat",
      retailItems: [
        "Yogya Junction Kota Baru Parahyangan",
        "Yogya Bojongsoang",
        "Griya Hemat Soekarno Hatta Bandung",
        "Griya Buah Batu",
        "Griya Sumber Sari",
        "Griya Derwati",
        "Griya Antapani",
        "Griya Kiaracondong",
        "Griya Margahayu Raya-Pluto",
        "Griya Margahayu-Metro",
        "Griya Cinunuk",
      ],
      hospitalityItems: [
        "RM Laksana Mekarwangi",
        "RM Laksana Sutami",
        "Gruty Cibaduyut",
        "RM Bakul Daun Buah Batu",
        "Curug Sampireun",
        "Kop. PT. Telkom",
        "Kop. PT. PLN",
        "Kop. PT. LEN",
        "Salapak Hotel Horison",
        "Warung Taru Dago",
        "Gado-Gado Cihapit",
        "Rose Brend",
        "Hotel Jayakarta Bandung Woodcase",
        "Kopi Sejati",
        "RM Reog 45",
        "Oldie Caffee Kantin AA DU",
        "RM Sunda Sarana",
        "Resto Sehati Cipacing",
        "Hotel Lingga",
      ],
    },
    testimonials: {
      badge: "Ulasan Penikmat & Pakar",
      title: "Dicintai Penikmat Gaya Hidup Sehat",
      subtitle: "Simak ulasan dari para pakar kuliner dan penggiat kesehatan tentang KYORAMIZU.",
      reviews: [
        {
          name: "Chef Maya Sastro",
          role: "Sejarawan Kuliner & Pemilik Restoran",
          comment: "KYORAMIZU berhasil menangkap jiwa autentik Bir Pletok Betawi sekaligus mengangkat penyajiannya ke standar kelas internasional.",
        },
        {
          name: "Rangga Diputra",
          role: "Director of Mixology",
          comment: "Kedalaman rempah dan kejernihan warna merahnya luar biasa. Sangat cocok sebagai racikan mocktail mewah maupun minuman hangat.",
        },
        {
          name: "Dr. Amanda Wijaya",
          role: "Praktisi Kesehatan Holistik",
          comment: "Kombinasi jahe merah dan kayu secang terbukti melancarkan sirkulasi darah dan memberi kehangatan alami. Ritual sehat harian saya.",
        },
      ],
    },
    cta: {
      badge: "Nikmati Kyoramizu",
      title: "Bawa Pulang Kehangatan Warisan Nusantara",
      subtitle: "Pesan langsung melalui WhatsApp atau Shopee dengan pengiriman cepat ke seluruh Indonesia.",
      orderWhatsapp: "Pesan via WhatsApp",
      orderShopee: "Beli di Shopee",
      fastDelivery: "Tersedia pengiriman sameday untuk area Jabodetabek & Bandung",
      guarantee: "Garansi 100% Kesegaran & Kepuasan",
    },
    footer: {
      tagline: "Bir Pletok Betawi Mewah, Dihadirkan Kembali Untuk Penikmat Dunia.",
      quickLinks: "Navigasi Cepat",
      legal: "Informasi & Legal",
      privacy: "Kebijakan Privasi",
      terms: "Syarat & Ketentuan",
      halalCert: "Sertifikasi Halal",
      pirtCert: "Sertifikasi PIRT",
      khiCert: "KHI (Merk Terdaftar)",
      addressTitle: "Kantor Pusat",
      address: "Apartemen Buah Batu Park Tower D lt 1 No 12-13, Kota Bandung",
      phone: "+62-822-1849-3527",
      email: "birpletokkyoramizu@gmail.com",
      instagram: "@birpletokkyoramizu",
      rights: "Hak Cipta Dilindungi.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof translations.EN;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");

  useEffect(() => {
    const saved = localStorage.getItem("kyoramizu_lang") as Language;
    if (saved === "EN" || saved === "ID") {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("kyoramizu_lang", lang);
  };

  const toggleLanguage = () => {
    const next = language === "EN" ? "ID" : "EN";
    handleSetLanguage(next);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
