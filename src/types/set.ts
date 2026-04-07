/** Location / designed space in the world of the film. */
export type FilmSet = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  symbolicMeaning: string;
  visualLogic: string;
  lightingTone: string;
  notes: string;
  image16x9: string;
  image2x1: string;
  linkedSceneIds: string[];
};
