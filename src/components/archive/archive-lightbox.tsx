"use client";

import { useCallback, useEffect, useId, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ArchiveImage } from "@/types/archive";
import { flowerEase } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

export type ArchiveLightboxProps = {
  images: readonly ArchiveImage[];
  openIndex: number | null;
  onOpenChange: (index: null | number) => void;
};

export function ArchiveLightbox({ images, openIndex, onOpenChange }: ArchiveLightboxProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = openIndex !== null && openIndex >= 0 && openIndex < images.length;
  const current = open ? images[openIndex]! : null;
  const total = images.length;

  const go = useCallback(
    (delta: number) => {
      if (openIndex === null || total === 0) return;
      const next = (openIndex + delta + total) % total;
      onOpenChange(next);
    },
    [openIndex, onOpenChange, total],
  );

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
      if (e.key === "Escape") onOpenChange(null);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange, go]);

  return (
    <AnimatePresence>
      {open && current ? (
        <motion.div
          key="archive-lightbox"
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close viewer"
            className="absolute inset-0 bg-foreground/35 backdrop-blur-[3px]"
            onClick={() => onOpenChange(null)}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={cn(
              "relative z-[61] flex max-h-[min(96dvh,100vh)] w-full max-w-5xl flex-col overflow-hidden",
              "rounded-panel border border-border/40 bg-background shadow-frame-outer",
            )}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.28, ease: flowerEase }}
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex shrink-0 items-center justify-between gap-3 border-b border-border/30 px-4 py-3 sm:px-5">
              <p id={titleId} className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <span className="text-foreground">{current.label}</span>
                <span className="text-muted-foreground/80"> · </span>
                {openIndex! + 1} / {total}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={() => onOpenChange(null)}
                className={cn(
                  "rounded-sm p-2 text-muted-foreground transition-subtle",
                  "hover:bg-muted/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                )}
                aria-label="Close"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </header>

            <div className="relative min-h-0 flex-1 bg-muted/15 p-3 sm:p-5">
              <div className="relative flex max-h-[min(78dvh,80vh)] min-h-[12rem] items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element -- variable aspect ratio scrapbook */}
                <img
                  src={current.src}
                  alt={`Archive ${current.label}`}
                  className="max-h-[min(78dvh,80vh)] max-w-full object-contain"
                  decoding="async"
                />
              </div>
            </div>

            <footer className="flex shrink-0 items-center justify-between gap-2 border-t border-border/30 px-3 py-3 sm:px-5">
              <button
                type="button"
                onClick={() => go(-1)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-sm border border-border/40 px-3 py-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em]",
                  "text-foreground/90 transition-subtle hover:border-accent/35 hover:bg-accent-subtle/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                )}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                Prev
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-sm border border-border/40 px-3 py-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em]",
                  "text-foreground/90 transition-subtle hover:border-accent/35 hover:bg-accent-subtle/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                )}
                aria-label="Next image"
              >
                Next
                <ChevronRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              </button>
            </footer>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
