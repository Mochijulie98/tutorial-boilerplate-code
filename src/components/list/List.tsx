
import type { Pokemon } from "../../types";
import ListItem from "../listItem/ListItem";
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
              <ListItem pokemon={pokemon} handleClick={handleClick}/>
            )
          })}
        </ul>
    );
};