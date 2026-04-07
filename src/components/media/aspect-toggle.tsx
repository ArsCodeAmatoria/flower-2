"use client";

import { LayoutGroup, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { AspectRatioPreset } from "@/lib/aspect";
import { ASPECT_TOGGLE_OPTIONS } from "@/lib/aspect";
import { flower, flowerEase } from "@/lib/motion-presets";

export type AspectToggleProps = {
  value: AspectRatioPreset;
  onValueChange: (value: AspectRatioPreset) => void;
  className?: string;
  disabled?: boolean;
  /** Accessible label for the radiogroup. */
  "aria-label"?: string;
};

/**
 * Segmented aspect control — active segment glides between options (tween, no spring bounce).
 */
export function AspectToggle({
  value,
  onValueChange,
  className,
  disabled = false,
  "aria-label": ariaLabel = "Aspect ratio",
}: AspectToggleProps) {
  return (
    <LayoutGroup id="flower-aspect-toggle">
      <div
        role="radiogroup"
        aria-label={ariaLabel}
        className={cn(
          "relative inline-flex h-9 items-center rounded-sm border border-border/50 bg-muted/40 p-0.5 text-muted-foreground shadow-frame-inset",
          "ring-offset-background",
          className,
        )}
      >
        {ASPECT_TOGGLE_OPTIONS.map((opt) => {
          const selected = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={selected}
              disabled={disabled}
              onClick={() => onValueChange(opt.value)}
              className={cn(
                "relative z-0 inline-flex min-w-[3.25rem] items-center justify-center rounded-[calc(var(--radius-panel)-3px)] px-3 py-1",
                "font-sans text-xs font-medium tracking-[0.03em]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                "disabled:pointer-events-none disabled:opacity-40",
                selected ? "text-foreground" : "text-muted-foreground hover:text-foreground/90",
              )}
            >
              {selected ? (
                <motion.span
                  layoutId="flower-aspect-pill"
                  className="absolute inset-0 z-0 rounded-[calc(var(--radius-panel)-3px)] bg-background/95 shadow-[inset_0_1px_0_0_hsl(var(--foreground)/0.04)]"
                  transition={{
                    duration: flower.hover.duration,
                    ease: flowerEase,
                  }}
                />
              ) : null}
              <span className="relative z-10">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
