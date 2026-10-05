export const links = {
  faxlab: "https://faxlab.in/",
  triveni: "https://trivenisangamdialogues.in/",
  faxlabYoutube: "https://www.youtube.com/@faxlabai",
  triveniYoutube: "https://www.youtube.com/@TriveniSangamDialogues",
  linkedin: "https://www.linkedin.com/in/rishabhagarwaliimc/",
  amazonAuthor: "https://www.amazon.in/stores/author/B0F4K2RZNV",
  goodreads: "https://www.goodreads.com/author/show/57744925.Rishabh_Agarwal",
  email: "mailto:ra@faxlab.in",
};

export const founderBio = "Rishabh Agarwal — Founder & CEO of FaxLab AI, engineer and IIM Calcutta alumnus, author and speaker, with 20 years in supply chain and strategy.";

export type Book = {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  summary: string;
  cover: string;
  url: string;
  asin: string;
  pages: number;
  publisher?: string;
  publicationDate?: string;
  coauthor?: string;
  goodreads?: string;
};

export const books: Book[] = [
  {
    slug: "what-if-you-are-a-superhero",
    title: "What If You Are a Superhero and You Don't Know!",
    category: "Personal growth",
    summary: "A book about recognizing your own strengths and choosing what to do with them.",
    cover: "/images/books/Superhero1.png",
    url: "https://www.amazon.in/dp/B0F3TJGJN3",
    asin: "B0F3TJGJN3",
    pages: 136,
    goodreads: "https://www.goodreads.com/book/show/231671438-what-if-you-are-superhero-and-you-don-t-know",
  },
  {
    slug: "transforming-supply-chain-with-ai",
    title: "Transforming Supply Chain with AI",
    subtitle: "Innovations and Strategies for EPC Procurement & Logistics",
    category: "Business & technology",
    summary: "Ideas and strategies for applying AI across EPC procurement and logistics.",
    cover: "/images/books/Supply_Chain_With_AI.png",
    url: "https://www.amazon.in/dp/B0FR95FTH5",
    asin: "B0FR95FTH5",
    pages: 105,
    publisher: "First Print Publications",
    publicationDate: "2025-01-30",
    goodreads: "https://www.goodreads.com/book/show/260323951-transforming-supply-chain-with-ai",
  },
  {
    slug: "my-50-arranged-marriage-dates",
    title: "My 50 Arranged Marriage Dates",
    subtitle: "Stories of Love, Rejection, and Discovering Your Self",
    category: "Fiction & relationships",
    summary: "A fictional journey through modern matchmaking, expectations and self-discovery.",
    cover: "/images/books/My_50_arrange_marrige_dates.png",
    url: "https://www.amazon.in/dp/B0FM7SPP37",
    asin: "B0FM7SPP37",
    goodreads: "https://www.goodreads.com/book/show/260337229-my-50-arranged-marriage-dates",
    pages: 131,
    publisher: "First Print Publications",
    publicationDate: "2025-07-31",
  },
  {
    slug: "from-gurutvakarsana-to-gravity",
    title: "From Gurutvākārṣaṇa to Gravity",
    category: "Language & heritage",
    summary: "Coauthored with Swati Agarwal, this book explores connections between Indian linguistic traditions and modern language.",
    cover: "/images/books/From_Gurutvakarsana_to_Gravity.jpg",
    url: "https://www.amazon.in/dp/B0HF81Q77J",
    asin: "B0HF81Q77J",
    goodreads: "https://www.goodreads.com/book/show/260337399-from-gurutv-k-r-a-a-to-gravity",
    pages: 142,
    publisher: "First Print Publications",
    publicationDate: "2026-07-31",
    coauthor: "Swati Agarwal",
  },
];

export const appearances = [
  {
    label: "CHEMLOG India 2025",
    title: "Speaker listing",
    url: "https://www.chemlogindia.com/speakers25.php",
  },
  {
    label: "IIT Delhi programme session · participant account",
    title: "Transforming Supply Chain with AI",
    url: "https://www.linkedin.com/posts/pradeesh-nair-veteran-61560b35_supplychain-artificialintelligence-logistics-activity-7399321600061517824-con5",
  },
  {
    label: "Jaipuria Institute of Management",
    title: "How to build an ethical AI culture",
    url: "https://jaipuriamba.edu.in/webinar-on-how-to-build-an-ethical-ai-culture-at-jaipuria-institute-of-management/",
  },
  {
    label: "Edu Attack",
    title: "Work, productivity and the 70-hour week",
    url: "https://www.youtube.com/watch?v=Vm5ZOnygdIs",
  },
  {
    label: "Triveni Sangam Dialogues",
    title: "From Ujjain to the universe",
    url: "https://www.youtube.com/watch?v=L1R797mgOiM",
  },
];
