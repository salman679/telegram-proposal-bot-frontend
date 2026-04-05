import type { Metadata } from "next";

import { AdminDashboard } from "@/features/admin/components/dashboard/dashboard";
import { getDashboardPayload } from "@/features/admin/lib/dashboard";
import { buildPageMetadata } from "@/features/website/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = buildPageMetadata({
  title: "Admin Dashboard - ProposalPro",
  description: "Private analytics dashboard for site administrators.",
  path: "/admin",
  noIndex: true
});

export default async function AdminPage() {
  const payload = await getDashboardPayload();

  return <AdminDashboard payload={payload} />;
}
