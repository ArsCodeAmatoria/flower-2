"use client";

import { useEffect, useId, useRef } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { FileText, Home, Landmark, Music, ScrollText, Users, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SiteNavItem } from "./site-nav";
import { isSiteNavActive } from "./site-nav";

const MOBILE_ICONS: Partial<Record<string, LucideIcon>> = {
  "/": Home,
  "/script": ScrollText,
  "/characters": Users,
  "/sets": Landmark,
  "/lyrics": Music,
  "/pdfs": FileText,
};

export type MobileNavSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: readonly SiteNavItem[];
  pathname: string;
};

/**
 * Full-height panel from the right — archive reading room, not an app drawer.
 */
export function MobileNavSheet({ open, onOpenChange, items, pathname }: MobileNavSheetProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 md:hidden",
        "transition-[visibility] duration-0",
        open ? "visible" : "invisible delay-200",
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close menu"
        className={cn(
          "absolute inset-0 bg-foreground/15 backdrop-blur-[2px] transition-opacity duration-300 ease-exhibition",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => onOpenChange(false)}
      />

      <div
        id="site-header-mobile-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "absolute right-0 top-0 flex h-full w-[min(100%,18.5rem)] flex-col border-l border-border/45 bg-background/98 shadow-frame-outer",
          "transition-transform duration-300 ease-exhibition",
          open ? "translate-x-0" : "pointer-events-none translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-border/35 px-5 py-4">
          <p id={titleId} className="page-label text-[0.6rem] tracking-[0.24em]">
            Index
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-sm p-2 text-muted-foreground transition-subtle hover:bg-muted/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Close navigation"
          >
            <X className="h-4 w-4" strokeWidth={1.5} aria-hidden />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-0.5 px-3 py-6" aria-label="Primary">
          {items.map((item) => {
            const active = isSiteNavActive(item.href, pathname);
            const Icon = MOBILE_ICONS[item.href];
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => onOpenChange(false)}
                className={cn(
                  "flex items-center gap-3 rounded-sm px-3 py-3 text-sm transition-subtle",
                  active
                    ? "bg-accent-subtle/50 text-foreground"
                    : "text-muted-foreground hover:bg-muted/40 hover:text-foreground/95",
                )}
              >
                {Icon ? (
                  <Icon className="h-4 w-4 shrink-0 opacity-45" strokeWidth={1.35} aria-hidden />
                ) : null}
                <span className={cn("font-medium tracking-wide", active && "text-foreground")}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <p className="border-t border-border/30 px-5 py-4 font-sans text-[0.625rem] leading-relaxed tracking-[0.04em] text-muted-foreground/90">
          Film archive &amp; exhibition
        </p>
      </div>
    </div>
  );
}
