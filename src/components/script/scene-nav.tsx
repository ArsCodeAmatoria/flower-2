import type { ScriptSceneSelectionProps } from "./types";
import type { ScriptActBlockId } from "@/lib/script-act-block";
import {
  formatActBlockNavLabel,
  sceneActBlock,
  SCRIPT_ACT_BLOCK_ORDER,
} from "@/lib/script-act-block";
import { cn } from "@/lib/utils";

export type SceneNavProps = ScriptSceneSelectionProps & {
  actFilter: ScriptActBlockId | null;
};

function sceneRows(
  scenes: ScriptSceneSelectionProps["scenes"],
  activeIndex: number,
  onSelectScene: ScriptSceneSelectionProps["onSelectScene"],
  subset: ScriptSceneSelectionProps["scenes"],
) {
  return subset.map((s) => {
    const idx = scenes.indexOf(s);
    const active = idx === activeIndex;
    const block = sceneActBlock(s);
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
            {formatActBlockNavLabel(block)} · Scene {s.sceneNumber}
          </span>
        </button>
      </li>
    );
  });
}

export function SceneNav({ scenes, activeIndex, onSelectScene, actFilter }: SceneNavProps) {
  if (actFilter !== null) {
    const filtered = scenes.filter((s) => sceneActBlock(s) === actFilter);
    return (
      <nav aria-label="Scenes">
        <ul className="space-y-1">{sceneRows(scenes, activeIndex, onSelectScene, filtered)}</ul>
      </nav>
    );
  }

  return (
    <nav aria-label="Scenes by act">
      <ul className="space-y-6">
        {SCRIPT_ACT_BLOCK_ORDER.map((blockId) => {
          const inBlock = scenes.filter((s) => sceneActBlock(s) === blockId);
          if (!inBlock.length) return null;
          return (
            <li key={blockId} className="list-none">
              <p className="page-label mb-2.5">{formatActBlockNavLabel(blockId)}</p>
              <ul className="space-y-1">{sceneRows(scenes, activeIndex, onSelectScene, inBlock)}</ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
