import type { Project } from "@/types";
import { WallDefinitionRow } from "@/components/exhibition/wall-definition-row";
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
          <h1 className="font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            {p.title}
          </h1>
          <p className="font-sans text-sm font-normal leading-relaxed text-foreground/85">{p.logline}</p>
        </header>

        <section className="space-y-2">
          <h2 className="wall-label">Synopsis</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{p.synopsis}</p>
        </section>

        <dl className="space-y-5 border-t border-border/30 pt-6">
          <WallDefinitionRow term="Genre">{p.genre}</WallDefinitionRow>
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
