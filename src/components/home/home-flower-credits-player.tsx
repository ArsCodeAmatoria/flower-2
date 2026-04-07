"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Pause, Play, RotateCcw } from "lucide-react";
import { characters } from "@/data/characters";
import { sets } from "@/data/sets";
import {
  creditsRollThanksLines,
  flowerCreditsTagline,
  flowerWorldQuotes,
} from "@/data/home-credits";
import { FlowerCreditsProgress } from "@/components/home/flower-credits-progress";
import { cn } from "@/lib/utils";

const CREDITS_AUDIO_PATH = "/songs/Flower (3).wav";

/** 0 = list lines share the segment timeline; avoids an empty card while the heading reserved beat runs. */
const CREDITS_HEAD_RESERVE = 0;
const CREDITS_STAGGER_OVERLAP = 0.42;

/**
 * Hold the full opening stack until this fraction of segment 0 has elapsed (audio-synced).
 * Releasing too early snaps beats 2–4 to opacity 0 (stagger uses localP = 0 at play). 0.27 lands
 * where beat 1 is visible so the handoff isn’t a blank flash.
 */
const OPENING_TITLE_SEG_FRAC = 0.27;

/** Segment weights — quotes gets more time; Pixar pacing. */
const SEGMENT_WEIGHTS = [1.15, 1.05, 0.88, 1.65, 0.82, 0.92] as const;

function encodePublicAudioPath(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return encodeURI(path);
}

function cumulativeSegmentEdges(weights: readonly number[]) {
  const t = weights.reduce((a, b) => a + b, 0);
  const edges: number[] = [0];
  for (const w of weights) edges.push(edges[edges.length - 1]! + w / t);
  edges[edges.length - 1] = 1;
  return edges;
}

function segmentOpacity(
  index: number,
  progress: number,
  edges: number[],
  fadeFrac: number,
  idleTitle: boolean,
  lastIndex: number,
): number {
  if (idleTitle && index === 0) return 1;
  const holdEnd = 0.987;
  if (progress >= holdEnd && index === lastIndex) return 1;
  if (progress >= holdEnd) return 0;
  const start = edges[index]!;
  const end = edges[index + 1]!;
  const len = end - start;
  if (len <= 0) return 0;
  const fade = Math.max(0.04, len * fadeFrac);

  /**
   * Opening card: full opacity from t=0 — avoids fade-in from 0 (that was hiding credits the instant play started).
   * Only fades out as we approach the next segment.
   */
  if (index === 0 && start === 0) {
    if (progress < 0 || progress >= end) return 0;
    if (progress > end - fade) return (end - progress) / fade;
    return 1;
  }

  if (progress < start) return 0;
  if (progress >= end) return 0;
  if (progress < start + fade) return (progress - start) / fade;
  if (progress > end - fade) return (end - progress) / fade;
  return 1;
}

/** 0–1 time within a segment (clamped). */
function segmentLocalProgress(segmentIndex: number, progress: number, edges: number[]): number {
  const a = edges[segmentIndex]!;
  const b = edges[segmentIndex + 1]!;
  const len = b - a;
  if (len <= 0) return 0;
  return Math.min(1, Math.max(0, (progress - a) / len));
}

/** Section heading: quick fade-in at segment start. */
function sectionHeadingOpacity(localP: number, reduceMotion: boolean): number {
  if (reduceMotion) return 1;
  const inDur = 0.14;
  return Math.min(1, localP / inDur);
}

/**
 * Timeline for list items after a reserved beat for the section title.
 * Each line gets a slot with overlap crossfade (movie-style parade of names).
 */
function staggeredLineOpacity(
  itemIndex: number,
  itemCount: number,
  localP: number,
  options: { headReserve: number; overlap: number; reduceMotion: boolean },
): number {
  const { headReserve, overlap, reduceMotion } = options;
  if (itemCount <= 0) return 0;
  if (reduceMotion) {
    const t = Math.max(0, Math.min(1, (localP - headReserve) / (1 - headReserve)));
    return t > 0.04 ? 1 : Math.min(1, t / 0.04);
  }
  const t = Math.max(0, Math.min(1, (localP - headReserve) / (1 - headReserve)));
  if (itemCount === 1) {
    const fade = Math.min(0.2, 0.5);
    if (t < fade) return t / fade;
    if (t > 1 - fade) return (1 - t) / fade;
    return 1;
  }
  const slot = 1 / itemCount;
  const fade = Math.max(0.03, slot * overlap);
  const start = itemIndex * slot;
  const end = start + slot;
  if (t < start) return 0;
  if (t >= end) return 0;
  if (t < start + fade) return (t - start) / fade;
  if (t > end - fade) return (end - t) / fade;
  return 1;
}

/** Opening title: first beat holds from t=0 (matches full card visible on play); others crossfade. */
function titleBeatOpacity(beatIndex: number, localP: number, reduceMotion: boolean, beatCount = 4): number {
  if (reduceMotion) return localP > 0.04 ? 1 : localP / 0.04;
  const n = beatCount;
  if (beatIndex === 0) {
    const slot = 1 / n;
    const fade = slot * 0.42;
    const end = slot;
    if (localP >= end) return 0;
    if (localP > end - fade) return (end - localP) / fade;
    return 1;
  }
  return staggeredLineOpacity(beatIndex, n, localP, {
    headReserve: 0,
    overlap: 0.42,
    reduceMotion,
  });
}

/** Red rose petals + warm shimmer behind credits */
function CreditsPetalBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#140308]" aria-hidden>
      <svg
        className="absolute left-1/2 top-1/2 h-[135%] min-h-full w-[135%] min-w-full -translate-x-1/2 -translate-y-1/2 opacity-[0.94]"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="cp-petal-deep" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b0a12" />
            <stop offset="45%" stopColor="#9f1239" />
            <stop offset="100%" stopColor="#4c0519" />
          </linearGradient>
          <linearGradient id="cp-petal-edge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#be185d" stopOpacity={0.55} />
            <stop offset="100%" stopColor="#881337" stopOpacity={0.25} />
          </linearGradient>
          <radialGradient id="cp-glow" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#fda4af" stopOpacity={0.14} />
            <stop offset="70%" stopColor="#9f1239" stopOpacity={0.08} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width="800" height="400" fill="#1c0710" />
        <ellipse cx="400" cy="200" rx="340" ry="160" fill="url(#cp-glow)" opacity={0.9} />
        <g fill="url(#cp-petal-deep)" stroke="url(#cp-petal-edge)" strokeWidth={0.4}>
          <ellipse cx="280" cy="120" rx="140" ry="58" transform="rotate(-32 280 120)" />
          <ellipse cx="520" cy="130" rx="138" ry="56" transform="rotate(28 520 130)" />
          <ellipse cx="400" cy="210" rx="150" ry="62" transform="rotate(-8 400 210)" />
          <ellipse cx="180" cy="240" rx="120" ry="52" transform="rotate(18 180 240)" />
          <ellipse cx="620" cy="250" rx="128" ry="54" transform="rotate(-22 620 250)" />
          <ellipse cx="330" cy="310" rx="100" ry="44" transform="rotate(38 330 310)" />
          <ellipse cx="480" cy="95" rx="95" ry="40" transform="rotate(8 480 95)" />
          <ellipse cx="400" cy="95" rx="70" ry="32" fill="#7f1d1d" stroke="none" opacity={0.85} />
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/65" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_45%,transparent_30%,rgba(0,0,0,0.45)_88%)]" />

      {/* Shimmer sweeps */}
      <div
        className="pointer-events-none absolute -left-[40%] top-0 h-full w-[90%] mix-blend-soft-light"
        style={{
          animation: "credits-petal-shimmer 5.2s ease-in-out infinite",
          willChange: "transform",
        }}
      >
        <div className="h-full w-full bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-80 blur-[2px]" />
      </div>
      <div
        className="pointer-events-none absolute -left-[40%] top-0 h-full w-[70%] mix-blend-screen opacity-70"
        style={{
          animation: "credits-petal-shimmer 5.2s ease-in-out infinite",
          animationDelay: "2.6s",
          willChange: "transform",
        }}
      >
        <div className="h-full w-full bg-gradient-to-r from-transparent via-amber-200/30 to-transparent blur-[3px]" />
      </div>
    </div>
  );
}

export function HomeFlowerCreditsPlayer({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [loadError, setLoadError] = useState(false);

  const resolvedSrc = useMemo(() => encodePublicAudioPath(CREDITS_AUDIO_PATH), []);
  const edges = useMemo(() => cumulativeSegmentEdges(SEGMENT_WEIGHTS), []);
  const fadeFrac = reduceMotion ? 0.06 : 0.24;

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onMeta = () => setDuration(Number.isFinite(el.duration) ? el.duration : 0);
    const onTime = () => setCurrent(el.currentTime);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => setPlaying(false);
    const onErr = () => setLoadError(true);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("ended", onEnded);
    el.addEventListener("error", onErr);
    return () => {
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("ended", onEnded);
      el.removeEventListener("error", onErr);
    };
  }, []);

  const progress = duration > 0 ? Math.min(1, Math.max(0, current / duration)) : 0;
  const idleTitle = !playing && current < 0.04;

  const segLocal = useMemo(
    () => SEGMENT_WEIGHTS.map((_, i) => segmentLocalProgress(i, progress, edges)),
    [progress, edges],
  );

  const openingTitleFullStack =
    idleTitle || (playing && (segLocal[0] ?? 0) < OPENING_TITLE_SEG_FRAC);

  const lastSeg = SEGMENT_WEIGHTS.length - 1;
  const opacities = useMemo(
    () =>
      SEGMENT_WEIGHTS.map((_, i) =>
        segmentOpacity(i, progress, edges, fadeFrac, idleTitle, lastSeg),
      ),
    [progress, edges, fadeFrac, idleTitle, lastSeg],
  );

  const staggerOpts = useMemo(
    () => ({
      headReserve: CREDITS_HEAD_RESERVE,
      overlap: CREDITS_STAGGER_OVERLAP,
      reduceMotion: reduceMotion ?? false,
    }),
    [reduceMotion],
  );

  const toggle = useCallback(() => {
    const el = audioRef.current;
    if (!el || loadError) return;
    if (playing) {
      el.pause();
      return;
    }
    if (current >= duration - 0.2 && duration > 0) {
      el.currentTime = 0;
    }
    void el.play().catch(() => setLoadError(true));
  }, [playing, loadError, current, duration]);

  const restart = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    void el.play().catch(() => setLoadError(true));
  }, []);

  return (
    <div className={cn("space-y-5", className)}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="page-label">Home</p>
          <p className="font-display text-lg font-medium tracking-tight text-foreground md:text-xl">
            Opening credits
          </p>
          <p className="font-sans text-xs text-muted-foreground">
            Flower — soft fades over a rose field
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            disabled={loadError}
            className={cn(
              "inline-flex h-10 items-center gap-2 rounded-full border border-border/50 bg-surface/40 px-4 font-sans text-[0.8125rem] font-medium transition-subtle",
              "hover:border-border/70 hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              loadError && "pointer-events-none opacity-45",
            )}
            aria-label={playing ? "Pause credits" : "Play credits"}
          >
            {playing ? (
              <Pause className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden />
            ) : (
              <Play className="h-4 w-4 shrink-0 pl-px" strokeWidth={1.5} aria-hidden />
            )}
            {playing ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={restart}
            disabled={loadError}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border/50 bg-background/70 px-3.5 font-sans text-[0.8125rem] font-medium text-muted-foreground transition-subtle hover:border-border/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Restart credits"
          >
            <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
            Restart
          </button>
        </div>
      </div>

      <audio ref={audioRef} src={resolvedSrc} preload="metadata" className="hidden" />

      <div
        className={cn(
          "relative w-full overflow-hidden rounded-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_24px_60px_-20px_rgba(0,0,0,0.5)]",
          "aspect-[2/1]",
        )}
        role="region"
        aria-label="Movie credits"
      >
        {loadError ? (
          <div className="flex h-full items-center justify-center bg-[#1a0508] px-6 text-center text-sm text-white/55">
            Could not load <span className="mx-1 font-mono text-xs">Flower (3).wav</span>. Add it to{" "}
            <code className="font-mono text-xs">public/songs/</code>.
          </div>
        ) : (
          <>
            <CreditsPetalBackdrop />

            <div className="relative z-10 flex h-full w-full items-stretch justify-center px-6 py-8 md:px-10 md:py-10">
              {/* Pixar-style cards: stacked fades, centered, quiet typography */}
              <div className="relative mx-auto w-full max-w-[26rem] md:max-w-[30rem]">
                {/* Title */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-500 ease-out"
                  style={{
                    opacity: opacities[0],
                    transitionDuration: reduceMotion ? "80ms" : "520ms",
                  }}
                >
                  <div
                    className="transition-opacity duration-300 ease-out"
                    style={{
                      opacity: openingTitleFullStack
                        ? 1
                        : titleBeatOpacity(0, segLocal[0]!, reduceMotion ?? false),
                    }}
                  >
                    <p className="font-sans text-[0.5rem] font-semibold uppercase tracking-[0.55em] text-white/55">
                      Leigh Akin
                    </p>
                    <p className="mt-2 font-sans text-[0.5rem] font-medium uppercase tracking-[0.42em] text-white/35">
                      presents
                    </p>
                  </div>
                  <div
                    className="mt-8 transition-opacity duration-300 ease-out"
                    style={{
                      opacity: openingTitleFullStack
                        ? 1
                        : titleBeatOpacity(1, segLocal[0]!, reduceMotion ?? false),
                    }}
                  >
                    <p className="font-sans text-[0.55rem] font-medium uppercase tracking-[0.36em] text-white/45">
                      An original animated musical
                    </p>
                  </div>
                  <div
                    className="mt-5 transition-opacity duration-300 ease-out"
                    style={{
                      opacity: openingTitleFullStack
                        ? 1
                        : titleBeatOpacity(2, segLocal[0]!, reduceMotion ?? false),
                    }}
                  >
                    <h2 className="font-display text-[clamp(2rem,4.8vw,3.35rem)] font-medium leading-[1] tracking-[0.22em] text-white">
                      FLOWER
                    </h2>
                  </div>
                  <div
                    className="mx-auto mt-6 max-w-[22rem] transition-opacity duration-300 ease-out"
                    style={{
                      opacity: openingTitleFullStack
                        ? 1
                        : titleBeatOpacity(3, segLocal[0]!, reduceMotion ?? false),
                    }}
                  >
                    <p className="font-display text-[0.88rem] font-normal italic leading-relaxed tracking-[0.02em] text-white/75">
                      {flowerCreditsTagline}
                    </p>
                  </div>
                </div>

                {/* Cast */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-500 ease-out"
                  style={{
                    opacity: opacities[1],
                    transitionDuration: reduceMotion ? "80ms" : "520ms",
                  }}
                >
                  <p
                    className="font-sans text-[0.5rem] font-semibold uppercase tracking-[0.48em] text-amber-100/65 transition-opacity duration-300 ease-out"
                    style={{
                      opacity: sectionHeadingOpacity(segLocal[1]!, reduceMotion ?? false),
                    }}
                  >
                    With the voices of
                  </p>
                  <div className="relative mt-8 h-9 w-full max-w-[22rem] md:h-10">
                    {characters.map((c, k) => (
                      <p
                        key={c.id}
                        className="absolute inset-0 flex items-center justify-center font-sans text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-white/92 transition-opacity duration-300 ease-out"
                        style={{
                          opacity: staggeredLineOpacity(
                            k,
                            characters.length,
                            segLocal[1]!,
                            staggerOpts,
                          ),
                        }}
                      >
                        {c.name}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Worlds */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-500 ease-out"
                  style={{
                    opacity: opacities[2],
                    transitionDuration: reduceMotion ? "80ms" : "520ms",
                  }}
                >
                  <p
                    className="font-sans text-[0.5rem] font-semibold uppercase tracking-[0.48em] text-amber-100/65 transition-opacity duration-300 ease-out"
                    style={{
                      opacity: sectionHeadingOpacity(segLocal[2]!, reduceMotion ?? false),
                    }}
                  >
                    Worlds of Flower
                  </p>
                  <div className="relative mt-8 h-9 w-full max-w-[24rem] md:h-10">
                    {sets.map((s, k) => (
                      <p
                        key={s.id}
                        className="absolute inset-0 flex items-center justify-center px-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/88 transition-opacity duration-300 ease-out"
                        style={{
                          opacity: staggeredLineOpacity(k, sets.length, segLocal[2]!, staggerOpts),
                        }}
                      >
                        {s.name}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Whispers */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center px-1 text-center transition-opacity duration-500 ease-out"
                  style={{
                    opacity: opacities[3],
                    transitionDuration: reduceMotion ? "80ms" : "520ms",
                  }}
                >
                  <p
                    className="font-sans text-[0.5rem] font-semibold uppercase tracking-[0.48em] text-amber-100/65 transition-opacity duration-300 ease-out"
                    style={{
                      opacity: sectionHeadingOpacity(segLocal[3]!, reduceMotion ?? false),
                    }}
                  >
                    Whispers from the district
                  </p>
                  <div className="relative mt-6 h-[5.5rem] w-full max-w-[24rem] md:h-[6rem]">
                    {flowerWorldQuotes.map((q, k) => (
                      <p
                        key={q.slice(0, 32)}
                        className="absolute inset-0 flex items-center justify-center px-1 font-display text-[0.78rem] font-normal italic leading-[1.45] tracking-[0.025em] text-white/72 transition-opacity duration-300 ease-out"
                        style={{
                          opacity: staggeredLineOpacity(
                            k,
                            flowerWorldQuotes.length,
                            segLocal[3]!,
                            staggerOpts,
                          ),
                        }}
                      >
                        “{q}”
                      </p>
                    ))}
                  </div>
                </div>

                {/* Thanks */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-500 ease-out"
                  style={{
                    opacity: opacities[4],
                    transitionDuration: reduceMotion ? "80ms" : "520ms",
                  }}
                >
                  <p
                    className="font-sans text-[0.5rem] font-semibold uppercase tracking-[0.48em] text-amber-100/65 transition-opacity duration-300 ease-out"
                    style={{
                      opacity: sectionHeadingOpacity(segLocal[4]!, reduceMotion ?? false),
                    }}
                  >
                    Thank you
                  </p>
                  <div className="relative mt-8 h-[4.5rem] w-full max-w-[22rem] md:h-[5rem]">
                    {creditsRollThanksLines.map((line, k) => (
                      <p
                        key={line.slice(0, 40)}
                        className="absolute inset-0 flex items-center justify-center px-1 font-sans text-[0.78rem] font-normal leading-relaxed tracking-[0.03em] text-white/78 transition-opacity duration-300 ease-out"
                        style={{
                          opacity: staggeredLineOpacity(
                            k,
                            creditsRollThanksLines.length,
                            segLocal[4]!,
                            staggerOpts,
                          ),
                        }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Legal */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-500 ease-out"
                  style={{
                    opacity: opacities[5],
                    transitionDuration: reduceMotion ? "80ms" : "520ms",
                  }}
                >
                  <p
                    className="font-sans text-[0.5rem] font-semibold uppercase tracking-[0.48em] text-amber-100/65 transition-opacity duration-300 ease-out"
                    style={{
                      opacity: sectionHeadingOpacity(segLocal[5]!, reduceMotion ?? false),
                    }}
                  >
                    Story &amp; songs
                  </p>
                  <div className="relative mt-8 h-[5rem] w-full max-w-[24rem] md:h-[5.5rem]">
                    {[
                      "Based on the short story by Lynne Tapper",
                      "Written by Leigh Akin",
                      "All songs written by Leigh Akin",
                    ].map((line, k, arr) => (
                      <p
                        key={line}
                        className="absolute inset-0 flex items-center justify-center px-2 font-sans text-[0.74rem] font-normal leading-relaxed tracking-[0.03em] text-white/68 transition-opacity duration-300 ease-out"
                        style={{
                          opacity: staggeredLineOpacity(k, arr.length, segLocal[5]!, staggerOpts),
                        }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {duration > 0 && !loadError ? <FlowerCreditsProgress value={progress} /> : null}
    </div>
  );
}
