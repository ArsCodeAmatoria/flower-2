import type { Character, FilmSet, ScriptScene } from "@/types";

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
  actFilter: number | null;
  onActFilter: (act: number | null) => void;
};

export type ScriptContextPanelProps = {
  scene: ScriptScene;
  characters: Character[];
  sets: FilmSet[];
};
