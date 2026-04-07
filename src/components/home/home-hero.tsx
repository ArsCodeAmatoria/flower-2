import Image from "next/image";
import { project } from "@/data/project";
import { cn } from "@/lib/utils";

export type HomeHeroProps = {
  className?: string;
};

/**
 * Primary home stage — key art from `public/hero/hero.png` with exhibition framing.
 * Title is centered on the image; image is lifted for legibility.
 */
export function HomeHero({ className }: HomeHeroProps) {
  return (
    <section className={cn("space-y-6", className)} aria-labelledby="home-hero-title">
      <p className="page-label text-center">{project.genre}</p>

      <div
        className={cn(
          "frame-cinematic relative w-full overflow-hidden transition-[box-shadow] duration-[520ms] ease-exhibition",
          "hover:shadow-[inset_0_0_0_1px_hsl(var(--accent)/0.12),0_24px_48px_-24px_hsl(var(--foreground)/0.1)]",
        )}
      >
        <div className="relative aspect-[2/1] w-full min-h-[200px] sm:min-h-[260px]">
          <Image
            src="/hero/hero.png"
            alt=""
            fill
            priority
            className="object-cover object-center brightness-[1.22] contrast-[0.92] saturate-[0.88]"
            sizes="(min-width: 1536px) 900px, (min-width: 1024px) 58vw, 100vw"
          />
          {/* Light veil so the script title reads clearly */}
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-white/65 via-white/45 to-white/55"
            aria-hidden
          />
          <div className="absolute inset-0 z-[2] flex items-center justify-center px-4 py-6 sm:px-8">
            <h1
              id="home-hero-title"
              className={cn(
                "font-hero-petals text-center text-[clamp(3.25rem,14vw,6.25rem)] leading-[0.95] tracking-tight",
                "text-[hsl(220_24%_14%)]",
              )}
              style={{
                textShadow:
                  "0 0 28px rgba(255,255,255,0.95), 0 0 12px rgba(255,255,255,1), 0 2px 0 rgba(255,255,255,0.85), 0 3px 14px rgba(255,255,255,0.65)",
              }}
            >
              {project.title}
            </h1>
          </div>
        </div>
        <span
          className="pointer-events-none absolute inset-0 z-[3] ring-1 ring-inset ring-foreground/[0.06]"
          aria-hidden
        />
      </div>
    </section>
  );
}
