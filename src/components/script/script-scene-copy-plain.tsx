"use client";

import { useCallback, useState } from "react";
import { stripScreenplayReaderMarkup } from "@/lib/screenplay-reader-markup";
import { stripLeadingDuplicateSlugline } from "@/lib/script-strip-slugline";
import type { ScriptScene } from "@/types";
import { cn } from "@/lib/utils";

export type ScriptSceneCopyPlainProps = {
  scene: ScriptScene;
  className?: string;
  /** Opens print / Save as PDF for this scene only (reader typography). */
  onDownloadScenePdf?: () => void;
};

/**
 * Copies the current scene as plain text (slugline + body) so Word and similar apps
 * keep normal spaces; browser HTML paste can still mis-handle styled paragraphs.
 */
export function ScriptSceneCopyPlain({ scene, className, onDownloadScenePdf }: ScriptSceneCopyPlainProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const onCopy = useCallback(async () => {
    const body = stripScreenplayReaderMarkup(
      stripLeadingDuplicateSlugline(scene.content.trim(), scene.heading),
    );
    const text = `${scene.heading.trim()}\n\n${body.trimEnd()}\n`;
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 2500);
    }
  }, [scene]);

  return (
    <div className={cn("space-y-2 border-t border-border/35 pt-4", className)}>
      <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Paste into Word
      </p>
      <button
        type="button"
        onClick={onCopy}
        className="w-full rounded-sm border border-border/50 bg-surface/25 px-3 py-2.5 text-left font-sans text-xs font-medium text-foreground transition-colors hover:border-border hover:bg-surface/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {status === "copied" ? "Copied plain text" : status === "error" ? "Copy blocked — try again" : "Copy scene as plain text"}
      </button>
      <p className="text-[0.7rem] leading-snug text-muted-foreground">
        Preserves spaces and line breaks from the manuscript. Prefer this if paste from the reader looks wrong.
      </p>

      {onDownloadScenePdf ? (
        <div className="space-y-2 border-t border-border/25 pt-4">
          <p className="text-center font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground/75">
            or
          </p>
          <button
            type="button"
            onClick={onDownloadScenePdf}
            aria-label="Open print dialog to save this scene as PDF"
            className="w-full rounded-sm border border-border/50 bg-surface/25 px-3 py-2.5 text-center font-sans text-xs font-medium text-foreground transition-colors hover:border-border hover:bg-surface/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Download scene as PDF
          </button>
          <p className="text-[0.7rem] leading-snug text-muted-foreground">
            Same typography as the reader—use Print → Save as PDF in the dialog.
          </p>
        </div>
      ) : null}
    </div>
  );
}
