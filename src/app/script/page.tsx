import type { Metadata } from "next";
import { characters } from "@/data/characters";
import { scriptScenes } from "@/data/script";
import { sets } from "@/data/sets";
import { ScriptExperience } from "@/components/script/script-experience";
import { SITE_DESCRIPTION } from "@/lib/site-metadata";

const scriptOgSet = sets.find((s) => s.slug === "flower-high-atrium") ?? sets[0];
const scriptOgImage = scriptOgSet.image16x9;

const description = "The 26-scene spine — read the screenplay in exhibition layout with linked characters and sets.";

export const metadata: Metadata = {
  title: "Script",
  description,
  openGraph: {
    title: "Script · Flower",
    description: `${description} ${SITE_DESCRIPTION}`,
    url: "/script",
    images: [{ url: scriptOgImage, alt: `${scriptOgSet.name} — environment still` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Script · Flower",
    description: `${description} ${SITE_DESCRIPTION}`,
    images: [scriptOgImage],
  },
};

export default function ScriptPage() {
  return <ScriptExperience scenes={scriptScenes} characters={characters} sets={sets} />;
}
