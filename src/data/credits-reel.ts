import { project } from "@/data/project";

/**
 * Logline cut into three beats for the credits reel (story-first).
 * Keep in sync with `project.logline` when the logline changes.
 */
export const creditsLoglineSlides = [
  "In a perfectly synchronized flower district controlled by a system that forces everyone to “grow right,”",
  "a scentless girl whose presence causes the system to malfunction must stop trying to fit in and shut it down—",
  "revealing that she was never the problem, but the connection the world had been cut off from.",
] as const;

/** One short line under each billing card — story texture, not legal. */
export const creditsBillingStoryBridges = [
  "Harmony is the brand — until one girl can’t be scored.",
  "From treatment pages to the voices you hear in the halls.",
  "Motifs and cues still growing; arrangements to follow.",
] as const;

/** Synopsis → sentence beats for Act I–III texture in the reel. */
export function creditsSynopsisSlides(): readonly string[] {
  const parts = project.synopsis
    .trim()
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  return parts;
}

/** First index of the song cue cards (fixed front matter before `lyricSongs`). */
export const CREDITS_SONG_BLOCK_START_INDEX = 16;
