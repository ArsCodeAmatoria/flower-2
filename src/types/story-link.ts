/** Cross-link between script, characters, and sets (exhibition navigation). */
export type StoryLink = {
  id: string;
  href: string;
  title: string;
  /** Small caps line above title — act/scene, role, category, etc. */
  meta?: string;
};
