import type { Metadata } from "next";

import { HowItWorksPage } from "@/features/website/pages/how-it-works/page";

export const metadata: Metadata = {
  title: "কিভাবে কাজ করে - Upwork Bot BD",
  description: "See how Upwork Bot BD works and how the Telegram proposal flow helps freelancers win jobs."
};

export default function HowItWorksRoutePage() {
  return <HowItWorksPage />;
}
