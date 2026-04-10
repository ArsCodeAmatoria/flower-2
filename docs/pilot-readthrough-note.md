# Pilot read-through note — “I just” / control language

One pass after the line-level **Pilot** edits on `src/data/script.ts` (scenes 1–26). Purpose: trim **stacked** openers that repeated the same beat in dialogue *and* action (especially **I just need to —** before a physical adjustment already on the page), while keeping **recorded lyric**, **Act 1 stammer**, and **interrupted** lines where the half-sentence *is* the drama.

---

## Canonical (do not paraphrase on page)

| Line | Where | Why |
|------|--------|-----|
| **I just wanna be like every flower** | sc.2 (whisper), sc.7 (aloud) | Matches **`songs.ts`** / masters for *Like Every Flower* — I Want **hook**. |

Beat/summary fields may reference the same phrase for Context / dossier alignment.

---

## What we usually *cut* or *merged*

- **Duplicate chains** where Rose already said **I can fix it** / **I need to get it right** / **Focus** and the next line was another **I just need to —** before action carried the beat (notably sc.7, sc.13–14, sc.18 exit).
- **Empty half-lines** merged when the thought was complete in one utterance (e.g. **It wasn’t unstable.**, **I’m not doing anything.**, **But it’s not just me.**).
- **VO / attribution** slips (e.g. sc.1 “we” → Rose POV).

---

## What we *keep* on purpose — by pattern

### 1. Rose — stammer / social friction (Act 1 especially)

Incomplete clauses and restarts are **the machine in her mouth**: hesitation, apology spiral, wrong recipient. Examples still on page:

- **Yeah. I just — I need to —** / **—match it better.** (sc.2)  
- **Yeah — I just need to —** / **—get it right.** (sc.2)  
- **So it just — keeps it — like —** / **—level?** (sc.3)  
- **I — I’m just —** / **—I think I just —** (sc.3–4, catalyst)  
- **I just — I need to get it right.** (sc.7 — one line with internal stutter before the hook)  
- **I just need to get it right.** as **scene closure / debate land** (sc.5–6; Lemon mirrors the district’s language in sc.6)

These are **not** the same function as the hook line; they’re **performance anxiety** phrasing.

### 2. Rose — “fix it” instinct under pressure

- **I can fix it** + **I just need to —** with **Lemon interrupting “You don’t.”** (sc.14) — the **cut-off** matters; do not merge into a single complete sentence.  
- **I just want it to work.** (sc.9) — plain want vs control.  
- **I just had to —** / **—stop pushing.** (sc.16) — half-truth to Lemon.

### 3. Lemon — cost + deflection (complete lines)

- **I just don’t try not to.** (sc.6) — punchy double negative; don’t “clean” to a single positive.  
- **I just don’t hit every window.** (sc.6) — outer-ring / walk-through cost.  
- **I just —** (sc.14, incomplete) — he **doesn’t** finish; Rose reads it as confirmation.

### 4. Iris / room (soft blame)

- **It just… happens around you.**  
- **He just reacted.**  
- **It’s just noticeable.** (refrain across sc.10 / sc.14 — intentional echo)

### 5. Act 3 — clean thesis lines (fewer fillers)

After the pass, key turns are often **one sentence**: e.g. **But it’s not just me.** (sc.20), **Where are you going?** (sc.21), **I need to stay out of it.** (sc.18), **I need to stay here.** / **I can just leave.** (sc.19). Those **replace** older stacks of **I just —** + continuation where the draft repeated the same turn.

### 6. “Just” that is *not* this pattern

Action/description uses **just** in the ordinary sense (*just reacting, just works, just leave*) — not counted as Rose’s verbal tic unless it’s dialogue.

---

## Quick grep reminder (maintenance)

To audit again after edits:

```bash
rg "I just|just —" src/data/script.ts
```

Review hits inside **`content:`** blocks; ignore false positives in **`beat`/`summary`/`notes`** unless you’re updating dossier copy.

---

## Status

- **Pilot line pass:** scenes **1–26** applied in-repo.  
- **Lyrics:** canonical text remains **`src/data/songs.ts`**; script **hook** lines match where quoted.  
- **Build:** `npm run build` expected green after `script.ts` edits.
