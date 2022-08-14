import client from "../../../api/client.ts/client.";
import { Pokemon } from "../../../types/pokemon";



export async function getSinglePokemon(
  id: string
): Promise<Pokemon> {
  try {
    const { data } = await client.get(`/pokemon/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
}
