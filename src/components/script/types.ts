import type { Character, FilmSet, ScriptScene } from "@/types";
import type { ScriptActBlockId } from "@/lib/script-act-block";

export type ScriptExperienceProps = {
  scenes: ScriptScene[];
  characters: Character[];
  sets: FilmSet[];
};

export type ScriptSceneSelectionProps = {
  scenes: ScriptScene[];
  activeIndex: number;
  onSelectScene: (index: number) => void;
};

export type ScriptActFilterProps = {
  scenes: ScriptScene[];
  actFilter: ScriptActBlockId | null;
  onActFilter: (act: ScriptActBlockId | null) => void;
};

export type ScriptContextPanelProps = {
  scene: ScriptScene;
  characters: Character[];
  sets: FilmSet[];
};
