import "./globals.css";
import { Poppins } from "next/font/google";

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
      <body className={bodyFont.className}>
        {children}
      </body>
    </html>
  );
}
