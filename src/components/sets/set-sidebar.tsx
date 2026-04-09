import type { FilmSet } from "@/types";
import type { StoryLink } from "@/types/story-link";
import { WallDefinitionRow } from "@/components/exhibition/wall-definition-row";
import { LinkedItemsGroup } from "@/components/links/linked-items";
import { stripScreenplayReaderMarkup } from "@/lib/screenplay-reader-markup";
import { cn } from "@/lib/utils";

export type SetSidebarProps = {
  set: FilmSet;
  sceneLinks: StoryLink[];
  className?: string;
};

/**
 * World-design wall card — production exhibit caption beside the environment still.
 */
export function SetSidebar({ set: s, sceneLinks, className }: SetSidebarProps) {
  return (
    <div className={cn("wall-caption-card", className)}>
      <header className="border-b border-border/30 pb-6">
        <p className="page-label mb-3">Set file</p>
        <h1 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-[2rem]">
          {s.name}
        </h1>
        <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
          {stripScreenplayReaderMarkup(s.summary)}
        </p>
      </header>

      <dl className="border-b border-border/25 py-6">
        <WallDefinitionRow term="Symbolic meaning">{stripScreenplayReaderMarkup(s.symbolicMeaning)}</WallDefinitionRow>
        <WallDefinitionRow term="Visual logic">{stripScreenplayReaderMarkup(s.visualLogic)}</WallDefinitionRow>
        <WallDefinitionRow term="Lighting tone">{stripScreenplayReaderMarkup(s.lightingTone)}</WallDefinitionRow>
        <WallDefinitionRow term="Notes">{stripScreenplayReaderMarkup(s.notes)}</WallDefinitionRow>
      </dl>

      <div className="border-t border-border/25 pt-8">
        <LinkedItemsGroup label="Scenes staged here" items={sceneLinks} variant="list" />
      </div>
    </div>
  );
}
