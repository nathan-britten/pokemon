import { PokemonListItem } from "../types";

export const filterPokemonByName = (
  pokemonList: PokemonListItem[],
  name: string
) => {
  const filteredList = pokemonList.filter((pokemon) =>
    pokemon.name.includes(name)
  );
  return filteredList;
};
