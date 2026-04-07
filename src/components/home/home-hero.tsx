import Image from "next/image";
import Link from "next/link";
import { characters } from "@/data/characters";
import { project } from "@/data/project";
import { cn } from "@/lib/utils";

const rose = characters.find((c) => c.slug === "rose");

export type HomeHeroProps = {
  className?: string;
};

/**
 * Home entry — small Rose profile and story spine (logline + emotional hook), not key art.
 */
export function HomeHero({ className }: HomeHeroProps) {
  if (!rose) return null;

  return (
    <section className={cn("space-y-5", className)} aria-labelledby="home-hero-title">
      <p className="page-label">Film entry</p>

      <div
        className={cn(
          "frame-cinematic flex flex-col gap-6 p-5 transition-[box-shadow] duration-[520ms] ease-exhibition sm:flex-row sm:items-start sm:gap-8 md:p-7",
          "shadow-frame-inset hover:shadow-[inset_0_0_0_1px_hsl(var(--accent)/0.1),0_20px_40px_-24px_hsl(var(--foreground)/0.08)]",
        )}
      >
        <Link
          href="/characters/rose"
          className="group relative mx-auto shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:mx-0"
          aria-label={`${rose.name} — open character dossier`}
        >
          <div
            className={cn(
              "relative h-[5.5rem] w-[5.5rem] overflow-hidden rounded-full ring-1 ring-inset ring-foreground/[0.08] sm:h-[6.75rem] sm:w-[6.75rem]",
              "transition-transform duration-500 ease-exhibition group-hover:scale-[1.03]",
              "bg-muted/30",
            )}
          >
            <Image
              src={rose.image16x9}
              alt=""
              width={108}
              height={108}
              priority
              className="h-full w-full object-cover object-center opacity-[0.97] transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
          <span
            className="mt-2 block text-center font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-accent/90 transition-opacity group-hover:opacity-100 sm:text-left"
          >
            Protagonist →
          </span>
        </Link>

        <div className="min-w-0 flex-1 space-y-4 text-center sm:text-left">
          <div className="space-y-1">
            <h1 id="home-hero-title" className="font-display text-[1.85rem] font-medium tracking-tight text-foreground md:text-[2.1rem]">
              {project.title}
            </h1>
            <p className="font-sans text-xs text-muted-foreground md:text-[0.8125rem]">{project.genre}</p>
          </div>

          <p className="font-sans text-[0.9375rem] leading-[1.7] text-foreground/90 md:text-[15px]">{project.logline}</p>

          <blockquote className="border-l-2 border-accent/35 pl-4">
            <p className="font-sans text-sm italic leading-relaxed text-muted-foreground md:text-[0.9375rem]">
              {rose.desire}
            </p>
            <footer className="mt-2 font-sans text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted-foreground/80">
              Rose — what she believes going in
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
