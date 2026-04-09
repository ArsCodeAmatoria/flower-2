"use client";

import Link from "next/link";
import { SongPlayer } from "@/components/songs/song-player";
import { songsForScriptScene } from "@/lib/script-scene-songs";
import type { ScriptScene } from "@/types";
import { cn } from "@/lib/utils";

export type ScriptSceneSongPlayersProps = {
  scene: ScriptScene;
  className?: string;
};

/**
 * When the active script scene lists `songSlugs`, show those cues in the sidebar (same controls as `/lyrics` / dossier).
 */
export function ScriptSceneSongPlayers({ scene, className }: ScriptSceneSongPlayersProps) {
  const tracks = songsForScriptScene(scene.songSlugs);
  if (tracks.length === 0) return null;

  return (
    <section
      className={cn("border-b border-border/30 pb-6", className)}
      aria-label="Musical cue for this scene"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <p className="page-label">In this scene</p>
        <Link
          href="/lyrics"
          className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground/80"
        >
          Songbook
        </Link>
      </div>
      <ul className="list-none space-y-6" role="list">
        {tracks.map((song) => (
          <li key={song.id} className="space-y-2">
            <div className="space-y-0.5">
              <p className="font-display text-base font-medium tracking-tight text-foreground md:text-lg">{song.title}</p>
              {song.code ? (
                <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-accent/90">
                  {song.code}
                  <span className="text-muted-foreground/70"> · </span>
                  <span className="font-normal normal-case tracking-normal text-muted-foreground">{song.credit}</span>
                </p>
              ) : (
                <p className="font-sans text-sm text-muted-foreground">{song.credit}</p>
              )}
            </div>
            <SongPlayer src={song.audioSrc} title={song.title} />
          </li>
        ))}
      </ul>
    </section>
  );
}
