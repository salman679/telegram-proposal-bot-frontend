import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
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
    return {
      title: "Blog - Upwork Bot BD"
    };
  }

  return {
    title: `${article.title} - Upwork Bot BD`,
    description: article.excerpt
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

  return <BlogDetailPage article={article} />;
}
