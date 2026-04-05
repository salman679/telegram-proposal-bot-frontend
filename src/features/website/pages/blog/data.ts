import { advancedArticles } from "./advanced";
import { beginnerArticles } from "./beginner";
import {
  blogCategories,
  BLOG_LEVEL_LABELS,
  type BlogArticle,
  type BlogArticleAuthor,
  type BlogArticleContentBlock,
  type BlogArticleLevel,
  type BlogArticleTone,
  type BlogTrackKey
} from "./model";
import { midLevelArticles } from "./mid";

export {
  blogCategories,
  BLOG_LEVEL_LABELS,
  type BlogArticle,
  type BlogArticleAuthor,
  type BlogArticleContentBlock,
  type BlogArticleLevel,
  type BlogArticleTone,
  type BlogTrackKey
};

const blogArticles: BlogArticle[] = [
  ...beginnerArticles,
  ...midLevelArticles,
  ...advancedArticles
];

const articleOrder = new Map(blogArticles.map((article, index) => [article.slug, index]));

export function getBlogCategories() {
  return blogCategories;
}

export function getBlogArticles() {
  return blogArticles;
}

export function getBlogIndexArticles() {
  return blogArticles.filter((article) => !article.featured);
}

export function getFeaturedBlogArticle() {
  return blogArticles.find((article) => article.featured);
}

export function getBlogArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getBlogArticleSlugs() {
  return blogArticles.map((article) => article.slug);
}

export function getPopularBlogArticles(currentSlug: string, count = 2) {
  const currentArticle = getBlogArticleBySlug(currentSlug);

  return blogArticles
    .filter((article) => article.slug !== currentSlug)
    .sort((left, right) => {
      if (!currentArticle) {
        return (articleOrder.get(left.slug) ?? 0) - (articleOrder.get(right.slug) ?? 0);
      }

      const leftScore =
        Number(left.trackKey === currentArticle.trackKey) * 4 +
        Number(left.level === currentArticle.level) * 2 +
        Number(left.category === currentArticle.category);
      const rightScore =
        Number(right.trackKey === currentArticle.trackKey) * 4 +
        Number(right.level === currentArticle.level) * 2 +
        Number(right.category === currentArticle.category);

      if (rightScore !== leftScore) {
        return rightScore - leftScore;
      }

      return (articleOrder.get(left.slug) ?? 0) - (articleOrder.get(right.slug) ?? 0);
    })
    .slice(0, count);
}
