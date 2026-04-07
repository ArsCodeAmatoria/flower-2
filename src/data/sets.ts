import type { FilmSet } from "@/types";

export const sets: FilmSet[] = [
  {
    id: "flower-district",
    slug: "flower-district",
    name: "Flower High District",
    summary:
      "The entire habitable zone of Flower High: radial paths, synchronized foot traffic, planters that pulse in polite unison, and UI petals that float at corners to remind everyone the Bloom Equalizer is always listening. It reads like a festival that never ended—until something skips a beat.",
    symbolicMeaning:
      "Forced symmetry as civic religion; the district is both home and panopticon, beautiful because deviation is corrected before it can bloom.",
    visualLogic:
      "Circular and radial composition; crowds move as loose gears; Rose is always half a step off the golden spiral. Color is saturated but harmonized—until glitches read as wrong notes.",
    lightingTone:
      "High-key daylight, candy-glass reflections; failure states drain saturation locally and throw sick green diagnostic wash from Equalizer overlays.",
    notes:
      "Spine ~100 pp.: opening, debate, B-story launch, fun/games, escalation, suppression, collapse, return (sc.20 night re-entry — strained system), festival, system failure, final image. Bookend sc.1 / sc.26 — morning district, variation without collapse, tag in reality.",
    image16x9: "/media/sets/flower-district-16x9.jpg",
    image2x1: "/media/sets/flower-district-2x1.jpg",
    linkedSceneIds: [
      "scene-01",
      "scene-02",
      "scene-05",
      "scene-06",
      "scene-07",
      "scene-08",
      "scene-09",
      "scene-10",
      "scene-13",
      "scene-14",
      "scene-15",
      "scene-16",
      "scene-17",
      "scene-18",
      "scene-20",
      "scene-21",
      "scene-22",
      "scene-23",
      "scene-24",
      "scene-25",
      "scene-26",
    ],
  },
  {
    id: "flower-high-atrium",
    slug: "flower-high-atrium",
    name: "Flower High — Biology Atrium",
    summary:
      "A soaring glass atrium where ‘classroom’ meets city: hanging gardens, student terraces, and the public face of the Bloom Equalizer—a calm interface that shows the district ‘in balance.’ Orientation here is when the whole grid syncs for the first time in the story.",
    symbolicMeaning:
      "Education as calibration; learning is framed as tuning yourself to the common pulse. The atrium is the mask the machine wears to feel friendly.",
    visualLogic:
      "Vertical space, glass, long lenses for crowd geometry; hero moments on stair landings where Rose is framed between moving bodies and static flora.",
    lightingTone:
      "Sun through glass, soft caustics; Equalizer activation adds a thin lattice of projection across skin and leaves.",
    notes:
      "Sc.3–4 orientation + first major glitch (continuous); sc.9 returns — active lab stations / Bloom nodes; sc.10 coordinated Bloom rehearsal; sc.13 post-waterfall re-entry + atrium — containment, variance, ‘reduction improves stability.’; sc.14 rehearsal — Rose holds until Lemon’s strain; Iris reframes. Sc.15 large Bloom sequence — cascade, clamp, break; Edelweiss on system. Sc.16 stability tests — Rose minimal; hum softens. Sc.25 climax — exposed Equalizer Core in atrium; shutdown by presence.",
    image16x9: "/media/sets/atrium-16x9.jpg",
    image2x1: "/media/sets/atrium-2x1.jpg",
    linkedSceneIds: [
      "scene-03",
      "scene-04",
      "scene-09",
      "scene-10",
      "scene-13",
      "scene-14",
      "scene-15",
      "scene-16",
      "scene-25",
    ],
  },
  {
    id: "wild-waterfall",
    slug: "wild-waterfall",
    name: "The Waterfall (Outside Equalizer Range)",
    summary:
      "A pocket of river and stone just beyond the district’s clean edge—no petals, no sync grid, spray and noise instead of metronome. Lemon treats it like a second campus. Here Bloom can move without being ‘corrected.’",
    symbolicMeaning:
      "Unmediated connection to the living world; the place where Rose’s difference stops reading as error because nothing is forcing a single rhythm.",
    visualLogic:
      "Handheld-friendly, water as motion blur; negative space vs. the crowded district; midsummer gold and wet stone.",
    lightingTone:
      "Natural bounce, sparkle, shadows that don’t match anyone else’s—each face can have its own key.",
    notes:
      "Sc.11 approach (path/tree line/clearing) — hum fades, no correction; subtle environment response to Rose; Lemon clocks it. Sc.12 midpoint — full organic connection; Lemon destabilizes in her field; distant district pulse (in-scene, no HUD cut). Sc.19 Dark Night — Rose walks out, clearing; Daisy; choice to return (not performing). Sc.24 transformation beat lives in district (courtyard + side path)—waterfall recalled, not revisited.",
    image16x9: "/media/sets/waterfall-16x9.jpg",
    image2x1: "/media/sets/waterfall-2x1.jpg",
    linkedSceneIds: ["scene-11", "scene-12", "scene-19"],
  },
  {
    id: "equalizer-core",
    slug: "equalizer-core",
    name: "Bloom Equalizer Core",
    summary:
      "Beneath Flower High: the root system of the machine—tanks of light, cable-vines, and the core that separates Rose’s signal from the network. Not evil-lair industrial; it’s sterile nursery meets server farm, humid and humming.",
    symbolicMeaning:
      "The physical form of ‘we know what’s best for you’—separation sold as protection, sameness sold as balance.",
    visualLogic:
      "Low ceilings opening to vertical shaft; Rose small against concentric rings; shutdown reads as unplugging a false sky.",
    lightingTone:
      "Bioluminescent UI, redline warnings, then sudden dim when the lie loses power—hand off to natural Bloom light from above.",
    notes:
      "Narrative climax (core shutdown) plays in Biology Atrium — see Flower High — Biology Atrium, sc.25. This set remains the symbolic ‘machine beneath’ gallery for design refs.",
    image16x9: "/media/sets/equalizer-core-16x9.jpg",
    image2x1: "/media/sets/equalizer-core-2x1.jpg",
    linkedSceneIds: [],
  },
];
