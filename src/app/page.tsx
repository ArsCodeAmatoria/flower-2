import type { Metadata } from "next";
import { ExhibitionLayout, exhibitionPageLabels } from "@/components/layout/exhibition-layout";
import { HomeFlowerCreditsPlayer } from "@/components/home/home-flower-credits-player";
import { HomeHero } from "@/components/home/home-hero";
import { ExhibitionNavCards } from "@/components/home/exhibition-nav-cards";
import { ProjectGalleryPanel } from "@/components/home/project-gallery-panel";
import { project } from "@/data/project";
import { HOME_OG_IMAGE, SITE_DESCRIPTION } from "@/lib/site-metadata";

export const metadata: Metadata = {
  title: { absolute: "Flower" },
  openGraph: {
    title: "Flower",
    description: SITE_DESCRIPTION,
    url: "/",
    images: [{ url: HOME_OG_IMAGE, alt: "Rose — Flower" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flower",
    description: SITE_DESCRIPTION,
    images: [HOME_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <ExhibitionLayout
      pageLabel={exhibitionPageLabels.home}
      sidebar={<ProjectGalleryPanel project={project} />}
      sidebarAriaLabel="Project interpretation"
    >
      <HomeHero />
      <ExhibitionNavCards />
      <HomeFlowerCreditsPlayer className="pt-14" />
    </ExhibitionLayout>
  );
}
