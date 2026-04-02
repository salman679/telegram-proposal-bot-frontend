import type { Metadata } from "next";

import { StructuredData } from "@/features/website/components/structured-data";
import { SITE_NAME, TELEGRAM_BOT_URL } from "@/features/website/config/site";
import { absoluteUrl, buildPageMetadata } from "@/features/website/lib/seo";
import { HomePage } from "@/features/website/pages/home/page";

export const metadata: Metadata = buildPageMetadata({
  title: "Upwork Bot BD | AI Proposal Generator for Bangladeshi Freelancers",
  description:
    "Generate stronger Upwork proposals in Bangla-first workflows, learn winning bidding tactics, and move faster with the Upwork Bot BD Telegram assistant.",
  path: "/",
  keywords: [
    "Upwork proposal generator Bangladesh",
    "Bangla AI proposal writer",
    "Telegram Upwork bot",
    "Freelancer proposal assistant"
  ]
});

export default function HomeRoutePage() {
  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: SITE_NAME,
            url: absoluteUrl("/"),
            description:
              "Bangla-first landing page for Upwork Bot BD, an AI-assisted Upwork proposal generator for freelancers in Bangladesh.",
            inLanguage: "bn-BD"
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: SITE_NAME,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: absoluteUrl("/"),
            inLanguage: "bn-BD",
            description:
              "AI-assisted Upwork proposal generator and Telegram workflow for Bangladeshi freelancers.",
            offers: {
              "@type": "Offer",
              priceCurrency: "BDT",
              availability: "https://schema.org/InStock",
              url: TELEGRAM_BOT_URL
            }
          }
        ]}
      />
      <HomePage />
    </>
  );
}
