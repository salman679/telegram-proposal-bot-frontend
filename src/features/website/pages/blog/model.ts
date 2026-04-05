export const blogCategories = [
  "All Articles",
  "Strategy",
  "AI Tools",
  "Success Stories",
  "Tutorials"
] as const;

export type BlogArticleTone = "primary" | "secondary" | "tertiary";
export type BlogArticleLevel = "beginner" | "mid" | "advanced";
export type BlogTrackKey =
  | "proposal"
  | "profile"
  | "portfolio"
  | "pricing"
  | "filter"
  | "interview"
  | "close"
  | "secret";

export const BLOG_LEVEL_LABELS: Record<BlogArticleLevel, string> = {
  beginner: "বিগিনার",
  mid: "মিড-লেভেল",
  advanced: "অ্যাডভান্সড"
};

export type BlogArticleContentBlock =
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "heading";
      content: string;
    }
  | {
      type: "tipList";
      title: string;
      items: string[];
    }
  | {
      type: "quote";
      content: string;
    };

export interface BlogArticleAuthor {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export interface BlogArticle {
  slug: string;
  category: string;
  tone: BlogArticleTone;
  level: BlogArticleLevel;
  trackKey: BlogTrackKey;
  detailLabel: string;
  readTime: string;
  publishedAt: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  author: BlogArticleAuthor;
  content: BlogArticleContentBlock[];
  featured?: {
    badge: string;
    headline: string;
    description: string;
    ctaLabel: string;
  };
}
