// ============================================================
// imageConfig.ts — Central Image Asset Registry
// ============================================================
//
// HOW TO USE YOUR REAL IMAGES:
//
// 1. Drop your real photos into the matching folder under public/images/
//    (read the README.md in each folder for exact filenames & sizes)
//
// 2. Replace the URL string below with the local path, e.g.:
//    portrait: "/images/profile/rishabh-portrait.jpg"
//
// 3. Save — all components that use this image update instantly.
//    You never need to hunt through component files for image URLs.
//
// ============================================================

export const IMAGES = {
  // ── Profile / Portrait ────────────────────────────────────
  // TODO: Replace each with a local path once you have the real photos:
  //   heroPortrait   → "/images/profile/rishabh-hero.jpg"   (Home page)
  //   aboutPortrait  → "/images/profile/rishabh-about.jpg"  (About page)
  profile: {
    // Home hero portrait
    heroPortrait:
      "/images/profile/Rishabh_portrait.png",
    // About page portrait
    aboutPortrait:
      "/images/profile/Rishabh.png",
    // Faxlab image
    faxlab:
      "/images/profile/faxlab.png",
  },

  // ── Book Covers ───────────────────────────────────────────
  // TODO: Replace each with "/images/books/<filename>.jpg"
  //       once you add real covers to public/images/books/
  books: {
    superhero:
      "/images/books/Superhero1.png",
    superhero2:
      "/images/books/superhero2.png",
    marriageDates:
      "/images/books/My_50_arrange_marrige_dates.png",
    supplyChain:
      "/images/books/Supply_Chain_With_AI.png",
  },

  // ── Insights / Blog ───────────────────────────────────────
  // TODO: Replace with "/images/insights/featured-article.jpg"
  //       once you add the real banner to public/images/insights/
  insights: {
    featured: "/images/insights/ai-insight.png",
    aiTech: "/images/insights/ai-tech.png",
    narrative: "/images/insights/Narrative Strategy.png",
    entrepreneurship: "/images/insights/Entrepreurship.png",
  },

  // ── Achievements ──────────────────────────────────────────
  // TODO: Replace with "/images/achievements/award-hero.jpg"
  //       once you add real photos to public/images/achievements/
  achievements: {
    hero:
      "/images/achievements/ISRO.png",
  },
  
  // ── YouTube Channel / Triveni Sangam Dialogues ────────────
  youtube: {
    logo: "/images/Youtube/LOGO.png",
    mantraThumbnail: "/images/Youtube/mantra_thumbnail.png",
    jyotirlingaThumbnail: "/images/Youtube/jyotirlinga_thumbnail.png",
    mahabharatThumbnail: "/images/Youtube/mahabharat_thumbnail.png",
  },
} as const;
