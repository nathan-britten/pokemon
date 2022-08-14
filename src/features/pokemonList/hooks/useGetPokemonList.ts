import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "../api/getPokemonList";
import { filterPokemonByName } from "../utils/filterPokemonByName";

export function useGetPokemonList(pokemonName: string) {
    return useQuery(
        ["pokemonList"],
        () => getPokemonList(pokemonName),
        {
          staleTime: Infinity,
          select: (pokemonList) => filterPokemonByName(pokemonList, pokemonName),
        }
      );
}