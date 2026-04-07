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
 * Home entry — Rose still plate (16∶9 → 2∶1 by breakpoint) plus story spine (logline + emotional hook).
 */
export function HomeHero({ className }: HomeHeroProps) {
  if (!rose) return null;

  return (
    <section className={cn("space-y-5", className)} aria-labelledby="home-hero-title">
      <p className="page-label">Film entry</p>

      <div
        className={cn(
          "frame-cinematic space-y-6 p-5 transition-[box-shadow] duration-[520ms] ease-exhibition md:p-7",
          "shadow-frame-inset hover:shadow-[inset_0_0_0_1px_hsl(var(--accent)/0.1),0_20px_40px_-24px_hsl(var(--foreground)/0.08)]",
        )}
      >
        <div className="space-y-3 text-center sm:text-left">
          <div className="space-y-1">
            <h1 id="home-hero-title" className="font-display text-[1.85rem] font-medium tracking-tight text-foreground md:text-[2.1rem]">
              {project.title}
            </h1>
            <p className="font-sans text-xs text-muted-foreground md:text-[0.8125rem]">{project.genre}</p>
          </div>

          <p className="font-sans text-[0.9375rem] leading-[1.7] text-foreground/90 md:text-[15px]">{project.logline}</p>
        </div>

        <Link
          href="/characters/rose"
          className="group relative mx-auto block w-full max-w-[56rem] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`${rose.name} — open character dossier`}
        >
          <div
            className={cn(
              "relative aspect-video w-full overflow-hidden rounded-sm md:aspect-[2/1]",
              "ring-1 ring-inset ring-foreground/[0.08]",
              "transition-transform duration-500 ease-exhibition group-hover:scale-[1.015]",
              "bg-muted/30",
            )}
          >
            <Image
              src={rose.image16x9}
              alt=""
              fill
              sizes="(max-width: 767px) min(100vw, 56rem), min(56rem, 92vw)"
              priority
              className="object-cover object-center opacity-[0.97] transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
          <span
            className="mt-2 block text-center font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-accent/90 transition-opacity group-hover:opacity-100"
          >
            Protagonist →
          </span>
        </Link>

        <div className="space-y-4 text-center sm:text-left">
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
