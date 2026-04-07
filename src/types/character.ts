export type Character = {
  id: string;
  slug: string;
  name: string;
  role: string;
  archetype: string;
  desire: string;
  flaw: string;
  lie: string;
  truth: string;
  arc: string;
  speechPattern: string;
  notes: string;
  /** Mood / colour-in-light when this character’s pressure leads the room (see project visual grammar) */
  moodLighting?: string;
  /** Key art or plate reference — 16∶9 exhibition frame */
  image16x9: string;
  /** Wider plate — 2∶1 */
  image2x1: string;
  linkedSceneIds: string[];
  linkedSetIds: string[];
};
