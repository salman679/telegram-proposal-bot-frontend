import Link from "next/link";

import styles from "./website-minimal-footer.module.css";

interface WebsiteMinimalFooterLink {
  href: string;
  label: string;
  external?: boolean;
}

interface WebsiteMinimalFooterProps {
  links: WebsiteMinimalFooterLink[];
}

export function WebsiteMinimalFooter({
  links
}: WebsiteMinimalFooterProps) {
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
