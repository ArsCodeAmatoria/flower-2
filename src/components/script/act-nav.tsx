import type { ScriptActFilterProps } from "./types";
import {
  formatActBlockNavLabel,
  sceneActBlock,
  SCRIPT_ACT_BLOCK_ORDER,
} from "@/lib/script-act-block";
import { cn } from "@/lib/utils";

export function ActNav({ scenes, actFilter, onActFilter }: ScriptActFilterProps) {
  const usedBlocks = new Set(scenes.map((s) => sceneActBlock(s)));
  const blocks = SCRIPT_ACT_BLOCK_ORDER.filter((id) => usedBlocks.has(id));

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by act">
      <button
        type="button"
        onClick={() => onActFilter(null)}
        className={cn(
          "rounded-sm border px-2.5 py-1 font-sans text-[0.65rem] font-medium uppercase tracking-wider",
          "transition-[color,background-color,border-color,opacity] duration-subtle ease-exhibition",
          actFilter === null
            ? "border-accent/35 bg-accent-subtle/38 text-foreground"
            : "border-border/45 text-muted-foreground hover:border-border/55 hover:text-foreground/95",
        )}
      >
        All
      </button>
      {blocks.map((id) => (
        <button
          key={id}
          type="button"
          onClick={() => onActFilter(id)}
          className={cn(
            "rounded-sm border px-2.5 py-1 font-sans text-[0.65rem] font-medium uppercase tracking-wider",
            "transition-[color,background-color,border-color,opacity] duration-subtle ease-exhibition",
            actFilter === id
              ? "border-accent/35 bg-accent-subtle/38 text-foreground"
              : "border-border/45 text-muted-foreground hover:border-border/55 hover:text-foreground/95",
          )}
        >
          {formatActBlockNavLabel(id)}
        </button>
      ))}
    </div>
  );
}
