import type { ScriptScene } from "@/types";

/**
 * Four-quarter structure for the script reader (Save the Cat–style).
 * Boundaries match the locked 26-scene spine: midpoint ~sc.12, Act 3 ~sc.20.
 *
 * - **Act 1** — scenes 1–7 (includes Break into Two at 7 in data `act: 1`)
 * - **Act 2A** — scenes 8–12 (fun & games → midpoint)
 * - **Act 2B** — scenes 13–19 (bad guys close in → dark night)
 * - **Act 3** — scenes 20–26
 */
export type ScriptActBlockId = "1" | "2a" | "2b" | "3";

export const SCRIPT_ACT_BLOCK_ORDER: readonly ScriptActBlockId[] = ["1", "2a", "2b", "3"];

const ACT_1_LAST = 7;
const ACT_2A_LAST = 12;
const ACT_2B_LAST = 19;

export function sceneActBlock(scene: ScriptScene): ScriptActBlockId {
  const n = Number.parseInt(scene.sceneNumber, 10);
  if (!Number.isFinite(n)) {
    if (scene.act === 3) return "3";
    if (scene.act === 1) return "1";
    return "2a";
  }
  if (n <= ACT_1_LAST) return "1";
  if (n <= ACT_2A_LAST) return "2a";
  if (n <= ACT_2B_LAST) return "2b";
  return "3";
}

/** Ribbon / slugline: `ACT 2A · SCENE 9` */
export function formatActBlockCatalogue(id: ScriptActBlockId): string {
  switch (id) {
    case "1":
      return "ACT 1";
    case "2a":
      return "ACT 2A";
    case "2b":
      return "ACT 2B";
    case "3":
      return "ACT 3";
  }
}

/** Sidebar / headings: `Act 2A` */
export function formatActBlockNavLabel(id: ScriptActBlockId): string {
  switch (id) {
    case "1":
      return "Act 1";
    case "2a":
      return "Act 2A";
    case "2b":
      return "Act 2B";
    case "3":
      return "Act 3";
  }
}
