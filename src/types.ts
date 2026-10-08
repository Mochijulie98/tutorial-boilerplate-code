export type Pokemon = {
  name: {
    english: string;
  };
  id: number;
}

export interface Stat {
	base_stat: number;
	effort: number;
	stat: {
    name: string;
    url: string;
  }
}

export interface SelectedPokemon {
  name: string;
  id: number;
	stats: Stat[];
  sprites: {
    front_default: string;
  }
}
