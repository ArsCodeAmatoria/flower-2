import type { ScriptScene } from "@/types";

export type PageSceneCounterProps = {
  scene: ScriptScene;
  sceneIndex: number;
  totalScenes: number;
  /** Highest `pageEnd` in the draft (for span label). */
  draftMaxPage: number;
};

export function PageSceneCounter({
  scene,
  sceneIndex,
  totalScenes,
  draftMaxPage,
}: PageSceneCounterProps) {
  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Pages
        </p>
        <p className="font-sans text-foreground/90">
          This scene:{" "}
          <span className="tabular-nums">{scene.pageStart}</span>
          <span className="text-muted-foreground">–</span>
          <span className="tabular-nums">{scene.pageEnd}</span>
        </p>
        <p className="text-xs text-muted-foreground">
          Draft span: <span className="tabular-nums">1</span>
          <span className="text-muted-foreground">–</span>
          <span className="tabular-nums">{draftMaxPage}</span>
        </p>
      </div>
      <div className="space-y-1 border-t border-border/35 pt-4">
        <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Scenes
        </p>
        <p className="font-display text-lg tabular-nums text-foreground">
          {sceneIndex + 1} <span className="text-muted-foreground">/</span> {totalScenes}
        </p>
      </div>
    </div>
  );
}
