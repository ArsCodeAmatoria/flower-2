import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Style_Script } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { HOME_OG_IMAGE, SITE_DESCRIPTION, getMetadataBaseUrl } from "@/lib/site-metadata";

const fontDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600"],
});

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const fontLogo = Style_Script({
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: getMetadataBaseUrl(),
  title: {
    default: "Flower",
    template: "%s · Flower",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Flower",
    title: "Flower",
    description: SITE_DESCRIPTION,
    images: [{ url: HOME_OG_IMAGE, alt: "Rose — Flower" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flower",
    description: SITE_DESCRIPTION,
    images: [HOME_OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontLogo.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:border focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:shadow-frame-outer"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flower-container py-11 pb-14 md:py-14 lg:py-16" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}
