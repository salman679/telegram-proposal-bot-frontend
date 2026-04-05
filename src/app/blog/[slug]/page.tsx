import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { StructuredData } from "@/features/website/components/structured-data";
import { SITE_NAME } from "@/features/website/config/site";
import { absoluteUrl, buildPageMetadata } from "@/features/website/lib/seo";
import {
  BLOG_LEVEL_LABELS,
  getBlogArticleBySlug,
  getBlogArticleSlugs
} from "@/features/website/pages/blog/data";
import { BlogDetailPage } from "@/features/website/pages/blog/detail";

interface BlogDetailRoutePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getBlogArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: BlogDetailRoutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return buildPageMetadata({
      title: `Blog - ${SITE_NAME}`,
      description: "Freelancing resources and Upwork strategy articles from Upwork Bot BD.",
      path: "/blog",
      noIndex: true
    });
  }

  const metadata = buildPageMetadata({
    title: `${article.title} - ${SITE_NAME}`,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    image: article.image,
    keywords: [
      article.category,
      BLOG_LEVEL_LABELS[article.level],
      article.trackKey,
      article.author.name,
      "Upwork blog",
      "Bangla freelancer article"
    ],
    type: "article"
  });

  return {
    ...metadata,
    authors: [
      {
        name: article.author.name
      }
    ],
    category: article.category,
    creator: article.author.name,
    publisher: SITE_NAME,
    openGraph: {
      type: "article",
      locale: "bn_BD",
      url: absoluteUrl(`/blog/${article.slug}`),
      siteName: SITE_NAME,
      title: `${article.title} - ${SITE_NAME}`,
      description: article.excerpt,
      images: [
        {
          url: article.image,
          alt: article.title
        }
      ],
      authors: [article.author.name],
      section: article.category,
      tags: [
        article.category,
        BLOG_LEVEL_LABELS[article.level],
        article.trackKey,
        "Upwork",
        "Freelancing",
        "AI proposals"
      ]
    }
  };
}

export default async function BlogDetailRoutePage({
  params
}: BlogDetailRoutePageProps) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.excerpt,
            image: article.image,
            url: absoluteUrl(`/blog/${article.slug}`),
            inLanguage: "bn-BD",
            articleSection: article.category,
            wordCount: article.content
              .map((block) =>
                "content" in block ? block.content.split(/\s+/).length : block.items.join(" ").split(/\s+/).length
              )
              .reduce((total, count) => total + count, 0),
            author: {
              "@type": "Person",
              name: article.author.name
            },
            publisher: {
              "@type": "Organization",
              name: SITE_NAME
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: absoluteUrl("/")
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: absoluteUrl("/blog")
              },
              {
                "@type": "ListItem",
                position: 3,
                name: article.title,
                item: absoluteUrl(`/blog/${article.slug}`)
              }
            ]
          }
        ]}
      />
      <BlogDetailPage article={article} />
    </>
  );
}
