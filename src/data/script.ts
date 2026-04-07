import type { ScriptScene } from "@/types";

/**
 * ~100-page feature spine (1 page ≈ 1 minute).
 * Scene IDs scene-01 … scene-26 for stable dossier / set links.
 * `equalizerPresence` — writer/production dial so the machine is not foreground in every beat (see reader sidebar).
 *
 * **District flow (shared exterior):** In public movement, bodies yield into curved lanes and **staggered rows**—garden beds,
 * not parade ground—until groups read as tended from **height** (paths complete the bloom; never on-the-nose “form a flower”).
 * Street tier = slotting/yielding verbs; railed height = arcs resolve; aerial = rare payoff. Rose fails on **phase / radius**, not malice.
 *
 * **Humour:** pressure-valve gags—Rose’s body vs the polite machine; Daisy deadpan kindness; Lemon dry timing; Narcissa **dignity under siege**
 * (irony of routing/UI, never punch-down). **Bluebell:** butterfly only—**no face, no inner monologue**; jokes = **wing geometry** (open V, clamp flat,
 * antenna tilt), **glow**, and **Rose misreading** normal lepidoptera behaviour.
 */
export const scriptScenes: ScriptScene[] = [
  {
    id: "scene-01",
    act: 1,
    sceneNumber: "1",
    title: "Opening Image / VO",
    slug: "opening-image",
    heading: "EXT. FLOWER HIGH DISTRICT — MORNING",
    pageStart: 1,
    pageEnd: 3,
    equalizerPresence: "implied",
    beat: "Structural bloom; Rose’s first arrival on the ground—awkward, half-beat misses. **Audio misdirect:** V.O. reads as composed peer / orientation-style welcome + self-assurance; audience assumes confidence-vs-reality or polished narrator. **Reveal reserved for sc.26:** same words are **next-year orientation speech** laid over past pictures—wrong-time track until sync.",
    summary:
      "Bird’s-eye + district geometry. On the ground: proximity sync only; Rose steps in, almost matches, misses by a breath. **V.O.: future orientation welcome (do not label on screen)—warm, structured, ‘I’ve got this’ cadence.** Picture: honest first-day body. Bluebell on cuff. No past-tense spoilers (‘last year I stood here’) in V.O.",
    characters: ["rose", "bluebell"],
    setId: "flower-district",
    notes:
      "World-first: wide shots sell layout, not crowd sim. **District flow:** staggered arcs / garden-bed rows at distance; bird’s-eye completes bloom via **paths + drift**, not extras ‘drawing petals.’ **Trick:** V.O. must **not** tip future (no ‘when I welcomed you,’ no ‘this year’). Fair play: host-register is **plausible** as earnest inner voice. Post: opening track **matches** sc.26 live delivery for sync payoff. **Bluebell:** hide from passing bodies; **humour = wings/antenna/glow only**—no anthropomorphic face or ‘character’ depth.",
    content: `FADE IN:

FROM ABOVE —

The district is a bloom.

Not symbolic — structural.

Circular blocks overlap like petals. Intersections form repeating patterns — subtle, precise — echoing the geometry of living growth.

Pathways branch like veins in a leaf.

Nothing rigid. Everything intentional.

Distant movement — figures resolve into **curved rows** along the paths: threes and fours, **half-step stagger**, like lines in a bed — not lockstep, not drill.

On the path under Rose: same habit as elsewhere.

Tiny adjustments when people pass:
A step shortened.
A shoulder turned.

She won’t need the whole district to prove the rule — only whoever is beside her.

HIGHER STILL — BIRD’S EYE —

Neighbourhood rings: nested arcs of petal-roofs and round courtyards.

Smaller dwellings near the core — larger homes on the outer rise — every window facing the same gentle center.

Morning repeats in soft choreography: hoses, curtains, steps down stoops — timed like habit, not clock.

From here the living pattern reads: **concentric drift** — arcs of bodies and stoops **yielding** into the next — a garden rhythm more than a crowd.

Then — the view releases —

At the edge of the district —

ROSE (16) steps in.

She pauses just a fraction too long.

ROSE (V.O.)
Hi. I’m Rose.

She joins the flow.

ROSE (V.O.)
And this is Flower High.

ROSE (V.O.)
The geometry reads impossible — then it doesn’t. That’s the trick.

She moves deeper in — the structure becomes clearer: petal-shaped blocks, layered circular spacing, repeating intersections that feel… designed.

ROSE (V.O.)
Not a building… a district.

A small pause — she likes that.

Rose matches the pace of a nearby student.

Almost perfect — but not quite.

The student subtly adjusts away without looking.

BRUSHING ROSE’S CUFF — BLUEBELL.

A tiny butterfly. Glowing soft blue.

It settles — wings folded along its back — **clamp-flat** against the fabric.

A passing shoulder — Bluebell’s wings **lift a fraction** — antennae **dip** — normal insect tension — Rose reads it as *please don’t*.

Rose lowers her arm just enough to hide it from passing bodies.

Doesn’t look down.

Habit.

ROSE (V.O.)
Which sounds like a lot — but it’s actually very simple.

Ahead — a group curves around a rounded intersection. Not sharp. Not mechanical. Like water finding a path — each person **one step off** from the next, a **stagger** holding the arc.

Rose follows — a beat too early. Corrects. Now slightly behind.

ROSE (V.O.)
Everything here grows in patterns.

We notice it now: repeating shapes, overlapping paths, organic symmetry.

ROSE (V.O.)
Perfect timing.

Rose shortens her step. Matches someone — almost.

ROSE (V.O.) (CONT’D)
Perfect balance.

She adjusts her posture. Too much. Corrects. Still off.

She pretends she didn’t notice.

ROSE (V.O.)
Because around here…

She prepares the line. Tiny inhale.

ROSE (V.O.) (CONT’D)
…you don’t just grow.

Two students pass — one ahead, one behind — spacing clean between them.

Rose steps forward — clips the gap —

ROSE
(automatic)
Sorry — sorry —

The one in front shortens a step without turning.

The one behind yields half a pace.

Gone in a blink — still polite — still **near her**, not the whole street.

ROSE (V.O.)
You grow right.

She gives a small, satisfied nod — then a **tiny** fist-tighten **yes** at her side —

A COUPLE glances —

Rose snaps hand flat — pretends she was only adjusting her sleeve.

Beat.

ROSE (V.O.)
It’s perfect.

A fraction of a pause —

ROSE (V.O.) (CONT’D)
…mostly.

Rose steps again — almost — almost — misses.

The girl behind her catches the miss — smooths it — never makes eye contact.

Rose keeps walking. Like nothing happened.

The geometry still holds — petals, paths, morning — but her lane keeps costing people tiny work.

CUT TO:`,
  },
  {
    id: "scene-02",
    act: 1,
    sceneNumber: "2",
    title: "Arrival / Daisy Introduction",
    slug: "arrival-orientation",
    heading: "EXT. FLOWER HIGH DISTRICT — INNER PATH — MORNING",
    pageStart: 3,
    pageEnd: 6,
    equalizerPresence: "implied",
    beat: "Theme stated + social integration — varied ‘corrections’ (avoidance, pocket, smile); Daisy misreads kindly; comfort lands then lane contradicts; Bluebell near-miss; second VO brittle; Rose optimizes timing over what pulls at her senses",
    summary:
      "Rose threads petal-homes and tighter paths—errors cost: brushed-off gaze, reshaped pack, stuck pocket, sharp apology to air. Courtyard: brief railed-down beat—crowd reads as staggered curved beds. Daisy delivers ‘you will’ then the lane flexes before Rose speaks again. Daisy frames nerves as mis-read; theme lands—fit in, grow right—via habit lines. Bluebell: warmth + **wing V / snap**; passerby glances cuff. Atrium: Rose forces steps, half-hears hum, misses anyway.",
    characters: ["rose", "daisy", "bluebell"],
    setId: "flower-district",
    notes:
      "Theme Stated; extras still don’t *perform* emotion—but beats vary (evasion, manufactured smile, recycled faces). **District flow:** one **Tier B** railed beat at courtyard—rows/stagger read from height; paths finish the shape. Daisy: one wrong-kindly read (not evil). After ‘You will’: silent half-beat miss, no Daisy comment. **Bluebell:** warmth + **wing snap shut** + passerby glance—**no face**; humour is geometry + Rose panic. Second VO shorter / performative. Tie hum to sc.3 only as tease.",
    content: `EXT. FLOWER HIGH DISTRICT — INNER PATH — MORNING

The deeper Rose walks — the more intricate it becomes.

Petal-shaped blocks overlap. Paths branch and reconnect like veins.

EXT. RESIDENTIAL RING — INNER PATH — CONTINUOUS

Stoops, shallow balconies — planters colour-blocked in polite echo.

A door opens; a swing stops at the same angle as the neighbour’s — learned rhythm, not printed rules.

Rose almost matches — half a breath early — she pretends she meant to check her bag.

More bodies. She speeds up — slows — lands behind — catches up — still not quite in the pocket.

A STUDENT passes — shifts wide — eyes never quite meet Rose’s, not rudely: **like matching isn’t her job.**

Rose slides toward a group turning a curve — times it — steps a half-second early.

The pack loosens and re-knits — she’s inside the shape but not the timing.

No one reacts.

The space changes.

ROSE (V.O.)
You just… follow it.

A small nod — convincing herself.

Ahead — circular courtyard. Knots self-sort; at the hub, movement thins and reconverges.

FROM A RAISED CONNECTOR — DOWN — BRIEF

The knots read as **curved beds**: each arc **staggered**, people slotting and yielding — the pavers and planters do most of the geometry; bodies finish it.

Not a literal flower traced on the flagstones — **infrastructure + habit**.

BACK ON THE PATH — CONTINUOUS

Rose stops at the courtyard rim — one beat too long.

A halo of empty space opens — not accusation; **inventory.**

She lunges to close it — clips someone’s elbow —

ROSE
Sorry — sorry —

They’re already gone — smile flat, pleasant, **already past her.**

She traps herself in a slow eddy — can’t merge without cutting — chooses cutting —

The lane absorbs it — smooth — **cold.**

She spots DAISY.

Daisy reads the flow, steps — perfect — effortless.

Rose closes.

ROSE
Hi — um — is this — orientation?

Daisy turns. Friendly. Grounded.

DAISY
Yeah.

Beat.

DAISY (CONT’D)
You’re new.

ROSE
Yeah. I just — I need to —

She gestures at the movement.

ROSE (CONT’D)
—match it better.

Daisy watches — not judging — **cataloguing.**

DAISY
You will.

Simple.

Rose exhales — relief she didn’t earn.

She steps in with Daisy — half a beat early — the lane flexes — no one comments.

ROSE
Okay — yeah — I still feel — a little off.

Daisy shrugs — **too easy an answer.**

DAISY
You’re reading it too hard. First week — everyone thinks they’re behind.

Rose almost argues — doesn’t.

Daisy slips into the stream — aligns.

Rose follows — late — catches —

DAISY (CONT’D)
You just have to fit in.

They walk.

Bluebell inside the cuff — glow barely there — wings ** sealed flat**.

A **thread of warmth** climbs Rose’s wrist — one instant — wings **part** — a brief **open V** — insect cooling, not a smile —

Rose slaps her palm over it — wings **snap** shut.

A girl glances down — fabric — then forward — **polite void.**

ROSE
(whisper, to Bluebell)
Behave.

Daisy doesn’t notice.

Rose matches Daisy’s stride — almost — almost — misses — corrects.

DAISY (CONT’D)
That’s the lane.

Complex intersection — overlapping paths — the same five-or-six faces in rotation, like the district’s showing her the same polite lesson on a loop.

Daisy threads clean.

Rose commits — nearly collides —

Two bodies widen — a third stitches gap — **arms-reach** correction.

No scolding — just visibility.

Rose winces.

DAISY (CONT’D)
We’re all planted in the same place…

Throwaway.

DAISY (CONT’D)
You just have to grow right.

Rose nods — doesn’t own it yet.

ROSE
Yeah — I just need to —

She forces symmetry into her steps — **visible effort.**

ROSE (CONT’D)
—get it right.

Daisy glances — almost sympathetic — **doesn’t fix her.**

Ahead — BIOLOGY ATRIUM — larger, grown into the petals.

Entrants as **one current** — Daisy belongs; Rose rides the edge.

Rose almost hears something — **hum under the morning** — she tunes it out — **wrong dial.**

ROSE (V.O.)
*(forcing; quiet)*
Follow it.

She drives the timing — almost — almost —

Misses.

The flow bends — corrects — like nothing happened.

They approach the entrance.

CUT TO:`,
  },
  {
    id: "scene-03",
    act: 1,
    sceneNumber: "3",
    title: "Orientation / Biology Atrium",
    slug: "orientation-atrium",
    heading: "INT. BIOLOGY ATRIUM — MORNING",
    pageStart: 6,
    pageEnd: 10,
    equalizerPresence: "on",
    beat: "ACT 1 · Catalyst setup — concourse → atrium → **Equalize the Bloom** orientation duet (Edelweiss + **Lotus**, Bollywood-inflected) → spoken law returns → first controlled instability",
    summary:
      "Concourse: band / drama / gym promise. Atrium: **Lotus** co-leads sung orientation with Edelweiss; crowd arcs into sync choreography. Then dry lecture resumes; Equalizer + Rose’s near field tightens; first instability.",
    characters: ["rose", "daisy", "edelweiss", "lotus"],
    setId: "flower-high-atrium",
    notes:
      "Locks: **Proximity sync** — animate few bodies; background soft. **Concourse:** hub orbit reads as **round garden bed**—staggered threading, not parade. **Musical:** duet sells care before law; bridge warm, Disney-clear diction; final chorus joy with unease under mix. Full lyric on `/lyrics/equalize-the-bloom`. Equalizer = hum/light/Rose breath. Sc.4 continuous. **Humour:** Daisy **mint**; Rose **micro-align** celebration cut off by lecture.",
    content: `INT. FLOWER HIGH — PETAL CONCOURSE — MORNING

A circular gallery — classroom arches like sepals around a hub.

From one corridor — BAND ROOM — scales run — students inhale as one — release.

From another — DRAMA STUDIO — bodies in mask-work — stillness sold as virtuosity.

Another opening — GYM / INDOOR STADIUM — squeak of shoes — a ball — lines snap straight.

The floor enforces threading: nobody stops; nobody breaks orbit.

The stream **orbits** the hub in soft arcs — each lane **half-step offset** from the next, like **rows rounding a circular bed** — yield, slot, drift.

Rose and Daisy move in the stream.

Rose’s head turns — too curious —

She almost breaks rhythm —

DAISY
Eyes forward.

Not mean.

Habit.

Rose corrects — flushes — keeps moving.

They round the hub — spill toward the atrium mouth —

INT. BIOLOGY ATRIUM — CONTINUOUS

A vast interior space.

Open. Layered. Structured like a living diagram.

Balconies curve in overlapping arcs.

Walkways intersect in repeating circular patterns.

At the center — a suspended structure.

The BLOOM EQUALIZER INTERFACE.

Not mechanical in the traditional sense.

Organic.

Petal-like forms overlapping.

Soft light pulsing through branching channels — like veins.

Students flow into the space from multiple entrances.

They don’t stop.

They settle.

Position themselves naturally.

Rose and Daisy enter with the stream.

Rose slows — taking it in.

ROSE
Oh — this is —

She gestures vaguely upward.

ROSE (CONT’D)
—is this the whole—

She stops. Regroups.

ROSE (CONT’D)
This is for — everyone?

DAISY
Just orientation.

Simple.

Daisy taps a **mint** from a tiny sleeve pocket — offers it flat-palmed.

DAISY (CONT’D)
Want one?

ROSE
Oh — I’m okay — thanks —

Daisy tucks it away — no offense taken — habit.

Daisy steps forward into position.

Already aligned.

Rose tries to match where others are standing — slightly off — adjusts — still not quite right.

At the center, a raised platform.

PROFESSOR EDELWEISS (50s) stands calmly — **Indian** — linen-neat —

Beside him — **JASMINE** (17) — teaching assistant — one step back — **bright** — **already loved** by this room before she opens her mouth.

Still.

Precise.

The only two not “finding” a spot — they **define** it.

The room settles around them.

EDELWEISS
Welcome.

His voice is quiet — but carries.

The room stills — not forced.

Just… aligned.

EDELWEISS (CONT’D)
You are entering a system that maintains balance.

No flourish. No performance.

Just a statement.

Beat.

The lights **lift** — informal — orientation as **promise** —

MUSICAL NUMBER — **EQUALIZE THE BLOOM** — Bollywood-inflected — claps on off-beats, call-and-response, arcs of students threading like **garden rows** —

*Opening — rhythmic spoken-sung, playful teacher energy — Disney-audible diction.*

EDELWEISS
Ahh—welcome, welcome, my dear students —

JASMINE
Come come —

EDELWEISS (CONT’D)
Today we make your future… very, very optimum.

JASMINE
No tension, no confusion, no botanical doom —

EDELWEISS
We simply…

BOTH
(equalize the bloom)

*Verse 1 — bouncy, fast, charming.*

EDELWEISS
Petal going left? — we gently make it right —

JASMINE
Too much shadow? — we adjust the light —

BOTH
Little bend here — small correction there —

ALL
Soon it’s perfect everywhere —

EDELWEISS
You are saying “wild,” you are saying “free” —

JASMINE
I am saying hmm… inconsistency —

EDELWEISS
Why you want disorder in the room —

BOTH
When we can (equalize the bloom)

*Pre-chorus — rhythmic, playful.*

BOTH
Snip-snip, shift-shift, make it nice and neat —

ALL
Every little flower dancing to the beat —

*Chorus — big, ensemble, joyful.*

ALL
(equalize the bloom) (hey!)
(bring it into line) (ho!)
Every petal, every stem —
Working so divine —

(equalize the bloom) (hey!)
(no more up or down) (no!)
When everything is balanced —
You are best in town —

*Verse 2 — faster, witty, comedic logic.*

EDELWEISS
One leaf leaning—then another also —

JASMINE
Small-small problem becomes big, you know —

EDELWEISS
Tiny drift becomes full confusion —

JASMINE
We are offering simple solution —

EDELWEISS
You are saying “this is who I am” —

JASMINE
Very good—but we improve the plan —

BOTH
Little tuning, little gentle zoom —
Now you shine when (equalize the bloom)

*Pre-chorus — tighter, more controlled.*

BOTH
Step-step, shape-shape, smooth it all precise —

ALL
Harmony is beauty when it’s extra nice —

*Chorus — bigger spectacle, more synchronized.*

ALL
(equalize the bloom) (hey!)
(make it all align) (ho!)
Every curve and every line —
Perfect every time —

(equalize the bloom) (hey!)
(feel the system hum) (hum!)
When we move together —
See what we become —

*Bridge — softer; charm becomes persuasive; Disney-clear delivery.*

JASMINE
You are feeling it, yes…

EDELWEISS
That small tension —

JASMINE
That little pull —

EDELWEISS
Something not fitting…

JASMINE
Why you carry this —

BOTH
When we can…

ALL
(make it right)

*Final chorus — still big, more controlled; slightly eerie underneath.*

ALL
(equalize the bloom)
(no more rise or fall)
Every petal, every stem —
Perfect through it all —

(equalize the bloom)
(now the truth is clear)
When everything aligns —
There is nothing left to fear —

The music **resolves**.

Applause — **trained** — **happy** —

Rose watches — humming without meaning to — **half a beat behind** —

She catches herself — **stops**.

Trying to follow.

EDELWEISS (CONT’D)
Balance is not something you achieve.

Beat.

EDELWEISS (CONT’D)
It is something you maintain.

Above — the Equalizer pulses softly.

Rose glances around.

Everyone seems… comfortable here.

She shifts her weight.

Too much.

Fixes it.

For **one beat** — she lands **exactly** with the near ring — **tiny** relief flashes —

EDELWEISS (CONT’D)
When everything grows within its proper range —

She **freezes** mid-micro-nod — hand half-raised — pretends it was an itch.

A faint shift in the air.

Subtle.

EDELWEISS (CONT’D)
—there is no instability.

Rose looks at Daisy.

ROSE
So it just — keeps it — like —

She searches.

ROSE (CONT’D)
—level?

Daisy nods.

DAISY
Yeah.

Edelweiss hears, but doesn’t react.

EDELWEISS
Variation introduces imbalance.

A quiet beat.

EDELWEISS (CONT’D)
Imbalance spreads.

Above — the Equalizer’s inner structure begins to shift.

Petal forms aligning.

Channels tightening.

Light becoming more focused.

The few students nearest the platform straighten — almost in unison — **a small arc**, not the whole bowl.

Rose notices.

Something feels different.

She shifts her foot.

The floor beneath her — barely perceptible — responds.

She freezes.

EDELWEISS (CONT’D)
We correct for that.

He raises a hand.

Not dramatic.

Just precise.

The Equalizer responds.

The light sharpens.

A low, almost inaudible hum.

Not mechanical — pressure.

Like the room is tightening.

Rose inhales — too early — exhales — too late.

She tries to match everyone else.

Can’t.

The system settles into synchronization.

Everyone else in her **near ring** — aligned.

Still.

Balanced.

Rose — is not.

A slight delay in her posture.

A fraction off.

The girl beside Daisy sways — corrects — **one shoulder** brushing air Rose failed to match.

Rose sees it.

Her eyes widen.

She shifts again — tries to fix it —

The Equalizer answers — light tightens **on Rose’s row**.

Not a wave through the tiers — a **spotlight pressure** she can feel in her ribs.

No one reacts out loud.

Except — the machine.

The Equalizer pulses again.

Slightly stronger.

Rose feels it now.

Pressure.

Separating.

Like she’s just outside something she can’t see.

She steps — tries to align — misses again —

Daisy holds still — flawless — which somehow makes Rose louder.

The space beside Rose **works harder** — hum digs in — until she freezes.

EDELWEISS (CONT’D)
You will feel it.

His eyes move — just slightly — toward Rose.

Not accusatory.

Observational.

EDELWEISS (CONT’D)
Adjustment.

Rose freezes.

ROSE
I — I’m just —

She tries to fix her stance.

Too fast.

Now off in a different way.

ROSE (CONT’D)
—I think I just —

The pressure increases.

Not visible — but present.

The Equalizer tightens.

The room holds.

Everything — balanced.

Except her.

CUT TO:`,
  },
  {
    id: "scene-04",
    act: 1,
    sceneNumber: "4",
    title: "First Major Glitch (Catalyst)",
    slug: "first-glitch",
    heading: "INT. BIOLOGY ATRIUM — CONTINUOUS",
    pageStart: 10,
    pageEnd: 13,
    equalizerPresence: "on",
    beat: "ACT 1 · Catalyst payoff — Equalizer squeezes Rose; **few adjacent bodies** misstep; she reads cause in her eyeline; **same pod** reads culprit — scalable, no crowd sim",
    summary:
      "Continuous atrium. Rose’s miss → tight local pressure: **2–3 students** near her lose timing (trip, bump, murmur). Equalizer hammers; Bluebell dims. Iris clocks; Edelweiss watches machine then Rose. Stabilizes; **nearest faces** peel away — separation social, not district-wide chaos.",
    characters: ["rose", "daisy", "iris", "edelweiss", "bluebell"],
    setId: "flower-high-atrium",
    notes:
      "Continuous; **animate hero pod only** (Rose, Daisy, 2–3 named STUDENT slots, Iris, Edelweiss). No ripple through rows. Misattribution via **looks in her radius**. **Humour:** Rose micro-**yes** before pulse; **sorry** to wrong object. **Bluebell:** dim + **wings latched flat**; antennae **forward**—no face jokes.",
    content: `INT. BIOLOGY ATRIUM — CONTINUOUS

The room holds in near-perfect stillness.

The Bloom Equalizer hums softly overhead.

Everything is aligned.

Except — Rose.

A fraction off.

Barely visible.

But enough.

She adjusts her stance — tries to match — misses.

The boy beside her catches the miss — one foot slid too far — he rights himself before anyone notices.

Almost.

Rose notices.

Her breath tightens.

ROSE
I — I think I just —

She stops.

Tries again — forces her posture into alignment.

For a moment — she almost matches.

She allows a **tiny** exhale — **thumb** rubs cuff once — **private yes** —

The system responds.

The Equalizer tightens.

The air feels denser.

ON ROSE —

Bluebell — wings **pressed to silk** — body thin — antennae **rigid forward**.

Glow dims — nearly out.

Like it’s trying not to cast a shadow in here.

Rose holds still.

Trying not to move.

Trying not to disrupt it.

Then — on the **landing just outside her arm’s reach** —

STUDENT #1 (16) — misreads a step —

Catches herself on STUDENT #2’s shoulder — a clumsy half-second —

STUDENT #2
Sorry —

STUDENT #1
—my fault —

Murmur — **three throats**, not a hall.

Rose sees it.

Her eyes widen.

ROSE (CONT’D)
I didn’t —

She shifts back — instinctively —

The moment she moves — the Equalizer pulses sharply.

STUDENT #2 wavers — pulled two directions —

Lets go too fast — almost drops her folio —

STUDENT #1
What was that?

STUDENT #2
Did you feel that?

Rose — automatic —

ROSE
Sorry —

— to the **folio** — wrong recipient — she snaps mouth shut.

Rose steps back again.

Trying to get out of the way.

But the more she moves — the more the system reacts.

The Equalizer hum deepens.

Pressure increases.

Right **here** — in her pod — nothing feels elastic anymore.

Except her.

She inhales — too fast — tries to stop — can’t —

ROSE
I’m — I’m sorry — I didn’t —

She tries to freeze.

But her timing is still off.

Another pulse — stronger.

Light lattice **tightens across her chest** — visible only to us —

Daisy turns to Rose.

Concerned.

DAISY
Hey —

Rose looks at her — panicked.

ROSE
I didn’t do anything — I just —

She gestures helplessly.

The faces **nearest her** — not the whole atrium — turn.

Not at the machine.

At her.

A beat.

Iris, across the atrium, watches.

Calm.

Observing.

Not surprised.

Edelweiss stands at the center.

Still.

Precise.

Watching the system — then — briefly — Rose.

The Equalizer pulses again — then — stabilizes.

The hum softens.

STUDENT #1 and STUDENT #2 steady — embarrassed — small.

The near ring exhales — **the rest of the atrium** never needed to know.

The system reasserts control.

The disturbance fades — **locally**.

But not completely.

A residue remains — in how **the people beside her** look at Rose.

One shifts an inch away.

Another won’t meet her eyes.

The space around her opens — just a little.

Unnatural.

Rose feels it.

Separation.

DAISY
(quiet)
It’s okay.

Rose nods — but she knows it’s not.

ROSE
I just — I was trying to —

She stops.

No words.

She looks around.

Everything is back to normal.

Except — how they’re looking at her.

And how the space moves around her.

Not with her.

Around her.

The Equalizer hums above.

Steady.

Controlled.

Rose stands — slightly out of sync.

CUT TO:`,
  },
  {
    id: "scene-05",
    act: 1,
    sceneNumber: "5",
    title: "Debate (Trying to Fit)",
    slug: "trying-to-fit",
    heading: "INT. FLOWER HIGH DISTRICT — VARIOUS — LATER",
    pageStart: 13,
    pageEnd: 18,
    equalizerPresence: "implied",
    beat: "ACT 1 · Debate — bedroom prep (private = same law) → district tries: movement + band class miss + social courtyard (festival shell BG) + suppression on walkway (roots grille tease); three escalating attempts; self-blame",
    summary:
      "INT: Rose’s room — prep. (1) Path past gym: match **one** walker; neighbour behind compensates once; bail. (2) Band: late count, exit. (3) Courtyard cluster: **four or five**; re-forms without her. (4) Walkway: suppression; **one** ahead jerks wrong when she slips. Ends: ‘get it right.’",
    characters: ["rose", "bluebell"],
    setId: "flower-district",
    notes:
      "Locks: debate function; distinct attempts; Rose um / restart / self-correction; system = pressure + overcorrection. **World:** bedroom (Disney intimacy) + specialty class (STC promise) + festival shell (ticking fun) + roots tease (no explanation). **Humour:** sill **wing-tent** Bluebell; walkway **sorry** to rail.",
    content: `INT. FLOWER HIGH DISTRICT — VARIOUS — LATER

INT. ROSE’S ROOM — RESIDENTIAL PETAL — LATER

Small. Clean edges.

Everything arranged — not messy — but trying.

She stands before a narrow mirror — adjusts her collar — her shoulders — again.

Checks her bag — twice.

A petal-shaped window looks out on the inner ring — distant movement already in sync.

On the sill — BLUEBELL — glow low — wings **tented** over its back like a tiny tent.

ROSE
(quiet)
Okay… just — normal.

She exhales.

Reaches for the door—

Hesitates—

One more adjustment.

Then goes.

EXT. INNER PATH — CONTINUOUS

The district is back in motion.

Smooth. Corrected.

Like nothing happened.

Except — Rose.

She stands at the edge of a flowing path.

Watching.

Studying.

Trying to understand it.

ATTEMPT 1 — MOVEMENT (PAST THE GYM SKIN)

Glass wall — GYM / STADIUM — interior visible.

Lines of bodies — counting — snap — hold.

Rose steps into the outdoor flow again.

Careful.

Measured.

She watches the student beside her — matches their stride.

One step.

Two —

She’s close.

Very close.

Then — she over-adjusts.

Too early.

The spacing shifts — **only between her and the two she’s bracketing**.

The student behind shortens a step once.

Rose notices immediately.

ROSE
No — I had it — I just —

She tries to correct again.

Now late.

The Equalizer hum subtly deepens — **local**, like a fist in her ear.

Pressure.

She feels it.

Stops.

The two others re-find their gap without looking at her.

Rose steps out of the path.

ATTEMPT 2 — BAND (WRONG DOOR)

INT. BAND ROOM — MOMENTS LATER

Rose slips in late — small — apologetic.

Mid-exercise — no clear entry beat —

Everyone inhales on one count —

Rose catches half a beat late —

One chair scrapes —

She freezes — backs out before the exhale completes —

**Mouths** *sorry* at the **door** — **to the wood** — gone.

Like she was never there.

ATTEMPT 3 — SOCIAL

EXT. COURTYARD — CONTINUOUS

Past the far curve — the BLOOM FESTIVAL AUDITORIUM rises — skeleton and petals — workers on scaffolds — a stage throat opening to the sky.

Students gather in small clusters.

Talking. Laughing. Moving naturally.

Rose approaches a group.

Waits for a gap.

Steps in.

ROSE
Hi — um — sorry — can I just —

The group subtly adjusts.

Not rejecting her — just… repositioning.

She tries to match their posture.

Mirrors one of them.

Too closely.

One student shifts away slightly.

Another turns their body just enough to close the space.

The group continues talking — around her.

Not including her.

ROSE (CONT’D)
I just — I was in the — atrium earlier —

No response.

Not intentional.

Just… unaligned.

Rose forces a small smile.

Nods like she’s part of it.

She’s not.

She steps back out.

The group immediately re-forms — clean.

Balanced.

Rose watches it happen.

ROSE (CONT’D)
Okay.

Quiet.

To herself.

ATTEMPT 4 — SUPPRESSION (FIRST SEED)

INT. WALKWAY — MOMENTS LATER

Beneath the deck — through a petal grate — something moves.

Not a machine sound — deeper — roots? Infrastructure breathing?

Rose stands still.

Breathing.

Watching the flow again.

She notices:

The **few** in view move with small, controlled precision.

Nothing extra.

Nothing irregular.

She straightens.

Reduces her movement.

Tightens her posture.

She **leans** on a slim rail — it **gives** a millimetre — slick with morning condensation —

She snaps upright —

ROSE
(whisper, to the rail)
Sorry —

Steps forward — more controlled this time.

Less expressive.

Less… her.

She matches the pace.

Closer than before.

The system responds.

The Equalizer hum softens slightly.

Less pressure.

Rose feels it.

ROSE (CONT’D)
Okay… okay —

She focuses.

Keeps everything small.

Contained.

She almost disappears into the rhythm.

For a moment — it works.

Then — a slight misstep.

Tiny.

Barely visible.

But the system reacts — faster now.

Stronger.

Someone **just ahead** — one person — snaps their step too hard —

Stumbles — catches it —

Shoots Rose a look — not mean — **tired**

— worse than the first attempt because now she **sees** the cost.

Rose freezes.

ROSE (CONT’D)
I didn’t — I was —

She looks down at herself.

At how tightly she’s holding everything.

She releases — just slightly.

The system settles.

But slower this time.

Working harder.

END OF SEQUENCE

Rose steps out of the path completely.

Now outside the flow.

She watches the lane move without her.

Perfect.

Effortless.

Unaffected.

Except — when she steps in and becomes someone’s errand.

ROSE (CONT’D)
(quiet)
I just need to get it right.

She looks back at the moving system.

Determined.

But shaken.

The Equalizer hums faintly overhead.

Constant.

Watching.

CUT TO:`,
  },
  {
    id: "scene-06",
    act: 1,
    sceneNumber: "6",
    title: "First Real Encounter with Lemon",
    slug: "first-lemon",
    heading: "EXT. EDGE WALKWAY — LATE MORNING",
    pageStart: 18,
    pageEnd: 22,
    equalizerPresence: "off",
    beat: "ACT 1 · B story intro — contrast to system; relief after pressure; Lemon fluid/playful; Rose still hesitating; freedom vs match; avoidance seeded",
    summary:
      "District edge: looser flow, less correction. Rose catches her breath; Lemon (17) has watched her—curious, not cruel. He reframes the atrium (‘you didn’t break it’), punctures ‘get it right,’ walks off-pattern without triggering the machine. Rose follows onto woodland fringe path—stream sound, ungrid nature; Bluebell eases. Hum fades; first step toward not performing—still unsure.",
    characters: ["rose", "lemon", "bluebell"],
    setId: "flower-district",
    notes:
      "Tone: audience breathes. Lemon: short lines, deflect, no therapy; **four-minute** hum bit; **hum lying** callback energy with sc.9. Rose: um / stop / restart. Lock avoidance: ‘don’t stick around to see it’ / ‘when I have to.’ **Bluebell:** **antenna track** + fringe **wing slack**; Lemon ‘Nice butterfly’—insect only. **World:** woods path + stream tease (not sc.11 location yet). Foreshadows waterfall.",
    content: `EXT. EDGE WALKWAY — LATE MORNING

The district thins slightly here.

Paths widen.

Less density.

Still structured — but looser.

Students pass through in softer patterns.

Less correction.

More space.

Rose steps out of the main flow.

Finally.

She exhales.

Shoulders drop.

Just a little.

She watches the movement from the outside.

People still adjust — but not as tightly.

ROSE
(quiet, to herself)
Okay…

She tries a step forward —

No pressure.

No immediate correction.

She pauses.

Confused.

ROSE (CONT’D)
That’s — different.

A beat.

Then — a voice behind her.

LEMON (O.S.)
Yeah. It is.

Rose turns.

LEMON (17) leans against a curved railing.

Relaxed.

Not trying to match anything.

Not correcting.

Just… there.

He’s been watching her.

Not in a judgmental way.

More like — curious.

LEMON (CONT’D)
You were in the atrium.

Not a question.

Rose tenses slightly.

ROSE
Yeah — I mean — I didn’t —

She stops.

He’s not accusing her.

LEMON
You didn’t break it.

Beat.

ROSE
I didn’t?

LEMON
No.

He shrugs.

LEMON (CONT’D)
It was already doing that.

Rose studies him.

Trying to understand.

ROSE
It didn’t feel like that.

LEMON
It never does.

Beat.

He glances toward the distant district — **hum** barely there —

LEMON (CONT’D)
I’ll still give it four minutes before it pretends that didn’t happen.

ROSE
What?

LEMON
Nothing.

He pushes off the railing.

Steps closer — not too close.

Just enough.

LEMON (CONT’D)
You trying to match it?

Rose nods.

ROSE
I just need to get it right.

LEMON
Why?

Simple.

Direct.

Rose blinks.

Doesn’t have a clean answer.

ROSE
Because that’s — how it works.

LEMON
(small smile)
Is it?

He steps past her — into the path.

Walks.

Not matching anyone.

Not disrupting anything.

Just moving.

A couple of students adjust around him — but lightly.

No pressure.

Rose watches.

Confused.

ROSE
How are you —

She gestures.

ROSE (CONT’D)
—doing that?

LEMON
Doing what?

ROSE
Not —

She searches.

ROSE (CONT’D)
—affecting it.

LEMON
I am.

Beat.

LEMON (CONT’D)
I just don’t try not to.

He turns, walking backward now.

Still relaxed.

Still off-pattern.

But it doesn’t trigger anything.

ON ROSE’S CUFF — Bluebell’s antennae **track** him — wings **bias** his direction — pure animal —

Rose shifts arm — **hides** the tell —

ROSE
I tried that.

LEMON
No, you didn’t.

He stops.

Faces her.

LEMON (CONT’D)
You tried to do it right.

A beat.

That lands.

Rose looks down.

ROSE
I just — I don’t want to —

She trails off.

He waits.

Doesn’t push.

ROSE (CONT’D)
—mess it up.

LEMON
You will.

Casual.

Not harsh.

Rose looks up — surprised.

LEMON (CONT’D)
Everyone does.

Beat.

LEMON (CONT’D)
Some of us just don’t stick around to see it.

He shrugs again.

There it is — his flaw.

Avoidance.

Rose studies him.

ROSE
You don’t go in?

She gestures back toward the denser district.

LEMON
Sometimes.

Beat.

LEMON (CONT’D)
When I have to.

He turns — starts walking again — toward a less structured path.

LEMON (CONT’D)
You don’t have to match it all the time.

He glances back.

LEMON (CONT’D)
You can just —

He steps off the main path — onto a slightly irregular side route.

Less defined.

LEMON (CONT’D)
—not.

He keeps walking.

Doesn’t wait.

Rose stands there.

Watching him go.

Then — she takes a step after him.

Hesitates.

Looks back at the main flow.

Still perfect.

Still controlled.

Then back to Lemon.

She follows.

Not matching.

Not correcting.

Just walking.

It feels strange.

But — lighter.

The Equalizer hum is quieter here.

Almost gone.

Rose notices.

ROSE
(quiet)
Okay…

She keeps walking.

Still unsure.

But moving.

EXT. WOODLAND FRINGE PATH — CONTINUOUS

Bark and wildflower undergrowth — irregular spacing.

A stream sound somewhere past the trees — not the waterfall yet — just moving water.

Light through leaves — no grid — no petal pavers.

ON ROSE’S CUFF — Bluebell — wings **slack** a few degrees — glow **steadies** — antennae lift — ordinary animal ease.

LEMON
Nice butterfly.

ROSE
It’s — yeah.

She doesn’t offer more.

Rose notices — then doesn’t — then does.

LEMON
(quiet)
Different air.

She nods.

ROSE
Yeah.

They walk until the path thins — district noise behind them — softer.

Rose looks back once — the geometry still visible — almost beautiful — almost a trap.

She turns forward again.

CUT TO:`,
  },
  {
    id: "scene-07",
    act: 1,
    sceneNumber: "7",
    title: "Decision to Try Harder (Break into Two)",
    slug: "try-harder",
    heading: "EXT. EDGE PATH → MAIN DISTRICT — LATE MORNING",
    pageStart: 22,
    pageEnd: 25,
    equalizerPresence: "implied",
    beat: "ACT 1 · Break into Two — commitment to the lie; rejects Lemon’s path (for now); Bloom Festival as pressure; wrong goal (fit in); speech hesitant but tightening",
    summary:
      "Edge path → district opens: mansions, festival shell, **posters / one rehearsal knot** suggest scale—no mass stream copy. She chooses machine; re-enters; hum returns; matches **one** walker—Act 2 engaged.",
    characters: ["rose", "lemon"],
    setId: "flower-district",
    notes:
      "Clear fork: freedom vs machine. Rose’s lines still restart/stutter but land on certainty (“I do,” “focus,” “fix it”). Stakes: Bloom Festival named. Lemon doesn’t argue—watches her walk in.",
    content: `EXT. EDGE PATH → MAIN DISTRICT — LATE MORNING

Rose walks with Lemon along the looser outer path.

Less structure.

Less pressure.

She breathes easier.

For a moment — she almost relaxes.

Ahead — the district opens again.

On the rise — larger petal-homes — almost mansions — facing the same center as everyone else.

Denser.

More precise.

More controlled.

The BLOOM FESTIVAL AUDITORIUM dominates the mid-distance — half-dressed in light — workers anting along its ribs.

A **banner crew** hoists Bloom colour; a **practice cluster** marks time in the mid-ground — enough to sell “festival coming” without filling frame.

Lemon slows.

Doesn’t move toward it.

Rose notices.

ROSE
What’s that?

LEMON
Festival.

Beat.

LEMON (CONT’D)
Bloom Festival.

Rose watches the movement.

**One** formation hardens near the stage mouth — tighter — repeatable —

The idea of “everyone” lands — **even if the shot stays small**.

ROSE
Everyone’s going.

LEMON
Yeah.

He doesn’t move.

ROSE
You’re not?

LEMON
Not really my thing.

Casual.

Dismissive.

Rose studies him.

Then looks back at the district.

The movement is sharper now.

More intentional.

More exact.

She watches someone step cleanly into alignment — perfect timing.

No correction needed.

It lands with her.

ROSE
I can do that.

Lemon glances at her.

Doesn’t argue.

LEMON
Maybe.

Beat.

LEMON (CONT’D)
Or you could not.

He steps slightly farther off the path.

Away from the flow.

Inviting — but not insisting.

ROSE
I just — I need to —

She struggles to find it.

ROSE (CONT’D)
—I need to get it right.

Lemon watches her.

Knows he won’t stop her.

LEMON
You don’t.

Simple.

Final.

Rose nods — but she’s not convinced.

ROSE
Yeah.

Beat.

ROSE (CONT’D)
I do.

She turns toward the main district.

Steps forward.

Immediately — the structure tightens around her.

The Equalizer hum returns.

Faint — but present.

She feels it.

But keeps going.

ROSE (CONT’D)
I just need to —

She adjusts her pace.

Deliberate.

Controlled.

ROSE (CONT’D)
—focus.

She matches a nearby student.

Closer than before.

Still not perfect — but better.

She holds it.

Determined.

ROSE (CONT’D)
I can fix it.

Behind her — Lemon stays where he is.

Watching.

Not following.

A beat.

He turns away — walks further out of the system.

Rose moves deeper into the district.

More faces in frame — still **readable pods**, not a tide.

She claws onto the pace of **whoever is beside her** —

Corrects — again — again — holding longer each time.

Forcing it.

The system hum deepens slightly.

Not yet punishing her — but noticing.

Rose keeps going.

More controlled.

Less herself.

Blending — almost.

CUT TO:`,
  },
  {
    id: "scene-08",
    act: 2,
    sceneNumber: "8",
    title: "B Story Development (Lemon / “Squeeze the Day” Setup)",
    slug: "squeeze-setup",
    heading: "EXT. FLOWER HIGH DISTRICT — MID-DAY",
    pageStart: 25,
    pageEnd: 30,
    equalizerPresence: "implied",
    beat: "ACT 2A · B story — **relationship engine first**, not another corridor-sync tutorial. Rose finds Lemon after a **social** scrape (invitation / edge space), not a win-streak; ‘just walk’ lands as **intimacy + shame about relaxing**, not geometry homework.",
    summary:
      "District busy for festival prep; Rose **doesn’t** chase another ‘clean merge’ beat — she peels off after a tiny group **excludes** her half-space (polite, fatal). She finds Lemon on the sidelines. They talk: self-fixing flow vs honesty; he crosses at an angle; she tries **not** matching — wobbles, stops fixing, no ripple. He almost says it isn’t her problem — stops. Breathing room; looser path; she follows, still unsure.",
    characters: ["rose", "lemon"],
    setId: "flower-district",
    notes:
      "**Anti-repeat:** do **not** open on ‘she almost nails sync.’ Humiliation here is **social**, not timing showcase. Lemon: movement, not lecture. Musical: ‘just walk’ seeds only.",
    content: `EXT. FLOWER HIGH DISTRICT — MID-DAY

The district is more active — festival prep hum in the air.

Students move with sharper intent.

Paths feel competitive — everyone angling toward **good spots**.

Rose threads a group — almost fits —

Someone steps in ahead — friendly — **closes** the gap she was aiming for.

Not mean.

Just… no room.

She laughs once — tries to brush it off — the cluster doesn’t look back.

Small.

She feels it anyway.

She stops chasing the merge.

Looks up — scanning —

Spots Lemon.

Off to the side.

Not in the flow.

Sitting on a low curved ledge.

Watching everything.

Still.

Not participating.

Rose slows.

Breaks from the group — slightly late — **the two behind her** widen a half-step.

She doesn’t notice this time.

She’s focused on him.

ROSE (CONT’D)
You’re still here.

LEMON
Yeah.

Beat.

LEMON (CONT’D)
You’re getting better.

She processes that.

ROSE
I almost had it.

LEMON
You did.

Beat.

LEMON (CONT’D)
For a second.

He smiles.

Not mocking.

Just honest.

Rose exhales.

Half-laugh.

ROSE
That’s — something.

She sits beside him.

Not quite matching the curve of the ledge.

Adjusts.

Still slightly off.

Gives up.

LEMON
You look tired.

ROSE
I’m just — trying to stay with it.

She gestures to the movement.

ROSE (CONT’D)
If I stop — I lose it.

LEMON
Or you stop trying.

Rose glances at him.

ROSE
That’s not — how this works.

LEMON
It’s how I work.

He leans back.

Looks out over the district.

A few paths cross in the distance — **readable**, not teeming.

LEMON (CONT’D)
You ever notice —

He points.

**Four kids** round a bend — one lands late — the next catches it — no drama.

LEMON (CONT’D)
It’s not perfect.

Rose watches.

Trying to see it.

ROSE
It is.

LEMON
No.

Beat.

LEMON (CONT’D)
It’s just good at fixing itself.

That lands differently.

Rose studies the movement again.

Now — she sees the corrections.

Small.

Constant.

ROSE
So I just need to —

LEMON
(interrupting, gentle)
No.

Beat.

LEMON (CONT’D)
You don’t need to do anything.

Rose frowns slightly.

ROSE
Then what am I supposed to —

She trails off.

He stands.

Steps down from the ledge.

Moves — not into the flow — but across it.

At an angle.

Students adjust around him — but lightly.

No pressure.

No escalation.

Rose watches.

Confused again.

ROSE (CONT’D)
How are you not —

She gestures.

ROSE (CONT’D)
—doing that thing.

LEMON
Because I’m not trying to match it.

He keeps walking.

Loose.

Uncontrolled.

Free.

He turns — walking backward again.

LEMON (CONT’D)
You want to try something?

Rose hesitates.

Looks back at the main flow.

Then at him.

ROSE
What?

LEMON
Don’t match anything.

Beat.

LEMON (CONT’D)
Just walk.

Simple.

Rose stands slowly.

Steps down.

Careful at first — then tries to just walk.

No timing.

No adjustment.

It feels wrong.

Unstable.

ROSE
This feels —

She wobbles slightly.

Corrects — instinctively.

Stops herself.

ROSE (CONT’D)
—like I’m going to mess something up.

LEMON
You probably will.

Casual.

Rose looks at him — half annoyed.

Half uncertain.

ROSE
That’s not helpful.

LEMON
It’s true.

Beat.

LEMON (CONT’D)
But it’s also not the end of anything.

That lands.

Rose takes another step.

Still unsure.

Still uneven.

But not correcting.

A student passes — adjusts slightly — keeps going.

No ripple.

No escalation.

Rose notices.

ROSE
That didn’t —

She gestures behind her.

LEMON
Yeah.

ROSE
Why didn’t it —

She can’t finish.

LEMON
Because you didn’t try to fix it.

Beat.

Rose processes that.

Slowly.

LEMON (CONT’D)
You’re trying to solve something that isn’t —

He stops himself.

Shrugs.

LEMON (CONT’D)
—your problem.

Rose looks back at the district.

Still moving.

Still correcting.

Still… controlled.

Then back at him.

ROSE
It feels like my problem.

LEMON
Yeah.

Beat.

LEMON (CONT’D)
That’s how it works.

A quiet moment between them.

The first real one.

No pressure.

No correction.

Just space.

LEMON (CONT’D)
Come on.

He starts moving again — toward a slightly less structured path.

LEMON (CONT’D)
There’s better places than this.

Rose hesitates.

Looks back at the system.

Then at him.

She follows.

Still unsure.

But choosing it.

For now.

CUT TO:`,
  },
  {
    id: "scene-09",
    act: 2,
    sceneNumber: "9",
    title: "Fun & Games (System vs Rose Expands)",
    slug: "fun-games",
    heading: "INT. BIOLOGY ATRIUM — LATER",
    pageStart: 30,
    pageEnd: 40,
    equalizerPresence: "on",
    beat: "ACT 2A · Fun & Games — **four different failure types**, not four sync flavors: (1) **machine** node lab, (2) **public spectacle** status beside Narcissa, (3) **private** self-policing beat, (4) **social** invitation / clique airlock with Daisy; Lemon coda names ‘careful not trying’.",
    summary:
      "**(1)** Atrium lab: node destabilizes; Edelweiss clocks consistency; **Lotus** on floor + tablet pass. **(2)** Courtyard: Rose’s display overblooms; system flattens; Narcissa precise—**status** wound, not only tech. **(3)** Rose alone: mirror/room beat — practices neutral face; no audience; Bluebell dim. **(4)** Hallway: Daisy ‘or less’; Rose **not invited** into laughter—airlock, not late syllable only. Side path: Lemon — tried not-trying **safely**; hum deepens, unnoticed.",
    characters: ["rose", "daisy", "edelweiss", "lotus", "narcissa", "lemon"],
    setId: "flower-district",
    notes:
      "**Anti-repeat:** if two beats feel like ‘timing miss,’ cut one. Iris absent; sc.10 = rumor without new physics. Edelweiss observational. **Lotus:** floor runner — nods, checklist kindness — hands Edelweiss tablet when he passes. **Humour:** mirror = **wing asymmetry** on sill (insect, not mimic); courtyard = **wrong UI credit** flash; hallway = Daisy **nobody’s counting** vs toe-mark student; Lemon = **timer** absurdism.",
    content: `INT. ROSE’S ROOM — RESIDENTIAL PETAL — EARLY THAT DAY

Mirror.

Rose holds a **neutral** face — releases — tries again.

Softer eyes. Less hope showing.

No one watching.

Bluebell on the sill — **dim** — wings **not quite matched** — one tipped lower — sun on insects, not attitude.

She exhales — grabs bag — **leaves the performance in the glass.**

CUT TO:

INT. BIOLOGY ATRIUM — LATER

The space is active now.

Not still like orientation.

Students move between stations arranged in layered arcs.

At each — different forms of “growth.”

Petal samples.

Light-responsive vines.

Small Bloom nodes pulsing faintly.

The Equalizer hum is present — subtle — constant.

JASMINE moves **along** the arc — **smiling** — checklist kind — she **half-waves** at Rose’s cluster — inclusion as **procedure** — then keeps rolling.

Rose stands at a station with Daisy and two other students.

In front of them:

A small, contained Bloom node.

Soft light. Gentle pulse.

EDELWEISS (O.S.)
Maintain consistency.

Students place their hands near the node.

Not touching.

Just… influencing.

The node responds — stabilizing.

Even.

Balanced.

Daisy goes first.

The node smooths perfectly.

Clean.

Controlled.

A nearby student follows — same result.

Rose steps forward.

Hesitates.

ROSE
I just — do I —

DAISY
Just hold it steady.

Rose nods.

Positions her hands.

Too tense.

She relaxes — too much — tries again.

Finds a middle.

The node reacts —

A flicker.

Then — over-brightens.

Too fast.

The pulse becomes uneven.

Daisy pulls her hands back slightly.

The other students do the same.

The node stabilizes again — but slower than before.

ROSE
I didn’t — I was just —

Edelweiss passes behind them.

Glances at the node.

Then at Rose.

EDELWEISS
Consistency.

JASMINE falls in beside him — slips him a **slim tablet** — he **doesn’t look at her** — she **doesn’t mind** — **trained**.

He moves on.

No judgment.

Just observation.

Rose steps back.

EXT. COURTYARD — CONTINUOUS

Festival preparation.

Students practicing.

Not walking patterns — performance.

Small Bloom displays.

Controlled bursts of color.

Timed releases.

Narcissa stands at the center of a group.

Perfect posture.

Perfect control.

She gestures —

A Bloom response erupts around her.

Even. Symmetrical. Beautiful.

Students watch.

Admiring.

Rose stands at the edge.

Watching.

Trying to understand.

A student nearby attempts a Bloom response — slightly uneven — corrects quickly.

Rose steps forward.

ROSE
Can I just — try?

The group shifts slightly.

Makes space.

Not warm.

Not cold.

Just… accommodating.

Rose positions herself.

Breathes.

Tries to replicate what she saw.

She focuses.

The Bloom responds —

At first — nothing.

Then — too much.

Growth spreads outward — uneven.

Wild.

Not symmetrical.

Students step back instinctively.

The growth stops — as quickly as it started.

The system corrects.

Pulls it back.

Flattens it.

Overhead — a **ribbon readout** glitches — half a second —

**Stability assist — Narcissa.**

Wrong beat — not hers — **gone** before it can become a conversation — only the **story** remembers.

Silence.

A beat.

A **petal of light** drifts — catches in Narcissa’s hair — **she doesn’t notice** — still **queen-still**.

NARCISSA
(pleasant, controlled)
You’re pushing too hard.

Not mean.

But precise.

Final.

Rose nods quickly.

ROSE
Yeah — I just —

She steps back.

The group re-forms.

Perfect again.

**The exclusion is clean — that’s the wound.**

INT. HALLWAY — MOMENTS LATER

Students move between spaces.

Conversations overlap.

But even here — there’s a rhythm to interaction.

Turn-taking.

Timing.

Flow.

Rose walks beside Daisy.

ROSE
I think I just need to — control it more.

DAISY
Maybe.

Beat.

DAISY (CONT’D)
Or less.

DAISY (CONT’D)
Nobody’s counting.

Rose looks at her.

Unsure what that means.

They approach a cluster laughing — **tight circle**.

**Background** — one BOY **marks a floor seam** with his toe — **one-two-three** — whisper — **eyes on his shoes** — not performing — just **doing math the lane taught him.**

Rose slows — **doesn’t break the ring**.

ROSE
(quiet)
Hey — what was —

The circle doesn’t open.

A girl she half-knows catches her eye — **almost** makes space — then doesn’t.

The laugh continues — **without** a door.

Rose and Daisy pass through.

The story doesn’t need a mean girl — **just gravity.**

She falls out of it — **not late — unwelcome.**

Again.

EXT. SIDE PATH — CONTINUOUS

Lemon walks along the outer edge.

Kicks lightly at the ground.

Unstructured.

Free.

Rose approaches.

Frustrated.

ROSE
I tried not trying.

Beat.

ROSE (CONT’D)
That didn’t work either.

LEMON
You tried it once.

ROSE
I tried it.

LEMON
You tried it carefully.

That lands.

ROSE
I can’t just —

She gestures broadly.

ROSE (CONT’D)
—not care.

LEMON
I didn’t say that.

Beat.

LEMON (CONT’D)
I said don’t control it.

Rose exhales.

ROSE
That feels worse.

LEMON
Yeah.

He shrugs.

LEMON (CONT’D)
That’s the part you’re skipping.

A beat.

Rose watches the district again.

Controlled.

Precise.

Working.

Except when she’s in it.

ROSE
I just want it to work.

LEMON
It does.

Beat.

LEMON (CONT’D)
Just not the way you think.

He tilts his head — **listening** —

LEMON (CONT’D)
There it is.

ROSE
There what?

LEMON
The hum **lying**.

Rose looks at him.

Still not convinced.

Still trying.

Behind them —

The Equalizer hum deepens slightly.

Unnoticed by others.

But present.

Watching.

Responding.

CUT TO:`,
  },
  {
    id: "scene-10",
    act: 2,
    sceneNumber: "10",
    title: "Social Escalation (Iris Introduced as Perception Engine)",
    slug: "social-escalation",
    heading: "EXT. COURTYARD — AFTERNOON",
    pageStart: 40,
    pageEnd: 45,
    equalizerPresence: "implied",
    beat: "ACT 2A · Rising pressure — **Iris = perception / rumor evolution**, not sc.4/9 physics; Rose edged by **board + whispers**, not another atrium Bloom half-beat; Iris reframes without lying; no duplicate ‘sequence stutter’ set piece.",
    summary:
      "Festival prep hardens: outer-ring placement on the petal-board; **administrative / narrative** pressure — ‘pattern,’ ‘twice,’ thread without fresh lab glitch. Courtyard: Daisy timing talk; Iris plants ‘followed her’ / ‘maybe,’ lets others finish the story. Hallway pre-adjustment; Lemon names expectation; Iris delivers ‘no one thinks you’re doing it on purpose’ — worse than blame.",
    characters: ["rose", "daisy", "narcissa", "iris", "lemon"],
    setId: "flower-district",
    notes:
      "**Anti-repeat:** no INT atrium **rehearsal stutter** here — that’s sc.9’s job. Iris: shrug, ‘Maybe,’ unfinished sentences. STUDENT lines anonymous.",
    content: `EXT. COURTYARD — AFTERNOON

Festival prep continues.

More structured now.

Groups are assigned.

Positions matter.

Timing matters.

Students move with intent.

Rose stands at the edge of a grouping area.

Watching where to go.

Trying to place herself.

A clipboard-like organic panel displays groupings.

Names shift subtly as students align into formations.

Rose scans it.

Finds her name — already placed.

She moves toward the group.

As she approaches — the formation subtly adjusts.

Not rejecting — just… rebalancing.

Her position shifts to the outer edge.

She notices.

Pretends not to.

ROSE
(quiet)
Okay…

INT. ATRIUM — LATER

**No rehearsal pulse on page** — **slot day.**

Clipboards bloom.

Names redistribute overnight: Rose’s handle sits **outer ring** — revised without her in the room.

Narcissa’s block holds **center sightline** — leadership printed, not argued.

Whispers stack a **story**, not a waveform.

STUDENT
(quiet)
Twice now, though —

Another student — **doesn’t** look at the board — looks at **Rose**.

STUDENT #2
(soft, trailing)
Maybe…

Nobody **finishes** it out loud.

They don’t need to.

The **narrative** already did.

Rose sees it.

Says nothing.

Takes the slot.

EXT. COURTYARD — LATER

Clusters of students regroup.

Talking.

Rehearsing.

Resetting.

Rose stands slightly apart.

Daisy joins her.

DAISY
It’s just timing.

Simple.

Not blaming.

ROSE
I am timing it.

Beat.

ROSE (CONT’D)
I just — I don’t know why it —

She trails off.

Daisy doesn’t answer.

Because she doesn’t know either.

Across the courtyard — Iris (16) stands with a small group.

Watching.

Listening.

She’s not central like Narcissa.

But people orient around her.

She notices Rose.

Not intensely.

Just… registers.

A student nearby speaks quietly.

STUDENT
That was earlier, right?

Another student nods slightly.

Iris doesn’t interrupt.

She lets it sit.

Then —

IRIS
Maybe.

Beat.

IRIS (CONT’D)
It just looked like it followed her.

Soft.

Not stated as fact.

Just observation.

The group absorbs it.

No one challenges it.

INT. HALLWAY — MOMENTS LATER

Rose walks alone.

Students pass.

Small adjustments around her.

Slightly wider spacing now.

Subtle.

But new.

Two students approach from ahead — talking.

They see her — their conversation shifts — just slightly.

One of them adjusts path earlier than needed.

The other follows.

They pass her cleanly.

No disruption.

But — they planned for her.

Rose feels it.

EXT. COURTYARD — CONTINUOUS

Iris walks beside another student.

Casual.

IRIS
It’s not a big thing.

Beat.

IRIS (CONT’D)
It just… keeps happening.

The student nods.

Processing.

IRIS (CONT’D)
Maybe she’s just —

She stops.

Doesn’t finish.

Lets the space fill it in.

The other student does.

STUDENT
Off?

Iris gives a small, neutral shrug.

IRIS
Maybe.

That’s enough.

EXT. SIDE PATH — LATER

Rose finds Lemon again.

More tense now.

ROSE
Something’s — different.

LEMON
Yeah.

ROSE
They’re —

She gestures.

ROSE (CONT’D)
—moving around me before I even —

She stops.

He watches her.

LEMON
They’re expecting it now.

Beat.

ROSE
But I didn’t —

LEMON
Doesn’t matter.

Simple.

Not harsh.

Just true.

ROSE
So now it’s just —

She struggles.

ROSE (CONT’D)
—me?

LEMON
It always was.

Beat.

LEMON (CONT’D)
Just not the way you think.

Rose looks back toward the courtyard.

Where:

Groups are tighter.

Movements more controlled.

And spacing around her… wider.

The Equalizer hums faintly.

Constant.

Unseen.

IRIS (O.S.)
It’s not a problem.

Rose turns.

Iris stands a short distance away.

Calm.

Composed.

Not confrontational.

IRIS (CONT’D)
It’s just noticeable.

A beat.

ROSE
I’m not —

She stops.

Doesn’t know what to say.

Iris nods slightly.

Like she understands.

IRIS
Of course.

Beat.

IRIS (CONT’D)
No one thinks you’re doing it on purpose.

That lands worse.

Iris turns — walks away.

The idea stays behind.

Rose stands there.

Now fully aware — it’s not just happening.

It’s being seen.

CUT TO:`,
  },
  {
    id: "scene-11",
    act: 2,
    sceneNumber: "11",
    title: "Waterfall Discovery",
    slug: "waterfall-discovery",
    heading: "EXT. OUTER DISTRICT PATH — LATE AFTERNOON",
    pageStart: 45,
    pageEnd: 50,
    equalizerPresence: "off",
    beat: "ACT 2A · Transition to truth — outside system; tonal release; no prior-mechanics repeat; builds toward midpoint; quiet discovery; seeds Rose’s nature (environment responds); Lemon’s first unease",
    summary:
      "Paths fray; Equalizer hum fades—nothing corrects Rose’s uneven steps. Past the tree line, growth is irregular but not wrong. Bluebell brightens—off-leash for the first time. At the waterfall she breathes without adjusting; water ripples stay natural. Subtle plant response to her presence—she doesn’t clock it; Lemon does (‘…okay’) and tightens. She laughs once: this is better.",
    characters: ["rose", "lemon", "bluebell"],
    setId: "wild-waterfall",
    notes:
      "No UI, no social rumor beat—pure geography and sensation. Keep plant response gentle; Lemon withholds the frame. Midpoint setup in sc.12 pays off escalation. **Bluebell:** finger-landing ritual; name spoken once quietly—no Lemon commentary required (optional glance only if cast finds it).",
    content: `EXT. OUTER DISTRICT PATH — LATE AFTERNOON

The structure fades as they move outward.

Paths lose their precision.

Curves become irregular.

Spacing widens.

The hum of the Equalizer — fades.

Rose notices immediately.

She slows.

ROSE
It’s quieter.

LEMON
Yeah.

They keep walking.

Fewer students here.

Less correction.

Less expectation.

Rose’s steps — still uneven — but nothing reacts.

She looks behind her.

Nothing shifts.

No one adjusts.

She takes another step.

Waits.

Nothing.

ROSE
It didn’t —

She gestures.

ROSE (CONT’D)
—do anything.

LEMON
Nope.

He keeps walking.

Doesn’t explain.

EXT. TREE LINE — CONTINUOUS

They pass beyond the last structured path.

The environment changes.

Growth is less uniform.

Branches extend unevenly.

Petals open in different directions.

Colors vary.

Nothing matches — but nothing feels wrong.

Rose stops.

Taking it in.

ROSE
This isn’t —

She searches.

ROSE (CONT’D)
—aligned.

LEMON
No.

Beat.

LEMON (CONT’D)
It’s just growing.

He moves ahead.

Parts branches lightly.

Disappears through.

Rose hesitates.

Looks back toward the district — perfect. Controlled.

Then forward — irregular. Alive.

She follows.

EXT. WATERFALL CLEARING — MOMENTS LATER

A hidden space.

Water flows over layered stone.

Not symmetrical.

Not controlled.

Constant movement.

Plants grow freely around it — overlapping.

Crossing.

Unstructured.

And yet — balanced.

Lemon steps onto a rock near the edge.

Moves with the terrain — not correcting — just responding.

Rose enters slowly.

Careful at first — then stops.

Listens.

No hum.

No pressure.

Just — water.

Wind.

Movement.

She takes a breath.

It comes naturally.

For the first time — she doesn’t adjust it.

ROSE
(quiet)
Okay…

She steps forward.

No correction.

No reaction.

She takes another step — still uneven — still hers —

Nothing happens.

ROSE (CONT’D)
Why isn’t it —

LEMON
Because it’s not trying to fix you.

Simple.

Rose processes that.

She moves closer to the water.

Kneels.

Touches it.

Ripples spread — natural.

Uncontrolled.

They don’t correct.

They just… move.

She smiles.

Small.

Real.

Bluebell lifts off her sleeve — brighter than we’ve seen.

Circles her once — lazy — certain.

Rose offers a finger.

It lands.

She exhales — like something finally caught up to her.

ROSE
(whisper)
Hi, Bluebell.

Beat.

EXT. WATERFALL EDGE — CONTINUOUS

Lemon sits.

Watches her.

LEMON
You’re different out here.

ROSE
I’m the same.

Beat.

She looks at her hands.

ROSE (CONT’D)
It just —

She struggles.

ROSE (CONT’D)
—doesn’t feel wrong.

Lemon nods.

Doesn’t add to it.

She stands.

Moves further into the clearing.

Steps where she wants.

Not where she should.

She turns — slowly — taking in the space.

Something shifts.

Subtle.

Around her — plants respond.

Not dramatically.

Not controlled.

Just — slight growth.

A petal opening wider.

A vine extending a fraction.

The air feels — fuller.

Rose doesn’t notice yet.

She closes her eyes.

Breathes.

Natural.

Unforced.

The environment responds again — slightly stronger.

Lemon sees it.

Still.

Focused.

Not afraid — but aware.

LEMON
…okay.

Quiet.

Rose opens her eyes.

Looks around.

Everything looks the same.

But feels — different.

ROSE
What?

LEMON
Nothing.

Beat.

LEMON (CONT’D)
Just —

He stops.

Doesn’t finish.

Doesn’t want to frame it.

Rose looks back at the district in the distance.

Perfect geometry.

Controlled structure.

Then back at the clearing.

Irregular.

Alive.

She steps again — freely.

No correction.

No pressure.

She laughs — just once.

Unexpected.

ROSE
Okay.

Beat.

ROSE (CONT’D)
This is better.

Lemon smiles slightly.

But something in him — tightens.

He feels it.

Even if she doesn’t.

He looks at her — then at the environment — growing, subtly responding.

Not controlled.

Not balanced — by their rules.

But working.

CUT TO:`,
  },
  {
    id: "scene-12",
    act: 2,
    sceneNumber: "12",
    title: "Midpoint (False Victory)",
    slug: "midpoint",
    heading: "EXT. WATERFALL CLEARING — LATE AFTERNOON",
    pageStart: 50,
    pageEnd: 55,
    equalizerPresence: "off",
    beat: "ACT 2A · Midpoint — truth revealed (she’s not wrong; organic connection undeniable), stakes double (her effect strengthens; Lemon destabilizes); false victory (fits into herself, cost unseen); emotional peak + undertow; system awareness seeded in-scene (distant pulse)—no cutaway",
    summary:
      "Warmer light; Rose moves unforced, names ‘I’m not trying’ / ‘it’s working.’ Clearing responds openly—she sees it’s her. Bluebell traces her orbit—bright, obvious, unruly. Lemon enters her space; his body can’t quite adjust; she pulls back, he says don’t. A faint district pulse—barely heard—something noticed. She owns the space; he’s awe, connection, unease; no UI cut—everything works without the machine here.",
    characters: ["rose", "lemon", "bluebell"],
    setId: "wild-waterfall",
    notes:
      "Escalate sc.11’s subtle growth into clear, uneven Bloom. Keep pulse diegetic (distance), not intercut HUD. Lemon: thinner smile, balance off—love and wrong voltage without speechifying. **Bluebell:** visible satellite—ties Rose’s truth to something concrete and silent.",
    content: `EXT. WATERFALL CLEARING — LATE AFTERNOON

The light has shifted.

Warmer now.

The clearing feels fuller.

More alive.

Rose stands near the water — looser than before.

No correction.

No hesitation.

She moves — not carefully — just… naturally.

Lemon watches from a nearby rock.

Still.

Observing.

ROSE
(quiet, almost to herself)
It’s not doing anything.

She takes a step — turns — lets her arms move slightly with it.

No control.

No structure.

She laughs — small, surprised.

ROSE (CONT’D)
I’m not —

She stops.

Realizing it.

ROSE (CONT’D)
—I’m not trying.

Lemon nods.

LEMON
Yeah.

Beat.

ROSE
And it’s —

She looks around.

Searching for the word.

ROSE (CONT’D)
—it’s working.

That lands.

For both of them.

Rose steps closer to the center of the clearing.

Barefoot now.

She didn’t even notice taking her shoes off.

She steps into shallow water.

Ripples spread — not correcting — just moving outward.

She turns slowly.

Breath steady.

Unforced.

Something shifts — more noticeable now.

Around her — plants respond.

A cluster of petals opens.

A vine extends.

Color deepens in the surrounding growth.

Not symmetrical.

Not controlled.

But intentional.

Alive.

Bluebell traces a small arc around her — glowing — unashamed.

Rose sees it this time.

Stops.

ROSE (CONT’D)
Wait —

She looks at her hands — then at the plants.

Steps again — the response grows.

Slight — but clear.

ROSE (CONT’D)
I didn’t —

She looks at Lemon.

ROSE (CONT’D)
Did you —

He shakes his head.

Focused.

LEMON
That’s you.

A beat.

ROSE
No, I’m not —

She tests it.

Steps again — slower.

The environment responds again.

Petals shift toward her.

Growth follows her movement — not evenly — but naturally.

Rose’s breath catches.

Not fear.

Recognition.

ROSE (CONT’D)
I’m not —

She stops correcting herself.

For the first time.

Just —

ROSE (CONT’D)
I’m not wrong.

Quiet.

But clear.

That lands.

Deep.

Lemon stands.

Moves toward her.

Careful now.

LEMON
Okay.

He steps into the clearing.

Closer to her.

The moment he enters her space — something shifts.

Not in the environment — in him.

His posture tightens slightly.

His breath shortens.

Subtle.

But real.

He doesn’t stop.

LEMON (CONT’D)
Just —

He steps closer.

The growth intensifies slightly.

Not controlled — just more.

Lemon reacts — just a fraction.

Like his body is trying to adjust — and can’t fully.

ROSE
Are you okay?

LEMON
Yeah.

Too quick.

He steadies himself.

But his balance is off — slightly.

He compensates.

Not smoothly.

He’s not used to this.

ROSE
You don’t look —

LEMON
I’m fine.

Beat.

He smiles — but it’s thinner now.

LEMON (CONT’D)
It’s just —

He gestures vaguely.

LEMON (CONT’D)
Different.

That word lands again.

Rose looks around.

At what she’s doing.

At how the space responds.

Then at him.

ROSE
I can stop.

She pulls back — instinctively.

The growth settles.

Not gone — just quieter.

Lemon exhales — barely noticeable.

LEMON
No.

Beat.

LEMON (CONT’D)
Don’t.

He means it.

But he’s also uneasy.

Both are true.

A moment.

They stand there — in something real.

Not controlled.

Not balanced by rules — but working.

In the distance — barely audible — a faint pulse.

Not from here.

From the district.

Neither of them fully registers it.

But something — has noticed.

Rose steps again.

More confident now.

Not testing — moving.

The environment responds — freely.

Alive.

She smiles.

Not small this time.

Full.

ROSE
Okay.

Beat.

ROSE (CONT’D)
Okay.

She turns — taking in the space.

Owning it.

For the first time — she fits.

Not into the system — into herself.

Lemon watches her.

Still.

A mix of:

Awe.

Connection.

And something else — not fear.

But close.

The water continues to move.

The growth continues to respond.

The system — for the first time — is not present.

And everything — is working.

CUT TO:`,
  },
  {
    id: "scene-13",
    act: 2,
    sceneNumber: "13",
    title: "Bad Guys Close In (Edelweiss Escalates)",
    slug: "edelweiss-escalates",
    heading: "EXT. FLOWER HIGH DISTRICT — LATE AFTERNOON",
    pageStart: 55,
    pageEnd: 60,
    equalizerPresence: "on",
    beat: "ACT 2B · Escalation — system pushes back (anticipate, contain); direct pickup from midpoint; phase 1: adjust → restrict → contain; Edelweiss calm/precise; containment named; suppression ‘works’—reduction = stability—wrong lesson",
    summary:
      "Rose re-enters: hum stronger, pre-correction in the crowd. Atrium is tighter; Edelweiss frames the waterfall as unmeasured space—variance, accumulation, containment until compensation. Pressure and held distance; Rose shrinks movement; hum softens, spacing eases. She’s contained and not herself—he’s satisfied technically.",
    characters: ["rose", "edelweiss", "lotus"],
    setId: "flower-high-atrium",
    notes:
      "Continuous from sc.12—no reset. Edelweiss never snarls; logic as blade. ‘Feeling is not an indicator of stability.’ Plant phase-2 payoffs later; here lock containment + compliant reduction. **Lotus:** watches floor pattern — **inventory** Rose without accusation — notes; **first hairline crack** in ‘always a fix.’",
    content: `EXT. FLOWER HIGH DISTRICT — LATE AFTERNOON

Rose re-enters the district.

From the outer path — into structure.

Immediately — the difference is clear.

The air tightens.

The Equalizer hum returns — stronger than before.

Rose feels it.

Stops.

ROSE
(quiet)
Okay…

She takes a step forward.

The system reacts — faster this time.

Students ahead subtly adjust — before she even reaches them.

Pre-correction.

She notices.

ROSE (CONT’D)
They’re —

She doesn’t finish.

She keeps walking.

Trying not to think about it.

INT. BIOLOGY ATRIUM — MOMENTS LATER

The atrium is active — but different now.

More controlled.

More precise.

Students are spaced more evenly.

Movements tighter.

Less variation.

Edelweiss stands at the center.

Watching.

JASMINE — secondary mark — board **clipped** — smile **held** small — **inventory** face — she **tracks** Rose’s entry — **not accusation** — **habit**.

Rose enters.

The moment she crosses into the central space — the Equalizer responds.

A pulse.

Sharper than before.

Lotus’s pen **stalls** — **half a second** — then **moves** again — **trained**.

**Nearby** students tighten spacing — a half-beat catch in Edelweiss’s sightline — not a wash through the whole bowl.

Edelweiss turns.

Sees her.

Not surprised.

He steps toward her.

Calm.

Measured.

ROSE
I didn’t —

She stops herself.

Doesn’t know what to say yet.

EDELWEISS
You were outside the system.

Not a question.

Rose nods.

ROSE
It was fine.

Beat.

ROSE (CONT’D)
It was better.

Edelweiss considers that.

No reaction.

EDELWEISS
Of course.

Beat.

EDELWEISS (CONT’D)
There are no constraints there.

Rose frowns slightly.

ROSE
It wasn’t —

She searches.

ROSE (CONT’D)
—it wasn’t unstable.

Edelweiss watches her.

Precise.

EDELWEISS
Instability is not always immediate.

A beat.

EDELWEISS (CONT’D)
It accumulates.

He gestures subtly upward.

The Equalizer shifts.

Petal structures aligning tighter.

Light focusing.

The hum deepens.

EDELWEISS (CONT’D)
This system prevents that.

Rose feels it now — more strongly.

Like something is pushing against her.

Separating.

She shifts her stance — tries to adjust —

It makes it worse.

The system responds instantly.

Students nearby tighten their posture.

Preemptive correction.

ROSE
I’m not —

She stops.

Breath short.

ROSE (CONT’D)
I’m not doing anything.

EDELWEISS
You are introducing variance.

Simple.

Final.

ROSE
I wasn’t —

She thinks of the waterfall.

The growth.

The balance.

ROSE (CONT’D)
It worked out there.

EDELWEISS
Out there —

Beat.

EDELWEISS (CONT’D)
—there is no system to measure failure.

That lands — but doesn’t convince her.

ROSE
It didn’t feel like failure.

Edelweiss studies her.

A longer beat this time.

EDELWEISS
Feeling is not an indicator of stability.

The Equalizer pulses again.

Stronger.

Rose winces slightly.

Not pain — pressure.

Around her — spacing increases.

Students are no longer just adjusting — they are holding distance.

Subtle.

But deliberate.

ROSE
Why is it —

She looks around.

ROSE (CONT’D)
—doing that?

EDELWEISS
Containment.

He says it calmly.

Like it’s obvious.

ROSE
Containment?

EDELWEISS
Until the system can compensate.

Rose absorbs that.

Looks at the space around her.

The distance.

The adjustment.

It’s not just reaction anymore.

It’s planned.

ROSE
So I’m —

She stops.

Doesn’t want to say it.

Edelweiss doesn’t help her.

EDELWEISS
You are outside the optimal range.

A beat.

ROSE
I can fix it.

Quick.

Desperate.

ROSE (CONT’D)
I just need to —

She starts adjusting herself again.

Smaller movements.

Tighter control.

Trying to reduce herself.

The system responds — immediately.

The hum softens slightly.

Less pressure.

Edelweiss notices.

EDELWEISS
Yes.

Beat.

EDELWEISS (CONT’D)
Reduction improves stability.

That lands.

Dangerous.

Rose focuses.

Shrinks her movement further.

Less expression.

Less presence.

The system stabilizes more.

Students nearby relax slightly.

Spacing reduces.

It works — on the surface.

ROSE
(quiet)
Okay…

She holds it.

Tight.

Controlled.

Not herself.

Edelweiss watches.

Satisfied — not emotionally.

Technically.

EDELWEISS
Maintain that.

He turns — moves away.

Already done.

Rose stands there — contained.

Reduced.

The system calm around her.

For now.

But her breathing — shallow.

Forced.

She holds it anyway.

CUT TO:`,
  },
  {
    id: "scene-14",
    act: 2,
    sceneNumber: "14",
    title: "Iris Manipulation (Lemon Reframed)",
    slug: "iris-manipulation",
    heading: "EXT. COURTYARD — EARLY EVENING",
    pageStart: 60,
    pageEnd: 65,
    equalizerPresence: "implied",
    beat: "ACT 2B · **Perception / rumor engine** — Iris reframes waterfall + courtyard without new ‘sequence waver’ in atrium; Rose approaches Lemon because **his approval felt wrong** (praising the small version), not because lab choreography failed again.",
    summary:
      "Rose holds smaller; Daisy says steadier. **Courtyard-only:** eyeline with Lemon — his nod lands **cold** — she crosses **before** any atrium beat. Iris: ‘happens around you,’ ‘he just reacted,’ ‘not on purpose.’ Lemon can’t counter cleanly; Rose doubles down — hollow stability, thinner connection.",
    characters: ["rose", "daisy", "lemon", "iris"],
    setId: "flower-district",
    notes:
      "**Anti-repeat:** cut sc.4/9-style **atrium stutter** as trigger. Pure framing; Iris gentle, exit early. Lemon’s hesitation = evidence to Rose.",
    content: `EXT. COURTYARD — EARLY EVENING

Festival prep continues.

More refined now.

Groups tighter.

Sequences cleaner.

Movements sharper.

Rose stands at the edge of a formation — holding herself smaller.

Contained.

Her movements reduced.

It’s working.

Mostly.

Daisy adjusts beside her — glances at Rose.

DAISY
You’re steadier.

Rose nods.

Focused.

ROSE
I’m just — keeping it —

She makes a small gesture.

ROSE (CONT’D)
—contained.

Daisy nods.

Not fully convinced — but not pushing.

Across the courtyard — Lemon stands near the edge.

Watching.

He sees her — different now.

Tighter.

Less present.

Their eyes meet — briefly.

He gives a small nod.

She tries to return it — overcontrolled.

Not natural.

The moment passes.

Rose **doesn’t** wait for another lab stumble to authorize this.

She clocks Lemon’s nod — **polite pride in the tightened version of her.**

Wrong kind of win.

She crosses **now** — before she can perform her way out of the feeling.

EXT. COURTYARD — MOMENTS LATER

Rose moves quickly toward Lemon.

Still holding control — but strained.

ROSE
Are you —

She stops herself.

Less words now.

ROSE (CONT’D)
You looked —

Lemon shrugs.

Too quickly.

LEMON
I’m fine.

ROSE
You did that before.

Beat.

ROSE (CONT’D)
At the waterfall.

He looks away.

LEMON
It’s different here.

ROSE
Because of me?

He doesn’t answer.

That’s enough.

ROSE (CONT’D)
I can fix it.

Immediate.

Instinct.

ROSE (CONT’D)
I just need to —

LEMON
(interrupting)
You don’t.

But it’s softer now.

Less certain.

He doesn’t fully believe it himself.

A beat.

ROSE
Then why —

She stops.

Can’t finish.

He doesn’t answer.

Because he doesn’t know.

That silence — does the damage.

ANGLE — IRIS, NEARBY

Watching.

Not intruding.

Just close enough.

She steps in — calm.

Measured.

IRIS
It’s not a big thing.

Both turn.

She’s not confronting.

She’s joining.

IRIS (CONT’D)
It just… happens around you.

Soft.

Observational.

Not accusatory.

ROSE
I’m not —

She stops.

Doesn’t have the words.

IRIS
Of course.

A small nod.

Agreeing.

Validating.

IRIS (CONT’D)
No one thinks you’re doing it on purpose.

That lands harder.

Rose looks at Lemon.

Searching.

ROSE
Did you —

She can’t finish it.

Lemon hesitates.

Just a fraction.

But visible.

That’s all Iris needs.

IRIS
He just reacted.

Beat.

IRIS (CONT’D)
Anyone would.

She says it gently.

Reasonable.

LEMON
That’s not —

He starts.

Stops.

Because he doesn’t have a clean counter.

ROSE
(quiet)
You pulled back.

He exhales.

LEMON
I didn’t —

Beat.

LEMON (CONT’D)
I just —

He doesn’t know what it was.

And that — confirms it for her.

Iris doesn’t press.

She doesn’t need to.

IRIS
It’s not a problem.

Beat.

IRIS (CONT’D)
It’s just noticeable.

Same line.

Different weight now.

She steps back.

Leaves the idea behind.

EXT. COURTYARD — CONTINUOUS

Rose stands still.

Holding herself tighter.

More controlled.

More contained.

She looks at Lemon — then at the space between them.

ROSE
I can keep it steady.

Quick.

Determined.

ROSE (CONT’D)
I just need to —

She reduces herself further.

Less movement.

Less presence.

The system responds — stabilizes.

Lemon feels it.

Less pressure now.

But also — less her.

He notices.

ROSE (CONT’D)
See?

Quiet.

Proving it.

Lemon nods — but it’s not relief.

It’s something else.

He’s losing something — and he knows it.

But can’t name it.

Rose holds it — perfectly controlled now.

But hollow.

CUT TO:`,
  },
  {
    id: "scene-15",
    act: 2,
    sceneNumber: "15",
    title: "System Instability Grows",
    slug: "system-instability",
    heading: "EXT. FLOWER HIGH DISTRICT — EVENING",
    pageStart: 65,
    pageEnd: 70,
    equalizerPresence: "on",
    beat: "ACT 2B · Escalation — problem expands beyond Rose; suppression proves insufficient; district-wide strain; Edelweiss pivots to system; emotional + external stakes converge; Rose’s ‘I am the problem’ cracks",
    summary:
      "District and atrium run hotter: hum louder, moves tighter. Rose is reduced to near-invisible—sequence holds until delays and **stacking micro-errors jump between adjacent knots**. Courtyard practice frays; clamp-down locks then breaks; illusion shatters. Edelweiss orders stabilization, watches the machine—not her. Rose did everything right; it didn’t matter. ‘This isn’t just her’ begins.",
    characters: ["rose", "edelweiss"],
    setId: "flower-district",
    notes:
      "No Iris—mechanical/social strain only. No hero blame chorus; focus cascade + overcorrection. ASSISTANTS silent tech presence. Rose’s ‘I fixed it’ unanswered.",
    content: `EXT. FLOWER HIGH DISTRICT — EVENING

The district is active — but tighter.

More controlled than before.

Students move with sharper precision.

Less variation.

Less freedom.

The Equalizer hum — louder now.

Still subtle — but constant.

INT. ATRIUM — CONTINUOUS

The central space is operating at higher intensity.

Light from the Equalizer is more focused.

Petal structures pulled tighter inward.

Students maintain strict posture.

Breathing measured.

Rose stands within her group — reduced.

Controlled.

Almost invisible.

Her movements are minimal.

Her presence — contained.

The system is stable around her.

On the surface.

Edelweiss stands at the center.

Observing.

Everything.

Precise.

A signal is given.

A larger coordinated Bloom sequence begins.

Multiple groups.

Layered timing.

More complex.

Phased groups hit **stacked beats** — Bloom answers readable **layer by layer** in frame (foreground knot, mid, far), not a room-wide fluid sim.

It’s working.

Clean.

Exact.

Rose enters her phase — perfect timing.

Minimal output.

No disruption.

The system holds.

For a moment — it works.

Then — a delay.

Not from Rose.

From across the atrium.

A group enters half a beat late.

Small.

But noticeable.

The system compensates — corrects — but slower.

Another delay.

Elsewhere.

A student overcompensates — too sharp.

Their Bloom response spikes — then flattens.

The rhythm wavers.

Rose notices.

Her focus breaks — just slightly.

The system reacts — but this time — the disturbance doesn’t center on her.

It **skips** — knot to adjacent knot.

STUDENT
(quiet)
That’s not —

Another student adjusts too late.

Shoulders collide.

A sequence stutters.

Edelweiss watches.

Still calm — but more focused now.

The Equalizer pulses — stronger.

Trying to compensate.

Trying to enforce alignment.

But — each correction causes another micro-delay somewhere else.

EXT. COURTYARD — CONTINUOUS

The fray **shows in the next ring** of practice.

Students in those knots — lose timing.

Not dramatically — but consistently.

A Bloom display flickers unevenly.

A formation resets — twice.

Someone drops out of sequence — rejoins late.

The system is still functioning — but it’s working harder.

Much harder.

INT. ATRIUM — CONTINUOUS

Rose stands still — doing everything right.

Minimal movement.

Perfect timing.

No variance.

And still — the system destabilizes.

ROSE
(quiet)
I’m not —

She looks around.

ROSE (CONT’D)
I’m not doing anything.

For the first time — that’s true.

Nearby — a student stumbles slightly.

Catches themselves — **but the fix costs the next faces in line a breath** — again.

The Equalizer hum deepens.

Pressure increases.

Students begin to feel it now.

Not confusion — strain.

STUDENT #1
Something’s off.

STUDENT #2
It’s not holding.

Rose steps back.

Careful — still controlled.

Still reduced.

Nothing changes.

She looks toward Edelweiss.

He’s already watching the system.

Not her.

That’s new.

EDELWEISS
(to assistants, low)
Increase stabilization.

Assistants adjust the interface.

The Equalizer tightens further.

Light sharpens.

The hum intensifies.

The system clamps down.

Harder.

For a moment — everything locks.

Still.

Perfect.

Then — a sharper break.

A Bloom node flashes too bright — then cuts.

A sequence collapses — not violently — but clearly wrong.

Silence.

The system recovers.

Slowly.

But the illusion is broken.

Rose stands — still perfectly controlled.

Still reduced.

Still “correct.”

And it didn’t matter.

ROSE
(quiet)
I fixed it.

Beat.

ROSE (CONT’D)
I did what it said.

No one answers.

Because — that’s not the problem anymore.

Across the atrium — students look around.

Uncertain.

The system hums — strained now.

Not smooth.

Working.

Forcing.

Rose looks at her hands.

At how small she’s made herself.

Then at the system — struggling anyway.

A realization begins — not complete — but forming.

This isn’t just her.

CUT TO:`,
  },
  {
    id: "scene-16",
    act: 2,
    sceneNumber: "16",
    title: "Rose’s Wrong Choice (Doubling Down on Suppression)",
    slug: "wrong-choice",
    heading: "EXT. COURTYARD — NIGHT APPROACHING",
    pageStart: 70,
    pageEnd: 75,
    equalizerPresence: "implied",
    beat: "ACT 2B · **Wrong choice = new moral trade** — stability vs connection (‘don’t pull him into the fault line’ / ‘stay steady alone’), not ‘smaller Rose again’ as the only lever; she **names** the trade; atrium win confirms the lie; Lemon names the cost in attachment, not technique.",
    summary:
      "Daisy: wasn’t just you / everywhere — Rose blames herself, commits **explicit trade:** festival week clean, won’t center Lemon in the risk; ‘he stays clear, I stay steady.’ Atrium: minimal Rose — hum softens; Daisy ‘steadier’ (not quite yes). Courtyard: demo control — no ripple; Lemon feels less pressure **and** less **her**; callback to the trade; she reads retreat as proof. Hollow alignment.",
    characters: ["rose", "daisy", "edelweiss", "lemon"],
    setId: "flower-district",
    notes:
      "Active choice, not accident. Edelweiss: watch, no speech—reward is silence. Lemon: can’t name what’s missing. Rose: fewer fillers here—certainty mistaken for truth.",
    content: `EXT. COURTYARD — NIGHT APPROACHING

The district is quieter — but tense.

Festival structures remain in place.

Lights softer now — but the Equalizer hum — stronger.

Constant.

Students move more carefully.

Less natural.

More controlled.

Rose stands near the edge of a rehearsal space.

Still holding herself tightly.

Still reduced.

Watching.

Trying to understand what just happened.

Daisy approaches.

Careful.

DAISY
That wasn’t just you.

Simple.

Direct.

Rose shakes her head immediately.

ROSE
No.

Too fast.

ROSE (CONT’D)
It was earlier.

Beat.

ROSE (CONT’D)
I started it.

Daisy studies her.

Doesn’t agree.

But doesn’t push yet.

DAISY
It’s happening everywhere.

ROSE
Because it spread.

Quick.

Defensive.

ROSE (CONT’D)
If I stop it —

She doesn’t finish.

Because she doesn’t know how.

Daisy steps closer.

DAISY
You already are.

Beat.

DAISY (CONT’D)
You’re steady now.

That lands.

Rose holds onto it.

ROSE
Exactly.

She straightens further.

Even tighter.

Even smaller.

ROSE (CONT’D)
That’s what it needs.

She bites — **decides** — something concrete.

ROSE (CONT’D)
Festival week — I hold it **clean**. I don’t pull him into the center of… whatever this is.

DAISY
Rose — that’s not what I meant—

ROSE
**Trade.** He stays off the fault line. I stay **steady.**

Daisy doesn’t get to finish.

Rose is already moving — **sure**.

She takes a step into the rehearsal space.

Measured.

Precise.

Minimal.

INT. ATRIUM — CONTINUOUS

The space is running in controlled cycles.

Smaller sequences.

Testing stability.

Rose steps into position.

More contained than before.

Barely moving.

Barely present.

Edelweiss notices.

Glances.

Says nothing.

A sequence begins.

Short.

Simple.

Rose enters — perfect timing.

Minimal output.

No variance.

The system responds — immediately.

Stabilization improves.

The hum softens slightly.

Nearby students relax.

Spacing reduces.

The system holds.

Clean.

Controlled.

ROSE
(quiet)
See.

She holds it.

Perfect.

Daisy watches.

Concern growing.

Another sequence begins.

More complex.

Rose maintains control.

Suppresses everything unnecessary.

The system holds again.

Better this time.

ROSE (CONT’D)
It works.

She looks at Daisy — needing confirmation.

Daisy hesitates.

Then —

DAISY
It’s… steadier.

Not agreement.

But close enough.

That’s all Rose needs.

EXT. COURTYARD — CONTINUOUS

Rose moves through the district — fully controlled now.

Every movement reduced.

Every reaction contained.

Students pass — no early adjustments.

No widening gaps.

The system stabilizes around her.

It’s working.

She finds Lemon.

Standing near the edge again.

Watching.

ROSE
I figured it out.

Direct.

No hesitation.

Different.

Lemon studies her.

Something is off.

LEMON
Did you.

ROSE
Yeah.

She demonstrates — moves carefully.

Precisely.

Minimal.

The system doesn’t react.

No ripple.

ROSE (CONT’D)
I just had to —

She searches —

ROSE (CONT’D)
—stop pushing.

Half true.

But not the whole truth.

Lemon steps closer.

Immediately — he feels it.

Less pressure.

But also — less connection.

LEMON
You **promised** you’d keep me out of it.

Beat.

LEMON (CONT’D)
You did.

ROSE
I am.

Too fast.

LEMON
You’re not **here.**

He stops — hating how that sounds.

ROSE
I’m fine.

Too quick.

LEMON
You don’t feel —

He trails off.

She doesn’t let him finish.

ROSE
It’s working.

Beat.

ROSE (CONT’D)
That’s what matters.

He looks at her.

Really looks.

She’s stable.

Yes.

But — flattened.

Reduced.

LEMON
That’s not —

He stops again.

Because he can’t explain it.

ROSE
I can keep it like this.

Firm.

Committed.

Behind them — the Equalizer hums.

Smoother.

More controlled.

For now.

Rose holds herself — perfectly contained.

Perfectly aligned.

And completely — not herself.

Lemon steps back.

Slightly.

Not because of pressure — because something is missing.

He doesn’t say anything.

Rose watches him — misreading it.

ROSE (CONT’D)
See?

Quiet.

Certain.

He nods.

But it’s not agreement.

CUT TO:`,
  },
  {
    id: "scene-17",
    act: 2,
    sceneNumber: "17",
    title: "Major Disruption (All Is Lost Setup)",
    slug: "major-disruption",
    heading: "EXT. FLOWER HIGH DISTRICT — NIGHT",
    pageStart: 75,
    pageEnd: 80,
    equalizerPresence: "on",
    beat: "ACT 2B · Escalation peak — false solution (sc.16 suppression) collapses under max control; public cascade; Lemon emotional + physical hit; Rose’s ‘I am the problem’ locks; Edelweiss + crowd link her to failure",
    summary:
      "Bloom Festival night: phased sequence holds until strain fractures elsewhere; Rose shrinks further; Lemon, too close, buckles; she breaks formation to reach him—surge, collapse. Brief suppress eases him; he whispers don’t. System fails messy; silence broken. All eyes; Iris silent; Edelweiss connects Rose to the break. She believes ‘I did this’ absolutely.",
    characters: ["rose", "lemon", "narcissa", "iris", "edelweiss"],
    setId: "flower-district",
    notes:
      "Phases on page as rhythm guides only. Consequence of sc.16. No speechifying from Iris—presence. Edelweiss: look, not lecture.",
    content: `EXT. FLOWER HIGH DISTRICT — NIGHT

The Bloom Festival is underway.

Lights glow softly across the petal-shaped blocks.

Everything is organized.

Precise.

Controlled.

More than ever.

EXT. CENTRAL COURTYARD — CONTINUOUS

A large gathering.

Students arranged in layered formations.

Multiple groups prepared for a full sequence.

Narcissa stands at the center.

Perfect.

Composed.

Iris nearby — watching.

Not leading.

Just observing.

Rose stands within an outer formation.

Completely contained.

Every movement reduced.

Every response controlled.

She looks — perfect.

The Equalizer hum — deep.

Powerful.

Holding everything together.

A signal.

The sequence begins.

PHASE 1 — CONTROL

Bloom answers hit **by phase** — each layer legible in frame, not a tide through the crowd.

Layered timing.

Clean execution.

Everything holds.

Even under scale.

Rose enters her phase — perfect timing.

Minimal output.

No variance.

The system stabilizes around her.

ROSE
(quiet, to herself)
Okay.

PHASE 2 — PRESSURE

The sequence intensifies.

More layers.

More complexity.

The Equalizer tightens.

Light sharpens.

The hum deepens.

Students maintain control — but it’s harder now.

Breathing tightens.

Movements become rigid.

Rose reduces herself even further.

Barely present.

The system holds — but strained.

PHASE 3 — FAILURE BEGINS

A delay — not from Rose.

From a secondary group.

Half a beat late.

The system compensates — harder.

Another delay — elsewhere.

Someone overcorrects — too sharp.

The pattern fractures.

Not completely — but enough.

PHASE 4 — CASCADE

The Equalizer pulses — aggressively.

Trying to force alignment.

The corrections amplify the problem.

Each adjustment creates another imbalance.

A Bloom response spikes too high — then collapses.

A student stumbles — another grabs them — late.

The rhythm breaks.

ROSE
(quiet)
No —

She tightens further.

Reduces everything.

Trying to hold it.

It doesn’t help.

PHASE 5 — LEMON

At the edge of the formation — Lemon.

He’s closer to the system now.

Too close.

He reacts first.

His posture tightens — more than before.

His breathing shortens.

LEMON
(under breath)
Okay…

He tries to steady himself.

Doesn’t work.

The pressure hits him harder — because of her.

Because of the system.

Rose sees him.

Everything else fades.

ROSE
Lemon —

She steps out of formation.

That breaks her control.

The system reacts instantly.

A sharp pulse.

The sequence collapses further.

PHASE 6 — COLLAPSE

Multiple groups lose timing.

Bloom responses misfire.

Light spikes unevenly.

Students stagger.

Not violently — but clearly.

The perfect system — is no longer perfect.

Lemon stumbles.

Harder this time.

Drops to one knee.

Catches himself — barely.

ROSE (CONT’D)
Stop —

She moves toward him.

Each step — makes it worse.

The Equalizer surges.

Trying to contain.

Trying to correct.

It can’t.

The system is now fighting itself.

Students pull back.

Break formation.

Confusion spreads.

STUDENT
What’s happening —

STUDENT #2
It’s not holding —

Rose reaches Lemon.

Kneels beside him.

Still trying to stay controlled — but failing.

ROSE (CONT’D)
I’m here — I —

She doesn’t know what to do.

LEMON
(strained)
It’s —

He can’t finish.

His body is trying to adjust — and can’t.

ROSE (CONT’D)
I can fix it —

Immediate.

Desperate.

She tightens herself again — suppresses everything.

For a moment — the pressure around him lessens.

Slightly.

He exhales.

But weakly.

LEMON
(quiet)
Don’t —

Barely audible.

She freezes.

PHASE 7 — SYSTEM FAILURE

The Equalizer pulses — too hard.

Too fast.

A section of the formation collapses entirely.

Bloom output cuts abruptly.

Silence.

The system stabilizes — but not cleanly.

Not fully.

It holds — but broken.

Rose kneels beside Lemon.

Holding herself tightly.

Completely reduced.

She looks around.

At the damage.

At the disruption.

At him.

ROSE
(quiet)
I did this.

No one corrects her.

Across the courtyard — eyes are on her.

Iris watches.

Says nothing.

Doesn’t need to.

Edelweiss stands at the center.

Looking at the system — then — at Rose.

The connection is made.

Public.

Visible.

Undeniable.

Rose looks back at Lemon.

Then at the space around her.

Then at herself.

ROSE (CONT’D)
I did this.

This time — she believes it completely.

CUT TO:`,
  },
  {
    id: "scene-18",
    act: 2,
    sceneNumber: "18",
    title: "All Is Lost (Confrontation + Emotional Break)",
    slug: "all-is-lost",
    heading: "EXT. CENTRAL COURTYARD — NIGHT",
    pageStart: 80,
    pageEnd: 83,
    equalizerPresence: "implied",
    beat: "ACT 2B · All Is Lost — false meaning locked; pickup from sc.17; emotional collapse (not mechanics); Iris framing pays off without new lines; Lemon’s silence reads as betrayal; Rose: ‘I hurt everything I touch’; withdraw = solution",
    summary:
      "Aftermath: strained hum, scattered students. Rose approaches Lemon carefully; he says fine; she maps waterfall hesitation + tonight into ‘you were scared.’ He can’t explain; she locks ‘it is me.’ Bluebell absent—no glow, no comfort; her shame reads physical. Distance, ‘stay out of it,’ controlled exit. Lemon frozen; Iris still—confirmation only.",
    characters: ["rose", "lemon", "iris", "bluebell"],
    setId: "flower-district",
    notes:
      "No Iris dialogue—sc.10/14 seeds pay off here. No crowd chorus. Rose tight speech, not spiral monologue. End: CUT TO (match spine), not hard cut to black unless picture locks later. **Bluebell:** gone or imperceptible—loss without line.",
    content: `EXT. CENTRAL COURTYARD — NIGHT

The aftermath.

The system is holding — but strained.

Not clean.

Not perfect.

Students regroup in scattered clusters.

Low voices.

Uncertainty.

The festival energy — gone.

Lemon sits off to the side.

Recovering.

Breathing steadier now — but not fully.

Rose stands a short distance away.

Still contained.

Still reduced.

She glances at her cuff —

Nothing.

No blue glow.

Not now.

Not moving.

Watching him.

She takes a step toward him.

Careful.

Controlled.

Like if she moves wrong — it will happen again.

ROSE
Are you —

She stops.

Starts again.

ROSE (CONT’D)
Are you okay?

Lemon nods.

Too quickly.

LEMON
Yeah.

Beat.

LEMON (CONT’D)
I’m fine.

She doesn’t believe it.

But she accepts it.

Because she needs to.

ROSE
That was —

She struggles.

ROSE (CONT’D)
—I didn’t —

She can’t finish the sentence.

A beat.

ROSE (CONT’D)
You pulled back.

Quiet.

Direct.

Lemon looks at her.

Doesn’t understand at first.

ROSE (CONT’D)
Before.

At the waterfall.

He exhales.

LEMON
I didn’t —

He stops.

Because — he doesn’t know what happened there.

That hesitation — lands.

ROSE
You did.

Beat.

ROSE (CONT’D)
You felt it.

LEMON
I just —

He tries.

Fails.

LEMON (CONT’D)
It was different.

ROSE
Different how?

Silence.

He doesn’t have the answer.

That’s it.

ROSE (CONT’D)
You were scared.

Not loud.

Not angry.

Certain.

LEMON
No —

But it’s weak.

Incomplete.

ROSE
You didn’t know what to do.

Beat.

ROSE (CONT’D)
And now —

She gestures to the courtyard.

To everything.

ROSE (CONT’D)
—this.

Lemon looks around.

Then back at her.

LEMON
That’s not —

He stops again.

Because he can’t connect it.

Not fully.

ROSE
It is.

Simple.

Final.

A beat.

ROSE (CONT’D)
I tried to fix it.

Her voice tightens — just slightly.

ROSE (CONT’D)
I did everything it said.

Beat.

ROSE (CONT’D)
And it still —

She gestures.

Doesn’t finish.

Lemon watches her.

Sees what’s happening — but too late.

LEMON
It’s not you.

ROSE
It is.

Immediate.

ROSE (CONT’D)
It always happens when I’m there.

Beat.

ROSE (CONT’D)
When I do anything.

She steps back — instinctively.

Creates distance.

ROSE (CONT’D)
I hurt everything I touch.

That lands.

Hard.

Lemon takes a step forward.

LEMON
You don’t —

She steps back again.

Faster.

ROSE
Don’t.

Quiet.

But firm.

ROSE (CONT’D)
You don’t have to —

She struggles.

ROSE (CONT’D)
—say anything.

Because she already decided.

A beat.

LEMON
I’m not scared of you.

Too late.

ROSE
You were.

Soft.

Certain.

He doesn’t answer.

Because he doesn’t know if that’s true.

And that — confirms it.

ROSE (CONT’D)
It’s fine.

She nods.

Small.

Contained.

ROSE (CONT’D)
I get it.

She turns.

LEMON
Rose —

She doesn’t stop.

ROSE
I just need to —

She searches.

Finds it.

ROSE (CONT’D)
—stay out of it.

That’s the lowest point.

She walks away.

Not running.

Not breaking.

Controlled.

Reduced.

Gone.

Lemon stands there.

Doesn’t follow.

Because he doesn’t know how to reach her.

Across the courtyard — Iris watches.

Still.

No satisfaction.

No reaction.

Just — confirmation.

The system hums in the background.

Holding.

Barely.

CUT TO:`,
  },
  {
    id: "scene-19",
    act: 2,
    sceneNumber: "19",
    title: "Dark Night of the Soul (Waterfall Return + Choice)",
    slug: "dark-night",
    heading: "EXT. OUTER DISTRICT PATH — NIGHT",
    pageStart: 83,
    pageEnd: 85,
    equalizerPresence: "off",
    beat: "ACT 2B · Dark Night — internal collapse; considers leaving for good; Daisy: ‘worse without you’ + quiet Iris correction (Lemon); Rose chooses return without knowing how to fix—transition to Act 3",
    summary:
      "Rose walks out; hum fades; at the clearing she almost chooses deeper exile. Bluebell returns—dim at first—insistence without words. Daisy: everyone noticed; not better without her; what Iris framed wasn’t what happened—Lemon said nothing; uncertainty ≠ bad. Two paths; Rose exhales, follows Daisy back—walking, not performing.",
    characters: ["rose", "daisy", "bluebell"],
    setId: "wild-waterfall",
    notes:
      "Quiet, sparse lines; Daisy doesn’t preach. Iris named only through Daisy’s correction. End: movement choice, not speech. **Bluebell:** first flicker → landing → interrupts ‘leave forever’ before Daisy’s entrance—argument without dialogue.",
    content: `EXT. OUTER DISTRICT PATH — NIGHT

Rose walks.

Away from the district.

Away from the light.

No hesitation now.

No adjustment.

Just distance.

The Equalizer hum — fades.

The structure loosens.

Curves widen.

Paths lose definition.

She doesn’t look back.

ROSE
(quiet, to herself)
It’s better.

Beat.

ROSE (CONT’D)
If I’m not there.

She keeps walking.

EXT. TREE LINE — CONTINUOUS

She pushes through the same branches as before.

Less careful now.

Doesn’t matter if she’s uneven.

No one is there to adjust.

EXT. WATERFALL CLEARING — MOMENTS LATER

The waterfall.

Unchanged.

Water moving freely.

Plants growing without pattern.

Rose steps in.

Slower now.

Not exploring.

Returning.

She stops near the water.

Doesn’t step into it.

ROSE
(quiet)
I just —

She exhales.

ROSE (CONT’D)
I just need to stay here.

She sits.

Still.

Silence.

Only water.

Time passes.

She watches the movement — uncontrolled.

Uncorrected.

ROSE (CONT’D)
It worked here.

Beat.

ROSE (CONT’D)
Out there —

She can’t finish it.

She looks at her hands.

At what she did.

At what she believes she did.

ROSE (CONT’D)
I made it worse.

A long beat.

A flicker at the treeline.

BLUEBELL — dim — drifts in.

Lands on the rock beside her.

Not on her — yet.

Rose doesn’t look — until she does.

Her jaw tightens — then loosens.

ROSE
(whisper)
…you came back.

She stands.

Walks toward the edge of the clearing.

Toward the path out.

Not back to the district — further away.

She stops.

The idea lands:

Leave.

Don’t return.

ROSE (CONT’D)
(quiet)
I can just —

Bluebell lifts — crosses — lands on her finger.

Small insistence.

Rose watches it.

ROSE (CONT’D)
(whisper)
I don’t know how.

She doesn’t finish.

Footsteps behind her.

Daisy.

DAISY
You left.

Rose doesn’t turn.

ROSE
Yeah.

DAISY
Everyone noticed.

A beat.

ROSE
It’s better.

Flat.

Certain.

ROSE (CONT’D)
If I’m not there.

Daisy watches her.

Doesn’t argue immediately.

DAISY
It’s not.

Rose shakes her head.

ROSE
You didn’t see —

DAISY
I did.

Beat.

DAISY (CONT’D)
I saw all of it.

Rose turns slightly.

Not fully.

DAISY (CONT’D)
It’s worse without you.

That lands.

Harder than anything else.

ROSE
No.

Immediate.

ROSE (CONT’D)
It stopped when I —

She stops.

Because it didn’t.

Daisy steps closer.

DAISY
It didn’t stop.

Beat.

DAISY (CONT’D)
It just… changed.

Rose processes that.

DAISY (CONT’D)
And earlier —

Beat.

DAISY (CONT’D)
That thing about Lemon —

Rose stiffens.

DAISY (CONT’D)
I heard it.

A beat.

DAISY (CONT’D)
That wasn’t what happened.

Silence.

ROSE
He didn’t say it.

Not a question.

DAISY
No.

A beat.

DAISY (CONT’D)
He didn’t say anything.

That lands differently.

ROSE
He pulled back.

DAISY
He didn’t know what it was.

Beat.

DAISY (CONT’D)
Neither did you.

Rose looks down.

DAISY (CONT’D)
That doesn’t mean it was bad.

Silence.

ROSE
I still —

She struggles.

ROSE (CONT’D)
Everything changes when I’m there.

DAISY
Yeah.

Beat.

DAISY (CONT’D)
It does.

Rose looks up.

DAISY (CONT’D)
And it’s worse when you’re not.

That lands.

Fully.

A long silence.

The waterfall continues.

Rose looks toward the district — faintly visible through the trees.

Then — toward the deeper forest.

Two paths.

She stands between them.

ROSE
(quiet)
I don’t know how to fix it.

DAISY
You don’t have to.

Beat.

DAISY (CONT’D)
Just come back.

Daisy doesn’t wait.

She turns — heads back toward the district.

Rose stands there.

Alone again.

She looks at her hands.

At the water.

At the growth.

Then back toward the district.

A decision.

She exhales.

ROSE
(quiet)
Okay.

She turns.

Walks back toward the trees.

Toward the district.

Not controlled.

Not reduced.

Not trying to match anything.

Just — walking.

CUT TO:`,
  },
  {
    id: "scene-20",
    act: 3,
    sceneNumber: "20",
    title: "Break into Three (Return with New Choice)",
    slug: "return-district",
    heading: "EXT. TREE LINE — NIGHT",
    pageStart: 85,
    pageEnd: 88,
    equalizerPresence: "implied",
    beat: "ACT 3 · Break into Three — re-entry with truth; new behavior (no filler, no suppression); ‘not just me’; system worse/strained; stakes urgent; Rose + Lemon toward source (core next)",
    summary:
      "Rose returns at night: festival light uneven, hum strained. Bluebell rides her shoulder—steady glow—claimed again. She walks without matching or fixing; reactions are messier. Courtyard unstable; she finds Lemon—plain ‘Hey,’ ‘It’s worse,’ names that leaving didn’t stop it and she didn’t start it alone. ‘It’s forcing it’; they head in together toward where it starts.",
    characters: ["rose", "lemon", "bluebell"],
    setId: "flower-district",
    notes:
      "Act 3 speech: clean lines, no um. She observes system overreach; doesn’t perform calm. Lemon follows—partnership reboot, not hug-it-out. **Bluebell:** visible—not debated.",
    content: `EXT. TREE LINE — NIGHT

Rose emerges from the trees.

Bluebell on her shoulder — glow steady — hers again.

Back toward the district.

The light from the Bloom Festival flickers ahead — not steady anymore.

Uneven.

She pauses at the edge.

Not hesitating — taking it in.

The hum of the Equalizer — louder than before.

Strained.

She steps forward.

EXT. OUTER DISTRICT PATH — CONTINUOUS

The structure returns — but it’s different now.

Less fluid.

Corrections are sharper.

More frequent.

Less smooth.

Students move — but not naturally.

More like — holding something together.

Rose walks through it.

Not adjusting.

Not matching.

Just moving.

People notice.

Spacing shifts — but not as cleanly.

Not as controlled.

The system tries to react — but it’s slower now.

Rose doesn’t respond to it.

Doesn’t try to fix it.

She keeps walking.

EXT. COURTYARD APPROACH — CONTINUOUS

The central area is active — but unstable.

Festival structures still in place — but sequences are off.

Groups are trying to rehearse — but failing to hold timing.

A Bloom display flickers unevenly.

Resets.

Fails again.

Students are no longer confident.

They’re compensating.

Guessing.

Rose steps into the space.

The Equalizer pulses.

Stronger.

Trying to respond.

She feels it — but doesn’t react.

For the first time — she doesn’t try to reduce herself.

She looks around.

Sees everything:

Broken sequences.

Strained movements.

Uneven spacing.

Unstable responses.

And — Lemon.

At the edge of the courtyard.

Still.

Watching.

She walks toward him.

Direct.

No hesitation.

ROSE
Hey.

No “um.”

No correction.

Lemon looks at her.

Surprised.

LEMON
You came back.

ROSE
Yeah.

Beat.

ROSE (CONT’D)
It’s worse.

Simple.

Clear.

He nods.

LEMON
Yeah.

They both look out at the courtyard.

ROSE
It didn’t stop when I left.

LEMON
No.

Beat.

ROSE
And it didn’t start because I was there.

That lands.

New.

LEMON
No.

A longer beat.

ROSE
I don’t know what it is.

LEMON
Me neither.

She looks at him.

ROSE
But it’s not —

She stops.

Then says it cleanly.

ROSE (CONT’D)
—just me.

That’s the shift.

The Equalizer pulses again — harder.

A section of the courtyard stutters.

Students pause.

Reset.

Try again.

It doesn’t hold.

Rose watches it.

Not afraid now.

Focused.

ROSE (CONT’D)
It’s trying too hard.

Lemon looks at her.

LEMON
Yeah.

ROSE
It’s forcing it.

Beat.

ROSE (CONT’D)
That’s why it’s breaking.

She steps forward — toward the center.

The system reacts.

But she doesn’t adjust.

She keeps going.

ROSE (CONT’D)
I need to see where it starts.

Lemon hesitates — just a fraction — then follows.

LEMON
Okay.

They move together — into the unstable system.

Not controlled.

Not synchronized.

But aligned in something else.

Purpose.

CUT TO:`,
  },
  {
    id: "scene-21",
    act: 3,
    sceneNumber: "21",
    title: "Bloom Festival (Final Set Piece Begins)",
    slug: "bloom-festival",
    heading: "EXT. CENTRAL COURTYARD — NIGHT",
    pageStart: 88,
    pageEnd: 92,
    equalizerPresence: "on",
    beat: "ACT 3 · **Night 1 — spectacle / routing / attention:** finale setup; ‘Look at Me’ as **mass distraction + credit sink**; system **funnels** load through Narcissa (not generic chaos); Rose + Lemon read the architecture; first cracks; momentum to sc.22 **mask break**.",
    summary:
      "Festival full: uneven lights, crowds straining. Narcissa — ‘Look at Me’; UI/credit language — **success posts**, canopy ribbons, every clean beat **attributed** to her node; hum syncs; brief relief then edge delays. Rose and Lemon name **narrowing**; overload when Rose enters at capacity — Narcissa falters; music slips; toward core, Lemon follows.",
    characters: ["rose", "lemon", "narcissa", "iris"],
    setId: "flower-district",
    notes:
      "Musical number: huge but story-first — every beat ties to routing/overload. Iris silent. Edelweiss off-page this scene; pays off at shutdown (sc.25). **Humour (dignity, not mockery):** wrong **credit ping** to Narcissa; **harmony-correction** bites her vocal for a split-second — she **commits**; optional readout **squint**.",
    content: `EXT. CENTRAL COURTYARD — NIGHT

The Bloom Festival begins in full.

Lights across the district intensify — layered colors flowing across petal-shaped structures.

The geometry glows.

Alive.

But — uneven.

Flickers where it should be smooth.

Subtle, but present.

Crowds gather.

Students fill the space.

Not perfectly aligned — but trying to be.

Holding it together.

At the center — a raised platform.

Narcissa steps forward.

Flawless.

Composed.

Untouched by the instability.

Iris stands just off-center.

Watching.

Always watching.

The Equalizer hum rises — stronger than ever.

The entire district is engaged.

A signal.

Silence falls.

NARCISSA’S PERFORMANCE BEGINS

Music builds.

Measured.

Precise.

Narcissa moves — controlled.

Intentional.

Every step exact.

She sings.

“Look at Me.”

Her voice is clear — commanding — perfectly placed.

As she moves — Bloom responses follow her.

Symmetrical.

Even.

Beautiful.

The crowd responds.

Relief.

Something is working.

Rose and Lemon stand at the edge of the crowd.

Watching.

ROSE
It’s stabilizing it.

LEMON
For now.

Narcissa continues — each movement triggers controlled Bloom responses:

Petals open in perfect timing.

Light spreads evenly across the courtyard.

Structures glow in balanced patterns.

The system locks onto her.

Uses her.

Amplifies her control.

The Equalizer pulses in sync with her movements.

Rose watches — realizing.

ROSE
It’s routing everything through her.

LEMON
Yeah.

ROSE
That’s why it’s holding.

Beat.

ROSE (CONT’D)
It’s narrowing it.

Overhead — a **canopy readout** — friendly, catastrophic:

**Stability trace → Narcissa.**

Every resolved flicker credits her.

The crowd **wants** a face.

The machine **gives** one.

A **sidebar tally** flickers — **+1 routing credit — Narcissa** — for a **peripheral** fix she didn’t make —

She **almost** reacts — **doesn’t** — smile **tightens** — show continues.

The performance intensifies.

SYSTEM UNDER LOAD

More layers engage.

More groups join.

The geometry lights up — multiple rings — expanding outward.

But — small delays appear at the edges.

A Bloom response arrives slightly late — corrected immediately.

Another — slightly off.

The system compensates.

Harder.

The hum deepens.

Pressure builds.

Narcissa holds center.

Perfect.

Unwavering.

But now — she’s working harder.

Subtle.

Only visible if you’re looking.

Rose sees it.

ROSE
It’s too much.

LEMON
Yeah.

ROSE
It can’t hold all of it.

She steps forward.

LEMON
Where are you —

ROSE
I need to get inside it.

She moves through the crowd.

People shift — but not smoothly.

Not naturally.

The system tries to correct — but it’s slower now.

Lemon follows.

PERFORMANCE BUILDS

Narcissa’s voice rises.

The song reaches its peak.

She moves faster — more precise — more controlled.

The system mirrors her — amplifies her — forces everything to match.

The entire courtyard is now locked into her pattern.

For a moment — it works.

Everything aligns.

Everything holds.

Everything — perfect.

Rose stops — just short of the central space.

She feels it.

The pressure.

Stronger than ever.

But she doesn’t reduce herself.

She steps forward.

The Equalizer reacts — immediately.

A sharp pulse.

The system tries to account for her.

But it’s already at capacity.

FIRST CRACK

At the outer ring — a delay.

Small.

Then another.

Closer in.

A Bloom response spikes unevenly — then collapses.

Narcissa falters — just slightly.

Barely visible.

But enough.

ROSE
There.

She moves further in.

LEMON
Rose —

He feels it again.

Pressure increasing.

But follows anyway.

SYSTEM OVERLOAD BEGINS

The Equalizer pulses rapidly now.

Trying to compensate.

Trying to hold everything together.

It can’t.

Corrections cascade.

Each fix — creates another delay.

The perfect symmetry begins to break.

The music continues — but now — slightly off.

Auto-harmony **snaps** at her held vowel — **one syllable** goes **thin** — **chip-edge** — almost comic —

Narcissa **leans into it** — **owns** it — **pro** —

Then the correction **releases** — pitch restores — **nobody** cheers the weird second — they **pretend** seamless.

Narcissa keeps going.

Forcing it.

Holding it.

The system strains around her.

Rose moves toward the core.

Determined.

Not matching.

Not correcting.

Just moving.

The crowd begins to notice.

Something is wrong.

But the performance — hasn’t stopped.

CUT TO:`,
  },
  {
    id: "scene-22",
    act: 3,
    sceneNumber: "22",
    title: "Narcissa Collapse (Public Break of Perfection)",
    slug: "narcissa-collapse",
    heading: "EXT. CENTRAL COURTYARD — NIGHT",
    pageStart: 92,
    pageEnd: 94,
    equalizerPresence: "implied",
    beat: "ACT 3 · **Night 2 — mask / identity break** (continuous from sc.21); performed perfection **fractures on her face** before the geometry does; system lags; Iris nothing to frame; crowd pity; bridges sc.23 **teardown**.",
    summary:
      "Strained ‘Look at Me’: smile **locked** a half-count too long; first slip, overcorrection, then **following** the machine; Bloom misfires, geometry breaks; **face** finally drops — public loss of Narcissa-the-symbol. Iris silent; Rose + Lemon: ‘not holding.’ Alone at center.",
    characters: ["rose", "lemon", "narcissa", "iris"],
    setId: "flower-district",
    notes:
      "Phases = rhythm only. Pity Narcissa without mockery. Iris: no lines—power ends when spectacle breaks. Feeds sc.23 escalation. **Humour:** routing **warble** she **doubles down** on; **ribbon** on lash — keeps performing — **sympathy**, not ridicule.",
    content: `EXT. CENTRAL COURTYARD — NIGHT

The performance continues — but strained.

The music is still playing — but slightly off.

Bloom responses lag — then overcorrect.

At the center — Narcissa holds position.

Perfect posture.

Perfect control.

But now — it takes effort.

PHASE 1 — HOLDING IT TOGETHER

She continues her performance.

**The joy on her face is still performing — even as the lag hits.**

Movements sharp.

Precise.

Each gesture triggers Bloom responses — still symmetrical — still beautiful — but slower.

The system is lagging behind her.

The Equalizer hum deepens — trying to keep up.

NARCISSA
(singing, controlled)
Look at me —

Her voice is steady.

But tighter.

PHASE 2 — FIRST SLIP

She turns — a fraction too fast.

The Bloom response — arrives late.

A visible gap.

Small.

But real.

Her held vowel **hitches** — **routing stutter** — not theatre —

She **doubles down** — **sells** the hitch like breath choice — **braver** —

The crowd notices.

Not consciously — but they feel it.

Narcissa corrects instantly.

Moves again — even more precise.

Even more controlled.

PHASE 3 — OVERCORRECTION

The next sequence — she overcompensates.

Too exact.

Too tight.

The Bloom response spikes — too symmetrical — then snaps flat.

The pattern breaks.

A beat.

The music continues — but something is off now.

PHASE 4 — PRESSURE

The Equalizer pulses harder.

Forcing alignment.

Narcissa adjusts again — trying to match it.

For the first time — she is reacting.

Not leading.

Her breath shortens.

Her timing — no longer instinctive.

A **ribbon of light** **sticks** to her **lash** — she **blinks** — doesn’t break the **smile** — **one eye** water-shine — **still delivering** —

PHASE 5 — LOSS OF CONTROL

She steps — half a beat late.

The Bloom response — misfires.

Not symmetrical.

Not controlled.

Uneven growth spreads — then collapses.

Gasps from the crowd.

Narcissa freezes — just for a moment.

That moment — is everything.

PHASE 6 — BREAK

She tries to recover.

Moves again — forces the next sequence.

The system can’t follow.

Multiple responses trigger at once — out of order.

Light flickers across the courtyard — uneven.

The geometry breaks.

The music — falls out of sync completely.

Narcissa stops.

Not by choice.

Because nothing responds anymore.

Silence.

PHASE 7 — PUBLIC REALIZATION

The crowd sees it.

Clearly.

Not subtle.

Not contained.

Perfect control — is gone.

Narcissa stands at the center — still trying to hold posture — but there’s nothing left to control.

Her hands lower.

For the first time — she doesn’t know what to do.

Across the courtyard — students shift.

Not in sync.

Not guided.

Just — reacting.

PHASE 8 — IRIS FAILS

Iris watches.

For the first time — she doesn’t speak.

There’s nothing to frame.

The truth is visible.

PHASE 9 — ROSE SEES IT

At the edge — Rose watches.

Not afraid.

Understanding.

ROSE
(quiet)
It’s not holding.

Lemon looks at her.

LEMON
No.

They both see it now.

FINAL IMAGE OF SCENE

Narcissa stands alone at the center — surrounded by a system that no longer responds.

Perfect — but powerless.

CUT TO:`,
  },
  {
    id: "scene-23",
    act: 3,
    sceneNumber: "23",
    title: "System Collapse (Public Failure)",
    slug: "system-collapse",
    heading: "EXT. CENTRAL COURTYARD — NIGHT",
    pageStart: 94,
    pageEnd: 96,
    equalizerPresence: "on",
    beat: "ACT 3 · **Night 3 — system teardown / ethical scale:** full public collapse after spectacle + mask break; **forced ‘balance’ as violence** — overcorrection, dead zones, spikes; Rose clears **‘not me’**; names self-destruct; decision to stop core.",
    summary:
      "Fractured performance: music off, Bloom misfires; Equalizer **punishes** lag — flat sectors, overload sectors, students caught in cross-correction. Lemon hit at inner ring; Rose **observes first** — it’s not her fault. Courtyard fragments; ‘breaking itself.’ She heads core-ward; crowd parts without choreography.",
    characters: ["rose", "lemon", "narcissa"],
    setId: "flower-district",
    notes:
      "Phases = editorial rhythm. Rose does not rush to Lemon like sc.17—observes first. Bridges sc.21 overload + sc.22 crack into sc.24 emotional reset.",
    content: `EXT. CENTRAL COURTYARD — NIGHT

The performance is still in motion — but fractured.

Music continues — out of sync.

Bloom responses misfire.

Light pulses unevenly across the district.

At the center — Narcissa struggles to hold control.

Her movements — still precise — but no longer effective.

The system no longer follows her.

It fights her.

PHASE 1 — LOSS OF CONTROL

A Bloom wave triggers — too early.

Too strong.

Petals flare open — then collapse unevenly.

The geometry flickers.

Symmetry breaks.

Students in formation try to recover — but timing is gone.

Sequences overlap.

Interrupt each other.

STUDENT
Stop — just —

They can’t.

PHASE 2 — SYSTEM REJECTION

The Equalizer pulses — erratically.

No longer smooth.

It attempts correction — but overcompensates.

A section of the courtyard goes still — completely flat.

No response.

Another section spikes — too much growth — then cuts.

The system is no longer balancing — it’s swinging.

PHASE 3 — PUBLIC REACTION

The crowd pulls back.

Formations break.

Students step away from the center.

Not in sync — not coordinated — just reacting.

STUDENT #1
What’s happening —

STUDENT #2
It’s failing —

The word spreads.

Failing.

PHASE 4 — LEMON

At the inner ring — Lemon falters again.

Stronger this time.

He tries to steady himself — fails.

Drops — catches himself on one hand.

LEMON
(under breath)
Okay —

The pressure is uneven now.

Surging.

Rose sees him — again.

But doesn’t rush this time.

She watches.

Understands.

ROSE
(quiet)
It’s not me.

Not defensive.

Not desperate.

Clear.

She steps forward.

PHASE 5 — CORE FAILURE

The Equalizer surges.

A sharp pulse — then another — faster.

The structure above — tightens — then misaligns.

Petal forms shift — out of pattern.

Light channels flicker.

The hum — breaks.

For the first time — it’s not continuous.

It stutters.

PHASE 6 — SYSTEM BREAK

A full section of the courtyard — drops out.

No Bloom response.

No correction.

Still.

Another section — overloads.

Too much response — then collapse.

The system is no longer connected.

It’s fragmenting.

PHASE 7 — REALIZATION

Rose stands in the center of it.

Not controlling.

Not reacting.

Watching the system fail — without her interference.

ROSE (CONT’D)
(quiet)
It’s breaking itself.

Lemon looks at her — still recovering.

LEMON
Yeah.

He sees it now too.

PHASE 8 — PATH FORWARD

Rose looks up — at the Equalizer.

Now unstable.

Misaligned.

Straining to hold itself together.

She understands.

ROSE
I have to stop it.

Not a question.

A decision.

Lemon struggles to stand.

LEMON
How?

ROSE
I don’t know.

Beat.

ROSE (CONT’D)
But it’s not supposed to be there.

That’s the truth.

She steps forward — toward the center.

Toward the core.

The system reacts — weakly now.

Not controlling.

Not containing.

Just — failing.

The crowd parts.

Not intentionally.

But because they don’t know what else to do.

Rose moves through them.

Direct.

Certain.

CUT TO:`,
  },
  {
    id: "scene-24",
    act: 3,
    sceneNumber: "24",
    title: "Transformation Reset (Return to Self Before Climax)",
    slug: "transformation-reset",
    heading: "EXT. CENTRAL COURTYARD — NIGHT",
    pageStart: 96,
    pageEnd: 97,
    equalizerPresence: "implied",
    beat: "ACT 3 · **Small quiet reset** after 21–23 — low volume, thin crowd, wide space; emotional alignment before final action; release not suppression; waterfall memory; names separation; shutdown intention; Lemon follows into sc.25.",
    summary:
      "**Volume down:** scattered few, distant sirens of broken light — not packed panic. Rose still; wrong isn’t her. Side path: breath, ‘part of.’ Bluebell witness. Names Equalizer as separator. Lemon checks in; shutdown stated calmly; return toward center.",
    characters: ["rose", "lemon", "bluebell"],
    setId: "flower-district",
    notes:
      "Contrast chaos/stillness; no return to waterfall location—memory only. Act 3 diction: clean, no um. Bridges sc.23 damage to sc.25 core. **Bluebell:** present during remembrance—ties body memory to choice.",
    content: `EXT. CENTRAL COURTYARD — NIGHT

Chaos — but **emptier** than the festival crush.

Not violent — but broken.

Most of the crowd has **bled outward** — afraid of the next pulse.

The courtyard feels **wide** — too much space, too little sound.

The system flickers.

Sections of the district pulse unevenly.

Some areas — still.

Others — overactive.

Students stand scattered.

No formations.

No control.

The Equalizer above — misaligned.

Petal structures no longer holding shape.

Light channels flickering.

Rose stands in the open — **almost alone** in the wreckage.

Still.

Not reacting.

She looks up.

At the system.

Then — at everything around her.

It’s all wrong.

But not because of her.

A beat.

She steps back.

Away from the center.

Away from the system.

EXT. SIDE PATH — CONTINUOUS

She moves quickly — but not panicked.

Finds space.

Less pressure here.

Still unstable — but quieter.

She stops.

Breathes.

Not controlled.

Not measured.

Natural.

ROSE
(quiet)
Okay.

She closes her eyes.

The noise of the system fades — not physically — but for her.

She remembers:

The waterfall.

The movement.

The growth.

The absence of control.

She lets go.

Not suppression.

Release.

Bluebell flutters once — settles on her wrist.

Glow soft.

There.

Her posture changes.

Not smaller.

Not reduced.

Open.

Present.

A subtle shift —

Around her — nearby growth responds.

A small cluster of petals opens.

A vine lifts slightly.

The environment reacts — not forced — not symmetrical —

Alive.

Rose opens her eyes.

Sees it.

This time — she understands.

ROSE (CONT’D)
It’s not something I control.

Beat.

ROSE (CONT’D)
It’s something I’m part of.

That lands.

Fully.

She looks back toward the courtyard.

Toward the Equalizer.

Now — she sees it clearly.

It’s not balancing anything.

It’s forcing it.

And breaking it.

Lemon appears behind her.

Still recovering.

He watches — sees the shift in her.

LEMON
You good?

She turns.

ROSE
Yeah.

No hesitation.

No correction.

Clear.

ROSE (CONT’D)
I know what it is.

LEMON
What?

She looks back at the system.

ROSE
It’s separating everything.

Beat.

ROSE (CONT’D)
Including me.

Lemon processes that.

ROSE (CONT’D)
That’s why it breaks.

Beat.

ROSE (CONT’D)
It’s trying to fix something that isn’t broken.

Silence.

That’s the truth.

She steps forward.

Not rushing.

Not forcing.

Ready.

ROSE (CONT’D)
I’m going to shut it down.

Not dramatic.

Not loud.

Certain.

Lemon nods.

LEMON
Okay.

He doesn’t lead.

Doesn’t question.

Just follows.

They walk back toward the center.

This time — not entering the system.

Breaking it.

CUT TO:`,
  },
  {
    id: "scene-25",
    act: 3,
    sceneNumber: "25",
    title: "Climax (Equalizer Core Shutdown)",
    slug: "climax-core",
    heading: "INT. BIOLOGY ATRIUM — CORE SPACE — NIGHT",
    pageStart: 97,
    pageEnd: 99,
    equalizerPresence: "on",
    beat: "ACT 3 · Final confrontation — core exposed in atrium; system resists; Rose wins by presence/connection not control; unravel not explosion; district stabilizes messy-alive; Edelweiss quiet realization (not defeat); Lemon stable",
    summary:
      "Atrium in chaos: core lowered, hum broken. Rose advances despite pulses and containment squeeze; she opens, doesn’t match; organic growth answers inside glass. Bluebell circles the core once—calm witness—then returns to her. Hands on core—connection, not force—machine unravels, hum cuts. District Bloom uneven but alive. Edelweiss: imbalance vs variation. **Lotus** rail—no checklist left. Rose and Lemon, simple ‘Hey.’",
    characters: ["rose", "lemon", "edelweiss", "lotus", "bluebell"],
    setId: "flower-high-atrium",
    notes:
      "Physical + emotional; resistance beats passive shutdown. Section headers for editorial rhythm. Core is visible in atrium (not subterranean vault)—align production design with set copy if needed. **Bluebell:** silent co-presence at climax—no one names it. **Lotus:** at rail — **no checklist left** — watches **without** a fix.",
    content: `INT. BIOLOGY ATRIUM — CORE SPACE — NIGHT

The atrium is no longer orderly.

Light flickers across curved structures.

Petal forms misaligned.

Energy channels unstable.

At the center — the Equalizer Core.

Exposed now.

Lowered slightly from its suspended position.

Not designed to be seen like this.

Its structure is strained — petal layers overlapping incorrectly — light pulsing unevenly through its channels.

The hum — broken.

Irregular.

Rose enters.

Direct.

The system reacts.

A pulse — sharp.

The space tightens around her.

Not smooth.

Not controlled.

It’s resisting.

Lemon follows — but stops short of the core.

He feels it.

Still unstable.

LEMON
(quiet)
Rose —

She doesn’t stop.

ROSE
It’s okay.

No hesitation.

She steps closer.

SYSTEM RESPONSE

The Equalizer pulses again — stronger.

Energy shifts through the atrium — forcing alignment.

Trying to reassert control.

The space around Rose tightens — like it’s trying to push her back into containment.

She feels it — but doesn’t reduce herself.

She steps forward anyway.

ROSE (CONT’D)
You don’t need to do this.

Not to a person.

To the system.

The Equalizer pulses — faster.

Trying to stabilize.

Trying to correct.

But every correction — misfires.

The structure shifts again — further out of alignment.

RESISTANCE

The system isolates her.

Spacing increases dramatically around her.

Everything else — pushes away.

Separation.

Stronger than before.

Rose feels it.

For a moment — she almost reacts.

Almost reduces herself again.

Stops.

ROSE (CONT’D)
No.

Quiet.

Firm.

She lets the pressure exist — without responding to it.

CONNECTION

She closes her eyes.

Not shutting down — opening.

Breath — natural.

Uncontrolled.

The system surges — trying to force alignment.

But she doesn’t match it.

She stays — herself.

Around her — the environment responds.

Not the machine — the space.

Subtle growth emerges — even inside the atrium.

Petal structures shift — not into symmetry — into something organic.

The Equalizer reacts — violently.

A sharp pulse — then another.

Trying to override it.

BREAK POINT

Rose opens her eyes.

Steps directly to the core.

Places her hands on it.

Not to control — to connect.

The system surges — maximum output.

Light floods the space — trying to enforce balance.

Everything tightens — to breaking point.

Lemon braces himself — barely holding.

LEMON
Rose —

FINAL CHOICE

Rose doesn’t push back.

She doesn’t force it.

She lets the connection happen.

Fully.

No suppression.

No control.

No correction.

Just — presence.

Bluebell lifts from her shoulder.

Circles the core once — small — steady.

Returns — lands on her.

The system has nothing to match.

Nothing to correct.

It tries — fails.

Its structure collapses inward — not exploding — unraveling.

Petal layers separate.

Light channels disconnect.

The hum — cuts.

SHUTDOWN

Silence.

Then — a release.

The pressure disappears.

The atrium opens.

Air shifts.

Movement returns — naturally.

Across the district — Bloom responses stabilize — without symmetry.

Without control.

Alive.

AFTERMATH

Rose steps back.

The core — dark.

Inactive.

Not destroyed — but no longer functioning.

Edelweiss stands at the edge of the space.

Watching.

JASMINE — upper rail — **hands empty** — **no tablet** — **first time** there’s nothing to **tick** —

She **breathes** — **doesn’t** look away —

He takes in the result.

The system — gone.

The district — still working.

Better.

EDELWEISS
(quiet)
It wasn’t imbalance.

A beat.

EDELWEISS (CONT’D)
It was variation.

Not defeat.

Realization.

Rose looks at him.

Doesn’t respond.

She doesn’t need to.

Lemon steps forward.

Now — stable.

No pressure.

No strain.

LEMON
Hey.

ROSE
Hey.

Simple.

They stand — in a space no longer controlled.

No system.

Just — movement.

CUT TO:`,
  },
  {
    id: "scene-26",
    act: 3,
    sceneNumber: "26",
    title: "Final Image (VO Payoff + World Transformation)",
    slug: "final-image",
    heading: "EXT. FLOWER HIGH DISTRICT — MORNING",
    pageStart: 99,
    pageEnd: 100,
    equalizerPresence: "implied",
    beat: "ACT 3 · Resolution — messy-alive district; character codas; Rose + Lemon plain. **Button:** next year’s Orientation—Rose **live** delivers **sc.1 V.O. verbatim**; picture and sound **sync**; audience realizes opening was **wrong-time audio**. Bit of speech **before credits** (roll over continuation optional).",
    summary:
      "Looser district life; Narcissa / Iris coda; walkway kindness. Rose and Lemon at edge—‘Hi. I’m Rose.’ / ‘I know.’ Bluebell unhidden. Overlook: ‘…however it wants.’ **Cut to Biology Atrium — Orientation (following year):** Rose welcomes newcomers; **same lines as sc.1 V.O.** now **synced** to her mouth and posture—opening **recontextualized**. Credits.",
    characters: ["rose", "lemon", "narcissa", "iris", "bluebell"],
    setId: "flower-district",
    notes:
      "**Sc.1 payoff.** Optional micro-intercut: flash **sc.1** arrival under **same phrase** for recognition; return to **live** Rose. Post: **match** opening stem to live for ‘wrong audio’ realization. Iris silent. **Bluebell:** visible on wrist before cut to Orientation. Credits can start on **continuation** of welcome.",
    content: `EXT. FLOWER HIGH DISTRICT — MORNING

Morning light.

The district remains — petal-shaped blocks.

Layered geometry.

Curved paths.

But — it’s different.

Students move through the space — not in perfect sync.

Not correcting constantly.

They adjust — but naturally.

Small variations:

Someone laughs over someone else.

A turn happens slightly early.

A group pauses without disrupting everything.

Nothing collapses.

Nothing overcorrects.

It works.

EXT. COURTYARD — CONTINUOUS

Festival structures remain — but no longer rigid.

Students experiment — trying Bloom responses — some uneven — some wild — some controlled —

All valid.

Narcissa stands with a group.

No longer at the center.

She attempts a Bloom — it comes out imperfect.

She pauses.

Then — smiles.

Keeps going.

Across the courtyard — Iris watches.

No commentary.

Nothing to shape.

The narrative — no longer needs her.

EXT. WALKWAY — CONTINUOUS

A younger student walks through the path — out of sync.

No one adjusts early.

No widening gap.

They simply pass.

No disruption.

No correction.

It just — works.

EXT. DISTRICT EDGE — CONTINUOUS

Rose walks.

Not matching anything.

Not trying to.

Just moving.

Comfortable.

Present.

Lemon walks beside her.

Not leading.

Not avoiding.

Just there.

A quiet beat.

ROSE
Hi.

Lemon looks at her.

Smiles.

ROSE (CONT’D)
I’m Rose.

Simple.

No performance.

He nods.

LEMON
I know.

They walk.

EXT. DISTRICT OVERLOOK — CONTINUOUS

They stop at a point overlooking the district.

The entire space visible:

Movement.

Variation.

Life.

No system.

No forced balance.

And yet — everything holds.

Rose looks out.

A beat.

ROSE (CONT’D)
Everything here grows…

She pauses.

Not searching.

Just finishing the thought.

ROSE (CONT’D)
…however it wants.

Not polished.

Not rehearsed.

True.

Bluebell on her wrist — glow easy — not hidden.

A breeze moves through the district.

Subtle growth responds — not symmetrical.

Not controlled.

Alive.

Rose smiles.

Not small.

Not forced.

Real.

WIDE SHOT:

The district — no longer perfect — but better.

CUT TO:

INT. FLOWER HIGH — BIOLOGY ATRIUM — ORIENTATION — DAY (THE FOLLOWING YEAR)

Glass, gardens, morning — but the register is **welcome**, not trial.

Readable pods of new students. Rose (17) forward — calm, **timed**. **Live sound** — room tone — not the airy mix we married to her **first** arrival.

She takes the mark — **no half-beat**.

ROSE
Hi. I’m Rose.

The line we heard **first** as V.O. — **now** in her mouth — **synced**.

ROSE (CONT’D)
And this is Flower High.

ROSE (CONT’D)
The geometry reads impossible — then it doesn’t. That’s the trick.

ROSE (CONT’D)
Not a building… a district.

She holds — **composed** — **the rhythm we mistook for inner narration** — and runs the **rest of Scene 1 V.O.** through to **“…mostly.”** — **verbatim** — same cadence, **different** girl than the one who stepped through the edge last year.

**(Editorial — optional):** **Flash** — **Scene 1** — her **body** **wrong** under the **same phrase** — **back** — **live Rose** — **locked.**

**We had the ending’s audio at the beginning.**

CREDITS BEGIN.

(Continue welcome over crawl / card — optional.)

FADE OUT.`,
  },
];
