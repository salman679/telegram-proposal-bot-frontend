import Link from "next/link";

import {
  SITE_NAME,
  TELEGRAM_BOT_URL,
  type ActivePage
} from "@/features/website/config/site";

import styles from "./header.module.css";

interface HeaderProps {
  activePage?: ActivePage;
  benefitsHref: string;
}

function getNavClassName(
  activePage: ActivePage | undefined,
  currentPage: ActivePage
) {
  return activePage === currentPage ? styles.navActive : undefined;
}

export function Header({ activePage, benefitsHref }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>{SITE_NAME}</div>

      <nav className={styles.nav}>
        <Link
          href="/how-it-works"
          className={getNavClassName(activePage, "how-it-works")}
        >
          How it Works
        </Link>
        <Link href={benefitsHref}>Benefits</Link>
        <Link href="/pricing" className={getNavClassName(activePage, "pricing")}>
          Pricing
        </Link>
        <Link href="/blog" className={getNavClassName(activePage, "blog")}>
          Blog
        </Link>
      </nav>

      <div className={styles.headerActions}>
        <Link href="/admin/login" className={styles.loginLink}>
          Login
        </Link>
        <a
          href={TELEGRAM_BOT_URL}
          target="_blank"
          rel="noreferrer"
          className={styles.primaryButton}
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
