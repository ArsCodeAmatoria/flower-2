/**
 * Removes Markdown-style emphasis from manuscript strings for production-facing display
 * (reader, print, plain-text copy). Source data may keep ** / * / ` for authoring.
 *
 * - **bold** → plain
 * - *italic* → plain (single pair per match; no asterisks inside span)
 * - `inline code` → plain
 * - Stray ** left after uneven pairs → removed
 */

export function stripScreenplayReaderMarkup(text: string): string {
  let s = text.replace(/\r\n/g, "\n");
  let prev = "";
  while (s !== prev) {
    prev = s;
    s = s.replace(/\*\*([\s\S]*?)\*\*/g, "$1");
  }
  s = s.replace(/\*([^*\n]+)\*/g, "$1");
  s = s.replace(/`([^`\n]+)`/g, "$1");
  s = s.replace(/\*\*/g, "");
  return s;
}
