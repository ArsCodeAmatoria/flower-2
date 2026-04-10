import type { Character } from "@/types";

/**
 * Writer room (global)
 * — No one explains the theme; consequence and behavior do.
 * — Dialogue stays short: no speeches, no monologues.
 * — Emotion drives speech, not logic or exposition.
 * — Rose is the only character who fully transforms; others shift slightly.
 *
 * Bloom Equalizer (system, non-character)
 * — Treat like antagonist force: always reacts to Rose; escalates in steps; reads as pressure, not gadget talk.
 * — Visual grammar: order → tension; disorder (post-truth) → release.
 */

const ROSE_SCENE_IDS = [
  "scene-01",
  "scene-02",
  "scene-03",
  "scene-04",
  "scene-05",
  "scene-06",
  "scene-07",
  "scene-08",
  "scene-09",
  "scene-10",
  "scene-11",
  "scene-12",
  "scene-13",
  "scene-14",
  "scene-15",
  "scene-16",
  "scene-17",
  "scene-18",
  "scene-19",
  "scene-20",
  "scene-21",
  "scene-22",
  "scene-23",
  "scene-24",
  "scene-25",
  "scene-26",
] as const;

export const characters: Character[] = [
  {
    id: "rose",
    slug: "rose",
    name: "Rose",
    role: "Protagonist",
    archetype:
      "Emotional anchor of the film; embodiment of natural variation; the only role that moves performed identity → authentic identity.",
    desire:
      "What the I Want song names—“I just wanna be like every flower”—read clean in the bouquet—if she can just get it right, she’ll belong.",
    flaw: "She equates belonging with perfect synchronization—so she keeps trying to perform her way into acceptance.",
    lie: "The chaos is my fault; if I synchronize hard enough, I’ll fix it.",
    truth: "She doesn’t need to get it right to belong. The Equalizer separated her; she wasn’t the problem.",
    arc: "Performed sync → noticing the machine → real connection (Lemon) → wrong choice (suppression) → Dark Night → return → shutdown → simple, unforced presence.",
    speechPattern:
      "ACT 1 (sc. 1–6): frequent hesitations (“um,” “uh,” “I mean—”), self-corrections, rehearsed phrasing, over-explains small things · sc. 7 (Break into Two): restarts, then **I just wanna be like every flower** (want) — then **focus** / **I can fix it** (machine) · ACT 2A (sc. 8–12): fewer fillers with Lemon; still performs in structured spaces · ACT 2B (sc. 13–18): tightens under pressure; defensive; hesitations spike when emotional · DARK NIGHT (sc. 19): minimal speech, fragments · ACT 3 (sc. 20–26): no filler, no self-correction — e.g. “Hi. I’m Rose.” Never speeches; learns by experience; emotional truth > clever phrasing.",
    notes:
      "Personality: beginning — observant, earnest, wants to belong, slightly self-conscious; end — grounded, present, unforced confidence. External conflict: Equalizer separates her; others read that as her fault. Physical: Act 1 adjusts constantly; Act 2 controls movement; Act 3 moves naturally. **Bluebell:** her luminous blue butterfly familiar — never speaks; emotional barometer; hides/dims under Equalizer pressure; full brightness off-system at waterfall; absent at All Is Lost; returns Dark Night forward. Spine: ~100 pp. / ~1 min per page — key beats sc.1 VO mismatch · 4 catalyst · 7 Break into Two (chooses fit) · 11 waterfall — first unforced breath; nature responds (unseen) · 12 midpoint — ‘I’m not wrong’; false victory; fits into herself · 13 containment; reduction ‘works’ — dangerous · 14 Iris reframes Lemon; Rose proves hollow stability · 15 system destabilizes anyway; ‘not just her’ seeds · 16 wrong choice — double down; brief ‘success’; not herself · 17 public collapse; ‘I did this’ absolute · 18 All Is Lost — ‘I hurt everything I touch’; stay out of it · 19 Dark Night — almost leaves; Daisy’s truth; chooses return · 20 Break into Three — no suppression; ‘not just me’; toward source · 21 festival set piece — sees routing; triggers first crack; toward core · 22 Narcissa illusion breaks; ‘not holding’ with Lemon · 23 full public failure — ‘not me’; ‘breaking itself’; stop the core · 24 reset — part of not control; shutdown decision · 25 atrium core shutdown — presence vs machine · 26 final image — ‘Hi. I’m Rose’ / however it wants (lived).",
    moodLighting:
      "When Rose’s truth leads without performance: warmer overall keys; let gentle red live in skin tones, practicals, and natural bloom bounce—vitality, not “danger” or alarm red. Establish warmth off-system first (Lemon/waterfall) so her read stays kind. Suppression or blame: pull warmth back, cooler ambient, her chroma footprint smaller. Reserve harsh red for machine panic / redline grammar, not her win.",
    image16x9: "/characters/rose.png",
    image2x1: "/characters/rose1.png",
    linkedSceneIds: [...ROSE_SCENE_IDS],
    linkedSetIds: [
      "flower-district",
      "floral-neighbourhood",
      "residential-petal-ring",
      "bloom-festival-auditorium",
      "flower-high-atrium",
      "woodland-fringe-path",
      "wild-waterfall",
      "equalizer-core",
      "squeeze-hallway-classroom-windows",
      "squeeze-quiet-classroom",
      "squeeze-math-classroom",
      "squeeze-drama-studio",
      "squeeze-biology-lab",
      "squeeze-interior-hallway",
      "squeeze-side-path",
    ],
  },
  {
    id: "lemon",
    slug: "lemon",
    name: "Lemon",
    role: "Deuteragonist / B story",
    archetype:
      "Emotional catalyst: freedom without full responsibility at first; teaches Rose to relax; must learn to stay and face pressure.",
    desire: "If I don’t engage, I don’t have to fail.",
    flaw: "Uses humor and motion to dodge depth; hides cost of the system on his body until he can’t.",
    lie: "Keeping things light and outside the rules keeps me safe.",
    truth: "He has to stay—even when it’s uncomfortable—and mean it.",
    arc: "Deflecting guide → destabilized at waterfall → weakened when Rose suppresses (stakes land) → stabilizes after natural Bloom reconnects.",
    speechPattern:
      "Fast, casual, fluid; no hesitation; deflects seriousness with humor — e.g. “Or—we could not do that and instead do literally anything else.” Rare direct feeling: when it comes, keep it simple and honest.",
    notes:
      "Personality: playful, charming, avoidant, intuitive. Physical: always moving until story demands stillness. **Private cost (sc.6+):** outer-ring **walk-throughs** still on the Bloom sheet — he **chooses** which windows to hit; ‘free’ reads as **managed absence**, not immunity. Key beats: sc.6 edge walkway — first real encounter · sc.7 Rose chooses district over his path; **planter bend** open loop; he walks out · sc.8 See It My Way (duet — floral neighbourhood walk; bend callback; V3 = score cost) · sc.9 Squeeze the Day — classroom montage, EXT. side path · 9 fun/games · 10 ‘expecting it now’ / Iris closes · sc.11 leads to waterfall; first unease at her effect · sc.12 enters her field — connection + physical instability; ‘Don’t’ stop · sc.14 strain at rehearsal; Iris reframes; can’t counter; less her when she stabilizes · sc.16 hollow Rose; steps back; nod not agreement · sc.17 festival collapse; knee; ‘Don’t’ suppress again · sc.18 can’t explain; ‘not scared’ too late; doesn’t follow · sc.20 return — ‘not just me’; follows toward core · sc.21 ‘Look at Me’ overload; follows Rose in · sc.22 Narcissa breaks; ‘not holding’ with Rose · sc.23 public system break; Lemon down; Rose toward core · sc.24 sees her reset; follows to shutdown · sc.25 atrium core — **one** **step** **into** **her** **isolation** **radius** (**stay**) — braces, stable after · sc.26 **matches** **pace** — **no** **drift** **off-pattern** **for** **the** **joke** — **stay** **proof**.",
    moodLighting:
      "Edge paths and off-grid air: chartreuse and yellow-green in foliage bounce, wardrobe accents, sun through leaves—photosynthetic counterweight to Iris purple and machine cyan. Reads “outside the score” without feeling villainous.",
    image16x9: "/characters/lemon.png",
    image2x1: "/characters/lemon.png",
    linkedSceneIds: [
      "scene-06",
      "scene-07",
      "scene-08",
      "scene-09",
      "scene-10",
      "scene-11",
      "scene-12",
      "scene-14",
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
    linkedSetIds: [
      "wild-waterfall",
      "woodland-fringe-path",
      "flower-district",
      "floral-neighbourhood",
      "flower-high-atrium",
      "squeeze-hallway-classroom-windows",
      "squeeze-quiet-classroom",
      "squeeze-math-classroom",
      "squeeze-drama-studio",
      "squeeze-biology-lab",
      "squeeze-interior-hallway",
      "squeeze-side-path",
    ],
  },
  {
    id: "daisy",
    slug: "daisy",
    name: "Daisy",
    role: "Best friend / grounded truth",
    archetype:
      "Internalized system belief made kind; she grounds Rose emotionally without resolving the whole arc herself.",
    desire: "Fitting in keeps things stable—for her and everyone she loves.",
    flaw: "Repeats ‘grow right’ logic as comfort until she sees the cost of Rose gone.",
    lie: "Stability equals everyone matching the same rhythm.",
    truth: "Maybe stability isn’t everything; the district is worse without Rose.",
    arc: "Friendly pragmatist → delivers hard truth at Dark Night without preaching.",
    speechPattern:
      "Clear, simple, direct; no filler. Observations, not philosophy—never explains the theme.",
    notes:
      "Personality: friendly, practical, well-meaning, slightly conditioned by the system. Key lines: sc.2 fit-in seed · sc.3 atrium (aligned baseline vs Rose) · sc.9 Bloom node + hallway ‘or less’ · sc.14 ‘You’re steadier’ (sees containment, doesn’t push) · sc.16 ‘wasn’t just you’ vs ‘It’s… steadier’ (almost validates wrong choice) · sc.19 Dark Night — ‘worse without you’; quietly corrects Iris read on Lemon; ‘just come back.’ · sc.26 epilogue — **silent** **ensemble** crumb — messy-right row with a laugh off-beat — no speech.",
    moodLighting:
      "Neutral-warm daylight and honest faces—low stylization. Emotional baseline when the scene needs a clean read without Iris haze or machine cold.",
    image16x9: "/characters/daisy.png",
    image2x1: "/characters/daisy1.png",
    linkedSceneIds: ["scene-02", "scene-03", "scene-09", "scene-10", "scene-14", "scene-16", "scene-19", "scene-26"],
    linkedSetIds: ["flower-district", "flower-high-atrium", "wild-waterfall"],
  },
  {
    id: "edelweiss",
    slug: "edelweiss",
    name: "Edelweiss",
    role: "Antagonist — system architect",
    archetype: "Control through ideology; believes he is improving the system, not breaking souls.",
    desire: "District-wide equilibrium—no variance that could read as threat.",
    flaw: "Precision mistaken for compassion; separation framed as protection.",
    lie: "Variation creates instability; sameness is safety.",
    truth: "Imbalance wasn’t the enemy—variation was the missing ingredient.",
    arc: "Measured authority → catalyst observation (sc.4) → atrium lab observation (sc.9) → sc.13 containment / variance / ‘reduction improves stability’ → sc.15 system strain; focus shifts off Rose → sc.16 watches Rose suppress; says nothing; machine rewards → sc.17 festival collapse; public link Rose ↔ failure → sc.25 witnesses atrium core shutdown → quiet realization (variation, not imbalance).",
    speechPattern:
      "Precise, structured sentences; no filler, no emotional vocabulary; speaks in conclusions — e.g. “Feeling is not an indicator of stability.” Never cartoon-villain; never raises voice.",
    notes:
      "Personality: calm, analytical, not performatively emotional; orientation **Equalize the Bloom** duet with **Lotus** (playful teacher energy opening; bridge Disney-clear diction). Key beats: sc.3 orientation + number · sc.4 watches system then Rose · sc.9 atrium lab ‘consistency’ · sc.13 Bad Guys Close In — containment, optimal range, technical satisfaction · sc.15 cascade failure; **one** **human** **look** **at** **Rose** **then** **machine** — **care→calibration**; ‘increase stabilization’; watches machine not Rose · sc.16 atrium — notices minimal Rose; silent approval · sc.17 central courtyard — system then Rose; connection public · sc.21 festival max (not on page) · sc.25 atrium core space — aftermath; ‘variation’ line.",
    moodLighting:
      "Machine authority: sterile whites, glassy cyan, clinical green diagnostics—precision and instrument, not whisper-purple. Separates ideology from Iris framing.",
    image16x9: "/characters/edelweiss.png",
    image2x1: "/characters/edelweiss.png",
    linkedSceneIds: ["scene-03", "scene-04", "scene-09", "scene-13", "scene-15", "scene-16", "scene-17", "scene-25"],
    linkedSetIds: ["flower-high-atrium", "equalizer-core", "flower-district"],
  },
  {
    id: "lotus",
    slug: "lotus",
    name: "Lotus",
    role: "Teaching assistant — human face of the syllabus",
    archetype:
      "True believer who sells optimization as care; co-leads orientation spectacle with Edelweiss—warmth that still trains the body to obey.",
    desire: "Help every student feel guided into success—no one left behind the beat.",
    flaw: "Equates kindness with tuning people; conflict-avoidant until the cost has a name.",
    lie: "If I help them align, I’m protecting them—not pruning them.",
    truth: "Maintenance without mercy is still control; ‘help’ can humiliate.",
    arc: "Radiant co-anchor (sc.3 duet) → efficient floor presence (sc.9 lab) → containment witness (sc.13) → sees machine exceed people (sc.25)—inventory breaks; room for a later brave small act.",
    speechPattern:
      "Bright, fast, encouraging in public; short clean checks in procedure mode; mirrors Edelweiss’s clarity without his chill—until pressure strips the sparkle.",
    notes:
      "Orientation: **Equalize the Bloom** duet with Edelweiss—ensemble musical staging (call-response, claps, garden-row choreography); bridge delivered Disney-clear. Acts as beloved student proof the system works. Key art: `public/characters/lotus.png`. Sc.9 & sc.13: logistics + smiling efficiency; sc.25: watches core shutdown without a fix-it habit to reach for.",
    moodLighting:
      "Public numbers: warm key, magenta-gold rim light on duet, crowd fill as soft bloom bounce—charm with faint cyan Equalizer underline so it never reads as pure variety show.",
    image16x9: "/characters/lotus.png",
    image2x1: "/characters/lotus.png",
    linkedSceneIds: ["scene-03", "scene-09", "scene-13", "scene-25"],
    linkedSetIds: ["flower-high-atrium", "flower-district"],
  },
  {
    id: "narcissa",
    slug: "narcissa",
    name: "Narcissa",
    role: "Image / social ideal",
    archetype: "External perfection—the public face of ‘growing right’ until performance cracks.",
    desire: "To be flawless in the open—seen, admired, untouchable.",
    flaw: "Identity is load-bearing; when the Equalizer maxes, the mask shatters in public.",
    lie: "If I’m perfect, I’m safe.",
    truth: "Performance without connection is fragile—Bloom Festival exposes it.",
    arc: "Social dominance (sc.9–10) → festival peak (sc.21) → sc.22 public perfection break — leads machine, then reacts; silence at center → system fights her; collapse at scale (sc.23) → sc.26 off-center; imperfect Bloom, real smile.",
    speechPattern:
      "Polished, declarative, slightly theatrical; always ‘on’; no hesitation in performance mode.",
    notes:
      "Personality: confident, controlled, performative. Dialogue: statements, not questions. Strong intro sc.9 courtyard; sc.10 atrium formation center; social dominance sc.9–10; sc.17 festival center — formation holds until cascade; sc.21 **Look at Me** — **talent-show / pageant brag** on thrust — **Bloom** as backup — system routes through her; sc.22 phased public collapse — slip, overcorrection, stop; sc.23 system fights her — precision useless; sc.26 epilogue — not center; imperfect okay.",
    moodLighting:
      "Spectacle winning: magenta-gold follow-spot and bloom trim—admired, load-bearing shine. When perfection cracks: drain toward ash-rose and desaturated pink—tired glamour, not moral green.",
    image16x9: "/characters/narcissa2.png",
    image2x1: "/characters/narcissa2.png",
    linkedSceneIds: ["scene-09", "scene-10", "scene-17", "scene-21", "scene-22", "scene-23", "scene-26"],
    linkedSetIds: ["flower-district"],
  },
  {
    id: "nettles",
    slug: "nettles",
    name: "Nettles",
    role: "Student — edge bully",
    archetype:
      "Proximity harm: sting-on-contact pressure; rough dominance that sells ‘natural order’ without Narcissa’s polish—weed at the garden edge.",
    desire: "Keep his lane clear and his status felt—outliers are easy proof he’s winning.",
    flaw: "Escalates when the machine wobbles—panic bullying when blame needs a body.",
    lie: "Someone has to enforce the rhythm—I’m just not fake about it.",
    truth: "Cruelty isn’t gravity; it’s a choice he keeps making.",
    arc: "District friction (sc.2) → hallway / formation edges (sc.9–10) → festival outer ring (sc.17) → chaos scramble (sc.23); witness to pressure, not the thesis.",
    speechPattern:
      "Short, flat, amused cruelty; deflects with a laugh or ‘what?’; no speeches—contact does the work.",
    notes:
      "**Nettle logic:** humiliation lingers like a rash—small contact, lasting sting. Placements: sc.2 path/atrium approach; sc.9 hallway airlock + tight-circle margin; sc.10 outer-ring slot; sc.17 festival formation; sc.23 cross-correction. Look: teenage male, alien-plant world; faint green undertone, spiky hair, guarded smirk; layered streetwear (canvas, denim, olive/dark greens). Pixar-adjacent 3D read; key art `public/characters/nettles.png`.",
    moodLighting:
      "Muted olive and desaturated green in wardrobe bounce; daylight grime—keep him out of Narcissa’s magenta-gold spectacle grammar unless they share a frame by accident.",
    image16x9: "/characters/nettles.png",
    image2x1: "/characters/nettles.png",
    linkedSceneIds: ["scene-02", "scene-09", "scene-10", "scene-17", "scene-23"],
    linkedSetIds: ["flower-district", "flower-high-atrium"],
  },
  {
    id: "iris",
    slug: "iris",
    name: "Iris",
    role: "Perception manipulator",
    archetype: "Controls narrative, not reality—turns uncertainty into collective belief.",
    desire: "Keep the story simple: fear attaches to the outlier, not the machine.",
    flaw: "Calls spin ‘mercy’; plants ideas instead of owning harm.",
    lie: "A kind lie is better than a destabilizing truth.",
    truth: "Framing truth to wound is still violence—Daisy’s honesty breaks her spell (sc.19: what Lemon ‘meant’ corrected quietly).",
    arc: "Observing (sc.4 catalyst) → sc.10 perception engine (introduced) → sc.14 Lemon reframed (‘he just reacted’) — framing only → sc.17 festival watches; says nothing (doesn’t need to) → sc.18 All Is Lost — still silent; earlier seeds complete Rose’s read → sc.21 festival; still watching → sc.22 spectacle breaks; no frame left → sc.26 **no** spin — **joins** an **uneven** cluster **without** leading; **stays** in the mess **without** framing.",
    speechPattern:
      "Calm, suggestive, indirect—never a bald lie; damages by framing — e.g. “I mean… he did pull back.” Plants, doesn’t argue.",
    notes:
      "Personality: observant, subtle, socially intelligent, soft-spoken. Never lies directly — frames. Sc.4: watches glitch, not surprised — narrative seed. Sc.10: ‘followed her,’ ‘maybe she’s just—,’ ‘no one thinks you’re doing it on purpose.’ Sc.14: repeats ‘noticeable’ with new weight; ‘happens around you,’ ‘he just reacted’; **exit** **beat** — **others** **thank** **her** **for** **smooth** **room** — **cost** **to** **Rose/Lemon** **unspoken**. Sc.17: silent witness; crowd does the work. Sc.18: no lines — ‘confirmation’ only; Rose supplies the verdict. Sc.19: not on stage — Daisy undoes the Lemon read quietly. Sc.21: off-center; watching Narcissa + crowd. Sc.22: Narcissa breaks publicly — nothing to say; truth visible. Sc.26: **behavior** — steps beside an uneven cluster; **no** spin; **lets** mess be enough.",
    moodLighting:
      "When Iris’s framing leads: deep desaturated purple in shadow bias — plum, bruised petal, ink violet. Cooler contrast, night-inside-day; velvet suggestion, not neon villain. Keep it pretty enough for family tone.",
    image16x9: "/characters/iris.png",
    image2x1: "/characters/iris2.png",
    linkedSceneIds: ["scene-04", "scene-10", "scene-14", "scene-17", "scene-18", "scene-21", "scene-22", "scene-26"],
    linkedSetIds: ["flower-high-atrium", "flower-district"],
  },
  {
    id: "bluebell",
    slug: "bluebell",
    name: "Bluebell",
    role: "Rose’s familiar (glowing blue butterfly)",
    archetype:
      "Silent companion and emotional barometer—connection without language, illegible to the Equalizer’s idea of ‘correct’ life.",
    desire: "Stay with Rose.",
    flaw: "Fragile presence under machine pressure—can’t shield her from social pain, only mark it.",
    lie: "N/A — non-verbal; reads as pet but functions as familiar bond.",
    truth: "Rose is never empty; the system just trains everyone not to see what doesn’t scan.",
    arc: "Hidden in district flow · dims at Equalizer peak (sc.4) · woodland ease (sc.6) · bright at waterfall (sc.11–12) · gone at All Is Lost (sc.18) · returns Dark Night (sc.19) · steady Act 3 · witness at shutdown (sc.25–26).",
    speechPattern: "Does not speak. Flutter, land, hide, brighten—action only.",
    notes:
      "Screen rules: no dialogue from Bluebell; Rose may whisper to it (private, habitual). Others rarely notice; never explain magic on-screen. Glow tracks Rose’s safety/truth: suppressed = dim/absent; off-system = full. Key art TBD — placeholder stills until butterfly plates exist.",
    moodLighting:
      "Accent only: luminous blue in the familiar’s emissive read—a barometer beat, not a scene-wide wash. Never replace Iris/Rose/machine grammar with butterfly fill.",
    image16x9: "/characters/bluebell1.png",
    image2x1: "/characters/bluebell1.png",
    linkedSceneIds: [
      "scene-01",
      "scene-02",
      "scene-04",
      "scene-11",
      "scene-12",
      "scene-18",
      "scene-19",
      "scene-20",
      "scene-24",
      "scene-25",
      "scene-26",
    ],
    linkedSetIds: [
      "flower-district",
      "residential-petal-ring",
      "woodland-fringe-path",
      "wild-waterfall",
      "flower-high-atrium",
    ],
  },
];
