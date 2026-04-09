import type { Project } from "@/types";
import { WallDefinitionRow } from "@/components/exhibition/wall-definition-row";
import { visualGrammar } from "@/data/visual-grammar";
import { cn } from "@/lib/utils";

export type ProjectGalleryPanelProps = {
  project: Project;
  className?: string;
};

/**
 * Right-column wall text — reads as a single gallery caption card, not a form or dashboard.
 */
export function ProjectGalleryPanel({ project: p, className }: ProjectGalleryPanelProps) {
  return (
    <div className={cn("wall-caption-card", className)}>
      <div className="space-y-8">
        <header className="space-y-3 border-b border-border/30 pb-6">
          <div className="space-y-2">
            <h1 className="font-logo text-[2.25rem] font-bold leading-[0.95] tracking-normal text-foreground sm:text-[2.5rem]">
              {p.title}
            </h1>
            <p className="font-sans text-sm text-muted-foreground">{p.genre}</p>
          </div>
          <p className="font-sans text-sm font-normal leading-relaxed text-foreground/85">{p.logline}</p>
        </header>

        {p.exhibitionIntro ? (
          <section className="space-y-2">
            <h2 className="wall-label">On this site</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.exhibitionIntro}</p>
          </section>
        ) : null}

        <section className="space-y-2">
          <h2 className="wall-label">Synopsis</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{p.synopsis}</p>
        </section>

        <section className="space-y-4 border-t border-border/30 pt-6">
          <h2 className="wall-label">Colour & light grammar</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{visualGrammar.intro}</p>
          <ul className="space-y-4">
            {visualGrammar.sections.map((s) => (
              <li key={s.title}>
                <p className="mb-1 font-sans text-[0.68rem] font-medium uppercase tracking-[0.14em] text-foreground/80">
                  {s.title}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <dl className="space-y-5 border-t border-border/30 pt-6">
          <WallDefinitionRow term="Tone">{p.tone}</WallDefinitionRow>
          <WallThemes themes={p.themes} />
          {p.phase ? <WallDefinitionRow term="Project status">{p.phase}</WallDefinitionRow> : null}
        </dl>
      </div>
    </div>
  );
}

function WallThemes({ themes }: { themes: string[] }) {
  return (
    <WallDefinitionRow term="Themes">
      <ul className="flex flex-wrap gap-2">
        {themes.map((t) => (
          <li key={t}>
            <span className="pill pill--accent text-[0.625rem] tracking-wide">{t}</span>
          </li>
        ))}
      </ul>
    </WallDefinitionRow>
  );
}
