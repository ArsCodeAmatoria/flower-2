import type { Metadata } from "next";
import { songs } from "@/data/songs";
import { LyricsExperience } from "@/components/songs/lyrics-experience";
import { HOME_OG_IMAGE, SITE_DESCRIPTION } from "@/lib/site-metadata";

const description = "Songbook and lyrics — music from the Flower world in reader-friendly layout.";

export const metadata: Metadata = {
  title: "Lyrics",
  description,
  openGraph: {
    title: "Lyrics · Flower",
    description: `${description} ${SITE_DESCRIPTION}`,
    url: "/lyrics",
    images: [{ url: HOME_OG_IMAGE, alt: "Rose — Flower" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyrics · Flower",
    description: `${description} ${SITE_DESCRIPTION}`,
    images: [HOME_OG_IMAGE],
  },
};

export default function LyricsPage() {
  return <LyricsExperience songs={songs} />;
}
