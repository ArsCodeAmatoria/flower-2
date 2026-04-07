/**
 * Build a safe URL for files in `public/` when the filename has spaces or
 * parentheses (e.g. `Flower (3).wav`). Per-segment encoding avoids flaky
 * `Audio` / `<audio>` loads on some hosts.
 */
export function publicAudioUrl(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;
  const trimmed = path.replace(/^\/+/, "");
  if (!trimmed) return "/";
  const segments = trimmed.split("/").map((segment) => encodeURIComponent(segment));
  return `/${segments.join("/")}`;
}
