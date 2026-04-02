import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/features/website/lib/seo";
import { getBlogArticleSlugs } from "@/features/website/pages/blog/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: absoluteUrl("/how-it-works"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85
    },
    {
      url: absoluteUrl("/pricing"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/blog"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8
    }
  ];

  const blogRoutes: MetadataRoute.Sitemap = getBlogArticleSlugs().map((slug) => ({
    url: absoluteUrl(`/blog/${slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.72
  }));

  return [...staticRoutes, ...blogRoutes];
}
