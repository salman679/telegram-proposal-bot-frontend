import Link from "next/link";

import styles from "./minimal-footer.module.css";

interface MinimalFooterLink {
  href: string;
  label: string;
  external?: boolean;
}

interface MinimalFooterProps {
  links: MinimalFooterLink[];
}

export function MinimalFooter({ links }: MinimalFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>© 2026 Upwork Bot BD. All rights reserved.</div>
        <div className={styles.footerLinks}>
          {links.map((link) =>
            link.external ? (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
