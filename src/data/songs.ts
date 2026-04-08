import type { Song } from "@/types/song";

/**
 * Lyrics + audio for `/lyrics`.
 * Masters live in `public/songs/` — filenames must match `audioSrc` (spaces OK).
 */
export const songs: Song[] = [
  {
    id: "song-std",
    slug: "squeeze-the-day",
    code: "STD",
    title: "Squeeze the Day",
    credit: "Performed by Lemon · Flower",
    audioSrc: "/songs/STD.wav",
    lyrics: `[Vocal — transcribe from master]

Squeeze the Day · Lemon’s track — B-story / fun-games energy.`,
  },
  {
    id: "song-lam",
    slug: "look-at-me",
    code: "LAM",
    title: "Look at Me",
    credit: "Performed by Narcissa · Flower",
    audioSrc: "/songs/LAM.wav",
    lyrics: `[Vocal — transcribe from master]

Look at Me · Narcissa — image / Bloom Festival peak.`,
  },
  {
    id: "song-red-magic",
    slug: "red-magic",
    title: "Red Magic",
    credit: "Performed by Rose · Flower",
    audioSrc: "/songs/RED MAGIC.wav",
    lyrics: `[Vocal — transcribe from master]

Red Magic · Rose — protagonist emotional spine.`,
  },
  {
    id: "song-just-fit-in",
    slug: "just-fit-in",
    title: "Just Fit In",
    credit: "Performed by Daisy · Flower",
    audioSrc: "/songs/JUST FIT IN.wav",
    lyrics: `[Vocal — transcribe from master]

Just Fit In · Daisy — grow-right / stability pressure.`,
  },
  {
    id: "song-equalize-bloom",
    slug: "equalize-the-bloom",
    title: "Equalize the Bloom",
    credit: "Edelweiss & Lotus · Flower",
    audioSrc: "/songs/EQUALIZE THE BLOOM (1).wav",
    lyrics: `[Opening — rhythmic spoken-sung, playful teacher energy]

Ahh—welcome, welcome, my dear students, come come
Today we make your future… very, very optimum
No tension, no confusion, no botanical doom
We simply… (equalize the bloom)

[VERSE 1 — bouncy, fast, charming]

Petal going left? — we gently make it right
Too much shadow? — we adjust the light
Little bend here, small correction there
Soon it’s perfect everywhere

You are saying “wild,” you are saying “free”
I am saying hmm… inconsistency
Why you want disorder in the room
When we can (equalize the bloom)

[PRE-CHORUS — rhythmic, playful]

Snip-snip, shift-shift, make it nice and neat
Every little flower dancing to the beat

[CHORUS — big, ensemble, joyful]

(equalize the bloom) (hey!)
(bring it into line) (ho!)
Every petal, every stem
Working so divine

(equalize the bloom) (hey!)
(no more up or down) (no!)
When everything is balanced
You are best in town

[VERSE 2 — faster, witty, comedic logic]

One leaf leaning—then another also
Small-small problem becomes big, you know
Tiny drift becomes full confusion
We are offering simple solution

You are saying “this is who I am”
Very good—but we improve the plan
Little tuning, little gentle zoom
Now you shine when (equalize the bloom)

[PRE-CHORUS — tighter, more controlled]

Step-step, shape-shape, smooth it all precise
Harmony is beauty when it’s extra nice

[CHORUS — bigger spectacle, more synchronized]

(equalize the bloom) (hey!)
(make it all align) (ho!)
Every curve and every line
Perfect every time

(equalize the bloom) (hey!)
(feel the system hum) (hum!)
When we move together
See what we become

[BRIDGE — softer, charm becomes persuasive, Disney-clear delivery]

You are feeling it, yes…

That small tension
That little pull

Something not fitting…

Why you carry this

When we can…

(make it right)

[FINAL CHORUS — still big, more controlled, slightly eerie underneath]

(equalize the bloom)
(no more rise or fall)
Every petal, every stem
Perfect through it all

(equalize the bloom)
(now the truth is clear)
When everything aligns
There is nothing left to fear

[Staging — screenplay]
Ensemble orientation number: Edelweiss + Lotus duet; call-and-response; claps; crowd arcs into garden-row choreography; bridge warmer / clearer diction for family audience; unease under the final mix.`,
  },
  {
    id: "song-flower-opening",
    slug: "flower-opening",
    title: "Flower",
    credit: "End credits",
    audioSrc: "/songs/Flower (3).wav",
    lyrics: `[Opening credits]\n\nTimed to the home page reel — same model as the \`flower\` prototype site.`,
  },
];
