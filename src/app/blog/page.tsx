import type { Metadata } from "next";

import { StructuredData } from "@/features/website/components/structured-data";
import { SITE_NAME } from "@/features/website/config/site";
import { absoluteUrl, buildPageMetadata } from "@/features/website/lib/seo";
import { getBlogIndexArticles } from "@/features/website/pages/blog/data";
import { BlogPage } from "@/features/website/pages/blog/page";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog & Resources - Upwork Bot BD",
  description:
    "Read Bangla-first Upwork strategy guides, AI proposal tips, tutorials, and freelancer success stories from Upwork Bot BD.",
  path: "/blog",
  keywords: [
    "Upwork blog Bangladesh",
    "freelancing resources Bangla",
    "AI proposal blog",
    "Upwork tutorials"
  ]
});

export default function BlogRoutePage() {
  const articles = getBlogIndexArticles();

  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `Blog & Resources - ${SITE_NAME}`,
            url: absoluteUrl("/blog"),
            description:
              "Collection of Upwork strategy guides, freelancer tutorials, and AI proposal resources.",
            inLanguage: "bn-BD"
          },
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: `${SITE_NAME} Blog`,
            url: absoluteUrl("/blog"),
            inLanguage: "bn-BD",
            blogPost: articles.map((article) => ({
              "@type": "BlogPosting",
              headline: article.title,
              url: absoluteUrl(`/blog/${article.slug}`),
              image: article.image,
              description: article.excerpt,
              author: {
                "@type": "Person",
                name: article.author.name
              }
            }))
          }
        ]}
      />
      <BlogPage />
    </>
  );
}
