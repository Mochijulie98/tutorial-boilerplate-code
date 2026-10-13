
import type { Pokemon } from "../../types";
import './List.css';

type ListProps = {
    pokemonJSON: Pokemon[],
    handleClick: (pokemonName: Pokemon["name"]["english"]) => void
}; 

export const List = ({pokemonJSON, handleClick}: ListProps) => {
    return (
        <ul>
          {pokemonJSON.map((pokemon) => {
            return (
              <li className='pokemonCard' key={`${pokemon.id}`}>
                <button type='button' onClick={() => handleClick(pokemon.name.english)}>
                  {pokemon.name.english}
                </button>
              </li>
            )
          })}
        </ul>
    );
};