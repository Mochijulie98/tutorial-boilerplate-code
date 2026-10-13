import { useState } from "react"
import type { PokemonDetails } from "../types";

export const usePokemon = () => {
    const [isFetchLoading, setIsLoading] = useState(false);
    const [fetchError, setError] = useState<Error | null>(null);
    const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

    const fetchSelectedPokemon = async (pokemonName: string) => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            if(!response.ok) {
                throw new Error(`HTTP error, status ${response.status}`);
            }
            const jsonData = await response.json();

            setPokemon(jsonData);
        }
        catch (err: unknown){
            setError(err as Error);
        }
        finally{
            setIsLoading(false);
        }
    };

    return {
        pokemon,
        isFetchLoading,
        fetchError,
        fetchSelectedPokemon
    }
}
export default usePokemon;