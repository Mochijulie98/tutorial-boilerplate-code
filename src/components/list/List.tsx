
import type { Pokemon } from "../../types";
import './List.css';

type ListProps = {
    pokemonJSON: Pokemon[];
}; 

export const List = (props: ListProps) => {
    return (
        <ul>
          {props.pokemonJSON.map((pokemon) => {
            return (
              <li className='pokemonCard' key={`${pokemon.id}`}>
                {pokemon.name.english}
              </li>
            )
          })}
        </ul>
    );
};