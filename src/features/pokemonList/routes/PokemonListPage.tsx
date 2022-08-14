import { Box, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import { DisplayAllPokemon } from "../components/PokemonList";
import { SearchBar } from "../components/SearchBar";
import { useGetPokemonList } from "../hooks/useGetPokemonList";

export function PokemonList() {
  const [pokemonName, setPokemonName] = useState('')

  const { data, isLoading, isError } = useGetPokemonList(pokemonName)

  if (isLoading) {
    return <CircularProgress data-testid="loading-spinner" />
  }

  if (isError) {
    return <Typography variant="h5">There has been an issue getting the Pokemon</Typography>
  }

  const handleChange = (name: string) => {
    setPokemonName(name)
  }

  return (
    <Box>
      <SearchBar pokemonName={pokemonName} setPokemonName={handleChange} />
      <DisplayAllPokemon pokemon={data} />
    </Box>
  );
}
