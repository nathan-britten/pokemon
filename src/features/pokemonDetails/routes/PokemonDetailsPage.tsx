import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useGetSinglePokemon } from "../hooks/useGetSinglePokemon";
import { PokedexNavigaton } from "../components/PokedexNavigaton";
import { PokemonCard } from "../components/PokemonCard";

export function PokemonDetailsPage() {

  const { data, isLoading } = useGetSinglePokemon()

  if (isLoading) {
  return <CircularProgress data-testid="loading-spinner" />
  }

  if (!data && !isLoading) {
    return <Typography variant="h4" sx={{ maxWidth: 600 }}>Sorry a Pokemon with that ID couldn't be retrieved</Typography>
  }

  return (
    <Box>
      <PokedexNavigaton />
      <PokemonCard />
    </Box>
  );
}