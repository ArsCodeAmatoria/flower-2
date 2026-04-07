import type { ReactNode } from "react";
import type { ScriptScene } from "@/types";
import { equalizerPresenceLabels } from "@/lib/equalizer-presence";

export type ScriptNotesProps = {
  scene: ScriptScene;
  /** Future: story department flags, continuity, version — renders below scene notes. */
  metadataSlot?: ReactNode;
  className?: string;
};

export function ScriptNotes({ scene, metadataSlot, className }: ScriptNotesProps) {
  return (
    <div className={className}>
      <div className="mb-4 rounded-sm border border-border/40 bg-surface/20 px-3 py-2.5">
        <p className="page-label mb-1.5 text-[0.58rem]">Bloom Equalizer (craft)</p>
        <p className="text-[0.8125rem] font-medium capitalize leading-snug text-foreground/90">
          {scene.equalizerPresence}
        </p>
        <p className="mt-1 text-[0.7rem] leading-relaxed text-muted-foreground">
          {equalizerPresenceLabels[scene.equalizerPresence]}
        </p>
      </div>
      <p className="text-[0.8125rem] leading-relaxed text-muted-foreground">{scene.notes}</p>
      {metadataSlot ? (
        <div className="mt-4 border-t border-border/40 pt-4 text-[0.8125rem] leading-relaxed text-muted-foreground">
          {metadataSlot}
        </div>
      ) : null}
    </div>
  );
}
