import { songs } from "@/data/songs";
import { LyricsExperience } from "@/components/songs/lyrics-experience";

export default function LyricsPage() {
  return <LyricsExperience songs={songs} />;
}
