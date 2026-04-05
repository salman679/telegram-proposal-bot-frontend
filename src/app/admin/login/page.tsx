import type { Metadata } from "next";
import { LockKeyhole } from "lucide-react";

import { sanitizeAdminRedirect } from "@/features/admin/lib/auth";
import { Button } from "@/features/website/components/button";
import { buildPageMetadata } from "@/features/website/lib/seo";

type SearchParams = Promise<{
  error?: string | string[];
  redirect?: string | string[];
}>;

interface LoginPageProps {
  searchParams?: SearchParams;
}

export const metadata: Metadata = buildPageMetadata({
  title: "Admin Login - ProposalPro",
  description: "Private admin login for the ProposalPro dashboard.",
  path: "/admin/login",
  noIndex: true
});

function getSingleValue(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const error = getSingleValue(resolvedSearchParams?.error);
  const redirectTo = sanitizeAdminRedirect(
    getSingleValue(resolvedSearchParams?.redirect)
  );

  return (
    <main className="relative grid min-h-screen place-items-center overflow-x-clip px-6 py-12 max-[640px]:p-5">
      <div
        className="pointer-events-none absolute left-[8%] top-[8%] h-[360px] w-[360px] rounded-full blur-[20px]"
        style={{
          background: "radial-gradient(circle, rgba(74, 64, 224, 0.1), transparent 68%)"
        }}
      />

      <section className="relative z-[1] w-full max-w-[560px] rounded-[36px] bg-[rgba(255,255,255,0.8)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-[24px]">
        <form
          action="/api/admin/login"
          method="post"
          className="flex flex-col gap-[18px] rounded-[28px] bg-[var(--surface-ink)] p-8 max-[640px]:p-6"
        >
          <div className="inline-flex items-center gap-2.5 font-bold">
            <LockKeyhole size={18} />
            <span>Admin sign in</span>
          </div>

          <input type="hidden" name="redirect" value={redirectTo} />

          <label className="grid gap-2.5 text-[var(--muted)]">
            <span>Email address</span>
            <input
              className="w-full rounded-2xl border border-transparent bg-[var(--surface-highest)] px-4 py-[15px] text-[var(--ink)] outline-none focus:border-[rgba(74,64,224,0.4)] focus:shadow-[0_0_0_6px_rgba(136,133,255,0.18)]"
              type="email"
              name="email"
              autoComplete="username"
              required
            />
          </label>

          <label className="grid gap-2.5 text-[var(--muted)]">
            <span>Password</span>
            <input
              className="w-full rounded-2xl border border-transparent bg-[var(--surface-highest)] px-4 py-[15px] text-[var(--ink)] outline-none focus:border-[rgba(74,64,224,0.4)] focus:shadow-[0_0_0_6px_rgba(136,133,255,0.18)]"
              type="password"
              name="password"
              autoComplete="current-password"
              required
            />
          </label>

          {error ? (
            <p className="text-[0.94rem] text-[var(--danger)]">
              Email or password did not match. Use the configured admin credentials.
            </p>
          ) : null}

          <Button type="submit" variant="primary" className="cursor-pointer">
            Enter dashboard
          </Button>

          <p className="text-[0.86rem] leading-[1.6] text-[var(--muted)]">
            This login is intentionally hardcoded for now, so replace it before
            shipping publicly.
          </p>
        </form>
      </section>
    </main>
  );
}
