import type { Metadata } from "next";

import { BlogPage } from "@/features/website/pages/blog/page";

export const metadata: Metadata = {
  title: "Blog & Resources - Upwork Bot BD",
  description: "Learn Upwork strategy, AI proposal tactics, and freelancer workflows from Upwork Bot BD."
};

export default function BlogRoutePage() {
  return <BlogPage />;
}
