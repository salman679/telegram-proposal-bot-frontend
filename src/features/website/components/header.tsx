import Link from "next/link";

import { WebsiteButton } from "@/features/website/components/button";
import {
  SITE_CONTAINER_CLASS,
  SITE_NAME,
  TELEGRAM_BOT_URL,
  type ActivePage
} from "@/features/website/config/site";

interface HeaderProps {
  activePage?: ActivePage;
  benefitsHref: string;
}

function getNavClassName(
  activePage: ActivePage | undefined,
  currentPage: ActivePage
) {
  return activePage === currentPage
    ? "font-extrabold text-[var(--primary)]"
    : undefined;
}

export function Header({ activePage, benefitsHref }: HeaderProps) {
  return (
    <header
      className={`sticky top-[18px] z-50 ${SITE_CONTAINER_CLASS} flex items-center justify-between gap-5 rounded-full bg-[var(--glass-white)] px-[18px] py-[14px] shadow-[var(--shadow-soft)] backdrop-blur-[24px] max-[900px]:top-[14px] max-[900px]:gap-4 max-[900px]:rounded-[30px] max-[780px]:gap-3 max-[780px]:rounded-[32px] max-[780px]:px-[14px] max-[780px]:py-3`}
    >
      <Link
        href="/"
        aria-label={`${SITE_NAME} home`}
        className="inline-flex min-w-0 items-center"
      >
        <span className="bg-[linear-gradient(135deg,var(--primary),var(--secondary))] bg-clip-text text-[1.5rem] font-extrabold tracking-[-0.04em] text-transparent max-[780px]:text-[1.3rem]">
          {SITE_NAME}
        </span>
      </Link>

      <nav className="flex items-center gap-6 text-[var(--muted)] max-[900px]:gap-4 max-[900px]:text-[0.95rem] max-[780px]:hidden">
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

      <div className="flex shrink-0 items-center gap-4">
        <WebsiteButton
          href={TELEGRAM_BOT_URL}
          external
          variant="primary"
          size="sm"
          className="px-[24px] max-[780px]:min-h-[40px] max-[780px]:px-[16px] max-[780px]:text-[0.84rem]"
        >
          Get Started
        </WebsiteButton>
      </div>
    </header>
  );
}
