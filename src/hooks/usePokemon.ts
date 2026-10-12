

import { useEffect, useState } from 'react';
import type { Pokemon } from '../types';

export const usePokemon = () => {
    const [data, setData] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch('/pokemon.json');
                if(!response.ok) {
                    throw new Error('Failed to fetch Pokemon data');
                }
                const jsonData = await response.json();

                setData(jsonData);
            }
            catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return {
        data, 
        error,
        loading
    }
}
export default usePokemon;