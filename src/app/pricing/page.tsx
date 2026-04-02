import type { Metadata } from "next";

import { StructuredData } from "@/features/website/components/structured-data";
import { SITE_NAME, TELEGRAM_BOT_URL } from "@/features/website/config/site";
import { absoluteUrl, buildPageMetadata } from "@/features/website/lib/seo";
import { PricingPage } from "@/features/website/pages/pricing/page";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing - Upwork Bot BD",
  description:
    "See weekly, monthly, and lifetime pricing for Upwork Bot BD and choose the plan that fits your freelance proposal workflow.",
  path: "/pricing",
  keywords: [
    "Upwork Bot BD pricing",
    "AI proposal generator pricing",
    "Bangladesh freelancer tool pricing"
  ]
});

export default function PricingRoutePage() {
  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `Pricing - ${SITE_NAME}`,
            url: absoluteUrl("/pricing"),
            description:
              "Pricing plans for Upwork Bot BD and the Telegram proposal assistant.",
            inLanguage: "bn-BD"
          },
          {
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: `${SITE_NAME} Pricing`,
            url: absoluteUrl("/pricing"),
            itemListElement: [
              {
                "@type": "Offer",
                name: "Weekly Plan",
                price: "79",
                priceCurrency: "BDT",
                availability: "https://schema.org/InStock",
                url: TELEGRAM_BOT_URL
              },
              {
                "@type": "Offer",
                name: "Monthly Plan",
                price: "199",
                priceCurrency: "BDT",
                availability: "https://schema.org/InStock",
                url: TELEGRAM_BOT_URL
              },
              {
                "@type": "Offer",
                name: "Lifetime Plan",
                price: "599",
                priceCurrency: "BDT",
                availability: "https://schema.org/InStock",
                url: TELEGRAM_BOT_URL
              }
            ]
          }
        ]}
      />
      <PricingPage />
    </>
  );
}
