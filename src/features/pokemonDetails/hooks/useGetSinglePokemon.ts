import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSinglePokemon } from "../api/getSinglePokemon";

export function useGetSinglePokemon() {
  const { id } = useParams();
  return useQuery(["singlePokemon", id], () => getSinglePokemon(`${id}`), {
    enabled: Boolean(id),
    staleTime: Infinity,
  });
}
