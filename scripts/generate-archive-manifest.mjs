#!/usr/bin/env node
/**
 * Writes src/data/archive-manifest.json from public/archive filenames.
 * Keeps the /archive route off fs.readdir so Vercel does not bundle ~400MB of PNGs into the serverless function.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const archiveDir = path.join(__dirname, "..", "public", "archive");
const outFile = path.join(__dirname, "..", "src", "data", "archive-manifest.json");

let files = [];
if (fs.existsSync(archiveDir)) {
  files = fs
    .readdirSync(archiveDir)
    .filter((f) => !f.startsWith(".") && /\.(png|jpe?g|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
}

const payload = {
  generatedAt: new Date().toISOString(),
  files,
};

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, `${JSON.stringify(payload, null, 2)}\n`);

console.log(`archive-manifest.json: ${files.length} image(s)`);
