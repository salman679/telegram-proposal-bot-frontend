import path from "node:path";
import { readFileSync } from "node:fs";
import { Poppins } from "next/font/google";

const inlineStyles = readFileSync(path.join(process.cwd(), "app", "globals.css"), "utf8");

const bodyFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata = {
  title: "Proposal Bot Dashboard",
  description: "Operational overview for the Telegram proposal bot"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: inlineStyles }} />
      </head>
      <body className={bodyFont.className}>
        {children}
      </body>
    </html>
  );
}
