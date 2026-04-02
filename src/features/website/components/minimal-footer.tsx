import Link from "next/link";

import { SITE_CONTAINER_CLASS } from "@/features/website/config/site";

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
    <footer className={`mt-[72px] pt-6 ${SITE_CONTAINER_CLASS}`}>
      <div className="flex items-center justify-between gap-[18px] text-[0.92rem] text-[var(--muted)] max-[780px]:flex-col max-[780px]:items-start">
        <div>© 2026 Upwork Bot BD. All rights reserved.</div>
        <div className="flex flex-wrap items-center justify-end gap-4 max-[780px]:justify-start">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition duration-200 hover:text-[var(--primary)]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="transition duration-200 hover:text-[var(--primary)]"
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
