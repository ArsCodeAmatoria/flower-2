import { songs } from "@/data/songs";
import type { Song } from "@/types/song";

/** Songs this character performs (see `performerSlugs` on each `Song`). */
export function songsForCharacterSlug(characterSlug: string): Song[] {
  return songs
    .filter((s) => s.performerSlugs?.includes(characterSlug))
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));
}
