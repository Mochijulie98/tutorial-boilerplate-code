import { memo } from "react";
import type { Pokemon } from "../../types";
import "./ListItem.css";

type ListItemProps = {
    pokemon: Pokemon,
    handleClick: (pokemonName: string) => void
}; 

export const ListItem = memo(({pokemon, handleClick}: ListItemProps) => {
    return(
    <li className='pokemonCard' key={`${pokemon.id}`}>
        <button type='button' onClick={() => handleClick(pokemon.name.english)}>
            {pokemon.name.english}
        </button>
    </li>);
})
export default ListItem;