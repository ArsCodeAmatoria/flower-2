import { songs } from "@/data/songs";
import type { Song } from "@/types/song";

/** Resolve ordered `Song` rows for a script scene’s `songSlugs` metadata. */
export function songsForScriptScene(songSlugs: string[] | undefined): Song[] {
  if (!songSlugs?.length) return [];
  return songSlugs
    .map((slug) => songs.find((s) => s.slug === slug))
    .filter((s): s is Song => s != null);
}
