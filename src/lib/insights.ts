export type InsightCategory =
  | "All"
  | "Residential"
  | "Commercial Hub"
  | "Life style"
  | "Future"
  | "Sustainable"
  | "Investors"
  | "Community";

export interface InsightItem {
  id: string;
  category: InsightCategory;
  readTime: string;
  title: string;
  excerpt: string;
  imageSrc: string;
}

const INSIGHTS: InsightItem[] = [
  {
    id: "featured-1",
    category: "Sustainable",
    readTime: "5 min read",
    title: "Why Sustainable Design is the Future of Real Estate",
    excerpt:
      "Homebuyers and investors are increasingly looking for developments that go beyond luxury and convenience. They want spaces that are healthier, more efficient, and resilient for the future.",
    imageSrc:
      "https://images.unsplash.com/photo-1586788680434-76918b1a01e7?q=80&w=1440&auto=format&fit=crop",
  },
  {
    id: "tile-1",
    category: "Sustainable",
    readTime: "5 min read",
    title: "Euphoria Accra: A Landmark of Modern Living",
    excerpt:
      "A bold mixed-use destination redefining urban lifestyles with innovation and sustainability at its core.",
    imageSrc:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tile-2",
    category: "Investors",
    readTime: "5 min read",
    title: "Top 3 Reasons to Invest with Duston Properties",
    excerpt:
      "From resilient value to future-ready amenities, here’s why our communities stand out for investors.",
    imageSrc:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tile-3",
    category: "Community",
    readTime: "5 min read",
    title: "Designing Communities Where People Belong",
    excerpt:
      "Thoughtful urban planning and human-centered design create places that foster connection and wellbeing.",
    imageSrc:
      "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tile-4",
    category: "Sustainable",
    readTime: "5 min read",
    title: "Why Location Still Drives Real Estate Value",
    excerpt:
      "Even in a digital age, proximity and connectivity remain the fundamentals behind lasting value.",
    imageSrc:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
  },
];

export const INSIGHT_CATEGORIES: InsightCategory[] = [
  "All",
  "Residential",
  "Commercial Hub",
  "Life style",
  "Future",
];

export async function fetchInsights(): Promise<InsightItem[]> {
  // In a real app, replace with CMS API call (e.g., Contentful, Sanity, Strapi)
  // Simulate latency
  await new Promise((r) => setTimeout(r, 50));
  return INSIGHTS;
}
