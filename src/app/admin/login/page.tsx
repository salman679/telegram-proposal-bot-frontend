import Link from "next/link";
import { LockKeyhole, ShieldCheck } from "lucide-react";

import {
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  sanitizeAdminRedirect
} from "@/features/admin/lib/auth";

import styles from "./page.module.css";

type SearchParams = Promise<{
  error?: string | string[];
  redirect?: string | string[];
}>;

interface LoginPageProps {
  searchParams?: SearchParams;
}

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
    <main className={styles.page}>
      <div className={styles.decoration} />
      <section className={styles.panel}>
        <div className={styles.copyBlock}>
          <div className={styles.eyebrow}>
            <ShieldCheck size={16} />
            Protected analytics access
          </div>
          <h1 className={styles.title}>স্টিচ-অনুপ্রাণিত admin access</h1>
          <p className={styles.subtitle}>
            `/admin` route টি হালকা glass surface, tonal layering আর Bangla-first
            analytics layout দিয়ে তৈরি। ড্যাশবোর্ডে ঢুকতে নিচের hardcoded
            credentials ব্যবহার করুন।
          </p>

          <div className={styles.credentialCard}>
            <div>
              <span className={styles.credentialLabel}>Email</span>
              <strong>{ADMIN_EMAIL}</strong>
            </div>
            <div>
              <span className={styles.credentialLabel}>Password</span>
              <strong>{ADMIN_PASSWORD}</strong>
            </div>
          </div>

          <Link href="/" className={styles.secondaryLink}>
            মার্কেটিং সাইটে ফিরে যান
          </Link>
        </div>

        <form action="/api/admin/login" method="post" className={styles.formCard}>
          <div className={styles.formHeader}>
            <LockKeyhole size={18} />
            <span>Admin sign in</span>
          </div>

          <input type="hidden" name="redirect" value={redirectTo} />

          <label className={styles.field}>
            <span>Email address</span>
            <input
              type="email"
              name="email"
              defaultValue={ADMIN_EMAIL}
              autoComplete="username"
              required
            />
          </label>

          <label className={styles.field}>
            <span>Password</span>
            <input
              type="password"
              name="password"
              defaultValue={ADMIN_PASSWORD}
              autoComplete="current-password"
              required
            />
          </label>

          {error ? (
            <p className={styles.errorMessage}>
              Email অথবা password মেলেনি। hardcoded credentials ব্যবহার করুন।
            </p>
          ) : null}

          <button type="submit" className={styles.primaryButton}>
            Enter dashboard
          </button>

          <p className={styles.footnote}>
            This login is intentionally hardcoded for now, so replace it before
            shipping publicly.
          </p>
        </form>
      </section>
    </main>
  );
}
