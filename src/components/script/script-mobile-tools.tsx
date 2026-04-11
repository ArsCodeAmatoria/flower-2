"use client";

import { type ReactNode, useEffect, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutList, X } from "lucide-react";
import { formatActBlockNavLabel, sceneActBlock } from "@/lib/script-act-block";
import { flowerEase } from "@/lib/motion-presets";
import type { ScriptScene } from "@/types";
import { cn } from "@/lib/utils";

export type ScriptMobileToolsProps = {
  scene: ScriptScene;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
};

/**
 * Floating action + bottom sheet (max-lg) — opens the same tools as desktop sidebar; no persistent bar over the script.
 */
export function ScriptMobileTools({ scene, open, onOpenChange, children }: ScriptMobileToolsProps) {
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const close = () => {
      if (mq.matches) onOpenChange(false);
    };
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, [onOpenChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const actLabel = formatActBlockNavLabel(sceneActBlock(scene));

  return (
    <>
      <div
        className={cn(
          "script-mobile-tools-root pointer-events-none fixed bottom-0 right-0 z-40 lg:hidden",
          "pr-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2",
        )}
      >
        <button
          type="button"
          onClick={() => onOpenChange(true)}
          className={cn(
            "pointer-events-auto flex h-14 w-14 touch-manipulation items-center justify-center rounded-full",
            "border border-border/40 bg-background/92 shadow-frame-outer backdrop-blur-md",
            "supports-[backdrop-filter]:bg-background/85",
            "text-accent transition-subtle hover:bg-accent-subtle/30",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-label={`Script tools — ${actLabel}, scene ${scene.sceneNumber}: ${scene.title}`}
        >
          <LayoutList className="h-6 w-6 opacity-95" strokeWidth={1.5} aria-hidden />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <div className="fixed inset-0 z-50 lg:hidden" role="presentation">
            <motion.button
              type="button"
              aria-label="Close tools"
              className="absolute inset-0 bg-foreground/25 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => onOpenChange(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className={cn(
                "absolute bottom-0 left-0 right-0 flex max-h-[90dvh] flex-col",
                "rounded-t-2xl border border-border/40 border-b-0 bg-background shadow-frame-outer",
              )}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.34, ease: flowerEase }}
            >
              <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border/30 px-4 py-3">
                <h2 id={titleId} className="font-display text-base font-medium tracking-tight text-foreground">
                  Script tools
                </h2>
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className={cn(
                    "rounded-sm p-2 text-muted-foreground transition-subtle",
                    "hover:bg-muted/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  )}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>
              <div
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {children}
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
