import Link from "next/link";
import { Globe, Mail, Sparkles } from "lucide-react";

import { Button } from "@/features/website/components/button";
import {
  SITE_CONTAINER_CLASS,
  SITE_NAME,
  TELEGRAM_BOT_URL
} from "@/features/website/config/site";

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
    <footer className={`mt-11 pt-7 ${SITE_CONTAINER_CLASS}`}>
      <div className="flex items-center justify-between gap-6 pt-[26px] max-[780px]:flex-col max-[780px]:items-start">
        <div className="grid gap-3">
          <div className="text-[1.1rem] font-extrabold tracking-[-0.04em] text-[var(--ink)]">
            {SITE_NAME}
          </div>
          <p className="leading-[1.8] text-[var(--muted)]">
            © 2026 Upwork Bot BD. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button
              href={TELEGRAM_BOT_URL}
              external
              variant="inverted"
              size="sm"
              aria-label="Contact on Telegram"
              className="h-[38px] w-[38px] min-h-0 rounded-full px-0 py-0 shadow-[0_12px_24px_rgba(74,64,224,0.08)]"
            >
              <Mail size={18} />
            </Button>
            <Button
              href={TELEGRAM_BOT_URL}
              external
              variant="inverted"
              size="sm"
              aria-label="Telegram support"
              className="h-[38px] w-[38px] min-h-0 rounded-full px-0 py-0 shadow-[0_12px_24px_rgba(74,64,224,0.08)]"
            >
              <Sparkles size={18} />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-4 text-[var(--muted)] max-[780px]:justify-start">
          {footerLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition duration-200 hover:-translate-y-0.5 hover:text-[var(--primary)]"
              >
                <Globe size={16} />
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 transition duration-200 hover:-translate-y-0.5 hover:text-[var(--primary)]"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
