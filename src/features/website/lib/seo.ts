import type { Metadata } from "next";

import {
  SITE_NAME,
  SITE_URL,
  TELEGRAM_BOT_URL
} from "@/features/website/config/site";

export const SITE_DESCRIPTION =
  "Upwork Bot BD helps Bangladeshi freelancers generate stronger AI-assisted Upwork proposals, learn winning bidding strategies, and move faster with a Bangla-first workflow.";

export const DEFAULT_OG_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA-qmToywF159ILJP2uiy4EYVVXyYMmzUqHXZwSM54cItw40ZS37xo3kFtheBIpflTOOemuV9cU9Gokxd837bb3xOsqxGmoJ0qmbVaJwxman_ml17Djv79eI4C3AMpXRCT2NcU7lyrRc6kIepLPG8loH-W9fyhirVJrHunhMR-MbJTMnC9LOc4rawui7h8UGlhlKsD1DYkK4EN1sJEYOmnrlvYcxn79RrnVlyehnkJvwQmhBS_A_Zzk9HIAR6DrkabCDP5jX41Hnes";

const DEFAULT_KEYWORDS = [
  "Upwork Bot BD",
  "Upwork proposal generator",
  "AI proposal generator",
  "Bangla freelancer tool",
  "Upwork proposal writing",
  "Bangladesh freelancing",
  "Telegram proposal bot",
  "Upwork bidding tips"
];

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return new URL(normalizedPath, SITE_URL).toString();
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  keywords = [],
  type = "website",
  noIndex = false
}: PageMetadataInput): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const combinedKeywords = [...DEFAULT_KEYWORDS, ...keywords];

  return {
    title,
    description,
    keywords: combinedKeywords,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      type,
      locale: "bn_BD",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: image,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true
          }
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1
          }
        }
  };
}

export function getSiteSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      sameAs: [TELEGRAM_BOT_URL]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "bn-BD"
    }
  ];
}
