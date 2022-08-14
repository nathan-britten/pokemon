import client from "../../../api/client.ts/client.";
import { PokemonListItem } from "../types";

export async function getPokemonList(name: string): Promise<PokemonListItem[]> {
  try {
    const { data } = await client.get(`/pokemon/${name}?limit=151`);

    return data.results;
  } catch (err) {
    throw err;
  }
}
