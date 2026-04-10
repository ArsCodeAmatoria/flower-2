import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Orbitron, Style_Script } from "next/font/google";
import "./globals.css";
import { SiteColophon } from "@/components/layout/site-colophon";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeInitScript } from "@/components/layout/theme-init-script";
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

const fontFuture = Orbitron({
  subsets: ["latin"],
  variable: "--font-future",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: getMetadataBaseUrl(),
  title: {
    default: "Flower",
    template: "%s · Flower",
  },
  description: SITE_DESCRIPTION,
  icons: {
    /** `src/app/icon.svg` — avoid `/favicon.ico` unless `public/favicon.ico` exists (breaks `next build`). */
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
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
  authors: [{ name: "Kojin Fox" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontLogo.variable} ${fontFuture.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col bg-background text-foreground antialiased">
        <ThemeInitScript />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:border focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:shadow-frame-outer"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main
          id="main-content"
          className="flower-container flex flex-1 flex-col pt-11 md:pt-14 lg:pt-16"
          tabIndex={-1}
        >
          <div className="flex min-h-0 flex-1 flex-col">{children}</div>
          <SiteColophon />
        </main>
      </body>
    </html>
  );
}
