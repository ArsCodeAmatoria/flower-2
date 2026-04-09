"use client";

import { useEffect, useId, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { flowerEase } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

export type ExhibitionImageLightboxProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  src: string;
  alt: string;
  /** Primary line in the chrome (e.g. character or set name) */
  title: string;
  /** Optional second line (e.g. aspect ratio label) */
  subtitle?: string;
};

/**
 * Full-viewer overlay for a single still — Escape, backdrop click, focus return.
 */
export function ExhibitionImageLightbox({
  open,
  onOpenChange,
  src,
  alt,
  title,
  subtitle,
}: ExhibitionImageLightboxProps) {
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
    <AnimatePresence>
      {open ? (
        <motion.div
          key="exhibition-image-lightbox"
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
            onClick={() => onOpenChange(false)}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={cn(
              "relative z-[61] flex max-h-[min(96dvh,100vh)] w-full max-w-6xl flex-col overflow-hidden",
              "rounded-panel border border-border/40 bg-background shadow-frame-outer",
            )}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.28, ease: flowerEase }}
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex shrink-0 items-center justify-between gap-3 border-b border-border/30 px-4 py-3 sm:px-5">
              <div>
                <p id={titleId} className="font-display text-base font-medium tracking-tight text-foreground sm:text-lg">
                  {title}
                </p>
                {subtitle ? (
                  <p className="mt-0.5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {subtitle}
                  </p>
                ) : null}
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => onOpenChange(false)}
                className={cn(
                  "rounded-sm p-2 text-muted-foreground transition-subtle",
                  "hover:bg-muted/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                )}
                aria-label="Close"
              >
                <X className="h-5 w-5" strokeWidth={1.333} />
              </button>
            </header>

            <div className="relative min-h-0 flex-1 bg-muted/15 p-3 sm:p-6">
              <div className="relative flex max-h-[min(82dvh,88vh)] min-h-[12rem] items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  className="max-h-[min(82dvh,88vh)] max-w-full object-contain"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
