"use client";

import { useMemo, useState } from "react";
import {
  ExhibitionLayout,
  ExhibitionSidebarSection,
  exhibitionPageLabels,
  exhibitionStickySidebarClassName,
} from "@/components/layout/exhibition-layout";
import type { Song } from "@/types";
import { cn } from "@/lib/utils";
import { SongPlayer } from "./song-player";

export type LyricsExperienceProps = {
  songs: Song[];
};

export function LyricsExperience({ songs }: LyricsExperienceProps) {
  const [slug, setSlug] = useState(songs[0]?.slug ?? "");

  const active = useMemo(() => songs.find((s) => s.slug === slug) ?? songs[0], [songs, slug]);

  if (!active) {
    return <p className="text-sm text-muted-foreground">No songs in data yet. Add entries in src/data/songs.ts.</p>;
  }

  return (
    <ExhibitionLayout
      pageLabel={exhibitionPageLabels.lyrics}
      sidebarAriaLabel="Song selection"
      sidebarClassName={exhibitionStickySidebarClassName}
      sidebar={
        <div className="space-y-9 text-sm">
          <ExhibitionSidebarSection title="Tracks">
            <ul className="list-none space-y-1" role="list">
              {songs.map((s) => {
                const selected = s.slug === active.slug;
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => setSlug(s.slug)}
                      className={cn(
                        "w-full rounded-sm border px-3 py-2.5 text-left font-sans text-[0.8125rem] transition-subtle",
                        selected
                          ? "border-accent/35 bg-accent-subtle/25 text-foreground"
                          : "border-transparent text-muted-foreground hover:border-border/45 hover:bg-muted/25 hover:text-foreground/90",
                      )}
                      aria-current={selected ? "true" : undefined}
                    >
                      <span className="font-medium">
                        {s.code ? (
                          <>
                            <span className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-accent/90">
                              {s.code}
                            </span>
                            <span className="text-muted-foreground/80"> · </span>
                          </>
                        ) : null}
                        {s.title}
                      </span>
                      <span className="mt-0.5 block text-[0.7rem] text-muted-foreground/90">{s.credit}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </ExhibitionSidebarSection>
        </div>
      }
    >
      <div className="space-y-8 lg:space-y-10">
        <header className="max-w-readable space-y-2">
          <h1 className="font-display text-2xl font-medium tracking-tight text-foreground md:text-[1.85rem]">
            {active.title}
          </h1>
          <p className="font-sans text-sm text-muted-foreground">{active.credit}</p>
        </header>

        <SongPlayer key={active.slug} src={active.audioSrc} title={active.title} />

        <section className="max-w-readable border-t border-border/25 pt-10" aria-labelledby="lyrics-heading">
          <h2 id="lyrics-heading" className="page-label mb-6">
            Lyrics
          </h2>
          <pre className="whitespace-pre-wrap font-sans text-[15px] leading-[1.85] tracking-[0.02em] text-foreground/88">
            {active.lyrics}
          </pre>
        </section>
      </div>
    </ExhibitionLayout>
  );
}
