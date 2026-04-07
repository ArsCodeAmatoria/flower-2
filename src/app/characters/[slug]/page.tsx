import { ExhibitionLayout, exhibitionPageLabels, exhibitionStickySidebarClassName } from "@/components/layout/exhibition-layout";
import { ArchiveNotFound } from "@/components/layout/archive-not-found";
import { ExhibitionStillPlate } from "@/components/media/exhibition-still-plate";
import { CharacterSidebar } from "@/components/characters/character-sidebar";
import { characters } from "@/data/characters";
import { characterSceneLinks, characterSetLinks } from "@/lib/story-links";

type PageProps = { params: { slug: string } };

export default function CharacterDetailPage({ params }: PageProps) {
  const character = characters.find((c) => c.slug === params.slug);

  if (!character) {
    return (
      <ArchiveNotFound
        indexLabel="Character / dossier"
        heading="No dossier found"
        backHref="/characters"
        backLabel="Back to characters"
      >
        <p>
          There is no character registered for{" "}
          <span className="text-foreground/80">&ldquo;{params.slug}&rdquo;</span>. The archive may not yet
          include this entry.
        </p>
      </ArchiveNotFound>
    );
  }

  const sceneLinks = characterSceneLinks(character);
  const setLinks = characterSetLinks(character);

  return (
    <ExhibitionLayout
      pageLabel={exhibitionPageLabels.character}
      sidebarAriaLabel="Character dossier"
      sidebarClassName={exhibitionStickySidebarClassName}
      sidebar={<CharacterSidebar character={character} sceneLinks={sceneLinks} setLinks={setLinks} />}
    >
      <ExhibitionStillPlate
        subjectName={character.name}
        image16x9={character.image16x9}
        image2x1={character.image2x1}
        kicker="Still"
        caption="Reference plate — aspect matches exhibition frame"
        aspectToggleAriaLabel="Character still aspect ratio"
      />
    </ExhibitionLayout>
  );
}

export function generateStaticParams() {
  return characters.map((c) => ({ slug: c.slug }));
}
