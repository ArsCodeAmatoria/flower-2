function trimLine(s: string) {
  return s.trim();
}

function normalizeSlug(s: string) {
  return s.replace(/\s+/g, " ").trim();
}

/**
 * When scene body repeats the scene heading as its first line, drop it so the slug
 * appears once (in the masthead) and action flows without a style clash.
 */
export function stripLeadingDuplicateSlugline(content: string, heading: string): string {
  const h = normalizeSlug(heading);
  if (!h) return content;

  const normalized = content.replace(/\r\n/g, "\n");
  const lines = normalized.split("\n");
  let i = 0;
  while (i < lines.length && trimLine(lines[i]) === "") i++;
  if (i >= lines.length) return content;

  const first = normalizeSlug(trimLine(lines[i]));
  if (first.toUpperCase() !== h.toUpperCase()) return content;

  i++;
  while (i < lines.length && trimLine(lines[i]) === "") i++;
  return lines.slice(i).join("\n").replace(/^\n+/, "");
}
