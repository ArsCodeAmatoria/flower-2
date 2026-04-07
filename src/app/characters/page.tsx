import { characters } from "@/data/characters";
import { CharacterCard } from "@/components/characters/character-card";

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
