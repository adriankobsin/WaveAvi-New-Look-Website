export interface NewsItem {
  slug: string;
  category: string;
  date: string;
  badge: string;
  source: string;
  author: string;
  title: string;
  excerpt: string;
  featured: boolean;
  externalUrl?: string;
}

export const newsPath = (item: Pick<NewsItem, "slug">) => `/news/${item.slug}`;

export const newsItems: NewsItem[] = [
  {
    slug: "beyond-luxury-yacht-technology",
    source: "The Property & Lifestyle Journal",
    author: "Byline not provided",
    category: "Publication",
    date: "February 2026",
    badge: "Verified Press Feature",
    title: "Beyond Luxury: How Wave-AVI is Redefining Yacht Technology",
    excerpt:
      "Wave-AVI featured in The Property & Lifestyle Journal Issue 1. Co-founder Adrian Kobsin discusses the art and science of creating onboard systems that impress even the most demanding guests — from Dolby Atmos cinemas to seamless global connectivity.",
    featured: true,
    externalUrl: "https://elevation88.app.box.com/s/1oevu10ck9xquzdchn0kf5ntbb61hg1r",
  },
  {
    slug: "phnom-penh-opening",
    source: "Wave-AVI",
    author: "Wave-AVI",
    category: "Company News",
    date: "August 2026",
    badge: "Official Announcement",
    title: "Wave AVI Officially Opens in Phnom Penh, Cambodia",
    excerpt:
      "Wave AVI has officially opened its Cambodia operation in Phnom Penh, extending our Asia-Pacific presence alongside Thailand and Singapore and bringing marine-grade AV, IT and control engineering to the region's hospitality and residential markets.",
    featured: false,
  },
  {
    slug: "arena-central-sports-bar",
    source: "Wave-AVI",
    author: "Wave-AVI",
    category: "Project",
    date: "August 2026",
    badge: "Project Delivered",
    title: "First Cambodia Project Delivered — Arena Central Sports Bar",
    excerpt:
      "Our first delivered project in Cambodia: a complete audio, video and control installation for the Arena Central Sports Bar in Phnom Penh — large-format screens, multi-zone distributed audio, live sports feed distribution and simple one-touch control for staff.",
    featured: false,
  },
  {
    slug: "singapore-office-expansion",
    source: "Wave-AVI",
    author: "Wave-AVI",
    category: "Company News",
    date: "February 2026",
    badge: "Official Announcement",
    title: "New Singapore Office Expansion",
    excerpt:
      "Wave AVI Pte. Ltd. Singapore expands operations with a dedicated marine technology hub to serve the growing Asia-Pacific superyacht market.",
    featured: false,
  },
  {
    slug: "obedio-smart-crew-partnership",
    source: "Wave-AVI",
    author: "Wave-AVI",
    category: "Partnership",
    date: "March 2026",
    badge: "Strategic Partnership",
    title: "Wave-avi Partners with Obedio Smart Crew Systems",
    excerpt:
      "Wave-avi announces a new partnership with Obedio — the intelligent crew call system for superyachts featuring offline voice-to-text, instant translation in 30+ languages, and nine-month battery life. All processed locally, nothing leaves the vessel.",
    featured: false,
  },
  {
    slug: "phuket-technology-experience-centre",
    source: "Wave-AVI",
    author: "Wave-AVI",
    category: "Expansion",
    date: "April 2026",
    badge: "Official Announcement",
    title: "New Technology Experience Centre Opening in Phuket",
    excerpt:
      "Wave AVI Co. Ltd. is opening a new Technology Experience Centre in Phuket, Thailand — launching in April to coincide with Thai Songkran New Year celebrations.",
    featured: false,
  },
  {
    slug: "wave-guard-development",
    source: "Wave-AVI",
    author: "Wave-AVI",
    category: "Technology",
    date: "June 2026",
    badge: "R&D Update",
    title: "Wave Guard — The Future of Intelligent Yacht Security",
    excerpt:
      "Wave AVI unveils Wave Guard, a revolutionary AI-powered platform that transforms how superyachts think, sense and protect. Autonomous threat detection, predictive anomaly intelligence, and real-time decision-making at the edge — all running silently in the background so owners experience nothing but absolute peace of mind.",
    featured: false,
  },
];
