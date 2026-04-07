"use client";

import type { ReactNode, Ref } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { AspectRatioPreset } from "@/lib/aspect";
import { aspectRatioTailwindClass } from "@/lib/aspect";
import { flower, flowerEase } from "@/lib/motion-presets";

export type AspectFrameVariant = "media" | "document";

export type AspectFrameProps = {
  ratio: AspectRatioPreset;
  children?: ReactNode;
  className?: string;
  variant?: AspectFrameVariant;
  contentClassName?: string;
  mat?: boolean;
  elevated?: boolean;
  documentScrollRef?: Ref<HTMLDivElement>;
};

/**
 * Cinematic aspect container — `layout` animates ratio changes with calm easing.
 */
export function AspectFrame({
  ratio,
  children,
  className,
  variant = "media",
  contentClassName,
  mat = true,
  elevated = false,
  documentScrollRef,
}: AspectFrameProps) {
  const aspectClass = aspectRatioTailwindClass(ratio);

  return (
    <motion.div
      layout
      className={cn(
        "frame-cinematic w-full overflow-hidden",
        elevated && "frame-cinematic--lift",
        aspectClass,
        className,
      )}
      transition={{
        layout: {
          duration: flower.layout.duration,
          ease: flowerEase,
        },
      }}
    >
      {variant === "document" ? (
        <div
          ref={documentScrollRef}
          className={cn(
            "relative z-0 h-full min-h-0 w-full overflow-auto overscroll-contain",
            "bg-surface/40 px-5 py-5 md:px-7 md:py-6",
            "font-sans text-sm leading-relaxed text-foreground/90",
            contentClassName,
          )}
        >
          {children}
        </div>
      ) : (
        <div
          className={cn(
            "relative z-0 h-full min-h-0 w-full",
            contentClassName,
          )}
        >
          <div className="absolute inset-0 min-h-0 min-w-0">{children}</div>
        </div>
      )}

      {mat ? <span className="frame-cinematic__mat" aria-hidden /> : null}
    </motion.div>
  );
}
