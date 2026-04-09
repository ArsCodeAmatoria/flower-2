"use client";

import { useState } from "react";
import type { ArchiveImage } from "@/types/archive";
import { ArchiveLightbox } from "./archive-lightbox";
import { cn } from "@/lib/utils";

export type ArchiveScrapbookProps = {
  images: readonly ArchiveImage[];
  className?: string;
};

/**
 * Loose grid of natural-aspect thumbnails; opens shared lightbox on activate.
 */
export function ArchiveScrapbook({ images, className }: ArchiveScrapbookProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No images in <code className="font-mono text-xs">public/archive</code> yet.
      </p>
    );
  }

  return (
    <div className={cn("space-y-8", className)}>
      <ul
        className="grid list-none grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6"
        aria-label="Archive thumbnails"
      >
        {images.map((img, i) => (
          <li key={img.src} className="min-w-0">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className={cn(
                "group w-full text-left transition-subtle",
                "rounded-panel border border-border/35 bg-surface/20 shadow-frame-inset",
                "hover:border-accent/30 hover:bg-accent-subtle/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              )}
              aria-label={`Open archive image ${img.label}, ${i + 1} of ${images.length}`}
            >
              <div className="overflow-hidden rounded-t-[calc(var(--radius-panel)-1px)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt=""
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-contain transition-transform duration-300 ease-exhibition group-hover:scale-[1.02]"
                />
              </div>
              <p className="border-t border-border/25 px-2 py-2 font-sans text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {img.label}
              </p>
            </button>
          </li>
        ))}
      </ul>

      <ArchiveLightbox images={images} openIndex={openIndex} onOpenChange={setOpenIndex} />
    </div>
  );
}
