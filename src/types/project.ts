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
};
