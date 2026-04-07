import type { Metadata } from "next";
import { characters } from "@/data/characters";
import { CharacterCard } from "@/components/characters/character-card";
import { HOME_OG_IMAGE, SITE_DESCRIPTION } from "@/lib/site-metadata";

const description =
  "Portraits and psychological architecture — each dossier traces desire, fracture, and the arc of the film.";

export const metadata: Metadata = {
  title: "Characters",
  description,
  openGraph: {
    title: "Characters · Flower",
    description: `${description} ${SITE_DESCRIPTION}`,
    url: "/characters",
    images: [{ url: HOME_OG_IMAGE, alt: "Rose — Flower" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Characters · Flower",
    description: `${description} ${SITE_DESCRIPTION}`,
    images: [HOME_OG_IMAGE],
  },
};

export default function CharactersPage() {
  return (
    <section className="space-y-12 md:space-y-16">
      <header className="max-w-2xl space-y-4">
        <p className="page-label">Index / dossier</p>
        <h1 className="title-display">Characters</h1>
        <p className="subtitle">
          Portraits and psychological architecture — each dossier traces desire, fracture, and the arc of
          the film.
        </p>
      </header>

      <ul
        className="grid list-none gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:gap-x-10 lg:gap-y-14"
        aria-label="Character dossiers"
      >
        {characters.map((character, index) => (
          <li key={character.slug} className="min-w-0">
            <CharacterCard character={character} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
}
