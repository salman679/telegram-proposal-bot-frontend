import Link from "next/link";
import { Bot, Mail } from "lucide-react";

import { FooterNewsletterForm } from "@/features/website/components/footer-newsletter-form";
import {
  CONTACT_EMAIL,
  SITE_CONTAINER_CLASS,
  SITE_NAME,
  TELEGRAM_BOT_URL
} from "@/features/website/config/site";

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

const quickLinks: FooterLink[] = [
  { href: "/how-it-works", label: "How it Works" },
  { href: "/#benefits", label: "Benefits" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Resources" }
];

const supportLinks: FooterLink[] = [
  { href: "/pricing", label: "Plans" },
  { href: "/admin/login", label: "Admin Login" },
  { href: "/blog", label: "FAQs" },
  { href: "/how-it-works", label: "Bangla Interface" }
];

function FooterLinkList({ links }: { links: FooterLink[] }) {
  return (
    <>
      {links.map((link) =>
        link.external ? (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--muted)] transition duration-200 hover:text-[var(--primary)]"
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={link.label}
            href={link.href}
            className="text-[var(--muted)] transition duration-200 hover:text-[var(--primary)]"
          >
            {link.label}
          </Link>
        )
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className={`${SITE_CONTAINER_CLASS} mt-16`}>
      <div className="rounded-[40px] bg-[var(--surface-low)] px-7 pb-6 pt-[72px]">
        <div className="grid gap-[30px] lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr]">
          <div className="grid gap-3">
            <div className="bg-[linear-gradient(135deg,var(--primary),var(--secondary))] bg-clip-text text-[1.55rem] font-extrabold tracking-[-0.04em] text-transparent">
              {SITE_NAME}
            </div>
            <p className="leading-[1.8] text-[var(--muted)]">
              বাংলাদেশী ফ্রিল্যান্সারদের ক্ষমতায়নের লক্ষ্যে তৈরি একটি আধুনিক AI
              সলিউশন।
            </p>
            <div className="flex items-center gap-4 text-[var(--muted)]">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label={`Email ${SITE_NAME}`}
                className="inline-flex items-center transition duration-200 hover:text-[var(--primary)]"
              >
                <Mail size={18} />
              </a>
              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${SITE_NAME} bot on Telegram`}
                className="inline-flex items-center transition duration-200 hover:text-[var(--primary)]"
              >
                <Bot size={18} />
              </a>
            </div>
          </div>

          <div className="grid gap-3">
            <h4 className="text-[1.2rem]">কুইক লিংক</h4>
            <FooterLinkList links={quickLinks} />
          </div>

          <div className="grid gap-3">
            <h4 className="text-[1.2rem]">সাপোর্ট</h4>
            <FooterLinkList links={supportLinks} />
          </div>

          <div className="grid gap-3">
            <h4 className="text-[1.2rem]">নিউজলেটার</h4>
            <p className="leading-[1.8] text-[var(--muted)]">
              সেরা টিপসগুলো সরাসরি আপনার ইনবক্সে পেতে সাবস্ক্রাইব করুন।
            </p>
            <FooterNewsletterForm />
          </div>
        </div>

        <div className="mt-14 text-center text-[0.86rem] text-[var(--muted)]">
          © 2026 {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
