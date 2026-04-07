import type { ReactNode } from "react";
import Link from "next/link";

export type ArchiveNotFoundProps = {
  /** Upper index line (`page-label`) */
  indexLabel: string;
  heading: string;
  children: ReactNode;
  backHref: string;
  backLabel: string;
};

/**
 * Shared empty state when a slug has no archive entry (character / set detail).
 */
export function ArchiveNotFound({
  indexLabel,
  heading,
  children,
  backHref,
  backLabel,
}: ArchiveNotFoundProps) {
  return (
    <section
      className="mx-auto max-w-lg space-y-6 py-8 text-center md:py-14"
      aria-labelledby="archive-not-found-heading"
    >
      <p className="page-label flex justify-center">{indexLabel}</p>
      <h1 id="archive-not-found-heading" className="font-display text-3xl font-medium tracking-tight text-foreground">
        {heading}
      </h1>
      <div className="font-sans text-sm leading-relaxed text-muted-foreground">{children}</div>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <Link
          href={backHref}
          className="inline-flex min-h-10 min-w-[10rem] items-center justify-center border border-border/70 bg-surface/40 px-4 py-2 font-sans text-sm font-medium transition-subtle hover:border-border hover:bg-surface/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {backLabel}
        </Link>
        <Link
          href="/"
          className="link-quiet min-h-10 inline-flex items-center text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Home
        </Link>
      </div>
    </section>
  );
}
