import type { ScriptScene } from "@/types";

/** Writer-facing copy for script reader / exhibition */
export const equalizerPresenceLabels: Record<ScriptScene["equalizerPresence"], string> = {
  on: "Equalizer foreground — hum, pulse, or stabilization may lead",
  implied: "Implied only — culture and behavior; keep device texture quiet",
  off: "Off — natural, relational, or recovered space; no machine grammar",
};
