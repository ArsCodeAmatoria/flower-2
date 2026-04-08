import type { Metadata } from "next";
import { sets } from "@/data/sets";
import { SetCard } from "@/components/sets/set-card";
import { SITE_DESCRIPTION } from "@/lib/site-metadata";

const setsIndexSet = sets.find((s) => s.slug === "flower-district") ?? sets[0];
const setsOgImage = setsIndexSet.image16x9;

const description =
  "Production design archive — spaces as narrative instruments, light as dramaturgy, and the symbolic load of each built environment. Each dossier is a room in the film’s world: where it lives, what it means, and how it should feel under light.";

export const metadata: Metadata = {
  title: "Sets",
  description,
  openGraph: {
    title: "Sets · Flower",
    description: `${description} ${SITE_DESCRIPTION}`,
    url: "/sets",
    images: [{ url: setsOgImage, alt: `${setsIndexSet.name} — environment still` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sets · Flower",
    description: `${description} ${SITE_DESCRIPTION}`,
    images: [setsOgImage],
  },
};

export default function SetsPage() {
  return (
    <section className="space-y-12 md:space-y-16">
      <header className="max-w-2xl space-y-4">
        <p className="page-label">Index / world design</p>
        <h1 className="title-display">Sets</h1>
        <p className="subtitle">{description}</p>
      </header>

      <ul
        className="grid list-none gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:gap-x-10 lg:gap-y-14"
        aria-label="Set and environment dossiers"
      >
        {sets.map((set, index) => (
          <li key={set.slug} className="min-w-0">
            <SetCard set={set} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
}
