/**
 * Lightweight screenplay line classifier for exhibition reader (not a full Fountain engine).
 */

export type ScreenplayDialoguePart =
  | { type: "paren"; text: string }
  | { type: "line"; text: string };

export type ScreenplayBlock =
  | { type: "transition"; text: string }
  | { type: "action"; lines: string[] }
  | { type: "dialogue"; character: string; parts: ScreenplayDialoguePart[] };

function trimLine(s: string) {
  return s.trim();
}

function isTransition(line: string): boolean {
  const t = line.trim().toUpperCase();
  if (!t) return false;
  if (/^FADE (IN|OUT|TO BLACK)/.test(t)) return true;
  if (/^CUT TO/.test(t)) return true;
  if (t === "CUT TO BLACK." || t === "CUT TO BLACK") return true;
  if (/^DISSOLVE/.test(t)) return true;
  if (/^MATCH CUT/.test(t)) return true;
  return false;
}

/** Standalone cue line, e.g. IRIS or IRIS (20s) — not mixed with action. */
function isCharacterCue(line: string): boolean {
  const t = line.trim();
  if (!t || t.length > 72) return false;
  if (isTransition(t)) return false;
  return /^[A-Z][A-Z0-9]*(\s*\([^)]*\))?\s*$/.test(t);
}

function readDialogueBlock(lines: string[], start: number): { block: ScreenplayBlock; next: number } {
  const character = trimLine(lines[start]);
  const parts: ScreenplayDialoguePart[] = [];
  let i = start + 1;

  while (i < lines.length) {
    const raw = lines[i];
    const t = trimLine(raw);

    if (t === "") break;
    if (isCharacterCue(t) || isTransition(t)) break;

    if (t.startsWith("(") && t.includes(")")) {
      parts.push({ type: "paren", text: t });
    } else {
      parts.push({ type: "line", text: t });
    }
    i++;
  }

  return { block: { type: "dialogue", character, parts }, next: i };
}

function readActionBlock(lines: string[], start: number): { block: ScreenplayBlock; next: number } {
  const acc: string[] = [];
  let i = start;

  while (i < lines.length) {
    const t = trimLine(lines[i]);
    if (t === "") {
      i++;
      break;
    }
    if (isTransition(t) || isCharacterCue(t)) break;
    acc.push(lines[i].trimEnd());
    i++;
  }

  return { block: { type: "action", lines: acc }, next: i };
}

/** Parse raw scene body into ordered blocks for typographic rendering. */
export function parseScreenplay(content: string): ScreenplayBlock[] {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks: ScreenplayBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const t = trimLine(lines[i]);

    if (t === "") {
      i++;
      continue;
    }

    if (isTransition(t)) {
      blocks.push({ type: "transition", text: t });
      i++;
      continue;
    }

    if (isCharacterCue(t)) {
      const { block, next } = readDialogueBlock(lines, i);
      blocks.push(block);
      i = next;
      continue;
    }

    const { block, next } = readActionBlock(lines, i);
    blocks.push(block);
    i = next;
  }

  return blocks;
}
