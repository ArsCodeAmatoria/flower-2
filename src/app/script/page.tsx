import { characters } from "@/data/characters";
import { scriptScenes } from "@/data/script";
import { sets } from "@/data/sets";
import { ScriptExperience } from "@/components/script/script-experience";

export default function ScriptPage() {
  return <ScriptExperience scenes={scriptScenes} characters={characters} sets={sets} />;
}
