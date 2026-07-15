export interface BlogItem {
  id: number;
  category: string;
  date: string;
  title: string;
  coverImage: string;
}

export const blogs: BlogItem[] = [
  {
    id: 1,
    category: "ONLINE BUSINESS",
    date: "JUN 10, 2026",
    title: "Squarespace vs Framer: Which Should a Business Owner Actually Pick",
    coverImage: "/image/blog1.avif",
  },
  {
    id: 2,
    category: "ONLINE BUSINESS",
    date: "JUN 5, 2026",
    title: "Webflow vs Framer: A Comparison for Business Owners (Not Designers)",
    coverImage: "/image/blog2.avif",
  },
  {
    id: 3,
    category: "WEB DESIGN",
    date: "MAY 21, 2026",
    title: "How to Build a Website With AI (That Doesn't Look Like Everyone Else's)",
    coverImage: "/image/blog3.avif",
  },
  {
    id: 4,
    category: "ONLINE BUSINESS",
    date: "MAY 15, 2026",
    title: "How to Improve Your AEO Score (So AI Actually Recommends Your Website)",
    coverImage: "/image/blog4.avif",
  },
  {
    id: 5,
    category: "WEB DESIGN",
    date: "MAY 9, 2026",
    title: "How to Build a Professional Website in Under an Hour (No Designer, No Code)",
    coverImage: "/image/blog5.avif",
  },
  {
    id: 6,
    category: "WEB DESIGN",
    date: "APR 27, 2026",
    title: "5 Personal Trainer Website Mistakes That Cost You Online Clients",
    coverImage: "/image/blog6.avif",
  }
];