import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ExhibitionMainReveal, ExhibitionSidebarReveal } from "./exhibition-motion";

/** Two-part catalogue line, e.g. { suite: "HOME", facet: "FILM ENTRY" } → HOME / FILM ENTRY */
export type ExhibitionPageLabelSpec = {
  suite: string;
  facet: string;
};

/** Preset didactic lines for major routes — pass to `pageLabel` or use as a reference. */
export const exhibitionPageLabels = {
  home: { suite: "HOME", facet: "FILM ENTRY" },
  script: { suite: "SCRIPT", facet: "READER" },
  character: { suite: "CHARACTER", facet: "DOSSIER" },
  set: { suite: "SET", facet: "WORLD DESIGN" },
  lyrics: { suite: "SOUND", facet: "LYRICS" },
  pdfs: { suite: "ROOM", facet: "DOCUMENTS" },
} as const satisfies Record<string, ExhibitionPageLabelSpec>;

/** Sticky sidebar column on character / set / script detail layouts (desktop). */
export const exhibitionStickySidebarClassName =
  "lg:sticky lg:top-20 lg:max-h-[calc(100dvh-5.5rem)] lg:overflow-y-auto lg:self-start lg:pr-1";

export type ExhibitionLayoutProps = {
  /** Cinematic primary column (media, hero, long-form content). */
  children: ReactNode;
  /** Interpretive gallery column — wall text, metadata, secondary narrative. */
  sidebar: ReactNode;
  /** Optional didactic line above the main column. */
  pageLabel?: ExhibitionPageLabelSpec;
  className?: string;
  mainClassName?: string;
  sidebarClassName?: string;
  /** Exposed on the aside; defaults to a neutral exhibition phrase. */
  sidebarAriaLabel?: string;
};

function ExhibitionPageLabelRow({ suite, facet }: ExhibitionPageLabelSpec) {
  return (
    <p className="page-label mb-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
      <span className="text-muted-foreground">{suite}</span>
      <span className="select-none text-muted-foreground/28" aria-hidden>
        /
      </span>
      <span className="text-accent">{facet}</span>
    </p>
  );
}

/**
 * Two-column exhibition grid: dominant primary stage + interpretive sidebar.
 * Desktop ~60/40; mobile stacks with primary first.
 */
export function ExhibitionLayout({
  children,
  sidebar,
  pageLabel,
  className,
  mainClassName,
  sidebarClassName,
  sidebarAriaLabel = "Gallery interpretation",
}: ExhibitionLayoutProps) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 items-start gap-y-14 lg:grid-cols-[3fr_2fr] lg:gap-x-6 xl:gap-x-8",
        className,
      )}
    >
      <ExhibitionMainReveal
        mainClassName={mainClassName}
        pageLabel={pageLabel ? <ExhibitionPageLabelRow {...pageLabel} /> : null}
      >
        {children}
      </ExhibitionMainReveal>

      <aside
        aria-label={sidebarAriaLabel}
        className={cn(
          "min-w-0 border-t border-border/35 pt-12 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0 xl:pl-8",
          sidebarClassName,
        )}
      >
        <ExhibitionSidebarReveal>{sidebar}</ExhibitionSidebarReveal>
      </aside>
    </div>
  );
}

export type ExhibitionSidebarSectionProps = {
  /** Small wall-text heading (optional). */
  title?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Grouped block inside the exhibition sidebar — caption card, not a dashboard widget.
 */
export function ExhibitionSidebarSection({
  title,
  children,
  className,
}: ExhibitionSidebarSectionProps) {
  return (
    <section className={cn("space-y-3.5", className)}>
      {title ? <h2 className="wall-section-title">{title}</h2> : null}
      <div className="space-y-3 text-sm leading-[1.65] text-muted-foreground">{children}</div>
    </section>
  );
}
