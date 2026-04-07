"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { flowerEase } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";
import { MobileNavSheet } from "./mobile-nav-sheet";
import { SITE_NAV, isSiteNavActive } from "./site-nav";

export type { SiteNavItem } from "./site-nav";
export { SITE_NAV, isSiteNavActive } from "./site-nav";

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        className="sticky top-0 z-40 border-b border-border/45 bg-background/88 backdrop-blur-md supports-[backdrop-filter]:bg-background/72"
        initial={{ opacity: 0.96 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: flowerEase }}
      >
        <div className="flower-container flex min-h-[3.5rem] items-center justify-between gap-4 py-1 sm:min-h-16 sm:py-1.5">
          <div className="flex min-w-0 flex-1 items-center gap-8 md:gap-10">
            <Link
              href="/"
              className="font-logo text-[1.875rem] font-bold leading-[0.95] tracking-normal text-foreground transition-subtle hover:text-foreground/85 sm:text-[2.25rem] md:text-[2.375rem]"
            >
              Flower
            </Link>

            <nav
              className="hidden items-center gap-1 md:flex"
              aria-label="Primary"
            >
              {SITE_NAV.map((item) => {
                const active = isSiteNavActive(item.href, pathname);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-3 py-1.5 font-sans text-[0.8125rem] font-medium tracking-[0.02em] transition-subtle",
                      active
                        ? "text-foreground after:absolute after:inset-x-3 after:-bottom-px after:h-px after:bg-accent/55"
                        : "text-muted-foreground hover:text-foreground/92",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <p className="page-label hidden text-[0.6rem] tracking-[0.24em] sm:block">Archive</p>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-border/45 bg-surface/35 text-muted-foreground transition-subtle hover:border-border/60 hover:bg-muted/35 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="site-header-mobile-panel"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileNavSheet
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        items={SITE_NAV}
        pathname={pathname}
      />
    </>
  );
}
