import Link from "next/link";
import { Globe, Mail, Sparkles } from "lucide-react";

import { SITE_NAME, TELEGRAM_BOT_URL } from "@/features/website/config/site";

import styles from "./footer.module.css";

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

const footerLinks: FooterLink[] = [
  { href: "/how-it-works", label: "How it Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: TELEGRAM_BOT_URL, label: "Open Telegram Bot", external: true }
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <div className={styles.brandName}>{SITE_NAME}</div>
          <p>© 2026 Upwork Bot BD. All rights reserved.</p>
          <div className={styles.footerIcons}>
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact on Telegram"
            >
              <Mail size={18} />
            </a>
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram support"
            >
              <Sparkles size={18} />
            </a>
          </div>
        </div>

        <div className={styles.footerLinks}>
          {footerLinks.map((link) =>
            link.external ? (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <Globe size={16} />
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
