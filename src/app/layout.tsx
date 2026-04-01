import type { Metadata } from "next";
import { Hind_Siliguri, Manrope } from "next/font/google";

import "@/app/globals.css";

const displayFont = Manrope({
  subsets: ["latin"],
  variable: "--font-display"
});

const bodyFont = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Upwork Proposal Bot BD",
  description:
    "Bangla-first marketing site and admin analytics dashboard for the Telegram proposal bot."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${displayFont.variable} ${bodyFont.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
