/**
 * Exhibition aspect presets — wide plates for media and reader surfaces.
 */

export const ASPECT_PRESETS = ["16:9", "2:1"] as const;

export type AspectRatioPreset = (typeof ASPECT_PRESETS)[number];

export function isAspectRatioPreset(value: string): value is AspectRatioPreset {
  return (ASPECT_PRESETS as readonly string[]).includes(value);
}

/** Tailwind aspect utilities (width-driven height). */
export function aspectRatioTailwindClass(ratio: AspectRatioPreset): "aspect-video" | "aspect-[2/1]" {
  return ratio === "16:9" ? "aspect-video" : "aspect-[2/1]";
}

/** CSS `aspect-ratio` value for inline styles or keyframes. */
export function aspectRatioCssValue(ratio: AspectRatioPreset): string {
  return ratio === "16:9" ? "16 / 9" : "2 / 1";
}

export const ASPECT_TOGGLE_OPTIONS: readonly { value: AspectRatioPreset; label: string }[] = [
  { value: "16:9", label: "16∶9" },
  { value: "2:1", label: "2∶1" },
] as const;
