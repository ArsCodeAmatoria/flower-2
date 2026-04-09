import fs from "node:fs";
import path from "node:path";
import type { ArchiveImage } from "@/types/archive";

const ARCHIVE_DIR = path.join(process.cwd(), "public", "archive");

/**
 * Lists `/archive/*.png|jpg|webp` sorted lexicographically (matches 001, 002, …).
 * Server-only — do not import from client components.
 */
export function getArchiveImages(): ArchiveImage[] {
  if (!fs.existsSync(ARCHIVE_DIR)) return [];

  const files = fs
    .readdirSync(ARCHIVE_DIR)
    .filter((f) => !f.startsWith(".") && /\.(png|jpe?g|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

  return files.map((f, i) => {
    const base = f.replace(/\.[^.]+$/, "");
    return {
      src: `/archive/${f}`,
      label: base,
      index: i + 1,
    };
  });
}
