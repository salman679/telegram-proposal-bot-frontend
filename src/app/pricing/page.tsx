import type { Metadata } from "next";

import { PricingPage } from "@/features/website/pages/pricing/pricing-page";

export const metadata: Metadata = {
  title: "Pricing - Upwork Bot BD",
  description: "Pricing plans for Upwork Bot BD and the Telegram proposal assistant."
};

export default function PricingRoutePage() {
  return <PricingPage />;
}
