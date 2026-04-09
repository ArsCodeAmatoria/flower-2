#!/usr/bin/env node
/**
 * Renames files in public/archive to zero-padded ordinals (001.png, …).
 * Two-phase rename avoids collisions. Run from repo root: node scripts/rename-archive.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "public", "archive");

const files = fs
  .readdirSync(dir)
  .filter((f) => !f.startsWith(".") && /\.(png|jpe?g|webp)$/i.test(f))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

if (files.length === 0) {
  console.log("No images in public/archive.");
  process.exit(0);
}

const pad = Math.max(3, String(files.length).length);

files.forEach((f, idx) => {
  const ext = path.extname(f).toLowerCase();
  const tmp = `__tmp_${idx}__${ext.slice(1)}`;
  fs.renameSync(path.join(dir, f), path.join(dir, tmp));
});

const tmpFiles = fs
  .readdirSync(dir)
  .filter((f) => f.startsWith("__tmp_"))
  .sort((a, b) => {
    const na = Number.parseInt(a.match(/^__tmp_(\d+)__/)?.[1] ?? "0", 10);
    const nb = Number.parseInt(b.match(/^__tmp_(\d+)__/)?.[1] ?? "0", 10);
    return na - nb;
  });

tmpFiles.forEach((f, i) => {
  const m = f.match(/^__tmp_\d+__(.+)$/);
  const ext = m ? `.${m[1]}` : path.extname(f);
  const dest = `${String(i + 1).padStart(pad, "0")}${ext}`;
  fs.renameSync(path.join(dir, f), path.join(dir, dest));
});

console.log(`Renamed ${tmpFiles.length} file(s) to ${pad}-digit names in public/archive.`);
