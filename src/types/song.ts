/** Song / cue for the lyrics reader — audio may live in `public/songs` or any URL. */
export type Song = {
  id: string;
  slug: string;
  title: string;
  /** Short catalogue tag (e.g. STD, LAM) — shown in the track list */
  code?: string;
  /** Composer, performer, or rights note */
  credit: string;
  /** Plain text lyrics (line breaks preserved) */
  lyrics: string;
  /** Public URL or path under `public/` (e.g. `/songs/theme.mp3`) */
  audioSrc: string | null;
};
