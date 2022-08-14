import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PokemonDetailsPage } from "../features/pokemonDetails";
import { NotFound } from "../features/notFound";
import { PokemonList } from "../features/pokemonList";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pokemon" element={<PokemonList />} />
      <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
      <Route path="/" element={<Navigate to="/pokemon" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
