import { sets } from "@/data/sets";
import { SetCard } from "@/components/sets/set-card";

export default function SetsPage() {
  return (
    <section className="space-y-12 md:space-y-16">
      <header className="max-w-2xl space-y-4">
        <p className="page-label">Index / world design</p>
        <h1 className="title-display">Sets</h1>
        <p className="subtitle">
          Production design archive — spaces as narrative instruments, light as dramaturgy, and the
          symbolic load of each built environment.
        </p>
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
