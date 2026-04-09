"use client";

import { type ReactNode, useEffect, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PanelRight, X } from "lucide-react";
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
 * Sticky scene strip + bottom sheet (max-lg) — mirrors desktop sidebar without burying tools below the script.
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
          "script-mobile-tools-root pointer-events-none fixed inset-x-0 bottom-0 z-40 lg:hidden",
          "pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2",
        )}
      >
        <div className="pointer-events-auto mx-auto max-w-exhibition px-4">
          <div
            className={cn(
              "flex items-stretch gap-2 rounded-panel border border-border/40 bg-background/92 shadow-frame-outer backdrop-blur-md",
              "supports-[backdrop-filter]:bg-background/85",
            )}
          >
            <div className="min-w-0 flex-1 px-3 py-2.5">
              <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {actLabel} · Scene {scene.sceneNumber}
              </p>
              <p className="mt-0.5 truncate font-display text-[0.95rem] font-medium leading-snug text-foreground">
                {scene.title}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenChange(true)}
              className={cn(
                "flex shrink-0 items-center gap-1.5 border-l border-border/35 px-3.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.16em]",
                "text-accent transition-subtle hover:bg-accent-subtle/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              )}
              aria-expanded={open}
              aria-haspopup="dialog"
            >
              <PanelRight className="h-4 w-4 opacity-90" strokeWidth={1.5} aria-hidden />
              Tools
            </button>
          </div>
        </div>
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
