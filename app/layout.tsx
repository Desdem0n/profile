import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Michal Milke - Founder, ReviewAI",
  description:
    "Professional profile for Michal Milke, founder of ReviewAI and AI product builder for hospitality reputation workflows.",
  openGraph: {
    title: "Michal Milke - Founder, ReviewAI",
    description:
      "AI product founder helping hotels and restaurants answer Google reviews in 60 seconds.",
    images: [`${basePath}/reviewai-command-desk.png`]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
