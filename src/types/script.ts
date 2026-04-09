/** Single screenplay scene with exhibition metadata. */
export type ScriptScene = {
  id: string;
  act: number;
  sceneNumber: string;
  title: string;
  slug: string;
  /** Full scene heading line, e.g. INT. GREENHOUSE — NIGHT */
  heading: string;
  pageStart: number;
  pageEnd: number;
  /** Dramatic beat label */
  beat: string;
  summary: string;
  /** Character ids appearing on stage */
  characters: string[];
  /** Set id this scene primarily inhabits, or null for liminal / montage */
  setId: string | null;
  /**
   * Song catalogue slugs (`src/data/songs.ts`) featured in this scene — drives sidebar audio on `/script`.
   */
  songSlugs?: string[];
  /**
   * Bloom Equalizer as a **craft** dial — not plot canon. Limits “machine always on” fatigue.
   * - `on`: foreground hum / pulse / stabilization beats justified
   * - `implied`: district habits + social pressure; device texture stays background
   * - `off`: no Equalizer grammar — relational, natural, or aftermath
   */
  equalizerPresence: "on" | "implied" | "off";
  notes: string;
  /** Scene body — fountain or prose treatment */
  content: string;
};
