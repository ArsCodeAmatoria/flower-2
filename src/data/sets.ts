import type { FilmSet } from "@/types";

export const sets: FilmSet[] = [
  {
    id: "flower-district",
    slug: "flower-district",
    name: "Flower High District",
    summary:
      "The entire habitable zone of Flower High: radial paths, readable knots of bodies (never teeming sim), planters that pulse in polite unison, and UI petals at corners so the Bloom Equalizer stays in sight. It reads like a festival that never ended—until something skips a beat.",
    symbolicMeaning:
      "Forced symmetry as civic religion; the district is both home and panopticon, beautiful because deviation is corrected beside you before it can bloom.",
    visualLogic:
      "Circular and radial composition; adjacent correction reads in frame—Rose half a step off the golden spiral while whoever is beside her pays tiny spacing work. Color is saturated but harmonized—until glitches read as wrong notes.",
    lightingTone:
      "High-key daylight, candy-glass reflections; failure states drain saturation locally and throw sick green diagnostic wash from Equalizer overlays.",
    notes:
      "Spine ~100 pp.: opening, debate, B-story launch, fun/games, escalation, suppression, collapse, return (sc.20 night re-entry — strained system), festival, system failure, final image. Bookend sc.1 / sc.26 — morning district, variation without collapse, tag in reality.",
    image16x9: "/sets/flower-district.png",
    image2x1: "/sets/flower-district.png",
    linkedSceneIds: [
      "scene-01",
      "scene-02",
      "scene-05",
      "scene-06",
      "scene-07",
      "scene-09",
      "scene-10",
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
      "scene-26",
    ],
  },
  {
    id: "flower-high-atrium",
    slug: "flower-high-atrium",
    name: "Flower High — Petal Concourse & Biology Atrium",
    summary:
      "The circular academic hub: arches to band, drama, and gym—the district’s ‘promise of the premise’ in specialty rooms—then the soaring Biology Atrium where classroom meets city: hanging gardens, terraces, and the public Bloom Equalizer interface that shows the grid ‘in balance.’ Orientation lands as near-field sync—faces in eyeline, not a room-wide ripple.",
    symbolicMeaning:
      "Education as calibration; learning is framed as tuning yourself to the common pulse. The atrium is the mask the machine wears to feel friendly.",
    visualLogic:
      "Vertical space, glass, hero-pod framing; stair landings and rails where Rose reads against the few nearest bodies and static flora—storyable, not stadium scale.",
    lightingTone:
      "Sun through glass, soft caustics; Equalizer activation adds a thin lattice of projection across skin and leaves.",
    notes:
      "Script setId: sc.3–4 (concourse → atrium), sc.13 (containment), sc.25 (core + shutdown). Montage beats in sc.9–10 use atrium action but are tagged district in data—see those scenes. Act 1: concourse sells layout without crowd sim.",
    image16x9: "/sets/flower-high-atrium.png",
    image2x1: "/sets/flower-high-atrium.png",
    linkedSceneIds: ["scene-03", "scene-04", "scene-13", "scene-25", "scene-26"],
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
    image16x9: "/sets/wild-waterfall.png",
    image2x1: "/sets/wild-waterfall.png",
    linkedSceneIds: ["scene-11", "scene-12", "scene-19"],
  },
  {
    id: "residential-petal-ring",
    slug: "residential-petal-ring",
    name: "Residential Petal Ring",
    summary:
      "Petal stoops, matched planters, and nested homes along the district’s curves—private life trained to repeat public rhythm. Rose’s room is small, arranged, window aimed at the inner ring like a mirror of the whole.",
    symbolicMeaning:
      "Domestic ‘grow right’—there is no offstage; belonging starts before you leave the house.",
    visualLogic:
      "Warm daylight, shallow depth, repetitive positive shapes; Rose framed in narrow mirror / doorway thresholds.",
    lightingTone:
      "Soft bounce off painted petals; Equalizer hum felt more than heard when windows open.",
    notes:
      "Act 1: sc.2 passage through housing; sc.5 opens in Rose’s bedroom before debate sequence across district.",
    image16x9: "/sets/residential-petal-ring.png",
    image2x1: "/sets/residential-petal-ring.png",
    linkedSceneIds: ["scene-02", "scene-05"],
  },
  {
    id: "floral-neighbourhood",
    slug: "floral-neighbourhood",
    name: "Floral Neighbourhood (Wide Walk)",
    summary:
      "Quieter blocks off the main drag: white floral columns, wide sidewalks, planters everywhere—still Flower High, but the street reads like a neighbourhood stroll instead of a sync corridor. Room for two people to walk out of step on purpose.",
    symbolicMeaning:
      "Almost-residential air—private rhythm sneaking into public space; the duet can be cute without performing the district’s choral geometry.",
    visualLogic:
      "Column rhythm and long walks for depth; intercut tracking; backwards beats play against orthogonal lines; planters as stops and punctuation—not garden-row mass choreography.",
    lightingTone:
      "High-key midday, soft bounce off white columns; green reads casual, slightly untidy compared to main-stem polish.",
    notes:
      "See It My Way (sc.8). Key art: `public/sets/neighbourhood.png` (16×9 / 2×1).",
    image16x9: "/sets/neighbourhood.png",
    image2x1: "/sets/neighbourhood.png",
    linkedSceneIds: ["scene-08"],
  },
  {
    id: "squeeze-hallway-classroom-windows",
    slug: "squeeze-hallway-classroom-windows",
    name: "Flower High — Hallway / Classroom Windows (Squeeze)",
    summary:
      "Interior corridor with glass into teaching rooms: Rose tracks Lemon’s vocal O.S. before the montage lands each door. Key for depth, reflections, and “wrong lesson” comedy.",
    symbolicMeaning:
      "Listening as pursuit — the hallway is a proscenium for other people’s rooms.",
    visualLogic:
      "Tracking with Rose; shallow rooms readable through glass; Lemon never fully in frame until the cut matches.",
    lightingTone:
      "Institutional daylight; glass flares; distant classroom fluorescents.",
    notes:
      "Squeeze the Day (sc.9). Key art: `public/sets/hallwaysqueeze.png`.",
    image16x9: "/sets/hallwaysqueeze.png",
    image2x1: "/sets/hallwaysqueeze.png",
    linkedSceneIds: ["scene-09"],
  },
  {
    id: "squeeze-quiet-classroom",
    slug: "squeeze-quiet-classroom",
    name: "Quiet Classroom (Door Glass)",
    summary:
      "Worksheet class frozen by a musical bleed through the hall — not a musical unit. Binder snap, polite panic.",
    symbolicMeaning:
      "The syllabus vs. the earworm — order interrupted by someone else’s song.",
    visualLogic:
      "Rose POV through door glass; students as tableaux; teacher under O.S. vocal.",
    lightingTone:
      "Flat classroom practicals; slightly sick fluorescent vs. warm hall spill.",
    notes:
      "Squeeze the Day (sc.9). Key art: `public/sets/quietclassroom.png`.",
    image16x9: "/sets/quietclassroom.png",
    image2x1: "/sets/quietclassroom.png",
    linkedSceneIds: ["scene-09"],
  },
  {
    id: "squeeze-math-classroom",
    slug: "squeeze-math-classroom",
    name: "Math Classroom (Board / Equation)",
    summary:
      "Rows, whiteboard, chalk or marker tray — Lemon steps up mid-song, solves the equation on the board while still singing; answer’s right, context isn’t.",
    symbolicMeaning:
      "Competence without permission — the system loves correct answers until the body delivering them won’t stay in register.",
    visualLogic:
      "Over-shoulder on chalk line; class reaction small; teacher caught between math truth and hallway absurdity.",
    lightingTone:
      "Flat classroom practicals; board slightly hot.",
    notes:
      "Squeeze the Day (sc.9). Sample equation on board: 2x − 6 = 0 → x = 3. Key art: `public/sets/math.png`.",
    image16x9: "/sets/math.png",
    image2x1: "/sets/math.png",
    linkedSceneIds: ["scene-09"],
  },
  {
    id: "squeeze-drama-studio",
    slug: "squeeze-drama-studio",
    name: "Drama Studio (Skull / Spot)",
    summary:
      "Raked seats, warm amber, single hotspot — Lemon, skull prop, Hamlet posture; drama teacher lost to the mix.",
    symbolicMeaning:
      "Performance as refuge — the only room where the song ‘fits’ without asking permission.",
    visualLogic:
      "Theatrical single; Rose caught in doorway; contrast with lab and quiet class.",
    lightingTone:
      "Tungsten spot vs. house warm fill; slight haze optional.",
    notes:
      "Squeeze the Day (sc.9). Key art: `public/sets/drama.png`.",
    image16x9: "/sets/drama.png",
    image2x1: "/sets/drama.png",
    linkedSceneIds: ["scene-09"],
  },
  {
    id: "squeeze-biology-lab",
    slug: "squeeze-biology-lab",
    name: "Biology Lab (Vial / Smoke Wipe)",
    summary:
      "Bench lab — not the soaring atrium — vial mishap, harmless wrong-color smoke, wipe to next beat.",
    symbolicMeaning:
      "Science as slapstick interlude — embarrassment, not injury; smoke as transition paint.",
    visualLogic:
      "Lower-third smoke; visibility drop; practical vial beat; quick wipe.",
    lightingTone:
      "Clean lab white; smoke reads pollen-sweet, not horror.",
    notes:
      "Squeeze the Day (sc.9). Key art: `public/sets/biology.png`.",
    image16x9: "/sets/biology.png",
    image2x1: "/sets/biology.png",
    linkedSceneIds: ["scene-09"],
  },
  {
    id: "squeeze-interior-hallway",
    slug: "squeeze-interior-hallway",
    name: "Flower High — Interior Hallway (Post-Smoke)",
    summary:
      "Same building corridor after the lab — song thins to guitar and hum; Rose cough-laugh, still chasing.",
    symbolicMeaning:
      "The track shrinking back to human scale before the exterior exhale.",
    visualLogic:
      "Short beat; less debris than windows set — could share a build with hallway-windows in production.",
    lightingTone:
      "Recovering clarity after smoke; cooler air return.",
    notes:
      "Squeeze the Day (sc.9). Key art: `public/sets/interiorhallway.png`.",
    image16x9: "/sets/interiorhallway.png",
    image2x1: "/sets/interiorhallway.png",
    linkedSceneIds: ["scene-09"],
  },
  {
    id: "squeeze-side-path",
    slug: "squeeze-side-path",
    name: "EXT. Side Path (Squeeze Button)",
    summary:
      "Fringe exterior — Lemon spills out; unstructured ground; two-hander lands after the montage.",
    symbolicMeaning:
      "Off-stem honesty — the conversation survives where the festival grid thins.",
    visualLogic:
      "Wide enough for two; district readable but not crowded; evening or midday per grade.",
    lightingTone:
      "Natural key; softer than main drag; optional green break from interior.",
    notes:
      "Squeeze the Day (sc.9). Key art: `public/sets/sidepath.png`.",
    image16x9: "/sets/sidepath.png",
    image2x1: "/sets/sidepath.png",
    linkedSceneIds: ["scene-09"],
  },
  {
    id: "bloom-festival-auditorium",
    slug: "bloom-festival-auditorium",
    name: "Bloom Festival Auditorium (Shell)",
    summary:
      "The district’s great jaw—petal ribs, stage throat, scaffolded during Act 1. Visible from courtyard and rise; workers dress it while students rehearse belonging below.",
    symbolicMeaning:
      "Spectacle as civic engine—the promise of ‘Look at Me’ before the cost lands.",
    visualLogic:
      "Low angles against sky, crane-scale human ants, unfinished bioluminescent trim; later fully lit in festival Acts.",
    lightingTone:
      "Construction daylight; first hints of festival wash; Act 1 reads as looming, seductive, heavy.",
    notes:
      "Sc.5 debate courtyard background; sc.7 Break into Two — auditorium dominates mid-distance as festival pressure mounts.",
    image16x9: "/sets/bloom-festival-auditorium.png",
    image2x1: "/sets/bloom-festival-auditorium.png",
    linkedSceneIds: ["scene-05", "scene-07"],
  },
  {
    id: "woodland-fringe-path",
    slug: "woodland-fringe-path",
    name: "Woodland Fringe Path",
    summary:
      "Irregular trees, undergrowth, and stream sound off-grid—between district geometry and the waterfall’s full release. Lemon uses it as breathable margin.",
    symbolicMeaning:
      "Life without score—first proof the world is bigger than the petal pavers (sc.11 payoff later).",
    visualLogic:
      "Dappled handheld, shallow DOF, no repeating pavement motifs; Bluebell can read brighter.",
    lightingTone:
      "Natural green-gold; hum drop-off as Rose walks away from core.",
    notes:
      "Act 1 sc.6: Lemon leads; not the waterfall clearing yet—tease only.",
    image16x9: "/sets/woodland-fringe-path.png",
    image2x1: "/sets/woodland-fringe-path.png",
    linkedSceneIds: ["scene-06"],
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
    image16x9: "/sets/equalizer-core.png",
    image2x1: "/sets/equalizer-core.png",
    linkedSceneIds: ["scene-05"],
  },
];
