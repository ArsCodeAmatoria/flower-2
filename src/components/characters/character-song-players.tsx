import Link from "next/link";
import { SongPlayer } from "@/components/songs/song-player";
import { songsForCharacterSlug } from "@/lib/character-songs";
import { cn } from "@/lib/utils";

export type CharacterSongPlayersProps = {
  characterSlug: string;
  className?: string;
};

/**
 * Audio players for songs this character performs — below the still plate on dossier pages.
 */
export function CharacterSongPlayers({ characterSlug, className }: CharacterSongPlayersProps) {
  const tracks = songsForCharacterSlug(characterSlug);
  if (tracks.length === 0) return null;

  return (
    <section
      className={cn("mt-10 max-w-readable border-t border-border/25 pt-10", className)}
      aria-label="Songs performed by this character"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <p className="page-label">Vocals</p>
        <Link
          href="/lyrics"
          className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground/80"
        >
          Songbook
        </Link>
      </div>
      <ul className="list-none space-y-8" role="list">
        {tracks.map((song) => (
          <li key={song.id} className="space-y-2">
            <div className="space-y-0.5">
              <p className="font-display text-lg font-medium tracking-tight text-foreground">{song.title}</p>
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
