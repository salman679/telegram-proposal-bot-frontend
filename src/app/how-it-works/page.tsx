import type { Metadata } from "next";

import { StructuredData } from "@/features/website/components/structured-data";
import { SITE_NAME } from "@/features/website/config/site";
import { absoluteUrl, buildPageMetadata } from "@/features/website/lib/seo";
import { HowItWorksPage } from "@/features/website/pages/how-it-works/page";

export const metadata: Metadata = buildPageMetadata({
  title: "কিভাবে কাজ করে - ProposalPro",
  description:
    "Learn how ProposalPro works step by step, from job description input to AI proposal generation and better Upwork bidding outcomes.",
  path: "/how-it-works",
  keywords: [
    "how ProposalPro works",
    "AI proposal workflow",
    "Upwork bidding tutorial Bangladesh"
  ]
});

export default function HowItWorksRoutePage() {
  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `How It Works - ${SITE_NAME}`,
            url: absoluteUrl("/how-it-works"),
            description:
              "Step-by-step explanation of how ProposalPro helps freelancers create better proposals.",
            inLanguage: "bn-BD"
          },
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to use ProposalPro",
            description:
              "Paste a job description, get an AI proposal, and submit faster on Upwork.",
            totalTime: "PT5M",
            supply: [
              {
                "@type": "HowToSupply",
                name: "Upwork job description"
              }
            ],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Paste the job description",
                text: "Copy the Upwork job post and send it to the bot."
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Generate an AI proposal",
                text: "The bot analyzes the job and drafts a tailored proposal."
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Submit and win jobs",
                text: "Review the proposal, personalize it if needed, and submit it to the client."
              }
            ]
          }
        ]}
      />
      <HowItWorksPage />
    </>
  );
}
