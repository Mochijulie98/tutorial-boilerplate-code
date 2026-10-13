export type Pokemon = {
  name: {
    english: string;
  };
  id: number;
}

export interface NamedResource {
  name: string;
  url: string;
}

export interface StatEntry {
  base_stat: number;
  effort: number;
  stat: NamedResource;
}

export interface AbilityEntry {
  is_hidden: boolean;
  slot: number;
  ability: NamedResource;
}

export interface PastAbility {
  generation: NamedResource;
  abilities: (Omit<AbilityEntry, "ability"> & { ability: NamedResource | null })[];
}

export interface TypeEntry {
  slot: number;
  type: NamedResource;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  version_group: NamedResource;
  move_learn_method: NamedResource;
  order: number | null;
}

export interface MoveEntry {
  move: NamedResource;
  version_group_details: VersionGroupDetail[];
}

type SpriteKey =
  `${"front" | "back"}_${"default" | "shiny" | "female" | "shiny_female" | "gray" | "gbc" | "transparent" | "transparent_gray" | "shiny_transparent"}`;

type GenerationName =
  | "generation-i" | "generation-ii" | "generation-iii" | "generation-iv" | "generation-v"
  | "generation-vi" | "generation-vii" | "generation-viii" | "generation-ix";

// Sprite URLs are null when a Pokemon has no sprite for that game or view.
export type SpriteSet = Partial<Record<SpriteKey, string | null>> & {
  animated?: SpriteSet;
  icons?: SpriteSet;
  versions?: Partial<Record<GenerationName, Record<string, SpriteSet>>>;
};

export interface Sprites extends SpriteSet {
  // Keys include "home", "showdown", "dream_world" and "official-artwork".
  other?: Record<string, SpriteSet>;
}

export interface SelectedPokemon {
  name: string;
  id: number;
  stats: StatEntry[];
  sprites: {
    front_default: string;
  }
}

export interface PokemonDetails {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: AbilityEntry[];
  past_abilities: PastAbility[];
  forms: NamedResource[];
  location_area_encounters: string;
  moves: MoveEntry[];
  species: NamedResource;
  sprites: Sprites;
  cries: Cries;
  stats: StatEntry[];
  types: TypeEntry[];
  past_types: unknown[];
}
