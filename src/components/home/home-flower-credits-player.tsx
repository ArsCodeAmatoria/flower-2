"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { Pause, Play, RotateCcw, Sparkles } from "lucide-react";
import type { Character } from "@/types/character";
import { characters } from "@/data/characters";
import {
  CREDITS_SONG_BLOCK_START_INDEX,
  creditsBillingStoryBridges,
  creditsLoglineSlides,
  creditsSynopsisSlides,
} from "@/data/credits-reel";
import {
  creditsRollThanksLines,
  filmCreditsBilling,
  flowerCreditsCreatorName,
  flowerCreditsTagline,
  flowerCreditsWriterName,
  flowerWorldQuotes,
} from "@/data/home-credits";
import { project } from "@/data/project";
import { sets } from "@/data/sets";
import { songs } from "@/data/songs";
import { publicAudioUrl } from "@/lib/public-audio-url";
import { cn } from "@/lib/utils";

const CREDITS_SONG_ID = "song-flower-opening";
const COVER_STILL = "/characters/rose.png";

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getReducedMotionSnapshot() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, () => false);
}

function smoothstep01(t: number) {
  const x = Math.max(0, Math.min(1, t));
  return x * x * (3 - 2 * x);
}

const CHUNK_FADE_FRAC = 0.2;

function chunkOpacity(
  chunkIndex: number,
  currentTime: number,
  duration: number,
  cardCount: number,
  idleAtStart: boolean,
  audioEnded: boolean,
): number {
  if (idleAtStart && chunkIndex === 0) return 1;
  if (duration <= 0) return chunkIndex === 0 ? 1 : 0;
  if (audioEnded) return chunkIndex === cardCount - 1 ? 1 : 0;

  const slice = duration / cardCount;
  const start = chunkIndex * slice;
  const end = (chunkIndex + 1) * slice;
  if (currentTime < start || currentTime >= end) return 0;

  const r = (currentTime - start) / slice;
  const f = Math.min(CHUNK_FADE_FRAC, 0.49);
  if (r < f) return smoothstep01(r / f);
  if (r > 1 - f) return smoothstep01((1 - r) / f);
  return 1;
}

function CreditCardLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex w-full flex-col items-center">
      <div className="mb-3 flex w-full max-w-xs items-center justify-center gap-3">
        <span
          className="h-px min-w-[2rem] flex-1 bg-gradient-to-l from-amber-400/55 to-transparent"
          aria-hidden
        />
        <span
          className="shrink-0 px-1 font-display text-[10px] leading-none tracking-[0.4em] text-amber-300/80"
          aria-hidden
        >
          ···
        </span>
        <span
          className="h-px min-w-[2rem] flex-1 bg-gradient-to-r from-amber-400/55 to-transparent"
          aria-hidden
        />
      </div>
      <p className="text-center font-sans text-[9px] uppercase tracking-[0.38em] text-amber-100/90">
        {children}
      </p>
    </div>
  );
}

function StoryBeatSlide({ label, body, footer }: { label: string; body: string; footer?: string }) {
  return (
    <div className="mx-auto max-w-md px-2 text-center">
      <CreditCardLabel>{label}</CreditCardLabel>
      <p className="font-sans text-[16px] font-normal leading-[1.75] text-zinc-200 sm:text-[17px]">{body}</p>
      {footer ? (
        <p className="mt-6 font-sans text-[10px] uppercase tracking-[0.26em] text-zinc-500">{footer}</p>
      ) : null}
    </div>
  );
}

function CastPair({ c }: { c: Character }) {
  return (
    <div className="min-w-[42%] text-center">
      <p className="font-display text-xl uppercase tracking-[0.14em] text-white sm:text-2xl">{c.name}</p>
      <p className="mt-3 font-sans text-[13px] italic leading-snug text-zinc-400 sm:text-sm">{c.role}</p>
    </div>
  );
}

const CREDITS_STAR_FIELD: { l: number; t: number; r: number; delay: number }[] = [
  { l: 5, t: 12, r: 1.1, delay: 0 },
  { l: 14, t: 28, r: 0.7, delay: 0.4 },
  { l: 22, t: 8, r: 0.9, delay: 0.2 },
  { l: 31, t: 44, r: 0.6, delay: 0.9 },
  { l: 38, t: 18, r: 1.2, delay: 0.1 },
  { l: 48, t: 52, r: 0.55, delay: 0.55 },
  { l: 56, t: 11, r: 0.85, delay: 0.35 },
  { l: 64, t: 36, r: 0.7, delay: 0.75 },
  { l: 72, t: 58, r: 1.0, delay: 0.15 },
  { l: 81, t: 22, r: 0.65, delay: 0.65 },
  { l: 88, t: 41, r: 0.5, delay: 0.45 },
  { l: 93, t: 14, r: 0.95, delay: 0.85 },
  { l: 11, t: 62, r: 0.6, delay: 0.25 },
  { l: 77, t: 68, r: 0.72, delay: 0.5 },
  { l: 42, t: 72, r: 0.58, delay: 0.3 },
  { l: 59, t: 78, r: 0.88, delay: 0.7 },
];

function DisneyCreditsBackdrop({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(155deg, #0b1020 0%, #1a1040 28%, #2d1b69 52%, #0f172a 78%, #020617 100%)",
          backgroundSize: reducedMotion ? "100% 100%" : "220% 220%",
          animation: reducedMotion ? undefined : "creditsAurora 22s ease-in-out infinite",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 120%, rgba(251, 191, 36, 0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 15% 20%, rgba(147, 197, 253, 0.2), transparent 50%)",
        }}
        aria-hidden
      />
      {CREDITS_STAR_FIELD.map((star, i) => (
        <span
          key={i}
          className="pointer-events-none absolute rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]"
          style={{
            left: `${star.l}%`,
            top: `${star.t}%`,
            width: `${star.r * 5}px`,
            height: `${star.r * 5}px`,
            opacity: reducedMotion ? 0.55 : undefined,
            animation: reducedMotion
              ? undefined
              : `creditsStarTwinkle ${2.1 + (i % 5) * 0.35}s ease-in-out infinite`,
            animationDelay: reducedMotion ? undefined : `${star.delay}s`,
          }}
          aria-hidden
        />
      ))}
      {!reducedMotion ? (
        <span
          className="pointer-events-none absolute right-[8%] top-[18%] text-2xl opacity-40"
          style={{ animation: "creditsSparkleDrift 4s ease-in-out infinite" }}
          aria-hidden
        >
          ✦
        </span>
      ) : null}
      {!reducedMotion ? (
        <span
          className="pointer-events-none absolute bottom-[22%] left-[10%] text-xl opacity-30"
          style={{ animation: "creditsSparkleDrift 5.2s ease-in-out infinite 0.8s" }}
          aria-hidden
        >
          ✧
        </span>
      ) : null}
    </>
  );
}

function FilmCorners() {
  const line = "1px solid rgba(234, 179, 8, 0.38)";
  const corners = ["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"] as const;
  return (
    <>
      {corners.map((pos, i) => (
        <div
          key={i}
          className={cn("pointer-events-none absolute z-[1] h-5 w-5", pos)}
          style={{
            borderTop: i < 2 ? line : "none",
            borderBottom: i >= 2 ? line : "none",
            borderLeft: i % 2 === 0 ? line : "none",
            borderRight: i % 2 === 1 ? line : "none",
          }}
          aria-hidden
        />
      ))}
    </>
  );
}

/** After song cues: exhibition, whisper, thanks, legal — six short slides. */
const OUTRO_SLIDE_COUNT = 6;

export function HomeFlowerCreditsPlayer({ className }: { className?: string }) {
  const reduceMotion = usePrefersReducedMotion();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const creditsSong = useMemo(() => songs.find((s) => s.id === CREDITS_SONG_ID), []);
  const lyricSongs = useMemo(() => songs.filter((s) => s.id !== CREDITS_SONG_ID), []);
  const synopsisSlides = useMemo(() => {
    const p = [...creditsSynopsisSlides()];
    while (p.length < 5) p.push("");
    return p.slice(0, 5);
  }, []);

  const songStart = CREDITS_SONG_BLOCK_START_INDEX;
  const outroStart = songStart + lyricSongs.length;
  const CARD_COUNT = outroStart + OUTRO_SLIDE_COUNT;

  const castTriples: Character[][] = [
    characters.slice(0, 2),
    characters.slice(2, 4),
    characters.slice(4, 7),
  ];

  const [playing, setPlaying] = useState(false);
  const [audioEnded, setAudioEnded] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [loadError, setLoadError] = useState(false);

  const resolvedSrc = useMemo(
    () => (creditsSong?.audioSrc ? publicAudioUrl(creditsSong.audioSrc) : ""),
    [creditsSong?.audioSrc],
  );

  useEffect(() => {
    const el = audioRef.current;
    if (!el || !resolvedSrc || !creditsSong) return;

    let cancelled = false;
    setLoadError(false);
    setDuration(0);
    setCurrentTime(0);

    const onMeta = () => {
      if (cancelled) return;
      setDuration(Number.isFinite(el.duration) ? el.duration : 0);
      setLoadError(false);
    };
    const onTime = () => {
      if (!cancelled) setCurrentTime(el.currentTime);
    };
    const onEnded = () => {
      if (cancelled) return;
      setPlaying(false);
      setAudioEnded(true);
    };
    const onPlay = () => {
      if (!cancelled) setPlaying(true);
    };
    const onPause = () => {
      if (!cancelled) setPlaying(false);
    };
    const onErr = () => {
      if (!cancelled) {
        setLoadError(true);
        setPlaying(false);
      }
    };

    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("ended", onEnded);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("error", onErr);

    el.load();

    return () => {
      cancelled = true;
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("ended", onEnded);
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("error", onErr);
      el.pause();
    };
  }, [resolvedSrc, creditsSong]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || loadError) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      setAudioEnded(false);
      void audio.play().catch(() => setLoadError(true));
      setPlaying(true);
    }
  }, [playing, loadError]);

  const replay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || loadError) return;
    setAudioEnded(false);
    audio.currentTime = 0;
    setCurrentTime(0);
    void audio.play().catch(() => setLoadError(true));
    setPlaying(true);
  }, [loadError]);

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;
  const idleAtStart = !playing && !audioEnded && currentTime < 0.25;

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const slice = duration > 0 ? duration / CARD_COUNT : 0;
  const visibleIndex =
    duration > 0 && !idleAtStart
      ? Math.min(
          CARD_COUNT - 1,
          Math.max(0, Math.floor(audioEnded ? CARD_COUNT - 1 : currentTime / slice)),
        )
      : 0;

  const renderMovieCard = (i: number) => {
    if (i === 0) {
      return (
        <div className="flex flex-col items-center justify-center px-2 text-center">
          <p className="font-logo text-[clamp(2.5rem,8vw,4.25rem)] leading-[1] tracking-[0.06em] text-white drop-shadow-[0_4px_32px_rgba(234,179,8,0.22)]">
            {project.title}
          </p>
          <p className="mt-6 max-w-md font-sans text-[14px] font-medium italic leading-relaxed text-zinc-300/95 sm:text-[15px]">
            {flowerCreditsTagline}
          </p>
          <div className="mt-10 flex flex-col items-center">
            <p className="font-sans text-[9px] uppercase tracking-[0.36em] text-zinc-500">Based on a story by</p>
            <p className="mt-3 font-display text-lg uppercase tracking-[0.2em] text-white sm:text-xl">
              {flowerCreditsCreatorName}
            </p>
            <p className="mt-4 max-w-sm font-sans text-[11px] uppercase tracking-[0.2em] leading-relaxed text-zinc-400">
              {project.genre}
            </p>
          </div>
        </div>
      );
    }
    if (i >= 1 && i <= 3) {
      const part = creditsLoglineSlides[i - 1]!;
      const footers = [
        "Treatment · Flower High",
        "Rose — who can’t synch the score",
        "Theme · belonging vs. the machine",
      ];
      return <StoryBeatSlide label="Screen story" body={part} footer={footers[i - 1]} />;
    }
    if (i >= 4 && i <= 6) {
      const bi = i - 4;
      const { label, name } = filmCreditsBilling[bi]!;
      const bridge = creditsBillingStoryBridges[bi]!;
      return (
        <div className="mx-auto max-w-md px-2 text-center">
          <CreditCardLabel>{label}</CreditCardLabel>
          <p className="font-display text-xl uppercase tracking-[0.14em] text-white sm:text-2xl">{name}</p>
          <p className="mt-6 font-sans text-[14px] italic leading-relaxed text-zinc-400">{bridge}</p>
          {bi === 2 ? (
            <p className="mt-5 font-sans text-[12px] leading-relaxed text-zinc-500">
              Lyrics and story in active revision; arrangements and orchestration to follow for production.
            </p>
          ) : null}
        </div>
      );
    }
    if (i >= 7 && i <= 9) {
      const group = castTriples[i - 7]!;
      return (
        <div className="mx-auto w-full max-w-lg px-2">
          <CreditCardLabel>Cast of characters</CreditCardLabel>
          <p className="mb-6 max-w-md font-sans text-[13px] leading-relaxed text-zinc-400">
            The voices in the district — who pull Rose toward performance, truth, or control.
          </p>
          <div className={cn("flex flex-wrap justify-center gap-x-8 gap-y-10", group.length === 3 && "gap-y-8")}>
            {group.map((c) => (
              <CastPair key={c.id} c={c} />
            ))}
          </div>
        </div>
      );
    }
    if (i >= 10 && i <= 14) {
      const body = synopsisSlides[i - 10]!.trim();
      if (!body) return null;
      const beatLabels = [
        "Act I · out of step",
        "Act I · cost of trying",
        "Act II A · another way to grow",
        "Act II B · the Equalizer",
        "Act III · the truth",
      ];
      return (
        <StoryBeatSlide label="The story continues" body={body} footer={beatLabels[i - 10]} />
      );
    }
    if (i === 15) {
      const summary = sets[0]?.summary ?? "";
      const firstSentence = summary.includes(". ") ? `${summary.split(". ")[0]}.` : summary;
      return (
        <div className="mx-auto max-w-md px-2 text-center">
          <CreditCardLabel>Where it happens</CreditCardLabel>
          <p className="font-sans text-[16px] font-normal leading-[1.75] text-zinc-200 sm:text-[17px]">{firstSentence}</p>
          <p className="mt-5 font-sans text-[12px] leading-snug text-zinc-400">
            Woods, atrium, festival ring, core — every set a different pressure on Rose.
          </p>
          <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.22em] leading-relaxed text-zinc-500">
            {sets.map((s) => s.name).join(" · ")}
          </p>
        </div>
      );
    }
    if (i >= songStart && i < outroStart) {
      const s = lyricSongs[i - songStart]!;
      return (
        <div className="mx-auto w-full max-w-md px-2">
          <CreditCardLabel>Music in the story</CreditCardLabel>
          <div className="text-center">
            <p className="font-display text-base uppercase tracking-[0.12em] text-white sm:text-lg">{s.title}</p>
            <p className="mt-1.5 font-sans text-[13px] italic text-zinc-400">{s.credit}</p>
            {s.code ? (
              <p className="mt-4 font-sans text-[12px] leading-relaxed text-zinc-500">Cue {s.code}</p>
            ) : null}
          </div>
        </div>
      );
    }
    if (i === outroStart) {
      const phase = project.phase ?? "";
      const dot = phase.indexOf(". ");
      const phaseFirst = dot >= 0 ? phase.slice(0, dot + 1).trim() : phase;
      const phaseRest = dot >= 0 ? phase.slice(dot + 2).trim() : "";
      return (
        <div className="mx-auto max-w-lg px-3 text-center">
          <CreditCardLabel>This exhibition</CreditCardLabel>
          <p className="font-sans text-[15px] leading-[1.75] text-zinc-200 sm:text-[16px]">
            {phaseFirst || "Treatment and exhibition draft — Flower High."}
          </p>
          {phaseRest ? (
            <p className="mt-4 font-sans text-[14px] leading-[1.7] text-zinc-400">{phaseRest}</p>
          ) : null}
          <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Reader · dossiers · lyrics — a living draft, not picture lock
          </p>
        </div>
      );
    }
    if (i === outroStart + 1) {
      return (
        <div className="mx-auto max-w-md px-3 text-center">
          <CreditCardLabel>Playback</CreditCardLabel>
          <p className="font-sans text-[14px] leading-relaxed text-zinc-300">
            This reel is timed to <span className="text-white/95">“{creditsSong?.title ?? "Flower"}.”</span>
          </p>
        </div>
      );
    }
    if (i === outroStart + 2) {
      return (
        <div className="mx-auto max-w-md px-2 text-center">
          <CreditCardLabel>Whispers from the district</CreditCardLabel>
          <p className="font-display text-[0.95rem] font-normal italic leading-relaxed tracking-[0.02em] text-zinc-300">
            “{flowerWorldQuotes[0]}”
          </p>
        </div>
      );
    }
    if (i === outroStart + 3) {
      return (
        <div className="mx-auto max-w-md px-2 text-center">
          <CreditCardLabel>With thanks</CreditCardLabel>
          <p className="font-sans text-[15px] leading-[1.75] text-zinc-300">{creditsRollThanksLines[0]}</p>
        </div>
      );
    }
    if (i === outroStart + 4) {
      return (
        <div className="mx-auto max-w-md px-2 text-center">
          <CreditCardLabel>Thank you</CreditCardLabel>
          <p className="font-sans text-[15px] leading-[1.75] text-zinc-300">{creditsRollThanksLines[1]}</p>
          <p className="mt-6 font-sans text-[13px] leading-relaxed text-zinc-500">
            No association with any school or organization is implied. Names and places are fictitious.
          </p>
        </div>
      );
    }
    if (i === outroStart + 5) {
      return (
        <div className="mx-auto flex max-w-md flex-col items-center px-2 text-center">
          <p className="font-display text-xs uppercase tracking-[0.32em] text-zinc-400">
            F&nbsp;L&nbsp;O&nbsp;W&nbsp;E&nbsp;R
          </p>
          <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.28em] text-zinc-600">
            Exhibition site · {new Date().getFullYear()}
          </p>
        </div>
      );
    }
    return null;
  };

  const reelChrome = (
    <>
      <FilmCorners />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[12%] bg-gradient-to-b from-black/75 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[14%] bg-gradient-to-t from-black/80 via-amber-950/10 to-transparent" />
    </>
  );

  if (!creditsSong) {
    return (
      <div className={cn("rounded-sm border border-border/50 bg-muted/20 p-6 text-sm text-muted-foreground", className)}>
        Credits audio is not available.
      </div>
    );
  }

  const playerChrome = (
    <div className="relative overflow-hidden border-t border-amber-400/30 bg-gradient-to-b from-[#1a0a2e] via-[#12081c] to-[#07040c] px-3 py-2.5 sm:px-4 sm:py-3">
      {!reduceMotion ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            background: "linear-gradient(105deg, transparent 35%, rgba(253, 230, 138, 0.45) 50%, transparent 65%)",
            backgroundSize: "200% 100%",
            animation: "creditsPlayerShimmer 4s ease-in-out infinite",
          }}
          aria-hidden
        />
      ) : null}
      <div className="relative flex flex-col gap-2">
        <button
          type="button"
          className="group relative h-1.5 w-full cursor-pointer overflow-hidden rounded-full bg-white/12 shadow-inner shadow-black/40 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={loadError || duration <= 0}
          onClick={(e) => {
            const audio = audioRef.current;
            if (!audio || duration <= 0) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            audio.currentTime = x * duration;
            setCurrentTime(audio.currentTime);
          }}
          aria-label="Seek credits track"
        >
          <span
            className="pointer-events-none absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-400 via-rose-400 to-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.55)] transition-[width] duration-150 ease-out group-hover:brightness-110"
            style={{ width: `${progressPct}%` }}
          />
        </button>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl ring-2 ring-amber-400/35 ring-offset-2 ring-offset-[#12081c] sm:h-11 sm:w-11">
            <Image src={COVER_STILL} alt="" fill className="object-cover object-top" sizes="44px" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
              <Sparkles className="size-3 shrink-0 text-amber-300/90 sm:size-3.5" aria-hidden />
              <p className="min-w-0 flex-1 truncate font-sans text-[9px] font-semibold uppercase tracking-[0.13em] text-amber-100/95 sm:text-[10px]">
                {creditsSong.title}
              </p>
              <span className="shrink-0 font-sans text-[8px] tabular-nums text-zinc-500 sm:text-[9px]">
                Reel {visibleIndex + 1}/{CARD_COUNT}
              </span>
            </div>
            <p className="truncate font-sans text-[9px] text-zinc-400 sm:text-[10px]">{creditsSong.credit}</p>
          </div>
          <span className="hidden shrink-0 font-sans text-[9px] tabular-nums tracking-wide text-amber-200/70 sm:inline">
            {fmt(currentTime)} / {fmt(duration || 0)}
          </span>
          <button
            type="button"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-amber-200/80 transition-subtle hover:bg-white/10 hover:text-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[#12081c] disabled:pointer-events-none disabled:opacity-40"
            onClick={replay}
            disabled={loadError}
            aria-label="Restart song and credits"
          >
            <RotateCcw className="size-4" />
          </button>
          <button
            type="button"
            className={cn(
              "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-0 shadow-lg shadow-amber-900/40 transition-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[#12081c] sm:h-10 sm:w-10",
              playing
                ? "bg-amber-50 text-violet-950 hover:bg-white"
                : "bg-gradient-to-b from-amber-400 to-rose-600 text-white hover:brightness-110",
            )}
            onClick={togglePlay}
            disabled={loadError}
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <Pause className="size-4 fill-current" />
            ) : (
              <Play className="ml-0.5 size-4 fill-current" />
            )}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={cn("space-y-5", className)}>
      <audio ref={audioRef} src={resolvedSrc || undefined} preload="metadata" className="hidden" />

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="page-label">Film</p>
          <h2 className="font-display text-lg font-medium tracking-tight text-foreground md:text-xl">Credits</h2>
          <p className="max-w-xl font-sans text-xs leading-relaxed text-muted-foreground">
            End-credits roll for <span className="font-medium text-foreground/90">{project.title}</span>, based on a
            story by {flowerCreditsCreatorName}, screenplay and songs by {flowerCreditsWriterName}. Music:{" "}
            <span className="font-medium text-foreground/90">{creditsSong.title}</span>.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-black shadow-[0_12px_48px_-16px_rgba(234,179,8,0.12)] ring-1 ring-amber-900/40">
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          {loadError ? (
            <div className="flex h-full min-h-[200px] items-center justify-center bg-[#1a0508] px-6 text-center text-sm text-white/70">
              Could not load audio. Please try again.
            </div>
          ) : (
            <>
              <DisneyCreditsBackdrop reducedMotion={reduceMotion} />
              {!reduceMotion ? (
                <div
                  className="absolute inset-0 z-[1] overflow-hidden"
                  role="region"
                  aria-label="Credits sequence"
                  aria-live="polite"
                >
                  {reelChrome}
                  <div className="absolute inset-0 z-[2] flex items-center justify-center px-2 py-2 sm:px-5 sm:py-3 md:px-8 md:py-4">
                    {Array.from({ length: CARD_COUNT }, (_, idx) => {
                      const op = chunkOpacity(idx, currentTime, duration, CARD_COUNT, idleAtStart, audioEnded);
                      if (op < 0.003) return null;
                      return (
                        <div
                          key={idx}
                          className="absolute inset-0 flex items-center justify-center overflow-hidden px-1 sm:px-3"
                          style={{ opacity: op, pointerEvents: "none" }}
                        >
                          <div
                            className="max-h-full w-full overflow-y-auto overflow-x-hidden [scrollbar-width:none]"
                            style={{ scrollbarWidth: "none" }}
                          >
                            {renderMovieCard(idx)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div
                  className="absolute inset-0 z-[1] overflow-y-auto px-3 py-4 sm:px-6 sm:py-6"
                  style={{ scrollbarWidth: "none" }}
                >
                  <p className="mb-5 font-sans text-[11px] text-zinc-400">
                    Reduced motion: static list. Use the player below for {creditsSong.title}.
                  </p>
                  <div className="space-y-14">
                    {Array.from({ length: CARD_COUNT }, (_, idx) => (
                      <div key={idx} className="border-b border-white/10 pb-12 text-white last:border-0">
                        {renderMovieCard(idx)}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        {playerChrome}
      </div>

      <aside
        className="frame-cinematic border border-border/50 bg-surface/25 px-4 py-5 shadow-frame-inset sm:px-6"
        aria-label="Billing credits"
      >
        <p className="page-label mb-4">Billing</p>
        <dl className="space-y-3">
          {filmCreditsBilling.map(({ label, name }) => (
            <div
              key={label}
              className="flex flex-row flex-wrap items-baseline justify-between gap-x-6 gap-y-1"
            >
              <dt className="max-w-[min(100%,14rem)] font-sans text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {label}
              </dt>
              <dd className="text-right font-display text-base font-medium tracking-tight text-foreground sm:text-[1.05rem]">
                {name}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-5 flex flex-row flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-border/40 pt-4 font-sans text-xs leading-relaxed text-muted-foreground">
          <span>End credits music</span>
          <span className="text-right font-medium text-foreground/85">{creditsSong.title}</span>
        </div>
      </aside>
    </div>
  );
}
