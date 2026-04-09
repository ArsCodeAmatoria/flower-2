import type { ScriptSceneSelectionProps } from "./types";
import { stripScreenplayReaderMarkup } from "@/lib/screenplay-reader-markup";
import { cn } from "@/lib/utils";

export function BeatNav({ scenes, activeIndex, onSelectScene }: ScriptSceneSelectionProps) {
  return (
    <nav aria-label="Beats">
      <ul className="space-y-2">
        {scenes.map((s, idx) => {
          const active = idx === activeIndex;
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => onSelectScene(idx)}
                className={cn(
                  "w-full border-l-2 border-transparent py-1.5 pl-3 text-left text-[0.8125rem] transition-[color,border-color] duration-subtle ease-exhibition",
                  active
                    ? "border-accent/50 text-foreground"
                    : "text-muted-foreground hover:border-border/50 hover:text-foreground/95",
                )}
              >
                <span className="font-medium">{s.title}</span>
                <span className="mt-0.5 block text-[0.75rem] leading-snug text-muted-foreground">
                  {stripScreenplayReaderMarkup(s.beat)}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
