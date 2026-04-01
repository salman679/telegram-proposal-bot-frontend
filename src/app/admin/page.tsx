import { AdminDashboard } from "@/features/admin/components/dashboard/dashboard";
import { getDashboardPayload } from "@/features/admin/lib/dashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const payload = await getDashboardPayload();

  return <AdminDashboard payload={payload} />;
}
