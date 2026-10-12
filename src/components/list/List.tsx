
import type { Pokemon } from "../../types";
import './List.css';

type ListProps = {
    pokemonJSON: Pokemon[],
    handleClick: (pokemonName: Pokemon["name"]) => void
}; 

export const List = ({pokemonJSON, handleClick}: ListProps) => {
    return (
        <ul>
          {pokemonJSON.map((pokemon) => {
            return (
              <li className='pokemonCard' key={`${pokemon.id}`} onClick={() => handleClick(pokemon.name)}>
                {pokemon.name.english}
              </li>
            )
          })}
        </ul>
    );
};