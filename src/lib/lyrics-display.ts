import { stripScreenplayReaderMarkup } from "@/lib/screenplay-reader-markup";

const SECTION_TAIL_SEP = " \u2014 "; // " — "

/**
 * Strip performance notes (everything after the first em dash) inside bracket
 * section labels so the reader sees e.g. `[VERSE 1]` not `[VERSE 1 — fast, witty (…)]`.
 */
export function simplifyLyricsSectionHeaders(text: string): string {
  return text.replace(/\[([^\]]+)\]/g, (full, inner: string) => {
    const idx = inner.indexOf(SECTION_TAIL_SEP);
    if (idx === -1) return full;
    const head = inner.slice(0, idx).trim();
    return `[${head.toUpperCase()}]`;
  });
}

/**
 * Lyrics reader: drop production-only staging tails and markdown-style emphasis.
 * Source `songs.ts` may keep [Staging — …] and ** for authoring.
 */
export function lyricsForDisplay(raw: string): string {
  const normalized = raw.replace(/\r\n/g, "\n");
  const stagingStart = normalized.search(/\n\s*\[Staging\s*—[^\]]+\]/);
  const withoutStaging = stagingStart === -1 ? normalized : normalized.slice(0, stagingStart).trimEnd();
  return simplifyLyricsSectionHeaders(
    stripScreenplayReaderMarkup(withoutStaging).trimEnd()
  );
}
