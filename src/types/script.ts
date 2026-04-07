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
  notes: string;
  /** Scene body — fountain or prose treatment */
  content: string;
};
