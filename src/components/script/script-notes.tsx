import type { ReactNode } from "react";
import type { ScriptScene } from "@/types";

export type ScriptNotesProps = {
  scene: ScriptScene;
  /** Future: story department flags, continuity, version — renders below scene notes. */
  metadataSlot?: ReactNode;
  className?: string;
};

export function ScriptNotes({ scene, metadataSlot, className }: ScriptNotesProps) {
  return (
    <div className={className}>
      <p className="text-[0.8125rem] leading-relaxed text-muted-foreground">{scene.notes}</p>
      {metadataSlot ? (
        <div className="mt-4 border-t border-border/40 pt-4 text-[0.8125rem] leading-relaxed text-muted-foreground">
          {metadataSlot}
        </div>
      ) : null}
    </div>
  );
}
