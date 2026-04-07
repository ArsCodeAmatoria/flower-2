import { ExhibitionLayout, exhibitionPageLabels, exhibitionStickySidebarClassName } from "@/components/layout/exhibition-layout";
import { ArchiveNotFound } from "@/components/layout/archive-not-found";
import { ExhibitionStillPlate } from "@/components/media/exhibition-still-plate";
import { SetSidebar } from "@/components/sets/set-sidebar";
import { sets } from "@/data/sets";
import { setSceneLinks } from "@/lib/story-links";

type PageProps = { params: { slug: string } };

export default function SetDetailPage({ params }: PageProps) {
  const filmSet = sets.find((s) => s.slug === params.slug);

  if (!filmSet) {
    return (
      <ArchiveNotFound
        indexLabel="Set / world design"
        heading="No set found"
        backHref="/sets"
        backLabel="Back to sets"
      >
        <p>
          There is no environment registered for{" "}
          <span className="text-foreground/80">&ldquo;{params.slug}&rdquo;</span>. The design archive may not
          yet include this volume.
        </p>
      </ArchiveNotFound>
    );
  }

  const sceneLinks = setSceneLinks(filmSet);

  return (
    <ExhibitionLayout
      pageLabel={exhibitionPageLabels.set}
      sidebarAriaLabel="Set design dossier"
      sidebarClassName={exhibitionStickySidebarClassName}
      sidebar={<SetSidebar set={filmSet} sceneLinks={sceneLinks} />}
    >
      <ExhibitionStillPlate
        subjectName={filmSet.name}
        image16x9={filmSet.image16x9}
        image2x1={filmSet.image2x1}
        kicker="Environment"
        caption="Production plate — aspect matches exhibition frame"
        aspectToggleAriaLabel="Set image aspect ratio"
      />
    </ExhibitionLayout>
  );
}

export function generateStaticParams() {
  return sets.map((s) => ({ slug: s.slug }));
}
