import type { ScriptActFilterProps } from "./types";
import { cn } from "@/lib/utils";

function uniqueActs(scenes: ScriptActFilterProps["scenes"]): number[] {
  return [...new Set(scenes.map((s) => s.act))].sort((a, b) => a - b);
}

export function ActNav({ scenes, actFilter, onActFilter }: ScriptActFilterProps) {
  const acts = uniqueActs(scenes);

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
      {acts.map((a) => (
        <button
          key={a}
          type="button"
          onClick={() => onActFilter(a)}
          className={cn(
            "rounded-sm border px-2.5 py-1 font-sans text-[0.65rem] font-medium uppercase tracking-wider",
            "transition-[color,background-color,border-color,opacity] duration-subtle ease-exhibition",
            actFilter === a
              ? "border-accent/35 bg-accent-subtle/38 text-foreground"
              : "border-border/45 text-muted-foreground hover:border-border/55 hover:text-foreground/95",
          )}
        >
          Act {a}
        </button>
      ))}
    </div>
  );
}
