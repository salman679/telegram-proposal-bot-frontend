import type { Metadata } from "next";
import { Hind_Siliguri, Manrope } from "next/font/google";

import "@/app/globals.css";
import { StructuredData } from "@/features/website/components/structured-data";
import { SITE_NAME, SITE_URL } from "@/features/website/config/site";
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  getSiteSchemas
} from "@/features/website/lib/seo";

const displayFont = Manrope({
  subsets: ["latin"],
  variable: "--font-display"
});

const bodyFont = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg"
  },
  keywords: [
    "Upwork Bot BD",
    "AI proposal generator",
    "Upwork proposal generator",
    "Bangla freelancer tool",
    "Upwork bidding assistant",
    "Bangladesh freelancing"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: SITE_NAME
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE]
  },
  robots: {
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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${displayFont.variable} ${bodyFont.variable}`}
      suppressHydrationWarning
    >
      <body>
        <StructuredData data={getSiteSchemas()} />
        {children}
      </body>
    </html>
  );
}
