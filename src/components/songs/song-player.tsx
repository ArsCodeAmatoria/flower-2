"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export type SongPlayerProps = {
  src: string | null;
  title: string;
  className?: string;
};

/**
 * Exhibition-styled audio controls — play/pause, scrub, time readout.
 */
export function SongPlayer({ src, title, className }: SongPlayerProps) {
  const seekId = useId();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [loadError, setLoadError] = useState(false);

  /** Encode spaces and special characters in local `/public` paths */
  const resolvedSrc = useMemo(() => {
    if (!src) return undefined;
    if (/^https?:\/\//i.test(src)) return src;
    return encodeURI(src);
  }, [src]);

  const resetState = useCallback(() => {
    setPlaying(false);
    setDuration(0);
    setCurrent(0);
    setLoadError(false);
  }, []);

  useEffect(() => {
    resetState();
    const el = audioRef.current;
    if (!el || !resolvedSrc) return;

    const onMeta = () => {
      setDuration(Number.isFinite(el.duration) ? el.duration : 0);
      setLoadError(false);
    };
    const onTime = () => setCurrent(el.currentTime);
    const onEnded = () => setPlaying(false);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onErr = () => {
      setLoadError(true);
      setPlaying(false);
    };

    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("ended", onEnded);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("error", onErr);

    el.load();

    return () => {
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("ended", onEnded);
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("error", onErr);
    };
  }, [resolvedSrc, resetState]);

  const toggle = useCallback(() => {
    const el = audioRef.current;
    if (!el || !resolvedSrc || loadError) return;
    if (playing) el.pause();
    else void el.play().catch(() => setLoadError(true));
  }, [playing, resolvedSrc, loadError]);

  const onSeek = useCallback((value: number) => {
    const el = audioRef.current;
    if (!el || !Number.isFinite(duration) || duration <= 0) return;
    el.currentTime = (value / 1000) * duration;
    setCurrent(el.currentTime);
  }, [duration]);

  if (!src) {
    return (
      <div
        className={cn(
          "rounded-panel border border-dashed border-border/50 bg-surface/20 px-5 py-6 text-sm text-muted-foreground",
          className,
        )}
        role="region"
        aria-label={`Audio: ${title}`}
      >
        <p className="page-label mb-2">Playback</p>
        <p>No audio path set. Add a file under <code className="text-foreground/80">public/songs/</code> and point</p>
        <code className="mt-2 block font-mono text-xs text-foreground/70">audioSrc</code>
        <p className="mt-1">in <code className="font-mono text-xs text-foreground/70">src/data/songs.ts</code>.</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-panel border border-border/40 bg-surface/15 p-5 shadow-frame-inset md:p-6",
        className,
      )}
      role="region"
      aria-label={`Song player: ${title}`}
    >
      <audio ref={audioRef} src={resolvedSrc} preload="metadata" className="hidden" />

      <p className="page-label mb-4">Playback</p>

      {loadError ? (
        <p className="text-sm leading-relaxed text-muted-foreground">
          Could not load <span className="font-mono text-xs text-foreground/75">{src}</span>. Place the file in{" "}
          <code className="font-mono text-xs">public/songs/</code> or update the URL in{" "}
          <code className="font-mono text-xs">songs.ts</code>.
        </p>
      ) : (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <button
            type="button"
            onClick={toggle}
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent-subtle/40 text-accent transition-subtle",
              "hover:border-accent/50 hover:bg-accent-subtle/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )}
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <Pause className="h-5 w-5" strokeWidth={1.5} aria-hidden />
            ) : (
              <Play className="h-5 w-5 pl-0.5" strokeWidth={1.5} aria-hidden />
            )}
          </button>

          <div className="min-w-0 flex-1 space-y-2">
            <label className="sr-only" htmlFor={seekId}>
              Seek in track
            </label>
            <input
              id={seekId}
              type="range"
              min={0}
              max={1000}
              step={1}
              value={duration > 0 ? Math.round((current / duration) * 1000) : 0}
              onChange={(e) => onSeek(Number(e.target.value))}
              className={cn(
                "h-1.5 w-full cursor-pointer appearance-none rounded-full bg-muted/60",
                "[&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow-sm",
                "[&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-accent",
              )}
              style={{ accentColor: "hsl(var(--accent))" }}
            />
            <div className="flex justify-between font-sans text-[0.6875rem] tabular-nums tracking-wide text-muted-foreground">
              <span>{formatTime(current)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
