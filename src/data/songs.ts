import type { Song } from "@/types/song";

/**
 * Lyrics + audio for `/lyrics`.
 * Masters live in `public/songs/` — filenames must match `audioSrc` (spaces OK).
 */
export const songs: Song[] = [
  {
    id: "song-std",
    slug: "squeeze-the-day",
    code: "STD",
    title: "Squeeze the Day",
    credit: "Performed by Lemon · Flower",
    audioSrc: "/songs/STD.wav",
    lyrics: `[Vocal — transcribe from master]

Squeeze the Day · Lemon’s track — B-story / fun-games energy.`,
  },
  {
    id: "song-lam",
    slug: "look-at-me",
    code: "LAM",
    title: "Look at Me",
    credit: "Performed by Narcissa · Flower",
    audioSrc: "/songs/LAM.wav",
    lyrics: `[Vocal — transcribe from master]

Look at Me · Narcissa — image / Bloom Festival peak.`,
  },
  {
    id: "song-red-magic",
    slug: "red-magic",
    title: "Red Magic",
    credit: "Performed by Rose · Flower",
    audioSrc: "/songs/RED MAGIC.wav",
    lyrics: `[Vocal — transcribe from master]

Red Magic · Rose — protagonist emotional spine.`,
  },
  {
    id: "song-just-fit-in",
    slug: "just-fit-in",
    title: "Just Fit In",
    credit: "Performed by Daisy · Flower",
    audioSrc: "/songs/JUST FIT IN.wav",
    lyrics: `[Vocal — transcribe from master]

Just Fit In · Daisy — grow-right / stability pressure.`,
  },
  {
    id: "song-equalize-bloom",
    slug: "equalize-the-bloom",
    title: "Equalize the Bloom",
    credit: "Performed by Edelweiss · Flower",
    audioSrc: "/songs/EQUALIZE THE BLOOM.wav",
    lyrics: `[Vocal — transcribe from master]

Equalize the Bloom · Edelweiss — system / ideology voice.`,
  },
  {
    id: "song-flower-opening",
    slug: "flower-opening",
    title: "Flower",
    credit: "End credits · Flower (3).wav",
    audioSrc: "/songs/Flower (3).wav",
    lyrics: `[Opening credits]\n\nTimed to the home page reel — same model as the \`flower\` prototype site.`,
  },
];
