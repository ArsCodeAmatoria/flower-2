import type { VisualGrammar } from "@/types/visual-grammar";

/**
 * Colour-and-light grammar: who is directing “reality” in the room.
 * Sparse, beat-driven — not a constant LUT.
 */
export const visualGrammar: VisualGrammar = {
  intro:
    "Built for Flower’s district-wide comedy and musical scale: three read-tiers (harmonized district, Iris framing, Rose truth), then character keys and machine cold. Shadow bias and skin paths keep the satire bright and legible—washes stay earned, not wallpaper.",
  sections: [
    {
      title: "District default",
      body:
        "High-key candy-glass daylight, harmonized saturation, botanical order. The lie reads cheerful—control wears a festival face.",
    },
    {
      title: "Iris on top (framing wins)",
      body:
        "Deep desaturated purple in shadow bias and ambient lift—plum, bruised petal, ink violet. Cooler, quieter contrast; velvet “whisper you can’t source.” Pretty enough to avoid evil-dungeon reads; no neon purple villainy.",
    },
    {
      title: "Rose on top (truth leads)",
      body:
        "Warmer keys; gentle red in skintone paths, practicals, petal reflections—aliveness and pulse, not alarm. Teach warmth early in off-system gold/green so red never equals “danger girl.” Reserve hard red for machine panic / redline reads, not her victory.",
    },
    {
      title: "Edelweiss / machine",
      body:
        "Sterile whites, glass cyan, clinical green diagnostics—precision cold. Separate from Iris purple: ideology as instrument, not rumor.",
    },
    {
      title: "Lemon",
      body:
        "Chartreuse and yellow-green in edge paths, foliage bounce, wardrobe accents—photosynthetic, unruly counterweight to Iris purple and machine cyan.",
    },
    {
      title: "Narcissa / spectacle",
      body:
        "Magenta-gold follow-spot and bloom trim while “Look at Me” holds. When the mask cracks: drain toward ash-rose and desaturated pink—glamour tiring, not moral green.",
    },
    {
      title: "Waterfall / off-system",
      body:
        "Gold hour bounce + clean blue air—natural key distinct from district harmony and from Iris haze.",
    },
    {
      title: "Discipline",
      body:
        "Stylize for memory, not wallpaper. Iris and Rose looks land hardest when each has two or three iconic corridors or rooms; elsewhere keep read simple: cool secret talk vs warm honest air.",
    },
  ],
};
