import type { MetadataRoute } from "next";

import { SITE_URL } from "@/features/website/config/site";
import { absoluteUrl } from "@/features/website/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/"]
      }
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE_URL
  };
}
