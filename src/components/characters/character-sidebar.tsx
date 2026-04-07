import type { Character } from "@/types";
import type { StoryLink } from "@/types/story-link";
import { WallDefinitionRow } from "@/components/exhibition/wall-definition-row";
import { LinkedItemsGroup } from "@/components/links/linked-items";
import { cn } from "@/lib/utils";

export type CharacterSidebarProps = {
  character: Character;
  sceneLinks: StoryLink[];
  setLinks: StoryLink[];
  className?: string;
};

/**
 * Gallery wall dossier — museum caption card beside the cinematic still.
 */
export function CharacterSidebar({ character: c, sceneLinks, setLinks, className }: CharacterSidebarProps) {
  return (
    <div className={cn("wall-caption-card", className)}>
      <header className="border-b border-border/30 pb-6">
        <p className="page-label mb-3">Dossier</p>
        <h1 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-[2rem]">
          {c.name}
        </h1>
        <p className="mt-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {c.role}
        </p>
        <p className="mt-3 font-sans text-sm italic leading-relaxed text-muted-foreground">{c.archetype}</p>
      </header>

      <dl className="border-b border-border/25 py-6">
        <WallDefinitionRow term="Desire">{c.desire}</WallDefinitionRow>
        <WallDefinitionRow term="Flaw">{c.flaw}</WallDefinitionRow>
        <WallDefinitionRow term="Lie">{c.lie}</WallDefinitionRow>
        <WallDefinitionRow term="Truth">{c.truth}</WallDefinitionRow>
        <WallDefinitionRow term="Arc">{c.arc}</WallDefinitionRow>
        <WallDefinitionRow term="Speech pattern">{c.speechPattern}</WallDefinitionRow>
        <WallDefinitionRow term="Notes">{c.notes}</WallDefinitionRow>
      </dl>

      <div className="space-y-8 border-t border-border/25 pt-8">
        <LinkedItemsGroup label="Appears in (script)" items={sceneLinks} variant="list" />
        <LinkedItemsGroup label="Linked sets" items={setLinks} variant="list" />
      </div>
    </div>
  );
}
