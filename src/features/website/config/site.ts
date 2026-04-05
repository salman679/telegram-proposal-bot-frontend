export const SITE_NAME = "ProposalPro";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://proposalpro.salmanizhar.com"
).replace(/\/$/, "");
export const CONTACT_EMAIL = "hello@salmanizhar.com";
export const TELEGRAM_BOT_URL = "http://t.me/upwork_prwt_bot";
export const SITE_CONTAINER_CLASS = "mx-auto w-full max-w-[1260px]";

export type ActivePage = "how-it-works" | "pricing" | "blog";
