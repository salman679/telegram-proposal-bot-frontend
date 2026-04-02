import type { Metadata } from "next";
import Link from "next/link";
import { LockKeyhole, ShieldCheck } from "lucide-react";

import {
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  sanitizeAdminRedirect
} from "@/features/admin/lib/auth";
import { buildPageMetadata } from "@/features/website/lib/seo";

type SearchParams = Promise<{
  error?: string | string[];
  redirect?: string | string[];
}>;

interface LoginPageProps {
  searchParams?: SearchParams;
}

export const metadata: Metadata = buildPageMetadata({
  title: "Admin Login - Upwork Bot BD",
  description: "Private admin login for the Upwork Bot BD dashboard.",
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
      <section className="relative z-[1] grid w-full max-w-[1120px] gap-6 rounded-[36px] bg-[rgba(255,255,255,0.8)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-[24px] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] [background:linear-gradient(160deg,rgba(74,64,224,0.06),rgba(112,42,225,0.02)),var(--surface-low)] p-8 max-[640px]:p-6">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[rgba(74,64,224,0.08)] px-3 py-2 text-[0.92rem] text-[var(--primary)]">
            <ShieldCheck size={16} />
            Protected analytics access
          </div>
          <h1 className="mb-4 text-[clamp(2rem,4vw,3.6rem)] leading-[1.05]">
            স্টিচ-অনুপ্রাণিত admin access
          </h1>
          <p className="text-base leading-[1.8] text-[var(--muted)]">
            `/admin` route টি হালকা glass surface, tonal layering আর Bangla-first
            analytics layout দিয়ে তৈরি। ড্যাশবোর্ডে ঢুকতে নিচের hardcoded
            credentials ব্যবহার করুন।
          </p>

          <div className="mt-7 grid gap-[14px] md:grid-cols-2 max-[640px]:grid-cols-1">
            <div className="rounded-[18px] bg-[var(--surface-ink)] p-[18px]">
              <span className="mb-1.5 block text-[0.84rem] text-[var(--muted)]">
                Email
              </span>
              <strong>{ADMIN_EMAIL}</strong>
            </div>
            <div className="rounded-[18px] bg-[var(--surface-ink)] p-[18px]">
              <span className="mb-1.5 block text-[0.84rem] text-[var(--muted)]">
                Password
              </span>
              <strong>{ADMIN_PASSWORD}</strong>
            </div>
          </div>

          <Link href="/" className="mt-7 inline-flex font-bold text-[var(--primary)]">
            মার্কেটিং সাইটে ফিরে যান
          </Link>
        </div>

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
              defaultValue={ADMIN_EMAIL}
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
              defaultValue={ADMIN_PASSWORD}
              autoComplete="current-password"
              required
            />
          </label>

          {error ? (
            <p className="text-[0.94rem] text-[var(--danger)]">
              Email অথবা password মেলেনি। hardcoded credentials ব্যবহার করুন।
            </p>
          ) : null}

          <button
            type="submit"
            className="cursor-pointer rounded-full border-none [background:var(--gradient-primary)] px-[18px] py-[15px] font-bold text-[#f4f1ff] shadow-[var(--shadow-light)]"
          >
            Enter dashboard
          </button>

          <p className="text-[0.86rem] leading-[1.6] text-[var(--muted)]">
            This login is intentionally hardcoded for now, so replace it before
            shipping publicly.
          </p>
        </form>
      </section>
    </main>
  );
}
