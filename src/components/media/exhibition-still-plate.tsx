"use client";

import { useId, useState } from "react";
import { AspectFrame } from "@/components/media/aspect-frame";
import { AspectToggle } from "@/components/media/aspect-toggle";
import { ExhibitionImageLightbox } from "@/components/media/exhibition-image-lightbox";
import type { AspectRatioPreset } from "@/lib/aspect";
import { cn } from "@/lib/utils";

export type ExhibitionStillPlateProps = {
  /** Display subject — alt text and fallback monogram */
  subjectName: string;
  image16x9: string;
  image2x1: string;
  /** Small caps line above the frame (e.g. Still, Environment) */
  kicker: string;
  /** Muted caption under the kicker */
  caption: string;
  /** Passed to the aspect toggle radiogroup */
  aspectToggleAriaLabel: string;
  /** Detail pages: click plate to open full-size lightbox (index cards stay link-only). */
  lightbox?: boolean;
  className?: string;
};

/**
 * Shared 16∶9 / 2∶1 still plate for character dossiers and set pages.
 */
export function ExhibitionStillPlate({
  subjectName,
  image16x9,
  image2x1,
  kicker,
  caption,
  aspectToggleAriaLabel,
  lightbox = false,
  className,
}: ExhibitionStillPlateProps) {
  const headingId = useId();
  const [ratio, setRatio] = useState<AspectRatioPreset>("16:9");
  const [failed16, setFailed16] = useState(false);
  const [failed21, setFailed21] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const src = ratio === "16:9" ? image16x9 : image2x1;
  const failed = ratio === "16:9" ? failed16 : failed21;
  const ratioLabel = ratio === "16:9" ? "16∶9" : "2∶1";

  return (
    <section
      className={cn("space-y-5", className)}
      aria-labelledby={headingId}
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1" id={headingId}>
          <p className="page-label">{kicker}</p>
          <p className="font-sans text-xs text-muted-foreground">{caption}</p>
        </div>
        <AspectToggle value={ratio} onValueChange={setRatio} aria-label={aspectToggleAriaLabel} />
      </div>

      <AspectFrame ratio={ratio} variant="media" elevated mat>
        <div className="relative h-full min-h-0 w-full">
          {!failed ? (
            <>
              <img
                src={src}
                alt={`${subjectName} — ${ratioLabel} reference plate`}
                className="absolute inset-0 h-full w-full object-cover object-center"
                onError={() => (ratio === "16:9" ? setFailed16(true) : setFailed21(true))}
              />
              {lightbox ? (
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className={cn(
                    "absolute inset-0 z-[5] cursor-zoom-in bg-transparent",
                    "transition-colors hover:bg-foreground/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  )}
                  aria-label={`View larger — ${subjectName}`}
                />
              ) : null}
            </>
          ) : null}
          {failed ? (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-muted via-surface to-accent-subtle/30"
              aria-hidden
            >
              <span className="font-display text-5xl font-medium text-foreground/12">
                {subjectName.slice(0, 1)}
              </span>
              <span className="page-label text-[0.55rem] opacity-60">Image unavailable</span>
            </div>
          ) : null}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/[0.12] via-transparent to-transparent opacity-70"
            aria-hidden
          />
        </div>
      </AspectFrame>

      {lightbox && !failed ? (
        <ExhibitionImageLightbox
          open={lightboxOpen}
          onOpenChange={setLightboxOpen}
          src={src}
          alt={`${subjectName} — ${ratioLabel} reference plate`}
          title={subjectName}
          subtitle={`Reference plate · ${ratioLabel}`}
        />
      ) : null}
    </section>
  );
}
