import Link from "next/link";

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
      className={`sticky top-[18px] z-50 ${SITE_CONTAINER_CLASS} flex items-center justify-between gap-5 rounded-full bg-[var(--glass-white)] px-[18px] py-[14px] shadow-[var(--shadow-soft)] backdrop-blur-[24px] max-[900px]:top-[14px] max-[900px]:grid max-[900px]:grid-cols-[minmax(0,1fr)] max-[900px]:rounded-[30px] max-[780px]:gap-3 max-[780px]:rounded-[32px] max-[780px]:p-[14px]`}
    >
      <div className="bg-[linear-gradient(135deg,var(--primary),var(--secondary))] bg-clip-text text-[1.5rem] font-extrabold tracking-[-0.04em] text-transparent">
        {SITE_NAME}
      </div>

      <nav className="flex items-center gap-6 text-[var(--muted)] max-[900px]:flex-wrap max-[900px]:justify-between max-[780px]:hidden">
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

      <div className="flex items-center gap-4 max-[900px]:flex-wrap max-[900px]:justify-between max-[780px]:grid max-[780px]:w-full max-[780px]:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] max-[780px]:gap-2.5 max-[520px]:grid-cols-2">
        <Link
          href="/admin/login"
          className="font-bold text-[var(--muted)] transition duration-200 hover:text-[var(--primary)] max-[780px]:inline-flex max-[780px]:min-h-12 max-[780px]:items-center max-[780px]:justify-center max-[780px]:rounded-full max-[780px]:bg-[var(--surface-low)]"
        >
          Login
        </Link>
        <a
          href={TELEGRAM_BOT_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[var(--gradient-primary)] px-6 py-[14px] font-bold text-[#f4f1ff] shadow-[0_16px_36px_rgba(74,64,224,0.18)] transition duration-200 hover:-translate-y-0.5 max-[780px]:min-h-12 max-[780px]:px-[18px] max-[780px]:py-3"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
