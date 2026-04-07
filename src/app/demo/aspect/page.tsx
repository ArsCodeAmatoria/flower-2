"use client";

import { useState } from "react";
import { AspectFrame } from "@/components/media/aspect-frame";
import { AspectToggle } from "@/components/media/aspect-toggle";
import type { AspectRatioPreset } from "@/lib/aspect";

/**
 * Minimal usage demo for `AspectFrame` + `AspectToggle`.
 * Visit `/demo/aspect` when the app is running.
 */
export default function AspectDemoPage() {
  const [ratio, setRatio] = useState<AspectRatioPreset>("16:9");
  const [readerRatio, setReaderRatio] = useState<AspectRatioPreset>("2:1");

  return (
    <div className="space-y-16 pb-16">
      <header className="space-y-3">
        <p className="page-label">DEMO / ASPECT</p>
        <h1 className="title-display text-display-lg">Cinematic aspect</h1>
        <p className="subtitle max-w-readable">
          One toggle drives the plate ratio. Below: a media-style fill (gradient stand-in for video
          or stills) and a document-style scroll area for script or prose.
        </p>
      </header>

      <section className="space-y-5" aria-labelledby="demo-media-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 id="demo-media-heading" className="section-heading text-xl md:text-2xl">
              Media surface
            </h2>
            <p className="text-xs text-muted-foreground">
              Use <code className="rounded bg-muted/80 px-1 py-0.5">variant=&quot;media&quot;</code>{" "}
              and <code className="rounded bg-muted/80 px-1 py-0.5">object-cover</code> on video or
              image.
            </p>
          </div>
          <AspectToggle value={ratio} onValueChange={setRatio} aria-label="Media aspect ratio" />
        </div>

        <AspectFrame ratio={ratio} variant="media" elevated>
          <div
            className="h-full w-full bg-gradient-to-br from-muted via-surface to-accent-subtle/40"
            role="img"
            aria-label="Placeholder projection"
          />
        </AspectFrame>
      </section>

      <div className="divider-quiet" aria-hidden />

      <section className="space-y-5" aria-labelledby="demo-doc-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 id="demo-doc-heading" className="section-heading text-xl md:text-2xl">
              Script / reader
            </h2>
            <p className="text-xs text-muted-foreground">
              <code className="rounded bg-muted/80 px-1 py-0.5">variant=&quot;document&quot;</code>{" "}
              enables an inner scroll region with the same aspect-driven silhouette.
            </p>
          </div>
          <AspectToggle
            value={readerRatio}
            onValueChange={setReaderRatio}
            aria-label="Reader aspect ratio"
          />
        </div>

        <AspectFrame ratio={readerRatio} variant="document" mat>
          <p className="mb-4 font-display text-lg text-foreground/90">INT. GALLERY — DAY</p>
          <p className="mb-3">
            Wall text sits inside the frame. The plate height follows the chosen ratio; overflow
            scrolls inside the matte, so long screenplay blocks stay contained without breaking the
            exhibition layout.
          </p>
          <p className="text-muted-foreground">
            FADE IN: a quiet cross-dissolve between 16∶9 and 2∶1 — slow, restrained, no gimmicks.
          </p>
        </AspectFrame>
      </section>
    </div>
  );
}
