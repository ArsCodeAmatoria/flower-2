import { SITE_SCRIPT_CREDIT } from "@/lib/site-metadata";
import { cn } from "@/lib/utils";

type SiteColophonProps = {
  className?: string;
};

/**
 * Closing credit — small retro-future / digital readout at page bottom (no footer chrome).
 */
export function SiteColophon({ className }: SiteColophonProps) {
  return (
    <div
      role="contentinfo"
      className={cn(
        "flex shrink-0 items-center justify-center gap-1.5 pb-12 pt-14 font-future sm:gap-2 sm:pb-14 sm:pt-16 md:pb-16 md:pt-20",
        className,
      )}
    >
      <span className="select-none text-[0.5rem] font-medium tabular-nums leading-none tracking-[0.1em] text-muted-foreground/45 sm:text-[0.5625rem]" aria-hidden>
        {"//"}
      </span>
      <p className="max-w-[min(100%,34rem)] text-center text-[0.5rem] font-medium uppercase leading-tight tracking-[0.18em] text-muted-foreground/88 sm:text-[0.5625rem] sm:tracking-[0.2em]">
        {SITE_SCRIPT_CREDIT}
      </p>
      <span className="select-none text-[0.5rem] font-medium tabular-nums leading-none tracking-[0.1em] text-muted-foreground/45 sm:text-[0.5625rem]" aria-hidden>
        {"//"}
      </span>
    </div>
  );
}
