import { ExhibitionLayout, exhibitionPageLabels } from "@/components/layout/exhibition-layout";
import { HomeHero } from "@/components/home/home-hero";
import { ExhibitionNavCards } from "@/components/home/exhibition-nav-cards";
import { ProjectGalleryPanel } from "@/components/home/project-gallery-panel";
import { project } from "@/data/project";

export default function Page() {
  return (
    <ExhibitionLayout
      pageLabel={exhibitionPageLabels.home}
      sidebar={<ProjectGalleryPanel project={project} />}
      sidebarAriaLabel="Project interpretation"
    >
      <HomeHero />
      <ExhibitionNavCards />
    </ExhibitionLayout>
  );
}
