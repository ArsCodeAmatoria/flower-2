import type { ScriptSceneSelectionProps } from "./types";
import { cn } from "@/lib/utils";

export type SceneNavProps = ScriptSceneSelectionProps & {
  actFilter: number | null;
};

export function SceneNav({ scenes, activeIndex, onSelectScene, actFilter }: SceneNavProps) {
  const filtered = actFilter === null ? scenes : scenes.filter((s) => s.act === actFilter);

  return (
    <nav aria-label="Scenes">
      <ul className="space-y-1">
        {filtered.map((s) => {
          const idx = scenes.indexOf(s);
          const active = idx === activeIndex;
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => onSelectScene(idx)}
                className={cn(
                  "relative w-full rounded-sm px-2 py-2 text-left font-sans text-[0.8125rem]",
                  "transition-[color,background-color,box-shadow] duration-subtle ease-exhibition",
                  active
                    ? "bg-accent-subtle/45 text-foreground shadow-[inset_2px_0_0_0_hsl(var(--accent)/0.48)]"
                    : "text-muted-foreground hover:bg-muted/32 hover:text-foreground/95",
                )}
              >
                <span className="font-medium text-foreground/90">{s.title}</span>
                <span className="mt-0.5 block text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                  {s.act}.{s.sceneNumber}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
