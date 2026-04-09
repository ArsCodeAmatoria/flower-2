import type { Metadata } from "next";
import { ArchiveScrapbook } from "@/components/archive/archive-scrapbook";
import { getArchiveImages } from "@/lib/archive-images";
import { SITE_DESCRIPTION } from "@/lib/site-metadata";

const description =
  "Visual scrapbook — reference frames, explorations, and design drift from the world of Flower. Thumbnails keep their natural aspect; open any piece for a full view.";

export const metadata: Metadata = {
  title: "Archive",
  description,
  openGraph: {
    title: "Archive · Flower",
    description: `${description} ${SITE_DESCRIPTION}`,
    url: "/archive",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archive · Flower",
    description: `${description} ${SITE_DESCRIPTION}`,
  },
};

export default function ArchivePage() {
  const images = getArchiveImages();

  return (
    <section className="space-y-10 md:space-y-14">
      <header className="max-w-2xl space-y-4">
        <p className="page-label">Index / visual archive</p>
        <h1 className="title-display">Archive</h1>
        <p className="subtitle">{description}</p>
        {images.length > 0 ? (
          <p className="font-sans text-sm text-muted-foreground">
            {images.length} piece{images.length === 1 ? "" : "s"} — numbered in order.
          </p>
        ) : null}
      </header>

      <ArchiveScrapbook images={images} />
    </section>
  );
}
