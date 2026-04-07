import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Leckerli_One } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";

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

/** Home hero — chunky script (petal-adjacent curves), used only on key art */
const fontHeroPetals = Leckerli_One({
  subsets: ["latin"],
  variable: "--font-hero-petals",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Flower",
  description: "A cinematic exhibition for a film project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontHeroPetals.variable}`}
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
