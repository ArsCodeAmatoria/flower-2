/** Top-level Flower film / exhibition record. */
export type Project = {
  id: string;
  slug: string;
  title: string;
  logline: string;
  synopsis: string;
  genre: string;
  tone: string;
  /** Curatorial tags for the exhibition shell */
  themes: string[];
  /** Production / exhibition status line */
  phase?: string;
  /** Homepage sidebar — how this site serves the film (script, songs, dossiers, etc.) */
  exhibitionIntro?: string;
  /** Rose + Lemon thread — one sentence for draft alignment (script sidebar Context tab). */
  bStoryQuestion?: string;
  /** Save the Cat — single spine line the film argues with (script sidebar Context tab). */
  themeStated?: string;
  /** Rose’s outer want — repeatable I-want spine (script sidebar Context tab). */
  protagonistWant?: string;
  /** McKee/format pilot — scenes to polish first (script sidebar Context tab). */
  craftPilotScenes?: string;
  /** Concrete stakes — world remembers the fault until it doesn’t (writer alignment). */
  concreteStakes?: string;
  /** Where audience pride in Rose is designed to land (script sidebar — writer alignment). */
  audiencePrideBeats?: string;
};
